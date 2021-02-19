<template>
  <div class="editor-box">
    <div class="editor-box__btns">
      <base-btn @btn-click="slideStateChange">
        {{ !state.isSlide ? "SlideView" : "PreView" }}
      </base-btn>
    </div>
    <div class="editor-box__editor">
      <input-area @update-text="updateText" />
      <div v-if="state.isSlide">
        <slide-area :md-text="state.mdText" />
      </div>
      <div v-else>
        <preview-area :md-text="state.mdText" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseBtn from "../../atoms/BaseBtn/BaseBtn.vue";
import InputArea from "../../molecules/InputArea/InputArea.vue";
import PreviewArea from "../../molecules/PreviewArea/PreviewArea.vue";
import SlideArea from "../../organisms/SlideArea/SlideArea.vue";

type EditorState = {
  mdText: string;
  isSlide: boolean;
};

export default defineComponent({
  name: "EditorBox",
  components: {
    "base-btn": BaseBtn,
    "input-area": InputArea,
    "preview-area": PreviewArea,
    "slide-area": SlideArea
  },
  setup() {
    const state = reactive<EditorState>({
      mdText: "",
      isSlide: false
    });

    const slideStateChange = (): void => {
      state.isSlide = !state.isSlide;
    };

    const updateText = (mdText: string): void => {
      state.isSlide = false;
      state.mdText = mdText;
    };

    return {
      state,
      slideStateChange,
      updateText
    };
  }
});
</script>

<style scoped>
.editor-box {
  width: 90%;
  padding: 0;
  margin: 0 auto;
}

.editor-box__btns {
  display: flex;
  justify-content: flex-end;
  width: 99%;
  margin-right: 0;
}

.editor-box__editor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
</style>
