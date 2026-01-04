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
   * 查询Connector信息
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
   * 查询Connector信息
   * 
   * @param request - GetConnectorRequest
   * @returns GetConnectorResponse
   */
  async getConnector(request: $_model.GetConnectorRequest): Promise<$_model.GetConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectorWithOptions(request, runtime);
  }

  /**
   * 查询Group信息
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
   * 查询Group信息
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * 查询Project资源详细信息
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
   * 查询Project资源详细信息
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * 查询Schema信息
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
   * 查询Schema信息
   * 
   * @param request - GetSchemaRequest
   * @returns GetSchemaResponse
   */
  async getSchema(request: $_model.GetSchemaRequest): Promise<$_model.GetSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemaWithOptions(request, runtime);
  }

  /**
   * 查询Subscription信息
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
   * 查询Subscription信息
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: $_model.GetSubscriptionRequest): Promise<$_model.GetSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionWithOptions(request, runtime);
  }

  /**
   * 查询Topic信息
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
   * 查询Topic信息
   * 
   * @param request - GetTopicRequest
   * @returns GetTopicResponse
   */
  async getTopic(request: $_model.GetTopicRequest): Promise<$_model.GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  /**
   * 查询Connector列表信息
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
   * 查询Connector列表信息
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  /**
   * 查询Group列表信息
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
   * 查询Group列表信息
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * 查询Project列表信息
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
   * 查询Project列表信息
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 查询Schema列表信息
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
   * 查询Schema列表信息
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(request: $_model.ListSchemasRequest): Promise<$_model.ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemasWithOptions(request, runtime);
  }

  /**
   * 查询Subscription列表信息
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
   * 查询Subscription列表信息
   * 
   * @param request - ListSubscriptionsRequest
   * @returns ListSubscriptionsResponse
   */
  async listSubscriptions(request: $_model.ListSubscriptionsRequest): Promise<$_model.ListSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubscriptionsWithOptions(request, runtime);
  }

  /**
   * 查询Topic列表信息
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
   * 查询Topic列表信息
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(request: $_model.ListTopicsRequest): Promise<$_model.ListTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

}
