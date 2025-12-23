// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vpcipam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加ipam可信服务纳管成员
   * 
   * @param request - AddIpamMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpamMembersResponse
   */
  async addIpamMembersWithOptions(request: $_model.AddIpamMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpamMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpamMembers",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpamMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddIpamMembersResponse({}));
  }

  /**
   * 添加ipam可信服务纳管成员
   * 
   * @param request - AddIpamMembersRequest
   * @returns AddIpamMembersResponse
   */
  async addIpamMembers(request: $_model.AddIpamMembersRequest): Promise<$_model.AddIpamMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpamMembersWithOptions(request, runtime);
  }

  /**
   * Provisions a CIDR block to an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   Before you provision a CIDR block, make sure that an IPAM pool is created. You can call the **CreateIpamPool** operation to create an IPAM pool.
   * *   If no CIDR block is provisioned to a parent pool, you cannot provision CIDR blocks to its subpools.
   * *   If a CIDR block is provisioned to a parent pool, you can provision CIDR blocks to its subpools and the CIDR blocks must be subsets of the CIDR block provisioned to the parent pool.
   * *   If a CIDR block is provisioned to a parent pool and allocations are created, CIDR blocks provisioned to its subpools cannot overlap with existing allocated CIDR blocks.
   * *   You can provision CIDR blocks to a pool only in the region where the IPAM is hosted.
   * *   CIDR blocks provisioned to an IPAM pool cannot overlap with the CIDR blocks provisioned to other pools in the same scope.
   * *   A maximum of 1 CIDR block can be provisioned to a public IPv6 top-level pool, while up to 50 CIDR blocks can be provisioned to other types of address pools.
   * 
   * @param request - AddIpamPoolCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpamPoolCidrResponse
   */
  async addIpamPoolCidrWithOptions(request: $_model.AddIpamPoolCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpamPoolCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.netmaskLength)) {
      query["NetmaskLength"] = request.netmaskLength;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpamPoolCidr",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpamPoolCidrResponse>(await this.callApi(params, req, runtime), new $_model.AddIpamPoolCidrResponse({}));
  }

  /**
   * Provisions a CIDR block to an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   Before you provision a CIDR block, make sure that an IPAM pool is created. You can call the **CreateIpamPool** operation to create an IPAM pool.
   * *   If no CIDR block is provisioned to a parent pool, you cannot provision CIDR blocks to its subpools.
   * *   If a CIDR block is provisioned to a parent pool, you can provision CIDR blocks to its subpools and the CIDR blocks must be subsets of the CIDR block provisioned to the parent pool.
   * *   If a CIDR block is provisioned to a parent pool and allocations are created, CIDR blocks provisioned to its subpools cannot overlap with existing allocated CIDR blocks.
   * *   You can provision CIDR blocks to a pool only in the region where the IPAM is hosted.
   * *   CIDR blocks provisioned to an IPAM pool cannot overlap with the CIDR blocks provisioned to other pools in the same scope.
   * *   A maximum of 1 CIDR block can be provisioned to a public IPv6 top-level pool, while up to 50 CIDR blocks can be provisioned to other types of address pools.
   * 
   * @param request - AddIpamPoolCidrRequest
   * @returns AddIpamPoolCidrResponse
   */
  async addIpamPoolCidr(request: $_model.AddIpamPoolCidrRequest): Promise<$_model.AddIpamPoolCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpamPoolCidrWithOptions(request, runtime);
  }

  /**
   * Associates resource discovery with an IPAM instance.
   * 
   * @remarks
   *   The specified resource discovery instance can only be associated with one IPAM instance and associations cannot be duplicated.
   * 
   * @param request - AssociateIpamResourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateIpamResourceDiscoveryResponse
   */
  async associateIpamResourceDiscoveryWithOptions(request: $_model.AssociateIpamResourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateIpamResourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateIpamResourceDiscovery",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateIpamResourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.AssociateIpamResourceDiscoveryResponse({}));
  }

  /**
   * Associates resource discovery with an IPAM instance.
   * 
   * @remarks
   *   The specified resource discovery instance can only be associated with one IPAM instance and associations cannot be duplicated.
   * 
   * @param request - AssociateIpamResourceDiscoveryRequest
   * @returns AssociateIpamResourceDiscoveryResponse
   */
  async associateIpamResourceDiscovery(request: $_model.AssociateIpamResourceDiscoveryRequest): Promise<$_model.AssociateIpamResourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateIpamResourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Changes the resource group of an IPAM resource.
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

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-02-28",
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
   * Changes the resource group of an IPAM resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an IP Address Manager (IPAM).
   * 
   * @remarks
   * - You can create only one IPAM with each Alibaba Cloud account in each region.
   * - Only IPv4 IP addresses can be allocated.
   * - When you create an IPAM instance:
   *     - If there is no custom resource discovery in the region, the system creates a default resource discovery associated with the IPAM instance.
   *     - If there is a custom resource discovery in the region, the system converts it to a default resource discovery and associates it with the IPAM instance.
   * 
   * @param request - CreateIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamResponse
   */
  async createIpamWithOptions(request: $_model.CreateIpamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamDescription)) {
      query["IpamDescription"] = request.ipamDescription;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.operatingRegionList)) {
      query["OperatingRegionList"] = request.operatingRegionList;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpamResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpamResponse({}));
  }

  /**
   * Creates an IP Address Manager (IPAM).
   * 
   * @remarks
   * - You can create only one IPAM with each Alibaba Cloud account in each region.
   * - Only IPv4 IP addresses can be allocated.
   * - When you create an IPAM instance:
   *     - If there is no custom resource discovery in the region, the system creates a default resource discovery associated with the IPAM instance.
   *     - If there is a custom resource discovery in the region, the system converts it to a default resource discovery and associates it with the IPAM instance.
   * 
   * @param request - CreateIpamRequest
   * @returns CreateIpamResponse
   */
  async createIpam(request: $_model.CreateIpamRequest): Promise<$_model.CreateIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamWithOptions(request, runtime);
  }

  /**
   * Creates an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   * The number of public IPv6 IPAM top pool for a specific ISP that a user is allowed to create per region is limited to 1.
   * 
   * @param request - CreateIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamPoolResponse
   */
  async createIpamPoolWithOptions(request: $_model.CreateIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationDefaultCidrMask)) {
      query["AllocationDefaultCidrMask"] = request.allocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.allocationMaxCidrMask)) {
      query["AllocationMaxCidrMask"] = request.allocationMaxCidrMask;
    }

    if (!$dara.isNull(request.allocationMinCidrMask)) {
      query["AllocationMinCidrMask"] = request.allocationMinCidrMask;
    }

    if (!$dara.isNull(request.autoImport)) {
      query["AutoImport"] = request.autoImport;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.ipamPoolDescription)) {
      query["IpamPoolDescription"] = request.ipamPoolDescription;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ipv6Isp)) {
      query["Ipv6Isp"] = request.ipv6Isp;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolRegionId)) {
      query["PoolRegionId"] = request.poolRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceIpamPoolId)) {
      query["SourceIpamPoolId"] = request.sourceIpamPoolId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpamPoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpamPoolResponse({}));
  }

  /**
   * Creates an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   * The number of public IPv6 IPAM top pool for a specific ISP that a user is allowed to create per region is limited to 1.
   * 
   * @param request - CreateIpamPoolRequest
   * @returns CreateIpamPoolResponse
   */
  async createIpamPool(request: $_model.CreateIpamPoolRequest): Promise<$_model.CreateIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamPoolWithOptions(request, runtime);
  }

  /**
   * Reserves a custom CIDR block from an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   Before you reserve a custom CIDR block, make sure that an IPAM pool is created and CIDR blocks are added to the pool. You can call **CreateIpamPool** to create an IPAM pool and call **AddIpamPoolCidr** to add CIDR blocks to the pool.
   * *   When you specify Cidr or CidrMask to reserve a custom CIDR block, the mask must fall within the range specified by the IPAM pool.
   * *   If the IPAM pool has the region attribute, you must reserve a custom CIDR block in the region to which the IPAM pool belongs.
   * *   The custom CIDR block that you want to reserve cannot overlap with existing CIDR blocks created from the IPAM pool.
   * 
   * @param request - CreateIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamPoolAllocationResponse
   */
  async createIpamPoolAllocationWithOptions(request: $_model.CreateIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.cidrMask)) {
      query["CidrMask"] = request.cidrMask;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationDescription)) {
      query["IpamPoolAllocationDescription"] = request.ipamPoolAllocationDescription;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpamPoolAllocationResponse({}));
  }

  /**
   * Reserves a custom CIDR block from an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   Before you reserve a custom CIDR block, make sure that an IPAM pool is created and CIDR blocks are added to the pool. You can call **CreateIpamPool** to create an IPAM pool and call **AddIpamPoolCidr** to add CIDR blocks to the pool.
   * *   When you specify Cidr or CidrMask to reserve a custom CIDR block, the mask must fall within the range specified by the IPAM pool.
   * *   If the IPAM pool has the region attribute, you must reserve a custom CIDR block in the region to which the IPAM pool belongs.
   * *   The custom CIDR block that you want to reserve cannot overlap with existing CIDR blocks created from the IPAM pool.
   * 
   * @param request - CreateIpamPoolAllocationRequest
   * @returns CreateIpamPoolAllocationResponse
   */
  async createIpamPoolAllocation(request: $_model.CreateIpamPoolAllocationRequest): Promise<$_model.CreateIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * Creates a custom resource discovery instance.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create only one resource discovery instance in each region.
   * *   You can create only custom resource discovery instances.
   * 
   * @param request - CreateIpamResourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamResourceDiscoveryResponse
   */
  async createIpamResourceDiscoveryWithOptions(request: $_model.CreateIpamResourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpamResourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryDescription)) {
      query["IpamResourceDiscoveryDescription"] = request.ipamResourceDiscoveryDescription;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryName)) {
      query["IpamResourceDiscoveryName"] = request.ipamResourceDiscoveryName;
    }

    if (!$dara.isNull(request.operatingRegionList)) {
      query["OperatingRegionList"] = request.operatingRegionList;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamResourceDiscovery",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpamResourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpamResourceDiscoveryResponse({}));
  }

  /**
   * Creates a custom resource discovery instance.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create only one resource discovery instance in each region.
   * *   You can create only custom resource discovery instances.
   * 
   * @param request - CreateIpamResourceDiscoveryRequest
   * @returns CreateIpamResourceDiscoveryResponse
   */
  async createIpamResourceDiscovery(request: $_model.CreateIpamResourceDiscoveryRequest): Promise<$_model.CreateIpamResourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamResourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Creates a public scope and private scope to respectively manage public and private IP addresses.
   * 
   * @param request - CreateIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamScopeResponse
   */
  async createIpamScopeWithOptions(request: $_model.CreateIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamScopeDescription)) {
      query["IpamScopeDescription"] = request.ipamScopeDescription;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ipamScopeType)) {
      query["IpamScopeType"] = request.ipamScopeType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpamScopeResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpamScopeResponse({}));
  }

  /**
   * Creates a public scope and private scope to respectively manage public and private IP addresses.
   * 
   * @param request - CreateIpamScopeRequest
   * @returns CreateIpamScopeResponse
   */
  async createIpamScope(request: $_model.CreateIpamScopeRequest): Promise<$_model.CreateIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamScopeWithOptions(request, runtime);
  }

  /**
   * Deletes an IP Address Manager (IPAM).
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   Before you delete an IPAM, make sure that all IPAM pools of the IPAM are deleted. You can call **DeleteIpamPool** to delete IPAM pools.
   * *   Before you delete an IPAM, make sure that all IPAM scopes of the IPAM are deleted. You can call **DeleteIpamScope** to delete IPAM scopes.
   * 
   * @param request - DeleteIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamResponse
   */
  async deleteIpamWithOptions(request: $_model.DeleteIpamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamResponse({}));
  }

  /**
   * Deletes an IP Address Manager (IPAM).
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   Before you delete an IPAM, make sure that all IPAM pools of the IPAM are deleted. You can call **DeleteIpamPool** to delete IPAM pools.
   * *   Before you delete an IPAM, make sure that all IPAM scopes of the IPAM are deleted. You can call **DeleteIpamScope** to delete IPAM scopes.
   * 
   * @param request - DeleteIpamRequest
   * @returns DeleteIpamResponse
   */
  async deleteIpam(request: $_model.DeleteIpamRequest): Promise<$_model.DeleteIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamWithOptions(request, runtime);
  }

  /**
   * Deletes an IP Address Manager (IPAM) scope.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Before you delete a parent pool, make sure that all subpools of the parent pool are deleted.
   * *   If an effective region is specified for a parent pool and IP addresses are allocated from the parent pool, you cannot delete the parent pool.
   * *   If an effective region is specified for a subpool and IP addresses are allocated from the subpool, you cannot delete the subpool.
   * 
   * @param request - DeleteIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolResponse
   */
  async deleteIpamPoolWithOptions(request: $_model.DeleteIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamPoolResponse({}));
  }

  /**
   * Deletes an IP Address Manager (IPAM) scope.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Before you delete a parent pool, make sure that all subpools of the parent pool are deleted.
   * *   If an effective region is specified for a parent pool and IP addresses are allocated from the parent pool, you cannot delete the parent pool.
   * *   If an effective region is specified for a subpool and IP addresses are allocated from the subpool, you cannot delete the subpool.
   * 
   * @param request - DeleteIpamPoolRequest
   * @returns DeleteIpamPoolResponse
   */
  async deleteIpamPool(request: $_model.DeleteIpamPoolRequest): Promise<$_model.DeleteIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolWithOptions(request, runtime);
  }

  /**
   * Deletes a custom reserved CIDR block from an IP Address Manager (IPAM) pool.
   * 
   * @param request - DeleteIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolAllocationResponse
   */
  async deleteIpamPoolAllocationWithOptions(request: $_model.DeleteIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationId)) {
      query["IpamPoolAllocationId"] = request.ipamPoolAllocationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamPoolAllocationResponse({}));
  }

  /**
   * Deletes a custom reserved CIDR block from an IP Address Manager (IPAM) pool.
   * 
   * @param request - DeleteIpamPoolAllocationRequest
   * @returns DeleteIpamPoolAllocationResponse
   */
  async deleteIpamPoolAllocation(request: $_model.DeleteIpamPoolAllocationRequest): Promise<$_model.DeleteIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * Deletes a CIDR block provisioned to an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   If CIDR blocks are provisioned to a parent pool and its subpools, you must first delete the CIDR blocks provisioned to the subpools before you delete the ones provisioned to the parent pool.
   * *   If CIDR blocks are provisioned only to the parent pool, directly delete them.
   * *   If CIDR blocks are allocated from provisioned ones, you must first delete the allocated CIDR blocks before you delete the provisioned ones.
   * *   You can delete CIDR blocks provisioned to an IPAM pool only in the region where the IPAM is hosted.
   * 
   * @param request - DeleteIpamPoolCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolCidrResponse
   */
  async deleteIpamPoolCidrWithOptions(request: $_model.DeleteIpamPoolCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamPoolCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPoolCidr",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamPoolCidrResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamPoolCidrResponse({}));
  }

  /**
   * Deletes a CIDR block provisioned to an IP Address Manager (IPAM) pool.
   * 
   * @remarks
   *   If CIDR blocks are provisioned to a parent pool and its subpools, you must first delete the CIDR blocks provisioned to the subpools before you delete the ones provisioned to the parent pool.
   * *   If CIDR blocks are provisioned only to the parent pool, directly delete them.
   * *   If CIDR blocks are allocated from provisioned ones, you must first delete the allocated CIDR blocks before you delete the provisioned ones.
   * *   You can delete CIDR blocks provisioned to an IPAM pool only in the region where the IPAM is hosted.
   * 
   * @param request - DeleteIpamPoolCidrRequest
   * @returns DeleteIpamPoolCidrResponse
   */
  async deleteIpamPoolCidr(request: $_model.DeleteIpamPoolCidrRequest): Promise<$_model.DeleteIpamPoolCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolCidrWithOptions(request, runtime);
  }

  /**
   * Deletes a custom resource discovery instance.
   * 
   * @remarks
   *   If a resource discovery instance is shared, it cannot be deleted.
   * 
   * @param request - DeleteIpamResourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamResourceDiscoveryResponse
   */
  async deleteIpamResourceDiscoveryWithOptions(request: $_model.DeleteIpamResourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamResourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamResourceDiscovery",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamResourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamResourceDiscoveryResponse({}));
  }

  /**
   * Deletes a custom resource discovery instance.
   * 
   * @remarks
   *   If a resource discovery instance is shared, it cannot be deleted.
   * 
   * @param request - DeleteIpamResourceDiscoveryRequest
   * @returns DeleteIpamResourceDiscoveryResponse
   */
  async deleteIpamResourceDiscovery(request: $_model.DeleteIpamResourceDiscoveryRequest): Promise<$_model.DeleteIpamResourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamResourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Deletes an IP Address Manager (IPAM) scope.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   You cannot delete the private scope and public scope created by the system.
   * *   Before you delete an IPAM scope, make sure that all pools within the scope are deleted. You can call **DeleteIpamPool** to delete IPAM pools.
   * 
   * @param request - DeleteIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamScopeResponse
   */
  async deleteIpamScopeWithOptions(request: $_model.DeleteIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpamScopeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpamScopeResponse({}));
  }

  /**
   * Deletes an IP Address Manager (IPAM) scope.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   You cannot delete the private scope and public scope created by the system.
   * *   Before you delete an IPAM scope, make sure that all pools within the scope are deleted. You can call **DeleteIpamPool** to delete IPAM pools.
   * 
   * @param request - DeleteIpamScopeRequest
   * @returns DeleteIpamScopeResponse
   */
  async deleteIpamScope(request: $_model.DeleteIpamScopeRequest): Promise<$_model.DeleteIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamScopeWithOptions(request, runtime);
  }

  /**
   * Disassociates resource discovery and IPAM instances.
   * 
   * @param request - DissociateIpamResourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateIpamResourceDiscoveryResponse
   */
  async dissociateIpamResourceDiscoveryWithOptions(request: $_model.DissociateIpamResourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateIpamResourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateIpamResourceDiscovery",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateIpamResourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.DissociateIpamResourceDiscoveryResponse({}));
  }

  /**
   * Disassociates resource discovery and IPAM instances.
   * 
   * @param request - DissociateIpamResourceDiscoveryRequest
   * @returns DissociateIpamResourceDiscoveryResponse
   */
  async dissociateIpamResourceDiscovery(request: $_model.DissociateIpamResourceDiscoveryRequest): Promise<$_model.DissociateIpamResourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateIpamResourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Queries CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - GetIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpamPoolAllocationResponse
   */
  async getIpamPoolAllocationWithOptions(request: $_model.GetIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpamPoolAllocationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new $_model.GetIpamPoolAllocationResponse({}));
  }

  /**
   * Queries CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - GetIpamPoolAllocationRequest
   * @returns GetIpamPoolAllocationResponse
   */
  async getIpamPoolAllocation(request: $_model.GetIpamPoolAllocationRequest): Promise<$_model.GetIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * Gets the available CIDR blocks of the IPAM pool.
   * 
   * @param request - GetIpamPoolNextAvailableCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpamPoolNextAvailableCidrResponse
   */
  async getIpamPoolNextAvailableCidrWithOptions(request: $_model.GetIpamPoolNextAvailableCidrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpamPoolNextAvailableCidrResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpamPoolNextAvailableCidr",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpamPoolNextAvailableCidrResponse>(await this.callApi(params, req, runtime), new $_model.GetIpamPoolNextAvailableCidrResponse({}));
  }

  /**
   * Gets the available CIDR blocks of the IPAM pool.
   * 
   * @param request - GetIpamPoolNextAvailableCidrRequest
   * @returns GetIpamPoolNextAvailableCidrResponse
   */
  async getIpamPoolNextAvailableCidr(request: $_model.GetIpamPoolNextAvailableCidrRequest): Promise<$_model.GetIpamPoolNextAvailableCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpamPoolNextAvailableCidrWithOptions(request, runtime);
  }

  /**
   * Queries whether IP Address Manager (IPAM) is activated.
   * 
   * @param request - GetVpcIpamServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcIpamServiceStatusResponse
   */
  async getVpcIpamServiceStatusWithOptions(request: $_model.GetVpcIpamServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpcIpamServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcIpamServiceStatus",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpcIpamServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetVpcIpamServiceStatusResponse({}));
  }

  /**
   * Queries whether IP Address Manager (IPAM) is activated.
   * 
   * @param request - GetVpcIpamServiceStatusRequest
   * @returns GetVpcIpamServiceStatusResponse
   */
  async getVpcIpamServiceStatus(request: $_model.GetVpcIpamServiceStatusRequest): Promise<$_model.GetVpcIpamServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcIpamServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries discovered resources.
   * 
   * @param request - ListIpamDiscoveredResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamDiscoveredResourceResponse
   */
  async listIpamDiscoveredResourceWithOptions(request: $_model.ListIpamDiscoveredResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamDiscoveredResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
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

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamDiscoveredResource",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamDiscoveredResourceResponse({}));
  }

  /**
   * Queries discovered resources.
   * 
   * @param request - ListIpamDiscoveredResourceRequest
   * @returns ListIpamDiscoveredResourceResponse
   */
  async listIpamDiscoveredResource(request: $_model.ListIpamDiscoveredResourceRequest): Promise<$_model.ListIpamDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * 查询ipam可信服务纳管成员
   * 
   * @param request - ListIpamMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamMembersResponse
   */
  async listIpamMembersWithOptions(request: $_model.ListIpamMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberIds)) {
      query["MemberIds"] = request.memberIds;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamMembers",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamMembersResponse({}));
  }

  /**
   * 查询ipam可信服务纳管成员
   * 
   * @param request - ListIpamMembersRequest
   * @returns ListIpamMembersResponse
   */
  async listIpamMembers(request: $_model.ListIpamMembersRequest): Promise<$_model.ListIpamMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamMembersWithOptions(request, runtime);
  }

  /**
   * Queries CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamPoolAllocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolAllocationsResponse
   */
  async listIpamPoolAllocationsWithOptions(request: $_model.ListIpamPoolAllocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamPoolAllocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.ipamPoolAllocationIds)) {
      query["IpamPoolAllocationIds"] = request.ipamPoolAllocationIds;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
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
      action: "ListIpamPoolAllocations",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamPoolAllocationsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamPoolAllocationsResponse({}));
  }

  /**
   * Queries CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamPoolAllocationsRequest
   * @returns ListIpamPoolAllocationsResponse
   */
  async listIpamPoolAllocations(request: $_model.ListIpamPoolAllocationsRequest): Promise<$_model.ListIpamPoolAllocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolAllocationsWithOptions(request, runtime);
  }

  /**
   * Queries CIDR blocks provisioned to an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamPoolCidrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolCidrsResponse
   */
  async listIpamPoolCidrsWithOptions(request: $_model.ListIpamPoolCidrsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamPoolCidrsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
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
      action: "ListIpamPoolCidrs",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamPoolCidrsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamPoolCidrsResponse({}));
  }

  /**
   * Queries CIDR blocks provisioned to an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamPoolCidrsRequest
   * @returns ListIpamPoolCidrsResponse
   */
  async listIpamPoolCidrs(request: $_model.ListIpamPoolCidrsRequest): Promise<$_model.ListIpamPoolCidrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolCidrsWithOptions(request, runtime);
  }

  /**
   * Queries IP Address Manager (IPAM) pools.
   * 
   * @param request - ListIpamPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolsResponse
   */
  async listIpamPoolsWithOptions(request: $_model.ListIpamPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.ipamPoolIds)) {
      query["IpamPoolIds"] = request.ipamPoolIds;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ipv6Isp)) {
      query["Ipv6Isp"] = request.ipv6Isp;
    }

    if (!$dara.isNull(request.isShared)) {
      query["IsShared"] = request.isShared;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolRegionId)) {
      query["PoolRegionId"] = request.poolRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceIpamPoolId)) {
      query["SourceIpamPoolId"] = request.sourceIpamPoolId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamPools",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamPoolsResponse({}));
  }

  /**
   * Queries IP Address Manager (IPAM) pools.
   * 
   * @param request - ListIpamPoolsRequest
   * @returns ListIpamPoolsResponse
   */
  async listIpamPools(request: $_model.ListIpamPoolsRequest): Promise<$_model.ListIpamPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolsWithOptions(request, runtime);
  }

  /**
   * Queries resources in an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamResourceCidrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamResourceCidrsResponse
   */
  async listIpamResourceCidrsWithOptions(request: $_model.ListIpamResourceCidrsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamResourceCidrsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamResourceCidrs",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamResourceCidrsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamResourceCidrsResponse({}));
  }

  /**
   * Queries resources in an IP Address Manager (IPAM) pool.
   * 
   * @param request - ListIpamResourceCidrsRequest
   * @returns ListIpamResourceCidrsResponse
   */
  async listIpamResourceCidrs(request: $_model.ListIpamResourceCidrsRequest): Promise<$_model.ListIpamResourceCidrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamResourceCidrsWithOptions(request, runtime);
  }

  /**
   * Queries IPAM resource discovery instances.
   * 
   * @param request - ListIpamResourceDiscoveriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamResourceDiscoveriesResponse
   */
  async listIpamResourceDiscoveriesWithOptions(request: $_model.ListIpamResourceDiscoveriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamResourceDiscoveriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamResourceDiscoveryIds)) {
      query["IpamResourceDiscoveryIds"] = request.ipamResourceDiscoveryIds;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryName)) {
      query["IpamResourceDiscoveryName"] = request.ipamResourceDiscoveryName;
    }

    if (!$dara.isNull(request.isShared)) {
      query["IsShared"] = request.isShared;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamResourceDiscoveries",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamResourceDiscoveriesResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamResourceDiscoveriesResponse({}));
  }

  /**
   * Queries IPAM resource discovery instances.
   * 
   * @param request - ListIpamResourceDiscoveriesRequest
   * @returns ListIpamResourceDiscoveriesResponse
   */
  async listIpamResourceDiscoveries(request: $_model.ListIpamResourceDiscoveriesRequest): Promise<$_model.ListIpamResourceDiscoveriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamResourceDiscoveriesWithOptions(request, runtime);
  }

  /**
   * Queries the association between resource discovery and IPAM.
   * 
   * @param request - ListIpamResourceDiscoveryAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamResourceDiscoveryAssociationsResponse
   */
  async listIpamResourceDiscoveryAssociationsWithOptions(request: $_model.ListIpamResourceDiscoveryAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamResourceDiscoveryAssociationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamResourceDiscoveryAssociations",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamResourceDiscoveryAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamResourceDiscoveryAssociationsResponse({}));
  }

  /**
   * Queries the association between resource discovery and IPAM.
   * 
   * @param request - ListIpamResourceDiscoveryAssociationsRequest
   * @returns ListIpamResourceDiscoveryAssociationsResponse
   */
  async listIpamResourceDiscoveryAssociations(request: $_model.ListIpamResourceDiscoveryAssociationsRequest): Promise<$_model.ListIpamResourceDiscoveryAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamResourceDiscoveryAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries IP Address Manager (IPAM) scopes.
   * 
   * @param request - ListIpamScopesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamScopesResponse
   */
  async listIpamScopesWithOptions(request: $_model.ListIpamScopesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamScopesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamScopeIds)) {
      query["IpamScopeIds"] = request.ipamScopeIds;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ipamScopeType)) {
      query["IpamScopeType"] = request.ipamScopeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamScopes",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamScopesResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamScopesResponse({}));
  }

  /**
   * Queries IP Address Manager (IPAM) scopes.
   * 
   * @param request - ListIpamScopesRequest
   * @returns ListIpamScopesResponse
   */
  async listIpamScopes(request: $_model.ListIpamScopesRequest): Promise<$_model.ListIpamScopesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamScopesWithOptions(request, runtime);
  }

  /**
   * Queries IP Address Managers (IPAMs).
   * 
   * @param request - ListIpamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamsResponse
   */
  async listIpamsWithOptions(request: $_model.ListIpamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIpamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamIds)) {
      query["IpamIds"] = request.ipamIds;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpams",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIpamsResponse>(await this.callApi(params, req, runtime), new $_model.ListIpamsResponse({}));
  }

  /**
   * Queries IP Address Managers (IPAMs).
   * 
   * @param request - ListIpamsRequest
   * @returns ListIpamsResponse
   */
  async listIpams(request: $_model.ListIpamsRequest): Promise<$_model.ListIpamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource tags.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
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
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2023-02-28",
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
   * Queries a list of resource tags.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
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
   * Activates IP Address Manager (IPAM).
   * 
   * @param request - OpenVpcIpamServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVpcIpamServiceResponse
   */
  async openVpcIpamServiceWithOptions(request: $_model.OpenVpcIpamServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenVpcIpamServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenVpcIpamService",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenVpcIpamServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenVpcIpamServiceResponse({}));
  }

  /**
   * Activates IP Address Manager (IPAM).
   * 
   * @param request - OpenVpcIpamServiceRequest
   * @returns OpenVpcIpamServiceResponse
   */
  async openVpcIpamService(request: $_model.OpenVpcIpamServiceRequest): Promise<$_model.OpenVpcIpamServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVpcIpamServiceWithOptions(request, runtime);
  }

  /**
   * 移除ipam可信服务纳管成员
   * 
   * @param request - RemoveIpamMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveIpamMembersResponse
   */
  async removeIpamMembersWithOptions(request: $_model.RemoveIpamMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveIpamMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveIpamMembers",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveIpamMembersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveIpamMembersResponse({}));
  }

  /**
   * 移除ipam可信服务纳管成员
   * 
   * @param request - RemoveIpamMembersRequest
   * @returns RemoveIpamMembersResponse
   */
  async removeIpamMembers(request: $_model.RemoveIpamMembersRequest): Promise<$_model.RemoveIpamMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeIpamMembersWithOptions(request, runtime);
  }

  /**
   * Adds a tag to a resource.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following items:
   * *   Each tag key that is added to an instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   You can add at most 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2023-02-28",
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
   * Adds a tag to a resource.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following items:
   * *   Each tag key that is added to an instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   You can add at most 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes a tag from a resource.
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

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2023-02-28",
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
   * Removes a tag from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an IP Address Manager (IPAM).
   * 
   * @param request - UpdateIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamResponse
   */
  async updateIpamWithOptions(request: $_model.UpdateIpamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addOperatingRegion)) {
      query["AddOperatingRegion"] = request.addOperatingRegion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamDescription)) {
      query["IpamDescription"] = request.ipamDescription;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeOperatingRegion)) {
      query["RemoveOperatingRegion"] = request.removeOperatingRegion;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpamResponse({}));
  }

  /**
   * Updates an IP Address Manager (IPAM).
   * 
   * @param request - UpdateIpamRequest
   * @returns UpdateIpamResponse
   */
  async updateIpam(request: $_model.UpdateIpamRequest): Promise<$_model.UpdateIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about an IP Address Manager (IPAM) pool.
   * 
   * @param request - UpdateIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamPoolResponse
   */
  async updateIpamPoolWithOptions(request: $_model.UpdateIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationDefaultCidrMask)) {
      query["AllocationDefaultCidrMask"] = request.allocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.allocationMaxCidrMask)) {
      query["AllocationMaxCidrMask"] = request.allocationMaxCidrMask;
    }

    if (!$dara.isNull(request.allocationMinCidrMask)) {
      query["AllocationMinCidrMask"] = request.allocationMinCidrMask;
    }

    if (!$dara.isNull(request.autoImport)) {
      query["AutoImport"] = request.autoImport;
    }

    if (!$dara.isNull(request.clearAllocationDefaultCidrMask)) {
      query["ClearAllocationDefaultCidrMask"] = request.clearAllocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolDescription)) {
      query["IpamPoolDescription"] = request.ipamPoolDescription;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpamPoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpamPoolResponse({}));
  }

  /**
   * Modifies the basic information about an IP Address Manager (IPAM) pool.
   * 
   * @param request - UpdateIpamPoolRequest
   * @returns UpdateIpamPoolResponse
   */
  async updateIpamPool(request: $_model.UpdateIpamPoolRequest): Promise<$_model.UpdateIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamPoolWithOptions(request, runtime);
  }

  /**
   * Modifies CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - UpdateIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamPoolAllocationResponse
   */
  async updateIpamPoolAllocationWithOptions(request: $_model.UpdateIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationDescription)) {
      query["IpamPoolAllocationDescription"] = request.ipamPoolAllocationDescription;
    }

    if (!$dara.isNull(request.ipamPoolAllocationId)) {
      query["IpamPoolAllocationId"] = request.ipamPoolAllocationId;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpamPoolAllocationResponse({}));
  }

  /**
   * Modifies CIDR block allocations of an IP Address Manager (IPAM) pool.
   * 
   * @param request - UpdateIpamPoolAllocationRequest
   * @returns UpdateIpamPoolAllocationResponse
   */
  async updateIpamPoolAllocation(request: $_model.UpdateIpamPoolAllocationRequest): Promise<$_model.UpdateIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * Modifies a resource discovery instance.
   * 
   * @remarks
   *   You can add or remove effective regions only for custom resource discovery instances.
   * *   When removing effective regions from a resource discovery instance, the hosted region cannot be included.
   * 
   * @param request - UpdateIpamResourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamResourceDiscoveryResponse
   */
  async updateIpamResourceDiscoveryWithOptions(request: $_model.UpdateIpamResourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpamResourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addOperatingRegion)) {
      query["AddOperatingRegion"] = request.addOperatingRegion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryDescription)) {
      query["IpamResourceDiscoveryDescription"] = request.ipamResourceDiscoveryDescription;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryName)) {
      query["IpamResourceDiscoveryName"] = request.ipamResourceDiscoveryName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeOperatingRegion)) {
      query["RemoveOperatingRegion"] = request.removeOperatingRegion;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamResourceDiscovery",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpamResourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpamResourceDiscoveryResponse({}));
  }

  /**
   * Modifies a resource discovery instance.
   * 
   * @remarks
   *   You can add or remove effective regions only for custom resource discovery instances.
   * *   When removing effective regions from a resource discovery instance, the hosted region cannot be included.
   * 
   * @param request - UpdateIpamResourceDiscoveryRequest
   * @returns UpdateIpamResourceDiscoveryResponse
   */
  async updateIpamResourceDiscovery(request: $_model.UpdateIpamResourceDiscoveryRequest): Promise<$_model.UpdateIpamResourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamResourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about an IP Address Manager (IPAM) scope.
   * 
   * @param request - UpdateIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamScopeResponse
   */
  async updateIpamScopeWithOptions(request: $_model.UpdateIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamScopeDescription)) {
      query["IpamScopeDescription"] = request.ipamScopeDescription;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpamScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpamScopeResponse({}));
  }

  /**
   * Modifies the basic information about an IP Address Manager (IPAM) scope.
   * 
   * @param request - UpdateIpamScopeRequest
   * @returns UpdateIpamScopeResponse
   */
  async updateIpamScope(request: $_model.UpdateIpamScopeRequest): Promise<$_model.UpdateIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamScopeWithOptions(request, runtime);
  }

}
