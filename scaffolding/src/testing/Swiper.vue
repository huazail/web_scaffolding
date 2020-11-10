<template>
  <div>
    <div class="swipe">
      <mt-swipe :auto="5000" :show-indicators="false">
        <mt-swipe-item><img src="../assets/common/016d5803e5e24ac9a85d1815a539ce3c.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/common/5de997f36d444855b7df2064c7be9c57.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/common/a1be5415daf14d918d94d8925df510ef.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/common/bcd88e21673b4e59b81f78e636ebbffd.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style scoped>
.swipe{
  height:345px;
}
</style>