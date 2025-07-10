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
   * Cancels the application for using a service.
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
   * Cancels the application for using a service.
   * 
   * @param request - CancelServiceUsageRequest
   * @returns CancelServiceUsageResponse
   */
  async cancelServiceUsage(request: $_model.CancelServiceUsageRequest): Promise<$_model.CancelServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelServiceUsageWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
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
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 服务实例部署前的预检查
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
   * 服务实例部署前的预检查
   * 
   * @param request - CheckServiceDeployableRequest
   * @returns CheckServiceDeployableResponse
   */
  async checkServiceDeployable(request: $_model.CheckServiceDeployableRequest): Promise<$_model.CheckServiceDeployableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceDeployableWithOptions(request, runtime);
  }

  /**
   * Continues to deploy a service instance after the service instance failed to be deployed.
   * 
   * @remarks
   * This operation is available only for service instances that belong to private services deployed by using Resource Orchestration Service (ROS).
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
   * Continues to deploy a service instance after the service instance failed to be deployed.
   * 
   * @remarks
   * This operation is available only for service instances that belong to private services deployed by using Resource Orchestration Service (ROS).
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: $_model.ContinueDeployServiceInstanceRequest): Promise<$_model.ContinueDeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
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
   * Creates an application for using a service.
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
   * Creates an application for using a service.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: $_model.CreateServiceUsageRequest): Promise<$_model.CreateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * Delete service instances.
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
   * Delete service instances.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: $_model.DeleteServiceInstancesRequest): Promise<$_model.DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Deploy service instance in Created status.
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
   * Deploy service instance in Created status.
   * 
   * @param request - DeployServiceInstanceRequest
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: $_model.DeployServiceInstanceRequest): Promise<$_model.DeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * List available regions.
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
   * List available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 生成并校验服务创建stack所需要的权限
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
   * 生成并校验服务创建stack所需要的权限
   * 
   * @param request - GenerateServicePolicyRequest
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicy(request: $_model.GenerateServicePolicyRequest): Promise<$_model.GenerateServicePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateServicePolicyWithOptions(request, runtime);
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
   * Queries the information about a service instance based on the region ID and the ID of the service instance or the Alibaba Cloud Marketplace instance. Information including the service status, template name, and involved resources are returned.
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
   * Queries the information about a service instance based on the region ID and the ID of the service instance or the Alibaba Cloud Marketplace instance. Information including the service status, template name, and involved resources are returned.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: $_model.GetServiceInstanceRequest): Promise<$_model.GetServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Query renewal prices for prepaid resources of private deployment service instance. You can query renewal prices for all prepaid resources included in a service instance, or query renewal prices for specified resources. Only one of the two methods can be used.
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
   * Query renewal prices for prepaid resources of private deployment service instance. You can query renewal prices for all prepaid resources included in a service instance, or query renewal prices for specified resources. Only one of the two methods can be used.
   * 
   * @param request - GetServiceInstanceSubscriptionEstimateCostRequest
   * @returns GetServiceInstanceSubscriptionEstimateCostResponse
   */
  async getServiceInstanceSubscriptionEstimateCost(request: $_model.GetServiceInstanceSubscriptionEstimateCostRequest): Promise<$_model.GetServiceInstanceSubscriptionEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceSubscriptionEstimateCostWithOptions(request, runtime);
  }

  /**
   * 计算巢查询服务是否开通
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
   * 计算巢查询服务是否开通
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: $_model.GetServiceProvisionsRequest): Promise<$_model.GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries the constraints on the parameters in an Resource Orchestration Service (ROS) template.
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
   * Queries the constraints on the parameters in an Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: $_model.GetServiceTemplateParameterConstraintsRequest): Promise<$_model.GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a customer.
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
   * Queries the information about a customer.
   * 
   * @param request - GetUserInformationRequest
   * @returns GetUserInformationResponse
   */
  async getUserInformation(request: $_model.GetUserInformationRequest): Promise<$_model.GetUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserInformationWithOptions(request, runtime);
  }

  /**
   * Query Permission Policy List
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
   * Query Permission Policy List
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * 查询服务类别
   * 
   * @param request - ListServiceCategoriesRequest
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
   * 查询服务类别
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategories(): Promise<$_model.ListServiceCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceCategoriesWithOptions(runtime);
  }

  /**
   * 展示服务实例账单
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
   * 展示服务实例账单
   * 
   * @param request - ListServiceInstanceBillRequest
   * @returns ListServiceInstanceBillResponse
   */
  async listServiceInstanceBill(request: $_model.ListServiceInstanceBillRequest): Promise<$_model.ListServiceInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceBillWithOptions(request, runtime);
  }

  /**
   * Queries the deployment and upgrade logs of a service instance.
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
   * Queries the deployment and upgrade logs of a service instance.
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogs(request: $_model.ListServiceInstanceLogsRequest): Promise<$_model.ListServiceInstanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  /**
   * Queries the resources contained in a service instance.
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
   * Queries the resources contained in a service instance.
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResources(request: $_model.ListServiceInstanceResourcesRequest): Promise<$_model.ListServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the upgrade history of a service instance.
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
   * Queries the upgrade history of a service instance.
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistory(request: $_model.ListServiceInstanceUpgradeHistoryRequest): Promise<$_model.ListServiceInstanceUpgradeHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceUpgradeHistoryWithOptions(request, runtime);
  }

  /**
   * {}
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
   * {}
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: $_model.ListServiceInstancesRequest): Promise<$_model.ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
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
   * 查询标签键列表
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
   * 查询标签键列表
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * 查询标签资源列表
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
   * 查询标签资源列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 查询标签值列表
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
   * 查询标签值列表
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Renew the prepaid resources included in the private deployment service instance. You can renew all prepaid resources under the specified service instance ID, or you can renew the specified resources. Only one of the two renewal methods can be used.
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
   * Renew the prepaid resources included in the private deployment service instance. You can renew all prepaid resources under the specified service instance ID, or you can renew the specified resources. Only one of the two renewal methods can be used.
   * 
   * @param request - RenewServiceInstanceResourcesRequest
   * @returns RenewServiceInstanceResourcesResponse
   */
  async renewServiceInstanceResources(request: $_model.RenewServiceInstanceResourcesRequest): Promise<$_model.RenewServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewServiceInstanceResourcesWithOptions(request, runtime);
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
   * Rolls back an upgraded service instance to the previous version.
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
   * Rolls back an upgraded service instance to the previous version.
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
   * 给资源打标签
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
   * 给资源打标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 给资源解除标签
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
   * 给资源解除标签
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
   * Changes the configurations of a service instance.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Configuration change is enabled and the related parameters are configured for the service by the service provider.
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
   * Changes the configurations of a service instance.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Configuration change is enabled and the related parameters are configured for the service by the service provider.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: $_model.UpdateServiceInstanceSpecRequest): Promise<$_model.UpdateServiceInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Updates the application for using a service.
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
   * Updates the application for using a service.
   * 
   * @param request - UpdateServiceUsageRequest
   * @returns UpdateServiceUsageResponse
   */
  async updateServiceUsage(request: $_model.UpdateServiceUsageRequest): Promise<$_model.UpdateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceUsageWithOptions(request, runtime);
  }

  /**
   * Updates the information about a customer.
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
   * Updates the information about a customer.
   * 
   * @param request - UpdateUserInformationRequest
   * @returns UpdateUserInformationResponse
   */
  async updateUserInformation(request: $_model.UpdateUserInformationRequest): Promise<$_model.UpdateUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserInformationWithOptions(request, runtime);
  }

  /**
   * Upgrades the version of a service instance.
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
   * Upgrades the version of a service instance.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: $_model.UpgradeServiceInstanceRequest): Promise<$_model.UpgradeServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

}
