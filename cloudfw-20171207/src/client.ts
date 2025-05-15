// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "cloudfw.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "cloudfw.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudfw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an address book for access control. Supported address book types are IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books. An ECS tag-based address book includes the public IP addresses of the ECS instances that have specific tags.
   * 
   * @remarks
   * You can call the AddAddressBook operation to create an address book for access control. The address book can be an IP address book, an ECS tag-based address book, a port address book, or a domain address book.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAddressBookResponse
   */
  async addAddressBookWithOptions(request: $_model.AddAddressBookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAddressBookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!$dara.isNull(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!$dara.isNull(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAddressBookResponse>(await this.callApi(params, req, runtime), new $_model.AddAddressBookResponse({}));
  }

  /**
   * Creates an address book for access control. Supported address book types are IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books. An ECS tag-based address book includes the public IP addresses of the ECS instances that have specific tags.
   * 
   * @remarks
   * You can call the AddAddressBook operation to create an address book for access control. The address book can be an IP address book, an ECS tag-based address book, a port address book, or a domain address book.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAddressBookRequest
   * @returns AddAddressBookResponse
   */
  async addAddressBook(request: $_model.AddAddressBookRequest): Promise<$_model.AddAddressBookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAddressBookWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy.
   * 
   * @remarks
   * You can call the AddControlPolicy operation to create an access control policy to allow, block, or monitor traffic that reaches Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddControlPolicyResponse
   */
  async addControlPolicyWithOptions(request: $_model.AddControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AddControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy.
   * 
   * @remarks
   * You can call the AddControlPolicy operation to create an access control policy to allow, block, or monitor traffic that reaches Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddControlPolicyRequest
   * @returns AddControlPolicyResponse
   */
  async addControlPolicy(request: $_model.AddControlPolicyRequest): Promise<$_model.AddControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addControlPolicyWithOptions(request, runtime);
  }

  /**
   * Adds members to Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to add members to Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInstanceMembersResponse
   */
  async addInstanceMembersWithOptions(request: $_model.AddInstanceMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddInstanceMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInstanceMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddInstanceMembersResponse({}));
  }

  /**
   * Adds members to Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to add members to Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddInstanceMembersRequest
   * @returns AddInstanceMembersResponse
   */
  async addInstanceMembers(request: $_model.AddInstanceMembersRequest): Promise<$_model.AddInstanceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Copies all access control policies from a policy group of a source virtual private cloud (VPC) firewall to a policy group of a destination VPC firewall.
   * 
   * @remarks
   * You can call the BatchCopyVpcFirewallControlPolicy operation to copy all access control policies from a policy group of a source VPC firewall to a policy group of a destination VPC firewall.  
   * Before you call this operation, we recommend that you back up access control policies. For more information about how to back up an access control policy, see [Back up an access control policy](https://www.alibabacloud.com/help/en/cloud-firewall/latest/back-up-and-roll-back-an-access-control-policy).  
   * After you call this operation, all the access control policies in the policy group of the destination VPC firewall are replaced.  
   * The policy groups of the source VPC firewall and the destination VPC firewall must belong to the same Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. When the number of calls to this operation per second exceeds the limit, throttling is triggered. Throttling may affect your business. We recommend that you take note of the limit on this operation.
   * 
   * @param request - BatchCopyVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCopyVpcFirewallControlPolicyResponse
   */
  async batchCopyVpcFirewallControlPolicyWithOptions(request: $_model.BatchCopyVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCopyVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.sourceVpcFirewallId)) {
      query["SourceVpcFirewallId"] = request.sourceVpcFirewallId;
    }

    if (!$dara.isNull(request.targetVpcFirewallId)) {
      query["TargetVpcFirewallId"] = request.targetVpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCopyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCopyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.BatchCopyVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Copies all access control policies from a policy group of a source virtual private cloud (VPC) firewall to a policy group of a destination VPC firewall.
   * 
   * @remarks
   * You can call the BatchCopyVpcFirewallControlPolicy operation to copy all access control policies from a policy group of a source VPC firewall to a policy group of a destination VPC firewall.  
   * Before you call this operation, we recommend that you back up access control policies. For more information about how to back up an access control policy, see [Back up an access control policy](https://www.alibabacloud.com/help/en/cloud-firewall/latest/back-up-and-roll-back-an-access-control-policy).  
   * After you call this operation, all the access control policies in the policy group of the destination VPC firewall are replaced.  
   * The policy groups of the source VPC firewall and the destination VPC firewall must belong to the same Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. When the number of calls to this operation per second exceeds the limit, throttling is triggered. Throttling may affect your business. We recommend that you take note of the limit on this operation.
   * 
   * @param request - BatchCopyVpcFirewallControlPolicyRequest
   * @returns BatchCopyVpcFirewallControlPolicyResponse
   */
  async batchCopyVpcFirewallControlPolicy(request: $_model.BatchCopyVpcFirewallControlPolicyRequest): Promise<$_model.BatchCopyVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCopyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes multiple access control policies for a virtual private cloud (VPC) firewall at a time.
   * 
   * @param request - BatchDeleteVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteVpcFirewallControlPolicyResponse
   */
  async batchDeleteVpcFirewallControlPolicyWithOptions(request: $_model.BatchDeleteVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuidList)) {
      query["AclUuidList"] = request.aclUuidList;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes multiple access control policies for a virtual private cloud (VPC) firewall at a time.
   * 
   * @param request - BatchDeleteVpcFirewallControlPolicyRequest
   * @returns BatchDeleteVpcFirewallControlPolicyResponse
   */
  async batchDeleteVpcFirewallControlPolicy(request: $_model.BatchDeleteVpcFirewallControlPolicyRequest): Promise<$_model.BatchDeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a file download task.
   * 
   * @param request - CreateDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadTaskResponse
   */
  async createDownloadTaskWithOptions(request: $_model.CreateDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDownloadTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskData)) {
      query["TaskData"] = request.taskData;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDownloadTaskResponse({}));
  }

  /**
   * Creates a file download task.
   * 
   * @param request - CreateDownloadTaskRequest
   * @returns CreateDownloadTaskResponse
   */
  async createDownloadTask(request: $_model.CreateDownloadTaskRequest): Promise<$_model.CreateDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy for a NAT firewall.
   * 
   * @remarks
   * You can call this operation to create a policy that allows, denies, or monitors the traffic that passes through the NAT firewall.
   * 
   * @param request - CreateNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNatFirewallControlPolicyResponse
   */
  async createNatFirewallControlPolicyWithOptions(request: $_model.CreateNatFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNatFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateNatFirewallControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy for a NAT firewall.
   * 
   * @remarks
   * You can call this operation to create a policy that allows, denies, or monitors the traffic that passes through the NAT firewall.
   * 
   * @param request - CreateNatFirewallControlPolicyRequest
   * @returns CreateNatFirewallControlPolicyResponse
   */
  async createNatFirewallControlPolicy(request: $_model.CreateNatFirewallControlPolicyRequest): Promise<$_model.CreateNatFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a NAT firewall.
   * 
   * @param request - CreateSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityProxyResponse
   */
  async createSecurityProxyWithOptions(request: $_model.CreateSecurityProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.natRouteEntryList)) {
      query["NatRouteEntryList"] = request.natRouteEntryList;
    }

    if (!$dara.isNull(request.proxyName)) {
      query["ProxyName"] = request.proxyName;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.strictMode)) {
      query["StrictMode"] = request.strictMode;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchAuto)) {
      query["VswitchAuto"] = request.vswitchAuto;
    }

    if (!$dara.isNull(request.vswitchCidr)) {
      query["VswitchCidr"] = request.vswitchCidr;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityProxyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityProxyResponse({}));
  }

  /**
   * Creates a NAT firewall.
   * 
   * @param request - CreateSecurityProxyRequest
   * @returns CreateSecurityProxyResponse
   */
  async createSecurityProxy(request: $_model.CreateSecurityProxyRequest): Promise<$_model.CreateSecurityProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityProxyWithOptions(request, runtime);
  }

  /**
   * 创建云防火墙SLS日志投递
   * 
   * @param request - CreateSlsLogDispatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlsLogDispatchResponse
   */
  async createSlsLogDispatchWithOptions(request: $_model.CreateSlsLogDispatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlsLogDispatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.slsRegionId)) {
      body["SlsRegionId"] = request.slsRegionId;
    }

    if (!$dara.isNull(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlsLogDispatch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlsLogDispatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlsLogDispatchResponse({}));
  }

  /**
   * 创建云防火墙SLS日志投递
   * 
   * @param request - CreateSlsLogDispatchRequest
   * @returns CreateSlsLogDispatchResponse
   */
  async createSlsLogDispatch(request: $_model.CreateSlsLogDispatchRequest): Promise<$_model.CreateSlsLogDispatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSlsLogDispatchWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC) firewall for a transit router.
   * 
   * @param request - CreateTrFirewallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrFirewallV2Response
   */
  async createTrFirewallV2WithOptions(request: $_model.CreateTrFirewallV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrFirewallV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.firewallDescription)) {
      query["FirewallDescription"] = request.firewallDescription;
    }

    if (!$dara.isNull(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!$dara.isNull(request.firewallSubnetCidr)) {
      query["FirewallSubnetCidr"] = request.firewallSubnetCidr;
    }

    if (!$dara.isNull(request.firewallVpcCidr)) {
      query["FirewallVpcCidr"] = request.firewallVpcCidr;
    }

    if (!$dara.isNull(request.firewallVpcId)) {
      query["FirewallVpcId"] = request.firewallVpcId;
    }

    if (!$dara.isNull(request.firewallVswitchId)) {
      query["FirewallVswitchId"] = request.firewallVswitchId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!$dara.isNull(request.trAttachmentMasterCidr)) {
      query["TrAttachmentMasterCidr"] = request.trAttachmentMasterCidr;
    }

    if (!$dara.isNull(request.trAttachmentMasterZone)) {
      query["TrAttachmentMasterZone"] = request.trAttachmentMasterZone;
    }

    if (!$dara.isNull(request.trAttachmentSlaveCidr)) {
      query["TrAttachmentSlaveCidr"] = request.trAttachmentSlaveCidr;
    }

    if (!$dara.isNull(request.trAttachmentSlaveZone)) {
      query["TrAttachmentSlaveZone"] = request.trAttachmentSlaveZone;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrFirewallV2",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrFirewallV2Response>(await this.callApi(params, req, runtime), new $_model.CreateTrFirewallV2Response({}));
  }

  /**
   * Creates a virtual private cloud (VPC) firewall for a transit router.
   * 
   * @param request - CreateTrFirewallV2Request
   * @returns CreateTrFirewallV2Response
   */
  async createTrFirewallV2(request: $_model.CreateTrFirewallV2Request): Promise<$_model.CreateTrFirewallV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTrFirewallV2WithOptions(request, runtime);
  }

  /**
   * Creates a routing policy for a VPC firewall of a transit router.
   * 
   * @param tmpReq - CreateTrFirewallV2RoutePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrFirewallV2RoutePolicyResponse
   */
  async createTrFirewallV2RoutePolicyWithOptions(tmpReq: $_model.CreateTrFirewallV2RoutePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrFirewallV2RoutePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTrFirewallV2RoutePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destCandidateList)) {
      request.destCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destCandidateList, "DestCandidateList", "json");
    }

    if (!$dara.isNull(tmpReq.srcCandidateList)) {
      request.srcCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcCandidateList, "SrcCandidateList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.destCandidateListShrink)) {
      query["DestCandidateList"] = request.destCandidateListShrink;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.policyDescription)) {
      query["PolicyDescription"] = request.policyDescription;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.srcCandidateListShrink)) {
      query["SrcCandidateList"] = request.srcCandidateListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrFirewallV2RoutePolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrFirewallV2RoutePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrFirewallV2RoutePolicyResponse({}));
  }

  /**
   * Creates a routing policy for a VPC firewall of a transit router.
   * 
   * @param request - CreateTrFirewallV2RoutePolicyRequest
   * @returns CreateTrFirewallV2RoutePolicyResponse
   */
  async createTrFirewallV2RoutePolicy(request: $_model.CreateTrFirewallV2RoutePolicyRequest): Promise<$_model.CreateTrFirewallV2RoutePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTrFirewallV2RoutePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC) firewall to protect traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the CreateVpcFirewallCenConfigure operation to create a VPC firewall. The VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. The VPC firewall cannot protect mutual access traffic between VBRs, between CCN instances, or between VBRs and CCN instances. For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallCenConfigureResponse
   */
  async createVpcFirewallCenConfigureWithOptions(request: $_model.CreateVpcFirewallCenConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcFirewallCenConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!$dara.isNull(request.firewallVSwitchCidrBlock)) {
      query["FirewallVSwitchCidrBlock"] = request.firewallVSwitchCidrBlock;
    }

    if (!$dara.isNull(request.firewallVpcCidrBlock)) {
      query["FirewallVpcCidrBlock"] = request.firewallVpcCidrBlock;
    }

    if (!$dara.isNull(request.firewallVpcStandbyZoneId)) {
      query["FirewallVpcStandbyZoneId"] = request.firewallVpcStandbyZoneId;
    }

    if (!$dara.isNull(request.firewallVpcZoneId)) {
      query["FirewallVpcZoneId"] = request.firewallVpcZoneId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!$dara.isNull(request.vpcRegion)) {
      query["VpcRegion"] = request.vpcRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Creates a virtual private cloud (VPC) firewall to protect traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the CreateVpcFirewallCenConfigure operation to create a VPC firewall. The VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. The VPC firewall cannot protect mutual access traffic between VBRs, between CCN instances, or between VBRs and CCN instances. For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallCenConfigureRequest
   * @returns CreateVpcFirewallCenConfigureResponse
   */
  async createVpcFirewallCenConfigure(request: $_model.CreateVpcFirewallCenConfigureRequest): Promise<$_model.CreateVpcFirewallCenConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Creates a Virtual Private Cloud (VPC) firewall to protect traffic between two VPCs that are connected by using an Express Connect.
   * 
   * @remarks
   * You can call this operation to create a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. The VPC firewall does not control the mutual access traffic between VPCs that reside in different regions or belong to different Alibaba Cloud accounts. The firewall also does not control the mutual access traffic between VPCs and virtual border routers (VBRs). For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ### [](#qps)QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallConfigureResponse
   */
  async createVpcFirewallConfigureWithOptions(request: $_model.CreateVpcFirewallConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcFirewallConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!$dara.isNull(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!$dara.isNull(request.localVpcRegion)) {
      query["LocalVpcRegion"] = request.localVpcRegion;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!$dara.isNull(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!$dara.isNull(request.peerVpcRegion)) {
      query["PeerVpcRegion"] = request.peerVpcRegion;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcFirewallConfigureResponse({}));
  }

  /**
   * Creates a Virtual Private Cloud (VPC) firewall to protect traffic between two VPCs that are connected by using an Express Connect.
   * 
   * @remarks
   * You can call this operation to create a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. The VPC firewall does not control the mutual access traffic between VPCs that reside in different regions or belong to different Alibaba Cloud accounts. The firewall also does not control the mutual access traffic between VPCs and virtual border routers (VBRs). For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ### [](#qps)QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallConfigureRequest
   * @returns CreateVpcFirewallConfigureResponse
   */
  async createVpcFirewallConfigure(request: $_model.CreateVpcFirewallConfigureRequest): Promise<$_model.CreateVpcFirewallConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy in a specified policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the CreateVpcFirewallControlPolicy operation to create an access control policy in a specified policy group for a VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallControlPolicyResponse
   */
  async createVpcFirewallControlPolicyWithOptions(request: $_model.CreateVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy in a specified policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the CreateVpcFirewallControlPolicy operation to create an access control policy in a specified policy group for a VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallControlPolicyRequest
   * @returns CreateVpcFirewallControlPolicyResponse
   */
  async createVpcFirewallControlPolicy(request: $_model.CreateVpcFirewallControlPolicyRequest): Promise<$_model.CreateVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an address book for access control.
   * 
   * @remarks
   * You can call the DeleteAddressBook operation to delete an address book for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddressBookResponse
   */
  async deleteAddressBookWithOptions(request: $_model.DeleteAddressBookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAddressBookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAddressBookResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAddressBookResponse({}));
  }

  /**
   * Deletes an address book for access control.
   * 
   * @remarks
   * You can call the DeleteAddressBook operation to delete an address book for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteAddressBookRequest
   * @returns DeleteAddressBookResponse
   */
  async deleteAddressBook(request: $_model.DeleteAddressBookRequest): Promise<$_model.DeleteAddressBookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAddressBookWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy.
   * 
   * @remarks
   * You can call the DeleteControlPolicy operation to delete an access control policy that applies to inbound or outbound traffic.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicyWithOptions(request: $_model.DeleteControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy.
   * 
   * @remarks
   * You can call the DeleteControlPolicy operation to delete an access control policy that applies to inbound or outbound traffic.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: $_model.DeleteControlPolicyRequest): Promise<$_model.DeleteControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy template.
   * 
   * @param request - DeleteControlPolicyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyTemplateResponse
   */
  async deleteControlPolicyTemplateWithOptions(request: $_model.DeleteControlPolicyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteControlPolicyTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteControlPolicyTemplate",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteControlPolicyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteControlPolicyTemplateResponse({}));
  }

  /**
   * Deletes an access control policy template.
   * 
   * @param request - DeleteControlPolicyTemplateRequest
   * @returns DeleteControlPolicyTemplateResponse
   */
  async deleteControlPolicyTemplate(request: $_model.DeleteControlPolicyTemplateRequest): Promise<$_model.DeleteControlPolicyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes file download tasks.
   * 
   * @remarks
   * You can call this operation to delete file download tasks and delete the files.
   * **
   * **Warning** Both tasks and involved files are deleted. You can no longer download the involved files by using the download links. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDownloadTaskResponse
   */
  async deleteDownloadTaskWithOptions(request: $_model.DeleteDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDownloadTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDownloadTaskResponse({}));
  }

  /**
   * Deletes file download tasks.
   * 
   * @remarks
   * You can call this operation to delete file download tasks and delete the files.
   * **
   * **Warning** Both tasks and involved files are deleted. You can no longer download the involved files by using the download links. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteDownloadTaskRequest
   * @returns DeleteDownloadTaskResponse
   */
  async deleteDownloadTask(request: $_model.DeleteDownloadTaskRequest): Promise<$_model.DeleteDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Deletes routing policies for a virtual private cloud (VPC) firewall of a transit router.
   * 
   * @param request - DeleteFirewallV2RoutePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallV2RoutePoliciesResponse
   */
  async deleteFirewallV2RoutePoliciesWithOptions(request: $_model.DeleteFirewallV2RoutePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallV2RoutePoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallV2RoutePolicies",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFirewallV2RoutePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFirewallV2RoutePoliciesResponse({}));
  }

  /**
   * Deletes routing policies for a virtual private cloud (VPC) firewall of a transit router.
   * 
   * @param request - DeleteFirewallV2RoutePoliciesRequest
   * @returns DeleteFirewallV2RoutePoliciesResponse
   */
  async deleteFirewallV2RoutePolicies(request: $_model.DeleteFirewallV2RoutePoliciesRequest): Promise<$_model.DeleteFirewallV2RoutePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallV2RoutePoliciesWithOptions(request, runtime);
  }

  /**
   * Removes members from Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to remove up to 20 members from Cloud Firewall at a time. Separate multiple members with commas (,). After a member is removed, Cloud Firewall can no longer access the cloud resources of the member. Proceed with caution. Before you call this operation, call the [DescribeInstanceMembers](https://help.aliyun.com/document_detail/271704.html) operation to obtain the information about the members that are added to Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceMembersResponse
   */
  async deleteInstanceMembersWithOptions(request: $_model.DeleteInstanceMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberUids)) {
      query["MemberUids"] = request.memberUids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceMembersResponse({}));
  }

  /**
   * Removes members from Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to remove up to 20 members from Cloud Firewall at a time. Separate multiple members with commas (,). After a member is removed, Cloud Firewall can no longer access the cloud resources of the member. Proceed with caution. Before you call this operation, call the [DescribeInstanceMembers](https://help.aliyun.com/document_detail/271704.html) operation to obtain the information about the members that are added to Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteInstanceMembersRequest
   * @returns DeleteInstanceMembersResponse
   */
  async deleteInstanceMembers(request: $_model.DeleteInstanceMembersRequest): Promise<$_model.DeleteInstanceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to delete an outbound access control policy that is created for a NAT firewall.
   * 
   * @param request - DeleteNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatFirewallControlPolicyResponse
   */
  async deleteNatFirewallControlPolicyWithOptions(request: $_model.DeleteNatFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNatFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNatFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to delete an outbound access control policy that is created for a NAT firewall.
   * 
   * @param request - DeleteNatFirewallControlPolicyRequest
   * @returns DeleteNatFirewallControlPolicyResponse
   */
  async deleteNatFirewallControlPolicy(request: $_model.DeleteNatFirewallControlPolicyRequest): Promise<$_model.DeleteNatFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes access control policies that are created for a NAT firewall at a time.
   * 
   * @param request - DeleteNatFirewallControlPolicyBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatFirewallControlPolicyBatchResponse
   */
  async deleteNatFirewallControlPolicyBatchWithOptions(request: $_model.DeleteNatFirewallControlPolicyBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNatFirewallControlPolicyBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuidList)) {
      query["AclUuidList"] = request.aclUuidList;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNatFirewallControlPolicyBatch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNatFirewallControlPolicyBatchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNatFirewallControlPolicyBatchResponse({}));
  }

  /**
   * Deletes access control policies that are created for a NAT firewall at a time.
   * 
   * @param request - DeleteNatFirewallControlPolicyBatchRequest
   * @returns DeleteNatFirewallControlPolicyBatchResponse
   */
  async deleteNatFirewallControlPolicyBatch(request: $_model.DeleteNatFirewallControlPolicyBatchRequest): Promise<$_model.DeleteNatFirewallControlPolicyBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNatFirewallControlPolicyBatchWithOptions(request, runtime);
  }

  /**
   * Deletes a NAT firewall.
   * 
   * @param request - DeleteSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityProxyResponse
   */
  async deleteSecurityProxyWithOptions(request: $_model.DeleteSecurityProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityProxyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityProxyResponse({}));
  }

  /**
   * Deletes a NAT firewall.
   * 
   * @param request - DeleteSecurityProxyRequest
   * @returns DeleteSecurityProxyResponse
   */
  async deleteSecurityProxy(request: $_model.DeleteSecurityProxyRequest): Promise<$_model.DeleteSecurityProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityProxyWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DeleteTrFirewallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrFirewallV2Response
   */
  async deleteTrFirewallV2WithOptions(request: $_model.DeleteTrFirewallV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrFirewallV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrFirewallV2",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrFirewallV2Response>(await this.callApi(params, req, runtime), new $_model.DeleteTrFirewallV2Response({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DeleteTrFirewallV2Request
   * @returns DeleteTrFirewallV2Response
   */
  async deleteTrFirewallV2(request: $_model.DeleteTrFirewallV2Request): Promise<$_model.DeleteTrFirewallV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTrFirewallV2WithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallCenConfigure operation to delete a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallCenConfigureResponse
   */
  async deleteVpcFirewallCenConfigureWithOptions(request: $_model.DeleteVpcFirewallCenConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcFirewallCenConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallCenConfigure operation to delete a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallCenConfigureRequest
   * @returns DeleteVpcFirewallCenConfigureResponse
   */
  async deleteVpcFirewallCenConfigure(request: $_model.DeleteVpcFirewallCenConfigureRequest): Promise<$_model.DeleteVpcFirewallCenConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that controls traffic between two VPCs. The VPCs are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallConfigure operation to delete a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallConfigureResponse
   */
  async deleteVpcFirewallConfigureWithOptions(request: $_model.DeleteVpcFirewallConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcFirewallConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcFirewallConfigureResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that controls traffic between two VPCs. The VPCs are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallConfigure operation to delete a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallConfigureRequest
   * @returns DeleteVpcFirewallConfigureResponse
   */
  async deleteVpcFirewallConfigure(request: $_model.DeleteVpcFirewallConfigureRequest): Promise<$_model.DeleteVpcFirewallConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy from a specific policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallControlPolicy operation to delete an access control policy from a specific policy group for a VPC firewall. Different access control policies are used for the VPC firewall that is used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewall that is used to protect each Express Connect circuit. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallControlPolicyResponse
   */
  async deleteVpcFirewallControlPolicyWithOptions(request: $_model.DeleteVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy from a specific policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallControlPolicy operation to delete an access control policy from a specific policy group for a VPC firewall. Different access control policies are used for the VPC firewall that is used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewall that is used to protect each Express Connect circuit. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallControlPolicyRequest
   * @returns DeleteVpcFirewallControlPolicyResponse
   */
  async deleteVpcFirewallControlPolicy(request: $_model.DeleteVpcFirewallControlPolicyRequest): Promise<$_model.DeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the requests that are blocked by the access control list (ACL) feature.
   * 
   * @param request - DescribeACLProtectTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeACLProtectTrendResponse
   */
  async describeACLProtectTrendWithOptions(request: $_model.DescribeACLProtectTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeACLProtectTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeACLProtectTrend",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeACLProtectTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeACLProtectTrendResponse({}));
  }

  /**
   * Queries the statistics on the requests that are blocked by the access control list (ACL) feature.
   * 
   * @param request - DescribeACLProtectTrendRequest
   * @returns DescribeACLProtectTrendResponse
   */
  async describeACLProtectTrend(request: $_model.DescribeACLProtectTrendRequest): Promise<$_model.DescribeACLProtectTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeACLProtectTrendWithOptions(request, runtime);
  }

  /**
   * Queries the details about an address book for an access control policy.
   * 
   * @remarks
   * You can call this operation to query the details about an address book for an access control policy.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddressBookResponse
   */
  async describeAddressBookWithOptions(request: $_model.DescribeAddressBookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddressBookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containPort)) {
      query["ContainPort"] = request.containPort;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddressBookResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddressBookResponse({}));
  }

  /**
   * Queries the details about an address book for an access control policy.
   * 
   * @remarks
   * You can call this operation to query the details about an address book for an access control policy.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAddressBookRequest
   * @returns DescribeAddressBookResponse
   */
  async describeAddressBook(request: $_model.DescribeAddressBookRequest): Promise<$_model.DescribeAddressBookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddressBookWithOptions(request, runtime);
  }

  /**
   * Queries the assets that are protected by Cloud Firewall.
   * 
   * @remarks
   * You can call the DescribeAssetList operation to query the assets that are protected by Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAssetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetListResponse
   */
  async describeAssetListWithOptions(request: $_model.DescribeAssetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.newResourceTag)) {
      query["NewResourceTag"] = request.newResourceTag;
    }

    if (!$dara.isNull(request.outStatistic)) {
      query["OutStatistic"] = request.outStatistic;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!$dara.isNull(request.sensitiveStatus)) {
      query["SensitiveStatus"] = request.sensitiveStatus;
    }

    if (!$dara.isNull(request.sgStatus)) {
      query["SgStatus"] = request.sgStatus;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetListResponse({}));
  }

  /**
   * Queries the assets that are protected by Cloud Firewall.
   * 
   * @remarks
   * You can call the DescribeAssetList operation to query the assets that are protected by Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAssetListRequest
   * @returns DescribeAssetListResponse
   */
  async describeAssetList(request: $_model.DescribeAssetListRequest): Promise<$_model.DescribeAssetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetListWithOptions(request, runtime);
  }

  /**
   * Queries the risk levels of assets.
   * 
   * @param request - DescribeAssetRiskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetRiskListResponse
   */
  async describeAssetRiskListWithOptions(request: $_model.DescribeAssetRiskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetRiskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipAddrList)) {
      query["IpAddrList"] = request.ipAddrList;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetRiskList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetRiskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetRiskListResponse({}));
  }

  /**
   * Queries the risk levels of assets.
   * 
   * @param request - DescribeAssetRiskListRequest
   * @returns DescribeAssetRiskListResponse
   */
  async describeAssetRiskList(request: $_model.DescribeAssetRiskListRequest): Promise<$_model.DescribeAssetRiskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetRiskListWithOptions(request, runtime);
  }

  /**
   * Queries statistics on the assets that are protected by Cloud Firewall.
   * 
   * @param request - DescribeAssetStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetStatisticResponse
   */
  async describeAssetStatisticWithOptions(request: $_model.DescribeAssetStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetStatistic",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetStatisticResponse({}));
  }

  /**
   * Queries statistics on the assets that are protected by Cloud Firewall.
   * 
   * @param request - DescribeAssetStatisticRequest
   * @returns DescribeAssetStatisticResponse
   */
  async describeAssetStatistic(request: $_model.DescribeAssetStatisticRequest): Promise<$_model.DescribeAssetStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the firewall risk level.
   * 
   * @param request - DescribeCfwRiskLevelSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCfwRiskLevelSummaryResponse
   */
  async describeCfwRiskLevelSummaryWithOptions(request: $_model.DescribeCfwRiskLevelSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCfwRiskLevelSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCfwRiskLevelSummary",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCfwRiskLevelSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCfwRiskLevelSummaryResponse({}));
  }

  /**
   * Queries the firewall risk level.
   * 
   * @param request - DescribeCfwRiskLevelSummaryRequest
   * @returns DescribeCfwRiskLevelSummaryResponse
   */
  async describeCfwRiskLevelSummary(request: $_model.DescribeCfwRiskLevelSummaryRequest): Promise<$_model.DescribeCfwRiskLevelSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCfwRiskLevelSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details about all access control policies.
   * 
   * @remarks
   * You can call the DescribeControlPolicy operation to query the details about access control policies by page.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeControlPolicyResponse
   */
  async describeControlPolicyWithOptions(request: $_model.DescribeControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeControlPolicyResponse({}));
  }

  /**
   * Queries the details about all access control policies.
   * 
   * @remarks
   * You can call the DescribeControlPolicy operation to query the details about access control policies by page.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeControlPolicyRequest
   * @returns DescribeControlPolicyResponse
   */
  async describeControlPolicy(request: $_model.DescribeControlPolicyRequest): Promise<$_model.DescribeControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the default intrusion prevention system (IPS) configurations.
   * 
   * @param request - DescribeDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefaultIPSConfigResponse
   */
  async describeDefaultIPSConfigWithOptions(request: $_model.DescribeDefaultIPSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefaultIPSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefaultIPSConfigResponse({}));
  }

  /**
   * Queries the default intrusion prevention system (IPS) configurations.
   * 
   * @param request - DescribeDefaultIPSConfigRequest
   * @returns DescribeDefaultIPSConfigResponse
   */
  async describeDefaultIPSConfig(request: $_model.DescribeDefaultIPSConfigRequest): Promise<$_model.DescribeDefaultIPSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Queries Domain Name System (DNS) records.
   * 
   * @remarks
   * You can use this operation to query the DNS record of a domain name. This operation can retrieve DNS records only from Alibaba Cloud DNS. Before you can call this operation, make sure that your domain name is hosted on Alibaba Cloud DNS.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI DescribeDomainResolve is deprecated
   * 
   * @param request - DescribeDomainResolveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainResolveResponse
   */
  // Deprecated
  async describeDomainResolveWithOptions(request: $_model.DescribeDomainResolveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainResolveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainResolve",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainResolveResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainResolveResponse({}));
  }

  /**
   * Queries Domain Name System (DNS) records.
   * 
   * @remarks
   * You can use this operation to query the DNS record of a domain name. This operation can retrieve DNS records only from Alibaba Cloud DNS. Before you can call this operation, make sure that your domain name is hosted on Alibaba Cloud DNS.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI DescribeDomainResolve is deprecated
   * 
   * @param request - DescribeDomainResolveRequest
   * @returns DescribeDomainResolveResponse
   */
  // Deprecated
  async describeDomainResolve(request: $_model.DescribeDomainResolveRequest): Promise<$_model.DescribeDomainResolveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainResolveWithOptions(request, runtime);
  }

  /**
   * Queries file download tasks, including the task information and download URLs.
   * 
   * @param request - DescribeDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTaskWithOptions(request: $_model.DescribeDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadTaskResponse({}));
  }

  /**
   * Queries file download tasks, including the task information and download URLs.
   * 
   * @param request - DescribeDownloadTaskRequest
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTask(request: $_model.DescribeDownloadTaskRequest): Promise<$_model.DescribeDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Queries the types of download tasks. The type corresponds to the TaskType fields in the download task-related operations.
   * 
   * @param request - DescribeDownloadTaskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadTaskTypeResponse
   */
  async describeDownloadTaskTypeWithOptions(request: $_model.DescribeDownloadTaskTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadTaskTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadTaskType",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadTaskTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadTaskTypeResponse({}));
  }

  /**
   * Queries the types of download tasks. The type corresponds to the TaskType fields in the download task-related operations.
   * 
   * @param request - DescribeDownloadTaskTypeRequest
   * @returns DescribeDownloadTaskTypeResponse
   */
  async describeDownloadTaskType(request: $_model.DescribeDownloadTaskTypeRequest): Promise<$_model.DescribeDownloadTaskTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadTaskTypeWithOptions(request, runtime);
  }

  /**
   * Queries the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can use this operation to query the information about members in Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceMembersResponse
   */
  async describeInstanceMembersWithOptions(request: $_model.DescribeInstanceMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.memberDesc)) {
      query["MemberDesc"] = request.memberDesc;
    }

    if (!$dara.isNull(request.memberDisplayName)) {
      query["MemberDisplayName"] = request.memberDisplayName;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceMembersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceMembersResponse({}));
  }

  /**
   * Queries the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can use this operation to query the information about members in Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceMembersRequest
   * @returns DescribeInstanceMembersResponse
   */
  async describeInstanceMembers(request: $_model.DescribeInstanceMembersRequest): Promise<$_model.DescribeInstanceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Queries the risk levels of instances.
   * 
   * @param request - DescribeInstanceRiskLevelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRiskLevelsResponse
   */
  async describeInstanceRiskLevelsWithOptions(request: $_model.DescribeInstanceRiskLevelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRiskLevelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceRiskLevels",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRiskLevelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRiskLevelsResponse({}));
  }

  /**
   * Queries the risk levels of instances.
   * 
   * @param request - DescribeInstanceRiskLevelsRequest
   * @returns DescribeInstanceRiskLevelsResponse
   */
  async describeInstanceRiskLevels(request: $_model.DescribeInstanceRiskLevelsRequest): Promise<$_model.DescribeInstanceRiskLevelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses that are open to the Internet.
   * 
   * @param request - DescribeInternetOpenIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInternetOpenIpResponse
   */
  async describeInternetOpenIpWithOptions(request: $_model.DescribeInternetOpenIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInternetOpenIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetsInstanceId)) {
      query["AssetsInstanceId"] = request.assetsInstanceId;
    }

    if (!$dara.isNull(request.assetsInstanceName)) {
      query["AssetsInstanceName"] = request.assetsInstanceName;
    }

    if (!$dara.isNull(request.assetsType)) {
      query["AssetsType"] = request.assetsType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.publicIp)) {
      query["PublicIp"] = request.publicIp;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInternetOpenIp",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInternetOpenIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInternetOpenIpResponse({}));
  }

  /**
   * Queries the IP addresses that are open to the Internet.
   * 
   * @param request - DescribeInternetOpenIpRequest
   * @returns DescribeInternetOpenIpResponse
   */
  async describeInternetOpenIp(request: $_model.DescribeInternetOpenIpRequest): Promise<$_model.DescribeInternetOpenIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInternetOpenIpWithOptions(request, runtime);
  }

  /**
   * Queries the trends of Internet traffic.
   * 
   * @param request - DescribeInternetTrafficTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInternetTrafficTrendResponse
   */
  async describeInternetTrafficTrendWithOptions(request: $_model.DescribeInternetTrafficTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInternetTrafficTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.srcPrivateIP)) {
      query["SrcPrivateIP"] = request.srcPrivateIP;
    }

    if (!$dara.isNull(request.srcPublicIP)) {
      query["SrcPublicIP"] = request.srcPublicIP;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.trafficType)) {
      query["TrafficType"] = request.trafficType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInternetTrafficTrend",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInternetTrafficTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInternetTrafficTrendResponse({}));
  }

  /**
   * Queries the trends of Internet traffic.
   * 
   * @param request - DescribeInternetTrafficTrendRequest
   * @returns DescribeInternetTrafficTrendResponse
   */
  async describeInternetTrafficTrend(request: $_model.DescribeInternetTrafficTrendRequest): Promise<$_model.DescribeInternetTrafficTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInternetTrafficTrendWithOptions(request, runtime);
  }

  /**
   * Queries the information about the breach awareness events of a firewall.
   * 
   * @param request - DescribeInvadeEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvadeEventListResponse
   */
  async describeInvadeEventListWithOptions(request: $_model.DescribeInvadeEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvadeEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetsIP)) {
      query["AssetsIP"] = request.assetsIP;
    }

    if (!$dara.isNull(request.assetsInstanceId)) {
      query["AssetsInstanceId"] = request.assetsInstanceId;
    }

    if (!$dara.isNull(request.assetsInstanceName)) {
      query["AssetsInstanceName"] = request.assetsInstanceName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventKey)) {
      query["EventKey"] = request.eventKey;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventUuid)) {
      query["EventUuid"] = request.eventUuid;
    }

    if (!$dara.isNull(request.isIgnore)) {
      query["IsIgnore"] = request.isIgnore;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processStatusList)) {
      query["ProcessStatusList"] = request.processStatusList;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvadeEventList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvadeEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvadeEventListResponse({}));
  }

  /**
   * Queries the information about the breach awareness events of a firewall.
   * 
   * @param request - DescribeInvadeEventListRequest
   * @returns DescribeInvadeEventListResponse
   */
  async describeInvadeEventList(request: $_model.DescribeInvadeEventListRequest): Promise<$_model.DescribeInvadeEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvadeEventListWithOptions(request, runtime);
  }

  /**
   * 获取日志服务信息
   * 
   * @param request - DescribeLogStoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreInfoResponse
   */
  async describeLogStoreInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogStoreInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreInfo",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogStoreInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogStoreInfoResponse({}));
  }

  /**
   * 获取日志服务信息
   * @returns DescribeLogStoreInfoResponse
   */
  async describeLogStoreInfo(): Promise<$_model.DescribeLogStoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreInfoWithOptions(runtime);
  }

  /**
   * Queries the pagination status of NAT firewalls.
   * 
   * @param request - DescribeNatAclPageStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatAclPageStatusResponse
   */
  async describeNatAclPageStatusWithOptions(request: $_model.DescribeNatAclPageStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatAclPageStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatAclPageStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatAclPageStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatAclPageStatusResponse({}));
  }

  /**
   * Queries the pagination status of NAT firewalls.
   * 
   * @param request - DescribeNatAclPageStatusRequest
   * @returns DescribeNatAclPageStatusResponse
   */
  async describeNatAclPageStatus(request: $_model.DescribeNatAclPageStatusRequest): Promise<$_model.DescribeNatAclPageStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatAclPageStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about all access control policies that are created for NAT firewalls.
   * 
   * @remarks
   * You can use this operation to query the information about all access control policies that are created for NAT firewalls by page.
   * 
   * @param request - DescribeNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallControlPolicyResponse
   */
  async describeNatFirewallControlPolicyWithOptions(request: $_model.DescribeNatFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatFirewallControlPolicyResponse({}));
  }

  /**
   * Queries the information about all access control policies that are created for NAT firewalls.
   * 
   * @remarks
   * You can use this operation to query the information about all access control policies that are created for NAT firewalls by page.
   * 
   * @param request - DescribeNatFirewallControlPolicyRequest
   * @returns DescribeNatFirewallControlPolicyResponse
   */
  async describeNatFirewallControlPolicy(request: $_model.DescribeNatFirewallControlPolicyRequest): Promise<$_model.DescribeNatFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries details of NAT firewalls.
   * 
   * @param request - DescribeNatFirewallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallListResponse
   */
  async describeNatFirewallListWithOptions(request: $_model.DescribeNatFirewallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatFirewallListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.proxyName)) {
      query["ProxyName"] = request.proxyName;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatFirewallList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatFirewallListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatFirewallListResponse({}));
  }

  /**
   * Queries details of NAT firewalls.
   * 
   * @param request - DescribeNatFirewallListRequest
   * @returns DescribeNatFirewallListResponse
   */
  async describeNatFirewallList(request: $_model.DescribeNatFirewallListRequest): Promise<$_model.DescribeNatFirewallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatFirewallListWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of access control policies that are created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to query the priority range of access control policies that are created for a NAT firewall.
   * 
   * @param request - DescribeNatFirewallPolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallPolicyPriorUsedResponse
   */
  async describeNatFirewallPolicyPriorUsedWithOptions(request: $_model.DescribeNatFirewallPolicyPriorUsedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatFirewallPolicyPriorUsedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatFirewallPolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatFirewallPolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatFirewallPolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of access control policies that are created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to query the priority range of access control policies that are created for a NAT firewall.
   * 
   * @param request - DescribeNatFirewallPolicyPriorUsedRequest
   * @returns DescribeNatFirewallPolicyPriorUsedResponse
   */
  async describeNatFirewallPolicyPriorUsed(request: $_model.DescribeNatFirewallPolicyPriorUsedRequest): Promise<$_model.DescribeNatFirewallPolicyPriorUsedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * 概览页-NAT流量趋势
   * 
   * @param request - DescribeNatFirewallTrafficTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallTrafficTrendResponse
   */
  async describeNatFirewallTrafficTrendWithOptions(request: $_model.DescribeNatFirewallTrafficTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatFirewallTrafficTrendResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatFirewallTrafficTrend",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatFirewallTrafficTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatFirewallTrafficTrendResponse({}));
  }

  /**
   * 概览页-NAT流量趋势
   * 
   * @param request - DescribeNatFirewallTrafficTrendRequest
   * @returns DescribeNatFirewallTrafficTrendResponse
   */
  async describeNatFirewallTrafficTrend(request: $_model.DescribeNatFirewallTrafficTrendRequest): Promise<$_model.DescribeNatFirewallTrafficTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatFirewallTrafficTrendWithOptions(request, runtime);
  }

  /**
   * Queries the information about the destination IP addresses in outbound connections.
   * 
   * @param request - DescribeOutgoingDestinationIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOutgoingDestinationIPResponse
   */
  async describeOutgoingDestinationIPWithOptions(request: $_model.DescribeOutgoingDestinationIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOutgoingDestinationIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.privateIP)) {
      query["PrivateIP"] = request.privateIP;
    }

    if (!$dara.isNull(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tagIdNew)) {
      query["TagIdNew"] = request.tagIdNew;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOutgoingDestinationIP",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOutgoingDestinationIPResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOutgoingDestinationIPResponse({}));
  }

  /**
   * Queries the information about the destination IP addresses in outbound connections.
   * 
   * @param request - DescribeOutgoingDestinationIPRequest
   * @returns DescribeOutgoingDestinationIPResponse
   */
  async describeOutgoingDestinationIP(request: $_model.DescribeOutgoingDestinationIPRequest): Promise<$_model.DescribeOutgoingDestinationIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOutgoingDestinationIPWithOptions(request, runtime);
  }

  /**
   * Queries the information about the domain names in outbound connections.
   * 
   * @param request - DescribeOutgoingDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOutgoingDomainResponse
   */
  async describeOutgoingDomainWithOptions(request: $_model.DescribeOutgoingDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOutgoingDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isAITraffic)) {
      query["IsAITraffic"] = request.isAITraffic;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tagIdNew)) {
      query["TagIdNew"] = request.tagIdNew;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOutgoingDomain",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOutgoingDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOutgoingDomainResponse({}));
  }

  /**
   * Queries the information about the domain names in outbound connections.
   * 
   * @param request - DescribeOutgoingDomainRequest
   * @returns DescribeOutgoingDomainResponse
   */
  async describeOutgoingDomain(request: $_model.DescribeOutgoingDomainRequest): Promise<$_model.DescribeOutgoingDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOutgoingDomainWithOptions(request, runtime);
  }

  /**
   * Queries whether the strict mode is enabled for an access control policy.
   * 
   * @remarks
   * You can call the DescribePolicyAdvancedConfig operation to query whether the strict mode is enabled for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyAdvancedConfigResponse
   */
  async describePolicyAdvancedConfigWithOptions(request: $_model.DescribePolicyAdvancedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyAdvancedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyAdvancedConfigResponse({}));
  }

  /**
   * Queries whether the strict mode is enabled for an access control policy.
   * 
   * @remarks
   * You can call the DescribePolicyAdvancedConfig operation to query whether the strict mode is enabled for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyAdvancedConfigRequest
   * @returns DescribePolicyAdvancedConfigResponse
   */
  async describePolicyAdvancedConfig(request: $_model.DescribePolicyAdvancedConfigRequest): Promise<$_model.DescribePolicyAdvancedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of access control policies.
   * 
   * @remarks
   * You can call this operation to query the priority range of the access control policies that match specific query conditions.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyPriorUsedResponse
   */
  async describePolicyPriorUsedWithOptions(request: $_model.DescribePolicyPriorUsedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyPriorUsedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of access control policies.
   * 
   * @remarks
   * You can call this operation to query the priority range of the access control policies that match specific query conditions.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyPriorUsedRequest
   * @returns DescribePolicyPriorUsedResponse
   */
  async describePolicyPriorUsed(request: $_model.DescribePolicyPriorUsedRequest): Promise<$_model.DescribePolicyPriorUsedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * Queries the details of traffic billed based on the pay-as-you-go billing method.
   * 
   * @remarks
   * If you use Cloud Firewall that uses the pay-as-you-go billing method, you can call this operation to query traffic details accurate to the granularity of specific resource instances. If you use Cloud Firewall that uses the subscription billing method, you can call this operation to query the overall traffic details.
   * 
   * @param request - DescribePostpayTrafficDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePostpayTrafficDetailResponse
   */
  async describePostpayTrafficDetailWithOptions(request: $_model.DescribePostpayTrafficDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePostpayTrafficDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.trafficType)) {
      query["TrafficType"] = request.trafficType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePostpayTrafficDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePostpayTrafficDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribePostpayTrafficDetailResponse({}));
  }

  /**
   * Queries the details of traffic billed based on the pay-as-you-go billing method.
   * 
   * @remarks
   * If you use Cloud Firewall that uses the pay-as-you-go billing method, you can call this operation to query traffic details accurate to the granularity of specific resource instances. If you use Cloud Firewall that uses the subscription billing method, you can call this operation to query the overall traffic details.
   * 
   * @param request - DescribePostpayTrafficDetailRequest
   * @returns DescribePostpayTrafficDetailResponse
   */
  async describePostpayTrafficDetail(request: $_model.DescribePostpayTrafficDetailRequest): Promise<$_model.DescribePostpayTrafficDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePostpayTrafficDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total volume of traffic that is billed based on the pay-as-you-go billing method, including all firewalls within the current account.
   * 
   * @remarks
   * You can call this operation to query statistics of the current Cloud Firewall from the date of purchase.
   * 
   * @param request - DescribePostpayTrafficTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePostpayTrafficTotalResponse
   */
  async describePostpayTrafficTotalWithOptions(request: $_model.DescribePostpayTrafficTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePostpayTrafficTotalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePostpayTrafficTotal",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePostpayTrafficTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribePostpayTrafficTotalResponse({}));
  }

  /**
   * Queries the total volume of traffic that is billed based on the pay-as-you-go billing method, including all firewalls within the current account.
   * 
   * @remarks
   * You can call this operation to query statistics of the current Cloud Firewall from the date of purchase.
   * 
   * @param request - DescribePostpayTrafficTotalRequest
   * @returns DescribePostpayTrafficTotalResponse
   */
  async describePostpayTrafficTotal(request: $_model.DescribePostpayTrafficTotalRequest): Promise<$_model.DescribePostpayTrafficTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePostpayTrafficTotalWithOptions(request, runtime);
  }

  /**
   * Queries prefix lists.
   * 
   * @param request - DescribePrefixListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrefixListsResponse
   */
  async describePrefixListsWithOptions(request: $_model.DescribePrefixListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrefixListsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrefixLists",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrefixListsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrefixListsResponse({}));
  }

  /**
   * Queries prefix lists.
   * 
   * @param request - DescribePrefixListsRequest
   * @returns DescribePrefixListsResponse
   */
  async describePrefixLists(request: $_model.DescribePrefixListsRequest): Promise<$_model.DescribePrefixListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrefixListsWithOptions(request, runtime);
  }

  /**
   * Queries the details of intrusion events.
   * 
   * @remarks
   * You can call the DescribeRiskEventGroup operation to query and download the details of intrusion events. We recommend that you query the details of 5 to 10 intrusion events at a time. If you do not need to query the geographical information about IP addresses, you can set the NoLocation parameter to true to prevent query timeout.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskEventGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskEventGroupResponse
   */
  async describeRiskEventGroupWithOptions(request: $_model.DescribeRiskEventGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRiskEventGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attackApp)) {
      query["AttackApp"] = request.attackApp;
    }

    if (!$dara.isNull(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!$dara.isNull(request.buyVersion)) {
      query["BuyVersion"] = request.buyVersion;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!$dara.isNull(request.dstNetworkInstanceId)) {
      query["DstNetworkInstanceId"] = request.dstNetworkInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.firewallType)) {
      query["FirewallType"] = request.firewallType;
    }

    if (!$dara.isNull(request.isOnlyPrivateAssoc)) {
      query["IsOnlyPrivateAssoc"] = request.isOnlyPrivateAssoc;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.noLocation)) {
      query["NoLocation"] = request.noLocation;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleResult)) {
      query["RuleResult"] = request.ruleResult;
    }

    if (!$dara.isNull(request.ruleSource)) {
      query["RuleSource"] = request.ruleSource;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!$dara.isNull(request.srcNetworkInstanceId)) {
      query["SrcNetworkInstanceId"] = request.srcNetworkInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vulLevel)) {
      query["VulLevel"] = request.vulLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRiskEventGroup",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRiskEventGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRiskEventGroupResponse({}));
  }

  /**
   * Queries the details of intrusion events.
   * 
   * @remarks
   * You can call the DescribeRiskEventGroup operation to query and download the details of intrusion events. We recommend that you query the details of 5 to 10 intrusion events at a time. If you do not need to query the geographical information about IP addresses, you can set the NoLocation parameter to true to prevent query timeout.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskEventGroupRequest
   * @returns DescribeRiskEventGroupResponse
   */
  async describeRiskEventGroup(request: $_model.DescribeRiskEventGroupRequest): Promise<$_model.DescribeRiskEventGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskEventGroupWithOptions(request, runtime);
  }

  /**
   * Queries the attack payloads of intrusion events.
   * 
   * @param request - DescribeRiskEventPayloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskEventPayloadResponse
   */
  async describeRiskEventPayloadWithOptions(request: $_model.DescribeRiskEventPayloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRiskEventPayloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!$dara.isNull(request.dstVpcId)) {
      query["DstVpcId"] = request.dstVpcId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.firewallType)) {
      query["FirewallType"] = request.firewallType;
    }

    if (!$dara.isNull(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!$dara.isNull(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!$dara.isNull(request.srcVpcId)) {
      query["SrcVpcId"] = request.srcVpcId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.UUID)) {
      query["UUID"] = request.UUID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRiskEventPayload",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRiskEventPayloadResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRiskEventPayloadResponse({}));
  }

  /**
   * Queries the attack payloads of intrusion events.
   * 
   * @param request - DescribeRiskEventPayloadRequest
   * @returns DescribeRiskEventPayloadResponse
   */
  async describeRiskEventPayload(request: $_model.DescribeRiskEventPayloadRequest): Promise<$_model.DescribeRiskEventPayloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskEventPayloadWithOptions(request, runtime);
  }

  /**
   * Queries the information about signature library versions.
   * 
   * @param request - DescribeSignatureLibVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSignatureLibVersionResponse
   */
  async describeSignatureLibVersionWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSignatureLibVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSignatureLibVersion",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSignatureLibVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSignatureLibVersionResponse({}));
  }

  /**
   * Queries the information about signature library versions.
   * @returns DescribeSignatureLibVersionResponse
   */
  async describeSignatureLibVersion(): Promise<$_model.DescribeSignatureLibVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSignatureLibVersionWithOptions(runtime);
  }

  /**
   * Queries information about the transit routers that are associated with a virtual private cloud (VPC) firewall created for a transit router.
   * 
   * @param tmpReq - DescribeTrFirewallPolicyBackUpAssociationListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallPolicyBackUpAssociationListResponse
   */
  async describeTrFirewallPolicyBackUpAssociationListWithOptions(tmpReq: $_model.DescribeTrFirewallPolicyBackUpAssociationListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrFirewallPolicyBackUpAssociationListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeTrFirewallPolicyBackUpAssociationListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.candidateList)) {
      request.candidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.candidateList, "CandidateList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.candidateListShrink)) {
      query["CandidateList"] = request.candidateListShrink;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrFirewallPolicyBackUpAssociationList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrFirewallPolicyBackUpAssociationListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrFirewallPolicyBackUpAssociationListResponse({}));
  }

  /**
   * Queries information about the transit routers that are associated with a virtual private cloud (VPC) firewall created for a transit router.
   * 
   * @param request - DescribeTrFirewallPolicyBackUpAssociationListRequest
   * @returns DescribeTrFirewallPolicyBackUpAssociationListResponse
   */
  async describeTrFirewallPolicyBackUpAssociationList(request: $_model.DescribeTrFirewallPolicyBackUpAssociationListRequest): Promise<$_model.DescribeTrFirewallPolicyBackUpAssociationListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrFirewallPolicyBackUpAssociationListWithOptions(request, runtime);
  }

  /**
   * Queries the routing policies of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DescribeTrFirewallV2RoutePolicyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallV2RoutePolicyListResponse
   */
  async describeTrFirewallV2RoutePolicyListWithOptions(request: $_model.DescribeTrFirewallV2RoutePolicyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrFirewallV2RoutePolicyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrFirewallV2RoutePolicyList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrFirewallV2RoutePolicyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrFirewallV2RoutePolicyListResponse({}));
  }

  /**
   * Queries the routing policies of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DescribeTrFirewallV2RoutePolicyListRequest
   * @returns DescribeTrFirewallV2RoutePolicyListResponse
   */
  async describeTrFirewallV2RoutePolicyList(request: $_model.DescribeTrFirewallV2RoutePolicyListRequest): Promise<$_model.DescribeTrFirewallV2RoutePolicyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrFirewallV2RoutePolicyListWithOptions(request, runtime);
  }

  /**
   * Queries the details of the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2DetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2DetailResponse
   */
  async describeTrFirewallsV2DetailWithOptions(request: $_model.DescribeTrFirewallsV2DetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrFirewallsV2DetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrFirewallsV2Detail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrFirewallsV2DetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrFirewallsV2DetailResponse({}));
  }

  /**
   * Queries the details of the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2DetailRequest
   * @returns DescribeTrFirewallsV2DetailResponse
   */
  async describeTrFirewallsV2Detail(request: $_model.DescribeTrFirewallsV2DetailRequest): Promise<$_model.DescribeTrFirewallsV2DetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrFirewallsV2DetailWithOptions(request, runtime);
  }

  /**
   * Queries the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2ListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2ListResponse
   */
  async describeTrFirewallsV2ListWithOptions(request: $_model.DescribeTrFirewallsV2ListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrFirewallsV2ListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!$dara.isNull(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrFirewallsV2List",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrFirewallsV2ListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrFirewallsV2ListResponse({}));
  }

  /**
   * Queries the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2ListRequest
   * @returns DescribeTrFirewallsV2ListResponse
   */
  async describeTrFirewallsV2List(request: $_model.DescribeTrFirewallsV2ListRequest): Promise<$_model.DescribeTrFirewallsV2ListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrFirewallsV2ListWithOptions(request, runtime);
  }

  /**
   * Queries the route tables of the VPC firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2RouteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2RouteListResponse
   */
  async describeTrFirewallsV2RouteListWithOptions(request: $_model.DescribeTrFirewallsV2RouteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrFirewallsV2RouteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrFirewallsV2RouteList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrFirewallsV2RouteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrFirewallsV2RouteListResponse({}));
  }

  /**
   * Queries the route tables of the VPC firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2RouteListRequest
   * @returns DescribeTrFirewallsV2RouteListResponse
   */
  async describeTrFirewallsV2RouteList(request: $_model.DescribeTrFirewallsV2RouteListRequest): Promise<$_model.DescribeTrFirewallsV2RouteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrFirewallsV2RouteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the traffic of a specified asset that belongs to your Alibaba Cloud account.
   * 
   * @param request - DescribeUserAssetIPTrafficInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAssetIPTrafficInfoResponse
   */
  async describeUserAssetIPTrafficInfoWithOptions(request: $_model.DescribeUserAssetIPTrafficInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAssetIPTrafficInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAssetIPTrafficInfo",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAssetIPTrafficInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAssetIPTrafficInfoResponse({}));
  }

  /**
   * Queries the information about the traffic of a specified asset that belongs to your Alibaba Cloud account.
   * 
   * @param request - DescribeUserAssetIPTrafficInfoRequest
   * @returns DescribeUserAssetIPTrafficInfoResponse
   */
  async describeUserAssetIPTrafficInfo(request: $_model.DescribeUserAssetIPTrafficInfoRequest): Promise<$_model.DescribeUserAssetIPTrafficInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserAssetIPTrafficInfoWithOptions(request, runtime);
  }

  /**
   * Queries the edition information about Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to query the edition information about Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserBuyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserBuyVersionResponse
   */
  async describeUserBuyVersionWithOptions(request: $_model.DescribeUserBuyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserBuyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserBuyVersion",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserBuyVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserBuyVersionResponse({}));
  }

  /**
   * Queries the edition information about Cloud Firewall.
   * 
   * @remarks
   * You can call this operation to query the edition information about Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserBuyVersionRequest
   * @returns DescribeUserBuyVersionResponse
   */
  async describeUserBuyVersion(request: $_model.DescribeUserBuyVersionRequest): Promise<$_model.DescribeUserBuyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserBuyVersionWithOptions(request, runtime);
  }

  /**
   * 获取用户IPS白名单
   * 
   * @param request - DescribeUserIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserIPSWhitelistResponse
   */
  async describeUserIPSWhitelistWithOptions(request: $_model.DescribeUserIPSWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserIPSWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserIPSWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserIPSWhitelistResponse({}));
  }

  /**
   * 获取用户IPS白名单
   * 
   * @param request - DescribeUserIPSWhitelistRequest
   * @returns DescribeUserIPSWhitelistResponse
   */
  async describeUserIPSWhitelist(request: $_model.DescribeUserIPSWhitelistRequest): Promise<$_model.DescribeUserIPSWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the information about all policy groups of access control policies that are created for virtual private cloud (VPC) firewalls.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallAclGroupList operation to query the information about all policy groups of access control policies that are created for VPC firewalls.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallAclGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallAclGroupListResponse
   */
  async describeVpcFirewallAclGroupListWithOptions(request: $_model.DescribeVpcFirewallAclGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallAclGroupListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallConfigureStatus)) {
      query["FirewallConfigureStatus"] = request.firewallConfigureStatus;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallAclGroupList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallAclGroupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallAclGroupListResponse({}));
  }

  /**
   * Queries the information about all policy groups of access control policies that are created for virtual private cloud (VPC) firewalls.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallAclGroupList operation to query the information about all policy groups of access control policies that are created for VPC firewalls.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallAclGroupListRequest
   * @returns DescribeVpcFirewallAclGroupListResponse
   */
  async describeVpcFirewallAclGroupList(request: $_model.DescribeVpcFirewallAclGroupListRequest): Promise<$_model.DescribeVpcFirewallAclGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallAclGroupListWithOptions(request, runtime);
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall protects access traffic between a VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenDetail operation to query the details about a VPC firewall. The VPC firewall protects access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallCenDetailResponse
   */
  async describeVpcFirewallCenDetailWithOptions(request: $_model.DescribeVpcFirewallCenDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallCenDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallCenDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallCenDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallCenDetailResponse({}));
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall protects access traffic between a VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenDetail operation to query the details about a VPC firewall. The VPC firewall protects access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenDetailRequest
   * @returns DescribeVpcFirewallCenDetailResponse
   */
  async describeVpcFirewallCenDetail(request: $_model.DescribeVpcFirewallCenDetailRequest): Promise<$_model.DescribeVpcFirewallCenDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallCenDetailWithOptions(request, runtime);
  }

  /**
   * Queries virtual private cloud (VPC) firewalls. Each VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenList operation to query VPC firewalls. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallCenListResponse
   */
  async describeVpcFirewallCenListWithOptions(request: $_model.DescribeVpcFirewallCenListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallCenListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!$dara.isNull(request.transitRouterType)) {
      query["TransitRouterType"] = request.transitRouterType;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallCenList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallCenListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallCenListResponse({}));
  }

  /**
   * Queries virtual private cloud (VPC) firewalls. Each VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenList operation to query VPC firewalls. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenListRequest
   * @returns DescribeVpcFirewallCenListResponse
   */
  async describeVpcFirewallCenList(request: $_model.DescribeVpcFirewallCenListRequest): Promise<$_model.DescribeVpcFirewallCenListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallCenListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access control policies for a specified virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallControlPolicy operation to query the information about all access control policies that are created for a specified VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallControlPolicyResponse
   */
  async describeVpcFirewallControlPolicyWithOptions(request: $_model.DescribeVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Queries the information about the access control policies for a specified virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallControlPolicy operation to query the information about all access control policies that are created for a specified VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallControlPolicyRequest
   * @returns DescribeVpcFirewallControlPolicyResponse
   */
  async describeVpcFirewallControlPolicy(request: $_model.DescribeVpcFirewallControlPolicyRequest): Promise<$_model.DescribeVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDefaultIPSConfig operation to query the intrusion prevention configurations of a VPC firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallDefaultIPSConfigResponse
   */
  async describeVpcFirewallDefaultIPSConfigWithOptions(request: $_model.DescribeVpcFirewallDefaultIPSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallDefaultIPSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallDefaultIPSConfigResponse({}));
  }

  /**
   * Queries the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDefaultIPSConfig operation to query the intrusion prevention configurations of a VPC firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDefaultIPSConfigRequest
   * @returns DescribeVpcFirewallDefaultIPSConfigResponse
   */
  async describeVpcFirewallDefaultIPSConfig(request: $_model.DescribeVpcFirewallDefaultIPSConfigRequest): Promise<$_model.DescribeVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDetail operation to query the details about a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.  
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://www.alibabacloud.com/help/en/cloud-firewall/latest/createvpcfirewallconfigure) operation.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallDetailResponse
   */
  async describeVpcFirewallDetailWithOptions(request: $_model.DescribeVpcFirewallDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!$dara.isNull(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallDetailResponse({}));
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDetail operation to query the details about a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.  
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://www.alibabacloud.com/help/en/cloud-firewall/latest/createvpcfirewallconfigure) operation.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDetailRequest
   * @returns DescribeVpcFirewallDetailResponse
   */
  async describeVpcFirewallDetail(request: $_model.DescribeVpcFirewallDetailRequest): Promise<$_model.DescribeVpcFirewallDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallDetailWithOptions(request, runtime);
  }

  /**
   * Queries the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - DescribeVpcFirewallIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallIPSWhitelistResponse
   */
  async describeVpcFirewallIPSWhitelistWithOptions(request: $_model.DescribeVpcFirewallIPSWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallIPSWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallIPSWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallIPSWhitelistResponse({}));
  }

  /**
   * Queries the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - DescribeVpcFirewallIPSWhitelistRequest
   * @returns DescribeVpcFirewallIPSWhitelistResponse
   */
  async describeVpcFirewallIPSWhitelist(request: $_model.DescribeVpcFirewallIPSWhitelistRequest): Promise<$_model.DescribeVpcFirewallIPSWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the details about virtual private cloud (VPC) firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallList operation to query the details about VPC firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallListResponse
   */
  async describeVpcFirewallListWithOptions(request: $_model.DescribeVpcFirewallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectSubType)) {
      query["ConnectSubType"] = request.connectSubType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.peerUid)) {
      query["PeerUid"] = request.peerUid;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallListResponse({}));
  }

  /**
   * Queries the details about virtual private cloud (VPC) firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallList operation to query the details about VPC firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallListRequest
   * @returns DescribeVpcFirewallListResponse
   */
  async describeVpcFirewallList(request: $_model.DescribeVpcFirewallListRequest): Promise<$_model.DescribeVpcFirewallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallListWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of access control policies that are created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call this operation to query the priority range of access control policies that are created for a VPC firewall in a specific policy group.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallPolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallPolicyPriorUsedResponse
   */
  async describeVpcFirewallPolicyPriorUsedWithOptions(request: $_model.DescribeVpcFirewallPolicyPriorUsedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcFirewallPolicyPriorUsedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcFirewallPolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcFirewallPolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcFirewallPolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of access control policies that are created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call this operation to query the priority range of access control policies that are created for a VPC firewall in a specific policy group.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallPolicyPriorUsedRequest
   * @returns DescribeVpcFirewallPolicyPriorUsedResponse
   */
  async describeVpcFirewallPolicyPriorUsed(request: $_model.DescribeVpcFirewallPolicyPriorUsedRequest): Promise<$_model.DescribeVpcFirewallPolicyPriorUsedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * Queries virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcListLiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcListLiteResponse
   */
  async describeVpcListLiteWithOptions(request: $_model.DescribeVpcListLiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcListLiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcName)) {
      query["VpcName"] = request.vpcName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcListLite",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcListLiteResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcListLiteResponse({}));
  }

  /**
   * Queries virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcListLiteRequest
   * @returns DescribeVpcListLiteResponse
   */
  async describeVpcListLite(request: $_model.DescribeVpcListLiteRequest): Promise<$_model.DescribeVpcListLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcListLiteWithOptions(request, runtime);
  }

  /**
   * Queries virtual private cloud (VPC) zones.
   * 
   * @param request - DescribeVpcZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcZoneResponse
   */
  async describeVpcZoneWithOptions(request: $_model.DescribeVpcZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcZone",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcZoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcZoneResponse({}));
  }

  /**
   * Queries virtual private cloud (VPC) zones.
   * 
   * @param request - DescribeVpcZoneRequest
   * @returns DescribeVpcZoneResponse
   */
  async describeVpcZone(request: $_model.DescribeVpcZoneRequest): Promise<$_model.DescribeVpcZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcZoneWithOptions(request, runtime);
  }

  /**
   * Queries the vulnerabilities that are supported by Cloud Firewall.
   * 
   * @param request - DescribeVulnerabilityProtectedListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVulnerabilityProtectedListResponse
   */
  async describeVulnerabilityProtectedListWithOptions(request: $_model.DescribeVulnerabilityProtectedListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVulnerabilityProtectedListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!$dara.isNull(request.buyVersion)) {
      query["BuyVersion"] = request.buyVersion;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!$dara.isNull(request.vulnCveName)) {
      query["VulnCveName"] = request.vulnCveName;
    }

    if (!$dara.isNull(request.vulnLevel)) {
      query["VulnLevel"] = request.vulnLevel;
    }

    if (!$dara.isNull(request.vulnResource)) {
      query["VulnResource"] = request.vulnResource;
    }

    if (!$dara.isNull(request.vulnStatus)) {
      query["VulnStatus"] = request.vulnStatus;
    }

    if (!$dara.isNull(request.vulnType)) {
      query["VulnType"] = request.vulnType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVulnerabilityProtectedList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVulnerabilityProtectedListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVulnerabilityProtectedListResponse({}));
  }

  /**
   * Queries the vulnerabilities that are supported by Cloud Firewall.
   * 
   * @param request - DescribeVulnerabilityProtectedListRequest
   * @returns DescribeVulnerabilityProtectedListResponse
   */
  async describeVulnerabilityProtectedList(request: $_model.DescribeVulnerabilityProtectedListRequest): Promise<$_model.DescribeVulnerabilityProtectedListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVulnerabilityProtectedListWithOptions(request, runtime);
  }

  /**
   * Modifies the address book that is specified in an access control policy.
   * 
   * @remarks
   * You can call the ModifyAddressBook operation to modify the address book that is configured for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAddressBookResponse
   */
  async modifyAddressBookWithOptions(request: $_model.ModifyAddressBookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAddressBookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!$dara.isNull(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!$dara.isNull(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAddressBookResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAddressBookResponse({}));
  }

  /**
   * Modifies the address book that is specified in an access control policy.
   * 
   * @remarks
   * You can call the ModifyAddressBook operation to modify the address book that is configured for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyAddressBookRequest
   * @returns ModifyAddressBookResponse
   */
  async modifyAddressBook(request: $_model.ModifyAddressBookRequest): Promise<$_model.ModifyAddressBookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAddressBookWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy.
   * 
   * @remarks
   * You can call this operation to modify the configurations of an access control policy. The policy allows Cloud Firewall to allow, deny, or monitor the traffic that passes through Cloud Firewall.
   * ## [](#qps)Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyControlPolicyResponse
   */
  async modifyControlPolicyWithOptions(request: $_model.ModifyControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy.
   * 
   * @remarks
   * You can call this operation to modify the configurations of an access control policy. The policy allows Cloud Firewall to allow, deny, or monitor the traffic that passes through Cloud Firewall.
   * ## [](#qps)Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyRequest
   * @returns ModifyControlPolicyResponse
   */
  async modifyControlPolicy(request: $_model.ModifyControlPolicyRequest): Promise<$_model.ModifyControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an IPv4 access control policy for the Internet firewall. An IPv4 access control policy refers to a policy whose source IP address and destination IP address are IPv4 addresses.
   * 
   * @remarks
   * You can use this operation to modify the priority of an IPv4 access control policy for the Internet firewall. No API operations are provided for you to modify the priority of an IPv6 access control policy for the Internet firewall.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyControlPolicyPositionResponse
   */
  async modifyControlPolicyPositionWithOptions(request: $_model.ModifyControlPolicyPositionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyControlPolicyPositionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!$dara.isNull(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an IPv4 access control policy for the Internet firewall. An IPv4 access control policy refers to a policy whose source IP address and destination IP address are IPv4 addresses.
   * 
   * @remarks
   * You can use this operation to modify the priority of an IPv4 access control policy for the Internet firewall. No API operations are provided for you to modify the priority of an IPv6 access control policy for the Internet firewall.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyPositionRequest
   * @returns ModifyControlPolicyPositionResponse
   */
  async modifyControlPolicyPosition(request: $_model.ModifyControlPolicyPositionRequest): Promise<$_model.ModifyControlPolicyPositionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * Modifies the default configuration of the intrusion prevention system (IPS).
   * 
   * @param request - ModifyDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultIPSConfigResponse
   */
  async modifyDefaultIPSConfigWithOptions(request: $_model.ModifyDefaultIPSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefaultIPSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basicRules)) {
      query["BasicRules"] = request.basicRules;
    }

    if (!$dara.isNull(request.ctiRules)) {
      query["CtiRules"] = request.ctiRules;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxSdl)) {
      query["MaxSdl"] = request.maxSdl;
    }

    if (!$dara.isNull(request.patchRules)) {
      query["PatchRules"] = request.patchRules;
    }

    if (!$dara.isNull(request.ruleClass)) {
      query["RuleClass"] = request.ruleClass;
    }

    if (!$dara.isNull(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefaultIPSConfigResponse({}));
  }

  /**
   * Modifies the default configuration of the intrusion prevention system (IPS).
   * 
   * @param request - ModifyDefaultIPSConfigRequest
   * @returns ModifyDefaultIPSConfigResponse
   */
  async modifyDefaultIPSConfig(request: $_model.ModifyDefaultIPSConfigRequest): Promise<$_model.ModifyDefaultIPSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a routing policy.
   * 
   * @param request - ModifyFirewallV2RoutePolicySwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallV2RoutePolicySwitchResponse
   */
  async modifyFirewallV2RoutePolicySwitchWithOptions(request: $_model.ModifyFirewallV2RoutePolicySwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFirewallV2RoutePolicySwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.shouldRecover)) {
      query["ShouldRecover"] = request.shouldRecover;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicySwitchStatus)) {
      query["TrFirewallRoutePolicySwitchStatus"] = request.trFirewallRoutePolicySwitchStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirewallV2RoutePolicySwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFirewallV2RoutePolicySwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFirewallV2RoutePolicySwitchResponse({}));
  }

  /**
   * Modifies the status of a routing policy.
   * 
   * @param request - ModifyFirewallV2RoutePolicySwitchRequest
   * @returns ModifyFirewallV2RoutePolicySwitchResponse
   */
  async modifyFirewallV2RoutePolicySwitch(request: $_model.ModifyFirewallV2RoutePolicySwitchRequest): Promise<$_model.ModifyFirewallV2RoutePolicySwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFirewallV2RoutePolicySwitchWithOptions(request, runtime);
  }

  /**
   * Updates the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can call the ModifyInstanceMemberAttributes operation to update the information about members in Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second for each account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyInstanceMemberAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMemberAttributesResponse
   */
  async modifyInstanceMemberAttributesWithOptions(request: $_model.ModifyInstanceMemberAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMemberAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceMemberAttributes",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceMemberAttributesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceMemberAttributesResponse({}));
  }

  /**
   * Updates the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can call the ModifyInstanceMemberAttributes operation to update the information about members in Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second for each account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyInstanceMemberAttributesRequest
   * @returns ModifyInstanceMemberAttributesResponse
   */
  async modifyInstanceMemberAttributes(request: $_model.ModifyInstanceMemberAttributesRequest): Promise<$_model.ModifyInstanceMemberAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceMemberAttributesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to modify the configurations of an access control policy. The policy is used to allow, deny, or monitor traffic that reaches a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNatFirewallControlPolicyResponse
   */
  async modifyNatFirewallControlPolicyWithOptions(request: $_model.ModifyNatFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNatFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNatFirewallControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to modify the configurations of an access control policy. The policy is used to allow, deny, or monitor traffic that reaches a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyRequest
   * @returns ModifyNatFirewallControlPolicyResponse
   */
  async modifyNatFirewallControlPolicy(request: $_model.ModifyNatFirewallControlPolicyRequest): Promise<$_model.ModifyNatFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an access control policy that is created for a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNatFirewallControlPolicyPositionResponse
   */
  async modifyNatFirewallControlPolicyPositionWithOptions(request: $_model.ModifyNatFirewallControlPolicyPositionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNatFirewallControlPolicyPositionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNatFirewallControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNatFirewallControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNatFirewallControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an access control policy that is created for a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyPositionRequest
   * @returns ModifyNatFirewallControlPolicyPositionResponse
   */
  async modifyNatFirewallControlPolicyPosition(request: $_model.ModifyNatFirewallControlPolicyPositionRequest): Promise<$_model.ModifyNatFirewallControlPolicyPositionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNatFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * Modifies information about an operation on an object group.
   * 
   * @param request - ModifyObjectGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyObjectGroupOperationResponse
   */
  async modifyObjectGroupOperationWithOptions(request: $_model.ModifyObjectGroupOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyObjectGroupOperationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectList)) {
      query["ObjectList"] = request.objectList;
    }

    if (!$dara.isNull(request.objectOperation)) {
      query["ObjectOperation"] = request.objectOperation;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyObjectGroupOperation",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyObjectGroupOperationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyObjectGroupOperationResponse({}));
  }

  /**
   * Modifies information about an operation on an object group.
   * 
   * @param request - ModifyObjectGroupOperationRequest
   * @returns ModifyObjectGroupOperationResponse
   */
  async modifyObjectGroupOperation(request: $_model.ModifyObjectGroupOperationRequest): Promise<$_model.ModifyObjectGroupOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyObjectGroupOperationWithOptions(request, runtime);
  }

  /**
   * Enables or disables the strict mode for an access control policy.
   * 
   * @remarks
   * You can call the ModifyPolicyAdvancedConfig operation to enable or disable the strict mode for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyPolicyAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyAdvancedConfigResponse
   */
  async modifyPolicyAdvancedConfigWithOptions(request: $_model.ModifyPolicyAdvancedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyAdvancedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eips)) {
      query["Eips"] = request.eips;
    }

    if (!$dara.isNull(request.internetSwitch)) {
      query["InternetSwitch"] = request.internetSwitch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyAdvancedConfigResponse({}));
  }

  /**
   * Enables or disables the strict mode for an access control policy.
   * 
   * @remarks
   * You can call the ModifyPolicyAdvancedConfig operation to enable or disable the strict mode for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyPolicyAdvancedConfigRequest
   * @returns ModifyPolicyAdvancedConfigResponse
   */
  async modifyPolicyAdvancedConfig(request: $_model.ModifyPolicyAdvancedConfigRequest): Promise<$_model.ModifyPolicyAdvancedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - ModifyTrFirewallV2ConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrFirewallV2ConfigurationResponse
   */
  async modifyTrFirewallV2ConfigurationWithOptions(request: $_model.ModifyTrFirewallV2ConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTrFirewallV2ConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTrFirewallV2Configuration",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTrFirewallV2ConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTrFirewallV2ConfigurationResponse({}));
  }

  /**
   * Modifies the configuration of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - ModifyTrFirewallV2ConfigurationRequest
   * @returns ModifyTrFirewallV2ConfigurationResponse
   */
  async modifyTrFirewallV2Configuration(request: $_model.ModifyTrFirewallV2ConfigurationRequest): Promise<$_model.ModifyTrFirewallV2ConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTrFirewallV2ConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the effective scope of the routing policy created for the VPC firewall for a transit router.
   * 
   * @param tmpReq - ModifyTrFirewallV2RoutePolicyScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrFirewallV2RoutePolicyScopeResponse
   */
  async modifyTrFirewallV2RoutePolicyScopeWithOptions(tmpReq: $_model.ModifyTrFirewallV2RoutePolicyScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTrFirewallV2RoutePolicyScopeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyTrFirewallV2RoutePolicyScopeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destCandidateList)) {
      request.destCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destCandidateList, "DestCandidateList", "json");
    }

    if (!$dara.isNull(tmpReq.srcCandidateList)) {
      request.srcCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcCandidateList, "SrcCandidateList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.destCandidateListShrink)) {
      query["DestCandidateList"] = request.destCandidateListShrink;
    }

    if (!$dara.isNull(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.shouldRecover)) {
      query["ShouldRecover"] = request.shouldRecover;
    }

    if (!$dara.isNull(request.srcCandidateListShrink)) {
      query["SrcCandidateList"] = request.srcCandidateListShrink;
    }

    if (!$dara.isNull(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTrFirewallV2RoutePolicyScope",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTrFirewallV2RoutePolicyScopeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTrFirewallV2RoutePolicyScopeResponse({}));
  }

  /**
   * Modifies the effective scope of the routing policy created for the VPC firewall for a transit router.
   * 
   * @param request - ModifyTrFirewallV2RoutePolicyScopeRequest
   * @returns ModifyTrFirewallV2RoutePolicyScopeResponse
   */
  async modifyTrFirewallV2RoutePolicyScope(request: $_model.ModifyTrFirewallV2RoutePolicyScopeRequest): Promise<$_model.ModifyTrFirewallV2RoutePolicyScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTrFirewallV2RoutePolicyScopeWithOptions(request, runtime);
  }

  /**
   * 修改用户IPS白名单
   * 
   * @param request - ModifyUserIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserIPSWhitelistResponse
   */
  async modifyUserIPSWhitelistWithOptions(request: $_model.ModifyUserIPSWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserIPSWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.listValue)) {
      query["ListValue"] = request.listValue;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.whiteType)) {
      query["WhiteType"] = request.whiteType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserIPSWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserIPSWhitelistResponse({}));
  }

  /**
   * 修改用户IPS白名单
   * 
   * @param request - ModifyUserIPSWhitelistRequest
   * @returns ModifyUserIPSWhitelistResponse
   */
  async modifyUserIPSWhitelist(request: $_model.ModifyUserIPSWhitelistRequest): Promise<$_model.ModifyUserIPSWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenConfigure operation to modify the configurations of a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallCenConfigureResponse
   */
  async modifyVpcFirewallCenConfigureWithOptions(request: $_model.ModifyVpcFirewallCenConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallCenConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenConfigure operation to modify the configurations of a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenConfigureRequest
   * @returns ModifyVpcFirewallCenConfigureResponse
   */
  async modifyVpcFirewallCenConfigure(request: $_model.ModifyVpcFirewallCenConfigureRequest): Promise<$_model.ModifyVpcFirewallCenConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenSwitchStatus operation to enable or disable a VPC firewall. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. After you enable the VPC firewall, the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. After you disable the VPC firewall, the VPC firewall no longer protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance.
   * Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallCenSwitchStatusResponse
   */
  async modifyVpcFirewallCenSwitchStatusWithOptions(request: $_model.ModifyVpcFirewallCenSwitchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallCenSwitchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallCenSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallCenSwitchStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallCenSwitchStatusResponse({}));
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenSwitchStatus operation to enable or disable a VPC firewall. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. After you enable the VPC firewall, the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. After you disable the VPC firewall, the VPC firewall no longer protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance.
   * Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenSwitchStatusRequest
   * @returns ModifyVpcFirewallCenSwitchStatusResponse
   */
  async modifyVpcFirewallCenSwitchStatus(request: $_model.ModifyVpcFirewallCenSwitchStatusRequest): Promise<$_model.ModifyVpcFirewallCenSwitchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallConfigure operation to modify the configurations of a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallConfigureResponse
   */
  async modifyVpcFirewallConfigureWithOptions(request: $_model.ModifyVpcFirewallConfigureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallConfigureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!$dara.isNull(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallConfigureResponse({}));
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallConfigure operation to modify the configurations of a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallConfigureRequest
   * @returns ModifyVpcFirewallConfigureResponse
   */
  async modifyVpcFirewallConfigure(request: $_model.ModifyVpcFirewallConfigureRequest): Promise<$_model.ModifyVpcFirewallConfigureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy that is created for a virtual private cloud (VPC) firewall in a specified policy group.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallControlPolicy operation to modify the configurations of an access control policy that is created for a VPC firewall in a specified policy group. Different access control policies are used for the VPC firewalls that are used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewalls that are used to protect each Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallControlPolicyResponse
   */
  async modifyVpcFirewallControlPolicyWithOptions(request: $_model.ModifyVpcFirewallControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!$dara.isNull(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!$dara.isNull(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!$dara.isNull(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!$dara.isNull(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!$dara.isNull(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy that is created for a virtual private cloud (VPC) firewall in a specified policy group.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallControlPolicy operation to modify the configurations of an access control policy that is created for a VPC firewall in a specified policy group. Different access control policies are used for the VPC firewalls that are used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewalls that are used to protect each Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyRequest
   * @returns ModifyVpcFirewallControlPolicyResponse
   */
  async modifyVpcFirewallControlPolicy(request: $_model.ModifyVpcFirewallControlPolicyRequest): Promise<$_model.ModifyVpcFirewallControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can use this operation to modify the priority of an access control policy that is created for a VPC firewall in a specific policy group.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallControlPolicyPositionResponse
   */
  async modifyVpcFirewallControlPolicyPositionWithOptions(request: $_model.ModifyVpcFirewallControlPolicyPositionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallControlPolicyPositionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!$dara.isNull(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can use this operation to modify the priority of an access control policy that is created for a VPC firewall in a specific policy group.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyPositionRequest
   * @returns ModifyVpcFirewallControlPolicyPositionResponse
   */
  async modifyVpcFirewallControlPolicyPosition(request: $_model.ModifyVpcFirewallControlPolicyPositionRequest): Promise<$_model.ModifyVpcFirewallControlPolicyPositionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * Modifies the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call this operation to modify the intrusion prevention configurations of a VPC firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallDefaultIPSConfigResponse
   */
  async modifyVpcFirewallDefaultIPSConfigWithOptions(request: $_model.ModifyVpcFirewallDefaultIPSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallDefaultIPSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basicRules)) {
      query["BasicRules"] = request.basicRules;
    }

    if (!$dara.isNull(request.enableAllPatch)) {
      query["EnableAllPatch"] = request.enableAllPatch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.ruleClass)) {
      query["RuleClass"] = request.ruleClass;
    }

    if (!$dara.isNull(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallDefaultIPSConfigResponse({}));
  }

  /**
   * Modifies the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call this operation to modify the intrusion prevention configurations of a VPC firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallDefaultIPSConfigRequest
   * @returns ModifyVpcFirewallDefaultIPSConfigResponse
   */
  async modifyVpcFirewallDefaultIPSConfig(request: $_model.ModifyVpcFirewallDefaultIPSConfigRequest): Promise<$_model.ModifyVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - ModifyVpcFirewallIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallIPSWhitelistResponse
   */
  async modifyVpcFirewallIPSWhitelistWithOptions(request: $_model.ModifyVpcFirewallIPSWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallIPSWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.listValue)) {
      query["ListValue"] = request.listValue;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!$dara.isNull(request.whiteType)) {
      query["WhiteType"] = request.whiteType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallIPSWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallIPSWhitelistResponse({}));
  }

  /**
   * Modifies the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - ModifyVpcFirewallIPSWhitelistRequest
   * @returns ModifyVpcFirewallIPSWhitelistResponse
   */
  async modifyVpcFirewallIPSWhitelist(request: $_model.ModifyVpcFirewallIPSWhitelistRequest): Promise<$_model.ModifyVpcFirewallIPSWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallSwitchStatus operation to enable or disable a VPC firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit. After you enable the VPC firewall, the VPC firewall protects access traffic between two VPCs that are connected by using an Express Connect circuit. After you disable the VPC firewall, the VPC firewall no longer protects access traffic between two VPCs that are connected by using an Express Connect circuit.
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallSwitchStatusResponse
   */
  async modifyVpcFirewallSwitchStatusWithOptions(request: $_model.ModifyVpcFirewallSwitchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcFirewallSwitchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcFirewallSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcFirewallSwitchStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcFirewallSwitchStatusResponse({}));
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallSwitchStatus operation to enable or disable a VPC firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit. After you enable the VPC firewall, the VPC firewall protects access traffic between two VPCs that are connected by using an Express Connect circuit. After you disable the VPC firewall, the VPC firewall no longer protects access traffic between two VPCs that are connected by using an Express Connect circuit.
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallSwitchStatusRequest
   * @returns ModifyVpcFirewallSwitchStatusResponse
   */
  async modifyVpcFirewallSwitchStatus(request: $_model.ModifyVpcFirewallSwitchStatusRequest): Promise<$_model.ModifyVpcFirewallSwitchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcFirewallSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Turns off all firewall switches.
   * 
   * @remarks
   * You can call the PutDisableAllFwSwitch operation to turn off all firewall switches.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableAllFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDisableAllFwSwitchResponse
   */
  async putDisableAllFwSwitchWithOptions(request: $_model.PutDisableAllFwSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDisableAllFwSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDisableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDisableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new $_model.PutDisableAllFwSwitchResponse({}));
  }

  /**
   * Turns off all firewall switches.
   * 
   * @remarks
   * You can call the PutDisableAllFwSwitch operation to turn off all firewall switches.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableAllFwSwitchRequest
   * @returns PutDisableAllFwSwitchResponse
   */
  async putDisableAllFwSwitch(request: $_model.PutDisableAllFwSwitchRequest): Promise<$_model.PutDisableAllFwSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDisableAllFwSwitchWithOptions(request, runtime);
  }

  /**
   * Disable a firewall for specific assets.
   * 
   * @remarks
   * You can call the PutDisableFwSwitch operation to disable a firewall for specific assets. After you disable the firewall, traffic does not pass through Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDisableFwSwitchResponse
   */
  async putDisableFwSwitchWithOptions(request: $_model.PutDisableFwSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDisableFwSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!$dara.isNull(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDisableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDisableFwSwitchResponse>(await this.callApi(params, req, runtime), new $_model.PutDisableFwSwitchResponse({}));
  }

  /**
   * Disable a firewall for specific assets.
   * 
   * @remarks
   * You can call the PutDisableFwSwitch operation to disable a firewall for specific assets. After you disable the firewall, traffic does not pass through Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableFwSwitchRequest
   * @returns PutDisableFwSwitchResponse
   */
  async putDisableFwSwitch(request: $_model.PutDisableFwSwitchRequest): Promise<$_model.PutDisableFwSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDisableFwSwitchWithOptions(request, runtime);
  }

  /**
   * Enables a firewall for all public IP addresses within your Alibaba Cloud account.
   * 
   * @remarks
   * You can call the PutEnableAllFwSwitch operation to enable a firewall for all public IP addresses within your Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableAllFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEnableAllFwSwitchResponse
   */
  async putEnableAllFwSwitchWithOptions(request: $_model.PutEnableAllFwSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEnableAllFwSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEnableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEnableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new $_model.PutEnableAllFwSwitchResponse({}));
  }

  /**
   * Enables a firewall for all public IP addresses within your Alibaba Cloud account.
   * 
   * @remarks
   * You can call the PutEnableAllFwSwitch operation to enable a firewall for all public IP addresses within your Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableAllFwSwitchRequest
   * @returns PutEnableAllFwSwitchResponse
   */
  async putEnableAllFwSwitch(request: $_model.PutEnableAllFwSwitchRequest): Promise<$_model.PutEnableAllFwSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEnableAllFwSwitchWithOptions(request, runtime);
  }

  /**
   * Enables firewalls for specific assets.
   * 
   * @remarks
   * You can call this operation to enable a firewall. After you enable a firewall, traffic passes through Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEnableFwSwitchResponse
   */
  async putEnableFwSwitchWithOptions(request: $_model.PutEnableFwSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEnableFwSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!$dara.isNull(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEnableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEnableFwSwitchResponse>(await this.callApi(params, req, runtime), new $_model.PutEnableFwSwitchResponse({}));
  }

  /**
   * Enables firewalls for specific assets.
   * 
   * @remarks
   * You can call this operation to enable a firewall. After you enable a firewall, traffic passes through Cloud Firewall.
   * ## [](#qps-)Limits
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableFwSwitchRequest
   * @returns PutEnableFwSwitchResponse
   */
  async putEnableFwSwitch(request: $_model.PutEnableFwSwitchRequest): Promise<$_model.PutEnableFwSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEnableFwSwitchWithOptions(request, runtime);
  }

  /**
   * Releases Cloud Firewall that uses the pay-as-you-go billing method.
   * 
   * @param request - ReleasePostInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePostInstanceResponse
   */
  async releasePostInstanceWithOptions(request: $_model.ReleasePostInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePostInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePostInstance",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleasePostInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleasePostInstanceResponse({}));
  }

  /**
   * Releases Cloud Firewall that uses the pay-as-you-go billing method.
   * 
   * @param request - ReleasePostInstanceRequest
   * @returns ReleasePostInstanceResponse
   */
  async releasePostInstance(request: $_model.ReleasePostInstanceRequest): Promise<$_model.ReleasePostInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePostInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the number of NAT firewall hits.
   * 
   * @param request - ResetNatFirewallRuleHitCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetNatFirewallRuleHitCountResponse
   */
  async resetNatFirewallRuleHitCountWithOptions(request: $_model.ResetNatFirewallRuleHitCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetNatFirewallRuleHitCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetNatFirewallRuleHitCount",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetNatFirewallRuleHitCountResponse>(await this.callApi(params, req, runtime), new $_model.ResetNatFirewallRuleHitCountResponse({}));
  }

  /**
   * Resets the number of NAT firewall hits.
   * 
   * @param request - ResetNatFirewallRuleHitCountRequest
   * @returns ResetNatFirewallRuleHitCountResponse
   */
  async resetNatFirewallRuleHitCount(request: $_model.ResetNatFirewallRuleHitCountRequest): Promise<$_model.ResetNatFirewallRuleHitCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetNatFirewallRuleHitCountWithOptions(request, runtime);
  }

  /**
   * Clears the count on hits of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the ResetVpcFirewallRuleHitCount operation to clear the count on hits of an access control policy that is created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResetVpcFirewallRuleHitCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetVpcFirewallRuleHitCountResponse
   */
  async resetVpcFirewallRuleHitCountWithOptions(request: $_model.ResetVpcFirewallRuleHitCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetVpcFirewallRuleHitCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetVpcFirewallRuleHitCount",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetVpcFirewallRuleHitCountResponse>(await this.callApi(params, req, runtime), new $_model.ResetVpcFirewallRuleHitCountResponse({}));
  }

  /**
   * Clears the count on hits of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the ResetVpcFirewallRuleHitCount operation to clear the count on hits of an access control policy that is created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResetVpcFirewallRuleHitCountRequest
   * @returns ResetVpcFirewallRuleHitCountResponse
   */
  async resetVpcFirewallRuleHitCount(request: $_model.ResetVpcFirewallRuleHitCountRequest): Promise<$_model.ResetVpcFirewallRuleHitCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetVpcFirewallRuleHitCountWithOptions(request, runtime);
  }

  /**
   * Enables or disables a NAT firewall.
   * 
   * @param request - SwitchSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSecurityProxyResponse
   */
  async switchSecurityProxyWithOptions(request: $_model.SwitchSecurityProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchSecurityProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.switch)) {
      query["Switch"] = request.switch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchSecurityProxyResponse>(await this.callApi(params, req, runtime), new $_model.SwitchSecurityProxyResponse({}));
  }

  /**
   * Enables or disables a NAT firewall.
   * 
   * @param request - SwitchSecurityProxyRequest
   * @returns SwitchSecurityProxyResponse
   */
  async switchSecurityProxy(request: $_model.SwitchSecurityProxyRequest): Promise<$_model.SwitchSecurityProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSecurityProxyWithOptions(request, runtime);
  }

}
