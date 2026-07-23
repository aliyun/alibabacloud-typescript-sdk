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
      'us-west-1': "eventbridge-console.us-west-1.aliyuncs.com",
      'us-east-1': "eventbridge-console.us-east-1.aliyuncs.com",
      'eu-west-1': "eventbridge-console.eu-west-1.aliyuncs.com",
      'eu-central-1': "eventbridge-console.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "eventbridge-console.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "eventbridge-console.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen-finance-1': "eventbridge-console.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen': "eventbridge-console.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "eventbridge-console.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "eventbridge-console.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "eventbridge-console.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "eventbridge-console.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "eventbridge-console.cn-hongkong.aliyuncs.com",
      'cn-heyuan': "eventbridge-console.cn-heyuan.aliyuncs.com",
      'cn-hangzhou': "eventbridge-console.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "eventbridge-console.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "eventbridge-console.cn-chengdu.aliyuncs.com",
      'cn-beijing-finance-1': "eventbridge-console.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing': "eventbridge-console.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "eventbridge-console.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "eventbridge-console.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "eventbridge-console.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "eventbridge-console.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "eventbridge-console.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "eventbridge-console.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "eventbridge-console.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eventbridge", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Queries data using natural language.
   * 
   * @param request - AskLumaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AskLumaResponse
   */
  async askLumaWithOptions(request: $_model.AskLumaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AskLumaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.maxRows)) {
      body["MaxRows"] = request.maxRows;
    }

    if (!$dara.isNull(request.question)) {
      body["Question"] = request.question;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AskLuma",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AskLumaResponse>(await this.callApi(params, req, runtime), new $_model.AskLumaResponse({}));
  }

  /**
   * Queries data using natural language.
   * 
   * @param request - AskLumaRequest
   * @returns AskLumaResponse
   */
  async askLuma(request: $_model.AskLumaRequest): Promise<$_model.AskLumaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.askLumaWithOptions(request, runtime);
  }

  /**
   * Checks whether a service-linked role is authorized for an account.
   * 
   * @remarks
   * Checks for a service-linked role by name.
   * 
   * @param request - CheckServiceLinkedRoleForProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleForProductResponse
   */
  async checkServiceLinkedRoleForProductWithOptions(request: $_model.CheckServiceLinkedRoleForProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleForProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRoleForProduct",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceLinkedRoleForProductResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceLinkedRoleForProductResponse({}));
  }

  /**
   * Checks whether a service-linked role is authorized for an account.
   * 
   * @remarks
   * Checks for a service-linked role by name.
   * 
   * @param request - CheckServiceLinkedRoleForProductRequest
   * @returns CheckServiceLinkedRoleForProductResponse
   */
  async checkServiceLinkedRoleForProduct(request: $_model.CheckServiceLinkedRoleForProductRequest): Promise<$_model.CheckServiceLinkedRoleForProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForProductWithOptions(request, runtime);
  }

  /**
   * Creates a custom agent.
   * 
   * @param tmpReq - CreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(tmpReq: $_model.CreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.metadataShrink)) {
      body["Metadata"] = request.metadataShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResponse({}));
  }

  /**
   * Creates a custom agent.
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * Creates an API destination.
   * 
   * @remarks
   * You can call this API operation to create an API destination.
   * 
   * @param tmpReq - CreateApiDestinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiDestinationResponse
   */
  async createApiDestinationWithOptions(tmpReq: $_model.CreateApiDestinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiDestinationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApiDestinationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.httpApiParameters)) {
      request.httpApiParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpApiParameters, "HttpApiParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.httpApiParametersShrink)) {
      query["HttpApiParameters"] = request.httpApiParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiDestinationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiDestinationResponse({}));
  }

  /**
   * Creates an API destination.
   * 
   * @remarks
   * You can call this API operation to create an API destination.
   * 
   * @param request - CreateApiDestinationRequest
   * @returns CreateApiDestinationResponse
   */
  async createApiDestination(request: $_model.CreateApiDestinationRequest): Promise<$_model.CreateApiDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiDestinationWithOptions(request, runtime);
  }

  /**
   * Creates a connection configuration.
   * 
   * @remarks
   * Creates a connection configuration.
   * 
   * @param tmpReq - CreateConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConnectionResponse
   */
  async createConnectionWithOptions(tmpReq: $_model.CreateConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConnectionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authParameters)) {
      request.authParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authParameters, "AuthParameters", "json");
    }

    if (!$dara.isNull(tmpReq.networkParameters)) {
      request.networkParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkParameters, "NetworkParameters", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authParametersShrink)) {
      query["AuthParameters"] = request.authParametersShrink;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkParametersShrink)) {
      query["NetworkParameters"] = request.networkParametersShrink;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateConnectionResponse({}));
  }

  /**
   * Creates a connection configuration.
   * 
   * @remarks
   * Creates a connection configuration.
   * 
   * @param request - CreateConnectionRequest
   * @returns CreateConnectionResponse
   */
  async createConnection(request: $_model.CreateConnectionRequest): Promise<$_model.CreateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  /**
   * Creates an event bus.
   * 
   * @remarks
   * Creates an event bus.
   * 
   * @param request - CreateEventBusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventBusResponse
   */
  async createEventBusWithOptions(request: $_model.CreateEventBusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventBusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventBusResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventBusResponse({}));
  }

  /**
   * Creates an event bus.
   * 
   * @remarks
   * Creates an event bus.
   * 
   * @param request - CreateEventBusRequest
   * @returns CreateEventBusResponse
   */
  async createEventBus(request: $_model.CreateEventBusRequest): Promise<$_model.CreateEventBusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventBusWithOptions(request, runtime);
  }

  /**
   * Creates an external event source.
   * 
   * @remarks
   * Creates an external event source.
   * 
   * @param tmpReq - CreateEventSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventSourceResponse
   */
  async createEventSourceWithOptions(tmpReq: $_model.CreateEventSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventSourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEventSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.externalSourceConfig)) {
      request.externalSourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalSourceConfig, "ExternalSourceConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sourceHttpEventParameters)) {
      request.sourceHttpEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceHttpEventParameters, "SourceHttpEventParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceKafkaParameters)) {
      request.sourceKafkaParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceKafkaParameters, "SourceKafkaParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceMNSParameters)) {
      request.sourceMNSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMNSParameters, "SourceMNSParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceOSSEventParameters)) {
      request.sourceOSSEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceOSSEventParameters, "SourceOSSEventParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceRabbitMQParameters)) {
      request.sourceRabbitMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRabbitMQParameters, "SourceRabbitMQParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceRocketMQParameters)) {
      request.sourceRocketMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRocketMQParameters, "SourceRocketMQParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceSLSParameters)) {
      request.sourceSLSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSLSParameters, "SourceSLSParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceScheduledEventParameters)) {
      request.sourceScheduledEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceScheduledEventParameters, "SourceScheduledEventParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    if (!$dara.isNull(request.externalSourceConfigShrink)) {
      body["ExternalSourceConfig"] = request.externalSourceConfigShrink;
    }

    if (!$dara.isNull(request.externalSourceType)) {
      body["ExternalSourceType"] = request.externalSourceType;
    }

    if (!$dara.isNull(request.linkedExternalSource)) {
      body["LinkedExternalSource"] = request.linkedExternalSource;
    }

    if (!$dara.isNull(request.sourceHttpEventParametersShrink)) {
      body["SourceHttpEventParameters"] = request.sourceHttpEventParametersShrink;
    }

    if (!$dara.isNull(request.sourceKafkaParametersShrink)) {
      body["SourceKafkaParameters"] = request.sourceKafkaParametersShrink;
    }

    if (!$dara.isNull(request.sourceMNSParametersShrink)) {
      body["SourceMNSParameters"] = request.sourceMNSParametersShrink;
    }

    if (!$dara.isNull(request.sourceOSSEventParametersShrink)) {
      body["SourceOSSEventParameters"] = request.sourceOSSEventParametersShrink;
    }

    if (!$dara.isNull(request.sourceRabbitMQParametersShrink)) {
      body["SourceRabbitMQParameters"] = request.sourceRabbitMQParametersShrink;
    }

    if (!$dara.isNull(request.sourceRocketMQParametersShrink)) {
      body["SourceRocketMQParameters"] = request.sourceRocketMQParametersShrink;
    }

    if (!$dara.isNull(request.sourceSLSParametersShrink)) {
      body["SourceSLSParameters"] = request.sourceSLSParametersShrink;
    }

    if (!$dara.isNull(request.sourceScheduledEventParametersShrink)) {
      body["SourceScheduledEventParameters"] = request.sourceScheduledEventParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventSourceResponse({}));
  }

  /**
   * Creates an external event source.
   * 
   * @remarks
   * Creates an external event source.
   * 
   * @param request - CreateEventSourceRequest
   * @returns CreateEventSourceResponse
   */
  async createEventSource(request: $_model.CreateEventSourceRequest): Promise<$_model.CreateEventSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventSourceWithOptions(request, runtime);
  }

  /**
   * Creates an event stream.
   * 
   * @remarks
   * Creates an event stream.
   * 
   * @param tmpReq - CreateEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventStreamingResponse
   */
  async createEventStreamingWithOptions(tmpReq: $_model.CreateEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventStreamingResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEventStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.runOptions)) {
      request.runOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runOptions, "RunOptions", "json");
    }

    if (!$dara.isNull(tmpReq.sink)) {
      request.sinkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sink, "Sink", "json");
    }

    if (!$dara.isNull(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    if (!$dara.isNull(tmpReq.transforms)) {
      request.transformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transforms, "Transforms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    if (!$dara.isNull(request.filterPattern)) {
      body["FilterPattern"] = request.filterPattern;
    }

    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.runOptionsShrink)) {
      body["RunOptions"] = request.runOptionsShrink;
    }

    if (!$dara.isNull(request.sinkShrink)) {
      body["Sink"] = request.sinkShrink;
    }

    if (!$dara.isNull(request.sourceShrink)) {
      body["Source"] = request.sourceShrink;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.transformsShrink)) {
      body["Transforms"] = request.transformsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventStreamingResponse({}));
  }

  /**
   * Creates an event stream.
   * 
   * @remarks
   * Creates an event stream.
   * 
   * @param request - CreateEventStreamingRequest
   * @returns CreateEventStreamingResponse
   */
  async createEventStreaming(request: $_model.CreateEventStreamingRequest): Promise<$_model.CreateEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventStreamingWithOptions(request, runtime);
  }

  /**
   * Create Namespace
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * Create Namespace
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates an event rule.
   * 
   * @remarks
   * Creates an event rule.
   * 
   * @param tmpReq - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(tmpReq: $_model.CreateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventTargets)) {
      request.eventTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventTargets, "EventTargets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventTargetsShrink)) {
      query["EventTargets"] = request.eventTargetsShrink;
    }

    if (!$dara.isNull(request.filterPattern)) {
      query["FilterPattern"] = request.filterPattern;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRuleResponse({}));
  }

  /**
   * Creates an event rule.
   * 
   * @remarks
   * Creates an event rule.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Creates the service-linked role (SLR) that is associated with a specified product.
   * 
   * @remarks
   * Creates the service-linked role (SLR) that is associated with a specified product.
   * 
   * @param request - CreateServiceLinkedRoleForProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleForProductResponse
   */
  async createServiceLinkedRoleForProductWithOptions(request: $_model.CreateServiceLinkedRoleForProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleForProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRoleForProduct",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleForProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleForProductResponse({}));
  }

  /**
   * Creates the service-linked role (SLR) that is associated with a specified product.
   * 
   * @remarks
   * Creates the service-linked role (SLR) that is associated with a specified product.
   * 
   * @param request - CreateServiceLinkedRoleForProductRequest
   * @returns CreateServiceLinkedRoleForProductResponse
   */
  async createServiceLinkedRoleForProduct(request: $_model.CreateServiceLinkedRoleForProductRequest): Promise<$_model.CreateServiceLinkedRoleForProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleForProductWithOptions(request, runtime);
  }

  /**
   * Create a data catalog
   * 
   * @remarks
   * Creates an event target under the specified rule.
   * 
   * @param tmpReq - CreateTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableResponse
   */
  async createTableWithOptions(tmpReq: $_model.CreateTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    if (!$dara.isNull(tmpReq.retentionPolicy)) {
      request.retentionPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retentionPolicy, "RetentionPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.columnsShrink)) {
      query["Columns"] = request.columnsShrink;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.retentionPolicyShrink)) {
      query["RetentionPolicy"] = request.retentionPolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTable",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableResponse({}));
  }

  /**
   * Create a data catalog
   * 
   * @remarks
   * Creates an event target under the specified rule.
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(request: $_model.CreateTableRequest): Promise<$_model.CreateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTableWithOptions(request, runtime);
  }

  /**
   * Deletes a custom agent.
   * 
   * @param request - DeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: $_model.DeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * Deletes a custom agent.
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * Deletes an API destination.
   * 
   * @remarks
   * You can call this API operation to delete an API destination.
   * 
   * @param request - DeleteApiDestinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiDestinationResponse
   */
  async deleteApiDestinationWithOptions(request: $_model.DeleteApiDestinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiDestinationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiDestinationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiDestinationResponse({}));
  }

  /**
   * Deletes an API destination.
   * 
   * @remarks
   * You can call this API operation to delete an API destination.
   * 
   * @param request - DeleteApiDestinationRequest
   * @returns DeleteApiDestinationResponse
   */
  async deleteApiDestination(request: $_model.DeleteApiDestinationRequest): Promise<$_model.DeleteApiDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiDestinationWithOptions(request, runtime);
  }

  /**
   * Deletes a connection.
   * 
   * @remarks
   * You can call this API operation to delete a connection.
   * 
   * @param request - DeleteConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(request: $_model.DeleteConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectionResponse({}));
  }

  /**
   * Deletes a connection.
   * 
   * @remarks
   * You can call this API operation to delete a connection.
   * 
   * @param request - DeleteConnectionRequest
   * @returns DeleteConnectionResponse
   */
  async deleteConnection(request: $_model.DeleteConnectionRequest): Promise<$_model.DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  /**
   * Deletes a data integration job.
   * 
   * @param tmpReq - DeleteEventAnalysisJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventAnalysisJobResponse
   */
  async deleteEventAnalysisJobWithOptions(tmpReq: $_model.DeleteEventAnalysisJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventAnalysisJobResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteEventAnalysisJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceResource)) {
      request.sourceResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResource, "SourceResource", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceResourceShrink)) {
      body["SourceResource"] = request.sourceResourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventAnalysisJob",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventAnalysisJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventAnalysisJobResponse({}));
  }

  /**
   * Deletes a data integration job.
   * 
   * @param request - DeleteEventAnalysisJobRequest
   * @returns DeleteEventAnalysisJobResponse
   */
  async deleteEventAnalysisJob(request: $_model.DeleteEventAnalysisJobRequest): Promise<$_model.DeleteEventAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventAnalysisJobWithOptions(request, runtime);
  }

  /**
   * Deletes an event bus.
   * 
   * @remarks
   * Deletes an event bus.
   * 
   * @param request - DeleteEventBusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventBusResponse
   */
  async deleteEventBusWithOptions(request: $_model.DeleteEventBusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventBusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventBusResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventBusResponse({}));
  }

  /**
   * Deletes an event bus.
   * 
   * @remarks
   * Deletes an event bus.
   * 
   * @param request - DeleteEventBusRequest
   * @returns DeleteEventBusResponse
   */
  async deleteEventBus(request: $_model.DeleteEventBusRequest): Promise<$_model.DeleteEventBusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventBusWithOptions(request, runtime);
  }

  /**
   * Deletes an EventHouse Runtime.
   * 
   * @param request - DeleteEventHouseRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventHouseRuntimeResponse
   */
  async deleteEventHouseRuntimeWithOptions(request: $_model.DeleteEventHouseRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventHouseRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventHouseRuntime",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventHouseRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventHouseRuntimeResponse({}));
  }

  /**
   * Deletes an EventHouse Runtime.
   * 
   * @param request - DeleteEventHouseRuntimeRequest
   * @returns DeleteEventHouseRuntimeResponse
   */
  async deleteEventHouseRuntime(request: $_model.DeleteEventHouseRuntimeRequest): Promise<$_model.DeleteEventHouseRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventHouseRuntimeWithOptions(request, runtime);
  }

  /**
   * Deletes an event source.
   * 
   * @remarks
   * Deletes an event source.
   * 
   * @param request - DeleteEventSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventSourceResponse
   */
  async deleteEventSourceWithOptions(request: $_model.DeleteEventSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventSourceResponse({}));
  }

  /**
   * Deletes an event source.
   * 
   * @remarks
   * Deletes an event source.
   * 
   * @param request - DeleteEventSourceRequest
   * @returns DeleteEventSourceResponse
   */
  async deleteEventSource(request: $_model.DeleteEventSourceRequest): Promise<$_model.DeleteEventSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventSourceWithOptions(request, runtime);
  }

  /**
   * Deletes an event stream.
   * 
   * @remarks
   * Deletes an event stream.
   * 
   * @param request - DeleteEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventStreamingResponse
   */
  async deleteEventStreamingWithOptions(request: $_model.DeleteEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventStreamingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventStreamingResponse({}));
  }

  /**
   * Deletes an event stream.
   * 
   * @remarks
   * Deletes an event stream.
   * 
   * @param request - DeleteEventStreamingRequest
   * @returns DeleteEventStreamingResponse
   */
  async deleteEventStreaming(request: $_model.DeleteEventStreamingRequest): Promise<$_model.DeleteEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventStreamingWithOptions(request, runtime);
  }

  /**
   * Delete Namespace
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * Delete Namespace
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes an event rule.
   * 
   * @remarks
   * You can call this API operation to delete an event rule.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRuleResponse({}));
  }

  /**
   * Deletes an event rule.
   * 
   * @remarks
   * You can call this API operation to delete an event rule.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Delete table
   * 
   * @param request - DeleteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableResponse
   */
  async deleteTableWithOptions(request: $_model.DeleteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTable",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableResponse({}));
  }

  /**
   * Delete table
   * 
   * @param request - DeleteTableRequest
   * @returns DeleteTableResponse
   */
  async deleteTable(request: $_model.DeleteTableRequest): Promise<$_model.DeleteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTableWithOptions(request, runtime);
  }

  /**
   * Deletes one or more event targets of an event rule.
   * 
   * @remarks
   * You can call this API operation to delete one or more event targets of an event rule.
   * 
   * @param tmpReq - DeleteTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTargetsResponse
   */
  async deleteTargetsWithOptions(tmpReq: $_model.DeleteTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTargetsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteTargetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.targetIds)) {
      request.targetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetIds, "TargetIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.targetIdsShrink)) {
      query["TargetIds"] = request.targetIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTargetsResponse({}));
  }

  /**
   * Deletes one or more event targets of an event rule.
   * 
   * @remarks
   * You can call this API operation to delete one or more event targets of an event rule.
   * 
   * @param request - DeleteTargetsRequest
   * @returns DeleteTargetsResponse
   */
  async deleteTargets(request: $_model.DeleteTargetsRequest): Promise<$_model.DeleteTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTargetsWithOptions(request, runtime);
  }

  /**
   * Disables an event rule.
   * 
   * @remarks
   * You can call this API operation to disable an event rule.
   * 
   * @param request - DisableRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableRuleResponse
   */
  async disableRuleWithOptions(request: $_model.DisableRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableRuleResponse({}));
  }

  /**
   * Disables an event rule.
   * 
   * @remarks
   * You can call this API operation to disable an event rule.
   * 
   * @param request - DisableRuleRequest
   * @returns DisableRuleResponse
   */
  async disableRule(request: $_model.DisableRuleRequest): Promise<$_model.DisableRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableRuleWithOptions(request, runtime);
  }

  /**
   * Discovers the schema and simple data of an event source, such as MySQL.
   * 
   * @remarks
   * Discovers information about an event source.
   * 
   * @param tmpReq - DiscoverEventSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiscoverEventSourceResponse
   */
  async discoverEventSourceWithOptions(tmpReq: $_model.DiscoverEventSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiscoverEventSourceResponse> {
    tmpReq.validate();
    let request = new $_model.DiscoverEventSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceMySQLParameters)) {
      request.sourceMySQLParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMySQLParameters, "SourceMySQLParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceMySQLParametersShrink)) {
      body["SourceMySQLParameters"] = request.sourceMySQLParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiscoverEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiscoverEventSourceResponse>(await this.callApi(params, req, runtime), new $_model.DiscoverEventSourceResponse({}));
  }

  /**
   * Discovers the schema and simple data of an event source, such as MySQL.
   * 
   * @remarks
   * Discovers information about an event source.
   * 
   * @param request - DiscoverEventSourceRequest
   * @returns DiscoverEventSourceResponse
   */
  async discoverEventSource(request: $_model.DiscoverEventSourceRequest): Promise<$_model.DiscoverEventSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.discoverEventSourceWithOptions(request, runtime);
  }

  /**
   * Enables an event rule.
   * 
   * @remarks
   * You can call this API operation to enable an event rule.
   * 
   * @param request - EnableRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRuleResponse
   */
  async enableRuleWithOptions(request: $_model.EnableRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableRuleResponse({}));
  }

  /**
   * Enables an event rule.
   * 
   * @remarks
   * You can call this API operation to enable an event rule.
   * 
   * @param request - EnableRuleRequest
   * @returns EnableRuleResponse
   */
  async enableRule(request: $_model.EnableRuleRequest): Promise<$_model.EnableRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRuleWithOptions(request, runtime);
  }

  /**
   * Queries events from the event center.
   * 
   * @param tmpReq - EventCenterQueryEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EventCenterQueryEventsResponse
   */
  async eventCenterQueryEventsWithOptions(tmpReq: $_model.EventCenterQueryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EventCenterQueryEventsResponse> {
    tmpReq.validate();
    let request = new $_model.EventCenterQueryEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!$dara.isNull(request.busName)) {
      query["BusName"] = request.busName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["Body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EventCenterQueryEvents",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EventCenterQueryEventsResponse>(await this.callApi(params, req, runtime), new $_model.EventCenterQueryEventsResponse({}));
  }

  /**
   * Queries events from the event center.
   * 
   * @param request - EventCenterQueryEventsRequest
   * @returns EventCenterQueryEventsResponse
   */
  async eventCenterQueryEvents(request: $_model.EventCenterQueryEventsRequest): Promise<$_model.EventCenterQueryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eventCenterQueryEventsWithOptions(request, runtime);
  }

  /**
   * Retrieves agent metadata.
   * 
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * Retrieves agent metadata.
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * Queries the information about an API destination.
   * 
   * @remarks
   * You can call this API operation to query the information about an API destination.
   * 
   * @param request - GetApiDestinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiDestinationResponse
   */
  async getApiDestinationWithOptions(request: $_model.GetApiDestinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiDestinationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiDestinationResponse>(await this.callApi(params, req, runtime), new $_model.GetApiDestinationResponse({}));
  }

  /**
   * Queries the information about an API destination.
   * 
   * @remarks
   * You can call this API operation to query the information about an API destination.
   * 
   * @param request - GetApiDestinationRequest
   * @returns GetApiDestinationResponse
   */
  async getApiDestination(request: $_model.GetApiDestinationRequest): Promise<$_model.GetApiDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApiDestinationWithOptions(request, runtime);
  }

  /**
   * Get data catalog
   * 
   * @param request - GetCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogResponse
   */
  async getCatalogWithOptions(request: $_model.GetCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalog",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogResponse({}));
  }

  /**
   * Get data catalog
   * 
   * @param request - GetCatalogRequest
   * @returns GetCatalogResponse
   */
  async getCatalog(request: $_model.GetCatalogRequest): Promise<$_model.GetCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCatalogWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information of a single connection.
   * 
   * @remarks
   * Queries the configuration information of a single connection.
   * 
   * @param request - GetConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionResponse
   */
  async getConnectionWithOptions(request: $_model.GetConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectionResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectionResponse({}));
  }

  /**
   * Queries the configuration information of a single connection.
   * 
   * @remarks
   * Queries the configuration information of a single connection.
   * 
   * @param request - GetConnectionRequest
   * @returns GetConnectionResponse
   */
  async getConnection(request: $_model.GetConnectionRequest): Promise<$_model.GetConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about an event bus.
   * 
   * @remarks
   * You can call this API operation to query the detailed information about an event bus.
   * 
   * @param request - GetEventBusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventBusResponse
   */
  async getEventBusWithOptions(request: $_model.GetEventBusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventBusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventBusResponse>(await this.callApi(params, req, runtime), new $_model.GetEventBusResponse({}));
  }

  /**
   * Queries the detailed information about an event bus.
   * 
   * @remarks
   * You can call this API operation to query the detailed information about an event bus.
   * 
   * @param request - GetEventBusRequest
   * @returns GetEventBusResponse
   */
  async getEventBus(request: $_model.GetEventBusRequest): Promise<$_model.GetEventBusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventBusWithOptions(request, runtime);
  }

  /**
   * Queries the status and operation progress of an EventHouse Runtime.
   * 
   * @param request - GetEventHouseRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventHouseRuntimeResponse
   */
  async getEventHouseRuntimeWithOptions(request: $_model.GetEventHouseRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventHouseRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEventHouseRuntime",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventHouseRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.GetEventHouseRuntimeResponse({}));
  }

  /**
   * Queries the status and operation progress of an EventHouse Runtime.
   * 
   * @param request - GetEventHouseRuntimeRequest
   * @returns GetEventHouseRuntimeResponse
   */
  async getEventHouseRuntime(request: $_model.GetEventHouseRuntimeRequest): Promise<$_model.GetEventHouseRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventHouseRuntimeWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an event stream.
   * 
   * @remarks
   * Retrieves the details of an event stream.
   * 
   * @param request - GetEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventStreamingResponse
   */
  async getEventStreamingWithOptions(request: $_model.GetEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventStreamingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.GetEventStreamingResponse({}));
  }

  /**
   * Retrieves the details of an event stream.
   * 
   * @remarks
   * Retrieves the details of an event stream.
   * 
   * @param request - GetEventStreamingRequest
   * @returns GetEventStreamingResponse
   */
  async getEventStreaming(request: $_model.GetEventStreamingRequest): Promise<$_model.GetEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventStreamingWithOptions(request, runtime);
  }

  /**
   * Get namespace
   * 
   * @param request - GetNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNamespaceResponse
   */
  async getNamespaceWithOptions(request: $_model.GetNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNamespace",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetNamespaceResponse({}));
  }

  /**
   * Get namespace
   * 
   * @param request - GetNamespaceRequest
   * @returns GetNamespaceResponse
   */
  async getNamespace(request: $_model.GetNamespaceRequest): Promise<$_model.GetNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an event rule.
   * 
   * @remarks
   * Gets the details of an event rule.
   * 
   * @param request - GetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleResponse
   */
  async getRuleWithOptions(request: $_model.GetRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleResponse({}));
  }

  /**
   * Retrieves the details of an event rule.
   * 
   * @remarks
   * Gets the details of an event rule.
   * 
   * @param request - GetRuleRequest
   * @returns GetRuleResponse
   */
  async getRule(request: $_model.GetRuleRequest): Promise<$_model.GetRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  /**
   * Get Table
   * 
   * @param request - GetTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
  async getTableWithOptions(request: $_model.GetTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableResponse>(await this.callApi(params, req, runtime), new $_model.GetTableResponse({}));
  }

  /**
   * Get Table
   * 
   * @param request - GetTableRequest
   * @returns GetTableResponse
   */
  async getTable(request: $_model.GetTableRequest): Promise<$_model.GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of custom agents.
   * 
   * @param request - ListAgentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: $_model.ListAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.after)) {
      body["After"] = request.after;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentsResponse({}));
  }

  /**
   * Retrieves a list of custom agents.
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentsWithOptions(request, runtime);
  }

  /**
   * Queries all Alibaba Cloud service event sources.
   * 
   * @remarks
   * You can call this API operation to query all Alibaba Cloud service event sources.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliyunOfficialEventSourcesResponse
   */
  async listAliyunOfficialEventSourcesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAliyunOfficialEventSourcesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAliyunOfficialEventSources",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAliyunOfficialEventSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListAliyunOfficialEventSourcesResponse({}));
  }

  /**
   * Queries all Alibaba Cloud service event sources.
   * 
   * @remarks
   * You can call this API operation to query all Alibaba Cloud service event sources.
   * @returns ListAliyunOfficialEventSourcesResponse
   */
  async listAliyunOfficialEventSources(): Promise<$_model.ListAliyunOfficialEventSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAliyunOfficialEventSourcesWithOptions(runtime);
  }

  /**
   * Queries a list of API destinations.
   * 
   * @remarks
   * You can use this API operation to query a list of API destinations.
   * 
   * @param request - ListApiDestinationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiDestinationsResponse
   */
  async listApiDestinationsWithOptions(request: $_model.ListApiDestinationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiDestinationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiDestinationNamePrefix)) {
      query["ApiDestinationNamePrefix"] = request.apiDestinationNamePrefix;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiDestinations",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiDestinationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApiDestinationsResponse({}));
  }

  /**
   * Queries a list of API destinations.
   * 
   * @remarks
   * You can use this API operation to query a list of API destinations.
   * 
   * @param request - ListApiDestinationsRequest
   * @returns ListApiDestinationsResponse
   */
  async listApiDestinations(request: $_model.ListApiDestinationsRequest): Promise<$_model.ListApiDestinationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiDestinationsWithOptions(request, runtime);
  }

  /**
   * Query data catalog list
   * 
   * @param request - ListCatalogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCatalogsResponse
   */
  async listCatalogsWithOptions(request: $_model.ListCatalogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCatalogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCatalogs",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCatalogsResponse({}));
  }

  /**
   * Query data catalog list
   * 
   * @param request - ListCatalogsRequest
   * @returns ListCatalogsResponse
   */
  async listCatalogs(request: $_model.ListCatalogsRequest): Promise<$_model.ListCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCatalogsWithOptions(request, runtime);
  }

  /**
   * Queries the list of connection configurations.
   * 
   * @remarks
   * Queries the list of connection configurations.
   * 
   * @param request - ListConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectionsResponse
   */
  async listConnectionsWithOptions(request: $_model.ListConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectionNamePrefix)) {
      body["ConnectionNamePrefix"] = request.connectionNamePrefix;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnections",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectionsResponse({}));
  }

  /**
   * Queries the list of connection configurations.
   * 
   * @remarks
   * Queries the list of connection configurations.
   * 
   * @param request - ListConnectionsRequest
   * @returns ListConnectionsResponse
   */
  async listConnections(request: $_model.ListConnectionsRequest): Promise<$_model.ListConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries all event buses.
   * 
   * @remarks
   * You can call this API operation to query all event buses.
   * 
   * @param request - ListEventBusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventBusesResponse
   */
  async listEventBusesWithOptions(request: $_model.ListEventBusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventBusesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventBuses",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventBusesResponse>(await this.callApi(params, req, runtime), new $_model.ListEventBusesResponse({}));
  }

  /**
   * Queries all event buses.
   * 
   * @remarks
   * You can call this API operation to query all event buses.
   * 
   * @param request - ListEventBusesRequest
   * @returns ListEventBusesResponse
   */
  async listEventBuses(request: $_model.ListEventBusesRequest): Promise<$_model.ListEventBusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventBusesWithOptions(request, runtime);
  }

  /**
   * Queries the list of EventHouse runtimes.
   * 
   * @param request - ListEventHouseRuntimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventHouseRuntimesResponse
   */
  async listEventHouseRuntimesWithOptions(request: $_model.ListEventHouseRuntimesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventHouseRuntimesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventHouseRuntimes",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventHouseRuntimesResponse>(await this.callApi(params, req, runtime), new $_model.ListEventHouseRuntimesResponse({}));
  }

  /**
   * Queries the list of EventHouse runtimes.
   * 
   * @param request - ListEventHouseRuntimesRequest
   * @returns ListEventHouseRuntimesResponse
   */
  async listEventHouseRuntimes(request: $_model.ListEventHouseRuntimesRequest): Promise<$_model.ListEventHouseRuntimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventHouseRuntimesWithOptions(request, runtime);
  }

  /**
   * Queries event streams.
   * 
   * @remarks
   * Queries event streams.
   * 
   * @param request - ListEventStreamingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventStreamingsResponse
   */
  async listEventStreamingsWithOptions(request: $_model.ListEventStreamingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventStreamingsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namePrefix)) {
      body["NamePrefix"] = request.namePrefix;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sinkArn)) {
      body["SinkArn"] = request.sinkArn;
    }

    if (!$dara.isNull(request.sourceArn)) {
      body["SourceArn"] = request.sourceArn;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventStreamings",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventStreamingsResponse>(await this.callApi(params, req, runtime), new $_model.ListEventStreamingsResponse({}));
  }

  /**
   * Queries event streams.
   * 
   * @remarks
   * Queries event streams.
   * 
   * @param request - ListEventStreamingsRequest
   * @returns ListEventStreamingsResponse
   */
  async listEventStreamings(request: $_model.ListEventStreamingsRequest): Promise<$_model.ListEventStreamingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventStreamingsWithOptions(request, runtime);
  }

  /**
   * Query namespace list
   * 
   * @param request - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: $_model.ListNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaces",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespacesResponse({}));
  }

  /**
   * Query namespace list
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: $_model.ListNamespacesRequest): Promise<$_model.ListNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries all rules of an event bus.
   * 
   * @remarks
   * You can call this API operation to query all rules of an event bus.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  async listRulesWithOptions(request: $_model.ListRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ruleNamePrefix)) {
      query["RuleNamePrefix"] = request.ruleNamePrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRules",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRulesResponse({}));
  }

  /**
   * Queries all rules of an event bus.
   * 
   * @remarks
   * You can call this API operation to query all rules of an event bus.
   * 
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  async listRules(request: $_model.ListRulesRequest): Promise<$_model.ListRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * Query table list
   * 
   * @param request - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(request: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * Query table list
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Queries all event targets of an event rule.
   * 
   * @param request - ListTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTargetsResponse
   */
  async listTargetsWithOptions(request: $_model.ListTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.arn)) {
      query["Arn"] = request.arn;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ListTargetsResponse({}));
  }

  /**
   * Queries all event targets of an event rule.
   * 
   * @param request - ListTargetsRequest
   * @returns ListTargetsResponse
   */
  async listTargets(request: $_model.ListTargetsRequest): Promise<$_model.ListTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetsWithOptions(request, runtime);
  }

  /**
   * This operation queries all custom event sources.
   * 
   * @remarks
   * Queries all custom event sources.
   * 
   * @param request - ListUserDefinedEventSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDefinedEventSourcesResponse
   */
  async listUserDefinedEventSourcesWithOptions(request: $_model.ListUserDefinedEventSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDefinedEventSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDefinedEventSources",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDefinedEventSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDefinedEventSourcesResponse({}));
  }

  /**
   * This operation queries all custom event sources.
   * 
   * @remarks
   * Queries all custom event sources.
   * 
   * @param request - ListUserDefinedEventSourcesRequest
   * @returns ListUserDefinedEventSourcesResponse
   */
  async listUserDefinedEventSources(request: $_model.ListUserDefinedEventSourcesRequest): Promise<$_model.ListUserDefinedEventSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserDefinedEventSourcesWithOptions(request, runtime);
  }

  /**
   * Pauses a running event stream.
   * 
   * @remarks
   * Pauses a running event stream.
   * 
   * @param request - PauseEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseEventStreamingResponse
   */
  async pauseEventStreamingWithOptions(request: $_model.PauseEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseEventStreamingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.PauseEventStreamingResponse({}));
  }

  /**
   * Pauses a running event stream.
   * 
   * @remarks
   * Pauses a running event stream.
   * 
   * @param request - PauseEventStreamingRequest
   * @returns PauseEventStreamingResponse
   */
  async pauseEventStreaming(request: $_model.PauseEventStreamingRequest): Promise<$_model.PauseEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseEventStreamingWithOptions(request, runtime);
  }

  /**
   * Polls for natural language query results.
   * 
   * @param request - PollAskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PollAskResultResponse
   */
  async pollAskResultWithOptions(request: $_model.PollAskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PollAskResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PollAskResult",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PollAskResultResponse>(await this.callApi(params, req, runtime), new $_model.PollAskResultResponse({}));
  }

  /**
   * Polls for natural language query results.
   * 
   * @param request - PollAskResultRequest
   * @returns PollAskResultResponse
   */
  async pollAskResult(request: $_model.PollAskResultRequest): Promise<$_model.PollAskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pollAskResultWithOptions(request, runtime);
  }

  /**
   * Create or update event targets for the specified rule.
   * 
   * @remarks
   * Creates or updates event targets for a specified rule.
   * 
   * @param tmpReq - PutTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutTargetsResponse
   */
  async putTargetsWithOptions(tmpReq: $_model.PutTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutTargetsResponse> {
    tmpReq.validate();
    let request = new $_model.PutTargetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutTargetsResponse>(await this.callApi(params, req, runtime), new $_model.PutTargetsResponse({}));
  }

  /**
   * Create or update event targets for the specified rule.
   * 
   * @remarks
   * Creates or updates event targets for a specified rule.
   * 
   * @param request - PutTargetsRequest
   * @returns PutTargetsResponse
   */
  async putTargets(request: $_model.PutTargetsRequest): Promise<$_model.PutTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the history logs of natural language queries.
   * 
   * @param request - QueryAskLumaLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAskLumaLogResponse
   */
  async queryAskLumaLogWithOptions(request: $_model.QueryAskLumaLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAskLumaLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.after)) {
      body["After"] = request.after;
    }

    if (!$dara.isNull(request.agentName)) {
      body["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAskLumaLog",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAskLumaLogResponse>(await this.callApi(params, req, runtime), new $_model.QueryAskLumaLogResponse({}));
  }

  /**
   * Queries the history logs of natural language queries.
   * 
   * @param request - QueryAskLumaLogRequest
   * @returns QueryAskLumaLogResponse
   */
  async queryAskLumaLog(request: $_model.QueryAskLumaLogRequest): Promise<$_model.QueryAskLumaLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAskLumaLogWithOptions(request, runtime);
  }

  /**
   * Queries the content of an event.
   * 
   * @remarks
   * You can call this API operation to query the content of an event.
   * 
   * @param request - QueryEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventResponse
   */
  async queryEventWithOptions(request: $_model.QueryEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEvent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventResponse({}));
  }

  /**
   * Queries the content of an event.
   * 
   * @remarks
   * You can call this API operation to query the content of an event.
   * 
   * @param request - QueryEventRequest
   * @returns QueryEventResponse
   */
  async queryEvent(request: $_model.QueryEventRequest): Promise<$_model.QueryEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventWithOptions(request, runtime);
  }

  /**
   * Query event store data
   * 
   * @param request - QueryEventHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventHouseResponse
   */
  async queryEventHouseWithOptions(request: $_model.QueryEventHouseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventHouseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventHouse",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventHouseResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventHouseResponse({}));
  }

  /**
   * Query event store data
   * 
   * @param request - QueryEventHouseRequest
   * @returns QueryEventHouseResponse
   */
  async queryEventHouse(request: $_model.QueryEventHouseRequest): Promise<$_model.QueryEventHouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventHouseWithOptions(request, runtime);
  }

  /**
   * Queries event traces.
   * 
   * @remarks
   * You can call this API operation to query event traces.
   * 
   * @param request - QueryEventTracesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventTracesResponse
   */
  async queryEventTracesWithOptions(request: $_model.QueryEventTracesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventTracesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventTraces",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventTracesResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventTracesResponse({}));
  }

  /**
   * Queries event traces.
   * 
   * @remarks
   * You can call this API operation to query event traces.
   * 
   * @param request - QueryEventTracesRequest
   * @returns QueryEventTracesResponse
   */
  async queryEventTraces(request: $_model.QueryEventTracesRequest): Promise<$_model.QueryEventTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventTracesWithOptions(request, runtime);
  }

  /**
   * Queries event traces by event ID.
   * 
   * @remarks
   * You can call this API operation to query event traces by event ID.
   * 
   * @param request - QueryTracedEventByEventIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTracedEventByEventIdResponse
   */
  async queryTracedEventByEventIdWithOptions(request: $_model.QueryTracedEventByEventIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTracedEventByEventIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTracedEventByEventId",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTracedEventByEventIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryTracedEventByEventIdResponse({}));
  }

  /**
   * Queries event traces by event ID.
   * 
   * @remarks
   * You can call this API operation to query event traces by event ID.
   * 
   * @param request - QueryTracedEventByEventIdRequest
   * @returns QueryTracedEventByEventIdResponse
   */
  async queryTracedEventByEventId(request: $_model.QueryTracedEventByEventIdRequest): Promise<$_model.QueryTracedEventByEventIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTracedEventByEventIdWithOptions(request, runtime);
  }

  /**
   * This operation queries `event trace` data within a `time range`.
   * 
   * @remarks
   * Queries for event traces within a specified time range.
   * 
   * @param request - QueryTracedEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTracedEventsResponse
   */
  async queryTracedEventsWithOptions(request: $_model.QueryTracedEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTracedEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.matchedRule)) {
      query["MatchedRule"] = request.matchedRule;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTracedEvents",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTracedEventsResponse>(await this.callApi(params, req, runtime), new $_model.QueryTracedEventsResponse({}));
  }

  /**
   * This operation queries `event trace` data within a `time range`.
   * 
   * @remarks
   * Queries for event traces within a specified time range.
   * 
   * @param request - QueryTracedEventsRequest
   * @returns QueryTracedEventsResponse
   */
  async queryTracedEvents(request: $_model.QueryTracedEventsRequest): Promise<$_model.QueryTracedEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTracedEventsWithOptions(request, runtime);
  }

  /**
   * Enables a created or disabled event stream.
   * 
   * @remarks
   * Enables a created or disabled event stream.
   * 
   * @param request - StartEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEventStreamingResponse
   */
  async startEventStreamingWithOptions(request: $_model.StartEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartEventStreamingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.StartEventStreamingResponse({}));
  }

  /**
   * Enables a created or disabled event stream.
   * 
   * @remarks
   * Enables a created or disabled event stream.
   * 
   * @param request - StartEventStreamingRequest
   * @returns StartEventStreamingResponse
   */
  async startEventStreaming(request: $_model.StartEventStreamingRequest): Promise<$_model.StartEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEventStreamingWithOptions(request, runtime);
  }

  /**
   * Tests if an event pattern matches a given event.
   * 
   * @remarks
   * Use this action to test an event pattern before you apply it to a rule.
   * 
   * @param request - TestEventPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestEventPatternResponse
   */
  async testEventPatternWithOptions(request: $_model.TestEventPatternRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestEventPatternResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.event)) {
      body["Event"] = request.event;
    }

    if (!$dara.isNull(request.eventPattern)) {
      body["EventPattern"] = request.eventPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestEventPattern",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestEventPatternResponse>(await this.callApi(params, req, runtime), new $_model.TestEventPatternResponse({}));
  }

  /**
   * Tests if an event pattern matches a given event.
   * 
   * @remarks
   * Use this action to test an event pattern before you apply it to a rule.
   * 
   * @param request - TestEventPatternRequest
   * @returns TestEventPatternResponse
   */
  async testEventPattern(request: $_model.TestEventPatternRequest): Promise<$_model.TestEventPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testEventPatternWithOptions(request, runtime);
  }

  /**
   * Checks whether the event source configuration is active.
   * 
   * @remarks
   * Returns a list of all external event sources.
   * 
   * @param tmpReq - TestEventSourceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestEventSourceConfigResponse
   */
  async testEventSourceConfigWithOptions(tmpReq: $_model.TestEventSourceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestEventSourceConfigResponse> {
    tmpReq.validate();
    let request = new $_model.TestEventSourceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceMySQLParameters)) {
      request.sourceMySQLParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMySQLParameters, "SourceMySQLParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceMySQLParametersShrink)) {
      body["SourceMySQLParameters"] = request.sourceMySQLParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestEventSourceConfig",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestEventSourceConfigResponse>(await this.callApi(params, req, runtime), new $_model.TestEventSourceConfigResponse({}));
  }

  /**
   * Checks whether the event source configuration is active.
   * 
   * @remarks
   * Returns a list of all external event sources.
   * 
   * @param request - TestEventSourceConfigRequest
   * @returns TestEventSourceConfigResponse
   */
  async testEventSourceConfig(request: $_model.TestEventSourceConfigRequest): Promise<$_model.TestEventSourceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testEventSourceConfigWithOptions(request, runtime);
  }

  /**
   * Updates a custom agent.
   * 
   * @param tmpReq - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(tmpReq: $_model.UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.metadataShrink)) {
      body["Metadata"] = request.metadataShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * Updates a custom agent.
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * Updates an API destination.
   * 
   * @remarks
   * You can call this API operation to update an API destination.
   * 
   * @param tmpReq - UpdateApiDestinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiDestinationResponse
   */
  async updateApiDestinationWithOptions(tmpReq: $_model.UpdateApiDestinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiDestinationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApiDestinationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.httpApiParameters)) {
      request.httpApiParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpApiParameters, "HttpApiParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.httpApiParametersShrink)) {
      query["HttpApiParameters"] = request.httpApiParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiDestinationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiDestinationResponse({}));
  }

  /**
   * Updates an API destination.
   * 
   * @remarks
   * You can call this API operation to update an API destination.
   * 
   * @param request - UpdateApiDestinationRequest
   * @returns UpdateApiDestinationResponse
   */
  async updateApiDestination(request: $_model.UpdateApiDestinationRequest): Promise<$_model.UpdateApiDestinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApiDestinationWithOptions(request, runtime);
  }

  /**
   * Updates the connection configuration.
   * 
   * @remarks
   * Updates the connection configuration.
   * 
   * @param tmpReq - UpdateConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnectionResponse
   */
  async updateConnectionWithOptions(tmpReq: $_model.UpdateConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authParameters)) {
      request.authParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authParameters, "AuthParameters", "json");
    }

    if (!$dara.isNull(tmpReq.networkParameters)) {
      request.networkParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkParameters, "NetworkParameters", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authParametersShrink)) {
      query["AuthParameters"] = request.authParametersShrink;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkParametersShrink)) {
      query["NetworkParameters"] = request.networkParametersShrink;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnectionResponse({}));
  }

  /**
   * Updates the connection configuration.
   * 
   * @remarks
   * Updates the connection configuration.
   * 
   * @param request - UpdateConnectionRequest
   * @returns UpdateConnectionResponse
   */
  async updateConnection(request: $_model.UpdateConnectionRequest): Promise<$_model.UpdateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  /**
   * Updates an event bus.
   * 
   * @remarks
   * You can call this operation to update an event bus.
   * 
   * @param request - UpdateEventBusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventBusResponse
   */
  async updateEventBusWithOptions(request: $_model.UpdateEventBusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventBusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventBusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventBusResponse({}));
  }

  /**
   * Updates an event bus.
   * 
   * @remarks
   * You can call this operation to update an event bus.
   * 
   * @param request - UpdateEventBusRequest
   * @returns UpdateEventBusResponse
   */
  async updateEventBus(request: $_model.UpdateEventBusRequest): Promise<$_model.UpdateEventBusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventBusWithOptions(request, runtime);
  }

  /**
   * Updates an EventHouse Runtime.
   * 
   * @param request - UpdateEventHouseRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventHouseRuntimeResponse
   */
  async updateEventHouseRuntimeWithOptions(request: $_model.UpdateEventHouseRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventHouseRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cu)) {
      query["Cu"] = request.cu;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventHouseRuntime",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventHouseRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventHouseRuntimeResponse({}));
  }

  /**
   * Updates an EventHouse Runtime.
   * 
   * @param request - UpdateEventHouseRuntimeRequest
   * @returns UpdateEventHouseRuntimeResponse
   */
  async updateEventHouseRuntime(request: $_model.UpdateEventHouseRuntimeRequest): Promise<$_model.UpdateEventHouseRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventHouseRuntimeWithOptions(request, runtime);
  }

  /**
   * Updates an event source.
   * 
   * @remarks
   * You can call this API operation to update an event source.
   * 
   * @param tmpReq - UpdateEventSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventSourceResponse
   */
  async updateEventSourceWithOptions(tmpReq: $_model.UpdateEventSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventSourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEventSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.externalSourceConfig)) {
      request.externalSourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalSourceConfig, "ExternalSourceConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sourceHttpEventParameters)) {
      request.sourceHttpEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceHttpEventParameters, "SourceHttpEventParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceKafkaParameters)) {
      request.sourceKafkaParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceKafkaParameters, "SourceKafkaParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceMNSParameters)) {
      request.sourceMNSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMNSParameters, "SourceMNSParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceOSSEventParameters)) {
      request.sourceOSSEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceOSSEventParameters, "SourceOSSEventParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceRabbitMQParameters)) {
      request.sourceRabbitMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRabbitMQParameters, "SourceRabbitMQParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceRocketMQParameters)) {
      request.sourceRocketMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRocketMQParameters, "SourceRocketMQParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceSLSParameters)) {
      request.sourceSLSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSLSParameters, "SourceSLSParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceScheduledEventParameters)) {
      request.sourceScheduledEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceScheduledEventParameters, "SourceScheduledEventParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    if (!$dara.isNull(request.externalSourceConfigShrink)) {
      body["ExternalSourceConfig"] = request.externalSourceConfigShrink;
    }

    if (!$dara.isNull(request.externalSourceType)) {
      body["ExternalSourceType"] = request.externalSourceType;
    }

    if (!$dara.isNull(request.linkedExternalSource)) {
      body["LinkedExternalSource"] = request.linkedExternalSource;
    }

    if (!$dara.isNull(request.sourceHttpEventParametersShrink)) {
      body["SourceHttpEventParameters"] = request.sourceHttpEventParametersShrink;
    }

    if (!$dara.isNull(request.sourceKafkaParametersShrink)) {
      body["SourceKafkaParameters"] = request.sourceKafkaParametersShrink;
    }

    if (!$dara.isNull(request.sourceMNSParametersShrink)) {
      body["SourceMNSParameters"] = request.sourceMNSParametersShrink;
    }

    if (!$dara.isNull(request.sourceOSSEventParametersShrink)) {
      body["SourceOSSEventParameters"] = request.sourceOSSEventParametersShrink;
    }

    if (!$dara.isNull(request.sourceRabbitMQParametersShrink)) {
      body["SourceRabbitMQParameters"] = request.sourceRabbitMQParametersShrink;
    }

    if (!$dara.isNull(request.sourceRocketMQParametersShrink)) {
      body["SourceRocketMQParameters"] = request.sourceRocketMQParametersShrink;
    }

    if (!$dara.isNull(request.sourceSLSParametersShrink)) {
      body["SourceSLSParameters"] = request.sourceSLSParametersShrink;
    }

    if (!$dara.isNull(request.sourceScheduledEventParametersShrink)) {
      body["SourceScheduledEventParameters"] = request.sourceScheduledEventParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventSourceResponse({}));
  }

  /**
   * Updates an event source.
   * 
   * @remarks
   * You can call this API operation to update an event source.
   * 
   * @param request - UpdateEventSourceRequest
   * @returns UpdateEventSourceResponse
   */
  async updateEventSource(request: $_model.UpdateEventSourceRequest): Promise<$_model.UpdateEventSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventSourceWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information, event source information, event filtering pattern, or event target information of an event stream.
   * 
   * @remarks
   * Modifies the basic information, event source information, event filtering pattern, or event target information of an event stream.
   * 
   * @param tmpReq - UpdateEventStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventStreamingResponse
   */
  async updateEventStreamingWithOptions(tmpReq: $_model.UpdateEventStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventStreamingResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEventStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.runOptions)) {
      request.runOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runOptions, "RunOptions", "json");
    }

    if (!$dara.isNull(tmpReq.sink)) {
      request.sinkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sink, "Sink", "json");
    }

    if (!$dara.isNull(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    if (!$dara.isNull(tmpReq.transforms)) {
      request.transformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transforms, "Transforms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    if (!$dara.isNull(request.filterPattern)) {
      body["FilterPattern"] = request.filterPattern;
    }

    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.runOptionsShrink)) {
      body["RunOptions"] = request.runOptionsShrink;
    }

    if (!$dara.isNull(request.sinkShrink)) {
      body["Sink"] = request.sinkShrink;
    }

    if (!$dara.isNull(request.sourceShrink)) {
      body["Source"] = request.sourceShrink;
    }

    if (!$dara.isNull(request.transformsShrink)) {
      body["Transforms"] = request.transformsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventStreamingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventStreamingResponse({}));
  }

  /**
   * Modifies the basic information, event source information, event filtering pattern, or event target information of an event stream.
   * 
   * @remarks
   * Modifies the basic information, event source information, event filtering pattern, or event target information of an event stream.
   * 
   * @param request - UpdateEventStreamingRequest
   * @returns UpdateEventStreamingResponse
   */
  async updateEventStreaming(request: $_model.UpdateEventStreamingRequest): Promise<$_model.UpdateEventStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventStreamingWithOptions(request, runtime);
  }

  /**
   * Querying an event stream
   * 
   * @remarks
   * Updates the billing method, compute unit (CU) resources, and other configurations of an event stream.
   * 
   * @param request - UpdateEventStreamingBusinessOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventStreamingBusinessOptionResponse
   */
  async updateEventStreamingBusinessOptionWithOptions(request: $_model.UpdateEventStreamingBusinessOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventStreamingBusinessOptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessMode)) {
      body["BusinessMode"] = request.businessMode;
    }

    if (!$dara.isNull(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    if (!$dara.isNull(request.maxCapacityUnitCount)) {
      body["MaxCapacityUnitCount"] = request.maxCapacityUnitCount;
    }

    if (!$dara.isNull(request.minCapacityUnitCount)) {
      body["MinCapacityUnitCount"] = request.minCapacityUnitCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventStreamingBusinessOption",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventStreamingBusinessOptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventStreamingBusinessOptionResponse({}));
  }

  /**
   * Querying an event stream
   * 
   * @remarks
   * Updates the billing method, compute unit (CU) resources, and other configurations of an event stream.
   * 
   * @param request - UpdateEventStreamingBusinessOptionRequest
   * @returns UpdateEventStreamingBusinessOptionResponse
   */
  async updateEventStreamingBusinessOption(request: $_model.UpdateEventStreamingBusinessOptionRequest): Promise<$_model.UpdateEventStreamingBusinessOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventStreamingBusinessOptionWithOptions(request, runtime);
  }

  /**
   * Modify namespace
   * 
   * @param request - UpdateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: $_model.UpdateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceResponse({}));
  }

  /**
   * Modify namespace
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: $_model.UpdateNamespaceRequest): Promise<$_model.UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of an event rule.
   * 
   * @remarks
   * You can call this API operation to update the configurations of an event rule.
   * 
   * @param request - UpdateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleResponse
   */
  async updateRuleWithOptions(request: $_model.UpdateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.filterPattern)) {
      query["FilterPattern"] = request.filterPattern;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleResponse({}));
  }

  /**
   * Updates the configurations of an event rule.
   * 
   * @remarks
   * You can call this API operation to update the configurations of an event rule.
   * 
   * @param request - UpdateRuleRequest
   * @returns UpdateRuleResponse
   */
  async updateRule(request: $_model.UpdateRuleRequest): Promise<$_model.UpdateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  /**
   * Update table
   * 
   * @remarks
   * Updates the configuration of an event rule.
   * 
   * @param tmpReq - UpdateTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableResponse
   */
  async updateTableWithOptions(tmpReq: $_model.UpdateTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addColumn)) {
      request.addColumnShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addColumn, "AddColumn", "json");
    }

    if (!$dara.isNull(tmpReq.deleteColumn)) {
      request.deleteColumnShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteColumn, "DeleteColumn", "json");
    }

    if (!$dara.isNull(tmpReq.renameColumn)) {
      request.renameColumnShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renameColumn, "RenameColumn", "json");
    }

    if (!$dara.isNull(tmpReq.updateColumnComment)) {
      request.updateColumnCommentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateColumnComment, "UpdateColumnComment", "json");
    }

    if (!$dara.isNull(tmpReq.updateColumnType)) {
      request.updateColumnTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateColumnType, "UpdateColumnType", "json");
    }

    if (!$dara.isNull(tmpReq.updateRetentionPolicy)) {
      request.updateRetentionPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateRetentionPolicy, "UpdateRetentionPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addColumnShrink)) {
      query["AddColumn"] = request.addColumnShrink;
    }

    if (!$dara.isNull(request.catalog)) {
      query["Catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteColumnShrink)) {
      query["DeleteColumn"] = request.deleteColumnShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.renameColumnShrink)) {
      query["RenameColumn"] = request.renameColumnShrink;
    }

    if (!$dara.isNull(request.updateColumnCommentShrink)) {
      query["UpdateColumnComment"] = request.updateColumnCommentShrink;
    }

    if (!$dara.isNull(request.updateColumnTypeShrink)) {
      query["UpdateColumnType"] = request.updateColumnTypeShrink;
    }

    if (!$dara.isNull(request.updateComment)) {
      query["UpdateComment"] = request.updateComment;
    }

    if (!$dara.isNull(request.updateRetentionPolicyShrink)) {
      query["UpdateRetentionPolicy"] = request.updateRetentionPolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTable",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableResponse({}));
  }

  /**
   * Update table
   * 
   * @remarks
   * Updates the configuration of an event rule.
   * 
   * @param request - UpdateTableRequest
   * @returns UpdateTableResponse
   */
  async updateTable(request: $_model.UpdateTableRequest): Promise<$_model.UpdateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableWithOptions(request, runtime);
  }

}
