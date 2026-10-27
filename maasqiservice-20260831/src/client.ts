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
    this._endpoint = this.getEndpoint("maasqiservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Calls a published Creative Agent with support for Lite and Dedicated editions, and returns execution progress and image artifacts by using Server-Sent Events (SSE). The Lite edition performs text-to-image or image-to-image generation depending on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute generation and editing tasks with multi-turn conversation support. Pass generation count, dimensions, and other parameters through metadata.parameters. Image URLs are included in the artifacts of the result.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK Center.
   * - Activate the Creative Agent service and prepare the published instance ID and the corresponding instance access key.
   * - Creative Agent provides Lite and Dedicated editions. The Lite edition generates or edits images based on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute creative tasks.
   * - Complete AccessKey authentication by using the SDK. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /aigc/v1/chat/completions`.
   * - Specify the instance by using `X-QI-Instance-Id`. The request is executed based on the published configuration of the specified instance. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - This operation returns incremental events instead of a complete JSON response. Continue reading until the stream ends and check for in-stream errors.
   * ### Session management
   * You can omit `X-QI-Session-Id` for the first turn. Save the session identifier returned by the server from the `qi_session_id` field in the SSE body, and pass the same value back in subsequent turns. Do not rely on the gateway to pass through custom response headers. Use different identifiers for different sessions and send requests sequentially within the same session.
   * 
   * @param request - AigcChatCompletionStreamRequest
   * @param headers - AigcChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AigcChatCompletionStreamResponse
   */
  async *aigcChatCompletionStreamWithSSE(request: $_model.AigcChatCompletionStreamRequest, headers: $_model.AigcChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AigcChatCompletionStreamResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AigcChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/aigc/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.AigcChatCompletionStreamResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.AigcChatCompletionStreamResponse({}));
      }

    }
  }

  /**
   * Calls a published Creative Agent with support for Lite and Dedicated editions, and returns execution progress and image artifacts by using Server-Sent Events (SSE). The Lite edition performs text-to-image or image-to-image generation depending on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute generation and editing tasks with multi-turn conversation support. Pass generation count, dimensions, and other parameters through metadata.parameters. Image URLs are included in the artifacts of the result.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK Center.
   * - Activate the Creative Agent service and prepare the published instance ID and the corresponding instance access key.
   * - Creative Agent provides Lite and Dedicated editions. The Lite edition generates or edits images based on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute creative tasks.
   * - Complete AccessKey authentication by using the SDK. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /aigc/v1/chat/completions`.
   * - Specify the instance by using `X-QI-Instance-Id`. The request is executed based on the published configuration of the specified instance. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - This operation returns incremental events instead of a complete JSON response. Continue reading until the stream ends and check for in-stream errors.
   * ### Session management
   * You can omit `X-QI-Session-Id` for the first turn. Save the session identifier returned by the server from the `qi_session_id` field in the SSE body, and pass the same value back in subsequent turns. Do not rely on the gateway to pass through custom response headers. Use different identifiers for different sessions and send requests sequentially within the same session.
   * 
   * @param request - AigcChatCompletionStreamRequest
   * @param headers - AigcChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AigcChatCompletionStreamResponse
   */
  async aigcChatCompletionStreamWithOptions(request: $_model.AigcChatCompletionStreamRequest, headers: $_model.AigcChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AigcChatCompletionStreamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AigcChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/aigc/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AigcChatCompletionStreamResponse>(await this.callApi(params, req, runtime), new $_model.AigcChatCompletionStreamResponse({}));
  }

  /**
   * Calls a published Creative Agent with support for Lite and Dedicated editions, and returns execution progress and image artifacts by using Server-Sent Events (SSE). The Lite edition performs text-to-image or image-to-image generation depending on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute generation and editing tasks with multi-turn conversation support. Pass generation count, dimensions, and other parameters through metadata.parameters. Image URLs are included in the artifacts of the result.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK Center.
   * - Activate the Creative Agent service and prepare the published instance ID and the corresponding instance access key.
   * - Creative Agent provides Lite and Dedicated editions. The Lite edition generates or edits images based on whether a reference image is provided. The Dedicated edition uses a Planner to plan and execute creative tasks.
   * - Complete AccessKey authentication by using the SDK. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /aigc/v1/chat/completions`.
   * - Specify the instance by using `X-QI-Instance-Id`. The request is executed based on the published configuration of the specified instance. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - This operation returns incremental events instead of a complete JSON response. Continue reading until the stream ends and check for in-stream errors.
   * ### Session management
   * You can omit `X-QI-Session-Id` for the first turn. Save the session identifier returned by the server from the `qi_session_id` field in the SSE body, and pass the same value back in subsequent turns. Do not rely on the gateway to pass through custom response headers. Use different identifiers for different sessions and send requests sequentially within the same session.
   * 
   * @param request - AigcChatCompletionStreamRequest
   * @returns AigcChatCompletionStreamResponse
   */
  async aigcChatCompletionStream(request: $_model.AigcChatCompletionStreamRequest): Promise<$_model.AigcChatCompletionStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AigcChatCompletionStreamHeaders({ });
    return await this.aigcChatCompletionStreamWithOptions(request, headers, runtime);
  }

  /**
   * 调用已发布 CUAStandard 实例，根据任务和桌面截图生成电脑操作单步决策，以 SSE 返回 computer_use 工具调用
   * 
   * @param request - CuaChatCompletionStreamRequest
   * @param headers - CuaChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CuaChatCompletionStreamResponse
   */
  async *cuaChatCompletionStreamWithSSE(request: $_model.CuaChatCompletionStreamRequest, headers: $_model.CuaChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CuaChatCompletionStreamResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CuaChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/cua/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CuaChatCompletionStreamResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CuaChatCompletionStreamResponse({}));
      }

    }
  }

  /**
   * 调用已发布 CUAStandard 实例，根据任务和桌面截图生成电脑操作单步决策，以 SSE 返回 computer_use 工具调用
   * 
   * @param request - CuaChatCompletionStreamRequest
   * @param headers - CuaChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CuaChatCompletionStreamResponse
   */
  async cuaChatCompletionStreamWithOptions(request: $_model.CuaChatCompletionStreamRequest, headers: $_model.CuaChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CuaChatCompletionStreamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CuaChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/cua/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CuaChatCompletionStreamResponse>(await this.callApi(params, req, runtime), new $_model.CuaChatCompletionStreamResponse({}));
  }

  /**
   * 调用已发布 CUAStandard 实例，根据任务和桌面截图生成电脑操作单步决策，以 SSE 返回 computer_use 工具调用
   * 
   * @param request - CuaChatCompletionStreamRequest
   * @returns CuaChatCompletionStreamResponse
   */
  async cuaChatCompletionStream(request: $_model.CuaChatCompletionStreamRequest): Promise<$_model.CuaChatCompletionStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CuaChatCompletionStreamHeaders({ });
    return await this.cuaChatCompletionStreamWithOptions(request, headers, runtime);
  }

  /**
   * Calls a published Mobile-Use Agent instance, which supports the Standard Edition and Dedicated Edition. Submits the task text and the current screen screenshot, passes the device and application context through metadata, and returns the next mobile UI operation by using Server-Sent Events (SSE). The caller executes the UI operation and then continues to call the API with the session ID and the latest screenshot.
   * 
   * @remarks
   * ### Prerequisites
   * - Install the SDK from the SDK Center.
   * - Activate the Mobile-Use Agent service and prepare the ID and access key of a published Mobile-Use Agent instance.
   * - Mobile-Use Agent provides the Standard Edition and Dedicated Edition. Call the API based on the edition of the selected instance.
   * - Use the SDK to complete AccessKey authentication. Place the instance access key in the X-QI-Agent-Api-Key header, which cannot replace the AccessKey signature.
   * - Set Content-Type to application/json and Accept to text/event-stream. The stream parameter must be set to true.
   * ### Call methods
   * - Method and path: POST /gui/v1/chat/completions.
   * - Use X-QI-Instance-Id to specify the instance and execute based on the published configurations. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - The response consists of SSE incremental events rather than a complete JSON object. Continuously read the stream until it ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id in the first round. Save the qi_session_id from the SSE body and pass it in the request header with the same name for subsequent calls. Make sequential calls within the same session and use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is subject to the SSE body.
   * 
   * @param request - GuiChatCompletionStreamRequest
   * @param headers - GuiChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GuiChatCompletionStreamResponse
   */
  async *guiChatCompletionStreamWithSSE(request: $_model.GuiChatCompletionStreamRequest, headers: $_model.GuiChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GuiChatCompletionStreamResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedTokenIds)) {
      body["allowedTokenIds"] = request.allowedTokenIds;
    }

    if (!$dara.isNull(request.badWords)) {
      body["badWords"] = request.badWords;
    }

    if (!$dara.isNull(request.chatTemplateKwargs)) {
      body["chatTemplateKwargs"] = request.chatTemplateKwargs;
    }

    if (!$dara.isNull(request.frequencyPenalty)) {
      body["frequencyPenalty"] = request.frequencyPenalty;
    }

    if (!$dara.isNull(request.ignoreEos)) {
      body["ignoreEos"] = request.ignoreEos;
    }

    if (!$dara.isNull(request.includeReasoning)) {
      body["includeReasoning"] = request.includeReasoning;
    }

    if (!$dara.isNull(request.logprobs)) {
      body["logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxCompletionTokens)) {
      body["maxCompletionTokens"] = request.maxCompletionTokens;
    }

    if (!$dara.isNull(request.maxTokens)) {
      body["maxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.minP)) {
      body["minP"] = request.minP;
    }

    if (!$dara.isNull(request.minTokens)) {
      body["minTokens"] = request.minTokens;
    }

    if (!$dara.isNull(request.mmProcessorKwargs)) {
      body["mmProcessorKwargs"] = request.mmProcessorKwargs;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      body["n"] = request.n;
    }

    if (!$dara.isNull(request.parallelToolCalls)) {
      body["parallelToolCalls"] = request.parallelToolCalls;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      body["presencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.promptLogprobs)) {
      body["promptLogprobs"] = request.promptLogprobs;
    }

    if (!$dara.isNull(request.reasoningEffort)) {
      body["reasoningEffort"] = request.reasoningEffort;
    }

    if (!$dara.isNull(request.repetitionPenalty)) {
      body["repetitionPenalty"] = request.repetitionPenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      body["responseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.skipSpecialTokens)) {
      body["skipSpecialTokens"] = request.skipSpecialTokens;
    }

    if (!$dara.isNull(request.stop)) {
      body["stop"] = request.stop;
    }

    if (!$dara.isNull(request.stopTokenIds)) {
      body["stopTokenIds"] = request.stopTokenIds;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.structuredOutputs)) {
      body["structuredOutputs"] = request.structuredOutputs;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      body["topLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      body["topP"] = request.topP;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GuiChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/gui/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.GuiChatCompletionStreamResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GuiChatCompletionStreamResponse({}));
      }

    }
  }

  /**
   * Calls a published Mobile-Use Agent instance, which supports the Standard Edition and Dedicated Edition. Submits the task text and the current screen screenshot, passes the device and application context through metadata, and returns the next mobile UI operation by using Server-Sent Events (SSE). The caller executes the UI operation and then continues to call the API with the session ID and the latest screenshot.
   * 
   * @remarks
   * ### Prerequisites
   * - Install the SDK from the SDK Center.
   * - Activate the Mobile-Use Agent service and prepare the ID and access key of a published Mobile-Use Agent instance.
   * - Mobile-Use Agent provides the Standard Edition and Dedicated Edition. Call the API based on the edition of the selected instance.
   * - Use the SDK to complete AccessKey authentication. Place the instance access key in the X-QI-Agent-Api-Key header, which cannot replace the AccessKey signature.
   * - Set Content-Type to application/json and Accept to text/event-stream. The stream parameter must be set to true.
   * ### Call methods
   * - Method and path: POST /gui/v1/chat/completions.
   * - Use X-QI-Instance-Id to specify the instance and execute based on the published configurations. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - The response consists of SSE incremental events rather than a complete JSON object. Continuously read the stream until it ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id in the first round. Save the qi_session_id from the SSE body and pass it in the request header with the same name for subsequent calls. Make sequential calls within the same session and use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is subject to the SSE body.
   * 
   * @param request - GuiChatCompletionStreamRequest
   * @param headers - GuiChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GuiChatCompletionStreamResponse
   */
  async guiChatCompletionStreamWithOptions(request: $_model.GuiChatCompletionStreamRequest, headers: $_model.GuiChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GuiChatCompletionStreamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedTokenIds)) {
      body["allowedTokenIds"] = request.allowedTokenIds;
    }

    if (!$dara.isNull(request.badWords)) {
      body["badWords"] = request.badWords;
    }

    if (!$dara.isNull(request.chatTemplateKwargs)) {
      body["chatTemplateKwargs"] = request.chatTemplateKwargs;
    }

    if (!$dara.isNull(request.frequencyPenalty)) {
      body["frequencyPenalty"] = request.frequencyPenalty;
    }

    if (!$dara.isNull(request.ignoreEos)) {
      body["ignoreEos"] = request.ignoreEos;
    }

    if (!$dara.isNull(request.includeReasoning)) {
      body["includeReasoning"] = request.includeReasoning;
    }

    if (!$dara.isNull(request.logprobs)) {
      body["logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxCompletionTokens)) {
      body["maxCompletionTokens"] = request.maxCompletionTokens;
    }

    if (!$dara.isNull(request.maxTokens)) {
      body["maxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.minP)) {
      body["minP"] = request.minP;
    }

    if (!$dara.isNull(request.minTokens)) {
      body["minTokens"] = request.minTokens;
    }

    if (!$dara.isNull(request.mmProcessorKwargs)) {
      body["mmProcessorKwargs"] = request.mmProcessorKwargs;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      body["n"] = request.n;
    }

    if (!$dara.isNull(request.parallelToolCalls)) {
      body["parallelToolCalls"] = request.parallelToolCalls;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      body["presencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.promptLogprobs)) {
      body["promptLogprobs"] = request.promptLogprobs;
    }

    if (!$dara.isNull(request.reasoningEffort)) {
      body["reasoningEffort"] = request.reasoningEffort;
    }

    if (!$dara.isNull(request.repetitionPenalty)) {
      body["repetitionPenalty"] = request.repetitionPenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      body["responseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.skipSpecialTokens)) {
      body["skipSpecialTokens"] = request.skipSpecialTokens;
    }

    if (!$dara.isNull(request.stop)) {
      body["stop"] = request.stop;
    }

    if (!$dara.isNull(request.stopTokenIds)) {
      body["stopTokenIds"] = request.stopTokenIds;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.structuredOutputs)) {
      body["structuredOutputs"] = request.structuredOutputs;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      body["topLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      body["topP"] = request.topP;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GuiChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/gui/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GuiChatCompletionStreamResponse>(await this.callApi(params, req, runtime), new $_model.GuiChatCompletionStreamResponse({}));
  }

  /**
   * Calls a published Mobile-Use Agent instance, which supports the Standard Edition and Dedicated Edition. Submits the task text and the current screen screenshot, passes the device and application context through metadata, and returns the next mobile UI operation by using Server-Sent Events (SSE). The caller executes the UI operation and then continues to call the API with the session ID and the latest screenshot.
   * 
   * @remarks
   * ### Prerequisites
   * - Install the SDK from the SDK Center.
   * - Activate the Mobile-Use Agent service and prepare the ID and access key of a published Mobile-Use Agent instance.
   * - Mobile-Use Agent provides the Standard Edition and Dedicated Edition. Call the API based on the edition of the selected instance.
   * - Use the SDK to complete AccessKey authentication. Place the instance access key in the X-QI-Agent-Api-Key header, which cannot replace the AccessKey signature.
   * - Set Content-Type to application/json and Accept to text/event-stream. The stream parameter must be set to true.
   * ### Call methods
   * - Method and path: POST /gui/v1/chat/completions.
   * - Use X-QI-Instance-Id to specify the instance and execute based on the published configurations. The model field in the request body is a compatibility placeholder and cannot be used to switch models.
   * - The response consists of SSE incremental events rather than a complete JSON object. Continuously read the stream until it ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id in the first round. Save the qi_session_id from the SSE body and pass it in the request header with the same name for subsequent calls. Make sequential calls within the same session and use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is subject to the SSE body.
   * 
   * @param request - GuiChatCompletionStreamRequest
   * @returns GuiChatCompletionStreamResponse
   */
  async guiChatCompletionStream(request: $_model.GuiChatCompletionStreamRequest): Promise<$_model.GuiChatCompletionStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GuiChatCompletionStreamHeaders({ });
    return await this.guiChatCompletionStreamWithOptions(request, headers, runtime);
  }

  /**
   * Invokes a published Mobile Planner Agent using OpenAI-Compatible Chat Completions messages to initiate a conversation or node planning, and returns text, model-provided reasoning content, and structured tool calling via SSE. Supports multi-turn sessions and model-supported image input. Business tools are executed by the caller.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK center.
   * - Activate the Mobile Planner Agent service and prepare the published Mobile Planner Agent instance ID and its access key.
   * - Use the SDK to complete AccessKey authentication. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /pa/v1/chat/completions`.
   * - X-QI-Instance-Id specifies the instance and executes based on the published configuration. The model field in the request body is a compatibility placeholder and cannot switch models.
   * - The response consists of SSE incremental events, not a single complete JSON object. Continue reading until the stream ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id for the first turn. Save qi_session_id from the SSE body and pass it back through the request header of the same name in subsequent turns. Call sequentially within the same session. Use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is based on the SSE body.
   * 
   * @param request - PaChatCompletionStreamRequest
   * @param headers - PaChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PaChatCompletionStreamResponse
   */
  async *paChatCompletionStreamWithSSE(request: $_model.PaChatCompletionStreamRequest, headers: $_model.PaChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.PaChatCompletionStreamResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedTokenIds)) {
      body["allowedTokenIds"] = request.allowedTokenIds;
    }

    if (!$dara.isNull(request.badWords)) {
      body["badWords"] = request.badWords;
    }

    if (!$dara.isNull(request.chatTemplateKwargs)) {
      body["chatTemplateKwargs"] = request.chatTemplateKwargs;
    }

    if (!$dara.isNull(request.frequencyPenalty)) {
      body["frequencyPenalty"] = request.frequencyPenalty;
    }

    if (!$dara.isNull(request.ignoreEos)) {
      body["ignoreEos"] = request.ignoreEos;
    }

    if (!$dara.isNull(request.includeReasoning)) {
      body["includeReasoning"] = request.includeReasoning;
    }

    if (!$dara.isNull(request.logprobs)) {
      body["logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxCompletionTokens)) {
      body["maxCompletionTokens"] = request.maxCompletionTokens;
    }

    if (!$dara.isNull(request.maxTokens)) {
      body["maxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.minP)) {
      body["minP"] = request.minP;
    }

    if (!$dara.isNull(request.minTokens)) {
      body["minTokens"] = request.minTokens;
    }

    if (!$dara.isNull(request.mmProcessorKwargs)) {
      body["mmProcessorKwargs"] = request.mmProcessorKwargs;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      body["n"] = request.n;
    }

    if (!$dara.isNull(request.parallelToolCalls)) {
      body["parallelToolCalls"] = request.parallelToolCalls;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      body["presencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.promptLogprobs)) {
      body["promptLogprobs"] = request.promptLogprobs;
    }

    if (!$dara.isNull(request.reasoningEffort)) {
      body["reasoningEffort"] = request.reasoningEffort;
    }

    if (!$dara.isNull(request.repetitionPenalty)) {
      body["repetitionPenalty"] = request.repetitionPenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      body["responseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.skipSpecialTokens)) {
      body["skipSpecialTokens"] = request.skipSpecialTokens;
    }

    if (!$dara.isNull(request.stop)) {
      body["stop"] = request.stop;
    }

    if (!$dara.isNull(request.stopTokenIds)) {
      body["stopTokenIds"] = request.stopTokenIds;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.structuredOutputs)) {
      body["structuredOutputs"] = request.structuredOutputs;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.toolChoice)) {
      body["toolChoice"] = request.toolChoice;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      body["topLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      body["topP"] = request.topP;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PaChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/pa/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.PaChatCompletionStreamResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.PaChatCompletionStreamResponse({}));
      }

    }
  }

  /**
   * Invokes a published Mobile Planner Agent using OpenAI-Compatible Chat Completions messages to initiate a conversation or node planning, and returns text, model-provided reasoning content, and structured tool calling via SSE. Supports multi-turn sessions and model-supported image input. Business tools are executed by the caller.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK center.
   * - Activate the Mobile Planner Agent service and prepare the published Mobile Planner Agent instance ID and its access key.
   * - Use the SDK to complete AccessKey authentication. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /pa/v1/chat/completions`.
   * - X-QI-Instance-Id specifies the instance and executes based on the published configuration. The model field in the request body is a compatibility placeholder and cannot switch models.
   * - The response consists of SSE incremental events, not a single complete JSON object. Continue reading until the stream ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id for the first turn. Save qi_session_id from the SSE body and pass it back through the request header of the same name in subsequent turns. Call sequentially within the same session. Use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is based on the SSE body.
   * 
   * @param request - PaChatCompletionStreamRequest
   * @param headers - PaChatCompletionStreamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PaChatCompletionStreamResponse
   */
  async paChatCompletionStreamWithOptions(request: $_model.PaChatCompletionStreamRequest, headers: $_model.PaChatCompletionStreamHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PaChatCompletionStreamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedTokenIds)) {
      body["allowedTokenIds"] = request.allowedTokenIds;
    }

    if (!$dara.isNull(request.badWords)) {
      body["badWords"] = request.badWords;
    }

    if (!$dara.isNull(request.chatTemplateKwargs)) {
      body["chatTemplateKwargs"] = request.chatTemplateKwargs;
    }

    if (!$dara.isNull(request.frequencyPenalty)) {
      body["frequencyPenalty"] = request.frequencyPenalty;
    }

    if (!$dara.isNull(request.ignoreEos)) {
      body["ignoreEos"] = request.ignoreEos;
    }

    if (!$dara.isNull(request.includeReasoning)) {
      body["includeReasoning"] = request.includeReasoning;
    }

    if (!$dara.isNull(request.logprobs)) {
      body["logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxCompletionTokens)) {
      body["maxCompletionTokens"] = request.maxCompletionTokens;
    }

    if (!$dara.isNull(request.maxTokens)) {
      body["maxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.minP)) {
      body["minP"] = request.minP;
    }

    if (!$dara.isNull(request.minTokens)) {
      body["minTokens"] = request.minTokens;
    }

    if (!$dara.isNull(request.mmProcessorKwargs)) {
      body["mmProcessorKwargs"] = request.mmProcessorKwargs;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      body["n"] = request.n;
    }

    if (!$dara.isNull(request.parallelToolCalls)) {
      body["parallelToolCalls"] = request.parallelToolCalls;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      body["presencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.promptLogprobs)) {
      body["promptLogprobs"] = request.promptLogprobs;
    }

    if (!$dara.isNull(request.reasoningEffort)) {
      body["reasoningEffort"] = request.reasoningEffort;
    }

    if (!$dara.isNull(request.repetitionPenalty)) {
      body["repetitionPenalty"] = request.repetitionPenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      body["responseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.skipSpecialTokens)) {
      body["skipSpecialTokens"] = request.skipSpecialTokens;
    }

    if (!$dara.isNull(request.stop)) {
      body["stop"] = request.stop;
    }

    if (!$dara.isNull(request.stopTokenIds)) {
      body["stopTokenIds"] = request.stopTokenIds;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.streamOptions)) {
      body["streamOptions"] = request.streamOptions;
    }

    if (!$dara.isNull(request.structuredOutputs)) {
      body["structuredOutputs"] = request.structuredOutputs;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.toolChoice)) {
      body["toolChoice"] = request.toolChoice;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      body["topLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      body["topP"] = request.topP;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xQIAgentApiKey)) {
      realHeaders["X-QI-Agent-Api-Key"] = String(headers.xQIAgentApiKey);
    }

    if (!$dara.isNull(headers.xQIInstanceId)) {
      realHeaders["X-QI-Instance-Id"] = String(headers.xQIInstanceId);
    }

    if (!$dara.isNull(headers.xQISessionId)) {
      realHeaders["X-QI-Session-Id"] = String(headers.xQISessionId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PaChatCompletionStream",
      version: "2026-08-31",
      protocol: "HTTPS",
      pathname: `/pa/v1/chat/completions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PaChatCompletionStreamResponse>(await this.callApi(params, req, runtime), new $_model.PaChatCompletionStreamResponse({}));
  }

  /**
   * Invokes a published Mobile Planner Agent using OpenAI-Compatible Chat Completions messages to initiate a conversation or node planning, and returns text, model-provided reasoning content, and structured tool calling via SSE. Supports multi-turn sessions and model-supported image input. Business tools are executed by the caller.
   * 
   * @remarks
   * ### Before you begin
   * - Install the SDK from the SDK center.
   * - Activate the Mobile Planner Agent service and prepare the published Mobile Planner Agent instance ID and its access key.
   * - Use the SDK to complete AccessKey authentication. The instance access key is placed in X-QI-Agent-Api-Key and cannot replace the AccessKey signature.
   * - Set Content-Type: application/json and Accept: text/event-stream. The stream parameter must be set to true.
   * ### How to call
   * - Method and path: `POST /pa/v1/chat/completions`.
   * - X-QI-Instance-Id specifies the instance and executes based on the published configuration. The model field in the request body is a compatibility placeholder and cannot switch models.
   * - The response consists of SSE incremental events, not a single complete JSON object. Continue reading until the stream ends and check for errors within the stream.
   * ### Session management
   * You can omit X-QI-Session-Id for the first turn. Save qi_session_id from the SSE body and pass it back through the request header of the same name in subsequent turns. Call sequentially within the same session. Use different identifiers for different sessions. Do not rely on the gateway to pass through custom response headers. The actual identifier is based on the SSE body.
   * 
   * @param request - PaChatCompletionStreamRequest
   * @returns PaChatCompletionStreamResponse
   */
  async paChatCompletionStream(request: $_model.PaChatCompletionStreamRequest): Promise<$_model.PaChatCompletionStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PaChatCompletionStreamHeaders({ });
    return await this.paChatCompletionStreamWithOptions(request, headers, runtime);
  }

}
