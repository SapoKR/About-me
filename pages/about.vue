<template>
  <div
    class="h-screen flex items-center justify-center"
    v-html="AboutText"
  ></div>
</template>

<script lang="ts" setup>
interface AboutData {
  readonly card_bg: Array<string>;
  readonly name: string;
  readonly profile: string;
  readonly role_description: string;
  readonly information: string;
  readonly links: object;
}

interface IconData {
  readonly width: number | string;
  readonly height: number | string;
  readonly viewBox: string;
  readonly svg: string;
  readonly callby: string;
}

const { data } = await useFetch<Array<AboutData>>("/data/abouts.json", {
  server: false,
});

const { data: icondata } = await useFetch<Array<IconData>>("/data/icons.json", {
  server: false,
});

let AboutText = ref("Hoi");

async function RenderAbout() {
  return data
    .value!.map(
      (data: AboutData) => `<div class="card w-96 shadow-xl mx-2">
      <figure class="py-4 bg-gradient-to-b ${data.card_bg.join(" ")}">
        <img src="${data.profile}" alt="${data.name}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${data.name}</h2>
        <h5 class="text-xs">${data.role_description}</h5>
        <p>${data.information}</p>
        <div class="card-actions justify-end">
          <div>
            <div class="grid grid-flow-col gap-4">
            ${Object.entries(data.links)
              .map((entry) => {
                const [key, value] = entry;
                const icon = icondata.value!.filter(
                  (item) => item.callby == key
                )[0];
                return `<a href="${value}"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="${icon!.width}"
                  height="${icon!.height}"
                  viewBox="${icon!.viewBox}"
                  class="fill-current"
                >
                  <path d="${icon!.svg}"></path>
                </svg>
              </a>`;
              })
              .join("\n")}
              </div>
          </div>
        </div>
      </div>
    </div>`
    )
    .join("\n");
}

AboutText.value = await RenderAbout();
</script>

<style lang="scss" scoped></style>