// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncludeImage } from "./IncludeImage";


export class ScorePageItem extends $dara.Model {
  /**
   * @remarks
   * The search result template. Different templates return different fields.
   * 
   * This parameter is required.
   * 
   * @example
   * structure_web_info
   */
  cardType?: string;
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
   * The abbreviated URL of this search result.
   * 
   * This parameter is required.
   * 
   * @example
   * baijiahao.baidu.com
   */
  displayLink?: string;
  /**
   * @remarks
   * The dynamic authority score, which ranges from 0 to 2 and is calculated based on the relevance of the query content.
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
   * https://s2.zimgs.cn/ims?kt=url&at=smstruct&key=aHR0cHM6Ly9ndy5hbGljZG4uY29tL0wxLzcyMy8xNTY1MjU2NjAwLzJhL2YwL2I0LzJhZjBiNDQxMGI5YmVlMDVjOGVlNGJmODk3MTNkNTFjLnBuZw==&sign=yx:CUlNNQVJQjFrk3Kxt2F3KWhTOFU=&tv=400_400
   */
  hostLogo?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * Xinhua News
   */
  hostname?: string;
  /**
   * @remarks
   * The description snippet of the search result in HTML format.
   * 
   * This parameter is required.
   * 
   * @example
   * In terms of 100 km/h-0 braking capability, it is only 33.3m. Without bias, just looking at this, the <em>Xiaomi SU7</em> indeed performs well. As for range, with a 101 kWh battery capacity, it achieves a CLTC range of 800 km, and features an 800V high-voltage platform that can add 220 km of range in 5 minutes and 510 km in 15 minutes. And..
   */
  htmlSnippet?: string;
  /**
   * @remarks
   * The search result title in HTML format.
   * 
   * This parameter is required.
   * 
   * @example
   * <em>Xiaomi</em> SU7 priced from 229,900 yuan, executive personally dispels rumors: no <em>price</em> before launch - Baijiahao
   */
  htmlTitle?: string;
  /**
   * @remarks
   * The image information.
   */
  images?: IncludeImage[];
  /**
   * @remarks
   * The full URL that the search result points to.
   * 
   * This parameter is required.
   * 
   * @example
   * https://baijiahao.baidu.com/s?id=1787881554557805096
   */
  link?: string;
  /**
   * @remarks
   * The full text of the search result, which is available in some scenarios.
   * 
   * @example
   * Yesterday, Xiaomi Auto was not launched, but related information has been mostly revealed. At the launch event, Lei Jun directly stated that Xiaomi SU7 benchmarks Tesla and Porsche, with 100 industry-leading features. It seems that "far ahead" is no longer a Huawei patent? When introducing the technology, Lei Jun also expanded on five major aspects: motor, battery, mega casting, autonomous driving, and smart cockpit, fully demonstrating Xiaomi Auto\\"s technology and technical reserves. All the materials that can be stacked are stacked... Regarding the performance that everyone is interested in, 0-100 km/h acceleration in 2.78s, and a top speed of 265 km/h
   */
  mainText?: string;
  /**
   * @remarks
   * The web page body in Markdown format.
   * 
   * @example
   * # 2022 Apsara Conference Homepage
   */
  markdownText?: string;
  /**
   * @remarks
   * The MIME type of the search result.
   * 
   * @example
   * text/html
   */
  mime?: string;
  /**
   * @remarks
   * The supplementary page information.
   * 
   * @example
   * {}
   */
  pageMap?: { [key: string]: string };
  /**
   * @remarks
   * The publish time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1704426524000
   */
  publishTime?: number;
  /**
   * @remarks
   * The full rich text body, which preserves the order of text, images, audio, video, tables, and code in the web page.
   * 
   * @example
   * <quark-ocr> 24 hx 3 </quark-ocr>
   */
  richMainBody?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 0.234325235
   */
  score?: number;
  /**
   * @remarks
   * The site label. Two types are currently supported:
   * * Authoritative media
   *  * Party and government organs
   * 
   * @example
   * Authoritative media
   */
  siteLabel?: string;
  /**
   * @remarks
   * The description snippet of the search result in text format.
   * 
   * @example
   * In terms of 100 km/h-0 braking capability, it is only 33.3m. Without bias, just looking at this, the Xiaomi SU7 indeed performs well. As for range, with a 101 kWh battery capacity, it achieves a CLTC range of 800 km, and features an 800V high-voltage platform that can add 220 km of range in 5 minutes and 510 km in 15 minutes. And..
   */
  snippet?: string;
  /**
   * @remarks
   * The enhanced summary.
   * 
   * @example
   * Tomorrow
   */
  summary?: string;
  /**
   * @remarks
   * The search result title in plain text.
   * 
   * This parameter is required.
   * 
   * @example
   * Xiaomi SU7 priced from 229,900 yuan, executive personally dispels rumors: no price before launch
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
      cardType: 'cardType',
      correlationTag: 'correlationTag',
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
      websiteAuthorityScore: 'websiteAuthorityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      correlationTag: 'number',
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
      websiteAuthorityScore: 'number',
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

