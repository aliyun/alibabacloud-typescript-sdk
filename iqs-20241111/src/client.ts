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
  queryContext?: QueryContext;
  /**
   * @example
   * 123456
   */
  requestId?: string;
  sceneItems?: SceneItem[];
  searchInformation?: SearchInformation;
  weiboItems?: WeiboItem[];
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      queryContext: 'queryContext',
      requestId: 'requestId',
      sceneItems: 'sceneItems',
      searchInformation: 'searchInformation',
      weiboItems: 'weiboItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ScorePageItem },
      queryContext: QueryContext,
      requestId: 'string',
      sceneItems: { 'type': 'array', 'itemType': SceneItem },
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

export class QueryContext extends $tea.Model {
  originalQuery?: QueryContextOriginalQuery;
  rewrite?: QueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: QueryContextOriginalQuery,
      rewrite: QueryContextRewrite,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SceneItem extends $tea.Model {
  detail?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
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
   * @example
   * 权威媒体
   */
  siteLabel?: string;
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
      hostLogo: 'hostLogo',
      hostname: 'hostname',
      htmlSnippet: 'htmlSnippet',
      htmlTitle: 'htmlTitle',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      mime: 'mime',
      pageMap: 'pageMap',
      publishTime: 'publishTime',
      score: 'score',
      siteLabel: 'siteLabel',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      displayLink: 'string',
      hostLogo: 'string',
      hostname: 'string',
      htmlSnippet: 'string',
      htmlTitle: 'string',
      images: { 'type': 'array', 'itemType': IncludeImage },
      link: 'string',
      mainText: 'string',
      mime: 'string',
      pageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      publishTime: 'number',
      score: 'number',
      siteLabel: 'string',
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

export class AiSearchRequest extends $tea.Model {
  /**
   * @example
   * finance
   */
  industry?: string;
  /**
   * @example
   * {\\"total_count\\": 6851, \\"page_number\\": 54, \\"page_size\\": 100}
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      page: 'number',
      query: 'string',
      sessionId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBody extends $tea.Model {
  header?: AiSearchResponseBodyHeader;
  /**
   * @example
   * {"header":{"eventId":"6f617de0-204f-406f-a9be-34779c06d498","event":"on_common_search_start","responseTime":120},"payload":"","requestId":"715d01a0-de7e-42c3-abca-b901fcd79b39"}
   */
  payload?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: AiSearchResponseBodyHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AiSearchResponseBody;
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
      body: AiSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenericAdvancedSearchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * job-4065bee3-e7aa-49fc-aad2-a8e3a7fd6acd
   */
  sessionId?: string;
  /**
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      sessionId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenericAdvancedSearchResponse extends $tea.Model {
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

export class GenericSearchRequest extends $tea.Model {
  industry?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  sessionId?: string;
  /**
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      page: 'number',
      query: 'string',
      sessionId: 'string',
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

export class QueryContextOriginalQuery extends $tea.Model {
  industry?: string;
  page?: string;
  query?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      page: 'string',
      query: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContextRewrite extends $tea.Model {
  enabled?: boolean;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBodyHeaderQueryContextOriginalQuery extends $tea.Model {
  industry?: string;
  page?: number;
  query?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      page: 'number',
      query: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBodyHeaderQueryContextRewrite extends $tea.Model {
  enabled?: boolean;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBodyHeaderQueryContext extends $tea.Model {
  originalQuery?: AiSearchResponseBodyHeaderQueryContextOriginalQuery;
  rewrite?: AiSearchResponseBodyHeaderQueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: AiSearchResponseBodyHeaderQueryContextOriginalQuery,
      rewrite: AiSearchResponseBodyHeaderQueryContextRewrite,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSearchResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * on_common_search_end
   */
  event?: string;
  /**
   * @example
   * 988021f0-951a-43d0-ba4d-785359e7e7be
   */
  eventId?: string;
  queryContext?: AiSearchResponseBodyHeaderQueryContext;
  /**
   * @example
   * 1293
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventId: 'eventId',
      queryContext: 'queryContext',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventId: 'string',
      queryContext: AiSearchResponseBodyHeaderQueryContext,
      responseTime: 'number',
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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AI搜索流式接口
   * 
   * @param request - AiSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiSearchResponse
   */
  async aiSearchWithOptions(request: AiSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AiSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AiSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v3/linkedRetrieval/commands/aiSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AiSearchResponse>(await this.callApi(params, req, runtime), new AiSearchResponse({}));
  }

  /**
   * AI搜索流式接口
   * 
   * @param request - AiSearchRequest
   * @returns AiSearchResponse
   */
  async aiSearch(request: AiSearchRequest): Promise<AiSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aiSearchWithOptions(request, headers, runtime);
  }

  /**
   * 增强版通用搜索
   * 
   * @param request - GenericAdvancedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenericAdvancedSearchResponse
   */
  async genericAdvancedSearchWithOptions(request: GenericAdvancedSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenericAdvancedSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenericAdvancedSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v2/linkedRetrieval/commands/genericAdvancedSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenericAdvancedSearchResponse>(await this.callApi(params, req, runtime), new GenericAdvancedSearchResponse({}));
  }

  /**
   * 增强版通用搜索
   * 
   * @param request - GenericAdvancedSearchRequest
   * @returns GenericAdvancedSearchResponse
   */
  async genericAdvancedSearch(request: GenericAdvancedSearchRequest): Promise<GenericAdvancedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genericAdvancedSearchWithOptions(request, headers, runtime);
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
    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
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
      version: "2024-11-11",
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
