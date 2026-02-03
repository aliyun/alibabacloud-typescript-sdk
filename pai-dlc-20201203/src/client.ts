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
      'ap-northeast-2-pop': "pai-dlc.aliyuncs.com",
      'ap-south-1': "pai-dlc.aliyuncs.com",
      'ap-southeast-2': "pai-dlc.aliyuncs.com",
      'cn-beijing-finance-1': "pai-dlc.aliyuncs.com",
      'cn-beijing-finance-pop': "pai-dlc.aliyuncs.com",
      'cn-beijing-gov-1': "pai-dlc.aliyuncs.com",
      'cn-beijing-nu16-b01': "pai-dlc.aliyuncs.com",
      'cn-chengdu': "pai-dlc.aliyuncs.com",
      'cn-edge-1': "pai-dlc.aliyuncs.com",
      'cn-fujian': "pai-dlc.aliyuncs.com",
      'cn-haidian-cm12-c01': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-bj-b01': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-finance': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "pai-dlc.aliyuncs.com",
      'cn-hangzhou-test-306': "pai-dlc.aliyuncs.com",
      'cn-hongkong-finance-pop': "pai-dlc.aliyuncs.com",
      'cn-huhehaote': "pai-dlc.aliyuncs.com",
      'cn-huhehaote-nebula-1': "pai-dlc.aliyuncs.com",
      'cn-north-2-gov-1': "pai-dlc.aliyuncs.com",
      'cn-qingdao': "pai-dlc.aliyuncs.com",
      'cn-qingdao-nebula': "pai-dlc.aliyuncs.com",
      'cn-shanghai-et15-b01': "pai-dlc.aliyuncs.com",
      'cn-shanghai-et2-b01': "pai-dlc.aliyuncs.com",
      'cn-shanghai-inner': "pai-dlc.aliyuncs.com",
      'cn-shanghai-internal-test-1': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-finance-1': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-inner': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-st4-d01': "pai-dlc.aliyuncs.com",
      'cn-shenzhen-su18-b01': "pai-dlc.aliyuncs.com",
      'cn-wuhan': "pai-dlc.aliyuncs.com",
      'cn-yushanfang': "pai-dlc.aliyuncs.com",
      'cn-zhangbei': "pai-dlc.aliyuncs.com",
      'cn-zhangbei-na61-b01': "pai-dlc.aliyuncs.com",
      'cn-zhangjiakou': "pai-dlc.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "pai-dlc.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "pai-dlc.aliyuncs.com",
      'eu-west-1': "pai-dlc.aliyuncs.com",
      'eu-west-1-oxs': "pai-dlc.aliyuncs.com",
      'me-east-1': "pai-dlc.aliyuncs.com",
      'rus-west-1-pop': "pai-dlc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pai-dlc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a job that runs in a cluster. You can configure the data source, code source, startup command, and computing resources of each node on which a job runs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(request: $_model.CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.codeSource)) {
      body["CodeSource"] = request.codeSource;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.customEnvs)) {
      body["CustomEnvs"] = request.customEnvs;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.debuggerConfigContent)) {
      body["DebuggerConfigContent"] = request.debuggerConfigContent;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.elasticSpec)) {
      body["ElasticSpec"] = request.elasticSpec;
    }

    if (!$dara.isNull(request.envs)) {
      body["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.jobMaxRunningTimeMinutes)) {
      body["JobMaxRunningTimeMinutes"] = request.jobMaxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.jobSpecs)) {
      body["JobSpecs"] = request.jobSpecs;
    }

    if (!$dara.isNull(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.settings)) {
      body["Settings"] = request.settings;
    }

    if (!$dara.isNull(request.successPolicy)) {
      body["SuccessPolicy"] = request.successPolicy;
    }

    if (!$dara.isNull(request.thirdpartyLibDir)) {
      body["ThirdpartyLibDir"] = request.thirdpartyLibDir;
    }

    if (!$dara.isNull(request.thirdpartyLibs)) {
      body["ThirdpartyLibs"] = request.thirdpartyLibs;
    }

    if (!$dara.isNull(request.userCommand)) {
      body["UserCommand"] = request.userCommand;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * Creates a job that runs in a cluster. You can configure the data source, code source, startup command, and computing resources of each node on which a job runs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  /**
   * Creates a TensorBoard by using a job or specifying a data source configuration.
   * 
   * @param request - CreateTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTensorboardResponse
   */
  async createTensorboardWithOptions(request: $_model.CreateTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTensorboardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maxRunningTimeMinutes)) {
      body["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.quotaId)) {
      body["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.summaryPath)) {
      body["SummaryPath"] = request.summaryPath;
    }

    if (!$dara.isNull(request.summaryRelativePath)) {
      body["SummaryRelativePath"] = request.summaryRelativePath;
    }

    if (!$dara.isNull(request.tensorboardDataSources)) {
      body["TensorboardDataSources"] = request.tensorboardDataSources;
    }

    if (!$dara.isNull(request.tensorboardSpec)) {
      body["TensorboardSpec"] = request.tensorboardSpec;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.CreateTensorboardResponse({}));
  }

  /**
   * Creates a TensorBoard by using a job or specifying a data source configuration.
   * 
   * @param request - CreateTensorboardRequest
   * @returns CreateTensorboardResponse
   */
  async createTensorboard(request: $_model.CreateTensorboardRequest): Promise<$_model.CreateTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTensorboardWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a completed or stopped job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobResponse({}));
  }

  /**
   * Deletes a completed or stopped job.
   * @returns DeleteJobResponse
   */
  async deleteJob(JobId: string): Promise<$_model.DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(JobId, headers, runtime);
  }

  /**
   * Deletes a stopped TensorBoard.
   * 
   * @param request - DeleteTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTensorboardResponse
   */
  async deleteTensorboardWithOptions(TensorboardId: string, request: $_model.DeleteTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTensorboardResponse({}));
  }

  /**
   * Deletes a stopped TensorBoard.
   * 
   * @param request - DeleteTensorboardRequest
   * @returns DeleteTensorboardResponse
   */
  async deleteTensorboard(TensorboardId: string, request: $_model.DeleteTensorboardRequest): Promise<$_model.DeleteTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Gets the DLC task\\"s Dashboard URL, if one exists.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - GetDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
   */
  async getDashboardWithOptions(jobId: string, request: $_model.GetDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDashboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      query["isShared"] = request.isShared;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDashboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(jobId)}/dashboard`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDashboardResponse>(await this.callApi(params, req, runtime), new $_model.GetDashboardResponse({}));
  }

  /**
   * Gets the DLC task\\"s Dashboard URL, if one exists.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - GetDashboardRequest
   * @returns GetDashboardResponse
   */
  async getDashboard(jobId: string, request: $_model.GetDashboardRequest): Promise<$_model.GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(jobId, request, headers, runtime);
  }

  /**
   * Obtains the configuration and runtime information of a job.
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(JobId: string, request: $_model.GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.needDetail)) {
      query["NeedDetail"] = request.needDetail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Obtains the configuration and runtime information of a job.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(JobId: string, request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Obtains the system events of a job.
   * 
   * @param request - GetJobEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobEventsResponse
   */
  async getJobEventsWithOptions(JobId: string, request: $_model.GetJobEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobEvents",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobEventsResponse>(await this.callApi(params, req, runtime), new $_model.GetJobEventsResponse({}));
  }

  /**
   * Obtains the system events of a job.
   * 
   * @param request - GetJobEventsRequest
   * @returns GetJobEventsResponse
   */
  async getJobEvents(JobId: string, request: $_model.GetJobEventsRequest): Promise<$_model.GetJobEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobEventsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Obtains the monitoring data of a job, including the CPU, GPU, and memory utilization, network, and disk read/write rate.
   * 
   * @param request - GetJobMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobMetricsResponse
   */
  async getJobMetricsWithOptions(JobId: string, request: $_model.GetJobMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobMetrics",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetJobMetricsResponse({}));
  }

  /**
   * Obtains the monitoring data of a job, including the CPU, GPU, and memory utilization, network, and disk read/write rate.
   * 
   * @param request - GetJobMetricsRequest
   * @returns GetJobMetricsResponse
   */
  async getJobMetrics(JobId: string, request: $_model.GetJobMetricsRequest): Promise<$_model.GetJobMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobMetricsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Obtains specified job sanity check result in a Deep Learning Containers (DLC) job.
   * 
   * @param request - GetJobSanityCheckResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobSanityCheckResultResponse
   */
  async getJobSanityCheckResultWithOptions(JobId: string, request: $_model.GetJobSanityCheckResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobSanityCheckResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sanityCheckNumber)) {
      query["SanityCheckNumber"] = request.sanityCheckNumber;
    }

    if (!$dara.isNull(request.sanityCheckPhase)) {
      query["SanityCheckPhase"] = request.sanityCheckPhase;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobSanityCheckResult",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/sanitycheckresult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobSanityCheckResultResponse>(await this.callApi(params, req, runtime), new $_model.GetJobSanityCheckResultResponse({}));
  }

  /**
   * Obtains specified job sanity check result in a Deep Learning Containers (DLC) job.
   * 
   * @param request - GetJobSanityCheckResultRequest
   * @returns GetJobSanityCheckResultResponse
   */
  async getJobSanityCheckResult(JobId: string, request: $_model.GetJobSanityCheckResultRequest): Promise<$_model.GetJobSanityCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobSanityCheckResultWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Obtains the system events of a specific node in a job to locate and troubleshoot issues.
   * 
   * @param request - GetPodEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPodEventsResponse
   */
  async getPodEventsWithOptions(JobId: string, PodId: string, request: $_model.GetPodEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPodEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPodEvents",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPodEventsResponse>(await this.callApi(params, req, runtime), new $_model.GetPodEventsResponse({}));
  }

  /**
   * Obtains the system events of a specific node in a job to locate and troubleshoot issues.
   * 
   * @param request - GetPodEventsRequest
   * @returns GetPodEventsResponse
   */
  async getPodEvents(JobId: string, PodId: string, request: $_model.GetPodEventsRequest): Promise<$_model.GetPodEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodEventsWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * Obtains or downloads the logs of a node for a task. The logs are from the stdout and stderr of the system and user scripts.
   * 
   * @param request - GetPodLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPodLogsResponse
   */
  async getPodLogsWithOptions(JobId: string, PodId: string, request: $_model.GetPodLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPodLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.downloadToFile)) {
      query["DownloadToFile"] = request.downloadToFile;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxLines)) {
      query["MaxLines"] = request.maxLines;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPodLogs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPodLogsResponse>(await this.callApi(params, req, runtime), new $_model.GetPodLogsResponse({}));
  }

  /**
   * Obtains or downloads the logs of a node for a task. The logs are from the stdout and stderr of the system and user scripts.
   * 
   * @param request - GetPodLogsRequest
   * @returns GetPodLogsResponse
   */
  async getPodLogs(JobId: string, PodId: string, request: $_model.GetPodLogsRequest): Promise<$_model.GetPodLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodLogsWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * Obtains a Ray Dashboard URL.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - GetRayDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRayDashboardResponse
   */
  async getRayDashboardWithOptions(jobId: string, request: $_model.GetRayDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRayDashboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      query["isShared"] = request.isShared;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRayDashboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(jobId)}/rayDashboard`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRayDashboardResponse>(await this.callApi(params, req, runtime), new $_model.GetRayDashboardResponse({}));
  }

  /**
   * Obtains a Ray Dashboard URL.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/171758.html) of Deep Learning Containers (DLC) of Platform for AI (PAI).
   * 
   * @param request - GetRayDashboardRequest
   * @returns GetRayDashboardResponse
   */
  async getRayDashboard(jobId: string, request: $_model.GetRayDashboardRequest): Promise<$_model.GetRayDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRayDashboardWithOptions(jobId, request, headers, runtime);
  }

  /**
   * Queries the information of a TensorBoard instance.
   * 
   * @param request - GetTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTensorboardResponse
   */
  async getTensorboardWithOptions(TensorboardId: string, request: $_model.GetTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jodId)) {
      query["JodId"] = request.jodId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.GetTensorboardResponse({}));
  }

  /**
   * Queries the information of a TensorBoard instance.
   * 
   * @param request - GetTensorboardRequest
   * @returns GetTensorboardResponse
   */
  async getTensorboard(TensorboardId: string, request: $_model.GetTensorboardRequest): Promise<$_model.GetTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Obtains the shareable link of a TensorBoard task. The link contains digital tokens. You can use a shareable link to access a TensorBoard task.
   * 
   * @param request - GetTensorboardSharedUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTensorboardSharedUrlResponse
   */
  async getTensorboardSharedUrlWithOptions(TensorboardId: string, request: $_model.GetTensorboardSharedUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTensorboardSharedUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTimeSeconds)) {
      query["ExpireTimeSeconds"] = request.expireTimeSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTensorboardSharedUrl",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/sharedurl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTensorboardSharedUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetTensorboardSharedUrlResponse({}));
  }

  /**
   * Obtains the shareable link of a TensorBoard task. The link contains digital tokens. You can use a shareable link to access a TensorBoard task.
   * 
   * @param request - GetTensorboardSharedUrlRequest
   * @returns GetTensorboardSharedUrlResponse
   */
  async getTensorboardSharedUrl(TensorboardId: string, request: $_model.GetTensorboardSharedUrlRequest): Promise<$_model.GetTensorboardSharedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTensorboardSharedUrlWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Obtains the sharing token of a DLC job. This token is used to view the information about the shared job.
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * Obtains the sharing token of a DLC job. This token is used to view the information about the shared job.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * Provides methods and steps to obtain a HTTP link for accessing a container.
   * 
   * @param request - GetWebTerminalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebTerminalResponse
   */
  async getWebTerminalWithOptions(JobId: string, PodId: string, request: $_model.GetWebTerminalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWebTerminalResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      query["IsShared"] = request.isShared;
    }

    if (!$dara.isNull(request.podUid)) {
      query["PodUid"] = request.podUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebTerminal",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/pods/${$dara.URL.percentEncode(PodId)}/webterminal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWebTerminalResponse>(await this.callApi(params, req, runtime), new $_model.GetWebTerminalResponse({}));
  }

  /**
   * Provides methods and steps to obtain a HTTP link for accessing a container.
   * 
   * @param request - GetWebTerminalRequest
   * @returns GetWebTerminalResponse
   */
  async getWebTerminal(JobId: string, PodId: string, request: $_model.GetWebTerminalRequest): Promise<$_model.GetWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebTerminalWithOptions(JobId, PodId, request, headers, runtime);
  }

  /**
   * Queries the list of supported instance types.
   * 
   * @param request - ListEcsSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecsWithOptions(request: $_model.ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEcsSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsSpecs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new $_model.ListEcsSpecsResponse({}));
  }

  /**
   * Queries the list of supported instance types.
   * 
   * @param request - ListEcsSpecsRequest
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecs(request: $_model.ListEcsSpecsRequest): Promise<$_model.ListEcsSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the results of all sanity checks for a DLC job.
   * 
   * @param request - ListJobSanityCheckResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobSanityCheckResultsResponse
   */
  async listJobSanityCheckResultsWithOptions(JobId: string, request: $_model.ListJobSanityCheckResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobSanityCheckResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobSanityCheckResults",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/sanitycheckresults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobSanityCheckResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobSanityCheckResultsResponse({}));
  }

  /**
   * Obtains the results of all sanity checks for a DLC job.
   * 
   * @param request - ListJobSanityCheckResultsRequest
   * @returns ListJobSanityCheckResultsResponse
   */
  async listJobSanityCheckResults(JobId: string, request: $_model.ListJobSanityCheckResultsRequest): Promise<$_model.ListJobSanityCheckResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobSanityCheckResultsWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Queries a list of jobs and supports pagination, sorting, and filtering by conditions.
   * 
   * @param tmpReq - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: $_model.ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.businessUserId)) {
      query["BusinessUserId"] = request.businessUserId;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.displayNameSearchMode)) {
      query["DisplayNameSearchMode"] = request.displayNameSearchMode;
    }

    if (!$dara.isNull(request.enableAssignNode)) {
      query["EnableAssignNode"] = request.enableAssignNode;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fromAllWorkspaces)) {
      query["FromAllWorkspaces"] = request.fromAllWorkspaces;
    }

    if (!$dara.isNull(request.imageSearch)) {
      query["ImageSearch"] = request.imageSearch;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.numericRangeField)) {
      query["NumericRangeField"] = request.numericRangeField;
    }

    if (!$dara.isNull(request.numericRangeMax)) {
      query["NumericRangeMax"] = request.numericRangeMax;
    }

    if (!$dara.isNull(request.numericRangeMin)) {
      query["NumericRangeMin"] = request.numericRangeMin;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.oversoldInfo)) {
      query["OversoldInfo"] = request.oversoldInfo;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.reasonSearch)) {
      query["ReasonSearch"] = request.reasonSearch;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceQuotaName)) {
      query["ResourceQuotaName"] = request.resourceQuotaName;
    }

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.timeRangeField)) {
      query["TimeRangeField"] = request.timeRangeField;
    }

    if (!$dara.isNull(request.userCommandSearch)) {
      query["UserCommandSearch"] = request.userCommandSearch;
    }

    if (!$dara.isNull(request.userIdForFilter)) {
      query["UserIdForFilter"] = request.userIdForFilter;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Queries a list of jobs and supports pagination, sorting, and filtering by conditions.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of TensorBoard instances.
   * 
   * @param request - ListTensorboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTensorboardsResponse
   */
  async listTensorboardsWithOptions(request: $_model.ListTensorboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTensorboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tensorboardId)) {
      query["TensorboardId"] = request.tensorboardId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTensorboards",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTensorboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListTensorboardsResponse({}));
  }

  /**
   * Queries a list of TensorBoard instances.
   * 
   * @param request - ListTensorboardsRequest
   * @returns ListTensorboardsResponse
   */
  async listTensorboards(request: $_model.ListTensorboardsRequest): Promise<$_model.ListTensorboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTensorboardsWithOptions(request, headers, runtime);
  }

  /**
   * Starts a TensorBoard instance.
   * 
   * @param request - StartTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTensorboardResponse
   */
  async startTensorboardWithOptions(TensorboardId: string, request: $_model.StartTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.StartTensorboardResponse({}));
  }

  /**
   * Starts a TensorBoard instance.
   * 
   * @param request - StartTensorboardRequest
   * @returns StartTensorboardResponse
   */
  async startTensorboard(TensorboardId: string, request: $_model.StartTensorboardRequest): Promise<$_model.StartTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Stops a running job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobResponse
   */
  async stopJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopJobResponse>(await this.callApi(params, req, runtime), new $_model.StopJobResponse({}));
  }

  /**
   * Stops a running job.
   * @returns StopJobResponse
   */
  async stopJob(JobId: string): Promise<$_model.StopJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  /**
   * Stops a TensorBoard instance.
   * 
   * @param request - StopTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTensorboardResponse
   */
  async stopTensorboardWithOptions(TensorboardId: string, request: $_model.StopTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.StopTensorboardResponse({}));
  }

  /**
   * Stops a TensorBoard instance.
   * 
   * @param request - StopTensorboardRequest
   * @returns StopTensorboardResponse
   */
  async stopTensorboard(TensorboardId: string, request: $_model.StopTensorboardRequest): Promise<$_model.StopTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  /**
   * Updates the configuration information of a job. For example, you can modify the priority of a job in a queue.
   * 
   * @param request - UpdateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(JobId: string, request: $_model.UpdateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.jobSpecs)) {
      body["JobSpecs"] = request.jobSpecs;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJob",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobResponse({}));
  }

  /**
   * Updates the configuration information of a job. For example, you can modify the priority of a job in a queue.
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(JobId: string, request: $_model.UpdateJobRequest): Promise<$_model.UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJobWithOptions(JobId, request, headers, runtime);
  }

  /**
   * Updates a TensorBoard instance.
   * 
   * @param request - UpdateTensorboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTensorboardResponse
   */
  async updateTensorboardWithOptions(TensorboardId: string, request: $_model.UpdateTensorboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTensorboardResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.maxRunningTimeMinutes)) {
      query["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTensorboard",
      version: "2020-12-03",
      protocol: "HTTPS",
      pathname: `/api/v1/tensorboards/${$dara.URL.percentEncode(TensorboardId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTensorboardResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTensorboardResponse({}));
  }

  /**
   * Updates a TensorBoard instance.
   * 
   * @param request - UpdateTensorboardRequest
   * @returns UpdateTensorboardResponse
   */
  async updateTensorboard(TensorboardId: string, request: $_model.UpdateTensorboardRequest): Promise<$_model.UpdateTensorboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

}
