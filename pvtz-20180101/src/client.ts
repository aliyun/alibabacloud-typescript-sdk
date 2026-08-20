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
      'ap-northeast-1': "pvtz.aliyuncs.com",
      'cn-hangzhou': "pvtz.aliyuncs.com",
      'cn-qingdao': "pvtz.aliyuncs.com",
      'cn-zhangjiakou': "pvtz.aliyuncs.com",
      'eu-west-1': "pvtz.aliyuncs.com",
      'us-east-1': "pvtz.aliyuncs.com",
      'us-west-1': "pvtz.aliyuncs.com",
      'ap-south-1': "pvtz.aliyuncs.com",
      'me-east-1': "pvtz.aliyuncs.com",
      'cn-beijing-finance-1': "pvtz.aliyuncs.com",
      'cn-hangzhou-finance': "pvtz.aliyuncs.com",
      'cn-north-2-gov-1': "pvtz.aliyuncs.com",
      'cn-shanghai-finance-1': "pvtz.aliyuncs.com",
      'cn-shenzhen-finance-1': "pvtz.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pvtz", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a custom line.
   * 
   * @param request - AddCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomLineResponse
   */
  async addCustomLineWithOptions(request: $_model.AddCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsCategory)) {
      query["DnsCategory"] = request.dnsCategory;
    }

    if (!$dara.isNull(request.ipv4s)) {
      query["Ipv4s"] = request.ipv4s;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.shareScope)) {
      query["ShareScope"] = request.shareScope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomLineResponse({}));
  }

  /**
   * Creates a custom line.
   * 
   * @param request - AddCustomLineRequest
   * @returns AddCustomLineResponse
   */
  async addCustomLine(request: $_model.AddCustomLineRequest): Promise<$_model.AddCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomLineWithOptions(request, runtime);
  }

  /**
   * You can call this operation to add an endpoint.
   * 
   * @param request - AddResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddResolverEndpointResponse
   */
  async addResolverEndpointWithOptions(request: $_model.AddResolverEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddResolverEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddResolverEndpointResponse>(await this.callApi(params, req, runtime), new $_model.AddResolverEndpointResponse({}));
  }

  /**
   * You can call this operation to add an endpoint.
   * 
   * @param request - AddResolverEndpointRequest
   * @returns AddResolverEndpointResponse
   */
  async addResolverEndpoint(request: $_model.AddResolverEndpointRequest): Promise<$_model.AddResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Adds a forwarding rule.
   * 
   * @remarks
   * If the outbound VPC and the inbound VPC are the same, the IP address of the external DNS system in the forwarding rule for the outbound endpoint cannot be the same as the IP address of the inbound endpoint service. This is because if the IP addresses are the same, a request loopback occurs and DNS resolution fails.
   * 
   * @param request - AddResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddResolverRuleResponse
   */
  async addResolverRuleWithOptions(request: $_model.AddResolverRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddResolverRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edgeDnsClusters)) {
      query["EdgeDnsClusters"] = request.edgeDnsClusters;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpcs)) {
      query["Vpcs"] = request.vpcs;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddResolverRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddResolverRuleResponse({}));
  }

  /**
   * Adds a forwarding rule.
   * 
   * @remarks
   * If the outbound VPC and the inbound VPC are the same, the IP address of the external DNS system in the forwarding rule for the outbound endpoint cannot be the same as the IP address of the inbound endpoint service. This is because if the IP addresses are the same, a request loopback occurs and DNS resolution fails.
   * 
   * @param request - AddResolverRuleRequest
   * @returns AddResolverRuleResponse
   */
  async addResolverRule(request: $_model.AddResolverRuleRequest): Promise<$_model.AddResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addResolverRuleWithOptions(request, runtime);
  }

  /**
   * Adds cross-account VPC authorization.
   * 
   * @remarks
   * #### **Limits**
   * - Cross-account settings for the effective scope only support Alibaba Cloud accounts (primary accounts) and do not support RAM users. Only accounts within the same site can be associated, such as between Alibaba Cloud China Website (www.aliyun.com) accounts or between Alibaba Cloud International Website (www.alibabacloud.com) accounts. Cross-site association is not supported, such as between a China Website account and an International Website account.
   * - For scenarios that use authentication code authorization, no API is currently available for sending authentication codes.
   * #### **Precautions**
   * When you configure cross-account settings for the effective scope, billing is settled under the account that manages the built-in authoritative domain name.
   * 
   * @param request - AddUserVpcAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserVpcAuthorizationResponse
   */
  async addUserVpcAuthorizationWithOptions(request: $_model.AddUserVpcAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserVpcAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authChannel)) {
      query["AuthChannel"] = request.authChannel;
    }

    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.AddUserVpcAuthorizationResponse({}));
  }

  /**
   * Adds cross-account VPC authorization.
   * 
   * @remarks
   * #### **Limits**
   * - Cross-account settings for the effective scope only support Alibaba Cloud accounts (primary accounts) and do not support RAM users. Only accounts within the same site can be associated, such as between Alibaba Cloud China Website (www.aliyun.com) accounts or between Alibaba Cloud International Website (www.alibabacloud.com) accounts. Cross-site association is not supported, such as between a China Website account and an International Website account.
   * - For scenarios that use authentication code authorization, no API is currently available for sending authentication codes.
   * #### **Precautions**
   * When you configure cross-account settings for the effective scope, billing is settled under the account that manages the built-in authoritative domain name.
   * 
   * @param request - AddUserVpcAuthorizationRequest
   * @returns AddUserVpcAuthorizationResponse
   */
  async addUserVpcAuthorization(request: $_model.AddUserVpcAuthorizationRequest): Promise<$_model.AddUserVpcAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Call the AddZone operation to create a built-in authoritative zone. The built-in authoritative zone can be a standard zone or an accelerated zone.
   * 
   * @remarks
   * Starting from April 30, 2025 (UTC+8), zones added by new users of Alibaba Cloud DNS PrivateZone are set as accelerated zones by default. Starting from <props="china">October 30, 2025 (UTC+8)<props="intl">April 30, 2026 (UTC+8), all built-in authoritative standard zones will be automatically switched to accelerated zones. After the switch, the number of DNS queries may increase, which can increase your costs. To reduce the increase in DNS queries caused by the absence of a local cache, [enable NSCD for your ECS instances](https://help.aliyun.com/document_detail/2592999.html).
   * 
   * @param request - AddZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneResponse
   */
  async addZoneWithOptions(request: $_model.AddZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dnsGroup)) {
      query["DnsGroup"] = request.dnsGroup;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    if (!$dara.isNull(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!$dara.isNull(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddZoneResponse>(await this.callApi(params, req, runtime), new $_model.AddZoneResponse({}));
  }

  /**
   * Call the AddZone operation to create a built-in authoritative zone. The built-in authoritative zone can be a standard zone or an accelerated zone.
   * 
   * @remarks
   * Starting from April 30, 2025 (UTC+8), zones added by new users of Alibaba Cloud DNS PrivateZone are set as accelerated zones by default. Starting from <props="china">October 30, 2025 (UTC+8)<props="intl">April 30, 2026 (UTC+8), all built-in authoritative standard zones will be automatically switched to accelerated zones. After the switch, the number of DNS queries may increase, which can increase your costs. To reduce the increase in DNS queries caused by the absence of a local cache, [enable NSCD for your ECS instances](https://help.aliyun.com/document_detail/2592999.html).
   * 
   * @param request - AddZoneRequest
   * @returns AddZoneResponse
   */
  async addZone(request: $_model.AddZoneRequest): Promise<$_model.AddZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneWithOptions(request, runtime);
  }

  /**
   * Call the AddZoneRecord operation to add a DNS record to an authoritative zone. Within the effective scope of the zone, the internal DNS record for a domain name overwrites its public DNS record.
   * 
   * @param request - AddZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneRecordResponse
   */
  async addZoneRecordWithOptions(request: $_model.AddZoneRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddZoneRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddZoneRecordResponse>(await this.callApi(params, req, runtime), new $_model.AddZoneRecordResponse({}));
  }

  /**
   * Call the AddZoneRecord operation to add a DNS record to an authoritative zone. Within the effective scope of the zone, the internal DNS record for a domain name overwrites its public DNS record.
   * 
   * @param request - AddZoneRecordRequest
   * @returns AddZoneRecordResponse
   */
  async addZoneRecord(request: $_model.AddZoneRecordRequest): Promise<$_model.AddZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneRecordWithOptions(request, runtime);
  }

  /**
   * The BindResolverRuleVpc operation associates a forwarding rule with a virtual private cloud (VPC).
   * 
   * @remarks
   * >Notice: 
   * This operation performs a full replacement. Any existing VPC associations not included in your request will be removed. To add a new VPC, you must include the IDs of all VPCs that should remain associated.
   * 
   * @param request - BindResolverRuleVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindResolverRuleVpcResponse
   */
  async bindResolverRuleVpcWithOptions(request: $_model.BindResolverRuleVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindResolverRuleVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.vpc)) {
      query["Vpc"] = request.vpc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindResolverRuleVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindResolverRuleVpcResponse>(await this.callApi(params, req, runtime), new $_model.BindResolverRuleVpcResponse({}));
  }

  /**
   * The BindResolverRuleVpc operation associates a forwarding rule with a virtual private cloud (VPC).
   * 
   * @remarks
   * >Notice: 
   * This operation performs a full replacement. Any existing VPC associations not included in your request will be removed. To add a new VPC, you must include the IDs of all VPCs that should remain associated.
   * 
   * @param request - BindResolverRuleVpcRequest
   * @returns BindResolverRuleVpcResponse
   */
  async bindResolverRuleVpc(request: $_model.BindResolverRuleVpcRequest): Promise<$_model.BindResolverRuleVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindResolverRuleVpcWithOptions(request, runtime);
  }

  /**
   * Binds a Zone to, or unbinds it from, one or more VPCs to define its effective scope.
   * 
   * @remarks
   * ##### Notes
   * We recommend binding VPCs to a Zone only after you configure all its DNS records. Otherwise, DNS queries for the domain name in the specified VPCs may fail. This issue does not occur if the subdomain recursive resolution proxy feature is enabled.
   * >Notice: This API operation performs a full overwrite. The list of VPCs provided in a request replaces all existing associated VPCs. To add a VPC, you must include the IDs of the new VPC and all existing VPCs that you want to retain.
   * 
   * @param request - BindZoneVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindZoneVpcResponse
   */
  async bindZoneVpcWithOptions(request: $_model.BindZoneVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindZoneVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.vpcs)) {
      query["Vpcs"] = request.vpcs;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindZoneVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindZoneVpcResponse>(await this.callApi(params, req, runtime), new $_model.BindZoneVpcResponse({}));
  }

  /**
   * Binds a Zone to, or unbinds it from, one or more VPCs to define its effective scope.
   * 
   * @remarks
   * ##### Notes
   * We recommend binding VPCs to a Zone only after you configure all its DNS records. Otherwise, DNS queries for the domain name in the specified VPCs may fail. This issue does not occur if the subdomain recursive resolution proxy feature is enabled.
   * >Notice: This API operation performs a full overwrite. The list of VPCs provided in a request replaces all existing associated VPCs. To add a VPC, you must include the IDs of the new VPC and all existing VPCs that you want to retain.
   * 
   * @param request - BindZoneVpcRequest
   * @returns BindZoneVpcResponse
   */
  async bindZoneVpc(request: $_model.BindZoneVpcRequest): Promise<$_model.BindZoneVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindZoneVpcWithOptions(request, runtime);
  }

  /**
   * Modify the location of a ZONE.
   * 
   * @remarks
   * Starting April 30, 2025 (UTC+8), zones added by new Alibaba Cloud DNS PrivateZone users will be set to acceleration zones by default. <props="china">Starting October 30, 2025 (UTC+8)<props="intl">Starting April 30, 2026 (UTC+8), built-in authoritative zones in the standard zone group for all users will be automatically switched to the acceleration zone group. After the switch, the number of DNS requests may increase, which can result in higher usage costs. You can enable [NSCD for ECS](https://help.aliyun.com/document_detail/2592999.html) to reduce the increase in DNS requests caused by the lack of a local cache.
   * 
   * @param request - ChangeZoneDnsGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeZoneDnsGroupResponse
   */
  async changeZoneDnsGroupWithOptions(request: $_model.ChangeZoneDnsGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeZoneDnsGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dnsGroup)) {
      query["DnsGroup"] = request.dnsGroup;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeZoneDnsGroup",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeZoneDnsGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeZoneDnsGroupResponse({}));
  }

  /**
   * Modify the location of a ZONE.
   * 
   * @remarks
   * Starting April 30, 2025 (UTC+8), zones added by new Alibaba Cloud DNS PrivateZone users will be set to acceleration zones by default. <props="china">Starting October 30, 2025 (UTC+8)<props="intl">Starting April 30, 2026 (UTC+8), built-in authoritative zones in the standard zone group for all users will be automatically switched to the acceleration zone group. After the switch, the number of DNS requests may increase, which can result in higher usage costs. You can enable [NSCD for ECS](https://help.aliyun.com/document_detail/2592999.html) to reduce the increase in DNS requests caused by the lack of a local cache.
   * 
   * @param request - ChangeZoneDnsGroupRequest
   * @returns ChangeZoneDnsGroupResponse
   */
  async changeZoneDnsGroup(request: $_model.ChangeZoneDnsGroupRequest): Promise<$_model.ChangeZoneDnsGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeZoneDnsGroupWithOptions(request, runtime);
  }

  /**
   * You can call the CheckZoneName operation to check whether a zone name is available.
   * 
   * @param request - CheckZoneNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckZoneNameResponse
   */
  async checkZoneNameWithOptions(request: $_model.CheckZoneNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckZoneNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckZoneName",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckZoneNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckZoneNameResponse({}));
  }

  /**
   * You can call the CheckZoneName operation to check whether a zone name is available.
   * 
   * @param request - CheckZoneNameRequest
   * @returns CheckZoneNameResponse
   */
  async checkZoneName(request: $_model.CheckZoneNameRequest): Promise<$_model.CheckZoneNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkZoneNameWithOptions(request, runtime);
  }

  /**
   * Deletes a custom line.
   * 
   * @param request - DeleteCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomLineResponse
   */
  async deleteCustomLineWithOptions(request: $_model.DeleteCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomLineResponse({}));
  }

  /**
   * Deletes a custom line.
   * 
   * @param request - DeleteCustomLineRequest
   * @returns DeleteCustomLineResponse
   */
  async deleteCustomLine(request: $_model.DeleteCustomLineRequest): Promise<$_model.DeleteCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomLineWithOptions(request, runtime);
  }

  /**
   * You can call the DeleteResolverEndpoint operation to delete an endpoint by its ID.
   * 
   * @param request - DeleteResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResolverEndpointResponse
   */
  async deleteResolverEndpointWithOptions(request: $_model.DeleteResolverEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResolverEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResolverEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResolverEndpointResponse({}));
  }

  /**
   * You can call the DeleteResolverEndpoint operation to delete an endpoint by its ID.
   * 
   * @param request - DeleteResolverEndpointRequest
   * @returns DeleteResolverEndpointResponse
   */
  async deleteResolverEndpoint(request: $_model.DeleteResolverEndpointRequest): Promise<$_model.DeleteResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes a forwarding rule by its ID.
   * 
   * @param request - DeleteResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResolverRuleResponse
   */
  async deleteResolverRuleWithOptions(request: $_model.DeleteResolverRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResolverRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResolverRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResolverRuleResponse({}));
  }

  /**
   * Deletes a forwarding rule by its ID.
   * 
   * @param request - DeleteResolverRuleRequest
   * @returns DeleteResolverRuleResponse
   */
  async deleteResolverRule(request: $_model.DeleteResolverRuleRequest): Promise<$_model.DeleteResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResolverRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a cross-account authorization based on a specified account ID and authorization type.
   * 
   * @param request - DeleteUserVpcAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserVpcAuthorizationResponse
   */
  async deleteUserVpcAuthorizationWithOptions(request: $_model.DeleteUserVpcAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserVpcAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserVpcAuthorizationResponse({}));
  }

  /**
   * Deletes a cross-account authorization based on a specified account ID and authorization type.
   * 
   * @param request - DeleteUserVpcAuthorizationRequest
   * @returns DeleteUserVpcAuthorizationResponse
   */
  async deleteUserVpcAuthorization(request: $_model.DeleteUserVpcAuthorizationRequest): Promise<$_model.DeleteUserVpcAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Deletes an idle zone (built-in authoritative domain name).
   * 
   * @remarks
   * #### Notes
   * You must dissociate a zone from its scope before you delete it.
   * 
   * @param request - DeleteZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteZoneResponse
   */
  async deleteZoneWithOptions(request: $_model.DeleteZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteZoneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteZoneResponse({}));
  }

  /**
   * Deletes an idle zone (built-in authoritative domain name).
   * 
   * @remarks
   * #### Notes
   * You must dissociate a zone from its scope before you delete it.
   * 
   * @param request - DeleteZoneRequest
   * @returns DeleteZoneResponse
   */
  async deleteZone(request: $_model.DeleteZoneRequest): Promise<$_model.DeleteZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteZoneWithOptions(request, runtime);
  }

  /**
   * The DeleteZoneRecord operation deletes a DNS record by its ID.
   * 
   * @remarks
   * #### **Notes**
   * This operation is irreversible. Deleted records cannot be recovered.
   * 
   * @param request - DeleteZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteZoneRecordResponse
   */
  async deleteZoneRecordWithOptions(request: $_model.DeleteZoneRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteZoneRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteZoneRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteZoneRecordResponse({}));
  }

  /**
   * The DeleteZoneRecord operation deletes a DNS record by its ID.
   * 
   * @remarks
   * #### **Notes**
   * This operation is irreversible. Deleted records cannot be recovered.
   * 
   * @param request - DeleteZoneRecordRequest
   * @returns DeleteZoneRecordResponse
   */
  async deleteZoneRecord(request: $_model.DeleteZoneRecordRequest): Promise<$_model.DeleteZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteZoneRecordWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeChangeLogs operation to retrieve the operation logs for a private zone. The logs record operations related to built-in authoritative zones, cache management, forwarding management, endpoints, and DNS record queries. You can perform a fuzzy search by keywords such as behavior and content.
   * 
   * @remarks
   * #### **Limits**
   * You can query operation logs for a private zone generated within the last six months.
   * 
   * @param request - DescribeChangeLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChangeLogsResponse
   */
  async describeChangeLogsWithOptions(request: $_model.DescribeChangeLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChangeLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChangeLogs",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChangeLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChangeLogsResponse({}));
  }

  /**
   * You can call the DescribeChangeLogs operation to retrieve the operation logs for a private zone. The logs record operations related to built-in authoritative zones, cache management, forwarding management, endpoints, and DNS record queries. You can perform a fuzzy search by keywords such as behavior and content.
   * 
   * @remarks
   * #### **Limits**
   * You can query operation logs for a private zone generated within the last six months.
   * 
   * @param request - DescribeChangeLogsRequest
   * @returns DescribeChangeLogsResponse
   */
  async describeChangeLogs(request: $_model.DescribeChangeLogsRequest): Promise<$_model.DescribeChangeLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChangeLogsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a custom line.
   * 
   * @param request - DescribeCustomLineInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLineInfoResponse
   */
  async describeCustomLineInfoWithOptions(request: $_model.DescribeCustomLineInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomLineInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomLineInfo",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomLineInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomLineInfoResponse({}));
  }

  /**
   * Retrieves the details of a custom line.
   * 
   * @param request - DescribeCustomLineInfoRequest
   * @returns DescribeCustomLineInfoResponse
   */
  async describeCustomLineInfo(request: $_model.DescribeCustomLineInfoRequest): Promise<$_model.DescribeCustomLineInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomLineInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - DescribeCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLinesWithOptions(request: $_model.DescribeCustomLinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomLinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomLines",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomLinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomLinesResponse({}));
  }

  /**
   * Queries a list of custom lines.
   * 
   * @param request - DescribeCustomLinesRequest
   * @returns DescribeCustomLinesResponse
   */
  async describeCustomLines(request: $_model.DescribeCustomLinesRequest): Promise<$_model.DescribeCustomLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomLinesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of VPCs that a user can analyze.
   * 
   * @remarks
   * This operation is not recommended due to its low performance. To retrieve a list of zones, call the `DescribeZones` operation. To get details about a VPC in a specific zone, call `DescribeZoneInfo` and specify the `zoneId`.
   * 
   * @param request - DescribeIntranetUserCanAnalysisVpcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntranetUserCanAnalysisVpcsResponse
   */
  async describeIntranetUserCanAnalysisVpcsWithOptions(request: $_model.DescribeIntranetUserCanAnalysisVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntranetUserCanAnalysisVpcsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryTreeLevel)) {
      query["QueryTreeLevel"] = request.queryTreeLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcOwner)) {
      query["VpcOwner"] = request.vpcOwner;
    }

    if (!$dara.isNull(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIntranetUserCanAnalysisVpcs",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntranetUserCanAnalysisVpcsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntranetUserCanAnalysisVpcsResponse({}));
  }

  /**
   * Retrieves a list of VPCs that a user can analyze.
   * 
   * @remarks
   * This operation is not recommended due to its low performance. To retrieve a list of zones, call the `DescribeZones` operation. To get details about a VPC in a specific zone, call `DescribeZoneInfo` and specify the `zoneId`.
   * 
   * @param request - DescribeIntranetUserCanAnalysisVpcsRequest
   * @returns DescribeIntranetUserCanAnalysisVpcsResponse
   */
  async describeIntranetUserCanAnalysisVpcs(request: $_model.DescribeIntranetUserCanAnalysisVpcsRequest): Promise<$_model.DescribeIntranetUserCanAnalysisVpcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntranetUserCanAnalysisVpcsWithOptions(request, runtime);
  }

  /**
   * Retrieves global DNS resolution statistics for PrivateZone.
   * 
   * @remarks
   * #### **Usage notes**
   * This operation queries tag information only for zone resources.
   * 
   * @param request - DescribePvtzStatisticsGlobalOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePvtzStatisticsGlobalOverviewResponse
   */
  async describePvtzStatisticsGlobalOverviewWithOptions(request: $_model.DescribePvtzStatisticsGlobalOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePvtzStatisticsGlobalOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkParams)) {
      query["NetworkParams"] = request.networkParams;
    }

    if (!$dara.isNull(request.overviewPeriod)) {
      query["OverviewPeriod"] = request.overviewPeriod;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePvtzStatisticsGlobalOverview",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePvtzStatisticsGlobalOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribePvtzStatisticsGlobalOverviewResponse({}));
  }

  /**
   * Retrieves global DNS resolution statistics for PrivateZone.
   * 
   * @remarks
   * #### **Usage notes**
   * This operation queries tag information only for zone resources.
   * 
   * @param request - DescribePvtzStatisticsGlobalOverviewRequest
   * @returns DescribePvtzStatisticsGlobalOverviewResponse
   */
  async describePvtzStatisticsGlobalOverview(request: $_model.DescribePvtzStatisticsGlobalOverviewRequest): Promise<$_model.DescribePvtzStatisticsGlobalOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePvtzStatisticsGlobalOverviewWithOptions(request, runtime);
  }

  /**
   * PrivateZone Resolution Trends
   * 
   * @remarks
   * #### **Limits**
   * Currently, you can only query tags for availability zone resources.
   * 
   * @param request - DescribePvtzStatisticsHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePvtzStatisticsHistoryResponse
   */
  async describePvtzStatisticsHistoryWithOptions(request: $_model.DescribePvtzStatisticsHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePvtzStatisticsHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.networkParams)) {
      query["NetworkParams"] = request.networkParams;
    }

    if (!$dara.isNull(request.rcode)) {
      query["Rcode"] = request.rcode;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.statisticalType)) {
      query["StatisticalType"] = request.statisticalType;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePvtzStatisticsHistory",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePvtzStatisticsHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribePvtzStatisticsHistoryResponse({}));
  }

  /**
   * PrivateZone Resolution Trends
   * 
   * @remarks
   * #### **Limits**
   * Currently, you can only query tags for availability zone resources.
   * 
   * @param request - DescribePvtzStatisticsHistoryRequest
   * @returns DescribePvtzStatisticsHistoryResponse
   */
  async describePvtzStatisticsHistory(request: $_model.DescribePvtzStatisticsHistoryRequest): Promise<$_model.DescribePvtzStatisticsHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePvtzStatisticsHistoryWithOptions(request, runtime);
  }

  /**
   * PrivateZone Resolution Statistics Summary
   * 
   * @remarks
   * #### **Limits**
   * You can only query tags for zone resources.
   * 
   * @param request - DescribePvtzStatisticsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePvtzStatisticsSummaryResponse
   */
  async describePvtzStatisticsSummaryWithOptions(request: $_model.DescribePvtzStatisticsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePvtzStatisticsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.growType)) {
      query["GrowType"] = request.growType;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.networkParams)) {
      query["NetworkParams"] = request.networkParams;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.rcode)) {
      query["Rcode"] = request.rcode;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.statisticalType)) {
      query["StatisticalType"] = request.statisticalType;
    }

    if (!$dara.isNull(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePvtzStatisticsSummary",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePvtzStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribePvtzStatisticsSummaryResponse({}));
  }

  /**
   * PrivateZone Resolution Statistics Summary
   * 
   * @remarks
   * #### **Limits**
   * You can only query tags for zone resources.
   * 
   * @param request - DescribePvtzStatisticsSummaryRequest
   * @returns DescribePvtzStatisticsSummaryResponse
   */
  async describePvtzStatisticsSummary(request: $_model.DescribePvtzStatisticsSummaryRequest): Promise<$_model.DescribePvtzStatisticsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePvtzStatisticsSummaryWithOptions(request, runtime);
  }

  /**
   * Provides an overview of resolution statistics for zones in PrivateZone.
   * 
   * @remarks
   * This is a low-performance operation and is not recommended. To retrieve a list of zones, use the DescribeZones operation. To get details of the VPCs bound to a zone, call the DescribeZoneInfo operation and specify the zone ID.
   * 
   * @param request - DescribePvtzStatisticsZoneOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePvtzStatisticsZoneOverviewResponse
   */
  async describePvtzStatisticsZoneOverviewWithOptions(request: $_model.DescribePvtzStatisticsZoneOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePvtzStatisticsZoneOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.networkParams)) {
      query["NetworkParams"] = request.networkParams;
    }

    if (!$dara.isNull(request.overviewPeriod)) {
      query["OverviewPeriod"] = request.overviewPeriod;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["ServerRegion"] = request.serverRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePvtzStatisticsZoneOverview",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePvtzStatisticsZoneOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribePvtzStatisticsZoneOverviewResponse({}));
  }

  /**
   * Provides an overview of resolution statistics for zones in PrivateZone.
   * 
   * @remarks
   * This is a low-performance operation and is not recommended. To retrieve a list of zones, use the DescribeZones operation. To get details of the VPCs bound to a zone, call the DescribeZoneInfo operation and specify the zone ID.
   * 
   * @param request - DescribePvtzStatisticsZoneOverviewRequest
   * @returns DescribePvtzStatisticsZoneOverviewResponse
   */
  async describePvtzStatisticsZoneOverview(request: $_model.DescribePvtzStatisticsZoneOverviewRequest): Promise<$_model.DescribePvtzStatisticsZoneOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePvtzStatisticsZoneOverviewWithOptions(request, runtime);
  }

  /**
   * Call the DescribeRegions operation to query a list of available regions. You can filter the list by criteria such as the scenario and VPC type.
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

    if (!$dara.isNull(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2018-01-01",
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
   * Call the DescribeRegions operation to query a list of available regions. You can filter the list by criteria such as the scenario and VPC type.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries details about the number of requests based on conditions such as a time range.
   * 
   * @param request - DescribeRequestGraphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRequestGraphResponse
   */
  async describeRequestGraphWithOptions(request: $_model.DescribeRequestGraphRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRequestGraphResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRequestGraph",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRequestGraphResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRequestGraphResponse({}));
  }

  /**
   * Queries details about the number of requests based on conditions such as a time range.
   * 
   * @param request - DescribeRequestGraphRequest
   * @returns DescribeRequestGraphResponse
   */
  async describeRequestGraph(request: $_model.DescribeRequestGraphRequest): Promise<$_model.DescribeRequestGraphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRequestGraphWithOptions(request, runtime);
  }

  /**
   * Call DescribeResolverAvailableZones to retrieve a list of available zones.
   * 
   * @param request - DescribeResolverAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverAvailableZonesResponse
   */
  async describeResolverAvailableZonesWithOptions(request: $_model.DescribeResolverAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResolverAvailableZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.azId)) {
      query["AzId"] = request.azId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resolverRegionId)) {
      query["ResolverRegionId"] = request.resolverRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResolverAvailableZones",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResolverAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResolverAvailableZonesResponse({}));
  }

  /**
   * Call DescribeResolverAvailableZones to retrieve a list of available zones.
   * 
   * @param request - DescribeResolverAvailableZonesRequest
   * @returns DescribeResolverAvailableZonesResponse
   */
  async describeResolverAvailableZones(request: $_model.DescribeResolverAvailableZonesRequest): Promise<$_model.DescribeResolverAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverAvailableZonesWithOptions(request, runtime);
  }

  /**
   * You can call DescribeResolverEndpoint to retrieve the details of an endpoint by its ID.
   * 
   * @param request - DescribeResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverEndpointResponse
   */
  async describeResolverEndpointWithOptions(request: $_model.DescribeResolverEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResolverEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResolverEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResolverEndpointResponse({}));
  }

  /**
   * You can call DescribeResolverEndpoint to retrieve the details of an endpoint by its ID.
   * 
   * @param request - DescribeResolverEndpointRequest
   * @returns DescribeResolverEndpointResponse
   */
  async describeResolverEndpoint(request: $_model.DescribeResolverEndpointRequest): Promise<$_model.DescribeResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverEndpointWithOptions(request, runtime);
  }

  /**
   * You can call DescribeResolverEndpoints to retrieve a list of endpoints.
   * 
   * @param request - DescribeResolverEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverEndpointsResponse
   */
  async describeResolverEndpointsWithOptions(request: $_model.DescribeResolverEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResolverEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResolverEndpoints",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResolverEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResolverEndpointsResponse({}));
  }

  /**
   * You can call DescribeResolverEndpoints to retrieve a list of endpoints.
   * 
   * @param request - DescribeResolverEndpointsRequest
   * @returns DescribeResolverEndpointsResponse
   */
  async describeResolverEndpoints(request: $_model.DescribeResolverEndpointsRequest): Promise<$_model.DescribeResolverEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverEndpointsWithOptions(request, runtime);
  }

  /**
   * Call the DescribeResolverRule operation to retrieve the details of a forwarding rule.
   * 
   * @param request - DescribeResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverRuleResponse
   */
  async describeResolverRuleWithOptions(request: $_model.DescribeResolverRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResolverRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResolverRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResolverRuleResponse({}));
  }

  /**
   * Call the DescribeResolverRule operation to retrieve the details of a forwarding rule.
   * 
   * @param request - DescribeResolverRuleRequest
   * @returns DescribeResolverRuleResponse
   */
  async describeResolverRule(request: $_model.DescribeResolverRuleRequest): Promise<$_model.DescribeResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverRuleWithOptions(request, runtime);
  }

  /**
   * Describes one or more forwarding rules.
   * 
   * @param request - DescribeResolverRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResolverRulesResponse
   */
  async describeResolverRulesWithOptions(request: $_model.DescribeResolverRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResolverRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResolverRules",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResolverRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResolverRulesResponse({}));
  }

  /**
   * Describes one or more forwarding rules.
   * 
   * @param request - DescribeResolverRulesRequest
   * @returns DescribeResolverRulesResponse
   */
  async describeResolverRules(request: $_model.DescribeResolverRulesRequest): Promise<$_model.DescribeResolverRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverRulesWithOptions(request, runtime);
  }

  /**
   * Call the DescribeStatisticSummary operation to retrieve a summary of yesterday\\"s request volume. This summary includes the top three zones and top three VPCs ranked by request volume.
   * 
   * @param request - DescribeStatisticSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStatisticSummaryResponse
   */
  async describeStatisticSummaryWithOptions(request: $_model.DescribeStatisticSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStatisticSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStatisticSummary",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStatisticSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStatisticSummaryResponse({}));
  }

  /**
   * Call the DescribeStatisticSummary operation to retrieve a summary of yesterday\\"s request volume. This summary includes the top three zones and top three VPCs ranked by request volume.
   * 
   * @param request - DescribeStatisticSummaryRequest
   * @returns DescribeStatisticSummaryResponse
   */
  async describeStatisticSummary(request: $_model.DescribeStatisticSummaryRequest): Promise<$_model.DescribeStatisticSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStatisticSummaryWithOptions(request, runtime);
  }

  /**
   * Call DescribeSyncEcsHostTask to retrieve the details of a hostname sync task based on a zone ID.
   * 
   * @param request - DescribeSyncEcsHostTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncEcsHostTaskResponse
   */
  async describeSyncEcsHostTaskWithOptions(request: $_model.DescribeSyncEcsHostTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncEcsHostTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncEcsHostTaskResponse({}));
  }

  /**
   * Call DescribeSyncEcsHostTask to retrieve the details of a hostname sync task based on a zone ID.
   * 
   * @param request - DescribeSyncEcsHostTaskRequest
   * @returns DescribeSyncEcsHostTaskResponse
   */
  async describeSyncEcsHostTask(request: $_model.DescribeSyncEcsHostTaskRequest): Promise<$_model.DescribeSyncEcsHostTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources in PrivateZone.
   * 
   * @remarks
   * #### **Limits**
   * You can query tags for zone resources only.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2018-01-01",
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
   * Queries the tags that are added to resources in PrivateZone.
   * 
   * @remarks
   * #### **Limits**
   * You can query tags for zone resources only.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the service status of the current user, which indicates whether the service is activated or has overdue payments.
   * 
   * @param request - DescribeUserServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserServiceStatusResponse
   */
  async describeUserServiceStatusWithOptions(request: $_model.DescribeUserServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserServiceStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserServiceStatusResponse({}));
  }

  /**
   * Queries the service status of the current user, which indicates whether the service is activated or has overdue payments.
   * 
   * @param request - DescribeUserServiceStatusRequest
   * @returns DescribeUserServiceStatusResponse
   */
  async describeUserServiceStatus(request: $_model.DescribeUserServiceStatusRequest): Promise<$_model.DescribeUserServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserServiceStatusWithOptions(request, runtime);
  }

  /**
   * Call the DescribeUserVpcAuthorizations operation to retrieve a list of cross-account authorizations.
   * 
   * @param request - DescribeUserVpcAuthorizationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserVpcAuthorizationsResponse
   */
  async describeUserVpcAuthorizationsWithOptions(request: $_model.DescribeUserVpcAuthorizationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserVpcAuthorizationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserVpcAuthorizations",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserVpcAuthorizationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserVpcAuthorizationsResponse({}));
  }

  /**
   * Call the DescribeUserVpcAuthorizations operation to retrieve a list of cross-account authorizations.
   * 
   * @param request - DescribeUserVpcAuthorizationsRequest
   * @returns DescribeUserVpcAuthorizationsResponse
   */
  async describeUserVpcAuthorizations(request: $_model.DescribeUserVpcAuthorizationsRequest): Promise<$_model.DescribeUserVpcAuthorizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserVpcAuthorizationsWithOptions(request, runtime);
  }

  /**
   * Call the DescribeZoneInfo operation to retrieve the details of a specified built-in authoritative zone. The details include the list of VPCs that are bound to the zone.
   * 
   * @param request - DescribeZoneInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneInfoResponse
   */
  async describeZoneInfoWithOptions(request: $_model.DescribeZoneInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZoneInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZoneInfo",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZoneInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZoneInfoResponse({}));
  }

  /**
   * Call the DescribeZoneInfo operation to retrieve the details of a specified built-in authoritative zone. The details include the list of VPCs that are bound to the zone.
   * 
   * @param request - DescribeZoneInfoRequest
   * @returns DescribeZoneInfoResponse
   */
  async describeZoneInfo(request: $_model.DescribeZoneInfoRequest): Promise<$_model.DescribeZoneInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a DNS record.
   * 
   * @param request - DescribeZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneRecordResponse
   */
  async describeZoneRecordWithOptions(request: $_model.DescribeZoneRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZoneRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZoneRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZoneRecordResponse({}));
  }

  /**
   * Queries the details of a DNS record.
   * 
   * @param request - DescribeZoneRecordRequest
   * @returns DescribeZoneRecordResponse
   */
  async describeZoneRecord(request: $_model.DescribeZoneRecordRequest): Promise<$_model.DescribeZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneRecordWithOptions(request, runtime);
  }

  /**
   * You can call DescribeZoneRecords to query DNS records for a zone.
   * 
   * @param request - DescribeZoneRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneRecordsResponse
   */
  async describeZoneRecordsWithOptions(request: $_model.DescribeZoneRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZoneRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZoneRecords",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZoneRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZoneRecordsResponse({}));
  }

  /**
   * You can call DescribeZoneRecords to query DNS records for a zone.
   * 
   * @param request - DescribeZoneRecordsRequest
   * @returns DescribeZoneRecordsResponse
   */
  async describeZoneRecords(request: $_model.DescribeZoneRecordsRequest): Promise<$_model.DescribeZoneRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneRecordsWithOptions(request, runtime);
  }

  /**
   * Call the DescribeZoneVpcTree operation to query the zones and the Virtual Private Clouds (VPCs) attached to them in your account.
   * 
   * @remarks
   * This operation is not recommended due to low performance. To retrieve a list of zones, call DescribeZones. To retrieve the details of attached VPCs, call DescribeZoneInfo with the zone ID.
   * 
   * @param request - DescribeZoneVpcTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZoneVpcTreeResponse
   */
  async describeZoneVpcTreeWithOptions(request: $_model.DescribeZoneVpcTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZoneVpcTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZoneVpcTree",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZoneVpcTreeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZoneVpcTreeResponse({}));
  }

  /**
   * Call the DescribeZoneVpcTree operation to query the zones and the Virtual Private Clouds (VPCs) attached to them in your account.
   * 
   * @remarks
   * This operation is not recommended due to low performance. To retrieve a list of zones, call DescribeZones. To retrieve the details of attached VPCs, call DescribeZoneInfo with the zone ID.
   * 
   * @param request - DescribeZoneVpcTreeRequest
   * @returns DescribeZoneVpcTreeResponse
   */
  async describeZoneVpcTree(request: $_model.DescribeZoneVpcTreeRequest): Promise<$_model.DescribeZoneVpcTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneVpcTreeWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeZones operation to query a list of zones available to your account.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryRegionId)) {
      query["QueryRegionId"] = request.queryRegionId;
    }

    if (!$dara.isNull(request.queryVpcId)) {
      query["QueryVpcId"] = request.queryVpcId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTag)) {
      query["ResourceTag"] = request.resourceTag;
    }

    if (!$dara.isNull(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!$dara.isNull(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!$dara.isNull(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2018-01-01",
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
   * You can call the DescribeZones operation to query a list of zones available to your account.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources in Private Zone.
   * 
   * @remarks
   * #### **Limits**
   * This operation queries tags for zone resources only.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-01-01",
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
   * Queries the tags that are added to resources in Private Zone.
   * 
   * @remarks
   * #### **Limits**
   * This operation queries tags for zone resources only.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * You can call the MoveResourceGroup operation to move a resource to a different resource group.
   * 
   * @remarks
   * #### Conditions
   * This operation can be used to change the resource group of only zone-specific resources.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2018-01-01",
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
   * You can call the MoveResourceGroup operation to move a resource to a different resource group.
   * 
   * @remarks
   * #### Conditions
   * This operation can be used to change the resource group of only zone-specific resources.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Searches for custom access control lists (ACLs).
   * 
   * @param request - SearchCustomLinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCustomLinesResponse
   */
  async searchCustomLinesWithOptions(request: $_model.SearchCustomLinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCustomLinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimestampEnd)) {
      query["CreateTimestampEnd"] = request.createTimestampEnd;
    }

    if (!$dara.isNull(request.createTimestampStart)) {
      query["CreateTimestampStart"] = request.createTimestampStart;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.ipv4)) {
      query["Ipv4"] = request.ipv4;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.updateTimestampEnd)) {
      query["UpdateTimestampEnd"] = request.updateTimestampEnd;
    }

    if (!$dara.isNull(request.updateTimestampStart)) {
      query["UpdateTimestampStart"] = request.updateTimestampStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchCustomLines",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCustomLinesResponse>(await this.callApi(params, req, runtime), new $_model.SearchCustomLinesResponse({}));
  }

  /**
   * Searches for custom access control lists (ACLs).
   * 
   * @param request - SearchCustomLinesRequest
   * @returns SearchCustomLinesResponse
   */
  async searchCustomLines(request: $_model.SearchCustomLinesRequest): Promise<$_model.SearchCustomLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCustomLinesWithOptions(request, runtime);
  }

  /**
   * Sets the recursive resolution proxy for subdomains.
   * 
   * @param request - SetProxyPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetProxyPatternResponse
   */
  async setProxyPatternWithOptions(request: $_model.SetProxyPatternRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetProxyPatternResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetProxyPattern",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetProxyPatternResponse>(await this.callApi(params, req, runtime), new $_model.SetProxyPatternResponse({}));
  }

  /**
   * Sets the recursive resolution proxy for subdomains.
   * 
   * @param request - SetProxyPatternRequest
   * @returns SetProxyPatternResponse
   */
  async setProxyPattern(request: $_model.SetProxyPatternRequest): Promise<$_model.SetProxyPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setProxyPatternWithOptions(request, runtime);
  }

  /**
   * Sets the weight enabling status.
   * 
   * @remarks
   * #### Precautions
   * Built-in authoritative domain names that have configured domain name effective scopes must first be dissociated from the domain name effective scope before they can be deleted.
   * 
   * @param request - SetZoneLbaStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetZoneLbaStatusResponse
   */
  async setZoneLbaStatusWithOptions(request: $_model.SetZoneLbaStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetZoneLbaStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.open)) {
      query["Open"] = request.open;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetZoneLbaStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetZoneLbaStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetZoneLbaStatusResponse({}));
  }

  /**
   * Sets the weight enabling status.
   * 
   * @remarks
   * #### Precautions
   * Built-in authoritative domain names that have configured domain name effective scopes must first be dissociated from the domain name effective scope before they can be deleted.
   * 
   * @param request - SetZoneLbaStatusRequest
   * @returns SetZoneLbaStatusResponse
   */
  async setZoneLbaStatus(request: $_model.SetZoneLbaStatusRequest): Promise<$_model.SetZoneLbaStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setZoneLbaStatusWithOptions(request, runtime);
  }

  /**
   * You can call SetZoneRecordStatus to set the status of a DNS record for a zone. This enables or pauses DNS resolution.
   * 
   * @param request - SetZoneRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetZoneRecordStatusResponse
   */
  async setZoneRecordStatusWithOptions(request: $_model.SetZoneRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetZoneRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetZoneRecordStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetZoneRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetZoneRecordStatusResponse({}));
  }

  /**
   * You can call SetZoneRecordStatus to set the status of a DNS record for a zone. This enables or pauses DNS resolution.
   * 
   * @param request - SetZoneRecordStatusRequest
   * @returns SetZoneRecordStatusResponse
   */
  async setZoneRecordStatus(request: $_model.SetZoneRecordStatusRequest): Promise<$_model.SetZoneRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setZoneRecordStatusWithOptions(request, runtime);
  }

  /**
   * You can call the TagResources operation to add or modify tags for one or more zones in a batch.
   * 
   * @remarks
   * ##### Limits
   * You can add tags only to zone resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.overWrite)) {
      query["OverWrite"] = request.overWrite;
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
      version: "2018-01-01",
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
   * You can call the TagResources operation to add or modify tags for one or more zones in a batch.
   * 
   * @remarks
   * ##### Limits
   * You can add tags only to zone resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * You can call the UntagResources operation to remove tags from one or more zones in PrivateZone.
   * 
   * @remarks
   * #### **Limits**
   * You can remove tags only from zone resources.
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

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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
      action: "UntagResources",
      version: "2018-01-01",
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
   * You can call the UntagResources operation to remove tags from one or more zones in PrivateZone.
   * 
   * @remarks
   * #### **Limits**
   * You can remove tags only from zone resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLineWithOptions(request: $_model.UpdateCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsCategory)) {
      query["DnsCategory"] = request.dnsCategory;
    }

    if (!$dara.isNull(request.ipv4s)) {
      query["Ipv4s"] = request.ipv4s;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomLine",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomLineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomLineResponse({}));
  }

  /**
   * Updates a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLine(request: $_model.UpdateCustomLineRequest): Promise<$_model.UpdateCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  /**
   * You can call the UpdateRecordRemark operation to modify the remarks of a DNS record based on its ID.
   * 
   * @param request - UpdateRecordRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordRemarkResponse
   */
  async updateRecordRemarkWithOptions(request: $_model.UpdateRecordRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecordRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecordRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecordRemarkResponse({}));
  }

  /**
   * You can call the UpdateRecordRemark operation to modify the remarks of a DNS record based on its ID.
   * 
   * @param request - UpdateRecordRemarkRequest
   * @returns UpdateRecordRemarkResponse
   */
  async updateRecordRemark(request: $_model.UpdateRecordRemarkRequest): Promise<$_model.UpdateRecordRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordRemarkWithOptions(request, runtime);
  }

  /**
   * Updates an endpoint.
   * 
   * @param request - UpdateResolverEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResolverEndpointResponse
   */
  async updateResolverEndpointWithOptions(request: $_model.UpdateResolverEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResolverEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResolverEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResolverEndpointResponse({}));
  }

  /**
   * Updates an endpoint.
   * 
   * @param request - UpdateResolverEndpointRequest
   * @returns UpdateResolverEndpointResponse
   */
  async updateResolverEndpoint(request: $_model.UpdateResolverEndpointRequest): Promise<$_model.UpdateResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies a forwarding rule.
   * 
   * @param request - UpdateResolverRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResolverRuleResponse
   */
  async updateResolverRuleWithOptions(request: $_model.UpdateResolverRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResolverRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priorityForwardConfigs)) {
      query["PriorityForwardConfigs"] = request.priorityForwardConfigs;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResolverRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResolverRuleResponse({}));
  }

  /**
   * Modifies a forwarding rule.
   * 
   * @param request - UpdateResolverRuleRequest
   * @returns UpdateResolverRuleResponse
   */
  async updateResolverRule(request: $_model.UpdateResolverRuleRequest): Promise<$_model.UpdateResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResolverRuleWithOptions(request, runtime);
  }

  /**
   * Call the UpdateSyncEcsHostTask operation to add or update a hostname sync task.
   * 
   * @param request - UpdateSyncEcsHostTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSyncEcsHostTaskResponse
   */
  async updateSyncEcsHostTaskWithOptions(request: $_model.UpdateSyncEcsHostTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSyncEcsHostTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSyncEcsHostTaskResponse({}));
  }

  /**
   * Call the UpdateSyncEcsHostTask operation to add or update a hostname sync task.
   * 
   * @param request - UpdateSyncEcsHostTaskRequest
   * @returns UpdateSyncEcsHostTaskResponse
   */
  async updateSyncEcsHostTask(request: $_model.UpdateSyncEcsHostTaskRequest): Promise<$_model.UpdateSyncEcsHostTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * The UpdateZoneRecord operation modifies a DNS record for a zone. You can change properties such as the host record, record type, and weight.
   * 
   * @remarks
   * #### **Notes**
   * Modifications to DNS records in standard zones take effect after the Time to Live (TTL) expires. Modifications to DNS records in acceleration regions take effect immediately and are not affected by the TTL.
   * 
   * @param request - UpdateZoneRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZoneRecordResponse
   */
  async updateZoneRecordWithOptions(request: $_model.UpdateZoneRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateZoneRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateZoneRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateZoneRecordResponse({}));
  }

  /**
   * The UpdateZoneRecord operation modifies a DNS record for a zone. You can change properties such as the host record, record type, and weight.
   * 
   * @remarks
   * #### **Notes**
   * Modifications to DNS records in standard zones take effect after the Time to Live (TTL) expires. Modifications to DNS records in acceleration regions take effect immediately and are not affected by the TTL.
   * 
   * @param request - UpdateZoneRecordRequest
   * @returns UpdateZoneRecordResponse
   */
  async updateZoneRecord(request: $_model.UpdateZoneRecordRequest): Promise<$_model.UpdateZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZoneRecordWithOptions(request, runtime);
  }

  /**
   * Updates the weight value of an authoritative DNS record in Alibaba Cloud DNS PrivateZone.
   * 
   * @remarks
   * Updates the weight value of an authoritative DNS record in Alibaba Cloud DNS PrivateZone.
   * 
   * @param request - UpdateZoneRecordWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZoneRecordWeightResponse
   */
  async updateZoneRecordWeightWithOptions(request: $_model.UpdateZoneRecordWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateZoneRecordWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateZoneRecordWeight",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateZoneRecordWeightResponse>(await this.callApi(params, req, runtime), new $_model.UpdateZoneRecordWeightResponse({}));
  }

  /**
   * Updates the weight value of an authoritative DNS record in Alibaba Cloud DNS PrivateZone.
   * 
   * @remarks
   * Updates the weight value of an authoritative DNS record in Alibaba Cloud DNS PrivateZone.
   * 
   * @param request - UpdateZoneRecordWeightRequest
   * @returns UpdateZoneRecordWeightResponse
   */
  async updateZoneRecordWeight(request: $_model.UpdateZoneRecordWeightRequest): Promise<$_model.UpdateZoneRecordWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZoneRecordWeightWithOptions(request, runtime);
  }

  /**
   * Modifies the remark for a built-in authoritative domain name (zone).
   * 
   * @param request - UpdateZoneRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateZoneRemarkResponse
   */
  async updateZoneRemarkWithOptions(request: $_model.UpdateZoneRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateZoneRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateZoneRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateZoneRemarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateZoneRemarkResponse({}));
  }

  /**
   * Modifies the remark for a built-in authoritative domain name (zone).
   * 
   * @param request - UpdateZoneRemarkRequest
   * @returns UpdateZoneRemarkResponse
   */
  async updateZoneRemark(request: $_model.UpdateZoneRemarkRequest): Promise<$_model.UpdateZoneRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZoneRemarkWithOptions(request, runtime);
  }

}
