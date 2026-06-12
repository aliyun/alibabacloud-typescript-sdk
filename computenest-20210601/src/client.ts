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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("computenest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels a service usage request.
   * 
   * @param request - CancelServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelServiceUsageResponse
   */
  async cancelServiceUsageWithOptions(request: $_model.CancelServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.needDelete)) {
      query["NeedDelete"] = request.needDelete;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.CancelServiceUsageResponse({}));
  }

  /**
   * Cancels a service usage request.
   * 
   * @param request - CancelServiceUsageRequest
   * @returns CancelServiceUsageResponse
   */
  async cancelServiceUsage(request: $_model.CancelServiceUsageRequest): Promise<$_model.CancelServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelServiceUsageWithOptions(request, runtime);
  }

  /**
   * Changes the resource group for a cloud resource.
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
      version: "2021-06-01",
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
   * Changes the resource group for a cloud resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Performs a precheck to verify that a service instance can be deployed.
   * 
   * @param request - CheckServiceDeployableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceDeployableResponse
   */
  async checkServiceDeployableWithOptions(request: $_model.CheckServiceDeployableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceDeployableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.postPaidAmount)) {
      query["PostPaidAmount"] = request.postPaidAmount;
    }

    if (!$dara.isNull(request.prePaidAmount)) {
      query["PrePaidAmount"] = request.prePaidAmount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceDeployable",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceDeployableResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceDeployableResponse({}));
  }

  /**
   * Performs a precheck to verify that a service instance can be deployed.
   * 
   * @param request - CheckServiceDeployableRequest
   * @returns CheckServiceDeployableResponse
   */
  async checkServiceDeployable(request: $_model.CheckServiceDeployableRequest): Promise<$_model.CheckServiceDeployableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceDeployableWithOptions(request, runtime);
  }

  /**
   * If a service instance fails to deploy, you can call the ContinueDeployServiceInstance operation to resume the deployment.
   * 
   * @remarks
   * If a private service instance that uses the ROS deployment type fails to deploy, you can call the ContinueDeployServiceInstance operation to resume the deployment.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstanceWithOptions(request: $_model.ContinueDeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueDeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueDeployServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinueDeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ContinueDeployServiceInstanceResponse({}));
  }

  /**
   * If a service instance fails to deploy, you can call the ContinueDeployServiceInstance operation to resume the deployment.
   * 
   * @remarks
   * If a private service instance that uses the ROS deployment type fails to deploy, you can call the ContinueDeployServiceInstance operation to resume the deployment.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: $_model.ContinueDeployServiceInstanceRequest): Promise<$_model.ContinueDeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a backup for a Compute Nest service instance.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and configured the corresponding parameters when the service was created.
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackup",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupResponse({}));
  }

  /**
   * Creates a backup for a Compute Nest service instance.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and configured the corresponding parameters when the service was created.
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates a restore job.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when the service was created.
   * 
   * @param request - CreateRestoreTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestoreTaskResponse
   */
  async createRestoreTaskWithOptions(request: $_model.CreateRestoreTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRestoreTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRestoreTask",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRestoreTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRestoreTaskResponse({}));
  }

  /**
   * Creates a restore job.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when the service was created.
   * 
   * @param request - CreateRestoreTaskRequest
   * @returns CreateRestoreTaskResponse
   */
  async createRestoreTask(request: $_model.CreateRestoreTaskRequest): Promise<$_model.CreateRestoreTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRestoreTaskWithOptions(request, runtime);
  }

  /**
   * Creates and deploys a service instance in Compute Nest by specifying parameters such as a region ID, a service instance name, and a service ID.
   * 
   * @param tmpReq - CreateServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstanceWithOptions(tmpReq: $_model.CreateServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableInstanceOps)) {
      query["EnableInstanceOps"] = request.enableInstanceOps;
    }

    if (!$dara.isNull(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAutoPay)) {
      query["ResourceAutoPay"] = request.resourceAutoPay;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationCode)) {
      query["SpecificationCode"] = request.specificationCode;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceInstanceResponse({}));
  }

  /**
   * Creates and deploys a service instance in Compute Nest by specifying parameters such as a region ID, a service instance name, and a service ID.
   * 
   * @param request - CreateServiceInstanceRequest
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstance(request: $_model.CreateServiceInstanceRequest): Promise<$_model.CreateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a service usage request.
   * 
   * @param tmpReq - CreateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsageWithOptions(tmpReq: $_model.CreateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceUsageResponse> {
    tmpReq.validate();
    let request = new $_model.CreateServiceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInformation)) {
      request.userInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInformation, "UserInformation", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userInformationShrink)) {
      query["UserInformation"] = request.userInformationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceUsageResponse({}));
  }

  /**
   * Creates a service usage request.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: $_model.CreateServiceUsageRequest): Promise<$_model.CreateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * Creates a Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before you begin, ensure that the service provider has enabled the modification feature and configured its parameters during service creation.
   * 
   * @param request - CreateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillResponse
   */
  async createSkillWithOptions(request: $_model.CreateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
    }

    if (!$dara.isNull(request.skillDescription)) {
      query["SkillDescription"] = request.skillDescription;
    }

    if (!$dara.isNull(request.skillLabels)) {
      query["SkillLabels"] = request.skillLabels;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillSpaceId)) {
      query["SkillSpaceId"] = request.skillSpaceId;
    }

    if (!$dara.isNull(request.sourceSkillId)) {
      query["SourceSkillId"] = request.sourceSkillId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
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
      action: "CreateSkill",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillResponse({}));
  }

  /**
   * Creates a Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before you begin, ensure that the service provider has enabled the modification feature and configured its parameters during service creation.
   * 
   * @param request - CreateSkillRequest
   * @returns CreateSkillResponse
   */
  async createSkill(request: $_model.CreateSkillRequest): Promise<$_model.CreateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillWithOptions(request, runtime);
  }

  /**
   * Creates a Skill file detection task.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modification feature and configured its parameters during service creation.
   * 
   * @param request - CreateSkillFileDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillFileDetectResponse
   */
  async createSkillFileDetectWithOptions(request: $_model.CreateSkillFileDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillFileDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
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
      action: "CreateSkillFileDetect",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillFileDetectResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillFileDetectResponse({}));
  }

  /**
   * Creates a Skill file detection task.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modification feature and configured its parameters during service creation.
   * 
   * @param request - CreateSkillFileDetectRequest
   * @returns CreateSkillFileDetectResponse
   */
  async createSkillFileDetect(request: $_model.CreateSkillFileDetectRequest): Promise<$_model.CreateSkillFileDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillFileDetectWithOptions(request, runtime);
  }

  /**
   * Creates a SkillHub config.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modify configuration feature and set the required parameters.
   * 
   * @param request - CreateSkillHubConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillHubConfigResponse
   */
  async createSkillHubConfigWithOptions(request: $_model.CreateSkillHubConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillHubConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossRegionId)) {
      query["OssRegionId"] = request.ossRegionId;
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
      action: "CreateSkillHubConfig",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillHubConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillHubConfigResponse({}));
  }

  /**
   * Creates a SkillHub config.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modify configuration feature and set the required parameters.
   * 
   * @param request - CreateSkillHubConfigRequest
   * @returns CreateSkillHubConfigResponse
   */
  async createSkillHubConfig(request: $_model.CreateSkillHubConfigRequest): Promise<$_model.CreateSkillHubConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillHubConfigWithOptions(request, runtime);
  }

  /**
   * Creates a skill space.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the modify configuration feature and set the required parameters during service creation.
   * 
   * @param request - CreateSkillSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillSpaceResponse
   */
  async createSkillSpaceWithOptions(request: $_model.CreateSkillSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillSpaceDescription)) {
      query["SkillSpaceDescription"] = request.skillSpaceDescription;
    }

    if (!$dara.isNull(request.skillSpaceName)) {
      query["SkillSpaceName"] = request.skillSpaceName;
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
      action: "CreateSkillSpace",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillSpaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillSpaceResponse({}));
  }

  /**
   * Creates a skill space.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the modify configuration feature and set the required parameters during service creation.
   * 
   * @param request - CreateSkillSpaceRequest
   * @returns CreateSkillSpaceResponse
   */
  async createSkillSpace(request: $_model.CreateSkillSpaceRequest): Promise<$_model.CreateSkillSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillSpaceWithOptions(request, runtime);
  }

  /**
   * Deletes a Compute Nest instance backup.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and configured the upgrade/downgrade parameters when the service was created.
   * 
   * @param request - DeleteBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupResponse
   */
  async deleteBackupWithOptions(request: $_model.DeleteBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackup",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupResponse({}));
  }

  /**
   * Deletes a Compute Nest instance backup.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and configured the upgrade/downgrade parameters when the service was created.
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * Deletes the specified service instances in a region.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(request: $_model.DeleteServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceInstancesResponse({}));
  }

  /**
   * Deletes the specified service instances in a region.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: $_model.DeleteServiceInstancesRequest): Promise<$_model.DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a skill.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the modification feature and configured the modification parameters when creating the service.
   * 
   * @param request - DeleteSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillResponse
   */
  async deleteSkillWithOptions(request: $_model.DeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
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
      action: "DeleteSkill",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
  }

  /**
   * Deletes a skill.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the modification feature and configured the modification parameters when creating the service.
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillWithOptions(request, runtime);
  }

  /**
   * Deletes a SkillSpace.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the modify configuration feature and set the required parameters during service creation.
   * 
   * @param request - DeleteSkillSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillSpaceResponse
   */
  async deleteSkillSpaceWithOptions(request: $_model.DeleteSkillSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillSpaceId)) {
      query["SkillSpaceId"] = request.skillSpaceId;
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
      action: "DeleteSkillSpace",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillSpaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillSpaceResponse({}));
  }

  /**
   * Deletes a SkillSpace.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the modify configuration feature and set the required parameters during service creation.
   * 
   * @param request - DeleteSkillSpaceRequest
   * @returns DeleteSkillSpaceResponse
   */
  async deleteSkillSpace(request: $_model.DeleteSkillSpaceRequest): Promise<$_model.DeleteSkillSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillSpaceWithOptions(request, runtime);
  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstanceWithOptions(request: $_model.DeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeployServiceInstanceResponse({}));
  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: $_model.DeployServiceInstanceRequest): Promise<$_model.DeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the available regions.
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
      version: "2021-06-01",
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
   * Queries the available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Check for missing access policies before you create a service instance.
   * 
   * @param tmpReq - GenerateServicePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicyWithOptions(tmpReq: $_model.GenerateServicePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateServicePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateServicePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateServicePolicy",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateServicePolicyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateServicePolicyResponse({}));
  }

  /**
   * Check for missing access policies before you create a service instance.
   * 
   * @param request - GenerateServicePolicyRequest
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicy(request: $_model.GenerateServicePolicyRequest): Promise<$_model.GenerateServicePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateServicePolicyWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a backup.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when the service was created.
   * 
   * @param request - GetBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupResponse
   */
  async getBackupWithOptions(request: $_model.GetBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackup",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBackupResponse>(await this.callApi(params, req, runtime), new $_model.GetBackupResponse({}));
  }

  /**
   * Retrieves the details of a backup.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when the service was created.
   * 
   * @param request - GetBackupRequest
   * @returns GetBackupResponse
   */
  async getBackup(request: $_model.GetBackupRequest): Promise<$_model.GetBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupWithOptions(request, runtime);
  }

  /**
   * Returns a list of available zones for a specified region.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and set the related parameters when the service was created.
   * 
   * @param request - GetNetworkAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkAvailableZonesResponse
   */
  async getNetworkAvailableZonesWithOptions(request: $_model.GetNetworkAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkAvailableZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isPoc)) {
      body["IsPoc"] = request.isPoc;
    }

    if (!$dara.isNull(request.networkRegionId)) {
      body["NetworkRegionId"] = request.networkRegionId;
    }

    if (!$dara.isNull(request.privateVpcConnectionMode)) {
      body["PrivateVpcConnectionMode"] = request.privateVpcConnectionMode;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceEndpointServiceType)) {
      body["ServiceInstanceEndpointServiceType"] = request.serviceInstanceEndpointServiceType;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      body["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      body["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkAvailableZones",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkAvailableZonesResponse({}));
  }

  /**
   * Returns a list of available zones for a specified region.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade/downgrade feature and set the related parameters when the service was created.
   * 
   * @param request - GetNetworkAvailableZonesRequest
   * @returns GetNetworkAvailableZonesResponse
   */
  async getNetworkAvailableZones(request: $_model.GetNetworkAvailableZonesRequest): Promise<$_model.GetNetworkAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkAvailableZonesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified service.
   * 
   * @param request - GetServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: $_model.GetServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.showDetails)) {
      query["ShowDetails"] = request.showDetails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * Retrieves the details of a specified service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: $_model.GetServiceRequest): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated cost of creating a service instance.
   * 
   * @param tmpReq - GetServiceEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCostWithOptions(tmpReq: $_model.GetServiceEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEstimateCostResponse> {
    tmpReq.validate();
    let request = new $_model.GetServiceEstimateCostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceEstimateCost",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceEstimateCostResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceEstimateCostResponse({}));
  }

  /**
   * Queries the estimated cost of creating a service instance.
   * 
   * @param request - GetServiceEstimateCostRequest
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: $_model.GetServiceEstimateCostRequest): Promise<$_model.GetServiceEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the details of a service instance by its region ID, service instance ID, or Alibaba Cloud Marketplace instance ID. The returned information includes the service status, template name, and a list of resources.
   * 
   * @param request - GetServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: $_model.GetServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marketInstanceId)) {
      query["MarketInstanceId"] = request.marketInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceInstanceResponse({}));
  }

  /**
   * Queries the details of a service instance by its region ID, service instance ID, or Alibaba Cloud Marketplace instance ID. The returned information includes the service status, template name, and a list of resources.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: $_model.GetServiceInstanceRequest): Promise<$_model.GetServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated renewal cost of subscription resources in a privately deployed service instance. You can query the cost for all resources associated with a service instance ID, or for a specific set of resources.
   * 
   * @param request - GetServiceInstanceSubscriptionEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceSubscriptionEstimateCostResponse
   */
  async getServiceInstanceSubscriptionEstimateCostWithOptions(request: $_model.GetServiceInstanceSubscriptionEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceInstanceSubscriptionEstimateCostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourcePeriod)) {
      query["ResourcePeriod"] = request.resourcePeriod;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceInstanceSubscriptionEstimateCost",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceInstanceSubscriptionEstimateCostResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceInstanceSubscriptionEstimateCostResponse({}));
  }

  /**
   * Queries the estimated renewal cost of subscription resources in a privately deployed service instance. You can query the cost for all resources associated with a service instance ID, or for a specific set of resources.
   * 
   * @param request - GetServiceInstanceSubscriptionEstimateCostRequest
   * @returns GetServiceInstanceSubscriptionEstimateCostResponse
   */
  async getServiceInstanceSubscriptionEstimateCost(request: $_model.GetServiceInstanceSubscriptionEstimateCostRequest): Promise<$_model.GetServiceInstanceSubscriptionEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceSubscriptionEstimateCostWithOptions(request, runtime);
  }

  /**
   * Retrieves the provisions of a service, such as its activation status and service roles.
   * 
   * @param tmpReq - GetServiceProvisionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisionsWithOptions(tmpReq: $_model.GetServiceProvisionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceProvisionsResponse> {
    tmpReq.validate();
    let request = new $_model.GetServiceProvisionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvisions",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceProvisionsResponse({}));
  }

  /**
   * Retrieves the provisions of a service, such as its activation status and service roles.
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: $_model.GetServiceProvisionsRequest): Promise<$_model.GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries the parameter constraints for a Resource Orchestration Service (ROS) template in a specified region using the template name and service ID.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraintsWithOptions(request: $_model.GetServiceTemplateParameterConstraintsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceTemplateParameterConstraintsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!$dara.isNull(request.enablePrivateVpcConnection)) {
      query["EnablePrivateVpcConnection"] = request.enablePrivateVpcConnection;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceTemplateParameterConstraintsResponse({}));
  }

  /**
   * Queries the parameter constraints for a Resource Orchestration Service (ROS) template in a specified region using the template name and service ID.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: $_model.GetServiceTemplateParameterConstraintsRequest): Promise<$_model.GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before calling this operation, ensure that the service provider enabled the modification feature and configured the required parameters during service creation.
   * 
   * @param request - GetSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillResponse
   */
  async getSkillWithOptions(request: $_model.GetSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkill",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillResponse({}));
  }

  /**
   * Queries the details of a Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before calling this operation, ensure that the service provider enabled the modification feature and configured the required parameters during service creation.
   * 
   * @param request - GetSkillRequest
   * @returns GetSkillResponse
   */
  async getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillWithOptions(request, runtime);
  }

  /**
   * Retrieves the result of a Skill file detection task.
   * 
   * @remarks
   * ### Prerequisites
   * This operation is available only if the service provider enabled the modification feature and configured the relevant parameters during service creation.
   * 
   * @param request - GetSkillFileDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillFileDetectResultResponse
   */
  async getSkillFileDetectResultWithOptions(request: $_model.GetSkillFileDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillFileDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hashKey)) {
      query["HashKey"] = request.hashKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillFileDetectResult",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillFileDetectResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillFileDetectResultResponse({}));
  }

  /**
   * Retrieves the result of a Skill file detection task.
   * 
   * @remarks
   * ### Prerequisites
   * This operation is available only if the service provider enabled the modification feature and configured the relevant parameters during service creation.
   * 
   * @param request - GetSkillFileDetectResultRequest
   * @returns GetSkillFileDetectResultResponse
   */
  async getSkillFileDetectResult(request: $_model.GetSkillFileDetectResultRequest): Promise<$_model.GetSkillFileDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillFileDetectResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the SkillHub configuration.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the modification feature and configured its parameters when creating the service.
   * 
   * @param request - GetSkillHubConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillHubConfigResponse
   */
  async getSkillHubConfigWithOptions(request: $_model.GetSkillHubConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillHubConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillHubConfig",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillHubConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillHubConfigResponse({}));
  }

  /**
   * Retrieves the SkillHub configuration.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the modification feature and configured its parameters when creating the service.
   * 
   * @param request - GetSkillHubConfigRequest
   * @returns GetSkillHubConfigResponse
   */
  async getSkillHubConfig(request: $_model.GetSkillHubConfigRequest): Promise<$_model.GetSkillHubConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillHubConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a SkillSpace.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modification feature and configured the modification parameters for the service.
   * 
   * @param request - GetSkillSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillSpaceResponse
   */
  async getSkillSpaceWithOptions(request: $_model.GetSkillSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillSpaceId)) {
      query["SkillSpaceId"] = request.skillSpaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillSpace",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillSpaceResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillSpaceResponse({}));
  }

  /**
   * Retrieves the details of a SkillSpace.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the modification feature and configured the modification parameters for the service.
   * 
   * @param request - GetSkillSpaceRequest
   * @returns GetSkillSpaceResponse
   */
  async getSkillSpace(request: $_model.GetSkillSpaceRequest): Promise<$_model.GetSkillSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillSpaceWithOptions(request, runtime);
  }

  /**
   * Queries user information.
   * 
   * @param request - GetUserInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInformationResponse
   */
  async getUserInformationWithOptions(request: $_model.GetUserInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInformation",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetUserInformationResponse({}));
  }

  /**
   * Queries user information.
   * 
   * @param request - GetUserInformationRequest
   * @returns GetUserInformationResponse
   */
  async getUserInformation(request: $_model.GetUserInformationRequest): Promise<$_model.GetUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserInformationWithOptions(request, runtime);
  }

  /**
   * Queries a list of backups for Compute Nest service instances.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured the related parameters when the service was created.
   * 
   * @param request - ListBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackupsResponse
   */
  async listBackupsWithOptions(request: $_model.ListBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
      action: "ListBackups",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBackupsResponse>(await this.callApi(params, req, runtime), new $_model.ListBackupsResponse({}));
  }

  /**
   * Queries a list of backups for Compute Nest service instances.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured the related parameters when the service was created.
   * 
   * @param request - ListBackupsRequest
   * @returns ListBackupsResponse
   */
  async listBackups(request: $_model.ListBackupsRequest): Promise<$_model.ListBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackupsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of access policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * Retrieves a list of access policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Lists public skills.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the change specification feature and configured the relevant parameters during service creation.
   * 
   * @param request - ListPublicSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicSkillsResponse
   */
  async listPublicSkillsWithOptions(request: $_model.ListPublicSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublicSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needDownloadUrl)) {
      query["NeedDownloadUrl"] = request.needDownloadUrl;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicSkills",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublicSkillsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ListPublicSkillsResponse({}));
  }

  /**
   * Lists public skills.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the change specification feature and configured the relevant parameters during service creation.
   * 
   * @param request - ListPublicSkillsRequest
   * @returns ListPublicSkillsResponse
   */
  async listPublicSkills(request: $_model.ListPublicSkillsRequest): Promise<$_model.ListPublicSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicSkillsWithOptions(request, runtime);
  }

  /**
   * Queries a list of restore jobs.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when creating the service.
   * 
   * @param request - ListRestoreTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRestoreTasksResponse
   */
  async listRestoreTasksWithOptions(request: $_model.ListRestoreTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRestoreTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
      action: "ListRestoreTasks",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRestoreTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListRestoreTasksResponse({}));
  }

  /**
   * Queries a list of restore jobs.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the upgrade and downgrade feature and configured its parameters when creating the service.
   * 
   * @param request - ListRestoreTasksRequest
   * @returns ListRestoreTasksResponse
   */
  async listRestoreTasks(request: $_model.ListRestoreTasksRequest): Promise<$_model.ListRestoreTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRestoreTasksWithOptions(request, runtime);
  }

  /**
   * Lists the available service categories.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategoriesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceCategoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceCategories",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceCategoriesResponse({}));
  }

  /**
   * Lists the available service categories.
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategories(): Promise<$_model.ListServiceCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceCategoriesWithOptions(runtime);
  }

  /**
   * Call the ListServiceInstanceBill operation to query bills for service instances.
   * 
   * @param request - ListServiceInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceBillResponse
   */
  async listServiceInstanceBillWithOptions(request: $_model.ListServiceInstanceBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceBill",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceBillResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceBillResponse({}));
  }

  /**
   * Call the ListServiceInstanceBill operation to query bills for service instances.
   * 
   * @param request - ListServiceInstanceBillRequest
   * @returns ListServiceInstanceBillResponse
   */
  async listServiceInstanceBill(request: $_model.ListServiceInstanceBillRequest): Promise<$_model.ListServiceInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceBillWithOptions(request, runtime);
  }

  /**
   * Retrieves the deployment and upgrade logs of a service instance.
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogsWithOptions(request: $_model.ListServiceInstanceLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.logSource)) {
      query["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.logstore)) {
      query["Logstore"] = request.logstore;
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

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceLogs",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceLogsResponse({}));
  }

  /**
   * Retrieves the deployment and upgrade logs of a service instance.
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogs(request: $_model.ListServiceInstanceLogsRequest): Promise<$_model.ListServiceInstanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  /**
   * Queries the resources of a service instance based on parameters such as the service instance ID, Alibaba Cloud Resource Name (ARN), and region ID.
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResourcesWithOptions(request: $_model.ListServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceInstanceResourceType)) {
      query["ServiceInstanceResourceType"] = request.serviceInstanceResourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceResourcesResponse({}));
  }

  /**
   * Queries the resources of a service instance based on parameters such as the service instance ID, Alibaba Cloud Resource Name (ARN), and region ID.
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResources(request: $_model.ListServiceInstanceResourcesRequest): Promise<$_model.ListServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * You can call ListServiceInstanceUpgradeHistory to query the upgrade history of a service instance.
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistoryWithOptions(request: $_model.ListServiceInstanceUpgradeHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceUpgradeHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceUpgradeHistory",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceUpgradeHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceUpgradeHistoryResponse({}));
  }

  /**
   * You can call ListServiceInstanceUpgradeHistory to query the upgrade history of a service instance.
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistory(request: $_model.ListServiceInstanceUpgradeHistoryRequest): Promise<$_model.ListServiceInstanceUpgradeHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceUpgradeHistoryWithOptions(request, runtime);
  }

  /**
   * Queries service instances for your account in a specified region.
   * 
   * @param request - ListServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(request: $_model.ListServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstancesResponse({}));
  }

  /**
   * Queries service instances for your account in a specified region.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: $_model.ListServiceInstancesRequest): Promise<$_model.ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Queries your service usages.
   * 
   * @param request - ListServiceUsagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: $_model.ListServiceUsagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceUsagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceUsages",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceUsagesResponse({}));
  }

  /**
   * Queries your service usages.
   * 
   * @param request - ListServiceUsagesRequest
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsages(request: $_model.ListServiceUsagesRequest): Promise<$_model.ListServiceUsagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * Queries information about your services.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: $_model.ListServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.fuzzyKeyword)) {
      query["FuzzyKeyword"] = request.fuzzyKeyword;
    }

    if (!$dara.isNull(request.inUsed)) {
      query["InUsed"] = request.inUsed;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceAccessType)) {
      query["ServiceAccessType"] = request.serviceAccessType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * Queries information about your services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * Lists the files of a specified Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, ensure that the service provider has enabled the modification feature and configured the modification parameters when creating the service.
   * 
   * @param request - ListSkillFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillFilesResponse
   */
  async listSkillFilesWithOptions(request: $_model.ListSkillFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillFiles",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillFilesResponse({}));
  }

  /**
   * Lists the files of a specified Skill.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, ensure that the service provider has enabled the modification feature and configured the modification parameters when creating the service.
   * 
   * @param request - ListSkillFilesRequest
   * @returns ListSkillFilesResponse
   */
  async listSkillFiles(request: $_model.ListSkillFilesRequest): Promise<$_model.ListSkillFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of SkillSpaces.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the upgrade feature and configured its parameters when creating the service.
   * 
   * @param request - ListSkillSpacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillSpacesResponse
   */
  async listSkillSpacesWithOptions(request: $_model.ListSkillSpacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillSpacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
      action: "ListSkillSpaces",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillSpacesResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillSpacesResponse({}));
  }

  /**
   * Queries a list of SkillSpaces.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider enabled the upgrade feature and configured its parameters when creating the service.
   * 
   * @param request - ListSkillSpacesRequest
   * @returns ListSkillSpacesResponse
   */
  async listSkillSpaces(request: $_model.ListSkillSpacesRequest): Promise<$_model.ListSkillSpacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillSpacesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of Skills.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled modification and configured the modification parameters when creating the service.
   * 
   * @param request - ListSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(request: $_model.ListSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needDownloadUrl)) {
      query["NeedDownloadUrl"] = request.needDownloadUrl;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkills",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
  }

  /**
   * Retrieves a list of Skills.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled modification and configured the modification parameters when creating the service.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillsWithOptions(request, runtime);
  }

  /**
   * This operation lists existing tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListTagKeys",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * This operation lists existing tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries a list of tagged resources.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-06-01",
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
   * Queries a list of tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Lists the tag values for a specified tag key.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListTagValues",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Lists the tag values for a specified tag key.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Renews a service instance.
   * 
   * @param request - RenewServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewServiceInstanceResponse
   */
  async renewServiceInstanceWithOptions(request: $_model.RenewServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewServiceInstanceResponse({}));
  }

  /**
   * Renews a service instance.
   * 
   * @param request - RenewServiceInstanceRequest
   * @returns RenewServiceInstanceResponse
   */
  async renewServiceInstance(request: $_model.RenewServiceInstanceRequest): Promise<$_model.RenewServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Renews the subscription resources for a private deployment service instance. This operation supports two renewal methods: renewing all subscription resources for a service instance or renewing only specific resources. You can use only one method per request.
   * 
   * @param request - RenewServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewServiceInstanceResourcesResponse
   */
  async renewServiceInstanceResourcesWithOptions(request: $_model.RenewServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourcePeriod)) {
      query["ResourcePeriod"] = request.resourcePeriod;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewServiceInstanceResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.RenewServiceInstanceResourcesResponse({}));
  }

  /**
   * Renews the subscription resources for a private deployment service instance. This operation supports two renewal methods: renewing all subscription resources for a service instance or renewing only specific resources. You can use only one method per request.
   * 
   * @param request - RenewServiceInstanceResourcesRequest
   * @returns RenewServiceInstanceResourcesResponse
   */
  async renewServiceInstanceResources(request: $_model.RenewServiceInstanceResourcesRequest): Promise<$_model.RenewServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * Restarts a service instance in the Deployed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the restart O\\&M operation when the service was created.
   * 
   * @param request - RestartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstanceWithOptions(request: $_model.RestartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartServiceInstanceResponse({}));
  }

  /**
   * Restarts a service instance in the Deployed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider enabled the restart O\\&M operation when the service was created.
   * 
   * @param request - RestartServiceInstanceRequest
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: $_model.RestartServiceInstanceRequest): Promise<$_model.RestartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Rolls back an upgraded service instance.
   * 
   * @param request - RollbackServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstanceWithOptions(request: $_model.RollbackServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RollbackServiceInstanceResponse({}));
  }

  /**
   * Rolls back an upgraded service instance.
   * 
   * @param request - RollbackServiceInstanceRequest
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstance(request: $_model.RollbackServiceInstanceRequest): Promise<$_model.RollbackServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Call the StartServiceInstance operation to start a service instance that is in the Stopped or StartFailed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider configured the start and stop O\\&M actions when creating the service.
   * 
   * @param request - StartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstanceWithOptions(request: $_model.StartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartServiceInstanceResponse({}));
  }

  /**
   * Call the StartServiceInstance operation to start a service instance that is in the Stopped or StartFailed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider configured the start and stop O\\&M actions when creating the service.
   * 
   * @param request - StartServiceInstanceRequest
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstance(request: $_model.StartServiceInstanceRequest): Promise<$_model.StartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Call the StopServiceInstance operation to shut down a service instance that is in the Deployed or StopFailed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider configured the Operations and Maintenance (O\\&M) operations for startup and shutdown when the service was created.
   * 
   * @param request - StopServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstanceWithOptions(request: $_model.StopServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopServiceInstanceResponse({}));
  }

  /**
   * Call the StopServiceInstance operation to shut down a service instance that is in the Deployed or StopFailed state.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider configured the Operations and Maintenance (O\\&M) operations for startup and shutdown when the service was created.
   * 
   * @param request - StopServiceInstanceRequest
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstance(request: $_model.StopServiceInstanceRequest): Promise<$_model.StopServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * You can call TagResources to create and attach tags to multiple resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "TagResources",
      version: "2021-06-01",
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
   * You can call TagResources to create and attach tags to multiple resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Detaches tags from specified resources.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-06-01",
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
   * Detaches tags from specified resources.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceAttributesResponse
   */
  async updateServiceInstanceAttributesWithOptions(request: $_model.UpdateServiceInstanceAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceInstanceAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableOperation)) {
      query["EnableOperation"] = request.enableOperation;
    }

    if (!$dara.isNull(request.grantedPermission)) {
      query["GrantedPermission"] = request.grantedPermission;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceAttributes",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceInstanceAttributesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceInstanceAttributesResponse({}));
  }

  /**
   * Updates the attributes of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributesRequest
   * @returns UpdateServiceInstanceAttributesResponse
   */
  async updateServiceInstanceAttributes(request: $_model.UpdateServiceInstanceAttributesRequest): Promise<$_model.UpdateServiceInstanceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributesWithOptions(request, runtime);
  }

  /**
   * You can call the UpdateServiceInstanceSpec operation to upgrade or downgrade a service instance if its parameters or package settings do not meet your requirements.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the upgrade/downgrade feature and configured the related parameters when the service was created.
   * 
   * @param tmpReq - UpdateServiceInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpecWithOptions(tmpReq: $_model.UpdateServiceInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceInstanceSpecResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateServiceInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.predefinedParametersName)) {
      query["PredefinedParametersName"] = request.predefinedParametersName;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceSpec",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceInstanceSpecResponse({}));
  }

  /**
   * You can call the UpdateServiceInstanceSpec operation to upgrade or downgrade a service instance if its parameters or package settings do not meet your requirements.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that the service provider has enabled the upgrade/downgrade feature and configured the related parameters when the service was created.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: $_model.UpdateServiceInstanceSpecRequest): Promise<$_model.UpdateServiceInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Updates the information about a service usage request.
   * 
   * @param tmpReq - UpdateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceUsageResponse
   */
  async updateServiceUsageWithOptions(tmpReq: $_model.UpdateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceUsageResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateServiceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInformation)) {
      request.userInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInformation, "UserInformation", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userInformationShrink)) {
      query["UserInformation"] = request.userInformationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceUsageResponse({}));
  }

  /**
   * Updates the information about a service usage request.
   * 
   * @param request - UpdateServiceUsageRequest
   * @returns UpdateServiceUsageResponse
   */
  async updateServiceUsage(request: $_model.UpdateServiceUsageRequest): Promise<$_model.UpdateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceUsageWithOptions(request, runtime);
  }

  /**
   * Updates a skill.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the option to modify configurations and configured the relevant parameters during service creation.
   * 
   * @param request - UpdateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillResponse
   */
  async updateSkillWithOptions(request: $_model.UpdateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
    }

    if (!$dara.isNull(request.skillDescription)) {
      query["SkillDescription"] = request.skillDescription;
    }

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.skillLabels)) {
      query["SkillLabels"] = request.skillLabels;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.sourceSkillId)) {
      query["SourceSkillId"] = request.sourceSkillId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
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
      action: "UpdateSkill",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillResponse({}));
  }

  /**
   * Updates a skill.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure the service provider has enabled the option to modify configurations and configured the relevant parameters during service creation.
   * 
   * @param request - UpdateSkillRequest
   * @returns UpdateSkillResponse
   */
  async updateSkill(request: $_model.UpdateSkillRequest): Promise<$_model.UpdateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillWithOptions(request, runtime);
  }

  /**
   * The UpdateUserInformation operation updates user information.
   * 
   * @param request - UpdateUserInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserInformationResponse
   */
  async updateUserInformationWithOptions(request: $_model.UpdateUserInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverySettings)) {
      query["DeliverySettings"] = request.deliverySettings;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserInformation",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserInformationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserInformationResponse({}));
  }

  /**
   * The UpdateUserInformation operation updates user information.
   * 
   * @param request - UpdateUserInformationRequest
   * @returns UpdateUserInformationResponse
   */
  async updateUserInformation(request: $_model.UpdateUserInformationRequest): Promise<$_model.UpdateUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserInformationWithOptions(request, runtime);
  }

  /**
   * Upgrades a service instance to a new version.
   * 
   * @param tmpReq - UpgradeServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstanceWithOptions(tmpReq: $_model.UpgradeServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeServiceInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradeServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeServiceInstanceResponse({}));
  }

  /**
   * Upgrades a service instance to a new version.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: $_model.UpgradeServiceInstanceRequest): Promise<$_model.UpgradeServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Validates the name of a service instance.
   * 
   * @param request - ValidateServiceInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateServiceInstanceNameResponse
   */
  async validateServiceInstanceNameWithOptions(request: $_model.ValidateServiceInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateServiceInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.isTrial)) {
      query["IsTrial"] = request.isTrial;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceName)) {
      query["ServiceInstanceName"] = request.serviceInstanceName;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateServiceInstanceName",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateServiceInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ValidateServiceInstanceNameResponse({}));
  }

  /**
   * Validates the name of a service instance.
   * 
   * @param request - ValidateServiceInstanceNameRequest
   * @returns ValidateServiceInstanceNameResponse
   */
  async validateServiceInstanceName(request: $_model.ValidateServiceInstanceNameRequest): Promise<$_model.ValidateServiceInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateServiceInstanceNameWithOptions(request, runtime);
  }

}
