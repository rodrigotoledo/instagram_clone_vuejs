<template>
  <div class="flex items-center flex-col justify-center min-h-screen relative bg-gray-50">
    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row items-center lg:space-x-16">
      <!-- Left Column with Images -->
      <div class="image-container relative hidden lg:block">
        <img
          src="@/assets/images/screenshot1.png"
          alt="Static Screenshot"
          class="animate-fade image-1"
        />
        <img
          src="@/assets/images/screenshot2.png"
          alt="Dynamic Screenshot 1"
          class="animate-fade image-2"
        />
        <img
          src="@/assets/images/screenshot3.png"
          alt="Dynamic Screenshot 2"
          class="animate-fade image-3"
        />
        <img
          src="@/assets/images/screenshot4.png"
          alt="Dynamic Screenshot 3"
          class="animate-fade image-4"
        />
      </div>

      <!-- Right Column with Form -->
      <div class="border border-gray-200 p-6 shadow-md w-96 bg-white">
        <h1 class="text-3xl font-bold text-center mb-6">Instagram</h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input
              type="text"
              v-model="username"
              placeholder="Username or email"
              class="bg-gray-100 w-full px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="bg-gray-100 w-full px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-400 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>
        <div class="text-center mt-4">
          <a href="#" class="text-sm text-blue-900 font-medium hover:underline">Forgot password?</a>
        </div>
        <div class="mt-6 text-center">
          <p class="text-sm text-black">
            Don't have an account?
            <a href="#" class="text-blue-900 font-medium hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="w-full text-center py-6 text-sm text-gray-500 absolute bottom-0">
      <div class="flex justify-center space-x-4">
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Help</a>
        <a href="#" class="hover:underline">Privacy</a>
        <a href="#" class="hover:underline">Terms</a>
        <a href="#" class="hover:underline">Contact</a>
      </div>
      <p class="mt-2">&copy; 2024 Instagram Clone</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // Implement your login logic here
    },
  },
};
</script>

<style scoped>
.image-container {
  width: 465px;
  height: 635px;
  background-image: url('@/assets/images/home-phones.png');
  background-size: cover;
  background-position: center;
  position: relative;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.animate-fade {
  animation: fade 24s infinite;
  position: absolute;
  top: 22px;
  right: 60px;
  width: 250px;
  height: 541px;
  object-fit: cover;
}
.image-1 {
  animation-delay: 0s;
}
.image-2 {
  animation-delay: 4s;
}
.image-3 {
  animation-delay: 8s;
}
.image-4 {
  animation-delay: 12s;
}
</style>
