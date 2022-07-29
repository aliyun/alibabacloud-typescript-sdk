// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataRateLimitTestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRateLimitTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DataRateLimitTestResponseBody;
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
      body: DataRateLimitTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NormalRpcHsfApiResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NormalRpcHsfApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: NormalRpcHsfApiResponseBody;
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
      body: NormalRpcHsfApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NormalRpcHttpApiResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NormalRpcHttpApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: NormalRpcHttpApiResponseBody;
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
      body: NormalRpcHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadRequest extends $tea.Model {
  largeParam?: string;
  query1?: string;
  query2?: number;
  static names(): { [key: string]: string } {
    return {
      largeParam: 'largeParam',
      query1: 'query1',
      query2: 'query2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      largeParam: 'string',
      query1: 'string',
      query2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadResponseBody extends $tea.Model {
  requestId?: string;
  headers?: { [key: string]: any };
  params?: { [key: string]: any };
  speed?: string;
  totalBytes?: number;
  totalTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'headers',
      params: 'params',
      speed: 'speed',
      totalBytes: 'totalBytes',
      totalTime: 'totalTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      speed: 'string',
      totalBytes: 'number',
      totalTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RpcDataUploadResponseBody;
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
      body: RpcDataUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadAndDownloadRequest extends $tea.Model {
  query1?: string;
  static names(): { [key: string]: string } {
    return {
      query1: 'query1',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query1: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadAndDownloadResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadAndDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RpcDataUploadAndDownloadResponseBody;
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
      body: RpcDataUploadAndDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadTestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RpcDataUploadTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RpcDataUploadTestResponseBody;
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
      body: RpcDataUploadTestResponseBody,
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

  async dataRateLimitTestWithOptions(runtime: $Util.RuntimeOptions): Promise<DataRateLimitTestResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DataRateLimitTest",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DataRateLimitTestResponse>(await this.callApi(params, req, runtime), new DataRateLimitTestResponse({}));
  }

  async dataRateLimitTest(): Promise<DataRateLimitTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dataRateLimitTestWithOptions(runtime);
  }

  async normalRpcHsfApiWithOptions(runtime: $Util.RuntimeOptions): Promise<NormalRpcHsfApiResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "NormalRpcHsfApi",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NormalRpcHsfApiResponse>(await this.callApi(params, req, runtime), new NormalRpcHsfApiResponse({}));
  }

  async normalRpcHsfApi(): Promise<NormalRpcHsfApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.normalRpcHsfApiWithOptions(runtime);
  }

  async normalRpcHttpApiWithOptions(runtime: $Util.RuntimeOptions): Promise<NormalRpcHttpApiResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "NormalRpcHttpApi",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NormalRpcHttpApiResponse>(await this.callApi(params, req, runtime), new NormalRpcHttpApiResponse({}));
  }

  async normalRpcHttpApi(): Promise<NormalRpcHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.normalRpcHttpApiWithOptions(runtime);
  }

  async rpcDataUploadWithOptions(request: RpcDataUploadRequest, runtime: $Util.RuntimeOptions): Promise<RpcDataUploadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.query1)) {
      query["query1"] = request.query1;
    }

    if (!Util.isUnset(request.query2)) {
      query["query2"] = request.query2;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.largeParam)) {
      body["largeParam"] = request.largeParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RpcDataUpload",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RpcDataUploadResponse>(await this.callApi(params, req, runtime), new RpcDataUploadResponse({}));
  }

  async rpcDataUpload(request: RpcDataUploadRequest): Promise<RpcDataUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rpcDataUploadWithOptions(request, runtime);
  }

  async rpcDataUploadAndDownloadWithOptions(request: RpcDataUploadAndDownloadRequest, runtime: $Util.RuntimeOptions): Promise<RpcDataUploadAndDownloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.query1)) {
      query["query1"] = request.query1;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RpcDataUploadAndDownload",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RpcDataUploadAndDownloadResponse>(await this.callApi(params, req, runtime), new RpcDataUploadAndDownloadResponse({}));
  }

  async rpcDataUploadAndDownload(request: RpcDataUploadAndDownloadRequest): Promise<RpcDataUploadAndDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rpcDataUploadAndDownloadWithOptions(request, runtime);
  }

  async rpcDataUploadTestWithOptions(runtime: $Util.RuntimeOptions): Promise<RpcDataUploadTestResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RpcDataUploadTest",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RpcDataUploadTestResponse>(await this.callApi(params, req, runtime), new RpcDataUploadTestResponse({}));
  }

  async rpcDataUploadTest(): Promise<RpcDataUploadTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rpcDataUploadTestWithOptions(runtime);
  }

}
