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
  headers: { [key: string]: string };
  statusCode: number;
  body: ActualDeductResourceResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DirectDeductResourceResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ExpectDeductResourceResult;
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

}
