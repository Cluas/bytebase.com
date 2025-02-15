<template>
  <div class="overflow-hidden">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <section class="bg-white overflow-hidden">
      <div class="relative max-w-5xl mx-auto pt-24 px-12">
        <div class="relative lg:flex lg:items-center">
          <div class="relative lg:ml-10">
            <svg
              class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                stroke-width="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote class="relative">
              <div class="text-3xl leading-9 font-medium text-gray-900">
                <p>
                  We value crafts and we care what you have built in the past
                  instead of where you have worked and studied.
                  <NuxtLink
                    to="/about#team"
                    class="text-blue-600"
                    style="
                      box-shadow: rgb(255, 255, 255) 0px -0.166667em 0px 0px inset,
                        rgb(186, 230, 253) 0px -0.333333em 0px 0px inset;
                    "
                    @click.native="track('about.job')"
                  >
                    Our team
                  </NuxtLink>
                  have built products managing one of the world largest database
                  fleets, supporting one of the largest developer organizations.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="~/assets/illustration/offer.webp" alt="" />
        </div>
      </div>
    </section>

    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-5xl mx-auto">
        <h1>
          <span
            class="block text-2xl text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >How we build</span
          >
        </h1>
        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-pink-700"
          >Deliver experience</span
        >
        <p class="mt-4 text-xl text-gray-500 leading-8">
          "Don't deliver a product, deliver an experience." - Anonymous
        </p>
        <p class="mt-4 text-xl text-gray-800 leading-8">
          Like visiting Disneyland or a local Apple store, we want our product
          to deliver a pleasant experience. Dealing with database is already a
          stressful task, we try to make our tool to feel handy and never get in
          the way of people doing their job.
        </p>
        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600"
          >Be pragmatic</span
        >

        <p class="mt-4 text-xl text-gray-500 leading-8">
          "Real artists ship." - Steve Jobs
        </p>
        <p class="mt-4 text-xl text-gray-800 leading-8">
          In order to deliver the ultimate database ops platform, we have to
          ship relentlessly. That doesn't mean we will cut corners to downgrade
          the experience, but as a professional tool, we believe experience
          depends more on usability than esthetic. We will spend more time to
          improve speed than perfecting the pixel, we will follow conventional
          patterns instead of inventing our own.
        </p>
        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-700"
          >Stay curious</span
        >
        <p class="mt-4 text-xl text-gray-500 leading-8">
          "Living things tend to change unrecognizably as they grow. Who would
          deduce the dragonfly from the larva, the iris from the bud, the lawyer
          from the infant? Flora or fauna, we are all shapeshifters and magical
          reinventors. Life is really a plural noun, a caravan of selves." -
          Diane Ackerman
        </p>
        <p class="mt-4 text-xl text-gray-800 leading-8">
          The database industry is still dominated by the relational model
          introduced in 1970. On the other hand, the productivity and dev tools
          landscape is experiencing a paradigm shift, tools are aggressively
          embracing web-based technology, which unleashes many new possibilties.
          We are always on the lookout for novel interaction patterns from our
          productivity and dev tools peers and see if any can be applied to the
          database tooling.
        </p>
      </div>
    </div>

    <div class="mt-16 relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-5xl mx-auto">
        <h1>
          <span
            class="block text-2xl text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >What we offer</span
          >
        </h1>
        <span
          class="mt-8 block text-3xl text-center leading-8 tracking-tight text-gray-900"
          >Top salary and equity on the market</span
        >
        <span
          class="mt-4 block text-3xl text-center leading-8 tracking-tight text-gray-900"
          >Work remotely (Beijing timezone GMT+8)</span
        >
        <span
          class="mt-4 block text-3xl text-center leading-8 tracking-tight text-gray-900"
          >Stipend to set up your home office</span
        >
        <span
          class="mt-4 block text-3xl text-center leading-8 tracking-tight text-gray-900"
          >3 weeks paid vacation</span
        >
        <span
          class="mt-4 block text-3xl text-center leading-8 tracking-tight text-gray-900"
          >An elite team</span
        >
      </div>
    </div>

    <div class="mt-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <a
            id="jobs"
            href="#jobs"
            class="block text-2xl text-center text-indigo-600 font-semibold tracking-wide uppercase hover:underline"
            >Jobs</a
          >
        </h1>
        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >Backend Engineer (China)</span
        >
        <p class="mt-8 text-xl text-gray-500 leading-8">
          Our frontend uses Vue + Vite + TypeScript + Tailwind CSS, and our
          backend uses Golang + SQLite. As a backend engineer, you will work
          with the frontend team to craft the industry-leading database tool.
          Some of the problems you will be working on:
        </p>
        <div class="prose prose-xl">
          <ul>
            <li>Build the state-of-the-art SQL query advisor.</li>
            <li>
              Advanced schema change engine for supporting complex scenarios
              like online DDL, customer multitenancy.
            </li>
            <li>
              Easy-to-use comprehensive backup and restore solution for
              supported database types.
            </li>
            <li>
              Build up the
              <a
                href="https://github.com/bytebase/bytebase/tree/main/plugin"
                target="__blank"
                >plugin architecture</a
              >
              to gradually evolve the product into a platform.
            </li>
          </ul>
        </div>

        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >Frontend Engineer (China)</span
        >
        <p class="mt-8 text-xl text-gray-500 leading-8">
          Our frontend uses Vue + Vite + TypeScript + Tailwind CSS, and our
          backend uses Golang + SQLite. You will work with the backend and
          product team to craft the industry-leading database tool. Some of the
          problems you will be working on:
        </p>
        <div class="prose prose-xl">
          <ul>
            <li>
              Evolve the frontend architecture and define the boundary and
              interface with the backend.
            </li>
            <li>Build the industry best vue-based SQL console and editor.</li>
            <li>
              Maintain and improve our vue-based UI component library
              <a
                href="https://github.com/bytebase/bytebase/tree/main/frontend/src/bbkit"
                target="__blank"
                >bbkit</a
              >.
            </li>
            <li>Generate UI console based on database schema.</li>
          </ul>
        </div>

        <span
          class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >Engineering Intern (Shanghai Office)</span
        >
        <p class="mt-8 text-xl text-gray-500 leading-8">
          We are hiring intern all year long. However we have limited spot
          because we need to make sure we can allocate enough resource to mentor
          each intern. If you are interested, please contact us from the bottom
          button to check the availability. We will offer the top-tier
          internship compensation, but more importantly, you will likely receive
          one of the most comprehensive engineering training in the country.
        </p>

        <p class="mt-8 text-xl text-gray-500 leading-8">
          <span class="text-red-600">*</span> We require intern to commit at
          least 3 days a week and work from our Shanghai office.
        </p>

        <h1>
          <a
            id="quality"
            href="#quality"
            class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 hover:underline"
            >What we are looking for</a
          >
        </h1>
        <ul class="mt-6 space-y-4">
          <li class="flex items-center space-x-3">
            <!-- Heroicon name: solid/check -->
            <svg
              class="flex-shrink-0 h-8 w-8 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl text-gray-800"
              >Solid computer science background and frontend development
              experience</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Heroicon name: solid/check -->
            <svg
              class="flex-shrink-0 h-8 w-8 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl text-gray-800"
              >Read and written English skills (verbal skill is desired but not
              required)</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Heroicon name: solid/check -->
            <svg
              class="flex-shrink-0 h-8 w-8 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl text-gray-800">Write readable code</span>
          </li>
          <li class="flex items-center space-x-3">
            <!-- Heroicon name: solid/check -->
            <svg
              class="flex-shrink-0 h-8 w-8 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl text-gray-800">Product aptitude</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 h-8 w-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
            <span class="text-xl text-gray-800">Full stack experience</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 h-8 w-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
            <span class="text-xl text-gray-800">Attention to detail</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 h-8 w-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
            <span class="text-xl text-gray-800">Curiosity</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 h-8 w-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              ></path>
            </svg>
            <span class="text-xl text-gray-800"
              >Play video games or board games</span
            >
          </li>
        </ul>
        <h1>
          <a
            id="interview"
            href="#interview"
            class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 hover:underline"
            >Interview process</a
          >
        </h1>
        <p class="mt-2 text-center text-xl text-gray-500 leading-8">
          Most likely, all interviews will be conducted online
        </p>
        <ul class="mt-6 space-y-4">
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 0: Let
              <a
                href="mailto:hr@bytebase.com?subject=Hi, I am interested in Bytebase position&body=Hello Bytebase,%0D%0A%0D%0A"
                target="_blank"
                class="text-indigo-600 underline"
                >us</a
              >
              know you're interested.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800">Step 1: Resume screen.</span>
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 2: 15 ~ 30 minuntes introduction chat.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 3: Pick one of our
              <a
                href="https://github.com/bytebase/interview"
                target="_blank"
                class="text-indigo-600 underline"
              >
                open sourced take-home assignments</a
              >
              and finish in a week.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 4: 1 hour technical interview, we will discuss the take-home
              assignment as well as other topics.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 5: Another 1 hour technical interview.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800"
              >Step 6: Technical writing assignment.</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <span class="text-xl text-gray-800">Step 7: Offer.</span>
          </li>
        </ul>
        <div class="flex pt-8 pb-4 justify-center">
          <a
            href="mailto:hr@bytebase.com?subject=Hi, I am interested in Bytebase position&body=Hello Bytebase,%0D%0A%0D%0A"
            target="_blank"
            class="w-46 flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-2xl md:px-8"
          >
            I am interested
            <svg
              class="ml-2 w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default defineComponent({
  setup() {
    const track = (name: string) => {
      trackEvent(name);
    };

    return { track };
  },
  head: {
    title: "Jobs",
    meta: [
      {
        hid: "jobs",
        name: "jobs",
        content: "Currently open positions in Bytebase",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `https://raw.githubusercontent.com/bytebase/bytebase/main/docs/assets/illustration/main.webp`,
      },
    ],
  },
});
</script>
