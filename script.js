Vue.component('task-component', {
  props: ["taskname", "date", "genre", "index"],
  template: `
      <div class="taskarea">
        <div :class="{ 'completed': isCompleted}">
          ジャンル：{{ genre }}
          <br>タスク：{{ taskname }}
          <br>投稿日時：{{ date }}
        </div>
        <br><button v-on:click="deleteTask(Number(index))">削除</button>
        <button v-on:click="isCompleted=true">完了</button>
        <button v-on:click="isCompleted=false">完了取消</button>
      </div>`,
  // dataオプションを以下に記述してください
  data: function () {
    return {
      isCompleted: false
    }
  },
  methods: {
    deleteTask: function (index) {
      this.$root.taskList.splice(index, 1);
    },
  }
})

new Vue({
  el: "#app",
  data: {
    genres: ["事務作業", "会議", "商談"],
    task: "",
    selectedGenre: "",
    taskList: []
  },
  computed: {
    isBlank: function () {
      return this.task === "" || this.selectedGenre === ""
    }
  },
  methods: {
    addTask: function () {
      const day = new Date();
      this.taskList.push({
        "taskname": this.task,
        "genre": this.selectedGenre,
        "date": day.toLocaleString('ja-JP')
      });
      this.task = "";
    }
  }
})