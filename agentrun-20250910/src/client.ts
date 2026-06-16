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
    this._endpointMap = {
      'cn-shenzhen': "agentrun.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "agentrun.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "agentrun.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "agentrun.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "agentrun.ap-southeast-1.aliyuncs.com",
    };
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
   * Activates the `MCP service` for a `sandbox` `template`. This enables a client to access the `sandbox` using the MCP protocol.
   * 
   * @remarks
   * After activation, the platform automatically deploys the `MCP service` `function` for the specified `sandbox` `template`. The `MCP service` ensures a unique mapping between an `mcp-session-id` and a `SandboxID`. When an MCP `client` invokes a `tool`, the `MCP service` automatically creates a `sandbox`.
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
   * Activates the `MCP service` for a `sandbox` `template`. This enables a client to access the `sandbox` using the MCP protocol.
   * 
   * @remarks
   * After activation, the platform automatically deploys the `MCP service` `function` for the specified `sandbox` `template`. The `MCP service` ensures a unique mapping between an `mcp-session-id` and a `SandboxID`. When an MCP `client` invokes a `tool`, the `MCP service` automatically creates a `sandbox`.
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
   * Converts a Flow DSL.
   * 
   * @remarks
   * This operation converts a third-party workflow DSL, such as Dify or n8n, into an AgentRun Flow definition. It performs compatibility checks, identifies plugins, and extracts metadata. The operation runs in dry-run mode, returning the converted Flow configuration, a compatibility analysis report, and the required Toolset installation configuration without creating a Flow resource.
   * 
   * @param request - ConvertFlowDSLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertFlowDSLResponse
   */
  async convertFlowDSLWithOptions(request: $_model.ConvertFlowDSLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertFlowDSLResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertFlowDSL",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/action/convertDsl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertFlowDSLResponse>(await this.callApi(params, req, runtime), new $_model.ConvertFlowDSLResponse({}));
  }

  /**
   * Converts a Flow DSL.
   * 
   * @remarks
   * This operation converts a third-party workflow DSL, such as Dify or n8n, into an AgentRun Flow definition. It performs compatibility checks, identifies plugins, and extracts metadata. The operation runs in dry-run mode, returning the converted Flow configuration, a compatibility analysis report, and the required Toolset installation configuration without creating a Flow resource.
   * 
   * @param request - ConvertFlowDSLRequest
   * @returns ConvertFlowDSLResponse
   */
  async convertFlowDSL(request: $_model.ConvertFlowDSLRequest): Promise<$_model.ConvertFlowDSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertFlowDSLWithOptions(request, headers, runtime);
  }

  /**
   * Creates an agent runtime.
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
   * Creates an agent runtime.
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
   * Create an access endpoint for an agent runtime
   * 
   * @remarks
   * Creates a new endpoint for the specified agent runtime, used for external access and invocation. An endpoint serves as the entry point through which an agent runtime provides services externally.
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
   * Create an access endpoint for an agent runtime
   * 
   * @remarks
   * Creates a new endpoint for the specified agent runtime, used for external access and invocation. An endpoint serves as the entry point through which an agent runtime provides services externally.
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
   * Create Browser Sandbox
   * 
   * @remarks
   * Create a new browser instance for executing web automation tasks. The browser instance provides features such as web browsing, element manipulation, and screenshot recording.
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
   * Create Browser Sandbox
   * 
   * @remarks
   * Create a new browser instance for executing web automation tasks. The browser instance provides features such as web browsing, element manipulation, and screenshot recording.
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
   * Creates a code interpreter.
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
   * Creates a code interpreter.
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
   * Creates a new credential.
   * 
   * @remarks
   * This operation creates a credential for an agent.
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
   * Creates a new credential.
   * 
   * @remarks
   * This operation creates a credential for an agent.
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
   * Creates a custom domain.
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
   * Creates a custom domain.
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
   * Creates a workflow.
   * 
   * @remarks
   * Creates a flow orchestration agent. Flow orchestration is a core component of the AgentRun service that supports visual orchestration and version management.
   * 
   * @param request - CreateFlowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(request: $_model.CreateFlowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlow",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowResponse({}));
  }

  /**
   * Creates a workflow.
   * 
   * @remarks
   * Creates a flow orchestration agent. Flow orchestration is a core component of the AgentRun service that supports visual orchestration and version management.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: $_model.CreateFlowRequest): Promise<$_model.CreateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFlowWithOptions(request, headers, runtime);
  }

  /**
   * Creates a flow endpoint.
   * 
   * @remarks
   * 为指定工作流创建一个新的端点，用于对外提供服务访问。
   * 
   * @param request - CreateFlowEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowEndpointResponse
   */
  async createFlowEndpointWithOptions(flowName: string, request: $_model.CreateFlowEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowEndpointResponse({}));
  }

  /**
   * Creates a flow endpoint.
   * 
   * @remarks
   * 为指定工作流创建一个新的端点，用于对外提供服务访问。
   * 
   * @param request - CreateFlowEndpointRequest
   * @returns CreateFlowEndpointResponse
   */
  async createFlowEndpoint(flowName: string, request: $_model.CreateFlowEndpointRequest): Promise<$_model.CreateFlowEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFlowEndpointWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Creates an IM Bot.
   * 
   * @remarks
   * A successful request returns an HTTP 201 status code. Once created, an IM Bot\\"s status is always `running`. The response is in a standard format, and its `data` field contains an `IMBotInfo` object.
   * 
   * @param request - CreateIMBotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIMBotResponse
   */
  async createIMBotWithOptions(request: $_model.CreateIMBotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIMBotResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIMBot",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/im-bots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIMBotResponse>(await this.callApi(params, req, runtime), new $_model.CreateIMBotResponse({}));
  }

  /**
   * Creates an IM Bot.
   * 
   * @remarks
   * A successful request returns an HTTP 201 status code. Once created, an IM Bot\\"s status is always `running`. The response is in a standard format, and its `data` field contains an `IMBotInfo` object.
   * 
   * @param request - CreateIMBotRequest
   * @returns CreateIMBotResponse
   */
  async createIMBot(request: $_model.CreateIMBotRequest): Promise<$_model.CreateIMBotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIMBotWithOptions(request, headers, runtime);
  }

  /**
   * Creates a knowledge base.
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
   * Creates a knowledge base.
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
   * Creates a memory collection.
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
   * Creates a memory collection.
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
   * Creates a Model Proxy.
   * 
   * @remarks
   * This operation creates a Model Proxy based on the specified configuration.
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
   * Creates a Model Proxy.
   * 
   * @remarks
   * This operation creates a Model Proxy based on the specified configuration.
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
   * Creates a model service.
   * 
   * @remarks
   * This operation creates a model service, such as a code interpreter, based on the specified configuration.
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
   * Creates a model service.
   * 
   * @remarks
   * This operation creates a model service, such as a code interpreter, based on the specified configuration.
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
   * Creates a sandbox.
   * 
   * @remarks
   * Creates a new sandbox instance from a specified template. A sandbox provides an isolated execution environment to run code or launch a browser.
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
   * Creates a sandbox.
   * 
   * @remarks
   * Creates a new sandbox instance from a specified template. A sandbox provides an isolated execution environment to run code or launch a browser.
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
   * Creates a template.
   * 
   * @remarks
   * Creates a template for launching sandboxes. A template defines the runtime environment, resource configuration, and other settings for a sandbox.
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
   * Creates a template.
   * 
   * @remarks
   * Creates a template for launching sandboxes. A template defines the runtime environment, resource configuration, and other settings for a sandbox.
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
   * Creates a tool.
   * 
   * @remarks
   * This operation creates various types of tools, such as MCP, function call, and skill. An Agent can then call a tool to extend its capabilities.
   * 
   * @param request - CreateToolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateToolResponse
   */
  async createToolWithOptions(request: $_model.CreateToolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateToolResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTool",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/tools`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateToolResponse>(await this.callApi(params, req, runtime), new $_model.CreateToolResponse({}));
  }

  /**
   * Creates a tool.
   * 
   * @remarks
   * This operation creates various types of tools, such as MCP, function call, and skill. An Agent can then call a tool to extend its capabilities.
   * 
   * @param request - CreateToolRequest
   * @returns CreateToolResponse
   */
  async createTool(request: $_model.CreateToolRequest): Promise<$_model.CreateToolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createToolWithOptions(request, headers, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Delete Agent Runtime
   * 
   * @remarks
   * Deletes a specified agent runtime instance, including all associated resources and data. This operation is irreversible. Proceed with caution.
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
   * Delete Agent Runtime
   * 
   * @remarks
   * Deletes a specified agent runtime instance, including all associated resources and data. This operation is irreversible. Proceed with caution.
   * @returns DeleteAgentRuntimeResponse
   */
  async deleteAgentRuntime(agentRuntimeId: string): Promise<$_model.DeleteAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentRuntimeWithOptions(agentRuntimeId, headers, runtime);
  }

  /**
   * Delete Agent Runtime Endpoint
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
   * Delete Agent Runtime Endpoint
   * @returns DeleteAgentRuntimeEndpointResponse
   */
  async deleteAgentRuntimeEndpoint(agentRuntimeId: string, agentRuntimeEndpointId: string): Promise<$_model.DeleteAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentRuntimeEndpointWithOptions(agentRuntimeId, agentRuntimeEndpointId, headers, runtime);
  }

  /**
   * Delete Browser Sandbox
   * 
   * @remarks
   * Delete the specified browser instance, including all its associated resources and data. The deletion is irreversible. Please proceed with caution.
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
   * Delete Browser Sandbox
   * 
   * @remarks
   * Delete the specified browser instance, including all its associated resources and data. The deletion is irreversible. Please proceed with caution.
   * @returns DeleteBrowserResponse
   */
  async deleteBrowser(browserId: string): Promise<$_model.DeleteBrowserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBrowserWithOptions(browserId, headers, runtime);
  }

  /**
   * Delete Code Interpreter
   * 
   * @remarks
   * Delete a specified code interpreter instance, including all its associated resources and data. This operation is irreversible. Please proceed with caution.
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
   * Delete Code Interpreter
   * 
   * @remarks
   * Delete a specified code interpreter instance, including all its associated resources and data. This operation is irreversible. Please proceed with caution.
   * @returns DeleteCodeInterpreterResponse
   */
  async deleteCodeInterpreter(codeInterpreterId: string): Promise<$_model.DeleteCodeInterpreterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeInterpreterWithOptions(codeInterpreterId, headers, runtime);
  }

  /**
   * Deletes the specified credential.
   * 
   * @remarks
   * This operation deletes the specified credential. This action cannot be undone.
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
   * Deletes the specified credential.
   * 
   * @remarks
   * This operation deletes the specified credential. This action cannot be undone.
   * @returns DeleteCredentialResponse
   */
  async deleteCredential(credentialName: string): Promise<$_model.DeleteCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCredentialWithOptions(credentialName, headers, runtime);
  }

  /**
   * Deletes a custom domain.
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
   * Deletes a custom domain.
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomain(domainName: string): Promise<$_model.DeleteCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * Deletes a flow.
   * 
   * @remarks
   * Deletes a specified flow instance, along with all its related resources and data. This operation is irreversible and cannot be undone. Use with caution.
   * 
   * @param request - DeleteFlowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(flowName: string, request: $_model.DeleteFlowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlow",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowResponse({}));
  }

  /**
   * Deletes a flow.
   * 
   * @remarks
   * Deletes a specified flow instance, along with all its related resources and data. This operation is irreversible and cannot be undone. Use with caution.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(flowName: string, request: $_model.DeleteFlowRequest): Promise<$_model.DeleteFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Deletes a flow endpoint.
   * 
   * @remarks
   * Deletes the specified flow endpoint. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteFlowEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowEndpointResponse
   */
  async deleteFlowEndpointWithOptions(flowName: string, flowEndpointName: string, request: $_model.DeleteFlowEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/endpoints/${$dara.URL.percentEncode(flowEndpointName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowEndpointResponse({}));
  }

  /**
   * Deletes a flow endpoint.
   * 
   * @remarks
   * Deletes the specified flow endpoint. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteFlowEndpointRequest
   * @returns DeleteFlowEndpointResponse
   */
  async deleteFlowEndpoint(flowName: string, flowEndpointName: string, request: $_model.DeleteFlowEndpointRequest): Promise<$_model.DeleteFlowEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowEndpointWithOptions(flowName, flowEndpointName, request, headers, runtime);
  }

  /**
   * Deletes a workflow version.
   * 
   * @remarks
   * Deletes a specified version of a workflow. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteFlowVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersionWithOptions(flowName: string, flowVersion: string, request: $_model.DeleteFlowVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowVersion",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/versions/${$dara.URL.percentEncode(flowVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowVersionResponse({}));
  }

  /**
   * Deletes a workflow version.
   * 
   * @remarks
   * Deletes a specified version of a workflow. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteFlowVersionRequest
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersion(flowName: string, flowVersion: string, request: $_model.DeleteFlowVersionRequest): Promise<$_model.DeleteFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowVersionWithOptions(flowName, flowVersion, request, headers, runtime);
  }

  /**
   * Deletes an IM bot.
   * 
   * @remarks
   * This operation deletes an IM bot via a `DELETE` request to the `/2025-09-10/agents/im-bots/{imBotId}` endpoint. A successful request returns an HTTP `204 No Content` status code and an empty response body.
   * 
   * @param request - DeleteIMBotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIMBotResponse
   */
  async deleteIMBotWithOptions(imBotId: string, request: $_model.DeleteIMBotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIMBotResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIMBot",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/im-bots/${$dara.URL.percentEncode(imBotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIMBotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIMBotResponse({}));
  }

  /**
   * Deletes an IM bot.
   * 
   * @remarks
   * This operation deletes an IM bot via a `DELETE` request to the `/2025-09-10/agents/im-bots/{imBotId}` endpoint. A successful request returns an HTTP `204 No Content` status code and an empty response body.
   * 
   * @param request - DeleteIMBotRequest
   * @returns DeleteIMBotResponse
   */
  async deleteIMBot(imBotId: string, request: $_model.DeleteIMBotRequest): Promise<$_model.DeleteIMBotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIMBotWithOptions(imBotId, request, headers, runtime);
  }

  /**
   * Deletes a knowledge base.
   * > This operation is permanent and cannot be undone.
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
   * Deletes a knowledge base.
   * > This operation is permanent and cannot be undone.
   * @returns DeleteKnowledgeBaseResponse
   */
  async deleteKnowledgeBase(knowledgeBaseName: string): Promise<$_model.DeleteKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKnowledgeBaseWithOptions(knowledgeBaseName, headers, runtime);
  }

  /**
   * Deletes a memory collection.
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
   * Deletes a memory collection.
   * @returns DeleteMemoryCollectionResponse
   */
  async deleteMemoryCollection(memoryCollectionName: string): Promise<$_model.DeleteMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryCollectionWithOptions(memoryCollectionName, headers, runtime);
  }

  /**
   * Deletes a model proxy.
   * 
   * @remarks
   * This operation deletes the specified model proxy configuration without deleting the underlying models or related resources.
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
   * Deletes a model proxy.
   * 
   * @remarks
   * This operation deletes the specified model proxy configuration without deleting the underlying models or related resources.
   * @returns DeleteModelProxyResponse
   */
  async deleteModelProxy(modelProxyName: string): Promise<$_model.DeleteModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelProxyWithOptions(modelProxyName, headers, runtime);
  }

  /**
   * Deletes a model service.
   * 
   * @remarks
   * This operation deletes a model service. You must specify the name of the service to delete.
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
   * Deletes a model service.
   * 
   * @remarks
   * This operation deletes a model service. You must specify the name of the service to delete.
   * @returns DeleteModelServiceResponse
   */
  async deleteModelService(modelServiceName: string): Promise<$_model.DeleteModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelServiceWithOptions(modelServiceName, headers, runtime);
  }

  /**
   * Deletes a sandbox instance.
   * 
   * @remarks
   * Deletes a sandbox instance.
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
   * Deletes a sandbox instance.
   * 
   * @remarks
   * Deletes a sandbox instance.
   * @returns DeleteSandboxResponse
   */
  async deleteSandbox(sandboxId: string): Promise<$_model.DeleteSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * Deletes the specified template. After you delete a template, you can no longer use it to create new sandboxes.
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
   * Deletes a template.
   * 
   * @remarks
   * Deletes the specified template. After you delete a template, you can no longer use it to create new sandboxes.
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(templateName: string): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(templateName, headers, runtime);
  }

  /**
   * Delete a tool
   * 
   * @remarks
   * Delete the specified tool. The delete operation is irreversible. Proceed with caution. After the tool is deleted, all Agents that reference this tool will no longer be able to use it.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteToolResponse
   */
  async deleteToolWithOptions(toolName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteToolResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTool",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/tools/${$dara.URL.percentEncode(toolName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteToolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteToolResponse({}));
  }

  /**
   * Delete a tool
   * 
   * @remarks
   * Delete the specified tool. The delete operation is irreversible. Proceed with caution. After the tool is deleted, all Agents that reference this tool will no longer be able to use it.
   * @returns DeleteToolResponse
   */
  async deleteTool(toolName: string): Promise<$_model.DeleteToolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteToolWithOptions(toolName, headers, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * Deletes the specified workspace.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * Deletes the specified workspace.
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceId: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceId, headers, runtime);
  }

  /**
   * Obtains an access token.
   * 
   * @remarks
   * Obtains a temporary accessToken that is used to authenticate subsequent API requests.
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
   * Obtains an access token.
   * 
   * @remarks
   * Obtains a temporary accessToken that is used to authenticate subsequent API requests.
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
   * Get Agent Runtime
   * 
   * @remarks
   * Retrieves detailed information about a specified agent runtime by its agent runtime ID, including configuration, status, resource usage, and more.
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
   * Get Agent Runtime
   * 
   * @remarks
   * Retrieves detailed information about a specified agent runtime by its agent runtime ID, including configuration, status, resource usage, and more.
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
   * Get Agent Runtime Access Endpoint
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
   * Get Agent Runtime Access Endpoint
   * @returns GetAgentRuntimeEndpointResponse
   */
  async getAgentRuntimeEndpoint(agentRuntimeId: string, agentRuntimeEndpointId: string): Promise<$_model.GetAgentRuntimeEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentRuntimeEndpointWithOptions(agentRuntimeId, agentRuntimeEndpointId, headers, runtime);
  }

  /**
   * GetBrowserSandbox
   * 
   * @remarks
   * Retrieves detailed information about a specified browser instance by browser ID, including configuration, status, resource usage, and more.
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
   * GetBrowserSandbox
   * 
   * @remarks
   * Retrieves detailed information about a specified browser instance by browser ID, including configuration, status, resource usage, and more.
   * @returns GetBrowserResponse
   */
  async getBrowser(browserId: string): Promise<$_model.GetBrowserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBrowserWithOptions(browserId, headers, runtime);
  }

  /**
   * Retrieves an interpreter.
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
   * Retrieves an interpreter.
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
   * Retrieves information about a specific credential.
   * 
   * @remarks
   * Retrieves detailed information about a specified credential, including its configuration, metadata, and related resources.
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
   * Retrieves information about a specific credential.
   * 
   * @remarks
   * Retrieves detailed information about a specified credential, including its configuration, metadata, and related resources.
   * @returns GetCredentialResponse
   */
  async getCredential(credentialName: string): Promise<$_model.GetCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCredentialWithOptions(credentialName, headers, runtime);
  }

  /**
   * Retrieves the configuration of a custom domain.
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
   * Retrieves the configuration of a custom domain.
   * @returns GetCustomDomainResponse
   */
  async getCustomDomain(domainName: string): Promise<$_model.GetCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * Get flow details
   * 
   * @remarks
   * 根据工作流ID获取指定工作流的详细信息，包括配置、定义、版本信息等。
   * 
   * @param request - GetFlowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowResponse
   */
  async getFlowWithOptions(flowName: string, request: $_model.GetFlowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlow",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowResponse({}));
  }

  /**
   * Get flow details
   * 
   * @remarks
   * 根据工作流ID获取指定工作流的详细信息，包括配置、定义、版本信息等。
   * 
   * @param request - GetFlowRequest
   * @returns GetFlowResponse
   */
  async getFlow(flowName: string, request: $_model.GetFlowRequest): Promise<$_model.GetFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Get the workflow draft.
   * 
   * @remarks
   * 获取指定工作流的草稿版本，返回草稿中的配置信息。
   * 
   * @param request - GetFlowDraftRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowDraftResponse
   */
  async getFlowDraftWithOptions(flowName: string, request: $_model.GetFlowDraftRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowDraftResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowDraft",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/draft`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowDraftResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowDraftResponse({}));
  }

  /**
   * Get the workflow draft.
   * 
   * @remarks
   * 获取指定工作流的草稿版本，返回草稿中的配置信息。
   * 
   * @param request - GetFlowDraftRequest
   * @returns GetFlowDraftResponse
   */
  async getFlowDraft(flowName: string, request: $_model.GetFlowDraftRequest): Promise<$_model.GetFlowDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowDraftWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a workflow endpoint.
   * 
   * @remarks
   * 根据工作流ID和端点ID获取指定工作流端点的详细信息。
   * 
   * @param request - GetFlowEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowEndpointResponse
   */
  async getFlowEndpointWithOptions(flowName: string, flowEndpointName: string, request: $_model.GetFlowEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/endpoints/${$dara.URL.percentEncode(flowEndpointName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowEndpointResponse({}));
  }

  /**
   * Retrieves the details of a workflow endpoint.
   * 
   * @remarks
   * 根据工作流ID和端点ID获取指定工作流端点的详细信息。
   * 
   * @param request - GetFlowEndpointRequest
   * @returns GetFlowEndpointResponse
   */
  async getFlowEndpoint(flowName: string, flowEndpointName: string, request: $_model.GetFlowEndpointRequest): Promise<$_model.GetFlowEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowEndpointWithOptions(flowName, flowEndpointName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a workflow version.
   * 
   * @remarks
   * Retrieves the details of a specific workflow version, including a complete configuration snapshot of its definition, environment variables, tracing configuration, and logging configuration.
   * 
   * @param request - GetFlowVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowVersionResponse
   */
  async getFlowVersionWithOptions(flowName: string, flowVersion: string, request: $_model.GetFlowVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowVersion",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/versions/${$dara.URL.percentEncode(flowVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowVersionResponse({}));
  }

  /**
   * Retrieves the details of a workflow version.
   * 
   * @remarks
   * Retrieves the details of a specific workflow version, including a complete configuration snapshot of its definition, environment variables, tracing configuration, and logging configuration.
   * 
   * @param request - GetFlowVersionRequest
   * @returns GetFlowVersionResponse
   */
  async getFlowVersion(flowName: string, flowVersion: string, request: $_model.GetFlowVersionRequest): Promise<$_model.GetFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowVersionWithOptions(flowName, flowVersion, request, headers, runtime);
  }

  /**
   * Gets the details of a specific IM Bot.
   * 
   * @remarks
   * GET /2025-09-10/agents/im-bots/{imBotId}；200 OK，Body 标准包装，data 为 IMBotInfo
   * 
   * @param request - GetIMBotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIMBotResponse
   */
  async getIMBotWithOptions(imBotId: string, request: $_model.GetIMBotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIMBotResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIMBot",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/im-bots/${$dara.URL.percentEncode(imBotId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIMBotResponse>(await this.callApi(params, req, runtime), new $_model.GetIMBotResponse({}));
  }

  /**
   * Gets the details of a specific IM Bot.
   * 
   * @remarks
   * GET /2025-09-10/agents/im-bots/{imBotId}；200 OK，Body 标准包装，data 为 IMBotInfo
   * 
   * @param request - GetIMBotRequest
   * @returns GetIMBotResponse
   */
  async getIMBot(imBotId: string, request: $_model.GetIMBotRequest): Promise<$_model.GetIMBotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIMBotWithOptions(imBotId, request, headers, runtime);
  }

  /**
   * Gets information about a knowledge base.
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
   * Gets information about a knowledge base.
   * @returns GetKnowledgeBaseResponse
   */
  async getKnowledgeBase(knowledgeBaseName: string): Promise<$_model.GetKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBaseWithOptions(knowledgeBaseName, headers, runtime);
  }

  /**
   * Retrieves details for a specific memory collection.
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
   * Retrieves details for a specific memory collection.
   * @returns GetMemoryCollectionResponse
   */
  async getMemoryCollection(memoryCollectionName: string): Promise<$_model.GetMemoryCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryCollectionWithOptions(memoryCollectionName, headers, runtime);
  }

  /**
   * Retrieves model governance information.
   * 
   * @remarks
   * This operation retrieves the configuration details of a specific model proxy.
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
   * Retrieves model governance information.
   * 
   * @remarks
   * This operation retrieves the configuration details of a specific model proxy.
   * @returns GetModelProxyResponse
   */
  async getModelProxy(modelProxyName: string): Promise<$_model.GetModelProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelProxyWithOptions(modelProxyName, headers, runtime);
  }

  /**
   * Retrieves the details of a specified model service.
   * 
   * @remarks
   * Retrieves the details of a specified model service.
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
   * Retrieves the details of a specified model service.
   * 
   * @remarks
   * Retrieves the details of a specified model service.
   * @returns GetModelServiceResponse
   */
  async getModelService(modelServiceName: string): Promise<$_model.GetModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelServiceWithOptions(modelServiceName, headers, runtime);
  }

  /**
   * Retrieves the details of a specific sandbox.
   * 
   * @remarks
   * Retrieves the details of a specific sandbox by its `sandboxId`, including its status and configuration.
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
   * Retrieves the details of a specific sandbox.
   * 
   * @remarks
   * Retrieves the details of a specific sandbox by its `sandboxId`, including its status and configuration.
   * @returns GetSandboxResponse
   */
  async getSandbox(sandboxId: string): Promise<$_model.GetSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * Retrieves a template.
   * 
   * @remarks
   * Retrieves the details of a template by its name. The response includes the template\\"s configuration and status.
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
   * Retrieves a template.
   * 
   * @remarks
   * Retrieves the details of a template by its name. The response includes the template\\"s configuration and status.
   * @returns GetTemplateResponse
   */
  async getTemplate(templateName: string): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(templateName, headers, runtime);
  }

  /**
   * Get a tool
   * 
   * @remarks
   * Obtain the complete configuration information of a tool by its name, including basic information, resource configuration, network configuration, running status, and all other detailed information.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetToolResponse
   */
  async getToolWithOptions(toolName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetToolResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTool",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/tools/${$dara.URL.percentEncode(toolName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetToolResponse>(await this.callApi(params, req, runtime), new $_model.GetToolResponse({}));
  }

  /**
   * Get a tool
   * 
   * @remarks
   * Obtain the complete configuration information of a tool by its name, including basic information, resource configuration, network configuration, running status, and all other detailed information.
   * @returns GetToolResponse
   */
  async getTool(toolName: string): Promise<$_model.GetToolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getToolWithOptions(toolName, headers, runtime);
  }

  /**
   * Retrieves the details of a specific workspace.
   * 
   * @remarks
   * Retrieves the details of a specific workspace.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * Retrieves the details of a specific workspace.
   * 
   * @remarks
   * Retrieves the details of a specific workspace.
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceId: string): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceId, headers, runtime);
  }

  /**
   * Gets the discovery endpoints for a workspace.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceDiscoveryEndpointsResponse
   */
  async getWorkspaceDiscoveryEndpointsWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceDiscoveryEndpointsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaceDiscoveryEndpoints",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces/${$dara.URL.percentEncode(workspaceId)}/discovery/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceDiscoveryEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceDiscoveryEndpointsResponse({}));
  }

  /**
   * Gets the discovery endpoints for a workspace.
   * @returns GetWorkspaceDiscoveryEndpointsResponse
   */
  async getWorkspaceDiscoveryEndpoints(workspaceId: string): Promise<$_model.GetWorkspaceDiscoveryEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceDiscoveryEndpointsWithOptions(workspaceId, headers, runtime);
  }

  /**
   * List Agent Runtime Endpoints
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
   * List Agent Runtime Endpoints
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
   * Retrieves agent runtime versions.
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
   * Retrieves agent runtime versions.
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
   * Retrieves a list of agent runtimes.
   * 
   * @remarks
   * Retrieves a list of agent runtimes for the current user. You can filter the results based on criteria such as name and tags. This operation supports pagination.
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

    if (!$dara.isNull(request.discoveryResourceGroupId)) {
      query["discoveryResourceGroupId"] = request.discoveryResourceGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["searchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.systemTags)) {
      query["systemTags"] = request.systemTags;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Retrieves a list of agent runtimes.
   * 
   * @remarks
   * Retrieves a list of agent runtimes for the current user. You can filter the results based on criteria such as name and tags. This operation supports pagination.
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
   * List Browser Sandboxes
   * 
   * @remarks
   * Retrieves a list of all browser instances for the current user. Supports filtering by conditions such as name and status, and supports paginated queries.
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
   * List Browser Sandboxes
   * 
   * @remarks
   * Retrieves a list of all browser instances for the current user. Supports filtering by conditions such as name and status, and supports paginated queries.
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
   * List Code Interpreters
   * 
   * @remarks
   * Retrieve a list of all code interpreter instances for the current user, with support for filtering by name and pagination.
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
   * List Code Interpreters
   * 
   * @remarks
   * Retrieve a list of all code interpreter instances for the current user, with support for filtering by name and pagination.
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
   * Lists all credentials.
   * 
   * @remarks
   * Lists the credentials in your account. This operation supports filtering and pagination.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Lists all credentials.
   * 
   * @remarks
   * Lists the credentials in your account. This operation supports filtering and pagination.
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
   * Lists custom domains.
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

    if (!$dara.isNull(request.domainType)) {
      query["domainType"] = request.domainType;
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
   * Lists custom domains.
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
   * List workflow endpoints.
   * 
   * @remarks
   * Retrieve all endpoints for a specified workflow, with pagination support.
   * 
   * @param request - ListFlowEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowEndpointsResponse
   */
  async listFlowEndpointsWithOptions(flowId: string, request: $_model.ListFlowEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowEndpointsResponse> {
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
      action: "ListFlowEndpoints",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowId)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowEndpointsResponse({}));
  }

  /**
   * List workflow endpoints.
   * 
   * @remarks
   * Retrieve all endpoints for a specified workflow, with pagination support.
   * 
   * @param request - ListFlowEndpointsRequest
   * @returns ListFlowEndpointsResponse
   */
  async listFlowEndpoints(flowId: string, request: $_model.ListFlowEndpointsRequest): Promise<$_model.ListFlowEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowEndpointsWithOptions(flowId, request, headers, runtime);
  }

  /**
   * Lists the versions of a flow.
   * 
   * @remarks
   * Returns a paginated list of all versions for a specified flow.
   * 
   * @param request - ListFlowVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowVersionsResponse
   */
  async listFlowVersionsWithOptions(flowName: string, request: $_model.ListFlowVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowVersionsResponse> {
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
      action: "ListFlowVersions",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowVersionsResponse({}));
  }

  /**
   * Lists the versions of a flow.
   * 
   * @remarks
   * Returns a paginated list of all versions for a specified flow.
   * 
   * @param request - ListFlowVersionsRequest
   * @returns ListFlowVersionsResponse
   */
  async listFlowVersions(flowName: string, request: $_model.ListFlowVersionsRequest): Promise<$_model.ListFlowVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowVersionsWithOptions(flowName, request, headers, runtime);
  }

  /**
   * List flows
   * 
   * @remarks
   * 获取当前用户的工作流列表，支持按名称、工作空间等条件过滤，支持分页查询。
   * 
   * @param request - ListFlowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowsResponse
   */
  async listFlowsWithOptions(request: $_model.ListFlowsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowName)) {
      query["flowName"] = request.flowName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlows",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowsResponse({}));
  }

  /**
   * List flows
   * 
   * @remarks
   * 获取当前用户的工作流列表，支持按名称、工作空间等条件过滤，支持分页查询。
   * 
   * @param request - ListFlowsRequest
   * @returns ListFlowsResponse
   */
  async listFlows(request: $_model.ListFlowsRequest): Promise<$_model.ListFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a paginated list of IM bots.
   * 
   * @remarks
   * Send a GET request to the `/2025-09-10/agents/im-bots` endpoint to retrieve a paginated list of IM bots. Use the `botName`, `agentRuntimeId`, `botBizType`, and `status` query parameters to filter the results. For pagination, the `pageNumber` defaults to 1 and the `pageSize` defaults to 20, with a maximum of 100.
   * 
   * @param request - ListIMBotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIMBotsResponse
   */
  async listIMBotsWithOptions(request: $_model.ListIMBotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIMBotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentRuntimeId)) {
      query["agentRuntimeId"] = request.agentRuntimeId;
    }

    if (!$dara.isNull(request.botBizType)) {
      query["botBizType"] = request.botBizType;
    }

    if (!$dara.isNull(request.botName)) {
      query["botName"] = request.botName;
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
      action: "ListIMBots",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/im-bots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIMBotsResponse>(await this.callApi(params, req, runtime), new $_model.ListIMBotsResponse({}));
  }

  /**
   * Retrieves a paginated list of IM bots.
   * 
   * @remarks
   * Send a GET request to the `/2025-09-10/agents/im-bots` endpoint to retrieve a paginated list of IM bots. Use the `botName`, `agentRuntimeId`, `botBizType`, and `status` query parameters to filter the results. For pagination, the `pageNumber` defaults to 1 and the `pageSize` defaults to 20, with a maximum of 100.
   * 
   * @param request - ListIMBotsRequest
   * @returns ListIMBotsResponse
   */
  async listIMBots(request: $_model.ListIMBotsRequest): Promise<$_model.ListIMBotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIMBotsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the knowledge bases in your account.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Lists the knowledge bases in your account.
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
   * Returns a paginated list of memory collections.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Returns a paginated list of memory collections.
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
   * Lists all model providers.
   * 
   * @remarks
   * Lists the available model providers. This operation supports filtering and pagination.
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
   * Lists all model providers.
   * 
   * @remarks
   * Lists the available model providers. This operation supports filtering and pagination.
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
   * Lists all Model Proxies.
   * 
   * @remarks
   * Retrieves a paginated list of all Model Proxies for the current user. You can filter the list by status.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Lists all Model Proxies.
   * 
   * @remarks
   * Retrieves a paginated list of all Model Proxies for the current user. You can filter the list by status.
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
   * Lists all models.
   * 
   * @remarks
   * Retrieves a list of all models for the current user. You can filter the models by type and paginate the results.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Lists all models.
   * 
   * @remarks
   * Retrieves a list of all models for the current user. You can filter the models by type and paginate the results.
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
   * Returns a list of sandboxes.
   * 
   * @remarks
   * Retrieves a list of sandboxes for the current user. You can filter the results by template name, template type, or status. This operation supports pagination.
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

    if (!$dara.isNull(request.sandboxId)) {
      query["sandboxId"] = request.sandboxId;
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
   * Returns a list of sandboxes.
   * 
   * @remarks
   * Retrieves a list of sandboxes for the current user. You can filter the results by template name, template type, or status. This operation supports pagination.
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
   * Lists templates.
   * 
   * @remarks
   * Lists all templates for the current user. You can filter the results by template type and use pagination.
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

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
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
   * Lists templates.
   * 
   * @remarks
   * Lists all templates for the current user. You can filter the results by template type and use pagination.
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
   * List tools
   * 
   * @remarks
   * Query the tool list. Support paged query and conditional filtering by tool type, workspace, and other criteria. Return the list of tools that meet the conditions and paging information.
   * 
   * @param request - ListToolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListToolsResponse
   */
  async listToolsWithOptions(request: $_model.ListToolsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListToolsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.toolName)) {
      query["toolName"] = request.toolName;
    }

    if (!$dara.isNull(request.toolType)) {
      query["toolType"] = request.toolType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["workspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTools",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/tools`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListToolsResponse({}));
  }

  /**
   * List tools
   * 
   * @remarks
   * Query the tool list. Support paged query and conditional filtering by tool type, workspace, and other criteria. Return the list of tools that meet the conditions and paging information.
   * 
   * @param request - ListToolsRequest
   * @returns ListToolsResponse
   */
  async listTools(request: $_model.ListToolsRequest): Promise<$_model.ListToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listToolsWithOptions(request, headers, runtime);
  }

  /**
   * Lists all workspaces in your account.
   * 
   * @remarks
   * Lists all workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Lists all workspaces in your account.
   * 
   * @remarks
   * Lists all workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Pause the sandbox and retain snapshots of its memory and file system. The sandbox enters the PAUSED state so that it can be recovered later.
   * 
   * @remarks
   * This API is used to pause a sandbox. When invoked, the system takes a snapshot of the sandbox, capturing and persisting the memory and disk states. The user can recover the sandbox at a later time.  
   * Note that sandbox snapshots are retained for only 30 days. After 30 days, recovery becomes unavailable.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseSandboxResponse
   */
  async pauseSandboxWithOptions(sandboxId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PauseSandboxResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes/${$dara.URL.percentEncode(sandboxId)}/pause`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseSandboxResponse>(await this.callApi(params, req, runtime), new $_model.PauseSandboxResponse({}));
  }

  /**
   * Pause the sandbox and retain snapshots of its memory and file system. The sandbox enters the PAUSED state so that it can be recovered later.
   * 
   * @remarks
   * This API is used to pause a sandbox. When invoked, the system takes a snapshot of the sandbox, capturing and persisting the memory and disk states. The user can recover the sandbox at a later time.  
   * Note that sandbox snapshots are retained for only 30 days. After 30 days, recovery becomes unavailable.
   * @returns PauseSandboxResponse
   */
  async pauseSandbox(sandboxId: string): Promise<$_model.PauseSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * Publishes a workflow version.
   * 
   * @remarks
   * Publishes a new version of a specified workflow. This operation supports version management and rollbacks.
   * 
   * @param request - PublishFlowVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowVersionResponse
   */
  async publishFlowVersionWithOptions(flowName: string, request: $_model.PublishFlowVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFlowVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFlowVersion",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishFlowVersionResponse({}));
  }

  /**
   * Publishes a workflow version.
   * 
   * @remarks
   * Publishes a new version of a specified workflow. This operation supports version management and rollbacks.
   * 
   * @param request - PublishFlowVersionRequest
   * @returns PublishFlowVersionResponse
   */
  async publishFlowVersion(flowName: string, request: $_model.PublishFlowVersionRequest): Promise<$_model.PublishFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFlowVersionWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Publishes a new version of an agent runtime.
   * 
   * @remarks
   * Publishes a new version for a specified agent runtime for version management and deployment. The new version can include code updates, configuration changes, and other content.
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
   * Publishes a new version of an agent runtime.
   * 
   * @remarks
   * Publishes a new version for a specified agent runtime for version management and deployment. The new version can include code updates, configuration changes, and other content.
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
   * Resume a paused sandbox instance to restore it from the PAUSED state to the READY (running) state.
   * 
   * @remarks
   * This API resumes a sandbox instance from the paused state to the ready state, allowing the user to invoke it and restore it to the state it was in before being paused.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeSandboxResponse
   */
  async resumeSandboxWithOptions(sandboxId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeSandboxResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeSandbox",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/sandboxes/${$dara.URL.percentEncode(sandboxId)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeSandboxResponse>(await this.callApi(params, req, runtime), new $_model.ResumeSandboxResponse({}));
  }

  /**
   * Resume a paused sandbox instance to restore it from the PAUSED state to the READY (running) state.
   * 
   * @remarks
   * This API resumes a sandbox instance from the paused state to the ready state, allowing the user to invoke it and restore it to the state it was in before being paused.
   * @returns ResumeSandboxResponse
   */
  async resumeSandbox(sandboxId: string): Promise<$_model.ResumeSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * Stops a sandbox.
   * 
   * @remarks
   * Stops the specified sandbox instance. After the operation, the sandbox enters the TERMINATED state.
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
   * Stops a sandbox.
   * 
   * @remarks
   * Stops the specified sandbox instance. After the operation, the sandbox enters the TERMINATED state.
   * @returns StopSandboxResponse
   */
  async stopSandbox(sandboxId: string): Promise<$_model.StopSandboxResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSandboxWithOptions(sandboxId, headers, runtime);
  }

  /**
   * Stops the TemplateMCP service.
   * 
   * @remarks
   * Stopping the MCP service deletes the associated MCP resources and makes the endpoint inaccessible.
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
   * Stops the TemplateMCP service.
   * 
   * @remarks
   * Stopping the MCP service deletes the associated MCP resources and makes the endpoint inaccessible.
   * @returns StopTemplateMCPResponse
   */
  async stopTemplateMCP(templateName: string): Promise<$_model.StopTemplateMCPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTemplateMCPWithOptions(templateName, headers, runtime);
  }

  /**
   * UpdateAgentRuntime
   * 
   * @remarks
   * Updates the configuration of a specified agent runtime, including resource allocation, network configuration, and environment variables. The update operation triggers a runtime restart.
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
   * UpdateAgentRuntime
   * 
   * @remarks
   * Updates the configuration of a specified agent runtime, including resource allocation, network configuration, and environment variables. The update operation triggers a runtime restart.
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
   * Update Agent Runtime Endpoint
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
   * Update Agent Runtime Endpoint
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
   * Updates a credential.
   * 
   * @remarks
   * Updates the configuration of a specified credential.
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
   * Updates a credential.
   * 
   * @remarks
   * Updates the configuration of a specified credential.
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
   * Updates a custom domain.
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
   * Updates a custom domain.
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
   * Updates a workflow.
   * 
   * @remarks
   * Updates the configuration of a specified workflow, including the definition, execution mode, and environment variables.
   * 
   * @param request - UpdateFlowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowResponse
   */
  async updateFlowWithOptions(flowName: string, request: $_model.UpdateFlowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlow",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowResponse({}));
  }

  /**
   * Updates a workflow.
   * 
   * @remarks
   * Updates the configuration of a specified workflow, including the definition, execution mode, and environment variables.
   * 
   * @param request - UpdateFlowRequest
   * @returns UpdateFlowResponse
   */
  async updateFlow(flowName: string, request: $_model.UpdateFlowRequest): Promise<$_model.UpdateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Update a flow draft.
   * 
   * @remarks
   * 更新指定工作流的草稿版本，草稿更新不影响已发布的工作流版本。
   * 
   * @param request - UpdateFlowDraftRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowDraftResponse
   */
  async updateFlowDraftWithOptions(flowName: string, request: $_model.UpdateFlowDraftRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowDraftResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowDraft",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/draft`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowDraftResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowDraftResponse({}));
  }

  /**
   * Update a flow draft.
   * 
   * @remarks
   * 更新指定工作流的草稿版本，草稿更新不影响已发布的工作流版本。
   * 
   * @param request - UpdateFlowDraftRequest
   * @returns UpdateFlowDraftResponse
   */
  async updateFlowDraft(flowName: string, request: $_model.UpdateFlowDraftRequest): Promise<$_model.UpdateFlowDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowDraftWithOptions(flowName, request, headers, runtime);
  }

  /**
   * Update Flow Endpoint
   * 
   * @remarks
   * 更新指定工作流端点的配置信息，包括目标版本、路由配置等。
   * 
   * @param request - UpdateFlowEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowEndpointResponse
   */
  async updateFlowEndpointWithOptions(flowName: string, flowEndpointName: string, request: $_model.UpdateFlowEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowEndpoint",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/flows/${$dara.URL.percentEncode(flowName)}/endpoints/${$dara.URL.percentEncode(flowEndpointName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowEndpointResponse({}));
  }

  /**
   * Update Flow Endpoint
   * 
   * @remarks
   * 更新指定工作流端点的配置信息，包括目标版本、路由配置等。
   * 
   * @param request - UpdateFlowEndpointRequest
   * @returns UpdateFlowEndpointResponse
   */
  async updateFlowEndpoint(flowName: string, flowEndpointName: string, request: $_model.UpdateFlowEndpointRequest): Promise<$_model.UpdateFlowEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowEndpointWithOptions(flowName, flowEndpointName, request, headers, runtime);
  }

  /**
   * Updates an IM bot.
   * 
   * @remarks
   * PUT /2025-09-10/agents/im-bots/{imBotId}；成功建议 HTTP 202，Body 标准包装，data 为更新后 IMBotInfo
   * 
   * @param request - UpdateIMBotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIMBotResponse
   */
  async updateIMBotWithOptions(imBotId: string, request: $_model.UpdateIMBotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIMBotResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIMBot",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/im-bots/${$dara.URL.percentEncode(imBotId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIMBotResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIMBotResponse({}));
  }

  /**
   * Updates an IM bot.
   * 
   * @remarks
   * PUT /2025-09-10/agents/im-bots/{imBotId}；成功建议 HTTP 202，Body 标准包装，data 为更新后 IMBotInfo
   * 
   * @param request - UpdateIMBotRequest
   * @returns UpdateIMBotResponse
   */
  async updateIMBot(imBotId: string, request: $_model.UpdateIMBotRequest): Promise<$_model.UpdateIMBotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIMBotWithOptions(imBotId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a knowledge base.
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
   * Updates the configuration of a knowledge base.
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
   * Modifies a memory collection.
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
   * Modifies a memory collection.
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
   * Updates the configuration of a model proxy.
   * 
   * @remarks
   * Use this operation to update the configuration of a specific model proxy.
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
   * Updates the configuration of a model proxy.
   * 
   * @remarks
   * Use this operation to update the configuration of a specific model proxy.
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
   * Updates a model service.
   * 
   * @remarks
   * This operation modifies the configuration of an existing model service.
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
   * Updates a model service.
   * 
   * @remarks
   * This operation modifies the configuration of an existing model service.
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
   * Updates a template.
   * 
   * @remarks
   * Updates a template\\"s configuration, including its resource configuration, network configuration, and environment variables.
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
   * Updates a template.
   * 
   * @remarks
   * Updates a template\\"s configuration, including its resource configuration, network configuration, and environment variables.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(templateName: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(templateName, request, headers, runtime);
  }

  /**
   * Updates a tool.
   * 
   * @remarks
   * Updates the configuration of an existing tool. You can modify its description, resource configuration, network configuration, and more. This operation supports partial updates. You only need to specify the fields that you want to modify.
   * 
   * @param request - UpdateToolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateToolResponse
   */
  async updateToolWithOptions(toolName: string, request: $_model.UpdateToolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateToolResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTool",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/agents/tools/${$dara.URL.percentEncode(toolName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateToolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateToolResponse({}));
  }

  /**
   * Updates a tool.
   * 
   * @remarks
   * Updates the configuration of an existing tool. You can modify its description, resource configuration, network configuration, and more. This operation supports partial updates. You only need to specify the fields that you want to modify.
   * 
   * @param request - UpdateToolRequest
   * @returns UpdateToolResponse
   */
  async updateTool(toolName: string, request: $_model.UpdateToolRequest): Promise<$_model.UpdateToolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateToolWithOptions(toolName, request, headers, runtime);
  }

  /**
   * Updates a workspace.
   * 
   * @remarks
   * Updates the properties of a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(workspaceId: string, request: $_model.UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Updates a workspace.
   * 
   * @remarks
   * Updates the properties of a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(workspaceId: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Updates the discovery endpoint configuration for a specified workspace.
   * 
   * @param request - UpdateWorkspaceDiscoveryEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceDiscoveryEndpointsResponse
   */
  async updateWorkspaceDiscoveryEndpointsWithOptions(workspaceId: string, request: $_model.UpdateWorkspaceDiscoveryEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceDiscoveryEndpointsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceDiscoveryEndpoints",
      version: "2025-09-10",
      protocol: "HTTPS",
      pathname: `/2025-09-10/workspaces/${$dara.URL.percentEncode(workspaceId)}/discovery/endpoints`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceDiscoveryEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceDiscoveryEndpointsResponse({}));
  }

  /**
   * Updates the discovery endpoint configuration for a specified workspace.
   * 
   * @param request - UpdateWorkspaceDiscoveryEndpointsRequest
   * @returns UpdateWorkspaceDiscoveryEndpointsResponse
   */
  async updateWorkspaceDiscoveryEndpoints(workspaceId: string, request: $_model.UpdateWorkspaceDiscoveryEndpointsRequest): Promise<$_model.UpdateWorkspaceDiscoveryEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceDiscoveryEndpointsWithOptions(workspaceId, request, headers, runtime);
  }

}
