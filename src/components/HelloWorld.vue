<!--
 * @Author: Aiden(戴林波)
 * @Date: 2022-06-29 17:47:58
 * @LastEditTime: 2022-07-01 09:32:29
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
-->
<script setup>
import { ref, reactive } from "vue";
import CcmForm from 'ccmUI/src/components/form/Form.vue'
import CcmFormItem from 'ccmUI/src/components/form/FormItem.vue'
import CcmInput from 'ccmUI/src/components/form/Input.vue'

// 表单
const model = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
});

// 获取表单实例
const myForm = ref(null);
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model);
    } else {
      alert("请正确填写表单！");
    }
  });
};

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <ccm-form ref="myForm" :model="model" :rules="rules">
    <ccm-form-item label="用户名：" prop="username">
      <ccm-input v-model="model.username" />
    </ccm-form-item>
    <ccm-form-item label="密码：" prop="password">
      <ccm-input v-model="model.password" type="password" />
    </ccm-form-item>
    <br />
    <ccm-form-item>
      <ccm-button type="primary" @click="login"> 登 录 </ccm-button>
    </ccm-form-item>
  </ccm-form>

  <!-- <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
