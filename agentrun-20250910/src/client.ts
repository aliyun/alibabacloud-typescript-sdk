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
   * 启动模板的MCP服务器
   * 
   * @param request - ActivateTemplateMCPRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateTemplateMCPResponse
   */
  async activateTemplateMCPWithOptions(templateName: string, request: $_model.ActivateTemplateMCPRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateTemplateMCPResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabledTools)) {
      body["enabledTools"] = request.enabledTools;
    }

    if (!$dara.isNull(request.transport)) {
      body["transport"] = request.transport;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateTemplateMCP",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates/${$dara.URL.percentEncode(templateName)}/mcp/activate`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateTemplateMCPResponse>(await this.callApi(params, req, runtime), new $_model.ActivateTemplateMCPResponse({}));
  }

  /**
   * 启动模板的MCP服务器
   * 
   * @param request - ActivateTemplateMCPRequest
   * @returns ActivateTemplateMCPResponse
   */
  async activateTemplateMCP(templateName: string, request: $_model.ActivateTemplateMCPRequest): Promise<$_model.ActivateTemplateMCPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateTemplateMCPWithOptions(templateName, request, headers, runtime);
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
   * Create a credential
   * 
   * @param request - CreateCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCredentialResponse
   */
  async createCredentialWithOptions(request: $_model.CreateCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCredentialResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCredential",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/credentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateCredentialResponse({}));
  }

  /**
   * Create a credential
   * 
   * @param request - CreateCredentialRequest
   * @returns CreateCredentialResponse
   */
  async createCredential(request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCredentialWithOptions(request, headers, runtime);
  }

  /**
   * 创建自定义域名
   * 
   * @param request - CreateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomainWithOptions(request: $_model.CreateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomDomain",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomDomainResponse({}));
  }

  /**
   * 创建自定义域名
   * 
   * @param request - CreateCustomDomainRequest
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomain(request: $_model.CreateCustomDomainRequest): Promise<$_model.CreateCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomDomainWithOptions(request, headers, runtime);
  }

  /**
   * 创建知识库
   * 
   * @param request - CreateKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseResponse
   */
  async createKnowledgeBaseWithOptions(request: $_model.CreateKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBase",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/knowledgebases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseResponse({}));
  }

  /**
   * 创建知识库
   * 
   * @param request - CreateKnowledgeBaseRequest
   * @returns CreateKnowledgeBaseResponse
   */
  async createKnowledgeBase(request: $_model.CreateKnowledgeBaseRequest): Promise<$_model.CreateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseWithOptions(request, headers, runtime);
  }

  /**
   * 添加记忆存储
   * 
   * @param request - CreateMemoryCollectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryCollectionResponse
   */
  async createMemoryCollectionWithOptions(request: $_model.CreateMemoryCollectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryCollectionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemoryCollection",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memory-collections`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryCollectionResponse({}));
  }

  /**
   * 添加记忆存储
   * 
   * @param request - CreateMemoryCollectionRequest
   * @returns CreateMemoryCollectionResponse
   */
  async createMemoryCollection(request: $_model.CreateMemoryCollectionRequest): Promise<$_model.CreateMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryCollectionWithOptions(request, headers, runtime);
  }

  /**
   * 新增模型
   * 
   * @param request - CreateModelProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelProxyResponse
   */
  async createModelProxyWithOptions(request: $_model.CreateModelProxyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelProxyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelProxy",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-proxies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelProxyResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelProxyResponse({}));
  }

  /**
   * 新增模型
   * 
   * @param request - CreateModelProxyRequest
   * @returns CreateModelProxyResponse
   */
  async createModelProxy(request: $_model.CreateModelProxyRequest): Promise<$_model.CreateModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelProxyWithOptions(request, headers, runtime);
  }

  /**
   * 新增模型
   * 
   * @param request - CreateModelServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelServiceResponse
   */
  async createModelServiceWithOptions(request: $_model.CreateModelServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelService",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelServiceResponse({}));
  }

  /**
   * 新增模型
   * 
   * @param request - CreateModelServiceRequest
   * @returns CreateModelServiceResponse
   */
  async createModelService(request: $_model.CreateModelServiceRequest): Promise<$_model.CreateModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelServiceWithOptions(request, headers, runtime);
  }

  /**
   * 创建沙箱
   * 
   * @remarks
   * 根据模板创建一个新的沙箱实例。沙箱是运行时的执行环境，可以执行代码或运行浏览器。
   * 
   * @param request - CreateSandboxRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSandboxResponse
   */
  async createSandboxWithOptions(request: $_model.CreateSandboxRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSandboxResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSandboxResponse>(await this.callApi(params, req, runtime), new $_model.CreateSandboxResponse({}));
  }

  /**
   * 创建沙箱
   * 
   * @remarks
   * 根据模板创建一个新的沙箱实例。沙箱是运行时的执行环境，可以执行代码或运行浏览器。
   * 
   * @param request - CreateSandboxRequest
   * @returns CreateSandboxResponse
   */
  async createSandbox(request: $_model.CreateSandboxRequest): Promise<$_model.CreateSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSandboxWithOptions(request, headers, runtime);
  }

  /**
   * 创建模板
   * 
   * @remarks
   * 创建一个新的模板，用于后续创建沙箱。模板定义了沙箱的运行时环境、资源配置等。
   * 
   * @param request - CreateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * 创建模板
   * 
   * @remarks
   * 创建一个新的模板，用于后续创建沙箱。模板定义了沙箱的运行时环境、资源配置等。
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
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
   * Delete a credential
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCredentialResponse
   */
  async deleteCredentialWithOptions(credentialName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCredentialResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCredential",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/credentials/${$dara.URL.percentEncode(credentialName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCredentialResponse({}));
  }

  /**
   * Delete a credential
   * @returns DeleteCredentialResponse
   */
  async deleteCredential(credentialName: string): Promise<$_model.DeleteCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCredentialWithOptions(credentialName, headers, runtime);
  }

  /**
   * Delete a custom domain
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomDomain",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomDomainResponse({}));
  }

  /**
   * Delete a custom domain
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomain(domainName: string): Promise<$_model.DeleteCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * 删除知识库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKnowledgeBaseResponse
   */
  async deleteKnowledgeBaseWithOptions(knowledgeBaseName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKnowledgeBaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKnowledgeBase",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/knowledgebases/${$dara.URL.percentEncode(knowledgeBaseName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKnowledgeBaseResponse({}));
  }

  /**
   * 删除知识库
   * @returns DeleteKnowledgeBaseResponse
   */
  async deleteKnowledgeBase(knowledgeBaseName: string): Promise<$_model.DeleteKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKnowledgeBaseWithOptions(knowledgeBaseName, headers, runtime);
  }

  /**
   * 删除记忆存储
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryCollectionResponse
   */
  async deleteMemoryCollectionWithOptions(memoryCollectionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryCollectionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemoryCollection",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memory-collections/${$dara.URL.percentEncode(memoryCollectionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryCollectionResponse({}));
  }

  /**
   * 删除记忆存储
   * @returns DeleteMemoryCollectionResponse
   */
  async deleteMemoryCollection(memoryCollectionName: string): Promise<$_model.DeleteMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryCollectionWithOptions(memoryCollectionName, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelProxyResponse
   */
  async deleteModelProxyWithOptions(modelProxyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelProxyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelProxy",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-proxies/${$dara.URL.percentEncode(modelProxyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelProxyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelProxyResponse({}));
  }

  /**
   * 删除模型
   * @returns DeleteModelProxyResponse
   */
  async deleteModelProxy(modelProxyName: string): Promise<$_model.DeleteModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelProxyWithOptions(modelProxyName, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelServiceResponse
   */
  async deleteModelServiceWithOptions(modelServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelService",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-services/${$dara.URL.percentEncode(modelServiceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelServiceResponse({}));
  }

  /**
   * 删除模型
   * @returns DeleteModelServiceResponse
   */
  async deleteModelService(modelServiceName: string): Promise<$_model.DeleteModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelServiceWithOptions(modelServiceName, headers, runtime);
  }

  /**
   * 删除Sandbox
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSandboxResponse
   */
  async deleteSandboxWithOptions(sandboxId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSandboxResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes/${$dara.URL.percentEncode(sandboxId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSandboxResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSandboxResponse({}));
  }

  /**
   * 删除Sandbox
   * @returns DeleteSandboxResponse
   */
  async deleteSandbox(sandboxId: string): Promise<$_model.DeleteSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * 删除模板
   * 
   * @remarks
   * 删除指定的模板。删除后，该模板将无法再用于创建新的沙箱。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(templateName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates/${$dara.URL.percentEncode(templateName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * 删除模板
   * 
   * @remarks
   * 删除指定的模板。删除后，该模板将无法再用于创建新的沙箱。
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(templateName: string): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(templateName, headers, runtime);
  }

  /**
   * Get access token for a resource
   * 
   * @param request - GetAccessTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessTokenResponse
   */
  async getAccessTokenWithOptions(request: $_model.GetAccessTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessToken",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/accessToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessTokenResponse({}));
  }

  /**
   * Get access token for a resource
   * 
   * @param request - GetAccessTokenRequest
   * @returns GetAccessTokenResponse
   */
  async getAccessToken(request: $_model.GetAccessTokenRequest): Promise<$_model.GetAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccessTokenWithOptions(request, headers, runtime);
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
   * Get a credential
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialResponse
   */
  async getCredentialWithOptions(credentialName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCredential",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/credentials/${$dara.URL.percentEncode(credentialName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetCredentialResponse({}));
  }

  /**
   * Get a credential
   * @returns GetCredentialResponse
   */
  async getCredential(credentialName: string): Promise<$_model.GetCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCredentialWithOptions(credentialName, headers, runtime);
  }

  /**
   * 获取自定义域名详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomDomainResponse
   */
  async getCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomDomain",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomDomainResponse({}));
  }

  /**
   * 获取自定义域名详情
   * @returns GetCustomDomainResponse
   */
  async getCustomDomain(domainName: string): Promise<$_model.GetCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * 获取知识库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeBaseResponse
   */
  async getKnowledgeBaseWithOptions(knowledgeBaseName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeBaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeBase",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/knowledgebases/${$dara.URL.percentEncode(knowledgeBaseName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeBaseResponse({}));
  }

  /**
   * 获取知识库
   * @returns GetKnowledgeBaseResponse
   */
  async getKnowledgeBase(knowledgeBaseName: string): Promise<$_model.GetKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBaseWithOptions(knowledgeBaseName, headers, runtime);
  }

  /**
   * 查询记忆存储详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryCollectionResponse
   */
  async getMemoryCollectionWithOptions(memoryCollectionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryCollectionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryCollection",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memory-collections/${$dara.URL.percentEncode(memoryCollectionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryCollectionResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryCollectionResponse({}));
  }

  /**
   * 查询记忆存储详情
   * @returns GetMemoryCollectionResponse
   */
  async getMemoryCollection(memoryCollectionName: string): Promise<$_model.GetMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryCollectionWithOptions(memoryCollectionName, headers, runtime);
  }

  /**
   * 查看model
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelProxyResponse
   */
  async getModelProxyWithOptions(modelProxyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelProxyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelProxy",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-proxies/${$dara.URL.percentEncode(modelProxyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelProxyResponse>(await this.callApi(params, req, runtime), new $_model.GetModelProxyResponse({}));
  }

  /**
   * 查看model
   * @returns GetModelProxyResponse
   */
  async getModelProxy(modelProxyName: string): Promise<$_model.GetModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelProxyWithOptions(modelProxyName, headers, runtime);
  }

  /**
   * 查看model
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelServiceResponse
   */
  async getModelServiceWithOptions(modelServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelService",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-services/${$dara.URL.percentEncode(modelServiceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetModelServiceResponse({}));
  }

  /**
   * 查看model
   * @returns GetModelServiceResponse
   */
  async getModelService(modelServiceName: string): Promise<$_model.GetModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelServiceWithOptions(modelServiceName, headers, runtime);
  }

  /**
   * 获取沙箱
   * 
   * @remarks
   * 根据沙箱ID获取指定沙箱的详细信息，包括状态、配置等。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSandboxResponse
   */
  async getSandboxWithOptions(sandboxId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSandboxResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes/${$dara.URL.percentEncode(sandboxId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSandboxResponse>(await this.callApi(params, req, runtime), new $_model.GetSandboxResponse({}));
  }

  /**
   * 获取沙箱
   * 
   * @remarks
   * 根据沙箱ID获取指定沙箱的详细信息，包括状态、配置等。
   * @returns GetSandboxResponse
   */
  async getSandbox(sandboxId: string): Promise<$_model.GetSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * 获取模板
   * 
   * @remarks
   * 根据模板名称获取指定模板的详细信息，包括配置、状态等。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(templateName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates/${$dara.URL.percentEncode(templateName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * 获取模板
   * 
   * @remarks
   * 根据模板名称获取指定模板的详细信息，包括配置、状态等。
   * @returns GetTemplateResponse
   */
  async getTemplate(templateName: string): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(templateName, headers, runtime);
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

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
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
   * List credentials
   * 
   * @param request - ListCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCredentialsResponse
   */
  async listCredentialsWithOptions(request: $_model.ListCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialAuthType)) {
      query["credentialAuthType"] = request.credentialAuthType;
    }

    if (!$dara.isNull(request.credentialName)) {
      query["credentialName"] = request.credentialName;
    }

    if (!$dara.isNull(request.credentialSourceType)) {
      query["credentialSourceType"] = request.credentialSourceType;
    }

    if (!$dara.isNull(request.enabled)) {
      query["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCredentials",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/credentials`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListCredentialsResponse({}));
  }

  /**
   * List credentials
   * 
   * @param request - ListCredentialsRequest
   * @returns ListCredentialsResponse
   */
  async listCredentials(request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCredentialsWithOptions(request, headers, runtime);
  }

  /**
   * 自定义域名列表
   * 
   * @param request - ListCustomDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomainsWithOptions(request: $_model.ListCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomDomains",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomDomainsResponse({}));
  }

  /**
   * 自定义域名列表
   * 
   * @param request - ListCustomDomainsRequest
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomains(request: $_model.ListCustomDomainsRequest): Promise<$_model.ListCustomDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCustomDomainsWithOptions(request, headers, runtime);
  }

  /**
   * 列出知识库
   * 
   * @param request - ListKnowledgeBasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBasesWithOptions(request: $_model.ListKnowledgeBasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBases",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/knowledgebases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBasesResponse({}));
  }

  /**
   * 列出知识库
   * 
   * @param request - ListKnowledgeBasesRequest
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBases(request: $_model.ListKnowledgeBasesRequest): Promise<$_model.ListKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBasesWithOptions(request, headers, runtime);
  }

  /**
   * 查询记忆存储列表
   * 
   * @param request - ListMemoryCollectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryCollectionsResponse
   */
  async listMemoryCollectionsWithOptions(request: $_model.ListMemoryCollectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryCollectionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memoryCollectionName)) {
      query["memoryCollectionName"] = request.memoryCollectionName;
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

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemoryCollections",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memory-collections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryCollectionsResponse({}));
  }

  /**
   * 查询记忆存储列表
   * 
   * @param request - ListMemoryCollectionsRequest
   * @returns ListMemoryCollectionsResponse
   */
  async listMemoryCollections(request: $_model.ListMemoryCollectionsRequest): Promise<$_model.ListMemoryCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryCollectionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询支持的模型提供商及其模型
   * 
   * @param request - ListModelProvidersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelProvidersResponse
   */
  async listModelProvidersWithOptions(request: $_model.ListModelProvidersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelProvidersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelName)) {
      query["modelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelProviders",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-providers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListModelProvidersResponse({}));
  }

  /**
   * 查询支持的模型提供商及其模型
   * 
   * @param request - ListModelProvidersRequest
   * @returns ListModelProvidersResponse
   */
  async listModelProviders(request: $_model.ListModelProvidersRequest): Promise<$_model.ListModelProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelProvidersWithOptions(request, headers, runtime);
  }

  /**
   * model列表
   * 
   * @param request - ListModelProxiesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelProxiesResponse
   */
  async listModelProxiesWithOptions(request: $_model.ListModelProxiesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelProxiesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proxyMode)) {
      query["proxyMode"] = request.proxyMode;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelProxies",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-proxies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelProxiesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelProxiesResponse({}));
  }

  /**
   * model列表
   * 
   * @param request - ListModelProxiesRequest
   * @returns ListModelProxiesResponse
   */
  async listModelProxies(request: $_model.ListModelProxiesRequest): Promise<$_model.ListModelProxiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelProxiesWithOptions(request, headers, runtime);
  }

  /**
   * model列表
   * 
   * @param request - ListModelServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelServicesResponse
   */
  async listModelServicesWithOptions(request: $_model.ListModelServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    if (!$dara.isNull(request.providerType)) {
      query["providerType"] = request.providerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelServices",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelServicesResponse({}));
  }

  /**
   * model列表
   * 
   * @param request - ListModelServicesRequest
   * @returns ListModelServicesResponse
   */
  async listModelServices(request: $_model.ListModelServicesRequest): Promise<$_model.ListModelServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelServicesWithOptions(request, headers, runtime);
  }

  /**
   * 列出沙箱
   * 
   * @remarks
   * 获取当前用户的所有沙箱列表，支持按模板名称过滤，支持分页查询。
   * 
   * @param request - ListSandboxesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSandboxesResponse
   */
  async listSandboxesWithOptions(request: $_model.ListSandboxesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSandboxesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSandboxes",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSandboxesResponse>(await this.callApi(params, req, runtime), new $_model.ListSandboxesResponse({}));
  }

  /**
   * 列出沙箱
   * 
   * @remarks
   * 获取当前用户的所有沙箱列表，支持按模板名称过滤，支持分页查询。
   * 
   * @param request - ListSandboxesRequest
   * @returns ListSandboxesResponse
   */
  async listSandboxes(request: $_model.ListSandboxesRequest): Promise<$_model.ListSandboxesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSandboxesWithOptions(request, headers, runtime);
  }

  /**
   * 列出模板
   * 
   * @remarks
   * 获取当前用户的所有模板列表，支持按模板类型过滤，支持分页查询。
   * 
   * @param request - ListTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: $_model.ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * 列出模板
   * 
   * @remarks
   * 获取当前用户的所有模板列表，支持按模板类型过滤，支持分页查询。
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
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
   * 删除沙箱
   * 
   * @remarks
   * 停止指定的沙箱实例。停止后，沙箱将进入TERMINATED状态。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSandboxResponse
   */
  async stopSandboxWithOptions(sandboxId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSandboxResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes/${$dara.URL.percentEncode(sandboxId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSandboxResponse>(await this.callApi(params, req, runtime), new $_model.StopSandboxResponse({}));
  }

  /**
   * 删除沙箱
   * 
   * @remarks
   * 停止指定的沙箱实例。停止后，沙箱将进入TERMINATED状态。
   * @returns StopSandboxResponse
   */
  async stopSandbox(sandboxId: string): Promise<$_model.StopSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * 停止模板的MCP服务器
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTemplateMCPResponse
   */
  async stopTemplateMCPWithOptions(templateName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTemplateMCPResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTemplateMCP",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates/${$dara.URL.percentEncode(templateName)}/mcp/stop`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTemplateMCPResponse>(await this.callApi(params, req, runtime), new $_model.StopTemplateMCPResponse({}));
  }

  /**
   * 停止模板的MCP服务器
   * @returns StopTemplateMCPResponse
   */
  async stopTemplateMCP(templateName: string): Promise<$_model.StopTemplateMCPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTemplateMCPWithOptions(templateName, headers, runtime);
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
   * Update a credential
   * 
   * @param request - UpdateCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialResponse
   */
  async updateCredentialWithOptions(credentialName: string, request: $_model.UpdateCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCredential",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/credentials/${$dara.URL.percentEncode(credentialName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCredentialResponse({}));
  }

  /**
   * Update a credential
   * 
   * @param request - UpdateCredentialRequest
   * @returns UpdateCredentialResponse
   */
  async updateCredential(credentialName: string, request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCredentialWithOptions(credentialName, request, headers, runtime);
  }

  /**
   * 更新自定义域名
   * 
   * @param request - UpdateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomainWithOptions(domainName: string, request: $_model.UpdateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomDomain",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomDomainResponse({}));
  }

  /**
   * 更新自定义域名
   * 
   * @param request - UpdateCustomDomainRequest
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomain(domainName: string, request: $_model.UpdateCustomDomainRequest): Promise<$_model.UpdateCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCustomDomainWithOptions(domainName, request, headers, runtime);
  }

  /**
   * 更新知识库
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBaseWithOptions(knowledgeBaseName: string, request: $_model.UpdateKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBase",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/knowledgebases/${$dara.URL.percentEncode(knowledgeBaseName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseResponse({}));
  }

  /**
   * 更新知识库
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBase(knowledgeBaseName: string, request: $_model.UpdateKnowledgeBaseRequest): Promise<$_model.UpdateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseWithOptions(knowledgeBaseName, request, headers, runtime);
  }

  /**
   * 修改记忆存储信息
   * 
   * @param request - UpdateMemoryCollectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryCollectionResponse
   */
  async updateMemoryCollectionWithOptions(memoryCollectionName: string, request: $_model.UpdateMemoryCollectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryCollectionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemoryCollection",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/memory-collections/${$dara.URL.percentEncode(memoryCollectionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryCollectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryCollectionResponse({}));
  }

  /**
   * 修改记忆存储信息
   * 
   * @param request - UpdateMemoryCollectionRequest
   * @returns UpdateMemoryCollectionResponse
   */
  async updateMemoryCollection(memoryCollectionName: string, request: $_model.UpdateMemoryCollectionRequest): Promise<$_model.UpdateMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryCollectionWithOptions(memoryCollectionName, request, headers, runtime);
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelProxyResponse
   */
  async updateModelProxyWithOptions(modelProxyName: string, request: $_model.UpdateModelProxyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelProxyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelProxy",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-proxies/${$dara.URL.percentEncode(modelProxyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelProxyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelProxyResponse({}));
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelProxyRequest
   * @returns UpdateModelProxyResponse
   */
  async updateModelProxy(modelProxyName: string, request: $_model.UpdateModelProxyRequest): Promise<$_model.UpdateModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelProxyWithOptions(modelProxyName, request, headers, runtime);
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelServiceResponse
   */
  async updateModelServiceWithOptions(modelServiceName: string, request: $_model.UpdateModelServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelService",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/model-services/${$dara.URL.percentEncode(modelServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelServiceResponse({}));
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelServiceRequest
   * @returns UpdateModelServiceResponse
   */
  async updateModelService(modelServiceName: string, request: $_model.UpdateModelServiceRequest): Promise<$_model.UpdateModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelServiceWithOptions(modelServiceName, request, headers, runtime);
  }

  /**
   * 更新模板
   * 
   * @remarks
   * 更新指定模板的配置信息，包括资源配置、网络配置、环境变量等。
   * 
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(templateName: string, request: $_model.UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/templates/${$dara.URL.percentEncode(templateName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * 更新模板
   * 
   * @remarks
   * 更新指定模板的配置信息，包括资源配置、网络配置、环境变量等。
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(templateName: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(templateName, request, headers, runtime);
  }

}
