// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WeiboItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * weibo_strong
   */
  cardType?: string;
  /**
   * @example
   * https://m.weibo.cn/u/7761793874?luicode=20000061&lfid=5024099350350075
   */
  homepageLink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 【小调查：你会买<em>小米SU7</em>吗？】#小米SU7路测覆盖300多城市#4月17日，@小米汽车 发文称SU7道路测试覆盖全国300多个城市，涵盖极寒，极热天气，总里程数高达540万公里，目前仍在进行中。  网页链接
   */
  htmlSnippet?: string;
  images?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://m.weibo.cn/detail/5024099350350075?wm=90194_90009
   */
  link?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1小时前
   */
  publishDisplayTime?: string;
  /**
   * @example
   * 白鹿科技
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

