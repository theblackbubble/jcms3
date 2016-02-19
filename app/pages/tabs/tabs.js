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

import {Page} from 'ionic/ionic';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
  }
}
