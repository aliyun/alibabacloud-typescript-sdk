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
    this._endpoint = this.getEndpoint("privatelink", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an account ID to the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you add an account ID to the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - AddUserToVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointServiceWithOptions(request: $_model.AddUserToVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToVpcEndpointServiceResponse({}));
  }

  /**
   * Adds an account ID to the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you add an account ID to the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - AddUserToVpcEndpointServiceRequest
   * @returns AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointService(request: $_model.AddUserToVpcEndpointServiceRequest): Promise<$_model.AddUserToVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Adds a zone to an endpoint.
   * 
   * @remarks
   *   **AddZoneToVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the state of the zone.
   *     *   If the zone is in the **Creating** state, the zone is being added.
   *     *   If the zone is in the Wait state, the zone is added.
   * *   You cannot repeatedly call the **AddZoneToVpcEndpoint** operation to add a zone to an endpoint within a specified period of time.
   * 
   * @param request - AddZoneToVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpointWithOptions(request: $_model.AddZoneToVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddZoneToVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.ipv6Address)) {
      query["Ipv6Address"] = request.ipv6Address;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddZoneToVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddZoneToVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.AddZoneToVpcEndpointResponse({}));
  }

  /**
   * Adds a zone to an endpoint.
   * 
   * @remarks
   *   **AddZoneToVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the state of the zone.
   *     *   If the zone is in the **Creating** state, the zone is being added.
   *     *   If the zone is in the Wait state, the zone is added.
   * *   You cannot repeatedly call the **AddZoneToVpcEndpoint** operation to add a zone to an endpoint within a specified period of time.
   * 
   * @param request - AddZoneToVpcEndpointRequest
   * @returns AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpoint(request: $_model.AddZoneToVpcEndpointRequest): Promise<$_model.AddZoneToVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneToVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Adds a service resource to an endpoint service.
   * 
   * @remarks
   *   Before you add a service resource to an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
   * 
   * @param request - AttachResourceToVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointServiceWithOptions(request: $_model.AttachResourceToVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachResourceToVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachResourceToVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachResourceToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.AttachResourceToVpcEndpointServiceResponse({}));
  }

  /**
   * Adds a service resource to an endpoint service.
   * 
   * @remarks
   *   Before you add a service resource to an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
   * 
   * @param request - AttachResourceToVpcEndpointServiceRequest
   * @returns AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointService(request: $_model.AttachResourceToVpcEndpointServiceRequest): Promise<$_model.AttachResourceToVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachResourceToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Associates an endpoint with a security group.
   * 
   * @remarks
   *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) operation to query the state of the endpoint.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
   *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
   * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
   * 
   * @param request - AttachSecurityGroupToVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpointWithOptions(request: $_model.AttachSecurityGroupToVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachSecurityGroupToVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachSecurityGroupToVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachSecurityGroupToVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.AttachSecurityGroupToVpcEndpointResponse({}));
  }

  /**
   * Associates an endpoint with a security group.
   * 
   * @remarks
   *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) operation to query the state of the endpoint.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
   *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
   * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
   * 
   * @param request - AttachSecurityGroupToVpcEndpointRequest
   * @returns AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpoint(request: $_model.AttachSecurityGroupToVpcEndpointRequest): Promise<$_model.AttachSecurityGroupToVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSecurityGroupToVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      version: "2020-04-15",
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
   * Modifies a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries whether PrivateLink is activated.
   * 
   * @param request - CheckProductOpenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckProductOpenResponse
   */
  async checkProductOpenWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckProductOpenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckProductOpen",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckProductOpenResponse>(await this.callApi(params, req, runtime), new $_model.CheckProductOpenResponse({}));
  }

  /**
   * Queries whether PrivateLink is activated.
   * @returns CheckProductOpenResponse
   */
  async checkProductOpen(): Promise<$_model.CheckProductOpenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkProductOpenWithOptions(runtime);
  }

  /**
   * Creates an endpoint.
   * 
   * @remarks
   * *CreateVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is created.
   * *   If the endpoint is in the **Creating** state, the endpoint is being created.
   * *   If the endpoint is in the **Active** state, the endpoint is created.
   * 
   * @param request - CreateVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpointWithOptions(request: $_model.CreateVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionBandwidth)) {
      query["CrossRegionBandwidth"] = request.crossRegionBandwidth;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.protectedEnabled)) {
      query["ProtectedEnabled"] = request.protectedEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zone)) {
      query["Zone"] = request.zone;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    if (!$dara.isNull(request.zonePrivateIpAddressCount)) {
      query["ZonePrivateIpAddressCount"] = request.zonePrivateIpAddressCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcEndpointResponse({}));
  }

  /**
   * Creates an endpoint.
   * 
   * @remarks
   * *CreateVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is created.
   * *   If the endpoint is in the **Creating** state, the endpoint is being created.
   * *   If the endpoint is in the **Active** state, the endpoint is created.
   * 
   * @param request - CreateVpcEndpointRequest
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpoint(request: $_model.CreateVpcEndpointRequest): Promise<$_model.CreateVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint service.
   * 
   * @remarks
   *   Before you create an endpoint service, make sure that you have created a Server Load Balancer (SLB) instance that supports PrivateLink. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/174064.html).
   * *   **CreateVpcEndpointService** is an asynchronous operation. After a request is sent, the system returns a request ID and an instance ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to query the status of the endpoint service.
   *     *   If the endpoint service is in the **Creating** state, the endpoint service is being created.
   *     *   If the endpoint service is in the **Active** state, the endpoint service is created.
   * 
   * @param request - CreateVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointServiceWithOptions(request: $_model.CreateVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.payer)) {
      query["Payer"] = request.payer;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!$dara.isNull(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!$dara.isNull(request.supportedRegionList)) {
      query["SupportedRegionList"] = request.supportedRegionList;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcEndpointServiceResponse({}));
  }

  /**
   * Creates an endpoint service.
   * 
   * @remarks
   *   Before you create an endpoint service, make sure that you have created a Server Load Balancer (SLB) instance that supports PrivateLink. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/174064.html).
   * *   **CreateVpcEndpointService** is an asynchronous operation. After a request is sent, the system returns a request ID and an instance ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to query the status of the endpoint service.
   *     *   If the endpoint service is in the **Creating** state, the endpoint service is being created.
   *     *   If the endpoint service is in the **Active** state, the endpoint service is created.
   * 
   * @param request - CreateVpcEndpointServiceRequest
   * @returns CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointService(request: $_model.CreateVpcEndpointServiceRequest): Promise<$_model.CreateVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint.
   * 
   * @remarks
   *   Before you delete an endpoint, you must delete the zones that are added to the endpoint.
   * *   **DeleteVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is deleted.
   *     *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
   *     *   If the endpoint cannot be queried, the endpoint is deleted.
   * 
   * @param request - DeleteVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpointWithOptions(request: $_model.DeleteVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcEndpointResponse({}));
  }

  /**
   * Deletes an endpoint.
   * 
   * @remarks
   *   Before you delete an endpoint, you must delete the zones that are added to the endpoint.
   * *   **DeleteVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is deleted.
   *     *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
   *     *   If the endpoint cannot be queried, the endpoint is deleted.
   * 
   * @param request - DeleteVpcEndpointRequest
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpoint(request: $_model.DeleteVpcEndpointRequest): Promise<$_model.DeleteVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint service.
   * 
   * @remarks
   *   Before you delete an endpoint service, you must disconnect the endpoint from the endpoint service and remove the service resources.
   * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to check whether the endpoint service is deleted.
   *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
   *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
   * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - DeleteVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointServiceWithOptions(request: $_model.DeleteVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DeleteVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcEndpointServiceResponse({}));
  }

  /**
   * Deletes an endpoint service.
   * 
   * @remarks
   *   Before you delete an endpoint service, you must disconnect the endpoint from the endpoint service and remove the service resources.
   * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to check whether the endpoint service is deleted.
   *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
   *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
   * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - DeleteVpcEndpointServiceRequest
   * @returns DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointService(request: $_model.DeleteVpcEndpointServiceRequest): Promise<$_model.DeleteVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Queries available regions and zones.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-04-15",
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
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2020-04-15",
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
   * Queries a list of zones in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Removes a service resource from an endpoint service.
   * 
   * @remarks
   *   Before you remove a service resource from an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **DetachResourceFromVpcEndpointService** operation to remove a service resource from an endpoint service within a specified period of time.
   * 
   * @param request - DetachResourceFromVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachResourceFromVpcEndpointServiceResponse
   */
  async detachResourceFromVpcEndpointServiceWithOptions(request: $_model.DetachResourceFromVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachResourceFromVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachResourceFromVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachResourceFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.DetachResourceFromVpcEndpointServiceResponse({}));
  }

  /**
   * Removes a service resource from an endpoint service.
   * 
   * @remarks
   *   Before you remove a service resource from an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **DetachResourceFromVpcEndpointService** operation to remove a service resource from an endpoint service within a specified period of time.
   * 
   * @param request - DetachResourceFromVpcEndpointServiceRequest
   * @returns DetachResourceFromVpcEndpointServiceResponse
   */
  async detachResourceFromVpcEndpointService(request: $_model.DetachResourceFromVpcEndpointServiceRequest): Promise<$_model.DetachResourceFromVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachResourceFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Disassociates an endpoint from a security group.
   * 
   * @remarks
   *   **DetachSecurityGroupFromVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) to check whether the endpoint is disassociated from the security group.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being disassociated from the security group.
   *     *   If you cannot query the endpoint in the security group, the endpoint is disassociated from the security group.
   * *   You cannot repeatedly call the **DetachSecurityGroupFromVpcEndpoint** operation to disassociate an endpoint from a security group within a specified period of time.
   * 
   * @param request - DetachSecurityGroupFromVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpointWithOptions(request: $_model.DetachSecurityGroupFromVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachSecurityGroupFromVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachSecurityGroupFromVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachSecurityGroupFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DetachSecurityGroupFromVpcEndpointResponse({}));
  }

  /**
   * Disassociates an endpoint from a security group.
   * 
   * @remarks
   *   **DetachSecurityGroupFromVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) to check whether the endpoint is disassociated from the security group.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being disassociated from the security group.
   *     *   If you cannot query the endpoint in the security group, the endpoint is disassociated from the security group.
   * *   You cannot repeatedly call the **DetachSecurityGroupFromVpcEndpoint** operation to disassociate an endpoint from a security group within a specified period of time.
   * 
   * @param request - DetachSecurityGroupFromVpcEndpointRequest
   * @returns DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpoint(request: $_model.DetachSecurityGroupFromVpcEndpointRequest): Promise<$_model.DetachSecurityGroupFromVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSecurityGroupFromVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Rejects a connection request from an endpoint.
   * 
   * @remarks
   *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
   *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
   * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
   * 
   * @param request - DisableVpcEndpointConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnectionWithOptions(request: $_model.DisableVpcEndpointConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableVpcEndpointConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DisableVpcEndpointConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DisableVpcEndpointConnectionResponse({}));
  }

  /**
   * Rejects a connection request from an endpoint.
   * 
   * @remarks
   *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
   *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
   * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
   * 
   * @param request - DisableVpcEndpointConnectionRequest
   * @returns DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnection(request: $_model.DisableVpcEndpointConnectionRequest): Promise<$_model.DisableVpcEndpointConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
   * Closes connections in an endpoint zone.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the zone associated with the endpoint is **Connected** or **Migrated**.
   * *   **DisableVpcEndpointZoneConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the status of the task.
   *     *   If the zone is in the **Disconnecting** state, the task is running.
   *     *   If the zone is in the **Disconnected** state, the task is successful.
   * *   You cannot repeatedly call the **DisableVpcEndpointZoneConnection** operation to allow an endpoint service to reject a connection request from the endpoint in the zone within a specified period of time.
   * 
   * @param request - DisableVpcEndpointZoneConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnectionWithOptions(request: $_model.DisableVpcEndpointZoneConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableVpcEndpointZoneConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacedResource)) {
      query["ReplacedResource"] = request.replacedResource;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableVpcEndpointZoneConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DisableVpcEndpointZoneConnectionResponse({}));
  }

  /**
   * Closes connections in an endpoint zone.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the zone associated with the endpoint is **Connected** or **Migrated**.
   * *   **DisableVpcEndpointZoneConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the status of the task.
   *     *   If the zone is in the **Disconnecting** state, the task is running.
   *     *   If the zone is in the **Disconnected** state, the task is successful.
   * *   You cannot repeatedly call the **DisableVpcEndpointZoneConnection** operation to allow an endpoint service to reject a connection request from the endpoint in the zone within a specified period of time.
   * 
   * @param request - DisableVpcEndpointZoneConnectionRequest
   * @returns DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnection(request: $_model.DisableVpcEndpointZoneConnectionRequest): Promise<$_model.DisableVpcEndpointZoneConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  /**
   * Accepts connection requests from an endpoint.
   * 
   * @remarks
   *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the state is **Connecting**, the endpoint connection is being established.
   *     *   If the state is **Connected**, the endpoint connection is established.
   * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
   * 
   * @param request - EnableVpcEndpointConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnectionWithOptions(request: $_model.EnableVpcEndpointConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableVpcEndpointConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.trafficControlMode)) {
      query["TrafficControlMode"] = request.trafficControlMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableVpcEndpointConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new $_model.EnableVpcEndpointConnectionResponse({}));
  }

  /**
   * Accepts connection requests from an endpoint.
   * 
   * @remarks
   *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the state is **Connecting**, the endpoint connection is being established.
   *     *   If the state is **Connected**, the endpoint connection is established.
   * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
   * 
   * @param request - EnableVpcEndpointConnectionRequest
   * @returns EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnection(request: $_model.EnableVpcEndpointConnectionRequest): Promise<$_model.EnableVpcEndpointConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
   * Allows connections to endpoint zones.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
   * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
   *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
   *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
   * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
   * 
   * @param request - EnableVpcEndpointZoneConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnectionWithOptions(request: $_model.EnableVpcEndpointZoneConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableVpcEndpointZoneConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableVpcEndpointZoneConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new $_model.EnableVpcEndpointZoneConnectionResponse({}));
  }

  /**
   * Allows connections to endpoint zones.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
   * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
   *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
   *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
   * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
   * 
   * @param request - EnableVpcEndpointZoneConnectionRequest
   * @returns EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnection(request: $_model.EnableVpcEndpointZoneConnectionRequest): Promise<$_model.EnableVpcEndpointZoneConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetVpcEndpointAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcEndpointAttributeResponse
   */
  async getVpcEndpointAttributeWithOptions(request: $_model.GetVpcEndpointAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpcEndpointAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcEndpointAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetVpcEndpointAttributeResponse({}));
  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetVpcEndpointAttributeRequest
   * @returns GetVpcEndpointAttributeResponse
   */
  async getVpcEndpointAttribute(request: $_model.GetVpcEndpointAttributeRequest): Promise<$_model.GetVpcEndpointAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcEndpointAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an endpoint service.
   * 
   * @param request - GetVpcEndpointServiceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcEndpointServiceAttributeResponse
   */
  async getVpcEndpointServiceAttributeWithOptions(request: $_model.GetVpcEndpointServiceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpcEndpointServiceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "GetVpcEndpointServiceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetVpcEndpointServiceAttributeResponse({}));
  }

  /**
   * Queries the attributes of an endpoint service.
   * 
   * @param request - GetVpcEndpointServiceAttributeRequest
   * @returns GetVpcEndpointServiceAttributeResponse
   */
  async getVpcEndpointServiceAttribute(request: $_model.GetVpcEndpointServiceAttributeRequest): Promise<$_model.GetVpcEndpointServiceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   You must specify **ResourceId.N** or **Tag.N** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair (Tag.N.Key and Tag.N.Value). If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
   * *   If you specify **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2020-04-15",
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
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   You must specify **ResourceId.N** or **Tag.N** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair (Tag.N.Key and Tag.N.Value). If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
   * *   If you specify **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries endpoint connections.
   * 
   * @param request - ListVpcEndpointConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointConnectionsResponse
   */
  async listVpcEndpointConnectionsWithOptions(request: $_model.ListVpcEndpointConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointConnectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointOwnerId)) {
      query["EndpointOwnerId"] = request.endpointOwnerId;
    }

    if (!$dara.isNull(request.eniId)) {
      query["EniId"] = request.eniId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacedResourceId)) {
      query["ReplacedResourceId"] = request.replacedResourceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointConnections",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointConnectionsResponse({}));
  }

  /**
   * Queries endpoint connections.
   * 
   * @param request - ListVpcEndpointConnectionsRequest
   * @returns ListVpcEndpointConnectionsResponse
   */
  async listVpcEndpointConnections(request: $_model.ListVpcEndpointConnectionsRequest): Promise<$_model.ListVpcEndpointConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries the security groups that are associated with an endpoint.
   * 
   * @param request - ListVpcEndpointSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointSecurityGroupsResponse
   */
  async listVpcEndpointSecurityGroupsWithOptions(request: $_model.ListVpcEndpointSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointSecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointSecurityGroups",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointSecurityGroupsResponse({}));
  }

  /**
   * Queries the security groups that are associated with an endpoint.
   * 
   * @param request - ListVpcEndpointSecurityGroupsRequest
   * @returns ListVpcEndpointSecurityGroupsResponse
   */
  async listVpcEndpointSecurityGroups(request: $_model.ListVpcEndpointSecurityGroupsRequest): Promise<$_model.ListVpcEndpointSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the service resources that are added to an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServiceResourcesResponse
   */
  async listVpcEndpointServiceResourcesWithOptions(request: $_model.ListVpcEndpointServiceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointServiceResourcesResponse> {
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
      action: "ListVpcEndpointServiceResources",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointServiceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointServiceResourcesResponse({}));
  }

  /**
   * Queries the service resources that are added to an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceResourcesRequest
   * @returns ListVpcEndpointServiceResourcesResponse
   */
  async listVpcEndpointServiceResources(request: $_model.ListVpcEndpointServiceResourcesRequest): Promise<$_model.ListVpcEndpointServiceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServiceResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist of an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServiceUsersResponse
   */
  async listVpcEndpointServiceUsersWithOptions(request: $_model.ListVpcEndpointServiceUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointServiceUsersResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userListType)) {
      query["UserListType"] = request.userListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServiceUsers",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointServiceUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointServiceUsersResponse({}));
  }

  /**
   * Queries the whitelist of an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceUsersRequest
   * @returns ListVpcEndpointServiceUsersResponse
   */
  async listVpcEndpointServiceUsers(request: $_model.ListVpcEndpointServiceUsersRequest): Promise<$_model.ListVpcEndpointServiceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServiceUsersWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoint services.
   * 
   * @param request - ListVpcEndpointServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServicesResponse
   */
  async listVpcEndpointServicesWithOptions(request: $_model.ListVpcEndpointServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceBusinessStatus)) {
      query["ServiceBusinessStatus"] = request.serviceBusinessStatus;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServices",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointServicesResponse({}));
  }

  /**
   * Queries a list of endpoint services.
   * 
   * @param request - ListVpcEndpointServicesRequest
   * @returns ListVpcEndpointServicesResponse
   */
  async listVpcEndpointServices(request: $_model.ListVpcEndpointServicesRequest): Promise<$_model.ListVpcEndpointServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServicesWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoint services that can be associated with the endpoint created within the current account.
   * 
   * @param request - ListVpcEndpointServicesByEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServicesByEndUserResponse
   */
  async listVpcEndpointServicesByEndUserWithOptions(request: $_model.ListVpcEndpointServicesByEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointServicesByEndUserResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServicesByEndUser",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointServicesByEndUserResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointServicesByEndUserResponse({}));
  }

  /**
   * Queries a list of endpoint services that can be associated with the endpoint created within the current account.
   * 
   * @param request - ListVpcEndpointServicesByEndUserRequest
   * @returns ListVpcEndpointServicesByEndUserResponse
   */
  async listVpcEndpointServicesByEndUser(request: $_model.ListVpcEndpointServicesByEndUserRequest): Promise<$_model.ListVpcEndpointServicesByEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServicesByEndUserWithOptions(request, runtime);
  }

  /**
   * Queries the zones of an endpoint.
   * 
   * @param request - ListVpcEndpointZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointZonesResponse
   */
  async listVpcEndpointZonesWithOptions(request: $_model.ListVpcEndpointZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointZones",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointZonesResponse({}));
  }

  /**
   * Queries the zones of an endpoint.
   * 
   * @param request - ListVpcEndpointZonesRequest
   * @returns ListVpcEndpointZonesResponse
   */
  async listVpcEndpointZones(request: $_model.ListVpcEndpointZonesRequest): Promise<$_model.ListVpcEndpointZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointZonesWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - ListVpcEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpointsWithOptions(request: $_model.ListVpcEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.endpointStatus)) {
      query["EndpointStatus"] = request.endpointStatus;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
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
      action: "ListVpcEndpoints",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointsResponse({}));
  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - ListVpcEndpointsRequest
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpoints(request: $_model.ListVpcEndpointsRequest): Promise<$_model.ListVpcEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointsWithOptions(request, runtime);
  }

  /**
   * Activates PrivateLink.
   * 
   * @param request - OpenPrivateLinkServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenPrivateLinkServiceResponse
   */
  async openPrivateLinkServiceWithOptions(request: $_model.OpenPrivateLinkServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenPrivateLinkServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenPrivateLinkService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenPrivateLinkServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenPrivateLinkServiceResponse({}));
  }

  /**
   * Activates PrivateLink.
   * 
   * @param request - OpenPrivateLinkServiceRequest
   * @returns OpenPrivateLinkServiceResponse
   */
  async openPrivateLinkService(request: $_model.OpenPrivateLinkServiceRequest): Promise<$_model.OpenPrivateLinkServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openPrivateLinkServiceWithOptions(request, runtime);
  }

  /**
   * Removes an account ID from the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you remove an account ID from the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - RemoveUserFromVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointServiceWithOptions(request: $_model.RemoveUserFromVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromVpcEndpointServiceResponse({}));
  }

  /**
   * Removes an account ID from the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you remove an account ID from the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - RemoveUserFromVpcEndpointServiceRequest
   * @returns RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointService(request: $_model.RemoveUserFromVpcEndpointServiceRequest): Promise<$_model.RemoveUserFromVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a zone of an endpoint.
   * 
   * @remarks
   *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the zone of the endpoint is deleted.
   *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
   *     *   If the zone cannot be queried, the zone is deleted.
   * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
   * 
   * @param request - RemoveZoneFromVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpointWithOptions(request: $_model.RemoveZoneFromVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveZoneFromVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveZoneFromVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveZoneFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.RemoveZoneFromVpcEndpointResponse({}));
  }

  /**
   * Deletes a zone of an endpoint.
   * 
   * @remarks
   *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the zone of the endpoint is deleted.
   *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
   *     *   If the zone cannot be queried, the zone is deleted.
   * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
   * 
   * @param request - RemoveZoneFromVpcEndpointRequest
   * @returns RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpoint(request: $_model.RemoveZoneFromVpcEndpointRequest): Promise<$_model.RemoveZoneFromVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeZoneFromVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources. You can call this API operation to add tags to one or more endpoints or endpoint services.
   * 
   * @remarks
   * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-04-15",
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
   * Adds tags to resources. You can call this API operation to add tags to one or more endpoints or endpoint services.
   * 
   * @remarks
   * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from one or more endpoints or endpoint services at a time.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      bodyFlat["TagKey"] = request.tagKey;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-04-15",
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
   * Removes tags from one or more endpoints or endpoint services at a time.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttributeWithOptions(request: $_model.UpdateVpcEndpointAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpcEndpointAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionBandwidth)) {
      query["CrossRegionBandwidth"] = request.crossRegionBandwidth;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetPolicy)) {
      query["ResetPolicy"] = request.resetPolicy;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpcEndpointAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an endpoint.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointAttributeRequest
   * @returns UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttribute(request: $_model.UpdateVpcEndpointAttributeRequest): Promise<$_model.UpdateVpcEndpointAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint connection.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointConnectionAttribute** operation to modify the bandwidth of an endpoint connection that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointConnectionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttributeWithOptions(request: $_model.UpdateVpcEndpointConnectionAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpcEndpointConnectionAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.trafficControlMode)) {
      query["TrafficControlMode"] = request.trafficControlMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointConnectionAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpcEndpointConnectionAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpcEndpointConnectionAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an endpoint connection.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointConnectionAttribute** operation to modify the bandwidth of an endpoint connection that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointConnectionAttributeRequest
   * @returns UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttribute(request: $_model.UpdateVpcEndpointConnectionAttributeRequest): Promise<$_model.UpdateVpcEndpointConnectionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointConnectionAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttributeWithOptions(request: $_model.UpdateVpcEndpointServiceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpcEndpointServiceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addSupportedRegionSet)) {
      query["AddSupportedRegionSet"] = request.addSupportedRegionSet;
    }

    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectBandwidth)) {
      query["ConnectBandwidth"] = request.connectBandwidth;
    }

    if (!$dara.isNull(request.deleteSupportedRegionSet)) {
      query["DeleteSupportedRegionSet"] = request.deleteSupportedRegionSet;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointServiceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpcEndpointServiceAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceAttributeRequest
   * @returns UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttribute(request: $_model.UpdateVpcEndpointServiceAttributeRequest): Promise<$_model.UpdateVpcEndpointServiceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a service resource that is added to an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceResourceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttributeWithOptions(request: $_model.UpdateVpcEndpointServiceResourceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpcEndpointServiceResourceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoAllocatedEnabled)) {
      query["AutoAllocatedEnabled"] = request.autoAllocatedEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointServiceResourceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpcEndpointServiceResourceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpcEndpointServiceResourceAttributeResponse({}));
  }

  /**
   * Modifies the attributes of a service resource that is added to an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceResourceAttributeRequest
   * @returns UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttribute(request: $_model.UpdateVpcEndpointServiceResourceAttributeRequest): Promise<$_model.UpdateVpcEndpointServiceResourceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceResourceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a service resource of a zone to which an endpoint connection belongs.
   * 
   * @remarks
   * ### Prerequisites
   * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
   * ### Usage notes
   * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
   * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
   * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to check whether the service resource is modified.
   *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
   *     *   If the endpoint service is in the **Active** state, the service resource is modified.
   * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointZoneConnectionResourceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request: $_model.UpdateVpcEndpointZoneConnectionResourceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAllocateMode)) {
      query["ResourceAllocateMode"] = request.resourceAllocateMode;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceReplaceMode)) {
      query["ResourceReplaceMode"] = request.resourceReplaceMode;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointZoneConnectionResourceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpcEndpointZoneConnectionResourceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpcEndpointZoneConnectionResourceAttributeResponse({}));
  }

  /**
   * Modifies a service resource of a zone to which an endpoint connection belongs.
   * 
   * @remarks
   * ### Prerequisites
   * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
   * ### Usage notes
   * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
   * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
   * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to check whether the service resource is modified.
   *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
   *     *   If the endpoint service is in the **Active** state, the service resource is modified.
   * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointZoneConnectionResourceAttributeRequest
   * @returns UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttribute(request: $_model.UpdateVpcEndpointZoneConnectionResourceAttributeRequest): Promise<$_model.UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request, runtime);
  }

}
