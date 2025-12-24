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
      'cn-qingdao': "slb.aliyuncs.com",
      'cn-beijing': "slb.aliyuncs.com",
      'cn-hangzhou': "slb.aliyuncs.com",
      'cn-shanghai': "slb.aliyuncs.com",
      'cn-shenzhen': "slb.aliyuncs.com",
      'cn-hongkong': "slb.aliyuncs.com",
      'ap-southeast-1': "slb.aliyuncs.com",
      'us-east-1': "slb.aliyuncs.com",
      'us-west-1': "slb.aliyuncs.com",
      'cn-shanghai-finance-1': "slb.aliyuncs.com",
      'cn-shenzhen-finance-1': "slb.aliyuncs.com",
      'cn-north-2-gov-1': "slb.aliyuncs.com",
      'ap-northeast-2-pop': "slb.aliyuncs.com",
      'cn-beijing-finance-pop': "slb.aliyuncs.com",
      'cn-beijing-gov-1': "slb.aliyuncs.com",
      'cn-beijing-nu16-b01': "slb.aliyuncs.com",
      'cn-edge-1': "slb.aliyuncs.com",
      'cn-fujian': "slb.aliyuncs.com",
      'cn-haidian-cm12-c01': "slb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "slb.aliyuncs.com",
      'cn-hangzhou-finance': "slb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "slb.aliyuncs.com",
      'cn-hangzhou-test-306': "slb.aliyuncs.com",
      'cn-hongkong-finance-pop': "slb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "slb-api.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "slb.aliyuncs.com",
      'cn-shanghai-et2-b01': "slb.aliyuncs.com",
      'cn-shanghai-inner': "slb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "slb.aliyuncs.com",
      'cn-shenzhen-inner': "slb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "slb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "slb.aliyuncs.com",
      'cn-wuhan': "slb.aliyuncs.com",
      'cn-yushanfang': "slb.aliyuncs.com",
      'cn-zhangbei': "slb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "slb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "slb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "slb.aliyuncs.com",
      'eu-west-1-oxs': "slb.aliyuncs.com",
      'rus-west-1-pop': "slb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("slb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds IP entries to an access control list (ACL).
   * 
   * @remarks
   * Each network ACL can contain one or more IP addresses or CIDR blocks. Take note of the following limits on network ACLs:
   * *   The number of IP entries that can be added to a network ACL with each Alibaba Cloud account at a time: 50
   * *   The maximum number of IP entries that each network ACL can contain: 300
   * 
   * @param request - AddAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntryWithOptions(request: $_model.AddAccessControlListEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAccessControlListEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "AddAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new $_model.AddAccessControlListEntryResponse({}));
  }

  /**
   * Adds IP entries to an access control list (ACL).
   * 
   * @remarks
   * Each network ACL can contain one or more IP addresses or CIDR blocks. Take note of the following limits on network ACLs:
   * *   The number of IP entries that can be added to a network ACL with each Alibaba Cloud account at a time: 50
   * *   The maximum number of IP entries that each network ACL can contain: 300
   * 
   * @param request - AddAccessControlListEntryRequest
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntry(request: $_model.AddAccessControlListEntryRequest): Promise<$_model.AddAccessControlListEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Adds backend servers.
   * 
   * @remarks
   * >  If multiple identical Elastic Compute Service (ECS) instances are specified in a request, only the first ECS instance is added. The other ECS instances are ignored. If the backend server that you add is the same as one of the existing backend servers that are already associated with the listener, an error message is returned.
   * 
   * @param request - AddBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBackendServersResponse
   */
  async addBackendServersWithOptions(request: $_model.AddBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "AddBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.AddBackendServersResponse({}));
  }

  /**
   * Adds backend servers.
   * 
   * @remarks
   * >  If multiple identical Elastic Compute Service (ECS) instances are specified in a request, only the first ECS instance is added. The other ECS instances are ignored. If the backend server that you add is the same as one of the existing backend servers that are already associated with the listener, an error message is returned.
   * 
   * @param request - AddBackendServersRequest
   * @returns AddBackendServersResponse
   */
  async addBackendServers(request: $_model.AddBackendServersRequest): Promise<$_model.AddBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  /**
   * Adds IP addresses to the whitelist of a listener.
   * 
   * @param request - AddListenerWhiteListItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddListenerWhiteListItemResponse
   */
  async addListenerWhiteListItemWithOptions(request: $_model.AddListenerWhiteListItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddListenerWhiteListItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new $_model.AddListenerWhiteListItemResponse({}));
  }

  /**
   * Adds IP addresses to the whitelist of a listener.
   * 
   * @param request - AddListenerWhiteListItemRequest
   * @returns AddListenerWhiteListItemResponse
   */
  async addListenerWhiteListItem(request: $_model.AddListenerWhiteListItemRequest): Promise<$_model.AddListenerWhiteListItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addListenerWhiteListItemWithOptions(request, runtime);
  }

  /**
   * Adds tags to an SLB instance.
   * 
   * @remarks
   * # Limits
   * Before you call this API, note the following limits:
   * *   You can add up to 10 tags to each SLB instance.
   * *   You can add up to five pairs of tags at a time.
   * *   All the tags and keys added to an SLB instance must be unique.
   * *   If you add a tag of which the key is the same as that of an existing tag, but the value is different, the new tag overwrites the existing one.
   * 
   * @param request - AddTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsResponse
   */
  async addTagsWithOptions(request: $_model.AddTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTagsResponse>(await this.callApi(params, req, runtime), new $_model.AddTagsResponse({}));
  }

  /**
   * Adds tags to an SLB instance.
   * 
   * @remarks
   * # Limits
   * Before you call this API, note the following limits:
   * *   You can add up to 10 tags to each SLB instance.
   * *   You can add up to five pairs of tags at a time.
   * *   All the tags and keys added to an SLB instance must be unique.
   * *   If you add a tag of which the key is the same as that of an existing tag, but the value is different, the new tag overwrites the existing one.
   * 
   * @param request - AddTagsRequest
   * @returns AddTagsResponse
   */
  async addTags(request: $_model.AddTagsRequest): Promise<$_model.AddTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  /**
   * Adds backend servers to a vServer group.
   * 
   * @param request - AddVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVServerGroupBackendServersResponse
   */
  async addVServerGroupBackendServersWithOptions(request: $_model.AddVServerGroupBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVServerGroupBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.AddVServerGroupBackendServersResponse({}));
  }

  /**
   * Adds backend servers to a vServer group.
   * 
   * @param request - AddVServerGroupBackendServersRequest
   * @returns AddVServerGroupBackendServersResponse
   */
  async addVServerGroupBackendServers(request: $_model.AddVServerGroupBackendServersRequest): Promise<$_model.AddVServerGroupBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * You can create multiple ACLs. Each ACL can contain one or more IP addresses or CIDR blocks. Before you create an ACL, take note of the following limits:
   * *   An account can have a maximum of 50 ACLs in each region.
   * *   You can add a maximum of 50 IP addresses or CIDR blocks at a time within an account.
   * *   Each ACL can contain a maximum of 300 IP addresses or CIDR blocks.
   * 
   * @param request - CreateAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlListWithOptions(request: $_model.CreateAccessControlListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessControlListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
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
      action: "CreateAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessControlListResponse({}));
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @remarks
   * You can create multiple ACLs. Each ACL can contain one or more IP addresses or CIDR blocks. Before you create an ACL, take note of the following limits:
   * *   An account can have a maximum of 50 ACLs in each region.
   * *   You can add a maximum of 50 IP addresses or CIDR blocks at a time within an account.
   * *   Each ACL can contain a maximum of 300 IP addresses or CIDR blocks.
   * 
   * @param request - CreateAccessControlListRequest
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlList(request: $_model.CreateAccessControlListRequest): Promise<$_model.CreateAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  /**
   * Adds an additional domain name.
   * 
   * @param request - CreateDomainExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainExtensionResponse
   */
  async createDomainExtensionWithOptions(request: $_model.CreateDomainExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainExtensionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainExtensionResponse({}));
  }

  /**
   * Adds an additional domain name.
   * 
   * @param request - CreateDomainExtensionRequest
   * @returns CreateDomainExtensionResponse
   */
  async createDomainExtension(request: $_model.CreateDomainExtensionRequest): Promise<$_model.CreateDomainExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainExtensionWithOptions(request, runtime);
  }

  /**
   * Creates a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   Before you create a CLB instance, call the [DescribeAvailableResource](~~DescribeAvailableResource~~) operation to query the resources available for purchase in the region where you want to create the CLB instance.
   * *   After a CLB instance is created, you are charged for using the CLB instance.
   * *   The pay-as-you-go billing method supports the pay-by-specification and pay-by-LCU metering methods.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!$dara.isNull(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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

    if (!$dara.isNull(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerResponse({}));
  }

  /**
   * Creates a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   Before you create a CLB instance, call the [DescribeAvailableResource](~~DescribeAvailableResource~~) operation to query the resources available for purchase in the region where you want to create the CLB instance.
   * *   After a CLB instance is created, you are charged for using the CLB instance.
   * *   The pay-as-you-go billing method supports the pay-by-specification and pay-by-LCU metering methods.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates an HTTP listener for a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](~~StartLoadBalancerListener~~) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](~~StartLoadBalancerListener~~).
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListenerWithOptions(request: $_model.CreateLoadBalancerHTTPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerHTTPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerForward)) {
      query["ListenerForward"] = request.listenerForward;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!$dara.isNull(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!$dara.isNull(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerHTTPListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerHTTPListenerResponse({}));
  }

  /**
   * Creates an HTTP listener for a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](~~StartLoadBalancerListener~~) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](~~StartLoadBalancerListener~~).
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListener(request: $_model.CreateLoadBalancerHTTPListenerRequest): Promise<$_model.CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  /**
   * Creates an HTTPS listener.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://www.alibabacloud.com/help/en/server-load-balancer/latest/createloadbalancer-2).
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListenerWithOptions(request: $_model.CreateLoadBalancerHTTPSListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerHTTPSListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!$dara.isNull(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!$dara.isNull(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerHTTPSListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerHTTPSListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerHTTPSListenerResponse({}));
  }

  /**
   * Creates an HTTPS listener.
   * 
   * @remarks
   * A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to start the listener. After the listener is started, the listener can forward traffic to backend servers.
   * ## Prerequisites
   * A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://www.alibabacloud.com/help/en/server-load-balancer/latest/createloadbalancer-2).
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListener(request: $_model.CreateLoadBalancerHTTPSListenerRequest): Promise<$_model.CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  /**
   * Creates a TCP listener.
   * 
   * @remarks
   * >  Newly created listeners are in the **stopped** state. After a listener is created, call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/2401757.html) operation to enable the listener to forward network traffic.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListenerWithOptions(request: $_model.CreateLoadBalancerTCPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!$dara.isNull(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerTCPListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerTCPListenerResponse({}));
  }

  /**
   * Creates a TCP listener.
   * 
   * @remarks
   * >  Newly created listeners are in the **stopped** state. After a listener is created, call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/2401757.html) operation to enable the listener to forward network traffic.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListener(request: $_model.CreateLoadBalancerTCPListenerRequest): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a UDP listener.
   * 
   * @remarks
   * UDP listeners of Classic Load Balancer (CLB) instances in a classic network cannot pass client IP addresses to backend servers.
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListenerWithOptions(request: $_model.CreateLoadBalancerUDPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerUDPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!$dara.isNull(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerUDPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerUDPListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerUDPListenerResponse({}));
  }

  /**
   * Creates a UDP listener.
   * 
   * @remarks
   * UDP listeners of Classic Load Balancer (CLB) instances in a classic network cannot pass client IP addresses to backend servers.
   * >  A newly created listener is in the **stopped** state. After a listener is created, you can call the [StartLoadBalancerListener](https://help.aliyun.com/document_detail/27597.html) operation to enable the listener to forward traffic to backend servers.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListener(request: $_model.CreateLoadBalancerUDPListenerRequest): Promise<$_model.CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a primary/secondary server group. Each primary/secondary server group consists of two backend servers. One backend server functions as the primary server, and the other backend server functions as the secondary backend server.
   * 
   * @param request - CreateMasterSlaveServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMasterSlaveServerGroupResponse
   */
  async createMasterSlaveServerGroupWithOptions(request: $_model.CreateMasterSlaveServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMasterSlaveServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveBackendServers)) {
      query["MasterSlaveBackendServers"] = request.masterSlaveBackendServers;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupName)) {
      query["MasterSlaveServerGroupName"] = request.masterSlaveServerGroupName;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMasterSlaveServerGroupResponse({}));
  }

  /**
   * Creates a primary/secondary server group. Each primary/secondary server group consists of two backend servers. One backend server functions as the primary server, and the other backend server functions as the secondary backend server.
   * 
   * @param request - CreateMasterSlaveServerGroupRequest
   * @returns CreateMasterSlaveServerGroupResponse
   */
  async createMasterSlaveServerGroup(request: $_model.CreateMasterSlaveServerGroupRequest): Promise<$_model.CreateMasterSlaveServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMasterSlaveServerGroupWithOptions(request, runtime);
  }

  /**
   * Creates forwarding rules for an HTTP or HTTPS listener.
   * 
   * @param request - CreateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRulesResponse
   */
  async createRulesWithOptions(request: $_model.CreateRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.ruleList)) {
      query["RuleList"] = request.ruleList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateRulesResponse({}));
  }

  /**
   * Creates forwarding rules for an HTTP or HTTPS listener.
   * 
   * @param request - CreateRulesRequest
   * @returns CreateRulesResponse
   */
  async createRules(request: $_model.CreateRulesRequest): Promise<$_model.CreateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  /**
   * Creates a Transport Layer Security (TLS) policy.
   * 
   * @param request - CreateTLSCipherPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTLSCipherPolicyResponse
   */
  async createTLSCipherPolicyWithOptions(request: $_model.CreateTLSCipherPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTLSCipherPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTLSCipherPolicyResponse({}));
  }

  /**
   * Creates a Transport Layer Security (TLS) policy.
   * 
   * @param request - CreateTLSCipherPolicyRequest
   * @returns CreateTLSCipherPolicyResponse
   */
  async createTLSCipherPolicy(request: $_model.CreateTLSCipherPolicyRequest): Promise<$_model.CreateTLSCipherPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTLSCipherPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a vServer group and adds backend servers to the vServer group.
   * 
   * @param request - CreateVServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVServerGroupResponse
   */
  async createVServerGroupWithOptions(request: $_model.CreateVServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateVServerGroupResponse({}));
  }

  /**
   * Creates a vServer group and adds backend servers to the vServer group.
   * 
   * @param request - CreateVServerGroupRequest
   * @returns CreateVServerGroupResponse
   */
  async createVServerGroup(request: $_model.CreateVServerGroupRequest): Promise<$_model.CreateVServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   * You can delete an ACL only if it is not associated with a listener.
   * 
   * @param request - DeleteAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlListWithOptions(request: $_model.DeleteAccessControlListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessControlListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "DeleteAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessControlListResponse({}));
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   * You can delete an ACL only if it is not associated with a listener.
   * 
   * @param request - DeleteAccessControlListRequest
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlList(request: $_model.DeleteAccessControlListRequest): Promise<$_model.DeleteAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  /**
   * Deletes the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DeleteAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessLogsDownloadAttributeResponse
   */
  async deleteAccessLogsDownloadAttributeWithOptions(request: $_model.DeleteAccessLogsDownloadAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessLogsDownloadAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.logsDownloadAttributes)) {
      query["LogsDownloadAttributes"] = request.logsDownloadAttributes;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Deletes the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DeleteAccessLogsDownloadAttributeRequest
   * @returns DeleteAccessLogsDownloadAttributeResponse
   */
  async deleteAccessLogsDownloadAttribute(request: $_model.DeleteAccessLogsDownloadAttributeRequest): Promise<$_model.DeleteAccessLogsDownloadAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate authority (CA) certificate.
   * 
   * @remarks
   * You cannot delete a CA certificate that is in use.
   * 
   * @param request - DeleteCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCACertificateResponse
   */
  async deleteCACertificateWithOptions(request: $_model.DeleteCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
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
      action: "DeleteCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCACertificateResponse({}));
  }

  /**
   * Deletes a certificate authority (CA) certificate.
   * 
   * @remarks
   * You cannot delete a CA certificate that is in use.
   * 
   * @param request - DeleteCACertificateRequest
   * @returns DeleteCACertificateResponse
   */
  async deleteCACertificate(request: $_model.DeleteCACertificateRequest): Promise<$_model.DeleteCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCACertificateWithOptions(request, runtime);
  }

  /**
   * Deletes an additional domain name.
   * 
   * @param request - DeleteDomainExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainExtensionResponse
   */
  async deleteDomainExtensionWithOptions(request: $_model.DeleteDomainExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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
      action: "DeleteDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainExtensionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainExtensionResponse({}));
  }

  /**
   * Deletes an additional domain name.
   * 
   * @param request - DeleteDomainExtensionRequest
   * @returns DeleteDomainExtensionResponse
   */
  async deleteDomainExtension(request: $_model.DeleteDomainExtensionRequest): Promise<$_model.DeleteDomainExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainExtensionWithOptions(request, runtime);
  }

  /**
   * Deletes a pay-as-you-go Server Load Balancer (SLB) instance.
   * 
   * @remarks
   * > The listeners and tags of the SLB instance are deleted along with the SLB instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: $_model.DeleteLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DeleteLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoadBalancerResponse({}));
  }

  /**
   * Deletes a pay-as-you-go Server Load Balancer (SLB) instance.
   * 
   * @remarks
   * > The listeners and tags of the SLB instance are deleted along with the SLB instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: $_model.DeleteLoadBalancerRequest): Promise<$_model.DeleteLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   * >  You can delete only listeners that are in the **stopped** or **running** state.
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListenerWithOptions(request: $_model.DeleteLoadBalancerListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DeleteLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoadBalancerListenerResponse({}));
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   * >  You can delete only listeners that are in the **stopped** or **running** state.
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListener(request: $_model.DeleteLoadBalancerListenerRequest): Promise<$_model.DeleteLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Deletes a primary/secondary server group.
   * 
   * @param request - DeleteMasterSlaveServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMasterSlaveServerGroupResponse
   */
  async deleteMasterSlaveServerGroupWithOptions(request: $_model.DeleteMasterSlaveServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMasterSlaveServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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
      action: "DeleteMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMasterSlaveServerGroupResponse({}));
  }

  /**
   * Deletes a primary/secondary server group.
   * 
   * @param request - DeleteMasterSlaveServerGroupRequest
   * @returns DeleteMasterSlaveServerGroupResponse
   */
  async deleteMasterSlaveServerGroup(request: $_model.DeleteMasterSlaveServerGroupRequest): Promise<$_model.DeleteMasterSlaveServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMasterSlaveServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   * You must specify at least one forwarding rule that you want to delete. You can specify at most 10 forwarding rules in each call.
   * 
   * @param request - DeleteRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRulesResponse
   */
  async deleteRulesWithOptions(request: $_model.DeleteRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRulesResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRulesResponse({}));
  }

  /**
   * Deletes forwarding rules.
   * 
   * @remarks
   * You must specify at least one forwarding rule that you want to delete. You can specify at most 10 forwarding rules in each call.
   * 
   * @param request - DeleteRulesRequest
   * @returns DeleteRulesResponse
   */
  async deleteRules(request: $_model.DeleteRulesRequest): Promise<$_model.DeleteRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a server certificate.
   * 
   * @remarks
   * >  You cannot delete server certificates that are in use.
   * 
   * @param request - DeleteServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerCertificateResponse
   */
  async deleteServerCertificateWithOptions(request: $_model.DeleteServerCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServerCertificateResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServerCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServerCertificateResponse({}));
  }

  /**
   * Deletes a server certificate.
   * 
   * @remarks
   * >  You cannot delete server certificates that are in use.
   * 
   * @param request - DeleteServerCertificateRequest
   * @returns DeleteServerCertificateResponse
   */
  async deleteServerCertificate(request: $_model.DeleteServerCertificateRequest): Promise<$_model.DeleteServerCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServerCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a TLS policy.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Slb\\&api=DeleteTLSCipherPolicy\\&type=RPC\\&version=2014-05-15)
   * 
   * @param request - DeleteTLSCipherPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTLSCipherPolicyResponse
   */
  async deleteTLSCipherPolicyWithOptions(request: $_model.DeleteTLSCipherPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTLSCipherPolicyResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTLSCipherPolicyResponse({}));
  }

  /**
   * Deletes a TLS policy.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Slb\\&api=DeleteTLSCipherPolicy\\&type=RPC\\&version=2014-05-15)
   * 
   * @param request - DeleteTLSCipherPolicyRequest
   * @returns DeleteTLSCipherPolicyResponse
   */
  async deleteTLSCipherPolicy(request: $_model.DeleteTLSCipherPolicyRequest): Promise<$_model.DeleteTLSCipherPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTLSCipherPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a VServer group.
   * 
   * @param request - DeleteVServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVServerGroupResponse
   */
  async deleteVServerGroupWithOptions(request: $_model.DeleteVServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVServerGroupResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVServerGroupResponse({}));
  }

  /**
   * Deletes a VServer group.
   * 
   * @param request - DeleteVServerGroupRequest
   * @returns DeleteVServerGroupResponse
   */
  async deleteVServerGroup(request: $_model.DeleteVServerGroupRequest): Promise<$_model.DeleteVServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVServerGroupWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of an access control list (ACL).
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttributeWithOptions(request: $_model.DescribeAccessControlListAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessControlListAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntryComment)) {
      query["AclEntryComment"] = request.aclEntryComment;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribeAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessControlListAttributeResponse({}));
  }

  /**
   * Queries the configuration of an access control list (ACL).
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttribute(request: $_model.DescribeAccessControlListAttributeRequest): Promise<$_model.DescribeAccessControlListAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAccessControlListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlListsWithOptions(request: $_model.DescribeAccessControlListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessControlListsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "DescribeAccessControlLists",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessControlListsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessControlListsResponse({}));
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAccessControlListsRequest
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlLists(request: $_model.DescribeAccessControlListsRequest): Promise<$_model.DescribeAccessControlListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  /**
   * Queries the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DescribeAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessLogsDownloadAttributeResponse
   */
  async describeAccessLogsDownloadAttributeWithOptions(request: $_model.DescribeAccessLogsDownloadAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessLogsDownloadAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "DescribeAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Queries the access log of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - DescribeAccessLogsDownloadAttributeRequest
   * @returns DescribeAccessLogsDownloadAttributeResponse
   */
  async describeAccessLogsDownloadAttribute(request: $_model.DescribeAccessLogsDownloadAttributeRequest): Promise<$_model.DescribeAccessLogsDownloadAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the available resources and resources that are available for purchase in the zones of a region.
   * 
   * @remarks
   * > Only the available resources and zones are returned.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: $_model.DescribeAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
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
      action: "DescribeAvailableResource",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableResourceResponse({}));
  }

  /**
   * Queries the available resources and resources that are available for purchase in the zones of a region.
   * 
   * @remarks
   * > Only the available resources and zones are returned.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries certificate authority (CA) certificates.
   * 
   * @remarks
   * > To ensure data confidentiality, only the certificate fingerprint and name are returned. The certificate content is not returned.
   * 
   * @param request - DescribeCACertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificatesResponse
   */
  async describeCACertificatesWithOptions(request: $_model.DescribeCACertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCACertificatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
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
      action: "DescribeCACertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCACertificatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCACertificatesResponse({}));
  }

  /**
   * Queries certificate authority (CA) certificates.
   * 
   * @remarks
   * > To ensure data confidentiality, only the certificate fingerprint and name are returned. The certificate content is not returned.
   * 
   * @param request - DescribeCACertificatesRequest
   * @returns DescribeCACertificatesResponse
   */
  async describeCACertificates(request: $_model.DescribeCACertificatesRequest): Promise<$_model.DescribeCACertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an additional domain name.
   * 
   * @param request - DescribeDomainExtensionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainExtensionAttributeResponse
   */
  async describeDomainExtensionAttributeWithOptions(request: $_model.DescribeDomainExtensionAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainExtensionAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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
      action: "DescribeDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainExtensionAttributeResponse({}));
  }

  /**
   * Queries the attributes of an additional domain name.
   * 
   * @param request - DescribeDomainExtensionAttributeRequest
   * @returns DescribeDomainExtensionAttributeResponse
   */
  async describeDomainExtensionAttribute(request: $_model.DescribeDomainExtensionAttributeRequest): Promise<$_model.DescribeDomainExtensionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainExtensionAttributeWithOptions(request, runtime);
  }

  /**
   * Queries additional domain names.
   * 
   * @param request - DescribeDomainExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainExtensionsResponse
   */
  async describeDomainExtensionsWithOptions(request: $_model.DescribeDomainExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeDomainExtensions",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainExtensionsResponse({}));
  }

  /**
   * Queries additional domain names.
   * 
   * @param request - DescribeDomainExtensionsRequest
   * @returns DescribeDomainExtensionsResponse
   */
  async describeDomainExtensions(request: $_model.DescribeDomainExtensionsRequest): Promise<$_model.DescribeDomainExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainExtensionsWithOptions(request, runtime);
  }

  /**
   * Queries the health status of backend servers.
   * 
   * @param request - DescribeHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatusWithOptions(request: $_model.DescribeHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeHealthStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthStatusResponse({}));
  }

  /**
   * Queries the health status of backend servers.
   * 
   * @param request - DescribeHealthStatusRequest
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatus(request: $_model.DescribeHealthStatusRequest): Promise<$_model.DescribeHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of fine-grained monitoring in a region.
   * 
   * @param request - DescribeHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHighDefinationMonitorResponse
   */
  async describeHighDefinationMonitorWithOptions(request: $_model.DescribeHighDefinationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHighDefinationMonitorResponse> {
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
      action: "DescribeHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHighDefinationMonitorResponse({}));
  }

  /**
   * Queries the configurations of fine-grained monitoring in a region.
   * 
   * @param request - DescribeHighDefinationMonitorRequest
   * @returns DescribeHighDefinationMonitorResponse
   */
  async describeHighDefinationMonitor(request: $_model.DescribeHighDefinationMonitorRequest): Promise<$_model.DescribeHighDefinationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist configurations of a listener.
   * 
   * @param request - DescribeListenerAccessControlAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListenerAccessControlAttributeResponse
   */
  async describeListenerAccessControlAttributeWithOptions(request: $_model.DescribeListenerAccessControlAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListenerAccessControlAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeListenerAccessControlAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListenerAccessControlAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListenerAccessControlAttributeResponse({}));
  }

  /**
   * Queries the whitelist configurations of a listener.
   * 
   * @param request - DescribeListenerAccessControlAttributeRequest
   * @returns DescribeListenerAccessControlAttributeResponse
   */
  async describeListenerAccessControlAttribute(request: $_model.DescribeListenerAccessControlAttributeRequest): Promise<$_model.DescribeListenerAccessControlAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListenerAccessControlAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the detail of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * >  If backend servers are deployed in a vServer group, you can call the [DescribeVServerGroupAttribute](https://help.aliyun.com/document_detail/35224.html) operation to query the backend servers.
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttributeWithOptions(request: $_model.DescribeLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerAttributeResponse({}));
  }

  /**
   * Queries the detail of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * >  If backend servers are deployed in a vServer group, you can call the [DescribeVServerGroupAttribute](https://help.aliyun.com/document_detail/35224.html) operation to query the backend servers.
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttribute(request: $_model.DescribeLoadBalancerAttributeRequest): Promise<$_model.DescribeLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an HTTP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of an HTTP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttribute(request: $_model.DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - DescribeLoadBalancerHTTPSListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerHTTPSListenerAttributeResponse
   */
  async describeLoadBalancerHTTPSListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerHTTPSListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - DescribeLoadBalancerHTTPSListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPSListenerAttributeResponse
   */
  async describeLoadBalancerHTTPSListenerAttribute(request: $_model.DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the listeners of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   One or more listeners are added to the CLB instance. For more information, see the following topics:
   *     *   [CreateLoadBalancerUDPListener](~~CreateLoadBalancerUDPListener~~)
   *     *   [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~)
   *     *   [CreateLoadBalancerHTTPListener](~~CreateLoadBalancerHTTPListener~~)
   *     *   [CreateLoadBalancerHTTPSListener](~~CreateLoadBalancerHTTPSListener~~)
   * 
   * @param request - DescribeLoadBalancerListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerListenersResponse
   */
  async describeLoadBalancerListenersWithOptions(request: $_model.DescribeLoadBalancerListenersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerListenersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerListeners",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerListenersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerListenersResponse({}));
  }

  /**
   * Queries the listeners of a Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   One or more listeners are added to the CLB instance. For more information, see the following topics:
   *     *   [CreateLoadBalancerUDPListener](~~CreateLoadBalancerUDPListener~~)
   *     *   [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~)
   *     *   [CreateLoadBalancerHTTPListener](~~CreateLoadBalancerHTTPListener~~)
   *     *   [CreateLoadBalancerHTTPSListener](~~CreateLoadBalancerHTTPSListener~~)
   * 
   * @param request - DescribeLoadBalancerListenersRequest
   * @returns DescribeLoadBalancerListenersResponse
   */
  async describeLoadBalancerListeners(request: $_model.DescribeLoadBalancerListenersRequest): Promise<$_model.DescribeLoadBalancerListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerListenersWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerTCPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttribute(request: $_model.DescribeLoadBalancerTCPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a UDP listener.
   * 
   * @param request - DescribeLoadBalancerUDPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerUDPListenerAttributeResponse
   */
  async describeLoadBalancerUDPListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerUDPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerUDPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerUDPListenerAttributeResponse({}));
  }

  /**
   * Queries the configurations of a UDP listener.
   * 
   * @param request - DescribeLoadBalancerUDPListenerAttributeRequest
   * @returns DescribeLoadBalancerUDPListenerAttributeResponse
   */
  async describeLoadBalancerUDPListenerAttribute(request: $_model.DescribeLoadBalancerUDPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries Classic Load Balancer (CLB) instances.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancersWithOptions(request: $_model.DescribeLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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

    if (!$dara.isNull(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!$dara.isNull(request.serverIntranetAddress)) {
      query["ServerIntranetAddress"] = request.serverIntranetAddress;
    }

    if (!$dara.isNull(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
      action: "DescribeLoadBalancers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancersResponse({}));
  }

  /**
   * Queries Classic Load Balancer (CLB) instances.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancers(request: $_model.DescribeLoadBalancersRequest): Promise<$_model.DescribeLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a primary/secondary server group.
   * 
   * @param request - DescribeMasterSlaveServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMasterSlaveServerGroupAttributeResponse
   */
  async describeMasterSlaveServerGroupAttributeWithOptions(request: $_model.DescribeMasterSlaveServerGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMasterSlaveServerGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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
      action: "DescribeMasterSlaveServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMasterSlaveServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMasterSlaveServerGroupAttributeResponse({}));
  }

  /**
   * Queries the detailed information about a primary/secondary server group.
   * 
   * @param request - DescribeMasterSlaveServerGroupAttributeRequest
   * @returns DescribeMasterSlaveServerGroupAttributeResponse
   */
  async describeMasterSlaveServerGroupAttribute(request: $_model.DescribeMasterSlaveServerGroupAttributeRequest): Promise<$_model.DescribeMasterSlaveServerGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries primary/secondary server groups.
   * 
   * @param request - DescribeMasterSlaveServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMasterSlaveServerGroupsResponse
   */
  async describeMasterSlaveServerGroupsWithOptions(request: $_model.DescribeMasterSlaveServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMasterSlaveServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMasterSlaveServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMasterSlaveServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMasterSlaveServerGroupsResponse({}));
  }

  /**
   * Queries primary/secondary server groups.
   * 
   * @param request - DescribeMasterSlaveServerGroupsRequest
   * @returns DescribeMasterSlaveServerGroupsResponse
   */
  async describeMasterSlaveServerGroups(request: $_model.DescribeMasterSlaveServerGroupsRequest): Promise<$_model.DescribeMasterSlaveServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
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
      action: "DescribeRegions",
      version: "2014-05-15",
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
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a specified forwarding rule.
   * 
   * @param request - DescribeRuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleAttributeResponse
   */
  async describeRuleAttributeWithOptions(request: $_model.DescribeRuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleAttributeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleAttributeResponse({}));
  }

  /**
   * Queries the configurations of a specified forwarding rule.
   * 
   * @param request - DescribeRuleAttributeRequest
   * @returns DescribeRuleAttributeResponse
   */
  async describeRuleAttribute(request: $_model.DescribeRuleAttributeRequest): Promise<$_model.DescribeRuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the forwarding rules that are configured for a specified listener.
   * 
   * @param request - DescribeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
   */
  async describeRulesWithOptions(request: $_model.DescribeRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRulesResponse({}));
  }

  /**
   * Queries the forwarding rules that are configured for a specified listener.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: $_model.DescribeRulesRequest): Promise<$_model.DescribeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * Queries the server certificates in a region.
   * 
   * @remarks
   * >  For security reasons, only the fingerprints and names of server certificates are returned. The content of server certificates and private keys is not returned.
   * 
   * @param request - DescribeServerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerCertificatesResponse
   */
  async describeServerCertificatesWithOptions(request: $_model.DescribeServerCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServerCertificatesResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServerCertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServerCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServerCertificatesResponse({}));
  }

  /**
   * Queries the server certificates in a region.
   * 
   * @remarks
   * >  For security reasons, only the fingerprints and names of server certificates are returned. The content of server certificates and private keys is not returned.
   * 
   * @param request - DescribeServerCertificatesRequest
   * @returns DescribeServerCertificatesResponse
   */
  async describeServerCertificates(request: $_model.DescribeServerCertificatesRequest): Promise<$_model.DescribeServerCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * Take note of the following items:
   * *   The system queries tags based on the instance ID, tag key, and tag value specified by you.
   * *   If the logical relationship among the specified conditions is AND, only tags that match all the specified conditions are returned.
   * *   If the Tagkey parameter is specified and but Tagvalue parameter is not specified, all tags that contain the specified tag key are returned.
   * *   If you specify the Tagvalue parameter in a request, you must also specify the Tagkey parameter in the request.
   * *   If you specify both the Tagkey and Tagvalue parameters, only tags that contain the specified keys and values are returned.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.distinctKey)) {
      query["DistinctKey"] = request.distinctKey;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "DescribeTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsResponse({}));
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * Take note of the following items:
   * *   The system queries tags based on the instance ID, tag key, and tag value specified by you.
   * *   If the logical relationship among the specified conditions is AND, only tags that match all the specified conditions are returned.
   * *   If the Tagkey parameter is specified and but Tagvalue parameter is not specified, all tags that contain the specified tag key are returned.
   * *   If you specify the Tagvalue parameter in a request, you must also specify the Tagkey parameter in the request.
   * *   If you specify both the Tagkey and Tagvalue parameters, only tags that contain the specified keys and values are returned.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a vServer group.
   * 
   * @param request - DescribeVServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVServerGroupAttributeResponse
   */
  async describeVServerGroupAttributeWithOptions(request: $_model.DescribeVServerGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVServerGroupAttributeResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVServerGroupAttributeResponse({}));
  }

  /**
   * Queries the detailed information about a vServer group.
   * 
   * @param request - DescribeVServerGroupAttributeRequest
   * @returns DescribeVServerGroupAttributeResponse
   */
  async describeVServerGroupAttribute(request: $_model.DescribeVServerGroupAttributeRequest): Promise<$_model.DescribeVServerGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries vServer groups.
   * 
   * @param request - DescribeVServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVServerGroupsResponse
   */
  async describeVServerGroupsWithOptions(request: $_model.DescribeVServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!$dara.isNull(request.includeRule)) {
      query["IncludeRule"] = request.includeRule;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVServerGroupsResponse({}));
  }

  /**
   * Queries vServer groups.
   * 
   * @param request - DescribeVServerGroupsRequest
   * @returns DescribeVServerGroupsResponse
   */
  async describeVServerGroups(request: $_model.DescribeVServerGroupsRequest): Promise<$_model.DescribeVServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
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
      action: "DescribeZones",
      version: "2014-05-15",
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
   * Queries the zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Enables fine-grained monitoring for the current region.
   * 
   * @param request - EnableHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHighDefinationMonitorResponse
   */
  async enableHighDefinationMonitorWithOptions(request: $_model.EnableHighDefinationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHighDefinationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.EnableHighDefinationMonitorResponse({}));
  }

  /**
   * Enables fine-grained monitoring for the current region.
   * 
   * @param request - EnableHighDefinationMonitorRequest
   * @returns EnableHighDefinationMonitorResponse
   */
  async enableHighDefinationMonitor(request: $_model.EnableHighDefinationMonitorRequest): Promise<$_model.EnableHighDefinationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Queries Transport Layer Security (TLS) policies.
   * 
   * @param request - ListTLSCipherPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTLSCipherPoliciesResponse
   */
  async listTLSCipherPoliciesWithOptions(request: $_model.ListTLSCipherPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTLSCipherPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTLSCipherPolicies",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTLSCipherPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListTLSCipherPoliciesResponse({}));
  }

  /**
   * Queries Transport Layer Security (TLS) policies.
   * 
   * @param request - ListTLSCipherPoliciesRequest
   * @returns ListTLSCipherPoliciesResponse
   */
  async listTLSCipherPolicies(request: $_model.ListTLSCipherPoliciesRequest): Promise<$_model.ListTLSCipherPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTLSCipherPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified tag key are returned. If you set only **Tag.N.Value**, an error message is returned.
   * *   If you set **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
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
      version: "2014-05-15",
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
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified tag key are returned. If you set only **Tag.N.Value**, an error message is returned.
   * *   If you set **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
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
   * Modifies the configuration of fine-grained monitoring in a specified region.
   * 
   * @param request - ModifyHighDefinationMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHighDefinationMonitorResponse
   */
  async modifyHighDefinationMonitorWithOptions(request: $_model.ModifyHighDefinationMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHighDefinationMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
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
      action: "ModifyHighDefinationMonitor",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHighDefinationMonitorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHighDefinationMonitorResponse({}));
  }

  /**
   * Modifies the configuration of fine-grained monitoring in a specified region.
   * 
   * @param request - ModifyHighDefinationMonitorRequest
   * @returns ModifyHighDefinationMonitorResponse
   */
  async modifyHighDefinationMonitor(request: $_model.ModifyHighDefinationMonitorRequest): Promise<$_model.ModifyHighDefinationMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHighDefinationMonitorWithOptions(request, runtime);
  }

  /**
   * Changes the metering method of a pay-as-you-go Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * > *   For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * >*   This operation can change the metering method of only one instance at a time.
   * 
   * @param request - ModifyLoadBalancerInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInstanceChargeTypeResponse
   */
  async modifyLoadBalancerInstanceChargeTypeWithOptions(request: $_model.ModifyLoadBalancerInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLoadBalancerInstanceChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
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
      action: "ModifyLoadBalancerInstanceChargeType",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLoadBalancerInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLoadBalancerInstanceChargeTypeResponse({}));
  }

  /**
   * Changes the metering method of a pay-as-you-go Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * > *   For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * >*   This operation can change the metering method of only one instance at a time.
   * 
   * @param request - ModifyLoadBalancerInstanceChargeTypeRequest
   * @returns ModifyLoadBalancerInstanceChargeTypeResponse
   */
  async modifyLoadBalancerInstanceChargeType(request: $_model.ModifyLoadBalancerInstanceChargeTypeRequest): Promise<$_model.ModifyLoadBalancerInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the specification of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - ModifyLoadBalancerInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInstanceSpecResponse
   */
  async modifyLoadBalancerInstanceSpecWithOptions(request: $_model.ModifyLoadBalancerInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLoadBalancerInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
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
      action: "ModifyLoadBalancerInstanceSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLoadBalancerInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLoadBalancerInstanceSpecResponse({}));
  }

  /**
   * Modifies the specification of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - ModifyLoadBalancerInstanceSpecRequest
   * @returns ModifyLoadBalancerInstanceSpecResponse
   */
  async modifyLoadBalancerInstanceSpec(request: $_model.ModifyLoadBalancerInstanceSpecRequest): Promise<$_model.ModifyLoadBalancerInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the metering method of an Internet-facing Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * ## Description
   * *   If you modify only the maximum bandwidth of a pay-by-bandwidth CLB instance, the new bandwidth immediately takes effect.
   * *   If you modify the metering method (for example, switch from pay-by-bandwidth to pay-by-data-transfer), the new metering method and the other changes specified in the operation take effect at 00:00:00 the next day.
   * 
   * @param request - ModifyLoadBalancerInternetSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerInternetSpecResponse
   */
  async modifyLoadBalancerInternetSpecWithOptions(request: $_model.ModifyLoadBalancerInternetSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLoadBalancerInternetSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "ModifyLoadBalancerInternetSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLoadBalancerInternetSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLoadBalancerInternetSpecResponse({}));
  }

  /**
   * Modifies the metering method of an Internet-facing Classic Load Balancer (CLB) instance.
   * 
   * @remarks
   * ## Description
   * *   If you modify only the maximum bandwidth of a pay-by-bandwidth CLB instance, the new bandwidth immediately takes effect.
   * *   If you modify the metering method (for example, switch from pay-by-bandwidth to pay-by-data-transfer), the new metering method and the other changes specified in the operation take effect at 00:00:00 the next day.
   * 
   * @param request - ModifyLoadBalancerInternetSpecRequest
   * @returns ModifyLoadBalancerInternetSpecResponse
   */
  async modifyLoadBalancerInternetSpec(request: $_model.ModifyLoadBalancerInternetSpecRequest): Promise<$_model.ModifyLoadBalancerInternetSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLoadBalancerInternetSpecWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Classic Load Balancer (CLB) instance from pay-as-you-go to subscription.
   * 
   * @deprecated OpenAPI ModifyLoadBalancerPayType is deprecated
   * 
   * @param request - ModifyLoadBalancerPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerPayTypeResponse
   */
  async modifyLoadBalancerPayTypeWithOptions(request: $_model.ModifyLoadBalancerPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLoadBalancerPayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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
      action: "ModifyLoadBalancerPayType",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLoadBalancerPayTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLoadBalancerPayTypeResponse({}));
  }

  /**
   * Changes the billing method of a Classic Load Balancer (CLB) instance from pay-as-you-go to subscription.
   * 
   * @deprecated OpenAPI ModifyLoadBalancerPayType is deprecated
   * 
   * @param request - ModifyLoadBalancerPayTypeRequest
   * @returns ModifyLoadBalancerPayTypeResponse
   */
  // Deprecated
  async modifyLoadBalancerPayType(request: $_model.ModifyLoadBalancerPayTypeRequest): Promise<$_model.ModifyLoadBalancerPayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLoadBalancerPayTypeWithOptions(request, runtime);
  }

  /**
   * Replaces backend servers in a vServer group.
   * 
   * @remarks
   * This operation can be used only to replace backend servers in a vServer group. To modify the attributes of backend servers, such as weights, call the [SetVServerGroupAttribute](https://help.aliyun.com/document_detail/35217.html) operation.
   * 
   * @param request - ModifyVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVServerGroupBackendServersResponse
   */
  async modifyVServerGroupBackendServersWithOptions(request: $_model.ModifyVServerGroupBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVServerGroupBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newBackendServers)) {
      query["NewBackendServers"] = request.newBackendServers;
    }

    if (!$dara.isNull(request.oldBackendServers)) {
      query["OldBackendServers"] = request.oldBackendServers;
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

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVServerGroupBackendServersResponse({}));
  }

  /**
   * Replaces backend servers in a vServer group.
   * 
   * @remarks
   * This operation can be used only to replace backend servers in a vServer group. To modify the attributes of backend servers, such as weights, call the [SetVServerGroupAttribute](https://help.aliyun.com/document_detail/35217.html) operation.
   * 
   * @param request - ModifyVServerGroupBackendServersRequest
   * @returns ModifyVServerGroupBackendServersResponse
   */
  async modifyVServerGroupBackendServers(request: $_model.ModifyVServerGroupBackendServersRequest): Promise<$_model.ModifyVServerGroupBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Moves a resource to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Moves a resource to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Removes IP entries from the network access control list (ACL) of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntryWithOptions(request: $_model.RemoveAccessControlListEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAccessControlListEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "RemoveAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAccessControlListEntryResponse({}));
  }

  /**
   * Removes IP entries from the network access control list (ACL) of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntry(request: $_model.RemoveAccessControlListEntryRequest): Promise<$_model.RemoveAccessControlListEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Removes backend servers.
   * 
   * @remarks
   * >  If the backend servers that you want to remove are not in the server list of the Classic Load Balancer (CLB) instance, the request fails. However, the system does not report an error.
   * 
   * @param request - RemoveBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServersWithOptions(request: $_model.RemoveBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "RemoveBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveBackendServersResponse({}));
  }

  /**
   * Removes backend servers.
   * 
   * @remarks
   * >  If the backend servers that you want to remove are not in the server list of the Classic Load Balancer (CLB) instance, the request fails. However, the system does not report an error.
   * 
   * @param request - RemoveBackendServersRequest
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServers(request: $_model.RemoveBackendServersRequest): Promise<$_model.RemoveBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  /**
   * Removes IP addresses or CIDR blocks from the whitelist of a listener.
   * 
   * @param request - RemoveListenerWhiteListItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveListenerWhiteListItemResponse
   */
  async removeListenerWhiteListItemWithOptions(request: $_model.RemoveListenerWhiteListItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveListenerWhiteListItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new $_model.RemoveListenerWhiteListItemResponse({}));
  }

  /**
   * Removes IP addresses or CIDR blocks from the whitelist of a listener.
   * 
   * @param request - RemoveListenerWhiteListItemRequest
   * @returns RemoveListenerWhiteListItemResponse
   */
  async removeListenerWhiteListItem(request: $_model.RemoveListenerWhiteListItemRequest): Promise<$_model.RemoveListenerWhiteListItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeListenerWhiteListItemWithOptions(request, runtime);
  }

  /**
   * Removes tags from a Server Load Balancer (SLB) instance.
   * 
   * @param request - RemoveTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagsResponse
   */
  async removeTagsWithOptions(request: $_model.RemoveTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTagsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTagsResponse({}));
  }

  /**
   * Removes tags from a Server Load Balancer (SLB) instance.
   * 
   * @param request - RemoveTagsRequest
   * @returns RemoveTagsResponse
   */
  async removeTags(request: $_model.RemoveTagsRequest): Promise<$_model.RemoveTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  /**
   * Removes backend servers from a vServer group.
   * 
   * @remarks
   * >  If the backend servers specified by the **BackendServers** parameter do not exist in the vServer group, the backend servers are ignored. No error message is returned.
   * 
   * @param request - RemoveVServerGroupBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVServerGroupBackendServersResponse
   */
  async removeVServerGroupBackendServersWithOptions(request: $_model.RemoveVServerGroupBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveVServerGroupBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveVServerGroupBackendServersResponse({}));
  }

  /**
   * Removes backend servers from a vServer group.
   * 
   * @remarks
   * >  If the backend servers specified by the **BackendServers** parameter do not exist in the vServer group, the backend servers are ignored. No error message is returned.
   * 
   * @param request - RemoveVServerGroupBackendServersRequest
   * @returns RemoveVServerGroupBackendServersResponse
   */
  async removeVServerGroupBackendServers(request: $_model.RemoveVServerGroupBackendServersRequest): Promise<$_model.RemoveVServerGroupBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeVServerGroupBackendServersWithOptions(request, runtime);
  }

  /**
   * Renames an access control list (ACL).
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttributeWithOptions(request: $_model.SetAccessControlListAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccessControlListAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
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
      action: "SetAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetAccessControlListAttributeResponse({}));
  }

  /**
   * Renames an access control list (ACL).
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttribute(request: $_model.SetAccessControlListAttributeRequest): Promise<$_model.SetAccessControlListAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * Adds an access log forwarding rule to a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetAccessLogsDownloadAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccessLogsDownloadAttributeResponse
   */
  async setAccessLogsDownloadAttributeWithOptions(request: $_model.SetAccessLogsDownloadAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccessLogsDownloadAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.logsDownloadAttributes)) {
      query["LogsDownloadAttributes"] = request.logsDownloadAttributes;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAccessLogsDownloadAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccessLogsDownloadAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetAccessLogsDownloadAttributeResponse({}));
  }

  /**
   * Adds an access log forwarding rule to a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetAccessLogsDownloadAttributeRequest
   * @returns SetAccessLogsDownloadAttributeResponse
   */
  async setAccessLogsDownloadAttribute(request: $_model.SetAccessLogsDownloadAttributeRequest): Promise<$_model.SetAccessLogsDownloadAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccessLogsDownloadAttributeWithOptions(request, runtime);
  }

  /**
   * Specifies weights for backend servers.
   * 
   * @param request - SetBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackendServersResponse
   */
  async setBackendServersWithOptions(request: $_model.SetBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.SetBackendServersResponse({}));
  }

  /**
   * Specifies weights for backend servers.
   * 
   * @param request - SetBackendServersRequest
   * @returns SetBackendServersResponse
   */
  async setBackendServers(request: $_model.SetBackendServersRequest): Promise<$_model.SetBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  /**
   * Specifies a name for a CA certificate.
   * 
   * @param request - SetCACertificateNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCACertificateNameResponse
   */
  async setCACertificateNameWithOptions(request: $_model.SetCACertificateNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCACertificateNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!$dara.isNull(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
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
      action: "SetCACertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCACertificateNameResponse>(await this.callApi(params, req, runtime), new $_model.SetCACertificateNameResponse({}));
  }

  /**
   * Specifies a name for a CA certificate.
   * 
   * @param request - SetCACertificateNameRequest
   * @returns SetCACertificateNameResponse
   */
  async setCACertificateName(request: $_model.SetCACertificateNameRequest): Promise<$_model.SetCACertificateNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCACertificateNameWithOptions(request, runtime);
  }

  /**
   * Replaces the certificate of an additional domain name.
   * 
   * @remarks
   * >  You cannot replace an additional certificate for a listener that is added to a shared-resource Server Load Balancer (SLB) instance.
   * 
   * @param request - SetDomainExtensionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainExtensionAttributeResponse
   */
  async setDomainExtensionAttributeWithOptions(request: $_model.SetDomainExtensionAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainExtensionAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainExtensionAttributeResponse({}));
  }

  /**
   * Replaces the certificate of an additional domain name.
   * 
   * @remarks
   * >  You cannot replace an additional certificate for a listener that is added to a shared-resource Server Load Balancer (SLB) instance.
   * 
   * @param request - SetDomainExtensionAttributeRequest
   * @returns SetDomainExtensionAttributeResponse
   */
  async setDomainExtensionAttribute(request: $_model.SetDomainExtensionAttributeRequest): Promise<$_model.SetDomainExtensionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainExtensionAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the whitelist of a specified listener.
   * 
   * @param request - SetListenerAccessControlStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetListenerAccessControlStatusResponse
   */
  async setListenerAccessControlStatusWithOptions(request: $_model.SetListenerAccessControlStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetListenerAccessControlStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessControlStatus)) {
      query["AccessControlStatus"] = request.accessControlStatus;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetListenerAccessControlStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetListenerAccessControlStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetListenerAccessControlStatusResponse({}));
  }

  /**
   * Enables or disables the whitelist of a specified listener.
   * 
   * @param request - SetListenerAccessControlStatusRequest
   * @returns SetListenerAccessControlStatusResponse
   */
  async setListenerAccessControlStatus(request: $_model.SetListenerAccessControlStatusRequest): Promise<$_model.SetListenerAccessControlStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setListenerAccessControlStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables deletion protection for an SLB instance.
   * 
   * @param request - SetLoadBalancerDeleteProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerDeleteProtectionResponse
   */
  async setLoadBalancerDeleteProtectionWithOptions(request: $_model.SetLoadBalancerDeleteProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerDeleteProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetLoadBalancerDeleteProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerDeleteProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerDeleteProtectionResponse({}));
  }

  /**
   * Enables or disables deletion protection for an SLB instance.
   * 
   * @param request - SetLoadBalancerDeleteProtectionRequest
   * @returns SetLoadBalancerDeleteProtectionResponse
   */
  async setLoadBalancerDeleteProtection(request: $_model.SetLoadBalancerDeleteProtectionRequest): Promise<$_model.SetLoadBalancerDeleteProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerDeleteProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an HTTP listener.
   * 
   * @remarks
   * ### Prerequisites
   * *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttributeWithOptions(request: $_model.SetLoadBalancerHTTPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerHTTPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!$dara.isNull(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!$dara.isNull(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of an HTTP listener.
   * 
   * @remarks
   * ### Prerequisites
   * *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTP listener is created. For more information about how to create an HTTP listener, see [CreateLoadBalancerHTTPListener](https://help.aliyun.com/document_detail/27592.html).
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttribute(request: $_model.SetLoadBalancerHTTPListenerAttributeRequest): Promise<$_model.SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: $_model.SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerHTTPSListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!$dara.isNull(request.XForwardedFor_ClientSrcPort)) {
      query["XForwardedFor_ClientSrcPort"] = request.XForwardedFor_ClientSrcPort;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!$dara.isNull(request.XForwardedFor_SLBPORT)) {
      query["XForwardedFor_SLBPORT"] = request.XForwardedFor_SLBPORT;
    }

    if (!$dara.isNull(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of an HTTPS listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   An HTTPS listener is created. For more information about how to create an HTTPS listener, see [CreateLoadBalancerHTTPSListener](https://help.aliyun.com/document_detail/27593.html).
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttribute(request: $_model.SetLoadBalancerHTTPSListenerAttributeRequest): Promise<$_model.SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of the configuration read-only mode for a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerModificationProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerModificationProtectionResponse
   */
  async setLoadBalancerModificationProtectionWithOptions(request: $_model.SetLoadBalancerModificationProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerModificationProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!$dara.isNull(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
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
      action: "SetLoadBalancerModificationProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerModificationProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerModificationProtectionResponse({}));
  }

  /**
   * Modifies the configuration of the configuration read-only mode for a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerModificationProtectionRequest
   * @returns SetLoadBalancerModificationProtectionResponse
   */
  async setLoadBalancerModificationProtection(request: $_model.SetLoadBalancerModificationProtectionRequest): Promise<$_model.SetLoadBalancerModificationProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerModificationProtectionWithOptions(request, runtime);
  }

  /**
   * Changes the name of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerNameWithOptions(request: $_model.SetLoadBalancerNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
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
      action: "SetLoadBalancerName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerNameResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerNameResponse({}));
  }

  /**
   * Changes the name of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerNameRequest
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerName(request: $_model.SetLoadBalancerNameRequest): Promise<$_model.SetLoadBalancerNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerNameWithOptions(request, runtime);
  }

  /**
   * Modifies the state of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatusWithOptions(request: $_model.SetLoadBalancerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
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
      action: "SetLoadBalancerStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerStatusResponse({}));
  }

  /**
   * Modifies the state of a Classic Load Balancer (CLB) instance.
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatus(request: $_model.SetLoadBalancerStatusRequest): Promise<$_model.SetLoadBalancerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   A TCP listener is created. For more information, see [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~).
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttributeWithOptions(request: $_model.SetLoadBalancerTCPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerTCPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!$dara.isNull(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.synProxy)) {
      query["SynProxy"] = request.synProxy;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a TCP listener of Classic Load Balancer (CLB).
   * 
   * @remarks
   *   A CLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/2401685.html).
   * *   A TCP listener is created. For more information, see [CreateLoadBalancerTCPListener](~~CreateLoadBalancerTCPListener~~).
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttribute(request: $_model.SetLoadBalancerTCPListenerAttributeRequest): Promise<$_model.SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a UDP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   A UDP listener is created. For more information, see [CreateLoadBalancerUDPListener](https://help.aliyun.com/document_detail/27595.html).
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttributeWithOptions(request: $_model.SetLoadBalancerUDPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerUDPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckSwitch)) {
      query["HealthCheckSwitch"] = request.healthCheckSwitch;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyProtocolV2Enabled)) {
      query["ProxyProtocolV2Enabled"] = request.proxyProtocolV2Enabled;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!$dara.isNull(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerUDPListenerAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a UDP listener.
   * 
   * @remarks
   *   A Classic Load Balancer (CLB) instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/27577.html).
   * *   A UDP listener is created. For more information, see [CreateLoadBalancerUDPListener](https://help.aliyun.com/document_detail/27595.html).
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttribute(request: $_model.SetLoadBalancerUDPListenerAttributeRequest): Promise<$_model.SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a forwarding rule that is associated with a vServer group.
   * 
   * @param request - SetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRuleResponse
   */
  async setRuleWithOptions(request: $_model.SetRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.listenerSync)) {
      query["ListenerSync"] = request.listenerSync;
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

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRule",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRuleResponse>(await this.callApi(params, req, runtime), new $_model.SetRuleResponse({}));
  }

  /**
   * Modifies a forwarding rule that is associated with a vServer group.
   * 
   * @param request - SetRuleRequest
   * @returns SetRuleResponse
   */
  async setRule(request: $_model.SetRuleRequest): Promise<$_model.SetRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRuleWithOptions(request, runtime);
  }

  /**
   * Sets a name for a server certificate.
   * 
   * @param request - SetServerCertificateNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetServerCertificateNameResponse
   */
  async setServerCertificateNameWithOptions(request: $_model.SetServerCertificateNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetServerCertificateNameResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetServerCertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetServerCertificateNameResponse>(await this.callApi(params, req, runtime), new $_model.SetServerCertificateNameResponse({}));
  }

  /**
   * Sets a name for a server certificate.
   * 
   * @param request - SetServerCertificateNameRequest
   * @returns SetServerCertificateNameResponse
   */
  async setServerCertificateName(request: $_model.SetServerCertificateNameRequest): Promise<$_model.SetServerCertificateNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setServerCertificateNameWithOptions(request, runtime);
  }

  /**
   * Configures a Transport Layer Security (TLS) policy.
   * 
   * @param request - SetTLSCipherPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTLSCipherPolicyAttributeResponse
   */
  async setTLSCipherPolicyAttributeWithOptions(request: $_model.SetTLSCipherPolicyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTLSCipherPolicyAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    if (!$dara.isNull(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTLSCipherPolicyAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTLSCipherPolicyAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetTLSCipherPolicyAttributeResponse({}));
  }

  /**
   * Configures a Transport Layer Security (TLS) policy.
   * 
   * @param request - SetTLSCipherPolicyAttributeRequest
   * @returns SetTLSCipherPolicyAttributeResponse
   */
  async setTLSCipherPolicyAttribute(request: $_model.SetTLSCipherPolicyAttributeRequest): Promise<$_model.SetTLSCipherPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTLSCipherPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a vServer group.
   * 
   * @remarks
   * This operation can be used to modify the weights of backend servers and names of vServer groups.
   * *   If you want to modify backend servers in a specified vServer group, call the [ModifyVServerGroupBackendServers](https://help.aliyun.com/document_detail/35220.html) operation.
   * *   If you want to add backend servers to a specified vServer group, call the [AddVServerGroupBackendServers](https://help.aliyun.com/document_detail/35218.html) operation.
   * 
   * @param request - SetVServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVServerGroupAttributeResponse
   */
  async setVServerGroupAttributeWithOptions(request: $_model.SetVServerGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVServerGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetVServerGroupAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a vServer group.
   * 
   * @remarks
   * This operation can be used to modify the weights of backend servers and names of vServer groups.
   * *   If you want to modify backend servers in a specified vServer group, call the [ModifyVServerGroupBackendServers](https://help.aliyun.com/document_detail/35220.html) operation.
   * *   If you want to add backend servers to a specified vServer group, call the [AddVServerGroupBackendServers](https://help.aliyun.com/document_detail/35218.html) operation.
   * 
   * @param request - SetVServerGroupAttributeRequest
   * @returns SetVServerGroupAttributeResponse
   */
  async setVServerGroupAttribute(request: $_model.SetVServerGroupAttributeRequest): Promise<$_model.SetVServerGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Enables a listener.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can call the operation only when the listener is in the Stopped state.
   * *   If the operation is successful, the listener switches to the Starting state.
   * *   You cannot perform this operation when the Classic Load Balancer (CLB) instance to which the listener belongs is in the Locked state.
   * 
   * @param request - StartLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartLoadBalancerListenerResponse
   */
  async startLoadBalancerListenerWithOptions(request: $_model.StartLoadBalancerListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartLoadBalancerListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "StartLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new $_model.StartLoadBalancerListenerResponse({}));
  }

  /**
   * Enables a listener.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can call the operation only when the listener is in the Stopped state.
   * *   If the operation is successful, the listener switches to the Starting state.
   * *   You cannot perform this operation when the Classic Load Balancer (CLB) instance to which the listener belongs is in the Locked state.
   * 
   * @param request - StartLoadBalancerListenerRequest
   * @returns StartLoadBalancerListenerResponse
   */
  async startLoadBalancerListener(request: $_model.StartLoadBalancerListenerRequest): Promise<$_model.StartLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Stops a listener.
   * 
   * @remarks
   * Before you make this API call, note the following:
   * *   After the API call is successfully made, the listener enters the stopped state.
   * *   If the Classic Load Balancer (CLB) instance to which the listener to be stopped belongs is in the locked state, this API call cannot be made.
   * >  If you stop the listener, your services will be disrupted. Exercise caution when you perform this action.
   * 
   * @param request - StopLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLoadBalancerListenerResponse
   */
  async stopLoadBalancerListenerWithOptions(request: $_model.StopLoadBalancerListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopLoadBalancerListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "StopLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new $_model.StopLoadBalancerListenerResponse({}));
  }

  /**
   * Stops a listener.
   * 
   * @remarks
   * Before you make this API call, note the following:
   * *   After the API call is successfully made, the listener enters the stopped state.
   * *   If the Classic Load Balancer (CLB) instance to which the listener to be stopped belongs is in the locked state, this API call cannot be made.
   * >  If you stop the listener, your services will be disrupted. Exercise caution when you perform this action.
   * 
   * @param request - StopLoadBalancerListenerRequest
   * @returns StopLoadBalancerListenerResponse
   */
  async stopLoadBalancerListener(request: $_model.StopLoadBalancerListenerRequest): Promise<$_model.StopLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds the tags to resources.
   * 
   * @remarks
   * >  You can add at most 20 tags to each instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
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
      version: "2014-05-15",
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
   * Creates tags and adds the tags to resources.
   * 
   * @remarks
   * >  You can add at most 20 tags to each instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a resource.
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
      version: "2014-05-15",
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
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Uploads a CA certificate.
   * 
   * @remarks
   * You can upload only one CA certificate at a time. After a CA certificate is uploaded, the certificate ID, name, and fingerprint are returned.
   * 
   * @param request - UploadCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCACertificateResponse
   */
  async uploadCACertificateWithOptions(request: $_model.UploadCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CACertificate)) {
      query["CACertificate"] = request.CACertificate;
    }

    if (!$dara.isNull(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
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
      action: "UploadCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadCACertificateResponse({}));
  }

  /**
   * Uploads a CA certificate.
   * 
   * @remarks
   * You can upload only one CA certificate at a time. After a CA certificate is uploaded, the certificate ID, name, and fingerprint are returned.
   * 
   * @param request - UploadCACertificateRequest
   * @returns UploadCACertificateResponse
   */
  async uploadCACertificate(request: $_model.UploadCACertificateRequest): Promise<$_model.UploadCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCACertificateWithOptions(request, runtime);
  }

  /**
   * Uploads a server certificate.
   * 
   * @remarks
   *   You can upload only one server certificate and its private key in each call.
   * *   After a server certificate and its private key are uploaded, the fingerprints of all server certificates that belong to your Alibaba Cloud account are returned.
   * 
   * @param request - UploadServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadServerCertificateResponse
   */
  async uploadServerCertificateWithOptions(request: $_model.UploadServerCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadServerCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliCloudCertificateId)) {
      query["AliCloudCertificateId"] = request.aliCloudCertificateId;
    }

    if (!$dara.isNull(request.aliCloudCertificateName)) {
      query["AliCloudCertificateName"] = request.aliCloudCertificateName;
    }

    if (!$dara.isNull(request.aliCloudCertificateRegionId)) {
      query["AliCloudCertificateRegionId"] = request.aliCloudCertificateRegionId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
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

    if (!$dara.isNull(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    if (!$dara.isNull(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadServerCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadServerCertificateResponse({}));
  }

  /**
   * Uploads a server certificate.
   * 
   * @remarks
   *   You can upload only one server certificate and its private key in each call.
   * *   After a server certificate and its private key are uploaded, the fingerprints of all server certificates that belong to your Alibaba Cloud account are returned.
   * 
   * @param request - UploadServerCertificateRequest
   * @returns UploadServerCertificateResponse
   */
  async uploadServerCertificate(request: $_model.UploadServerCertificateRequest): Promise<$_model.UploadServerCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadServerCertificateWithOptions(request, runtime);
  }

}
