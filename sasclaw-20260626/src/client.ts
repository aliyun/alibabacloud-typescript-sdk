// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sasclaw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Claw SSE Chat
   * 
   * @param request - ChatUserSecAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatUserSecAgentResponse
   */
  async *chatUserSecAgentWithSSE(request: $_model.ChatUserSecAgentRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatUserSecAgentResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agent)) {
      body["Agent"] = request.agent;
    }

    if (!$dara.isNull(request.attachmentStagingId)) {
      body["AttachmentStagingId"] = request.attachmentStagingId;
    }

    if (!$dara.isNull(request.attachments)) {
      body["Attachments"] = request.attachments;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.executionMode)) {
      body["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.responseLanguage)) {
      body["ResponseLanguage"] = request.responseLanguage;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.skill)) {
      body["Skill"] = request.skill;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.talkId)) {
      body["TalkId"] = request.talkId;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.userInputInfo)) {
      body["UserInputInfo"] = request.userInputInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatUserSecAgent",
      version: "2026-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.ChatUserSecAgentResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ChatUserSecAgentResponse({}));
      }

    }
  }

  /**
   * Claw SSE Chat
   * 
   * @param request - ChatUserSecAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatUserSecAgentResponse
   */
  async chatUserSecAgentWithOptions(request: $_model.ChatUserSecAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatUserSecAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agent)) {
      body["Agent"] = request.agent;
    }

    if (!$dara.isNull(request.attachmentStagingId)) {
      body["AttachmentStagingId"] = request.attachmentStagingId;
    }

    if (!$dara.isNull(request.attachments)) {
      body["Attachments"] = request.attachments;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.executionMode)) {
      body["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.responseLanguage)) {
      body["ResponseLanguage"] = request.responseLanguage;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.skill)) {
      body["Skill"] = request.skill;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.talkId)) {
      body["TalkId"] = request.talkId;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.userInputInfo)) {
      body["UserInputInfo"] = request.userInputInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatUserSecAgent",
      version: "2026-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    return $dara.cast<$_model.ChatUserSecAgentResponse>(await this.callApi(params, req, runtime), new $_model.ChatUserSecAgentResponse({}));
  }

  /**
   * Claw SSE Chat
   * 
   * @param request - ChatUserSecAgentRequest
   * @returns ChatUserSecAgentResponse
   */
  async chatUserSecAgent(request: $_model.ChatUserSecAgentRequest): Promise<$_model.ChatUserSecAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatUserSecAgentWithOptions(request, runtime);
  }

}
