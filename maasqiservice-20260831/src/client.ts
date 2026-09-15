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
   * 以 SSE 流式调用已发布 AIGC Agent；支持 AIGCLite 文生图/图生图与 AIGCStandard Planner，兼容 OpenAI Chat Completions。
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
   * 以 SSE 流式调用已发布 AIGC Agent；支持 AIGCLite 文生图/图生图与 AIGCStandard Planner，兼容 OpenAI Chat Completions。
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
   * 以 SSE 流式调用已发布 AIGC Agent；支持 AIGCLite 文生图/图生图与 AIGCStandard Planner，兼容 OpenAI Chat Completions。
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
   * 以 SSE 流式调用已发布 GUI Agent；兼容 OpenAI Chat Completions，输入屏幕截图与任务文本，返回下一步 GUI 操作。
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
   * 以 SSE 流式调用已发布 GUI Agent；兼容 OpenAI Chat Completions，输入屏幕截图与任务文本，返回下一步 GUI 操作。
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
   * 以 SSE 流式调用已发布 GUI Agent；兼容 OpenAI Chat Completions，输入屏幕截图与任务文本，返回下一步 GUI 操作。
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
   * 以 SSE 流式调用已发布 PA Agent；兼容 OpenAI Chat Completions，支持多轮消息、工具调用、多模态输入与思考内容。
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
   * 以 SSE 流式调用已发布 PA Agent；兼容 OpenAI Chat Completions，支持多轮消息、工具调用、多模态输入与思考内容。
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
   * 以 SSE 流式调用已发布 PA Agent；兼容 OpenAI Chat Completions，支持多轮消息、工具调用、多模态输入与思考内容。
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
