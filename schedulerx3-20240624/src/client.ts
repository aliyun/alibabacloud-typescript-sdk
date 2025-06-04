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
   * 创建应用
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

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.enableLog)) {
      body["EnableLog"] = request.enableLog;
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
   * 创建应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建集群
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.engineType)) {
      body["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.vSwitchesShrink)) {
      body["VSwitches"] = request.vSwitchesShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
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
   * 创建集群
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateJobShrinkRequest({ });
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
   * 创建任务
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * 删除应用分组
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
   * 删除应用分组
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: $_model.DeleteAppRequest): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * 释放删除集群
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
   * 释放删除集群
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 批量删除任务
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
   * 批量删除任务
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: $_model.DeleteJobsRequest): Promise<$_model.DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * 批量导出任务信息
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
   * 批量导出任务信息
   * 
   * @param request - ExportJobsRequest
   * @returns ExportJobsResponse
   */
  async exportJobs(request: $_model.ExportJobsRequest): Promise<$_model.ExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportJobsWithOptions(request, runtime);
  }

  /**
   * 获取集群详细信息
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
   * 获取集群详细信息
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * 获取指定机器信息
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
   * 获取指定机器信息
   * 
   * @param request - GetDesigateInfoRequest
   * @returns GetDesigateInfoResponse
   */
  async getDesigateInfo(request: $_model.GetDesigateInfoRequest): Promise<$_model.GetDesigateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDesigateInfoWithOptions(request, runtime);
  }

  /**
   * 获取任务执行的详细信息
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
   * 获取任务执行的详细信息
   * 
   * @param request - GetJobExecutionRequest
   * @returns GetJobExecutionResponse
   */
  async getJobExecution(request: $_model.GetJobExecutionRequest): Promise<$_model.GetJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobExecutionWithOptions(request, runtime);
  }

  /**
   * 获取任务执行的详情
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
   * 获取任务执行的详情
   * 
   * @param request - GetJobExecutionProgressRequest
   * @returns GetJobExecutionProgressResponse
   */
  async getJobExecutionProgress(request: $_model.GetJobExecutionProgressRequest): Promise<$_model.GetJobExecutionProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobExecutionProgressWithOptions(request, runtime);
  }

  /**
   * 查询日志
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
   * 查询日志
   * 
   * @param request - GetLogRequest
   * @returns GetLogResponse
   */
  async getLog(request: $_model.GetLogRequest): Promise<$_model.GetLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * 导入日历
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
   * 导入日历
   * 
   * @param request - ImportCalendarRequest
   * @returns ImportCalendarResponse
   */
  async importCalendar(request: $_model.ImportCalendarRequest): Promise<$_model.ImportCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCalendarWithOptions(request, runtime);
  }

  /**
   * 批量导入任务
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
   * 批量导入任务
   * 
   * @param request - ImportJobsRequest
   * @returns ImportJobsResponse
   */
  async importJobs(request: $_model.ImportJobsRequest): Promise<$_model.ImportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importJobsWithOptions(request, runtime);
  }

  /**
   * 获取报警事件
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
   * 获取报警事件
   * 
   * @param request - ListAlarmEventRequest
   * @returns ListAlarmEventResponse
   */
  async listAlarmEvent(request: $_model.ListAlarmEventRequest): Promise<$_model.ListAlarmEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmEventWithOptions(request, runtime);
  }

  /**
   * 获取应用名字列表
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
   * 获取应用名字列表
   * 
   * @param request - ListAppNamesRequest
   * @returns ListAppNamesResponse
   */
  async listAppNames(request: $_model.ListAppNamesRequest): Promise<$_model.ListAppNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppNamesWithOptions(request, runtime);
  }

  /**
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
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: $_model.ListAppsRequest): Promise<$_model.ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * 获取日历名字列表
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
   * 获取日历名字列表
   * 
   * @param request - ListCalendarNamesRequest
   * @returns ListCalendarNamesResponse
   */
  async listCalendarNames(request: $_model.ListCalendarNamesRequest): Promise<$_model.ListCalendarNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCalendarNamesWithOptions(request, runtime);
  }

  /**
   * 查询实例列表
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
   * 查询实例列表
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查询Executor列表
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
   * 查询Executor列表
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: $_model.ListExecutorsRequest): Promise<$_model.ListExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListJobExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutionsWithOptions(request: $_model.ListJobExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobExecutionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobExecutions",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobExecutionsResponse({}));
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListJobExecutionsRequest
   * @returns ListJobExecutionsResponse
   */
  async listJobExecutions(request: $_model.ListJobExecutionsRequest): Promise<$_model.ListJobExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobExecutionsWithOptions(request, runtime);
  }

  /**
   * 获取任务列表
   * 
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: $_model.ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2024-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * 获取任务列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * 获取executor的label列表
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
   * 获取executor的label列表
   * 
   * @param request - ListLablesRequest
   * @returns ListLablesResponse
   */
  async listLables(request: $_model.ListLablesRequest): Promise<$_model.ListLablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLablesWithOptions(request, runtime);
  }

  /**
   * 获取可用区列表
   * 
   * @param request - ListRegionZoneRequest
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
   * 获取可用区列表
   * @returns ListRegionZoneResponse
   */
  async listRegionZone(): Promise<$_model.ListRegionZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionZoneWithOptions(runtime);
  }

  /**
   * 获取所有region列表
   * 
   * @param request - ListRegionsRequest
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
   * 获取所有region列表
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询调度事件
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
   * 查询调度事件
   * 
   * @param request - ListScheduleEventRequest
   * @returns ListScheduleEventResponse
   */
  async listScheduleEvent(request: $_model.ListScheduleEventRequest): Promise<$_model.ListScheduleEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduleEventWithOptions(request, runtime);
  }

  /**
   * 获取指定时间类型和表达式未来5次调度时间
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
   * 获取指定时间类型和表达式未来5次调度时间
   * 
   * @param request - ListScheduleTimesRequest
   * @returns ListScheduleTimesResponse
   */
  async listScheduleTimes(request: $_model.ListScheduleTimesRequest): Promise<$_model.ListScheduleTimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduleTimesWithOptions(request, runtime);
  }

  /**
   * 指定执行器
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
   * 指定执行器
   * 
   * @param request - OperateDesignateExecutorsRequest
   * @returns OperateDesignateExecutorsResponse
   */
  async operateDesignateExecutors(request: $_model.OperateDesignateExecutorsRequest): Promise<$_model.OperateDesignateExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateDesignateExecutorsWithOptions(request, runtime);
  }

  /**
   * 批量禁用任务
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
   * 批量禁用任务
   * 
   * @param request - OperateDisableJobsRequest
   * @returns OperateDisableJobsResponse
   */
  async operateDisableJobs(request: $_model.OperateDisableJobsRequest): Promise<$_model.OperateDisableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateDisableJobsWithOptions(request, runtime);
  }

  /**
   * 批量启用任务
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
   * 批量启用任务
   * 
   * @param request - OperateEnableJobsRequest
   * @returns OperateEnableJobsResponse
   */
  async operateEnableJobs(request: $_model.OperateEnableJobsRequest): Promise<$_model.OperateEnableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateEnableJobsWithOptions(request, runtime);
  }

  /**
   * 运行一次任务
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
   * 运行一次任务
   * 
   * @param request - OperateExecuteJobRequest
   * @returns OperateExecuteJobResponse
   */
  async operateExecuteJob(request: $_model.OperateExecuteJobRequest): Promise<$_model.OperateExecuteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateExecuteJobWithOptions(request, runtime);
  }

  /**
   * 重刷任务历史数据
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
   * 重刷任务历史数据
   * 
   * @param request - OperateRerunJobRequest
   * @returns OperateRerunJobResponse
   */
  async operateRerunJob(request: $_model.OperateRerunJobRequest): Promise<$_model.OperateRerunJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateRerunJobWithOptions(request, runtime);
  }

  /**
   * 重跑失败的任务实例
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
   * 重跑失败的任务实例
   * 
   * @param request - OperateRetryJobExecutionRequest
   * @returns OperateRetryJobExecutionResponse
   */
  async operateRetryJobExecution(request: $_model.OperateRetryJobExecutionRequest): Promise<$_model.OperateRetryJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateRetryJobExecutionWithOptions(request, runtime);
  }

  /**
   * 停止正在运行的任务实例
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
   * 停止正在运行的任务实例
   * 
   * @param request - OperateStopJobExecutionRequest
   * @returns OperateStopJobExecutionResponse
   */
  async operateStopJobExecution(request: $_model.OperateStopJobExecutionRequest): Promise<$_model.OperateStopJobExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateStopJobExecutionWithOptions(request, runtime);
  }

  /**
   * 更新应用分组
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
   * 更新应用分组
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(request: $_model.UpdateAppRequest): Promise<$_model.UpdateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  /**
   * 更新集群
   * 
   * @param request - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(request: $_model.UpdateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * 更新集群
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: $_model.UpdateClusterRequest): Promise<$_model.UpdateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * 更新任务信息
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
   * 更新任务信息
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: $_model.UpdateJobRequest): Promise<$_model.UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

}
