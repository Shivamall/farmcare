
<template>
   <div >

      <mdb-navbar  v-show="navbarType == 'regular-fixed'" position="top"  class=" green darken-2 py-2 mb-4" name="Your Logo" scrolling>
     <mdb-navbar-brand >
       <router-link to="/home"><img src="@/assets/Farmcarelogopng.png" alt="Farm care logo" width="60px" height="60px"/>
      </router-link>

  </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav nav right>
         <mdb-nav-item  waves-fixed > <router-link to="/home">HOME</router-link></mdb-nav-item>
      <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle slot="toggle" tag="a" navLink  waves-fixed>PLANTS</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Papaya</mdb-dropdown-item>
              <mdb-dropdown-item>Orange</mdb-dropdown-item>
              <mdb-dropdown-item>Tomato</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
         <!-- <mdb-nav-item waves-fixed> <router-link to="/plants">PLANTS</router-link></mdb-nav-item> -->
          <mdb-nav-item waves-fixed> <router-link to="/statics">STATICS</router-link></mdb-nav-item>
           <mdb-nav-item waves-fixed> <router-link to="/read">ARTICLE</router-link></mdb-nav-item>
            <mdb-nav-item waves-fixed> <router-link to="/weather">WEATHER</router-link></mdb-nav-item>
             <mdb-nav-item waves-fixed> <router-link to="/contact">CONTACT</router-link></mdb-nav-item>
              <mdb-nav-item waves-fixed> <router-link to="/aboutus">ABOUT US</router-link></mdb-nav-item>
               <mdb-nav-item waves-fixed> <router-link to="/profile">PROFILE</router-link></mdb-nav-item>
        </mdb-navbar-nav>

      </mdb-navbar-toggler>
    </mdb-navbar>
  




</div>
 
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler,mdbDropdown , mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle} from 'mdbvue';

export default {
name: 'Navbar',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
},
  data() {
    return {
      navbarType: 'regular-fixed',
      content: false
    };
  }
};
</script>

<style scoped>
  
  ul.nav.ml-auto
  {
    margin-left: 0;

  }

  .nav-link{
font-size: 0.8em;
  }
.nav-item a
{
  
  text-decoration: none;
  color: white;
  font-size: 0.8em;
}

li.nav-item.dropdown
{
  margin-top: 3px;
}

a.dropdown-item
{
  color: black;
}
.navbar.fixed-transparent-navbar.scrolling-navbar.top-nav-collapse {
  background-color: #4285F4 !important;
}

</style>
