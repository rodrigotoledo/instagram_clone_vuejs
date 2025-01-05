<template>
  <div class="flex flex-col lg:flex-row lg:h-screen">
    <!-- Top bar -->
    <div class="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-4 py-2">
      <h1 v-if="!isSmallDesktop" class="text-3xl font-bold text-center mb-6">Instagram</h1>
      <input
        type="text"
        placeholder="Search"
        class="bg-gray-100 px-3 py-1 rounded-md text-sm focus:outline-none w-2/3"
      />
      <span class="material-icons text-red-500 cursor-pointer">favorite</span>
    </div>


    <!-- Sidebar -->
    <nav
      class="hidden lg:block w-244 bg-white border-r border-gray-200 h-full p-4"
      :class="{ 'xl:w-20': isSmallDesktop }"
    >
      <ul class="space-y-4">
        <li class="flex items-center space-x-2 xl:justify-center">
          <h1 v-if="!isSmallDesktop" class="text-3xl font-bold text-center mb-6">Instagram</h1>
        </li>
        <li v-for="item in menuItems" :key="item.text">
          <a
            href="#"
            class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100"
          >
            <span class="material-icons">{{ item.icon }}</span>
            <span v-if="!isSmallDesktop">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Followers Section -->

    <div class="w-full bg-white mb-6 flex flex-col">
      <div class="flex items-center justify-center mx-auto relative overflow max-w-470">
        <!-- Botão para rolar à esquerda -->
        <button
          class="absolute left-0 z-10 bg-white text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100 h-10 w-10"
          @click="scrollLeft"
        >
          <span class="material-icons">chevron_left</span>
        </button>

        <!-- Avatares Roláveis -->
        <div class="flex space-x-4 w-max px-4">
          <div
            v-for="user in following"
            :key="user.username"
            class="flex flex-col items-center"
            style="min-width: calc(470px / 8);"
          >
            <img
              :src="user.avatar"
              alt="User Avatar"
              class="w-14 h-14 rounded-full border-2 border-gray-300"
            />
            <span class="text-sm text-gray-500 mt-2">{{ user.username }}</span>
          </div>
        </div>

        <!-- Botão para rolar à direita -->
        <button
          class="absolute right-0 z-10 bg-white text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100 h-10 w-10"
          @click="scrollRight"
        >
          <span class="material-icons">chevron_right</span>
        </button>
      </div>


    <!-- Center Column -->
    <main class="flex-1 p-4 mx-auto pt-16 lg:pt-4 max-w-[470px]">
      <div class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border border-gray-200 rounded-lg bg-white"
        >
          <div class="flex items-center p-4">
            <img :src="post.userAvatar" alt="User Avatar" class="w-10 h-10 rounded-full" />
            <div class="ml-3">
              <p class="font-medium">{{ post.username }}</p>
              <p class="text-sm text-gray-500">{{ post.location }}</p>
            </div>
          </div>
          <img :src="post.image" alt="Post Image" class="w-full h-auto" />
          <div class="p-4 space-y-2">
            <div class="flex items-center space-x-4">
              <span class="material-icons cursor-pointer">favorite_border</span>
              <span class="material-icons cursor-pointer">chat_bubble_outline</span>
              <span class="material-icons cursor-pointer">send</span>
            </div>
            <p class="text-sm">
              <span class="font-bold">{{ post.username }}</span> {{ post.caption }}
            </p>
          </div>
        </div>
      </div>
    </main>
    </div>

    <!-- Right Sidebar -->
    <aside class="hidden lg:block w-304 bg-white h-full p-4">
      <div class="flex items-center space-x-4">
        <img src="https://avatars.githubusercontent.com/u/97165289" alt="Your Avatar" class="w-12 h-12 rounded-full" />
        <div>
          <p class="font-bold">{{ user.username }}</p>
          <p class="text-sm text-gray-500">{{ user.name }}</p>
        </div>
      </div>
      <div class="mt-6">
        <p class="font-medium text-gray-500">Suggestions for you</p>
        <div class="mt-4 space-y-4">
          <div
            v-for="suggestion in suggestions"
            :key="suggestion.username"
            class="flex items-center space-x-4"
          >
            <img
              :src="suggestion.avatar"
              alt="User Avatar"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex-1">
              <p class="font-medium text-sm">{{ suggestion.username }}</p>
              <p class="text-xs text-gray-500">Suggested for you</p>
            </div>
            <button class="text-blue-500 text-sm font-medium">Follow</button>
          </div>
        </div>
      </div>
    </aside>

    <!-- Bottom Navigation for Smaller Screens -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <ul class="flex justify-around py-2">
        <li v-for="item in menuItems" :key="item.text">
          <a href="#" class="flex flex-col items-center text-gray-600">
            <span class="material-icons">{{ item.icon }}</span>
            <span class="text-xs">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "your_username",
        name: "Your Name",
      },
      menuItems: [
        { icon: "home", text: "Home" },
        { icon: "search", text: "Search" },
        { icon: "explore", text: "Explore" },
        { icon: "favorite", text: "Notifications" },
        { icon: "person", text: "Profile" },
      ],
      posts: [
        {
          id: 1,
          userAvatar: "https://avatars.githubusercontent.com/u/97165289",
          username: "user1",
          location: "Location 1",
          image: "http://loremflickr.com/640/480/sports",
          caption: "Caption text for post 1...",
        },
        {
          id: 2,
          userAvatar: "https://avatars.githubusercontent.com/u/97165289",
          username: "user2",
          location: "Location 2",
          image: "http://loremflickr.com/640/480/sports",
          caption: "Caption text for post 2...",
        },
      ],
      suggestions: [
        {
          username: "suggestion1",
          avatar: "https://avatars.githubusercontent.com/u/97165289",
        },
        {
          username: "suggestion2",
          avatar: "https://avatars.githubusercontent.com/u/97165289",
        },
      ],
      following: [
        { username: "user1", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user2", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user3", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user4", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user5", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user6", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user7", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user8", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user9", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user10", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user11", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user12", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user13", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user14", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user15", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user16", avatar: "https://avatars.githubusercontent.com/u/97165289" },
        { username: "user17", avatar: "https://avatars.githubusercontent.com/u/97165289" },
      ],
      isSmallDesktop: false
    };
  },
  mounted() {
    this.updateResponsiveState();
    window.addEventListener("resize", this.updateResponsiveState);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateResponsiveState);
  },
  methods: {
    updateResponsiveState() {
      this.isSmallDesktop = window.innerWidth <= 1280;
    },
  },
};
</script>

<style scoped>
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
