<template>
  <div class="about">    
    <Divider class="divider">給點指教吧！</Divider>
    <Form :model="formItem" :label-width="80">
      <FormItem label="如何稱呼">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="區住城市">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup v-model="formItem.radio">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="喜歡的主題">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="食物"></Checkbox>
          <Checkbox label="運動"></Checkbox>
          <Checkbox label="電影"></Checkbox>
          <Checkbox label="時尚"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="建議">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          textarea: ''
        }
      }
    }
  }

</script>

<style scoped>
   .divider{
     font-size: 22px;
   }
   .about{
     font-size: 18px;
   }
</style>

