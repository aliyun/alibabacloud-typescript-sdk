// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "cn-beijing.fnf.aliyuncs.com",
      'cn-hangzhou': "cn-hangzhou.fnf.aliyuncs.com",
      'cn-shanghai': "cn-shanghai.fnf.aliyuncs.com",
      'cn-shenzhen': "cn-shenzhen.fnf.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fnf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The number of flows that each user can create is restricted by resources. For more information, see [Limits](https://help.aliyun.com/document_detail/122093.html). If you want to create more flows, submit a ticket.
   * *   At the user level, flows are distinguished by name. The name of a flow within one account must be unique.
   * 
   * @param tmpReq - CreateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(tmpReq: $_model.CreateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.environment)) {
      request.environmentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.environment, "Environment", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environmentShrink)) {
      body["Environment"] = request.environmentShrink;
    }

    if (!$dara.isNull(request.executionMode)) {
      body["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.externalStorageLocation)) {
      body["ExternalStorageLocation"] = request.externalStorageLocation;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowResponse({}));
  }

  /**
   * Creates a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The number of flows that each user can create is restricted by resources. For more information, see [Limits](https://help.aliyun.com/document_detail/122093.html). If you want to create more flows, submit a ticket.
   * *   At the user level, flows are distinguished by name. The name of a flow within one account must be unique.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: $_model.CreateFlowRequest): Promise<$_model.CreateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * 创建流程版本别名
   * 
   * @param tmpReq - CreateFlowAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowAliasResponse
   */
  async createFlowAliasWithOptions(tmpReq: $_model.CreateFlowAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowAliasResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFlowAliasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.routingConfigurations)) {
      request.routingConfigurationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routingConfigurations, "RoutingConfigurations", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.routingConfigurationsShrink)) {
      body["RoutingConfigurations"] = request.routingConfigurationsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowAlias",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowAliasResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowAliasResponse({}));
  }

  /**
   * 创建流程版本别名
   * 
   * @param request - CreateFlowAliasRequest
   * @returns CreateFlowAliasResponse
   */
  async createFlowAlias(request: $_model.CreateFlowAliasRequest): Promise<$_model.CreateFlowAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowAliasWithOptions(request, runtime);
  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduleResponse
   */
  async createScheduleWithOptions(request: $_model.CreateScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.signatureVersion)) {
      query["SignatureVersion"] = request.signatureVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduleResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduleResponse({}));
  }

  /**
   * Creates a time-based schedule.
   * 
   * @param request - CreateScheduleRequest
   * @returns CreateScheduleResponse
   */
  async createSchedule(request: $_model.CreateScheduleRequest): Promise<$_model.CreateScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduleWithOptions(request, runtime);
  }

  /**
   * Deletes an existing flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * A delete operation is asynchronous. If this operation is successful, the system returns a successful response. If an existing flow is pending to be deleted, a new flow of the same name will not be affected by the existing one. After you delete a flow, you cannot query its historical executions. All executions in progress will stop after their most recent steps are complete.
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: $_model.DeleteFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowResponse({}));
  }

  /**
   * Deletes an existing flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * A delete operation is asynchronous. If this operation is successful, the system returns a successful response. If an existing flow is pending to be deleted, a new flow of the same name will not be affected by the existing one. After you delete a flow, you cannot query its historical executions. All executions in progress will stop after their most recent steps are complete.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: $_model.DeleteFlowRequest): Promise<$_model.DeleteFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * 删除流程别名
   * 
   * @param request - DeleteFlowAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowAliasResponse
   */
  async deleteFlowAliasWithOptions(request: $_model.DeleteFlowAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowAliasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowAlias",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowAliasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowAliasResponse({}));
  }

  /**
   * 删除流程别名
   * 
   * @param request - DeleteFlowAliasRequest
   * @returns DeleteFlowAliasResponse
   */
  async deleteFlowAlias(request: $_model.DeleteFlowAliasRequest): Promise<$_model.DeleteFlowAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowAliasWithOptions(request, runtime);
  }

  /**
   * 删除流程版本
   * 
   * @param request - DeleteFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersionWithOptions(request: $_model.DeleteFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.flowVersion)) {
      body["FlowVersion"] = request.flowVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowVersion",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowVersionResponse({}));
  }

  /**
   * 删除流程版本
   * 
   * @param request - DeleteFlowVersionRequest
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersion(request: $_model.DeleteFlowVersionRequest): Promise<$_model.DeleteFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduleResponse
   */
  async deleteScheduleWithOptions(request: $_model.DeleteScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduleResponse({}));
  }

  /**
   * Deletes a time-based scheduling task.
   * 
   * @param request - DeleteScheduleRequest
   * @returns DeleteScheduleResponse
   */
  async deleteSchedule(request: $_model.DeleteScheduleRequest): Promise<$_model.DeleteScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduleWithOptions(request, runtime);
  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutionResponse
   */
  async describeExecutionWithOptions(request: $_model.DescribeExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExecutionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExecutionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExecutionResponse({}));
  }

  /**
   * Queries an execution in a flow. The long polling mode is supported. The maximum waiting period for long polling depends on the value of the WaitTimeSeconds parameter.
   * 
   * @param request - DescribeExecutionRequest
   * @returns DescribeExecutionResponse
   */
  async describeExecution(request: $_model.DescribeExecutionRequest): Promise<$_model.DescribeExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowResponse
   */
  async describeFlowWithOptions(request: $_model.DescribeFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowResponse({}));
  }

  /**
   * Queries the information about a flow.
   * 
   * @param request - DescribeFlowRequest
   * @returns DescribeFlowResponse
   */
  async describeFlow(request: $_model.DescribeFlowRequest): Promise<$_model.DescribeFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  /**
   * 查询流程版本别名详情
   * 
   * @param request - DescribeFlowAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowAliasResponse
   */
  async describeFlowAliasWithOptions(request: $_model.DescribeFlowAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowAliasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowAlias",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowAliasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowAliasResponse({}));
  }

  /**
   * 查询流程版本别名详情
   * 
   * @param request - DescribeFlowAliasRequest
   * @returns DescribeFlowAliasResponse
   */
  async describeFlowAlias(request: $_model.DescribeFlowAliasRequest): Promise<$_model.DescribeFlowAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowAliasWithOptions(request, runtime);
  }

  /**
   * 查询 MapRun 详情
   * 
   * @param request - DescribeMapRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMapRunResponse
   */
  async describeMapRunWithOptions(request: $_model.DescribeMapRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMapRunResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMapRun",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMapRunResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMapRunResponse({}));
  }

  /**
   * 查询 MapRun 详情
   * 
   * @param request - DescribeMapRunRequest
   * @returns DescribeMapRunResponse
   */
  async describeMapRun(request: $_model.DescribeMapRunRequest): Promise<$_model.DescribeMapRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMapRunWithOptions(request, runtime);
  }

  /**
   * 查询地域信息列表
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * 查询地域信息列表
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduleResponse
   */
  async describeScheduleWithOptions(request: $_model.DescribeScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScheduleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScheduleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScheduleResponse({}));
  }

  /**
   * Queries the detailed information about a time-based schedule.
   * 
   * @param request - DescribeScheduleRequest
   * @returns DescribeScheduleResponse
   */
  async describeSchedule(request: $_model.DescribeScheduleRequest): Promise<$_model.DescribeScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScheduleWithOptions(request, runtime);
  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistoryWithOptions(request: $_model.GetExecutionHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecutionHistoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecutionHistory",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecutionHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetExecutionHistoryResponse({}));
  }

  /**
   * Queries the details about each step in an execution process.
   * 
   * @param request - GetExecutionHistoryRequest
   * @returns GetExecutionHistoryResponse
   */
  async getExecutionHistory(request: $_model.GetExecutionHistoryRequest): Promise<$_model.GetExecutionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecutionHistoryWithOptions(request, runtime);
  }

  /**
   * Queries all historical executions of a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you delete a flow, you cannot query its historical executions, even if you create a flow of the same name.
   * 
   * @param request - ListExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionsResponse
   */
  async listExecutionsWithOptions(request: $_model.ListExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutionsResponse({}));
  }

  /**
   * Queries all historical executions of a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you delete a flow, you cannot query its historical executions, even if you create a flow of the same name.
   * 
   * @param request - ListExecutionsRequest
   * @returns ListExecutionsResponse
   */
  async listExecutions(request: $_model.ListExecutionsRequest): Promise<$_model.ListExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  /**
   * 查询流程版本别名列表
   * 
   * @param request - ListFlowAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowAliasesResponse
   */
  async listFlowAliasesWithOptions(request: $_model.ListFlowAliasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowAliasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlowAliases",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowAliasesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowAliasesResponse({}));
  }

  /**
   * 查询流程版本别名列表
   * 
   * @param request - ListFlowAliasesRequest
   * @returns ListFlowAliasesResponse
   */
  async listFlowAliases(request: $_model.ListFlowAliasesRequest): Promise<$_model.ListFlowAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowAliasesWithOptions(request, runtime);
  }

  /**
   * 查询流程版本列表
   * 
   * @param request - ListFlowVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowVersionsResponse
   */
  async listFlowVersionsWithOptions(request: $_model.ListFlowVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowVersionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlowVersions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowVersionsResponse({}));
  }

  /**
   * 查询流程版本列表
   * 
   * @param request - ListFlowVersionsRequest
   * @returns ListFlowVersionsResponse
   */
  async listFlowVersions(request: $_model.ListFlowVersionsRequest): Promise<$_model.ListFlowVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowsResponse
   */
  async listFlowsWithOptions(request: $_model.ListFlowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlows",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowsResponse({}));
  }

  /**
   * Queries a list of flows.
   * 
   * @param request - ListFlowsRequest
   * @returns ListFlowsResponse
   */
  async listFlows(request: $_model.ListFlowsRequest): Promise<$_model.ListFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchedulesResponse
   */
  async listSchedulesWithOptions(request: $_model.ListSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchedulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchedules",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.ListSchedulesResponse({}));
  }

  /**
   * Queries time-based schedules in a flow.
   * 
   * @param request - ListSchedulesRequest
   * @returns ListSchedulesResponse
   */
  async listSchedules(request: $_model.ListSchedulesRequest): Promise<$_model.ListSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchedulesWithOptions(request, runtime);
  }

  /**
   * 发布流程版本
   * 
   * @param request - PublishFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowVersionResponse
   */
  async publishFlowVersionWithOptions(request: $_model.PublishFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFlowVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFlowVersion",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishFlowVersionResponse({}));
  }

  /**
   * 发布流程版本
   * 
   * @param request - PublishFlowVersionRequest
   * @returns PublishFlowVersionResponse
   */
  async publishFlowVersion(request: $_model.PublishFlowVersionRequest): Promise<$_model.PublishFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishFlowVersionWithOptions(request, runtime);
  }

  /**
   * Reports a failed task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskFailed is used to call back `pattern: waitForCallback` indicates that the current task fails to be executed.
   * In the new service (CloudFlow), the task step that ReportTaskFailed is used to call back `TaskMode: WaitForCustomCallback` indicates that the current task fails to be executed.
   * 
   * @param request - ReportTaskFailedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportTaskFailedResponse
   */
  async reportTaskFailedWithOptions(request: $_model.ReportTaskFailedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportTaskFailedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!$dara.isNull(request.error)) {
      body["Error"] = request.error;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportTaskFailed",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportTaskFailedResponse>(await this.callApi(params, req, runtime), new $_model.ReportTaskFailedResponse({}));
  }

  /**
   * Reports a failed task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskFailed is used to call back `pattern: waitForCallback` indicates that the current task fails to be executed.
   * In the new service (CloudFlow), the task step that ReportTaskFailed is used to call back `TaskMode: WaitForCustomCallback` indicates that the current task fails to be executed.
   * 
   * @param request - ReportTaskFailedRequest
   * @returns ReportTaskFailedResponse
   */
  async reportTaskFailed(request: $_model.ReportTaskFailedRequest): Promise<$_model.ReportTaskFailedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportTaskFailedWithOptions(request, runtime);
  }

  /**
   * Reports a successful task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskSucceeded is used to call back pattern: waitForCallback indicates that the current task is successfully executed.
   * In the new service (CloudFlow), the task step that ReportTaskSucceeded is used to call back TaskMode: WaitForCustomCallback indicates that the current task is successfully executed.
   * 
   * @param request - ReportTaskSucceededRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportTaskSucceededResponse
   */
  async reportTaskSucceededWithOptions(request: $_model.ReportTaskSucceededRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportTaskSucceededResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskToken)) {
      query["TaskToken"] = request.taskToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      body["Output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportTaskSucceeded",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportTaskSucceededResponse>(await this.callApi(params, req, runtime), new $_model.ReportTaskSucceededResponse({}));
  }

  /**
   * Reports a successful task.
   * 
   * @remarks
   * ## [](#)Usage notes
   * In the previous service (Serverless Workflow), the task step that ReportTaskSucceeded is used to call back pattern: waitForCallback indicates that the current task is successfully executed.
   * In the new service (CloudFlow), the task step that ReportTaskSucceeded is used to call back TaskMode: WaitForCustomCallback indicates that the current task is successfully executed.
   * 
   * @param request - ReportTaskSucceededRequest
   * @returns ReportTaskSucceededResponse
   */
  async reportTaskSucceeded(request: $_model.ReportTaskSucceededRequest): Promise<$_model.ReportTaskSucceededResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportTaskSucceededWithOptions(request, runtime);
  }

  /**
   * Starts the execution of a workflow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The flow is created. A flow only in standard mode is supported.
   * *   If you do not specify an execution, the system automatically generates an execution and starts the execution.
   * *   If an ongoing execution has the same name as that of the execution to be started, the system directly returns the ongoing execution.
   * *   If the ongoing execution with the same name has ended (succeeded or failed), `ExecutionAlreadyExists` is returned.
   * *   If no execution with the same name exists, the system starts a new execution.
   * 
   * @param request - StartExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartExecutionResponse
   */
  async startExecutionWithOptions(request: $_model.StartExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackFnFTaskToken)) {
      body["CallbackFnFTaskToken"] = request.callbackFnFTaskToken;
    }

    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.qualifier)) {
      body["Qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartExecutionResponse({}));
  }

  /**
   * Starts the execution of a workflow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   The flow is created. A flow only in standard mode is supported.
   * *   If you do not specify an execution, the system automatically generates an execution and starts the execution.
   * *   If an ongoing execution has the same name as that of the execution to be started, the system directly returns the ongoing execution.
   * *   If the ongoing execution with the same name has ended (succeeded or failed), `ExecutionAlreadyExists` is returned.
   * *   If no execution with the same name exists, the system starts a new execution.
   * 
   * @param request - StartExecutionRequest
   * @returns StartExecutionResponse
   */
  async startExecution(request: $_model.StartExecutionRequest): Promise<$_model.StartExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  /**
   * Synchronously starts an execution in a flow.
   * 
   * @remarks
   *   Only flows of the express execution mode are supported.
   * 
   * @param request - StartSyncExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSyncExecutionResponse
   */
  async startSyncExecutionWithOptions(request: $_model.StartSyncExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSyncExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.qualifier)) {
      body["Qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSyncExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSyncExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartSyncExecutionResponse({}));
  }

  /**
   * Synchronously starts an execution in a flow.
   * 
   * @remarks
   *   Only flows of the express execution mode are supported.
   * 
   * @param request - StartSyncExecutionRequest
   * @returns StartSyncExecutionResponse
   */
  async startSyncExecution(request: $_model.StartSyncExecutionRequest): Promise<$_model.StartSyncExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSyncExecutionWithOptions(request, runtime);
  }

  /**
   * Stops an execution that is in progress in a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The flow must be in progress.
   * 
   * @param request - StopExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopExecutionResponse
   */
  async stopExecutionWithOptions(request: $_model.StopExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cause)) {
      body["Cause"] = request.cause;
    }

    if (!$dara.isNull(request.error)) {
      body["Error"] = request.error;
    }

    if (!$dara.isNull(request.executionName)) {
      body["ExecutionName"] = request.executionName;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopExecution",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StopExecutionResponse({}));
  }

  /**
   * Stops an execution that is in progress in a flow.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The flow must be in progress.
   * 
   * @param request - StopExecutionRequest
   * @returns StopExecutionResponse
   */
  async stopExecution(request: $_model.StopExecutionRequest): Promise<$_model.StopExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopExecutionWithOptions(request, runtime);
  }

  /**
   * Updates a flow.
   * 
   * @param tmpReq - UpdateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowResponse
   */
  async updateFlowWithOptions(tmpReq: $_model.UpdateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.environment)) {
      request.environmentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.environment, "Environment", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environmentShrink)) {
      body["Environment"] = request.environmentShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlow",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowResponse({}));
  }

  /**
   * Updates a flow.
   * 
   * @param request - UpdateFlowRequest
   * @returns UpdateFlowResponse
   */
  async updateFlow(request: $_model.UpdateFlowRequest): Promise<$_model.UpdateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

  /**
   * 更新流程版本别名配置
   * 
   * @param tmpReq - UpdateFlowAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowAliasResponse
   */
  async updateFlowAliasWithOptions(tmpReq: $_model.UpdateFlowAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowAliasResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFlowAliasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.routingConfigurations)) {
      request.routingConfigurationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routingConfigurations, "RoutingConfigurations", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.routingConfigurationsShrink)) {
      body["RoutingConfigurations"] = request.routingConfigurationsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowAlias",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowAliasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowAliasResponse({}));
  }

  /**
   * 更新流程版本别名配置
   * 
   * @param request - UpdateFlowAliasRequest
   * @returns UpdateFlowAliasResponse
   */
  async updateFlowAlias(request: $_model.UpdateFlowAliasRequest): Promise<$_model.UpdateFlowAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowAliasWithOptions(request, runtime);
  }

  /**
   * 更新 MapRun 配置
   * 
   * @param request - UpdateMapRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMapRunResponse
   */
  async updateMapRunWithOptions(request: $_model.UpdateMapRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMapRunResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMapRun",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMapRunResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMapRunResponse({}));
  }

  /**
   * 更新 MapRun 配置
   * 
   * @param request - UpdateMapRunRequest
   * @returns UpdateMapRunResponse
   */
  async updateMapRun(request: $_model.UpdateMapRunRequest): Promise<$_model.UpdateMapRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMapRunWithOptions(request, runtime);
  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduleResponse
   */
  async updateScheduleWithOptions(request: $_model.UpdateScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cronExpression)) {
      body["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.scheduleName)) {
      body["ScheduleName"] = request.scheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSchedule",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduleResponse({}));
  }

  /**
   * Updates a time-based schedule.
   * 
   * @param request - UpdateScheduleRequest
   * @returns UpdateScheduleResponse
   */
  async updateSchedule(request: $_model.UpdateScheduleRequest): Promise<$_model.UpdateScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScheduleWithOptions(request, runtime);
  }

}
