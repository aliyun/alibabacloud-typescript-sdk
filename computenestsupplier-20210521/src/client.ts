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
    this._endpoint = this.getEndpoint("computenestsupplier", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccountsWithOptions(request: $_model.AddServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddServiceSharedAccountsResponse> {
    request.validate();
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

    if (!$dara.isNull(request.sharedAccounts)) {
      query["SharedAccounts"] = request.sharedAccounts;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.AddServiceSharedAccountsResponse({}));
  }

  /**
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccounts(request: $_model.AddServiceSharedAccountsRequest): Promise<$_model.AddServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * Merchant uses service request
   * 
   * @param request - ApproveServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsageWithOptions(request: $_model.ApproveServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.ApproveServiceUsageResponse({}));
  }

  /**
   * Merchant uses service request
   * 
   * @param request - ApproveServiceUsageRequest
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsage(request: $_model.ApproveServiceUsageRequest): Promise<$_model.ApproveServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveServiceUsageWithOptions(request, runtime);
  }

  /**
   * Cancel service registration.
   * 
   * @remarks
   * Only service registration in the Submitted status can be canceled.
   * 
   * @param request - CancelServiceRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelServiceRegistrationResponse
   */
  async cancelServiceRegistrationWithOptions(request: $_model.CancelServiceRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelServiceRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelServiceRegistration",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelServiceRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.CancelServiceRegistrationResponse({}));
  }

  /**
   * Cancel service registration.
   * 
   * @remarks
   * Only service registration in the Submitted status can be canceled.
   * 
   * @param request - CancelServiceRegistrationRequest
   * @returns CancelServiceRegistrationResponse
   */
  async cancelServiceRegistration(request: $_model.CancelServiceRegistrationRequest): Promise<$_model.CancelServiceRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelServiceRegistrationWithOptions(request, runtime);
  }

  /**
   * Redeploys a service instance after the service instance failed to be deployed.
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
      version: "2021-05-21",
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
   * Redeploys a service instance after the service instance failed to be deployed.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: $_model.ContinueDeployServiceInstanceRequest): Promise<$_model.ContinueDeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a deployment package.
   * 
   * @param tmpReq - CreateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactResponse
   */
  async createArtifactWithOptions(tmpReq: $_model.CreateArtifactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactResponse> {
    tmpReq.validate();
    let request = new $_model.CreateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.artifactBuildProperty)) {
      request.artifactBuildPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactBuildProperty, "ArtifactBuildProperty", "json");
    }

    if (!$dara.isNull(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactBuildPropertyShrink)) {
      query["ArtifactBuildProperty"] = request.artifactBuildPropertyShrink;
    }

    if (!$dara.isNull(request.artifactBuildType)) {
      query["ArtifactBuildType"] = request.artifactBuildType;
    }

    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactResponse({}));
  }

  /**
   * Creates a deployment package.
   * 
   * @param request - CreateArtifactRequest
   * @returns CreateArtifactResponse
   */
  async createArtifact(request: $_model.CreateArtifactRequest): Promise<$_model.CreateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactWithOptions(request, runtime);
  }

  /**
   * Creates a service.
   * 
   * @param tmpReq - CreateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(tmpReq: $_model.CreateServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.complianceMetadata)) {
      request.complianceMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.complianceMetadata, "ComplianceMetadata", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.buildParameters)) {
      query["BuildParameters"] = request.buildParameters;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.complianceMetadataShrink)) {
      query["ComplianceMetadata"] = request.complianceMetadataShrink;
    }

    if (!$dara.isNull(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!$dara.isNull(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!$dara.isNull(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sourceServiceId)) {
      query["SourceServiceId"] = request.sourceServiceId;
    }

    if (!$dara.isNull(request.sourceServiceVersion)) {
      query["SourceServiceVersion"] = request.sourceServiceVersion;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!$dara.isNull(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!$dara.isNull(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * Creates a service.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  /**
   * Creates and deploys a service instance.
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

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
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

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceInstance",
      version: "2021-05-21",
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
   * Creates and deploys a service instance.
   * 
   * @param request - CreateServiceInstanceRequest
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstance(request: $_model.CreateServiceInstanceRequest): Promise<$_model.CreateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Create service test case.
   * 
   * @param request - CreateServiceTestCaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceTestCaseResponse
   */
  async createServiceTestCaseWithOptions(request: $_model.CreateServiceTestCaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceTestCaseResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.testCaseName)) {
      query["TestCaseName"] = request.testCaseName;
    }

    if (!$dara.isNull(request.testConfig)) {
      query["TestConfig"] = request.testConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceTestCase",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceTestCaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceTestCaseResponse({}));
  }

  /**
   * Create service test case.
   * 
   * @param request - CreateServiceTestCaseRequest
   * @returns CreateServiceTestCaseResponse
   */
  async createServiceTestCase(request: $_model.CreateServiceTestCaseRequest): Promise<$_model.CreateServiceTestCaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceTestCaseWithOptions(request, runtime);
  }

  /**
   * Create service test task
   * 
   * @param request - CreateServiceTestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceTestTaskResponse
   */
  async createServiceTestTaskWithOptions(request: $_model.CreateServiceTestTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceTestTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskRegionId)) {
      query["TaskRegionId"] = request.taskRegionId;
    }

    if (!$dara.isNull(request.testCaseIds)) {
      query["TestCaseIds"] = request.testCaseIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceTestTask",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceTestTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceTestTaskResponse({}));
  }

  /**
   * Create service test task
   * 
   * @param request - CreateServiceTestTaskRequest
   * @returns CreateServiceTestTaskResponse
   */
  async createServiceTestTask(request: $_model.CreateServiceTestTaskRequest): Promise<$_model.CreateServiceTestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceTestTaskWithOptions(request, runtime);
  }

  /**
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsageWithOptions(request: $_model.CreateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceUsageResponse> {
    request.validate();
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceUsage",
      version: "2021-05-21",
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
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: $_model.CreateServiceUsageRequest): Promise<$_model.CreateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * 注册成为服务商
   * 
   * @param request - CreateSupplierRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSupplierRegistrationResponse
   */
  async createSupplierRegistrationWithOptions(request: $_model.CreateSupplierRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSupplierRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!$dara.isNull(request.contactNumber)) {
      query["ContactNumber"] = request.contactNumber;
    }

    if (!$dara.isNull(request.contactPerson)) {
      query["ContactPerson"] = request.contactPerson;
    }

    if (!$dara.isNull(request.contactPersonTitle)) {
      query["ContactPersonTitle"] = request.contactPersonTitle;
    }

    if (!$dara.isNull(request.enableResellerMode)) {
      query["EnableResellerMode"] = request.enableResellerMode;
    }

    if (!$dara.isNull(request.productAnnualRevenue)) {
      query["ProductAnnualRevenue"] = request.productAnnualRevenue;
    }

    if (!$dara.isNull(request.productBusiness)) {
      query["ProductBusiness"] = request.productBusiness;
    }

    if (!$dara.isNull(request.productDeliveryTypes)) {
      query["ProductDeliveryTypes"] = request.productDeliveryTypes;
    }

    if (!$dara.isNull(request.productPublishTime)) {
      query["ProductPublishTime"] = request.productPublishTime;
    }

    if (!$dara.isNull(request.productSellTypes)) {
      query["ProductSellTypes"] = request.productSellTypes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellBusinessDesc)) {
      query["ResellBusinessDesc"] = request.resellBusinessDesc;
    }

    if (!$dara.isNull(request.suggestion)) {
      query["Suggestion"] = request.suggestion;
    }

    if (!$dara.isNull(request.supplierDesc)) {
      query["SupplierDesc"] = request.supplierDesc;
    }

    if (!$dara.isNull(request.supplierLogo)) {
      query["SupplierLogo"] = request.supplierLogo;
    }

    if (!$dara.isNull(request.supplierName)) {
      query["SupplierName"] = request.supplierName;
    }

    if (!$dara.isNull(request.supplierNameEn)) {
      query["SupplierNameEn"] = request.supplierNameEn;
    }

    if (!$dara.isNull(request.supplierUrl)) {
      query["SupplierUrl"] = request.supplierUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSupplierRegistration",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSupplierRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.CreateSupplierRegistrationResponse({}));
  }

  /**
   * 注册成为服务商
   * 
   * @param request - CreateSupplierRegistrationRequest
   * @returns CreateSupplierRegistrationResponse
   */
  async createSupplierRegistration(request: $_model.CreateSupplierRegistrationRequest): Promise<$_model.CreateSupplierRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSupplierRegistrationWithOptions(request, runtime);
  }

  /**
   * 删除Acr镜像仓库
   * 
   * @param request - DeleteAcrImageRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAcrImageRepositoriesResponse
   */
  async deleteAcrImageRepositoriesWithOptions(request: $_model.DeleteAcrImageRepositoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAcrImageRepositoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAcrImageRepositories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAcrImageRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAcrImageRepositoriesResponse({}));
  }

  /**
   * 删除Acr镜像仓库
   * 
   * @param request - DeleteAcrImageRepositoriesRequest
   * @returns DeleteAcrImageRepositoriesResponse
   */
  async deleteAcrImageRepositories(request: $_model.DeleteAcrImageRepositoriesRequest): Promise<$_model.DeleteAcrImageRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAcrImageRepositoriesWithOptions(request, runtime);
  }

  /**
   * 删除Acr容器镜像版本
   * 
   * @param request - DeleteAcrImageTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAcrImageTagsResponse
   */
  async deleteAcrImageTagsWithOptions(request: $_model.DeleteAcrImageTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAcrImageTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAcrImageTags",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAcrImageTagsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAcrImageTagsResponse({}));
  }

  /**
   * 删除Acr容器镜像版本
   * 
   * @param request - DeleteAcrImageTagsRequest
   * @returns DeleteAcrImageTagsResponse
   */
  async deleteAcrImageTags(request: $_model.DeleteAcrImageTagsRequest): Promise<$_model.DeleteAcrImageTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAcrImageTagsWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(request: $_model.DeleteArtifactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteArtifactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteArtifactResponse({}));
  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @returns DeleteArtifactResponse
   */
  async deleteArtifact(request: $_model.DeleteArtifactRequest): Promise<$_model.DeleteArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactWithOptions(request, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(request: $_model.DeleteServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    request.validate();
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

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @returns DeleteServiceResponse
   */
  async deleteService(request: $_model.DeleteServiceRequest): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a service instance.
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
      version: "2021-05-21",
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
   * Deletes a service instance.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: $_model.DeleteServiceInstancesRequest): Promise<$_model.DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Delete service test configuration
   * 
   * @param request - DeleteServiceTestCaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceTestCaseResponse
   */
  async deleteServiceTestCaseWithOptions(request: $_model.DeleteServiceTestCaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceTestCaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.testCaseId)) {
      query["TestCaseId"] = request.testCaseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceTestCase",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceTestCaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceTestCaseResponse({}));
  }

  /**
   * Delete service test configuration
   * 
   * @param request - DeleteServiceTestCaseRequest
   * @returns DeleteServiceTestCaseResponse
   */
  async deleteServiceTestCase(request: $_model.DeleteServiceTestCaseRequest): Promise<$_model.DeleteServiceTestCaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceTestCaseWithOptions(request, runtime);
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
      version: "2021-05-21",
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
   * 生成默认服务测试配置
   * 
   * @param request - GenerateDefaultServiceTestConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDefaultServiceTestConfigResponse
   */
  async generateDefaultServiceTestConfigWithOptions(request: $_model.GenerateDefaultServiceTestConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDefaultServiceTestConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
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
      action: "GenerateDefaultServiceTestConfig",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDefaultServiceTestConfigResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDefaultServiceTestConfigResponse({}));
  }

  /**
   * 生成默认服务测试配置
   * 
   * @param request - GenerateDefaultServiceTestConfigRequest
   * @returns GenerateDefaultServiceTestConfigResponse
   */
  async generateDefaultServiceTestConfig(request: $_model.GenerateDefaultServiceTestConfigRequest): Promise<$_model.GenerateDefaultServiceTestConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDefaultServiceTestConfigWithOptions(request, runtime);
  }

  /**
   * 生成并校验服务创建stack所需要
   * 
   * @param request - GenerateServicePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicyWithOptions(request: $_model.GenerateServicePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateServicePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
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
      version: "2021-05-21",
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
   * 生成并校验服务创建stack所需要
   * 
   * @param request - GenerateServicePolicyRequest
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicy(request: $_model.GenerateServicePolicyRequest): Promise<$_model.GenerateServicePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateServicePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactResponse
   */
  async getArtifactWithOptions(request: $_model.GetArtifactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactName)) {
      query["ArtifactName"] = request.artifactName;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactResponse({}));
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @returns GetArtifactResponse
   */
  async getArtifact(request: $_model.GetArtifactRequest): Promise<$_model.GetArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactWithOptions(request, runtime);
  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentialsWithOptions(request: $_model.GetArtifactRepositoryCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactRepositoryCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactRepositoryCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactRepositoryCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactRepositoryCredentialsResponse({}));
  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentials(request: $_model.GetArtifactRepositoryCredentialsRequest): Promise<$_model.GetArtifactRepositoryCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactRepositoryCredentialsWithOptions(request, runtime);
  }

  /**
   * 根据地域参数获取地域可用区列表
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
      version: "2021-05-21",
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
   * 根据地域参数获取地域可用区列表
   * 
   * @param request - GetNetworkAvailableZonesRequest
   * @returns GetNetworkAvailableZonesResponse
   */
  async getNetworkAvailableZones(request: $_model.GetNetworkAvailableZonesRequest): Promise<$_model.GetNetworkAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkAvailableZonesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: $_model.GetServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterAliUid)) {
      query["FilterAliUid"] = request.filterAliUid;
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

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.sharedAccountType)) {
      query["SharedAccountType"] = request.sharedAccountType;
    }

    if (!$dara.isNull(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2021-05-21",
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
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: $_model.GetServiceRequest): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated price for creating a service instance.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceEstimateCost",
      version: "2021-05-21",
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
   * Queries the estimated price for creating a service instance.
   * 
   * @param request - GetServiceEstimateCostRequest
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: $_model.GetServiceEstimateCostRequest): Promise<$_model.GetServiceEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: $_model.GetServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceInstanceResponse> {
    request.validate();
    let query = { };
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
      version: "2021-05-21",
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
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: $_model.GetServiceInstanceRequest): Promise<$_model.GetServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about the activation status and Resource Access Management (RAM) roles of the cloud services required by a service.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvisions",
      version: "2021-05-21",
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
   * Queries the information about the activation status and Resource Access Management (RAM) roles of the cloud services required by a service.
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: $_model.GetServiceProvisionsRequest): Promise<$_model.GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Get service registration detail.
   * 
   * @param request - GetServiceRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceRegistrationResponse
   */
  async getServiceRegistrationWithOptions(request: $_model.GetServiceRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceRegistration",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceRegistrationResponse({}));
  }

  /**
   * Get service registration detail.
   * 
   * @param request - GetServiceRegistrationRequest
   * @returns GetServiceRegistrationResponse
   */
  async getServiceRegistration(request: $_model.GetServiceRegistrationRequest): Promise<$_model.GetServiceRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceRegistrationWithOptions(request, runtime);
  }

  /**
   * 查询服务模板存在的规范问题
   * 
   * @param request - GetServiceTemplateCriterionIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTemplateCriterionIssuesResponse
   */
  async getServiceTemplateCriterionIssuesWithOptions(request: $_model.GetServiceTemplateCriterionIssuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceTemplateCriterionIssuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTemplateCriterionIssues",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceTemplateCriterionIssuesResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceTemplateCriterionIssuesResponse({}));
  }

  /**
   * 查询服务模板存在的规范问题
   * 
   * @param request - GetServiceTemplateCriterionIssuesRequest
   * @returns GetServiceTemplateCriterionIssuesResponse
   */
  async getServiceTemplateCriterionIssues(request: $_model.GetServiceTemplateCriterionIssuesRequest): Promise<$_model.GetServiceTemplateCriterionIssuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateCriterionIssuesWithOptions(request, runtime);
  }

  /**
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
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

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-05-21",
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
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: $_model.GetServiceTemplateParameterConstraintsRequest): Promise<$_model.GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Get the execution status of Cases in the service test task
   * 
   * @param request - GetServiceTestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTestTaskResponse
   */
  async getServiceTestTaskWithOptions(request: $_model.GetServiceTestTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceTestTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTestTask",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceTestTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceTestTaskResponse({}));
  }

  /**
   * Get the execution status of Cases in the service test task
   * 
   * @param request - GetServiceTestTaskRequest
   * @returns GetServiceTestTaskResponse
   */
  async getServiceTestTask(request: $_model.GetServiceTestTaskRequest): Promise<$_model.GetServiceTestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTestTaskWithOptions(request, runtime);
  }

  /**
   * Get service provider information
   * 
   * @param request - GetSupplierInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplierInformationResponse
   */
  async getSupplierInformationWithOptions(request: $_model.GetSupplierInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupplierInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupplierInformation",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupplierInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetSupplierInformationResponse({}));
  }

  /**
   * Get service provider information
   * 
   * @param request - GetSupplierInformationRequest
   * @returns GetSupplierInformationResponse
   */
  async getSupplierInformation(request: $_model.GetSupplierInformationRequest): Promise<$_model.GetSupplierInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupplierInformationWithOptions(request, runtime);
  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentialsWithOptions(request: $_model.GetUploadCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadCredentialsResponse({}));
  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentials(request: $_model.GetUploadCredentialsRequest): Promise<$_model.GetUploadCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadCredentialsWithOptions(request, runtime);
  }

  /**
   * Launch service
   * 
   * @remarks
   * 需要上线的服务必须为已通过审核的服务。
   * 
   * @param request - LaunchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchServiceResponse
   */
  async launchServiceWithOptions(request: $_model.LaunchServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LaunchServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categories)) {
      query["Categories"] = request.categories;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recommend)) {
      query["Recommend"] = request.recommend;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LaunchServiceResponse>(await this.callApi(params, req, runtime), new $_model.LaunchServiceResponse({}));
  }

  /**
   * Launch service
   * 
   * @remarks
   * 需要上线的服务必须为已通过审核的服务。
   * 
   * @param request - LaunchServiceRequest
   * @returns LaunchServiceResponse
   */
  async launchService(request: $_model.LaunchServiceRequest): Promise<$_model.LaunchServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchServiceWithOptions(request, runtime);
  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositoriesWithOptions(request: $_model.ListAcrImageRepositoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAcrImageRepositoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAcrImageRepositories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAcrImageRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAcrImageRepositoriesResponse({}));
  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositories(request: $_model.ListAcrImageRepositoriesRequest): Promise<$_model.ListAcrImageRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAcrImageRepositoriesWithOptions(request, runtime);
  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTagsWithOptions(request: $_model.ListAcrImageTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAcrImageTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAcrImageTags",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAcrImageTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListAcrImageTagsResponse({}));
  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTags(request: $_model.ListAcrImageTagsRequest): Promise<$_model.ListAcrImageTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAcrImageTagsWithOptions(request, runtime);
  }

  /**
   * 查询部署实例、升级以及应用的日志
   * 
   * @param request - ListArtifactBuildLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactBuildLogsResponse
   */
  async listArtifactBuildLogsWithOptions(request: $_model.ListArtifactBuildLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactBuildLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

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

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactBuildLogs",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactBuildLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactBuildLogsResponse({}));
  }

  /**
   * 查询部署实例、升级以及应用的日志
   * 
   * @param request - ListArtifactBuildLogsRequest
   * @returns ListArtifactBuildLogsResponse
   */
  async listArtifactBuildLogs(request: $_model.ListArtifactBuildLogsRequest): Promise<$_model.ListArtifactBuildLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactBuildLogsWithOptions(request, runtime);
  }

  /**
   * Get the list of artifact security risks
   * 
   * @param request - ListArtifactRisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactRisksResponse
   */
  async listArtifactRisksWithOptions(request: $_model.ListArtifactRisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactRisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactRisks",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactRisksResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactRisksResponse({}));
  }

  /**
   * Get the list of artifact security risks
   * 
   * @param request - ListArtifactRisksRequest
   * @returns ListArtifactRisksResponse
   */
  async listArtifactRisks(request: $_model.ListArtifactRisksRequest): Promise<$_model.ListArtifactRisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactRisksWithOptions(request, runtime);
  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param tmpReq - ListArtifactVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersionsWithOptions(tmpReq: $_model.ListArtifactVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactVersionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListArtifactVersionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
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
      action: "ListArtifactVersions",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactVersionsResponse({}));
  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param request - ListArtifactVersionsRequest
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersions(request: $_model.ListArtifactVersionsRequest): Promise<$_model.ListArtifactVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactsResponse
   */
  async listArtifactsWithOptions(request: $_model.ListArtifactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactsResponse> {
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
      action: "ListArtifacts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactsResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactsResponse({}));
  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @returns ListArtifactsResponse
   */
  async listArtifacts(request: $_model.ListArtifactsRequest): Promise<$_model.ListArtifactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactsWithOptions(request, runtime);
  }

  /**
   * Paginated query of distributor information list
   * 
   * @param request - ListResellersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResellersResponse
   */
  async listResellersWithOptions(request: $_model.ListResellersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResellersResponse> {
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
      action: "ListResellers",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResellersResponse>(await this.callApi(params, req, runtime), new $_model.ListResellersResponse({}));
  }

  /**
   * Paginated query of distributor information list
   * 
   * @param request - ListResellersRequest
   * @returns ListResellersResponse
   */
  async listResellers(request: $_model.ListResellersRequest): Promise<$_model.ListResellersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResellersWithOptions(request, runtime);
  }

  /**
   * 查询部署实例、升级以及应用的日志
   * 
   * @param request - ListServiceBuildLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceBuildLogsResponse
   */
  async listServiceBuildLogsWithOptions(request: $_model.ListServiceBuildLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceBuildLogsResponse> {
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceBuildLogs",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceBuildLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceBuildLogsResponse({}));
  }

  /**
   * 查询部署实例、升级以及应用的日志
   * 
   * @param request - ListServiceBuildLogsRequest
   * @returns ListServiceBuildLogsResponse
   */
  async listServiceBuildLogs(request: $_model.ListServiceBuildLogsRequest): Promise<$_model.ListServiceBuildLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceBuildLogsWithOptions(request, runtime);
  }

  /**
   * Display service instance bill
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
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
      action: "ListServiceInstanceBill",
      version: "2021-05-21",
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
   * Display service instance bill
   * 
   * @param request - ListServiceInstanceBillRequest
   * @returns ListServiceInstanceBillResponse
   */
  async listServiceInstanceBill(request: $_model.ListServiceInstanceBillRequest): Promise<$_model.ListServiceInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceBillWithOptions(request, runtime);
  }

  /**
   * Query service instance deployment details
   * 
   * @param request - ListServiceInstanceDeployDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceDeployDetailsResponse
   */
  async listServiceInstanceDeployDetailsWithOptions(request: $_model.ListServiceInstanceDeployDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceDeployDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cycleTimeZone)) {
      query["CycleTimeZone"] = request.cycleTimeZone;
    }

    if (!$dara.isNull(request.cycleType)) {
      query["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceDeployDetails",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceDeployDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceDeployDetailsResponse({}));
  }

  /**
   * Query service instance deployment details
   * 
   * @param request - ListServiceInstanceDeployDetailsRequest
   * @returns ListServiceInstanceDeployDetailsResponse
   */
  async listServiceInstanceDeployDetails(request: $_model.ListServiceInstanceDeployDetailsRequest): Promise<$_model.ListServiceInstanceDeployDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceDeployDetailsWithOptions(request, runtime);
  }

  /**
   * “Query logs at various levels, including service instance application, instance, and resource.”
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
      version: "2021-05-21",
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
   * “Query logs at various levels, including service instance application, instance, and resource.”
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogs(request: $_model.ListServiceInstanceLogsRequest): Promise<$_model.ListServiceInstanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  /**
   * 查询服务实例资源
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
      version: "2021-05-21",
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
   * 查询服务实例资源
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResources(request: $_model.ListServiceInstanceResourcesRequest): Promise<$_model.ListServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * View the upgrade history of a service instance
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
      version: "2021-05-21",
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
   * View the upgrade history of a service instance
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistory(request: $_model.ListServiceInstanceUpgradeHistoryRequest): Promise<$_model.ListServiceInstanceUpgradeHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceUpgradeHistoryWithOptions(request, runtime);
  }

  /**
   * Queries a list of service instances.
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

    if (!$dara.isNull(request.showDeleted)) {
      query["ShowDeleted"] = request.showDeleted;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-05-21",
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
   * Queries a list of service instances.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: $_model.ListServiceInstancesRequest): Promise<$_model.ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Query service registrations.
   * 
   * @param request - ListServiceRegistrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceRegistrationsResponse
   */
  async listServiceRegistrationsWithOptions(request: $_model.ListServiceRegistrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceRegistrationsResponse> {
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
      action: "ListServiceRegistrations",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceRegistrationsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceRegistrationsResponse({}));
  }

  /**
   * Query service registrations.
   * 
   * @param request - ListServiceRegistrationsRequest
   * @returns ListServiceRegistrationsResponse
   */
  async listServiceRegistrations(request: $_model.ListServiceRegistrationsRequest): Promise<$_model.ListServiceRegistrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceRegistrationsWithOptions(request, runtime);
  }

  /**
   * 调用ListServiceSharedAccounts查看服务共享账号列表。
   * 
   * @param request - ListServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccountsWithOptions(request: $_model.ListServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceSharedAccountsResponse> {
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

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
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
      action: "ListServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceSharedAccountsResponse({}));
  }

  /**
   * 调用ListServiceSharedAccounts查看服务共享账号列表。
   * 
   * @param request - ListServiceSharedAccountsRequest
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccounts(request: $_model.ListServiceSharedAccountsRequest): Promise<$_model.ListServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * Service test case list
   * 
   * @param request - ListServiceTestCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceTestCasesResponse
   */
  async listServiceTestCasesWithOptions(request: $_model.ListServiceTestCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceTestCasesResponse> {
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceTestCases",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceTestCasesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceTestCasesResponse({}));
  }

  /**
   * Service test case list
   * 
   * @param request - ListServiceTestCasesRequest
   * @returns ListServiceTestCasesResponse
   */
  async listServiceTestCases(request: $_model.ListServiceTestCasesRequest): Promise<$_model.ListServiceTestCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceTestCasesWithOptions(request, runtime);
  }

  /**
   * Get service test real-time logs
   * 
   * @param request - ListServiceTestTaskLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceTestTaskLogsResponse
   */
  async listServiceTestTaskLogsWithOptions(request: $_model.ListServiceTestTaskLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceTestTaskLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceTestTaskLogs",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceTestTaskLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceTestTaskLogsResponse({}));
  }

  /**
   * Get service test real-time logs
   * 
   * @param request - ListServiceTestTaskLogsRequest
   * @returns ListServiceTestTaskLogsResponse
   */
  async listServiceTestTaskLogs(request: $_model.ListServiceTestTaskLogsRequest): Promise<$_model.ListServiceTestTaskLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceTestTaskLogsWithOptions(request, runtime);
  }

  /**
   * 获取任务执行列表
   * 
   * @param request - ListServiceTestTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceTestTasksResponse
   */
  async listServiceTestTasksWithOptions(request: $_model.ListServiceTestTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceTestTasksResponse> {
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceTestTasks",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceTestTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceTestTasksResponse({}));
  }

  /**
   * 获取任务执行列表
   * 
   * @param request - ListServiceTestTasksRequest
   * @returns ListServiceTestTasksResponse
   */
  async listServiceTestTasks(request: $_model.ListServiceTestTasksRequest): Promise<$_model.ListServiceTestTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceTestTasksWithOptions(request, runtime);
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: $_model.ListServiceUsagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceUsagesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceUsages",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceUsagesResponse({}));
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsages(request: $_model.ListServiceUsagesRequest): Promise<$_model.ListServiceUsagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: $_model.ListServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allVersions)) {
      query["AllVersions"] = request.allVersions;
    }

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
      action: "ListServices",
      version: "2021-05-21",
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
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * Query the list of service provider onboarding reviews
   * 
   * @param request - ListSupplierRegistrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupplierRegistrationsResponse
   */
  async listSupplierRegistrationsWithOptions(request: $_model.ListSupplierRegistrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupplierRegistrationsResponse> {
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
      action: "ListSupplierRegistrations",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupplierRegistrationsResponse>(await this.callApi(params, req, runtime), new $_model.ListSupplierRegistrationsResponse({}));
  }

  /**
   * Query the list of service provider onboarding reviews
   * 
   * @param request - ListSupplierRegistrationsRequest
   * @returns ListSupplierRegistrationsResponse
   */
  async listSupplierRegistrations(request: $_model.ListSupplierRegistrationsRequest): Promise<$_model.ListSupplierRegistrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupplierRegistrationsWithOptions(request, runtime);
  }

  /**
   * Query tag key list
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
      version: "2021-05-21",
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
   * Query tag key list
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Query resource tags
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
      version: "2021-05-21",
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
   * Query resource tags
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Query tag value list
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
      version: "2021-05-21",
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
   * Query tag value list
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResourcesWithOptions(request: $_model.ModifyServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceInstanceResourcesAction)) {
      query["ServiceInstanceResourcesAction"] = request.serviceInstanceResourcesAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyServiceInstanceResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyServiceInstanceResourcesResponse({}));
  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResources(request: $_model.ModifyServiceInstanceResourcesRequest): Promise<$_model.ModifyServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * Pre-release service
   * 
   * @param request - PreLaunchServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreLaunchServiceResponse
   */
  async preLaunchServiceWithOptions(request: $_model.PreLaunchServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreLaunchServiceResponse> {
    request.validate();
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreLaunchService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreLaunchServiceResponse>(await this.callApi(params, req, runtime), new $_model.PreLaunchServiceResponse({}));
  }

  /**
   * Pre-release service
   * 
   * @param request - PreLaunchServiceRequest
   * @returns PreLaunchServiceResponse
   */
  async preLaunchService(request: $_model.PreLaunchServiceRequest): Promise<$_model.PreLaunchServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preLaunchServiceWithOptions(request, runtime);
  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: $_model.PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMeteringDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metering)) {
      query["Metering"] = request.metering;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMeteringDataResponse>(await this.callApi(params, req, runtime), new $_model.PushMeteringDataResponse({}));
  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: $_model.PushMeteringDataRequest): Promise<$_model.PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterServiceResponse
   */
  async registerServiceWithOptions(request: $_model.RegisterServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterServiceResponse> {
    request.validate();
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterServiceResponse>(await this.callApi(params, req, runtime), new $_model.RegisterServiceResponse({}));
  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @returns RegisterServiceResponse
   */
  async registerService(request: $_model.RegisterServiceRequest): Promise<$_model.RegisterServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerServiceWithOptions(request, runtime);
  }

  /**
   * Reject service usage.
   * 
   * @param request - RejectServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsageWithOptions(request: $_model.RejectServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.RejectServiceUsageResponse({}));
  }

  /**
   * Reject service usage.
   * 
   * @param request - RejectServiceUsageRequest
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsage(request: $_model.RejectServiceUsageRequest): Promise<$_model.RejectServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectServiceUsageWithOptions(request, runtime);
  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifactWithOptions(request: $_model.ReleaseArtifactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseArtifactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseArtifactResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseArtifactResponse({}));
  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifact(request: $_model.ReleaseArtifactRequest): Promise<$_model.ReleaseArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseArtifactWithOptions(request, runtime);
  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccountsWithOptions(request: $_model.RemoveServiceSharedAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveServiceSharedAccountsResponse> {
    request.validate();
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUids)) {
      query["UserAliUids"] = request.userAliUids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveServiceSharedAccountsResponse({}));
  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccounts(request: $_model.RemoveServiceSharedAccountsRequest): Promise<$_model.RemoveServiceSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
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
      version: "2021-05-21",
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
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: $_model.RestartServiceInstanceRequest): Promise<$_model.RestartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Rollback Service Instance
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
      version: "2021-05-21",
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
   * Rollback Service Instance
   * 
   * @param request - RollbackServiceInstanceRequest
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstance(request: $_model.RollbackServiceInstanceRequest): Promise<$_model.RollbackServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
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
      version: "2021-05-21",
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
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstance(request: $_model.StartServiceInstanceRequest): Promise<$_model.StartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
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
      version: "2021-05-21",
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
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstance(request: $_model.StopServiceInstanceRequest): Promise<$_model.StopServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Tag a resource
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
      version: "2021-05-21",
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
   * Tag a resource
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbind resource from tag
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
      version: "2021-05-21",
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
   * Unbind resource from tag
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a deployment package.
   * 
   * @param tmpReq - UpdateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactResponse
   */
  async updateArtifactWithOptions(tmpReq: $_model.UpdateArtifactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateArtifactResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.artifactBuildProperty)) {
      request.artifactBuildPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactBuildProperty, "ArtifactBuildProperty", "json");
    }

    if (!$dara.isNull(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactBuildPropertyShrink)) {
      query["ArtifactBuildProperty"] = request.artifactBuildPropertyShrink;
    }

    if (!$dara.isNull(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!$dara.isNull(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!$dara.isNull(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateArtifactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateArtifactResponse({}));
  }

  /**
   * Updates a deployment package.
   * 
   * @param request - UpdateArtifactRequest
   * @returns UpdateArtifactResponse
   */
  async updateArtifact(request: $_model.UpdateArtifactRequest): Promise<$_model.UpdateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactWithOptions(request, runtime);
  }

  /**
   * Update a service.
   * 
   * @param tmpReq - UpdateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(tmpReq: $_model.UpdateServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!$dara.isNull(tmpReq.complianceMetadata)) {
      request.complianceMetadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.complianceMetadata, "ComplianceMetadata", "json");
    }

    if (!$dara.isNull(tmpReq.updateOption)) {
      request.updateOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateOption, "UpdateOption", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.buildParameters)) {
      query["BuildParameters"] = request.buildParameters;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!$dara.isNull(request.complianceMetadataShrink)) {
      query["ComplianceMetadata"] = request.complianceMetadataShrink;
    }

    if (!$dara.isNull(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!$dara.isNull(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!$dara.isNull(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!$dara.isNull(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!$dara.isNull(request.updateOptionShrink)) {
      query["UpdateOption"] = request.updateOptionShrink;
    }

    if (!$dara.isNull(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceResponse({}));
  }

  /**
   * Update a service.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(request: $_model.UpdateServiceRequest): Promise<$_model.UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param tmpReq - UpdateServiceInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttributeWithOptions(tmpReq: $_model.UpdateServiceInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceInstanceAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateServiceInstanceAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.licenseData)) {
      request.licenseDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.licenseData, "LicenseData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.licenseDataShrink)) {
      query["LicenseData"] = request.licenseDataShrink;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
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
      action: "UpdateServiceInstanceAttribute",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceInstanceAttributeResponse({}));
  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributeRequest
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttribute(request: $_model.UpdateServiceInstanceAttributeRequest): Promise<$_model.UpdateServiceInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a service instance.
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
      version: "2021-05-21",
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
   * Updates the configurations of a service instance.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: $_model.UpdateServiceInstanceSpecRequest): Promise<$_model.UpdateServiceInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modify Service Test Case
   * 
   * @param request - UpdateServiceTestCaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceTestCaseResponse
   */
  async updateServiceTestCaseWithOptions(request: $_model.UpdateServiceTestCaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceTestCaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.testCaseId)) {
      query["TestCaseId"] = request.testCaseId;
    }

    if (!$dara.isNull(request.testCaseName)) {
      query["TestCaseName"] = request.testCaseName;
    }

    if (!$dara.isNull(request.testConfig)) {
      query["TestConfig"] = request.testConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceTestCase",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceTestCaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceTestCaseResponse({}));
  }

  /**
   * Modify Service Test Case
   * 
   * @param request - UpdateServiceTestCaseRequest
   * @returns UpdateServiceTestCaseResponse
   */
  async updateServiceTestCase(request: $_model.UpdateServiceTestCaseRequest): Promise<$_model.UpdateServiceTestCaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceTestCaseWithOptions(request, runtime);
  }

  /**
   * Update Service Sharing Permissions
   * 
   * @param request - UpdateSharedAccountPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSharedAccountPermissionResponse
   */
  async updateSharedAccountPermissionWithOptions(request: $_model.UpdateSharedAccountPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSharedAccountPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSharedAccountPermission",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSharedAccountPermissionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSharedAccountPermissionResponse({}));
  }

  /**
   * Update Service Sharing Permissions
   * 
   * @param request - UpdateSharedAccountPermissionRequest
   * @returns UpdateSharedAccountPermissionResponse
   */
  async updateSharedAccountPermission(request: $_model.UpdateSharedAccountPermissionRequest): Promise<$_model.UpdateSharedAccountPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSharedAccountPermissionWithOptions(request, runtime);
  }

  /**
   * Update the information of supplier.
   * 
   * @param request - UpdateSupplierInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSupplierInformationResponse
   */
  async updateSupplierInformationWithOptions(request: $_model.UpdateSupplierInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSupplierInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverySettings)) {
      query["DeliverySettings"] = request.deliverySettings;
    }

    if (!$dara.isNull(request.operationIp)) {
      query["OperationIp"] = request.operationIp;
    }

    if (!$dara.isNull(request.operationMfaPresent)) {
      query["OperationMfaPresent"] = request.operationMfaPresent;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.supplierDesc)) {
      query["SupplierDesc"] = request.supplierDesc;
    }

    if (!$dara.isNull(request.supplierLogo)) {
      query["SupplierLogo"] = request.supplierLogo;
    }

    if (!$dara.isNull(request.supplierUrl)) {
      query["SupplierUrl"] = request.supplierUrl;
    }

    if (!$dara.isNull(request.supportContacts)) {
      query["SupportContacts"] = request.supportContacts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSupplierInformation",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSupplierInformationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSupplierInformationResponse({}));
  }

  /**
   * Update the information of supplier.
   * 
   * @param request - UpdateSupplierInformationRequest
   * @returns UpdateSupplierInformationResponse
   */
  async updateSupplierInformation(request: $_model.UpdateSupplierInformationRequest): Promise<$_model.UpdateSupplierInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSupplierInformationWithOptions(request, runtime);
  }

  /**
   * Upgrades a service instance.
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
      version: "2021-05-21",
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
   * Upgrades a service instance.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: $_model.UpgradeServiceInstanceRequest): Promise<$_model.UpgradeServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Withdraw service version.
   * 
   * @param request - WithdrawServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawServiceResponse
   */
  async withdrawServiceWithOptions(request: $_model.WithdrawServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawServiceResponse> {
    request.validate();
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

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawServiceResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawServiceResponse({}));
  }

  /**
   * Withdraw service version.
   * 
   * @param request - WithdrawServiceRequest
   * @returns WithdrawServiceResponse
   */
  async withdrawService(request: $_model.WithdrawServiceRequest): Promise<$_model.WithdrawServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawServiceWithOptions(request, runtime);
  }

}
