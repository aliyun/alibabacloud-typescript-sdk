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
    this._endpoint = this.getEndpoint("rdsai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sends chat messages.
   * 
   * @param tmpReq - ChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesResponse
   */
  async *chatMessagesWithSSE(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatMessagesResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatMessagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.parentMessageId)) {
      query["ParentMessageId"] = request.parentMessageId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatMessages",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.ChatMessagesResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ChatMessagesResponse({}));
    }
  }

  /**
   * Sends chat messages.
   * 
   * @param tmpReq - ChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesResponse
   */
  async chatMessagesWithOptions(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesResponse> {
    tmpReq.validate();
    let request = new $_model.ChatMessagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.parentMessageId)) {
      query["ParentMessageId"] = request.parentMessageId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatMessages",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ChatMessagesResponse({}));
  }

  /**
   * Sends chat messages.
   * 
   * @param request - ChatMessagesRequest
   * @returns ChatMessagesResponse
   */
  async chatMessages(request: $_model.ChatMessagesRequest): Promise<$_model.ChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatMessagesWithOptions(request, runtime);
  }

  /**
   * Stops a conversation.
   * 
   * @param request - ChatMessagesTaskStopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesTaskStopResponse
   */
  async chatMessagesTaskStopWithOptions(request: $_model.ChatMessagesTaskStopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesTaskStopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatMessagesTaskStop",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatMessagesTaskStopResponse>(await this.callApi(params, req, runtime), new $_model.ChatMessagesTaskStopResponse({}));
  }

  /**
   * Stops a conversation.
   * 
   * @param request - ChatMessagesTaskStopRequest
   * @returns ChatMessagesTaskStopResponse
   */
  async chatMessagesTaskStop(request: $_model.ChatMessagesTaskStopRequest): Promise<$_model.ChatMessagesTaskStopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatMessagesTaskStopWithOptions(request, runtime);
  }

  /**
   * Creates an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * >  Fees of an instance are changed if the call is successful. Before you call this operation, carefully read the related topics.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBInstanceConfig)) {
      request.DBInstanceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceConfig, "DBInstanceConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceConfigShrink)) {
      query["DBInstanceConfig"] = request.DBInstanceConfigShrink;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
    }

    if (!$dara.isNull(request.dashboardUsername)) {
      query["DashboardUsername"] = request.dashboardUsername;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.initializeWithExistingData)) {
      query["InitializeWithExistingData"] = request.initializeWithExistingData;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.publicEndpointEnabled)) {
      query["PublicEndpointEnabled"] = request.publicEndpointEnabled;
    }

    if (!$dara.isNull(request.publicNetworkAccessEnabled)) {
      query["PublicNetworkAccessEnabled"] = request.publicNetworkAccessEnabled;
    }

    if (!$dara.isNull(request.RAGEnabled)) {
      query["RAGEnabled"] = request.RAGEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
  }

  /**
   * Creates an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * >  Fees of an instance are changed if the call is successful. Before you call this operation, carefully read the related topics.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - CreateAppInstanceRequest
   * @returns CreateAppInstanceResponse
   */
  async createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated agent.
   * 
   * @param tmpReq - CreateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgentWithOptions(tmpReq: $_model.CreateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillIds)) {
      request.skillIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
    }

    if (!$dara.isNull(tmpReq.tools)) {
      request.toolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enableTools)) {
      query["EnableTools"] = request.enableTools;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillIdsShrink)) {
      query["SkillIds"] = request.skillIdsShrink;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.toolsShrink)) {
      query["Tools"] = request.toolsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomAgentResponse({}));
  }

  /**
   * Creates a dedicated agent.
   * 
   * @param request - CreateCustomAgentRequest
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgent(request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomAgentWithOptions(request, runtime);
  }

  /**
   * Deletes an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * >  Fees of an instance are changed if the call is successful. Before you call this operation, carefully read the related topics.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  If you delete an RDS Supabase instance, the created RDS for PostgreSQL instance and the created NAT gateway are not automatically deleted. You must manually release the instance and delete the Internet NAT gateway and EIP.
   * 
   * @param request - DeleteAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstanceWithOptions(request: $_model.DeleteAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceResponse({}));
  }

  /**
   * Deletes an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * >  Fees of an instance are changed if the call is successful. Before you call this operation, carefully read the related topics.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  If you delete an RDS Supabase instance, the created RDS for PostgreSQL instance and the created NAT gateway are not automatically deleted. You must manually release the instance and delete the Internet NAT gateway and EIP.
   * 
   * @param request - DeleteAppInstanceRequest
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstance(request: $_model.DeleteAppInstanceRequest): Promise<$_model.DeleteAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes the dedicated agent created by a user.
   * 
   * @param request - DeleteCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgentWithOptions(request: $_model.DeleteCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAgentResponse({}));
  }

  /**
   * Deletes the dedicated agent created by a user.
   * 
   * @param request - DeleteCustomAgentRequest
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgent(request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAgentWithOptions(request, runtime);
  }

  /**
   * Queries the details of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttributeWithOptions(request: $_model.DescribeAppInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstanceAttribute",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstanceAttributeResponse({}));
  }

  /**
   * Queries the details of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttribute(request: $_model.DescribeAppInstanceAttributeRequest): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the RDS Supabase instances.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstancesWithOptions(request: $_model.DescribeAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstances",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstancesResponse({}));
  }

  /**
   * Queries the RDS Supabase instances.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstancesRequest
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstances(request: $_model.DescribeAppInstancesRequest): Promise<$_model.DescribeAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the events.
   * 
   * @param request - DescribeEventsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsListResponse
   */
  async describeEventsListWithOptions(request: $_model.DescribeEventsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventsList",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsListResponse({}));
  }

  /**
   * Queries the events.
   * 
   * @param request - DescribeEventsListRequest
   * @returns DescribeEventsListResponse
   */
  async describeEventsList(request: $_model.DescribeEventsListRequest): Promise<$_model.DescribeEventsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsListWithOptions(request, runtime);
  }

  /**
   * Queries the authentication information about an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfoWithOptions(request: $_model.DescribeInstanceAuthInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAuthInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAuthInfo",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAuthInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAuthInfoResponse({}));
  }

  /**
   * Queries the authentication information about an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfo(request: $_model.DescribeInstanceAuthInfoRequest): Promise<$_model.DescribeInstanceAuthInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAuthInfoWithOptions(request, runtime);
  }

  /**
   * Queries the endpoint of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpointsWithOptions(request: $_model.DescribeInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceEndpoints",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceEndpointsResponse({}));
  }

  /**
   * Queries the endpoint of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpoints(request: $_model.DescribeInstanceEndpointsRequest): Promise<$_model.DescribeInstanceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelists of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelistWithOptions(request: $_model.DescribeInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIpWhitelistResponse({}));
  }

  /**
   * Queries the IP address whitelists of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelist(request: $_model.DescribeInstanceIpWhitelistRequest): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIpWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the RAG agent configurations of an RDS Supabase instance.
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfigWithOptions(request: $_model.DescribeInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRAGConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRAGConfigResponse({}));
  }

  /**
   * Queries the RAG agent configurations of an RDS Supabase instance.
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfig(request: $_model.DescribeInstanceRAGConfigRequest): Promise<$_model.DescribeInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * Queries the SSL settings of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
  }

  /**
   * Queries the SSL settings of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries the storage configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  Only Object Storage Service (OSS) is supported for the storage of RDS Supabase.
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfigWithOptions(request: $_model.DescribeInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStorageConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStorageConfigResponse({}));
  }

  /**
   * Queries the storage configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  Only Object Storage Service (OSS) is supported for the storage of RDS Supabase.
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfig(request: $_model.DescribeInstanceStorageConfigRequest): Promise<$_model.DescribeInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * Queries the history conversations of a user.
   * 
   * @param request - GetConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversationsResponse
   */
  async getConversationsWithOptions(request: $_model.GetConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lastId)) {
      query["LastId"] = request.lastId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.pinned)) {
      query["Pinned"] = request.pinned;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConversations",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConversationsResponse>(await this.callApi(params, req, runtime), new $_model.GetConversationsResponse({}));
  }

  /**
   * Queries the history conversations of a user.
   * 
   * @param request - GetConversationsRequest
   * @returns GetConversationsResponse
   */
  async getConversations(request: $_model.GetConversationsRequest): Promise<$_model.GetConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConversationsWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated agents created by a user.
   * 
   * @param request - GetCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomAgentResponse
   */
  async getCustomAgentWithOptions(request: $_model.GetCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomAgentResponse({}));
  }

  /**
   * Queries the dedicated agents created by a user.
   * 
   * @param request - GetCustomAgentRequest
   * @returns GetCustomAgentResponse
   */
  async getCustomAgent(request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomAgentWithOptions(request, runtime);
  }

  /**
   * Queries specific conversation messages.
   * 
   * @param request - GetMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessagesResponse
   */
  async getMessagesWithOptions(request: $_model.GetMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.firstId)) {
      query["FirstId"] = request.firstId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessages",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessagesResponse>(await this.callApi(params, req, runtime), new $_model.GetMessagesResponse({}));
  }

  /**
   * Queries specific conversation messages.
   * 
   * @param request - GetMessagesRequest
   * @returns GetMessagesResponse
   */
  async getMessages(request: $_model.GetMessagesRequest): Promise<$_model.GetMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessagesWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated agents created by a user.
   * 
   * @param request - ListCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAgentResponse
   */
  async listCustomAgentWithOptions(request: $_model.ListCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAgentResponse({}));
  }

  /**
   * Queries the dedicated agents created by a user.
   * 
   * @param request - ListCustomAgentRequest
   * @returns ListCustomAgentResponse
   */
  async listCustomAgent(request: $_model.ListCustomAgentRequest): Promise<$_model.ListCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentWithOptions(request, runtime);
  }

  /**
   * Queries the custom agent tools of the user.
   * 
   * @param request - ListCustomAgentToolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAgentToolsResponse
   */
  async listCustomAgentToolsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentToolsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAgentTools",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomAgentToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAgentToolsResponse({}));
  }

  /**
   * Queries the custom agent tools of the user.
   * @returns ListCustomAgentToolsResponse
   */
  async listCustomAgentTools(): Promise<$_model.ListCustomAgentToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentToolsWithOptions(runtime);
  }

  /**
   * Modifies the authentication configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifyInstanceAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfigWithOptions(tmpReq: $_model.ModifyInstanceAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceAuthConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAuthConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAuthConfigResponse({}));
  }

  /**
   * Modifies the authentication configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceAuthConfigRequest
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfig(request: $_model.ModifyInstanceAuthConfigRequest): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAuthConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the general configurations of an instance, such as the EIP and NAT settings.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.configValue)) {
      query["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
  }

  /**
   * Modifies the general configurations of an instance, such as the EIP and NAT settings.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelistWithOptions(request: $_model.ModifyInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceIpWhitelistResponse({}));
  }

  /**
   * Modifies the IP address whitelist of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelist(request: $_model.ModifyInstanceIpWhitelistRequest): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceIpWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the RAG agent configurations of an RDS Supabase instance.
   * 
   * @param tmpReq - ModifyInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfigWithOptions(tmpReq: $_model.ModifyInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceRAGConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceRAGConfigResponse({}));
  }

  /**
   * Modifies the RAG agent configurations of an RDS Supabase instance.
   * 
   * @param request - ModifyInstanceRAGConfigRequest
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfig(request: $_model.ModifyInstanceRAGConfigRequest): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL settings of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
  }

  /**
   * Modifies the SSL settings of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the storage configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  Only Object Storage Service (OSS) is supported for the storage of RDS Supabase.
   * 
   * @param tmpReq - ModifyInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfigWithOptions(tmpReq: $_model.ModifyInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceStorageConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceStorageConfigResponse({}));
  }

  /**
   * Modifies the storage configurations of an RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  Only Object Storage Service (OSS) is supported for the storage of RDS Supabase.
   * 
   * @param request - ModifyInstanceStorageConfigRequest
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfig(request: $_model.ModifyInstanceStorageConfigRequest): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL settings of RDS Supabase instances in batches.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifyInstancesSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancesSSLResponse
   */
  async modifyInstancesSSLWithOptions(tmpReq: $_model.ModifyInstancesSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancesSSLResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstancesSSLShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceNames)) {
      request.instanceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNames, "InstanceNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.instanceNamesShrink)) {
      query["InstanceNames"] = request.instanceNamesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstancesSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstancesSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstancesSSLResponse({}));
  }

  /**
   * Modifies the SSL settings of RDS Supabase instances in batches.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstancesSSLRequest
   * @returns ModifyInstancesSSLResponse
   */
  async modifyInstancesSSL(request: $_model.ModifyInstancesSSLRequest): Promise<$_model.ModifyInstancesSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancesSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the returned messages.
   * 
   * @param request - ModifyMessagesFeedbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMessagesFeedbacksResponse
   */
  async modifyMessagesFeedbacksWithOptions(request: $_model.ModifyMessagesFeedbacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMessagesFeedbacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.rating)) {
      query["Rating"] = request.rating;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMessagesFeedbacks",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMessagesFeedbacksResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMessagesFeedbacksResponse({}));
  }

  /**
   * Modifies the returned messages.
   * 
   * @param request - ModifyMessagesFeedbacksRequest
   * @returns ModifyMessagesFeedbacksResponse
   */
  async modifyMessagesFeedbacks(request: $_model.ModifyMessagesFeedbacksRequest): Promise<$_model.ModifyMessagesFeedbacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMessagesFeedbacksWithOptions(request, runtime);
  }

  /**
   * Resets the logon password of the RDS Supabase instance and the access password of the database.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  You can only change the password of a RDS Supabase Dashboard user.
   * 
   * @param request - ResetInstancePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePasswordWithOptions(request: $_model.ResetInstancePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstancePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetInstancePassword",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetInstancePasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetInstancePasswordResponse({}));
  }

  /**
   * Resets the logon password of the RDS Supabase instance and the access password of the database.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >  You can only change the password of a RDS Supabase Dashboard user.
   * 
   * @param request - ResetInstancePasswordRequest
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePassword(request: $_model.ResetInstancePasswordRequest): Promise<$_model.ResetInstancePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetInstancePasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an RDS Supabase instance that is in the Running state.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts an RDS Supabase instance that is in the Running state.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a stopped RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Starts a stopped RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a running RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Stops a running RDS Supabase instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * RDS PostgreSQL
   * ### [](#)References
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the custom agent.
   * 
   * @param tmpReq - UpdateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgentWithOptions(tmpReq: $_model.UpdateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillIds)) {
      request.skillIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
    }

    if (!$dara.isNull(tmpReq.tools)) {
      request.toolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.enableTools)) {
      query["EnableTools"] = request.enableTools;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillIdsShrink)) {
      query["SkillIds"] = request.skillIdsShrink;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.toolsShrink)) {
      query["Tools"] = request.toolsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomAgentResponse({}));
  }

  /**
   * Updates the custom agent.
   * 
   * @param request - UpdateCustomAgentRequest
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgent(request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAgentWithOptions(request, runtime);
  }

}
