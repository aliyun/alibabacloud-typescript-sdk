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
    this._endpoint = this.getEndpoint("datahub", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a project.
   * 
   * @remarks
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a project.
   * 
   * @remarks
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 创建Subscription资源
   * 
   * @remarks
   * 创建订阅信息
   * 
   * @param request - CreateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscriptionResponse
   */
  async createSubscriptionWithOptions(request: $_model.CreateSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.application)) {
      query["Application"] = request.application;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubscription",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubscriptionResponse({}));
  }

  /**
   * 创建Subscription资源
   * 
   * @remarks
   * 创建订阅信息
   * 
   * @param request - CreateSubscriptionRequest
   * @returns CreateSubscriptionResponse
   */
  async createSubscription(request: $_model.CreateSubscriptionRequest): Promise<$_model.CreateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubscriptionWithOptions(request, runtime);
  }

  /**
   * A topic is the smallest unit for DataHub subscription and publishing. You can use a topic to represent a type or category of streaming data.
   * 
   * @remarks
   * Creates a topic resource.
   * 
   * @param request - CreateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(request: $_model.CreateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enableSchemaRegistry)) {
      query["EnableSchemaRegistry"] = request.enableSchemaRegistry;
    }

    if (!$dara.isNull(request.expandMode)) {
      query["ExpandMode"] = request.expandMode;
    }

    if (!$dara.isNull(request.lifecycle)) {
      query["Lifecycle"] = request.lifecycle;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.recordSchema)) {
      query["RecordSchema"] = request.recordSchema;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["ShardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTopicResponse>(await this.callApi(params, req, runtime), new $_model.CreateTopicResponse({}));
  }

  /**
   * A topic is the smallest unit for DataHub subscription and publishing. You can use a topic to represent a type or category of streaming data.
   * 
   * @remarks
   * Creates a topic resource.
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(request: $_model.CreateTopicRequest): Promise<$_model.CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * Deletes a project. Before deleting a project, delete all resources under the project, including topics, synchronization tasks, and subscription tasks.
   * 
   * @remarks
   * Deletes a project.
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a project. Before deleting a project, delete all resources under the project, including topics, synchronization tasks, and subscription tasks.
   * 
   * @remarks
   * Deletes a project.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * 删除Subscription资源
   * 
   * @remarks
   * 删除订阅任务
   * 
   * @param request - DeleteSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubscriptionResponse
   */
  async deleteSubscriptionWithOptions(request: $_model.DeleteSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubscription",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubscriptionResponse({}));
  }

  /**
   * 删除Subscription资源
   * 
   * @remarks
   * 删除订阅任务
   * 
   * @param request - DeleteSubscriptionRequest
   * @returns DeleteSubscriptionResponse
   */
  async deleteSubscription(request: $_model.DeleteSubscriptionRequest): Promise<$_model.DeleteSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubscriptionWithOptions(request, runtime);
  }

  /**
   * Deletes a topic resource. Before deleting a topic resource, delete all subscriptions and sync tasks under the topic.
   * 
   * @remarks
   * Deletes a topic resource.
   * 
   * @param request - DeleteTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(request: $_model.DeleteTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTopicResponse({}));
  }

  /**
   * Deletes a topic resource. Before deleting a topic resource, delete all subscriptions and sync tasks under the topic.
   * 
   * @remarks
   * Deletes a topic resource.
   * 
   * @param request - DeleteTopicRequest
   * @returns DeleteTopicResponse
   */
  async deleteTopic(request: $_model.DeleteTopicRequest): Promise<$_model.DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * Queries the information about a synchronization task.
   * 
   * @remarks
   * Queries the information about a synchronization task.
   * 
   * @param request - GetConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectorResponse
   */
  async getConnectorWithOptions(request: $_model.GetConnectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnector",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectorResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectorResponse({}));
  }

  /**
   * Queries the information about a synchronization task.
   * 
   * @remarks
   * Queries the information about a synchronization task.
   * 
   * @param request - GetConnectorRequest
   * @returns GetConnectorResponse
   */
  async getConnector(request: $_model.GetConnectorRequest): Promise<$_model.GetConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectorWithOptions(request, runtime);
  }

  /**
   * Queries the information about a consumer group.
   * 
   * @remarks
   * Queries the information about a consumer group.
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * Queries the information about a consumer group.
   * 
   * @remarks
   * Queries the information about a consumer group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries project information.
   * 
   * @remarks
   * Queries project information.
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries project information.
   * 
   * @remarks
   * Queries project information.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * Reads data from a specified topic. This operation is primarily used for debugging. For high-volume data reading, refer to the SDK documentation.
   * 
   * @remarks
   * This operation is intended for debugging purposes. Do not use this operation to read large amounts of data.
   * 
   * @param request - GetRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordsResponse
   */
  async getRecordsWithOptions(request: $_model.GetRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.shardId)) {
      query["ShardId"] = request.shardId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecords",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordsResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordsResponse({}));
  }

  /**
   * Reads data from a specified topic. This operation is primarily used for debugging. For high-volume data reading, refer to the SDK documentation.
   * 
   * @remarks
   * This operation is intended for debugging purposes. Do not use this operation to read large amounts of data.
   * 
   * @param request - GetRecordsRequest
   * @returns GetRecordsResponse
   */
  async getRecords(request: $_model.GetRecordsRequest): Promise<$_model.GetRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordsWithOptions(request, runtime);
  }

  /**
   * Queries schema information.
   * 
   * @remarks
   * Queries schema information.
   * 
   * @param request - GetSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchemaResponse
   */
  async getSchemaWithOptions(request: $_model.GetSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSchemaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchema",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetSchemaResponse({}));
  }

  /**
   * Queries schema information.
   * 
   * @remarks
   * Queries schema information.
   * 
   * @param request - GetSchemaRequest
   * @returns GetSchemaResponse
   */
  async getSchema(request: $_model.GetSchemaRequest): Promise<$_model.GetSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemaWithOptions(request, runtime);
  }

  /**
   * Queries subscription information.
   * 
   * @remarks
   * Queries subscription information.
   * 
   * @param request - GetSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionResponse
   */
  async getSubscriptionWithOptions(request: $_model.GetSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.subscriptionId)) {
      query["SubscriptionId"] = request.subscriptionId;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscription",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionResponse({}));
  }

  /**
   * Queries subscription information.
   * 
   * @remarks
   * Queries subscription information.
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: $_model.GetSubscriptionRequest): Promise<$_model.GetSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionWithOptions(request, runtime);
  }

  /**
   * Queries topic information.
   * 
   * @remarks
   * Queries topic information.
   * 
   * @param request - GetTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
  async getTopicWithOptions(request: $_model.GetTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopic",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicResponse({}));
  }

  /**
   * Queries topic information.
   * 
   * @remarks
   * Queries topic information.
   * 
   * @param request - GetTopicRequest
   * @returns GetTopicResponse
   */
  async getTopic(request: $_model.GetTopicRequest): Promise<$_model.GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of synchronization tasks.
   * 
   * @remarks
   * Queries the list of synchronization tasks.
   * 
   * @param request - ListConnectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorsResponse
   */
  async listConnectorsWithOptions(request: $_model.ListConnectorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.pure)) {
      query["Pure"] = request.pure;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnectors",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectorsResponse({}));
  }

  /**
   * Retrieves a list of synchronization tasks.
   * 
   * @remarks
   * Queries the list of synchronization tasks.
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of consumer groups.
   * 
   * @remarks
   * Queries the list of consumer groups.
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.pure)) {
      query["Pure"] = request.pure;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Retrieves a list of consumer groups.
   * 
   * @remarks
   * Queries the list of consumer groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of projects.
   * 
   * @remarks
   * Queries the list of projects.
   * 
   * @param request - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pure)) {
      query["Pure"] = request.pure;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * Retrieves a list of projects.
   * 
   * @remarks
   * Queries the list of projects.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * Lists schemas.
   * 
   * @remarks
   * Queries schema list information.
   * 
   * @param request - ListSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemasResponse
   */
  async listSchemasWithOptions(request: $_model.ListSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemas",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemasResponse({}));
  }

  /**
   * Lists schemas.
   * 
   * @remarks
   * Queries schema list information.
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(request: $_model.ListSchemasRequest): Promise<$_model.ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemasWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of subscriptions.
   * 
   * @remarks
   * Queries subscription list information.
   * 
   * @param request - ListSubscriptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionsResponse
   */
  async listSubscriptionsWithOptions(request: $_model.ListSubscriptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubscriptionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubscriptions",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubscriptionsResponse({}));
  }

  /**
   * Retrieves a list of subscriptions.
   * 
   * @remarks
   * Queries subscription list information.
   * 
   * @param request - ListSubscriptionsRequest
   * @returns ListSubscriptionsResponse
   */
  async listSubscriptions(request: $_model.ListSubscriptionsRequest): Promise<$_model.ListSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubscriptionsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of topics.
   * 
   * @remarks
   * Queries the list of topics.
   * 
   * @param request - ListTopicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicsResponse
   */
  async listTopicsWithOptions(request: $_model.ListTopicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.pure)) {
      query["Pure"] = request.pure;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopics",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicsResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicsResponse({}));
  }

  /**
   * Retrieves a list of topics.
   * 
   * @remarks
   * Queries the list of topics.
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(request: $_model.ListTopicsRequest): Promise<$_model.ListTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

  /**
   * Writes data to a specified topic. This operation is primarily intended for debugging. For high-volume data writes, refer to the SDK documentation.
   * 
   * @remarks
   * This operation is primarily intended for debugging. Do not use this operation to write large amounts of data.
   * 
   * @param tmpReq - PutRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutRecordsResponse
   */
  async putRecordsWithOptions(tmpReq: $_model.PutRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.PutRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.recordsShrink)) {
      query["Records"] = request.recordsShrink;
    }

    if (!$dara.isNull(request.shardId)) {
      query["ShardId"] = request.shardId;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutRecords",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutRecordsResponse>(await this.callApi(params, req, runtime), new $_model.PutRecordsResponse({}));
  }

  /**
   * Writes data to a specified topic. This operation is primarily intended for debugging. For high-volume data writes, refer to the SDK documentation.
   * 
   * @remarks
   * This operation is primarily intended for debugging. Do not use this operation to write large amounts of data.
   * 
   * @param request - PutRecordsRequest
   * @returns PutRecordsResponse
   */
  async putRecords(request: $_model.PutRecordsRequest): Promise<$_model.PutRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putRecordsWithOptions(request, runtime);
  }

  /**
   * Updates the description of a project.
   * 
   * @remarks
   * Updates the description of a project.
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * Updates the description of a project.
   * 
   * @remarks
   * Updates the description of a project.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * Updates the description of a topic.
   * 
   * @remarks
   * Updates the description of a topic.
   * 
   * @param request - UpdateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicResponse
   */
  async updateTopicWithOptions(request: $_model.UpdateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopic",
      version: "2024-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTopicResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTopicResponse({}));
  }

  /**
   * Updates the description of a topic.
   * 
   * @remarks
   * Updates the description of a topic.
   * 
   * @param request - UpdateTopicRequest
   * @returns UpdateTopicResponse
   */
  async updateTopic(request: $_model.UpdateTopicRequest): Promise<$_model.UpdateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTopicWithOptions(request, runtime);
  }

}
