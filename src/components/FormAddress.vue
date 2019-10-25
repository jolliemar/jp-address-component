<template>
  <div :class="[ customContainerClass ? customContainerClass : 'default-container' ]">
    <div :class="[ customInputWrapperClass ? customInputWrapperClass : 'default-input-wrapper' ]">
      <label>郵便番号</label>
      <input type="text" placeholder="〒 000-0000" name="postal-code" v-model.lazy="address.postalCode"/>
    </div>

    <div :class="[ customInputWrapperClass ? customInputWrapperClass : 'default-input-wrapper' ]">
      <label>都道府県名</label>
      <input type="text" placeholder="都道府県名" name="prefecture" v-model="address.prefecture"/>
    </div>

    <div :class="[ customInputWrapperClass ? customInputWrapperClass : 'default-input-wrapper' ]">
      <label>市町村区</label>
      <input type="text" placeholder="市町村区" name="city" v-model="address.city"/>
    </div>

    <div :class="[ customInputWrapperClass ? customInputWrapperClass : 'default-input-wrapper' ]">
      <label>町域</label>
      <input type="text" placeholder="丁目 番地 号" name="area" v-model="address.area"/>
    </div>

    <div :class="[ customInputWrapperClass ? customInputWrapperClass : 'default-input-wrapper' ]">
      <label>以降の住所</label>
      <input type="text" placeholder="以降の住所" name="extension" v-model="address.extension"/>
    </div>
  </div>
</template>

<script>
import jpAddress from '@/static/jp-address.json';

export default {
  /**
   * params: class, data
   * 
   * TODO: decide json format
   * TODO: params - ok
   * TODO: emit - ok
   * TODO: build - ok
   * 
   * TODO: unit test - ok
   * TODO: Django Template
   */
  props: {
    customContainerClass : String,
    customInputWrapperClass : String
    , initialAddress : {
      type : Object,
      default : () => ({
        postalCode : "",
        prefecture : "",
        city : "",
        area : "",
        extension : ""
      })
    }
  },

  data : function() {
    return {
      address : this.initialAddress
    }
  },

  watch : {
    'address.postalCode' : function (newValue) {
      let postalCode = newValue.replace("-", "");
      let address = jpAddress[postalCode] || [];
      this.address = {
        postalCode: newValue,
        prefecture : address[1] || "",
        city : address[2] || "",
        area : address[3] || "",
        extension : address[4] || "",
      }

      this.$emit('on-update-address', this.address);
    }
  }
}
</script>

<style lang="scss" scoped>
  .default-container {
    display : flex;
    flex-direction: column;

    .default-input-wrapper {
      display : flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        margin: 0 0 10px 0;
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
      }

      input {
        height: 40px;
        border: 1px solid #cbd0d4;
        border-radius: 5px;
        padding: 0 0 0 15px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
</style>