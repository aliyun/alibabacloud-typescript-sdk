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
    this._endpoint = this.getEndpoint("nlb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds backend servers to a specified server group.
   * 
   * @param request - AddServersToServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroupWithOptions(request: $_model.AddServersToServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddServersToServerGroupResponse> {
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

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.servers)) {
      bodyFlat["Servers"] = request.servers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddServersToServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddServersToServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddServersToServerGroupResponse({}));
  }

  /**
   * Adds backend servers to a specified server group.
   * 
   * @param request - AddServersToServerGroupRequest
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroup(request: $_model.AddServersToServerGroupRequest): Promise<$_model.AddServersToServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  /**
   * Associates additional certificates with a listener that uses SSL over TCP.
   * 
   * @remarks
   * *AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If the listener is in the **Associating** state, the additional certificates are being associated.
   * *   If the listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: $_model.AssociateAdditionalCertificatesWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
   * Associates additional certificates with a listener that uses SSL over TCP.
   * 
   * @remarks
   * *AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If the listener is in the **Associating** state, the additional certificates are being associated.
   * *   If the listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: $_model.AssociateAdditionalCertificatesWithListenerRequest): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * Associates an Internet Shared Bandwidth instance with a Network Load Balancer (NLB) instance.
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancerWithOptions(request: $_model.AttachCommonBandwidthPackageToLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachCommonBandwidthPackageToLoadBalancerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachCommonBandwidthPackageToLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachCommonBandwidthPackageToLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.AttachCommonBandwidthPackageToLoadBalancerResponse({}));
  }

  /**
   * Associates an Internet Shared Bandwidth instance with a Network Load Balancer (NLB) instance.
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancer(request: $_model.AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<$_model.AttachCommonBandwidthPackageToLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachCommonBandwidthPackageToLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Adds the elastic IP address (EIP) and virtual IP address (VIP) of a zone to the DNS record.
   * 
   * @remarks
   * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2411999.html) API operation.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZonesWithOptions(request: $_model.CancelShiftLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelShiftLoadBalancerZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new $_model.CancelShiftLoadBalancerZonesResponse({}));
  }

  /**
   * Adds the elastic IP address (EIP) and virtual IP address (VIP) of a zone to the DNS record.
   * 
   * @remarks
   * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2411999.html) API operation.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZones(request: $_model.CancelShiftLoadBalancerZonesRequest): Promise<$_model.CancelShiftLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Creates a TCP or UDP listener, or a listener that uses SSL over TCP for a Network Load Balancer (NLB) instance.
   * 
   * @param tmpReq - CreateListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListenerResponse
   */
  async createListenerWithOptions(tmpReq: $_model.CreateListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateListenerResponse> {
    tmpReq.validate();
    let request = new $_model.CreateListenerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.proxyProtocolV2Config)) {
      request.proxyProtocolV2ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proxyProtocolV2Config, "ProxyProtocolV2Config", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!$dara.isNull(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!$dara.isNull(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!$dara.isNull(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!$dara.isNull(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endPort)) {
      body["EndPort"] = request.endPort;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!$dara.isNull(request.listenerPort)) {
      body["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      body["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!$dara.isNull(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!$dara.isNull(request.proxyProtocolV2ConfigShrink)) {
      body["ProxyProtocolV2Config"] = request.proxyProtocolV2ConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.startPort)) {
      body["StartPort"] = request.startPort;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateListenerResponse({}));
  }

  /**
   * Creates a TCP or UDP listener, or a listener that uses SSL over TCP for a Network Load Balancer (NLB) instance.
   * 
   * @param request - CreateListenerRequest
   * @returns CreateListenerResponse
   */
  async createListener(request: $_model.CreateListenerRequest): Promise<$_model.CreateListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
   * Creates a Network Load Balancer (NLB) instance in a specified region.
   * 
   * @remarks
   *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
   * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) to query the status of an NLB instance.
   *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
   *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      body["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deletionProtectionConfig)) {
      bodyFlat["DeletionProtectionConfig"] = request.deletionProtectionConfig;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerBillingConfig)) {
      bodyFlat["LoadBalancerBillingConfig"] = request.loadBalancerBillingConfig;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.loadBalancerType)) {
      body["LoadBalancerType"] = request.loadBalancerType;
    }

    if (!$dara.isNull(request.modificationProtectionConfig)) {
      bodyFlat["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2022-04-30",
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
   * Creates a Network Load Balancer (NLB) instance in a specified region.
   * 
   * @remarks
   *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
   * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) to query the status of an NLB instance.
   *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
   *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates a custom security policy for a TCP/SSL listener.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicyWithOptions(request: $_model.CreateSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityPolicyResponse({}));
  }

  /**
   * Creates a custom security policy for a TCP/SSL listener.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicy(request: $_model.CreateSecurityPolicyRequest): Promise<$_model.CreateSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a server group in a region.
   * 
   * @remarks
   * *CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the creation status of the task.
   *    - If the task is in the **Succeeded** status, the server group is created.
   * -    If the task is in the **Processing** status, the server group is being created.
   * 
   * @param request - CreateServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerGroupResponse
   */
  async createServerGroupWithOptions(request: $_model.CreateServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressIPVersion)) {
      body["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.anyPortEnabled)) {
      body["AnyPortEnabled"] = request.anyPortEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!$dara.isNull(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!$dara.isNull(request.ipVersionAffinityMode)) {
      body["IpVersionAffinityMode"] = request.ipVersionAffinityMode;
    }

    if (!$dara.isNull(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    if (!$dara.isNull(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateServerGroupResponse({}));
  }

  /**
   * Creates a server group in a region.
   * 
   * @remarks
   * *CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the creation status of the task.
   *    - If the task is in the **Succeeded** status, the server group is created.
   * -    If the task is in the **Processing** status, the server group is being created.
   * 
   * @param request - CreateServerGroupRequest
   * @returns CreateServerGroupResponse
   */
  async createServerGroup(request: $_model.CreateServerGroupRequest): Promise<$_model.CreateServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a Network Load Balancer (NLB) listener.
   * 
   * @param request - DeleteListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListenerResponse
   */
  async deleteListenerWithOptions(request: $_model.DeleteListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteListenerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteListenerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteListenerResponse({}));
  }

  /**
   * Deletes a Network Load Balancer (NLB) listener.
   * 
   * @param request - DeleteListenerRequest
   * @returns DeleteListenerResponse
   */
  async deleteListener(request: $_model.DeleteListenerRequest): Promise<$_model.DeleteListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
   * Deletes a Network Load Balancer (NLB) instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: $_model.DeleteLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancer",
      version: "2022-04-30",
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
   * Deletes a Network Load Balancer (NLB) instance.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: $_model.DeleteLoadBalancerRequest): Promise<$_model.DeleteLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Deletes a custom TLS security policy from a Network Load Balancer (NLB) instance.
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicyWithOptions(request: $_model.DeleteSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityPolicyResponse> {
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

    if (!$dara.isNull(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityPolicyResponse({}));
  }

  /**
   * Deletes a custom TLS security policy from a Network Load Balancer (NLB) instance.
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicy(request: $_model.DeleteSecurityPolicyRequest): Promise<$_model.DeleteSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a Network Load Balancer (NLB) server group.
   * 
   * @remarks
   * You can delete server groups that are not associated with listeners.
   * 
   * @param request - DeleteServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroupWithOptions(request: $_model.DeleteServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServerGroupResponse> {
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

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServerGroupResponse({}));
  }

  /**
   * Deletes a Network Load Balancer (NLB) server group.
   * 
   * @remarks
   * You can delete server groups that are not associated with listeners.
   * 
   * @param request - DeleteServerGroupRequest
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroup(request: $_model.DeleteServerGroupRequest): Promise<$_model.DeleteServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServerGroupWithOptions(request, runtime);
  }

  /**
   * Queries the storage configurations of fine-grained monitoring.
   * 
   * @param request - DescribeHdMonitorRegionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHdMonitorRegionConfigResponse
   */
  async describeHdMonitorRegionConfigWithOptions(request: $_model.DescribeHdMonitorRegionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHdMonitorRegionConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHdMonitorRegionConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHdMonitorRegionConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHdMonitorRegionConfigResponse({}));
  }

  /**
   * Queries the storage configurations of fine-grained monitoring.
   * 
   * @param request - DescribeHdMonitorRegionConfigRequest
   * @returns DescribeHdMonitorRegionConfigResponse
   */
  async describeHdMonitorRegionConfig(request: $_model.DescribeHdMonitorRegionConfigRequest): Promise<$_model.DescribeHdMonitorRegionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHdMonitorRegionConfigWithOptions(request, runtime);
  }

  /**
   * Queries regions that support Network Load Balancer (NLB) instances.
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

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
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
      action: "DescribeRegions",
      version: "2022-04-30",
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
   * Queries regions that support Network Load Balancer (NLB) instances.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the zones of a region in which a Network Load Balancer (NLB) instance is deployed.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2022-04-30",
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
   * Queries the zones of a region in which a Network Load Balancer (NLB) instance is deployed.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Disassociates a Network Load Balancer (NLB) instance from an Internet Shared Bandwidth instance.
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancerWithOptions(request: $_model.DetachCommonBandwidthPackageFromLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachCommonBandwidthPackageFromLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachCommonBandwidthPackageFromLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.DetachCommonBandwidthPackageFromLoadBalancerResponse({}));
  }

  /**
   * Disassociates a Network Load Balancer (NLB) instance from an Internet Shared Bandwidth instance.
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancer(request: $_model.DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<$_model.DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachCommonBandwidthPackageFromLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Changes the public IPv6 address of a dual-stack Network Load Balancer (NLB) instance to a private IPv6 address.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6InternetWithOptions(request: $_model.DisableLoadBalancerIpv6InternetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableLoadBalancerIpv6InternetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new $_model.DisableLoadBalancerIpv6InternetResponse({}));
  }

  /**
   * Changes the public IPv6 address of a dual-stack Network Load Balancer (NLB) instance to a private IPv6 address.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6Internet(request: $_model.DisableLoadBalancerIpv6InternetRequest): Promise<$_model.DisableLoadBalancerIpv6InternetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * Disassociates additional certificates from a listener that uses SSL over TCP.
   * 
   * @remarks
   * *DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
   * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
   * 
   * @param request - DisassociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListenerWithOptions(request: $_model.DisassociateAdditionalCertificatesWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateAdditionalCertificatesWithListenerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
   * Disassociates additional certificates from a listener that uses SSL over TCP.
   * 
   * @remarks
   * *DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
   * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
   * 
   * @param request - DisassociateAdditionalCertificatesWithListenerRequest
   * @returns DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListener(request: $_model.DisassociateAdditionalCertificatesWithListenerRequest): Promise<$_model.DisassociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * Changes the network type of the IPv6 address of a dual-stack Network Load Balancer (NLB) instance from internal-facing to Internet-facing.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6InternetWithOptions(request: $_model.EnableLoadBalancerIpv6InternetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableLoadBalancerIpv6InternetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new $_model.EnableLoadBalancerIpv6InternetResponse({}));
  }

  /**
   * Changes the network type of the IPv6 address of a dual-stack Network Load Balancer (NLB) instance from internal-facing to Internet-facing.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6Internet(request: $_model.EnableLoadBalancerIpv6InternetRequest): Promise<$_model.EnableLoadBalancerIpv6InternetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * Queries the result of an asynchronous operation performed on a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobStatusResponse
   */
  async getJobStatusWithOptions(request: $_model.GetJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetJobStatusResponse({}));
  }

  /**
   * Queries the result of an asynchronous operation performed on a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetJobStatusRequest
   * @returns GetJobStatusResponse
   */
  async getJobStatus(request: $_model.GetJobStatusRequest): Promise<$_model.GetJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttributeWithOptions(request: $_model.GetListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetListenerAttributeResponse({}));
  }

  /**
   * Queries the details of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttribute(request: $_model.GetListenerAttributeRequest): Promise<$_model.GetListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the health check status of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatusWithOptions(request: $_model.GetListenerHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetListenerHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetListenerHealthStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetListenerHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetListenerHealthStatusResponse({}));
  }

  /**
   * Queries the health check status of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatus(request: $_model.GetListenerHealthStatusRequest): Promise<$_model.GetListenerHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getListenerHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details about a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttributeWithOptions(request: $_model.GetLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoadBalancerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetLoadBalancerAttributeResponse({}));
  }

  /**
   * Queries the details about a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttribute(request: $_model.GetLoadBalancerAttributeRequest): Promise<$_model.GetLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the results of multiple asynchronous operations performed on a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListAsynJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsynJobsResponse
   */
  async listAsynJobsWithOptions(request: $_model.ListAsynJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsynJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsynJobs",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsynJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListAsynJobsResponse({}));
  }

  /**
   * Queries the results of multiple asynchronous operations performed on a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListAsynJobsRequest
   * @returns ListAsynJobsResponse
   */
  async listAsynJobs(request: $_model.ListAsynJobsRequest): Promise<$_model.ListAsynJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsynJobsWithOptions(request, runtime);
  }

  /**
   * Queries the server certificate of a TCP/SSL listener.
   * 
   * @param request - ListListenerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificatesWithOptions(request: $_model.ListListenerCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenerCertificatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListenerCertificates",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenerCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListListenerCertificatesResponse({}));
  }

  /**
   * Queries the server certificate of a TCP/SSL listener.
   * 
   * @param request - ListListenerCertificatesRequest
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificates(request: $_model.ListListenerCertificatesRequest): Promise<$_model.ListListenerCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries listeners added to a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenersResponse
   */
  async listListenersWithOptions(request: $_model.ListListenersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
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

    if (!$dara.isNull(request.secSensorEnabled)) {
      query["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListeners",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListenersResponse>(await this.callApi(params, req, runtime), new $_model.ListListenersResponse({}));
  }

  /**
   * Queries listeners added to a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenersRequest
   * @returns ListListenersResponse
   */
  async listListeners(request: $_model.ListListenersRequest): Promise<$_model.ListListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about Network Load Balancer (NLB) instances.
   * 
   * @param request - ListLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancersWithOptions(request: $_model.ListLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLoadBalancersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.DNSName)) {
      query["DNSName"] = request.DNSName;
    }

    if (!$dara.isNull(request.ipv6AddressType)) {
      query["Ipv6AddressType"] = request.ipv6AddressType;
    }

    if (!$dara.isNull(request.loadBalancerBusinessStatus)) {
      query["LoadBalancerBusinessStatus"] = request.loadBalancerBusinessStatus;
    }

    if (!$dara.isNull(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!$dara.isNull(request.loadBalancerNames)) {
      query["LoadBalancerNames"] = request.loadBalancerNames;
    }

    if (!$dara.isNull(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!$dara.isNull(request.loadBalancerType)) {
      query["LoadBalancerType"] = request.loadBalancerType;
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

    if (!$dara.isNull(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLoadBalancers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.ListLoadBalancersResponse({}));
  }

  /**
   * Queries the basic information about Network Load Balancer (NLB) instances.
   * 
   * @param request - ListLoadBalancersRequest
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancers(request: $_model.ListLoadBalancersRequest): Promise<$_model.ListLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries the TLS security policies set for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityPolicyResponse
   */
  async listSecurityPolicyWithOptions(request: $_model.ListSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityPolicyIds)) {
      body["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    if (!$dara.isNull(request.securityPolicyNames)) {
      body["SecurityPolicyNames"] = request.securityPolicyNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityPolicyResponse({}));
  }

  /**
   * Queries the TLS security policies set for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListSecurityPolicyRequest
   * @returns ListSecurityPolicyResponse
   */
  async listSecurityPolicy(request: $_model.ListSecurityPolicyRequest): Promise<$_model.ListSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Queries servers in a server group of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServersWithOptions(request: $_model.ListServerGroupServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerGroupServersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.serverIds)) {
      body["ServerIds"] = request.serverIds;
    }

    if (!$dara.isNull(request.serverIps)) {
      body["ServerIps"] = request.serverIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServerGroupServers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServerGroupServersResponse>(await this.callApi(params, req, runtime), new $_model.ListServerGroupServersResponse({}));
  }

  /**
   * Queries servers in a server group of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupServersRequest
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServers(request: $_model.ListServerGroupServersRequest): Promise<$_model.ListServerGroupServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerGroupServersWithOptions(request, runtime);
  }

  /**
   * Queries the server groups of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupsResponse
   */
  async listServerGroupsWithOptions(request: $_model.ListServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverGroupIds)) {
      body["ServerGroupIds"] = request.serverGroupIds;
    }

    if (!$dara.isNull(request.serverGroupNames)) {
      body["ServerGroupNames"] = request.serverGroupNames;
    }

    if (!$dara.isNull(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServerGroups",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListServerGroupsResponse({}));
  }

  /**
   * Queries the server groups of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupsRequest
   * @returns ListServerGroupsResponse
   */
  async listServerGroups(request: $_model.ListServerGroupsRequest): Promise<$_model.ListServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the default TLS policy.
   * 
   * @param request - ListSystemSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemSecurityPolicyResponse
   */
  async listSystemSecurityPolicyWithOptions(request: $_model.ListSystemSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemSecurityPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemSecurityPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemSecurityPolicyResponse({}));
  }

  /**
   * Queries the default TLS policy.
   * 
   * @param request - ListSystemSecurityPolicyRequest
   * @returns ListSystemSecurityPolicyResponse
   */
  async listSystemSecurityPolicy(request: $_model.ListSystemSecurityPolicyRequest): Promise<$_model.ListSystemSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
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
      action: "ListTagResources",
      version: "2022-04-30",
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
   * Queries the tags of a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Associates a security group with a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html).
   * *   An NLB instance can be associated with up to four security groups.
   * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation.
   * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   *     *   If the task is in the **Succeeded** state, the security group is associated.
   *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroupWithOptions(request: $_model.LoadBalancerJoinSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadBalancerJoinSecurityGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadBalancerJoinSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoadBalancerJoinSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.LoadBalancerJoinSecurityGroupResponse({}));
  }

  /**
   * Associates a security group with a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html).
   * *   An NLB instance can be associated with up to four security groups.
   * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation.
   * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   *     *   If the task is in the **Succeeded** state, the security group is associated.
   *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroup(request: $_model.LoadBalancerJoinSecurityGroupRequest): Promise<$_model.LoadBalancerJoinSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadBalancerJoinSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Disassociates a Network Load Balancer (NLB) instance from a security group.
   * 
   * @remarks
   * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   * *   If the task is in the **Succeeded** state, the security group is disassociated.
   * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroupWithOptions(request: $_model.LoadBalancerLeaveSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadBalancerLeaveSecurityGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadBalancerLeaveSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoadBalancerLeaveSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.LoadBalancerLeaveSecurityGroupResponse({}));
  }

  /**
   * Disassociates a Network Load Balancer (NLB) instance from a security group.
   * 
   * @remarks
   * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   * *   If the task is in the **Succeeded** state, the security group is disassociated.
   * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroup(request: $_model.LoadBalancerLeaveSecurityGroupRequest): Promise<$_model.LoadBalancerLeaveSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadBalancerLeaveSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Modify the group of resource.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2022-04-30",
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
   * Modify the group of resource.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes server groups from a Network Load Balancer (NLB) instance.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroupWithOptions(request: $_model.RemoveServersFromServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveServersFromServerGroupResponse> {
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

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveServersFromServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveServersFromServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveServersFromServerGroupResponse({}));
  }

  /**
   * Deletes server groups from a Network Load Balancer (NLB) instance.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroup(request: $_model.RemoveServersFromServerGroupRequest): Promise<$_model.RemoveServersFromServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  /**
   * Configures storage for fine-grained monitoring.
   * 
   * @remarks
   * This operation is used to configure a data warehouse for the fine-grained monitoring feature. If a listener in the current region has fine-grained monitoring enabled, you must disable fine-grained monitoring before you can configure a warehouse.
   * 
   * @param request - SetHdMonitorRegionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHdMonitorRegionConfigResponse
   */
  async setHdMonitorRegionConfigWithOptions(request: $_model.SetHdMonitorRegionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetHdMonitorRegionConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!$dara.isNull(request.metricStore)) {
      query["MetricStore"] = request.metricStore;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetHdMonitorRegionConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetHdMonitorRegionConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetHdMonitorRegionConfigResponse({}));
  }

  /**
   * Configures storage for fine-grained monitoring.
   * 
   * @remarks
   * This operation is used to configure a data warehouse for the fine-grained monitoring feature. If a listener in the current region has fine-grained monitoring enabled, you must disable fine-grained monitoring before you can configure a warehouse.
   * 
   * @param request - SetHdMonitorRegionConfigRequest
   * @returns SetHdMonitorRegionConfigResponse
   */
  async setHdMonitorRegionConfig(request: $_model.SetHdMonitorRegionConfigRequest): Promise<$_model.SetHdMonitorRegionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setHdMonitorRegionConfigWithOptions(request, runtime);
  }

  /**
   * Enables a Network Load Balancer (NLB) listener.
   * 
   * @param request - StartListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartListenerResponse
   */
  async startListenerWithOptions(request: $_model.StartListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartListenerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartListenerResponse>(await this.callApi(params, req, runtime), new $_model.StartListenerResponse({}));
  }

  /**
   * Enables a Network Load Balancer (NLB) listener.
   * 
   * @param request - StartListenerRequest
   * @returns StartListenerResponse
   */
  async startListener(request: $_model.StartListenerRequest): Promise<$_model.StartListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  /**
   * Removes the elastic IP address (EIP) or virtual IP address (VIP) used in a zone from the DNS record.
   * 
   * @remarks
   * >  If the NLB instance is deployed in only one zone, you cannot remove the EIP or VIP from the DNS record.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZonesWithOptions(request: $_model.StartShiftLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartShiftLoadBalancerZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new $_model.StartShiftLoadBalancerZonesResponse({}));
  }

  /**
   * Removes the elastic IP address (EIP) or virtual IP address (VIP) used in a zone from the DNS record.
   * 
   * @remarks
   * >  If the NLB instance is deployed in only one zone, you cannot remove the EIP or VIP from the DNS record.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZones(request: $_model.StartShiftLoadBalancerZonesRequest): Promise<$_model.StartShiftLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Stops a listener of a Network Load Balancer (NLB) instance.
   * 
   * @param request - StopListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopListenerResponse
   */
  async stopListenerWithOptions(request: $_model.StopListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopListenerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopListenerResponse>(await this.callApi(params, req, runtime), new $_model.StopListenerResponse({}));
  }

  /**
   * Stops a listener of a Network Load Balancer (NLB) instance.
   * 
   * @param request - StopListenerRequest
   * @returns StopListenerResponse
   */
  async stopListener(request: $_model.StopListenerRequest): Promise<$_model.StopListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  /**
   * Adds tags to specified resources.
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
      version: "2022-04-30",
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
   * Adds tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
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
      version: "2022-04-30",
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
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a listener, such as the name and the idle connection timeout period.
   * 
   * @param tmpReq - UpdateListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttributeWithOptions(tmpReq: $_model.UpdateListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateListenerAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateListenerAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.proxyProtocolV2Config)) {
      request.proxyProtocolV2ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proxyProtocolV2Config, "ProxyProtocolV2Config", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!$dara.isNull(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!$dara.isNull(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!$dara.isNull(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!$dara.isNull(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!$dara.isNull(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!$dara.isNull(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!$dara.isNull(request.proxyProtocolV2ConfigShrink)) {
      body["ProxyProtocolV2Config"] = request.proxyProtocolV2ConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateListenerAttributeResponse({}));
  }

  /**
   * Updates the attributes of a listener, such as the name and the idle connection timeout period.
   * 
   * @param request - UpdateListenerAttributeRequest
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttribute(request: $_model.UpdateListenerAttributeRequest): Promise<$_model.UpdateListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Changes the network type of the IPv4 address for a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the **AddressType** value of an NLB instance after you change the network type.
   * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the task status:
   *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
   *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfigWithOptions(request: $_model.UpdateLoadBalancerAddressTypeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerAddressTypeConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerAddressTypeConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerAddressTypeConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerAddressTypeConfigResponse({}));
  }

  /**
   * Changes the network type of the IPv4 address for a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the **AddressType** value of an NLB instance after you change the network type.
   * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the task status:
   *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
   *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfig(request: $_model.UpdateLoadBalancerAddressTypeConfigRequest): Promise<$_model.UpdateLoadBalancerAddressTypeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerAddressTypeConfigWithOptions(request, runtime);
  }

  /**
   * Updates the attributes, including the name, of a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttributeWithOptions(request: $_model.UpdateLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!$dara.isNull(request.crossZoneEnabled)) {
      body["CrossZoneEnabled"] = request.crossZoneEnabled;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerAttributeResponse({}));
  }

  /**
   * Updates the attributes, including the name, of a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttribute(request: $_model.UpdateLoadBalancerAttributeRequest): Promise<$_model.UpdateLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the deletion protection feature.
   * 
   * @remarks
   * > You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the details about deletion protection and the configuration read-only mode.
   * 
   * @param request - UpdateLoadBalancerProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtectionWithOptions(request: $_model.UpdateLoadBalancerProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerProtectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtectionEnabled)) {
      body["DeletionProtectionEnabled"] = request.deletionProtectionEnabled;
    }

    if (!$dara.isNull(request.deletionProtectionReason)) {
      body["DeletionProtectionReason"] = request.deletionProtectionReason;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.modificationProtectionReason)) {
      body["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!$dara.isNull(request.modificationProtectionStatus)) {
      body["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerProtection",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerProtectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerProtectionResponse({}));
  }

  /**
   * Enables or disables the deletion protection feature.
   * 
   * @remarks
   * > You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the details about deletion protection and the configuration read-only mode.
   * 
   * @param request - UpdateLoadBalancerProtectionRequest
   * @returns UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtection(request: $_model.UpdateLoadBalancerProtectionRequest): Promise<$_model.UpdateLoadBalancerProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the zones and zone attributes of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
   * Prerequisites
   * *   An NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the zones and zone attributes of an NLB instance.
   * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation query to query the status of a task:
   *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
   *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZonesWithOptions(request: $_model.UpdateLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerZonesResponse({}));
  }

  /**
   * Modifies the zones and zone attributes of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
   * Prerequisites
   * *   An NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the zones and zone attributes of an NLB instance.
   * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation query to query the status of a task:
   *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
   *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZones(request: $_model.UpdateLoadBalancerZonesRequest): Promise<$_model.UpdateLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttributeWithOptions(request: $_model.UpdateSecurityPolicyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityPolicyAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
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

    if (!$dara.isNull(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!$dara.isNull(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityPolicyAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityPolicyAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityPolicyAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttribute(request: $_model.UpdateSecurityPolicyAttributeRequest): Promise<$_model.UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a Network Load Balancer (NLB) server group.
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttributeWithOptions(request: $_model.UpdateServerGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServerGroupAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!$dara.isNull(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!$dara.isNull(request.ipVersionAffinityMode)) {
      body["IpVersionAffinityMode"] = request.ipVersionAffinityMode;
    }

    if (!$dara.isNull(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServerGroupAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServerGroupAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a Network Load Balancer (NLB) server group.
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttribute(request: $_model.UpdateServerGroupAttributeRequest): Promise<$_model.UpdateServerGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the weights and descriptions of backend servers in a server group of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1.  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation to query the status of a server group.
   *     *   If a server group is in the **Configuring** state, the server group is being modified.
   *     *   If a server group is in the **Available** state, the server group is running.
   * 2.  You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/445896.html) operation to query the status of a backend server.
   *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
   *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttributeWithOptions(request: $_model.UpdateServerGroupServersAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServerGroupServersAttributeResponse> {
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

    if (!$dara.isNull(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServerGroupServersAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServerGroupServersAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServerGroupServersAttributeResponse({}));
  }

  /**
   * Modifies the weights and descriptions of backend servers in a server group of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1.  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation to query the status of a server group.
   *     *   If a server group is in the **Configuring** state, the server group is being modified.
   *     *   If a server group is in the **Available** state, the server group is running.
   * 2.  You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/445896.html) operation to query the status of a backend server.
   *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
   *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttribute(request: $_model.UpdateServerGroupServersAttributeRequest): Promise<$_model.UpdateServerGroupServersAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServerGroupServersAttributeWithOptions(request, runtime);
  }

}
