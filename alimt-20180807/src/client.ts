// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class MachineTranslateECommerceRequest extends $tea.Model {
  contentFormat?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      contentFormat: 'ContentFormat',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentFormat: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateECommerceResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: MachineTranslateECommerceResponseBodyResultCode;
  success?: boolean;
  translateText?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      success: 'Success',
      translateText: 'TranslateText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: MachineTranslateECommerceResponseBodyResultCode,
      success: 'boolean',
      translateText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateECommerceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MachineTranslateECommerceResponseBody;
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
      body: MachineTranslateECommerceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateGeneralRequest extends $tea.Model {
  contentFormat?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      contentFormat: 'ContentFormat',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentFormat: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateGeneralResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: MachineTranslateGeneralResponseBodyResultCode;
  success?: boolean;
  translateText?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      success: 'Success',
      translateText: 'TranslateText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: MachineTranslateGeneralResponseBodyResultCode,
      success: 'boolean',
      translateText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MachineTranslateGeneralResponseBody;
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
      body: MachineTranslateGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateECommerceResponseBodyResultCode extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineTranslateGeneralResponseBodyResultCode extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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
   * @param request MachineTranslateECommerceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MachineTranslateECommerceResponse
   */
  async machineTranslateECommerceWithOptions(request: MachineTranslateECommerceRequest, runtime: $Util.RuntimeOptions): Promise<MachineTranslateECommerceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentFormat)) {
      body["ContentFormat"] = request.contentFormat;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MachineTranslateECommerce",
      version: "2018-08-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MachineTranslateECommerceResponse>(await this.callApi(params, req, runtime), new MachineTranslateECommerceResponse({}));
  }

  /**
   * @param request MachineTranslateECommerceRequest
   * @return MachineTranslateECommerceResponse
   */
  async machineTranslateECommerce(request: MachineTranslateECommerceRequest): Promise<MachineTranslateECommerceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.machineTranslateECommerceWithOptions(request, runtime);
  }

  /**
   * @param request MachineTranslateGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MachineTranslateGeneralResponse
   */
  async machineTranslateGeneralWithOptions(request: MachineTranslateGeneralRequest, runtime: $Util.RuntimeOptions): Promise<MachineTranslateGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentFormat)) {
      body["ContentFormat"] = request.contentFormat;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MachineTranslateGeneral",
      version: "2018-08-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MachineTranslateGeneralResponse>(await this.callApi(params, req, runtime), new MachineTranslateGeneralResponse({}));
  }

  /**
   * @param request MachineTranslateGeneralRequest
   * @return MachineTranslateGeneralResponse
   */
  async machineTranslateGeneral(request: MachineTranslateGeneralRequest): Promise<MachineTranslateGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.machineTranslateGeneralWithOptions(request, runtime);
  }

}
