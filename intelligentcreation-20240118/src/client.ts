// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActualDeductResourceCmd extends $tea.Model {
  cost?: number;
  extraInfo?: string;
  idempotentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      extraInfo: 'string',
      idempotentId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourceResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceCmd extends $tea.Model {
  accountId?: string;
  cost?: number;
  deductScene?: string;
  extraInfo?: string;
  idempotentId?: string;
  resourceType?: number;
  subAccountId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      cost: 'cost',
      deductScene: 'deductScene',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      resourceType: 'resourceType',
      subAccountId: 'subAccountId',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cost: 'number',
      deductScene: 'string',
      extraInfo: 'string',
      idempotentId: 'string',
      resourceType: 'number',
      subAccountId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceCmd extends $tea.Model {
  accountId?: string;
  cost?: number;
  extraInfo?: string;
  idempotentId?: string;
  resourceType?: number;
  subAccountId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      cost: 'cost',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      resourceType: 'resourceType',
      subAccountId: 'subAccountId',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cost: 'number',
      extraInfo: 'string',
      idempotentId: 'string',
      resourceType: 'number',
      subAccountId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceResult extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourceRequest extends $tea.Model {
  body?: ActualDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ActualDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActualDeductResourceResult;
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
      body: ActualDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourcesRequest extends $tea.Model {
  body?: ActualDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ActualDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActualDeductResourceResult;
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
      body: ActualDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceRequest extends $tea.Model {
  body?: DirectDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DirectDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DirectDeductResourceResult;
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
      body: DirectDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourcesRequest extends $tea.Model {
  body?: DirectDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DirectDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DirectDeductResourceResult;
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
      body: DirectDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceRequest extends $tea.Model {
  body?: ExpectDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ExpectDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpectDeductResourceResult;
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
      body: ExpectDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourcesRequest extends $tea.Model {
  body?: ExpectDeductResourceCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ExpectDeductResourceCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpectDeductResourceResult;
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
      body: ExpectDeductResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemainResourceRequest extends $tea.Model {
  accountId?: string;
  resourceType?: string;
  subAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      resourceType: 'resourceType',
      subAccountId: 'subAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      resourceType: 'string',
      subAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemainResourceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  remainCount?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      remainCount: 'remainCount',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      remainCount: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemainResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRemainResourceResponseBody;
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
      body: GetRemainResourceResponseBody,
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async actualDeductResourceWithOptions(request: ActualDeductResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ActualDeductResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ActualDeductResource",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/digital-human/commands/actual-deduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ActualDeductResourceResponse>(await this.callApi(params, req, runtime), new ActualDeductResourceResponse({}));
  }

  async actualDeductResource(request: ActualDeductResourceRequest): Promise<ActualDeductResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.actualDeductResourceWithOptions(request, headers, runtime);
  }

  async actualDeductResourcesWithOptions(request: ActualDeductResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ActualDeductResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ActualDeductResources",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/commands/actualDeductResources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ActualDeductResourcesResponse>(await this.callApi(params, req, runtime), new ActualDeductResourcesResponse({}));
  }

  async actualDeductResources(request: ActualDeductResourcesRequest): Promise<ActualDeductResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.actualDeductResourcesWithOptions(request, headers, runtime);
  }

  async directDeductResourceWithOptions(request: DirectDeductResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DirectDeductResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "DirectDeductResource",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/digital-human/commands/direct-deduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DirectDeductResourceResponse>(await this.callApi(params, req, runtime), new DirectDeductResourceResponse({}));
  }

  async directDeductResource(request: DirectDeductResourceRequest): Promise<DirectDeductResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.directDeductResourceWithOptions(request, headers, runtime);
  }

  async directDeductResourcesWithOptions(request: DirectDeductResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DirectDeductResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "DirectDeductResources",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/commands/directDeductResources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DirectDeductResourcesResponse>(await this.callApi(params, req, runtime), new DirectDeductResourcesResponse({}));
  }

  async directDeductResources(request: DirectDeductResourcesRequest): Promise<DirectDeductResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.directDeductResourcesWithOptions(request, headers, runtime);
  }

  async expectDeductResourceWithOptions(request: ExpectDeductResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExpectDeductResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ExpectDeductResource",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/digital-human/commands/expect-deduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExpectDeductResourceResponse>(await this.callApi(params, req, runtime), new ExpectDeductResourceResponse({}));
  }

  async expectDeductResource(request: ExpectDeductResourceRequest): Promise<ExpectDeductResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.expectDeductResourceWithOptions(request, headers, runtime);
  }

  async expectDeductResourcesWithOptions(request: ExpectDeductResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExpectDeductResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ExpectDeductResources",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/commands/expectDeductResources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExpectDeductResourcesResponse>(await this.callApi(params, req, runtime), new ExpectDeductResourcesResponse({}));
  }

  async expectDeductResources(request: ExpectDeductResourcesRequest): Promise<ExpectDeductResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.expectDeductResourcesWithOptions(request, headers, runtime);
  }

  async getRemainResourceWithOptions(request: GetRemainResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRemainResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      query["accountId"] = request.accountId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.subAccountId)) {
      query["subAccountId"] = request.subAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRemainResource",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/commands/getRemainResource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRemainResourceResponse>(await this.callApi(params, req, runtime), new GetRemainResourceResponse({}));
  }

  async getRemainResource(request: GetRemainResourceRequest): Promise<GetRemainResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRemainResourceWithOptions(request, headers, runtime);
  }

}
