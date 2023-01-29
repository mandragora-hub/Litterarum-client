<script setup lang="ts">
// const props = defineProps<{
//   value: number
// }>()
</script>
<template>
  <div aria-label="breadcrumb" class="w-max">
    <ol class="flex w-full flex-wrap items-center rounded-md py-2 px-4">
      <li
        class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500"
      >
        <a class="opacity-60" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
        </a>
        <span
          class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"
        >
          /
        </span>
      </li>
      <li
        class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500"
      >
        <a class="opacity-60" href="#">
          <span>Components</span>
        </a>
        <span
          class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"
        >
          /
        </span>
      </li>
      <li
        class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500"
      >
        <a
          class="font-medium text-blue-gray-900 transition-colors hover:text-pink-500"
          href="#"
        >
          Breadcrumbs
        </a>
      </li>
    </ol>
  </div>
</template>
