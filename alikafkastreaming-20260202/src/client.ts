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
    this._endpoint = this.getEndpoint("alikafkastreaming", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检查sql语法
   * 
   * @param request - CheckSqlContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSqlContentResponse
   */
  async checkSqlContentWithOptions(request: $_model.CheckSqlContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSqlContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sqlContent)) {
      query["SqlContent"] = request.sqlContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSqlContent",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSqlContentResponse>(await this.callApi(params, req, runtime), new $_model.CheckSqlContentResponse({}));
  }

  /**
   * 检查sql语法
   * 
   * @param request - CheckSqlContentRequest
   * @returns CheckSqlContentResponse
   */
  async checkSqlContent(request: $_model.CheckSqlContentRequest): Promise<$_model.CheckSqlContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSqlContentWithOptions(request, runtime);
  }

  /**
   * 创建 流计算实例
   * 
   * @param request - CreateComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeInstanceResponse
   */
  async createComputeInstanceWithOptions(request: $_model.CreateComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeInstanceResponse({}));
  }

  /**
   * 创建 流计算实例
   * 
   * @param request - CreateComputeInstanceRequest
   * @returns CreateComputeInstanceResponse
   */
  async createComputeInstance(request: $_model.CreateComputeInstanceRequest): Promise<$_model.CreateComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 创建 JOB
   * 
   * @param request - CreateComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeJobResponse
   */
  async createComputeJobWithOptions(request: $_model.CreateComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cuLimit)) {
      query["CuLimit"] = request.cuLimit;
    }

    if (!$dara.isNull(request.cuReserved)) {
      query["CuReserved"] = request.cuReserved;
    }

    if (!$dara.isNull(request.draftSql)) {
      query["DraftSql"] = request.draftSql;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobConfig)) {
      query["JobConfig"] = request.jobConfig;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.upgradeMode)) {
      query["UpgradeMode"] = request.upgradeMode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeJobResponse({}));
  }

  /**
   * 创建 JOB
   * 
   * @param request - CreateComputeJobRequest
   * @returns CreateComputeJobResponse
   */
  async createComputeJob(request: $_model.CreateComputeJobRequest): Promise<$_model.CreateComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeJobWithOptions(request, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComputeInstanceResponse
   */
  async deleteComputeInstanceWithOptions(request: $_model.DeleteComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComputeInstanceResponse({}));
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteComputeInstanceRequest
   * @returns DeleteComputeInstanceResponse
   */
  async deleteComputeInstance(request: $_model.DeleteComputeInstanceRequest): Promise<$_model.DeleteComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 删除 JOB
   * 
   * @param request - DeleteComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComputeJobResponse
   */
  async deleteComputeJobWithOptions(request: $_model.DeleteComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComputeJobResponse({}));
  }

  /**
   * 删除 JOB
   * 
   * @param request - DeleteComputeJobRequest
   * @returns DeleteComputeJobResponse
   */
  async deleteComputeJob(request: $_model.DeleteComputeJobRequest): Promise<$_model.DeleteComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComputeJobWithOptions(request, runtime);
  }

  /**
   * 查询单个实例
   * 
   * @param request - GetComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeInstanceResponse
   */
  async getComputeInstanceWithOptions(request: $_model.GetComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeInstanceResponse({}));
  }

  /**
   * 查询单个实例
   * 
   * @param request - GetComputeInstanceRequest
   * @returns GetComputeInstanceResponse
   */
  async getComputeInstance(request: $_model.GetComputeInstanceRequest): Promise<$_model.GetComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 查询 JOB 详情
   * 
   * @param request - GetComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeJobResponse
   */
  async getComputeJobWithOptions(request: $_model.GetComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeJobResponse({}));
  }

  /**
   * 查询 JOB 详情
   * 
   * @param request - GetComputeJobRequest
   * @returns GetComputeJobResponse
   */
  async getComputeJob(request: $_model.GetComputeJobRequest): Promise<$_model.GetComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComputeJobWithOptions(request, runtime);
  }

  /**
   * 获取debug信息
   * 
   * @param request - GetJobDebugDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDebugDataResponse
   */
  async getJobDebugDataWithOptions(request: $_model.GetJobDebugDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobDebugDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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
      action: "GetJobDebugData",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobDebugDataResponse>(await this.callApi(params, req, runtime), new $_model.GetJobDebugDataResponse({}));
  }

  /**
   * 获取debug信息
   * 
   * @param request - GetJobDebugDataRequest
   * @returns GetJobDebugDataResponse
   */
  async getJobDebugData(request: $_model.GetJobDebugDataRequest): Promise<$_model.GetJobDebugDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobDebugDataWithOptions(request, runtime);
  }

  /**
   * 查询实例列表（分页）
   * 
   * @param tmpReq - ListComputeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeInstancesResponse
   */
  async listComputeInstancesWithOptions(tmpReq: $_model.ListComputeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListComputeInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeInstances",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeInstancesResponse({}));
  }

  /**
   * 查询实例列表（分页）
   * 
   * @param request - ListComputeInstancesRequest
   * @returns ListComputeInstancesResponse
   */
  async listComputeInstances(request: $_model.ListComputeInstancesRequest): Promise<$_model.ListComputeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComputeInstancesWithOptions(request, runtime);
  }

  /**
   * 查询实例列表（分页）
   * 
   * @param tmpReq - ListComputeInstancesInPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeInstancesInPageResponse
   */
  async listComputeInstancesInPageWithOptions(tmpReq: $_model.ListComputeInstancesInPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeInstancesInPageResponse> {
    tmpReq.validate();
    let request = new $_model.ListComputeInstancesInPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
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
      action: "ListComputeInstancesInPage",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeInstancesInPageResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeInstancesInPageResponse({}));
  }

  /**
   * 查询实例列表（分页）
   * 
   * @param request - ListComputeInstancesInPageRequest
   * @returns ListComputeInstancesInPageResponse
   */
  async listComputeInstancesInPage(request: $_model.ListComputeInstancesInPageRequest): Promise<$_model.ListComputeInstancesInPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComputeInstancesInPageWithOptions(request, runtime);
  }

  /**
   * 分页查询 JOB 列表
   * 
   * @param request - ListComputeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeJobsResponse
   */
  async listComputeJobsWithOptions(request: $_model.ListComputeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeJobs",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeJobsResponse({}));
  }

  /**
   * 分页查询 JOB 列表
   * 
   * @param request - ListComputeJobsRequest
   * @returns ListComputeJobsResponse
   */
  async listComputeJobs(request: $_model.ListComputeJobsRequest): Promise<$_model.ListComputeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComputeJobsWithOptions(request, runtime);
  }

  /**
   * 查询创建 SQL 任务时支持的连接器列表
   * 
   * @param request - ListSupportedConnectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportedConnectorsResponse
   */
  async listSupportedConnectorsWithOptions(request: $_model.ListSupportedConnectorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupportedConnectorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSupportedConnectors",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupportedConnectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListSupportedConnectorsResponse({}));
  }

  /**
   * 查询创建 SQL 任务时支持的连接器列表
   * 
   * @param request - ListSupportedConnectorsRequest
   * @returns ListSupportedConnectorsResponse
   */
  async listSupportedConnectors(request: $_model.ListSupportedConnectorsRequest): Promise<$_model.ListSupportedConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportedConnectorsWithOptions(request, runtime);
  }

  /**
   * 重新启动后付费实例
   * 
   * @param request - ReopenComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReopenComputeInstanceResponse
   */
  async reopenComputeInstanceWithOptions(request: $_model.ReopenComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReopenComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReopenComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReopenComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReopenComputeInstanceResponse({}));
  }

  /**
   * 重新启动后付费实例
   * 
   * @param request - ReopenComputeInstanceRequest
   * @returns ReopenComputeInstanceResponse
   */
  async reopenComputeInstance(request: $_model.ReopenComputeInstanceRequest): Promise<$_model.ReopenComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reopenComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 重启 JOB
   * 
   * @param request - RestartComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartComputeJobResponse
   */
  async restartComputeJobWithOptions(request: $_model.RestartComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.RestartComputeJobResponse({}));
  }

  /**
   * 重启 JOB
   * 
   * @param request - RestartComputeJobRequest
   * @returns RestartComputeJobResponse
   */
  async restartComputeJob(request: $_model.RestartComputeJobRequest): Promise<$_model.RestartComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartComputeJobWithOptions(request, runtime);
  }

  /**
   * 部署实例
   * 
   * @param tmpReq - StartComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartComputeInstanceResponse
   */
  async startComputeInstanceWithOptions(tmpReq: $_model.StartComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartComputeInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.StartComputeInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.selectedZones)) {
      query["SelectedZones"] = request.selectedZones;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      query["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartComputeInstanceResponse({}));
  }

  /**
   * 部署实例
   * 
   * @param request - StartComputeInstanceRequest
   * @returns StartComputeInstanceResponse
   */
  async startComputeInstance(request: $_model.StartComputeInstanceRequest): Promise<$_model.StartComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 创建 JOB
   * 
   * @param request - StartComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartComputeJobResponse
   */
  async startComputeJobWithOptions(request: $_model.StartComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cuLimit)) {
      query["CuLimit"] = request.cuLimit;
    }

    if (!$dara.isNull(request.cuReserved)) {
      query["CuReserved"] = request.cuReserved;
    }

    if (!$dara.isNull(request.draftSql)) {
      query["DraftSql"] = request.draftSql;
    }

    if (!$dara.isNull(request.draftSqlStart)) {
      query["DraftSqlStart"] = request.draftSqlStart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.recoveryMode)) {
      query["RecoveryMode"] = request.recoveryMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.StartComputeJobResponse({}));
  }

  /**
   * 创建 JOB
   * 
   * @param request - StartComputeJobRequest
   * @returns StartComputeJobResponse
   */
  async startComputeJob(request: $_model.StartComputeJobRequest): Promise<$_model.StartComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startComputeJobWithOptions(request, runtime);
  }

  /**
   * 停用/释放后付费实例
   * 
   * @param request - StopComputeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopComputeInstanceResponse
   */
  async stopComputeInstanceWithOptions(request: $_model.StopComputeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopComputeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopComputeInstance",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopComputeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopComputeInstanceResponse({}));
  }

  /**
   * 停用/释放后付费实例
   * 
   * @param request - StopComputeInstanceRequest
   * @returns StopComputeInstanceResponse
   */
  async stopComputeInstance(request: $_model.StopComputeInstanceRequest): Promise<$_model.StopComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopComputeInstanceWithOptions(request, runtime);
  }

  /**
   * 停止 JOB
   * 
   * @param request - StopComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopComputeJobResponse
   */
  async stopComputeJobWithOptions(request: $_model.StopComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.StopComputeJobResponse({}));
  }

  /**
   * 停止 JOB
   * 
   * @param request - StopComputeJobRequest
   * @returns StopComputeJobResponse
   */
  async stopComputeJob(request: $_model.StopComputeJobRequest): Promise<$_model.StopComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopComputeJobWithOptions(request, runtime);
  }

  /**
   * 更新实例名称
   * 
   * @param request - UpdateComputeInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeInstanceNameResponse
   */
  async updateComputeInstanceNameWithOptions(request: $_model.UpdateComputeInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeInstanceName",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeInstanceNameResponse({}));
  }

  /**
   * 更新实例名称
   * 
   * @param request - UpdateComputeInstanceNameRequest
   * @returns UpdateComputeInstanceNameResponse
   */
  async updateComputeInstanceName(request: $_model.UpdateComputeInstanceNameRequest): Promise<$_model.UpdateComputeInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeInstanceNameWithOptions(request, runtime);
  }

  /**
   * 更新 JOB
   * 
   * @param request - UpdateComputeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeJobResponse
   */
  async updateComputeJobWithOptions(request: $_model.UpdateComputeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.upgradeMode)) {
      query["UpgradeMode"] = request.upgradeMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeJob",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeJobResponse({}));
  }

  /**
   * 更新 JOB
   * 
   * @param request - UpdateComputeJobRequest
   * @returns UpdateComputeJobResponse
   */
  async updateComputeJob(request: $_model.UpdateComputeJobRequest): Promise<$_model.UpdateComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobWithOptions(request, runtime);
  }

  /**
   * 更新 JOB 的 CU 配额
   * 
   * @param request - UpdateComputeJobCuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeJobCuResponse
   */
  async updateComputeJobCuWithOptions(request: $_model.UpdateComputeJobCuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeJobCuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cuLimit)) {
      query["CuLimit"] = request.cuLimit;
    }

    if (!$dara.isNull(request.cuReserved)) {
      query["CuReserved"] = request.cuReserved;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeJobCu",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeJobCuResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeJobCuResponse({}));
  }

  /**
   * 更新 JOB 的 CU 配额
   * 
   * @param request - UpdateComputeJobCuRequest
   * @returns UpdateComputeJobCuResponse
   */
  async updateComputeJobCu(request: $_model.UpdateComputeJobCuRequest): Promise<$_model.UpdateComputeJobCuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobCuWithOptions(request, runtime);
  }

  /**
   * 更新 JOB 的 SQL
   * 
   * @param request - UpdateComputeJobDraftSqlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeJobDraftSqlResponse
   */
  async updateComputeJobDraftSqlWithOptions(request: $_model.UpdateComputeJobDraftSqlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeJobDraftSqlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftSql)) {
      query["DraftSql"] = request.draftSql;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeJobDraftSql",
      version: "2026-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeJobDraftSqlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeJobDraftSqlResponse({}));
  }

  /**
   * 更新 JOB 的 SQL
   * 
   * @param request - UpdateComputeJobDraftSqlRequest
   * @returns UpdateComputeJobDraftSqlResponse
   */
  async updateComputeJobDraftSql(request: $_model.UpdateComputeJobDraftSqlRequest): Promise<$_model.UpdateComputeJobDraftSqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobDraftSqlWithOptions(request, runtime);
  }

}
