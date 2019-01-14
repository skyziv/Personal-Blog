<template>
  <div class="home">
    <Card :bordered="true" class="card">
      <h1 slot="title">Isaac‘s blog</h1>
      <h3>這是一個不看會後悔ㄧ生的blog</h3>
    </Card>
    <div class="demo-split">
      <Split v-model="split1">
        <!-- 左邊  -->
        <div slot="left" class="demo-split-pane">
          <Timeline>
            <TimelineItem>
              <p class="time">1989年</p>
              <p class="content">第一個blog產生</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">1994年</p>
              <p class="content">達成連續30天寫blog</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2000年</p>
              <p class="content">受邀專欄作家</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2010年</p>
              <p class="content">出版第一本書</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2019年1月</p>
              <p class="content">粉絲十萬人達成</p>
            </TimelineItem>
          </Timeline>
        </div>

        <!-- 右邊  -->
        <div slot="right" class="demo-split-pane">
          <h1>讀者分佈圖</h1>
          <div style="height: 100px;">
            <Divider>以性別區分</Divider>
            <span>男性</span>
            <Progress :percent="40" hide-info />
            <span>女性</span>
            <Progress :percent="60" hide-info />
            <Divider>以年齡區分</Divider>
            <span>銀髮族</span>
            <Progress :percent="30" hide-info />
            <span>青少年</span>
            <Progress :percent="70" hide-info />
          </div>

        </div>
      </Split>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        split1: 0.5
      }
    },
  }

</script>
<style scoped>
  .demo-split {
    height: 600px;
    border: 1px solid #dcdee2;
    font-size: 1.2em;

  }

  .demo-split-pane {
    padding: 10px;
    margin-left: 20%;

  }

  .time {
    font-size: 18px;
    font-weight: bold;
  }

  .content {
    padding-left: 5px;
    font-size: 16px;
  }
  .card{
     margin: 10px;
     text-align: center;
  }

</style>
