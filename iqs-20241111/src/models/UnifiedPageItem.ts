// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedPageItem extends $dara.Model {
  correlationTag?: number;
  hostAuthorityScore?: number;
  /**
   * @remarks
   * The site logo.
   * 
   * @example
   * https://www.china.com/zh_cn/img1905/2023/logo.png
   */
  hostLogo?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * 中华网
   */
  hostname?: string;
  /**
   * @remarks
   * The images in the search result URL. A maximum of three images are returned.
   */
  images?: string[];
  /**
   * @remarks
   * The full URL that the search result points to.
   * 
   * @example
   * https://hea.china.com/articles/20250427/202504271666343.html
   */
  link?: string;
  /**
   * @remarks
   * The full text of the searched web page.
   * 
   * @example
   * 2025上海车展期间，最火爆的无疑是问界品牌，成为众多大佬的话题中心。赛力斯集团董事长（创始人）张兴海、华为常务董事、终端BG董事长余承东、著名演员陈道明、宁德时代董事长曾毓群都分享了对问界的使用体验。\\n“问界M9、M8正重构 中国 豪华汽车市场格局。”张兴海说， (此处省略....)。\\n责任编辑：kj005\\n 文章投诉热线:157 3889 8464 投诉邮箱:7983347 16@qq.com\\n关键词：
   */
  mainText?: string;
  /**
   * @remarks
   * The Markdown content.
   * 
   * @example
   * # 上海车展大佬齐聚 问界成为话题中心**来源**：财讯网  
   * **时间**：2025-04-27 20:36:04  
   * 2025上海车展期间，最火爆的无疑是问界品牌，成为众多大佬的话题中心。赛力斯集团董事长（创始人）张兴海、华为常务董事、终端BG董事长余承东、著名演员陈道明、宁德时代董事长曾毓群都分享了对问界的使用体验。
   * ![图片](http://objectnsg.oss-cn-beijing.aliyuncs.com/yhdoc/202504/27/202504272025531927023138.png)余承东表示，问界M9、M8、M7和M5，都深受消费者喜爱！问界M9连续3个月中国纯电车型保值率第一！纯电、增程车型包揽新能源大型SUV保值率前两名！
   * ![图片](http://objectnsg.oss-cn-beijing.aliyuncs.com/yhdoc/202504/27/202504272025531312025791.jpeg)“自己是问界M9的用户
   * *责任编辑：kj005*文章投诉热线: 157 3889 8464  
   * 投诉邮箱: 798334716@qq.com
   */
  markdownText?: string;
  /**
   * @remarks
   * The time when the web page was published, in ISO time format.
   * 
   * @example
   * 2025-04-27T20:36:04+08:00
   */
  publishedTime?: string;
  /**
   * @remarks
   * The rerank score.
   * 
   * @example
   * 0.7786493301391602
   */
  rerankScore?: number;
  richMainBody?: string;
  /**
   * @remarks
   * The text summary.
   * 
   * @example
   * 2025上海车展期间，最火爆的无疑是问界品牌，成为众多大佬的话题中心。赛力斯集团董事长（创始人）张兴海、华为常务董事、终端BG董事长余承东、著名演员陈道明、宁德时代董事长曾毓群都分享了对问界的使用体验。 ...
   */
  snippet?: string;
  /**
   * @remarks
   * The enhanced summary, which contains 400 or more characters.
   * 
   * @example
   * 2025上海车展期间，最火爆的无疑是问界品牌，成为众多大佬的话题中心。赛力斯集团董事长（创始人）张兴海、华为常务董事、终端BG董事长余承东、著名演员陈道明、宁德时代董事长曾毓群都分享了对问界的使用体验。“自己是问界M9的用户，用车感受非常好。”陈道明表示，体验后才敢现场给大家推荐。未来，希望能实现问界M9的特别定制，让外观、内饰、座椅布局等，更符合自己的使用需求。据悉，2025款问界M9上市25天就交付超1万，已连续11个月蝉联50万元级豪车车销冠；问界M8上市4天，大定就突破了五万 台 ，深受市场任何和用户喜爱...“问界M9、M8正重构 中国 豪华汽车市场格局。”张兴海说， 近 期曾极限试驾问界M8，从重庆出发，历时55小时、行驶超3500公里抵达冈仁波齐。整个行程中，车辆的安全 性 和体验感都表现出色。
   */
  summary?: string;
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The full URL that the search result points to.
   * 
   * @example
   * 上海车展大佬齐聚 问界成为话题中心
   */
  title?: string;
  websiteAuthorityScore?: number;
  static names(): { [key: string]: string } {
    return {
      correlationTag: 'correlationTag',
      hostAuthorityScore: 'hostAuthorityScore',
      hostLogo: 'hostLogo',
      hostname: 'hostname',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      markdownText: 'markdownText',
      publishedTime: 'publishedTime',
      rerankScore: 'rerankScore',
      richMainBody: 'richMainBody',
      snippet: 'snippet',
      summary: 'summary',
      tags: 'tags',
      title: 'title',
      websiteAuthorityScore: 'websiteAuthorityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      correlationTag: 'number',
      hostAuthorityScore: 'number',
      hostLogo: 'string',
      hostname: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      link: 'string',
      mainText: 'string',
      markdownText: 'string',
      publishedTime: 'string',
      rerankScore: 'number',
      richMainBody: 'string',
      snippet: 'string',
      summary: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      websiteAuthorityScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

