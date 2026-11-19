// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedPageItem extends $dara.Model {
  /**
   * @remarks
   * The relevance tag. A value of 0 indicates low relevance, and 1 indicates non-low relevance.
   * 
   * @example
   * 1
   */
  correlationTag?: number;
  /**
   * @remarks
   * The dynamic authority score, which ranges from 0 to 2 and is calculated based on the relevance to the query content.
   * 
   * @example
   * 1.923339
   */
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
   * China.com
   */
  hostname?: string;
  /**
   * @remarks
   * The images from the search result web page, up to three.
   */
  images?: string[];
  /**
   * @remarks
   * The full URL pointed to by the search result.
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
   * During the 2025 Shanghai Auto Show, the AITO brand was undoubtedly the most popular, becoming the center of attention for many industry leaders. Zhang Xinghai, Chairman and Founder of SERES Group, Yu Chengdong, Managing Director of Huawei and Chairman of Terminal BG, Chen Daoming, a famous actor, and Zeng Yuqun, Chairman of CATL, all shared their experiences using AITO.\\n"AITO M9 and M8 are reshaping the landscape of China\\"s luxury car market," Zhang Xinghai said, (omitted here....).\\nEditor: kj005\\n Article complaint hotline: 157 3889 8464 Complaint email: 7983347 16@qq.com\\nKeywords:
   */
  mainText?: string;
  /**
   * @remarks
   * The Markdown content.
   * 
   * @example
   * # Industry leaders gather at the Shanghai Auto Show as AITO becomes the center of attention**Source**: Caixun.com  
   * **Time**: 2025-04-27 20:36:04  
   * During the 2025 Shanghai Auto Show, the AITO brand was undoubtedly the most popular, becoming the center of attention for many industry leaders. Zhang Xinghai, Chairman and Founder of SERES Group, Yu Chengdong, Managing Director of Huawei and Chairman of Terminal BG, Chen Daoming, a famous actor, and Zeng Yuqun, Chairman of CATL, all shared their experiences using AITO.
   * ![Image](http://objectnsg.oss-cn-beijing.aliyuncs.com/yhdoc/202504/27/202504272025531927023138.png)Yu Chengdong stated that AITO M9, M8, M7, and M5 are all deeply loved by consumers! AITO M9 has ranked first in the residual value rate of pure electric models in China for three consecutive months! Pure electric and extended-range models took the top two spots in the residual value rate of new energy large SUVs!
   * ![Image](http://objectnsg.oss-cn-beijing.aliyuncs.com/yhdoc/202504/27/202504272025531312025791.jpeg)"I am an AITO M9 user
   * *Editor: kj005*Article complaint hotline: 157 3889 8464  
   * Complaint email: 798334716@qq.com
   */
  markdownText?: string;
  /**
   * @remarks
   * The publish time of the web page in ISO format.
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
  /**
   * @remarks
   * The full rich text body, which preserves the order of text, images, audio, video, tables, and code on the web page.
   * 
   * @example
   * Salute	to	the	workers	!	\\n	[	Building	dreams	for	modernization	 	and	drawing	a	new	picture	together	·	Song	of	the	workers	]	Make	new	contributions	to	promoting	Chinese	modernization	\\n	<quark-image available_status="3" caption="CCTV news studio" fetch_status="0" is_broken="0" is_high_quality_chart="0" is_high_quality_text="0" is_watermark="0" ori_height="1080" ori_width="1920" phash="13061254655082448525" relevant_score="0.5" render_height="137.046875" render_width="243.65625" tag="CCTV logo, studio, architecture, scenery" url="http://s2.zimgs.cn/ims?kt=url&amp;key=aHR0cHM6Ly92Mi5jcmkuY24vTTAwLzg2LzAyL3JCQUJDbVkzRzhDQVhFR0pBQUFBQUFBQUFBQTQ0LjE5MjB4MTA4MC5qcGVn&amp;sign=yx:G3TGlZZMQhnxU2bJSDcb_g8xPQ0=&amp;tv=0_0&amp;p=" value_score="0.5"><quark-ocr>	CCTV	 	13	 	News	 	CTVR	 	Morning	World	</quark-ocr></quark-image>	\\n	More	>	>	>	 	Most	beautiful	workers	\\n
   */
  richMainBody?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * During the 2025 Shanghai Auto Show, the AITO brand was undoubtedly the most popular, becoming the center of attention for many industry leaders. Zhang Xinghai, Chairman and Founder of SERES Group, Yu Chengdong, Managing Director of Huawei and Chairman of Terminal BG, Chen Daoming, a famous actor, and Zeng Yuqun, Chairman of CATL, all shared their experiences using AITO. ..
   */
  snippet?: string;
  /**
   * @remarks
   * The enhanced summary, 400 words or more.
   * 
   * @example
   * During the 2025 Shanghai Auto Show, the AITO brand was undoubtedly the most popular, becoming the center of attention for many industry leaders. Zhang Xinghai, Chairman and Founder of SERES Group, Yu Chengdong, Managing Director of Huawei and Chairman of Terminal BG, Chen Daoming, a famous actor, and Zeng Yuqun, Chairman of CATL, all shared their experiences using AITO. "I am an AITO M9 user, and the driving experience is excellent," Chen Daoming said, adding that he only dared to recommend it on the spot after experiencing it himself. In the future, he hopes to achieve special customization of the AITO M9, making the exterior, interior, and seat layout more in line with his own needs. It is reported that the 2025 AITO M9 delivered over 10,000 units within 25 days of its launch, and has been the sales champion of 500,000 RMB luxury cars for 11 consecutive months; the AITO M8 received over 50,000 firm orders within 4 days of its launch, and is deeply loved by the market and users... "AITO M9 and M8 are reshaping the landscape of China\\"s luxury car market," Zhang Xinghai said. He recently test-drove the AITO M8 to the limit, departing from Chongqing and arriving at Mount Kailash after 55 hours and over 3,500 kilometers. Throughout the journey, the safety and experience of the vehicle performed excellently
   */
  summary?: string;
  /**
   * @remarks
   * The web page tags.
   * 
   * @example
   * {"genre":"NewsPortal"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The full URL pointed to by the search result.
   * 
   * @example
   * Industry leaders gather at the Shanghai Auto Show as AITO becomes the center of attention
   */
  title?: string;
  /**
   * @remarks
   * The static authority score, which is determined solely by the authority of the website itself and is independent of the query content.
   * 
   * @example
   * 3
   */
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

