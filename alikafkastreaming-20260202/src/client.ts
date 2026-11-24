// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "AlikafkaStreaming";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Validates whether a specified Flink SQL statement complies with the specifications.
   * 
   * @remarks
   * ## Operation description
   * - You can invoke this operation by using the GET or POST method.
   * - You must specify the `InstanceId`, `JobName`, and `SqlContent` parameters. The `SqlContent` parameter specifies the Flink SQL statement to be validated.
   * - In the response, the `Data.Valid` field indicates whether the SQL statement passed the validation. If the validation fails, the fault details are returned in the `Data.ErrorList` field.
   * - The current version requires both the instance ID (`InstanceId`) and the job name (`JobName`) to build the job context.
   * - A successful response only indicates that the system starts to execute the validation flow. It does not directly indicate whether the SQL statement is valid. Check the `Data.Valid` field to determine whether the SQL statement is valid.
   * - For error codes and exception handling, refer to the Error codes section in the References.
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
   * Validates whether a specified Flink SQL statement complies with the specifications.
   * 
   * @remarks
   * ## Operation description
   * - You can invoke this operation by using the GET or POST method.
   * - You must specify the `InstanceId`, `JobName`, and `SqlContent` parameters. The `SqlContent` parameter specifies the Flink SQL statement to be validated.
   * - In the response, the `Data.Valid` field indicates whether the SQL statement passed the validation. If the validation fails, the fault details are returned in the `Data.ErrorList` field.
   * - The current version requires both the instance ID (`InstanceId`) and the job name (`JobName`) to build the job context.
   * - A successful response only indicates that the system starts to execute the validation flow. It does not directly indicate whether the SQL statement is valid. Check the `Data.Valid` field to determine whether the SQL statement is valid.
   * - For error codes and exception handling, refer to the Error codes section in the References.
   * 
   * @param request - CheckSqlContentRequest
   * @returns CheckSqlContentResponse
   */
  async checkSqlContent(request: $_model.CheckSqlContentRequest): Promise<$_model.CheckSqlContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSqlContentWithOptions(request, runtime);
  }

  /**
   * Creates a compute instance. This operation only completes the purchase phase. After the instance is created, call StartComputeInstance to complete network configuration and deployment.
   * 
   * @remarks
   * Creates a compute instance. This operation only completes the purchase phase. After the instance is created, call StartComputeInstance to complete network configuration and deployment.
   * - API version: 2026-02-02
   * - Action: CreateComputeInstance
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
   * Creates a compute instance. This operation only completes the purchase phase. After the instance is created, call StartComputeInstance to complete network configuration and deployment.
   * 
   * @remarks
   * Creates a compute instance. This operation only completes the purchase phase. After the instance is created, call StartComputeInstance to complete network configuration and deployment.
   * - API version: 2026-02-02
   * - Action: CreateComputeInstance
   * 
   * @param request - CreateComputeInstanceRequest
   * @returns CreateComputeInstanceResponse
   */
  async createComputeInstance(request: $_model.CreateComputeInstanceRequest): Promise<$_model.CreateComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a Flink SQL job on a running compute instance.
   * 
   * @remarks
   * ## Request description
   * - This API creates a new Flink SQL job on a specified running compute instance.
   * - The created job is in the `INIT` state.
   * - You can control the resource usage of the job by setting `CuLimit` and `CuReserved`.
   * - The `Remark` field allows you to add remarks to the job for easier management and identification.
   * - Make sure that the `RegionId`, `InstanceId`, and `JobName` parameters are accurate. Otherwise, the request may fail.
   * - If you attempt to create a job with a duplicate name, an error is returned.
   * - The compute instance must be in the running state to successfully create a job.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Creates a Flink SQL job on a running compute instance.
   * 
   * @remarks
   * ## Request description
   * - This API creates a new Flink SQL job on a specified running compute instance.
   * - The created job is in the `INIT` state.
   * - You can control the resource usage of the job by setting `CuLimit` and `CuReserved`.
   * - The `Remark` field allows you to add remarks to the job for easier management and identification.
   * - Make sure that the `RegionId`, `InstanceId`, and `JobName` parameters are accurate. Otherwise, the request may fail.
   * - If you attempt to create a job with a duplicate name, an error is returned.
   * - The compute instance must be in the running state to successfully create a job.
   * 
   * @param request - CreateComputeJobRequest
   * @returns CreateComputeJobResponse
   */
  async createComputeJob(request: $_model.CreateComputeJobRequest): Promise<$_model.CreateComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComputeJobWithOptions(request, runtime);
  }

  /**
   * Deletes a compute instance that is in the pending deployment, stopped, or released state.
   * 
   * @remarks
   * Deletes a compute instance that is in the pending deployment, stopped, or released state.
   * - API version: 2026-02-02
   * - Action: DeleteComputeInstance
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
   * Deletes a compute instance that is in the pending deployment, stopped, or released state.
   * 
   * @remarks
   * Deletes a compute instance that is in the pending deployment, stopped, or released state.
   * - API version: 2026-02-02
   * - Action: DeleteComputeInstance
   * 
   * @param request - DeleteComputeInstanceRequest
   * @returns DeleteComputeInstanceResponse
   */
  async deleteComputeInstance(request: $_model.DeleteComputeInstanceRequest): Promise<$_model.DeleteComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComputeInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a specified compute job. A successful request indicates that the deletion request has been accepted.
   * 
   * @remarks
   * ## Request description
   * - This operation deletes a specific compute job.
   * - A successful call to this operation only indicates that the deletion request has been accepted by the system. The deletion is not completed immediately.
   * - Make sure that the `RegionId`, `InstanceId`, and `JobName` parameters are accurate. Otherwise, the request may fail.
   * - If the compute instance or job is in a state that does not allow deletion, such as a non-running state, an error message is returned.
   * - The deletion operation is irreversible. Proceed with caution.
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
   * Deletes a specified compute job. A successful request indicates that the deletion request has been accepted.
   * 
   * @remarks
   * ## Request description
   * - This operation deletes a specific compute job.
   * - A successful call to this operation only indicates that the deletion request has been accepted by the system. The deletion is not completed immediately.
   * - Make sure that the `RegionId`, `InstanceId`, and `JobName` parameters are accurate. Otherwise, the request may fail.
   * - If the compute instance or job is in a state that does not allow deletion, such as a non-running state, an error message is returned.
   * - The deletion operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteComputeJobRequest
   * @returns DeleteComputeJobResponse
   */
  async deleteComputeJob(request: $_model.DeleteComputeJobRequest): Promise<$_model.DeleteComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComputeJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified compute instance.
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
   * Queries the details of a specified compute instance.
   * 
   * @param request - GetComputeInstanceRequest
   * @returns GetComputeInstanceResponse
   */
  async getComputeInstance(request: $_model.GetComputeInstanceRequest): Promise<$_model.GetComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComputeInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a compute job in Alikafka Streaming by using a parameter query.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the details of a specified compute job.
   * - You can use the GET or POST method to send requests.
   * - The `RegionId`, `InstanceId`, and `JobName` parameters are required.
   * - The authorization action is `alikafkastreaming:GetComputeJob`, and the access level is Read.
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
   * Queries the details of a compute job in Alikafka Streaming by using a parameter query.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the details of a specified compute job.
   * - You can use the GET or POST method to send requests.
   * - The `RegionId`, `InstanceId`, and `JobName` parameters are required.
   * - The authorization action is `alikafkastreaming:GetComputeJob`, and the access level is Read.
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
   * Queries compute instances under the current account by using paging.
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

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
   * Queries compute instances under the current account by using paging.
   * 
   * @param request - ListComputeInstancesInPageRequest
   * @returns ListComputeInstancesInPageResponse
   */
  async listComputeInstancesInPage(request: $_model.ListComputeInstancesInPageRequest): Promise<$_model.ListComputeInstancesInPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComputeInstancesInPageWithOptions(request, runtime);
  }

  /**
   * Queries all job information under a specified compute instance by using paging.
   * 
   * @remarks
   * ## Request description
   * - This operation supports a cursor-based paged query by using the `MaxResults` and `NextToken` parameters.
   * - You do not need to specify `NextToken` in the first request. For subsequent requests, use the `NextToken` value returned in the previous response.
   * - You can search by job name or remark, and specify different sorting fields and directions.
   * - The authorization action is `alikafkastreaming:ListComputeJobs`. The access level is List, which applies to all resources.
   * 
   * @param request - ListComputeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeJobsResponse
   */
  async listComputeJobsWithOptions(request: $_model.ListComputeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
   * Queries all job information under a specified compute instance by using paging.
   * 
   * @remarks
   * ## Request description
   * - This operation supports a cursor-based paged query by using the `MaxResults` and `NextToken` parameters.
   * - You do not need to specify `NextToken` in the first request. For subsequent requests, use the `NextToken` value returned in the previous response.
   * - You can search by job name or remark, and specify different sorting fields and directions.
   * - The authorization action is `alikafkastreaming:ListComputeJobs`. The access level is List, which applies to all resources.
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
   * Re-enables a stopped pay-as-you-go compute instance. A successful response indicates that the re-enablement request has been accepted.
   * 
   * @remarks
   * Re-enables a stopped pay-as-you-go compute instance. A successful response indicates that the re-enablement request has been accepted.
   * - API version: 2026-02-02
   * - Action: ReopenComputeInstance
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Re-enables a stopped pay-as-you-go compute instance. A successful response indicates that the re-enablement request has been accepted.
   * 
   * @remarks
   * Re-enables a stopped pay-as-you-go compute instance. A successful response indicates that the re-enablement request has been accepted.
   * - API version: 2026-02-02
   * - Action: ReopenComputeInstance
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
   * Configures the network and deploys a compute instance in the pending deployment state.
   * 
   * @remarks
   * Configures the network and deploys a compute instance in the pending deployment state.
   * - API version: 2026-02-02
   * - Action: StartComputeInstance
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

    if (!$dara.isNull(request.vSwitchIdsShrink)) {
      query["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Configures the network and deploys a compute instance in the pending deployment state.
   * 
   * @remarks
   * Configures the network and deploys a compute instance in the pending deployment state.
   * - API version: 2026-02-02
   * - Action: StartComputeInstance
   * 
   * @param request - StartComputeInstanceRequest
   * @returns StartComputeInstanceResponse
   */
  async startComputeInstance(request: $_model.StartComputeInstanceRequest): Promise<$_model.StartComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startComputeInstanceWithOptions(request, runtime);
  }

  /**
   * Starts, resumes, or debugs a compute job.
   * 
   * @remarks
   * ## Request description
   * - `RecoveryMode` supports two modes: `savepoint` and `stateless`. If you select the `savepoint` mode but no savepoint is available, an error is returned.
   * - The `CuLimit` and `CuReserved` parameters are used to set the CU limit and the number of reserved CUs for the job, respectively. Integers and decimals are supported.
   * - Make sure that the values of the `RegionId`, `InstanceId`, and `JobName` parameters are correct and exist. Otherwise, the request fails.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Starts, resumes, or debugs a compute job.
   * 
   * @remarks
   * ## Request description
   * - `RecoveryMode` supports two modes: `savepoint` and `stateless`. If you select the `savepoint` mode but no savepoint is available, an error is returned.
   * - The `CuLimit` and `CuReserved` parameters are used to set the CU limit and the number of reserved CUs for the job, respectively. Integers and decimals are supported.
   * - Make sure that the values of the `RegionId`, `InstanceId`, and `JobName` parameters are correct and exist. Otherwise, the request fails.
   * 
   * @param request - StartComputeJobRequest
   * @returns StartComputeJobResponse
   */
  async startComputeJob(request: $_model.StartComputeJobRequest): Promise<$_model.StartComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startComputeJobWithOptions(request, runtime);
  }

  /**
   * Stops a running pay-as-you-go compute instance. A successful response indicates that the stop request has been accepted.
   * 
   * @remarks
   * Stops a running pay-as-you-go compute instance. A successful response indicates that the stop request has been accepted.
   * - API version: 2026-02-02
   * - Action: StopComputeInstance
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Stops a running pay-as-you-go compute instance. A successful response indicates that the stop request has been accepted.
   * 
   * @remarks
   * Stops a running pay-as-you-go compute instance. A successful response indicates that the stop request has been accepted.
   * - API version: 2026-02-02
   * - Action: StopComputeInstance
   * 
   * @param request - StopComputeInstanceRequest
   * @returns StopComputeInstanceResponse
   */
  async stopComputeInstance(request: $_model.StopComputeInstanceRequest): Promise<$_model.StopComputeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopComputeInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a compute job in a specified region and instance.
   * 
   * @remarks
   * ## Request description
   * - This operation stops the production or debug runtime instance of a specified compute job.
   * - A successful response indicates that the stop request has been accepted, but it does not mean that the job stops immediately.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Stops a compute job in a specified region and instance.
   * 
   * @remarks
   * ## Request description
   * - This operation stops the production or debug runtime instance of a specified compute job.
   * - A successful response indicates that the stop request has been accepted, but it does not mean that the job stops immediately.
   * 
   * @param request - StopComputeJobRequest
   * @returns StopComputeJobResponse
   */
  async stopComputeJob(request: $_model.StopComputeJobRequest): Promise<$_model.StopComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopComputeJobWithOptions(request, runtime);
  }

  /**
   * Updates the name of a compute instance. The instance must be in the deployment preparation or running state.
   * 
   * @remarks
   * Updates the name of a compute instance. The instance must be in the deployment preparation or running state.
   * - API version: 2026-02-02
   * - Action: UpdateComputeInstanceName
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Updates the name of a compute instance. The instance must be in the deployment preparation or running state.
   * 
   * @remarks
   * Updates the name of a compute instance. The instance must be in the deployment preparation or running state.
   * - API version: 2026-02-02
   * - Action: UpdateComputeInstanceName
   * 
   * @param request - UpdateComputeInstanceNameRequest
   * @returns UpdateComputeInstanceNameResponse
   */
  async updateComputeInstanceName(request: $_model.UpdateComputeInstanceNameRequest): Promise<$_model.UpdateComputeInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeInstanceNameWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks of a specified compute job.
   * 
   * @remarks
   * ## Request description
   * - Ensure that the provided `InstanceId` and `JobName` are valid. Otherwise, an error is returned.
   * - You cannot execute this operation if the instance is not in the running state.
   * - Modifications are not supported if the current job is running as a debug node or undergoing changes.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Modifies the remarks of a specified compute job.
   * 
   * @remarks
   * ## Request description
   * - Ensure that the provided `InstanceId` and `JobName` are valid. Otherwise, an error is returned.
   * - You cannot execute this operation if the instance is not in the running state.
   * - Modifications are not supported if the current job is running as a debug node or undergoing changes.
   * 
   * @param request - UpdateComputeJobRequest
   * @returns UpdateComputeJobResponse
   */
  async updateComputeJob(request: $_model.UpdateComputeJobRequest): Promise<$_model.UpdateComputeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobWithOptions(request, runtime);
  }

  /**
   * Modifies the compute unit (CU) limit and the number of reserved CUs for a specified compute job.
   * 
   * @remarks
   * ## Request description
   * This operation allows you to modify the compute unit (CU) limit and the number of reserved CUs for a specific compute job. Before calling this operation, ensure that the specified `InstanceId` and `JobName` are correct and that the instance is in the running state. Additionally, verify the validity and reasonableness of the `CuLimit` and `CuReserved` parameters to prevent request failures caused by exceeding limits or violating business logic.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Modifies the compute unit (CU) limit and the number of reserved CUs for a specified compute job.
   * 
   * @remarks
   * ## Request description
   * This operation allows you to modify the compute unit (CU) limit and the number of reserved CUs for a specific compute job. Before calling this operation, ensure that the specified `InstanceId` and `JobName` are correct and that the instance is in the running state. Additionally, verify the validity and reasonableness of the `CuLimit` and `CuReserved` parameters to prevent request failures caused by exceeding limits or violating business logic.
   * 
   * @param request - UpdateComputeJobCuRequest
   * @returns UpdateComputeJobCuResponse
   */
  async updateComputeJobCu(request: $_model.UpdateComputeJobCuRequest): Promise<$_model.UpdateComputeJobCuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobCuWithOptions(request, runtime);
  }

  /**
   * Updates the Flink SQL draft saved for a specified compute job.
   * 
   * @remarks
   * ## Request description
   * This operation updates the Flink SQL draft saved for a specific compute job under a given compute instance. Make sure that the provided `InstanceId` and `JobName` are accurate, and the current status of the job supports SQL modification.
   * - **Precautions**:
   *   - Make sure that the target instance is in the running state.
   *   - The current job status must allow SQL modification. The job must not be undergoing debugging or modification.
   *   - The `DraftSql` parameter must contain a complete and correctly formatted Flink SQL statement.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Updates the Flink SQL draft saved for a specified compute job.
   * 
   * @remarks
   * ## Request description
   * This operation updates the Flink SQL draft saved for a specific compute job under a given compute instance. Make sure that the provided `InstanceId` and `JobName` are accurate, and the current status of the job supports SQL modification.
   * - **Precautions**:
   *   - Make sure that the target instance is in the running state.
   *   - The current job status must allow SQL modification. The job must not be undergoing debugging or modification.
   *   - The `DraftSql` parameter must contain a complete and correctly formatted Flink SQL statement.
   * 
   * @param request - UpdateComputeJobDraftSqlRequest
   * @returns UpdateComputeJobDraftSqlResponse
   */
  async updateComputeJobDraftSql(request: $_model.UpdateComputeJobDraftSqlRequest): Promise<$_model.UpdateComputeJobDraftSqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComputeJobDraftSqlWithOptions(request, runtime);
  }

}
