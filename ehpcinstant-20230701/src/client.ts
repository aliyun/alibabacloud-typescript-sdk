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
    this._endpoint = this.getEndpoint("ehpcinstant", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Add a custom image.
   * 
   * @param tmpReq - AddImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(tmpReq: $_model.AddImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageResponse> {
    tmpReq.validate();
    let request = new $_model.AddImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.containerImageSpec)) {
      request.containerImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.containerImageSpec, "ContainerImageSpec", "json");
    }

    if (!$dara.isNull(tmpReq.VMImageSpec)) {
      request.VMImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.VMImageSpec, "VMImageSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.containerImageSpecShrink)) {
      query["ContainerImageSpec"] = request.containerImageSpecShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.imageVersion)) {
      query["ImageVersion"] = request.imageVersion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.VMImageSpecShrink)) {
      query["VMImageSpec"] = request.VMImageSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageResponse>(await this.callApi(params, req, runtime), new $_model.AddImageResponse({}));
  }

  /**
   * Add a custom image.
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: $_model.AddImageRequest): Promise<$_model.AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  /**
   * Create a E-HPC execution plan.
   * 
   * @remarks
   * *Make sure that you fully understand E-HPC Instnat billing methods and [prices](https://help.aliyun.com/zh/e-hpc/e-hpc-instant/product-overview/billing-overview?spm=a2c4g.11186623.help-menu-57664.d_0_2_0.5fdd28422y6UvO).
   * 
   * @param tmpReq - CreateActionPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateActionPlanResponse
   */
  async createActionPlanWithOptions(tmpReq: $_model.CreateActionPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateActionPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CreateActionPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.regions)) {
      request.regionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regions, "Regions", "json");
    }

    if (!$dara.isNull(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionPlanName)) {
      query["ActionPlanName"] = request.actionPlanName;
    }

    if (!$dara.isNull(request.allocationSpec)) {
      query["AllocationSpec"] = request.allocationSpec;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.prologScript)) {
      query["PrologScript"] = request.prologScript;
    }

    if (!$dara.isNull(request.regionsShrink)) {
      query["Regions"] = request.regionsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourcesShrink)) {
      query["Resources"] = request.resourcesShrink;
    }

    if (!$dara.isNull(request.script)) {
      query["Script"] = request.script;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateActionPlan",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateActionPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateActionPlanResponse({}));
  }

  /**
   * Create a E-HPC execution plan.
   * 
   * @remarks
   * *Make sure that you fully understand E-HPC Instnat billing methods and [prices](https://help.aliyun.com/zh/e-hpc/e-hpc-instant/product-overview/billing-overview?spm=a2c4g.11186623.help-menu-57664.d_0_2_0.5fdd28422y6UvO).
   * 
   * @param request - CreateActionPlanRequest
   * @returns CreateActionPlanResponse
   */
  async createActionPlan(request: $_model.CreateActionPlanRequest): Promise<$_model.CreateActionPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createActionPlanWithOptions(request, runtime);
  }

  /**
   * Create a E-HPC Instant job.
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dependencyPolicy)) {
      request.dependencyPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencyPolicy, "DependencyPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.deploymentPolicy)) {
      request.deploymentPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentPolicy, "DeploymentPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dependencyPolicyShrink)) {
      query["DependencyPolicy"] = request.dependencyPolicyShrink;
    }

    if (!$dara.isNull(request.deploymentPolicyShrink)) {
      query["DeploymentPolicy"] = request.deploymentPolicyShrink;
    }

    if (!$dara.isNull(request.jobDescription)) {
      query["JobDescription"] = request.jobDescription;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobScheduler)) {
      query["JobScheduler"] = request.jobScheduler;
    }

    if (!$dara.isNull(request.securityPolicyShrink)) {
      query["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!$dara.isNull(request.tasksShrink)) {
      query["Tasks"] = request.tasksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2023-07-01",
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
   * Create a E-HPC Instant job.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates a resource pool.
   * 
   * @param tmpReq - CreatePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePoolResponse
   */
  async createPoolWithOptions(tmpReq: $_model.CreatePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePoolResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceLimits)) {
      request.resourceLimitsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceLimits, "ResourceLimits", "json");
    }

    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceLimitsShrink)) {
      query["ResourceLimits"] = request.resourceLimitsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePoolResponse>(await this.callApi(params, req, runtime), new $_model.CreatePoolResponse({}));
  }

  /**
   * Creates a resource pool.
   * 
   * @param request - CreatePoolRequest
   * @returns CreatePoolResponse
   */
  async createPool(request: $_model.CreatePoolRequest): Promise<$_model.CreatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPoolWithOptions(request, runtime);
  }

  /**
   * Delete an execution plan
   * 
   * @remarks
   * *Make sure that you fully understand E-HPC Instnat billing methods and [prices](https://help.aliyun.com/zh/e-hpc/e-hpc-instant/product-overview/billing-overview?spm=a2c4g.11186623.help-menu-57664.d_0_2_0.5fdd28422y6UvO).**
   * This operation stops all Instant jobs that are managed by ActionPlanId.
   * 
   * @param request - DeleteActionPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteActionPlanResponse
   */
  async deleteActionPlanWithOptions(request: $_model.DeleteActionPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteActionPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionPlanId)) {
      query["ActionPlanId"] = request.actionPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteActionPlan",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteActionPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteActionPlanResponse({}));
  }

  /**
   * Delete an execution plan
   * 
   * @remarks
   * *Make sure that you fully understand E-HPC Instnat billing methods and [prices](https://help.aliyun.com/zh/e-hpc/e-hpc-instant/product-overview/billing-overview?spm=a2c4g.11186623.help-menu-57664.d_0_2_0.5fdd28422y6UvO).**
   * This operation stops all Instant jobs that are managed by ActionPlanId.
   * 
   * @param request - DeleteActionPlanRequest
   * @returns DeleteActionPlanResponse
   */
  async deleteActionPlan(request: $_model.DeleteActionPlanRequest): Promise<$_model.DeleteActionPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteActionPlanWithOptions(request, runtime);
  }

  /**
   * Deletes one or more job records that are in the final state from a specified cluster.
   * 
   * @param tmpReq - DeleteJobRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobRecordsResponse
   */
  async deleteJobRecordsWithOptions(tmpReq: $_model.DeleteJobRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteJobRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.jobIdsShrink)) {
      query["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobRecords",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobRecordsResponse({}));
  }

  /**
   * Deletes one or more job records that are in the final state from a specified cluster.
   * 
   * @param request - DeleteJobRecordsRequest
   * @returns DeleteJobRecordsResponse
   */
  async deleteJobRecords(request: $_model.DeleteJobRecordsRequest): Promise<$_model.DeleteJobRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobRecordsWithOptions(request, runtime);
  }

  /**
   * Deletes one or more jobs from a specified cluster.
   * 
   * @param tmpReq - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: $_model.DeleteJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "ExecutorIds", "json");
    }

    if (!$dara.isNull(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.executorIdsShrink)) {
      query["ExecutorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.jobScheduler)) {
      query["JobScheduler"] = request.jobScheduler;
    }

    if (!$dara.isNull(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobs",
      version: "2023-07-01",
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
   * Deletes one or more jobs from a specified cluster.
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: $_model.DeleteJobsRequest): Promise<$_model.DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * You can execute this statement to delete a resource pool.
   * 
   * @param request - DeletePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePoolResponse
   */
  async deletePoolWithOptions(request: $_model.DeletePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePoolResponse>(await this.callApi(params, req, runtime), new $_model.DeletePoolResponse({}));
  }

  /**
   * You can execute this statement to delete a resource pool.
   * 
   * @param request - DeletePoolRequest
   * @returns DeletePoolResponse
   */
  async deletePool(request: $_model.DeletePoolRequest): Promise<$_model.DeletePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePoolWithOptions(request, runtime);
  }

  /**
   * You can query the monitoring time series dataset of a job by specifying the job array index and query metric parameters.
   * 
   * @param tmpReq - DescribeJobMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMetricDataResponse
   */
  async describeJobMetricDataWithOptions(tmpReq: $_model.DescribeJobMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobMetricDataResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeJobMetricDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!$dara.isNull(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMetricData",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobMetricDataResponse({}));
  }

  /**
   * You can query the monitoring time series dataset of a job by specifying the job array index and query metric parameters.
   * 
   * @param request - DescribeJobMetricDataRequest
   * @returns DescribeJobMetricDataResponse
   */
  async describeJobMetricData(request: $_model.DescribeJobMetricDataRequest): Promise<$_model.DescribeJobMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries all instant monitoring metrics in the job array list by specifying a specific job array index list.
   * 
   * @param tmpReq - DescribeJobMetricLastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMetricLastResponse
   */
  async describeJobMetricLastWithOptions(tmpReq: $_model.DescribeJobMetricLastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobMetricLastResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeJobMetricLastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!$dara.isNull(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMetricLast",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobMetricLastResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobMetricLastResponse({}));
  }

  /**
   * Queries all instant monitoring metrics in the job array list by specifying a specific job array index list.
   * 
   * @param request - DescribeJobMetricLastRequest
   * @returns DescribeJobMetricLastResponse
   */
  async describeJobMetricLast(request: $_model.DescribeJobMetricLastRequest): Promise<$_model.DescribeJobMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricLastWithOptions(request, runtime);
  }

  /**
   * Querying Execution Plan Details
   * 
   * @param request - GetActionPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActionPlanResponse
   */
  async getActionPlanWithOptions(request: $_model.GetActionPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetActionPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionPlanId)) {
      query["ActionPlanId"] = request.actionPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetActionPlan",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetActionPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetActionPlanResponse({}));
  }

  /**
   * Querying Execution Plan Details
   * 
   * @param request - GetActionPlanRequest
   * @returns GetActionPlanResponse
   */
  async getActionPlan(request: $_model.GetActionPlanRequest): Promise<$_model.GetActionPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getActionPlanWithOptions(request, runtime);
  }

  /**
   * Obtains the application version list.
   * 
   * @param request - GetAppVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppVersionsResponse
   */
  async getAppVersionsWithOptions(request: $_model.GetAppVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

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
      action: "GetAppVersions",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppVersionsResponse>(await this.callApi(params, req, runtime), new $_model.GetAppVersionsResponse({}));
  }

  /**
   * Obtains the application version list.
   * 
   * @param request - GetAppVersionsRequest
   * @returns GetAppVersionsResponse
   */
  async getAppVersions(request: $_model.GetAppVersionsRequest): Promise<$_model.GetAppVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppVersionsWithOptions(request, runtime);
  }

  /**
   * Obtains the information about an image.
   * 
   * @param tmpReq - GetImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(tmpReq: $_model.GetImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageResponse> {
    tmpReq.validate();
    let request = new $_model.GetImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalRegionIds)) {
      request.additionalRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalRegionIds, "AdditionalRegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.additionalRegionIdsShrink)) {
      query["AdditionalRegionIds"] = request.additionalRegionIdsShrink;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageResponse>(await this.callApi(params, req, runtime), new $_model.GetImageResponse({}));
  }

  /**
   * Obtains the information about an image.
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: $_model.GetImageRequest): Promise<$_model.GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * Obtains the details of an execution job.
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: $_model.GetJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Obtains the details of an execution job.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a resource pool.
   * 
   * @param request - GetPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPoolResponse
   */
  async getPoolWithOptions(request: $_model.GetPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPoolResponse>(await this.callApi(params, req, runtime), new $_model.GetPoolResponse({}));
  }

  /**
   * Obtains the details of a resource pool.
   * 
   * @param request - GetPoolRequest
   * @returns GetPoolResponse
   */
  async getPool(request: $_model.GetPoolRequest): Promise<$_model.GetPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPoolWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of an execution plan.
   * 
   * @param request - ListActionPlanActivitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionPlanActivitiesResponse
   */
  async listActionPlanActivitiesWithOptions(request: $_model.ListActionPlanActivitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActionPlanActivitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionPlanId)) {
      query["ActionPlanId"] = request.actionPlanId;
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
      action: "ListActionPlanActivities",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActionPlanActivitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListActionPlanActivitiesResponse({}));
  }

  /**
   * Queries the execution status of an execution plan.
   * 
   * @param request - ListActionPlanActivitiesRequest
   * @returns ListActionPlanActivitiesResponse
   */
  async listActionPlanActivities(request: $_model.ListActionPlanActivitiesRequest): Promise<$_model.ListActionPlanActivitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActionPlanActivitiesWithOptions(request, runtime);
  }

  /**
   * Queries the list of execution plans.
   * 
   * @param tmpReq - ListActionPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionPlansResponse
   */
  async listActionPlansWithOptions(tmpReq: $_model.ListActionPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActionPlansResponse> {
    tmpReq.validate();
    let request = new $_model.ListActionPlansShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionPlanIds)) {
      request.actionPlanIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionPlanIds, "ActionPlanIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionPlanIdsShrink)) {
      query["ActionPlanIds"] = request.actionPlanIdsShrink;
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
      action: "ListActionPlans",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActionPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListActionPlansResponse({}));
  }

  /**
   * Queries the list of execution plans.
   * 
   * @param request - ListActionPlansRequest
   * @returns ListActionPlansResponse
   */
  async listActionPlans(request: $_model.ListActionPlansRequest): Promise<$_model.ListActionPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActionPlansWithOptions(request, runtime);
  }

  /**
   * Querying Global Executor Information
   * 
   * @param tmpReq - ListExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorsResponse
   */
  async listExecutorsWithOptions(tmpReq: $_model.ListExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutorsResponse> {
    tmpReq.validate();
    let request = new $_model.ListExecutorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

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
      action: "ListExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutorsResponse({}));
  }

  /**
   * Querying Global Executor Information
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: $_model.ListExecutorsRequest): Promise<$_model.ListExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * Queries the image list.
   * 
   * @param tmpReq - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(tmpReq: $_model.ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesResponse> {
    tmpReq.validate();
    let request = new $_model.ListImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageIdsShrink)) {
      query["ImageIds"] = request.imageIdsShrink;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

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
      action: "ListImages",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesResponse({}));
  }

  /**
   * Queries the image list.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Queries job executor information.
   * 
   * @remarks
   * Queries job executor information.
   * 
   * @param request - ListJobExecutorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutorsWithOptions(request: $_model.ListJobExecutorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobExecutorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobExecutorsResponse({}));
  }

  /**
   * Queries job executor information.
   * 
   * @remarks
   * Queries job executor information.
   * 
   * @param request - ListJobExecutorsRequest
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutors(request: $_model.ListJobExecutorsRequest): Promise<$_model.ListJobExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobExecutorsWithOptions(request, runtime);
  }

  /**
   * Queries the jobs in a cluster.
   * 
   * @param tmpReq - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: $_model.ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.sortBy)) {
      request.sortByShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortBy, "SortBy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortByShrink)) {
      query["SortBy"] = request.sortByShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2023-07-01",
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
   * Queries the jobs in a cluster.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries the resource pool list.
   * 
   * @param tmpReq - ListPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoolsResponse
   */
  async listPoolsWithOptions(tmpReq: $_model.ListPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoolsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPoolsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

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
      action: "ListPools",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListPoolsResponse({}));
  }

  /**
   * Queries the resource pool list.
   * 
   * @param request - ListPoolsRequest
   * @returns ListPoolsResponse
   */
  async listPools(request: $_model.ListPoolsRequest): Promise<$_model.ListPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoolsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are bound to one or more Instant resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are bound to one or more Instant resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Remove a custom image
   * 
   * @param request - RemoveImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(request: $_model.RemoveImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveImageResponse>(await this.callApi(params, req, runtime), new $_model.RemoveImageResponse({}));
  }

  /**
   * Remove a custom image
   * 
   * @param request - RemoveImageRequest
   * @returns RemoveImageResponse
   */
  async removeImage(request: $_model.RemoveImageRequest): Promise<$_model.RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeImageWithOptions(request, runtime);
  }

  /**
   * Application cross-region synchronization
   * 
   * @param tmpReq - SynchronizeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SynchronizeAppResponse
   */
  async synchronizeAppWithOptions(tmpReq: $_model.SynchronizeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SynchronizeAppResponse> {
    tmpReq.validate();
    let request = new $_model.SynchronizeAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.targetRegionIds)) {
      request.targetRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetRegionIds, "TargetRegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.targetRegionIdsShrink)) {
      query["TargetRegionIds"] = request.targetRegionIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SynchronizeApp",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SynchronizeAppResponse>(await this.callApi(params, req, runtime), new $_model.SynchronizeAppResponse({}));
  }

  /**
   * Application cross-region synchronization
   * 
   * @param request - SynchronizeAppRequest
   * @returns SynchronizeAppResponse
   */
  async synchronizeApp(request: $_model.SynchronizeAppRequest): Promise<$_model.SynchronizeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.synchronizeAppWithOptions(request, runtime);
  }

  /**
   * Create and bind tags to Instant resource list
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Create and bind tags to Instant resource list
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbind tags from Instant resource list. If the tag is not bound to other resources, the tag is automatically deleted.
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: $_model.UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UnTagResourcesResponse({}));
  }

  /**
   * Unbind tags from Instant resource list. If the tag is not bound to other resources, the tag is automatically deleted.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Adjust the resource scale of the execution plan or modify the execution status
   * 
   * @param request - UpdateActionPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateActionPlanResponse
   */
  async updateActionPlanWithOptions(request: $_model.UpdateActionPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateActionPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionPlanId)) {
      query["ActionPlanId"] = request.actionPlanId;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateActionPlan",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateActionPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateActionPlanResponse({}));
  }

  /**
   * Adjust the resource scale of the execution plan or modify the execution status
   * 
   * @param request - UpdateActionPlanRequest
   * @returns UpdateActionPlanResponse
   */
  async updateActionPlan(request: $_model.UpdateActionPlanRequest): Promise<$_model.UpdateActionPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateActionPlanWithOptions(request, runtime);
  }

  /**
   * Update the resource pool configuration.
   * 
   * @param tmpReq - UpdatePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePoolResponse
   */
  async updatePoolWithOptions(tmpReq: $_model.UpdatePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePoolResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceLimits)) {
      request.resourceLimitsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceLimits, "ResourceLimits", "json");
    }

    let query = { };
    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceLimitsShrink)) {
      query["ResourceLimits"] = request.resourceLimitsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePool",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePoolResponse({}));
  }

  /**
   * Update the resource pool configuration.
   * 
   * @param request - UpdatePoolRequest
   * @returns UpdatePoolResponse
   */
  async updatePool(request: $_model.UpdatePoolRequest): Promise<$_model.UpdatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePoolWithOptions(request, runtime);
  }

}
