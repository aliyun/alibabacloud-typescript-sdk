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
    this._endpoint = this.getEndpoint("eipanycast", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - AllocateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateAnycastEipAddressResponse
   */
  async allocateAnycastEipAddressWithOptions(request: $_model.AllocateAnycastEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateAnycastEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.AllocateAnycastEipAddressResponse({}));
  }

  /**
   * Creates an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - AllocateAnycastEipAddressRequest
   * @returns AllocateAnycastEipAddressResponse
   */
  async allocateAnycastEipAddress(request: $_model.AllocateAnycastEipAddressRequest): Promise<$_model.AllocateAnycastEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Associates an Anycast elastic IP address (Anycast EIP) with an endpoint.
   * 
   * @param request - AssociateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAnycastEipAddressResponse
   */
  async associateAnycastEipAddressWithOptions(request: $_model.AssociateAnycastEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAnycastEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!$dara.isNull(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!$dara.isNull(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!$dara.isNull(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.popLocations)) {
      query["PopLocations"] = request.popLocations;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.AssociateAnycastEipAddressResponse({}));
  }

  /**
   * Associates an Anycast elastic IP address (Anycast EIP) with an endpoint.
   * 
   * @param request - AssociateAnycastEipAddressRequest
   * @returns AssociateAnycastEipAddressResponse
   */
  async associateAnycastEipAddress(request: $_model.AssociateAnycastEipAddressRequest): Promise<$_model.AssociateAnycastEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * 修改AnycastEIp实例资源组
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
      version: "2020-03-09",
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
   * 修改AnycastEIp实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries Anycast elastic IP addresses (Anycast EIPs) associated with specified instance IP addresses or instance IDs, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - DescribeAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastEipAddressResponse
   */
  async describeAnycastEipAddressWithOptions(request: $_model.DescribeAnycastEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnycastEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnycastEipAddressResponse({}));
  }

  /**
   * Queries Anycast elastic IP addresses (Anycast EIPs) associated with specified instance IP addresses or instance IDs, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - DescribeAnycastEipAddressRequest
   * @returns DescribeAnycastEipAddressResponse
   */
  async describeAnycastEipAddress(request: $_model.DescribeAnycastEipAddressRequest): Promise<$_model.DescribeAnycastEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access points in an area.
   * 
   * @param request - DescribeAnycastPopLocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastPopLocationsResponse
   */
  async describeAnycastPopLocationsWithOptions(request: $_model.DescribeAnycastPopLocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnycastPopLocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnycastPopLocations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnycastPopLocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnycastPopLocationsResponse({}));
  }

  /**
   * Queries the information about the access points in an area.
   * 
   * @param request - DescribeAnycastPopLocationsRequest
   * @returns DescribeAnycastPopLocationsResponse
   */
  async describeAnycastPopLocations(request: $_model.DescribeAnycastPopLocationsRequest): Promise<$_model.DescribeAnycastPopLocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnycastPopLocationsWithOptions(request, runtime);
  }

  /**
   * Queries the regions where you can associate Anycast elastic IP addresses (Anycast EIPs) with endpoints.
   * 
   * @param request - DescribeAnycastServerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastServerRegionsResponse
   */
  async describeAnycastServerRegionsWithOptions(request: $_model.DescribeAnycastServerRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnycastServerRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnycastServerRegions",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnycastServerRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnycastServerRegionsResponse({}));
  }

  /**
   * Queries the regions where you can associate Anycast elastic IP addresses (Anycast EIPs) with endpoints.
   * 
   * @param request - DescribeAnycastServerRegionsRequest
   * @returns DescribeAnycastServerRegionsResponse
   */
  async describeAnycastServerRegions(request: $_model.DescribeAnycastServerRegionsRequest): Promise<$_model.DescribeAnycastServerRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnycastServerRegionsWithOptions(request, runtime);
  }

  /**
   * Queries information about Anycast elastic IP addresses (Anycast EIPs) in an access area, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - ListAnycastEipAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnycastEipAddressesResponse
   */
  async listAnycastEipAddressesWithOptions(request: $_model.ListAnycastEipAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnycastEipAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastEipAddress)) {
      query["AnycastEipAddress"] = request.anycastEipAddress;
    }

    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.anycastIds)) {
      query["AnycastIds"] = request.anycastIds;
    }

    if (!$dara.isNull(request.bindInstanceIds)) {
      query["BindInstanceIds"] = request.bindInstanceIds;
    }

    if (!$dara.isNull(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnycastEipAddresses",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnycastEipAddressesResponse>(await this.callApi(params, req, runtime), new $_model.ListAnycastEipAddressesResponse({}));
  }

  /**
   * Queries information about Anycast elastic IP addresses (Anycast EIPs) in an access area, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - ListAnycastEipAddressesRequest
   * @returns ListAnycastEipAddressesResponse
   */
  async listAnycastEipAddresses(request: $_model.ListAnycastEipAddressesRequest): Promise<$_model.ListAnycastEipAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnycastEipAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

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
      version: "2020-03-09",
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
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnycastEipAddressAttributeResponse
   */
  async modifyAnycastEipAddressAttributeWithOptions(request: $_model.ModifyAnycastEipAddressAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAnycastEipAddressAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAnycastEipAddressAttribute",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAnycastEipAddressAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAnycastEipAddressAttributeResponse({}));
  }

  /**
   * Modifies the name and description of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressAttributeRequest
   * @returns ModifyAnycastEipAddressAttributeResponse
   */
  async modifyAnycastEipAddressAttribute(request: $_model.ModifyAnycastEipAddressAttributeRequest): Promise<$_model.ModifyAnycastEipAddressAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the maximum bandwidth of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnycastEipAddressSpecResponse
   */
  async modifyAnycastEipAddressSpecWithOptions(request: $_model.ModifyAnycastEipAddressSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAnycastEipAddressSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAnycastEipAddressSpec",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAnycastEipAddressSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAnycastEipAddressSpecResponse({}));
  }

  /**
   * Modifies the maximum bandwidth of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressSpecRequest
   * @returns ModifyAnycastEipAddressSpecResponse
   */
  async modifyAnycastEipAddressSpec(request: $_model.ModifyAnycastEipAddressSpecRequest): Promise<$_model.ModifyAnycastEipAddressSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressSpecWithOptions(request, runtime);
  }

  /**
   * Releases an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ReleaseAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseAnycastEipAddressResponse
   */
  async releaseAnycastEipAddressWithOptions(request: $_model.ReleaseAnycastEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseAnycastEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseAnycastEipAddressResponse({}));
  }

  /**
   * Releases an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ReleaseAnycastEipAddressRequest
   * @returns ReleaseAnycastEipAddressResponse
   */
  async releaseAnycastEipAddress(request: $_model.ReleaseAnycastEipAddressRequest): Promise<$_model.ReleaseAnycastEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to resources.
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
      version: "2020-03-09",
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
   * Creates and adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates an Anycast elastic IP address (Anycast EIP) from an endpoint.
   * 
   * @param request - UnassociateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateAnycastEipAddressResponse
   */
  async unassociateAnycastEipAddressWithOptions(request: $_model.UnassociateAnycastEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateAnycastEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!$dara.isNull(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!$dara.isNull(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.UnassociateAnycastEipAddressResponse({}));
  }

  /**
   * Disassociates an Anycast elastic IP address (Anycast EIP) from an endpoint.
   * 
   * @param request - UnassociateAnycastEipAddressRequest
   * @returns UnassociateAnycastEipAddressResponse
   */
  async unassociateAnycastEipAddress(request: $_model.UnassociateAnycastEipAddressRequest): Promise<$_model.UnassociateAnycastEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Removes tags from Anycast EIPs.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2020-03-09",
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
   * Removes tags from Anycast EIPs.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * If an Anycast EIP is associated with endpoints in different regions, you can change the access points that are mapped to an endpoint. You can call UpdateAnycastEipAddressAssociations to add or delete endpoints to modify the mappings between endpoints and access points.
   * 
   * @param request - UpdateAnycastEipAddressAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnycastEipAddressAssociationsResponse
   */
  async updateAnycastEipAddressAssociationsWithOptions(request: $_model.UpdateAnycastEipAddressAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAnycastEipAddressAssociationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!$dara.isNull(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!$dara.isNull(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.popLocationAddList)) {
      query["PopLocationAddList"] = request.popLocationAddList;
    }

    if (!$dara.isNull(request.popLocationDeleteList)) {
      query["PopLocationDeleteList"] = request.popLocationDeleteList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAnycastEipAddressAssociations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAnycastEipAddressAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAnycastEipAddressAssociationsResponse({}));
  }

  /**
   * If an Anycast EIP is associated with endpoints in different regions, you can change the access points that are mapped to an endpoint. You can call UpdateAnycastEipAddressAssociations to add or delete endpoints to modify the mappings between endpoints and access points.
   * 
   * @param request - UpdateAnycastEipAddressAssociationsRequest
   * @returns UpdateAnycastEipAddressAssociationsResponse
   */
  async updateAnycastEipAddressAssociations(request: $_model.UpdateAnycastEipAddressAssociationsRequest): Promise<$_model.UpdateAnycastEipAddressAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAnycastEipAddressAssociationsWithOptions(request, runtime);
  }

}
