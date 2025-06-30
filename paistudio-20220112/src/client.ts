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
      'cn-beijing': "pai.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "pai.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "pai.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "pai.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "pai.ap-southeast-5.aliyuncs.com",
      'us-west-1': "pai.us-west-1.aliyuncs.com",
      'us-east-1': "pai.us-east-1.aliyuncs.com",
      'eu-central-1': "pai.eu-central-1.aliyuncs.com",
      'me-east-1': "pai.me-east-1.aliyuncs.com",
      'ap-south-1': "pai.ap-south-1.aliyuncs.com",
      'cn-qingdao': "pai.cn-qingdao.aliyuncs.com",
      'cn-zhangjiakou': "pai.cn-zhangjiakou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paistudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检查WebTerminal
   * 
   * @param request - CheckInstanceWebTerminalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceWebTerminalResponse
   */
  async checkInstanceWebTerminalWithOptions(TrainingJobId: string, InstanceId: string, request: $_model.CheckInstanceWebTerminalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceWebTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkInfo)) {
      body["CheckInfo"] = request.checkInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceWebTerminal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/webterminals/action/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceWebTerminalResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceWebTerminalResponse({}));
  }

  /**
   * 检查WebTerminal
   * 
   * @param request - CheckInstanceWebTerminalRequest
   * @returns CheckInstanceWebTerminalResponse
   */
  async checkInstanceWebTerminal(TrainingJobId: string, InstanceId: string, request: $_model.CheckInstanceWebTerminalRequest): Promise<$_model.CheckInstanceWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceWebTerminalWithOptions(TrainingJobId, InstanceId, request, headers, runtime);
  }

  /**
   * 创建新的算法
   * 
   * @param request - CreateAlgorithmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlgorithmResponse
   */
  async createAlgorithmWithOptions(request: $_model.CreateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlgorithmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!$dara.isNull(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlgorithmResponse({}));
  }

  /**
   * 创建新的算法
   * 
   * @param request - CreateAlgorithmRequest
   * @returns CreateAlgorithmResponse
   */
  async createAlgorithm(request: $_model.CreateAlgorithmRequest): Promise<$_model.CreateAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmWithOptions(request, headers, runtime);
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param tmpReq - CreateAlgorithmVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlgorithmVersionResponse
   */
  async createAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: $_model.CreateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlgorithmVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlgorithmVersionResponse({}));
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param request - CreateAlgorithmVersionRequest
   * @returns CreateAlgorithmVersionResponse
   */
  async createAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: $_model.CreateAlgorithmVersionRequest): Promise<$_model.CreateAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  /**
   * 创建WebTerminal
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceWebTerminalResponse
   */
  async createInstanceWebTerminalWithOptions(TrainingJobId: string, InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceWebTerminalResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceWebTerminal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/webterminals`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceWebTerminalResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceWebTerminalResponse({}));
  }

  /**
   * 创建WebTerminal
   * @returns CreateInstanceWebTerminalResponse
   */
  async createInstanceWebTerminal(TrainingJobId: string, InstanceId: string): Promise<$_model.CreateInstanceWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWebTerminalWithOptions(TrainingJobId, InstanceId, headers, runtime);
  }

  /**
   * 创建Quota
   * 
   * @param request - CreateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaResponse
   */
  async createQuotaWithOptions(request: $_model.CreateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allocateStrategy)) {
      body["AllocateStrategy"] = request.allocateStrategy;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.min)) {
      body["Min"] = request.min;
    }

    if (!$dara.isNull(request.parentQuotaId)) {
      body["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!$dara.isNull(request.queueStrategy)) {
      body["QueueStrategy"] = request.queueStrategy;
    }

    if (!$dara.isNull(request.quotaConfig)) {
      body["QuotaConfig"] = request.quotaConfig;
    }

    if (!$dara.isNull(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaResponse({}));
  }

  /**
   * 创建Quota
   * 
   * @param request - CreateQuotaRequest
   * @returns CreateQuotaResponse
   */
  async createQuota(request: $_model.CreateQuotaRequest): Promise<$_model.CreateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: $_model.CreateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computingResourceProvider)) {
      body["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceGroupResponse({}));
  }

  /**
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建TrainingJob
   * 
   * @param request - CreateTrainingJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrainingJobResponse
   */
  async createTrainingJobWithOptions(request: $_model.CreateTrainingJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrainingJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      body["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.algorithmSpec)) {
      body["AlgorithmSpec"] = request.algorithmSpec;
    }

    if (!$dara.isNull(request.algorithmVersion)) {
      body["AlgorithmVersion"] = request.algorithmVersion;
    }

    if (!$dara.isNull(request.codeDir)) {
      body["CodeDir"] = request.codeDir;
    }

    if (!$dara.isNull(request.computeResource)) {
      body["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.environments)) {
      body["Environments"] = request.environments;
    }

    if (!$dara.isNull(request.experimentConfig)) {
      body["ExperimentConfig"] = request.experimentConfig;
    }

    if (!$dara.isNull(request.hyperParameters)) {
      body["HyperParameters"] = request.hyperParameters;
    }

    if (!$dara.isNull(request.inputChannels)) {
      body["InputChannels"] = request.inputChannels;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.outputChannels)) {
      body["OutputChannels"] = request.outputChannels;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.pythonRequirements)) {
      body["PythonRequirements"] = request.pythonRequirements;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.settings)) {
      body["Settings"] = request.settings;
    }

    if (!$dara.isNull(request.trainingJobDescription)) {
      body["TrainingJobDescription"] = request.trainingJobDescription;
    }

    if (!$dara.isNull(request.trainingJobName)) {
      body["TrainingJobName"] = request.trainingJobName;
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
      action: "CreateTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrainingJobResponse({}));
  }

  /**
   * 创建TrainingJob
   * 
   * @param request - CreateTrainingJobRequest
   * @returns CreateTrainingJobResponse
   */
  async createTrainingJob(request: $_model.CreateTrainingJobRequest): Promise<$_model.CreateTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainingJobWithOptions(request, headers, runtime);
  }

  /**
   * 删除算法
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlgorithmResponse
   */
  async deleteAlgorithmWithOptions(AlgorithmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlgorithmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlgorithmResponse({}));
  }

  /**
   * 删除算法
   * @returns DeleteAlgorithmResponse
   */
  async deleteAlgorithm(AlgorithmId: string): Promise<$_model.DeleteAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlgorithmWithOptions(AlgorithmId, headers, runtime);
  }

  /**
   * 删除算法版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlgorithmVersionResponse
   */
  async deleteAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlgorithmVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlgorithmVersionResponse({}));
  }

  /**
   * 删除算法版本
   * @returns DeleteAlgorithmVersionResponse
   */
  async deleteAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string): Promise<$_model.DeleteAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, headers, runtime);
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMachineGroupResponse
   */
  // Deprecated
  async deleteMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMachineGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMachineGroupResponse({}));
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteMachineGroup is deprecated
   * @returns DeleteMachineGroupResponse
   */
  // Deprecated
  async deleteMachineGroup(MachineGroupID: string): Promise<$_model.DeleteMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  /**
   * 删除Quota
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaResponse
   */
  async deleteQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQuotaResponse({}));
  }

  /**
   * 删除Quota
   * @returns DeleteQuotaResponse
   */
  async deleteQuota(QuotaId: string): Promise<$_model.DeleteQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(QuotaId, headers, runtime);
  }

  /**
   * 删除资源组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceGroupResponse({}));
  }

  /**
   * 删除资源组
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(ResourceGroupID: string): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupWithOptions(ResourceGroupID, headers, runtime);
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteResourceGroupMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupMachineGroupResponse
   */
  // Deprecated
  async deleteResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceGroupMachineGroupResponse({}));
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteResourceGroupMachineGroup is deprecated
   * @returns DeleteResourceGroupMachineGroupResponse
   */
  // Deprecated
  async deleteResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string): Promise<$_model.DeleteResourceGroupMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, headers, runtime);
  }

  /**
   * 删除一个TrainingJob
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrainingJobResponse
   */
  async deleteTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrainingJobResponse({}));
  }

  /**
   * 删除一个TrainingJob
   * @returns DeleteTrainingJobResponse
   */
  async deleteTrainingJob(TrainingJobId: string): Promise<$_model.DeleteTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 删除TrainingJob的Labels
   * 
   * @param request - DeleteTrainingJobLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrainingJobLabelsResponse
   */
  async deleteTrainingJobLabelsWithOptions(TrainingJobId: string, request: $_model.DeleteTrainingJobLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrainingJobLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrainingJobLabels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrainingJobLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrainingJobLabelsResponse({}));
  }

  /**
   * 删除TrainingJob的Labels
   * 
   * @param request - DeleteTrainingJobLabelsRequest
   * @returns DeleteTrainingJobLabelsResponse
   */
  async deleteTrainingJobLabels(TrainingJobId: string, request: $_model.DeleteTrainingJobLabelsRequest): Promise<$_model.DeleteTrainingJobLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobLabelsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取一个算法信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlgorithmResponse
   */
  async getAlgorithmWithOptions(AlgorithmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlgorithmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.GetAlgorithmResponse({}));
  }

  /**
   * 获取一个算法信息
   * @returns GetAlgorithmResponse
   */
  async getAlgorithm(AlgorithmId: string): Promise<$_model.GetAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmWithOptions(AlgorithmId, headers, runtime);
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlgorithmVersionResponse
   */
  async getAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlgorithmVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetAlgorithmVersionResponse({}));
  }

  /**
   * 创建一个新的算法版本
   * @returns GetAlgorithmVersionResponse
   */
  async getAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string): Promise<$_model.GetAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, headers, runtime);
  }

  /**
   * get machine group
   * 
   * @deprecated OpenAPI GetMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMachineGroupResponse
   */
  // Deprecated
  async getMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMachineGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetMachineGroupResponse({}));
  }

  /**
   * get machine group
   * 
   * @deprecated OpenAPI GetMachineGroup is deprecated
   * @returns GetMachineGroupResponse
   */
  // Deprecated
  async getMachineGroup(MachineGroupID: string): Promise<$_model.GetMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  /**
   * get resource group node metrics
   * 
   * @deprecated OpenAPI GetNodeMetrics is deprecated
   * 
   * @param request - GetNodeMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeMetricsResponse
   */
  // Deprecated
  async getNodeMetricsWithOptions(ResourceGroupID: string, MetricType: string, request: $_model.GetNodeMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.GPUType)) {
      query["GPUType"] = request.GPUType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/nodemetrics/${$dara.URL.percentEncode(MetricType)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeMetricsResponse({}));
  }

  /**
   * get resource group node metrics
   * 
   * @deprecated OpenAPI GetNodeMetrics is deprecated
   * 
   * @param request - GetNodeMetricsRequest
   * @returns GetNodeMetricsResponse
   */
  // Deprecated
  async getNodeMetrics(ResourceGroupID: string, MetricType: string, request: $_model.GetNodeMetricsRequest): Promise<$_model.GetNodeMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeMetricsWithOptions(ResourceGroupID, MetricType, request, headers, runtime);
  }

  /**
   * 获取Quota
   * 
   * @param request - GetQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaResponse
   */
  async getQuotaWithOptions(QuotaId: string, request: $_model.GetQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaResponse({}));
  }

  /**
   * 获取Quota
   * 
   * @param request - GetQuotaRequest
   * @returns GetQuotaResponse
   */
  async getQuota(QuotaId: string, request: $_model.GetQuotaRequest): Promise<$_model.GetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * get resource group by group id
   * 
   * @param tmpReq - GetResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(ResourceGroupID: string, tmpReq: $_model.GetResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.GetResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isAIWorkspaceDataEnabled)) {
      query["IsAIWorkspaceDataEnabled"] = request.isAIWorkspaceDataEnabled;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupResponse({}));
  }

  /**
   * get resource group by group id
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(ResourceGroupID: string, request: $_model.GetResourceGroupRequest): Promise<$_model.GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * get machine group
   * 
   * @param tmpReq - GetResourceGroupMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupMachineGroupResponse
   */
  async getResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, tmpReq: $_model.GetResourceGroupMachineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupMachineGroupResponse> {
    tmpReq.validate();
    let request = new $_model.GetResourceGroupMachineGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupMachineGroupResponse({}));
  }

  /**
   * get machine group
   * 
   * @param request - GetResourceGroupMachineGroupRequest
   * @returns GetResourceGroupMachineGroupResponse
   */
  async getResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string, request: $_model.GetResourceGroupMachineGroupRequest): Promise<$_model.GetResourceGroupMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, request, headers, runtime);
  }

  /**
   * get resource group requested resource by resource group id
   * 
   * @deprecated OpenAPI GetResourceGroupRequest is deprecated
   * 
   * @param request - GetResourceGroupRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupRequestResponse
   */
  // Deprecated
  async getResourceGroupRequestWithOptions(request: $_model.GetResourceGroupRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.podStatus)) {
      query["PodStatus"] = request.podStatus;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupRequest",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/request`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupRequestResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupRequestResponse({}));
  }

  /**
   * get resource group requested resource by resource group id
   * 
   * @deprecated OpenAPI GetResourceGroupRequest is deprecated
   * 
   * @param request - GetResourceGroupRequestRequest
   * @returns GetResourceGroupRequestResponse
   */
  // Deprecated
  async getResourceGroupRequest(request: $_model.GetResourceGroupRequestRequest): Promise<$_model.GetResourceGroupRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupRequestWithOptions(request, headers, runtime);
  }

  /**
   * get resource group total resource by group id
   * 
   * @param request - GetResourceGroupTotalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupTotalResponse
   */
  async getResourceGroupTotalWithOptions(request: $_model.GetResourceGroupTotalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupTotalResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupTotal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/total`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupTotalResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupTotalResponse({}));
  }

  /**
   * get resource group total resource by group id
   * 
   * @param request - GetResourceGroupTotalRequest
   * @returns GetResourceGroupTotalResponse
   */
  async getResourceGroupTotal(request: $_model.GetResourceGroupTotalRequest): Promise<$_model.GetResourceGroupTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupTotalWithOptions(request, headers, runtime);
  }

  /**
   * 获取抢占式实例历史价格
   * 
   * @param request - GetSpotPriceHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpotPriceHistoryResponse
   */
  async getSpotPriceHistoryWithOptions(InstanceType: string, request: $_model.GetSpotPriceHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpotPriceHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpotPriceHistory",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/spots/${$dara.URL.percentEncode(InstanceType)}/pricehistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpotPriceHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetSpotPriceHistoryResponse({}));
  }

  /**
   * 获取抢占式实例历史价格
   * 
   * @param request - GetSpotPriceHistoryRequest
   * @returns GetSpotPriceHistoryResponse
   */
  async getSpotPriceHistory(InstanceType: string, request: $_model.GetSpotPriceHistoryRequest): Promise<$_model.GetSpotPriceHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSpotPriceHistoryWithOptions(InstanceType, request, headers, runtime);
  }

  /**
   * 调用GetToken获取临时鉴权信息
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

    if (!$dara.isNull(request.trainingJobId)) {
      query["TrainingJobId"] = request.trainingJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2022-01-12",
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
   * 调用GetToken获取临时鉴权信息
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
   * 获取TrainingJob的详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobResponse
   */
  async getTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.GetTrainingJobResponse({}));
  }

  /**
   * 获取TrainingJob的详情
   * @returns GetTrainingJobResponse
   */
  async getTrainingJob(TrainingJobId: string): Promise<$_model.GetTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取Training Job的算法错误信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobErrorInfoResponse
   */
  async getTrainingJobErrorInfoWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrainingJobErrorInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJobErrorInfo",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/errorinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrainingJobErrorInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTrainingJobErrorInfoResponse({}));
  }

  /**
   * 获取Training Job的算法错误信息
   * @returns GetTrainingJobErrorInfoResponse
   */
  async getTrainingJobErrorInfo(TrainingJobId: string): Promise<$_model.GetTrainingJobErrorInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobErrorInfoWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取TrainingJob最近的Metrics
   * 
   * @param request - GetTrainingJobLatestMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobLatestMetricsResponse
   */
  async getTrainingJobLatestMetricsWithOptions(TrainingJobId: string, request: $_model.GetTrainingJobLatestMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrainingJobLatestMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJobLatestMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/latestmetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrainingJobLatestMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetTrainingJobLatestMetricsResponse({}));
  }

  /**
   * 获取TrainingJob最近的Metrics
   * 
   * @param request - GetTrainingJobLatestMetricsRequest
   * @returns GetTrainingJobLatestMetricsResponse
   */
  async getTrainingJobLatestMetrics(TrainingJobId: string, request: $_model.GetTrainingJobLatestMetricsRequest): Promise<$_model.GetTrainingJobLatestMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobLatestMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * get user view  metrics
   * 
   * @deprecated OpenAPI GetUserViewMetrics is deprecated
   * 
   * @param request - GetUserViewMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserViewMetricsResponse
   */
  // Deprecated
  async getUserViewMetricsWithOptions(ResourceGroupID: string, request: $_model.GetUserViewMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserViewMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserViewMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/usermetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserViewMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetUserViewMetricsResponse({}));
  }

  /**
   * get user view  metrics
   * 
   * @deprecated OpenAPI GetUserViewMetrics is deprecated
   * 
   * @param request - GetUserViewMetricsRequest
   * @returns GetUserViewMetricsResponse
   */
  // Deprecated
  async getUserViewMetrics(ResourceGroupID: string, request: $_model.GetUserViewMetricsRequest): Promise<$_model.GetUserViewMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserViewMetricsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * 获取算法的所有版本信息
   * 
   * @param request - ListAlgorithmVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlgorithmVersionsResponse
   */
  async listAlgorithmVersionsWithOptions(AlgorithmId: string, request: $_model.ListAlgorithmVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlgorithmVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlgorithmVersions",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlgorithmVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlgorithmVersionsResponse({}));
  }

  /**
   * 获取算法的所有版本信息
   * 
   * @param request - ListAlgorithmVersionsRequest
   * @returns ListAlgorithmVersionsResponse
   */
  async listAlgorithmVersions(AlgorithmId: string, request: $_model.ListAlgorithmVersionsRequest): Promise<$_model.ListAlgorithmVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmVersionsWithOptions(AlgorithmId, request, headers, runtime);
  }

  /**
   * 获取算法列表
   * 
   * @param request - ListAlgorithmsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlgorithmsResponse
   */
  async listAlgorithmsWithOptions(request: $_model.ListAlgorithmsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlgorithmsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmId)) {
      query["AlgorithmId"] = request.algorithmId;
    }

    if (!$dara.isNull(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlgorithms",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlgorithmsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlgorithmsResponse({}));
  }

  /**
   * 获取算法列表
   * 
   * @param request - ListAlgorithmsRequest
   * @returns ListAlgorithmsResponse
   */
  async listAlgorithms(request: $_model.ListAlgorithmsRequest): Promise<$_model.ListAlgorithmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmsWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源节点列表
   * 
   * @param request - ListNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: $_model.ListNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.availabilityZone)) {
      query["AvailabilityZone"] = request.availabilityZone;
    }

    if (!$dara.isNull(request.filterByQuotaId)) {
      query["FilterByQuotaId"] = request.filterByQuotaId;
    }

    if (!$dara.isNull(request.filterByResourceGroupIds)) {
      query["FilterByResourceGroupIds"] = request.filterByResourceGroupIds;
    }

    if (!$dara.isNull(request.GPUType)) {
      query["GPUType"] = request.GPUType;
    }

    if (!$dara.isNull(request.hyperZone)) {
      query["HyperZone"] = request.hyperZone;
    }

    if (!$dara.isNull(request.machineGroupIds)) {
      query["MachineGroupIds"] = request.machineGroupIds;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.nodeStatuses)) {
      query["NodeStatuses"] = request.nodeStatuses;
    }

    if (!$dara.isNull(request.nodeTypes)) {
      query["NodeTypes"] = request.nodeTypes;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderStatuses)) {
      query["OrderStatuses"] = request.orderStatuses;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.reasonCodes)) {
      query["ReasonCodes"] = request.reasonCodes;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * 获取资源节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodesWithOptions(request, headers, runtime);
  }

  /**
   * 您可以通过此API获取Quota上的任务信息列表
   * 
   * @param request - ListQuotaWorkloadsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaWorkloadsResponse
   */
  async listQuotaWorkloadsWithOptions(QuotaId: string, request: $_model.ListQuotaWorkloadsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaWorkloadsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beforeWorkloadId)) {
      query["BeforeWorkloadId"] = request.beforeWorkloadId;
    }

    if (!$dara.isNull(request.gmtDequeuedTimeRange)) {
      query["GmtDequeuedTimeRange"] = request.gmtDequeuedTimeRange;
    }

    if (!$dara.isNull(request.gmtEnqueuedTimeRange)) {
      query["GmtEnqueuedTimeRange"] = request.gmtEnqueuedTimeRange;
    }

    if (!$dara.isNull(request.gmtPositionModifiedTimeRange)) {
      query["GmtPositionModifiedTimeRange"] = request.gmtPositionModifiedTimeRange;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
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

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subQuotaIds)) {
      query["SubQuotaIds"] = request.subQuotaIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.withHistoricalData)) {
      query["WithHistoricalData"] = request.withHistoricalData;
    }

    if (!$dara.isNull(request.workloadCreatedTimeRange)) {
      query["WorkloadCreatedTimeRange"] = request.workloadCreatedTimeRange;
    }

    if (!$dara.isNull(request.workloadIds)) {
      query["WorkloadIds"] = request.workloadIds;
    }

    if (!$dara.isNull(request.workloadStatuses)) {
      query["WorkloadStatuses"] = request.workloadStatuses;
    }

    if (!$dara.isNull(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaWorkloads",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}/workloads`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaWorkloadsResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaWorkloadsResponse({}));
  }

  /**
   * 您可以通过此API获取Quota上的任务信息列表
   * 
   * @param request - ListQuotaWorkloadsRequest
   * @returns ListQuotaWorkloadsResponse
   */
  async listQuotaWorkloads(QuotaId: string, request: $_model.ListQuotaWorkloadsRequest): Promise<$_model.ListQuotaWorkloadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaWorkloadsWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 获取Quota列表
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: $_model.ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.layoutMode)) {
      query["LayoutMode"] = request.layoutMode;
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

    if (!$dara.isNull(request.parentQuotaId)) {
      query["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!$dara.isNull(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!$dara.isNull(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotasResponse({}));
  }

  /**
   * 获取Quota列表
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: $_model.ListQuotasRequest): Promise<$_model.ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * list machine groups
   * 
   * @param request - ListResourceGroupMachineGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupMachineGroupsResponse
   */
  async listResourceGroupMachineGroupsWithOptions(ResourceGroupID: string, request: $_model.ListResourceGroupMachineGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupMachineGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creatorID)) {
      query["CreatorID"] = request.creatorID;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      query["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.machineGroupIDs)) {
      query["MachineGroupIDs"] = request.machineGroupIDs;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderInstanceId)) {
      query["OrderInstanceId"] = request.orderInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentDuration)) {
      query["PaymentDuration"] = request.paymentDuration;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      query["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroupMachineGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupMachineGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupMachineGroupsResponse({}));
  }

  /**
   * list machine groups
   * 
   * @param request - ListResourceGroupMachineGroupsRequest
   * @returns ListResourceGroupMachineGroupsResponse
   */
  async listResourceGroupMachineGroups(ResourceGroupID: string, request: $_model.ListResourceGroupMachineGroupsRequest): Promise<$_model.ListResourceGroupMachineGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupMachineGroupsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * list resource group
   * 
   * @param request - ListResourceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(request: $_model.ListResourceGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computingResourceProvider)) {
      query["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.resourceGroupIDs)) {
      query["ResourceGroupIDs"] = request.resourceGroupIDs;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.showAll)) {
      query["ShowAll"] = request.showAll;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsResponse({}));
  }

  /**
   * list resource group
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定TrainingJob的事件。
   * 
   * @param request - ListTrainingJobEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobEventsResponse
   */
  async listTrainingJobEventsWithOptions(TrainingJobId: string, request: $_model.ListTrainingJobEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobEvents",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobEventsResponse({}));
  }

  /**
   * 获取指定TrainingJob的事件。
   * 
   * @param request - ListTrainingJobEventsRequest
   * @returns ListTrainingJobEventsResponse
   */
  async listTrainingJobEvents(TrainingJobId: string, request: $_model.ListTrainingJobEventsRequest): Promise<$_model.ListTrainingJobEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobEventsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取指定Instance（TrainingJob的运行单元）的日志。
   * 
   * @param request - ListTrainingJobInstanceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobInstanceEventsResponse
   */
  async listTrainingJobInstanceEventsWithOptions(TrainingJobId: string, InstanceId: string, request: $_model.ListTrainingJobInstanceEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobInstanceEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobInstanceEvents",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobInstanceEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobInstanceEventsResponse({}));
  }

  /**
   * 获取指定Instance（TrainingJob的运行单元）的日志。
   * 
   * @param request - ListTrainingJobInstanceEventsRequest
   * @returns ListTrainingJobInstanceEventsResponse
   */
  async listTrainingJobInstanceEvents(TrainingJobId: string, InstanceId: string, request: $_model.ListTrainingJobInstanceEventsRequest): Promise<$_model.ListTrainingJobInstanceEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobInstanceEventsWithOptions(TrainingJobId, InstanceId, request, headers, runtime);
  }

  /**
   * 获取Training Job实例的Metrics
   * 
   * @param request - ListTrainingJobInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobInstanceMetricsResponse
   */
  async listTrainingJobInstanceMetricsWithOptions(TrainingJobId: string, request: $_model.ListTrainingJobInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobInstanceMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobInstanceMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instancemetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobInstanceMetricsResponse({}));
  }

  /**
   * 获取Training Job实例的Metrics
   * 
   * @param request - ListTrainingJobInstanceMetricsRequest
   * @returns ListTrainingJobInstanceMetricsResponse
   */
  async listTrainingJobInstanceMetrics(TrainingJobId: string, request: $_model.ListTrainingJobInstanceMetricsRequest): Promise<$_model.ListTrainingJobInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobInstanceMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job的日志
   * 
   * @param request - ListTrainingJobLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobLogsResponse
   */
  async listTrainingJobLogsWithOptions(TrainingJobId: string, request: $_model.ListTrainingJobLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobLogs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobLogsResponse({}));
  }

  /**
   * 获取Training Job的日志
   * 
   * @param request - ListTrainingJobLogsRequest
   * @returns ListTrainingJobLogsResponse
   */
  async listTrainingJobLogs(TrainingJobId: string, request: $_model.ListTrainingJobLogsRequest): Promise<$_model.ListTrainingJobLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobLogsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job的Metrics
   * 
   * @param request - ListTrainingJobMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobMetricsResponse
   */
  async listTrainingJobMetricsWithOptions(TrainingJobId: string, request: $_model.ListTrainingJobMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobMetricsResponse({}));
  }

  /**
   * 获取Training Job的Metrics
   * 
   * @param request - ListTrainingJobMetricsRequest
   * @returns ListTrainingJobMetricsResponse
   */
  async listTrainingJobMetrics(TrainingJobId: string, request: $_model.ListTrainingJobMetricsRequest): Promise<$_model.ListTrainingJobMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job 产出的所有模型信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobOutputModelsResponse
   */
  async listTrainingJobOutputModelsWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobOutputModelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobOutputModels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/outputmodels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobOutputModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobOutputModelsResponse({}));
  }

  /**
   * 获取Training Job 产出的所有模型信息
   * @returns ListTrainingJobOutputModelsResponse
   */
  async listTrainingJobOutputModels(TrainingJobId: string): Promise<$_model.ListTrainingJobOutputModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobOutputModelsWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取TrainingJob的列表
   * 
   * @param tmpReq - ListTrainingJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobsResponse
   */
  async listTrainingJobsWithOptions(tmpReq: $_model.ListTrainingJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrainingJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTrainingJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isTempAlgo)) {
      query["IsTempAlgo"] = request.isTempAlgo;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.trainingJobId)) {
      query["TrainingJobId"] = request.trainingJobId;
    }

    if (!$dara.isNull(request.trainingJobName)) {
      query["TrainingJobName"] = request.trainingJobName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrainingJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrainingJobsResponse({}));
  }

  /**
   * 获取TrainingJob的列表
   * 
   * @param request - ListTrainingJobsRequest
   * @returns ListTrainingJobsResponse
   */
  async listTrainingJobs(request: $_model.ListTrainingJobsRequest): Promise<$_model.ListTrainingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobsWithOptions(request, headers, runtime);
  }

  /**
   * 扩缩容Quota
   * 
   * @param request - ScaleQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleQuotaResponse
   */
  async scaleQuotaWithOptions(QuotaId: string, request: $_model.ScaleQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.min)) {
      body["Min"] = request.min;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}/action/scale`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleQuotaResponse>(await this.callApi(params, req, runtime), new $_model.ScaleQuotaResponse({}));
  }

  /**
   * 扩缩容Quota
   * 
   * @param request - ScaleQuotaRequest
   * @returns ScaleQuotaResponse
   */
  async scaleQuota(QuotaId: string, request: $_model.ScaleQuotaRequest): Promise<$_model.ScaleQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 停止一个TrainingJob
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrainingJobResponse
   */
  async stopTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.StopTrainingJobResponse({}));
  }

  /**
   * 停止一个TrainingJob
   * @returns StopTrainingJobResponse
   */
  async stopTrainingJob(TrainingJobId: string): Promise<$_model.StopTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlgorithmResponse
   */
  async updateAlgorithmWithOptions(AlgorithmId: string, request: $_model.UpdateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlgorithmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlgorithmResponse({}));
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmRequest
   * @returns UpdateAlgorithmResponse
   */
  async updateAlgorithm(AlgorithmId: string, request: $_model.UpdateAlgorithmRequest): Promise<$_model.UpdateAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmWithOptions(AlgorithmId, request, headers, runtime);
  }

  /**
   * 更新算法
   * 
   * @param tmpReq - UpdateAlgorithmVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlgorithmVersionResponse
   */
  async updateAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: $_model.UpdateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlgorithmVersionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlgorithmVersionResponse({}));
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmVersionRequest
   * @returns UpdateAlgorithmVersionResponse
   */
  async updateAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: $_model.UpdateAlgorithmVersionRequest): Promise<$_model.UpdateAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  /**
   * 更新Quota
   * 
   * @param request - UpdateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaResponse
   */
  async updateQuotaWithOptions(QuotaId: string, request: $_model.UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.queueStrategy)) {
      body["QueueStrategy"] = request.queueStrategy;
    }

    if (!$dara.isNull(request.quotaConfig)) {
      body["QuotaConfig"] = request.quotaConfig;
    }

    if (!$dara.isNull(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaResponse({}));
  }

  /**
   * 更新Quota
   * 
   * @param request - UpdateQuotaRequest
   * @returns UpdateQuotaResponse
   */
  async updateQuota(QuotaId: string, request: $_model.UpdateQuotaRequest): Promise<$_model.UpdateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 更新Resource Group
   * 
   * @param request - UpdateResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(ResourceGroupID: string, request: $_model.UpdateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.unbind)) {
      body["Unbind"] = request.unbind;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceGroupResponse({}));
  }

  /**
   * 更新Resource Group
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(ResourceGroupID: string, request: $_model.UpdateResourceGroupRequest): Promise<$_model.UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * 更新一个TrainingJob的Labels
   * 
   * @param request - UpdateTrainingJobLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrainingJobLabelsResponse
   */
  async updateTrainingJobLabelsWithOptions(TrainingJobId: string, request: $_model.UpdateTrainingJobLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrainingJobLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrainingJobLabels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrainingJobLabelsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrainingJobLabelsResponse({}));
  }

  /**
   * 更新一个TrainingJob的Labels
   * 
   * @param request - UpdateTrainingJobLabelsRequest
   * @returns UpdateTrainingJobLabelsResponse
   */
  async updateTrainingJobLabels(TrainingJobId: string, request: $_model.UpdateTrainingJobLabelsRequest): Promise<$_model.UpdateTrainingJobLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrainingJobLabelsWithOptions(TrainingJobId, request, headers, runtime);
  }

}
