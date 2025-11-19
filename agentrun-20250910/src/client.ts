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
    this._endpoint = this.getEndpoint("agentrun", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Create an agent runtime
   * 
   * @remarks
   * 创建一个新的智能体运行时实例，用于执行AI代理任务。智能体运行时是AgentRun服务的核心组件，提供代码执行、浏览器操作、内存管理等能力。
   * 
   * @param request - CreateAgentRuntimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentRuntimeResponse
   */
  async createAgentRuntimeWithOptions(request: $_model.CreateAgentRuntimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentRuntimeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentRuntime",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentRuntimeResponse({}));
  }

  /**
   * Create an agent runtime
   * 
   * @remarks
   * 创建一个新的智能体运行时实例，用于执行AI代理任务。智能体运行时是AgentRun服务的核心组件，提供代码执行、浏览器操作、内存管理等能力。
   * 
   * @param request - CreateAgentRuntimeRequest
   * @returns CreateAgentRuntimeResponse
   */
  async createAgentRuntime(request: $_model.CreateAgentRuntimeRequest): Promise<$_model.CreateAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentRuntimeWithOptions(request, headers, runtime);
  }

  /**
   * 创建智能体运行时端点
   * 
   * @remarks
   * 为指定的智能体运行时创建新的端点，用于外部访问和调用。端点是智能体运行时对外提供服务的入口。
   * 
   * @param request - CreateAgentRuntimeEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentRuntimeEndpointResponse
   */
  async createAgentRuntimeEndpointWithOptions(agentRuntimeId: string, request: $_model.CreateAgentRuntimeEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentRuntimeEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentRuntimeEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentRuntimeEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentRuntimeEndpointResponse({}));
  }

  /**
   * 创建智能体运行时端点
   * 
   * @remarks
   * 为指定的智能体运行时创建新的端点，用于外部访问和调用。端点是智能体运行时对外提供服务的入口。
   * 
   * @param request - CreateAgentRuntimeEndpointRequest
   * @returns CreateAgentRuntimeEndpointResponse
   */
  async createAgentRuntimeEndpoint(agentRuntimeId: string, request: $_model.CreateAgentRuntimeEndpointRequest): Promise<$_model.CreateAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentRuntimeEndpointWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * 创建浏览器实例
   * 
   * @remarks
   * 创建一个新的浏览器实例，用于执行网页自动化任务。浏览器实例提供网页浏览、元素操作、截图录制等功能。
   * 
   * @param request - CreateBrowserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBrowserResponse
   */
  async createBrowserWithOptions(request: $_model.CreateBrowserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBrowserResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBrowser",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/browsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBrowserResponse>(await this.callApi(params, req, runtime), new $_model.CreateBrowserResponse({}));
  }

  /**
   * 创建浏览器实例
   * 
   * @remarks
   * 创建一个新的浏览器实例，用于执行网页自动化任务。浏览器实例提供网页浏览、元素操作、截图录制等功能。
   * 
   * @param request - CreateBrowserRequest
   * @returns CreateBrowserResponse
   */
  async createBrowser(request: $_model.CreateBrowserRequest): Promise<$_model.CreateBrowserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBrowserWithOptions(request, headers, runtime);
  }

  /**
   * 创建代码解释器
   * 
   * @remarks
   * 创建一个新的代码解释器实例，用于执行代码解释和运行任务。代码解释器提供Python代码执行、数据处理、机器学习等功能。
   * 
   * @param request - CreateCodeInterpreterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCodeInterpreterResponse
   */
  async createCodeInterpreterWithOptions(request: $_model.CreateCodeInterpreterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCodeInterpreterResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCodeInterpreter",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/code-interpreters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCodeInterpreterResponse>(await this.callApi(params, req, runtime), new $_model.CreateCodeInterpreterResponse({}));
  }

  /**
   * 创建代码解释器
   * 
   * @remarks
   * 创建一个新的代码解释器实例，用于执行代码解释和运行任务。代码解释器提供Python代码执行、数据处理、机器学习等功能。
   * 
   * @param request - CreateCodeInterpreterRequest
   * @returns CreateCodeInterpreterResponse
   */
  async createCodeInterpreter(request: $_model.CreateCodeInterpreterRequest): Promise<$_model.CreateCodeInterpreterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeInterpreterWithOptions(request, headers, runtime);
  }

  /**
   * create memory store
   * 
   * @param request - CreateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryResponse
   */
  async createMemoryWithOptions(request: $_model.CreateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.longTtl)) {
      body["longTtl"] = request.longTtl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.shortTtl)) {
      body["shortTtl"] = request.shortTtl;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryResponse({}));
  }

  /**
   * create memory store
   * 
   * @param request - CreateMemoryRequest
   * @returns CreateMemoryResponse
   */
  async createMemory(request: $_model.CreateMemoryRequest): Promise<$_model.CreateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryWithOptions(request, headers, runtime);
  }

  /**
   * create event
   * 
   * @param request - CreateMemoryEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryEventResponse
   */
  async createMemoryEventWithOptions(memoryName: string, request: $_model.CreateMemoryEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.events)) {
      body["events"] = request.events;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemoryEvent",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/events`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryEventResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryEventResponse({}));
  }

  /**
   * create event
   * 
   * @param request - CreateMemoryEventRequest
   * @returns CreateMemoryEventResponse
   */
  async createMemoryEvent(memoryName: string, request: $_model.CreateMemoryEventRequest): Promise<$_model.CreateMemoryEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryEventWithOptions(memoryName, request, headers, runtime);
  }

  /**
   * 删除智能体运行时
   * 
   * @remarks
   * 删除指定的智能体运行时实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentRuntimeResponse
   */
  async deleteAgentRuntimeWithOptions(agentRuntimeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentRuntimeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentRuntime",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentRuntimeResponse({}));
  }

  /**
   * 删除智能体运行时
   * 
   * @remarks
   * 删除指定的智能体运行时实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * @returns DeleteAgentRuntimeResponse
   */
  async deleteAgentRuntime(agentRuntimeId: string): Promise<$_model.DeleteAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentRuntimeWithOptions(agentRuntimeId, headers, runtime);
  }

  /**
   * Delete an agent runtime endpoint
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentRuntimeEndpointResponse
   */
  async deleteAgentRuntimeEndpointWithOptions(agentRuntimeId: string, agentRuntimeEndpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentRuntimeEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentRuntimeEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/endpoints/${$dara.URL.percentEncode(agentRuntimeEndpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentRuntimeEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentRuntimeEndpointResponse({}));
  }

  /**
   * Delete an agent runtime endpoint
   * @returns DeleteAgentRuntimeEndpointResponse
   */
  async deleteAgentRuntimeEndpoint(agentRuntimeId: string, agentRuntimeEndpointId: string): Promise<$_model.DeleteAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentRuntimeEndpointWithOptions(agentRuntimeId, agentRuntimeEndpointId, headers, runtime);
  }

  /**
   * 删除浏览器实例
   * 
   * @remarks
   * 删除指定的浏览器实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBrowserResponse
   */
  async deleteBrowserWithOptions(browserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBrowserResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBrowser",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/browsers/${$dara.URL.percentEncode(browserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBrowserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBrowserResponse({}));
  }

  /**
   * 删除浏览器实例
   * 
   * @remarks
   * 删除指定的浏览器实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * @returns DeleteBrowserResponse
   */
  async deleteBrowser(browserId: string): Promise<$_model.DeleteBrowserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBrowserWithOptions(browserId, headers, runtime);
  }

  /**
   * 删除代码解释器
   * 
   * @remarks
   * 删除指定的代码解释器实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCodeInterpreterResponse
   */
  async deleteCodeInterpreterWithOptions(codeInterpreterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCodeInterpreterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCodeInterpreter",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/code-interpreters/${$dara.URL.percentEncode(codeInterpreterId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCodeInterpreterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCodeInterpreterResponse({}));
  }

  /**
   * 删除代码解释器
   * 
   * @remarks
   * 删除指定的代码解释器实例，包括其所有相关资源和数据。删除操作不可逆，请谨慎操作。
   * @returns DeleteCodeInterpreterResponse
   */
  async deleteCodeInterpreter(codeInterpreterId: string): Promise<$_model.DeleteCodeInterpreterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeInterpreterWithOptions(codeInterpreterId, headers, runtime);
  }

  /**
   * delete memory store
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(memoryName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * delete memory store
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(memoryName: string): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(memoryName, headers, runtime);
  }

  /**
   * 获取智能体运行时详情
   * 
   * @remarks
   * 根据智能体运行时ID获取指定智能体运行时的详细信息，包括配置、状态、资源使用情况等。
   * 
   * @param request - GetAgentRuntimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentRuntimeResponse
   */
  async getAgentRuntimeWithOptions(agentRuntimeId: string, request: $_model.GetAgentRuntimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentRuntimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentRuntimeVersion)) {
      query["agentRuntimeVersion"] = request.agentRuntimeVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentRuntime",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentRuntimeResponse({}));
  }

  /**
   * 获取智能体运行时详情
   * 
   * @remarks
   * 根据智能体运行时ID获取指定智能体运行时的详细信息，包括配置、状态、资源使用情况等。
   * 
   * @param request - GetAgentRuntimeRequest
   * @returns GetAgentRuntimeResponse
   */
  async getAgentRuntime(agentRuntimeId: string, request: $_model.GetAgentRuntimeRequest): Promise<$_model.GetAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentRuntimeWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * Get an agent runtime endpoint
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentRuntimeEndpointResponse
   */
  async getAgentRuntimeEndpointWithOptions(agentRuntimeId: string, agentRuntimeEndpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentRuntimeEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentRuntimeEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/endpoints/${$dara.URL.percentEncode(agentRuntimeEndpointId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentRuntimeEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentRuntimeEndpointResponse({}));
  }

  /**
   * Get an agent runtime endpoint
   * @returns GetAgentRuntimeEndpointResponse
   */
  async getAgentRuntimeEndpoint(agentRuntimeId: string, agentRuntimeEndpointId: string): Promise<$_model.GetAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentRuntimeEndpointWithOptions(agentRuntimeId, agentRuntimeEndpointId, headers, runtime);
  }

  /**
   * 获取浏览器实例详情
   * 
   * @remarks
   * 根据浏览器ID获取指定浏览器实例的详细信息，包括配置、状态、资源使用情况等。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBrowserResponse
   */
  async getBrowserWithOptions(browserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBrowserResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBrowser",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/browsers/${$dara.URL.percentEncode(browserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBrowserResponse>(await this.callApi(params, req, runtime), new $_model.GetBrowserResponse({}));
  }

  /**
   * 获取浏览器实例详情
   * 
   * @remarks
   * 根据浏览器ID获取指定浏览器实例的详细信息，包括配置、状态、资源使用情况等。
   * @returns GetBrowserResponse
   */
  async getBrowser(browserId: string): Promise<$_model.GetBrowserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBrowserWithOptions(browserId, headers, runtime);
  }

  /**
   * 获取代码解释器详情
   * 
   * @remarks
   * 根据代码解释器ID获取指定代码解释器实例的详细信息，包括配置、状态、资源使用情况等。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeInterpreterResponse
   */
  async getCodeInterpreterWithOptions(codeInterpreterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCodeInterpreterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCodeInterpreter",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/code-interpreters/${$dara.URL.percentEncode(codeInterpreterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCodeInterpreterResponse>(await this.callApi(params, req, runtime), new $_model.GetCodeInterpreterResponse({}));
  }

  /**
   * 获取代码解释器详情
   * 
   * @remarks
   * 根据代码解释器ID获取指定代码解释器实例的详细信息，包括配置、状态、资源使用情况等。
   * @returns GetCodeInterpreterResponse
   */
  async getCodeInterpreter(codeInterpreterId: string): Promise<$_model.GetCodeInterpreterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeInterpreterWithOptions(codeInterpreterId, headers, runtime);
  }

  /**
   * GetMemory
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryResponse
   */
  async getMemoryWithOptions(memoryName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
  }

  /**
   * GetMemory
   * @returns GetMemoryResponse
   */
  async getMemory(memoryName: string): Promise<$_model.GetMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(memoryName, headers, runtime);
  }

  /**
   * get event
   * 
   * @param request - GetMemoryEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryEventResponse
   */
  async getMemoryEventWithOptions(memoryName: string, sessionId: string, eventId: string, request: $_model.GetMemoryEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryEventResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryEvent",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/sessions/${$dara.URL.percentEncode(sessionId)}/events/${$dara.URL.percentEncode(eventId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryEventResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryEventResponse({}));
  }

  /**
   * get event
   * 
   * @param request - GetMemoryEventRequest
   * @returns GetMemoryEventResponse
   */
  async getMemoryEvent(memoryName: string, sessionId: string, eventId: string, request: $_model.GetMemoryEventRequest): Promise<$_model.GetMemoryEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryEventWithOptions(memoryName, sessionId, eventId, request, headers, runtime);
  }

  /**
   * 获取内存会话详情
   * 
   * @remarks
   * 根据会话ID获取指定内存会话的详细信息，包括会话中的事件记录、时间戳等。用于查看和管理对话历史。
   * 
   * @param request - GetMemorySessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemorySessionResponse
   */
  async getMemorySessionWithOptions(memoryName: string, sessionId: string, request: $_model.GetMemorySessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemorySessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemorySession",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemorySessionResponse>(await this.callApi(params, req, runtime), new $_model.GetMemorySessionResponse({}));
  }

  /**
   * 获取内存会话详情
   * 
   * @remarks
   * 根据会话ID获取指定内存会话的详细信息，包括会话中的事件记录、时间戳等。用于查看和管理对话历史。
   * 
   * @param request - GetMemorySessionRequest
   * @returns GetMemorySessionResponse
   */
  async getMemorySession(memoryName: string, sessionId: string, request: $_model.GetMemorySessionRequest): Promise<$_model.GetMemorySessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemorySessionWithOptions(memoryName, sessionId, request, headers, runtime);
  }

  /**
   * 列出智能体运行时端点
   * 
   * @remarks
   * 获取指定智能体运行时的所有端点列表，支持按名称过滤和分页查询。端点用于外部系统访问智能体运行时服务。
   * 
   * @param request - ListAgentRuntimeEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentRuntimeEndpointsResponse
   */
  async listAgentRuntimeEndpointsWithOptions(agentRuntimeId: string, request: $_model.ListAgentRuntimeEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentRuntimeEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointName)) {
      query["endpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["searchMode"] = request.searchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentRuntimeEndpoints",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentRuntimeEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentRuntimeEndpointsResponse({}));
  }

  /**
   * 列出智能体运行时端点
   * 
   * @remarks
   * 获取指定智能体运行时的所有端点列表，支持按名称过滤和分页查询。端点用于外部系统访问智能体运行时服务。
   * 
   * @param request - ListAgentRuntimeEndpointsRequest
   * @returns ListAgentRuntimeEndpointsResponse
   */
  async listAgentRuntimeEndpoints(agentRuntimeId: string, request: $_model.ListAgentRuntimeEndpointsRequest): Promise<$_model.ListAgentRuntimeEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentRuntimeEndpointsWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * List agent runtime versions
   * 
   * @param request - ListAgentRuntimeVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentRuntimeVersionsResponse
   */
  async listAgentRuntimeVersionsWithOptions(agentRuntimeId: string, request: $_model.ListAgentRuntimeVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentRuntimeVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentRuntimeVersions",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentRuntimeVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentRuntimeVersionsResponse({}));
  }

  /**
   * List agent runtime versions
   * 
   * @param request - ListAgentRuntimeVersionsRequest
   * @returns ListAgentRuntimeVersionsResponse
   */
  async listAgentRuntimeVersions(agentRuntimeId: string, request: $_model.ListAgentRuntimeVersionsRequest): Promise<$_model.ListAgentRuntimeVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentRuntimeVersionsWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * 列出智能体运行时
   * 
   * @remarks
   * 获取当前用户的所有智能体运行时列表，支持按名称、标签等条件过滤，支持分页查询。
   * 
   * @param request - ListAgentRuntimesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentRuntimesResponse
   */
  async listAgentRuntimesWithOptions(request: $_model.ListAgentRuntimesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentRuntimesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentRuntimeName)) {
      query["agentRuntimeName"] = request.agentRuntimeName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["searchMode"] = request.searchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentRuntimes",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentRuntimesResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentRuntimesResponse({}));
  }

  /**
   * 列出智能体运行时
   * 
   * @remarks
   * 获取当前用户的所有智能体运行时列表，支持按名称、标签等条件过滤，支持分页查询。
   * 
   * @param request - ListAgentRuntimesRequest
   * @returns ListAgentRuntimesResponse
   */
  async listAgentRuntimes(request: $_model.ListAgentRuntimesRequest): Promise<$_model.ListAgentRuntimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentRuntimesWithOptions(request, headers, runtime);
  }

  /**
   * 列出浏览器实例
   * 
   * @remarks
   * 获取当前用户的所有浏览器实例列表，支持按名称、状态等条件过滤，支持分页查询。
   * 
   * @param request - ListBrowsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBrowsersResponse
   */
  async listBrowsersWithOptions(request: $_model.ListBrowsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBrowsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.browserName)) {
      query["browserName"] = request.browserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBrowsers",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/browsers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBrowsersResponse>(await this.callApi(params, req, runtime), new $_model.ListBrowsersResponse({}));
  }

  /**
   * 列出浏览器实例
   * 
   * @remarks
   * 获取当前用户的所有浏览器实例列表，支持按名称、状态等条件过滤，支持分页查询。
   * 
   * @param request - ListBrowsersRequest
   * @returns ListBrowsersResponse
   */
  async listBrowsers(request: $_model.ListBrowsersRequest): Promise<$_model.ListBrowsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBrowsersWithOptions(request, headers, runtime);
  }

  /**
   * 列出代码解释器
   * 
   * @remarks
   * 获取当前用户的所有代码解释器实例列表，支持按名称等条件过滤，支持分页查询。
   * 
   * @param request - ListCodeInterpretersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCodeInterpretersResponse
   */
  async listCodeInterpretersWithOptions(request: $_model.ListCodeInterpretersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCodeInterpretersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeInterpreterName)) {
      query["codeInterpreterName"] = request.codeInterpreterName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCodeInterpreters",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/code-interpreters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCodeInterpretersResponse>(await this.callApi(params, req, runtime), new $_model.ListCodeInterpretersResponse({}));
  }

  /**
   * 列出代码解释器
   * 
   * @remarks
   * 获取当前用户的所有代码解释器实例列表，支持按名称等条件过滤，支持分页查询。
   * 
   * @param request - ListCodeInterpretersRequest
   * @returns ListCodeInterpretersResponse
   */
  async listCodeInterpreters(request: $_model.ListCodeInterpretersRequest): Promise<$_model.ListCodeInterpretersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCodeInterpretersWithOptions(request, headers, runtime);
  }

  /**
   * ListMemory
   * 
   * @param request - ListMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryResponse
   */
  async listMemoryWithOptions(request: $_model.ListMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pattern)) {
      query["pattern"] = request.pattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryResponse({}));
  }

  /**
   * ListMemory
   * 
   * @param request - ListMemoryRequest
   * @returns ListMemoryResponse
   */
  async listMemory(request: $_model.ListMemoryRequest): Promise<$_model.ListMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryWithOptions(request, headers, runtime);
  }

  /**
   * list events
   * 
   * @param request - ListMemoryEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryEventResponse
   */
  async listMemoryEventWithOptions(memoryName: string, sessionId: string, request: $_model.ListMemoryEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryEventResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemoryEvent",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/sessions/${$dara.URL.percentEncode(sessionId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryEventResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryEventResponse({}));
  }

  /**
   * list events
   * 
   * @param request - ListMemoryEventRequest
   * @returns ListMemoryEventResponse
   */
  async listMemoryEvent(memoryName: string, sessionId: string, request: $_model.ListMemoryEventRequest): Promise<$_model.ListMemoryEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryEventWithOptions(memoryName, sessionId, request, headers, runtime);
  }

  /**
   * 列出内存会话
   * 
   * @remarks
   * 获取指定内存实例的所有会话列表，支持按时间范围过滤和分页查询。会话是AgentRun中用于存储对话历史和管理上下文的重要组件。
   * 
   * @param request - ListMemorySessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemorySessionsResponse
   */
  async listMemorySessionsWithOptions(memoryName: string, request: $_model.ListMemorySessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemorySessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemorySessions",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/sessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemorySessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMemorySessionsResponse({}));
  }

  /**
   * 列出内存会话
   * 
   * @remarks
   * 获取指定内存实例的所有会话列表，支持按时间范围过滤和分页查询。会话是AgentRun中用于存储对话历史和管理上下文的重要组件。
   * 
   * @param request - ListMemorySessionsRequest
   * @returns ListMemorySessionsResponse
   */
  async listMemorySessions(memoryName: string, request: $_model.ListMemorySessionsRequest): Promise<$_model.ListMemorySessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemorySessionsWithOptions(memoryName, request, headers, runtime);
  }

  /**
   * 发布运行时版本
   * 
   * @remarks
   * 为指定的智能体运行时发布新版本，用于版本管理和部署。新版本可以包含代码更新、配置变更等内容。
   * 
   * @param request - PublishRuntimeVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRuntimeVersionResponse
   */
  async publishRuntimeVersionWithOptions(agentRuntimeId: string, request: $_model.PublishRuntimeVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRuntimeVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRuntimeVersion",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRuntimeVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishRuntimeVersionResponse({}));
  }

  /**
   * 发布运行时版本
   * 
   * @remarks
   * 为指定的智能体运行时发布新版本，用于版本管理和部署。新版本可以包含代码更新、配置变更等内容。
   * 
   * @param request - PublishRuntimeVersionRequest
   * @returns PublishRuntimeVersionResponse
   */
  async publishRuntimeVersion(agentRuntimeId: string, request: $_model.PublishRuntimeVersionRequest): Promise<$_model.PublishRuntimeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRuntimeVersionWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * RetrieveMemory
   * 
   * @param request - RetrieveMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveMemoryResponse
   */
  async retrieveMemoryWithOptions(memoryName: string, request: $_model.RetrieveMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveMemoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.store)) {
      body["store"] = request.store;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.topk)) {
      body["topk"] = request.topk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}/records`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveMemoryResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveMemoryResponse({}));
  }

  /**
   * RetrieveMemory
   * 
   * @param request - RetrieveMemoryRequest
   * @returns RetrieveMemoryResponse
   */
  async retrieveMemory(memoryName: string, request: $_model.RetrieveMemoryRequest): Promise<$_model.RetrieveMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveMemoryWithOptions(memoryName, request, headers, runtime);
  }

  /**
   * 更新智能体运行时
   * 
   * @remarks
   * 更新指定智能体运行时的配置信息，包括资源分配、网络配置、环境变量等。更新操作会触发运行时重启。
   * 
   * @param request - UpdateAgentRuntimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentRuntimeResponse
   */
  async updateAgentRuntimeWithOptions(agentRuntimeId: string, request: $_model.UpdateAgentRuntimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentRuntimeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentRuntime",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentRuntimeResponse({}));
  }

  /**
   * 更新智能体运行时
   * 
   * @remarks
   * 更新指定智能体运行时的配置信息，包括资源分配、网络配置、环境变量等。更新操作会触发运行时重启。
   * 
   * @param request - UpdateAgentRuntimeRequest
   * @returns UpdateAgentRuntimeResponse
   */
  async updateAgentRuntime(agentRuntimeId: string, request: $_model.UpdateAgentRuntimeRequest): Promise<$_model.UpdateAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentRuntimeWithOptions(agentRuntimeId, request, headers, runtime);
  }

  /**
   * Update an agent runtime endpoint
   * 
   * @param request - UpdateAgentRuntimeEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentRuntimeEndpointResponse
   */
  async updateAgentRuntimeEndpointWithOptions(agentRuntimeId: string, agentRuntimeEndpointId: string, request: $_model.UpdateAgentRuntimeEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentRuntimeEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentRuntimeEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/runtimes/${$dara.URL.percentEncode(agentRuntimeId)}/endpoints/${$dara.URL.percentEncode(agentRuntimeEndpointId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentRuntimeEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentRuntimeEndpointResponse({}));
  }

  /**
   * Update an agent runtime endpoint
   * 
   * @param request - UpdateAgentRuntimeEndpointRequest
   * @returns UpdateAgentRuntimeEndpointResponse
   */
  async updateAgentRuntimeEndpoint(agentRuntimeId: string, agentRuntimeEndpointId: string, request: $_model.UpdateAgentRuntimeEndpointRequest): Promise<$_model.UpdateAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentRuntimeEndpointWithOptions(agentRuntimeId, agentRuntimeEndpointId, request, headers, runtime);
  }

  /**
   * Update Memory
   * 
   * @param request - UpdateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(memoryName: string, request: $_model.UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.longTtl)) {
      body["longTtl"] = request.longTtl;
    }

    if (!$dara.isNull(request.shortTtl)) {
      body["shortTtl"] = request.shortTtl;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemory",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memories/${$dara.URL.percentEncode(memoryName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
  }

  /**
   * Update Memory
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(memoryName: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(memoryName, request, headers, runtime);
  }

}
