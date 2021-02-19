<template>
  <div>
    <base-text>Preview</base-text>
    <div class="preview-area preview-area--expand">
      <div class="markdown-body" v-html="markedValue"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import BaseText from "../../atoms/BaseText/BaseText.vue";
import { md } from "@/plugins/MarkdownIt.ts";
import "github-markdown-css";

export default defineComponent({
  name: "PreviewArea",
  components: {
    "base-text": BaseText
  },
  props: {
    mdText: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const markedValue = computed(() => md.render(props.mdText));
    return {
      props,
      markedValue
    };
  }
});
</script>

<style scoped>
.preview-area {
  width: 45vw;
  height: 470px;
  margin: 1px;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid gray;
}

.markdown-body {
  width: 95%;
  margin: 0 auto;
  text-align: left;
}
</style>
