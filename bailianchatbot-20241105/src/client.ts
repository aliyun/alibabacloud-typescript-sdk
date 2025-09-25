// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

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
  async *sseChatWithSSE(request: $_model.SseChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.SseChatResponse, any, unknown> {
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.SseChatResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.SseChatResponse({}));
    }
  }

  /**
   * SSE问答接口
   * 
   * @param request - SseChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SseChatResponse
   */
  async sseChatWithOptions(request: $_model.SseChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SseChatResponse> {
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
    return $dara.cast<$_model.SseChatResponse>(await this.callApi(params, req, runtime), new $_model.SseChatResponse({}));
  }

  /**
   * SSE问答接口
   * 
   * @param request - SseChatRequest
   * @returns SseChatResponse
   */
  async sseChat(request: $_model.SseChatRequest): Promise<$_model.SseChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sseChatWithOptions(request, runtime);
  }

}
