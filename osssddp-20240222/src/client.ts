// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetSddpVersionRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSddpVersionResponseBody extends $tea.Model {
  content?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSddpVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSddpVersionResponseBody;
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
      body: GetSddpVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSddpVersionRequest extends $tea.Model {
  clientToken?: string;
  ossVersion?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ossVersion: 'OssVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ossVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSddpVersionResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSddpVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeSddpVersionResponseBody;
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
      body: UpgradeSddpVersionResponseBody,
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
    this._endpoint = this.getEndpoint("osssddp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查看用户的敏感数据保护版本信息
   * 
   * @param request - GetSddpVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSddpVersionResponse
   */
  async getSddpVersionWithOptions(request: GetSddpVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetSddpVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSddpVersion",
      version: "2024-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSddpVersionResponse>(await this.callApi(params, req, runtime), new GetSddpVersionResponse({}));
  }

  /**
   * 查看用户的敏感数据保护版本信息
   * 
   * @param request - GetSddpVersionRequest
   * @returns GetSddpVersionResponse
   */
  async getSddpVersion(request: GetSddpVersionRequest): Promise<GetSddpVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSddpVersionWithOptions(request, runtime);
  }

  /**
   * 升级敏感数据保护版本
   * 
   * @param request - UpgradeSddpVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeSddpVersionResponse
   */
  async upgradeSddpVersionWithOptions(request: UpgradeSddpVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeSddpVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ossVersion)) {
      query["OssVersion"] = request.ossVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeSddpVersion",
      version: "2024-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeSddpVersionResponse>(await this.callApi(params, req, runtime), new UpgradeSddpVersionResponse({}));
  }

  /**
   * 升级敏感数据保护版本
   * 
   * @param request - UpgradeSddpVersionRequest
   * @returns UpgradeSddpVersionResponse
   */
  async upgradeSddpVersion(request: UpgradeSddpVersionRequest): Promise<UpgradeSddpVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeSddpVersionWithOptions(request, runtime);
  }

}
