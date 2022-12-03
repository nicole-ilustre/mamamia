<template>
  <v-row>
    <v-col class="text-center">
      <v-text-field
        v-model="textInput"
        label="Text Input"
        outlined
      ></v-text-field>
      <v-btn elevation="2" @click="sendTextInput">Submit</v-btn>
      <v-btn elevation="2" @click="getTextInput">Get Text</v-btn>
      <p>Input text: {{ textInput }}</p>
    </v-col>
  </v-row>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
const axios = require("axios").default;

const firebaseConfig = {
  apiKey: "AIzaSyAZ3dLsamyirhNmuJZWaeuDXCWw9l-Tj0g",
  authDomain: "mamamia-1abd9.firebaseapp.com",
  projectId: "mamamia-1abd9",
  storageBucket: "mamamia-1abd9.appspot.com",
  messagingSenderId: "813276695958",
  appId: "1:813276695958:web:0f5447f2e787bd82c221b7",
  measurementId: "G-P1TVX9LPC0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    async sendTextInput() {
      axios.post("https://mamamia-1abd9.firebaseio.com/fireblog/users.json", {
        textInput: this.textInput,
      });
    },
    async getTextInput() {
      axios
        .get("https://mamamia-1abd9.firebaseio.com/fireblog/users.json")
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
