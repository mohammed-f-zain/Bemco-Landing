import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop2 from "react-scroll-to-top";

import ScrollToTop from './../layouts/ScrollToTop';
import DarkTheme from './../layouts/DarkTheme';
// import Home from './Home';
//import Home2 from './Home2';
import Home3 from './Home3';
//import Home4 from './Home4';
//import Home5 from './Home5';
import AboutUs from './AboutUs';
import AboutMe from './AboutMe';
import ComingSoon from './ComingSoon';
import CompanyHistory from './CompanyHistory';
import ContactUs from './ContactUs';
import ErrorPage from './ErrorPage';
import GalleryGrid4 from './GalleryGrid4';
import GalleryMasonry from './GalleryMasonry';
import HelpDesk from './HelpDesk';
import Pricing from './Pricing';
import PrivacyPolicy from './PrivacyPolicy';
import Services from './Services';
import Team from './Team';
import Portfolio from './Portfolio';
import PortfolioDetails from './PortfolioDetails';
import ShopGrid3 from './ShopGrid3';
import ProductDetails from './ProductDetails';
import ShopWishlist from './ShopWishlist';
import ShopCheckout from './ShopCheckout';
import ShopCart from './ShopCart';
import Login from './Login';
import PortfolioCollage from './PortfolioCollage';
import BlogGrid from './BlogGrid';
import BlogRightSidebar from './BlogRightSidebar';
import BlogListSidebar from './BlogListSidebar';
import BlogListLeftSidebar from './BlogListLeftSidebar';
import BlogDetailsPostWide from './BlogDetailsPostWide';
import BlogDetails from './BlogDetails';
import WhyUs from './WhyUs';
import Careers from './Careers';
import {
	EngineeringServices,
	FacilityManagement,
	InstallationRetrofitting,
	HVACTAB,
	OperationMaintenance,
	SupplyControlPanels,
	SupplySpareParts,
	TestingCommissioning
} from '../pages/Services/index'

import {
	CertificatesAwards,
	OurApprovals,
	OurClients,
	OurCommitment,
	OurPartners,
	QualitySafetyPolicy,
} from './../pages/Our Company/'


function Index() {
	return (
		<BrowserRouter >
			<div className="page-wraper">
				<Switch>
					{/* <Route path='/index-2' exact component={Home2} /> */}
					<Route path='/' exact component={Home3} />
					<Route path='/certificates-awards' exact component={CertificatesAwards} />
					<Route path='/our-approvals' exact component={OurApprovals} />
					<Route path='/our-clients' exact component={OurClients} />
					<Route path='/our-commitment' exact component={OurCommitment} />
					<Route path='/our-partners' exact component={OurPartners} />
					<Route path='/quality-safety-policy' exact component={QualitySafetyPolicy} />
					{/* <Route path='/index-4' exact component={Home4} /> */}
					{/* <Route path='/index-5' exact component={Home5} /> */}
					<Route path='/why-us' exact component={WhyUs} />
					<Route path='/about-us' exact component={AboutUs} />
					<Route path='/careers' exact component={Careers} />
					{/* <Route path='/about-me' exact component={AboutMe} /> */}
					{/* <Route path='/coming-soon' exact component={ComingSoon} />
					<Route path='/company-history' exact component={CompanyHistory} /> */}
					<Route path='/contact-us' exact component={ContactUs} />
					<Route path='/error-404' exact component={ErrorPage} />
					<Route path='/gallery-grid-4' exact component={GalleryGrid4} />
					{/* <Route path='/gallery-masonry' exact component={GalleryMasonry} />
					<Route path='/help-desk' exact component={HelpDesk} /> */}
					{/* <Route path='/pricing' exact component={Pricing} /> */}
					{/* <Route path='/privacy-policy' exact component={PrivacyPolicy} /> */}
					<Route path='/services' exact component={Services} />
					<Route path='/operation-maintenance' exact component={OperationMaintenance} />
					<Route path='/testing-commissioning' exact component={TestingCommissioning} />
					<Route path='/installation-retrofitting' exact component={InstallationRetrofitting} />
					<Route path='/supply-MV/LV' exact component={SupplyControlPanels} />
					<Route path='/HVAC-TAB' exact component={HVACTAB} />
					<Route path='/facility-management' exact component={FacilityManagement} />
					<Route path='/engineering-services' exact component={EngineeringServices} />
					<Route path='/supply-spare-parts' exact component={SupplySpareParts} />
					{/* <Route path='/team' exact component={Team} /> */}
					<Route path='/portfolio' exact component={Portfolio} />
					<Route path='/portfolio-details' exact component={PortfolioDetails} />
					<Route path='/shop-grid-3' exact component={ShopGrid3} />
					<Route path='/product-details' exact component={ProductDetails} />
					<Route path='/shop-wishlist' exact component={ShopWishlist} />
					<Route path='/shop-checkout' exact component={ShopCheckout} />
					<Route path='/shop-cart' exact component={ShopCart} />
					<Route path='/login' exact component={Login} />
					<Route path='/portfolio-collage' exact component={PortfolioCollage} />
					{/* <Route path='/blog-grid' exact component={BlogGrid} /> */}
					{/* <Route path='/blog-large-right-sidebar' exact component={BlogRightSidebar} /> */}
					<Route path='/blog-list-sidebar' exact component={BlogListSidebar} />
					{/* <Route path='/blog-list-left-sidebar' exact component={BlogListLeftSidebar} />
					<Route path='/blog-details-post-wide' exact component={BlogDetailsPostWide} /> */}
					<Route path='/blog-details' exact component={BlogDetails} />
					<Route path='*' exact component={ErrorPage} />
				</Switch>
				<ScrollToTop />
				<ScrollToTop2 className="fas fa-arrow-up scroltop" smooth />
			</div>
			<DarkTheme />

		</BrowserRouter>
	)
}
export default Index;