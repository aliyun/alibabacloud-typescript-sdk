// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetPromptRequest extends $dara.Model {
  /**
   * @example
   * chat
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptResponseBody extends $dara.Model {
  /**
   * @example
   * {$PromptContent}
   */
  data?: any;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BDA59622-2114-5F68-A530-3FCACAF0F04F
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPromptResponseBody;
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
      body: GetPromptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushPromptRequest extends $dara.Model {
  /**
   * @example
   * chat
   */
  groupId?: string;
  /**
   * @example
   * {}
   */
  promptContent?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      promptContent: 'promptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      promptContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushPromptResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: any;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5090DEE5-E7DB-59A8-B712-28918D3AAA8A
   */
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushPromptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushPromptResponseBody;
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
      body: PushPromptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dashdeviceconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * get prompt
   * 
   * @param request - GetPromptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptResponse
   */
  async getPromptWithOptions(request: GetPromptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPromptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrompt",
      version: "2025-04-08",
      protocol: "HTTPS",
      pathname: `/prompt/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPromptResponse>(await this.callApi(params, req, runtime), new GetPromptResponse({}));
    } else {
      return $dara.cast<GetPromptResponse>(await this.execute(params, req, runtime), new GetPromptResponse({}));
    }

  }

  /**
   * get prompt
   * 
   * @param request - GetPromptRequest
   * @returns GetPromptResponse
   */
  async getPrompt(request: GetPromptRequest): Promise<GetPromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPromptWithOptions(request, headers, runtime);
  }

  /**
   * push prompt
   * 
   * @param request - PushPromptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushPromptResponse
   */
  async pushPromptWithOptions(request: PushPromptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PushPromptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.promptContent)) {
      body["promptContent"] = request.promptContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushPrompt",
      version: "2025-04-08",
      protocol: "HTTPS",
      pathname: `/prompt/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushPromptResponse>(await this.callApi(params, req, runtime), new PushPromptResponse({}));
    } else {
      return $dara.cast<PushPromptResponse>(await this.execute(params, req, runtime), new PushPromptResponse({}));
    }

  }

  /**
   * push prompt
   * 
   * @param request - PushPromptRequest
   * @returns PushPromptResponse
   */
  async pushPrompt(request: PushPromptRequest): Promise<PushPromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushPromptWithOptions(request, headers, runtime);
  }

}
