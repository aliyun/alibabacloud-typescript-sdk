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
      'eu-central-1': "schedulerx3.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "schedulerx3.cn-zhangjiakou.aliyuncs.com",
      'cn-shenzhen': "schedulerx3.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "schedulerx3.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "schedulerx3.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "schedulerx3.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "schedulerx3.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "schedulerx3.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "schedulerx3.cn-chengdu.aliyuncs.com",
      'cn-beijing': "schedulerx3.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "schedulerx3.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "schedulerx3.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("schedulerx3", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an app.
   * 
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: $_model.CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      body["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.enableLog)) {
      body["EnableLog"] = request.enableLog;
    }

    if (!$dara.isNull(request.labelRouteStrategy)) {
      body["LabelRouteStrategy"] = request.labelRouteStrategy;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * Creates an app.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * Creates a custom calendar.
   * 
   * @remarks
   * Creates a custom calendar for SchedulerX.
   * 
   * @param request - CreateCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCalendarResponse
   */
  async createCalendarWithOptions(request: $_model.CreateCalendarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCalendarResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarName)) {
      body["CalendarName"] = request.calendarName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.months)) {
      body["Months"] = request.months;
    }

    if (!$dara.isNull(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCalendarResponse>(await this.callApi(params, req, runtime), new $_model.CreateCalendarResponse({}));
  }

  /**
   * Creates a custom calendar.
   * 
   * @remarks
   * Creates a custom calendar for SchedulerX.
   * 
   * @param request - CreateCalendarRequest
   * @returns CreateCalendarResponse
   */
  async createCalendar(request: $_model.CreateCalendarRequest): Promise<$_model.CreateCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCalendarWithOptions(request, runtime);
  }

  /**
   * Creates a cluster.
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vSwitches)) {
      request.vSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitches, "VSwitches", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.engineType)) {
      body["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.vSwitchesShrink)) {
      body["VSwitches"] = request.vSwitchesShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a cluster.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Create a data source
   * 
   * @param request - CreateDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasourceResponse
   */
  async createDatasourceWithOptions(request: $_model.CreateDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.connectionParams)) {
      body["ConnectionParams"] = request.connectionParams;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasource",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasourceResponse({}));
  }

  /**
   * Create a data source
   * 
   * @param request - CreateDatasourceRequest
   * @returns CreateDatasourceResponse
   */
  async createDatasource(request: $_model.CreateDatasourceRequest): Promise<$_model.CreateDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasourceWithOptions(request, runtime);
  }

  /**
   * 添加执行器组
   * 
   * @remarks
   * 手动导入执行器
   * 
   * @param request - CreateExecutorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExecutorGroupResponse
   */
  async createExecutorGroupWithOptions(request: $_model.CreateExecutorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExecutorGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.authType)) {
      body["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.autoScale)) {
      body["AutoScale"] = request.autoScale;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.cmsWorkspaceId)) {
      body["CmsWorkspaceId"] = request.cmsWorkspaceId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.integrationType)) {
      body["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.workerType)) {
      body["WorkerType"] = request.workerType;
    }

    if (!$dara.isNull(request.workers)) {
      body["Workers"] = request.workers;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExecutorGroup",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExecutorGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateExecutorGroupResponse({}));
  }

  /**
   * 添加执行器组
   * 
   * @remarks
   * 手动导入执行器
   * 
   * @param request - CreateExecutorGroupRequest
   * @returns CreateExecutorGroupResponse
   */
  async createExecutorGroup(request: $_model.CreateExecutorGroupRequest): Promise<$_model.CreateExecutorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExecutorGroupWithOptions(request, runtime);
  }

  /**
   * Imports one or more executors.
   * 
   * @remarks
   * Imports one or more executors.
   * 
   * @param request - CreateExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExecutorsResponse
   */
  async createExecutorsWithOptions(request: $_model.CreateExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExecutorsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workerType)) {
      body["WorkerType"] = request.workerType;
    }

    if (!$dara.isNull(request.workers)) {
      body["Workers"] = request.workers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.CreateExecutorsResponse({}));
  }

  /**
   * Imports one or more executors.
   * 
   * @remarks
   * Imports one or more executors.
   * 
   * @param request - CreateExecutorsRequest
   * @returns CreateExecutorsResponse
   */
  async createExecutors(request: $_model.CreateExecutorsRequest): Promise<$_model.CreateExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExecutorsWithOptions(request, runtime);
  }

  /**
   * Creates a node.
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.coordinate)) {
      request.coordinateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.coordinate, "Coordinate", "json");
    }

    if (!$dara.isNull(tmpReq.noticeConfig)) {
      request.noticeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeConfig, "NoticeConfig", "json");
    }

    if (!$dara.isNull(tmpReq.noticeContacts)) {
      request.noticeContactsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeContacts, "NoticeContacts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.childJobId)) {
      body["ChildJobId"] = request.childJobId;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.coordinateShrink)) {
      body["Coordinate"] = request.coordinateShrink;
    }

    if (!$dara.isNull(request.dependentStrategy)) {
      body["DependentStrategy"] = request.dependentStrategy;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.executorBlockStrategy)) {
      body["ExecutorBlockStrategy"] = request.executorBlockStrategy;
    }

    if (!$dara.isNull(request.jobHandler)) {
      body["JobHandler"] = request.jobHandler;
    }

    if (!$dara.isNull(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.noticeConfigShrink)) {
      body["NoticeConfig"] = request.noticeConfigShrink;
    }

    if (!$dara.isNull(request.noticeContactsShrink)) {
      body["NoticeContacts"] = request.noticeContactsShrink;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.routeStrategy)) {
      body["RouteStrategy"] = request.routeStrategy;
    }

    if (!$dara.isNull(request.script)) {
      body["Script"] = request.script;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeType)) {
      body["StartTimeType"] = request.startTimeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.weight)) {
      body["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * Creates a node.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates a workflow.
   * 
   * @param request - CreateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowResponse
   */
  async createWorkflowWithOptions(request: $_model.CreateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkflowResponse({}));
  }

  /**
   * Creates a workflow.
   * 
   * @param request - CreateWorkflowRequest
   * @returns CreateWorkflowResponse
   */
  async createWorkflow(request: $_model.CreateWorkflowRequest): Promise<$_model.CreateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkflowWithOptions(request, runtime);
  }

  /**
   * Deletes an App Group.
   * 
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: $_model.DeleteAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppResponse({}));
  }

  /**
   * Deletes an App Group.
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: $_model.DeleteAppRequest): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * Deletes the specified calendar.
   * 
   * @param request - DeleteCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCalendarResponse
   */
  async deleteCalendarWithOptions(request: $_model.DeleteCalendarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCalendarResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarName)) {
      body["CalendarName"] = request.calendarName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCalendarResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCalendarResponse({}));
  }

  /**
   * Deletes the specified calendar.
   * 
   * @param request - DeleteCalendarRequest
   * @returns DeleteCalendarResponse
   */
  async deleteCalendar(request: $_model.DeleteCalendarRequest): Promise<$_model.DeleteCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCalendarWithOptions(request, runtime);
  }

  /**
   * Deletes a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * Deletes a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Delete data source
   * 
   * @param request - DeleteDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasourceResponse
   */
  async deleteDatasourceWithOptions(request: $_model.DeleteDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasource",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasourceResponse({}));
  }

  /**
   * Delete data source
   * 
   * @param request - DeleteDatasourceRequest
   * @returns DeleteDatasourceResponse
   */
  async deleteDatasource(request: $_model.DeleteDatasourceRequest): Promise<$_model.DeleteDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasourceWithOptions(request, runtime);
  }

  /**
   * 添加执行器组
   * 
   * @param request - DeleteExecutorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExecutorGroupResponse
   */
  async deleteExecutorGroupWithOptions(request: $_model.DeleteExecutorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExecutorGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExecutorGroup",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExecutorGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExecutorGroupResponse({}));
  }

  /**
   * 添加执行器组
   * 
   * @param request - DeleteExecutorGroupRequest
   * @returns DeleteExecutorGroupResponse
   */
  async deleteExecutorGroup(request: $_model.DeleteExecutorGroupRequest): Promise<$_model.DeleteExecutorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExecutorGroupWithOptions(request, runtime);
  }

  /**
   * Deletes multiple jobs in a batch.
   * 
   * @param tmpReq - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: $_model.DeleteJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobsResponse({}));
  }

  /**
   * Deletes multiple jobs in a batch.
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: $_model.DeleteJobsRequest): Promise<$_model.DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * Deletes a Workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: $_model.DeleteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.deleteJobs)) {
      body["DeleteJobs"] = request.deleteJobs;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowResponse({}));
  }

  /**
   * Deletes a Workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(request: $_model.DeleteWorkflowRequest): Promise<$_model.DeleteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * Deletes one or more workflows.
   * 
   * @param tmpReq - DeleteWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowsResponse
   */
  async deleteWorkflowsWithOptions(tmpReq: $_model.DeleteWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteWorkflowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowIds)) {
      request.workflowIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowIds, "WorkflowIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.deleteJobs)) {
      body["DeleteJobs"] = request.deleteJobs;
    }

    if (!$dara.isNull(request.workflowIdsShrink)) {
      body["WorkflowIds"] = request.workflowIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowsResponse({}));
  }

  /**
   * Deletes one or more workflows.
   * 
   * @param request - DeleteWorkflowsRequest
   * @returns DeleteWorkflowsResponse
   */
  async deleteWorkflows(request: $_model.DeleteWorkflowsRequest): Promise<$_model.DeleteWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowsWithOptions(request, runtime);
  }

  /**
   * Exports job information in bulk.
   * 
   * @param tmpReq - ExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportJobsResponse
   */
  async exportJobsWithOptions(tmpReq: $_model.ExportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ExportJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.exportJobType)) {
      body["ExportJobType"] = request.exportJobType;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "byte",
    });
    return $dara.cast<$_model.ExportJobsResponse>(await this.callApi(params, req, runtime), new $_model.ExportJobsResponse({}));
  }

  /**
   * Exports job information in bulk.
   * 
   * @param request - ExportJobsRequest
   * @returns ExportJobsResponse
   */
  async exportJobs(request: $_model.ExportJobsRequest): Promise<$_model.ExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportJobsWithOptions(request, runtime);
  }

  /**
   * Exports the definitions of one or more Workflows in JSON format. The exported data includes the basic information, all Nodes, and the Directed Acyclic Graph (DAG) dependencies for each Workflow.
   * 
   * @param tmpReq - ExportWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportWorkflowsResponse
   */
  async exportWorkflowsWithOptions(tmpReq: $_model.ExportWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportWorkflowsResponse> {
    tmpReq.validate();
    let request = new $_model.ExportWorkflowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowId)) {
      request.workflowIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowId, "WorkflowId", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowIdShrink)) {
      body["WorkflowId"] = request.workflowIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "byte",
    });
    return $dara.cast<$_model.ExportWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ExportWorkflowsResponse({}));
  }

  /**
   * Exports the definitions of one or more Workflows in JSON format. The exported data includes the basic information, all Nodes, and the Directed Acyclic Graph (DAG) dependencies for each Workflow.
   * 
   * @param request - ExportWorkflowsRequest
   * @returns ExportWorkflowsResponse
   */
  async exportWorkflows(request: $_model.ExportWorkflowsRequest): Promise<$_model.ExportWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportWorkflowsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified application.
   * 
   * @param request - GetAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppResponse
   */
  async getAppWithOptions(request: $_model.GetAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppResponse>(await this.callApi(params, req, runtime), new $_model.GetAppResponse({}));
  }

  /**
   * Retrieves the details of a specified application.
   * 
   * @param request - GetAppRequest
   * @returns GetAppResponse
   */
  async getApp(request: $_model.GetAppRequest): Promise<$_model.GetAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified calendar.
   * 
   * @param request - GetCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCalendarResponse
   */
  async getCalendarWithOptions(request: $_model.GetCalendarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCalendarResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calendarName)) {
      query["CalendarName"] = request.calendarName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.year)) {
      query["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCalendarResponse>(await this.callApi(params, req, runtime), new $_model.GetCalendarResponse({}));
  }

  /**
   * Retrieves the details of a specified calendar.
   * 
   * @param request - GetCalendarRequest
   * @returns GetCalendarResponse
   */
  async getCalendar(request: $_model.GetCalendarRequest): Promise<$_model.GetCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCalendarWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a cluster.
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: $_model.GetClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Obtains the details of a cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Retrieves the designation information for a job.
   * 
   * @param request - GetDesigateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDesigateInfoResponse
   */
  async getDesigateInfoWithOptions(request: $_model.GetDesigateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDesigateInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDesigateInfo",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDesigateInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDesigateInfoResponse({}));
  }

  /**
   * Retrieves the designation information for a job.
   * 
   * @param request - GetDesigateInfoRequest
   * @returns GetDesigateInfoResponse
   */
  async getDesigateInfo(request: $_model.GetDesigateInfoRequest): Promise<$_model.GetDesigateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDesigateInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration for a specified Executor.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to extend the Executor\\"s capabilities.
   * **Note**: Place this plugin **before** the `xxl-job-core` dependency in the `pom.xml` file.
   * **For more information, see**: [Plugin Version Documentation](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetExecutorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutorConfigResponse
   */
  async getExecutorConfigWithOptions(request: $_model.GetExecutorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecutorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecutorConfig",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecutorConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetExecutorConfigResponse({}));
  }

  /**
   * Retrieves the configuration for a specified Executor.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to extend the Executor\\"s capabilities.
   * **Note**: Place this plugin **before** the `xxl-job-core` dependency in the `pom.xml` file.
   * **For more information, see**: [Plugin Version Documentation](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetExecutorConfigRequest
   * @returns GetExecutorConfigResponse
   */
  async getExecutorConfig(request: $_model.GetExecutorConfigRequest): Promise<$_model.GetExecutorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecutorConfigWithOptions(request, runtime);
  }

  /**
   * Returns the details of a Task Execution.
   * 
   * @param request - GetJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobExecutionResponse
   */
  async getJobExecutionWithOptions(request: $_model.GetJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.mseSessionId)) {
      query["MseSessionId"] = request.mseSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.GetJobExecutionResponse({}));
  }

  /**
   * Returns the details of a Task Execution.
   * 
   * @param request - GetJobExecutionRequest
   * @returns GetJobExecutionResponse
   */
  async getJobExecution(request: $_model.GetJobExecutionRequest): Promise<$_model.GetJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobExecutionWithOptions(request, runtime);
  }

  /**
   * Gets the details of a sharding task execution.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to enhance the capabilities of the Executor.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in your pom.xml.
   * **See also**: [Plugin Release Notes](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetJobExecutionProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobExecutionProgressResponse
   */
  async getJobExecutionProgressWithOptions(request: $_model.GetJobExecutionProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobExecutionProgressResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobExecutionProgress",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobExecutionProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetJobExecutionProgressResponse({}));
  }

  /**
   * Gets the details of a sharding task execution.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to enhance the capabilities of the Executor.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in your pom.xml.
   * **See also**: [Plugin Release Notes](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetJobExecutionProgressRequest
   * @returns GetJobExecutionProgressResponse
   */
  async getJobExecutionProgress(request: $_model.GetJobExecutionProgressRequest): Promise<$_model.GetJobExecutionProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobExecutionProgressWithOptions(request, runtime);
  }

  /**
   * Retrieves the thread dump for a specific job execution.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to extend the executor\\"s capabilities.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency.
   * **For more information, see**: [Plugin versioning documentation](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetJobExecutionThreadDumpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobExecutionThreadDumpResponse
   */
  async getJobExecutionThreadDumpWithOptions(request: $_model.GetJobExecutionThreadDumpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobExecutionThreadDumpResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobExecutionThreadDump",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobExecutionThreadDumpResponse>(await this.callApi(params, req, runtime), new $_model.GetJobExecutionThreadDumpResponse({}));
  }

  /**
   * Retrieves the thread dump for a specific job execution.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the Enhancement Plugin to your `pom.xml` file to extend the executor\\"s capabilities.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency.
   * **For more information, see**: [Plugin versioning documentation](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetJobExecutionThreadDumpRequest
   * @returns GetJobExecutionThreadDumpResponse
   */
  async getJobExecutionThreadDump(request: $_model.GetJobExecutionThreadDumpRequest): Promise<$_model.GetJobExecutionThreadDumpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobExecutionThreadDumpWithOptions(request, runtime);
  }

  /**
   * Retrieves log entries.
   * 
   * @param request - GetLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogResponse
   */
  async getLogWithOptions(request: $_model.GetLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLog",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogResponse>(await this.callApi(params, req, runtime), new $_model.GetLogResponse({}));
  }

  /**
   * Retrieves log entries.
   * 
   * @param request - GetLogRequest
   * @returns GetLogResponse
   */
  async getLog(request: $_model.GetLogRequest): Promise<$_model.GetLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * Query Events.
   * 
   * @param request - GetLogEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogEventResponse
   */
  async getLogEventWithOptions(request: $_model.GetLogEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogEventResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogEvent",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogEventResponse>(await this.callApi(params, req, runtime), new $_model.GetLogEventResponse({}));
  }

  /**
   * Query Events.
   * 
   * @param request - GetLogEventRequest
   * @returns GetLogEventResponse
   */
  async getLogEvent(request: $_model.GetLogEventRequest): Promise<$_model.GetLogEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogEventWithOptions(request, runtime);
  }

  /**
   * 获取分页日志
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetPageLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageLogResponse
   */
  async getPageLogWithOptions(request: $_model.GetPageLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workerAddr)) {
      query["WorkerAddr"] = request.workerAddr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPageLog",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageLogResponse>(await this.callApi(params, req, runtime), new $_model.GetPageLogResponse({}));
  }

  /**
   * 获取分页日志
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - GetPageLogRequest
   * @returns GetPageLogResponse
   */
  async getPageLog(request: $_model.GetPageLogRequest): Promise<$_model.GetPageLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageLogWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information for a specified workflow.
   * 
   * @param request - GetWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowResponse
   */
  async getWorkflowWithOptions(request: $_model.GetWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowResponse({}));
  }

  /**
   * Retrieves the basic information for a specified workflow.
   * 
   * @param request - GetWorkflowRequest
   * @returns GetWorkflowResponse
   */
  async getWorkflow(request: $_model.GetWorkflowRequest): Promise<$_model.GetWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowWithOptions(request, runtime);
  }

  /**
   * Gets the Directed Acyclic Graph (DAG) of a workflow.
   * 
   * @param request - GetWorkflowDAGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDAGResponse
   */
  async getWorkflowDAGWithOptions(request: $_model.GetWorkflowDAGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowDAGResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowDAG",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowDAGResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowDAGResponse({}));
  }

  /**
   * Gets the Directed Acyclic Graph (DAG) of a workflow.
   * 
   * @param request - GetWorkflowDAGRequest
   * @returns GetWorkflowDAGResponse
   */
  async getWorkflowDAG(request: $_model.GetWorkflowDAGRequest): Promise<$_model.GetWorkflowDAGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowDAGWithOptions(request, runtime);
  }

  /**
   * Gets the DAG for a previous workflow version.
   * 
   * @param request - GetWorkflowDAGPreviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDAGPreviewResponse
   */
  async getWorkflowDAGPreviewWithOptions(request: $_model.GetWorkflowDAGPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowDAGPreviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dagVersion)) {
      query["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowDAGPreview",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowDAGPreviewResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowDAGPreviewResponse({}));
  }

  /**
   * Gets the DAG for a previous workflow version.
   * 
   * @param request - GetWorkflowDAGPreviewRequest
   * @returns GetWorkflowDAGPreviewResponse
   */
  async getWorkflowDAGPreview(request: $_model.GetWorkflowDAGPreviewRequest): Promise<$_model.GetWorkflowDAGPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowDAGPreviewWithOptions(request, runtime);
  }

  /**
   * Retrieve the DAG information for a workflow instance.
   * 
   * @param request - GetWorkflowExecutionDAGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowExecutionDAGResponse
   */
  async getWorkflowExecutionDAGWithOptions(request: $_model.GetWorkflowExecutionDAGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowExecutionDAGResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      query["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowExecutionDAG",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowExecutionDAGResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowExecutionDAGResponse({}));
  }

  /**
   * Retrieve the DAG information for a workflow instance.
   * 
   * @param request - GetWorkflowExecutionDAGRequest
   * @returns GetWorkflowExecutionDAGResponse
   */
  async getWorkflowExecutionDAG(request: $_model.GetWorkflowExecutionDAGRequest): Promise<$_model.GetWorkflowExecutionDAGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowExecutionDAGWithOptions(request, runtime);
  }

  /**
   * Imports a calendar.
   * 
   * @param request - ImportCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCalendarResponse
   */
  async importCalendarWithOptions(request: $_model.ImportCalendarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCalendarResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.months)) {
      body["Months"] = request.months;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportCalendarResponse>(await this.callApi(params, req, runtime), new $_model.ImportCalendarResponse({}));
  }

  /**
   * Imports a calendar.
   * 
   * @param request - ImportCalendarRequest
   * @returns ImportCalendarResponse
   */
  async importCalendar(request: $_model.ImportCalendarRequest): Promise<$_model.ImportCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCalendarWithOptions(request, runtime);
  }

  /**
   * Imports jobs in bulk.
   * 
   * @param request - ImportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportJobsResponse
   */
  async importJobsWithOptions(request: $_model.ImportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCreateApp)) {
      body["AutoCreateApp"] = request.autoCreateApp;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportJobsResponse>(await this.callApi(params, req, runtime), new $_model.ImportJobsResponse({}));
  }

  /**
   * Imports jobs in bulk.
   * 
   * @param request - ImportJobsRequest
   * @returns ImportJobsResponse
   */
  async importJobs(request: $_model.ImportJobsRequest): Promise<$_model.ImportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importJobsWithOptions(request, runtime);
  }

  /**
   * Imports one or more workflows.
   * 
   * @param request - ImportWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportWorkflowsResponse
   */
  async importWorkflowsWithOptions(request: $_model.ImportWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportWorkflowsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCreateApp)) {
      body["AutoCreateApp"] = request.autoCreateApp;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ImportWorkflowsResponse({}));
  }

  /**
   * Imports one or more workflows.
   * 
   * @param request - ImportWorkflowsRequest
   * @returns ImportWorkflowsResponse
   */
  async importWorkflows(request: $_model.ImportWorkflowsRequest): Promise<$_model.ImportWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importWorkflowsWithOptions(request, runtime);
  }

  /**
   * Retrieves alert events.
   * 
   * @param request - ListAlarmEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmEventResponse
   */
  async listAlarmEventWithOptions(request: $_model.ListAlarmEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlarmEventResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlarmEvent",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlarmEventResponse>(await this.callApi(params, req, runtime), new $_model.ListAlarmEventResponse({}));
  }

  /**
   * Retrieves alert events.
   * 
   * @param request - ListAlarmEventRequest
   * @returns ListAlarmEventResponse
   */
  async listAlarmEvent(request: $_model.ListAlarmEventRequest): Promise<$_model.ListAlarmEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmEventWithOptions(request, runtime);
  }

  /**
   * Returns a list of application names.
   * 
   * @param request - ListAppNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppNamesResponse
   */
  async listAppNamesWithOptions(request: $_model.ListAppNamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppNamesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppNames",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppNamesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppNamesResponse({}));
  }

  /**
   * Returns a list of application names.
   * 
   * @param request - ListAppNamesRequest
   * @returns ListAppNamesResponse
   */
  async listAppNames(request: $_model.ListAppNamesRequest): Promise<$_model.ListAppNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppNamesWithOptions(request, runtime);
  }

  /**
   * Get the list of applications.
   * 
   * @param request - ListAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: $_model.ListAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApps",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppsResponse({}));
  }

  /**
   * Get the list of applications.
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: $_model.ListAppsRequest): Promise<$_model.ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * Lists all Calendar names.
   * 
   * @param request - ListCalendarNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalendarNamesResponse
   */
  async listCalendarNamesWithOptions(request: $_model.ListCalendarNamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCalendarNamesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalendarNames",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCalendarNamesResponse>(await this.callApi(params, req, runtime), new $_model.ListCalendarNamesResponse({}));
  }

  /**
   * Lists all Calendar names.
   * 
   * @param request - ListCalendarNamesRequest
   * @returns ListCalendarNamesResponse
   */
  async listCalendarNames(request: $_model.ListCalendarNamesRequest): Promise<$_model.ListCalendarNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCalendarNamesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of calendars.
   * 
   * @param request - ListCalendarsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalendarsResponse
   */
  async listCalendarsWithOptions(request: $_model.ListCalendarsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCalendarsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calendarName)) {
      query["CalendarName"] = request.calendarName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.fetchCalendarDetail)) {
      query["FetchCalendarDetail"] = request.fetchCalendarDetail;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.year)) {
      query["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalendars",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCalendarsResponse>(await this.callApi(params, req, runtime), new $_model.ListCalendarsResponse({}));
  }

  /**
   * Retrieves a list of calendars.
   * 
   * @param request - ListCalendarsRequest
   * @returns ListCalendarsResponse
   */
  async listCalendars(request: $_model.ListCalendarsRequest): Promise<$_model.ListCalendarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCalendarsWithOptions(request, runtime);
  }

  /**
   * Query the list of instances.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Query the list of instances.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Retrieve the data source list
   * 
   * @param request - ListDatasourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasourcesResponse
   */
  async listDatasourcesWithOptions(request: $_model.ListDatasourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasources",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasourcesResponse({}));
  }

  /**
   * Retrieve the data source list
   * 
   * @param request - ListDatasourcesRequest
   * @returns ListDatasourcesResponse
   */
  async listDatasources(request: $_model.ListDatasourcesRequest): Promise<$_model.ListDatasourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatasourcesWithOptions(request, runtime);
  }

  /**
   * 获取执行器组列表
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - ListExecutorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorGroupResponse
   */
  async listExecutorGroupWithOptions(request: $_model.ListExecutorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workerType)) {
      query["WorkerType"] = request.workerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutorGroup",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutorGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutorGroupResponse({}));
  }

  /**
   * 获取执行器组列表
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - ListExecutorGroupRequest
   * @returns ListExecutorGroupResponse
   */
  async listExecutorGroup(request: $_model.ListExecutorGroupRequest): Promise<$_model.ListExecutorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorGroupWithOptions(request, runtime);
  }

  /**
   * Lists executors.
   * 
   * @param request - ListExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorsResponse
   */
  async listExecutorsWithOptions(request: $_model.ListExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutorsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutorsResponse({}));
  }

  /**
   * Lists executors.
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: $_model.ListExecutorsRequest): Promise<$_model.ListExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * Returns a list of task instances.
   * 
   * @param request - ListJobExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutionsWithOptions(request: $_model.ListJobExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      query["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobExecutions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobExecutionsResponse({}));
  }

  /**
   * Returns a list of task instances.
   * 
   * @param request - ListJobExecutionsRequest
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutions(request: $_model.ListJobExecutionsRequest): Promise<$_model.ListJobExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobExecutionsWithOptions(request, runtime);
  }

  /**
   * Lists the script history for a job.
   * 
   * @param request - ListJobScriptHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobScriptHistoryResponse
   */
  async listJobScriptHistoryWithOptions(request: $_model.ListJobScriptHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobScriptHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "ListJobScriptHistory",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobScriptHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListJobScriptHistoryResponse({}));
  }

  /**
   * Lists the script history for a job.
   * 
   * @param request - ListJobScriptHistoryRequest
   * @returns ListJobScriptHistoryResponse
   */
  async listJobScriptHistory(request: $_model.ListJobScriptHistoryRequest): Promise<$_model.ListJobScriptHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobScriptHistoryWithOptions(request, runtime);
  }

  /**
   * Returns a task list.
   * 
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: $_model.ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.jobHandler)) {
      query["JobHandler"] = request.jobHandler;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Returns a task list.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Lists k8s resources.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the enhancement plugin to your `pom.xml` file to extend the Executor\\"s capabilities.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in your pom.xml file.
   * **For more information:** [Plugin version release notes](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - ListK8sResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListK8sResourceResponse
   */
  async listK8sResourceWithOptions(request: $_model.ListK8sResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListK8sResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.k8sClusterId)) {
      query["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.k8sNamespace)) {
      query["K8sNamespace"] = request.k8sNamespace;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListK8sResource",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListK8sResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListK8sResourceResponse({}));
  }

  /**
   * Lists k8s resources.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the enhancement plugin to your `pom.xml` file to extend the Executor\\"s capabilities.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in your pom.xml file.
   * **For more information:** [Plugin version release notes](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - ListK8sResourceRequest
   * @returns ListK8sResourceResponse
   */
  async listK8sResource(request: $_model.ListK8sResourceRequest): Promise<$_model.ListK8sResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listK8sResourceWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of labels for an Executor.
   * 
   * @param request - ListLablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLablesResponse
   */
  async listLablesWithOptions(request: $_model.ListLablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLablesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLables",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLablesResponse>(await this.callApi(params, req, runtime), new $_model.ListLablesResponse({}));
  }

  /**
   * Retrieves a list of labels for an Executor.
   * 
   * @param request - ListLablesRequest
   * @returns ListLablesResponse
   */
  async listLables(request: $_model.ListLablesRequest): Promise<$_model.ListLablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLablesWithOptions(request, runtime);
  }

  /**
   * Obtain the zone list.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionZoneResponse
   */
  async listRegionZoneWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionZoneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegionZone",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionZoneResponse({}));
  }

  /**
   * Obtain the zone list.
   * @returns ListRegionZoneResponse
   */
  async listRegionZone(): Promise<$_model.ListRegionZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionZoneWithOptions(runtime);
  }

  /**
   * Obtain the List of all Regions.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Obtain the List of all Regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * Lists scheduled events.
   * 
   * @param request - ListScheduleEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduleEventResponse
   */
  async listScheduleEventWithOptions(request: $_model.ListScheduleEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduleEventResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduleEvent",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduleEventResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduleEventResponse({}));
  }

  /**
   * Lists scheduled events.
   * 
   * @param request - ListScheduleEventRequest
   * @returns ListScheduleEventResponse
   */
  async listScheduleEvent(request: $_model.ListScheduleEventRequest): Promise<$_model.ListScheduleEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduleEventWithOptions(request, runtime);
  }

  /**
   * Retrieves the next five scheduled times based on the specified time type and time expression.
   * 
   * @param request - ListScheduleTimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduleTimesResponse
   */
  async listScheduleTimesWithOptions(request: $_model.ListScheduleTimesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduleTimesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduleTimes",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduleTimesResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduleTimesResponse({}));
  }

  /**
   * Retrieves the next five scheduled times based on the specified time type and time expression.
   * 
   * @param request - ListScheduleTimesRequest
   * @returns ListScheduleTimesResponse
   */
  async listScheduleTimes(request: $_model.ListScheduleTimesRequest): Promise<$_model.ListScheduleTimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduleTimesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of workflow instances.
   * 
   * @param request - ListWorkflowExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowExecutionsResponse
   */
  async listWorkflowExecutionsWithOptions(request: $_model.ListWorkflowExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      query["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workflowName)) {
      query["WorkflowName"] = request.workflowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowExecutions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowExecutionsResponse({}));
  }

  /**
   * Retrieves a list of workflow instances.
   * 
   * @param request - ListWorkflowExecutionsRequest
   * @returns ListWorkflowExecutionsResponse
   */
  async listWorkflowExecutions(request: $_model.ListWorkflowExecutionsRequest): Promise<$_model.ListWorkflowExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowExecutionsWithOptions(request, runtime);
  }

  /**
   * Lists the versions for a specified workflow.
   * 
   * @param request - ListWorkflowVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowVersionsResponse
   */
  async listWorkflowVersionsWithOptions(request: $_model.ListWorkflowVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowVersions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowVersionsResponse({}));
  }

  /**
   * Lists the versions for a specified workflow.
   * 
   * @param request - ListWorkflowVersionsRequest
   * @returns ListWorkflowVersionsResponse
   */
  async listWorkflowVersions(request: $_model.ListWorkflowVersionsRequest): Promise<$_model.ListWorkflowVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowVersionsWithOptions(request, runtime);
  }

  /**
   * Lists your workflows.
   * 
   * @param request - ListWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowsResponse
   */
  async listWorkflowsWithOptions(request: $_model.ListWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
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

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowsResponse({}));
  }

  /**
   * Lists your workflows.
   * 
   * @param request - ListWorkflowsRequest
   * @returns ListWorkflowsResponse
   */
  async listWorkflows(request: $_model.ListWorkflowsRequest): Promise<$_model.ListWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowsWithOptions(request, runtime);
  }

  /**
   * Backfills historical data for a specified workflow.
   * 
   * @param request - OperateBackfillWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateBackfillWorkflowResponse
   */
  async operateBackfillWorkflowWithOptions(request: $_model.OperateBackfillWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateBackfillWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateBackfillWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateBackfillWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.OperateBackfillWorkflowResponse({}));
  }

  /**
   * Backfills historical data for a specified workflow.
   * 
   * @param request - OperateBackfillWorkflowRequest
   * @returns OperateBackfillWorkflowResponse
   */
  async operateBackfillWorkflow(request: $_model.OperateBackfillWorkflowRequest): Promise<$_model.OperateBackfillWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateBackfillWorkflowWithOptions(request, runtime);
  }

  /**
   * Connect to a data source
   * 
   * @param request - OperateConnectDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateConnectDatasourceResponse
   */
  async operateConnectDatasourceWithOptions(request: $_model.OperateConnectDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateConnectDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.connectionParams)) {
      body["ConnectionParams"] = request.connectionParams;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateConnectDatasource",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateConnectDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.OperateConnectDatasourceResponse({}));
  }

  /**
   * Connect to a data source
   * 
   * @param request - OperateConnectDatasourceRequest
   * @returns OperateConnectDatasourceResponse
   */
  async operateConnectDatasource(request: $_model.OperateConnectDatasourceRequest): Promise<$_model.OperateConnectDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateConnectDatasourceWithOptions(request, runtime);
  }

  /**
   * Designates one or more executors for a job.
   * 
   * @param tmpReq - OperateDesignateExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateDesignateExecutorsResponse
   */
  async operateDesignateExecutorsWithOptions(tmpReq: $_model.OperateDesignateExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateDesignateExecutorsResponse> {
    tmpReq.validate();
    let request = new $_model.OperateDesignateExecutorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addressList)) {
      request.addressListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addressList, "AddressList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressListShrink)) {
      body["AddressList"] = request.addressListShrink;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.designateType)) {
      body["DesignateType"] = request.designateType;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.transferable)) {
      body["Transferable"] = request.transferable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateDesignateExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateDesignateExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.OperateDesignateExecutorsResponse({}));
  }

  /**
   * Designates one or more executors for a job.
   * 
   * @param request - OperateDesignateExecutorsRequest
   * @returns OperateDesignateExecutorsResponse
   */
  async operateDesignateExecutors(request: $_model.OperateDesignateExecutorsRequest): Promise<$_model.OperateDesignateExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateDesignateExecutorsWithOptions(request, runtime);
  }

  /**
   * Disables multiple jobs.
   * 
   * @param tmpReq - OperateDisableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateDisableJobsResponse
   */
  async operateDisableJobsWithOptions(tmpReq: $_model.OperateDisableJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateDisableJobsResponse> {
    tmpReq.validate();
    let request = new $_model.OperateDisableJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateDisableJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateDisableJobsResponse>(await this.callApi(params, req, runtime), new $_model.OperateDisableJobsResponse({}));
  }

  /**
   * Disables multiple jobs.
   * 
   * @param request - OperateDisableJobsRequest
   * @returns OperateDisableJobsResponse
   */
  async operateDisableJobs(request: $_model.OperateDisableJobsRequest): Promise<$_model.OperateDisableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateDisableJobsWithOptions(request, runtime);
  }

  /**
   * Disables one or more workflows.
   * 
   * @remarks
   * Disables one or more specified workflows.
   * 
   * @param tmpReq - OperateDisableWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateDisableWorkflowsResponse
   */
  async operateDisableWorkflowsWithOptions(tmpReq: $_model.OperateDisableWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateDisableWorkflowsResponse> {
    tmpReq.validate();
    let request = new $_model.OperateDisableWorkflowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowIds)) {
      request.workflowIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowIds, "WorkflowIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowIdsShrink)) {
      body["WorkflowIds"] = request.workflowIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateDisableWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateDisableWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.OperateDisableWorkflowsResponse({}));
  }

  /**
   * Disables one or more workflows.
   * 
   * @remarks
   * Disables one or more specified workflows.
   * 
   * @param request - OperateDisableWorkflowsRequest
   * @returns OperateDisableWorkflowsResponse
   */
  async operateDisableWorkflows(request: $_model.OperateDisableWorkflowsRequest): Promise<$_model.OperateDisableWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateDisableWorkflowsWithOptions(request, runtime);
  }

  /**
   * Enables multiple jobs in a batch.
   * 
   * @param tmpReq - OperateEnableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateEnableJobsResponse
   */
  async operateEnableJobsWithOptions(tmpReq: $_model.OperateEnableJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateEnableJobsResponse> {
    tmpReq.validate();
    let request = new $_model.OperateEnableJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateEnableJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateEnableJobsResponse>(await this.callApi(params, req, runtime), new $_model.OperateEnableJobsResponse({}));
  }

  /**
   * Enables multiple jobs in a batch.
   * 
   * @param request - OperateEnableJobsRequest
   * @returns OperateEnableJobsResponse
   */
  async operateEnableJobs(request: $_model.OperateEnableJobsRequest): Promise<$_model.OperateEnableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateEnableJobsWithOptions(request, runtime);
  }

  /**
   * Enables one or more workflows.
   * 
   * @param tmpReq - OperateEnableWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateEnableWorkflowsResponse
   */
  async operateEnableWorkflowsWithOptions(tmpReq: $_model.OperateEnableWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateEnableWorkflowsResponse> {
    tmpReq.validate();
    let request = new $_model.OperateEnableWorkflowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowIds)) {
      request.workflowIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowIds, "WorkflowIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowIdsShrink)) {
      body["WorkflowIds"] = request.workflowIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateEnableWorkflows",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateEnableWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.OperateEnableWorkflowsResponse({}));
  }

  /**
   * Enables one or more workflows.
   * 
   * @param request - OperateEnableWorkflowsRequest
   * @returns OperateEnableWorkflowsResponse
   */
  async operateEnableWorkflows(request: $_model.OperateEnableWorkflowsRequest): Promise<$_model.OperateEnableWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateEnableWorkflowsWithOptions(request, runtime);
  }

  /**
   * Executes a job on demand.
   * 
   * @param request - OperateExecuteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateExecuteJobResponse
   */
  async operateExecuteJobWithOptions(request: $_model.OperateExecuteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateExecuteJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceParameters)) {
      body["InstanceParameters"] = request.instanceParameters;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.worker)) {
      body["Worker"] = request.worker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateExecuteJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateExecuteJobResponse>(await this.callApi(params, req, runtime), new $_model.OperateExecuteJobResponse({}));
  }

  /**
   * Executes a job on demand.
   * 
   * @param request - OperateExecuteJobRequest
   * @returns OperateExecuteJobResponse
   */
  async operateExecuteJob(request: $_model.OperateExecuteJobRequest): Promise<$_model.OperateExecuteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateExecuteJobWithOptions(request, runtime);
  }

  /**
   * Executes a workflow.
   * 
   * @remarks
   * This operation starts a new workflow instance.
   * 
   * @param request - OperateExecuteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateExecuteWorkflowResponse
   */
  async operateExecuteWorkflowWithOptions(request: $_model.OperateExecuteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateExecuteWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateExecuteWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateExecuteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.OperateExecuteWorkflowResponse({}));
  }

  /**
   * Executes a workflow.
   * 
   * @remarks
   * This operation starts a new workflow instance.
   * 
   * @param request - OperateExecuteWorkflowRequest
   * @returns OperateExecuteWorkflowResponse
   */
  async operateExecuteWorkflow(request: $_model.OperateExecuteWorkflowRequest): Promise<$_model.OperateExecuteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateExecuteWorkflowWithOptions(request, runtime);
  }

  /**
   * Holds a pending job execution.
   * 
   * @param request - OperateHoldJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateHoldJobExecutionResponse
   */
  async operateHoldJobExecutionWithOptions(request: $_model.OperateHoldJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateHoldJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateHoldJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateHoldJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateHoldJobExecutionResponse({}));
  }

  /**
   * Holds a pending job execution.
   * 
   * @param request - OperateHoldJobExecutionRequest
   * @returns OperateHoldJobExecutionResponse
   */
  async operateHoldJobExecution(request: $_model.OperateHoldJobExecutionRequest): Promise<$_model.OperateHoldJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateHoldJobExecutionWithOptions(request, runtime);
  }

  /**
   * Puts a Workflow Execution on hold, suspending all its unexecuted nodes.
   * 
   * @param request - OperateHoldWorkflowExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateHoldWorkflowExecutionResponse
   */
  async operateHoldWorkflowExecutionWithOptions(request: $_model.OperateHoldWorkflowExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateHoldWorkflowExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      body["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateHoldWorkflowExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateHoldWorkflowExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateHoldWorkflowExecutionResponse({}));
  }

  /**
   * Puts a Workflow Execution on hold, suspending all its unexecuted nodes.
   * 
   * @param request - OperateHoldWorkflowExecutionRequest
   * @returns OperateHoldWorkflowExecutionResponse
   */
  async operateHoldWorkflowExecution(request: $_model.OperateHoldWorkflowExecutionRequest): Promise<$_model.OperateHoldWorkflowExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateHoldWorkflowExecutionWithOptions(request, runtime);
  }

  /**
   * Marks a job execution as successful.
   * 
   * @param request - OperateMarkSuccessJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateMarkSuccessJobExecutionResponse
   */
  async operateMarkSuccessJobExecutionWithOptions(request: $_model.OperateMarkSuccessJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateMarkSuccessJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateMarkSuccessJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateMarkSuccessJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateMarkSuccessJobExecutionResponse({}));
  }

  /**
   * Marks a job execution as successful.
   * 
   * @param request - OperateMarkSuccessJobExecutionRequest
   * @returns OperateMarkSuccessJobExecutionResponse
   */
  async operateMarkSuccessJobExecution(request: $_model.OperateMarkSuccessJobExecutionRequest): Promise<$_model.OperateMarkSuccessJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateMarkSuccessJobExecutionWithOptions(request, runtime);
  }

  /**
   * Marks a workflow execution as successful.
   * 
   * @param request - OperateMarkSuccessWorkflowExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateMarkSuccessWorkflowExecutionResponse
   */
  async operateMarkSuccessWorkflowExecutionWithOptions(request: $_model.OperateMarkSuccessWorkflowExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateMarkSuccessWorkflowExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      body["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateMarkSuccessWorkflowExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateMarkSuccessWorkflowExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateMarkSuccessWorkflowExecutionResponse({}));
  }

  /**
   * Marks a workflow execution as successful.
   * 
   * @param request - OperateMarkSuccessWorkflowExecutionRequest
   * @returns OperateMarkSuccessWorkflowExecutionResponse
   */
  async operateMarkSuccessWorkflowExecution(request: $_model.OperateMarkSuccessWorkflowExecutionRequest): Promise<$_model.OperateMarkSuccessWorkflowExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateMarkSuccessWorkflowExecutionWithOptions(request, runtime);
  }

  /**
   * Reruns historical data for a job within a specified time range.
   * 
   * @param request - OperateRerunJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateRerunJobResponse
   */
  async operateRerunJobWithOptions(request: $_model.OperateRerunJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateRerunJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataTime)) {
      query["DataTime"] = request.dataTime;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateRerunJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateRerunJobResponse>(await this.callApi(params, req, runtime), new $_model.OperateRerunJobResponse({}));
  }

  /**
   * Reruns historical data for a job within a specified time range.
   * 
   * @param request - OperateRerunJobRequest
   * @returns OperateRerunJobResponse
   */
  async operateRerunJob(request: $_model.OperateRerunJobRequest): Promise<$_model.OperateRerunJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateRerunJobWithOptions(request, runtime);
  }

  /**
   * Retries a failed Job Instance.
   * 
   * @param tmpReq - OperateRetryJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateRetryJobExecutionResponse
   */
  async operateRetryJobExecutionWithOptions(tmpReq: $_model.OperateRetryJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateRetryJobExecutionResponse> {
    tmpReq.validate();
    let request = new $_model.OperateRetryJobExecutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskList)) {
      request.taskListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskList, "TaskList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.taskListShrink)) {
      query["TaskList"] = request.taskListShrink;
    }

    if (!$dara.isNull(request.triggerChild)) {
      query["TriggerChild"] = request.triggerChild;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateRetryJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateRetryJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateRetryJobExecutionResponse({}));
  }

  /**
   * Retries a failed Job Instance.
   * 
   * @param request - OperateRetryJobExecutionRequest
   * @returns OperateRetryJobExecutionResponse
   */
  async operateRetryJobExecution(request: $_model.OperateRetryJobExecutionRequest): Promise<$_model.OperateRetryJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateRetryJobExecutionWithOptions(request, runtime);
  }

  /**
   * Retries a workflow execution.
   * 
   * @param request - OperateRetryWorkflowExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateRetryWorkflowExecutionResponse
   */
  async operateRetryWorkflowExecutionWithOptions(request: $_model.OperateRetryWorkflowExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateRetryWorkflowExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.onlyFailed)) {
      body["OnlyFailed"] = request.onlyFailed;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      body["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateRetryWorkflowExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateRetryWorkflowExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateRetryWorkflowExecutionResponse({}));
  }

  /**
   * Retries a workflow execution.
   * 
   * @param request - OperateRetryWorkflowExecutionRequest
   * @returns OperateRetryWorkflowExecutionResponse
   */
  async operateRetryWorkflowExecution(request: $_model.OperateRetryWorkflowExecutionRequest): Promise<$_model.OperateRetryWorkflowExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateRetryWorkflowExecutionWithOptions(request, runtime);
  }

  /**
   * Skips a job execution.
   * 
   * @param request - OperateSkipJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateSkipJobExecutionResponse
   */
  async operateSkipJobExecutionWithOptions(request: $_model.OperateSkipJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateSkipJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateSkipJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateSkipJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateSkipJobExecutionResponse({}));
  }

  /**
   * Skips a job execution.
   * 
   * @param request - OperateSkipJobExecutionRequest
   * @returns OperateSkipJobExecutionResponse
   */
  async operateSkipJobExecution(request: $_model.OperateSkipJobExecutionRequest): Promise<$_model.OperateSkipJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateSkipJobExecutionWithOptions(request, runtime);
  }

  /**
   * Stops a running Job Execution.
   * 
   * @param tmpReq - OperateStopJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateStopJobExecutionResponse
   */
  async operateStopJobExecutionWithOptions(tmpReq: $_model.OperateStopJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateStopJobExecutionResponse> {
    tmpReq.validate();
    let request = new $_model.OperateStopJobExecutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskList)) {
      request.taskListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskList, "TaskList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.taskListShrink)) {
      query["TaskList"] = request.taskListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateStopJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateStopJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateStopJobExecutionResponse({}));
  }

  /**
   * Stops a running Job Execution.
   * 
   * @param request - OperateStopJobExecutionRequest
   * @returns OperateStopJobExecutionResponse
   */
  async operateStopJobExecution(request: $_model.OperateStopJobExecutionRequest): Promise<$_model.OperateStopJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateStopJobExecutionWithOptions(request, runtime);
  }

  /**
   * Stops a running workflow execution.
   * 
   * @param request - OperateStopWorkflowExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateStopWorkflowExecutionResponse
   */
  async operateStopWorkflowExecutionWithOptions(request: $_model.OperateStopWorkflowExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateStopWorkflowExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      body["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateStopWorkflowExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateStopWorkflowExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateStopWorkflowExecutionResponse({}));
  }

  /**
   * Stops a running workflow execution.
   * 
   * @param request - OperateStopWorkflowExecutionRequest
   * @returns OperateStopWorkflowExecutionResponse
   */
  async operateStopWorkflowExecution(request: $_model.OperateStopWorkflowExecutionRequest): Promise<$_model.OperateStopWorkflowExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateStopWorkflowExecutionWithOptions(request, runtime);
  }

  /**
   * Resumes a Job Execution that is in the Hold state.
   * 
   * @param request - OperateUnholdJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateUnholdJobExecutionResponse
   */
  async operateUnholdJobExecutionWithOptions(request: $_model.OperateUnholdJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateUnholdJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateUnholdJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateUnholdJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateUnholdJobExecutionResponse({}));
  }

  /**
   * Resumes a Job Execution that is in the Hold state.
   * 
   * @param request - OperateUnholdJobExecutionRequest
   * @returns OperateUnholdJobExecutionResponse
   */
  async operateUnholdJobExecution(request: $_model.OperateUnholdJobExecutionRequest): Promise<$_model.OperateUnholdJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateUnholdJobExecutionWithOptions(request, runtime);
  }

  /**
   * Resumes a workflow execution that is on hold.
   * 
   * @param request - OperateUnholdWorkflowExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateUnholdWorkflowExecutionResponse
   */
  async operateUnholdWorkflowExecutionWithOptions(request: $_model.OperateUnholdWorkflowExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateUnholdWorkflowExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workflowExecutionId)) {
      body["WorkflowExecutionId"] = request.workflowExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateUnholdWorkflowExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateUnholdWorkflowExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateUnholdWorkflowExecutionResponse({}));
  }

  /**
   * Resumes a workflow execution that is on hold.
   * 
   * @param request - OperateUnholdWorkflowExecutionRequest
   * @returns OperateUnholdWorkflowExecutionResponse
   */
  async operateUnholdWorkflowExecution(request: $_model.OperateUnholdWorkflowExecutionRequest): Promise<$_model.OperateUnholdWorkflowExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateUnholdWorkflowExecutionWithOptions(request, runtime);
  }

  /**
   * Resumes a skipped job execution.
   * 
   * @param request - OperateUnskipJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateUnskipJobExecutionResponse
   */
  async operateUnskipJobExecutionWithOptions(request: $_model.OperateUnskipJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateUnskipJobExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      query["JobExecutionId"] = request.jobExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateUnskipJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateUnskipJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.OperateUnskipJobExecutionResponse({}));
  }

  /**
   * Resumes a skipped job execution.
   * 
   * @param request - OperateUnskipJobExecutionRequest
   * @returns OperateUnskipJobExecutionResponse
   */
  async operateUnskipJobExecution(request: $_model.OperateUnskipJobExecutionRequest): Promise<$_model.OperateUnskipJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateUnskipJobExecutionWithOptions(request, runtime);
  }

  /**
   * Synchronizes jobs.
   * 
   * @param tmpReq - SyncJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncJobsResponse
   */
  async syncJobsWithOptions(tmpReq: $_model.SyncJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncJobsResponse> {
    tmpReq.validate();
    let request = new $_model.SyncJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    if (!$dara.isNull(request.originalAppName)) {
      body["OriginalAppName"] = request.originalAppName;
    }

    if (!$dara.isNull(request.originalClusterId)) {
      body["OriginalClusterId"] = request.originalClusterId;
    }

    if (!$dara.isNull(request.targetAppName)) {
      body["TargetAppName"] = request.targetAppName;
    }

    if (!$dara.isNull(request.targetClusterId)) {
      body["TargetClusterId"] = request.targetClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncJobsResponse>(await this.callApi(params, req, runtime), new $_model.SyncJobsResponse({}));
  }

  /**
   * Synchronizes jobs.
   * 
   * @param request - SyncJobsRequest
   * @returns SyncJobsResponse
   */
  async syncJobs(request: $_model.SyncJobsRequest): Promise<$_model.SyncJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncJobsWithOptions(request, runtime);
  }

  /**
   * Updates an application group.
   * 
   * @param request - UpdateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppResponse
   */
  async updateAppWithOptions(request: $_model.UpdateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      body["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.enableLog)) {
      body["EnableLog"] = request.enableLog;
    }

    if (!$dara.isNull(request.labelRouteStrategy)) {
      body["LabelRouteStrategy"] = request.labelRouteStrategy;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.workerId)) {
      body["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApp",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppResponse({}));
  }

  /**
   * Updates an application group.
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(request: $_model.UpdateAppRequest): Promise<$_model.UpdateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  /**
   * Updates a calendar.
   * 
   * @param request - UpdateCalendarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCalendarResponse
   */
  async updateCalendarWithOptions(request: $_model.UpdateCalendarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCalendarResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarName)) {
      body["CalendarName"] = request.calendarName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.incremental)) {
      body["Incremental"] = request.incremental;
    }

    if (!$dara.isNull(request.months)) {
      body["Months"] = request.months;
    }

    if (!$dara.isNull(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCalendar",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCalendarResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCalendarResponse({}));
  }

  /**
   * Updates a calendar.
   * 
   * @param request - UpdateCalendarRequest
   * @returns UpdateCalendarResponse
   */
  async updateCalendar(request: $_model.UpdateCalendarRequest): Promise<$_model.UpdateCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCalendarWithOptions(request, runtime);
  }

  /**
   * Updates a cluster.
   * 
   * @param request - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(request: $_model.UpdateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      body["IpWhitelist"] = request.ipWhitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCluster",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterResponse({}));
  }

  /**
   * Updates a cluster.
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: $_model.UpdateClusterRequest): Promise<$_model.UpdateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * Update data source
   * 
   * @param request - UpdateDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasourceResponse
   */
  async updateDatasourceWithOptions(request: $_model.UpdateDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.connectionParams)) {
      body["ConnectionParams"] = request.connectionParams;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasource",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasourceResponse({}));
  }

  /**
   * Update data source
   * 
   * @param request - UpdateDatasourceRequest
   * @returns UpdateDatasourceResponse
   */
  async updateDatasource(request: $_model.UpdateDatasourceRequest): Promise<$_model.UpdateDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDatasourceWithOptions(request, runtime);
  }

  /**
   * 更新执行器组
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - UpdateExecutorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExecutorGroupResponse
   */
  async updateExecutorGroupWithOptions(request: $_model.UpdateExecutorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExecutorGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.authType)) {
      body["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.autoScale)) {
      body["AutoScale"] = request.autoScale;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.cmsWorkspaceId)) {
      body["CmsWorkspaceId"] = request.cmsWorkspaceId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.workerType)) {
      body["WorkerType"] = request.workerType;
    }

    if (!$dara.isNull(request.workers)) {
      body["Workers"] = request.workers;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExecutorGroup",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExecutorGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExecutorGroupResponse({}));
  }

  /**
   * 更新执行器组
   * 
   * @remarks
   * # 引入增强插件
   * 在`pom.xml`文件中添加增强插件以提升Executor的能力。
   * **注意**：请确保该插件在pom中放置在`xxl-job-core` 依赖的**上方**。
   * **详细信息请参考**：[插件版本说明文档](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description)
   * 
   * @param request - UpdateExecutorGroupRequest
   * @returns UpdateExecutorGroupResponse
   */
  async updateExecutorGroup(request: $_model.UpdateExecutorGroupRequest): Promise<$_model.UpdateExecutorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExecutorGroupWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of one or more Executors.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the enhancement plugin to the `pom.xml` file to extend the capabilities of the Executor.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in the pom.xml file.
   * **For more information, see the** [Plugin Version Description Document](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description).
   * 
   * @param request - UpdateExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExecutorsResponse
   */
  async updateExecutorsWithOptions(request: $_model.UpdateExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExecutorsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.workerType)) {
      body["WorkerType"] = request.workerType;
    }

    if (!$dara.isNull(request.workers)) {
      body["Workers"] = request.workers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExecutors",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExecutorsResponse({}));
  }

  /**
   * Updates the configuration of one or more Executors.
   * 
   * @remarks
   * # Add the enhancement plugin
   * Add the enhancement plugin to the `pom.xml` file to extend the capabilities of the Executor.
   * **Note**: Place this plugin **above** the `xxl-job-core` dependency in the pom.xml file.
   * **For more information, see the** [Plugin Version Description Document](https://help.aliyun.com/zh/schedulerx/schedulerx-xxljob/product-overview/plugin-version-description).
   * 
   * @param request - UpdateExecutorsRequest
   * @returns UpdateExecutorsResponse
   */
  async updateExecutors(request: $_model.UpdateExecutorsRequest): Promise<$_model.UpdateExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExecutorsWithOptions(request, runtime);
  }

  /**
   * Update task details.
   * 
   * @param tmpReq - UpdateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(tmpReq: $_model.UpdateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.noticeConfig)) {
      request.noticeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeConfig, "NoticeConfig", "json");
    }

    if (!$dara.isNull(tmpReq.noticeContacts)) {
      request.noticeContactsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.noticeContacts, "NoticeContacts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.childJobId)) {
      body["ChildJobId"] = request.childJobId;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dependentStrategy)) {
      body["DependentStrategy"] = request.dependentStrategy;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.executorBlockStrategy)) {
      body["ExecutorBlockStrategy"] = request.executorBlockStrategy;
    }

    if (!$dara.isNull(request.jobHandler)) {
      body["JobHandler"] = request.jobHandler;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.noticeConfigShrink)) {
      body["NoticeConfig"] = request.noticeConfigShrink;
    }

    if (!$dara.isNull(request.noticeContactsShrink)) {
      body["NoticeContacts"] = request.noticeContactsShrink;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.routeStrategy)) {
      body["RouteStrategy"] = request.routeStrategy;
    }

    if (!$dara.isNull(request.script)) {
      body["Script"] = request.script;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeType)) {
      body["StartTimeType"] = request.startTimeType;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.weight)) {
      body["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJob",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobResponse({}));
  }

  /**
   * Update task details.
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: $_model.UpdateJobRequest): Promise<$_model.UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  /**
   * Update task instance
   * 
   * @param request - UpdateJobExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobExecutionResponse
   */
  async updateJobExecutionWithOptions(request: $_model.UpdateJobExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobExecutionId)) {
      body["JobExecutionId"] = request.jobExecutionId;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      body["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJobExecution",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobExecutionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobExecutionResponse({}));
  }

  /**
   * Update task instance
   * 
   * @param request - UpdateJobExecutionRequest
   * @returns UpdateJobExecutionResponse
   */
  async updateJobExecution(request: $_model.UpdateJobExecutionRequest): Promise<$_model.UpdateJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobExecutionWithOptions(request, runtime);
  }

  /**
   * Updates a job script.
   * 
   * @param request - UpdateJobScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobScriptResponse
   */
  async updateJobScriptWithOptions(request: $_model.UpdateJobScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.scriptContent)) {
      body["ScriptContent"] = request.scriptContent;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJobScript",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobScriptResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobScriptResponse({}));
  }

  /**
   * Updates a job script.
   * 
   * @param request - UpdateJobScriptRequest
   * @returns UpdateJobScriptResponse
   */
  async updateJobScript(request: $_model.UpdateJobScriptRequest): Promise<$_model.UpdateJobScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobScriptWithOptions(request, runtime);
  }

  /**
   * Updates an existing workflow.
   * 
   * @param request - UpdateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(request: $_model.UpdateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflow",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowResponse({}));
  }

  /**
   * Updates an existing workflow.
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(request: $_model.UpdateWorkflowRequest): Promise<$_model.UpdateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * Updates a workflow\\"s Directed Acyclic Graph (DAG), including node coordinates and edges.
   * 
   * @param tmpReq - UpdateWorkflowDAGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDAGResponse
   */
  async updateWorkflowDAGWithOptions(tmpReq: $_model.UpdateWorkflowDAGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowDAGResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkflowDAGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dag)) {
      request.dagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dag, "Dag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dagShrink)) {
      body["Dag"] = request.dagShrink;
    }

    if (!$dara.isNull(request.dagVersion)) {
      body["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflowDAG",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowDAGResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowDAGResponse({}));
  }

  /**
   * Updates a workflow\\"s Directed Acyclic Graph (DAG), including node coordinates and edges.
   * 
   * @param request - UpdateWorkflowDAGRequest
   * @returns UpdateWorkflowDAGResponse
   */
  async updateWorkflowDAG(request: $_model.UpdateWorkflowDAGRequest): Promise<$_model.UpdateWorkflowDAGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowDAGWithOptions(request, runtime);
  }

  /**
   * Updates the Directed Acyclic Graph (DAG) version for a Workflow.
   * 
   * @param request - UpdateWorkflowDAGVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDAGVersionResponse
   */
  async updateWorkflowDAGVersionWithOptions(request: $_model.UpdateWorkflowDAGVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowDAGVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dagVersion)) {
      body["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflowDAGVersion",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowDAGVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowDAGVersionResponse({}));
  }

  /**
   * Updates the Directed Acyclic Graph (DAG) version for a Workflow.
   * 
   * @param request - UpdateWorkflowDAGVersionRequest
   * @returns UpdateWorkflowDAGVersionResponse
   */
  async updateWorkflowDAGVersion(request: $_model.UpdateWorkflowDAGVersionRequest): Promise<$_model.UpdateWorkflowDAGVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowDAGVersionWithOptions(request, runtime);
  }

}
