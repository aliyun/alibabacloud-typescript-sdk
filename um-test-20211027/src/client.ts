// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetOssUploadParamRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  fileName?: string;
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      fileName: 'fileName',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      fileName: 'string',
      fileType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadParamResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  data?: GetOssUploadParamResponseBodyData;
  msg?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      data: GetOssUploadParamResponseBodyData,
      msg: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssUploadParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssUploadParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadParamResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  callback?: string;
  key?: string;
  policy?: string;
  signature?: string;
  uploadAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      callback: 'callback',
      key: 'key',
      policy: 'policy',
      signature: 'signature',
      uploadAddress: 'uploadAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      callback: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      uploadAddress: 'string',
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
    this._endpoint = this.getEndpoint("um-test", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getOssUploadParamWithOptions(request: GetOssUploadParamRequest, runtime: $Util.RuntimeOptions): Promise<GetOssUploadParamResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssUploadParam",
      version: "2021-10-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssUploadParamResponse>(await this.callApi(params, req, runtime), new GetOssUploadParamResponse({}));
  }

  async getOssUploadParam(request: GetOssUploadParamRequest): Promise<GetOssUploadParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssUploadParamWithOptions(request, runtime);
  }

}
