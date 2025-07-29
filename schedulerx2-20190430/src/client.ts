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
      'cn-beijing': "schedulerx.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "schedulerx.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "schedulerx.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "schedulerx.cn-shenzhen.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("schedulerx2", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Deletes multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteJobsResponse
   */
  async batchDeleteJobsWithOptions(request: $_model.BatchDeleteJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteJobsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteJobsResponse({}));
  }

  /**
   * Deletes multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDeleteJobsRequest
   * @returns BatchDeleteJobsResponse
   */
  async batchDeleteJobs(request: $_model.BatchDeleteJobsRequest): Promise<$_model.BatchDeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteJobsWithOptions(request, runtime);
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - BatchDeleteRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategyWithOptions(request: $_model.BatchDeleteRouteStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteRouteStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteRouteStrategyResponse({}));
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - BatchDeleteRouteStrategyRequest
   * @returns BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategy(request: $_model.BatchDeleteRouteStrategyRequest): Promise<$_model.BatchDeleteRouteStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Disables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDisableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDisableJobsResponse
   */
  async batchDisableJobsWithOptions(request: $_model.BatchDisableJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDisableJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDisableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDisableJobsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDisableJobsResponse({}));
  }

  /**
   * Disables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDisableJobsRequest
   * @returns BatchDisableJobsResponse
   */
  async batchDisableJobs(request: $_model.BatchDisableJobsRequest): Promise<$_model.BatchDisableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDisableJobsWithOptions(request, runtime);
  }

  /**
   * Enables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchEnableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEnableJobsResponse
   */
  async batchEnableJobsWithOptions(request: $_model.BatchEnableJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchEnableJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchEnableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchEnableJobsResponse>(await this.callApi(params, req, runtime), new $_model.BatchEnableJobsResponse({}));
  }

  /**
   * Enables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchEnableJobsRequest
   * @returns BatchEnableJobsResponse
   */
  async batchEnableJobs(request: $_model.BatchEnableJobsRequest): Promise<$_model.BatchEnableJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchEnableJobsWithOptions(request, runtime);
  }

  /**
   * Creates an application group. The AppKey is returned.
   * 
   * @param request - CreateAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupResponse
   */
  async createAppGroupWithOptions(request: $_model.CreateAppGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppGroupResponse({}));
  }

  /**
   * Creates an application group. The AppKey is returned.
   * 
   * @param request - CreateAppGroupRequest
   * @returns CreateAppGroupResponse
   */
  async createAppGroup(request: $_model.CreateAppGroupRequest): Promise<$_model.CreateAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppGroupWithOptions(request, runtime);
  }

  /**
   * Creates a job and obtains the job ID.
   * 
   * @param request - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(request: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!$dara.isNull(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!$dara.isNull(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!$dara.isNull(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!$dara.isNull(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
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

    if (!$dara.isNull(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!$dara.isNull(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!$dara.isNull(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!$dara.isNull(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!$dara.isNull(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2019-04-30",
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
   * Creates a job and obtains the job ID.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * Creates a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a routing policy.
   * 
   * @param request - CreateRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteStrategyResponse
   */
  async createRouteStrategyWithOptions(request: $_model.CreateRouteStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRouteStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.strategyContent)) {
      query["StrategyContent"] = request.strategyContent;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRouteStrategyResponse>(await this.callApi(params, req, runtime), new $_model.CreateRouteStrategyResponse({}));
  }

  /**
   * Creates a routing policy.
   * 
   * @param request - CreateRouteStrategyRequest
   * @returns CreateRouteStrategyResponse
   */
  async createRouteStrategy(request: $_model.CreateRouteStrategyRequest): Promise<$_model.CreateRouteStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   * 
   * @param request - CreateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowResponse
   */
  async createWorkflowWithOptions(request: $_model.CreateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkflowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
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
      version: "2019-04-30",
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
   * Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   * 
   * @param request - CreateWorkflowRequest
   * @returns CreateWorkflowResponse
   */
  async createWorkflow(request: $_model.CreateWorkflowRequest): Promise<$_model.CreateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkflowWithOptions(request, runtime);
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - DeleteAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppGroupResponse
   */
  async deleteAppGroupWithOptions(request: $_model.DeleteAppGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteJobs)) {
      query["DeleteJobs"] = request.deleteJobs;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppGroupResponse({}));
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - DeleteAppGroupRequest
   * @returns DeleteAppGroupResponse
   */
  async deleteAppGroup(request: $_model.DeleteAppGroupRequest): Promise<$_model.DeleteAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified job.
   * 
   * @param request - DeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(request: $_model.DeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobResponse({}));
  }

  /**
   * Deletes a specified job.
   * 
   * @param request - DeleteJobRequest
   * @returns DeleteJobResponse
   */
  async deleteJob(request: $_model.DeleteJobRequest): Promise<$_model.DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  /**
   * 删除命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * 删除命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a routing policy.
   * 
   * @param request - DeleteRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteStrategyResponse
   */
  async deleteRouteStrategyWithOptions(request: $_model.DeleteRouteStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteStrategyResponse({}));
  }

  /**
   * Deletes a routing policy.
   * 
   * @param request - DeleteRouteStrategyRequest
   * @returns DeleteRouteStrategyResponse
   */
  async deleteRouteStrategy(request: $_model.DeleteRouteStrategyRequest): Promise<$_model.DeleteRouteStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes a workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: $_model.DeleteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowResponse({}));
  }

  /**
   * Deletes a workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(request: $_model.DeleteWorkflowRequest): Promise<$_model.DeleteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * Returns available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-04-30",
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
   * Returns available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Designates machines.
   * 
   * @param request - DesignateWorkersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DesignateWorkersResponse
   */
  async designateWorkersWithOptions(request: $_model.DesignateWorkersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DesignateWorkersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DesignateWorkers",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DesignateWorkersResponse>(await this.callApi(params, req, runtime), new $_model.DesignateWorkersResponse({}));
  }

  /**
   * Designates machines.
   * 
   * @param request - DesignateWorkersRequest
   * @returns DesignateWorkersResponse
   */
  async designateWorkers(request: $_model.DesignateWorkersRequest): Promise<$_model.DesignateWorkersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.designateWorkersWithOptions(request, runtime);
  }

  /**
   * Disables a job.
   * 
   * @param request - DisableJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableJobResponse
   */
  async disableJobWithOptions(request: $_model.DisableJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableJobResponse>(await this.callApi(params, req, runtime), new $_model.DisableJobResponse({}));
  }

  /**
   * Disables a job.
   * 
   * @param request - DisableJobRequest
   * @returns DisableJobResponse
   */
  async disableJob(request: $_model.DisableJobRequest): Promise<$_model.DisableJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableJobWithOptions(request, runtime);
  }

  /**
   * Disables a specified workflow.
   * 
   * @param request - DisableWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWorkflowResponse
   */
  async disableWorkflowWithOptions(request: $_model.DisableWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableWorkflowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DisableWorkflowResponse({}));
  }

  /**
   * Disables a specified workflow.
   * 
   * @param request - DisableWorkflowRequest
   * @returns DisableWorkflowResponse
   */
  async disableWorkflow(request: $_model.DisableWorkflowRequest): Promise<$_model.DisableWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableWorkflowWithOptions(request, runtime);
  }

  /**
   * Enables a job.
   * 
   * @param request - EnableJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableJobResponse
   */
  async enableJobWithOptions(request: $_model.EnableJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableJobResponse>(await this.callApi(params, req, runtime), new $_model.EnableJobResponse({}));
  }

  /**
   * Enables a job.
   * 
   * @param request - EnableJobRequest
   * @returns EnableJobResponse
   */
  async enableJob(request: $_model.EnableJobRequest): Promise<$_model.EnableJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableJobWithOptions(request, runtime);
  }

  /**
   * Enables a specified workflow.
   * 
   * @param request - EnableWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWorkflowResponse
   */
  async enableWorkflowWithOptions(request: $_model.EnableWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWorkflowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.EnableWorkflowResponse({}));
  }

  /**
   * Enables a specified workflow.
   * 
   * @param request - EnableWorkflowRequest
   * @returns EnableWorkflowResponse
   */
  async enableWorkflow(request: $_model.EnableWorkflowRequest): Promise<$_model.EnableWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWorkflowWithOptions(request, runtime);
  }

  /**
   * Triggers a job to immediately run once.
   * 
   * @remarks
   * > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   * 
   * @param request - ExecuteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteJobResponse
   */
  async executeJobWithOptions(request: $_model.ExecuteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteJobResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteJobResponse({}));
  }

  /**
   * Triggers a job to immediately run once.
   * 
   * @remarks
   * > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   * 
   * @param request - ExecuteJobRequest
   * @returns ExecuteJobResponse
   */
  async executeJob(request: $_model.ExecuteJobRequest): Promise<$_model.ExecuteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeJobWithOptions(request, runtime);
  }

  /**
   * Immediately triggers a workflow.
   * 
   * @param request - ExecuteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteWorkflowResponse
   */
  async executeWorkflowWithOptions(request: $_model.ExecuteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteWorkflowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteWorkflowResponse({}));
  }

  /**
   * Immediately triggers a workflow.
   * 
   * @param request - ExecuteWorkflowRequest
   * @returns ExecuteWorkflowResponse
   */
  async executeWorkflow(request: $_model.ExecuteWorkflowRequest): Promise<$_model.ExecuteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeWorkflowWithOptions(request, runtime);
  }

  /**
   * The configuration of the alert. The value is a JSON string. For more information, see \\\\*\\\\*the additional information about response parameters below this table\\\\*\\\\*.
   * 
   * @param request - GetAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppGroupResponse
   */
  async getAppGroupWithOptions(request: $_model.GetAppGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetAppGroupResponse({}));
  }

  /**
   * The configuration of the alert. The value is a JSON string. For more information, see \\\\*\\\\*the additional information about response parameters below this table\\\\*\\\\*.
   * 
   * @param request - GetAppGroupRequest
   * @returns GetAppGroupResponse
   */
  async getAppGroup(request: $_model.GetAppGroupRequest): Promise<$_model.GetAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   * 
   * @param request - GetJobInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInfoResponse
   */
  async getJobInfoWithOptions(request: $_model.GetJobInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobInfo",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetJobInfoResponse({}));
  }

  /**
   * Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   * 
   * @param request - GetJobInfoRequest
   * @returns GetJobInfoResponse
   */
  async getJobInfo(request: $_model.GetJobInfoRequest): Promise<$_model.GetJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a job instance. You can view the status and progress of the job instance.
   * 
   * @param request - GetJobInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInstanceResponse
   */
  async getJobInstanceWithOptions(request: $_model.GetJobInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetJobInstanceResponse({}));
  }

  /**
   * Queries the information about a job instance. You can view the status and progress of the job instance.
   * 
   * @param request - GetJobInstanceRequest
   * @returns GetJobInstanceResponse
   */
  async getJobInstance(request: $_model.GetJobInstanceRequest): Promise<$_model.GetJobInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the most recent 10 execution instances of a job.
   * 
   * @param request - GetJobInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInstanceListResponse
   */
  async getJobInstanceListWithOptions(request: $_model.GetJobInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobInstanceListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobInstanceList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetJobInstanceListResponse({}));
  }

  /**
   * Queries the most recent 10 execution instances of a job.
   * 
   * @param request - GetJobInstanceListRequest
   * @returns GetJobInstanceListResponse
   */
  async getJobInstanceList(request: $_model.GetJobInstanceListRequest): Promise<$_model.GetJobInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the operational logs of a job. You can call this operation only in the professional edition.
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
      version: "2019-04-30",
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
   * Queries the operational logs of a job. You can call this operation only in the professional edition.
   * 
   * @param request - GetLogRequest
   * @returns GetLogResponse
   */
  async getLog(request: $_model.GetLogRequest): Promise<$_model.GetLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * 查询概览数据信息
   * 
   * @param request - GetOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOverviewResponse
   */
  async getOverviewWithOptions(request: $_model.GetOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.operate)) {
      query["Operate"] = request.operate;
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
      action: "GetOverview",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetOverviewResponse({}));
  }

  /**
   * 查询概览数据信息
   * 
   * @param request - GetOverviewRequest
   * @returns GetOverviewResponse
   */
  async getOverview(request: $_model.GetOverviewRequest): Promise<$_model.GetOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  /**
   * Obtains the information about a workflow.
   * 
   * @param request - GetWorkFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkFlowResponse
   */
  async getWorkFlowWithOptions(request: $_model.GetWorkFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkFlowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkFlow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkFlowResponse({}));
  }

  /**
   * Obtains the information about a workflow.
   * 
   * @param request - GetWorkFlowRequest
   * @returns GetWorkFlowResponse
   */
  async getWorkFlow(request: $_model.GetWorkFlowRequest): Promise<$_model.GetWorkFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkFlowWithOptions(request, runtime);
  }

  /**
   * Obtains the list of workers that are connected to an application.
   * 
   * @param request - GetWorkerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerListResponse
   */
  async getWorkerListWithOptions(request: $_model.GetWorkerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkerListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkerList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkerListResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkerListResponse({}));
  }

  /**
   * Obtains the list of workers that are connected to an application.
   * 
   * @param request - GetWorkerListRequest
   * @returns GetWorkerListResponse
   */
  async getWorkerList(request: $_model.GetWorkerListRequest): Promise<$_model.GetWorkerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstanceWithOptions(request: $_model.GetWorkflowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowInstanceResponse({}));
  }

  /**
   * Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstance(request: $_model.GetWorkflowInstanceRequest): Promise<$_model.GetWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * Grants permissions to an application group.
   * 
   * @param request - GrantPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantPermissionResponse
   */
  async grantPermissionWithOptions(request: $_model.GrantPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.grantOption)) {
      query["GrantOption"] = request.grantOption;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantPermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantPermissionResponse({}));
  }

  /**
   * Grants permissions to an application group.
   * 
   * @param request - GrantPermissionRequest
   * @returns GrantPermissionResponse
   */
  async grantPermission(request: $_model.GrantPermissionRequest): Promise<$_model.GrantPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantPermissionWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGroupName)) {
      query["AppGroupName"] = request.appGroupName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Queries a list of applications.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * 获取任务脚本历史列表
   * 
   * @param request - ListJobScriptHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobScriptHistoryResponse
   */
  async listJobScriptHistoryWithOptions(request: $_model.ListJobScriptHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobScriptHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobScriptHistory",
      version: "2019-04-30",
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
   * 获取任务脚本历史列表
   * 
   * @param request - ListJobScriptHistoryRequest
   * @returns ListJobScriptHistoryResponse
   */
  async listJobScriptHistory(request: $_model.ListJobScriptHistoryRequest): Promise<$_model.ListJobScriptHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobScriptHistoryWithOptions(request, runtime);
  }

  /**
   * Queries jobs.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
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
      version: "2019-04-30",
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
   * Queries jobs.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries namespaces.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: $_model.ListNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaces",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespacesResponse({}));
  }

  /**
   * Queries namespaces.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: $_model.ListNamespacesRequest): Promise<$_model.ListNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries the execution history of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - ListWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowInstanceResponse
   */
  async listWorkflowInstanceWithOptions(request: $_model.ListWorkflowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowInstanceResponse({}));
  }

  /**
   * Queries the execution history of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - ListWorkflowInstanceRequest
   * @returns ListWorkflowInstanceResponse
   */
  async listWorkflowInstance(request: $_model.ListWorkflowInstanceRequest): Promise<$_model.ListWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * 同步任务
   * 
   * @param tmpReq - ManageSchedulerxJobSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageSchedulerxJobSyncResponse
   */
  async manageSchedulerxJobSyncWithOptions(tmpReq: $_model.ManageSchedulerxJobSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManageSchedulerxJobSyncResponse> {
    tmpReq.validate();
    let request = new $_model.ManageSchedulerxJobSyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIdList)) {
      request.jobIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIdList, "JobIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobIdListShrink)) {
      body["JobIdList"] = request.jobIdListShrink;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.originalGroupId)) {
      body["OriginalGroupId"] = request.originalGroupId;
    }

    if (!$dara.isNull(request.originalNamespace)) {
      body["OriginalNamespace"] = request.originalNamespace;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetGroupId)) {
      body["TargetGroupId"] = request.targetGroupId;
    }

    if (!$dara.isNull(request.targetNamespace)) {
      body["TargetNamespace"] = request.targetNamespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageSchedulerxJobSync",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManageSchedulerxJobSyncResponse>(await this.callApi(params, req, runtime), new $_model.ManageSchedulerxJobSyncResponse({}));
  }

  /**
   * 同步任务
   * 
   * @param request - ManageSchedulerxJobSyncRequest
   * @returns ManageSchedulerxJobSyncResponse
   */
  async manageSchedulerxJobSync(request: $_model.ManageSchedulerxJobSyncRequest): Promise<$_model.ManageSchedulerxJobSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manageSchedulerxJobSyncWithOptions(request, runtime);
  }

  /**
   * 获取机器详细信息
   * 
   * @param request - ReadSchedulerxDesignateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadSchedulerxDesignateDetailResponse
   */
  async readSchedulerxDesignateDetailWithOptions(request: $_model.ReadSchedulerxDesignateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadSchedulerxDesignateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.designateType)) {
      query["DesignateType"] = request.designateType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadSchedulerxDesignateDetail",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadSchedulerxDesignateDetailResponse>(await this.callApi(params, req, runtime), new $_model.ReadSchedulerxDesignateDetailResponse({}));
  }

  /**
   * 获取机器详细信息
   * 
   * @param request - ReadSchedulerxDesignateDetailRequest
   * @returns ReadSchedulerxDesignateDetailResponse
   */
  async readSchedulerxDesignateDetail(request: $_model.ReadSchedulerxDesignateDetailRequest): Promise<$_model.ReadSchedulerxDesignateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readSchedulerxDesignateDetailWithOptions(request, runtime);
  }

  /**
   * 获取指定机器基本信息
   * 
   * @param request - ReadSchedulerxDesignateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadSchedulerxDesignateInfoResponse
   */
  async readSchedulerxDesignateInfoWithOptions(request: $_model.ReadSchedulerxDesignateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadSchedulerxDesignateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadSchedulerxDesignateInfo",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadSchedulerxDesignateInfoResponse>(await this.callApi(params, req, runtime), new $_model.ReadSchedulerxDesignateInfoResponse({}));
  }

  /**
   * 获取指定机器基本信息
   * 
   * @param request - ReadSchedulerxDesignateInfoRequest
   * @returns ReadSchedulerxDesignateInfoResponse
   */
  async readSchedulerxDesignateInfo(request: $_model.ReadSchedulerxDesignateInfoRequest): Promise<$_model.ReadSchedulerxDesignateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readSchedulerxDesignateInfoWithOptions(request, runtime);
  }

  /**
   * Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   * 
   * @param request - RerunJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerunJobResponse
   */
  async rerunJobWithOptions(request: $_model.RerunJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RerunJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataTime)) {
      body["DataTime"] = request.dataTime;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RerunJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RerunJobResponse>(await this.callApi(params, req, runtime), new $_model.RerunJobResponse({}));
  }

  /**
   * Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   * 
   * @param request - RerunJobRequest
   * @returns RerunJobResponse
   */
  async rerunJob(request: $_model.RerunJobRequest): Promise<$_model.RerunJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rerunJobWithOptions(request, runtime);
  }

  /**
   * Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   * 
   * @param request - RetryJobInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryJobInstanceResponse
   */
  async retryJobInstanceWithOptions(request: $_model.RetryJobInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryJobInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryJobInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RetryJobInstanceResponse({}));
  }

  /**
   * Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   * 
   * @param request - RetryJobInstanceRequest
   * @returns RetryJobInstanceResponse
   */
  async retryJobInstance(request: $_model.RetryJobInstanceRequest): Promise<$_model.RetryJobInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryJobInstanceWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   * 
   * @param request - RevokePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokePermissionResponse
   */
  async revokePermissionWithOptions(request: $_model.RevokePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokePermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokePermissionResponse({}));
  }

  /**
   * Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   * 
   * @param request - RevokePermissionRequest
   * @returns RevokePermissionResponse
   */
  async revokePermission(request: $_model.RevokePermissionRequest): Promise<$_model.RevokePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokePermissionWithOptions(request, runtime);
  }

  /**
   * Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetJobInstanceSuccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccessWithOptions(request: $_model.SetJobInstanceSuccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetJobInstanceSuccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetJobInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetJobInstanceSuccessResponse>(await this.callApi(params, req, runtime), new $_model.SetJobInstanceSuccessResponse({}));
  }

  /**
   * Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetJobInstanceSuccessRequest
   * @returns SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccess(request: $_model.SetJobInstanceSuccessRequest): Promise<$_model.SetJobInstanceSuccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setJobInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetWfInstanceSuccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccessWithOptions(request: $_model.SetWfInstanceSuccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWfInstanceSuccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.wfInstanceId)) {
      query["WfInstanceId"] = request.wfInstanceId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWfInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWfInstanceSuccessResponse>(await this.callApi(params, req, runtime), new $_model.SetWfInstanceSuccessResponse({}));
  }

  /**
   * Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetWfInstanceSuccessRequest
   * @returns SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccess(request: $_model.SetWfInstanceSuccessRequest): Promise<$_model.SetWfInstanceSuccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWfInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * Stops a job instance in the running state.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Stops a job instance in the running state.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the application group.
   * 
   * @param request - UpdateAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppGroupResponse
   */
  async updateAppGroupWithOptions(request: $_model.UpdateAppGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.monitorConfigJson)) {
      query["MonitorConfigJson"] = request.monitorConfigJson;
    }

    if (!$dara.isNull(request.monitorContactsJson)) {
      query["MonitorContactsJson"] = request.monitorContactsJson;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppGroupResponse({}));
  }

  /**
   * Updates the application group.
   * 
   * @param request - UpdateAppGroupRequest
   * @returns UpdateAppGroupResponse
   */
  async updateAppGroup(request: $_model.UpdateAppGroupRequest): Promise<$_model.UpdateAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppGroupWithOptions(request, runtime);
  }

  /**
   * Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   * 
   * @param request - UpdateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(request: $_model.UpdateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!$dara.isNull(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!$dara.isNull(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!$dara.isNull(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!$dara.isNull(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!$dara.isNull(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
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

    if (!$dara.isNull(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!$dara.isNull(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!$dara.isNull(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!$dara.isNull(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!$dara.isNull(request.taskDispatchMode)) {
      body["TaskDispatchMode"] = request.taskDispatchMode;
    }

    if (!$dara.isNull(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!$dara.isNull(request.template)) {
      body["Template"] = request.template;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!$dara.isNull(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!$dara.isNull(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJob",
      version: "2019-04-30",
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
   * Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: $_model.UpdateJobRequest): Promise<$_model.UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  /**
   * 更新任务执行脚本
   * 
   * @param request - UpdateJobScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobScriptResponse
   */
  async updateJobScriptWithOptions(request: $_model.UpdateJobScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
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
      version: "2019-04-30",
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
   * 更新任务执行脚本
   * 
   * @param request - UpdateJobScriptRequest
   * @returns UpdateJobScriptResponse
   */
  async updateJobScript(request: $_model.UpdateJobScriptRequest): Promise<$_model.UpdateJobScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateJobScriptWithOptions(request, runtime);
  }

  /**
   * 更新命名空间
   * 
   * @param request - UpdateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: $_model.UpdateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceResponse({}));
  }

  /**
   * 更新命名空间
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: $_model.UpdateNamespaceRequest): Promise<$_model.UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(request: $_model.UpdateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!$dara.isNull(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflow",
      version: "2019-04-30",
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
   * Updates the basic information about a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(request: $_model.UpdateWorkflowRequest): Promise<$_model.UpdateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowDagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDagResponse
   */
  async updateWorkflowDagWithOptions(request: $_model.UpdateWorkflowDagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowDagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dagJson)) {
      body["DagJson"] = request.dagJson;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflowDag",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowDagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowDagResponse({}));
  }

  /**
   * Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowDagRequest
   * @returns UpdateWorkflowDagResponse
   */
  async updateWorkflowDag(request: $_model.UpdateWorkflowDagRequest): Promise<$_model.UpdateWorkflowDagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowDagWithOptions(request, runtime);
  }

}
