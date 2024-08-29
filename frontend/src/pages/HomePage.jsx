import React from "react"
import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import Campaigns from "../components/Campaigns/Campaigns"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Categories from "../components/Categories/Categories"
import { Footer } from "../components/Layout/Footer/Footer"
import { Header } from "../components/Layout/Header/Header"
import Policy from "../components/Layout/Policy/Policy"
import Products from "../components/Products/Products"
import Sliders from "../components/Slider/Sliders"


const HomePage = () => {
  return (
    <React.Fragment>    
        {/* DİVDE OLABİLİRDİ DİV FAZLALIK OLUR SARMAL YAPI OLMASI İSTER REACT */}
     <Header />
    <Sliders />
    <Categories />
    <Products />
    <Campaigns />
    <Blogs />
    <Brands />
    <CampaignSingle />
    <Policy />
    <Footer />

    </React.Fragment>
  
  )
}

export default HomePage