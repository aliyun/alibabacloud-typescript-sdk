// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EdasProduceRequest extends $tea.Model {
  data?: string;
  sourceFlag?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      sourceFlag: 'sourceFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      sourceFlag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EdasProduceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  success?: boolean;
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      success: 'success',
      synchro: 'synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EdasProduceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EdasProduceResponseBody;
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
      body: EdasProduceResponseBody,
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
      'ap-northeast-2-pop': "edas.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "edas.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "edas.aliyuncs.com",
      'cn-beijing-finance-pop': "edas.aliyuncs.com",
      'cn-beijing-gov-1': "edas.aliyuncs.com",
      'cn-beijing-nu16-b01': "edas.aliyuncs.com",
      'cn-chengdu': "edas.aliyuncs.com",
      'cn-edge-1': "edas.aliyuncs.com",
      'cn-fujian': "edas.aliyuncs.com",
      'cn-haidian-cm12-c01': "edas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "edas.aliyuncs.com",
      'cn-hangzhou-finance': "edas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "edas.aliyuncs.com",
      'cn-hangzhou-test-306': "edas.aliyuncs.com",
      'cn-hongkong-finance-pop': "edas.aliyuncs.com",
      'cn-huhehaote': "edas.aliyuncs.com",
      'cn-qingdao-nebula': "edas.aliyuncs.com",
      'cn-shanghai-et15-b01': "edas.aliyuncs.com",
      'cn-shanghai-et2-b01': "edas.aliyuncs.com",
      'cn-shanghai-finance-1': "edas.aliyuncs.com",
      'cn-shanghai-inner': "edas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "edas.aliyuncs.com",
      'cn-shenzhen-finance-1': "edas.aliyuncs.com",
      'cn-shenzhen-inner': "edas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "edas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "edas.aliyuncs.com",
      'cn-wuhan': "edas.aliyuncs.com",
      'cn-yushanfang': "edas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "edas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "edas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "edas.aliyuncs.com",
      'eu-west-1': "edas.ap-northeast-1.aliyuncs.com",
      'eu-west-1-oxs': "edas.ap-northeast-1.aliyuncs.com",
      'me-east-1': "edas.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "edas.ap-northeast-1.aliyuncs.com",
      'us-west-1': "edas.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("edas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async edasProduceWithOptions(request: EdasProduceRequest, runtime: $Util.RuntimeOptions): Promise<EdasProduceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["data"] = request.data;
    }

    if (!Util.isUnset(request.sourceFlag)) {
      query["sourceFlag"] = request.sourceFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EdasProduce",
      version: "2017-04-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EdasProduceResponse>(await this.callApi(params, req, runtime), new EdasProduceResponse({}));
  }

  async edasProduce(request: EdasProduceRequest): Promise<EdasProduceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.edasProduceWithOptions(request, runtime);
  }

}
