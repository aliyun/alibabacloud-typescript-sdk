// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DefaultDegradeRuleRequest extends $tea.Model {
  request?: string;
  response?: string;
  RT?: number;
  responseSize?: number;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      response: 'Response',
      RT: 'RT',
      responseSize: 'ResponseSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: 'string',
      response: 'string',
      RT: 'number',
      responseSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultDegradeRuleResponseBody extends $tea.Model {
  requestId?: string;
  size?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DefaultDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DefaultDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultDegradeRuleTestRequest extends $tea.Model {
  request?: string;
  response?: string;
  RT?: number;
  responseSize?: number;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      response: 'Response',
      RT: 'RT',
      responseSize: 'ResponseSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: 'string',
      response: 'string',
      RT: 'number',
      responseSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultDegradeRuleTestResponseBody extends $tea.Model {
  requestId?: string;
  size?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultDegradeRuleTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DefaultDegradeRuleTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DefaultDegradeRuleTestResponseBody,
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
      'ap-northeast-2-pop': "ft.aliyuncs.com",
      'ap-south-1': "ft.aliyuncs.com",
      'ap-southeast-1': "ft.aliyuncs.com",
      'ap-southeast-2': "ft.aliyuncs.com",
      'ap-southeast-3': "ft.aliyuncs.com",
      'ap-southeast-5': "ft.aliyuncs.com",
      'cn-beijing': "ft.aliyuncs.com",
      'cn-beijing-finance-1': "ft.aliyuncs.com",
      'cn-beijing-finance-pop': "ft.aliyuncs.com",
      'cn-beijing-gov-1': "ft.aliyuncs.com",
      'cn-beijing-nu16-b01': "ft.aliyuncs.com",
      'cn-chengdu': "ft.aliyuncs.com",
      'cn-edge-1': "ft.aliyuncs.com",
      'cn-fujian': "ft.aliyuncs.com",
      'cn-haidian-cm12-c01': "ft.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ft.aliyuncs.com",
      'cn-hangzhou-finance': "ft.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ft.aliyuncs.com",
      'cn-hangzhou-test-306': "ft.aliyuncs.com",
      'cn-hongkong-finance-pop': "ft.aliyuncs.com",
      'cn-huhehaote': "ft.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ft.aliyuncs.com",
      'cn-qingdao': "ft.aliyuncs.com",
      'cn-qingdao-nebula': "ft.aliyuncs.com",
      'cn-shanghai-et15-b01': "ft.aliyuncs.com",
      'cn-shanghai-et2-b01': "ft.aliyuncs.com",
      'cn-shanghai-finance-1': "ft.aliyuncs.com",
      'cn-shanghai-inner': "ft.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ft.aliyuncs.com",
      'cn-shenzhen-finance-1': "ft.aliyuncs.com",
      'cn-shenzhen-inner': "ft.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ft.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ft.aliyuncs.com",
      'cn-wuhan': "ft.aliyuncs.com",
      'cn-wulanchabu': "ft.aliyuncs.com",
      'cn-yushanfang': "ft.aliyuncs.com",
      'cn-zhangbei': "ft.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ft.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ft.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ft.aliyuncs.com",
      'eu-central-1': "ft.aliyuncs.com",
      'eu-west-1': "ft.aliyuncs.com",
      'eu-west-1-oxs': "ft.aliyuncs.com",
      'me-east-1': "ft.aliyuncs.com",
      'rus-west-1-pop': "ft.aliyuncs.com",
      'us-west-1': "ft.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ft", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async defaultDegradeRuleWithOptions(request: DefaultDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<DefaultDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DefaultDegradeRuleResponse>(await this.doRPCRequest("DefaultDegradeRule", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DefaultDegradeRuleResponse({}));
  }

  async defaultDegradeRule(request: DefaultDegradeRuleRequest): Promise<DefaultDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.defaultDegradeRuleWithOptions(request, runtime);
  }

  async defaultDegradeRuleTestWithOptions(request: DefaultDegradeRuleTestRequest, runtime: $Util.RuntimeOptions): Promise<DefaultDegradeRuleTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DefaultDegradeRuleTestResponse>(await this.doRPCRequest("DefaultDegradeRuleTest", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DefaultDegradeRuleTestResponse({}));
  }

  async defaultDegradeRuleTest(request: DefaultDegradeRuleTestRequest): Promise<DefaultDegradeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.defaultDegradeRuleTestWithOptions(request, runtime);
  }

}
