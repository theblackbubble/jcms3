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
 
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
