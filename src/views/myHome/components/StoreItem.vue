<template>
  <div class="item">
    <img src="../../../assets/11.jpg" alt="">
    <div class="item-right">
        <div class="title">{{i.title}}</div>
        <div class="sales">{{i.sales}}</div>
        <div class="price">起送费 ￥{{i.sales}} 免配送费</div>
        <div class="label">
            <div v-for="(i,index) in i.label" :key="index">{{i}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['i'],
}
</script>

<style lang="less" scoped>
.item:not(:first-child){
    margin-top: 10px;
}

.item{
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item-right{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .title{
            font-size: 18px;
        }
        .label{
            display: flex;
            div{
                background-color: #ffc40047;
                padding: 2px 5px;
                border-radius: 5px; 
            }
            div:not(:first-child){
                margin-left: 5px;
            }
        }
    }
}



</style>