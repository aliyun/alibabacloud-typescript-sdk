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
      'us-west-1': "emr-serverless-spark.us-west-1.aliyuncs.com",
      'us-east-1': "emr-serverless-spark.us-east-1.aliyuncs.com",
      'na-south-1': "emr-serverless-spark.na-south-1.aliyuncs.com",
      'eu-central-1': "emr-serverless-spark.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "emr-serverless-spark.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "emr-serverless-spark.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "emr-serverless-spark.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "emr-serverless-spark.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "emr-serverless-spark.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "emr-serverless-spark.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "emr-serverless-spark.cn-chengdu.aliyuncs.com",
      'cn-beijing': "emr-serverless-spark.cn-beijing.aliyuncs.com",
      'ap-southeast-5': "emr-serverless-spark.ap-southeast-5.aliyuncs.com",
      'ap-southeast-1': "emr-serverless-spark.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "emr-serverless-spark.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emr-serverless-spark", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates the AI center.
   * 
   * @param request - ActivateAICenterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateAICenterResponse
   */
  async activateAICenterWithOptions(workspaceId: string, request: $_model.ActivateAICenterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateAICenterResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateAICenter",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/activateaicenter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateAICenterResponse>(await this.callApi(params, req, runtime), new $_model.ActivateAICenterResponse({}));
  }

  /**
   * Activates the AI center.
   * 
   * @param request - ActivateAICenterRequest
   * @returns ActivateAICenterResponse
   */
  async activateAICenter(workspaceId: string, request: $_model.ActivateAICenterRequest): Promise<$_model.ActivateAICenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateAICenterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Adds a Resource Access Management (RAM) user or a RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMembersResponse
   */
  async addMembersWithOptions(request: $_model.AddMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberArns)) {
      body["memberArns"] = request.memberArns;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMembers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddMembersResponse({}));
  }

  /**
   * Adds a Resource Access Management (RAM) user or a RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @returns AddMembersResponse
   */
  async addMembers(request: $_model.AddMembersRequest): Promise<$_model.AddMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMembersWithOptions(request, headers, runtime);
  }

  /**
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelJobRunResponse
   */
  async cancelJobRunWithOptions(workspaceId: string, jobRunId: string, request: $_model.CancelJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelJobRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelJobRunResponse>(await this.callApi(params, req, runtime), new $_model.CancelJobRunResponse({}));
  }

  /**
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @returns CancelJobRunResponse
   */
  async cancelJobRun(workspaceId: string, jobRunId: string, request: $_model.CancelJobRunRequest): Promise<$_model.CancelJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Cancels a Kyuubi Spark application.
   * 
   * @param request - CancelKyuubiSparkApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelKyuubiSparkApplicationResponse
   */
  async cancelKyuubiSparkApplicationWithOptions(workspaceId: string, kyuubiServiceId: string, applicationId: string, request: $_model.CancelKyuubiSparkApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelKyuubiSparkApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelKyuubiSparkApplication",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}/application/${$dara.URL.percentEncode(applicationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelKyuubiSparkApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CancelKyuubiSparkApplicationResponse({}));
  }

  /**
   * Cancels a Kyuubi Spark application.
   * 
   * @param request - CancelKyuubiSparkApplicationRequest
   * @returns CancelKyuubiSparkApplicationResponse
   */
  async cancelKyuubiSparkApplication(workspaceId: string, kyuubiServiceId: string, applicationId: string, request: $_model.CancelKyuubiSparkApplicationRequest): Promise<$_model.CancelKyuubiSparkApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelKyuubiSparkApplicationWithOptions(workspaceId, kyuubiServiceId, applicationId, request, headers, runtime);
  }

  /**
   * 停止RayJob
   * 
   * @param request - CancelRayJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRayJobResponse
   */
  async cancelRayJobWithOptions(workspaceId: string, submissionId: string, request: $_model.CancelRayJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRayJobResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRayJob",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayJob/${$dara.URL.percentEncode(submissionId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRayJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelRayJobResponse({}));
  }

  /**
   * 停止RayJob
   * 
   * @param request - CancelRayJobRequest
   * @returns CancelRayJobResponse
   */
  async cancelRayJob(workspaceId: string, submissionId: string, request: $_model.CancelRayJobRequest): Promise<$_model.CancelRayJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRayJobWithOptions(workspaceId, submissionId, request, headers, runtime);
  }

  /**
   * Moves an instance to a different resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/changeResourceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Moves an instance to a different resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Kyuubi gateway.
   * 
   * @param request - CreateKyuubiServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKyuubiServiceResponse
   */
  async createKyuubiServiceWithOptions(workspaceId: string, request: $_model.CreateKyuubiServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKyuubiServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computeInstance)) {
      body["computeInstance"] = request.computeInstance;
    }

    if (!$dara.isNull(request.kyuubiConfigs)) {
      body["kyuubiConfigs"] = request.kyuubiConfigs;
    }

    if (!$dara.isNull(request.kyuubiReleaseVersion)) {
      body["kyuubiReleaseVersion"] = request.kyuubiReleaseVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.publicEndpointEnabled)) {
      body["publicEndpointEnabled"] = request.publicEndpointEnabled;
    }

    if (!$dara.isNull(request.queue)) {
      body["queue"] = request.queue;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.replica)) {
      body["replica"] = request.replica;
    }

    if (!$dara.isNull(request.sparkConfigs)) {
      body["sparkConfigs"] = request.sparkConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateKyuubiServiceResponse({}));
  }

  /**
   * Creates a Kyuubi gateway.
   * 
   * @param request - CreateKyuubiServiceRequest
   * @returns CreateKyuubiServiceResponse
   */
  async createKyuubiService(workspaceId: string, request: $_model.CreateKyuubiServiceRequest): Promise<$_model.CreateKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKyuubiServiceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a Kyuubi Gateway authentication token.
   * 
   * @param request - CreateKyuubiTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKyuubiTokenResponse
   */
  async createKyuubiTokenWithOptions(workspaceId: string, kyuubiServiceId: string, request: $_model.CreateKyuubiTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKyuubiTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoExpireConfiguration)) {
      body["autoExpireConfiguration"] = request.autoExpireConfiguration;
    }

    if (!$dara.isNull(request.memberArns)) {
      body["memberArns"] = request.memberArns;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sparkRole)) {
      body["sparkRole"] = request.sparkRole;
    }

    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKyuubiToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/kyuubiService/${$dara.URL.percentEncode(kyuubiServiceId)}/token`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKyuubiTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateKyuubiTokenResponse({}));
  }

  /**
   * Creates a Kyuubi Gateway authentication token.
   * 
   * @param request - CreateKyuubiTokenRequest
   * @returns CreateKyuubiTokenResponse
   */
  async createKyuubiToken(workspaceId: string, kyuubiServiceId: string, request: $_model.CreateKyuubiTokenRequest): Promise<$_model.CreateKyuubiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKyuubiTokenWithOptions(workspaceId, kyuubiServiceId, request, headers, runtime);
  }

  /**
   * Creates a Livy compute.
   * 
   * @param request - CreateLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLivyComputeResponse
   */
  async createLivyComputeWithOptions(workspaceBizId: string, request: $_model.CreateLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authType)) {
      body["authType"] = request.authType;
    }

    if (!$dara.isNull(request.autoStartConfiguration)) {
      body["autoStartConfiguration"] = request.autoStartConfiguration;
    }

    if (!$dara.isNull(request.autoStopConfiguration)) {
      body["autoStopConfiguration"] = request.autoStopConfiguration;
    }

    if (!$dara.isNull(request.cpuLimit)) {
      body["cpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.enablePublic)) {
      body["enablePublic"] = request.enablePublic;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.livyServerConf)) {
      body["livyServerConf"] = request.livyServerConf;
    }

    if (!$dara.isNull(request.livyVersion)) {
      body["livyVersion"] = request.livyVersion;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      body["memoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkName)) {
      body["networkName"] = request.networkName;
    }

    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.CreateLivyComputeResponse({}));
  }

  /**
   * Creates a Livy compute.
   * 
   * @param request - CreateLivyComputeRequest
   * @returns CreateLivyComputeResponse
   */
  async createLivyCompute(workspaceBizId: string, request: $_model.CreateLivyComputeRequest): Promise<$_model.CreateLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLivyComputeWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Creates a token for a Livy Gateway.
   * 
   * @param request - CreateLivyComputeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLivyComputeTokenResponse
   */
  async createLivyComputeTokenWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.CreateLivyComputeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLivyComputeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoExpireConfiguration)) {
      body["autoExpireConfiguration"] = request.autoExpireConfiguration;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLivyComputeToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/token`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLivyComputeTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateLivyComputeTokenResponse({}));
  }

  /**
   * Creates a token for a Livy Gateway.
   * 
   * @param request - CreateLivyComputeTokenRequest
   * @returns CreateLivyComputeTokenResponse
   */
  async createLivyComputeToken(workspaceBizId: string, livyComputeId: string, request: $_model.CreateLivyComputeTokenRequest): Promise<$_model.CreateLivyComputeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLivyComputeTokenWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Creates a network service.
   * 
   * @param request - CreateNetworkServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkServiceResponse
   */
  async createNetworkServiceWithOptions(workspaceId: string, request: $_model.CreateNetworkServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["securityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchIds)) {
      body["vswitchIds"] = request.vswitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/networkServices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkServiceResponse({}));
  }

  /**
   * Creates a network service.
   * 
   * @param request - CreateNetworkServiceRequest
   * @returns CreateNetworkServiceResponse
   */
  async createNetworkService(workspaceId: string, request: $_model.CreateNetworkServiceRequest): Promise<$_model.CreateNetworkServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNetworkServiceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a workflow definition.
   * 
   * @param tmpReq - CreateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithScheduleWithOptions(bizId: string, tmpReq: $_model.CreateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProcessDefinitionWithScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalParams)) {
      request.globalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalParams, "globalParams", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!$dara.isNull(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!$dara.isNull(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.globalParamsShrink)) {
      query["globalParams"] = request.globalParamsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!$dara.isNull(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!$dara.isNull(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!$dara.isNull(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/process-definition`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new $_model.CreateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * Creates a workflow definition.
   * 
   * @param request - CreateProcessDefinitionWithScheduleRequest
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithSchedule(bizId: string, request: $_model.CreateProcessDefinitionWithScheduleRequest): Promise<$_model.CreateProcessDefinitionWithScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProcessDefinitionWithScheduleWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Creates a Ray cluster.
   * 
   * @param request - CreateRayClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRayClusterResponse
   */
  async createRayClusterWithOptions(workspaceId: string, request: $_model.CreateRayClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRayClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.extraParam)) {
      body["extraParam"] = request.extraParam;
    }

    if (!$dara.isNull(request.headSpec)) {
      body["headSpec"] = request.headSpec;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkServiceName)) {
      body["networkServiceName"] = request.networkServiceName;
    }

    if (!$dara.isNull(request.volumeIds)) {
      body["volumeIds"] = request.volumeIds;
    }

    if (!$dara.isNull(request.workerSpec)) {
      body["workerSpec"] = request.workerSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateRayClusterResponse({}));
  }

  /**
   * Creates a Ray cluster.
   * 
   * @param request - CreateRayClusterRequest
   * @returns CreateRayClusterResponse
   */
  async createRayCluster(workspaceId: string, request: $_model.CreateRayClusterRequest): Promise<$_model.CreateRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRayClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a session cluster.
   * 
   * @param request - CreateSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionClusterResponse
   */
  async createSessionClusterWithOptions(workspaceId: string, request: $_model.CreateSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      body["applicationConfigs"] = request.applicationConfigs;
    }

    if (!$dara.isNull(request.autoStartConfiguration)) {
      body["autoStartConfiguration"] = request.autoStartConfiguration;
    }

    if (!$dara.isNull(request.autoStopConfiguration)) {
      body["autoStopConfiguration"] = request.autoStopConfiguration;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.kind)) {
      body["kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.publicEndpointEnabled)) {
      body["publicEndpointEnabled"] = request.publicEndpointEnabled;
    }

    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionClusterResponse({}));
  }

  /**
   * Creates a session cluster.
   * 
   * @param request - CreateSessionClusterRequest
   * @returns CreateSessionClusterResponse
   */
  async createSessionCluster(workspaceId: string, request: $_model.CreateSessionClusterRequest): Promise<$_model.CreateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an SQL statement.
   * 
   * @param request - CreateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatementWithOptions(workspaceId: string, request: $_model.CreateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlStatementResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeContent)) {
      body["codeContent"] = request.codeContent;
    }

    if (!$dara.isNull(request.defaultCatalog)) {
      body["defaultCatalog"] = request.defaultCatalog;
    }

    if (!$dara.isNull(request.defaultDatabase)) {
      body["defaultDatabase"] = request.defaultDatabase;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.sqlComputeId)) {
      body["sqlComputeId"] = request.sqlComputeId;
    }

    if (!$dara.isNull(request.taskBizId)) {
      body["taskBizId"] = request.taskBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.CreateSqlStatementResponse({}));
  }

  /**
   * Creates an SQL statement.
   * 
   * @param request - CreateSqlStatementRequest
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatement(workspaceId: string, request: $_model.CreateSqlStatementRequest): Promise<$_model.CreateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlStatementWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["autoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoRenewPeriodUnit)) {
      body["autoRenewPeriodUnit"] = request.autoRenewPeriodUnit;
    }

    if (!$dara.isNull(request.autoStartSessionCluster)) {
      body["autoStartSessionCluster"] = request.autoStartSessionCluster;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dlfCatalogId)) {
      body["dlfCatalogId"] = request.dlfCatalogId;
    }

    if (!$dara.isNull(request.dlfType)) {
      body["dlfType"] = request.dlfType;
    }

    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.gpuSpec)) {
      body["gpuSpec"] = request.gpuSpec;
    }

    if (!$dara.isNull(request.ossBucket)) {
      body["ossBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      body["paymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      body["ramRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.releaseType)) {
      body["releaseType"] = request.releaseType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceSpec)) {
      body["resourceSpec"] = request.resourceSpec;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    if (!$dara.isNull(request.workspaceName)) {
      body["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Kyuubi gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKyuubiServiceResponse
   */
  async deleteKyuubiServiceWithOptions(workspaceId: string, kyuubiServiceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKyuubiServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKyuubiServiceResponse({}));
  }

  /**
   * Deletes a Kyuubi gateway.
   * @returns DeleteKyuubiServiceResponse
   */
  async deleteKyuubiService(workspaceId: string, kyuubiServiceId: string): Promise<$_model.DeleteKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKyuubiServiceWithOptions(workspaceId, kyuubiServiceId, headers, runtime);
  }

  /**
   * Deletes a Kyuubi Gateway authentication token.
   * 
   * @param request - DeleteKyuubiTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKyuubiTokenResponse
   */
  async deleteKyuubiTokenWithOptions(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.DeleteKyuubiTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKyuubiTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKyuubiToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/kyuubiService/${$dara.URL.percentEncode(kyuubiServiceId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKyuubiTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKyuubiTokenResponse({}));
  }

  /**
   * Deletes a Kyuubi Gateway authentication token.
   * 
   * @param request - DeleteKyuubiTokenRequest
   * @returns DeleteKyuubiTokenResponse
   */
  async deleteKyuubiToken(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.DeleteKyuubiTokenRequest): Promise<$_model.DeleteKyuubiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKyuubiTokenWithOptions(workspaceId, kyuubiServiceId, tokenId, request, headers, runtime);
  }

  /**
   * Deletes a Livy gateway.
   * 
   * @param request - DeleteLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLivyComputeResponse
   */
  async deleteLivyComputeWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.DeleteLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLivyComputeResponse({}));
  }

  /**
   * Deletes a Livy gateway.
   * 
   * @param request - DeleteLivyComputeRequest
   * @returns DeleteLivyComputeResponse
   */
  async deleteLivyCompute(workspaceBizId: string, livyComputeId: string, request: $_model.DeleteLivyComputeRequest): Promise<$_model.DeleteLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLivyComputeWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Deletes a token for a Livy Gateway.
   * 
   * @param request - DeleteLivyComputeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLivyComputeTokenResponse
   */
  async deleteLivyComputeTokenWithOptions(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.DeleteLivyComputeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLivyComputeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLivyComputeToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLivyComputeTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLivyComputeTokenResponse({}));
  }

  /**
   * Deletes a token for a Livy Gateway.
   * 
   * @param request - DeleteLivyComputeTokenRequest
   * @returns DeleteLivyComputeTokenResponse
   */
  async deleteLivyComputeToken(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.DeleteLivyComputeTokenRequest): Promise<$_model.DeleteLivyComputeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLivyComputeTokenWithOptions(workspaceBizId, livyComputeId, tokenId, request, headers, runtime);
  }

  /**
   * Deletes a Ray cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRayClusterResponse
   */
  async deleteRayClusterWithOptions(workspaceId: string, clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRayClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster/${$dara.URL.percentEncode(clusterId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRayClusterResponse({}));
  }

  /**
   * Deletes a Ray cluster.
   * @returns DeleteRayClusterResponse
   */
  async deleteRayCluster(workspaceId: string, clusterId: string): Promise<$_model.DeleteRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRayClusterWithOptions(workspaceId, clusterId, headers, runtime);
  }

  /**
   * Updates a Workspace Queue.
   * 
   * @param request - EditWorkspaceQueueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditWorkspaceQueueResponse
   */
  async editWorkspaceQueueWithOptions(request: $_model.EditWorkspaceQueueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EditWorkspaceQueueResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environments)) {
      body["environments"] = request.environments;
    }

    if (!$dara.isNull(request.gpuSpec)) {
      body["gpuSpec"] = request.gpuSpec;
    }

    if (!$dara.isNull(request.resourceSpec)) {
      body["resourceSpec"] = request.resourceSpec;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceQueueName)) {
      body["workspaceQueueName"] = request.workspaceQueueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditWorkspaceQueue",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/queues/action/edit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditWorkspaceQueueResponse>(await this.callApi(params, req, runtime), new $_model.EditWorkspaceQueueResponse({}));
  }

  /**
   * Updates a Workspace Queue.
   * 
   * @param request - EditWorkspaceQueueRequest
   * @returns EditWorkspaceQueueResponse
   */
  async editWorkspaceQueue(request: $_model.EditWorkspaceQueueRequest): Promise<$_model.EditWorkspaceQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editWorkspaceQueueWithOptions(request, headers, runtime);
  }

  /**
   * Publishes a workflow and its scheduling configuration.
   * 
   * @param request - GenerateTaskCodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTaskCodesResponse
   */
  async generateTaskCodesWithOptions(bizId: string, request: $_model.GenerateTaskCodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTaskCodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.genNum)) {
      query["genNum"] = request.genNum;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTaskCodes",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/task-definition/gen-task-codes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTaskCodesResponse>(await this.callApi(params, req, runtime), new $_model.GenerateTaskCodesResponse({}));
  }

  /**
   * Publishes a workflow and its scheduling configuration.
   * 
   * @param request - GenerateTaskCodesRequest
   * @returns GenerateTaskCodesResponse
   */
  async generateTaskCodes(bizId: string, request: $_model.GenerateTaskCodesRequest): Promise<$_model.GenerateTaskCodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTaskCodesWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Gets the state of an AI center.
   * 
   * @param request - GetAICenterStateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICenterStateResponse
   */
  async getAICenterStateWithOptions(workspaceId: string, request: $_model.GetAICenterStateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICenterStateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICenterState",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/aicenter`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICenterStateResponse>(await this.callApi(params, req, runtime), new $_model.GetAICenterStateResponse({}));
  }

  /**
   * Gets the state of an AI center.
   * 
   * @param request - GetAICenterStateRequest
   * @returns GetAICenterStateResponse
   */
  async getAICenterState(workspaceId: string, request: $_model.GetAICenterStateRequest): Promise<$_model.GetAICenterStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAICenterStateWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a Cache cluster.
   * 
   * @param request - GetCacheClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCacheClusterResponse
   */
  async getCacheClusterWithOptions(cacheClusterId: string, request: $_model.GetCacheClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCacheClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCacheCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/cache/${$dara.URL.percentEncode(cacheClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCacheClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetCacheClusterResponse({}));
  }

  /**
   * Retrieves the details of a Cache cluster.
   * 
   * @param request - GetCacheClusterRequest
   * @returns GetCacheClusterResponse
   */
  async getCacheCluster(cacheClusterId: string, request: $_model.GetCacheClusterRequest): Promise<$_model.GetCacheClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCacheClusterWithOptions(cacheClusterId, request, headers, runtime);
  }

  /**
   * Queries the number of CU-hours consumed by a queue during a specified cycle.
   * 
   * @param request - GetCuHoursRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCuHoursResponse
   */
  async getCuHoursWithOptions(workspaceId: string, queue: string, request: $_model.GetCuHoursRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCuHoursResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCuHours",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/metric/cuHours/${$dara.URL.percentEncode(queue)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCuHoursResponse>(await this.callApi(params, req, runtime), new $_model.GetCuHoursResponse({}));
  }

  /**
   * Queries the number of CU-hours consumed by a queue during a specified cycle.
   * 
   * @param request - GetCuHoursRequest
   * @returns GetCuHoursResponse
   */
  async getCuHours(workspaceId: string, queue: string, request: $_model.GetCuHoursRequest): Promise<$_model.GetCuHoursResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCuHoursWithOptions(workspaceId, queue, request, headers, runtime);
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @param request - GetDoctorApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplicationWithOptions(workspaceId: string, runId: string, request: $_model.GetDoctorApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.locale)) {
      query["locale"] = request.locale;
    }

    if (!$dara.isNull(request.queryTime)) {
      query["queryTime"] = request.queryTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorApplication",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/runs/${$dara.URL.percentEncode(runId)}/action/getDoctorApplication`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorApplicationResponse({}));
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @param request - GetDoctorApplicationRequest
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplication(workspaceId: string, runId: string, request: $_model.GetDoctorApplicationRequest): Promise<$_model.GetDoctorApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDoctorApplicationWithOptions(workspaceId, runId, request, headers, runtime);
  }

  /**
   * Get the details of a job.
   * 
   * @param request - GetJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobRunResponse
   */
  async getJobRunWithOptions(workspaceId: string, jobRunId: string, request: $_model.GetJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobRunResponse>(await this.callApi(params, req, runtime), new $_model.GetJobRunResponse({}));
  }

  /**
   * Get the details of a job.
   * 
   * @param request - GetJobRunRequest
   * @returns GetJobRunResponse
   */
  async getJobRun(workspaceId: string, jobRunId: string, request: $_model.GetJobRunRequest): Promise<$_model.GetJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a Kyuubi Gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKyuubiServiceResponse
   */
  async getKyuubiServiceWithOptions(workspaceId: string, kyuubiServiceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKyuubiServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetKyuubiServiceResponse({}));
  }

  /**
   * Retrieves the details of a Kyuubi Gateway.
   * @returns GetKyuubiServiceResponse
   */
  async getKyuubiService(workspaceId: string, kyuubiServiceId: string): Promise<$_model.GetKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKyuubiServiceWithOptions(workspaceId, kyuubiServiceId, headers, runtime);
  }

  /**
   * Obtains an authentication token for Kyuubi Gateway.
   * 
   * @param request - GetKyuubiTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKyuubiTokenResponse
   */
  async getKyuubiTokenWithOptions(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.GetKyuubiTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKyuubiTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKyuubiToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/kyuubiService/${$dara.URL.percentEncode(kyuubiServiceId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKyuubiTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetKyuubiTokenResponse({}));
  }

  /**
   * Obtains an authentication token for Kyuubi Gateway.
   * 
   * @param request - GetKyuubiTokenRequest
   * @returns GetKyuubiTokenResponse
   */
  async getKyuubiToken(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.GetKyuubiTokenRequest): Promise<$_model.GetKyuubiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKyuubiTokenWithOptions(workspaceId, kyuubiServiceId, tokenId, request, headers, runtime);
  }

  /**
   * Retrieves information about a Livy Gateway.
   * 
   * @param request - GetLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLivyComputeResponse
   */
  async getLivyComputeWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.GetLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.GetLivyComputeResponse({}));
  }

  /**
   * Retrieves information about a Livy Gateway.
   * 
   * @param request - GetLivyComputeRequest
   * @returns GetLivyComputeResponse
   */
  async getLivyCompute(workspaceBizId: string, livyComputeId: string, request: $_model.GetLivyComputeRequest): Promise<$_model.GetLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLivyComputeWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Retrieves a token for a Livy Gateway.
   * 
   * @param request - GetLivyComputeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLivyComputeTokenResponse
   */
  async getLivyComputeTokenWithOptions(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.GetLivyComputeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLivyComputeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLivyComputeToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLivyComputeTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetLivyComputeTokenResponse({}));
  }

  /**
   * Retrieves a token for a Livy Gateway.
   * 
   * @param request - GetLivyComputeTokenRequest
   * @returns GetLivyComputeTokenResponse
   */
  async getLivyComputeToken(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.GetLivyComputeTokenRequest): Promise<$_model.GetLivyComputeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLivyComputeTokenWithOptions(workspaceBizId, livyComputeId, tokenId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a Ray cluster, including its configuration, runtime state, node information, and connection endpoints.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRayClusterResponse
   */
  async getRayClusterWithOptions(workspaceId: string, clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRayClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster/${$dara.URL.percentEncode(clusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetRayClusterResponse({}));
  }

  /**
   * Retrieves the details of a Ray cluster, including its configuration, runtime state, node information, and connection endpoints.
   * @returns GetRayClusterResponse
   */
  async getRayCluster(workspaceId: string, clusterId: string): Promise<$_model.GetRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRayClusterWithOptions(workspaceId, clusterId, headers, runtime);
  }

  /**
   * 获取Ray集群
   * 
   * @param request - GetRayJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRayJobResponse
   */
  async getRayJobWithOptions(workspaceId: string, submissionId: string, request: $_model.GetRayJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRayJobResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRayJob",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayJob/${$dara.URL.percentEncode(submissionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRayJobResponse>(await this.callApi(params, req, runtime), new $_model.GetRayJobResponse({}));
  }

  /**
   * 获取Ray集群
   * 
   * @param request - GetRayJobRequest
   * @returns GetRayJobResponse
   */
  async getRayJob(workspaceId: string, submissionId: string, request: $_model.GetRayJobRequest): Promise<$_model.GetRayJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRayJobWithOptions(workspaceId, submissionId, request, headers, runtime);
  }

  /**
   * Retrieves the log of a Ray job.
   * 
   * @param request - GetRayLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRayLogResponse
   */
  async getRayLogWithOptions(workspaceId: string, instanceId: string, request: $_model.GetRayLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRayLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRayLog",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/ray/${$dara.URL.percentEncode(instanceId)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRayLogResponse>(await this.callApi(params, req, runtime), new $_model.GetRayLogResponse({}));
  }

  /**
   * Retrieves the log of a Ray job.
   * 
   * @param request - GetRayLogRequest
   * @returns GetRayLogResponse
   */
  async getRayLog(workspaceId: string, instanceId: string, request: $_model.GetRayLogRequest): Promise<$_model.GetRayLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRayLogWithOptions(workspaceId, instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the configuration of a Spark job.
   * 
   * @param request - GetRunConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunConfigurationResponse
   */
  async getRunConfigurationWithOptions(workspaceId: string, runId: string, request: $_model.GetRunConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRunConfiguration",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/runs/${$dara.URL.percentEncode(runId)}/action/getRunConfiguration`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetRunConfigurationResponse({}));
  }

  /**
   * Retrieves the configuration of a Spark job.
   * 
   * @param request - GetRunConfigurationRequest
   * @returns GetRunConfigurationResponse
   */
  async getRunConfiguration(workspaceId: string, runId: string, request: $_model.GetRunConfigurationRequest): Promise<$_model.GetRunConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunConfigurationWithOptions(workspaceId, runId, request, headers, runtime);
  }

  /**
   * Retrieves session details.
   * 
   * @param request - GetSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionClusterResponse
   */
  async getSessionClusterWithOptions(workspaceId: string, sessionClusterId: string, request: $_model.GetSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/${$dara.URL.percentEncode(sessionClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionClusterResponse({}));
  }

  /**
   * Retrieves session details.
   * 
   * @param request - GetSessionClusterRequest
   * @returns GetSessionClusterResponse
   */
  async getSessionCluster(workspaceId: string, sessionClusterId: string, request: $_model.GetSessionClusterRequest): Promise<$_model.GetSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionClusterWithOptions(workspaceId, sessionClusterId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an SQL query.
   * 
   * @param request - GetSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlStatementResponse
   */
  async getSqlStatementWithOptions(workspaceId: string, statementId: string, request: $_model.GetSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlStatementResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement/${$dara.URL.percentEncode(statementId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlStatementResponse({}));
  }

  /**
   * Retrieves the details of an SQL query.
   * 
   * @param request - GetSqlStatementRequest
   * @returns GetSqlStatementResponse
   */
  async getSqlStatement(workspaceId: string, statementId: string, request: $_model.GetSqlStatementRequest): Promise<$_model.GetSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * Retrieves a task template.
   * 
   * @param request - GetTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(workspaceBizId: string, request: $_model.GetTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateBizId)) {
      query["templateBizId"] = request.templateBizId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Retrieves a task template.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(workspaceBizId: string, request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsersWithOptions(request: $_model.GrantRoleToUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantRoleToUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.userArns)) {
      body["userArns"] = request.userArns;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantRoleToUsers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/roles/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantRoleToUsersResponse>(await this.callApi(params, req, runtime), new $_model.GrantRoleToUsersResponse({}));
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsers(request: $_model.GrantRoleToUsersRequest): Promise<$_model.GrantRoleToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleToUsersWithOptions(request, headers, runtime);
  }

  /**
   * View the list of data catalogs
   * 
   * @param request - ListCatalogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCatalogsResponse
   */
  async listCatalogsWithOptions(workspaceId: string, request: $_model.ListCatalogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCatalogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["environment"] = request.environment;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCatalogs",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCatalogsResponse({}));
  }

  /**
   * View the list of data catalogs
   * 
   * @param request - ListCatalogsRequest
   * @returns ListCatalogsResponse
   */
  async listCatalogs(workspaceId: string, request: $_model.ListCatalogsRequest): Promise<$_model.ListCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCatalogsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists the log files for a job executor.
   * 
   * @param request - ListExecutorLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutorLogsResponse
   */
  async listExecutorLogsWithOptions(workspaceId: string, jobRunId: string, executorId: string, request: $_model.ListExecutorLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutorLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logType)) {
      query["logType"] = request.logType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutorLogs",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}/executors/${$dara.URL.percentEncode(executorId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutorLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutorLogsResponse({}));
  }

  /**
   * Lists the log files for a job executor.
   * 
   * @param request - ListExecutorLogsRequest
   * @returns ListExecutorLogsResponse
   */
  async listExecutorLogs(workspaceId: string, jobRunId: string, executorId: string, request: $_model.ListExecutorLogsRequest): Promise<$_model.ListExecutorLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExecutorLogsWithOptions(workspaceId, jobRunId, executorId, request, headers, runtime);
  }

  /**
   * Lists the executors of a job.
   * 
   * @param request - ListJobExecutorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutorsWithOptions(workspaceId: string, jobRunId: string, request: $_model.ListJobExecutorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobExecutorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executorType)) {
      query["executorType"] = request.executorType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobExecutors",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}/executors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobExecutorsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobExecutorsResponse({}));
  }

  /**
   * Lists the executors of a job.
   * 
   * @param request - ListJobExecutorsRequest
   * @returns ListJobExecutorsResponse
   */
  async listJobExecutors(workspaceId: string, jobRunId: string, request: $_model.ListJobExecutorsRequest): Promise<$_model.ListJobExecutorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobExecutorsWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Call the ListJobRuns operation to retrieve a list of Spark jobs.
   * 
   * @param tmpReq - ListJobRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobRunsResponse
   */
  async listJobRunsWithOptions(workspaceId: string, tmpReq: $_model.ListJobRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobRunsResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobRunsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endTime)) {
      request.endTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTime, "endTime", "json");
    }

    if (!$dara.isNull(tmpReq.startTime)) {
      request.startTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTime, "startTime", "json");
    }

    if (!$dara.isNull(tmpReq.states)) {
      request.statesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.states, "states", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      query["applicationConfigs"] = request.applicationConfigs;
    }

    if (!$dara.isNull(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!$dara.isNull(request.endTimeShrink)) {
      query["endTime"] = request.endTimeShrink;
    }

    if (!$dara.isNull(request.isWorkflow)) {
      query["isWorkflow"] = request.isWorkflow;
    }

    if (!$dara.isNull(request.jobRunDeploymentId)) {
      query["jobRunDeploymentId"] = request.jobRunDeploymentId;
    }

    if (!$dara.isNull(request.jobRunId)) {
      query["jobRunId"] = request.jobRunId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["minDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceQueueId)) {
      query["resourceQueueId"] = request.resourceQueueId;
    }

    if (!$dara.isNull(request.runtimeConfigs)) {
      query["runtimeConfigs"] = request.runtimeConfigs;
    }

    if (!$dara.isNull(request.startTimeShrink)) {
      query["startTime"] = request.startTimeShrink;
    }

    if (!$dara.isNull(request.statesShrink)) {
      query["states"] = request.statesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobRuns",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobRunsResponse({}));
  }

  /**
   * Call the ListJobRuns operation to retrieve a list of Spark jobs.
   * 
   * @param request - ListJobRunsRequest
   * @returns ListJobRunsResponse
   */
  async listJobRuns(workspaceId: string, request: $_model.ListJobRunsRequest): Promise<$_model.ListJobRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobRunsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists Kyuubi Gateways.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKyuubiServicesResponse
   */
  async listKyuubiServicesWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKyuubiServicesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKyuubiServices",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKyuubiServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListKyuubiServicesResponse({}));
  }

  /**
   * Lists Kyuubi Gateways.
   * @returns ListKyuubiServicesResponse
   */
  async listKyuubiServices(workspaceId: string): Promise<$_model.ListKyuubiServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKyuubiServicesWithOptions(workspaceId, headers, runtime);
  }

  /**
   * Lists Kyuubi Spark applications.
   * 
   * @param tmpReq - ListKyuubiSparkApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKyuubiSparkApplicationsResponse
   */
  async listKyuubiSparkApplicationsWithOptions(workspaceId: string, kyuubiServiceId: string, tmpReq: $_model.ListKyuubiSparkApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKyuubiSparkApplicationsResponse> {
    tmpReq.validate();
    let request = new $_model.ListKyuubiSparkApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endTime)) {
      request.endTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTime, "endTime", "json");
    }

    if (!$dara.isNull(tmpReq.orderBy)) {
      request.orderByShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderBy, "orderBy", "json");
    }

    if (!$dara.isNull(tmpReq.startTime)) {
      request.startTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTime, "startTime", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      query["applicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["applicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.endTimeShrink)) {
      query["endTime"] = request.endTimeShrink;
    }

    if (!$dara.isNull(request.latestSqlStatementStatuses)) {
      query["latestSqlStatementStatuses"] = request.latestSqlStatementStatuses;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["minDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByShrink)) {
      query["orderBy"] = request.orderByShrink;
    }

    if (!$dara.isNull(request.resourceQueueId)) {
      query["resourceQueueId"] = request.resourceQueueId;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.startTimeShrink)) {
      query["startTime"] = request.startTimeShrink;
    }

    if (!$dara.isNull(request.states)) {
      query["states"] = request.states;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKyuubiSparkApplications",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}/applications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKyuubiSparkApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListKyuubiSparkApplicationsResponse({}));
  }

  /**
   * Lists Kyuubi Spark applications.
   * 
   * @param request - ListKyuubiSparkApplicationsRequest
   * @returns ListKyuubiSparkApplicationsResponse
   */
  async listKyuubiSparkApplications(workspaceId: string, kyuubiServiceId: string, request: $_model.ListKyuubiSparkApplicationsRequest): Promise<$_model.ListKyuubiSparkApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKyuubiSparkApplicationsWithOptions(workspaceId, kyuubiServiceId, request, headers, runtime);
  }

  /**
   * Lists KyuubiServer authentication tokens.
   * 
   * @param request - ListKyuubiTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKyuubiTokenResponse
   */
  async listKyuubiTokenWithOptions(workspaceId: string, kyuubiServiceId: string, request: $_model.ListKyuubiTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKyuubiTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKyuubiToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/kyuubiService/${$dara.URL.percentEncode(kyuubiServiceId)}/token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKyuubiTokenResponse>(await this.callApi(params, req, runtime), new $_model.ListKyuubiTokenResponse({}));
  }

  /**
   * Lists KyuubiServer authentication tokens.
   * 
   * @param request - ListKyuubiTokenRequest
   * @returns ListKyuubiTokenResponse
   */
  async listKyuubiToken(workspaceId: string, kyuubiServiceId: string, request: $_model.ListKyuubiTokenRequest): Promise<$_model.ListKyuubiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKyuubiTokenWithOptions(workspaceId, kyuubiServiceId, request, headers, runtime);
  }

  /**
   * Lists Livy Gateways.
   * 
   * @param request - ListLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivyComputeResponse
   */
  async listLivyComputeWithOptions(workspaceBizId: string, request: $_model.ListLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.ListLivyComputeResponse({}));
  }

  /**
   * Lists Livy Gateways.
   * 
   * @param request - ListLivyComputeRequest
   * @returns ListLivyComputeResponse
   */
  async listLivyCompute(workspaceBizId: string, request: $_model.ListLivyComputeRequest): Promise<$_model.ListLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLivyComputeWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Lists the historical sessions for a Livy Gateway.
   * 
   * @param request - ListLivyComputeSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivyComputeSessionsResponse
   */
  async listLivyComputeSessionsWithOptions(workspaceId: string, livyComputeId: string, request: $_model.ListLivyComputeSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivyComputeSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLivyComputeSessions",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/session`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivyComputeSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListLivyComputeSessionsResponse({}));
  }

  /**
   * Lists the historical sessions for a Livy Gateway.
   * 
   * @param request - ListLivyComputeSessionsRequest
   * @returns ListLivyComputeSessionsResponse
   */
  async listLivyComputeSessions(workspaceId: string, livyComputeId: string, request: $_model.ListLivyComputeSessionsRequest): Promise<$_model.ListLivyComputeSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLivyComputeSessionsWithOptions(workspaceId, livyComputeId, request, headers, runtime);
  }

  /**
   * Lists Livy Gateway tokens.
   * 
   * @param request - ListLivyComputeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivyComputeTokenResponse
   */
  async listLivyComputeTokenWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.ListLivyComputeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivyComputeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLivyComputeToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivyComputeTokenResponse>(await this.callApi(params, req, runtime), new $_model.ListLivyComputeTokenResponse({}));
  }

  /**
   * Lists Livy Gateway tokens.
   * 
   * @param request - ListLivyComputeTokenRequest
   * @returns ListLivyComputeTokenResponse
   */
  async listLivyComputeToken(workspaceBizId: string, livyComputeId: string, request: $_model.ListLivyComputeTokenRequest): Promise<$_model.ListLivyComputeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLivyComputeTokenWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Get Log Content
   * 
   * @param request - ListLogContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogContentsResponse
   */
  async listLogContentsWithOptions(workspaceId: string, request: $_model.ListLogContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogContentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.length)) {
      query["length"] = request.length;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogContents",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/action/listLogContents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogContentsResponse({}));
  }

  /**
   * Get Log Content
   * 
   * @param request - ListLogContentsRequest
   * @returns ListLogContentsResponse
   */
  async listLogContents(workspaceId: string, request: $_model.ListLogContentsRequest): Promise<$_model.ListLogContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogContentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the list of members in the workspace.
   * 
   * @param request - ListMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(workspaceId: string, request: $_model.ListMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMembers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/${$dara.URL.percentEncode(workspaceId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListMembersResponse({}));
  }

  /**
   * Retrieves the list of members in the workspace.
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(workspaceId: string, request: $_model.ListMembersRequest): Promise<$_model.ListMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMembersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists network connections.
   * 
   * @param request - ListNetworkServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkServicesResponse
   */
  async listNetworkServicesWithOptions(workspaceId: string, request: $_model.ListNetworkServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkServices",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/networkServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkServicesResponse({}));
  }

  /**
   * Lists network connections.
   * 
   * @param request - ListNetworkServicesRequest
   * @returns ListNetworkServicesResponse
   */
  async listNetworkServices(workspaceId: string, request: $_model.ListNetworkServicesRequest): Promise<$_model.ListNetworkServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNetworkServicesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists Ray clusters.
   * 
   * @param request - ListRayClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRayClusterResponse
   */
  async listRayClusterWithOptions(workspaceId: string, request: $_model.ListRayClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRayClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.ListRayClusterResponse({}));
  }

  /**
   * Lists Ray clusters.
   * 
   * @param request - ListRayClusterRequest
   * @returns ListRayClusterResponse
   */
  async listRayCluster(workspaceId: string, request: $_model.ListRayClusterRequest): Promise<$_model.ListRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRayClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 列出RayJob
   * 
   * @param tmpReq - ListRayJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRayJobResponse
   */
  async listRayJobWithOptions(workspaceId: string, tmpReq: $_model.ListRayJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRayJobResponse> {
    tmpReq.validate();
    let request = new $_model.ListRayJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.submitTime)) {
      request.submitTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitTime, "submitTime", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.submissionId)) {
      query["submissionId"] = request.submissionId;
    }

    if (!$dara.isNull(request.submitTimeShrink)) {
      query["submitTime"] = request.submitTimeShrink;
    }

    if (!$dara.isNull(request.taskBizId)) {
      query["taskBizId"] = request.taskBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRayJob",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRayJobResponse>(await this.callApi(params, req, runtime), new $_model.ListRayJobResponse({}));
  }

  /**
   * 列出RayJob
   * 
   * @param request - ListRayJobRequest
   * @returns ListRayJobResponse
   */
  async listRayJob(workspaceId: string, request: $_model.ListRayJobRequest): Promise<$_model.ListRayJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRayJobWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists Ray logs.
   * 
   * @param request - ListRayLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRayLogsResponse
   */
  async listRayLogsWithOptions(workspaceId: string, instanceId: string, request: $_model.ListRayLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRayLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.delimiter)) {
      query["delimiter"] = request.delimiter;
    }

    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxKeys)) {
      query["maxKeys"] = request.maxKeys;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRayLogs",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/ray/${$dara.URL.percentEncode(instanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRayLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListRayLogsResponse({}));
  }

  /**
   * Lists Ray logs.
   * 
   * @param request - ListRayLogsRequest
   * @returns ListRayLogsResponse
   */
  async listRayLogs(workspaceId: string, instanceId: string, request: $_model.ListRayLogsRequest): Promise<$_model.ListRayLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRayLogsWithOptions(workspaceId, instanceId, request, headers, runtime);
  }

  /**
   * Retrieves a list of release versions.
   * 
   * @param request - ListReleaseVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersionsWithOptions(request: $_model.ListReleaseVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReleaseVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseType)) {
      query["releaseType"] = request.releaseType;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      query["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.releaseVersionStatus)) {
      query["releaseVersionStatus"] = request.releaseVersionStatus;
    }

    if (!$dara.isNull(request.serviceFilter)) {
      query["serviceFilter"] = request.serviceFilter;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReleaseVersions",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/releaseVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReleaseVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListReleaseVersionsResponse({}));
  }

  /**
   * Retrieves a list of release versions.
   * 
   * @param request - ListReleaseVersionsRequest
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersions(request: $_model.ListReleaseVersionsRequest): Promise<$_model.ListReleaseVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReleaseVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of session clusters.
   * 
   * @param request - ListSessionClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionClustersResponse
   */
  async listSessionClustersWithOptions(workspaceId: string, request: $_model.ListSessionClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.queueName)) {
      query["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      query["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionClusters",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionClustersResponse({}));
  }

  /**
   * Retrieves a list of session clusters.
   * 
   * @param request - ListSessionClustersRequest
   * @returns ListSessionClustersResponse
   */
  async listSessionClusters(workspaceId: string, request: $_model.ListSessionClustersRequest): Promise<$_model.ListSessionClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionClustersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the execution results of an SQL statement.
   * 
   * @param request - ListSqlStatementContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSqlStatementContentsResponse
   */
  async listSqlStatementContentsWithOptions(workspaceId: string, request: $_model.ListSqlStatementContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSqlStatementContentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSqlStatementContents",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/action/listSqlStatementContents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSqlStatementContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListSqlStatementContentsResponse({}));
  }

  /**
   * Retrieves the execution results of an SQL statement.
   * 
   * @param request - ListSqlStatementContentsRequest
   * @returns ListSqlStatementContentsResponse
   */
  async listSqlStatementContents(workspaceId: string, request: $_model.ListSqlStatementContentsRequest): Promise<$_model.ListSqlStatementContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSqlStatementContentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Lists job templates.
   * 
   * @param request - ListTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateResponse
   */
  async listTemplateWithOptions(workspaceBizId: string, request: $_model.ListTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplate",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/template/listing`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateResponse({}));
  }

  /**
   * Lists job templates.
   * 
   * @param request - ListTemplateRequest
   * @returns ListTemplateResponse
   */
  async listTemplate(workspaceBizId: string, request: $_model.ListTemplateRequest): Promise<$_model.ListTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplateWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Lists the queues in a workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueuesWithOptions(workspaceId: string, request: $_model.ListWorkspaceQueuesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceQueuesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["environment"] = request.environment;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceQueues",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/queues`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceQueuesResponse({}));
  }

  /**
   * Lists the queues in a workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueues(workspaceId: string, request: $_model.ListWorkspaceQueuesRequest): Promise<$_model.ListWorkspaceQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceQueuesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Call `ListWorkspaces` to get a list of workspaces.
   * 
   * @param tmpReq - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(tmpReq: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Call `ListWorkspaces` to get a list of workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Refreshes the token for a Livy Gateway.
   * 
   * @param request - RefreshLivyComputeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLivyComputeTokenResponse
   */
  async refreshLivyComputeTokenWithOptions(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.RefreshLivyComputeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshLivyComputeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoExpireConfiguration)) {
      body["autoExpireConfiguration"] = request.autoExpireConfiguration;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshLivyComputeToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshLivyComputeTokenResponse>(await this.callApi(params, req, runtime), new $_model.RefreshLivyComputeTokenResponse({}));
  }

  /**
   * Refreshes the token for a Livy Gateway.
   * 
   * @param request - RefreshLivyComputeTokenRequest
   * @returns RefreshLivyComputeTokenResponse
   */
  async refreshLivyComputeToken(workspaceBizId: string, livyComputeId: string, tokenId: string, request: $_model.RefreshLivyComputeTokenRequest): Promise<$_model.RefreshLivyComputeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshLivyComputeTokenWithOptions(workspaceBizId, livyComputeId, tokenId, request, headers, runtime);
  }

  /**
   * Start CacheCluster
   * 
   * @param request - StartCacheClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCacheClusterResponse
   */
  async startCacheClusterWithOptions(cacheClusterId: string, request: $_model.StartCacheClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartCacheClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCacheCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/cache/${$dara.URL.percentEncode(cacheClusterId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCacheClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartCacheClusterResponse({}));
  }

  /**
   * Start CacheCluster
   * 
   * @param request - StartCacheClusterRequest
   * @returns StartCacheClusterResponse
   */
  async startCacheCluster(cacheClusterId: string, request: $_model.StartCacheClusterRequest): Promise<$_model.StartCacheClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startCacheClusterWithOptions(cacheClusterId, request, headers, runtime);
  }

  /**
   * Starts a Spark Job.
   * 
   * @param request - StartJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobRunResponse
   */
  async startJobRunWithOptions(workspaceId: string, request: $_model.StartJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartJobRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.codeType)) {
      body["codeType"] = request.codeType;
    }

    if (!$dara.isNull(request.configurationOverrides)) {
      body["configurationOverrides"] = request.configurationOverrides;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.executionTimeoutSeconds)) {
      body["executionTimeoutSeconds"] = request.executionTimeoutSeconds;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.jobDriver)) {
      body["jobDriver"] = request.jobDriver;
    }

    if (!$dara.isNull(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.resourceQueueId)) {
      body["resourceQueueId"] = request.resourceQueueId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartJobRunResponse>(await this.callApi(params, req, runtime), new $_model.StartJobRunResponse({}));
  }

  /**
   * Starts a Spark Job.
   * 
   * @param request - StartJobRunRequest
   * @returns StartJobRunResponse
   */
  async startJobRun(workspaceId: string, request: $_model.StartJobRunRequest): Promise<$_model.StartJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startJobRunWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Starts the Kyuubi Gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartKyuubiServiceResponse
   */
  async startKyuubiServiceWithOptions(workspaceId: string, kyuubiServiceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartKyuubiServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.StartKyuubiServiceResponse({}));
  }

  /**
   * Starts the Kyuubi Gateway.
   * @returns StartKyuubiServiceResponse
   */
  async startKyuubiService(workspaceId: string, kyuubiServiceId: string): Promise<$_model.StartKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startKyuubiServiceWithOptions(workspaceId, kyuubiServiceId, headers, runtime);
  }

  /**
   * Starts a Livy gateway.
   * 
   * @param request - StartLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartLivyComputeResponse
   */
  async startLivyComputeWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.StartLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.StartLivyComputeResponse({}));
  }

  /**
   * Starts a Livy gateway.
   * 
   * @param request - StartLivyComputeRequest
   * @returns StartLivyComputeResponse
   */
  async startLivyCompute(workspaceBizId: string, livyComputeId: string, request: $_model.StartLivyComputeRequest): Promise<$_model.StartLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startLivyComputeWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Starts a workflow manually.
   * 
   * @param request - StartProcessInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstanceWithOptions(bizId: string, request: $_model.StartProcessInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartProcessInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    if (!$dara.isNull(request.comments)) {
      query["comments"] = request.comments;
    }

    if (!$dara.isNull(request.email)) {
      query["email"] = request.email;
    }

    if (!$dara.isNull(request.interval)) {
      query["interval"] = request.interval;
    }

    if (!$dara.isNull(request.isProd)) {
      query["isProd"] = request.isProd;
    }

    if (!$dara.isNull(request.processDefinitionCode)) {
      query["processDefinitionCode"] = request.processDefinitionCode;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.runtimeQueue)) {
      query["runtimeQueue"] = request.runtimeQueue;
    }

    if (!$dara.isNull(request.versionHashCode)) {
      query["versionHashCode"] = request.versionHashCode;
    }

    if (!$dara.isNull(request.versionNumber)) {
      query["versionNumber"] = request.versionNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartProcessInstance",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/executors/start-process-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartProcessInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartProcessInstanceResponse({}));
  }

  /**
   * Starts a workflow manually.
   * 
   * @param request - StartProcessInstanceRequest
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstance(bizId: string, request: $_model.StartProcessInstanceRequest): Promise<$_model.StartProcessInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startProcessInstanceWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Starts a Ray cluster.
   * 
   * @param request - StartRayClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRayClusterResponse
   */
  async startRayClusterWithOptions(workspaceId: string, clusterId: string, request: $_model.StartRayClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartRayClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster/${$dara.URL.percentEncode(clusterId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartRayClusterResponse({}));
  }

  /**
   * Starts a Ray cluster.
   * 
   * @param request - StartRayClusterRequest
   * @returns StartRayClusterResponse
   */
  async startRayCluster(workspaceId: string, clusterId: string, request: $_model.StartRayClusterRequest): Promise<$_model.StartRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startRayClusterWithOptions(workspaceId, clusterId, request, headers, runtime);
  }

  /**
   * Starts a session cluster.
   * 
   * @param request - StartSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSessionClusterResponse
   */
  async startSessionClusterWithOptions(workspaceId: string, request: $_model.StartSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/action/startSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartSessionClusterResponse({}));
  }

  /**
   * Starts a session cluster.
   * 
   * @param request - StartSessionClusterRequest
   * @returns StartSessionClusterResponse
   */
  async startSessionCluster(workspaceId: string, request: $_model.StartSessionClusterRequest): Promise<$_model.StartSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Stops a CacheCluster.
   * 
   * @param request - StopCacheClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCacheClusterResponse
   */
  async stopCacheClusterWithOptions(cacheClusterId: string, request: $_model.StopCacheClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopCacheClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCacheCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/cache/${$dara.URL.percentEncode(cacheClusterId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCacheClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopCacheClusterResponse({}));
  }

  /**
   * Stops a CacheCluster.
   * 
   * @param request - StopCacheClusterRequest
   * @returns StopCacheClusterResponse
   */
  async stopCacheCluster(cacheClusterId: string, request: $_model.StopCacheClusterRequest): Promise<$_model.StopCacheClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopCacheClusterWithOptions(cacheClusterId, request, headers, runtime);
  }

  /**
   * Stops a Kyuubi Gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopKyuubiServiceResponse
   */
  async stopKyuubiServiceWithOptions(workspaceId: string, kyuubiServiceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopKyuubiServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.StopKyuubiServiceResponse({}));
  }

  /**
   * Stops a Kyuubi Gateway.
   * @returns StopKyuubiServiceResponse
   */
  async stopKyuubiService(workspaceId: string, kyuubiServiceId: string): Promise<$_model.StopKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopKyuubiServiceWithOptions(workspaceId, kyuubiServiceId, headers, runtime);
  }

  /**
   * Stops a Livy Gateway.
   * 
   * @param request - StopLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLivyComputeResponse
   */
  async stopLivyComputeWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.StopLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.StopLivyComputeResponse({}));
  }

  /**
   * Stops a Livy Gateway.
   * 
   * @param request - StopLivyComputeRequest
   * @returns StopLivyComputeResponse
   */
  async stopLivyCompute(workspaceBizId: string, livyComputeId: string, request: $_model.StopLivyComputeRequest): Promise<$_model.StopLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopLivyComputeWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Stops a Ray cluster.
   * 
   * @param request - StopRayClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRayClusterResponse
   */
  async stopRayClusterWithOptions(workspaceId: string, clusterId: string, request: $_model.StopRayClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopRayClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster/${$dara.URL.percentEncode(clusterId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopRayClusterResponse({}));
  }

  /**
   * Stops a Ray cluster.
   * 
   * @param request - StopRayClusterRequest
   * @returns StopRayClusterResponse
   */
  async stopRayCluster(workspaceId: string, clusterId: string, request: $_model.StopRayClusterRequest): Promise<$_model.StopRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopRayClusterWithOptions(workspaceId, clusterId, request, headers, runtime);
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSessionClusterResponse
   */
  async stopSessionClusterWithOptions(workspaceId: string, request: $_model.StopSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/action/stopSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopSessionClusterResponse({}));
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @returns StopSessionClusterResponse
   */
  async stopSessionCluster(workspaceId: string, request: $_model.StopSessionClusterRequest): Promise<$_model.StopSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 提交Ray Job
   * 
   * @param request - SubmitRayJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitRayJobResponse
   */
  async submitRayJobWithOptions(workspaceId: string, request: $_model.SubmitRayJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitRayJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activeDeadlineSeconds)) {
      body["activeDeadlineSeconds"] = request.activeDeadlineSeconds;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.entrypoint)) {
      body["entrypoint"] = request.entrypoint;
    }

    if (!$dara.isNull(request.entrypointMemory)) {
      body["entrypointMemory"] = request.entrypointMemory;
    }

    if (!$dara.isNull(request.entrypointNumCpus)) {
      body["entrypointNumCpus"] = request.entrypointNumCpus;
    }

    if (!$dara.isNull(request.entrypointNumGpus)) {
      body["entrypointNumGpus"] = request.entrypointNumGpus;
    }

    if (!$dara.isNull(request.entrypointResources)) {
      body["entrypointResources"] = request.entrypointResources;
    }

    if (!$dara.isNull(request.extraParam)) {
      body["extraParam"] = request.extraParam;
    }

    if (!$dara.isNull(request.headSpec)) {
      body["headSpec"] = request.headSpec;
    }

    if (!$dara.isNull(request.metadataJson)) {
      body["metadataJson"] = request.metadataJson;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkServiceName)) {
      body["networkServiceName"] = request.networkServiceName;
    }

    if (!$dara.isNull(request.runtimeEnvJson)) {
      body["runtimeEnvJson"] = request.runtimeEnvJson;
    }

    if (!$dara.isNull(request.shutdownAfterJobFinishes)) {
      body["shutdownAfterJobFinishes"] = request.shutdownAfterJobFinishes;
    }

    if (!$dara.isNull(request.submissionMode)) {
      body["submissionMode"] = request.submissionMode;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.ttlSecondsAfterFinished)) {
      body["ttlSecondsAfterFinished"] = request.ttlSecondsAfterFinished;
    }

    if (!$dara.isNull(request.volumeIds)) {
      body["volumeIds"] = request.volumeIds;
    }

    if (!$dara.isNull(request.workerSpec)) {
      body["workerSpec"] = request.workerSpec;
    }

    if (!$dara.isNull(request.workingDir)) {
      body["workingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitRayJob",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitRayJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitRayJobResponse({}));
  }

  /**
   * 提交Ray Job
   * 
   * @param request - SubmitRayJobRequest
   * @returns SubmitRayJobResponse
   */
  async submitRayJob(workspaceId: string, request: $_model.SubmitRayJobRequest): Promise<$_model.SubmitRayJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitRayJobWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatementWithOptions(workspaceId: string, statementId: string, request: $_model.TerminateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateSqlStatementResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement/${$dara.URL.percentEncode(statementId)}/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.TerminateSqlStatementResponse({}));
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatement(workspaceId: string, statementId: string, request: $_model.TerminateSqlStatementRequest): Promise<$_model.TerminateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * Updates a Kyuubi Gateway.
   * 
   * @param request - UpdateKyuubiServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKyuubiServiceResponse
   */
  async updateKyuubiServiceWithOptions(workspaceId: string, kyuubiServiceId: string, request: $_model.UpdateKyuubiServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKyuubiServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computeInstance)) {
      body["computeInstance"] = request.computeInstance;
    }

    if (!$dara.isNull(request.kyuubiConfigs)) {
      body["kyuubiConfigs"] = request.kyuubiConfigs;
    }

    if (!$dara.isNull(request.kyuubiReleaseVersion)) {
      body["kyuubiReleaseVersion"] = request.kyuubiReleaseVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.publicEndpointEnabled)) {
      body["publicEndpointEnabled"] = request.publicEndpointEnabled;
    }

    if (!$dara.isNull(request.queue)) {
      body["queue"] = request.queue;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.replica)) {
      body["replica"] = request.replica;
    }

    if (!$dara.isNull(request.restart)) {
      body["restart"] = request.restart;
    }

    if (!$dara.isNull(request.sparkConfigs)) {
      body["sparkConfigs"] = request.sparkConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKyuubiService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKyuubiServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKyuubiServiceResponse({}));
  }

  /**
   * Updates a Kyuubi Gateway.
   * 
   * @param request - UpdateKyuubiServiceRequest
   * @returns UpdateKyuubiServiceResponse
   */
  async updateKyuubiService(workspaceId: string, kyuubiServiceId: string, request: $_model.UpdateKyuubiServiceRequest): Promise<$_model.UpdateKyuubiServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKyuubiServiceWithOptions(workspaceId, kyuubiServiceId, request, headers, runtime);
  }

  /**
   * Updates a Kyuubi Gateway authentication token.
   * 
   * @param request - UpdateKyuubiTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKyuubiTokenResponse
   */
  async updateKyuubiTokenWithOptions(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.UpdateKyuubiTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKyuubiTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoExpireConfiguration)) {
      body["autoExpireConfiguration"] = request.autoExpireConfiguration;
    }

    if (!$dara.isNull(request.memberArns)) {
      body["memberArns"] = request.memberArns;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sparkRole)) {
      body["sparkRole"] = request.sparkRole;
    }

    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKyuubiToken",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/kyuubiService/${$dara.URL.percentEncode(kyuubiServiceId)}/token/${$dara.URL.percentEncode(tokenId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKyuubiTokenResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKyuubiTokenResponse({}));
  }

  /**
   * Updates a Kyuubi Gateway authentication token.
   * 
   * @param request - UpdateKyuubiTokenRequest
   * @returns UpdateKyuubiTokenResponse
   */
  async updateKyuubiToken(workspaceId: string, kyuubiServiceId: string, tokenId: string, request: $_model.UpdateKyuubiTokenRequest): Promise<$_model.UpdateKyuubiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKyuubiTokenWithOptions(workspaceId, kyuubiServiceId, tokenId, request, headers, runtime);
  }

  /**
   * Updates a Livy Gateway.
   * 
   * @param request - UpdateLivyComputeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLivyComputeResponse
   */
  async updateLivyComputeWithOptions(workspaceBizId: string, livyComputeId: string, request: $_model.UpdateLivyComputeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLivyComputeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authType)) {
      body["authType"] = request.authType;
    }

    if (!$dara.isNull(request.autoStartConfiguration)) {
      body["autoStartConfiguration"] = request.autoStartConfiguration;
    }

    if (!$dara.isNull(request.autoStopConfiguration)) {
      body["autoStopConfiguration"] = request.autoStopConfiguration;
    }

    if (!$dara.isNull(request.cpuLimit)) {
      body["cpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.enablePublic)) {
      body["enablePublic"] = request.enablePublic;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.livyServerConf)) {
      body["livyServerConf"] = request.livyServerConf;
    }

    if (!$dara.isNull(request.livyVersion)) {
      body["livyVersion"] = request.livyVersion;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      body["memoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkName)) {
      body["networkName"] = request.networkName;
    }

    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLivyCompute",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/livycompute/${$dara.URL.percentEncode(livyComputeId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLivyComputeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLivyComputeResponse({}));
  }

  /**
   * Updates a Livy Gateway.
   * 
   * @param request - UpdateLivyComputeRequest
   * @returns UpdateLivyComputeResponse
   */
  async updateLivyCompute(workspaceBizId: string, livyComputeId: string, request: $_model.UpdateLivyComputeRequest): Promise<$_model.UpdateLivyComputeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLivyComputeWithOptions(workspaceBizId, livyComputeId, request, headers, runtime);
  }

  /**
   * Updates a workflow definition and its timed scheduling.
   * 
   * @param tmpReq - UpdateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithScheduleWithOptions(bizId: string, code: string, tmpReq: $_model.UpdateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProcessDefinitionWithScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalParams)) {
      request.globalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalParams, "globalParams", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!$dara.isNull(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!$dara.isNull(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.globalParamsShrink)) {
      query["globalParams"] = request.globalParamsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseState)) {
      query["releaseState"] = request.releaseState;
    }

    if (!$dara.isNull(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!$dara.isNull(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!$dara.isNull(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!$dara.isNull(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/process-definition/${$dara.URL.percentEncode(code)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * Updates a workflow definition and its timed scheduling.
   * 
   * @param request - UpdateProcessDefinitionWithScheduleRequest
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithSchedule(bizId: string, code: string, request: $_model.UpdateProcessDefinitionWithScheduleRequest): Promise<$_model.UpdateProcessDefinitionWithScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProcessDefinitionWithScheduleWithOptions(bizId, code, request, headers, runtime);
  }

  /**
   * Updates a Ray cluster.
   * 
   * @param request - UpdateRayClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRayClusterResponse
   */
  async updateRayClusterWithOptions(workspaceId: string, clusterId: string, request: $_model.UpdateRayClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRayClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.extraParam)) {
      body["extraParam"] = request.extraParam;
    }

    if (!$dara.isNull(request.headSpec)) {
      body["headSpec"] = request.headSpec;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkServiceName)) {
      body["networkServiceName"] = request.networkServiceName;
    }

    if (!$dara.isNull(request.volumeIds)) {
      body["volumeIds"] = request.volumeIds;
    }

    if (!$dara.isNull(request.workerSpec)) {
      body["workerSpec"] = request.workerSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRayCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/rayCluster/${$dara.URL.percentEncode(clusterId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRayClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRayClusterResponse({}));
  }

  /**
   * Updates a Ray cluster.
   * 
   * @param request - UpdateRayClusterRequest
   * @returns UpdateRayClusterResponse
   */
  async updateRayCluster(workspaceId: string, clusterId: string, request: $_model.UpdateRayClusterRequest): Promise<$_model.UpdateRayClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRayClusterWithOptions(workspaceId, clusterId, request, headers, runtime);
  }

  /**
   * Update workspace properties
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(request: $_model.UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cu)) {
      body["cu"] = request.cu;
    }

    if (!$dara.isNull(request.gpu)) {
      body["gpu"] = request.gpu;
    }

    if (!$dara.isNull(request.gpuSpec)) {
      body["gpuSpec"] = request.gpuSpec;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      body["ipWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscription)) {
      body["subscription"] = request.subscription;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      body["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Update workspace properties
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(request, headers, runtime);
  }

}
