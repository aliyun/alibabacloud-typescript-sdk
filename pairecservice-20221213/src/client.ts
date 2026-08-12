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
      'cn-shenzhen': "pairecservice.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "pairecservice.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "pairecservice.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "pairecservice.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "pairecservice.cn-beijing.aliyuncs.com",
      'ap-southeast-5': "pairecservice.ap-southeast-5.aliyuncs.com",
      'ap-southeast-1': "pairecservice.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "pairecservice.eu-central-1.aliyuncs.com",
      'us-east-1': "pairecservice.us-east-1.aliyuncs.com",
      'us-west-1': "pairecservice.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pairecservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies an engine configuration.
   * 
   * @param request - ApplyEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyEngineConfigResponse
   */
  async applyEngineConfigWithOptions(EngineConfigId: string, request: $_model.ApplyEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.ApplyEngineConfigResponse({}));
  }

  /**
   * Applies an engine configuration.
   * 
   * @param request - ApplyEngineConfigRequest
   * @returns ApplyEngineConfigResponse
   */
  async applyEngineConfig(EngineConfigId: string, request: $_model.ApplyEngineConfigRequest): Promise<$_model.ApplyEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * Performs data backflow for the latest job of a specified feature consistency check job configuration.
   * 
   * @param request - BackflowFeatureConsistencyCheckJobDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobDataWithOptions(request: $_model.BackflowFeatureConsistencyCheckJobDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BackflowFeatureConsistencyCheckJobDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemFeatures)) {
      body["ItemFeatures"] = request.itemFeatures;
    }

    if (!$dara.isNull(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.scores)) {
      body["Scores"] = request.scores;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.userFeatures)) {
      body["UserFeatures"] = request.userFeatures;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackflowFeatureConsistencyCheckJobData",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/action/backflowdata`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BackflowFeatureConsistencyCheckJobDataResponse>(await this.callApi(params, req, runtime), new $_model.BackflowFeatureConsistencyCheckJobDataResponse({}));
  }

  /**
   * Performs data backflow for the latest job of a specified feature consistency check job configuration.
   * 
   * @param request - BackflowFeatureConsistencyCheckJobDataRequest
   * @returns BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobData(request: $_model.BackflowFeatureConsistencyCheckJobDataRequest): Promise<$_model.BackflowFeatureConsistencyCheckJobDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.backflowFeatureConsistencyCheckJobDataWithOptions(request, headers, runtime);
  }

  /**
   * This API changes the version of a recall management service.
   * 
   * @remarks
   * ## Request
   * Use this API to change the version of a recall management service. Ensure that the provided `RecallManagementServiceId`, `InstanceId`, and target `RecallManagementServiceVersionId` are valid, and that you have the required permissions for these resources.
   * - **RecallManagementServiceId**: The unique identifier of the recall management service.
   * - **InstanceId**: The instance ID associated with the recall management service.
   * - **RecallManagementServiceVersionId**: The target version ID to switch to.
   * Note: Before changing the version, confirm that the new version is fully tested and ready for production.
   * 
   * @param request - ChangeRecallManagementServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeRecallManagementServiceVersionResponse
   */
  async changeRecallManagementServiceVersionWithOptions(RecallManagementServiceId: string, request: $_model.ChangeRecallManagementServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeRecallManagementServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.recallManagementServiceVersionId)) {
      body["RecallManagementServiceVersionId"] = request.recallManagementServiceVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeRecallManagementServiceVersion",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/action/changeversion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeRecallManagementServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.ChangeRecallManagementServiceVersionResponse({}));
  }

  /**
   * This API changes the version of a recall management service.
   * 
   * @remarks
   * ## Request
   * Use this API to change the version of a recall management service. Ensure that the provided `RecallManagementServiceId`, `InstanceId`, and target `RecallManagementServiceVersionId` are valid, and that you have the required permissions for these resources.
   * - **RecallManagementServiceId**: The unique identifier of the recall management service.
   * - **InstanceId**: The instance ID associated with the recall management service.
   * - **RecallManagementServiceVersionId**: The target version ID to switch to.
   * Note: Before changing the version, confirm that the new version is fully tested and ready for production.
   * 
   * @param request - ChangeRecallManagementServiceVersionRequest
   * @returns ChangeRecallManagementServiceVersionResponse
   */
  async changeRecallManagementServiceVersion(RecallManagementServiceId: string, request: $_model.ChangeRecallManagementServiceVersionRequest): Promise<$_model.ChangeRecallManagementServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeRecallManagementServiceVersionWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Sends a conversation message to an agent. Supports Server-Sent Events (SSE). Creates a new session or continues a conversation in an existing session.
   * 
   * @remarks
   * ## Operation description
   * - Call this API operation to send a conversation message to an agent. Server-Sent Events (SSE) is supported.
   * - If the `ConversationId` parameter is specified, the conversation continues in the context of the specified existing session. If this parameter is not specified, automatic creation of a new session is performed.
   * - The `Config` field allows you to pass additional information input. The value must be in JSON format.
   * - If the request succeeds, the response includes the message ID, reply content, and other information for this conversation. If a fault occurs, the corresponding error code and error message are returned.
   * 
   * @param request - ChatConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatConversationResponse
   */
  async *chatConversationWithSSE(request: $_model.ChatConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatConversationResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatConversation",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/conversations/chat`,
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
        yield $dara.cast<$_model.ChatConversationResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ChatConversationResponse({}));
      }

    }
  }

  /**
   * Sends a conversation message to an agent. Supports Server-Sent Events (SSE). Creates a new session or continues a conversation in an existing session.
   * 
   * @remarks
   * ## Operation description
   * - Call this API operation to send a conversation message to an agent. Server-Sent Events (SSE) is supported.
   * - If the `ConversationId` parameter is specified, the conversation continues in the context of the specified existing session. If this parameter is not specified, automatic creation of a new session is performed.
   * - The `Config` field allows you to pass additional information input. The value must be in JSON format.
   * - If the request succeeds, the response includes the message ID, reply content, and other information for this conversation. If a fault occurs, the corresponding error code and error message are returned.
   * 
   * @param request - ChatConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatConversationResponse
   */
  async chatConversationWithOptions(request: $_model.ChatConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChatConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatConversation",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/conversations/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatConversationResponse>(await this.callApi(params, req, runtime), new $_model.ChatConversationResponse({}));
  }

  /**
   * Sends a conversation message to an agent. Supports Server-Sent Events (SSE). Creates a new session or continues a conversation in an existing session.
   * 
   * @remarks
   * ## Operation description
   * - Call this API operation to send a conversation message to an agent. Server-Sent Events (SSE) is supported.
   * - If the `ConversationId` parameter is specified, the conversation continues in the context of the specified existing session. If this parameter is not specified, automatic creation of a new session is performed.
   * - The `Config` field allows you to pass additional information input. The value must be in JSON format.
   * - If the request succeeds, the response includes the message ID, reply content, and other information for this conversation. If a fault occurs, the corresponding error code and error message are returned.
   * 
   * @param request - ChatConversationRequest
   * @returns ChatConversationResponse
   */
  async chatConversation(request: $_model.ChatConversationRequest): Promise<$_model.ChatConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.chatConversationWithOptions(request, headers, runtime);
  }

  /**
   * Verifies access to resources configured for an instance.
   * 
   * @param request - CheckInstanceResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceResourcesResponse
   */
  async checkInstanceResourcesWithOptions(InstanceId: string, request: $_model.CheckInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/action/checkresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceResourcesResponse({}));
  }

  /**
   * Verifies access to resources configured for an instance.
   * 
   * @param request - CheckInstanceResourcesRequest
   * @returns CheckInstanceResourcesResponse
   */
  async checkInstanceResources(InstanceId: string, request: $_model.CheckInstanceResourcesRequest): Promise<$_model.CheckInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Validates a traffic control task expression.
   * 
   * @remarks
   * ## Description
   * This operation validates a traffic control task expression for a specific instance and table. Provide the correct `InstanceId`, `TableMetaId`, and `Expression` parameters.
   * 
   * @param request - CheckTrafficControlTaskExpressionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTrafficControlTaskExpressionResponse
   */
  async checkTrafficControlTaskExpressionWithOptions(request: $_model.CheckTrafficControlTaskExpressionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckTrafficControlTaskExpressionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckTrafficControlTaskExpression",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/action/checkexpression`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckTrafficControlTaskExpressionResponse>(await this.callApi(params, req, runtime), new $_model.CheckTrafficControlTaskExpressionResponse({}));
  }

  /**
   * Validates a traffic control task expression.
   * 
   * @remarks
   * ## Description
   * This operation validates a traffic control task expression for a specific instance and table. Provide the correct `InstanceId`, `TableMetaId`, and `Expression` parameters.
   * 
   * @param request - CheckTrafficControlTaskExpressionRequest
   * @returns CheckTrafficControlTaskExpressionResponse
   */
  async checkTrafficControlTaskExpression(request: $_model.CheckTrafficControlTaskExpressionRequest): Promise<$_model.CheckTrafficControlTaskExpressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkTrafficControlTaskExpressionWithOptions(request, headers, runtime);
  }

  /**
   * Clones an engine configuration.
   * 
   * @param request - CloneEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneEngineConfigResponse
   */
  async cloneEngineConfigWithOptions(EngineConfigId: string, request: $_model.CloneEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.CloneEngineConfigResponse({}));
  }

  /**
   * Clones an engine configuration.
   * 
   * @param request - CloneEngineConfigRequest
   * @returns CloneEngineConfigResponse
   */
  async cloneEngineConfig(EngineConfigId: string, request: $_model.CloneEngineConfigRequest): Promise<$_model.CloneEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * Clones a specified experiment.
   * 
   * @param request - CloneExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneExperimentResponse
   */
  async cloneExperimentWithOptions(ExperimentId: string, request: $_model.CloneExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneExperimentResponse>(await this.callApi(params, req, runtime), new $_model.CloneExperimentResponse({}));
  }

  /**
   * Clones a specified experiment.
   * 
   * @param request - CloneExperimentRequest
   * @returns CloneExperimentResponse
   */
  async cloneExperiment(ExperimentId: string, request: $_model.CloneExperimentRequest): Promise<$_model.CloneExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Clones an experiment group to a specified environment.
   * 
   * @param request - CloneExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneExperimentGroupResponse
   */
  async cloneExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.CloneExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloneExperimentGroupResponse({}));
  }

  /**
   * Clones an experiment group to a specified environment.
   * 
   * @param request - CloneExperimentGroupRequest
   * @returns CloneExperimentGroupResponse
   */
  async cloneExperimentGroup(ExperimentGroupId: string, request: $_model.CloneExperimentGroupRequest): Promise<$_model.CloneExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Clones a feature consistency check job configuration.
   * 
   * @param request - CloneFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId: string, request: $_model.CloneFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(SourceFeatureConsistencyCheckJobConfigId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.CloneFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * Clones a feature consistency check job configuration.
   * 
   * @param request - CloneFeatureConsistencyCheckJobConfigRequest
   * @returns CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfig(SourceFeatureConsistencyCheckJobConfigId: string, request: $_model.CloneFeatureConsistencyCheckJobConfigRequest): Promise<$_model.CloneFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * Clones a specified laboratory to a designated environment. You can specify whether to clone the experiment groups within the laboratory.
   * 
   * @param request - CloneLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneLaboratoryResponse
   */
  async cloneLaboratoryWithOptions(LaboratoryId: string, request: $_model.CloneLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloneExperimentGroup)) {
      body["CloneExperimentGroup"] = request.cloneExperimentGroup;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.CloneLaboratoryResponse({}));
  }

  /**
   * Clones a specified laboratory to a designated environment. You can specify whether to clone the experiment groups within the laboratory.
   * 
   * @param request - CloneLaboratoryRequest
   * @returns CloneLaboratoryResponse
   */
  async cloneLaboratory(LaboratoryId: string, request: $_model.CloneLaboratoryRequest): Promise<$_model.CloneLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * Clones a specified traffic control task to a new instance.
   * 
   * @remarks
   * ## Request description
   * This API clones an existing traffic control task to another specified instance. Ensure that the `InstanceId` you provide is valid and that you have the required permissions for the target instance.
   * Note: The cloning process does not affect the status or configuration of the original task.
   * 
   * @param request - CloneTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.CloneTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloneTrafficControlTaskResponse({}));
  }

  /**
   * Clones a specified traffic control task to a new instance.
   * 
   * @remarks
   * ## Request description
   * This API clones an existing traffic control task to another specified instance. Ensure that the `InstanceId` you provide is valid and that you have the required permissions for the target instance.
   * Note: The cloning process does not affect the status or configuration of the original task.
   * 
   * @param request - CloneTrafficControlTaskRequest
   * @returns CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTask(TrafficControlTaskId: string, request: $_model.CloneTrafficControlTaskRequest): Promise<$_model.CloneTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 对比样本一致性任务
   * 
   * @param request - CompareSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareSampleConsistencyJobResponse
   */
  async compareSampleConsistencyJobWithOptions(SampleConsistencyJobId: string, request: $_model.CompareSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompareSampleConsistencyJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}/action/compare`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.CompareSampleConsistencyJobResponse({}));
  }

  /**
   * 对比样本一致性任务
   * 
   * @param request - CompareSampleConsistencyJobRequest
   * @returns CompareSampleConsistencyJobResponse
   */
  async compareSampleConsistencyJob(SampleConsistencyJobId: string, request: $_model.CompareSampleConsistencyJobRequest): Promise<$_model.CompareSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.compareSampleConsistencyJobWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Creates an AB metric.
   * 
   * @param request - CreateABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABMetricResponse
   */
  async createABMetricWithOptions(request: $_model.CreateABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateABMetricResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregationByUser)) {
      body["AggregationByUser"] = request.aggregationByUser;
    }

    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.denominator)) {
      body["Denominator"] = request.denominator;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isBinomialDistribution)) {
      body["IsBinomialDistribution"] = request.isBinomialDistribution;
    }

    if (!$dara.isNull(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needSignificance)) {
      body["NeedSignificance"] = request.needSignificance;
    }

    if (!$dara.isNull(request.numerator)) {
      body["Numerator"] = request.numerator;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!$dara.isNull(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateABMetricResponse>(await this.callApi(params, req, runtime), new $_model.CreateABMetricResponse({}));
  }

  /**
   * Creates an AB metric.
   * 
   * @param request - CreateABMetricRequest
   * @returns CreateABMetricResponse
   */
  async createABMetric(request: $_model.CreateABMetricRequest): Promise<$_model.CreateABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricWithOptions(request, headers, runtime);
  }

  /**
   * Creates an A/B metric group.
   * 
   * @param request - CreateABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABMetricGroupResponse
   */
  async createABMetricGroupWithOptions(request: $_model.CreateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateABMetricGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateABMetricGroupResponse({}));
  }

  /**
   * Creates an A/B metric group.
   * 
   * @param request - CreateABMetricGroupRequest
   * @returns CreateABMetricGroupResponse
   */
  async createABMetricGroup(request: $_model.CreateABMetricGroupRequest): Promise<$_model.CreateABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates multiple calculation jobs.
   * 
   * @param request - CreateCalculationJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCalculationJobsResponse
   */
  async createCalculationJobsWithOptions(request: $_model.CreateCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCalculationJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCalculationJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/batch/calculationjobs/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCalculationJobsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCalculationJobsResponse({}));
  }

  /**
   * Creates multiple calculation jobs.
   * 
   * @param request - CreateCalculationJobsRequest
   * @returns CreateCalculationJobsResponse
   */
  async createCalculationJobs(request: $_model.CreateCalculationJobsRequest): Promise<$_model.CreateCalculationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * Creates a crowd that represents a group of users.
   * 
   * @param request - CreateCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCrowdResponse
   */
  async createCrowdWithOptions(request: $_model.CreateCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCrowdResponse>(await this.callApi(params, req, runtime), new $_model.CreateCrowdResponse({}));
  }

  /**
   * Creates a crowd that represents a group of users.
   * 
   * @param request - CreateCrowdRequest
   * @returns CreateCrowdResponse
   */
  async createCrowd(request: $_model.CreateCrowdRequest): Promise<$_model.CreateCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCrowdWithOptions(request, headers, runtime);
  }

  /**
   * Creates a data diagnosis task. This API supports various analysis types.
   * 
   * @remarks
   * ## Description
   * - This API creates a data diagnosis task. It supports various analysis types, including item or user change rate analysis, user preference statistics cycle analysis, two-table join analysis, basic statistical analysis, and abnormal behavior analysis.
   * - The content of the `Config` parameter depends on the value of the `Type` parameter. For more information, see the example configurations in this topic.
   * - To run the task on a schedule, specify the `CycleTime` parameter. If this parameter is omitted, the task runs only once.
   * - The optional `TopNQuantity` parameter specifies the number of top results to return.
   * 
   * @param request - CreateDataDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataDiagnosisResponse
   */
  async createDataDiagnosisWithOptions(request: $_model.CreateDataDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.cycleTime)) {
      body["CycleTime"] = request.cycleTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.leftTableMetaId)) {
      body["LeftTableMetaId"] = request.leftTableMetaId;
    }

    if (!$dara.isNull(request.leftTablePartitionField)) {
      body["LeftTablePartitionField"] = request.leftTablePartitionField;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.partitionField)) {
      body["PartitionField"] = request.partitionField;
    }

    if (!$dara.isNull(request.rightTableMetaId)) {
      body["RightTableMetaId"] = request.rightTableMetaId;
    }

    if (!$dara.isNull(request.rightTablePartitionField)) {
      body["RightTablePartitionField"] = request.rightTablePartitionField;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.topNQuantity)) {
      body["TopNQuantity"] = request.topNQuantity;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataDiagnosis",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataDiagnosisResponse({}));
  }

  /**
   * Creates a data diagnosis task. This API supports various analysis types.
   * 
   * @remarks
   * ## Description
   * - This API creates a data diagnosis task. It supports various analysis types, including item or user change rate analysis, user preference statistics cycle analysis, two-table join analysis, basic statistical analysis, and abnormal behavior analysis.
   * - The content of the `Config` parameter depends on the value of the `Type` parameter. For more information, see the example configurations in this topic.
   * - To run the task on a schedule, specify the `CycleTime` parameter. If this parameter is omitted, the task runs only once.
   * - The optional `TopNQuantity` parameter specifies the number of top results to return.
   * 
   * @param request - CreateDataDiagnosisRequest
   * @returns CreateDataDiagnosisResponse
   */
  async createDataDiagnosis(request: $_model.CreateDataDiagnosisRequest): Promise<$_model.CreateDataDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * Creates a data diagnosis (rerun) job for a specified time period.
   * 
   * @remarks
   * ## Description
   * This operation creates a data diagnosis (rerun) job for a specific instance within a specified time frame. To ensure the job runs correctly, provide accurate values for the `DataDiagnosisId`, `InstanceId`, `StartDate`, and `EndDate` parameters.
   * 
   * @param request - CreateDataDiagnosisJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataDiagnosisJobsResponse
   */
  async createDataDiagnosisJobsWithOptions(request: $_model.CreateDataDiagnosisJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataDiagnosisJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataDiagnosisId)) {
      body["DataDiagnosisId"] = request.dataDiagnosisId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataDiagnosisJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/batch/datadiagnosisjobs/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataDiagnosisJobsResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataDiagnosisJobsResponse({}));
  }

  /**
   * Creates a data diagnosis (rerun) job for a specified time period.
   * 
   * @remarks
   * ## Description
   * This operation creates a data diagnosis (rerun) job for a specific instance within a specified time frame. To ensure the job runs correctly, provide accurate values for the `DataDiagnosisId`, `InstanceId`, `StartDate`, and `EndDate` parameters.
   * 
   * @param request - CreateDataDiagnosisJobsRequest
   * @returns CreateDataDiagnosisJobsResponse
   */
  async createDataDiagnosisJobs(request: $_model.CreateDataDiagnosisJobsRequest): Promise<$_model.CreateDataDiagnosisJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataDiagnosisJobsWithOptions(request, headers, runtime);
  }

  /**
   * Creates an engine configuration.
   * 
   * @param request - CreateEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEngineConfigResponse
   */
  async createEngineConfigWithOptions(request: $_model.CreateEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateEngineConfigResponse({}));
  }

  /**
   * Creates an engine configuration.
   * 
   * @param request - CreateEngineConfigRequest
   * @returns CreateEngineConfigResponse
   */
  async createEngineConfig(request: $_model.CreateEngineConfigRequest): Promise<$_model.CreateEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEngineConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates an experiment in a specified experiment group.
   * 
   * @param request - CreateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentResponse
   */
  async createExperimentWithOptions(request: $_model.CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperimentResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperimentResponse({}));
  }

  /**
   * Creates an experiment in a specified experiment group.
   * 
   * @param request - CreateExperimentRequest
   * @returns CreateExperimentResponse
   */
  async createExperiment(request: $_model.CreateExperimentRequest): Promise<$_model.CreateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * Creates an experiment group in a specified layer. You can use experiment groups to categorize experiments and observe their overall performance.
   * 
   * @param request - CreateExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentGroupResponse
   */
  async createExperimentGroupWithOptions(request: $_model.CreateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!$dara.isNull(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!$dara.isNull(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!$dara.isNull(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!$dara.isNull(request.reservedBuckets)) {
      body["ReservedBuckets"] = request.reservedBuckets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperimentGroupResponse({}));
  }

  /**
   * Creates an experiment group in a specified layer. You can use experiment groups to categorize experiments and observe their overall performance.
   * 
   * @param request - CreateExperimentGroupRequest
   * @returns CreateExperimentGroupResponse
   */
  async createExperimentGroup(request: $_model.CreateExperimentGroupRequest): Promise<$_model.CreateExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a feature consistency check job.
   * 
   * @param request - CreateFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJobWithOptions(request: $_model.CreateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFeatureConsistencyCheckJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.samplingDuration)) {
      body["SamplingDuration"] = request.samplingDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * Creates a feature consistency check job.
   * 
   * @param request - CreateFeatureConsistencyCheckJobRequest
   * @returns CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJob(request: $_model.CreateFeatureConsistencyCheckJobRequest): Promise<$_model.CreateFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobWithOptions(request, headers, runtime);
  }

  /**
   * Configure a feature consistency check task.
   * 
   * @param request - CreateFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfigWithOptions(request: $_model.CreateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetMountPath)) {
      body["DatasetMountPath"] = request.datasetMountPath;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.datasetUri)) {
      body["DatasetUri"] = request.datasetUri;
    }

    if (!$dara.isNull(request.defaultRoute)) {
      body["DefaultRoute"] = request.defaultRoute;
    }

    if (!$dara.isNull(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!$dara.isNull(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!$dara.isNull(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!$dara.isNull(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!$dara.isNull(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!$dara.isNull(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!$dara.isNull(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!$dara.isNull(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!$dara.isNull(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!$dara.isNull(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!$dara.isNull(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!$dara.isNull(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!$dara.isNull(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!$dara.isNull(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!$dara.isNull(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!$dara.isNull(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!$dara.isNull(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.maxcomputeSchema)) {
      body["MaxcomputeSchema"] = request.maxcomputeSchema;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!$dara.isNull(request.predictWorkerCount)) {
      body["PredictWorkerCount"] = request.predictWorkerCount;
    }

    if (!$dara.isNull(request.predictWorkerCpu)) {
      body["PredictWorkerCpu"] = request.predictWorkerCpu;
    }

    if (!$dara.isNull(request.predictWorkerMemory)) {
      body["PredictWorkerMemory"] = request.predictWorkerMemory;
    }

    if (!$dara.isNull(request.resourceConfig)) {
      body["ResourceConfig"] = request.resourceConfig;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.switchId)) {
      body["SwitchId"] = request.switchId;
    }

    if (!$dara.isNull(request.useFeatureStore)) {
      body["UseFeatureStore"] = request.useFeatureStore;
    }

    if (!$dara.isNull(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!$dara.isNull(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!$dara.isNull(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!$dara.isNull(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * Configure a feature consistency check task.
   * 
   * @param request - CreateFeatureConsistencyCheckJobConfigRequest
   * @returns CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfig(request: $_model.CreateFeatureConsistencyCheckJobConfigRequest): Promise<$_model.CreateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates a configuration resource for a specified instance.
   * 
   * @param request - CreateInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResourceResponse
   */
  async createInstanceResourceWithOptions(InstanceId: string, request: $_model.CreateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.group)) {
      body["Group"] = request.group;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResourceResponse({}));
  }

  /**
   * Creates a configuration resource for a specified instance.
   * 
   * @param request - CreateInstanceResourceRequest
   * @returns CreateInstanceResourceResponse
   */
  async createInstanceResource(InstanceId: string, request: $_model.CreateInstanceResourceRequest): Promise<$_model.CreateInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceResourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Creates a laboratory. A laboratory isolates a segment of traffic for running experiments.
   * 
   * @param request - CreateLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLaboratoryResponse
   */
  async createLaboratoryWithOptions(request: $_model.CreateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!$dara.isNull(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateLaboratoryResponse({}));
  }

  /**
   * Creates a laboratory. A laboratory isolates a segment of traffic for running experiments.
   * 
   * @param request - CreateLaboratoryRequest
   * @returns CreateLaboratoryResponse
   */
  async createLaboratory(request: $_model.CreateLaboratoryRequest): Promise<$_model.CreateLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLaboratoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a layer in a specified laboratory for layered experiments. Layers are orthogonal to each other, allowing experiments to run independently and preventing traffic starvation.
   * 
   * @param request - CreateLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayerResponse
   */
  async createLayerWithOptions(request: $_model.CreateLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.laboratoryId)) {
      body["LaboratoryId"] = request.laboratoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLayerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLayerResponse({}));
  }

  /**
   * Creates a layer in a specified laboratory for layered experiments. Layers are orthogonal to each other, allowing experiments to run independently and preventing traffic starvation.
   * 
   * @param request - CreateLayerRequest
   * @returns CreateLayerResponse
   */
  async createLayer(request: $_model.CreateLayerRequest): Promise<$_model.CreateLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerWithOptions(request, headers, runtime);
  }

  /**
   * Creates an ABTest parameter for a specific scene in a specified environment.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - CreateParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParamResponse
   */
  async createParamWithOptions(request: $_model.CreateParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateParamResponse>(await this.callApi(params, req, runtime), new $_model.CreateParamResponse({}));
  }

  /**
   * Creates an ABTest parameter for a specific scene in a specified environment.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - CreateParamRequest
   * @returns CreateParamResponse
   */
  async createParam(request: $_model.CreateParamRequest): Promise<$_model.CreateParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParamWithOptions(request, headers, runtime);
  }

  /**
   * Initializes a Recall Management configuration, including the instance ID, user information, and network configurations.
   * 
   * @remarks
   * ## Request
   * 
   * @param request - CreateRecallManagementConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecallManagementConfigResponse
   */
  async createRecallManagementConfigWithOptions(request: $_model.CreateRecallManagementConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecallManagementConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkConfigs)) {
      body["NetworkConfigs"] = request.networkConfigs;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecallManagementConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecallManagementConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecallManagementConfigResponse({}));
  }

  /**
   * Initializes a Recall Management configuration, including the instance ID, user information, and network configurations.
   * 
   * @remarks
   * ## Request
   * 
   * @param request - CreateRecallManagementConfigRequest
   * @returns CreateRecallManagementConfigResponse
   */
  async createRecallManagementConfig(request: $_model.CreateRecallManagementConfigRequest): Promise<$_model.CreateRecallManagementConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRecallManagementConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates a new recall management service.
   * 
   * @remarks
   * ## Description
   * To create a recall management service, call this API with a specified instance ID, service name, and service description. Ensure that the `InstanceId` parameter is valid.
   * 
   * @param request - CreateRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecallManagementServiceResponse
   */
  async createRecallManagementServiceWithOptions(request: $_model.CreateRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecallManagementServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecallManagementServiceResponse({}));
  }

  /**
   * Creates a new recall management service.
   * 
   * @remarks
   * ## Description
   * To create a recall management service, call this API with a specified instance ID, service name, and service description. Ensure that the `InstanceId` parameter is valid.
   * 
   * @param request - CreateRecallManagementServiceRequest
   * @returns CreateRecallManagementServiceResponse
   */
  async createRecallManagementService(request: $_model.CreateRecallManagementServiceRequest): Promise<$_model.CreateRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRecallManagementServiceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a new recall management service version that supports configuring multiple recall strategies.
   * 
   * @remarks
   * ## Request
   * - Use this API to create a new version of a recall management service.
   * - To create a new version from an existing one, specify the source recall management service version ID.
   * - You can configure detailed recall rules, such as the recall name, description, priority, and recall type.
   * - Configure operators such as filter, trigger, feature extraction, and join.
   * - The merge configuration specifies how to merge multiple recall results and supports two merge methods: weight-based and alternating.
   * - All configuration items are optional.
   * 
   * @param request - CreateRecallManagementServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecallManagementServiceVersionResponse
   */
  async createRecallManagementServiceVersionWithOptions(RecallManagementServiceId: string, request: $_model.CreateRecallManagementServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecallManagementServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceRecallManagementServiceVersionId)) {
      body["SourceRecallManagementServiceVersionId"] = request.sourceRecallManagementServiceVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecallManagementServiceVersion",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecallManagementServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecallManagementServiceVersionResponse({}));
  }

  /**
   * Creates a new recall management service version that supports configuring multiple recall strategies.
   * 
   * @remarks
   * ## Request
   * - Use this API to create a new version of a recall management service.
   * - To create a new version from an existing one, specify the source recall management service version ID.
   * - You can configure detailed recall rules, such as the recall name, description, priority, and recall type.
   * - Configure operators such as filter, trigger, feature extraction, and join.
   * - The merge configuration specifies how to merge multiple recall results and supports two merge methods: weight-based and alternating.
   * - All configuration items are optional.
   * 
   * @param request - CreateRecallManagementServiceVersionRequest
   * @returns CreateRecallManagementServiceVersionResponse
   */
  async createRecallManagementServiceVersion(RecallManagementServiceId: string, request: $_model.CreateRecallManagementServiceVersionRequest): Promise<$_model.CreateRecallManagementServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRecallManagementServiceVersionWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Creates a configuration for a specified version of the Recall Manager service, including its recall and merge settings.
   * 
   * @remarks
   * ## Request
   * - This API creates a configuration for a specific version of the Recall Management Service.
   * - The `ConfigType` parameter specifies the configuration type, which can be either recall or merge.
   * - Use the `RecallConfig` and `MergeConfig` parameters to provide the recall and merge configurations, respectively.
   * - Required parameters must be provided in the specified data formats.
   * - Optional parameter values must be consistent with your business logic.
   * 
   * @param request - CreateRecallManagementServiceVersionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecallManagementServiceVersionConfigResponse
   */
  async createRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.CreateRecallManagementServiceVersionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecallManagementServiceVersionConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeConfig)) {
      body["MergeConfig"] = request.mergeConfig;
    }

    if (!$dara.isNull(request.recallConfig)) {
      body["RecallConfig"] = request.recallConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecallManagementServiceVersionConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecallManagementServiceVersionConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecallManagementServiceVersionConfigResponse({}));
  }

  /**
   * Creates a configuration for a specified version of the Recall Manager service, including its recall and merge settings.
   * 
   * @remarks
   * ## Request
   * - This API creates a configuration for a specific version of the Recall Management Service.
   * - The `ConfigType` parameter specifies the configuration type, which can be either recall or merge.
   * - Use the `RecallConfig` and `MergeConfig` parameters to provide the recall and merge configurations, respectively.
   * - Required parameters must be provided in the specified data formats.
   * - Optional parameter values must be consistent with your business logic.
   * 
   * @param request - CreateRecallManagementServiceVersionConfigRequest
   * @returns CreateRecallManagementServiceVersionConfigResponse
   */
  async createRecallManagementServiceVersionConfig(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.CreateRecallManagementServiceVersionConfigRequest): Promise<$_model.CreateRecallManagementServiceVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, request, headers, runtime);
  }

  /**
   * Creates a recall management table that supports multiple data sources and configuration options.
   * 
   * @remarks
   * ## Request
   * - The **InstanceId**, **Name**, **Description**, **Type**, and **DataSource** parameters are required.
   * - The **RecallType** parameter is optional. If provided, it must be a valid enum value.
   * - For each field in the **Fields** parameter, you must define its name, type, and attributes. You must mark at least one field as Primary.
   * - If you use MaxCompute as the data source, you must specify the **MaxcomputeProjectName** and **MaxcomputeTableName** parameters. The **MaxcomputeSchema** parameter is optional.
   * - For vector fields, the values of the **VectorDimension** and **VectorMetricType** parameters must match the actual data.
   * - Use the **Config** field to provide additional configuration as a JSON string.
   * - Use fluctuation threshold parameters, such as **EnableRowCountFluctuationThreshold**, to monitor changes in row count or table size. Enable these parameters and set appropriate thresholds as needed.
   * 
   * @param request - CreateRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecallManagementTableResponse
   */
  async createRecallManagementTableWithOptions(request: $_model.CreateRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecallManagementTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableDataSizeFluctuationThreshold)) {
      body["EnableDataSizeFluctuationThreshold"] = request.enableDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.enableRowCountFluctuationThreshold)) {
      body["EnableRowCountFluctuationThreshold"] = request.enableRowCountFluctuationThreshold;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxDataSizeFluctuationThreshold)) {
      body["MaxDataSizeFluctuationThreshold"] = request.maxDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.maxRowCountFluctuationThreshold)) {
      body["MaxRowCountFluctuationThreshold"] = request.maxRowCountFluctuationThreshold;
    }

    if (!$dara.isNull(request.maxcomputeProjectName)) {
      body["MaxcomputeProjectName"] = request.maxcomputeProjectName;
    }

    if (!$dara.isNull(request.maxcomputeSchema)) {
      body["MaxcomputeSchema"] = request.maxcomputeSchema;
    }

    if (!$dara.isNull(request.maxcomputeTableName)) {
      body["MaxcomputeTableName"] = request.maxcomputeTableName;
    }

    if (!$dara.isNull(request.minDataSizeFluctuationThreshold)) {
      body["MinDataSizeFluctuationThreshold"] = request.minDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.minRowCountFluctuationThreshold)) {
      body["MinRowCountFluctuationThreshold"] = request.minRowCountFluctuationThreshold;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recallType)) {
      body["RecallType"] = request.recallType;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecallManagementTableResponse({}));
  }

  /**
   * Creates a recall management table that supports multiple data sources and configuration options.
   * 
   * @remarks
   * ## Request
   * - The **InstanceId**, **Name**, **Description**, **Type**, and **DataSource** parameters are required.
   * - The **RecallType** parameter is optional. If provided, it must be a valid enum value.
   * - For each field in the **Fields** parameter, you must define its name, type, and attributes. You must mark at least one field as Primary.
   * - If you use MaxCompute as the data source, you must specify the **MaxcomputeProjectName** and **MaxcomputeTableName** parameters. The **MaxcomputeSchema** parameter is optional.
   * - For vector fields, the values of the **VectorDimension** and **VectorMetricType** parameters must match the actual data.
   * - Use the **Config** field to provide additional configuration as a JSON string.
   * - Use fluctuation threshold parameters, such as **EnableRowCountFluctuationThreshold**, to monitor changes in row count or table size. Enable these parameters and set appropriate thresholds as needed.
   * 
   * @param request - CreateRecallManagementTableRequest
   * @returns CreateRecallManagementTableResponse
   */
  async createRecallManagementTable(request: $_model.CreateRecallManagementTableRequest): Promise<$_model.CreateRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRecallManagementTableWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源规则
   * 
   * @param request - CreateResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceRuleResponse
   */
  async createResourceRuleWithOptions(request: $_model.CreateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!$dara.isNull(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!$dara.isNull(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    if (!$dara.isNull(request.ruleItems)) {
      body["RuleItems"] = request.ruleItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceRuleResponse({}));
  }

  /**
   * 创建资源规则
   * 
   * @param request - CreateResourceRuleRequest
   * @returns CreateResourceRuleResponse
   */
  async createResourceRule(request: $_model.CreateResourceRuleRequest): Promise<$_model.CreateResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源规则条目
   * 
   * @param request - CreateResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceRuleItemResponse
   */
  async createResourceRuleItemWithOptions(ResourceRuleId: string, request: $_model.CreateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceRuleItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceRuleItemResponse({}));
  }

  /**
   * 创建资源规则条目
   * 
   * @param request - CreateResourceRuleItemRequest
   * @returns CreateResourceRuleItemResponse
   */
  async createResourceRuleItem(ResourceRuleId: string, request: $_model.CreateResourceRuleItemRequest): Promise<$_model.CreateResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleItemWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 创建样本一致性任务
   * 
   * @param request - CreateSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleConsistencyJobResponse
   */
  async createSampleConsistencyJobWithOptions(request: $_model.CreateSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleConsistencyJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.easModelServiceName)) {
      body["EasModelServiceName"] = request.easModelServiceName;
    }

    if (!$dara.isNull(request.featureSaveResourceId)) {
      body["FeatureSaveResourceId"] = request.featureSaveResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.partitionField)) {
      body["PartitionField"] = request.partitionField;
    }

    if (!$dara.isNull(request.partitionFieldFormat)) {
      body["PartitionFieldFormat"] = request.partitionFieldFormat;
    }

    if (!$dara.isNull(request.requestIdField)) {
      body["RequestIdField"] = request.requestIdField;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sampleTableName)) {
      body["SampleTableName"] = request.sampleTableName;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleConsistencyJobResponse({}));
  }

  /**
   * 创建样本一致性任务
   * 
   * @param request - CreateSampleConsistencyJobRequest
   * @returns CreateSampleConsistencyJobResponse
   */
  async createSampleConsistencyJob(request: $_model.CreateSampleConsistencyJobRequest): Promise<$_model.CreateSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSampleConsistencyJobWithOptions(request, headers, runtime);
  }

  /**
   * Creates a scene for metric and experiment analysis.
   * 
   * @param request - CreateSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSceneResponse
   */
  async createSceneWithOptions(request: $_model.CreateSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateSceneResponse({}));
  }

  /**
   * Creates a scene for metric and experiment analysis.
   * 
   * @param request - CreateSceneRequest
   * @returns CreateSceneResponse
   */
  async createScene(request: $_model.CreateSceneRequest): Promise<$_model.CreateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(request, headers, runtime);
  }

  /**
   * Creates a sub-crowd for a specified crowd.
   * 
   * @param request - CreateSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubCrowdResponse
   */
  async createSubCrowdWithOptions(CrowdId: string, request: $_model.CreateSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubCrowdResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubCrowdResponse({}));
  }

  /**
   * Creates a sub-crowd for a specified crowd.
   * 
   * @param request - CreateSubCrowdRequest
   * @returns CreateSubCrowdResponse
   */
  async createSubCrowd(CrowdId: string, request: $_model.CreateSubCrowdRequest): Promise<$_model.CreateSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * Creates a data table.
   * 
   * @param request - CreateTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableMetaResponse
   */
  async createTableMetaWithOptions(request: $_model.CreateTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      body["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableMetaResponse({}));
  }

  /**
   * Creates a data table.
   * 
   * @param request - CreateTableMetaRequest
   * @returns CreateTableMetaResponse
   */
  async createTableMeta(request: $_model.CreateTableMetaRequest): Promise<$_model.CreateTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableMetaWithOptions(request, headers, runtime);
  }

  /**
   * Creates a new traffic control target and sets its parameters, such as the item condition, event, and value.
   * 
   * @remarks
   * ## Usage notes
   * - The `ItemConditionType` parameter supports two formats: array format (Array) and expression format (Expression). Based on the format you select, you must provide either `ItemConditionArray` or `ItemConditionExpress`.
   * - The `StatisPeriod` parameter defaults to daily. For hourly statistics, you must set this parameter explicitly.
   * - The `ToleranceValue` and `NewProductRegulation` parameters are optional.
   * - The `Status` parameter controls whether a new traffic control target takes effect immediately. By default, new targets are inactive.
   * 
   * @param request - CreateTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficControlTargetResponse
   */
  async createTrafficControlTargetWithOptions(request: $_model.CreateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.event)) {
      body["Event"] = request.event;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!$dara.isNull(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!$dara.isNull(request.trafficControlTaskId)) {
      body["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrafficControlTargetResponse({}));
  }

  /**
   * Creates a new traffic control target and sets its parameters, such as the item condition, event, and value.
   * 
   * @remarks
   * ## Usage notes
   * - The `ItemConditionType` parameter supports two formats: array format (Array) and expression format (Expression). Based on the format you select, you must provide either `ItemConditionArray` or `ItemConditionExpress`.
   * - The `StatisPeriod` parameter defaults to daily. For hourly statistics, you must set this parameter explicitly.
   * - The `ToleranceValue` and `NewProductRegulation` parameters are optional.
   * - The `Status` parameter controls whether a new traffic control target takes effect immediately. By default, new targets are inactive.
   * 
   * @param request - CreateTrafficControlTargetRequest
   * @returns CreateTrafficControlTargetResponse
   */
  async createTrafficControlTarget(request: $_model.CreateTrafficControlTargetRequest): Promise<$_model.CreateTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTargetWithOptions(request, headers, runtime);
  }

  /**
   * Creates a new traffic control task with multiple conditions and target configurations.
   * 
   * @remarks
   * ## Request
   * - Use this API to create a new traffic control task. You can define a traffic control policy for different scenarios, time ranges, and conditions for users or items.
   * - The `ExecutionTime` parameter specifies the execution time mode for the task. If you select the `TimeRange` mode, you must provide both the `StartTime` and `EndTime` parameters.
   * - The `TrafficControlTargets` parameter is required. For each traffic control target, you must specify its name, time range, event type, and expected value.
   * - You can use the `UserConditionType` and `ItemConditionType` parameters to define conditions for the target user group and items.
   * - Set the `ControlLogic` parameter to `Guaranteed` for guaranteed control or to `Approach` for approach control.
   * - To configure new product regulation, use the `NewProductRegulation` field.
   * 
   * @param request - CreateTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficControlTaskResponse
   */
  async createTrafficControlTaskWithOptions(request: $_model.CreateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!$dara.isNull(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!$dara.isNull(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!$dara.isNull(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.effectiveSceneIds)) {
      body["EffectiveSceneIds"] = request.effectiveSceneIds;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.flinkResourceId)) {
      body["FlinkResourceId"] = request.flinkResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.preExperimentIds)) {
      body["PreExperimentIds"] = request.preExperimentIds;
    }

    if (!$dara.isNull(request.prodExperimentIds)) {
      body["ProdExperimentIds"] = request.prodExperimentIds;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceIds)) {
      body["ServiceIds"] = request.serviceIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisBehaviorConditionArray)) {
      body["StatisBehaviorConditionArray"] = request.statisBehaviorConditionArray;
    }

    if (!$dara.isNull(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!$dara.isNull(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!$dara.isNull(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!$dara.isNull(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!$dara.isNull(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!$dara.isNull(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!$dara.isNull(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrafficControlTaskResponse({}));
  }

  /**
   * Creates a new traffic control task with multiple conditions and target configurations.
   * 
   * @remarks
   * ## Request
   * - Use this API to create a new traffic control task. You can define a traffic control policy for different scenarios, time ranges, and conditions for users or items.
   * - The `ExecutionTime` parameter specifies the execution time mode for the task. If you select the `TimeRange` mode, you must provide both the `StartTime` and `EndTime` parameters.
   * - The `TrafficControlTargets` parameter is required. For each traffic control target, you must specify its name, time range, event type, and expected value.
   * - You can use the `UserConditionType` and `ItemConditionType` parameters to define conditions for the target user group and items.
   * - Set the `ControlLogic` parameter to `Guaranteed` for guaranteed control or to `Approach` for approach control.
   * - To configure new product regulation, use the `NewProductRegulation` field.
   * 
   * @param request - CreateTrafficControlTaskRequest
   * @returns CreateTrafficControlTaskResponse
   */
  async createTrafficControlTask(request: $_model.CreateTrafficControlTaskRequest): Promise<$_model.CreateTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTaskWithOptions(request, headers, runtime);
  }

  /**
   * 对指定资源规则中的计算公式进行调试
   * 
   * @param tmpReq - DebugResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugResourceRuleResponse
   */
  async debugResourceRuleWithOptions(ResourceRuleId: string, tmpReq: $_model.DebugResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DebugResourceRuleResponse> {
    tmpReq.validate();
    let request = new $_model.DebugResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/action/debug`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.DebugResourceRuleResponse({}));
  }

  /**
   * 对指定资源规则中的计算公式进行调试
   * 
   * @param request - DebugResourceRuleRequest
   * @returns DebugResourceRuleResponse
   */
  async debugResourceRule(ResourceRuleId: string, request: $_model.DebugResourceRuleRequest): Promise<$_model.DebugResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * Deletes the specified A/B test metric.
   * 
   * @param request - DeleteABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABMetricResponse
   */
  async deleteABMetricWithOptions(ABMetricId: string, request: $_model.DeleteABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteABMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteABMetricResponse>(await this.callApi(params, req, runtime), new $_model.DeleteABMetricResponse({}));
  }

  /**
   * Deletes the specified A/B test metric.
   * 
   * @param request - DeleteABMetricRequest
   * @returns DeleteABMetricResponse
   */
  async deleteABMetric(ABMetricId: string, request: $_model.DeleteABMetricRequest): Promise<$_model.DeleteABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * Deletes an A/B test metric group.
   * 
   * @param request - DeleteABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABMetricGroupResponse
   */
  async deleteABMetricGroupWithOptions(ABMetricGroupId: string, request: $_model.DeleteABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteABMetricGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteABMetricGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteABMetricGroupResponse({}));
  }

  /**
   * Deletes an A/B test metric group.
   * 
   * @param request - DeleteABMetricGroupRequest
   * @returns DeleteABMetricGroupResponse
   */
  async deleteABMetricGroup(ABMetricGroupId: string, request: $_model.DeleteABMetricGroupRequest): Promise<$_model.DeleteABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * Delete the specified audience.
   * 
   * @param request - DeleteCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCrowdResponse
   */
  async deleteCrowdWithOptions(CrowdId: string, request: $_model.DeleteCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCrowdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCrowdResponse({}));
  }

  /**
   * Delete the specified audience.
   * 
   * @param request - DeleteCrowdRequest
   * @returns DeleteCrowdResponse
   */
  async deleteCrowd(CrowdId: string, request: $_model.DeleteCrowdRequest): Promise<$_model.DeleteCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * Deletes a data diagnosis configuration using the specified DataDiagnosisId and InstanceId.
   * 
   * @remarks
   * ## Description
   * Ensure you provide the correct `DataDiagnosisId` and `InstanceId` to avoid accidental deletion.
   * 
   * @param request - DeleteDataDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataDiagnosisResponse
   */
  async deleteDataDiagnosisWithOptions(DataDiagnosisId: string, request: $_model.DeleteDataDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataDiagnosis",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses/${$dara.URL.percentEncode(DataDiagnosisId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataDiagnosisResponse({}));
  }

  /**
   * Deletes a data diagnosis configuration using the specified DataDiagnosisId and InstanceId.
   * 
   * @remarks
   * ## Description
   * Ensure you provide the correct `DataDiagnosisId` and `InstanceId` to avoid accidental deletion.
   * 
   * @param request - DeleteDataDiagnosisRequest
   * @returns DeleteDataDiagnosisResponse
   */
  async deleteDataDiagnosis(DataDiagnosisId: string, request: $_model.DeleteDataDiagnosisRequest): Promise<$_model.DeleteDataDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataDiagnosisWithOptions(DataDiagnosisId, request, headers, runtime);
  }

  /**
   * Deletes a specified engine configuration.
   * 
   * @remarks
   * Deletes a specified engine configuration.
   * 
   * @param request - DeleteEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEngineConfigResponse
   */
  async deleteEngineConfigWithOptions(EngineConfigId: string, request: $_model.DeleteEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEngineConfigResponse({}));
  }

  /**
   * Deletes a specified engine configuration.
   * 
   * @remarks
   * Deletes a specified engine configuration.
   * 
   * @param request - DeleteEngineConfigRequest
   * @returns DeleteEngineConfigResponse
   */
  async deleteEngineConfig(EngineConfigId: string, request: $_model.DeleteEngineConfigRequest): Promise<$_model.DeleteEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * Delete the specified experiment.
   * 
   * @param request - DeleteExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, request: $_model.DeleteExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentResponse({}));
  }

  /**
   * Delete the specified experiment.
   * 
   * @param request - DeleteExperimentRequest
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string, request: $_model.DeleteExperimentRequest): Promise<$_model.DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Delete the specified experiment group.
   * 
   * @param request - DeleteExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentGroupResponse
   */
  async deleteExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.DeleteExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentGroupResponse({}));
  }

  /**
   * Delete the specified experiment group.
   * 
   * @param request - DeleteExperimentGroupRequest
   * @returns DeleteExperimentGroupResponse
   */
  async deleteExperimentGroup(ExperimentGroupId: string, request: $_model.DeleteExperimentGroupRequest): Promise<$_model.DeleteExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Deletes a configuration resource from an instance.
   * 
   * @param request - DeleteInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResourceResponse
   */
  async deleteInstanceResourceWithOptions(InstanceId: string, ResourceId: string, request: $_model.DeleteInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResourceResponse({}));
  }

  /**
   * Deletes a configuration resource from an instance.
   * 
   * @param request - DeleteInstanceResourceRequest
   * @returns DeleteInstanceResourceResponse
   */
  async deleteInstanceResource(InstanceId: string, ResourceId: string, request: $_model.DeleteInstanceResourceRequest): Promise<$_model.DeleteInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * Delete the specified Lab.
   * 
   * @param request - DeleteLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLaboratoryResponse
   */
  async deleteLaboratoryWithOptions(LaboratoryId: string, request: $_model.DeleteLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLaboratoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLaboratoryResponse({}));
  }

  /**
   * Delete the specified Lab.
   * 
   * @param request - DeleteLaboratoryRequest
   * @returns DeleteLaboratoryResponse
   */
  async deleteLaboratory(LaboratoryId: string, request: $_model.DeleteLaboratoryRequest): Promise<$_model.DeleteLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * Delete the specified layer.
   * 
   * @param request - DeleteLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayerResponse
   */
  async deleteLayerWithOptions(LayerId: string, request: $_model.DeleteLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLayerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLayerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLayerResponse({}));
  }

  /**
   * Delete the specified layer.
   * 
   * @param request - DeleteLayerRequest
   * @returns DeleteLayerResponse
   */
  async deleteLayer(LayerId: string, request: $_model.DeleteLayerRequest): Promise<$_model.DeleteLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * Delete the specified parameter.
   * 
   * @param request - DeleteParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParamResponse
   */
  async deleteParamWithOptions(ParamId: string, request: $_model.DeleteParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${$dara.URL.percentEncode(ParamId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParamResponse({}));
  }

  /**
   * Delete the specified parameter.
   * 
   * @param request - DeleteParamRequest
   * @returns DeleteParamResponse
   */
  async deleteParam(ParamId: string, request: $_model.DeleteParamRequest): Promise<$_model.DeleteParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * Deletes a recall management service.
   * 
   * @remarks
   * ## Request description
   * This operation deletes a recall management service based on the RecallManagementServiceId and InstanceId. Before you call this API, ensure you have the correct information for the service to be deleted.
   * 
   * @param request - DeleteRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecallManagementServiceResponse
   */
  async deleteRecallManagementServiceWithOptions(RecallManagementServiceId: string, request: $_model.DeleteRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecallManagementServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecallManagementServiceResponse({}));
  }

  /**
   * Deletes a recall management service.
   * 
   * @remarks
   * ## Request description
   * This operation deletes a recall management service based on the RecallManagementServiceId and InstanceId. Before you call this API, ensure you have the correct information for the service to be deleted.
   * 
   * @param request - DeleteRecallManagementServiceRequest
   * @returns DeleteRecallManagementServiceResponse
   */
  async deleteRecallManagementService(RecallManagementServiceId: string, request: $_model.DeleteRecallManagementServiceRequest): Promise<$_model.DeleteRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRecallManagementServiceWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Deletes a specified version of a recall management service.
   * 
   * @remarks
   * ## Request
   * This operation deletes a specific version of a recall management service. You must provide the recall management service ID, the recall management service version ID, and the instance ID. This operation is irreversible, so back up all critical data before proceeding.
   * 
   * @param request - DeleteRecallManagementServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecallManagementServiceVersionResponse
   */
  async deleteRecallManagementServiceVersionWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.DeleteRecallManagementServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecallManagementServiceVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecallManagementServiceVersion",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecallManagementServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecallManagementServiceVersionResponse({}));
  }

  /**
   * Deletes a specified version of a recall management service.
   * 
   * @remarks
   * ## Request
   * This operation deletes a specific version of a recall management service. You must provide the recall management service ID, the recall management service version ID, and the instance ID. This operation is irreversible, so back up all critical data before proceeding.
   * 
   * @param request - DeleteRecallManagementServiceVersionRequest
   * @returns DeleteRecallManagementServiceVersionResponse
   */
  async deleteRecallManagementServiceVersion(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.DeleteRecallManagementServiceVersionRequest): Promise<$_model.DeleteRecallManagementServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRecallManagementServiceVersionWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, request, headers, runtime);
  }

  /**
   * Deletes the specified recall management service version configuration.
   * 
   * @remarks
   * ## Usage notes
   * - Specify the recall management service ID, recall management version ID, and recall management configuration ID.
   * - `InstanceId` is a required query parameter.
   * - The request fails if any of the specified IDs are invalid.
   * 
   * @param request - DeleteRecallManagementServiceVersionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecallManagementServiceVersionConfigResponse
   */
  async deleteRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.DeleteRecallManagementServiceVersionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecallManagementServiceVersionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecallManagementServiceVersionConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}/configs/${$dara.URL.percentEncode(RecallManagementServiceVersionConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecallManagementServiceVersionConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecallManagementServiceVersionConfigResponse({}));
  }

  /**
   * Deletes the specified recall management service version configuration.
   * 
   * @remarks
   * ## Usage notes
   * - Specify the recall management service ID, recall management version ID, and recall management configuration ID.
   * - `InstanceId` is a required query parameter.
   * - The request fails if any of the specified IDs are invalid.
   * 
   * @param request - DeleteRecallManagementServiceVersionConfigRequest
   * @returns DeleteRecallManagementServiceVersionConfigResponse
   */
  async deleteRecallManagementServiceVersionConfig(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.DeleteRecallManagementServiceVersionConfigRequest): Promise<$_model.DeleteRecallManagementServiceVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, RecallManagementServiceVersionConfigId, request, headers, runtime);
  }

  /**
   * This API deletes a recall management table using the specified recall management table ID and instance ID.
   * 
   * @remarks
   * ## Request
   * - The required **path parameter** `RecallManagementTableId` specifies the ID of the recall management table to delete.
   * - The required **query parameter** `InstanceId` specifies the ID of the instance.
   * - A successful operation returns a `RequestId` in the response body for request tracking.
   * 
   * @param request - DeleteRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecallManagementTableResponse
   */
  async deleteRecallManagementTableWithOptions(RecallManagementTableId: string, request: $_model.DeleteRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecallManagementTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecallManagementTableResponse({}));
  }

  /**
   * This API deletes a recall management table using the specified recall management table ID and instance ID.
   * 
   * @remarks
   * ## Request
   * - The required **path parameter** `RecallManagementTableId` specifies the ID of the recall management table to delete.
   * - The required **query parameter** `InstanceId` specifies the ID of the instance.
   * - A successful operation returns a `RequestId` in the response body for request tracking.
   * 
   * @param request - DeleteRecallManagementTableRequest
   * @returns DeleteRecallManagementTableResponse
   */
  async deleteRecallManagementTable(RecallManagementTableId: string, request: $_model.DeleteRecallManagementTableRequest): Promise<$_model.DeleteRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRecallManagementTableWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * 删除资源规则
   * 
   * @param request - DeleteResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceRuleResponse
   */
  async deleteResourceRuleWithOptions(ResourceRuleId: string, request: $_model.DeleteResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceRuleResponse({}));
  }

  /**
   * 删除资源规则
   * 
   * @param request - DeleteResourceRuleRequest
   * @returns DeleteResourceRuleResponse
   */
  async deleteResourceRule(ResourceRuleId: string, request: $_model.DeleteResourceRuleRequest): Promise<$_model.DeleteResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 删除资源规则条目
   * 
   * @param request - DeleteResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: $_model.DeleteResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceRuleItemResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items/${$dara.URL.percentEncode(ResourceRuleItemId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceRuleItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceRuleItemResponse({}));
  }

  /**
   * 删除资源规则条目
   * 
   * @param request - DeleteResourceRuleItemRequest
   * @returns DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: $_model.DeleteResourceRuleItemRequest): Promise<$_model.DeleteResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * 删除指定的样本一致性任务
   * 
   * @param request - DeleteSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSampleConsistencyJobResponse
   */
  async deleteSampleConsistencyJobWithOptions(SampleConsistencyJobId: string, request: $_model.DeleteSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSampleConsistencyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSampleConsistencyJobResponse({}));
  }

  /**
   * 删除指定的样本一致性任务
   * 
   * @param request - DeleteSampleConsistencyJobRequest
   * @returns DeleteSampleConsistencyJobResponse
   */
  async deleteSampleConsistencyJob(SampleConsistencyJobId: string, request: $_model.DeleteSampleConsistencyJobRequest): Promise<$_model.DeleteSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSampleConsistencyJobWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Delete the specified scenario.
   * 
   * @param request - DeleteSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneResponse
   */
  async deleteSceneWithOptions(SceneId: string, request: $_model.DeleteSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSceneResponse({}));
  }

  /**
   * Delete the specified scenario.
   * 
   * @param request - DeleteSceneRequest
   * @returns DeleteSceneResponse
   */
  async deleteScene(SceneId: string, request: $_model.DeleteSceneRequest): Promise<$_model.DeleteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * Deletes the specified subcrowd.
   * 
   * @param request - DeleteSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubCrowdResponse
   */
  async deleteSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: $_model.DeleteSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds/${$dara.URL.percentEncode(SubCrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubCrowdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubCrowdResponse({}));
  }

  /**
   * Deletes the specified subcrowd.
   * 
   * @param request - DeleteSubCrowdRequest
   * @returns DeleteSubCrowdResponse
   */
  async deleteSubCrowd(CrowdId: string, SubCrowdId: string, request: $_model.DeleteSubCrowdRequest): Promise<$_model.DeleteSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * Deletes a data table.
   * 
   * @param request - DeleteTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableMetaResponse
   */
  async deleteTableMetaWithOptions(TableMetaId: string, request: $_model.DeleteTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableMetaResponse({}));
  }

  /**
   * Deletes a data table.
   * 
   * @param request - DeleteTableMetaRequest
   * @returns DeleteTableMetaResponse
   */
  async deleteTableMeta(TableMetaId: string, request: $_model.DeleteTableMetaRequest): Promise<$_model.DeleteTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * Deletes the specified traffic control target.
   * 
   * @remarks
   * ## Request
   * - **TrafficControlTargetId** is a required path parameter that specifies the traffic control target to delete.
   * - **InstanceId** is a required query parameter that specifies the instance ID for this operation.
   * - A successful response includes a `RequestId` field to track the request.
   * 
   * @param request - DeleteTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.DeleteTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrafficControlTargetResponse({}));
  }

  /**
   * Deletes the specified traffic control target.
   * 
   * @remarks
   * ## Request
   * - **TrafficControlTargetId** is a required path parameter that specifies the traffic control target to delete.
   * - **InstanceId** is a required query parameter that specifies the instance ID for this operation.
   * - A successful response includes a `RequestId` field to track the request.
   * 
   * @param request - DeleteTrafficControlTargetRequest
   * @returns DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTarget(TrafficControlTargetId: string, request: $_model.DeleteTrafficControlTargetRequest): Promise<$_model.DeleteTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Deletes a specified traffic control task.
   * 
   * @remarks
   * ## Description
   * - This API uses `TrafficControlTaskId` and `InstanceId` to delete a traffic control task.
   * - Ensure the `TrafficControlTaskId` and `InstanceId` are correct, or the operation may fail.
   * - This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.DeleteTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrafficControlTaskResponse({}));
  }

  /**
   * Deletes a specified traffic control task.
   * 
   * @remarks
   * ## Description
   * - This API uses `TrafficControlTaskId` and `InstanceId` to delete a traffic control task.
   * - Ensure the `TrafficControlTaskId` and `InstanceId` are correct, or the operation may fail.
   * - This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteTrafficControlTaskRequest
   * @returns DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTask(TrafficControlTaskId: string, request: $_model.DeleteTrafficControlTaskRequest): Promise<$_model.DeleteTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Deploys Flink code for a traffic control task in a specified environment.
   * 
   * @remarks
   * ## Overview
   * - This API deploys Flink code for a specific traffic control task.
   * - `TrafficControlTaskId` is a path parameter and requires a valid task ID.
   * - `InstanceId` and `Environment` are required request body parameters that specify the instance ID and the target deployment environment.
   * - The optional `RetryDeploy` parameter specifies whether to automatically retry the deployment on failure. The default value is `false`.
   * - The value for `Environment` must be one of the following: Daily, Pre, or Prod.
   * 
   * @param request - DeployTrafficControlTaskCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployTrafficControlTaskCodeResponse
   */
  async deployTrafficControlTaskCodeWithOptions(TrafficControlTaskId: string, request: $_model.DeployTrafficControlTaskCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployTrafficControlTaskCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.retryDeploy)) {
      body["RetryDeploy"] = request.retryDeploy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployTrafficControlTaskCode",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/deploycode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployTrafficControlTaskCodeResponse>(await this.callApi(params, req, runtime), new $_model.DeployTrafficControlTaskCodeResponse({}));
  }

  /**
   * Deploys Flink code for a traffic control task in a specified environment.
   * 
   * @remarks
   * ## Overview
   * - This API deploys Flink code for a specific traffic control task.
   * - `TrafficControlTaskId` is a path parameter and requires a valid task ID.
   * - `InstanceId` and `Environment` are required request body parameters that specify the instance ID and the target deployment environment.
   * - The optional `RetryDeploy` parameter specifies whether to automatically retry the deployment on failure. The default value is `false`.
   * - The value for `Environment` must be one of the following: Daily, Pre, or Prod.
   * 
   * @param request - DeployTrafficControlTaskCodeRequest
   * @returns DeployTrafficControlTaskCodeResponse
   */
  async deployTrafficControlTaskCode(TrafficControlTaskId: string, request: $_model.DeployTrafficControlTaskCodeRequest): Promise<$_model.DeployTrafficControlTaskCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployTrafficControlTaskCodeWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Exports a specified table from the recall engine to a MaxCompute project.
   * 
   * @remarks
   * ## Description
   * Use this API to export a specific table from the recall engine to Alibaba Cloud MaxCompute for further data processing or analysis. Ensure the provided MaxCompute project name, schema, and table name are valid and that you have the required permissions.
   * ### Usage notes
   * - The `Partitions` field must be a JSON object that specifies the table partitions to export.
   * - The request may fail if any required parameters are missing or incorrect.
   * - The export process is asynchronous and may take some time. You can use the returned job ID to track the status of the job.
   * 
   * @param request - ExportRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportRecallManagementTableResponse
   */
  async exportRecallManagementTableWithOptions(RecallManagementTableId: string, request: $_model.ExportRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportRecallManagementTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxcomputeProjectName)) {
      body["MaxcomputeProjectName"] = request.maxcomputeProjectName;
    }

    if (!$dara.isNull(request.maxcomputeSchema)) {
      body["MaxcomputeSchema"] = request.maxcomputeSchema;
    }

    if (!$dara.isNull(request.maxcomputeTableName)) {
      body["MaxcomputeTableName"] = request.maxcomputeTableName;
    }

    if (!$dara.isNull(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    if (!$dara.isNull(request.recallManagementTableVersionId)) {
      body["RecallManagementTableVersionId"] = request.recallManagementTableVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}/action/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.ExportRecallManagementTableResponse({}));
  }

  /**
   * Exports a specified table from the recall engine to a MaxCompute project.
   * 
   * @remarks
   * ## Description
   * Use this API to export a specific table from the recall engine to Alibaba Cloud MaxCompute for further data processing or analysis. Ensure the provided MaxCompute project name, schema, and table name are valid and that you have the required permissions.
   * ### Usage notes
   * - The `Partitions` field must be a JSON object that specifies the table partitions to export.
   * - The request may fail if any required parameters are missing or incorrect.
   * - The export process is asynchronous and may take some time. You can use the returned job ID to track the status of the job.
   * 
   * @param request - ExportRecallManagementTableRequest
   * @returns ExportRecallManagementTableResponse
   */
  async exportRecallManagementTable(RecallManagementTableId: string, request: $_model.ExportRecallManagementTableRequest): Promise<$_model.ExportRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportRecallManagementTableWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * Generates an algorithm customization script.
   * 
   * @param request - GenerateAlgorithmCustomizationScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAlgorithmCustomizationScriptResponse
   */
  async generateAlgorithmCustomizationScriptWithOptions(AlgorithmCustomizationId: string, request: $_model.GenerateAlgorithmCustomizationScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAlgorithmCustomizationScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deployMode)) {
      body["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleFieldTypes)) {
      body["ModuleFieldTypes"] = request.moduleFieldTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAlgorithmCustomizationScript",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithmcustomizations/${$dara.URL.percentEncode(AlgorithmCustomizationId)}/action/generatescript`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAlgorithmCustomizationScriptResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAlgorithmCustomizationScriptResponse({}));
  }

  /**
   * Generates an algorithm customization script.
   * 
   * @param request - GenerateAlgorithmCustomizationScriptRequest
   * @returns GenerateAlgorithmCustomizationScriptResponse
   */
  async generateAlgorithmCustomizationScript(AlgorithmCustomizationId: string, request: $_model.GenerateAlgorithmCustomizationScriptRequest): Promise<$_model.GenerateAlgorithmCustomizationScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateAlgorithmCustomizationScriptWithOptions(AlgorithmCustomizationId, request, headers, runtime);
  }

  /**
   * Generates Flink code for a specified traffic control task ID and instance information.
   * 
   * @remarks
   * ## Description
   * - This API generates Flink code for a specified traffic control task ID, instance ID, and environment type.
   * - The `Environment` parameter accepts three values: `Daily` for the daily environment, `Pre` for the pre-release environment, and `Prod` for the production environment.
   * - Check the `PreNeedConfig` field in the response. A `true` value indicates that necessary configuration information might be missing in the pre-release environment. If this occurs, add or adjust the required settings.
   * 
   * @param request - GenerateTrafficControlTaskCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId: string, request: $_model.GenerateTrafficControlTaskCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTrafficControlTaskCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTrafficControlTaskCode",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/generatecode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTrafficControlTaskCodeResponse>(await this.callApi(params, req, runtime), new $_model.GenerateTrafficControlTaskCodeResponse({}));
  }

  /**
   * Generates Flink code for a specified traffic control task ID and instance information.
   * 
   * @remarks
   * ## Description
   * - This API generates Flink code for a specified traffic control task ID, instance ID, and environment type.
   * - The `Environment` parameter accepts three values: `Daily` for the daily environment, `Pre` for the pre-release environment, and `Prod` for the production environment.
   * - Check the `PreNeedConfig` field in the response. A `true` value indicates that necessary configuration information might be missing in the pre-release environment. If this occurs, add or adjust the required settings.
   * 
   * @param request - GenerateTrafficControlTaskCodeRequest
   * @returns GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCode(TrafficControlTaskId: string, request: $_model.GenerateTrafficControlTaskCodeRequest): Promise<$_model.GenerateTrafficControlTaskCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 产生流量调控的相关召回配置
   * 
   * @param request - GenerateTrafficControlTaskConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId: string, request: $_model.GenerateTrafficControlTaskConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTrafficControlTaskConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTrafficControlTaskConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/generateconfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTrafficControlTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.GenerateTrafficControlTaskConfigResponse({}));
  }

  /**
   * 产生流量调控的相关召回配置
   * 
   * @param request - GenerateTrafficControlTaskConfigRequest
   * @returns GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfig(TrafficControlTaskId: string, request: $_model.GenerateTrafficControlTaskConfigRequest): Promise<$_model.GenerateTrafficControlTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Gets the details of an A/B metric.
   * 
   * @param request - GetABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetABMetricResponse
   */
  async getABMetricWithOptions(ABMetricId: string, request: $_model.GetABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetABMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetABMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetABMetricResponse({}));
  }

  /**
   * Gets the details of an A/B metric.
   * 
   * @param request - GetABMetricRequest
   * @returns GetABMetricResponse
   */
  async getABMetric(ABMetricId: string, request: $_model.GetABMetricRequest): Promise<$_model.GetABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an A/B testing metric group.
   * 
   * @param request - GetABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetABMetricGroupResponse
   */
  async getABMetricGroupWithOptions(ABMetricGroupId: string, request: $_model.GetABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetABMetricGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetABMetricGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetABMetricGroupResponse({}));
  }

  /**
   * Retrieves the details of an A/B testing metric group.
   * 
   * @param request - GetABMetricGroupRequest
   * @returns GetABMetricGroupResponse
   */
  async getABMetricGroup(ABMetricGroupId: string, request: $_model.GetABMetricGroupRequest): Promise<$_model.GetABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * Gets the details of a specified calculation job.
   * 
   * @param request - GetCalculationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCalculationJobResponse
   */
  async getCalculationJobWithOptions(CalculationJobId: string, request: $_model.GetCalculationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCalculationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCalculationJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/calculationjobs/${$dara.URL.percentEncode(CalculationJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCalculationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetCalculationJobResponse({}));
  }

  /**
   * Gets the details of a specified calculation job.
   * 
   * @param request - GetCalculationJobRequest
   * @returns GetCalculationJobResponse
   */
  async getCalculationJob(CalculationJobId: string, request: $_model.GetCalculationJobRequest): Promise<$_model.GetCalculationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCalculationJobWithOptions(CalculationJobId, request, headers, runtime);
  }

  /**
   * Retrieves details of a data diagnosis task using its data diagnosis task ID and instance ID.
   * 
   * @remarks
   * ## Request
   * - This API retrieves the details of a specific data diagnosis task using the provided `DataDiagnosisId` (data diagnosis task configuration ID) and `InstanceId` (instance ID).
   * - The `CycleTime` field specifies the time for periodic execution. If this field is empty, the task does not execute periodically.
   * - The value of `Type` determines the content of the `Config` field. For details about the required configuration for each type, see the relevant documentation.
   * - `GmtCreateTime` and `GmtModifiedTime` are timestamps for the record\\"s creation and modification times, respectively.
   * 
   * @param request - GetDataDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataDiagnosisResponse
   */
  async getDataDiagnosisWithOptions(DataDiagnosisId: string, request: $_model.GetDataDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataDiagnosis",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses/${$dara.URL.percentEncode(DataDiagnosisId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.GetDataDiagnosisResponse({}));
  }

  /**
   * Retrieves details of a data diagnosis task using its data diagnosis task ID and instance ID.
   * 
   * @remarks
   * ## Request
   * - This API retrieves the details of a specific data diagnosis task using the provided `DataDiagnosisId` (data diagnosis task configuration ID) and `InstanceId` (instance ID).
   * - The `CycleTime` field specifies the time for periodic execution. If this field is empty, the task does not execute periodically.
   * - The value of `Type` determines the content of the `Config` field. For details about the required configuration for each type, see the relevant documentation.
   * - `GmtCreateTime` and `GmtModifiedTime` are timestamps for the record\\"s creation and modification times, respectively.
   * 
   * @param request - GetDataDiagnosisRequest
   * @returns GetDataDiagnosisResponse
   */
  async getDataDiagnosis(DataDiagnosisId: string, request: $_model.GetDataDiagnosisRequest): Promise<$_model.GetDataDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataDiagnosisWithOptions(DataDiagnosisId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an engine configuration.
   * 
   * @param request - GetEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEngineConfigResponse
   */
  async getEngineConfigWithOptions(EngineConfigId: string, request: $_model.GetEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetEngineConfigResponse({}));
  }

  /**
   * Retrieves the details of an engine configuration.
   * 
   * @param request - GetEngineConfigRequest
   * @returns GetEngineConfigResponse
   */
  async getEngineConfig(EngineConfigId: string, request: $_model.GetEngineConfigRequest): Promise<$_model.GetEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified experiment.
   * 
   * @param request - GetExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: $_model.GetExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentResponse({}));
  }

  /**
   * Retrieves the details of a specified experiment.
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: $_model.GetExperimentRequest): Promise<$_model.GetExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Retrieves details for a specified experiment group.
   * 
   * @param request - GetExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentGroupResponse
   */
  async getExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.GetExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentGroupResponse({}));
  }

  /**
   * Retrieves details for a specified experiment group.
   * 
   * @param request - GetExperimentGroupRequest
   * @returns GetExperimentGroupResponse
   */
  async getExperimentGroup(ExperimentGroupId: string, request: $_model.GetExperimentGroupRequest): Promise<$_model.GetExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Gets the details of a feature consistency check job.
   * 
   * @param request - GetFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: $_model.GetFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureConsistencyCheckJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * Gets the details of a feature consistency check job.
   * 
   * @param request - GetFeatureConsistencyCheckJobRequest
   * @returns GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: $_model.GetFeatureConsistencyCheckJobRequest): Promise<$_model.GetFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * Retrieves the configuration details of a feature consistency check task.
   * 
   * @param request - GetFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: $_model.GetFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * Retrieves the configuration details of a feature consistency check task.
   * 
   * @param request - GetFeatureConsistencyCheckJobConfigRequest
   * @returns GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: $_model.GetFeatureConsistencyCheckJobConfigRequest): Promise<$_model.GetFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * Gets the details of a specified PAI-REC instance.
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, request: $_model.GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Gets the details of a specified PAI-REC instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string, request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specific resource in a specified instance.
   * 
   * @param request - GetInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResourceResponse
   */
  async getInstanceResourceWithOptions(InstanceId: string, ResourceId: string, request: $_model.GetInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResourceResponse({}));
  }

  /**
   * Retrieves the details of a specific resource in a specified instance.
   * 
   * @param request - GetInstanceResourceRequest
   * @returns GetInstanceResourceResponse
   */
  async getInstanceResource(InstanceId: string, ResourceId: string, request: $_model.GetInstanceResourceRequest): Promise<$_model.GetInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * Retrieves the list of data tables under a data source.
   * 
   * @param request - GetInstanceResourceTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResourceTableResponse
   */
  async getInstanceResourceTableWithOptions(InstanceId: string, ResourceId: string, TableName: string, request: $_model.GetInstanceResourceTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResourceTableResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceResourceTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}/tables/${$dara.URL.percentEncode(TableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResourceTableResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResourceTableResponse({}));
  }

  /**
   * Retrieves the list of data tables under a data source.
   * 
   * @param request - GetInstanceResourceTableRequest
   * @returns GetInstanceResourceTableResponse
   */
  async getInstanceResourceTable(InstanceId: string, ResourceId: string, TableName: string, request: $_model.GetInstanceResourceTableRequest): Promise<$_model.GetInstanceResourceTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceTableWithOptions(InstanceId, ResourceId, TableName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified laboratory.
   * 
   * @param request - GetLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLaboratoryResponse
   */
  async getLaboratoryWithOptions(LaboratoryId: string, request: $_model.GetLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLaboratoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.GetLaboratoryResponse({}));
  }

  /**
   * Retrieves the details of a specified laboratory.
   * 
   * @param request - GetLaboratoryRequest
   * @returns GetLaboratoryResponse
   */
  async getLaboratory(LaboratoryId: string, request: $_model.GetLaboratoryRequest): Promise<$_model.GetLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified layer.
   * 
   * @param request - GetLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerResponse
   */
  async getLayerWithOptions(LayerId: string, request: $_model.GetLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLayerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLayerResponse>(await this.callApi(params, req, runtime), new $_model.GetLayerResponse({}));
  }

  /**
   * Retrieves the details of a specified layer.
   * 
   * @param request - GetLayerRequest
   * @returns GetLayerResponse
   */
  async getLayer(LayerId: string, request: $_model.GetLayerRequest): Promise<$_model.GetLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * Retrieves the recall management configuration.
   * 
   * @param request - GetRecallManagementConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementConfigResponse
   */
  async getRecallManagementConfigWithOptions(request: $_model.GetRecallManagementConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementConfigResponse({}));
  }

  /**
   * Retrieves the recall management configuration.
   * 
   * @param request - GetRecallManagementConfigRequest
   * @returns GetRecallManagementConfigResponse
   */
  async getRecallManagementConfig(request: $_model.GetRecallManagementConfigRequest): Promise<$_model.GetRecallManagementConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementConfigWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of a specific recall management job, including its status and log.
   * 
   * @remarks
   * ## Description
   * Retrieves the details of a specific recall management job using its `RecallManagementJobId` and `InstanceId`. The response includes the job\\"s status (such as Init, Running, Success, or Failed), start and end times, related table information, and operation log. To make a request, specify the `RecallManagementJobId` as a path parameter and the `InstanceId` as a query parameter.
   * 
   * @param request - GetRecallManagementJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementJobResponse
   */
  async getRecallManagementJobWithOptions(RecallManagementJobId: string, request: $_model.GetRecallManagementJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementjobs/${$dara.URL.percentEncode(RecallManagementJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementJobResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementJobResponse({}));
  }

  /**
   * Retrieves the details of a specific recall management job, including its status and log.
   * 
   * @remarks
   * ## Description
   * Retrieves the details of a specific recall management job using its `RecallManagementJobId` and `InstanceId`. The response includes the job\\"s status (such as Init, Running, Success, or Failed), start and end times, related table information, and operation log. To make a request, specify the `RecallManagementJobId` as a path parameter and the `InstanceId` as a query parameter.
   * 
   * @param request - GetRecallManagementJobRequest
   * @returns GetRecallManagementJobResponse
   */
  async getRecallManagementJob(RecallManagementJobId: string, request: $_model.GetRecallManagementJobRequest): Promise<$_model.GetRecallManagementJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementJobWithOptions(RecallManagementJobId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified recall management service, including its status and version.
   * 
   * @remarks
   * ## Request
   * 
   * @param request - GetRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementServiceResponse
   */
  async getRecallManagementServiceWithOptions(RecallManagementServiceId: string, request: $_model.GetRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementServiceResponse({}));
  }

  /**
   * Retrieves the details of a specified recall management service, including its status and version.
   * 
   * @remarks
   * ## Request
   * 
   * @param request - GetRecallManagementServiceRequest
   * @returns GetRecallManagementServiceResponse
   */
  async getRecallManagementService(RecallManagementServiceId: string, request: $_model.GetRecallManagementServiceRequest): Promise<$_model.GetRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementServiceWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Retrieves the version details of the recall management service.
   * 
   * @param request - GetRecallManagementServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementServiceVersionResponse
   */
  async getRecallManagementServiceVersionWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.GetRecallManagementServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementServiceVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementServiceVersion",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementServiceVersionResponse({}));
  }

  /**
   * Retrieves the version details of the recall management service.
   * 
   * @param request - GetRecallManagementServiceVersionRequest
   * @returns GetRecallManagementServiceVersionResponse
   */
  async getRecallManagementServiceVersion(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, request: $_model.GetRecallManagementServiceVersionRequest): Promise<$_model.GetRecallManagementServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementServiceVersionWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, request, headers, runtime);
  }

  /**
   * This API retrieves the configuration details of a specific recall management service version.
   * 
   * @remarks
   * ## Request
   * Retrieves the configuration details for a specific version of a Recall Management Service by specifying its service, version, and configuration IDs. Ensure the parameter values are correct. The `InstanceId` is crucial for locating the correct instance.
   * - **Note**: All path parameters (`RecallManagementServiceId`, `RecallManagementServiceVersionId`, and `RecallManagementServiceVersionConfigId`) are required and must reference an existing resource.
   * - **Extended configuration**: The response includes the `ExtendedConfig` field, which is used for future extensions and custom settings. Parse this field as needed.
   * 
   * @param request - GetRecallManagementServiceVersionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementServiceVersionConfigResponse
   */
  async getRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.GetRecallManagementServiceVersionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementServiceVersionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementServiceVersionConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}/configs/${$dara.URL.percentEncode(RecallManagementServiceVersionConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementServiceVersionConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementServiceVersionConfigResponse({}));
  }

  /**
   * This API retrieves the configuration details of a specific recall management service version.
   * 
   * @remarks
   * ## Request
   * Retrieves the configuration details for a specific version of a Recall Management Service by specifying its service, version, and configuration IDs. Ensure the parameter values are correct. The `InstanceId` is crucial for locating the correct instance.
   * - **Note**: All path parameters (`RecallManagementServiceId`, `RecallManagementServiceVersionId`, and `RecallManagementServiceVersionConfigId`) are required and must reference an existing resource.
   * - **Extended configuration**: The response includes the `ExtendedConfig` field, which is used for future extensions and custom settings. Parse this field as needed.
   * 
   * @param request - GetRecallManagementServiceVersionConfigRequest
   * @returns GetRecallManagementServiceVersionConfigResponse
   */
  async getRecallManagementServiceVersionConfig(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.GetRecallManagementServiceVersionConfigRequest): Promise<$_model.GetRecallManagementServiceVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, RecallManagementServiceVersionConfigId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified recall management table, including its table structure and configuration.
   * 
   * @remarks
   * ## Request
   * This API retrieves details of a specific recall management table using the provided `RecallManagementTableId` and `InstanceId`. Ensure you provide the correct values for these parameters.
   * - **Note**: The `CanDelete` field indicates whether the data table supports delete operations. Use this value to control delete functionality in your application.
   * - The `Fields` list contains the definitions for each field in the data table, including their name, type, and properties.
   * - To monitor data changes, you can configure or query the fluctuation thresholds for row count and size using the corresponding fields.
   * 
   * @param request - GetRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecallManagementTableResponse
   */
  async getRecallManagementTableWithOptions(RecallManagementTableId: string, request: $_model.GetRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecallManagementTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.GetRecallManagementTableResponse({}));
  }

  /**
   * Retrieves the details of a specified recall management table, including its table structure and configuration.
   * 
   * @remarks
   * ## Request
   * This API retrieves details of a specific recall management table using the provided `RecallManagementTableId` and `InstanceId`. Ensure you provide the correct values for these parameters.
   * - **Note**: The `CanDelete` field indicates whether the data table supports delete operations. Use this value to control delete functionality in your application.
   * - The `Fields` list contains the definitions for each field in the data table, including their name, type, and properties.
   * - To monitor data changes, you can configure or query the fluctuation thresholds for row count and size using the corresponding fields.
   * 
   * @param request - GetRecallManagementTableRequest
   * @returns GetRecallManagementTableResponse
   */
  async getRecallManagementTable(RecallManagementTableId: string, request: $_model.GetRecallManagementTableRequest): Promise<$_model.GetRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRecallManagementTableWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * 获取资源规则详细信息
   * 
   * @param request - GetResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceRuleResponse
   */
  async getResourceRuleWithOptions(ResourceRuleId: string, request: $_model.GetResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceRuleResponse({}));
  }

  /**
   * 获取资源规则详细信息
   * 
   * @param request - GetResourceRuleRequest
   * @returns GetResourceRuleResponse
   */
  async getResourceRule(ResourceRuleId: string, request: $_model.GetResourceRuleRequest): Promise<$_model.GetResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 获取样本一致性任务详细信息
   * 
   * @param request - GetSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSampleConsistencyJobResponse
   */
  async getSampleConsistencyJobWithOptions(SampleConsistencyJobId: string, request: $_model.GetSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSampleConsistencyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.GetSampleConsistencyJobResponse({}));
  }

  /**
   * 获取样本一致性任务详细信息
   * 
   * @param request - GetSampleConsistencyJobRequest
   * @returns GetSampleConsistencyJobResponse
   */
  async getSampleConsistencyJob(SampleConsistencyJobId: string, request: $_model.GetSampleConsistencyJobRequest): Promise<$_model.GetSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSampleConsistencyJobWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified scene.
   * 
   * @param request - GetSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSceneResponse
   */
  async getSceneWithOptions(SceneId: string, request: $_model.GetSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSceneResponse>(await this.callApi(params, req, runtime), new $_model.GetSceneResponse({}));
  }

  /**
   * Retrieves the details of a specified scene.
   * 
   * @param request - GetSceneRequest
   * @returns GetSceneResponse
   */
  async getScene(SceneId: string, request: $_model.GetSceneRequest): Promise<$_model.GetSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a service.
   * 
   * @param request - GetServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(ServiceId: string, request: $_model.GetServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/services/${$dara.URL.percentEncode(ServiceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * Retrieves the details of a service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(ServiceId: string, request: $_model.GetServiceRequest): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(ServiceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a sub-crowd.
   * 
   * @param request - GetSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubCrowdResponse
   */
  async getSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: $_model.GetSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds/${$dara.URL.percentEncode(SubCrowdId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubCrowdResponse>(await this.callApi(params, req, runtime), new $_model.GetSubCrowdResponse({}));
  }

  /**
   * Retrieves the details of a sub-crowd.
   * 
   * @param request - GetSubCrowdRequest
   * @returns GetSubCrowdResponse
   */
  async getSubCrowd(CrowdId: string, SubCrowdId: string, request: $_model.GetSubCrowdRequest): Promise<$_model.GetSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * Returns the details of a table.
   * 
   * @param request - GetTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableMetaResponse
   */
  async getTableMetaWithOptions(TableMetaId: string, request: $_model.GetTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetTableMetaResponse({}));
  }

  /**
   * Returns the details of a table.
   * 
   * @param request - GetTableMetaRequest
   * @returns GetTableMetaResponse
   */
  async getTableMeta(TableMetaId: string, request: $_model.GetTableMetaRequest): Promise<$_model.GetTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * Gets the details of a traffic throttling objective by its ID.
   * 
   * @remarks
   * ## Request
   * Retrieves the detailed configuration of a traffic control target. The configuration includes the target name, time range, and condition settings. This operation requires the `TrafficControlTargetId` and `InstanceId` parameters.
   * 
   * @param request - GetTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTargetResponse
   */
  async getTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.GetTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.GetTrafficControlTargetResponse({}));
  }

  /**
   * Gets the details of a traffic throttling objective by its ID.
   * 
   * @remarks
   * ## Request
   * Retrieves the detailed configuration of a traffic control target. The configuration includes the target name, time range, and condition settings. This operation requires the `TrafficControlTargetId` and `InstanceId` parameters.
   * 
   * @param request - GetTrafficControlTargetRequest
   * @returns GetTrafficControlTargetResponse
   */
  async getTrafficControlTarget(TrafficControlTargetId: string, request: $_model.GetTrafficControlTargetRequest): Promise<$_model.GetTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Queries the details of a traffic control task with a specified ID.
   * 
   * @remarks
   * ## Description
   * - This operation retrieves the details of a specific traffic control task, including but not limited to the task name, description, and status.
   * - TrafficControlTaskId and InstanceId are required parameters that specify the task ID and instance ID to query.
   * - Optional parameters such as Environment, Version, and ControlTargetFilter help refine the request to retrieve more specific task data or version information.
   * - Check the returned data structure, especially the TrafficControlTargets section, which contains multiple control targets and their related properties.
   * 
   * @param request - GetTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTaskResponse
   */
  async getTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.GetTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTrafficControlTaskResponse({}));
  }

  /**
   * Queries the details of a traffic control task with a specified ID.
   * 
   * @remarks
   * ## Description
   * - This operation retrieves the details of a specific traffic control task, including but not limited to the task name, description, and status.
   * - TrafficControlTaskId and InstanceId are required parameters that specify the task ID and instance ID to query.
   * - Optional parameters such as Environment, Version, and ControlTargetFilter help refine the request to retrieve more specific task data or version information.
   * - Check the returned data structure, especially the TrafficControlTargets section, which contains multiple control targets and their related properties.
   * 
   * @param request - GetTrafficControlTaskRequest
   * @returns GetTrafficControlTaskResponse
   */
  async getTrafficControlTask(TrafficControlTaskId: string, request: $_model.GetTrafficControlTaskRequest): Promise<$_model.GetTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Retrieves traffic allocation details for a specific traffic control task.
   * 
   * @remarks
   * ## Description
   * This API retrieves the traffic details for a specific traffic control task. The request must include the `TrafficControlTaskId`, `InstanceId`, and `Environment`.
   * - `TrafficControlTaskId`: The unique identifier for the traffic control task.
   * - `InstanceId`: The instance ID.
   * - `Environment`: The environment type, such as the production environment (Prod).
   * The response includes the traffic allocation for each experiment and traffic control target. This data allows you to analyze and manage your traffic control strategies.
   * 
   * @param request - GetTrafficControlTaskTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: $_model.GetTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrafficControlTaskTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/trafficinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new $_model.GetTrafficControlTaskTrafficResponse({}));
  }

  /**
   * Retrieves traffic allocation details for a specific traffic control task.
   * 
   * @remarks
   * ## Description
   * This API retrieves the traffic details for a specific traffic control task. The request must include the `TrafficControlTaskId`, `InstanceId`, and `Environment`.
   * - `TrafficControlTaskId`: The unique identifier for the traffic control task.
   * - `InstanceId`: The instance ID.
   * - `Environment`: The environment type, such as the production environment (Prod).
   * The response includes the traffic allocation for each experiment and traffic control target. This data allows you to analyze and manage your traffic control strategies.
   * 
   * @param request - GetTrafficControlTaskTrafficRequest
   * @returns GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTraffic(TrafficControlTaskId: string, request: $_model.GetTrafficControlTaskTrafficRequest): Promise<$_model.GetTrafficControlTaskTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Retrieves a list of A/B metric groups.
   * 
   * @param request - ListABMetricGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABMetricGroupsResponse
   */
  async listABMetricGroupsWithOptions(request: $_model.ListABMetricGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABMetricGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABMetricGroups",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABMetricGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListABMetricGroupsResponse({}));
  }

  /**
   * Retrieves a list of A/B metric groups.
   * 
   * @param request - ListABMetricGroupsRequest
   * @returns ListABMetricGroupsResponse
   */
  async listABMetricGroups(request: $_model.ListABMetricGroupsRequest): Promise<$_model.ListABMetricGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Lists A/B testing metrics.
   * 
   * @param request - ListABMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABMetricsResponse
   */
  async listABMetricsWithOptions(request: $_model.ListABMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABMetrics",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListABMetricsResponse({}));
  }

  /**
   * Lists A/B testing metrics.
   * 
   * @param request - ListABMetricsRequest
   * @returns ListABMetricsResponse
   */
  async listABMetrics(request: $_model.ListABMetricsRequest): Promise<$_model.ListABMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricsWithOptions(request, headers, runtime);
  }

  /**
   * Lists calculation jobs.
   * 
   * @param request - ListCalculationJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalculationJobsResponse
   */
  async listCalculationJobsWithOptions(request: $_model.ListCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCalculationJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalculationJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/calculationjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCalculationJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListCalculationJobsResponse({}));
  }

  /**
   * Lists calculation jobs.
   * 
   * @param request - ListCalculationJobsRequest
   * @returns ListCalculationJobsResponse
   */
  async listCalculationJobs(request: $_model.ListCalculationJobsRequest): Promise<$_model.ListCalculationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves all users within a specified crowd, including those in its sub-crowds.
   * 
   * @param request - ListCrowdUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCrowdUsersResponse
   */
  async listCrowdUsersWithOptions(CrowdId: string, request: $_model.ListCrowdUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCrowdUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCrowdUsers",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCrowdUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListCrowdUsersResponse({}));
  }

  /**
   * Retrieves all users within a specified crowd, including those in its sub-crowds.
   * 
   * @param request - ListCrowdUsersRequest
   * @returns ListCrowdUsersResponse
   */
  async listCrowdUsers(CrowdId: string, request: $_model.ListCrowdUsersRequest): Promise<$_model.ListCrowdUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdUsersWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * Lists the Crowds in a specified instance.
   * 
   * @param request - ListCrowdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCrowdsResponse
   */
  async listCrowdsWithOptions(request: $_model.ListCrowdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCrowdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCrowds",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCrowdsResponse>(await this.callApi(params, req, runtime), new $_model.ListCrowdsResponse({}));
  }

  /**
   * Lists the Crowds in a specified instance.
   * 
   * @param request - ListCrowdsRequest
   * @returns ListCrowdsResponse
   */
  async listCrowds(request: $_model.ListCrowdsRequest): Promise<$_model.ListCrowdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the data diagnostic tasks for the specified instance.
   * 
   * @remarks
   * ## Request
   * This API retrieves a list of data diagnosis tasks. It requires the `InstanceId` parameter and accepts optional parameters—such as data diagnosis type, page number, and page size—for filtering and pagination.
   * - The **Types** parameter accepts multiple data diagnosis types, allowing you to view reports for all selected types at once.
   * - To paginate results, use the `PageNumber` and `PageSize` parameters.
   * 
   * @param tmpReq - ListDataDiagnosesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDiagnosesResponse
   */
  async listDataDiagnosesWithOptions(tmpReq: $_model.ListDataDiagnosesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataDiagnosesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataDiagnosesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataDiagnoses",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataDiagnosesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataDiagnosesResponse({}));
  }

  /**
   * Lists the data diagnostic tasks for the specified instance.
   * 
   * @remarks
   * ## Request
   * This API retrieves a list of data diagnosis tasks. It requires the `InstanceId` parameter and accepts optional parameters—such as data diagnosis type, page number, and page size—for filtering and pagination.
   * - The **Types** parameter accepts multiple data diagnosis types, allowing you to view reports for all selected types at once.
   * - To paginate results, use the `PageNumber` and `PageSize` parameters.
   * 
   * @param request - ListDataDiagnosesRequest
   * @returns ListDataDiagnosesResponse
   */
  async listDataDiagnoses(request: $_model.ListDataDiagnosesRequest): Promise<$_model.ListDataDiagnosesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataDiagnosesWithOptions(request, headers, runtime);
  }

  /**
   * Queries data diagnosis jobs for a specified instance.
   * 
   * @remarks
   * ## Description
   * This API retrieves data diagnosis jobs for a specific instance. You can filter the jobs by parameters such as `InstanceId` and `Status`, and use the `PageNumber` and `PageSize` parameters to control pagination.
   * - The **InstanceId** parameter is required and specifies the instance to query.
   * - Optional parameters include **Status**, **Types**, **PageNumber**, and **PageSize**.
   * - Note: If you omit filter conditions, the operation returns all matching data diagnosis jobs.
   * 
   * @param tmpReq - ListDataDiagnosisJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDiagnosisJobsResponse
   */
  async listDataDiagnosisJobsWithOptions(tmpReq: $_model.ListDataDiagnosisJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataDiagnosisJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataDiagnosisJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataDiagnosisJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnosisjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataDiagnosisJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataDiagnosisJobsResponse({}));
  }

  /**
   * Queries data diagnosis jobs for a specified instance.
   * 
   * @remarks
   * ## Description
   * This API retrieves data diagnosis jobs for a specific instance. You can filter the jobs by parameters such as `InstanceId` and `Status`, and use the `PageNumber` and `PageSize` parameters to control pagination.
   * - The **InstanceId** parameter is required and specifies the instance to query.
   * - Optional parameters include **Status**, **Types**, **PageNumber**, and **PageSize**.
   * - Note: If you omit filter conditions, the operation returns all matching data diagnosis jobs.
   * 
   * @param request - ListDataDiagnosisJobsRequest
   * @returns ListDataDiagnosisJobsResponse
   */
  async listDataDiagnosisJobs(request: $_model.ListDataDiagnosisJobsRequest): Promise<$_model.ListDataDiagnosisJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataDiagnosisJobsWithOptions(request, headers, runtime);
  }

  /**
   * Specify parameters to retrieve data diagnosis reports for a specific time range.
   * 
   * @remarks
   * ## Request
   * - This API retrieves data diagnosis reports based on parameters such as the data diagnosis ID, instance ID, and a date range.
   * - The `FeatureName` parameter filters reports by a specific feature, and the `TopN` parameter limits the number of results.
   * - The `RemainRateType` parameter specifies the type of retention rate report, such as a periodic report.
   * - Report content includes item and user change rate analysis, periodic user preference analysis, correlation analysis, basic statistical analysis, and anomaly detection.
   * - Important: All date values must use the `YYYY-MM-DD` format.
   * 
   * @param request - ListDataDiagnosisReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDiagnosisReportsResponse
   */
  async listDataDiagnosisReportsWithOptions(DataDiagnosisId: string, request: $_model.ListDataDiagnosisReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataDiagnosisReportsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remainRateType)) {
      query["RemainRateType"] = request.remainRateType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataDiagnosisReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses/${$dara.URL.percentEncode(DataDiagnosisId)}/reports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataDiagnosisReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataDiagnosisReportsResponse({}));
  }

  /**
   * Specify parameters to retrieve data diagnosis reports for a specific time range.
   * 
   * @remarks
   * ## Request
   * - This API retrieves data diagnosis reports based on parameters such as the data diagnosis ID, instance ID, and a date range.
   * - The `FeatureName` parameter filters reports by a specific feature, and the `TopN` parameter limits the number of results.
   * - The `RemainRateType` parameter specifies the type of retention rate report, such as a periodic report.
   * - Report content includes item and user change rate analysis, periodic user preference analysis, correlation analysis, basic statistical analysis, and anomaly detection.
   * - Important: All date values must use the `YYYY-MM-DD` format.
   * 
   * @param request - ListDataDiagnosisReportsRequest
   * @returns ListDataDiagnosisReportsResponse
   */
  async listDataDiagnosisReports(DataDiagnosisId: string, request: $_model.ListDataDiagnosisReportsRequest): Promise<$_model.ListDataDiagnosisReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataDiagnosisReportsWithOptions(DataDiagnosisId, request, headers, runtime);
  }

  /**
   * Retrieves the list of engine configurations.
   * 
   * @param request - ListEngineConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEngineConfigsResponse
   */
  async listEngineConfigsWithOptions(request: $_model.ListEngineConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEngineConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEngineConfigs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEngineConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListEngineConfigsResponse({}));
  }

  /**
   * Retrieves the list of engine configurations.
   * 
   * @param request - ListEngineConfigsRequest
   * @returns ListEngineConfigsResponse
   */
  async listEngineConfigs(request: $_model.ListEngineConfigsRequest): Promise<$_model.ListEngineConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEngineConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Returns a list of experiment groups.
   * 
   * @param request - ListExperimentGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentGroupsResponse
   */
  async listExperimentGroupsWithOptions(request: $_model.ListExperimentGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      query["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperimentGroups",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentGroupsResponse({}));
  }

  /**
   * Returns a list of experiment groups.
   * 
   * @param request - ListExperimentGroupsRequest
   * @returns ListExperimentGroupsResponse
   */
  async listExperimentGroups(request: $_model.ListExperimentGroupsRequest): Promise<$_model.ListExperimentGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the experiments in the specified experiment group.
   * 
   * @param request - ListExperimentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: $_model.ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperiments",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentsResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentsResponse({}));
  }

  /**
   * Lists the experiments in the specified experiment group.
   * 
   * @param request - ListExperimentsRequest
   * @returns ListExperimentsResponse
   */
  async listExperiments(request: $_model.ListExperimentsRequest): Promise<$_model.ListExperimentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of feature consistency check task configurations.
   * 
   * @param request - ListFeatureConsistencyCheckJobConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigsWithOptions(request: $_model.ListFeatureConsistencyCheckJobConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureConsistencyCheckJobConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobConfigs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureConsistencyCheckJobConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureConsistencyCheckJobConfigsResponse({}));
  }

  /**
   * Retrieves a list of feature consistency check task configurations.
   * 
   * @param request - ListFeatureConsistencyCheckJobConfigsRequest
   * @returns ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigs(request: $_model.ListFeatureConsistencyCheckJobConfigsRequest): Promise<$_model.ListFeatureConsistencyCheckJobConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists feature reports for a feature consistency check job.
   * 
   * @param request - ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId: string, request: $_model.ListFeatureConsistencyCheckJobFeatureReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logItemId)) {
      query["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logUserId)) {
      query["LogUserId"] = request.logUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobFeatureReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/featurereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureConsistencyCheckJobFeatureReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureConsistencyCheckJobFeatureReportsResponse({}));
  }

  /**
   * Lists feature reports for a feature consistency check job.
   * 
   * @param request - ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @returns ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReports(FeatureConsistencyCheckJobId: string, request: $_model.ListFeatureConsistencyCheckJobFeatureReportsRequest): Promise<$_model.ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * Retrieves the score difference reports for a feature consistency check job.
   * 
   * @param tmpReq - ListFeatureConsistencyCheckJobScoreReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId: string, tmpReq: $_model.ListFeatureConsistencyCheckJobScoreReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureConsistencyCheckJobScoreReportsResponse> {
    tmpReq.validate();
    let request = new $_model.ListFeatureConsistencyCheckJobScoreReportsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeRequestIds)) {
      request.excludeRequestIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeRequestIds, "ExcludeRequestIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeRequestIdsShrink)) {
      query["ExcludeRequestIds"] = request.excludeRequestIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobScoreReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/scorereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureConsistencyCheckJobScoreReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureConsistencyCheckJobScoreReportsResponse({}));
  }

  /**
   * Retrieves the score difference reports for a feature consistency check job.
   * 
   * @param request - ListFeatureConsistencyCheckJobScoreReportsRequest
   * @returns ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReports(FeatureConsistencyCheckJobId: string, request: $_model.ListFeatureConsistencyCheckJobScoreReportsRequest): Promise<$_model.ListFeatureConsistencyCheckJobScoreReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * Retrieves a list of feature consistency check jobs.
   * 
   * @param request - ListFeatureConsistencyCheckJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobsWithOptions(request: $_model.ListFeatureConsistencyCheckJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureConsistencyCheckJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureConsistencyCheckJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureConsistencyCheckJobsResponse({}));
  }

  /**
   * Retrieves a list of feature consistency check jobs.
   * 
   * @param request - ListFeatureConsistencyCheckJobsRequest
   * @returns ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobs(request: $_model.ListFeatureConsistencyCheckJobsRequest): Promise<$_model.ListFeatureConsistencyCheckJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobsWithOptions(request, headers, runtime);
  }

  /**
   * Lists all schemas for a specified resource in an instance.
   * 
   * @remarks
   * ## Description
   * To retrieve a list of all schemas for a specified resource, provide the instance ID (InstanceId) and resource ID (ResourceId). Use the optional SchemaName parameter to filter the schemas by a name prefix.
   * 
   * @param request - ListInstanceResourceSchemasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResourceSchemasResponse
   */
  async listInstanceResourceSchemasWithOptions(InstanceId: string, ResourceId: string, request: $_model.ListInstanceResourceSchemasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResourceSchemasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceResourceSchemas",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResourceSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResourceSchemasResponse({}));
  }

  /**
   * Lists all schemas for a specified resource in an instance.
   * 
   * @remarks
   * ## Description
   * To retrieve a list of all schemas for a specified resource, provide the instance ID (InstanceId) and resource ID (ResourceId). Use the optional SchemaName parameter to filter the schemas by a name prefix.
   * 
   * @param request - ListInstanceResourceSchemasRequest
   * @returns ListInstanceResourceSchemasResponse
   */
  async listInstanceResourceSchemas(InstanceId: string, ResourceId: string, request: $_model.ListInstanceResourceSchemasRequest): Promise<$_model.ListInstanceResourceSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourceSchemasWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * Retrieves a list of data tables for a specified instance and data source.
   * 
   * @remarks
   * ## Description
   * Provide the instance ID (InstanceId) and data source ID (ResourceId) to retrieve a list of data tables from the specified data source. Use the optional `MaxcomputeSchema` parameter to filter the results by a MaxCompute schema.
   * 
   * @param request - ListInstanceResourceTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResourceTablesResponse
   */
  async listInstanceResourceTablesWithOptions(InstanceId: string, ResourceId: string, request: $_model.ListInstanceResourceTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResourceTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxcomputeSchema)) {
      query["MaxcomputeSchema"] = request.maxcomputeSchema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceResourceTables",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResourceTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResourceTablesResponse({}));
  }

  /**
   * Retrieves a list of data tables for a specified instance and data source.
   * 
   * @remarks
   * ## Description
   * Provide the instance ID (InstanceId) and data source ID (ResourceId) to retrieve a list of data tables from the specified data source. Use the optional `MaxcomputeSchema` parameter to filter the results by a MaxCompute schema.
   * 
   * @param request - ListInstanceResourceTablesRequest
   * @returns ListInstanceResourceTablesResponse
   */
  async listInstanceResourceTables(InstanceId: string, ResourceId: string, request: $_model.ListInstanceResourceTablesRequest): Promise<$_model.ListInstanceResourceTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourceTablesWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * Lists the resources configured for an instance.
   * 
   * @param request - ListInstanceResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResourcesResponse
   */
  async listInstanceResourcesWithOptions(InstanceId: string, request: $_model.ListInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResourcesResponse({}));
  }

  /**
   * Lists the resources configured for an instance.
   * 
   * @param request - ListInstanceResourcesRequest
   * @returns ListInstanceResourcesResponse
   */
  async listInstanceResources(InstanceId: string, request: $_model.ListInstanceResourcesRequest): Promise<$_model.ListInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Gets a list of PAIRec instances.
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Gets a list of PAIRec instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the laboratories in a specified scene.
   * 
   * @param request - ListLaboratoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLaboratoriesResponse
   */
  async listLaboratoriesWithOptions(request: $_model.ListLaboratoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLaboratoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLaboratories",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLaboratoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListLaboratoriesResponse({}));
  }

  /**
   * Retrieves the laboratories in a specified scene.
   * 
   * @param request - ListLaboratoriesRequest
   * @returns ListLaboratoriesResponse
   */
  async listLaboratories(request: $_model.ListLaboratoriesRequest): Promise<$_model.ListLaboratoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLaboratoriesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of layers in a specified laboratory.
   * 
   * @param request - ListLayersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayersResponse
   */
  async listLayersWithOptions(request: $_model.ListLayersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLayersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.laboratoryId)) {
      query["LaboratoryId"] = request.laboratoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayers",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLayersResponse>(await this.callApi(params, req, runtime), new $_model.ListLayersResponse({}));
  }

  /**
   * Retrieves a list of layers in a specified laboratory.
   * 
   * @param request - ListLayersRequest
   * @returns ListLayersResponse
   */
  async listLayers(request: $_model.ListLayersRequest): Promise<$_model.ListLayersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  /**
   * Lists parameters.
   * 
   * @param request - ListParamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParamsResponse
   */
  async listParamsWithOptions(request: $_model.ListParamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListParamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParams",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListParamsResponse>(await this.callApi(params, req, runtime), new $_model.ListParamsResponse({}));
  }

  /**
   * Lists parameters.
   * 
   * @param request - ListParamsRequest
   * @returns ListParamsResponse
   */
  async listParams(request: $_model.ListParamsRequest): Promise<$_model.ListParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParamsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of recall management tasks that match specified conditions.
   * 
   * @remarks
   * ## Request
   * - Use this API operation to retrieve a list of recall management tasks.
   * - The `InstanceId` and `Type` parameters are required. All other parameters are optional.
   * - Use the `Condition` parameter to set filter conditions on specific table types, such as filtering by `RecallManagementTableId`.
   * - Use the `SortBy` and `Order` parameters to control the sort order of the results. The default sort order is ascending by creation time.
   * - Use the `PageNumber` and `PageSize` parameters for pagination. The `PageNumber` parameter defaults to 1, and the `PageSize` parameter defaults to 10.
   * - The response includes details about each recall management task, such as its basic information and status.
   * 
   * @param request - ListRecallManagementJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecallManagementJobsResponse
   */
  async listRecallManagementJobsWithOptions(request: $_model.ListRecallManagementJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecallManagementJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecallManagementJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecallManagementJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecallManagementJobsResponse({}));
  }

  /**
   * Retrieves a list of recall management tasks that match specified conditions.
   * 
   * @remarks
   * ## Request
   * - Use this API operation to retrieve a list of recall management tasks.
   * - The `InstanceId` and `Type` parameters are required. All other parameters are optional.
   * - Use the `Condition` parameter to set filter conditions on specific table types, such as filtering by `RecallManagementTableId`.
   * - Use the `SortBy` and `Order` parameters to control the sort order of the results. The default sort order is ascending by creation time.
   * - Use the `PageNumber` and `PageSize` parameters for pagination. The `PageNumber` parameter defaults to 1, and the `PageSize` parameter defaults to 10.
   * - The response includes details about each recall management task, such as its basic information and status.
   * 
   * @param request - ListRecallManagementJobsRequest
   * @returns ListRecallManagementJobsResponse
   */
  async listRecallManagementJobs(request: $_model.ListRecallManagementJobsRequest): Promise<$_model.ListRecallManagementJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecallManagementJobsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of all versions for a specified Recall Management Service.
   * 
   * @remarks
   * ## Description
   * This operation queries the details of all versions for a specific Recall Management Service, including the version ID, name, effective status, creation time, and modification time. For accurate results, provide the correct `RecallManagementServiceId` and `InstanceId`.
   * - Use the `PageNumber` and `PageSize` parameters for pagination. By default, the query starts from the first page and returns 50 entries per page.
   * - Use the `SortBy` parameter to sort the results by creation time or modification time. By default, the results are sorted by creation time in ascending order.
   * - The `Order` parameter specifies the sort order. Valid values are `ASC` for ascending order and `DESC` for descending order.
   * 
   * @param request - ListRecallManagementServiceVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecallManagementServiceVersionsResponse
   */
  async listRecallManagementServiceVersionsWithOptions(RecallManagementServiceId: string, request: $_model.ListRecallManagementServiceVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecallManagementServiceVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecallManagementServiceVersions",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecallManagementServiceVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecallManagementServiceVersionsResponse({}));
  }

  /**
   * Retrieves a list of all versions for a specified Recall Management Service.
   * 
   * @remarks
   * ## Description
   * This operation queries the details of all versions for a specific Recall Management Service, including the version ID, name, effective status, creation time, and modification time. For accurate results, provide the correct `RecallManagementServiceId` and `InstanceId`.
   * - Use the `PageNumber` and `PageSize` parameters for pagination. By default, the query starts from the first page and returns 50 entries per page.
   * - Use the `SortBy` parameter to sort the results by creation time or modification time. By default, the results are sorted by creation time in ascending order.
   * - The `Order` parameter specifies the sort order. Valid values are `ASC` for ascending order and `DESC` for descending order.
   * 
   * @param request - ListRecallManagementServiceVersionsRequest
   * @returns ListRecallManagementServiceVersionsResponse
   */
  async listRecallManagementServiceVersions(RecallManagementServiceId: string, request: $_model.ListRecallManagementServiceVersionsRequest): Promise<$_model.ListRecallManagementServiceVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecallManagementServiceVersionsWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Queries the list of recall management services under a specified instance.
   * 
   * @remarks
   * ## Operation description
   * By calling the `ListRecallManagementServices` operation, you can retrieve the list of recall management services under a specific instance based on given parameters such as InstanceId, PageNumber, and PageSize. You can sort results by creation time or update time in ascending or descending order.
   * - **InstanceId** is required and specifies the instance to which the services belong.
   * - The pagination parameters **PageNumber** and **PageSize** allow you to control the amount of returned data and the page from which to start displaying results. By default, data from the first page is returned.
   * - Use the **SortBy** and **Order** parameters to customize the sorting of the list.
   * 
   * @param request - ListRecallManagementServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecallManagementServicesResponse
   */
  async listRecallManagementServicesWithOptions(request: $_model.ListRecallManagementServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecallManagementServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecallManagementServices",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecallManagementServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecallManagementServicesResponse({}));
  }

  /**
   * Queries the list of recall management services under a specified instance.
   * 
   * @remarks
   * ## Operation description
   * By calling the `ListRecallManagementServices` operation, you can retrieve the list of recall management services under a specific instance based on given parameters such as InstanceId, PageNumber, and PageSize. You can sort results by creation time or update time in ascending or descending order.
   * - **InstanceId** is required and specifies the instance to which the services belong.
   * - The pagination parameters **PageNumber** and **PageSize** allow you to control the amount of returned data and the page from which to start displaying results. By default, data from the first page is returned.
   * - Use the **SortBy** and **Order** parameters to customize the sorting of the list.
   * 
   * @param request - ListRecallManagementServicesRequest
   * @returns ListRecallManagementServicesResponse
   */
  async listRecallManagementServices(request: $_model.ListRecallManagementServicesRequest): Promise<$_model.ListRecallManagementServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecallManagementServicesWithOptions(request, headers, runtime);
  }

  /**
   * Lists all versions of a specified RecallManagementTable.
   * 
   * @remarks
   * ## Usage
   * - To retrieve the version history of a specific RecallManagementTable, provide the `RecallManagementTableId` and `InstanceId`.
   * - Use the `SortBy` parameter to sort the results by creation time or update time. By default, the results are sorted by creation time in ascending order.
   * - The `PageNumber` and `PageSize` parameters enable pagination, which allows you to control the number of items to return and the page to display.
   * - If the `Order` parameter is not specified, the results are sorted in ascending order by default.
   * 
   * @param request - ListRecallManagementTableVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecallManagementTableVersionsResponse
   */
  async listRecallManagementTableVersionsWithOptions(RecallManagementTableId: string, request: $_model.ListRecallManagementTableVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecallManagementTableVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecallManagementTableVersions",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecallManagementTableVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecallManagementTableVersionsResponse({}));
  }

  /**
   * Lists all versions of a specified RecallManagementTable.
   * 
   * @remarks
   * ## Usage
   * - To retrieve the version history of a specific RecallManagementTable, provide the `RecallManagementTableId` and `InstanceId`.
   * - Use the `SortBy` parameter to sort the results by creation time or update time. By default, the results are sorted by creation time in ascending order.
   * - The `PageNumber` and `PageSize` parameters enable pagination, which allows you to control the number of items to return and the page to display.
   * - If the `Order` parameter is not specified, the results are sorted in ascending order by default.
   * 
   * @param request - ListRecallManagementTableVersionsRequest
   * @returns ListRecallManagementTableVersionsResponse
   */
  async listRecallManagementTableVersions(RecallManagementTableId: string, request: $_model.ListRecallManagementTableVersionsRequest): Promise<$_model.ListRecallManagementTableVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecallManagementTableVersionsWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * Retrieves the recall management tables for a specified instance. Pagination and sorting are supported.
   * 
   * @remarks
   * ## Request
   * - **InstanceId** is a required parameter specifying the instance to query.
   * - The **Name** and **Type** parameters filter recall management tables by name or type.
   * - The **PageNumber** and **PageSize** parameters control pagination. By default, the query returns the first 50 records.
   * - You can sort results by creation time (GmtCreateTime) or modification time (GmtModifiedTime) in ascending (ASC) or descending (DESC) order.
   * 
   * @param request - ListRecallManagementTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecallManagementTablesResponse
   */
  async listRecallManagementTablesWithOptions(request: $_model.ListRecallManagementTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecallManagementTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecallManagementTables",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecallManagementTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecallManagementTablesResponse({}));
  }

  /**
   * Retrieves the recall management tables for a specified instance. Pagination and sorting are supported.
   * 
   * @remarks
   * ## Request
   * - **InstanceId** is a required parameter specifying the instance to query.
   * - The **Name** and **Type** parameters filter recall management tables by name or type.
   * - The **PageNumber** and **PageSize** parameters control pagination. By default, the query returns the first 50 records.
   * - You can sort results by creation time (GmtCreateTime) or modification time (GmtModifiedTime) in ascending (ASC) or descending (DESC) order.
   * 
   * @param request - ListRecallManagementTablesRequest
   * @returns ListRecallManagementTablesResponse
   */
  async listRecallManagementTables(request: $_model.ListRecallManagementTablesRequest): Promise<$_model.ListRecallManagementTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecallManagementTablesWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - ListResourceRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceRulesResponse
   */
  async listResourceRulesWithOptions(request: $_model.ListResourceRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceRuleId)) {
      query["ResourceRuleId"] = request.resourceRuleId;
    }

    if (!$dara.isNull(request.resourceRuleName)) {
      query["ResourceRuleName"] = request.resourceRuleName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceRules",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceRulesResponse({}));
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - ListResourceRulesRequest
   * @returns ListResourceRulesResponse
   */
  async listResourceRules(request: $_model.ListResourceRulesRequest): Promise<$_model.ListResourceRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceRulesWithOptions(request, headers, runtime);
  }

  /**
   * 获取样本一致性任务列表
   * 
   * @param request - ListSampleConsistencyJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSampleConsistencyJobsResponse
   */
  async listSampleConsistencyJobsWithOptions(request: $_model.ListSampleConsistencyJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSampleConsistencyJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSampleConsistencyJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSampleConsistencyJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSampleConsistencyJobsResponse({}));
  }

  /**
   * 获取样本一致性任务列表
   * 
   * @param request - ListSampleConsistencyJobsRequest
   * @returns ListSampleConsistencyJobsResponse
   */
  async listSampleConsistencyJobs(request: $_model.ListSampleConsistencyJobsRequest): Promise<$_model.ListSampleConsistencyJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSampleConsistencyJobsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of scenes.
   * 
   * @param request - ListScenesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenesResponse
   */
  async listScenesWithOptions(request: $_model.ListScenesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScenesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScenes",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScenesResponse>(await this.callApi(params, req, runtime), new $_model.ListScenesResponse({}));
  }

  /**
   * Retrieves a list of scenes.
   * 
   * @param request - ListScenesRequest
   * @returns ListScenesResponse
   */
  async listScenes(request: $_model.ListScenesRequest): Promise<$_model.ListScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the subcrowds for a specified crowd.
   * 
   * @param request - ListSubCrowdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubCrowdsResponse
   */
  async listSubCrowdsWithOptions(CrowdId: string, request: $_model.ListSubCrowdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubCrowdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubCrowds",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubCrowdsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubCrowdsResponse({}));
  }

  /**
   * Lists the subcrowds for a specified crowd.
   * 
   * @param request - ListSubCrowdsRequest
   * @returns ListSubCrowdsResponse
   */
  async listSubCrowds(CrowdId: string, request: $_model.ListSubCrowdsRequest): Promise<$_model.ListSubCrowdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubCrowdsWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * Retrieves a list of data tables.
   * 
   * @param request - ListTableMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableMetasResponse
   */
  async listTableMetasWithOptions(request: $_model.ListTableMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableMetasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableMetas",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableMetasResponse>(await this.callApi(params, req, runtime), new $_model.ListTableMetasResponse({}));
  }

  /**
   * Retrieves a list of data tables.
   * 
   * @param request - ListTableMetasRequest
   * @returns ListTableMetasResponse
   */
  async listTableMetas(request: $_model.ListTableMetasRequest): Promise<$_model.ListTableMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableMetasWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the historical traffic records for a specific traffic control target.
   * 
   * @remarks
   * ## Usage notes
   * - The `TrafficControlTargetId`, `InstanceId`, and `Environment` parameters are required.
   * - You can use `StartTime` and `EndTime` to specify the time range.
   * - The `Threshold` parameter is optional.
   * - Use `ExperimentId` and `ExperimentGroupId` to filter data for a specific experiment or experiment group.
   * - Use `ItemId` to filter traffic data for a specific item.
   * - The supported environments are the Daily environment, pre-production environment (Pre), and production environment (Prod).
   * 
   * @param request - ListTrafficControlTargetTrafficHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId: string, request: $_model.ListTrafficControlTargetTrafficHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrafficControlTargetTrafficHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficControlTargetTrafficHistory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/traffichistories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrafficControlTargetTrafficHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListTrafficControlTargetTrafficHistoryResponse({}));
  }

  /**
   * Retrieves the historical traffic records for a specific traffic control target.
   * 
   * @remarks
   * ## Usage notes
   * - The `TrafficControlTargetId`, `InstanceId`, and `Environment` parameters are required.
   * - You can use `StartTime` and `EndTime` to specify the time range.
   * - The `Threshold` parameter is optional.
   * - Use `ExperimentId` and `ExperimentGroupId` to filter data for a specific experiment or experiment group.
   * - Use `ItemId` to filter traffic data for a specific item.
   * - The supported environments are the Daily environment, pre-production environment (Pre), and production environment (Prod).
   * 
   * @param request - ListTrafficControlTargetTrafficHistoryRequest
   * @returns ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistory(TrafficControlTargetId: string, request: $_model.ListTrafficControlTargetTrafficHistoryRequest): Promise<$_model.ListTrafficControlTargetTrafficHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Lists traffic control tasks that meet specified conditions.
   * 
   * @remarks
   * ## Request
   * - This API retrieves a list of traffic control tasks.
   * - Use query parameters to filter and sort the results.
   * - This operation supports pagination. You can also retrieve all results in a single response.
   * - Note: The `InstanceId` is a required parameter. All other parameters are optional.
   * 
   * @param request - ListTrafficControlTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficControlTasksResponse
   */
  async listTrafficControlTasksWithOptions(request: $_model.ListTrafficControlTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrafficControlTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.trafficControlTaskId)) {
      query["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficControlTasks",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrafficControlTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTrafficControlTasksResponse({}));
  }

  /**
   * Lists traffic control tasks that meet specified conditions.
   * 
   * @remarks
   * ## Request
   * - This API retrieves a list of traffic control tasks.
   * - Use query parameters to filter and sort the results.
   * - This operation supports pagination. You can also retrieve all results in a single response.
   * - Note: The `InstanceId` is a required parameter. All other parameters are optional.
   * 
   * @param request - ListTrafficControlTasksRequest
   * @returns ListTrafficControlTasksResponse
   */
  async listTrafficControlTasks(request: $_model.ListTrafficControlTasksRequest): Promise<$_model.ListTrafficControlTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTasksWithOptions(request, headers, runtime);
  }

  /**
   * Takes an experiment offline.
   * 
   * @param request - OfflineExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineExperimentResponse
   */
  async offlineExperimentWithOptions(ExperimentId: string, request: $_model.OfflineExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineExperimentResponse>(await this.callApi(params, req, runtime), new $_model.OfflineExperimentResponse({}));
  }

  /**
   * Takes an experiment offline.
   * 
   * @param request - OfflineExperimentRequest
   * @returns OfflineExperimentResponse
   */
  async offlineExperiment(ExperimentId: string, request: $_model.OfflineExperimentRequest): Promise<$_model.OfflineExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Takes a specified experiment group offline.
   * 
   * @param request - OfflineExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineExperimentGroupResponse
   */
  async offlineExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.OfflineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.OfflineExperimentGroupResponse({}));
  }

  /**
   * Takes a specified experiment group offline.
   * 
   * @param request - OfflineExperimentGroupRequest
   * @returns OfflineExperimentGroupResponse
   */
  async offlineExperimentGroup(ExperimentGroupId: string, request: $_model.OfflineExperimentGroupRequest): Promise<$_model.OfflineExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Takes the specified laboratory offline.
   * 
   * @param request - OfflineLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineLaboratoryResponse
   */
  async offlineLaboratoryWithOptions(LaboratoryId: string, request: $_model.OfflineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.OfflineLaboratoryResponse({}));
  }

  /**
   * Takes the specified laboratory offline.
   * 
   * @param request - OfflineLaboratoryRequest
   * @returns OfflineLaboratoryResponse
   */
  async offlineLaboratory(LaboratoryId: string, request: $_model.OfflineLaboratoryRequest): Promise<$_model.OfflineLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * Takes a specified recall management service offline.
   * 
   * @remarks
   * ## Description
   * Use this API to take a specific recall management service offline. Ensure that the provided `RecallManagementServiceId` and `InstanceId` are accurate to prevent unintended operations.
   * - **Important**: Once a recall management service is taken offline, it stops processing new requests until you reactivate it.
   * - Back up any required data or configurations before you perform this operation in case you need to restore the current state.
   * 
   * @param request - OfflineRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineRecallManagementServiceResponse
   */
  async offlineRecallManagementServiceWithOptions(RecallManagementServiceId: string, request: $_model.OfflineRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineRecallManagementServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.OfflineRecallManagementServiceResponse({}));
  }

  /**
   * Takes a specified recall management service offline.
   * 
   * @remarks
   * ## Description
   * Use this API to take a specific recall management service offline. Ensure that the provided `RecallManagementServiceId` and `InstanceId` are accurate to prevent unintended operations.
   * - **Important**: Once a recall management service is taken offline, it stops processing new requests until you reactivate it.
   * - Back up any required data or configurations before you perform this operation in case you need to restore the current state.
   * 
   * @param request - OfflineRecallManagementServiceRequest
   * @returns OfflineRecallManagementServiceResponse
   */
  async offlineRecallManagementService(RecallManagementServiceId: string, request: $_model.OfflineRecallManagementServiceRequest): Promise<$_model.OfflineRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineRecallManagementServiceWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Brings a specified experiment online.
   * 
   * @param request - OnlineExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineExperimentResponse
   */
  async onlineExperimentWithOptions(ExperimentId: string, request: $_model.OnlineExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineExperimentResponse>(await this.callApi(params, req, runtime), new $_model.OnlineExperimentResponse({}));
  }

  /**
   * Brings a specified experiment online.
   * 
   * @param request - OnlineExperimentRequest
   * @returns OnlineExperimentResponse
   */
  async onlineExperiment(ExperimentId: string, request: $_model.OnlineExperimentRequest): Promise<$_model.OnlineExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Brings a specified experiment group online.
   * 
   * @param request - OnlineExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineExperimentGroupResponse
   */
  async onlineExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.OnlineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.OnlineExperimentGroupResponse({}));
  }

  /**
   * Brings a specified experiment group online.
   * 
   * @param request - OnlineExperimentGroupRequest
   * @returns OnlineExperimentGroupResponse
   */
  async onlineExperimentGroup(ExperimentGroupId: string, request: $_model.OnlineExperimentGroupRequest): Promise<$_model.OnlineExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Publishes a specified laboratory for experimental analysis.
   * 
   * @param request - OnlineLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineLaboratoryResponse
   */
  async onlineLaboratoryWithOptions(LaboratoryId: string, request: $_model.OnlineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.OnlineLaboratoryResponse({}));
  }

  /**
   * Publishes a specified laboratory for experimental analysis.
   * 
   * @param request - OnlineLaboratoryRequest
   * @returns OnlineLaboratoryResponse
   */
  async onlineLaboratory(LaboratoryId: string, request: $_model.OnlineLaboratoryRequest): Promise<$_model.OnlineLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * This operation brings a specified Recall Management Service online.
   * 
   * @remarks
   * ## Request
   * You can use this operation to bring a Recall Management Service online by specifying the Recall Management Service ID and the instance ID. Ensure that the `RecallManagementServiceId` and `InstanceId` are correct and that you have the required permissions.
   * 
   * @param request - OnlineRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineRecallManagementServiceResponse
   */
  async onlineRecallManagementServiceWithOptions(RecallManagementServiceId: string, request: $_model.OnlineRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineRecallManagementServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.OnlineRecallManagementServiceResponse({}));
  }

  /**
   * This operation brings a specified Recall Management Service online.
   * 
   * @remarks
   * ## Request
   * You can use this operation to bring a Recall Management Service online by specifying the Recall Management Service ID and the instance ID. Ensure that the `RecallManagementServiceId` and `InstanceId` are correct and that you have the required permissions.
   * 
   * @param request - OnlineRecallManagementServiceRequest
   * @returns OnlineRecallManagementServiceResponse
   */
  async onlineRecallManagementService(RecallManagementServiceId: string, request: $_model.OnlineRecallManagementServiceRequest): Promise<$_model.OnlineRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineRecallManagementServiceWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Synchronizes a MaxCompute table with the recall engine. This operation allows you to publish specific partitions and select a synchronization mode.
   * 
   * @remarks
   * ## Request details
   * This API synchronizes a specified MaxCompute table with the recall engine. You must provide the correct `RecallManagementTableId` in the path parameter and the instance ID in the request body. You can also specify the table partitions to publish, whether to skip the threshold check, and the synchronization mode. To publish specific partitions, provide them as key-value pairs in the `Partitions` field.
   * 
   * @param request - PublishRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRecallManagementTableResponse
   */
  async publishRecallManagementTableWithOptions(RecallManagementTableId: string, request: $_model.PublishRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRecallManagementTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.partition)) {
      body["Partition"] = request.partition;
    }

    if (!$dara.isNull(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    if (!$dara.isNull(request.skipThresholdCheck)) {
      body["SkipThresholdCheck"] = request.skipThresholdCheck;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}/action/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.PublishRecallManagementTableResponse({}));
  }

  /**
   * Synchronizes a MaxCompute table with the recall engine. This operation allows you to publish specific partitions and select a synchronization mode.
   * 
   * @remarks
   * ## Request details
   * This API synchronizes a specified MaxCompute table with the recall engine. You must provide the correct `RecallManagementTableId` in the path parameter and the instance ID in the request body. You can also specify the table partitions to publish, whether to skip the threshold check, and the synchronization mode. To publish specific partitions, provide them as key-value pairs in the `Partitions` field.
   * 
   * @param request - PublishRecallManagementTableRequest
   * @returns PublishRecallManagementTableResponse
   */
  async publishRecallManagementTable(RecallManagementTableId: string, request: $_model.PublishRecallManagementTableRequest): Promise<$_model.PublishRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRecallManagementTableWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * If an experiment is stable and performs well, you can push all traffic to it. This action retires the original experiment group and creates a new one that contains only this experiment. The new group receives 100% of the traffic.
   * 
   * @param request - PushAllExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushAllExperimentResponse
   */
  async pushAllExperimentWithOptions(ExperimentId: string, request: $_model.PushAllExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushAllExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushAllExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/pushall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushAllExperimentResponse>(await this.callApi(params, req, runtime), new $_model.PushAllExperimentResponse({}));
  }

  /**
   * If an experiment is stable and performs well, you can push all traffic to it. This action retires the original experiment group and creates a new one that contains only this experiment. The new group receives 100% of the traffic.
   * 
   * @param request - PushAllExperimentRequest
   * @returns PushAllExperimentResponse
   */
  async pushAllExperiment(ExperimentId: string, request: $_model.PushAllExperimentRequest): Promise<$_model.PushAllExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushAllExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 推送指标到指定资源规则
   * 
   * @param tmpReq - PushResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResourceRuleResponse
   */
  async pushResourceRuleWithOptions(ResourceRuleId: string, tmpReq: $_model.PushResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushResourceRuleResponse> {
    tmpReq.validate();
    let request = new $_model.PushResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/action/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.PushResourceRuleResponse({}));
  }

  /**
   * 推送指标到指定资源规则
   * 
   * @param request - PushResourceRuleRequest
   * @returns PushResourceRuleResponse
   */
  async pushResourceRule(ResourceRuleId: string, request: $_model.PushResourceRuleRequest): Promise<$_model.PushResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * Retrieves statistics for a specified data diagnosis task within a time range.
   * 
   * @remarks
   * ## Request description
   * - The `DataDiagnosisId` parameter is required and specifies the data diagnosis task.
   * - The `InstanceId` parameter is also required and specifies the instance.
   * - The `StartDate` and `EndDate` parameters specify the start and end dates of the time range. The format is YYYY-MM-DD.
   * - The `RemainRateType` parameter is optional. It specifies the retention rate report type. The default value is \\"Period\\", which indicates a periodic report.
   * - The response includes the request ID (`RequestId`) and a `Statistics` object. This object contains the dates of task failures (`FailedDates`) and dates with missing task data (`NoDataDates`).
   * 
   * @param request - QueryDataDiagnosisStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataDiagnosisStatisticsResponse
   */
  async queryDataDiagnosisStatisticsWithOptions(DataDiagnosisId: string, request: $_model.QueryDataDiagnosisStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataDiagnosisStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remainRateType)) {
      query["RemainRateType"] = request.remainRateType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataDiagnosisStatistics",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses/${$dara.URL.percentEncode(DataDiagnosisId)}/statistics/action/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataDiagnosisStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataDiagnosisStatisticsResponse({}));
  }

  /**
   * Retrieves statistics for a specified data diagnosis task within a time range.
   * 
   * @remarks
   * ## Request description
   * - The `DataDiagnosisId` parameter is required and specifies the data diagnosis task.
   * - The `InstanceId` parameter is also required and specifies the instance.
   * - The `StartDate` and `EndDate` parameters specify the start and end dates of the time range. The format is YYYY-MM-DD.
   * - The `RemainRateType` parameter is optional. It specifies the retention rate report type. The default value is \\"Period\\", which indicates a periodic report.
   * - The response includes the request ID (`RequestId`) and a `Statistics` object. This object contains the dates of task failures (`FailedDates`) and dates with missing task data (`NoDataDates`).
   * 
   * @param request - QueryDataDiagnosisStatisticsRequest
   * @returns QueryDataDiagnosisStatisticsResponse
   */
  async queryDataDiagnosisStatistics(DataDiagnosisId: string, request: $_model.QueryDataDiagnosisStatisticsRequest): Promise<$_model.QueryDataDiagnosisStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDataDiagnosisStatisticsWithOptions(DataDiagnosisId, request, headers, runtime);
  }

  /**
   * Retrieves records from a specified recall management table.
   * 
   * @remarks
   * ## Request
   * This API retrieves records from a specific recall management table using the provided primary keys. You must provide a valid `InstanceId` and `RecallManagementTableId`, and a non-empty `PrimaryKeys` list. If you specify `RecallManagementTableVersionId`, the API returns records from that version; otherwise, it uses the currently published version.
   * 
   * @param request - QueryRecallManagementTableRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecallManagementTableRecordsResponse
   */
  async queryRecallManagementTableRecordsWithOptions(RecallManagementTableId: string, request: $_model.QueryRecallManagementTableRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecallManagementTableRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.primaryKeys)) {
      query["PrimaryKeys"] = request.primaryKeys;
    }

    if (!$dara.isNull(request.recallManagementTableVersionId)) {
      query["RecallManagementTableVersionId"] = request.recallManagementTableVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecallManagementTableRecords",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}/queryrecords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecallManagementTableRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecallManagementTableRecordsResponse({}));
  }

  /**
   * Retrieves records from a specified recall management table.
   * 
   * @remarks
   * ## Request
   * This API retrieves records from a specific recall management table using the provided primary keys. You must provide a valid `InstanceId` and `RecallManagementTableId`, and a non-empty `PrimaryKeys` list. If you specify `RecallManagementTableVersionId`, the API returns records from that version; otherwise, it uses the currently published version.
   * 
   * @param request - QueryRecallManagementTableRecordsRequest
   * @returns QueryRecallManagementTableRecordsResponse
   */
  async queryRecallManagementTableRecords(RecallManagementTableId: string, request: $_model.QueryRecallManagementTableRecordsRequest): Promise<$_model.QueryRecallManagementTableRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRecallManagementTableRecordsWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * 查看样本一致性任务差异的详情
   * 
   * @param request - QuerySampleConsistencyJobDifferenceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySampleConsistencyJobDifferenceResponse
   */
  async querySampleConsistencyJobDifferenceWithOptions(SampleConsistencyJobId: string, request: $_model.QuerySampleConsistencyJobDifferenceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySampleConsistencyJobDifferenceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySampleConsistencyJobDifference",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}/action/querydifference`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySampleConsistencyJobDifferenceResponse>(await this.callApi(params, req, runtime), new $_model.QuerySampleConsistencyJobDifferenceResponse({}));
  }

  /**
   * 查看样本一致性任务差异的详情
   * 
   * @param request - QuerySampleConsistencyJobDifferenceRequest
   * @returns QuerySampleConsistencyJobDifferenceResponse
   */
  async querySampleConsistencyJobDifference(SampleConsistencyJobId: string, request: $_model.QuerySampleConsistencyJobDifferenceRequest): Promise<$_model.QuerySampleConsistencyJobDifferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySampleConsistencyJobDifferenceWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Retrieves the traffic control details of a target item for a given environment and date range.
   * 
   * @remarks
   * ## Request
   * Use this API to query the details of single-item control for a given traffic control target on a specified date and for a specific instance ID and environment. The details include traffic data and feature information for the top 100 items before and after the control is applied. Ensure that the `TrafficControlTargetId`, `InstanceId`, and `Environment` parameters are accurate, and that the `Date` is in YYYY-MM-DD format. Although the `Date` parameter is optional, we recommend specifying a date for meaningful results.
   * 
   * @param request - QueryTrafficControlTargetItemReportDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTrafficControlTargetItemReportDetailResponse
   */
  async queryTrafficControlTargetItemReportDetailWithOptions(TrafficControlTargetId: string, request: $_model.QueryTrafficControlTargetItemReportDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTrafficControlTargetItemReportDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTrafficControlTargetItemReportDetail",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/itemcontrolreportdetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTrafficControlTargetItemReportDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryTrafficControlTargetItemReportDetailResponse({}));
  }

  /**
   * Retrieves the traffic control details of a target item for a given environment and date range.
   * 
   * @remarks
   * ## Request
   * Use this API to query the details of single-item control for a given traffic control target on a specified date and for a specific instance ID and environment. The details include traffic data and feature information for the top 100 items before and after the control is applied. Ensure that the `TrafficControlTargetId`, `InstanceId`, and `Environment` parameters are accurate, and that the `Date` is in YYYY-MM-DD format. Although the `Date` parameter is optional, we recommend specifying a date for meaningful results.
   * 
   * @param request - QueryTrafficControlTargetItemReportDetailRequest
   * @returns QueryTrafficControlTargetItemReportDetailResponse
   */
  async queryTrafficControlTargetItemReportDetail(TrafficControlTargetId: string, request: $_model.QueryTrafficControlTargetItemReportDetailRequest): Promise<$_model.QueryTrafficControlTargetItemReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTrafficControlTargetItemReportDetailWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Retrieves the deployment status and related information of a specified traffic control task in a specific environment.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the deployment result of a traffic control task specified by TrafficControlTaskId for a given instance ID and environment. Make sure that the specified InstanceId is associated with your account and that the Environment parameter value is valid (Daily for daily environment, Pre for staging environment, Prod for production environment). All request parameters are required.
   * 
   * @param request - QueryTrafficControlTaskDeployResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTrafficControlTaskDeployResultResponse
   */
  async queryTrafficControlTaskDeployResultWithOptions(TrafficControlTaskId: string, request: $_model.QueryTrafficControlTaskDeployResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTrafficControlTaskDeployResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTrafficControlTaskDeployResult",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/queryresult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTrafficControlTaskDeployResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryTrafficControlTaskDeployResultResponse({}));
  }

  /**
   * Retrieves the deployment status and related information of a specified traffic control task in a specific environment.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the deployment result of a traffic control task specified by TrafficControlTaskId for a given instance ID and environment. Make sure that the specified InstanceId is associated with your account and that the Environment parameter value is valid (Daily for daily environment, Pre for staging environment, Prod for production environment). All request parameters are required.
   * 
   * @param request - QueryTrafficControlTaskDeployResultRequest
   * @returns QueryTrafficControlTaskDeployResultResponse
   */
  async queryTrafficControlTaskDeployResult(TrafficControlTaskId: string, request: $_model.QueryTrafficControlTaskDeployResultRequest): Promise<$_model.QueryTrafficControlTaskDeployResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTrafficControlTaskDeployResultWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Retrieves a detailed report on item control for a specified traffic control task.
   * 
   * @remarks
   * ## Description
   * - This API retrieves the item control results for a specific traffic control task within a given time range.
   * - `TrafficControlTaskId` is the unique identifier for a traffic control task.
   * - `InstanceId` specifies the instance that runs the task.
   * - The `Environment` parameter specifies the task\\"s execution environment. Valid values are Daily (development environment), Pre (staging environment), and Prod (production environment).
   * - `StartTime` and `EndTime` specify the start and end of the time range for the report, respectively. The format is "YYYY-MM-DD HH:MM:SS".
   * - The specified start and end times must be valid and span no more than two consecutive calendar days.
   * 
   * @param request - QueryTrafficControlTaskItemReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTrafficControlTaskItemReportResponse
   */
  async queryTrafficControlTaskItemReportWithOptions(TrafficControlTaskId: string, request: $_model.QueryTrafficControlTaskItemReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTrafficControlTaskItemReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTrafficControlTaskItemReport",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/queryitemreport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTrafficControlTaskItemReportResponse>(await this.callApi(params, req, runtime), new $_model.QueryTrafficControlTaskItemReportResponse({}));
  }

  /**
   * Retrieves a detailed report on item control for a specified traffic control task.
   * 
   * @remarks
   * ## Description
   * - This API retrieves the item control results for a specific traffic control task within a given time range.
   * - `TrafficControlTaskId` is the unique identifier for a traffic control task.
   * - `InstanceId` specifies the instance that runs the task.
   * - The `Environment` parameter specifies the task\\"s execution environment. Valid values are Daily (development environment), Pre (staging environment), and Prod (production environment).
   * - `StartTime` and `EndTime` specify the start and end of the time range for the report, respectively. The format is "YYYY-MM-DD HH:MM:SS".
   * - The specified start and end times must be valid and span no more than two consecutive calendar days.
   * 
   * @param request - QueryTrafficControlTaskItemReportRequest
   * @returns QueryTrafficControlTaskItemReportResponse
   */
  async queryTrafficControlTaskItemReport(TrafficControlTaskId: string, request: $_model.QueryTrafficControlTaskItemReportRequest): Promise<$_model.QueryTrafficControlTaskItemReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTrafficControlTaskItemReportWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Releases a traffic control task for the specified instance and environment.
   * 
   * @remarks
   * ## Request
   * Use this API to release a traffic control task for a specific instance and environment (Daily, Pre, or Prod). Your request must include the `TrafficControlTaskId`, `InstanceId`, and `Environment` parameters.
   * - `TrafficControlTaskId`: The unique ID of the traffic control task.
   * - `InstanceId`: The ID of the target instance.
   * - `Environment`: The execution environment for the traffic control task. Valid values: `Daily`, `Pre`, and `Prod`.
   * The request succeeds only if all required parameters are provided correctly. A successful response includes a `RequestId`.
   * 
   * @param request - ReleaseTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.ReleaseTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseTrafficControlTaskResponse({}));
  }

  /**
   * Releases a traffic control task for the specified instance and environment.
   * 
   * @remarks
   * ## Request
   * Use this API to release a traffic control task for a specific instance and environment (Daily, Pre, or Prod). Your request must include the `TrafficControlTaskId`, `InstanceId`, and `Environment` parameters.
   * - `TrafficControlTaskId`: The unique ID of the traffic control task.
   * - `InstanceId`: The ID of the target instance.
   * - `Environment`: The execution environment for the traffic control task. Valid values: `Daily`, `Pre`, and `Prod`.
   * The request succeeds only if all required parameters are provided correctly. A successful response includes a `RequestId`.
   * 
   * @param request - ReleaseTrafficControlTaskRequest
   * @returns ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTask(TrafficControlTaskId: string, request: $_model.ReleaseTrafficControlTaskRequest): Promise<$_model.ReleaseTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Retrieve a metric group\\"s report.
   * 
   * @param request - ReportABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportABMetricGroupResponse
   */
  async reportABMetricGroupWithOptions(ABMetricGroupId: string, request: $_model.ReportABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReportABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseExperimentId)) {
      body["BaseExperimentId"] = request.baseExperimentId;
    }

    if (!$dara.isNull(request.dimensionFields)) {
      body["DimensionFields"] = request.dimensionFields;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.experimentIds)) {
      body["ExperimentIds"] = request.experimentIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeStatisticsMethod)) {
      body["TimeStatisticsMethod"] = request.timeStatisticsMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}/action/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportABMetricGroupResponse>(await this.callApi(params, req, runtime), new $_model.ReportABMetricGroupResponse({}));
  }

  /**
   * Retrieve a metric group\\"s report.
   * 
   * @param request - ReportABMetricGroupRequest
   * @returns ReportABMetricGroupResponse
   */
  async reportABMetricGroup(ABMetricGroupId: string, request: $_model.ReportABMetricGroupRequest): Promise<$_model.ReportABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reportABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * 样本一致性任务报表
   * 
   * @param request - ReportSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportSampleConsistencyJobResponse
   */
  async reportSampleConsistencyJobWithOptions(SampleConsistencyJobId: string, request: $_model.ReportSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReportSampleConsistencyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}/action/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.ReportSampleConsistencyJobResponse({}));
  }

  /**
   * 样本一致性任务报表
   * 
   * @param request - ReportSampleConsistencyJobRequest
   * @returns ReportSampleConsistencyJobResponse
   */
  async reportSampleConsistencyJob(SampleConsistencyJobId: string, request: $_model.ReportSampleConsistencyJobRequest): Promise<$_model.ReportSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reportSampleConsistencyJobWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Conducts conversations with users through an AI shopping guide to provide product recommendation services.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to send conversation messages to the AI shopping guide and supports Server-Sent Events (SSE).
   * - `InstanceId`, `SessionId`, `SceneId`, `ServiceId`, `Environment`, `Uid`, and `Language` are required parameters. Ensure the accuracy of these values to obtain optimal responses.
   * - The `InputMessage` must contain at least one text-type message that describes the user\\"s request or question.
   * - Based on the provided input, the system returns corresponding recommendation results or other relevant information.
   * - Check the returned `StopReason` field to understand whether the session has ended and the reason.
   * 
   * @param request - ShoppingAssistantRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShoppingAssistantResponse
   */
  async *shoppingAssistantWithSSE(request: $_model.ShoppingAssistantRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ShoppingAssistantResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.contents)) {
      body["Contents"] = request.contents;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.inputMessage)) {
      body["InputMessage"] = request.inputMessage;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShoppingAssistant",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/conversations/shopping_assistant/chat`,
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
        yield $dara.cast<$_model.ShoppingAssistantResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ShoppingAssistantResponse({}));
      }

    }
  }

  /**
   * Conducts conversations with users through an AI shopping guide to provide product recommendation services.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to send conversation messages to the AI shopping guide and supports Server-Sent Events (SSE).
   * - `InstanceId`, `SessionId`, `SceneId`, `ServiceId`, `Environment`, `Uid`, and `Language` are required parameters. Ensure the accuracy of these values to obtain optimal responses.
   * - The `InputMessage` must contain at least one text-type message that describes the user\\"s request or question.
   * - Based on the provided input, the system returns corresponding recommendation results or other relevant information.
   * - Check the returned `StopReason` field to understand whether the session has ended and the reason.
   * 
   * @param request - ShoppingAssistantRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShoppingAssistantResponse
   */
  async shoppingAssistantWithOptions(request: $_model.ShoppingAssistantRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ShoppingAssistantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.contents)) {
      body["Contents"] = request.contents;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.inputMessage)) {
      body["InputMessage"] = request.inputMessage;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShoppingAssistant",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/conversations/shopping_assistant/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShoppingAssistantResponse>(await this.callApi(params, req, runtime), new $_model.ShoppingAssistantResponse({}));
  }

  /**
   * Conducts conversations with users through an AI shopping guide to provide product recommendation services.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to send conversation messages to the AI shopping guide and supports Server-Sent Events (SSE).
   * - `InstanceId`, `SessionId`, `SceneId`, `ServiceId`, `Environment`, `Uid`, and `Language` are required parameters. Ensure the accuracy of these values to obtain optimal responses.
   * - The `InputMessage` must contain at least one text-type message that describes the user\\"s request or question.
   * - Based on the provided input, the system returns corresponding recommendation results or other relevant information.
   * - Check the returned `StopReason` field to understand whether the session has ended and the reason.
   * 
   * @param request - ShoppingAssistantRequest
   * @returns ShoppingAssistantResponse
   */
  async shoppingAssistant(request: $_model.ShoppingAssistantRequest): Promise<$_model.ShoppingAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.shoppingAssistantWithOptions(request, headers, runtime);
  }

  /**
   * Splits the target values for a traffic control target into time intervals.
   * 
   * @remarks
   * Splits the target values for a traffic control target into time intervals.
   * 
   * @param request - SplitTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.SplitTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SplitTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.setPoints)) {
      body["SetPoints"] = request.setPoints;
    }

    if (!$dara.isNull(request.setValues)) {
      body["SetValues"] = request.setValues;
    }

    if (!$dara.isNull(request.timePoints)) {
      body["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SplitTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SplitTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.SplitTrafficControlTargetResponse({}));
  }

  /**
   * Splits the target values for a traffic control target into time intervals.
   * 
   * @remarks
   * Splits the target values for a traffic control target into time intervals.
   * 
   * @param request - SplitTrafficControlTargetRequest
   * @returns SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTarget(TrafficControlTargetId: string, request: $_model.SplitTrafficControlTargetRequest): Promise<$_model.SplitTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Starts a traffic control task for a specific traffic control target.
   * 
   * @remarks
   * ## Request
   * Call this operation to start a traffic control task by providing the `TrafficControlTargetId` and `InstanceId`.
   * 
   * @param request - StartTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTrafficControlTargetResponse
   */
  async startTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.StartTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.StartTrafficControlTargetResponse({}));
  }

  /**
   * Starts a traffic control task for a specific traffic control target.
   * 
   * @remarks
   * ## Request
   * Call this operation to start a traffic control task by providing the `TrafficControlTargetId` and `InstanceId`.
   * 
   * @param request - StartTrafficControlTargetRequest
   * @returns StartTrafficControlTargetResponse
   */
  async startTrafficControlTarget(TrafficControlTargetId: string, request: $_model.StartTrafficControlTargetRequest): Promise<$_model.StartTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Starts a traffic control task with a specified ID for instances in different environments.
   * 
   * @remarks
   * ## Request details
   * - This operation starts the traffic control task identified by `TrafficControlTaskId`.
   * - `InstanceId` specifies the target instance.
   * - `Environment` specifies the target environment. Valid values: Daily, Pre, and Prod.
   * - Ensure that all required parameters are set correctly before you call this operation. The specified `TrafficControlTaskId` must exist in the system.
   * 
   * @param request - StartTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTrafficControlTaskResponse
   */
  async startTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.StartTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartTrafficControlTaskResponse({}));
  }

  /**
   * Starts a traffic control task with a specified ID for instances in different environments.
   * 
   * @remarks
   * ## Request details
   * - This operation starts the traffic control task identified by `TrafficControlTaskId`.
   * - `InstanceId` specifies the target instance.
   * - `Environment` specifies the target environment. Valid values: Daily, Pre, and Prod.
   * - Ensure that all required parameters are set correctly before you call this operation. The specified `TrafficControlTaskId` must exist in the system.
   * 
   * @param request - StartTrafficControlTaskRequest
   * @returns StartTrafficControlTaskResponse
   */
  async startTrafficControlTask(TrafficControlTaskId: string, request: $_model.StartTrafficControlTaskRequest): Promise<$_model.StartTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 停止样本一致性任务
   * 
   * @param request - StopSampleConsistencyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSampleConsistencyJobResponse
   */
  async stopSampleConsistencyJobWithOptions(SampleConsistencyJobId: string, request: $_model.StopSampleConsistencyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSampleConsistencyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSampleConsistencyJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/sampleconsistencyjobs/${$dara.URL.percentEncode(SampleConsistencyJobId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSampleConsistencyJobResponse>(await this.callApi(params, req, runtime), new $_model.StopSampleConsistencyJobResponse({}));
  }

  /**
   * 停止样本一致性任务
   * 
   * @param request - StopSampleConsistencyJobRequest
   * @returns StopSampleConsistencyJobResponse
   */
  async stopSampleConsistencyJob(SampleConsistencyJobId: string, request: $_model.StopSampleConsistencyJobRequest): Promise<$_model.StopSampleConsistencyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSampleConsistencyJobWithOptions(SampleConsistencyJobId, request, headers, runtime);
  }

  /**
   * Stops a traffic control Flink task with the specified ID.
   * 
   * @remarks
   * ## Request description
   * You can call this operation to stop a specific traffic control Flink task based on the specified TrafficControlTaskId. Make sure that you have prepared the correct InstanceId and the environment to which the instance belongs (Daily for daily environment, Pre for staging environment, Prod for production environment). Include this information in the request body to ensure that the operation is correctly performed.
   * 
   * @param request - StopTrafficControlFlinkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrafficControlFlinkTaskResponse
   */
  async stopTrafficControlFlinkTaskWithOptions(TrafficControlTaskId: string, request: $_model.StopTrafficControlFlinkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTrafficControlFlinkTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrafficControlFlinkTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/stopflink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTrafficControlFlinkTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopTrafficControlFlinkTaskResponse({}));
  }

  /**
   * Stops a traffic control Flink task with the specified ID.
   * 
   * @remarks
   * ## Request description
   * You can call this operation to stop a specific traffic control Flink task based on the specified TrafficControlTaskId. Make sure that you have prepared the correct InstanceId and the environment to which the instance belongs (Daily for daily environment, Pre for staging environment, Prod for production environment). Include this information in the request body to ensure that the operation is correctly performed.
   * 
   * @param request - StopTrafficControlFlinkTaskRequest
   * @returns StopTrafficControlFlinkTaskResponse
   */
  async stopTrafficControlFlinkTask(TrafficControlTaskId: string, request: $_model.StopTrafficControlFlinkTaskRequest): Promise<$_model.StopTrafficControlFlinkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlFlinkTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Stops a specific traffic control target.
   * 
   * @remarks
   * ## Request
   * This operation stops a traffic control task using the provided `TrafficControlTargetId` and `InstanceId`. Ensure that the parameter values are accurate to avoid stopping the wrong target or instance.
   * 
   * @param request - StopTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrafficControlTargetResponse
   */
  async stopTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.StopTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.StopTrafficControlTargetResponse({}));
  }

  /**
   * Stops a specific traffic control target.
   * 
   * @remarks
   * ## Request
   * This operation stops a traffic control task using the provided `TrafficControlTargetId` and `InstanceId`. Ensure that the parameter values are accurate to avoid stopping the wrong target or instance.
   * 
   * @param request - StopTrafficControlTargetRequest
   * @returns StopTrafficControlTargetResponse
   */
  async stopTrafficControlTarget(TrafficControlTargetId: string, request: $_model.StopTrafficControlTargetRequest): Promise<$_model.StopTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Stops a traffic control task for a specific instance and environment.
   * 
   * @remarks
   * ## Usage notes
   * - This API stops a traffic control task identified by a specific `TrafficControlTaskId`.
   * - The `InstanceId` and `Environment` parameters are required to identify the target instance and its environment.
   * - Ensure that you provide the correct `TrafficControlTaskId` to prevent the request from failing.
   * 
   * @param request - StopTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrafficControlTaskResponse
   */
  async stopTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.StopTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopTrafficControlTaskResponse({}));
  }

  /**
   * Stops a traffic control task for a specific instance and environment.
   * 
   * @remarks
   * ## Usage notes
   * - This API stops a traffic control task identified by a specific `TrafficControlTaskId`.
   * - The `InstanceId` and `Environment` parameters are required to identify the target instance and its environment.
   * - Ensure that you provide the correct `TrafficControlTaskId` to prevent the request from failing.
   * 
   * @param request - StopTrafficControlTaskRequest
   * @returns StopTrafficControlTaskResponse
   */
  async stopTrafficControlTask(TrafficControlTaskId: string, request: $_model.StopTrafficControlTaskRequest): Promise<$_model.StopTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Syncs the replay log for a feature consistency check job.
   * 
   * @param request - SyncFeatureConsistencyCheckJobReplayLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLogWithOptions(request: $_model.SyncFeatureConsistencyCheckJobReplayLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncFeatureConsistencyCheckJobReplayLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextFeatures)) {
      body["ContextFeatures"] = request.contextFeatures;
    }

    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.generatedFeatures)) {
      body["GeneratedFeatures"] = request.generatedFeatures;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.rawFeatures)) {
      body["RawFeatures"] = request.rawFeatures;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncFeatureConsistencyCheckJobReplayLog",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/action/syncreplaylog`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncFeatureConsistencyCheckJobReplayLogResponse>(await this.callApi(params, req, runtime), new $_model.SyncFeatureConsistencyCheckJobReplayLogResponse({}));
  }

  /**
   * Syncs the replay log for a feature consistency check job.
   * 
   * @param request - SyncFeatureConsistencyCheckJobReplayLogRequest
   * @returns SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLog(request: $_model.SyncFeatureConsistencyCheckJobReplayLogRequest): Promise<$_model.SyncFeatureConsistencyCheckJobReplayLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncFeatureConsistencyCheckJobReplayLogWithOptions(request, headers, runtime);
  }

  /**
   * Terminates a feature consistency check job.
   * 
   * @param request - TerminateFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: $_model.TerminateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateFeatureConsistencyCheckJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/action/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new $_model.TerminateFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * Terminates a feature consistency check job.
   * 
   * @param request - TerminateFeatureConsistencyCheckJobRequest
   * @returns TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: $_model.TerminateFeatureConsistencyCheckJobRequest): Promise<$_model.TerminateFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * Modifies the metric configuration of an existing ABTest experiment.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to update the attributes of a specified ABTest metric, including whether to calculate significance and the aggregation method. Make sure that you have obtained the correct `ABMetricId` before calling this operation.
   * - `NeedSignificance`: Specifies whether to perform significance analysis on the current metric. Default value: `false`.
   * - `AggregationByUser`: When significance calculation is enabled, specifies whether to aggregate data by user or by sample. Default value: `false` (by sample).
   * - `Numerator` and `Denominator`: The specific definitions of the numerator and denominator used in significance calculation.
   * - `IsBinomialDistribution`: Valid only for derived metrics. Specifies whether the metric follows a binomial distribution, which affects subsequent data processing logic.
   * Note: You do not need to provide all fields at the same time. Include only the parameters whose values you want to change in the request body.
   * 
   * @param request - UpdateABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABMetricResponse
   */
  async updateABMetricWithOptions(ABMetricId: string, request: $_model.UpdateABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABMetricResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregationByUser)) {
      body["AggregationByUser"] = request.aggregationByUser;
    }

    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.denominator)) {
      body["Denominator"] = request.denominator;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isBinomialDistribution)) {
      body["IsBinomialDistribution"] = request.isBinomialDistribution;
    }

    if (!$dara.isNull(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needSignificance)) {
      body["NeedSignificance"] = request.needSignificance;
    }

    if (!$dara.isNull(request.numerator)) {
      body["Numerator"] = request.numerator;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!$dara.isNull(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABMetricResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABMetricResponse({}));
  }

  /**
   * Modifies the metric configuration of an existing ABTest experiment.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to update the attributes of a specified ABTest metric, including whether to calculate significance and the aggregation method. Make sure that you have obtained the correct `ABMetricId` before calling this operation.
   * - `NeedSignificance`: Specifies whether to perform significance analysis on the current metric. Default value: `false`.
   * - `AggregationByUser`: When significance calculation is enabled, specifies whether to aggregate data by user or by sample. Default value: `false` (by sample).
   * - `Numerator` and `Denominator`: The specific definitions of the numerator and denominator used in significance calculation.
   * - `IsBinomialDistribution`: Valid only for derived metrics. Specifies whether the metric follows a binomial distribution, which affects subsequent data processing logic.
   * Note: You do not need to provide all fields at the same time. Include only the parameters whose values you want to change in the request body.
   * 
   * @param request - UpdateABMetricRequest
   * @returns UpdateABMetricResponse
   */
  async updateABMetric(ABMetricId: string, request: $_model.UpdateABMetricRequest): Promise<$_model.UpdateABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * Updates an A/B test metric group.
   * 
   * @param request - UpdateABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABMetricGroupResponse
   */
  async updateABMetricGroupWithOptions(ABMetricGroupId: string, request: $_model.UpdateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABMetricGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABMetricGroupResponse({}));
  }

  /**
   * Updates an A/B test metric group.
   * 
   * @param request - UpdateABMetricGroupRequest
   * @returns UpdateABMetricGroupResponse
   */
  async updateABMetricGroup(ABMetricGroupId: string, request: $_model.UpdateABMetricGroupRequest): Promise<$_model.UpdateABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * Updates a crowd\\"s information, such as its name and description.
   * 
   * @param request - UpdateCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCrowdResponse
   */
  async updateCrowdWithOptions(CrowdId: string, request: $_model.UpdateCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCrowdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCrowdResponse({}));
  }

  /**
   * Updates a crowd\\"s information, such as its name and description.
   * 
   * @param request - UpdateCrowdRequest
   * @returns UpdateCrowdResponse
   */
  async updateCrowd(CrowdId: string, request: $_model.UpdateCrowdRequest): Promise<$_model.UpdateCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified data diagnosis task.
   * 
   * @remarks
   * ## Request
   * This API updates the configuration of an existing data diagnosis task, including the instance ID, task name, task type, and specific configuration content. Provide the `DataDiagnosisId` in the request path to identify the task to update. You must also specify the `Config` parameter based on the task `Type`. For periodic runs, set the execution time in the `CycleTime` field. If a periodic run is not required, omit this field.
   * ## Usage notes
   * - `DataDiagnosisId` is a required path parameter that uniquely identifies a data diagnosis task.
   * - The structure of the `Config` field varies depending on the value of `Type`. Refer to the examples in this document for configuration details.
   * - To disable periodic runs, omit the `CycleTime` field.
   * - When updating a task for two-table join analysis (`JoinTables`), provide the information for the left and right tables, including `LeftTableMetaId` and `RightTableMetaId`.
   * - The `InstanceId`, `Name`, and `Type` parameters are required for all types of data diagnosis tasks.
   * 
   * @param request - UpdateDataDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataDiagnosisResponse
   */
  async updateDataDiagnosisWithOptions(DataDiagnosisId: string, request: $_model.UpdateDataDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.cycleTime)) {
      body["CycleTime"] = request.cycleTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.leftTableMetaId)) {
      body["LeftTableMetaId"] = request.leftTableMetaId;
    }

    if (!$dara.isNull(request.leftTablePartitionField)) {
      body["LeftTablePartitionField"] = request.leftTablePartitionField;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.partitionField)) {
      body["PartitionField"] = request.partitionField;
    }

    if (!$dara.isNull(request.rightTableMetaId)) {
      body["RightTableMetaId"] = request.rightTableMetaId;
    }

    if (!$dara.isNull(request.rightTablePartitionField)) {
      body["RightTablePartitionField"] = request.rightTablePartitionField;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.topNQuantity)) {
      body["TopNQuantity"] = request.topNQuantity;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataDiagnosis",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/datadiagnoses/${$dara.URL.percentEncode(DataDiagnosisId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataDiagnosisResponse({}));
  }

  /**
   * Updates the configuration of a specified data diagnosis task.
   * 
   * @remarks
   * ## Request
   * This API updates the configuration of an existing data diagnosis task, including the instance ID, task name, task type, and specific configuration content. Provide the `DataDiagnosisId` in the request path to identify the task to update. You must also specify the `Config` parameter based on the task `Type`. For periodic runs, set the execution time in the `CycleTime` field. If a periodic run is not required, omit this field.
   * ## Usage notes
   * - `DataDiagnosisId` is a required path parameter that uniquely identifies a data diagnosis task.
   * - The structure of the `Config` field varies depending on the value of `Type`. Refer to the examples in this document for configuration details.
   * - To disable periodic runs, omit the `CycleTime` field.
   * - When updating a task for two-table join analysis (`JoinTables`), provide the information for the left and right tables, including `LeftTableMetaId` and `RightTableMetaId`.
   * - The `InstanceId`, `Name`, and `Type` parameters are required for all types of data diagnosis tasks.
   * 
   * @param request - UpdateDataDiagnosisRequest
   * @returns UpdateDataDiagnosisResponse
   */
  async updateDataDiagnosis(DataDiagnosisId: string, request: $_model.UpdateDataDiagnosisRequest): Promise<$_model.UpdateDataDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDataDiagnosisWithOptions(DataDiagnosisId, request, headers, runtime);
  }

  /**
   * Updates a specific engine configuration.
   * 
   * @param request - UpdateEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEngineConfigResponse
   */
  async updateEngineConfigWithOptions(EngineConfigId: string, request: $_model.UpdateEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEngineConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEngineConfigResponse({}));
  }

  /**
   * Updates a specific engine configuration.
   * 
   * @param request - UpdateEngineConfigRequest
   * @returns UpdateEngineConfigResponse
   */
  async updateEngineConfig(EngineConfigId: string, request: $_model.UpdateEngineConfigRequest): Promise<$_model.UpdateEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * Updates the properties of a specified experiment, such as its name.
   * 
   * @param request - UpdateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: $_model.UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExperimentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExperimentResponse({}));
  }

  /**
   * Updates the properties of a specified experiment, such as its name.
   * 
   * @param request - UpdateExperimentRequest
   * @returns UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: $_model.UpdateExperimentRequest): Promise<$_model.UpdateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Updates information for a specified experiment group, such as its name and description.
   * 
   * @param request - UpdateExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentGroupResponse
   */
  async updateExperimentGroupWithOptions(ExperimentGroupId: string, request: $_model.UpdateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!$dara.isNull(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!$dara.isNull(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!$dara.isNull(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!$dara.isNull(request.reservcedBuckets)) {
      body["ReservcedBuckets"] = request.reservcedBuckets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExperimentGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExperimentGroupResponse({}));
  }

  /**
   * Updates information for a specified experiment group, such as its name and description.
   * 
   * @param request - UpdateExperimentGroupRequest
   * @returns UpdateExperimentGroupResponse
   */
  async updateExperimentGroup(ExperimentGroupId: string, request: $_model.UpdateExperimentGroupRequest): Promise<$_model.UpdateExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * Updates the configuration details of a feature consistency check task, such as the name.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to update the configuration of an existing feature consistency check task. By providing new configuration parameters, you can modify multiple properties including the instance ID, name, and scene ID. Ensure that all required parameters are included in the request, and provide optional parameters as needed.
   * - **FeatureConsistencyCheckJobConfigId** is a path parameter that specifies the feature consistency check task to update.
   * - All other parameters are in the request body. Some are required (such as InstanceId and Name), and the rest are optional.
   * - The SampleRate value must be a floating-point number between 0 and 1, which indicates the sampling ratio.
   * - If you use FeatureStore-related features, make sure that you correctly set the IsUseFeatureStore flag and the related FeatureStore* fields.
   * - For network configuration parameters (such as VpcId and SwitchId), make sure that the values match your Alibaba Cloud environment.
   * 
   * @param request - UpdateFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: $_model.UpdateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetMountPath)) {
      body["DatasetMountPath"] = request.datasetMountPath;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.datasetUri)) {
      body["DatasetUri"] = request.datasetUri;
    }

    if (!$dara.isNull(request.defaultRoute)) {
      body["DefaultRoute"] = request.defaultRoute;
    }

    if (!$dara.isNull(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!$dara.isNull(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!$dara.isNull(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!$dara.isNull(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!$dara.isNull(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!$dara.isNull(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!$dara.isNull(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!$dara.isNull(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!$dara.isNull(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!$dara.isNull(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!$dara.isNull(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!$dara.isNull(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!$dara.isNull(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!$dara.isNull(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isUseFeatureStore)) {
      body["IsUseFeatureStore"] = request.isUseFeatureStore;
    }

    if (!$dara.isNull(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!$dara.isNull(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!$dara.isNull(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!$dara.isNull(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.maxcomputeSchema)) {
      body["MaxcomputeSchema"] = request.maxcomputeSchema;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!$dara.isNull(request.predictWorkerCount)) {
      body["PredictWorkerCount"] = request.predictWorkerCount;
    }

    if (!$dara.isNull(request.predictWorkerCpu)) {
      body["PredictWorkerCpu"] = request.predictWorkerCpu;
    }

    if (!$dara.isNull(request.predictWorkerMemory)) {
      body["PredictWorkerMemory"] = request.predictWorkerMemory;
    }

    if (!$dara.isNull(request.resourceConfig)) {
      body["ResourceConfig"] = request.resourceConfig;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.switchId)) {
      body["SwitchId"] = request.switchId;
    }

    if (!$dara.isNull(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!$dara.isNull(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!$dara.isNull(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!$dara.isNull(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * Updates the configuration details of a feature consistency check task, such as the name.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to update the configuration of an existing feature consistency check task. By providing new configuration parameters, you can modify multiple properties including the instance ID, name, and scene ID. Ensure that all required parameters are included in the request, and provide optional parameters as needed.
   * - **FeatureConsistencyCheckJobConfigId** is a path parameter that specifies the feature consistency check task to update.
   * - All other parameters are in the request body. Some are required (such as InstanceId and Name), and the rest are optional.
   * - The SampleRate value must be a floating-point number between 0 and 1, which indicates the sampling ratio.
   * - If you use FeatureStore-related features, make sure that you correctly set the IsUseFeatureStore flag and the related FeatureStore* fields.
   * - For network configuration parameters (such as VpcId and SwitchId), make sure that the values match your Alibaba Cloud environment.
   * 
   * @param request - UpdateFeatureConsistencyCheckJobConfigRequest
   * @returns UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: $_model.UpdateFeatureConsistencyCheckJobConfigRequest): Promise<$_model.UpdateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * Updates a specified resource for a specified instance.
   * 
   * @param request - UpdateInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResourceResponse
   */
  async updateInstanceResourceWithOptions(InstanceId: string, ResourceId: string, request: $_model.UpdateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResourceResponse({}));
  }

  /**
   * Updates a specified resource for a specified instance.
   * 
   * @param request - UpdateInstanceResourceRequest
   * @returns UpdateInstanceResourceResponse
   */
  async updateInstanceResource(InstanceId: string, ResourceId: string, request: $_model.UpdateInstanceResourceRequest): Promise<$_model.UpdateInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates a laboratory\\"s information, such as its name.
   * 
   * @param request - UpdateLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLaboratoryResponse
   */
  async updateLaboratoryWithOptions(LaboratoryId: string, request: $_model.UpdateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!$dara.isNull(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLaboratoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLaboratoryResponse({}));
  }

  /**
   * Updates a laboratory\\"s information, such as its name.
   * 
   * @param request - UpdateLaboratoryRequest
   * @returns UpdateLaboratoryResponse
   */
  async updateLaboratory(LaboratoryId: string, request: $_model.UpdateLaboratoryRequest): Promise<$_model.UpdateLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * Updates the name and description of a specified layer.
   * 
   * @param request - UpdateLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLayerResponse
   */
  async updateLayerWithOptions(LayerId: string, request: $_model.UpdateLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLayerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLayerResponse({}));
  }

  /**
   * Updates the name and description of a specified layer.
   * 
   * @param request - UpdateLayerRequest
   * @returns UpdateLayerResponse
   */
  async updateLayer(LayerId: string, request: $_model.UpdateLayerRequest): Promise<$_model.UpdateLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * Updates information for a specified parameter, such as its value.
   * 
   * @param request - UpdateParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParamResponse
   */
  async updateParamWithOptions(ParamId: string, request: $_model.UpdateParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateParamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${$dara.URL.percentEncode(ParamId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateParamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateParamResponse({}));
  }

  /**
   * Updates information for a specified parameter, such as its value.
   * 
   * @param request - UpdateParamRequest
   * @returns UpdateParamResponse
   */
  async updateParam(ParamId: string, request: $_model.UpdateParamRequest): Promise<$_model.UpdateParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * Updates the recall management configuration, including the instance ID, password, and network configuration.
   * 
   * @remarks
   * ## Request
   * - `InstanceId` is required. It specifies the instance to update.
   * - `Password` and `NetworkConfigs` are optional.
   * - Use `NetworkConfigs` to define the network by specifying the Virtual Private Cloud (VPC) ID (`VpcId`) and mapping availability zones to VSwitch IDs (`VswitchIds`).
   * - Note: Ensure that sensitive information, such as the password, is transmitted securely.
   * 
   * @param request - UpdateRecallManagementConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecallManagementConfigResponse
   */
  async updateRecallManagementConfigWithOptions(request: $_model.UpdateRecallManagementConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecallManagementConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkConfigs)) {
      body["NetworkConfigs"] = request.networkConfigs;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecallManagementConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementconfigs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecallManagementConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecallManagementConfigResponse({}));
  }

  /**
   * Updates the recall management configuration, including the instance ID, password, and network configuration.
   * 
   * @remarks
   * ## Request
   * - `InstanceId` is required. It specifies the instance to update.
   * - `Password` and `NetworkConfigs` are optional.
   * - Use `NetworkConfigs` to define the network by specifying the Virtual Private Cloud (VPC) ID (`VpcId`) and mapping availability zones to VSwitch IDs (`VswitchIds`).
   * - Note: Ensure that sensitive information, such as the password, is transmitted securely.
   * 
   * @param request - UpdateRecallManagementConfigRequest
   * @returns UpdateRecallManagementConfigResponse
   */
  async updateRecallManagementConfig(request: $_model.UpdateRecallManagementConfigRequest): Promise<$_model.UpdateRecallManagementConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRecallManagementConfigWithOptions(request, headers, runtime);
  }

  /**
   * Updates the instance ID and description of a specified recall management service.
   * 
   * @remarks
   * ## Request description
   * This operation updates the instance ID and description of a specific recall management service. Make sure to specify the `InstanceId` and `Description` fields in the request body.
   * - **RecallManagementServiceId**: The unique identifier of the recall management service.
   * - **InstanceId**: The instance ID to associate with this recall management service.
   * - **Description**: A new description for the recall management service.
   * Note: You must provide all required parameters, or the update may fail.
   * 
   * @param request - UpdateRecallManagementServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecallManagementServiceResponse
   */
  async updateRecallManagementServiceWithOptions(RecallManagementServiceId: string, request: $_model.UpdateRecallManagementServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecallManagementServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecallManagementService",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecallManagementServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecallManagementServiceResponse({}));
  }

  /**
   * Updates the instance ID and description of a specified recall management service.
   * 
   * @remarks
   * ## Request description
   * This operation updates the instance ID and description of a specific recall management service. Make sure to specify the `InstanceId` and `Description` fields in the request body.
   * - **RecallManagementServiceId**: The unique identifier of the recall management service.
   * - **InstanceId**: The instance ID to associate with this recall management service.
   * - **Description**: A new description for the recall management service.
   * Note: You must provide all required parameters, or the update may fail.
   * 
   * @param request - UpdateRecallManagementServiceRequest
   * @returns UpdateRecallManagementServiceResponse
   */
  async updateRecallManagementService(RecallManagementServiceId: string, request: $_model.UpdateRecallManagementServiceRequest): Promise<$_model.UpdateRecallManagementServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRecallManagementServiceWithOptions(RecallManagementServiceId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specific Recall Management Service version.
   * 
   * @remarks
   * ## Request
   * This API updates the recall and merge configurations for a specific recall management service version. Your request must include the correct `InstanceId` and the configurations to update. Refer to the parameter descriptions for details on required parameters.
   * 
   * @param request - UpdateRecallManagementServiceVersionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecallManagementServiceVersionConfigResponse
   */
  async updateRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.UpdateRecallManagementServiceVersionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecallManagementServiceVersionConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeConfig)) {
      body["MergeConfig"] = request.mergeConfig;
    }

    if (!$dara.isNull(request.recallConfig)) {
      body["RecallConfig"] = request.recallConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecallManagementServiceVersionConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementservices/${$dara.URL.percentEncode(RecallManagementServiceId)}/versions/${$dara.URL.percentEncode(RecallManagementServiceVersionId)}/configs/${$dara.URL.percentEncode(RecallManagementServiceVersionConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecallManagementServiceVersionConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecallManagementServiceVersionConfigResponse({}));
  }

  /**
   * Updates the configuration of a specific Recall Management Service version.
   * 
   * @remarks
   * ## Request
   * This API updates the recall and merge configurations for a specific recall management service version. Your request must include the correct `InstanceId` and the configurations to update. Refer to the parameter descriptions for details on required parameters.
   * 
   * @param request - UpdateRecallManagementServiceVersionConfigRequest
   * @returns UpdateRecallManagementServiceVersionConfigResponse
   */
  async updateRecallManagementServiceVersionConfig(RecallManagementServiceId: string, RecallManagementServiceVersionId: string, RecallManagementServiceVersionConfigId: string, request: $_model.UpdateRecallManagementServiceVersionConfigRequest): Promise<$_model.UpdateRecallManagementServiceVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRecallManagementServiceVersionConfigWithOptions(RecallManagementServiceId, RecallManagementServiceVersionId, RecallManagementServiceVersionConfigId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a recall management table specified by its ID.
   * 
   * @remarks
   * ## Request details
   * - Updates the recall management table specified by `RecallManagementTableId`.
   * - You can enable fluctuation thresholds for the row count or data size and define the specific ranges for these thresholds.
   * - You can add or modify fields in the table, including their names, types, and attributes.
   * - The `InstanceId` parameter is required and identifies the specific instance.
   * - For vector-related fields, you can also specify the vector dimension and metric type.
   * - Note: Optional parameters in the request body selectively update the target table.
   * 
   * @param request - UpdateRecallManagementTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecallManagementTableResponse
   */
  async updateRecallManagementTableWithOptions(RecallManagementTableId: string, request: $_model.UpdateRecallManagementTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecallManagementTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableDataSizeFluctuationThreshold)) {
      body["EnableDataSizeFluctuationThreshold"] = request.enableDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.enableRowCountFluctuationThreshold)) {
      body["EnableRowCountFluctuationThreshold"] = request.enableRowCountFluctuationThreshold;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.indexVersionId)) {
      body["IndexVersionId"] = request.indexVersionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxDataSizeFluctuationThreshold)) {
      body["MaxDataSizeFluctuationThreshold"] = request.maxDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.maxRowCountFluctuationThreshold)) {
      body["MaxRowCountFluctuationThreshold"] = request.maxRowCountFluctuationThreshold;
    }

    if (!$dara.isNull(request.minDataSizeFluctuationThreshold)) {
      body["MinDataSizeFluctuationThreshold"] = request.minDataSizeFluctuationThreshold;
    }

    if (!$dara.isNull(request.minRowCountFluctuationThreshold)) {
      body["MinRowCountFluctuationThreshold"] = request.minRowCountFluctuationThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecallManagementTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recallmanagementtables/${$dara.URL.percentEncode(RecallManagementTableId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecallManagementTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecallManagementTableResponse({}));
  }

  /**
   * Updates the configuration of a recall management table specified by its ID.
   * 
   * @remarks
   * ## Request details
   * - Updates the recall management table specified by `RecallManagementTableId`.
   * - You can enable fluctuation thresholds for the row count or data size and define the specific ranges for these thresholds.
   * - You can add or modify fields in the table, including their names, types, and attributes.
   * - The `InstanceId` parameter is required and identifies the specific instance.
   * - For vector-related fields, you can also specify the vector dimension and metric type.
   * - Note: Optional parameters in the request body selectively update the target table.
   * 
   * @param request - UpdateRecallManagementTableRequest
   * @returns UpdateRecallManagementTableResponse
   */
  async updateRecallManagementTable(RecallManagementTableId: string, request: $_model.UpdateRecallManagementTableRequest): Promise<$_model.UpdateRecallManagementTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRecallManagementTableWithOptions(RecallManagementTableId, request, headers, runtime);
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - UpdateResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceRuleResponse
   */
  async updateResourceRuleWithOptions(ResourceRuleId: string, request: $_model.UpdateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!$dara.isNull(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!$dara.isNull(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceRuleResponse({}));
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - UpdateResourceRuleRequest
   * @returns UpdateResourceRuleResponse
   */
  async updateResourceRule(ResourceRuleId: string, request: $_model.UpdateResourceRuleRequest): Promise<$_model.UpdateResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 更新资源规则条目
   * 
   * @param request - UpdateResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: $_model.UpdateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceRuleItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items/${$dara.URL.percentEncode(ResourceRuleItemId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceRuleItemResponse({}));
  }

  /**
   * 更新资源规则条目
   * 
   * @param request - UpdateResourceRuleItemRequest
   * @returns UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: $_model.UpdateResourceRuleItemRequest): Promise<$_model.UpdateResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * Updates information for a scene, such as its name and description.
   * 
   * @param request - UpdateSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSceneResponse
   */
  async updateSceneWithOptions(SceneId: string, request: $_model.UpdateSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSceneResponse({}));
  }

  /**
   * Updates information for a scene, such as its name and description.
   * 
   * @param request - UpdateSceneRequest
   * @returns UpdateSceneResponse
   */
  async updateScene(SceneId: string, request: $_model.UpdateSceneRequest): Promise<$_model.UpdateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * Updates a data table.
   * 
   * @param request - UpdateTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableMetaResponse
   */
  async updateTableMetaWithOptions(TableMetaId: string, request: $_model.UpdateTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      body["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableMetaResponse({}));
  }

  /**
   * Updates a data table.
   * 
   * @param request - UpdateTableMetaRequest
   * @returns UpdateTableMetaResponse
   */
  async updateTableMeta(TableMetaId: string, request: $_model.UpdateTableMetaRequest): Promise<$_model.UpdateTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a traffic control target, including its control period, conditions, and value.
   * 
   * @remarks
   * ## Description
   * - Updates a traffic control target specified by its ID.
   * - `TrafficControlTargetId` is a path parameter that specifies the ID of the traffic control target to update.
   * - The `ItemConditionType` parameter specifies the format of the item condition, which can be either `Array` or `Expression`. Based on your selection, you must provide a value for either the `ItemConditionArray` or `ItemConditionExpress` parameter.
   * - If `NewProductRegulation` is set to `true`, the control rule applies to a new product.
   * - The `StatisPeriod` parameter specifies the statistics period. Valid values are `Daily` and `hourly`.
   * - Ensure that the time interval between `StartTime` and `EndTime` is reasonable and meets your business requirements.
   * 
   * @param request - UpdateTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: $_model.UpdateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.event)) {
      body["Event"] = request.event;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!$dara.isNull(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrafficControlTargetResponse({}));
  }

  /**
   * Updates the configuration of a traffic control target, including its control period, conditions, and value.
   * 
   * @remarks
   * ## Description
   * - Updates a traffic control target specified by its ID.
   * - `TrafficControlTargetId` is a path parameter that specifies the ID of the traffic control target to update.
   * - The `ItemConditionType` parameter specifies the format of the item condition, which can be either `Array` or `Expression`. Based on your selection, you must provide a value for either the `ItemConditionArray` or `ItemConditionExpress` parameter.
   * - If `NewProductRegulation` is set to `true`, the control rule applies to a new product.
   * - The `StatisPeriod` parameter specifies the statistics period. Valid values are `Daily` and `hourly`.
   * - Ensure that the time interval between `StartTime` and `EndTime` is reasonable and meets your business requirements.
   * 
   * @param request - UpdateTrafficControlTargetRequest
   * @returns UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTarget(TrafficControlTargetId: string, request: $_model.UpdateTrafficControlTargetRequest): Promise<$_model.UpdateTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * Updates the configuration and target of a specified traffic control task.
   * 
   * @remarks
   * ## Usage notes
   * - Use this API to update an existing traffic control task.
   * - When `ExecutionTime` is set to `TimeRange`, you must also provide `StartTime` and `EndTime`.
   * - Each element in the `TrafficControlTargets` array is a traffic control target. Ensure each target\\"s time range, condition type, and other information are complete and valid.
   * - If you set `UserConditionType` or `ItemConditionType` to `Expression`, you must specify the corresponding expression field (for example, `UserConditionExpress`).
   * - `ServiceIds` and `EffectiveSceneIds` are optional parameters. If you include them, ensure the ID lists are correctly formatted.
   * - Ensure you complete all required fields to avoid a failed request.
   * 
   * @param request - UpdateTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: $_model.UpdateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!$dara.isNull(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!$dara.isNull(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!$dara.isNull(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.effectiveSceneIds)) {
      body["EffectiveSceneIds"] = request.effectiveSceneIds;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.flinkResourceId)) {
      body["FlinkResourceId"] = request.flinkResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.preExperimentIds)) {
      body["PreExperimentIds"] = request.preExperimentIds;
    }

    if (!$dara.isNull(request.prodExperimentIds)) {
      body["ProdExperimentIds"] = request.prodExperimentIds;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceIds)) {
      body["ServiceIds"] = request.serviceIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisBaeaviorConditionArray)) {
      body["StatisBaeaviorConditionArray"] = request.statisBaeaviorConditionArray;
    }

    if (!$dara.isNull(request.statisBehaviorConditionArray)) {
      body["StatisBehaviorConditionArray"] = request.statisBehaviorConditionArray;
    }

    if (!$dara.isNull(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!$dara.isNull(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!$dara.isNull(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!$dara.isNull(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!$dara.isNull(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!$dara.isNull(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!$dara.isNull(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrafficControlTaskResponse({}));
  }

  /**
   * Updates the configuration and target of a specified traffic control task.
   * 
   * @remarks
   * ## Usage notes
   * - Use this API to update an existing traffic control task.
   * - When `ExecutionTime` is set to `TimeRange`, you must also provide `StartTime` and `EndTime`.
   * - Each element in the `TrafficControlTargets` array is a traffic control target. Ensure each target\\"s time range, condition type, and other information are complete and valid.
   * - If you set `UserConditionType` or `ItemConditionType` to `Expression`, you must specify the corresponding expression field (for example, `UserConditionExpress`).
   * - `ServiceIds` and `EffectiveSceneIds` are optional parameters. If you include them, ensure the ID lists are correctly formatted.
   * - Ensure you complete all required fields to avoid a failed request.
   * 
   * @param request - UpdateTrafficControlTaskRequest
   * @returns UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTask(TrafficControlTaskId: string, request: $_model.UpdateTrafficControlTaskRequest): Promise<$_model.UpdateTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * Updates the traffic parameters for a specified traffic control task, including target traffic and actual traffic.
   * 
   * @remarks
   * ## Request
   * This API updates the traffic configuration for a specific traffic control task. The configuration includes the traffic control target ID, record time, target traffic, and overall traffic. Ensure that the provided`TrafficControlTaskId` is valid and within your permission scope. Additionally, each object in the`Traffics` array must contain the required fields.
   * 
   * @param request - UpdateTrafficControlTaskTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: $_model.UpdateTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrafficControlTaskTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.traffics)) {
      body["Traffics"] = request.traffics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/traffic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrafficControlTaskTrafficResponse({}));
  }

  /**
   * Updates the traffic parameters for a specified traffic control task, including target traffic and actual traffic.
   * 
   * @remarks
   * ## Request
   * This API updates the traffic configuration for a specific traffic control task. The configuration includes the traffic control target ID, record time, target traffic, and overall traffic. Ensure that the provided`TrafficControlTaskId` is valid and within your permission scope. Additionally, each object in the`Traffics` array must contain the required fields.
   * 
   * @param request - UpdateTrafficControlTaskTrafficRequest
   * @returns UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTraffic(TrafficControlTaskId: string, request: $_model.UpdateTrafficControlTaskTrafficRequest): Promise<$_model.UpdateTrafficControlTaskTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 上传数据
   * 
   * @param request - UploadRecommendationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRecommendationDataResponse
   */
  async uploadRecommendationDataWithOptions(request: $_model.UploadRecommendationDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadRecommendationDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRecommendationData",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recommendationdata/action/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadRecommendationDataResponse>(await this.callApi(params, req, runtime), new $_model.UploadRecommendationDataResponse({}));
  }

  /**
   * 上传数据
   * 
   * @param request - UploadRecommendationDataRequest
   * @returns UploadRecommendationDataResponse
   */
  async uploadRecommendationData(request: $_model.UploadRecommendationDataRequest): Promise<$_model.UploadRecommendationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadRecommendationDataWithOptions(request, headers, runtime);
  }

}
