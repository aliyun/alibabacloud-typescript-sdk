// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncludeImage } from "./IncludeImage";


export class ScorePageItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * structure_web_info
   */
  cardType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * baijiahao.baidu.com
   */
  displayLink?: string;
  hostAuthorityScore?: number;
  /**
   * @example
   * https://s2.zimgs.cn/ims?kt=url&at=smstruct&key=aHR0cHM6Ly9ndy5hbGljZG4uY29tL0wxLzcyMy8xNTY1MjU2NjAwLzJhL2YwL2I0LzJhZjBiNDQxMGI5YmVlMDVjOGVlNGJmODk3MTNkNTFjLnBuZw==&sign=yx:CUlNNQVJQjFrk3Kxt2F3KWhTOFU=&tv=400_400
   */
  hostLogo?: string;
  /**
   * @example
   * 新华网
   */
  hostname?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100km/h-0制动能力上，仅有33.3m，不黑不吹，单看这个，<em>小米SU7</em>确实表现不错。而续航方面，101kWh电池容量，实现CLTC续航800km，还有现5分钟补能220km，15分钟补能510km的800V高压平台。而在...
   */
  htmlSnippet?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * <em>小米</em>SU7售价22.99万元起 高管亲自辟谣：发布前不会有<em>价格</em>-百家号
   */
  htmlTitle?: string;
  images?: IncludeImage[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://baijiahao.baidu.com/s?id=1787881554557805096
   */
  link?: string;
  /**
   * @example
   * 昨天	，	小米	汽车	没有	发布	，	但	相关	的	信息	透露	的	差	不	多	了	。		
   * 		在	发布	会	现场	，	雷军	直接	称	小米	S	U	7	对	标	特斯拉	保时捷	，	有	100	项	行业	领先	，	可见	“	遥遥	领先	”	已经	不再	是	华为	专利	了	？		
   * 	
   * 		而	在	介绍	技术	时	，	雷军	也	从	电机	、	电池	、	大	压铸	、	自动	驾驶	、	智能	座舱	等	五	大	方面	展开	，	充分	展示	了	小米	汽车	的	技术	以及	技术	储备	，		 		能	堆	的	料	，	全都	堆	上去	了	…	…		
   * 		大家	比较	感	兴趣	的	性能	方面	，	2	.	78	s	的	0	-	100	km	/	h	加速	，	265	km	/	h	的	最高	时速
   */
  mainText?: string;
  markdownText?: string;
  /**
   * @example
   * text/html
   */
  mime?: string;
  pageMap?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1704426524000
   */
  publishTime?: number;
  richMainBody?: string;
  /**
   * @example
   * 0.234325235
   */
  score?: number;
  /**
   * @example
   * 权威媒体
   */
  siteLabel?: string;
  /**
   * @example
   * 100km/h-0制动能力上，仅有33.3m，不黑不吹，单看这个，小米SU7确实表现不错。而续航方面，101kWh电池容量，实现CLTC续航800km，还有现5分钟补能220km，15分钟补能510km的800V高压平台。而在...
   */
  snippet?: string;
  summary?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 小米SU7售价22.99万元起 高管亲自辟谣：发布前不会有价格
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cardType: 'cardType',
      displayLink: 'displayLink',
      hostAuthorityScore: 'hostAuthorityScore',
      hostLogo: 'hostLogo',
      hostname: 'hostname',
      htmlSnippet: 'htmlSnippet',
      htmlTitle: 'htmlTitle',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      markdownText: 'markdownText',
      mime: 'mime',
      pageMap: 'pageMap',
      publishTime: 'publishTime',
      richMainBody: 'richMainBody',
      score: 'score',
      siteLabel: 'siteLabel',
      snippet: 'snippet',
      summary: 'summary',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      displayLink: 'string',
      hostAuthorityScore: 'number',
      hostLogo: 'string',
      hostname: 'string',
      htmlSnippet: 'string',
      htmlTitle: 'string',
      images: { 'type': 'array', 'itemType': IncludeImage },
      link: 'string',
      mainText: 'string',
      markdownText: 'string',
      mime: 'string',
      pageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      publishTime: 'number',
      richMainBody: 'string',
      score: 'number',
      siteLabel: 'string',
      snippet: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.pageMap) {
      $dara.Model.validateMap(this.pageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

