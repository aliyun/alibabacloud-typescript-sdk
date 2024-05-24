// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetResourceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
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
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMtConnectorRequest extends $tea.Model {
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMtConnectorResponseBody extends $tea.Model {
  requestId?: string;
  bizErrorCode?: number;
  data?: ListMtConnectorResponseBodyData[];
  errorMessage?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizErrorCode: 'bizErrorCode',
      data: 'data',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizErrorCode: 'number',
      data: { 'type': 'array', 'itemType': ListMtConnectorResponseBodyData },
      errorMessage: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMtConnectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMtConnectorResponseBody;
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
      body: ListMtConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponseBody extends $tea.Model {
  code?: string;
  data?: TranslateECommerceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TranslateECommerceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateECommerceResponseBody;
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
      body: TranslateECommerceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBody extends $tea.Model {
  code?: string;
  data?: TranslateGeneralResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TranslateGeneralResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateGeneralResponseBody;
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
      body: TranslateGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMtConnectorResponseBodyData extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponseBodyData extends $tea.Model {
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBodyData extends $tea.Model {
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "mt.cn-hangzhou.aliyuncs.com",
      'ap-northeast-1': "mt.aliyuncs.com",
      'ap-northeast-2-pop': "mt.aliyuncs.com",
      'ap-south-1': "mt.aliyuncs.com",
      'ap-southeast-1': "mt.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "mt.aliyuncs.com",
      'ap-southeast-3': "mt.aliyuncs.com",
      'ap-southeast-5': "mt.aliyuncs.com",
      'cn-beijing': "mt.aliyuncs.com",
      'cn-beijing-finance-1': "mt.aliyuncs.com",
      'cn-beijing-finance-pop': "mt.aliyuncs.com",
      'cn-beijing-gov-1': "mt.aliyuncs.com",
      'cn-beijing-nu16-b01': "mt.aliyuncs.com",
      'cn-chengdu': "mt.aliyuncs.com",
      'cn-edge-1': "mt.aliyuncs.com",
      'cn-fujian': "mt.aliyuncs.com",
      'cn-haidian-cm12-c01': "mt.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mt.aliyuncs.com",
      'cn-hangzhou-finance': "mt.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mt.aliyuncs.com",
      'cn-hangzhou-test-306': "mt.aliyuncs.com",
      'cn-hongkong': "mt.aliyuncs.com",
      'cn-hongkong-finance-pop': "mt.aliyuncs.com",
      'cn-huhehaote': "mt.aliyuncs.com",
      'cn-north-2-gov-1': "mt.aliyuncs.com",
      'cn-qingdao': "mt.aliyuncs.com",
      'cn-qingdao-nebula': "mt.aliyuncs.com",
      'cn-shanghai': "mt.aliyuncs.com",
      'cn-shanghai-et15-b01': "mt.aliyuncs.com",
      'cn-shanghai-et2-b01': "mt.aliyuncs.com",
      'cn-shanghai-finance-1': "mt.aliyuncs.com",
      'cn-shanghai-inner': "mt.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mt.aliyuncs.com",
      'cn-shenzhen': "mt.aliyuncs.com",
      'cn-shenzhen-finance-1': "mt.aliyuncs.com",
      'cn-shenzhen-inner': "mt.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mt.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mt.aliyuncs.com",
      'cn-wuhan': "mt.aliyuncs.com",
      'cn-yushanfang': "mt.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mt.aliyuncs.com",
      'cn-zhangjiakou': "mt.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mt.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mt.aliyuncs.com",
      'eu-central-1': "mt.aliyuncs.com",
      'eu-west-1': "mt.aliyuncs.com",
      'eu-west-1-oxs': "mt.aliyuncs.com",
      'me-east-1': "mt.aliyuncs.com",
      'rus-west-1-pop': "mt.aliyuncs.com",
      'us-east-1': "mt.aliyuncs.com",
      'us-west-1': "mt.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alimt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceResponse
   */
  async getResourceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2019-01-02",
      protocol: "HTTPS",
      pathname: `/api/resource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  /**
   * @return GetResourceResponse
   */
  async getResource(): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceWithOptions(headers, runtime);
  }

  /**
   * @summary 获取系统模型和AI模型
   *
   * @param request ListMtConnectorRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMtConnectorResponse
   */
  async listMtConnectorWithOptions(request: ListMtConnectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMtConnectorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMtConnector",
      version: "2019-01-02",
      protocol: "HTTPS",
      pathname: `/api/alynx/listMtModels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMtConnectorResponse>(await this.callApi(params, req, runtime), new ListMtConnectorResponse({}));
  }

  /**
   * @summary 获取系统模型和AI模型
   *
   * @param request ListMtConnectorRequest
   * @return ListMtConnectorResponse
   */
  async listMtConnector(request: ListMtConnectorRequest): Promise<ListMtConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMtConnectorWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateECommerceResponse
   */
  async translateECommerceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TranslateECommerceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "TranslateECommerce",
      version: "2019-01-02",
      protocol: "HTTPS",
      pathname: `/api/translate/web/ecommerce`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TranslateECommerceResponse>(await this.callApi(params, req, runtime), new TranslateECommerceResponse({}));
  }

  /**
   * @return TranslateECommerceResponse
   */
  async translateECommerce(): Promise<TranslateECommerceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.translateECommerceWithOptions(headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateGeneralResponse
   */
  async translateGeneralWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TranslateGeneralResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "TranslateGeneral",
      version: "2019-01-02",
      protocol: "HTTPS",
      pathname: `/api/translate/web/general`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TranslateGeneralResponse>(await this.callApi(params, req, runtime), new TranslateGeneralResponse({}));
  }

  /**
   * @return TranslateGeneralResponse
   */
  async translateGeneral(): Promise<TranslateGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.translateGeneralWithOptions(headers, runtime);
  }

}
