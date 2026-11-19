// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WeiboItem extends $dara.Model {
  /**
   * @remarks
   * The search result template. Fixed as weibo_strong for Weibo scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * weibo_strong
   */
  cardType?: string;
  /**
   * @remarks
   * The Weibo homepage of the user.
   * 
   * @example
   * https://m.weibo.cn/u/7761793874?luicode=20000061&lfid=5024099350350075
   */
  homepageLink?: string;
  /**
   * @remarks
   * The content of the Weibo post.
   * 
   * This parameter is required.
   * 
   * @example
   * [Quick poll: Would you buy the Xiaomi SU7?]
   * #Xiaomi SU7 road tests now cover more than 300 cities#
   * On April 17, @Xiaomi Auto posted that SU7 road testing now covers over 300 cities nationwide, including tests in extremely cold and extremely hot weather. The total test mileage has reached 5.4 million kilometers and is still ongoing. Web link
   */
  htmlSnippet?: string;
  /**
   * @remarks
   * The image information.
   */
  images?: string[];
  /**
   * @remarks
   * The Weibo URL of the search result.
   * 
   * This parameter is required.
   * 
   * @example
   * https://m.weibo.cn/detail/5024099350350075?wm=90194_90009
   */
  link?: string;
  /**
   * @remarks
   * The publish time.
   * 
   * This parameter is required.
   * 
   * @example
   * An hour ago
   */
  publishDisplayTime?: string;
  /**
   * @remarks
   * The Weibo username.
   * 
   * @example
   * Bailu Tech
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      cardType: 'cardType',
      homepageLink: 'homepageLink',
      htmlSnippet: 'htmlSnippet',
      images: 'images',
      link: 'link',
      publishDisplayTime: 'publishDisplayTime',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      homepageLink: 'string',
      htmlSnippet: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      link: 'string',
      publishDisplayTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

