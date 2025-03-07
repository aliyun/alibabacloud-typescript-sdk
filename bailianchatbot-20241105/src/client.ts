// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class SseChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-dDmF3jcdVf
   */
  appId?: string;
  /**
   * @example
   * TIMEOUT
   */
  command?: string;
  /**
   * @example
   * uid129312098593
   */
  senderId?: string;
  senderNick?: string;
  /**
   * @example
   * 15e04f27-acd7-489d-872f-1d68f7535e33
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  utterance?: string;
  vendorParam?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-g7jspxljq8k909h3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      command: 'Command',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      command: 'string',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SseChatResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: any;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 30D68C4C-4512-58A7-A328-568015B39A02
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SseChatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SseChatResponseBody;
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
      body: SseChatResponseBody,
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
    this._endpoint = this.getEndpoint("bailianchatbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * SSE问答接口
   * 
   * @param request - SseChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SseChatResponse
   */
  async sseChatWithOptions(request: SseChatRequest, runtime: $dara.RuntimeOptions): Promise<SseChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.senderId)) {
      query["SenderId"] = request.senderId;
    }

    if (!$dara.isNull(request.senderNick)) {
      query["SenderNick"] = request.senderNick;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    if (!$dara.isNull(request.vendorParam)) {
      query["VendorParam"] = request.vendorParam;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SseChat",
      version: "2024-11-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SseChatResponse>(await this.callApi(params, req, runtime), new SseChatResponse({}));
    } else {
      return $dara.cast<SseChatResponse>(await this.execute(params, req, runtime), new SseChatResponse({}));
    }

  }

  /**
   * SSE问答接口
   * 
   * @param request - SseChatRequest
   * @returns SseChatResponse
   */
  async sseChat(request: SseChatRequest): Promise<SseChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sseChatWithOptions(request, runtime);
  }

}
