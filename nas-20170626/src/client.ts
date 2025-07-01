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
      'cn-chengdu': "nas.aliyuncs.com",
      'me-east-1': "nas.ap-northeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "nas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a client to the blacklist of a Cloud Parallel File Storage (CPFS) file system and revokes the write access from the client. The blacklist serves as an I/O fence.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClientToBlackListResponse
   */
  // Deprecated
  async addClientToBlackListWithOptions(request: $_model.AddClientToBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddClientToBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddClientToBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddClientToBlackListResponse>(await this.callApi(params, req, runtime), new $_model.AddClientToBlackListResponse({}));
  }

  /**
   * Adds a client to the blacklist of a Cloud Parallel File Storage (CPFS) file system and revokes the write access from the client. The blacklist serves as an I/O fence.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @returns AddClientToBlackListResponse
   */
  // Deprecated
  async addClientToBlackList(request: $_model.AddClientToBlackListRequest): Promise<$_model.AddClientToBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addClientToBlackListWithOptions(request, runtime);
  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   You can apply only one automatic snapshot policy to each file system.
   * *   Each automatic snapshot policy can be applied to multiple file systems.
   * *   If an automatic snapshot policy is applied to a file system, you can call the ApplyAutoSnapshotPolicy operation to change the automatic snapshot policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(request: $_model.ApplyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAutoSnapshotPolicyResponse({}));
  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   You can apply only one automatic snapshot policy to each file system.
   * *   Each automatic snapshot policy can be applied to multiple file systems.
   * *   If an automatic snapshot policy is applied to a file system, you can call the ApplyAutoSnapshotPolicy operation to change the automatic snapshot policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: $_model.ApplyAutoSnapshotPolicyRequest): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Adds AutoRefresh configurations to a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can add AutoRefresh configurations only to the dataflows that are in the `Running` state.
   * *   You can add a maximum of five AutoRefresh configurations to a dataflow.
   * *   It generally takes 2 to 5 minutes to create an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the dataflow status.
   * *   AutoRefresh depends on the object modification events collected by EventBridge from the source Object Storage Service (OSS) bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     > The event buses and event rules created for CPFS in the EventBridge console contain the `Create for cpfs auto refresh` description. The event buses and event rules cannot be modified or deleted. Otherwise, AutoRefresh cannot work properly.
   * *   The AutoRefresh configuration applies only to the prefix and is specified by the RefreshPath parameter. When you add an AutoRefresh configuration to the prefix for a CPFS dataflow, an event bus is created at the user side and an event rule is created for the prefix of the source OSS bucket. When an object is modified in the prefix of the source OSS bucket, an OSS event is generated in the EventBridge console. The event is processed by the CPFS dataflow.
   * *   After AutoRefresh is configured, if the data in the source OSS bucket is updated, the updated metadata is automatically synchronized to the CPFS file system. You can load the updated data when you access files, or run a dataflow task to load the updated data.
   * *   AutoRefreshInterval refers to the interval at which CPFS checks whether data is updated in the prefix of the source OSS bucket. If data is updated, CPFS runs an AutoRefresh task. If the frequency of triggering the object modification event in the source OSS bucket exceeds the processing capability of the CPFS dataflow, AutoRefresh tasks are accumulated, metadata updates are delayed, and the dataflow status becomes Misconfigured. To resolve these issues, you can increase the dataflow specifications or reduce the frequency of triggering the object modification event.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefreshWithOptions(request: $_model.ApplyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.ApplyDataFlowAutoRefreshResponse({}));
  }

  /**
   * Adds AutoRefresh configurations to a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can add AutoRefresh configurations only to the dataflows that are in the `Running` state.
   * *   You can add a maximum of five AutoRefresh configurations to a dataflow.
   * *   It generally takes 2 to 5 minutes to create an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the dataflow status.
   * *   AutoRefresh depends on the object modification events collected by EventBridge from the source Object Storage Service (OSS) bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     > The event buses and event rules created for CPFS in the EventBridge console contain the `Create for cpfs auto refresh` description. The event buses and event rules cannot be modified or deleted. Otherwise, AutoRefresh cannot work properly.
   * *   The AutoRefresh configuration applies only to the prefix and is specified by the RefreshPath parameter. When you add an AutoRefresh configuration to the prefix for a CPFS dataflow, an event bus is created at the user side and an event rule is created for the prefix of the source OSS bucket. When an object is modified in the prefix of the source OSS bucket, an OSS event is generated in the EventBridge console. The event is processed by the CPFS dataflow.
   * *   After AutoRefresh is configured, if the data in the source OSS bucket is updated, the updated metadata is automatically synchronized to the CPFS file system. You can load the updated data when you access files, or run a dataflow task to load the updated data.
   * *   AutoRefreshInterval refers to the interval at which CPFS checks whether data is updated in the prefix of the source OSS bucket. If data is updated, CPFS runs an AutoRefresh task. If the frequency of triggering the object modification event in the source OSS bucket exceeds the processing capability of the CPFS dataflow, AutoRefresh tasks are accumulated, metadata updates are delayed, and the dataflow status becomes Misconfigured. To resolve these issues, you can increase the dataflow specifications or reduce the frequency of triggering the object modification event.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefresh(request: $_model.ApplyDataFlowAutoRefreshRequest): Promise<$_model.ApplyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Removes automatic snapshot policies from one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicyWithOptions(request: $_model.CancelAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CancelAutoSnapshotPolicyResponse({}));
  }

  /**
   * Removes automatic snapshot policies from one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicy(request: $_model.CancelAutoSnapshotPolicyRequest): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Cancels the AutoRefresh configuration for a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can cancel AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to cancel the AutoRefresh configurations. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the AutoRefresh tasks.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefreshWithOptions(request: $_model.CancelDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.refreshPath)) {
      query["RefreshPath"] = request.refreshPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowAutoRefreshResponse({}));
  }

  /**
   * Cancels the AutoRefresh configuration for a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can cancel AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to cancel the AutoRefresh configurations. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the AutoRefresh tasks.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefresh(request: $_model.CancelDataFlowAutoRefreshRequest): Promise<$_model.CancelDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Cancels a data streaming task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can cancel a data streaming task only when the task is in the CREATED or RUNNING state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTaskWithOptions(request: $_model.CancelDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowSubTaskId)) {
      query["DataFlowSubTaskId"] = request.dataFlowSubTaskId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowSubTaskResponse({}));
  }

  /**
   * Cancels a data streaming task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can cancel a data streaming task only when the task is in the CREATED or RUNNING state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTask(request: $_model.CancelDataFlowSubTaskRequest): Promise<$_model.CancelDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Cancels a dataflow task that is not running.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * *   You can cancel only the data flow tasks that are in the `Pending` and `Executing` states.
   * *   It generally takes 5 to 10 minutes to cancel a data flow task. You can query the task execution status by calling the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTaskWithOptions(request: $_model.CancelDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDataFlowTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelDataFlowTaskResponse({}));
  }

  /**
   * Cancels a dataflow task that is not running.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * *   You can cancel only the data flow tasks that are in the `Pending` and `Executing` states.
   * *   It generally takes 5 to 10 minutes to cancel a data flow task. You can query the task execution status by calling the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTask(request: $_model.CancelDataFlowTaskRequest): Promise<$_model.CancelDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuotaWithOptions(request: $_model.CancelDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDirQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CancelDirQuotaResponse({}));
  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuota(request: $_model.CancelDirQuotaRequest): Promise<$_model.CancelDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDirQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuotaWithOptions(request: $_model.CancelFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelFilesetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CancelFilesetQuotaResponse({}));
  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuota(request: $_model.CancelFilesetQuotaRequest): Promise<$_model.CancelFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels a running data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJobWithOptions(request: $_model.CancelLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelLifecycleRetrieveJobResponse({}));
  }

  /**
   * Cancels a running data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJob(request: $_model.CancelLifecycleRetrieveJobRequest): Promise<$_model.CancelLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Cancels a running job of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can cancel only jobs that are in the Running state. You cannot cancel jobs that are in the PartialSuccess, Success, Fail, or Cancelled state.
   * *   If you cancel a running job that permanently deletes files, you cannot restore the files that are already permanently deleted.
   * *   If you cancel a running job that restores files, you can query the restored files from the file system, and query the unrestored files from the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJobWithOptions(request: $_model.CancelRecycleBinJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRecycleBinJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRecycleBinJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRecycleBinJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelRecycleBinJobResponse({}));
  }

  /**
   * Cancels a running job of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can cancel only jobs that are in the Running state. You cannot cancel jobs that are in the PartialSuccess, Success, Fail, or Cancelled state.
   * *   If you cancel a running job that permanently deletes files, you cannot restore the files that are already permanently deleted.
   * *   If you cancel a running job that restores files, you can query the restored files from the file system, and query the unrestored files from the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJob(request: $_model.CancelRecycleBinJobRequest): Promise<$_model.CancelRecycleBinJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRecycleBinJobWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a file system belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a file system belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a permission group.
   * 
   * @param request - CreateAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroupWithOptions(request: $_model.CreateAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessGroupType)) {
      query["AccessGroupType"] = request.accessGroupType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessGroupResponse({}));
  }

  /**
   * Creates a permission group.
   * 
   * @param request - CreateAccessGroupRequest
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroup(request: $_model.CreateAccessGroupRequest): Promise<$_model.CreateAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  /**
   * Creates an access point.
   * 
   * @remarks
   *   After you call the CreateAccessPoint operation, an access point is not immediately created. Therefore, after you call the CreateAccessPoint operation successfully, call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. If the status is **Active**, mount the file system. Otherwise, the file system may fail to be mounted.
   * *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   If you want to call the EnabledRam operation to enable a Resource Access Management (RAM) policy, you must configure the corresponding RAM permissions. For more information, see [Manage endpoints](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessPointResponse
   */
  async createAccessPointWithOptions(request: $_model.CreateAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.posixGroupId)) {
      query["PosixGroupId"] = request.posixGroupId;
    }

    if (!$dara.isNull(request.posixSecondaryGroupIds)) {
      query["PosixSecondaryGroupIds"] = request.posixSecondaryGroupIds;
    }

    if (!$dara.isNull(request.posixUserId)) {
      query["PosixUserId"] = request.posixUserId;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswId)) {
      query["VswId"] = request.vswId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessPointResponse({}));
  }

  /**
   * Creates an access point.
   * 
   * @remarks
   *   After you call the CreateAccessPoint operation, an access point is not immediately created. Therefore, after you call the CreateAccessPoint operation successfully, call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. If the status is **Active**, mount the file system. Otherwise, the file system may fail to be mounted.
   * *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   If you want to call the EnabledRam operation to enable a Resource Access Management (RAM) policy, you must configure the corresponding RAM permissions. For more information, see [Manage endpoints](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @returns CreateAccessPointResponse
   */
  async createAccessPoint(request: $_model.CreateAccessPointRequest): Promise<$_model.CreateAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessPointWithOptions(request, runtime);
  }

  /**
   * Creates a rule for a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessRuleResponse
   */
  async createAccessRuleWithOptions(request: $_model.CreateAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessRuleResponse({}));
  }

  /**
   * Creates a rule for a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @returns CreateAccessRuleResponse
   */
  async createAccessRule(request: $_model.CreateAccessRuleRequest): Promise<$_model.CreateAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 100 automatic snapshot policies in each region for an Alibaba Cloud account.
   * *   If an auto snapshot is being created when the scheduled time for a new auto snapshot arrives, the creation of the new snapshot is skipped. This occurs if the file system stores a large volume of data. For example, you have scheduled auto snapshots to be created at 09:00:00, 10:00:00, 11:00:00, and 12:00:00 for a file system. The system starts to create an auto snapshot at 09:00:00 and does not complete the process until 10:20:00. The process takes 80 minutes because the file system has a large volume of data. In this case, the system does not create an auto snapshot at 10:00:00, but creates an auto snapshot at 11:00:00.
   * *   A maximum of 128 auto snapshots can be created for a file system. If the upper limit is reached, the earliest auto snapshot is deleted. This rule does not apply to manual snapshots.
   * *   If you modify the retention period of an automatic snapshot policy, the modification applies only to subsequent snapshots, but not to the existing snapshots.
   * *   If an auto snapshot is being created for a file system, you cannot create a manual snapshot for the file system. You must wait after the auto snapshot is created.
   * *   You can only apply automatic snapshot policies to a file system that is in the Running state.
   * *   All auto snapshots are named in the `auto_yyyyMMdd_X` format, where: `auto` indicates that the snapshot is created based on an automatic snapshot policy. `yyyyMMdd` indicates the date on which the snapshot is created. `y` indicates the year. `M` indicates the month. `d` indicates the day. `X` indicates the ordinal number of the snapshot on the current day. For example, `auto_20201018_1` indicates the first auto snapshot that was created on October 18, 2020.
   * *   After an automatic snapshot policy is created, you can call the ApplyAutoSnapshotPolicy operation to apply the policy to a file system and call the ModifyAutoSnapshotPolicy operation to modify the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(request: $_model.CreateAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoSnapshotPolicyResponse({}));
  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 100 automatic snapshot policies in each region for an Alibaba Cloud account.
   * *   If an auto snapshot is being created when the scheduled time for a new auto snapshot arrives, the creation of the new snapshot is skipped. This occurs if the file system stores a large volume of data. For example, you have scheduled auto snapshots to be created at 09:00:00, 10:00:00, 11:00:00, and 12:00:00 for a file system. The system starts to create an auto snapshot at 09:00:00 and does not complete the process until 10:20:00. The process takes 80 minutes because the file system has a large volume of data. In this case, the system does not create an auto snapshot at 10:00:00, but creates an auto snapshot at 11:00:00.
   * *   A maximum of 128 auto snapshots can be created for a file system. If the upper limit is reached, the earliest auto snapshot is deleted. This rule does not apply to manual snapshots.
   * *   If you modify the retention period of an automatic snapshot policy, the modification applies only to subsequent snapshots, but not to the existing snapshots.
   * *   If an auto snapshot is being created for a file system, you cannot create a manual snapshot for the file system. You must wait after the auto snapshot is created.
   * *   You can only apply automatic snapshot policies to a file system that is in the Running state.
   * *   All auto snapshots are named in the `auto_yyyyMMdd_X` format, where: `auto` indicates that the snapshot is created based on an automatic snapshot policy. `yyyyMMdd` indicates the date on which the snapshot is created. `y` indicates the year. `M` indicates the month. `d` indicates the day. `X` indicates the ordinal number of the snapshot on the current day. For example, `auto_20201018_1` indicates the first auto snapshot that was created on October 18, 2020.
   * *   After an automatic snapshot policy is created, you can call the ApplyAutoSnapshotPolicy operation to apply the policy to a file system and call the ModifyAutoSnapshotPolicy operation to modify the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: $_model.CreateAutoSnapshotPolicyRequest): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a dataflow for a Cloud Parallel File Storage (CPFS) file system and source storage.
   * 
   * @remarks
   *   Basic operations
   *     *   Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   *     *   You can create a data flow only when a CPFS for LINGJUN file system is in the Running state.
   *     *   A maximum of 10 data flows can be created for a CPFS for LINGJUN file system.
   *     *   It generally takes 2 to 5 minutes to create a data flow. You can call the DescribeDataFlows operation to check whether the data flow has been created.
   * *   Permissions
   *     When you create a data flow, CPFS for LINGJUN obtains the following two service-linked roles: `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification`. For more information, see [CPFS service-linked roles](https://help.aliyun.com/document_detail/2837688.html).
   * *   CPFS for LINGJUN usage notes
   *      *   Source storage
   *          *   The source storage is an Object Storage Service (OSS) bucket. SourceStorage for a data flow must be an OSS bucket.
   *          *   CPFS for LINGJUN data flows support both encrypted and unencrypted access to OSS. If you select SSL-encrypted access to OSS, make sure that encryption in transit for OSS buckets supports encrypted access.
   *          *   If data flows for multiple CPFS for LINGJUN file systems or multiple data flows for the same CPFS for LINGJUN file system are stored in the same OSS bucket, you must enable versioning for the OSS bucket to prevent data conflicts caused by data export from multiple CPFS for LINGJUN file systems to one OSS bucket.
   *          *   Data flows are not supported for OSS buckets across regions. The OSS bucket must reside in the same region as the CPFS file system.
   *          *   CPFS for LINGJUN V2.6.0 and later allow you to create data flows for OSS buckets across accounts.
   *          *   The account id parameter is required only when you use OSS buckets across accounts.
   *          *   To use OSS buckets across accounts, you must first grant permissions to the related accounts. For more information, see [Cross-account authorization on data flows](https://help.aliyun.com/document_detail/2713462.html).
   *          >  Before you create a data flow, you must configure a tag (key: cpfs-dataflow, value: true) for the source OSS bucket. This way, the created data flow can access the data in the OSS bucket. When a data flow is being used, do not delete or modify the tag. Otherwise, the data flow for CPFS for LINGJUN cannot access the data in the OSS bucket.
   *     *   Limits of data flows on file systems
   *         *   You cannot rename a non-empty directory in a path that is associated with a data flow. Otherwise, the Permission Denied error message or an error message indicating that the directory is not empty is returned.
   *         *   Proceed with caution when you use special characters in the names of directories and files. The following characters are supported: letters, digits, exclamation points (!), hyphens (-), underscores (_), periods (.), asterisks (\\*), and parentheses (()).
   *         *   The path can be up to 1,023 characters in length.
   *     *   Limits of data flows on import
   *         *   After a symbolic link is imported to CPFS for LINGJUN, the symbolic link is converted into a common data file that contains no symbolic link information.
   *         *   If an OSS bucket has multiple versions, only data of the latest version is used.
   *         *   The name of a file or a subdirectory can be up to 255 bytes in length.
   *     *   Limits of data flows on export
   *         *   After a symbolic link is synchronized to OSS, the file that the symbolic link points to is not synchronized to OSS. In this case, the symbolic link is converted into a common object that contains no data.
   *         *   Hard links can be synchronized to OSS only as common files that contain no link information.
   *         *   After a file of the Socket, Device, or Pipe type is exported to an OSS bucket, the file is converted into a common object that contains no data.
   *         *   The directory path can be up to 1,023 characters in length.
   * 
   * @param request - CreateDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowResponse
   */
  async createDataFlowWithOptions(request: $_model.CreateDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sourceSecurityType)) {
      query["SourceSecurityType"] = request.sourceSecurityType;
    }

    if (!$dara.isNull(request.sourceStorage)) {
      query["SourceStorage"] = request.sourceStorage;
    }

    if (!$dara.isNull(request.sourceStoragePath)) {
      query["SourceStoragePath"] = request.sourceStoragePath;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowResponse({}));
  }

  /**
   * Creates a dataflow for a Cloud Parallel File Storage (CPFS) file system and source storage.
   * 
   * @remarks
   *   Basic operations
   *     *   Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   *     *   You can create a data flow only when a CPFS for LINGJUN file system is in the Running state.
   *     *   A maximum of 10 data flows can be created for a CPFS for LINGJUN file system.
   *     *   It generally takes 2 to 5 minutes to create a data flow. You can call the DescribeDataFlows operation to check whether the data flow has been created.
   * *   Permissions
   *     When you create a data flow, CPFS for LINGJUN obtains the following two service-linked roles: `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification`. For more information, see [CPFS service-linked roles](https://help.aliyun.com/document_detail/2837688.html).
   * *   CPFS for LINGJUN usage notes
   *      *   Source storage
   *          *   The source storage is an Object Storage Service (OSS) bucket. SourceStorage for a data flow must be an OSS bucket.
   *          *   CPFS for LINGJUN data flows support both encrypted and unencrypted access to OSS. If you select SSL-encrypted access to OSS, make sure that encryption in transit for OSS buckets supports encrypted access.
   *          *   If data flows for multiple CPFS for LINGJUN file systems or multiple data flows for the same CPFS for LINGJUN file system are stored in the same OSS bucket, you must enable versioning for the OSS bucket to prevent data conflicts caused by data export from multiple CPFS for LINGJUN file systems to one OSS bucket.
   *          *   Data flows are not supported for OSS buckets across regions. The OSS bucket must reside in the same region as the CPFS file system.
   *          *   CPFS for LINGJUN V2.6.0 and later allow you to create data flows for OSS buckets across accounts.
   *          *   The account id parameter is required only when you use OSS buckets across accounts.
   *          *   To use OSS buckets across accounts, you must first grant permissions to the related accounts. For more information, see [Cross-account authorization on data flows](https://help.aliyun.com/document_detail/2713462.html).
   *          >  Before you create a data flow, you must configure a tag (key: cpfs-dataflow, value: true) for the source OSS bucket. This way, the created data flow can access the data in the OSS bucket. When a data flow is being used, do not delete or modify the tag. Otherwise, the data flow for CPFS for LINGJUN cannot access the data in the OSS bucket.
   *     *   Limits of data flows on file systems
   *         *   You cannot rename a non-empty directory in a path that is associated with a data flow. Otherwise, the Permission Denied error message or an error message indicating that the directory is not empty is returned.
   *         *   Proceed with caution when you use special characters in the names of directories and files. The following characters are supported: letters, digits, exclamation points (!), hyphens (-), underscores (_), periods (.), asterisks (\\*), and parentheses (()).
   *         *   The path can be up to 1,023 characters in length.
   *     *   Limits of data flows on import
   *         *   After a symbolic link is imported to CPFS for LINGJUN, the symbolic link is converted into a common data file that contains no symbolic link information.
   *         *   If an OSS bucket has multiple versions, only data of the latest version is used.
   *         *   The name of a file or a subdirectory can be up to 255 bytes in length.
   *     *   Limits of data flows on export
   *         *   After a symbolic link is synchronized to OSS, the file that the symbolic link points to is not synchronized to OSS. In this case, the symbolic link is converted into a common object that contains no data.
   *         *   Hard links can be synchronized to OSS only as common files that contain no link information.
   *         *   After a file of the Socket, Device, or Pipe type is exported to an OSS bucket, the file is converted into a common object that contains no data.
   *         *   The directory path can be up to 1,023 characters in length.
   * 
   * @param request - CreateDataFlowRequest
   * @returns CreateDataFlowResponse
   */
  async createDataFlow(request: $_model.CreateDataFlowRequest): Promise<$_model.CreateDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowWithOptions(request, runtime);
  }

  /**
   * Creates a data streaming subtask.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can create subtasks only for a data streaming subtask in the Executing state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * *   When the type of data flow task is streaming, the running status only indicates that a streaming import or export task can be created. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTaskWithOptions(request: $_model.CreateDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstFilePath)) {
      query["DstFilePath"] = request.dstFilePath;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.srcFilePath)) {
      query["SrcFilePath"] = request.srcFilePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowSubTaskResponse({}));
  }

  /**
   * Creates a data streaming subtask.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can create subtasks only for a data streaming subtask in the Executing state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * *   When the type of data flow task is streaming, the running status only indicates that a streaming import or export task can be created. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTask(request: $_model.CreateDataFlowSubTaskRequest): Promise<$_model.CreateDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Creates a dataflow task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can create a data flow task only for a data flow that is in the Running state.
   * *   Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation to query the task execution status. The task duration depends on the amount of data to be imported and exported. If a large amount of data exists, we recommend that you create multiple tasks.
   * *   When you manually run a data flow task, the automatic data update task for the data flow is interrupted and enters the pending state.
   * *   When you create an export task, make sure that the total length of the absolute path of the files to be exported from a CPFS or CPFS for LINGJUN file system does not exceed 1,023 characters.
   * *   CPFS for LINGJUN supports two types of tasks: batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTaskWithOptions(request: $_model.CreateDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.createDirIfNotExist)) {
      query["CreateDirIfNotExist"] = request.createDirIfNotExist;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.directory)) {
      query["Directory"] = request.directory;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstDirectory)) {
      query["DstDirectory"] = request.dstDirectory;
    }

    if (!$dara.isNull(request.entryList)) {
      query["EntryList"] = request.entryList;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.includes)) {
      query["Includes"] = request.includes;
    }

    if (!$dara.isNull(request.srcTaskId)) {
      query["SrcTaskId"] = request.srcTaskId;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataFlowTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataFlowTaskResponse({}));
  }

  /**
   * Creates a dataflow task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can create a data flow task only for a data flow that is in the Running state.
   * *   Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation to query the task execution status. The task duration depends on the amount of data to be imported and exported. If a large amount of data exists, we recommend that you create multiple tasks.
   * *   When you manually run a data flow task, the automatic data update task for the data flow is interrupted and enters the pending state.
   * *   When you create an export task, make sure that the total length of the absolute path of the files to be exported from a CPFS or CPFS for LINGJUN file system does not exceed 1,023 characters.
   * *   CPFS for LINGJUN supports two types of tasks: batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTask(request: $_model.CreateDataFlowTaskRequest): Promise<$_model.CreateDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - CreateDirRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirResponse
   */
  async createDirWithOptions(request: $_model.CreateDirRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDirResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.recursion)) {
      query["Recursion"] = request.recursion;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDir",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDirResponse>(await this.callApi(params, req, runtime), new $_model.CreateDirResponse({}));
  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - CreateDirRequest
   * @returns CreateDirResponse
   */
  async createDir(request: $_model.CreateDirRequest): Promise<$_model.CreateDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirWithOptions(request, runtime);
  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   *   This operation is only available to some users.
   * *   This operation supports only General-purpose NAS file systems that use the Server Message Block (SMB) protocol and have Resource Access Management (RAM) enabled.
   * 
   * @param request - CreateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: $_model.CreateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerAccessInheritable)) {
      query["OwnerAccessInheritable"] = request.ownerAccessInheritable;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   *   This operation is only available to some users.
   * *   This operation supports only General-purpose NAS file systems that use the Server Message Block (SMB) protocol and have Resource Access Management (RAM) enabled.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   *   Before you call this operation, you must understand the billing and pricing of File Storage NAS. For more information, see [Billing](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/product/nas/pricing).
   * *   Before you create a file system, you must complete real-name verification.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileSystemResponse
   */
  async createFileSystemWithOptions(request: $_model.CreateFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileSystemResponse({}));
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   *   Before you call this operation, you must understand the billing and pricing of File Storage NAS. For more information, see [Billing](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/product/nas/pricing).
   * *   Before you create a file system, you must complete real-name verification.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @returns CreateFileSystemResponse
   */
  async createFileSystem(request: $_model.CreateFileSystemRequest): Promise<$_model.CreateFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   A maximum of 500 filesets can be created for a CPFS file system.
   * *   The fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   * *   The maximum depth supported by a fileset path is eight levels. The depth of the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/ has three levels.
   * *   If the fileset path is a multi-level path, the parent directory must be an existing directory.
   * *   Nested filesets are not supported. If a fileset is specified as a parent directory, its subdirectory cannot be a fileset. A fileset path supports only one quota.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB. The maximum capacity quota is 1,000 TiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the number of files to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilesetResponse
   */
  async createFilesetWithOptions(request: $_model.CreateFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFilesetResponse>(await this.callApi(params, req, runtime), new $_model.CreateFilesetResponse({}));
  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   A maximum of 500 filesets can be created for a CPFS file system.
   * *   The fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   * *   The maximum depth supported by a fileset path is eight levels. The depth of the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/ has three levels.
   * *   If the fileset path is a multi-level path, the parent directory must be an existing directory.
   * *   Nested filesets are not supported. If a fileset is specified as a parent directory, its subdirectory cannot be a fileset. A fileset path supports only one quota.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB. The maximum capacity quota is 1,000 TiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the number of files to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @returns CreateFilesetResponse
   */
  async createFileset(request: $_model.CreateFilesetRequest): Promise<$_model.CreateFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFilesetWithOptions(request, runtime);
  }

  /**
   * Creates LDAP configurations.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLDAPConfigResponse
   */
  // Deprecated
  async createLDAPConfigWithOptions(request: $_model.CreateLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateLDAPConfigResponse({}));
  }

  /**
   * Creates LDAP configurations.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @returns CreateLDAPConfigResponse
   */
  // Deprecated
  async createLDAPConfig(request: $_model.CreateLDAPConfigRequest): Promise<$_model.CreateLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Creates a lifecycle policy.
   * 
   * @remarks
   *   You can create lifecycle policies only for General-purpose NAS file systems.
   * *   You can create up to 20 lifecycle policies in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicyWithOptions(request: $_model.CreateLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateLifecyclePolicyResponse({}));
  }

  /**
   * Creates a lifecycle policy.
   * 
   * @remarks
   *   You can create lifecycle policies only for General-purpose NAS file systems.
   * *   You can create up to 20 lifecycle policies in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicy(request: $_model.CreateLifecyclePolicyRequest): Promise<$_model.CreateLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can run a maximum of 20 data retrieval tasks in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJobWithOptions(request: $_model.CreateLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLifecycleRetrieveJobResponse({}));
  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can run a maximum of 20 data retrieval tasks in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJob(request: $_model.CreateLifecycleRetrieveJobRequest): Promise<$_model.CreateLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Dumps the logs of a General-purpose NAS file system to Simple Log Service.
   * 
   * @param request - CreateLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysisWithOptions(request: $_model.CreateLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogAnalysisResponse({}));
  }

  /**
   * Dumps the logs of a General-purpose NAS file system to Simple Log Service.
   * 
   * @param request - CreateLogAnalysisRequest
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysis(request: $_model.CreateLogAnalysisRequest): Promise<$_model.CreateLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   *   After you call the CreateMountTarget operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the **Active** state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMountTargetResponse
   */
  async createMountTargetWithOptions(request: $_model.CreateMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableIpv6)) {
      query["EnableIpv6"] = request.enableIpv6;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateMountTargetResponse({}));
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   *   After you call the CreateMountTarget operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the **Active** state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @returns CreateMountTargetResponse
   */
  async createMountTarget(request: $_model.CreateMountTargetRequest): Promise<$_model.CreateMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Prerequisites
   *     A protocol service is created.
   * *   Others
   *     *   The virtual private cloud (VPC) CIDR block of the export directory for the protocol service cannot overlap with the VPC CIDR block of the file system.
   *     *   The VPC CIDR blocks of multiple export directories of a protocol service cannot overlap.
   *     *   You can create a maximum of 10 export directories for a protocol service.
   *     *   When you create export directories for a protocol service, a maximum of 32 IP addresses that are allocated by the specified vSwitch are used. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTargetWithOptions(request: $_model.CreateProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtocolMountTargetResponse({}));
  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Prerequisites
   *     A protocol service is created.
   * *   Others
   *     *   The virtual private cloud (VPC) CIDR block of the export directory for the protocol service cannot overlap with the VPC CIDR block of the file system.
   *     *   The VPC CIDR blocks of multiple export directories of a protocol service cannot overlap.
   *     *   You can create a maximum of 10 export directories for a protocol service.
   *     *   When you create export directories for a protocol service, a maximum of 32 IP addresses that are allocated by the specified vSwitch are used. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTarget(request: $_model.CreateProtocolMountTargetRequest): Promise<$_model.CreateProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation takes about 5 to 10 minutes.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   Only CPFS V2.3.0 and later support protocol services. You can query the version information of the file system by calling the [DescribeFileSystems](~~2402188.~~) operation.
   * *   Protocol service types
   *     Protocol services are classified into general-purpose protocol services and cache protocol services. Different from general-purpose protocol services, cache protocol services can cache hot data. If data exists in the cache, the bandwidth of the cache protocol service may exceed the bandwidth of the CPFS file system, reaching the maximum bandwidth specified for the protocol service.
   *     *   General-purpose protocol services: provide NFS access and [directory-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS file systems. You do not need to configure a POSIX client to manage clusters. General-purpose protocol services are provided free of charge.
   *     *   Cache protocol services: provide the server memory cache based on the least recently used (LRU) policy. When data is cached in the memory, CPFS provides higher internal bandwidth. Cache protocol services are divided into Cache L1 and Cache L2 specifications. The differences are the internal bandwidth size and memory cache size.
   *        >   Note You are charged for using cache protocol services, which are in invitational preview. For more information about the billing method of cache protocol services, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, you can join the DingTalk group (group number: 31045006299).
   * *   Protocol type
   *     Only NFSv3 is supported.
   * *   Others
   *     *   Only one protocol service can be created for a CPFS file system.
   *     *   A protocol service can use a maximum of 32 IP addresses that are allocated by a specified vSwitch. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolServiceWithOptions(request: $_model.CreateProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolSpec)) {
      query["ProtocolSpec"] = request.protocolSpec;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtocolServiceResponse({}));
  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation takes about 5 to 10 minutes.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   Only CPFS V2.3.0 and later support protocol services. You can query the version information of the file system by calling the [DescribeFileSystems](~~2402188.~~) operation.
   * *   Protocol service types
   *     Protocol services are classified into general-purpose protocol services and cache protocol services. Different from general-purpose protocol services, cache protocol services can cache hot data. If data exists in the cache, the bandwidth of the cache protocol service may exceed the bandwidth of the CPFS file system, reaching the maximum bandwidth specified for the protocol service.
   *     *   General-purpose protocol services: provide NFS access and [directory-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS file systems. You do not need to configure a POSIX client to manage clusters. General-purpose protocol services are provided free of charge.
   *     *   Cache protocol services: provide the server memory cache based on the least recently used (LRU) policy. When data is cached in the memory, CPFS provides higher internal bandwidth. Cache protocol services are divided into Cache L1 and Cache L2 specifications. The differences are the internal bandwidth size and memory cache size.
   *        >   Note You are charged for using cache protocol services, which are in invitational preview. For more information about the billing method of cache protocol services, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, you can join the DingTalk group (group number: 31045006299).
   * *   Protocol type
   *     Only NFSv3 is supported.
   * *   Others
   *     *   Only one protocol service can be created for a CPFS file system.
   *     *   A protocol service can use a maximum of 32 IP addresses that are allocated by a specified vSwitch. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolServiceRequest
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolService(request: $_model.CreateProtocolServiceRequest): Promise<$_model.CreateProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Creates a job to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you permanently delete a directory, the files in the directory are recursively cleared.
   * *   You can run only one job at a time for a single file system to permanently delete the files from the file system. You cannot create a restoration or deletion job when a file or directory is being deleted.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJobWithOptions(request: $_model.CreateRecycleBinDeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecycleBinDeleteJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinDeleteJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecycleBinDeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecycleBinDeleteJobResponse({}));
  }

  /**
   * Creates a job to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you permanently delete a directory, the files in the directory are recursively cleared.
   * *   You can run only one job at a time for a single file system to permanently delete the files from the file system. You cannot create a restoration or deletion job when a file or directory is being deleted.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJob(request: $_model.CreateRecycleBinDeleteJobRequest): Promise<$_model.CreateRecycleBinDeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinDeleteJobWithOptions(request, runtime);
  }

  /**
   * Restores a file or directory from the recycle bin.
   * 
   * @remarks
   * ### Usage notes
   * *   Only General-purpose NAS file systems support this operation.
   * *   You can run only one job at a time for a single file system to restore files to or clear files from the file system. You cannot create a restore or cleanup job when files are being restored from the recycle bin.
   * *   You can restore only one file or directory in a single restore job. If you restore a specified directory, all files in the directory are recursively restored.
   * *   After files are restored, the data of the files is defragmented. When the data is being defragmented, the read performance is slightly degraded.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJobWithOptions(request: $_model.CreateRecycleBinRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecycleBinRestoreJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinRestoreJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecycleBinRestoreJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecycleBinRestoreJobResponse({}));
  }

  /**
   * Restores a file or directory from the recycle bin.
   * 
   * @remarks
   * ### Usage notes
   * *   Only General-purpose NAS file systems support this operation.
   * *   You can run only one job at a time for a single file system to restore files to or clear files from the file system. You cannot create a restore or cleanup job when files are being restored from the recycle bin.
   * *   You can restore only one file or directory in a single restore job. If you restore a specified directory, all files in the directory are recursively restored.
   * *   After files are restored, the data of the files is defragmented. When the data is being defragmented, the read performance is slightly degraded.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJob(request: $_model.CreateRecycleBinRestoreJobRequest): Promise<$_model.CreateRecycleBinRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinRestoreJobWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 128 snapshots for a file system.
   * *   The compute node on which a file system is mounted must function as expected. Otherwise, you cannot create a snapshot for the file system.
   * *   You can create only one snapshot for a file system at a time.
   * *   If the file system expires when a snapshot is being created, the file system is released and the snapshot is deleted.
   * *   When you create a snapshot for a file system, the I/O performance of the file system may be degraded for a short period of time. We recommend that you create snapshots during off-peak hours.
   * *   A snapshot is a backup of a file system at a specific point in time. After you create a snapshot, incremental data that is generated in the file system will not be synchronized to the snapshot.
   * *   Manually created snapshots will not be deleted until 15 days after the service is suspended due to overdue payments. We recommend that you delete unnecessary snapshots at regular intervals to prevent extra fees incurred by the snapshots.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: $_model.CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 128 snapshots for a file system.
   * *   The compute node on which a file system is mounted must function as expected. Otherwise, you cannot create a snapshot for the file system.
   * *   You can create only one snapshot for a file system at a time.
   * *   If the file system expires when a snapshot is being created, the file system is released and the snapshot is deleted.
   * *   When you create a snapshot for a file system, the I/O performance of the file system may be degraded for a short period of time. We recommend that you create snapshots during off-peak hours.
   * *   A snapshot is a backup of a file system at a specific point in time. After you create a snapshot, incremental data that is generated in the file system will not be synchronized to the snapshot.
   * *   Manually created snapshots will not be deleted until 15 days after the service is suspended due to overdue payments. We recommend that you delete unnecessary snapshots at regular intervals to prevent extra fees incurred by the snapshots.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroupWithOptions(request: $_model.DeleteAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessGroupResponse({}));
  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroup(request: $_model.DeleteAccessGroupRequest): Promise<$_model.DeleteAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   After an access point is deleted, all I/O operations that are being performed on the directory accessed over the access point are interrupted immediately. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPointWithOptions(request: $_model.DeleteAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessPointResponse({}));
  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   After an access point is deleted, all I/O operations that are being performed on the directory accessed over the access point are interrupted immediately. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteAccessPointRequest
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPoint(request: $_model.DeleteAccessPointRequest): Promise<$_model.DeleteAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessPointWithOptions(request, runtime);
  }

  /**
   * Deletes a rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRuleWithOptions(request: $_model.DeleteAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessRuleResponse({}));
  }

  /**
   * Deletes a rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRule(request: $_model.DeleteAccessRuleRequest): Promise<$_model.DeleteAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   If you delete an automatic snapshot policy that is applied to a file system, snapshots for the file system are no longer created based on the policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicyWithOptions(request: $_model.DeleteAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoSnapshotPolicyResponse({}));
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   If you delete an automatic snapshot policy that is applied to a file system, snapshots for the file system are no longer created based on the policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicy(request: $_model.DeleteAutoSnapshotPolicyRequest): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can delete the data flows that are only in the `Running` or `Stopped` state.
   * *   After a data flow is deleted, the resources related to the data flow are released and cannot be restored. You must create a data flow again if required.
   * 
   * @param request - DeleteDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlowWithOptions(request: $_model.DeleteDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataFlowResponse({}));
  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can delete the data flows that are only in the `Running` or `Stopped` state.
   * *   After a data flow is deleted, the resources related to the data flow are released and cannot be restored. You must create a data flow again if required.
   * 
   * @param request - DeleteDataFlowRequest
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlow(request: $_model.DeleteDataFlowRequest): Promise<$_model.DeleteDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   *   Before you delete a file system, you must delete all mount targets of the file system.
   * *   Before you delete a file system, you must make sure that no lifecycle policy is created for the file system.
   * *   After a file system is deleted, the data on the file system cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystemWithOptions(request: $_model.DeleteFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileSystemResponse({}));
  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   *   Before you delete a file system, you must delete all mount targets of the file system.
   * *   Before you delete a file system, you must make sure that no lifecycle policy is created for the file system.
   * *   After a file system is deleted, the data on the file system cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystem(request: $_model.DeleteFileSystemRequest): Promise<$_model.DeleteFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for Lingjun V2.7.0 and later support this operation. After you delete a fileset, all data in the fileset is deleted and cannot be restored. Proceed with caution.
   * *   If deletion protection is enabled for the fileset, you must disable deletion protection before you delete the fileset.
   * *   After you delete a fileset of CPFS for Lingjun, the storage space is not immediately released and will be recycled within 24 hours. If you want to release storage space immediately, you can clear the data in the fileset and then delete the fileset. Deleted data cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilesetResponse
   */
  async deleteFilesetWithOptions(request: $_model.DeleteFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFilesetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFilesetResponse({}));
  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for Lingjun V2.7.0 and later support this operation. After you delete a fileset, all data in the fileset is deleted and cannot be restored. Proceed with caution.
   * *   If deletion protection is enabled for the fileset, you must disable deletion protection before you delete the fileset.
   * *   After you delete a fileset of CPFS for Lingjun, the storage space is not immediately released and will be recycled within 24 hours. If you want to release storage space immediately, you can clear the data in the fileset and then delete the fileset. Deleted data cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFilesetRequest
   * @returns DeleteFilesetResponse
   */
  async deleteFileset(request: $_model.DeleteFilesetRequest): Promise<$_model.DeleteFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFilesetWithOptions(request, runtime);
  }

  /**
   * 删除LDAP配置
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLDAPConfigResponse
   */
  // Deprecated
  async deleteLDAPConfigWithOptions(request: $_model.DeleteLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLDAPConfigResponse({}));
  }

  /**
   * 删除LDAP配置
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @returns DeleteLDAPConfigResponse
   */
  // Deprecated
  async deleteLDAPConfig(request: $_model.DeleteLDAPConfigRequest): Promise<$_model.DeleteLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicyWithOptions(request: $_model.DeleteLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLifecyclePolicyResponse({}));
  }

  /**
   * Deletes a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicy(request: $_model.DeleteLifecyclePolicyRequest): Promise<$_model.DeleteLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Disables log dumping for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysisWithOptions(request: $_model.DeleteLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogAnalysisResponse({}));
  }

  /**
   * Disables log dumping for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysis(request: $_model.DeleteLogAnalysisRequest): Promise<$_model.DeleteLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Deletes a mount target.
   * 
   * @remarks
   * After you delete a mount target, the mount target cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTargetWithOptions(request: $_model.DeleteMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMountTargetResponse({}));
  }

  /**
   * Deletes a mount target.
   * 
   * @remarks
   * After you delete a mount target, the mount target cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTarget(request: $_model.DeleteMountTargetRequest): Promise<$_model.DeleteMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTargetWithOptions(request: $_model.DeleteProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtocolMountTargetResponse({}));
  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTarget(request: $_model.DeleteProtocolMountTargetRequest): Promise<$_model.DeleteProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes a protocol service of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   When you delete a protocol service, the export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolServiceWithOptions(request: $_model.DeleteProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtocolServiceResponse({}));
  }

  /**
   * Deletes a protocol service of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   When you delete a protocol service, the export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolService(request: $_model.DeleteProtocolServiceRequest): Promise<$_model.DeleteProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot or cancels a snapshot that is being created.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * Deletes a snapshot or cancels a snapshot that is being created.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Queries permission groups.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroupsWithOptions(request: $_model.DescribeAccessGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessGroups",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessGroupsResponse({}));
  }

  /**
   * Queries permission groups.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroups(request: $_model.DescribeAccessGroupsRequest): Promise<$_model.DescribeAccessGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPointWithOptions(request: $_model.DescribeAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessPointResponse({}));
  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointRequest
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPoint(request: $_model.DescribeAccessPointRequest): Promise<$_model.DescribeAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointWithOptions(request, runtime);
  }

  /**
   * Queries the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointsResponse
   */
  async describeAccessPointsWithOptions(request: $_model.DescribeAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
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
      action: "DescribeAccessPoints",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessPointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessPointsResponse({}));
  }

  /**
   * Queries the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointsRequest
   * @returns DescribeAccessPointsResponse
   */
  async describeAccessPoints(request: $_model.DescribeAccessPointsRequest): Promise<$_model.DescribeAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries the information about rules in a permission group.
   * 
   * @param request - DescribeAccessRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRulesWithOptions(request: $_model.DescribeAccessRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAccessRules",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessRulesResponse({}));
  }

  /**
   * Queries the information about rules in a permission group.
   * 
   * @param request - DescribeAccessRulesRequest
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRules(request: $_model.DescribeAccessRulesRequest): Promise<$_model.DescribeAccessRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessRulesWithOptions(request, runtime);
  }

  /**
   * Queries automatic snapshot policies.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPoliciesWithOptions(request: $_model.DescribeAutoSnapshotPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoSnapshotPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotPolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoSnapshotPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoSnapshotPoliciesResponse({}));
  }

  /**
   * Queries automatic snapshot policies.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPolicies(request: $_model.DescribeAutoSnapshotPoliciesRequest): Promise<$_model.DescribeAutoSnapshotPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries automatic snapshot tasks.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasksWithOptions(request: $_model.DescribeAutoSnapshotTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoSnapshotTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyIds)) {
      query["AutoSnapshotPolicyIds"] = request.autoSnapshotPolicyIds;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoSnapshotTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoSnapshotTasksResponse({}));
  }

  /**
   * Queries automatic snapshot tasks.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasks(request: $_model.DescribeAutoSnapshotTasksRequest): Promise<$_model.DescribeAutoSnapshotTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotTasksWithOptions(request, runtime);
  }

  /**
   * Queries the status of clients in the blacklist of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlackListClientsResponse
   */
  // Deprecated
  async describeBlackListClientsWithOptions(request: $_model.DescribeBlackListClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBlackListClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBlackListClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBlackListClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBlackListClientsResponse({}));
  }

  /**
   * Queries the status of clients in the blacklist of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @returns DescribeBlackListClientsResponse
   */
  // Deprecated
  async describeBlackListClients(request: $_model.DescribeBlackListClientsRequest): Promise<$_model.DescribeBlackListClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlackListClientsWithOptions(request, runtime);
  }

  /**
   * Queries data flow subtasks in batches.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasksWithOptions(request: $_model.DescribeDataFlowSubTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowSubTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlowSubTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowSubTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowSubTasksResponse({}));
  }

  /**
   * Queries data flow subtasks in batches.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasks(request: $_model.DescribeDataFlowSubTasksRequest): Promise<$_model.DescribeDataFlowSubTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowSubTasksWithOptions(request, runtime);
  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support query of data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasksWithOptions(request: $_model.DescribeDataFlowTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlowTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowTasksResponse({}));
  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support query of data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasks(request: $_model.DescribeDataFlowTasksRequest): Promise<$_model.DescribeDataFlowTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowTasksWithOptions(request, runtime);
  }

  /**
   * Queries the dataflows of a CPFS file system.
   * 
   * @remarks
   *   Only CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds, DataFlowlds, SourceStorage, ThroughputList, and Status support exact match only. FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlowsWithOptions(request: $_model.DescribeDataFlowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataFlowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlows",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataFlowsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataFlowsResponse({}));
  }

  /**
   * Queries the dataflows of a CPFS file system.
   * 
   * @remarks
   *   Only CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds, DataFlowlds, SourceStorage, ThroughputList, and Status support exact match only. FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlows(request: $_model.DescribeDataFlowsRequest): Promise<$_model.DescribeDataFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowsWithOptions(request, runtime);
  }

  /**
   * Queries the directory quotas of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotasWithOptions(request: $_model.DescribeDirQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirQuotasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirQuotas",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirQuotasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDirQuotasResponse({}));
  }

  /**
   * Queries the directory quotas of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotas(request: $_model.DescribeDirQuotasRequest): Promise<$_model.DescribeDirQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of file systems that are owned by the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemStatisticsResponse
   */
  // Deprecated
  async describeFileSystemStatisticsWithOptions(request: $_model.DescribeFileSystemStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemStatisticsResponse> {
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
      action: "DescribeFileSystemStatistics",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileSystemStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileSystemStatisticsResponse({}));
  }

  /**
   * Queries the statistics of file systems that are owned by the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @returns DescribeFileSystemStatisticsResponse
   */
  // Deprecated
  async describeFileSystemStatistics(request: $_model.DescribeFileSystemStatisticsRequest): Promise<$_model.DescribeFileSystemStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystemsWithOptions(request: $_model.DescribeFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileSystems",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileSystemsResponse({}));
  }

  /**
   * Queries file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystems(request: $_model.DescribeFileSystemsRequest): Promise<$_model.DescribeFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries the information about created filesets.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds supports exact match only. FileSystemPath and Description support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilesetsResponse
   */
  async describeFilesetsWithOptions(request: $_model.DescribeFilesetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFilesetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilesets",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFilesetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFilesetsResponse({}));
  }

  /**
   * Queries the information about created filesets.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds supports exact match only. FileSystemPath and Description support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @returns DescribeFilesetsResponse
   */
  async describeFilesets(request: $_model.DescribeFilesetsRequest): Promise<$_model.DescribeFilesetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilesetsWithOptions(request, runtime);
  }

  /**
   * Queries lifecycle policies.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePoliciesWithOptions(request: $_model.DescribeLifecyclePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLifecyclePoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLifecyclePolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLifecyclePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLifecyclePoliciesResponse({}));
  }

  /**
   * Queries lifecycle policies.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePolicies(request: $_model.DescribeLifecyclePoliciesRequest): Promise<$_model.DescribeLifecyclePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecyclePoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the log dump information configured in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysisWithOptions(request: $_model.DescribeLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogAnalysisResponse({}));
  }

  /**
   * Queries the log dump information configured in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysis(request: $_model.DescribeLogAnalysisRequest): Promise<$_model.DescribeLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Queries mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargetsWithOptions(request: $_model.DescribeMountTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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
      action: "DescribeMountTargets",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountTargetsResponse({}));
  }

  /**
   * Queries mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargets(request: $_model.DescribeMountTargetsRequest): Promise<$_model.DescribeMountTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the clients on which a file system is mounted.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   This operation returns the clients that have accessed the specified file system within the last minute. If the file system is mounted on a client but the client did not access the file system within the last minute, the client is not included in the returned information.
   * 
   * @param request - DescribeMountedClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClientsWithOptions(request: $_model.DescribeMountedClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountedClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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
      action: "DescribeMountedClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountedClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountedClientsResponse({}));
  }

  /**
   * Queries the clients on which a file system is mounted.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   This operation returns the clients that have accessed the specified file system within the last minute. If the file system is mounted on a client but the client did not access the file system within the last minute, the client is not included in the returned information.
   * 
   * @param request - DescribeMountedClientsRequest
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClients(request: $_model.DescribeMountedClientsRequest): Promise<$_model.DescribeMountedClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountedClientsWithOptions(request, runtime);
  }

  /**
   * Queries whether the NFS ACL feature is enabled for a file system.
   * 
   * @param request - DescribeNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAclWithOptions(request: $_model.DescribeNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNfsAclResponse({}));
  }

  /**
   * Queries whether the NFS ACL feature is enabled for a file system.
   * 
   * @param request - DescribeNfsAclRequest
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAcl(request: $_model.DescribeNfsAclRequest): Promise<$_model.DescribeNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNfsAclWithOptions(request, runtime);
  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTargetWithOptions(request: $_model.DescribeProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProtocolMountTargetResponse({}));
  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTarget(request: $_model.DescribeProtocolMountTargetRequest): Promise<$_model.DescribeProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Queries the information about protocol services.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolServiceWithOptions(request: $_model.DescribeProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protocolServiceIds)) {
      query["ProtocolServiceIds"] = request.protocolServiceIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProtocolServiceResponse({}));
  }

  /**
   * Queries the information about protocol services.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolServiceRequest
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolService(request: $_model.DescribeProtocolServiceRequest): Promise<$_model.DescribeProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which File Storage NAS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeRegions",
      version: "2017-06-26",
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
   * Queries the regions in which File Storage NAS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DescribeSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAclWithOptions(request: $_model.DescribeSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSmbAclResponse({}));
  }

  /**
   * Queries the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DescribeSmbAclRequest
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAcl(request: $_model.DescribeSmbAclRequest): Promise<$_model.DescribeSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more snapshots of a file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnapshotsResponse({}));
  }

  /**
   * Queries the information about one or more snapshots of a file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeStoragePackages operation to query the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackagesWithOptions(request: $_model.DescribeStoragePackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStoragePackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStoragePackages",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStoragePackagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStoragePackagesResponse({}));
  }

  /**
   * You can call the DescribeStoragePackages operation to query the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackages(request: $_model.DescribeStoragePackagesRequest): Promise<$_model.DescribeStoragePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStoragePackagesWithOptions(request, runtime);
  }

  /**
   * Queries all zones in a region and the file system types that are supported in each zone.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * Queries all zones in a region and the file system types that are supported in each zone.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Disables and empties the recycle bin of a General-purpose NAS file system.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you disable the recycle bin, all files in the recycle bin are permanently deleted.
   * *   If you disable and then enable the recycle bin, the recycle bin is empty. You cannot retrieve the deleted files.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBinWithOptions(request: $_model.DisableAndCleanRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAndCleanRecycleBinResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAndCleanRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAndCleanRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.DisableAndCleanRecycleBinResponse({}));
  }

  /**
   * Disables and empties the recycle bin of a General-purpose NAS file system.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you disable the recycle bin, all files in the recycle bin are permanently deleted.
   * *   If you disable and then enable the recycle bin, the recycle bin is empty. You cannot retrieve the deleted files.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBin(request: $_model.DisableAndCleanRecycleBinRequest): Promise<$_model.DisableAndCleanRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAndCleanRecycleBinWithOptions(request, runtime);
  }

  /**
   * Disables the NFS ACL feature for a file system.
   * 
   * @param request - DisableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableNfsAclResponse
   */
  async disableNfsAclWithOptions(request: $_model.DisableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.DisableNfsAclResponse({}));
  }

  /**
   * Disables the NFS ACL feature for a file system.
   * 
   * @param request - DisableNfsAclRequest
   * @returns DisableNfsAclResponse
   */
  async disableNfsAcl(request: $_model.DisableNfsAclRequest): Promise<$_model.DisableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableNfsAclWithOptions(request, runtime);
  }

  /**
   * Disables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DisableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSmbAclResponse
   */
  async disableSmbAclWithOptions(request: $_model.DisableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.DisableSmbAclResponse({}));
  }

  /**
   * Disables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DisableSmbAclRequest
   * @returns DisableSmbAclResponse
   */
  async disableSmbAcl(request: $_model.DisableSmbAclRequest): Promise<$_model.DisableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSmbAclWithOptions(request, runtime);
  }

  /**
   * Enables the NFS ACL feature for a file system.
   * 
   * @param request - EnableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableNfsAclResponse
   */
  async enableNfsAclWithOptions(request: $_model.EnableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableNfsAclResponse>(await this.callApi(params, req, runtime), new $_model.EnableNfsAclResponse({}));
  }

  /**
   * Enables the NFS ACL feature for a file system.
   * 
   * @param request - EnableNfsAclRequest
   * @returns EnableNfsAclResponse
   */
  async enableNfsAcl(request: $_model.EnableNfsAclRequest): Promise<$_model.EnableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableNfsAclWithOptions(request, runtime);
  }

  /**
   * Enables the recycle bin feature for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBinWithOptions(request: $_model.EnableRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.reservedDays)) {
      query["ReservedDays"] = request.reservedDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.EnableRecycleBinResponse({}));
  }

  /**
   * Enables the recycle bin feature for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBin(request: $_model.EnableRecycleBinRequest): Promise<$_model.EnableRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRecycleBinWithOptions(request, runtime);
  }

  /**
   * Enables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - EnableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSmbAclResponse
   */
  async enableSmbAclWithOptions(request: $_model.EnableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSmbAclResponse>(await this.callApi(params, req, runtime), new $_model.EnableSmbAclResponse({}));
  }

  /**
   * Enables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - EnableSmbAclRequest
   * @returns EnableSmbAclResponse
   */
  async enableSmbAcl(request: $_model.EnableSmbAclRequest): Promise<$_model.EnableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries whether a directory contains files that are stored in the Infrequent Access (IA) or Archive storage class, or whether a file is stored in the IA or Archive storage class.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFilePropertiesWithOptions(request: $_model.GetDirectoryOrFilePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectoryOrFilePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectoryOrFileProperties",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectoryOrFilePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectoryOrFilePropertiesResponse({}));
  }

  /**
   * Queries whether a directory contains files that are stored in the Infrequent Access (IA) or Archive storage class, or whether a file is stored in the IA or Archive storage class.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFileProperties(request: $_model.GetDirectoryOrFilePropertiesRequest): Promise<$_model.GetDirectoryOrFilePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryOrFilePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries the recycle bin configurations of a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support this operation.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttributeWithOptions(request: $_model.GetRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetRecycleBinAttributeResponse({}));
  }

  /**
   * Queries the recycle bin configurations of a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support this operation.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttribute(request: $_model.GetRecycleBinAttributeRequest): Promise<$_model.GetRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the infrequently-accessed files in a specified directory of a General-purpose NAS file system and the subdirectories that contain the files.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFilesWithOptions(request: $_model.ListDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDirectoriesAndFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryOnly)) {
      query["DirectoryOnly"] = request.directoryOnly;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListDirectoriesAndFilesResponse({}));
  }

  /**
   * Queries the infrequently-accessed files in a specified directory of a General-purpose NAS file system and the subdirectories that contain the files.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFiles(request: $_model.ListDirectoriesAndFilesRequest): Promise<$_model.ListDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Queries data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobsWithOptions(request: $_model.ListLifecycleRetrieveJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLifecycleRetrieveJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLifecycleRetrieveJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLifecycleRetrieveJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListLifecycleRetrieveJobsResponse({}));
  }

  /**
   * Queries data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobs(request: $_model.ListLifecycleRetrieveJobsRequest): Promise<$_model.ListLifecycleRetrieveJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLifecycleRetrieveJobsWithOptions(request, runtime);
  }

  /**
   * Queries the directories that are recently deleted.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectoriesWithOptions(request: $_model.ListRecentlyRecycledDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentlyRecycledDirectoriesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentlyRecycledDirectories",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentlyRecycledDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentlyRecycledDirectoriesResponse({}));
  }

  /**
   * Queries the directories that are recently deleted.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectories(request: $_model.ListRecentlyRecycledDirectoriesRequest): Promise<$_model.ListRecentlyRecycledDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentlyRecycledDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries the jobs of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can query a maximum of 50 jobs that are recently executed.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobsWithOptions(request: $_model.ListRecycleBinJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecycleBinJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycleBinJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecycleBinJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecycleBinJobsResponse({}));
  }

  /**
   * Queries the jobs of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can query a maximum of 50 jobs that are recently executed.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobs(request: $_model.ListRecycleBinJobsRequest): Promise<$_model.ListRecycleBinJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycleBinJobsWithOptions(request, runtime);
  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFilesWithOptions(request: $_model.ListRecycledDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecycledDirectoriesAndFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycledDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecycledDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecycledDirectoriesAndFilesResponse({}));
  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFiles(request: $_model.ListRecycledDirectoriesAndFilesRequest): Promise<$_model.ListRecycledDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycledDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Queries tags.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2017-06-26",
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
   * Queries tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroupWithOptions(request: $_model.ModifyAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessGroupResponse({}));
  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroup(request: $_model.ModifyAccessGroupRequest): Promise<$_model.ModifyAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - ModifyAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPointWithOptions(request: $_model.ModifyAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessPointResponse({}));
  }

  /**
   * Modifies the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - ModifyAccessPointRequest
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPoint(request: $_model.ModifyAccessPointRequest): Promise<$_model.ModifyAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessPointWithOptions(request, runtime);
  }

  /**
   * Modifies a rule in a permission group.
   * 
   * @remarks
   * The rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRuleWithOptions(request: $_model.ModifyAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccessRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccessRuleResponse({}));
  }

  /**
   * Modifies a rule in a permission group.
   * 
   * @remarks
   * The rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRule(request: $_model.ModifyAccessRuleRequest): Promise<$_model.ModifyAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  /**
   * An automatic snapshot policy is modified. After you modify an automatic snapshot policy that is applied to a file system, the modification immediately applies to subsequent snapshots that are created for the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicyWithOptions(request: $_model.ModifyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoSnapshotPolicyResponse({}));
  }

  /**
   * An automatic snapshot policy is modified. After you modify an automatic snapshot policy that is applied to a file system, the modification immediately applies to subsequent snapshots that are created for the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicy(request: $_model.ModifyAutoSnapshotPolicyRequest): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   * *   You can modify the attributes only of the data flows that are in the `Running` state.
   * *   It generally takes 2 to 5 minutes to modify the attributes of a data flow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the data flow to be modified.
   * 
   * @param request - ModifyDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlowWithOptions(request: $_model.ModifyDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataFlowResponse({}));
  }

  /**
   * Modifies the attributes of a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   * *   You can modify the attributes only of the data flows that are in the `Running` state.
   * *   It generally takes 2 to 5 minutes to modify the attributes of a data flow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the data flow to be modified.
   * 
   * @param request - ModifyDataFlowRequest
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlow(request: $_model.ModifyDataFlowRequest): Promise<$_model.ModifyDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowWithOptions(request, runtime);
  }

  /**
   * Modifies an AutoRefresh configuration of a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can modify the AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to modify an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the task of modifying an AutoRefresh configuration.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefreshWithOptions(request: $_model.ModifyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataFlowAutoRefreshResponse({}));
  }

  /**
   * Modifies an AutoRefresh configuration of a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can modify the AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to modify an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the task of modifying an AutoRefresh configuration.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefresh(request: $_model.ModifyDataFlowAutoRefreshRequest): Promise<$_model.ModifyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a file system.
   * 
   * @param tmpReq - ModifyFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystemWithOptions(tmpReq: $_model.ModifyFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFileSystemResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyFileSystemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFileSystemResponse({}));
  }

  /**
   * Modifies the description of a file system.
   * 
   * @param request - ModifyFileSystemRequest
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystem(request: $_model.ModifyFileSystemRequest): Promise<$_model.ModifyFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  /**
   * Modifies a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - ModifyFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFilesetResponse
   */
  async modifyFilesetWithOptions(request: $_model.ModifyFilesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFilesetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFilesetResponse({}));
  }

  /**
   * Modifies a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - ModifyFilesetRequest
   * @returns ModifyFilesetResponse
   */
  async modifyFileset(request: $_model.ModifyFilesetRequest): Promise<$_model.ModifyFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFilesetWithOptions(request, runtime);
  }

  /**
   * Used to modify LDAP configuration.
   * 
   * @remarks
   * The API operation is available only for Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLDAPConfigResponse
   */
  // Deprecated
  async modifyLDAPConfigWithOptions(request: $_model.ModifyLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLDAPConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLDAPConfigResponse({}));
  }

  /**
   * Used to modify LDAP configuration.
   * 
   * @remarks
   * The API operation is available only for Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @returns ModifyLDAPConfigResponse
   */
  // Deprecated
  async modifyLDAPConfig(request: $_model.ModifyLDAPConfigRequest): Promise<$_model.ModifyLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicyWithOptions(request: $_model.ModifyLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLifecyclePolicyResponse({}));
  }

  /**
   * Modifies a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicy(request: $_model.ModifyLifecyclePolicyRequest): Promise<$_model.ModifyLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a mount target.
   * 
   * @param request - ModifyMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTargetWithOptions(request: $_model.ModifyMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMountTargetResponse({}));
  }

  /**
   * Modifies a mount target.
   * 
   * @param request - ModifyMountTargetRequest
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTarget(request: $_model.ModifyMountTargetRequest): Promise<$_model.ModifyMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies the export directory parameters of a protocol service. Only the description can be modified. The virtual private cloud (VPC) ID and vSwitch ID cannot be changed. To change these IDs, you must delete the export directory and create a new one.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTargetWithOptions(request: $_model.ModifyProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyProtocolMountTargetResponse({}));
  }

  /**
   * Modifies the export directory parameters of a protocol service. Only the description can be modified. The virtual private cloud (VPC) ID and vSwitch ID cannot be changed. To change these IDs, you must delete the export directory and create a new one.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTarget(request: $_model.ModifyProtocolMountTargetRequest): Promise<$_model.ModifyProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolServiceWithOptions(request: $_model.ModifyProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyProtocolServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyProtocolServiceResponse({}));
  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolServiceRequest
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolService(request: $_model.ModifyProtocolServiceRequest): Promise<$_model.ModifyProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Updates the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - ModifySmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmbAclResponse
   */
  async modifySmbAclWithOptions(request: $_model.ModifySmbAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAnonymousAccess)) {
      query["EnableAnonymousAccess"] = request.enableAnonymousAccess;
    }

    if (!$dara.isNull(request.encryptData)) {
      query["EncryptData"] = request.encryptData;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.homeDirPath)) {
      query["HomeDirPath"] = request.homeDirPath;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    if (!$dara.isNull(request.rejectUnencryptedAccess)) {
      query["RejectUnencryptedAccess"] = request.rejectUnencryptedAccess;
    }

    if (!$dara.isNull(request.superAdminSid)) {
      query["SuperAdminSid"] = request.superAdminSid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmbAclResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmbAclResponse({}));
  }

  /**
   * Updates the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - ModifySmbAclRequest
   * @returns ModifySmbAclResponse
   */
  async modifySmbAcl(request: $_model.ModifySmbAclRequest): Promise<$_model.ModifySmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmbAclWithOptions(request, runtime);
  }

  /**
   * Activates File Storage NAS.
   * 
   * @param request - OpenNASServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenNASServiceResponse
   */
  async openNASServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenNASServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenNASService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenNASServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenNASServiceResponse({}));
  }

  /**
   * Activates File Storage NAS.
   * @returns OpenNASServiceResponse
   */
  async openNASService(): Promise<$_model.OpenNASServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openNASServiceWithOptions(runtime);
  }

  /**
   * Remove the client from the blacklist.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClientFromBlackListResponse
   */
  // Deprecated
  async removeClientFromBlackListWithOptions(request: $_model.RemoveClientFromBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClientFromBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveClientFromBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveClientFromBlackListResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClientFromBlackListResponse({}));
  }

  /**
   * Remove the client from the blacklist.
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @returns RemoveClientFromBlackListResponse
   */
  // Deprecated
  async removeClientFromBlackList(request: $_model.RemoveClientFromBlackListRequest): Promise<$_model.RemoveClientFromBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeClientFromBlackListWithOptions(request, runtime);
  }

  /**
   * Rolls back a file system to a snapshot of the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   The file system must be in the Running state.
   * *   To roll back a file system to a snapshot, you must specify the ID of the snapshot that is created from the file system.
   * 
   * @param request - ResetFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetFileSystemResponse
   */
  async resetFileSystemWithOptions(request: $_model.ResetFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ResetFileSystemResponse({}));
  }

  /**
   * Rolls back a file system to a snapshot of the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   The file system must be in the Running state.
   * *   To roll back a file system to a snapshot, you must specify the ID of the snapshot that is created from the file system.
   * 
   * @param request - ResetFileSystemRequest
   * @returns ResetFileSystemResponse
   */
  async resetFileSystem(request: $_model.ResetFileSystemRequest): Promise<$_model.ResetFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetFileSystemWithOptions(request, runtime);
  }

  /**
   * Retries failed a data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJobWithOptions(request: $_model.RetryLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new $_model.RetryLifecycleRetrieveJobResponse({}));
  }

  /**
   * Retries failed a data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJob(request: $_model.RetryLifecycleRetrieveJobRequest): Promise<$_model.RetryLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Creates a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDirQuotaResponse
   */
  async setDirQuotaWithOptions(request: $_model.SetDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.quotaType)) {
      query["QuotaType"] = request.quotaType;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDirQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetDirQuotaResponse({}));
  }

  /**
   * Creates a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @returns SetDirQuotaResponse
   */
  async setDirQuota(request: $_model.SetDirQuotaRequest): Promise<$_model.SetDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDirQuotaWithOptions(request, runtime);
  }

  /**
   * Sets the quota for a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for Lingjun V2.7.0 and later support this operation.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the file quantity to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 15-minute latency. The actual usage takes effect after 15 minutes.
   * 
   * @param request - SetFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuotaWithOptions(request: $_model.SetFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFilesetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetFilesetQuotaResponse({}));
  }

  /**
   * Sets the quota for a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for Lingjun V2.7.0 and later support this operation.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the file quantity to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 15-minute latency. The actual usage takes effect after 15 minutes.
   * 
   * @param request - SetFilesetQuotaRequest
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuota(request: $_model.SetFilesetQuotaRequest): Promise<$_model.SetFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Enables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can enable the data flows that are only in the `Stopped` state.
   * *   If the value of DryRun is `true`, you can check whether sufficient resources are available to enable the specified data flow. If the resources are insufficient, the data flow cannot be enabled.
   * *   It generally takes 2 to 5 minutes to enable a data flow. You can query the data flow status by calling the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) operation.
   * 
   * @param request - StartDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDataFlowResponse
   */
  async startDataFlowWithOptions(request: $_model.StartDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.StartDataFlowResponse({}));
  }

  /**
   * Enables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can enable the data flows that are only in the `Stopped` state.
   * *   If the value of DryRun is `true`, you can check whether sufficient resources are available to enable the specified data flow. If the resources are insufficient, the data flow cannot be enabled.
   * *   It generally takes 2 to 5 minutes to enable a data flow. You can query the data flow status by calling the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) operation.
   * 
   * @param request - StartDataFlowRequest
   * @returns StartDataFlowResponse
   */
  async startDataFlow(request: $_model.StartDataFlowRequest): Promise<$_model.StartDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDataFlowWithOptions(request, runtime);
  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can disable only the dataflows that are in the `Running` state.
   * *   After a dataflow is disabled, you cannot create a dataflow task for the dataflow. If AutoRefresh is configured, source data updates are not synchronized to CPFS.
   * *   After a dataflow is disabled, the dataflow throughput is no longer billed because resources are reclaimed. However, the dataflow may fail to be restarted due to insufficient resources.
   * *   It generally takes 2 to 5 minutes to disable a dataflow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) operation to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDataFlowResponse
   */
  async stopDataFlowWithOptions(request: $_model.StopDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDataFlowResponse>(await this.callApi(params, req, runtime), new $_model.StopDataFlowResponse({}));
  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can disable only the dataflows that are in the `Running` state.
   * *   After a dataflow is disabled, you cannot create a dataflow task for the dataflow. If AutoRefresh is configured, source data updates are not synchronized to CPFS.
   * *   After a dataflow is disabled, the dataflow throughput is no longer billed because resources are reclaimed. However, the dataflow may fail to be restarted due to insufficient resources.
   * *   It generally takes 2 to 5 minutes to disable a dataflow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) operation to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @returns StopDataFlowResponse
   */
  async stopDataFlow(request: $_model.StopDataFlowRequest): Promise<$_model.StopDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDataFlowWithOptions(request, runtime);
  }

  /**
   * Creates tags and binds the tags to file systems.
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
      version: "2017-06-26",
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
   * Creates tags and binds the tags to file systems.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a file system.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
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
      action: "UntagResources",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from a file system.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the retention period of data in the recycle bin of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttributeWithOptions(request: $_model.UpdateRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecycleBinAttributeResponse({}));
  }

  /**
   * Modifies the retention period of data in the recycle bin of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttribute(request: $_model.UpdateRecycleBinAttributeRequest): Promise<$_model.UpdateRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Scales up an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   Only Extreme NAS file systems and CPFS file systems can be scaled up. CPFS file systems are available only on the China site (aliyun.com).
   * *   A General-purpose NAS file system is automatically scaled up. You do not need to call this operation to scale up a General-purpose NAS file system.
   * 
   * @param request - UpgradeFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystemWithOptions(request: $_model.UpgradeFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeFileSystemResponse({}));
  }

  /**
   * Scales up an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   Only Extreme NAS file systems and CPFS file systems can be scaled up. CPFS file systems are available only on the China site (aliyun.com).
   * *   A General-purpose NAS file system is automatically scaled up. You do not need to call this operation to scale up a General-purpose NAS file system.
   * 
   * @param request - UpgradeFileSystemRequest
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystem(request: $_model.UpgradeFileSystemRequest): Promise<$_model.UpgradeFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeFileSystemWithOptions(request, runtime);
  }

}
