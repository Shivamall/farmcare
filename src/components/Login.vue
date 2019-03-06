<template>
<div class="container">
     <div role="group">
   <b-form-text id="inputLiveHelp">
      <!-- this is a form text block (formerly known as help block) -->
      Your Email.
    </b-form-text>
    <b-form-input id="inputLive"
                  v-model.trim="name"
                  type="text"
                  :state="nameState"
                  aria-describedby="inputLiveHelp inputLiveFeedback"
                  placeholder="Enter your name"></b-form-input>

    <b-form-invalid-feedback  id="inputLiveFeedback">
      <!-- This will only be shown if the preceeding input has an invalid state -->
      Enter at least 3 letters
    </b-form-invalid-feedback>

 <b-form-text id="inputLivePasswordHelp">
      <!-- this is a form text block (formerly known as help block) -->
      Your Password.
    </b-form-text>
      <b-form-input id="inputLive"
                  v-model.trim="password"
                  type="password"
                  :state="passwordState"
                  aria-describedby="inputLivePasswordHelp inputLivePasswordFeedback"
                  placeholder="Enter your password">

                  <img src="src/assets/view.png" alt="show">
                  </b-form-input>

                   <b-form-invalid-feedback  id="inputLivePasswordFeedback">
      <!-- This will only be shown if the preceeding input has an invalid state -->
      Enter 6 digit password or more
    </b-form-invalid-feedback>
    
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    nameState () {
      return this.name.length > 2 ? true : false
    },
    passwordState()
    {
        return this.password.length >= 6  ? true : false
    }
  },
  data () {
    return {
      name: '',
      password:''
    }
  }
}
</script>

<style scoped>
.container
{
    width: 30%;
}
#inputLiveHelp
{
text-align: left;

font-size: 15px;

}
</style>
