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
   * 添加托管侧用户自定义镜像
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
   * 添加托管侧用户自定义镜像
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: $_model.AddImageRequest): Promise<$_model.AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  /**
   * 提交任务
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
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
   * 提交任务
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * 创建资源池
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
   * 创建资源池
   * 
   * @param request - CreatePoolRequest
   * @returns CreatePoolResponse
   */
  async createPool(request: $_model.CreatePoolRequest): Promise<$_model.CreatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPoolWithOptions(request, runtime);
  }

  /**
   * 删除作业
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
   * 删除作业
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: $_model.DeleteJobsRequest): Promise<$_model.DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * 删除资源池
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
   * 删除资源池
   * 
   * @param request - DeletePoolRequest
   * @returns DeletePoolResponse
   */
  async deletePool(request: $_model.DeletePoolRequest): Promise<$_model.DeletePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePoolWithOptions(request, runtime);
  }

  /**
   * 查询作业性能数据
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
   * 查询作业性能数据
   * 
   * @param request - DescribeJobMetricDataRequest
   * @returns DescribeJobMetricDataResponse
   */
  async describeJobMetricData(request: $_model.DescribeJobMetricDataRequest): Promise<$_model.DescribeJobMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricDataWithOptions(request, runtime);
  }

  /**
   * 查询作业即时监控项
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
   * 查询作业即时监控项
   * 
   * @param request - DescribeJobMetricLastRequest
   * @returns DescribeJobMetricLastResponse
   */
  async describeJobMetricLast(request: $_model.DescribeJobMetricLastRequest): Promise<$_model.DescribeJobMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMetricLastWithOptions(request, runtime);
  }

  /**
   * 查看应用版本列表
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
   * 查看应用版本列表
   * 
   * @param request - GetAppVersionsRequest
   * @returns GetAppVersionsResponse
   */
  async getAppVersions(request: $_model.GetAppVersionsRequest): Promise<$_model.GetAppVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppVersionsWithOptions(request, runtime);
  }

  /**
   * 查询托管侧镜像详情。
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
   * 查询托管侧镜像详情。
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: $_model.GetImageRequest): Promise<$_model.GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * 查询作业详情
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
   * 查询作业详情
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * 查询队列详细信息
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
   * 查询队列详细信息
   * 
   * @param request - GetPoolRequest
   * @returns GetPoolResponse
   */
  async getPool(request: $_model.GetPoolRequest): Promise<$_model.GetPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPoolWithOptions(request, runtime);
  }

  /**
   * 查询全局Executor信息
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
   * 查询全局Executor信息
   * 
   * @param request - ListExecutorsRequest
   * @returns ListExecutorsResponse
   */
  async listExecutors(request: $_model.ListExecutorsRequest): Promise<$_model.ListExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * 查看托管侧镜像列表
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
   * 查看托管侧镜像列表
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * 查询作业Executor信息
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
   * 查询作业Executor信息
   * 
   * @param request - ListJobExecutorsRequest
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutors(request: $_model.ListJobExecutorsRequest): Promise<$_model.ListJobExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobExecutorsWithOptions(request, runtime);
  }

  /**
   * 查询作业列表
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
   * 查询作业列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * 查询资源池列表
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
   * 查询资源池列表
   * 
   * @param request - ListPoolsRequest
   * @returns ListPoolsResponse
   */
  async listPools(request: $_model.ListPoolsRequest): Promise<$_model.ListPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoolsWithOptions(request, runtime);
  }

  /**
   * 查询一个或多个资源已经绑定的标签列表
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
   * 查询一个或多个资源已经绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 移除托管侧镜像信息。
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
   * 移除托管侧镜像信息。
   * 
   * @param request - RemoveImageRequest
   * @returns RemoveImageResponse
   */
  async removeImage(request: $_model.RemoveImageRequest): Promise<$_model.RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeImageWithOptions(request, runtime);
  }

  /**
   * 为指定的资源列表统一创建并绑定标签
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
   * 为指定的资源列表统一创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 为指定的ECS资源列表统一解绑标签
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
   * 为指定的ECS资源列表统一解绑标签
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * 更新资源池
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
   * 更新资源池
   * 
   * @param request - UpdatePoolRequest
   * @returns UpdatePoolResponse
   */
  async updatePool(request: $_model.UpdatePoolRequest): Promise<$_model.UpdatePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePoolWithOptions(request, runtime);
  }

}
