// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AISearchQuery extends $tea.Model {
  card?: string;
  cardQuery?: string;
  page?: number;
  query?: string;
  searchEngine?: string;
  searchPlan?: string;
  sessionId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      card: 'card',
      cardQuery: 'cardQuery',
      page: 'page',
      query: 'query',
      searchEngine: 'searchEngine',
      searchPlan: 'searchPlan',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      card: 'string',
      cardQuery: 'string',
      page: 'number',
      query: 'string',
      searchEngine: 'string',
      searchPlan: 'string',
      sessionId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenericSearchResult extends $tea.Model {
  pageItems?: ScorePageItem[];
  /**
   * @example
   * 123456
   */
  requestId?: string;
  searchInformation?: SearchInformation;
  weiboItems?: WeiboItem[];
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      requestId: 'requestId',
      searchInformation: 'searchInformation',
      weiboItems: 'weiboItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ScorePageItem },
      requestId: 'string',
      searchInformation: SearchInformation,
      weiboItems: { 'type': 'array', 'itemType': WeiboItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncludeImage extends $tea.Model {
  /**
   * @example
   * 324
   */
  height?: number;
  /**
   * @example
   * http://k.sinaimg.cn/n/sinakd20121/594/w2048h946/20240328/74cf-32c0d62e843df76567d760b4459d57c1.jpg/w700d1q75cms.jpg
   */
  imageLink?: string;
  /**
   * @example
   * 700
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      imageLink: 'imageLink',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageLink: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScorePageItem extends $tea.Model {
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
  /**
   * @example
   * 0.234325235
   */
  score?: number;
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
      htmlSnippet: 'htmlSnippet',
      htmlTitle: 'htmlTitle',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      mime: 'mime',
      pageMap: 'pageMap',
      publishTime: 'publishTime',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      displayLink: 'string',
      htmlSnippet: 'string',
      htmlTitle: 'string',
      images: { 'type': 'array', 'itemType': IncludeImage },
      link: 'string',
      mainText: 'string',
      mime: 'string',
      pageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      publishTime: 'number',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInformation extends $tea.Model {
  searchTime?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      searchTime: 'searchTime',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTime: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeiboItem extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenericSearchRequest extends $tea.Model {
  query?: string;
  /**
   * @example
   * OneMonth
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenericSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenericSearchResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenericSearchResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkedmallretrieval", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 通用搜索
   * 
   * @param request - GenericSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenericSearchResponse
   */
  async genericSearchWithOptions(request: GenericSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenericSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenericSearch",
      version: "2024-09-30",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v2/linkedRetrieval/commands/genericSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenericSearchResponse>(await this.callApi(params, req, runtime), new GenericSearchResponse({}));
  }

  /**
   * 通用搜索
   * 
   * @param request - GenericSearchRequest
   * @returns GenericSearchResponse
   */
  async genericSearch(request: GenericSearchRequest): Promise<GenericSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genericSearchWithOptions(request, headers, runtime);
  }

}
