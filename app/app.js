/*!
 * @package:  JGBoilerplate 2
 * 
 * @author    Name: Andrea Gentil & Anibal Sanchez, JoomGap.com 
 *            Email: team[at]joomgap.com 
 *            Url: http://www.JoomGap.com
 * 
 * @copyright Copyright (C) 2015 - 2016 Andrea Gentil & Anibal Sanchez. 
 *            All rights reserved. 
 * 
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 */
 
import {App, Platform} from 'ionic/ionic';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',

  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {} 
})
export class MyApp {
  constructor(platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
		// The platform is now ready. Note: if this callback fails to fire, follow
		// the Troubleshooting guide for a number of possible solutions:
		//
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		//
		// First, let's hide the keyboard accessory bar (only works natively) since
		// that's a better default:
		//
		// Keyboard.setAccessoryBarVisible(false);
		//
		// For example, we might change the StatusBar color. This one below is
		// good for dark backgrounds and light text:
		// StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
		
		// Angular 2 is running in the development mode. Call enableProdMode()
		// to enable the production mode.
    });
  }
}
