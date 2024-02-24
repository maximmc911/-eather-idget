<script setup lang="ts">
import axios from "axios";
import { townCatalog } from "./widget/data";
import type { dtWeather } from "./widget/interface";

// constants

const first = ref(false);
const datas = new Date();
const selectedUser = ref({ town: `Moscow`, townRus: `Москва` });
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const card = ref<number>(0);
const dataWeather = reactive<dtWeather[]>([]);
// function
const PutWeather = async () => {
  loading.value = true;
  const times = new Date();
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedUser.value.town},ru&lang=ru&units=metric&APPID=fcd40524d3e72eaa71d1b2abff666c09`
    );

    dataWeather.push({
      id: 0,
      time: `Сегодня`,
      temp: data.main.temp,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      precipitation: data.weather[0].description,
      cloudy: data.clouds.all,
      image:
        `https://openweathermap.org/img/wn/` + data.weather[0].icon + `@2x.png`,
      isActive: true,
      dayTime: times.toDateString(times.setDate(times.getDate())).slice(0, 11),
    });

    if (data.cod === 200) {
      let time = data.dt + 86400;
      const data1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedUser.value.town},ru&lang=ru&dt=${time}&units=metric&APPID=fcd40524d3e72eaa71d1b2abff666c09`
      );
      dataWeather.push({
        id: 1,
        time: `Завтра`,
        temp: data1.data.main.temp,
        minTemp: data1.data.main.temp_min,
        maxTemp: data1.data.main.temp_max,
        windSpeed: data1.data.wind.speed,
        humidity: data1.data.main.humidity,
        precipitation: data1.data.weather[0].description,
        cloudy: data1.data.clouds.all,
        image:
          `https://openweathermap.org/img/wn/` +
          data1.data.weather[0].icon +
          `@2x.png`,
        isActive: false,
        dayTime: times
          .toDateString(times.setDate(times.getDate() + 1))
          .slice(0, 11),
      });
    }
    if (data.cod === 200) {
      let time = data.dt + 86400 * 2;
      const data1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedUser.value.town},ru&lang=ru&dt=${time}&units=metric&APPID=fcd40524d3e72eaa71d1b2abff666c09`
      );
      dataWeather.push({
        id: 2,
        time: `Послезавтра`,
        temp: data1.data.main.temp,
        minTemp: data1.data.main.temp_min,
        maxTemp: data1.data.main.temp_max,
        windSpeed: data1.data.wind.speed,
        humidity: data1.data.main.humidity,
        precipitation: data1.data.weather[0].description,
        cloudy: data1.data.clouds.all,
        image:
          `https://openweathermap.org/img/wn/` +
          data1.data.weather[0].icon +
          `@2x.png`,
        isActive: false,
        dayTime: times
          .toDateString(times.setDate(times.getDate() + 1))
          .slice(0, 11),
      });
    }
    if (data.cod === 200) {
      let time = data.dt + 86400 * 3;
      const data1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedUser.value.town},ru&lang=ru&dt=${time}&units=metric&APPID=fcd40524d3e72eaa71d1b2abff666c09`
      );
      dataWeather.push({
        id: 3,
        time: `------------`,
        temp: data1.data.main.temp,
        minTemp: data1.data.main.temp_min,
        maxTemp: data1.data.main.temp_max,
        windSpeed: data1.data.wind.speed,
        humidity: data1.data.main.humidity,
        precipitation: data1.data.weather[0].description,
        cloudy: data1.data.clouds.all,
        image:
          `https://openweathermap.org/img/wn/` +
          data1.data.weather[0].icon +
          `@2x.png`,
        isActive: false,
        dayTime: times
          .toDateString(times.setDate(times.getDate() + 1))
          .slice(0, 11),
      });
    }

    first.value = true;
    loading.value = false;
  } catch (err) {
    console.log(`Ошибка`);
    loading.value = false;
    error.value = true;
  }
};
PutWeather();
const HandleChoice = (): void => {
  console.log(`btn work`);
  dataWeather.length = 0;
  loading.value = true;
  PutWeather();
};
const HandleChoiceCard = (index: number): void => {
  for (const iterator of dataWeather) {
    if (iterator.isActive == true) {
      iterator.isActive = false;
    }
  }
  dataWeather[index].isActive = true;
  card.value = index;
};

</script>
<template>
  <div class="p-2 rounded-lg shadow-xl bg-blue-100 w-1/2 p-2" v-if=" dataWeather.length !== 0">
    <h1 class="text-2xl text-left p-2">
      Прогноз погоды на сегодня и ближайшие три дня
    </h1>
    <div class="flex justify-between p-5 flex-wrap">
      <h1 class="text-xl text-left p-2">
        Ваш город: <br />
        <span class="pt-3 font-semibold"> {{ selectedUser.townRus }} </span>
      </h1>

      <div class="flex flex-col gap-2">
        <select v-model="selectedUser" class="w-48 p-2 bg-blue-200 rounded-xl">
          <option
            v-for="(town, index) in townCatalog"
            :key="index"
            :value="town"
          >
            <span>
              {{ town.townRus }}
            </span>
          </option>
        </select>
        <button class="rounded-xl p-1 bg-blue-500" @click="HandleChoice">
          Изменить
        </button>
      </div>
    </div>

    <LayoutsWidgetMainCard :prop="dataWeather" :control="card" />
    <div class="  " v-if="first">
      <div class="pt-10 flex justify-center flex-wrap gap-10 pb-5">
        <div
          v-for="(cards, index) in dataWeather"
          :key="index"
          @click="HandleChoiceCard(index)"
        >
          <LazyLayoutsWidgetSmallCard :prop="cards" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="dataWeather.length == 0">

    <LayoutsWidgetLoading :prop="loading"/>
  </div>
  <div class="" v-if="error">
    <LayoutsWidgetModal/>
  </div>
</template>
