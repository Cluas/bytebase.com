export enum RuleLevel {
  Disabled = "disabled",
  Error = "error",
  Warning = "warning",
}

export const levels = [
  { id: RuleLevel.Error, name: "Error" },
  { id: RuleLevel.Warning, name: "Warning" },
  { id: RuleLevel.Disabled, name: "Disabled" },
];

export enum PayloadType {
  String = "string",
  StringArray = "string[]",
  Template = "template",
}

interface StringPayload {
  type: PayloadType.String;
  default: string;
  value?: string;
}

interface StringArrayPayload {
  type: PayloadType.StringArray;
  default: string[];
  value?: string[];
}

interface TemplatePayload {
  type: PayloadType.Template;
  default: string;
  templates: { id: string; tip?: string; }[];
  value?: string;
}

export interface RulePayload {
  [key: string]: StringPayload | StringArrayPayload | TemplatePayload;
}

export interface Rule {
  id: string;
  category: string;
  description: string;
  payload?: RulePayload;
}

export interface SelectedRule extends Rule {
  level: RuleLevel;
}

export interface RuleCategory {
  id: string;
  title: string;
  rules: SelectedRule[];
}

export type EngineType = "mysql";

export interface Engine {
  id: EngineType;
  name: string;
}

export interface GuidelineTemplate {
  id: string;
  engine: Engine;
  rules: SelectedRule[];
}

const mysql: Engine = {
  id: "mysql",
  name: "MySQL",
};

const rules: Rule[] = [
  {
    id: "engine.mysql.use-innodb",
    category: "database",
    description: "Require InnoDB as the storage engine.",
  },
  {
    id: "table.require-pk",
    category: "table",
    description: "Force to require a primary key for each table",
  },
  {
    id: "naming.table",
    category: "naming",
    description:
      "Limit the table name format. The default convention is snake_lower_case",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "naming.column",
    category: "naming",
    description:
      "Limit the column name format. The default convention is snake_lower_case",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "naming.index",
    category: "naming",
    description: "Limit the index name format",
    payload: {
      pk: {
        type: PayloadType.Template,
        default: "^pk_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
      uk: {
        type: PayloadType.Template,
        default: "^uk_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
      idx: {
        type: PayloadType.Template,
        default: "^idx_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
    },
  },
  {
    id: "column.required",
    category: "column",
    description: "Define the required columns in each table",
    payload: {
      columns: {
        type: PayloadType.StringArray,
        default: ["id", "created_ts", "updated_ts", "creator_id", "updater_id"],
      },
    },
  },
  {
    id: "column.no-null",
    category: "column",
    description: "Columns cannot allow null value",
  },
  {
    id: "query.select.no-select-all",
    category: "query",
    description: "Not allow 'SELECT *'",
  },
  {
    id: "query.where.require",
    category: "query",
    description: "Query must contains 'WHERE' limit",
  },
  {
    id: "query.where.no-leading-wildcard-like",
    category: "query",
    description: "Not allow '%x' in LIKE",
  },
];

export const guidelineTemplates: GuidelineTemplate[] = [
  {
    id: "MySQL-Prod",
    engine: mysql,
    rules: rules.map(r => ({ ...r, level: RuleLevel.Error })),
  },
  {
    id: "MySQL-Dev",
    engine: mysql,
    rules: [
      "table.require-pk",
      "naming.table",
      "naming.column",
      "naming.index",
      "column.required",
      "column.no-null",
    ].reduce((res, id) => {
      const rule = rules.find((r) => r.id === id);
      if (!rule) {
        return res;
      }
      res.push({
        ...rule,
        level: RuleLevel.Warning,
      });
      return res;
    }, [] as SelectedRule[]),
  }
];
