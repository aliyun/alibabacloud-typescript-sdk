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
   * Creates an endpoint.
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
   * Creates an endpoint.
   * 
   * @param request - AddResolverEndpointRequest
   * @returns AddResolverEndpointResponse
   */
  async addResolverEndpoint(request: $_model.AddResolverEndpointRequest): Promise<$_model.AddResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a forwarding rule.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * If a virtual private cloud (VPC) serves as both an inbound VPC and an outbound VPC, the IP addresses of external Domain Name System (DNS) servers cannot be the same as the IP addresses of the inbound endpoint in the VPC. The IP addresses of the external DNS servers are specified in the forwarding rule associated with the outbound endpoint in the same VPC. If the IP addresses are the same, the DNS requests sent from the IP addresses of the inbound endpoint are returned to the VPC. This results in resolution failures.
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
   * Creates a forwarding rule.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * If a virtual private cloud (VPC) serves as both an inbound VPC and an outbound VPC, the IP addresses of external Domain Name System (DNS) servers cannot be the same as the IP addresses of the inbound endpoint in the VPC. The IP addresses of the external DNS servers are specified in the forwarding rule associated with the outbound endpoint in the same VPC. If the IP addresses are the same, the DNS requests sent from the IP addresses of the inbound endpoint are returned to the VPC. This results in resolution failures.
   * 
   * @param request - AddResolverRuleRequest
   * @returns AddResolverRuleResponse
   */
  async addResolverRule(request: $_model.AddResolverRuleRequest): Promise<$_model.AddResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addResolverRuleWithOptions(request, runtime);
  }

  /**
   * Adds another account to associate one or more virtual private clouds (VPCs) of the current account with a private zone.
   * 
   * @remarks
   * #### **Limits**
   * *   You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * *   No API operation is provided for sending the verification codes that are required for authorization.
   * #### **Precautions**
   * If you set an effective scope across accounts, bills are settled within the account that is used to perform routine management on built-in authoritative zones.
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
   * Adds another account to associate one or more virtual private clouds (VPCs) of the current account with a private zone.
   * 
   * @remarks
   * #### **Limits**
   * *   You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * *   No API operation is provided for sending the verification codes that are required for authorization.
   * #### **Precautions**
   * If you set an effective scope across accounts, bills are settled within the account that is used to perform routine management on built-in authoritative zones.
   * 
   * @param request - AddUserVpcAuthorizationRequest
   * @returns AddUserVpcAuthorizationResponse
   */
  async addUserVpcAuthorization(request: $_model.AddUserVpcAuthorizationRequest): Promise<$_model.AddUserVpcAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Creates a built-in authoritative zone in the regular module or acceleration module.
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
   * Creates a built-in authoritative zone in the regular module or acceleration module.
   * 
   * @param request - AddZoneRequest
   * @returns AddZoneResponse
   */
  async addZone(request: $_model.AddZoneRequest): Promise<$_model.AddZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneWithOptions(request, runtime);
  }

  /**
   * Adds a Domain Name System (DNS) record for a built-in authoritative zone. Within the effective scope, the intranet DNS records rather than the Internet DNS records take effect for the zone.
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
   * Adds a Domain Name System (DNS) record for a built-in authoritative zone. Within the effective scope, the intranet DNS records rather than the Internet DNS records take effect for the zone.
   * 
   * @param request - AddZoneRecordRequest
   * @returns AddZoneRecordResponse
   */
  async addZoneRecord(request: $_model.AddZoneRecordRequest): Promise<$_model.AddZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneRecordWithOptions(request, runtime);
  }

  /**
   * Associates a forwarding rule with virtual private clouds (VPCs).
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
   * Associates a forwarding rule with virtual private clouds (VPCs).
   * 
   * @param request - BindResolverRuleVpcRequest
   * @returns BindResolverRuleVpcResponse
   */
  async bindResolverRuleVpc(request: $_model.BindResolverRuleVpcRequest): Promise<$_model.BindResolverRuleVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindResolverRuleVpcWithOptions(request, runtime);
  }

  /**
   * Associates or dissociates virtual private clouds (VPCs) from a zone to set the effective scope of the zone.
   * 
   * @remarks
   * ##### [](#)Precautions:
   * We recommend that you set the effective scope of a zone after you configure all Domain Name System (DNS) records. If you set an effective scope before you configure DNS records, the DNS resolution for the zone within the effective scope will fail unless you enable the recursive resolution proxy for subdomain names.
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
   * Associates or dissociates virtual private clouds (VPCs) from a zone to set the effective scope of the zone.
   * 
   * @remarks
   * ##### [](#)Precautions:
   * We recommend that you set the effective scope of a zone after you configure all Domain Name System (DNS) records. If you set an effective scope before you configure DNS records, the DNS resolution for the zone within the effective scope will fail unless you enable the recursive resolution proxy for subdomain names.
   * 
   * @param request - BindZoneVpcRequest
   * @returns BindZoneVpcResponse
   */
  async bindZoneVpc(request: $_model.BindZoneVpcRequest): Promise<$_model.BindZoneVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindZoneVpcWithOptions(request, runtime);
  }

  /**
   * Changes the logical location of a zone.
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
   * Changes the logical location of a zone.
   * 
   * @param request - ChangeZoneDnsGroupRequest
   * @returns ChangeZoneDnsGroupResponse
   */
  async changeZoneDnsGroup(request: $_model.ChangeZoneDnsGroupRequest): Promise<$_model.ChangeZoneDnsGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeZoneDnsGroupWithOptions(request, runtime);
  }

  /**
   * Checks whether a zone name can be added based on a rule.
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
   * Checks whether a zone name can be added based on a rule.
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
   * Deletes an endpoint based on the endpoint ID.
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
   * Deletes an endpoint based on the endpoint ID.
   * 
   * @param request - DeleteResolverEndpointRequest
   * @returns DeleteResolverEndpointResponse
   */
  async deleteResolverEndpoint(request: $_model.DeleteResolverEndpointRequest): Promise<$_model.DeleteResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes a forwarding rule based on the rule ID.
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
   * Deletes a forwarding rule based on the rule ID.
   * 
   * @param request - DeleteResolverRuleRequest
   * @returns DeleteResolverRuleResponse
   */
  async deleteResolverRule(request: $_model.DeleteResolverRuleRequest): Promise<$_model.DeleteResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResolverRuleWithOptions(request, runtime);
  }

  /**
   * Removes an account from the central management of private Domain Name System (DNS) resolution based on the account ID and authorization type.
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
   * Removes an account from the central management of private Domain Name System (DNS) resolution based on the account ID and authorization type.
   * 
   * @param request - DeleteUserVpcAuthorizationRequest
   * @returns DeleteUserVpcAuthorizationResponse
   */
  async deleteUserVpcAuthorization(request: $_model.DeleteUserVpcAuthorizationRequest): Promise<$_model.DeleteUserVpcAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserVpcAuthorizationWithOptions(request, runtime);
  }

  /**
   * Deletes an idle built-in authoritative zone.
   * 
   * @remarks
   * #### [](#)Precautions
   * If you want to delete a built-in authoritative zone whose effective scope is configured, you must disassociate the zone from the effective scope first.
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
   * Deletes an idle built-in authoritative zone.
   * 
   * @remarks
   * #### [](#)Precautions
   * If you want to delete a built-in authoritative zone whose effective scope is configured, you must disassociate the zone from the effective scope first.
   * 
   * @param request - DeleteZoneRequest
   * @returns DeleteZoneResponse
   */
  async deleteZone(request: $_model.DeleteZoneRequest): Promise<$_model.DeleteZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteZoneWithOptions(request, runtime);
  }

  /**
   * Deletes a Domain Name System (DNS) record based on the ID of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * Deleted DNS records cannot be restored. Exercise caution when you perform this operation.
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
   * Deletes a Domain Name System (DNS) record based on the ID of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * Deleted DNS records cannot be restored. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteZoneRecordRequest
   * @returns DeleteZoneRecordResponse
   */
  async deleteZoneRecord(request: $_model.DeleteZoneRecordRequest): Promise<$_model.DeleteZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteZoneRecordWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of Private DNS. Operation logs record operations in modules such as the built-in authoritative module, cache module, forward module, and service address module and record the queries for Domain Name System (DNS) records. You can query operation logs by operation or operation content.
   * 
   * @remarks
   * #### **Precautions**
   * You can query the operation logs of Private DNS that are generated within the last six months.
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
   * Queries the operation logs of Private DNS. Operation logs record operations in modules such as the built-in authoritative module, cache module, forward module, and service address module and record the queries for Domain Name System (DNS) records. You can query operation logs by operation or operation content.
   * 
   * @remarks
   * #### **Precautions**
   * You can query the operation logs of Private DNS that are generated within the last six months.
   * 
   * @param request - DescribeChangeLogsRequest
   * @returns DescribeChangeLogsResponse
   */
  async describeChangeLogs(request: $_model.DescribeChangeLogsRequest): Promise<$_model.DescribeChangeLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChangeLogsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a custom line.
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
   * Queries the information about a custom line.
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
   * Queries a list of regions for selection based on the scenario and virtual private cloud (VPC) type.
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
   * Queries a list of regions for selection based on the scenario and virtual private cloud (VPC) type.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Domain Name System (DNS) requests based on conditions such as the time range.
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
   * Queries the information about Domain Name System (DNS) requests based on conditions such as the time range.
   * 
   * @param request - DescribeRequestGraphRequest
   * @returns DescribeRequestGraphResponse
   */
  async describeRequestGraph(request: $_model.DescribeRequestGraphRequest): Promise<$_model.DescribeRequestGraphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRequestGraphWithOptions(request, runtime);
  }

  /**
   * Queries a list of available zones.
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
   * Queries a list of available zones.
   * 
   * @param request - DescribeResolverAvailableZonesRequest
   * @returns DescribeResolverAvailableZonesResponse
   */
  async describeResolverAvailableZones(request: $_model.DescribeResolverAvailableZonesRequest): Promise<$_model.DescribeResolverAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverAvailableZonesWithOptions(request, runtime);
  }

  /**
   * Queries the information about an endpoint based on the endpoint ID.
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
   * Queries the information about an endpoint based on the endpoint ID.
   * 
   * @param request - DescribeResolverEndpointRequest
   * @returns DescribeResolverEndpointResponse
   */
  async describeResolverEndpoint(request: $_model.DescribeResolverEndpointRequest): Promise<$_model.DescribeResolverEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverEndpointWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoints.
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
   * Queries a list of endpoints.
   * 
   * @param request - DescribeResolverEndpointsRequest
   * @returns DescribeResolverEndpointsResponse
   */
  async describeResolverEndpoints(request: $_model.DescribeResolverEndpointsRequest): Promise<$_model.DescribeResolverEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a forwarding rule based on the ID of the forwarding rule.
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
   * Queries the information about a forwarding rule based on the ID of the forwarding rule.
   * 
   * @param request - DescribeResolverRuleRequest
   * @returns DescribeResolverRuleResponse
   */
  async describeResolverRule(request: $_model.DescribeResolverRuleRequest): Promise<$_model.DescribeResolverRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverRuleWithOptions(request, runtime);
  }

  /**
   * Queries a list of forwarding rules.
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
   * Queries a list of forwarding rules.
   * 
   * @param request - DescribeResolverRulesRequest
   * @returns DescribeResolverRulesResponse
   */
  async describeResolverRules(request: $_model.DescribeResolverRulesRequest): Promise<$_model.DescribeResolverRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResolverRulesWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on Domain Name System (DNS) requests received on the previous day, including the top three zones and virtual private clouds (VPCs) with the largest number of DNS requests.
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
   * Queries the statistics on Domain Name System (DNS) requests received on the previous day, including the top three zones and virtual private clouds (VPCs) with the largest number of DNS requests.
   * 
   * @param request - DescribeStatisticSummaryRequest
   * @returns DescribeStatisticSummaryResponse
   */
  async describeStatisticSummary(request: $_model.DescribeStatisticSummaryRequest): Promise<$_model.DescribeStatisticSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStatisticSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a hostname synchronization task based on a zone ID.
   * 
   * @remarks
   * You can call the DescribeSyncEcsHostTask operation to query the information about a hostname synchronization task based on a zone ID.
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
   * Queries the information about a hostname synchronization task based on a zone ID.
   * 
   * @remarks
   * You can call the DescribeSyncEcsHostTask operation to query the information about a hostname synchronization task based on a zone ID.
   * 
   * @param request - DescribeSyncEcsHostTaskRequest
   * @returns DescribeSyncEcsHostTaskResponse
   */
  async describeSyncEcsHostTask(request: $_model.DescribeSyncEcsHostTaskRequest): Promise<$_model.DescribeSyncEcsHostTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### **Precautions**
   * You can call this API operation to query the information about tags added only to zones.
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
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### **Precautions**
   * You can call this API operation to query the information about tags added only to zones.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Query the current user\\"s service status, such as whether the service is activated, whether there are any unpaid fees, etc.
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
   * Query the current user\\"s service status, such as whether the service is activated, whether there are any unpaid fees, etc.
   * 
   * @param request - DescribeUserServiceStatusRequest
   * @returns DescribeUserServiceStatusResponse
   */
  async describeUserServiceStatus(request: $_model.DescribeUserServiceStatusRequest): Promise<$_model.DescribeUserServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of accounts whose virtual private clouds (VPCs) are associated with a private zone.
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
   * Queries a list of accounts whose virtual private clouds (VPCs) are associated with a private zone.
   * 
   * @param request - DescribeUserVpcAuthorizationsRequest
   * @returns DescribeUserVpcAuthorizationsResponse
   */
  async describeUserVpcAuthorizations(request: $_model.DescribeUserVpcAuthorizationsRequest): Promise<$_model.DescribeUserVpcAuthorizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserVpcAuthorizationsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a built-in authoritative zone, such as the virtual private clouds (VPCs) that are associated with the zone.
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
   * Queries the information about a built-in authoritative zone, such as the virtual private clouds (VPCs) that are associated with the zone.
   * 
   * @param request - DescribeZoneInfoRequest
   * @returns DescribeZoneInfoResponse
   */
  async describeZoneInfo(request: $_model.DescribeZoneInfoRequest): Promise<$_model.DescribeZoneInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Domain Name System (DNS) record.
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
   * Queries the information about a Domain Name System (DNS) record.
   * 
   * @param request - DescribeZoneRecordRequest
   * @returns DescribeZoneRecordResponse
   */
  async describeZoneRecord(request: $_model.DescribeZoneRecordRequest): Promise<$_model.DescribeZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneRecordWithOptions(request, runtime);
  }

  /**
   * Queries a list of Domain Name System (DNS) records.
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
   * Queries a list of Domain Name System (DNS) records.
   * 
   * @param request - DescribeZoneRecordsRequest
   * @returns DescribeZoneRecordsResponse
   */
  async describeZoneRecords(request: $_model.DescribeZoneRecordsRequest): Promise<$_model.DescribeZoneRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones within the current account and a list of virtual private clouds (VPCs) associated with the zones.
   * 
   * @remarks
   * We recommend that you do not call this API operation due to its poor performance. Instead, you can call the DescribeZones operation to query a list of zones. If you want to query the information about VPCs with which a zone is associated, you can call the DescribeZoneInfo operation based on the zone ID.
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
   * Queries a list of zones within the current account and a list of virtual private clouds (VPCs) associated with the zones.
   * 
   * @remarks
   * We recommend that you do not call this API operation due to its poor performance. Instead, you can call the DescribeZones operation to query a list of zones. If you want to query the information about VPCs with which a zone is associated, you can call the DescribeZoneInfo operation based on the zone ID.
   * 
   * @param request - DescribeZoneVpcTreeRequest
   * @returns DescribeZoneVpcTreeResponse
   */
  async describeZoneVpcTree(request: $_model.DescribeZoneVpcTreeRequest): Promise<$_model.DescribeZoneVpcTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZoneVpcTreeWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones within the current account.
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
   * Queries a list of zones within the current account.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to query tags added only to zones.
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
   * Queries a list of tags added to zones.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to query tags added only to zones.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes a resource group.
   * 
   * @remarks
   * #### [](#)Precautions
   * You can call this API operation to change a resource group only for a zone.
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
   * Changes a resource group.
   * 
   * @remarks
   * #### [](#)Precautions
   * You can call this API operation to change a resource group only for a zone.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom lines.
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
   * Queries a list of custom lines.
   * 
   * @param request - SearchCustomLinesRequest
   * @returns SearchCustomLinesResponse
   */
  async searchCustomLines(request: $_model.SearchCustomLinesRequest): Promise<$_model.SearchCustomLinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchCustomLinesWithOptions(request, runtime);
  }

  /**
   * Enables the recursive resolution proxy for subdomain names.
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
   * Enables the recursive resolution proxy for subdomain names.
   * 
   * @param request - SetProxyPatternRequest
   * @returns SetProxyPatternResponse
   */
  async setProxyPattern(request: $_model.SetProxyPatternRequest): Promise<$_model.SetProxyPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setProxyPatternWithOptions(request, runtime);
  }

  /**
   * Enables or disables a Domain Name System (DNS) record.
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
   * Enables or disables a Domain Name System (DNS) record.
   * 
   * @param request - SetZoneRecordStatusRequest
   * @returns SetZoneRecordStatusResponse
   */
  async setZoneRecordStatus(request: $_model.SetZoneRecordStatusRequest): Promise<$_model.SetZoneRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setZoneRecordStatusWithOptions(request, runtime);
  }

  /**
   * Adds or modifies tags for zones.
   * 
   * @remarks
   * ##### [](#)Precautions
   * You can configure tags only for zones.
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
   * Adds or modifies tags for zones.
   * 
   * @remarks
   * ##### [](#)Precautions
   * You can configure tags only for zones.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes the tags of multiple zones at a time.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to remove tags added only to zones.
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
   * Removes the tags of multiple zones at a time.
   * 
   * @remarks
   * #### [](#)**Precautions**
   * You can call this API operation to remove tags added only to zones.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLineWithOptions(request: $_model.UpdateCustomLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomLineResponse> {
    request.validate();
    let query = { };
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
   * Modifies a custom line.
   * 
   * @param request - UpdateCustomLineRequest
   * @returns UpdateCustomLineResponse
   */
  async updateCustomLine(request: $_model.UpdateCustomLineRequest): Promise<$_model.UpdateCustomLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a Domain Name System (DNS) record based on the record ID.
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
   * Modifies the description of a Domain Name System (DNS) record based on the record ID.
   * 
   * @param request - UpdateRecordRemarkRequest
   * @returns UpdateRecordRemarkResponse
   */
  async updateRecordRemark(request: $_model.UpdateRecordRemarkRequest): Promise<$_model.UpdateRecordRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies an endpoint.
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
   * Modifies an endpoint.
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
   * Adds or updates a hostname synchronization task.
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
   * Adds or updates a hostname synchronization task.
   * 
   * @param request - UpdateSyncEcsHostTaskRequest
   * @returns UpdateSyncEcsHostTaskResponse
   */
  async updateSyncEcsHostTask(request: $_model.UpdateSyncEcsHostTaskRequest): Promise<$_model.UpdateSyncEcsHostTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSyncEcsHostTaskWithOptions(request, runtime);
  }

  /**
   * Modifies a Domain Name System (DNS) record of a zone, including the hostname, record value, and weight value of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * The DNS record modification for a zone in the regular module takes effect only after the time to live (TTL) expires. The DNS record modification for a zone in the acceleration module takes effect immediately.
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
   * Modifies a Domain Name System (DNS) record of a zone, including the hostname, record value, and weight value of the DNS record.
   * 
   * @remarks
   * #### **Precautions**
   * The DNS record modification for a zone in the regular module takes effect only after the time to live (TTL) expires. The DNS record modification for a zone in the acceleration module takes effect immediately.
   * 
   * @param request - UpdateZoneRecordRequest
   * @returns UpdateZoneRecordResponse
   */
  async updateZoneRecord(request: $_model.UpdateZoneRecordRequest): Promise<$_model.UpdateZoneRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZoneRecordWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a built-in authoritative zone.
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
   * Modifies the description of a built-in authoritative zone.
   * 
   * @param request - UpdateZoneRemarkRequest
   * @returns UpdateZoneRemarkResponse
   */
  async updateZoneRemark(request: $_model.UpdateZoneRemarkRequest): Promise<$_model.UpdateZoneRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateZoneRemarkWithOptions(request, runtime);
  }

}
