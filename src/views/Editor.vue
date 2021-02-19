<template>
  <div>
    <editor-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditorBox from "@/components/organisms/EditorBox/EditorBox.vue";

export default defineComponent({
  name: "Slide",
  components: {
    "editor-box": EditorBox
  }
});
</script>
