// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Alb";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou-finance': "alb.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds IP entries to an access control policy group.
   * 
   * @remarks
   * - Each policy group can contain multiple IP address entries or CIDR block entries. The entry limits for an access control policy group are as follows: 
   *     - Maximum number of IP address entries that can be added per account per call: 20. 
   *     - Maximum number of entries that each access control policy group can contain: 500.
   * - The **AddEntriesToAcl** operation is asynchronous. After you call this operation, the system returns a request ID, but the IP entries are not immediately added to the access control policy group. The addition task is still running in the background. You can call [ListAclEntries](https://help.aliyun.com/document_detail/213616.html) to query the addition status of the IP entries:
   *     - If the access control policy group is in the **Adding** state, the IP entries are being added.
   *     - If the access control policy group is in the **Available** state, the IP entries are added.
   * 
   * @param request - AddEntriesToAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEntriesToAclResponse
   */
  async addEntriesToAclWithOptions(request: $_model.AddEntriesToAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEntriesToAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEntriesToAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEntriesToAclResponse>(await this.callApi(params, req, runtime), new $_model.AddEntriesToAclResponse({}));
  }

  /**
   * Adds IP entries to an access control policy group.
   * 
   * @remarks
   * - Each policy group can contain multiple IP address entries or CIDR block entries. The entry limits for an access control policy group are as follows: 
   *     - Maximum number of IP address entries that can be added per account per call: 20. 
   *     - Maximum number of entries that each access control policy group can contain: 500.
   * - The **AddEntriesToAcl** operation is asynchronous. After you call this operation, the system returns a request ID, but the IP entries are not immediately added to the access control policy group. The addition task is still running in the background. You can call [ListAclEntries](https://help.aliyun.com/document_detail/213616.html) to query the addition status of the IP entries:
   *     - If the access control policy group is in the **Adding** state, the IP entries are being added.
   *     - If the access control policy group is in the **Available** state, the IP entries are added.
   * 
   * @param request - AddEntriesToAclRequest
   * @returns AddEntriesToAclResponse
   */
  async addEntriesToAcl(request: $_model.AddEntriesToAclRequest): Promise<$_model.AddEntriesToAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  /**
   * Adds backend servers to a server group.
   * 
   * @remarks
   * The **AddServersToServerGroup** operation is asynchronous. After you send the request, the system returns a request ID, but the backend servers are not immediately added. The addition task is still running in the background.
   * 1. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the status of the server group:
   * - If the server group is in the **Configuring** state, the server group is being reconfigured.
   * - If the server group is in the **Available** state, the server group is running.
   * 2. You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) operation to query the status of the backend servers:
   * - If a backend server is in the **Adding** state, the backend server is being added to the server group.
   * - If a backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - AddServersToServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroupWithOptions(request: $_model.AddServersToServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddServersToServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.servers)) {
      bodyFlat["Servers"] = request.servers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddServersToServerGroup",
      version: "2020-06-16",
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
   * Adds backend servers to a server group.
   * 
   * @remarks
   * The **AddServersToServerGroup** operation is asynchronous. After you send the request, the system returns a request ID, but the backend servers are not immediately added. The addition task is still running in the background.
   * 1. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the status of the server group:
   * - If the server group is in the **Configuring** state, the server group is being reconfigured.
   * - If the server group is in the **Available** state, the server group is running.
   * 2. You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) operation to query the status of the backend servers:
   * - If a backend server is in the **Adding** state, the backend server is being added to the server group.
   * - If a backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - AddServersToServerGroupRequest
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroup(request: $_model.AddServersToServerGroupRequest): Promise<$_model.AddServersToServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  /**
   * Applies a health check configuration template to a backend server group to update the health check configuration of the backend server group to the template values.
   * 
   * @param request - ApplyHealthCheckTemplateToServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyHealthCheckTemplateToServerGroupResponse
   */
  async applyHealthCheckTemplateToServerGroupWithOptions(request: $_model.ApplyHealthCheckTemplateToServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyHealthCheckTemplateToServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyHealthCheckTemplateToServerGroup",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyHealthCheckTemplateToServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.ApplyHealthCheckTemplateToServerGroupResponse({}));
  }

  /**
   * Applies a health check configuration template to a backend server group to update the health check configuration of the backend server group to the template values.
   * 
   * @param request - ApplyHealthCheckTemplateToServerGroupRequest
   * @returns ApplyHealthCheckTemplateToServerGroupResponse
   */
  async applyHealthCheckTemplateToServerGroup(request: $_model.ApplyHealthCheckTemplateToServerGroupRequest): Promise<$_model.ApplyHealthCheckTemplateToServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyHealthCheckTemplateToServerGroupWithOptions(request, runtime);
  }

  /**
   * Associates access control lists with a listener.
   * 
   * @remarks
   * The **AssociateAclsWithListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the ACLs are not yet associated with the listener. The association task is still running in the background. You can call [ListAclRelations](https://help.aliyun.com/document_detail/213618.html) to query the association status of the ACLs:
   * - If the ACL is in the **Associating** state, the ACL is being associated with the listener.
   * - If the ACL is in the **Associated** state, the ACL is associated with the listener.
   * 
   * @param request - AssociateAclsWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAclsWithListenerResponse
   */
  async associateAclsWithListenerWithOptions(request: $_model.AssociateAclsWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAclsWithListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAclsWithListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateAclsWithListenerResponse>(await this.callApi(params, req, runtime), new $_model.AssociateAclsWithListenerResponse({}));
  }

  /**
   * Associates access control lists with a listener.
   * 
   * @remarks
   * The **AssociateAclsWithListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the ACLs are not yet associated with the listener. The association task is still running in the background. You can call [ListAclRelations](https://help.aliyun.com/document_detail/213618.html) to query the association status of the ACLs:
   * - If the ACL is in the **Associating** state, the ACL is being associated with the listener.
   * - If the ACL is in the **Associated** state, the ACL is associated with the listener.
   * 
   * @param request - AssociateAclsWithListenerRequest
   * @returns AssociateAclsWithListenerResponse
   */
  async associateAclsWithListener(request: $_model.AssociateAclsWithListenerRequest): Promise<$_model.AssociateAclsWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  /**
   * Associates additional certificates with a listener.
   * 
   * @remarks
   * The **AssociateAdditionalCertificatesWithListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the additional certificates are not immediately associated. The association task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the association status of the additional certificates:
   *    - If the HTTPS or QUIC listener is in the **Associating** state, the additional certificates are being associated.
   *    - If the HTTPS or QUIC listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: $_model.AssociateAdditionalCertificatesWithListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2020-06-16",
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
   * Associates additional certificates with a listener.
   * 
   * @remarks
   * The **AssociateAdditionalCertificatesWithListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the additional certificates are not immediately associated. The association task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the association status of the additional certificates:
   *    - If the HTTPS or QUIC listener is in the **Associating** state, the additional certificates are being associated.
   *    - If the HTTPS or QUIC listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: $_model.AssociateAdditionalCertificatesWithListenerRequest): Promise<$_model.AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * Attaches an Internet Shared Bandwidth instance to an Application Load Balancer instance.
   * 
   * @remarks
   * The **AttachCommonBandwidthPackageToLoadBalancer** operation is asynchronous. After you send the request, the system returns a request ID, but the Internet Shared Bandwidth instance is not yet associated with the load balancing instance. The association task is still running in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/2254835.html) operation to query the association status of the Internet Shared Bandwidth instance:
   * - When the load balancing instance is in the **Configuring** state, the Internet Shared Bandwidth instance is being associated.
   * - When the load balancing instance is in the **Active** state, the Internet Shared Bandwidth instance is associated.
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancerWithOptions(request: $_model.AttachCommonBandwidthPackageToLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachCommonBandwidthPackageToLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

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
      action: "AttachCommonBandwidthPackageToLoadBalancer",
      version: "2020-06-16",
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
   * Attaches an Internet Shared Bandwidth instance to an Application Load Balancer instance.
   * 
   * @remarks
   * The **AttachCommonBandwidthPackageToLoadBalancer** operation is asynchronous. After you send the request, the system returns a request ID, but the Internet Shared Bandwidth instance is not yet associated with the load balancing instance. The association task is still running in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/2254835.html) operation to query the association status of the Internet Shared Bandwidth instance:
   * - When the load balancing instance is in the **Configuring** state, the Internet Shared Bandwidth instance is being associated.
   * - When the load balancing instance is in the **Active** state, the Internet Shared Bandwidth instance is associated.
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancer(request: $_model.AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<$_model.AttachCommonBandwidthPackageToLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachCommonBandwidthPackageToLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Adds the elastic IP address (EIP) or virtual IP address (VIP) of a zone back to Domain Name System (DNS) resolution.
   * 
   * @remarks
   * This operation is supported only for Application Load Balancer (ALB) instances in static IP mode. Before you call this operation, you must have removed a zone from the ALB instance by calling the StartShiftLoadBalancerZones operation or by using the console.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZonesWithOptions(request: $_model.CancelShiftLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelShiftLoadBalancerZonesResponse> {
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

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelShiftLoadBalancerZones",
      version: "2020-06-16",
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
   * Adds the elastic IP address (EIP) or virtual IP address (VIP) of a zone back to Domain Name System (DNS) resolution.
   * 
   * @remarks
   * This operation is supported only for Application Load Balancer (ALB) instances in static IP mode. Before you call this operation, you must have removed a zone from the ALB instance by calling the StartShiftLoadBalancerZones operation or by using the console.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZones(request: $_model.CancelShiftLoadBalancerZonesRequest): Promise<$_model.CancelShiftLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Creates a programmable script.
   * 
   * @remarks
   * ### Before you begin
   * - Create a Standard Edition or WAF-enhanced ALB instance. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html).
   * ### Usage notes
   * **CreateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID, but the programmable script is not yet created. The creation task continues in the background. Call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the creation status of the programmable script:
   *    - If the programmable script is in the **Creating** state, the script is being created.
   *    - If the programmable script is in the **Available** state, the script is created successfully.
   * 
   * @param request - CreateAScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAScriptsResponse
   */
  async createAScriptsWithOptions(request: $_model.CreateAScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AScripts)) {
      query["AScripts"] = request.AScripts;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAScriptsResponse>(await this.callApi(params, req, runtime), new $_model.CreateAScriptsResponse({}));
  }

  /**
   * Creates a programmable script.
   * 
   * @remarks
   * ### Before you begin
   * - Create a Standard Edition or WAF-enhanced ALB instance. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html).
   * ### Usage notes
   * **CreateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID, but the programmable script is not yet created. The creation task continues in the background. Call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the creation status of the programmable script:
   *    - If the programmable script is in the **Creating** state, the script is being created.
   *    - If the programmable script is in the **Available** state, the script is created successfully.
   * 
   * @param request - CreateAScriptsRequest
   * @returns CreateAScriptsResponse
   */
  async createAScripts(request: $_model.CreateAScriptsRequest): Promise<$_model.CreateAScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAScriptsWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL) in a specified region.
   * 
   * @remarks
   * The **CreateAcl** operation is asynchronous. After you invoke this operation, the system returns an instance ID, but the access control policy group is not immediately created because the creation node is still running in the background. You can invoke [ListAcls](https://help.aliyun.com/document_detail/213617.html) to query the creation status of the access control policy group:
   * - If the access control policy group is in the **Creating** state, the access control policy group is being created.
   * - If the access control policy group is in the **Available** state, the access control policy group is created.
   * 
   * @param request - CreateAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclResponse
   */
  async createAclWithOptions(request: $_model.CreateAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      action: "CreateAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAclResponse>(await this.callApi(params, req, runtime), new $_model.CreateAclResponse({}));
  }

  /**
   * Creates an access control list (ACL) in a specified region.
   * 
   * @remarks
   * The **CreateAcl** operation is asynchronous. After you invoke this operation, the system returns an instance ID, but the access control policy group is not immediately created because the creation node is still running in the background. You can invoke [ListAcls](https://help.aliyun.com/document_detail/213617.html) to query the creation status of the access control policy group:
   * - If the access control policy group is in the **Creating** state, the access control policy group is being created.
   * - If the access control policy group is in the **Available** state, the access control policy group is created.
   * 
   * @param request - CreateAclRequest
   * @returns CreateAclResponse
   */
  async createAcl(request: $_model.CreateAclRequest): Promise<$_model.CreateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * Creates a health check template in a specified region.
   * 
   * @param request - CreateHealthCheckTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHealthCheckTemplateResponse
   */
  async createHealthCheckTemplateWithOptions(request: $_model.CreateHealthCheckTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHealthCheckTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckCodes)) {
      query["HealthCheckCodes"] = request.healthCheckCodes;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!$dara.isNull(request.healthCheckHttpVersion)) {
      query["HealthCheckHttpVersion"] = request.healthCheckHttpVersion;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!$dara.isNull(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!$dara.isNull(request.healthCheckTemplateName)) {
      query["HealthCheckTemplateName"] = request.healthCheckTemplateName;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHealthCheckTemplate",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHealthCheckTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateHealthCheckTemplateResponse({}));
  }

  /**
   * Creates a health check template in a specified region.
   * 
   * @param request - CreateHealthCheckTemplateRequest
   * @returns CreateHealthCheckTemplateResponse
   */
  async createHealthCheckTemplate(request: $_model.CreateHealthCheckTemplateRequest): Promise<$_model.CreateHealthCheckTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHealthCheckTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a listener.
   * 
   * @remarks
   * The **CreateListener** operation is asynchronous. The system returns a request ID, but the HTTP, HTTPS, or QUIC listener is not yet created. The creation task is still running in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the creation status of the HTTP, HTTPS, or QUIC listener:
   * - If the HTTP, HTTPS, or QUIC listener is in the **Provisioning** state, the listener is being created.
   * - If the HTTP, HTTPS, or QUIC listener is in the **Running** state, the listener is created.
   * 
   * @param request - CreateListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListenerResponse
   */
  async createListenerWithOptions(request: $_model.CreateListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caCertificates)) {
      query["CaCertificates"] = request.caCertificates;
    }

    if (!$dara.isNull(request.caEnabled)) {
      query["CaEnabled"] = request.caEnabled;
    }

    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.defaultActions)) {
      query["DefaultActions"] = request.defaultActions;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.gzipEnabled)) {
      query["GzipEnabled"] = request.gzipEnabled;
    }

    if (!$dara.isNull(request.http2Enabled)) {
      query["Http2Enabled"] = request.http2Enabled;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerDescription)) {
      query["ListenerDescription"] = request.listenerDescription;
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

    if (!$dara.isNull(request.quicConfig)) {
      query["QuicConfig"] = request.quicConfig;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateListener",
      version: "2020-06-16",
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
   * Creates a listener.
   * 
   * @remarks
   * The **CreateListener** operation is asynchronous. The system returns a request ID, but the HTTP, HTTPS, or QUIC listener is not yet created. The creation task is still running in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the creation status of the HTTP, HTTPS, or QUIC listener:
   * - If the HTTP, HTTPS, or QUIC listener is in the **Provisioning** state, the listener is being created.
   * - If the HTTP, HTTPS, or QUIC listener is in the **Running** state, the listener is created.
   * 
   * @param request - CreateListenerRequest
   * @returns CreateListenerResponse
   */
  async createListener(request: $_model.CreateListenerRequest): Promise<$_model.CreateListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
   * Creates an Application Load Balancing (ALB) instance in a specified region.
   * 
   * @remarks
   * The **CreateLoadBalancer** operation is asynchronous. The system returns an instance ID, but the Application Load Balancing (ALB) instance is not yet created and the creation task is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the creation status of the Application Load Balancing (ALB) instance:
   * - When the Application Load Balancing (ALB) instance is in the **Provisioning** state, the instance is being created.
   * - When the Application Load Balancing (ALB) instance is in the **Active** state, the instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressAllocatedMode)) {
      query["AddressAllocatedMode"] = request.addressAllocatedMode;
    }

    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtectionEnabled)) {
      query["DeletionProtectionEnabled"] = request.deletionProtectionEnabled;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerBillingConfig)) {
      query["LoadBalancerBillingConfig"] = request.loadBalancerBillingConfig;
    }

    if (!$dara.isNull(request.loadBalancerEdition)) {
      query["LoadBalancerEdition"] = request.loadBalancerEdition;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.modificationProtectionConfig)) {
      query["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2020-06-16",
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
   * Creates an Application Load Balancing (ALB) instance in a specified region.
   * 
   * @remarks
   * The **CreateLoadBalancer** operation is asynchronous. The system returns an instance ID, but the Application Load Balancing (ALB) instance is not yet created and the creation task is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the creation status of the Application Load Balancing (ALB) instance:
   * - When the Application Load Balancing (ALB) instance is in the **Provisioning** state, the instance is being created.
   * - When the Application Load Balancing (ALB) instance is in the **Active** state, the instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates a forwarding rule under a specified listener.
   * 
   * @remarks
   * When you call this operation to create a forwarding rule, note the following items:
   * - When you configure the **Redirect** action, you cannot set all parameters except the **HttpCode** parameter to their default values.
   * - When you configure multiple actions for the same forwarding rule, you must set the action type of the **Rewrite** action to **ForwardGroup**.
   * - The **CreateRule** operation is asynchronous. After you send the request, the system returns an instance ID, but the forwarding rule is not yet created and the creation node in the background is still in progress. You can invoke the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the creation status of the forwarding rule:
   *     - If the forwarding rule is in the **Provisioning** state, the forwarding rule is being created.
   *     - If the forwarding rule is in the **Available** state, the forwarding rule is created.
   * - The maximum number of conditions (**RuleConditions**) and actions (**RuleActions**) that you can add to a forwarding rule varies based on the edition:
   *     - Number of conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Number of actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(request: $_model.CreateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.ruleActions)) {
      query["RuleActions"] = request.ruleActions;
    }

    if (!$dara.isNull(request.ruleConditions)) {
      query["RuleConditions"] = request.ruleConditions;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRule",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRuleResponse({}));
  }

  /**
   * Creates a forwarding rule under a specified listener.
   * 
   * @remarks
   * When you call this operation to create a forwarding rule, note the following items:
   * - When you configure the **Redirect** action, you cannot set all parameters except the **HttpCode** parameter to their default values.
   * - When you configure multiple actions for the same forwarding rule, you must set the action type of the **Rewrite** action to **ForwardGroup**.
   * - The **CreateRule** operation is asynchronous. After you send the request, the system returns an instance ID, but the forwarding rule is not yet created and the creation node in the background is still in progress. You can invoke the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the creation status of the forwarding rule:
   *     - If the forwarding rule is in the **Provisioning** state, the forwarding rule is being created.
   *     - If the forwarding rule is in the **Available** state, the forwarding rule is created.
   * - The maximum number of conditions (**RuleConditions**) and actions (**RuleActions**) that you can add to a forwarding rule varies based on the edition:
   *     - Number of conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Number of actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Creates multiple forwarding rules.
   * 
   * @remarks
   * When you invoke this operation to create forwarding rules, take note of the following items:
   * - When you configure the **Redirect** action, you cannot set all parameters except **HttpCode** to their default values.
   * - If you configure multiple actions for the same forwarding rule, the action type of the **Rewrite** action must be set to **ForwardGroup**.
   * - The **CreateRules** operation is asynchronous. After you send the request, the system returns an instance ID, but the forwarding rules are not yet created. The creation node is still running in the background. You can invoke the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the creation status of the forwarding rules:
   *     - If the forwarding rules are in the **Provisioning** state, the forwarding rules are being created.
   *     - If the forwarding rules are in the **Available** state, the forwarding rules are created.
   * - A forwarding rule supports the following maximum numbers of conditions (**RuleConditions**) and actions (**RuleActions**):
   *     - Number of conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Number of actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - CreateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRulesResponse
   */
  async createRulesWithOptions(request: $_model.CreateRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRulesResponse> {
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

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      bodyFlat["Rules"] = request.rules;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRules",
      version: "2020-06-16",
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
   * Creates multiple forwarding rules.
   * 
   * @remarks
   * When you invoke this operation to create forwarding rules, take note of the following items:
   * - When you configure the **Redirect** action, you cannot set all parameters except **HttpCode** to their default values.
   * - If you configure multiple actions for the same forwarding rule, the action type of the **Rewrite** action must be set to **ForwardGroup**.
   * - The **CreateRules** operation is asynchronous. After you send the request, the system returns an instance ID, but the forwarding rules are not yet created. The creation node is still running in the background. You can invoke the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the creation status of the forwarding rules:
   *     - If the forwarding rules are in the **Provisioning** state, the forwarding rules are being created.
   *     - If the forwarding rules are in the **Available** state, the forwarding rules are created.
   * - A forwarding rule supports the following maximum numbers of conditions (**RuleConditions**) and actions (**RuleActions**):
   *     - Number of conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Number of actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - CreateRulesRequest
   * @returns CreateRulesResponse
   */
  async createRules(request: $_model.CreateRulesRequest): Promise<$_model.CreateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  /**
   * Creates a custom security policy in a specified region.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicyWithOptions(request: $_model.CreateSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityPolicyName)) {
      query["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!$dara.isNull(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityPolicy",
      version: "2020-06-16",
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
   * Creates a custom security policy in a specified region.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicy(request: $_model.CreateSecurityPolicyRequest): Promise<$_model.CreateSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a server group in a specified region.
   * 
   * @remarks
   * The **CreateServerGroup** API operation is asynchronous. After you call this operation, the system returns a request ID, but the server group is not yet created and the creation task is still running in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the creation status of the server group:
   * - If the server group is in the **Creating** state, the server group is being created.
   * - If the server group is in the **Available** state, the server group is created.
   * 
   * @param request - CreateServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerGroupResponse
   */
  async createServerGroupWithOptions(request: $_model.CreateServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionDrainConfig)) {
      query["ConnectionDrainConfig"] = request.connectionDrainConfig;
    }

    if (!$dara.isNull(request.crossZoneEnabled)) {
      query["CrossZoneEnabled"] = request.crossZoneEnabled;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckConfig)) {
      query["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!$dara.isNull(request.ipVersionAffinityMode)) {
      query["IpVersionAffinityMode"] = request.ipVersionAffinityMode;
    }

    if (!$dara.isNull(request.ipv6Enabled)) {
      query["Ipv6Enabled"] = request.ipv6Enabled;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverGroupName)) {
      query["ServerGroupName"] = request.serverGroupName;
    }

    if (!$dara.isNull(request.serverGroupType)) {
      query["ServerGroupType"] = request.serverGroupType;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.slowStartConfig)) {
      query["SlowStartConfig"] = request.slowStartConfig;
    }

    if (!$dara.isNull(request.stickySessionConfig)) {
      query["StickySessionConfig"] = request.stickySessionConfig;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.uchConfig)) {
      query["UchConfig"] = request.uchConfig;
    }

    if (!$dara.isNull(request.upstreamKeepaliveEnabled)) {
      query["UpstreamKeepaliveEnabled"] = request.upstreamKeepaliveEnabled;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerGroup",
      version: "2020-06-16",
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
   * Creates a server group in a specified region.
   * 
   * @remarks
   * The **CreateServerGroup** API operation is asynchronous. After you call this operation, the system returns a request ID, but the server group is not yet created and the creation task is still running in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the creation status of the server group:
   * - If the server group is in the **Creating** state, the server group is being created.
   * - If the server group is in the **Available** state, the server group is created.
   * 
   * @param request - CreateServerGroupRequest
   * @returns CreateServerGroupResponse
   */
  async createServerGroup(request: $_model.CreateServerGroupRequest): Promise<$_model.CreateServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes programmable scripts.
   * 
   * @remarks
   * *DeleteAScripts** is an asynchronous operation. After you call this operation, the system returns a request ID, but the programmable scripts are not immediately deleted. The deletion task continues to run in the background. You can call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the deletion status of the programmable scripts:
   * - If a programmable script is in the **Deleting** state, the script is being deleted.
   * - If the programmable script cannot be queried, the script is deleted.
   * 
   * @param request - DeleteAScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAScriptsResponse
   */
  async deleteAScriptsWithOptions(request: $_model.DeleteAScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AScriptIds)) {
      query["AScriptIds"] = request.AScriptIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAScriptsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAScriptsResponse({}));
  }

  /**
   * Deletes programmable scripts.
   * 
   * @remarks
   * *DeleteAScripts** is an asynchronous operation. After you call this operation, the system returns a request ID, but the programmable scripts are not immediately deleted. The deletion task continues to run in the background. You can call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the deletion status of the programmable scripts:
   * - If a programmable script is in the **Deleting** state, the script is being deleted.
   * - If the programmable script cannot be queried, the script is deleted.
   * 
   * @param request - DeleteAScriptsRequest
   * @returns DeleteAScriptsResponse
   */
  async deleteAScripts(request: $_model.DeleteAScriptsRequest): Promise<$_model.DeleteAScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAScriptsWithOptions(request, runtime);
  }

  /**
   * Deletes a specified access control list.
   * 
   * @remarks
   * The **DeleteAcl** API operation is asynchronous. The system returns a request ID, but the access control list (ACL) is not yet deleted and the deletion task is still running in the background. You can call [ListAcls](https://help.aliyun.com/document_detail/213617.html) to query the deletion status of the ACL:
   * - If the ACL is in the **Deleting** state, it indicates that the ACL is being deleted.
   * - If the status of the ACL cannot be queried, it indicates that the ACL is deleted.
   * 
   * @param request - DeleteAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclResponse
   */
  async deleteAclWithOptions(request: $_model.DeleteAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAclResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAclResponse({}));
  }

  /**
   * Deletes a specified access control list.
   * 
   * @remarks
   * The **DeleteAcl** API operation is asynchronous. The system returns a request ID, but the access control list (ACL) is not yet deleted and the deletion task is still running in the background. You can call [ListAcls](https://help.aliyun.com/document_detail/213617.html) to query the deletion status of the ACL:
   * - If the ACL is in the **Deleting** state, it indicates that the ACL is being deleted.
   * - If the status of the ACL cannot be queried, it indicates that the ACL is deleted.
   * 
   * @param request - DeleteAclRequest
   * @returns DeleteAclResponse
   */
  async deleteAcl(request: $_model.DeleteAclRequest): Promise<$_model.DeleteAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * Deletes health check templates.
   * 
   * @param request - DeleteHealthCheckTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHealthCheckTemplatesResponse
   */
  async deleteHealthCheckTemplatesWithOptions(request: $_model.DeleteHealthCheckTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHealthCheckTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckTemplateIds)) {
      query["HealthCheckTemplateIds"] = request.healthCheckTemplateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHealthCheckTemplates",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHealthCheckTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHealthCheckTemplatesResponse({}));
  }

  /**
   * Deletes health check templates.
   * 
   * @param request - DeleteHealthCheckTemplatesRequest
   * @returns DeleteHealthCheckTemplatesResponse
   */
  async deleteHealthCheckTemplates(request: $_model.DeleteHealthCheckTemplatesRequest): Promise<$_model.DeleteHealthCheckTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHealthCheckTemplatesWithOptions(request, runtime);
  }

  /**
   * Deletes a specified listener.
   * 
   * @remarks
   * The **DeleteListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener is not immediately deleted. The deletion task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the deletion status of the listener:
   * - If the listener is in the **Deleting** state, the listener is being deleted.
   * - If the listener cannot be queried, the listener is deleted.
   * 
   * @param request - DeleteListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListenerResponse
   */
  async deleteListenerWithOptions(request: $_model.DeleteListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteListenerResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteListener",
      version: "2020-06-16",
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
   * Deletes a specified listener.
   * 
   * @remarks
   * The **DeleteListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener is not immediately deleted. The deletion task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the deletion status of the listener:
   * - If the listener is in the **Deleting** state, the listener is being deleted.
   * - If the listener cannot be queried, the listener is deleted.
   * 
   * @param request - DeleteListenerRequest
   * @returns DeleteListenerResponse
   */
  async deleteListener(request: $_model.DeleteListenerRequest): Promise<$_model.DeleteListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
   * Deletes a specified load balancing instance.
   * 
   * @remarks
   * The **DeleteLoadBalancer** API operation is asynchronous. After you invoke this operation, the system returns a request ID, but the application load balancing instance is not immediately deleted. The deletion node is still running in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the deletion status of the application load balancing instance:
   * - When the application load balancing instance is in the **Deleting** state, the instance is being deleted.
   * - When the specified application load balancing instance cannot be queried, the instance is deleted.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: $_model.DeleteLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerResponse> {
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

    if (!$dara.isNull(request.retainResourceType)) {
      query["RetainResourceType"] = request.retainResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancer",
      version: "2020-06-16",
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
   * Deletes a specified load balancing instance.
   * 
   * @remarks
   * The **DeleteLoadBalancer** API operation is asynchronous. After you invoke this operation, the system returns a request ID, but the application load balancing instance is not immediately deleted. The deletion node is still running in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the deletion status of the application load balancing instance:
   * - When the application load balancing instance is in the **Deleting** state, the instance is being deleted.
   * - When the specified application load balancing instance cannot be queried, the instance is deleted.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: $_model.DeleteLoadBalancerRequest): Promise<$_model.DeleteLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Deletes a forwarding rule.
   * 
   * @remarks
   * *DeleteRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the status of a forwarding rule:
   * *   If the forwarding rule is in the **Deleting** state, the forwarding rule is being deleted.
   * *   If the forwarding rule cannot be found, the forwarding rule is deleted.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRuleResponse({}));
  }

  /**
   * Deletes a forwarding rule.
   * 
   * @remarks
   * *DeleteRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the status of a forwarding rule:
   * *   If the forwarding rule is in the **Deleting** state, the forwarding rule is being deleted.
   * *   If the forwarding rule cannot be found, the forwarding rule is deleted.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Deletes multiple forwarding rules under the same listener.
   * 
   * @remarks
   * The **DeleteRules** operation is asynchronous. After you call this operation, the system returns a request ID, but the forwarding rules are not immediately deleted. The deletion task is still running in the background. You can call the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the deletion status of the forwarding rules:
   * - If the forwarding rules are in the **Deleting** state, the forwarding rules are being deleted.
   * - If the status of the forwarding rules cannot be queried, the forwarding rules are deleted.
   * 
   * @param request - DeleteRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRulesResponse
   */
  async deleteRulesWithOptions(request: $_model.DeleteRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRules",
      version: "2020-06-16",
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
   * Deletes multiple forwarding rules under the same listener.
   * 
   * @remarks
   * The **DeleteRules** operation is asynchronous. After you call this operation, the system returns a request ID, but the forwarding rules are not immediately deleted. The deletion task is still running in the background. You can call the [ListRules](https://help.aliyun.com/document_detail/214379.html) operation to query the deletion status of the forwarding rules:
   * - If the forwarding rules are in the **Deleting** state, the forwarding rules are being deleted.
   * - If the status of the forwarding rules cannot be queried, the forwarding rules are deleted.
   * 
   * @param request - DeleteRulesRequest
   * @returns DeleteRulesResponse
   */
  async deleteRules(request: $_model.DeleteRulesRequest): Promise<$_model.DeleteRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom security policy.
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicyWithOptions(request: $_model.DeleteSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityPolicy",
      version: "2020-06-16",
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
   * Deletes a custom security policy.
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicy(request: $_model.DeleteSecurityPolicyRequest): Promise<$_model.DeleteSecurityPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a server group.
   * 
   * @remarks
   * *DeleteServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the status of the task.
   * *   If a server group is in the **Deleting** state, it indicates that the server group is being deleted.
   * *   If a specified server group cannot be found, it indicates that the server group has been deleted.
   * 
   * @param request - DeleteServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroupWithOptions(request: $_model.DeleteServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServerGroup",
      version: "2020-06-16",
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
   * Deletes a server group.
   * 
   * @remarks
   * *DeleteServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the status of the task.
   * *   If a server group is in the **Deleting** state, it indicates that the server group is being deleted.
   * *   If a specified server group cannot be found, it indicates that the server group has been deleted.
   * 
   * @param request - DeleteServerGroupRequest
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroup(request: $_model.DeleteServerGroupRequest): Promise<$_model.DeleteServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServerGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Load Balancer Capacity Unit (LCU) reservation.
   * 
   * @param request - DescribeCapacityReservationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCapacityReservationResponse
   */
  async describeCapacityReservationWithOptions(request: $_model.DescribeCapacityReservationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCapacityReservationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCapacityReservation",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCapacityReservationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCapacityReservationResponse({}));
  }

  /**
   * Queries the details of a Load Balancer Capacity Unit (LCU) reservation.
   * 
   * @param request - DescribeCapacityReservationRequest
   * @returns DescribeCapacityReservationResponse
   */
  async describeCapacityReservation(request: $_model.DescribeCapacityReservationRequest): Promise<$_model.DescribeCapacityReservationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCapacityReservationWithOptions(request, runtime);
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-06-16",
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
   * Queries zones in a region.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2020-06-16",
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
   * Queries zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Disassociates an Internet Shared Bandwidth instance from an Application Load Balancer (ALB) instance.
   * 
   * @remarks
   * *DetachCommonBandwidthPackageFromLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214359.html) operation to query the status of the task.
   * - If an ALB instance is in the **Configuring** state, the EIP bandwidth plan is being disassociated from the ALB instance.
   * - If an ALB instance is in the **Active** state, the EIP bandwidth plan is disassociated from the ALB instance.
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancerWithOptions(request: $_model.DetachCommonBandwidthPackageFromLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

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
      action: "DetachCommonBandwidthPackageFromLoadBalancer",
      version: "2020-06-16",
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
   * Disassociates an Internet Shared Bandwidth instance from an Application Load Balancer (ALB) instance.
   * 
   * @remarks
   * *DetachCommonBandwidthPackageFromLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214359.html) operation to query the status of the task.
   * - If an ALB instance is in the **Configuring** state, the EIP bandwidth plan is being disassociated from the ALB instance.
   * - If an ALB instance is in the **Active** state, the EIP bandwidth plan is disassociated from the ALB instance.
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancer(request: $_model.DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<$_model.DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachCommonBandwidthPackageFromLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Shuts down deletion protection for a specified load balancing instance.
   * 
   * @param request - DisableDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDeletionProtectionResponse
   */
  async disableDeletionProtectionWithOptions(request: $_model.DisableDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDeletionProtection",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.DisableDeletionProtectionResponse({}));
  }

  /**
   * Shuts down deletion protection for a specified load balancing instance.
   * 
   * @param request - DisableDeletionProtectionRequest
   * @returns DisableDeletionProtectionResponse
   */
  async disableDeletionProtection(request: $_model.DisableDeletionProtectionRequest): Promise<$_model.DisableDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Performs a shutdown of access logging for a specified load balancing instance.
   * 
   * @param request - DisableLoadBalancerAccessLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLoadBalancerAccessLogResponse
   */
  async disableLoadBalancerAccessLogWithOptions(request: $_model.DisableLoadBalancerAccessLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableLoadBalancerAccessLogResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLoadBalancerAccessLog",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableLoadBalancerAccessLogResponse>(await this.callApi(params, req, runtime), new $_model.DisableLoadBalancerAccessLogResponse({}));
  }

  /**
   * Performs a shutdown of access logging for a specified load balancing instance.
   * 
   * @param request - DisableLoadBalancerAccessLogRequest
   * @returns DisableLoadBalancerAccessLogResponse
   */
  async disableLoadBalancerAccessLog(request: $_model.DisableLoadBalancerAccessLogRequest): Promise<$_model.DisableLoadBalancerAccessLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  /**
   * Changes the type of the IPv6 address that is used by a dual-stack Application Load Balancer (ALB) instance from public to private.
   * 
   * @remarks
   * ### Prerequisites
   * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
   * > If you set **AddressIpVersion** to **DualStack**:
   * - If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
   * - If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
   * ### Description
   * - After the DisableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Intranet** and the type of the IPv6 address of the ALB instance is changed from public to private. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, private IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the value of **Ipv6AddressType**.
   * - **DisableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the status of the task.
   *   - If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
   *   - If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6InternetWithOptions(request: $_model.DisableLoadBalancerIpv6InternetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableLoadBalancerIpv6InternetResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLoadBalancerIpv6Internet",
      version: "2020-06-16",
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
   * Changes the type of the IPv6 address that is used by a dual-stack Application Load Balancer (ALB) instance from public to private.
   * 
   * @remarks
   * ### Prerequisites
   * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
   * > If you set **AddressIpVersion** to **DualStack**:
   * - If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
   * - If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
   * ### Description
   * - After the DisableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Intranet** and the type of the IPv6 address of the ALB instance is changed from public to private. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, private IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the value of **Ipv6AddressType**.
   * - **DisableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the status of the task.
   *   - If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
   *   - If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6Internet(request: $_model.DisableLoadBalancerIpv6InternetRequest): Promise<$_model.DisableLoadBalancerIpv6InternetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * Disassociates access control lists (ACLs) from a listener.
   * 
   * @remarks
   * *DissociateAclsFromListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListAclRelations](https://help.aliyun.com/document_detail/213618.html) to query the status of an ACL.
   * *   If an ACL is in the **Dissociating** state, the ACL is being disassociated from the listener.
   * *   If an ACL is in the **Dissociated** state, the ACL is disassociated from the listener.
   * 
   * @param request - DissociateAclsFromListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListenerWithOptions(request: $_model.DissociateAclsFromListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateAclsFromListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateAclsFromListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateAclsFromListenerResponse>(await this.callApi(params, req, runtime), new $_model.DissociateAclsFromListenerResponse({}));
  }

  /**
   * Disassociates access control lists (ACLs) from a listener.
   * 
   * @remarks
   * *DissociateAclsFromListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListAclRelations](https://help.aliyun.com/document_detail/213618.html) to query the status of an ACL.
   * *   If an ACL is in the **Dissociating** state, the ACL is being disassociated from the listener.
   * *   If an ACL is in the **Dissociated** state, the ACL is disassociated from the listener.
   * 
   * @param request - DissociateAclsFromListenerRequest
   * @returns DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListener(request: $_model.DissociateAclsFromListenerRequest): Promise<$_model.DissociateAclsFromListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  /**
   * Dissociates one or more additional certificates from a listener.
   * 
   * @remarks
   * *DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the background. You can call [](t2324486.xdita#)to query the status of the dissociation task:
   * - If an additional certificate is in the **Dissociating** state, the dissociation is in progress.
   * - If an additional certificate is in the **Dissociated** state, the dissociation is complete.
   * 
   * @param request - DissociateAdditionalCertificatesFromListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListenerWithOptions(request: $_model.DissociateAdditionalCertificatesFromListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateAdditionalCertificatesFromListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateAdditionalCertificatesFromListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateAdditionalCertificatesFromListenerResponse>(await this.callApi(params, req, runtime), new $_model.DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  /**
   * Dissociates one or more additional certificates from a listener.
   * 
   * @remarks
   * *DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the background. You can call [](t2324486.xdita#)to query the status of the dissociation task:
   * - If an additional certificate is in the **Dissociating** state, the dissociation is in progress.
   * - If an additional certificate is in the **Dissociated** state, the dissociation is complete.
   * 
   * @param request - DissociateAdditionalCertificatesFromListenerRequest
   * @returns DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListener(request: $_model.DissociateAdditionalCertificatesFromListenerRequest): Promise<$_model.DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  /**
   * Enables deletion protection for a specified resource.
   * 
   * @param request - EnableDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDeletionProtectionResponse
   */
  async enableDeletionProtectionWithOptions(request: $_model.EnableDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDeletionProtection",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.EnableDeletionProtectionResponse({}));
  }

  /**
   * Enables deletion protection for a specified resource.
   * 
   * @param request - EnableDeletionProtectionRequest
   * @returns EnableDeletionProtectionResponse
   */
  async enableDeletionProtection(request: $_model.EnableDeletionProtectionRequest): Promise<$_model.EnableDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Enables the access log feature for an Application Load Balancer (ALB) instance.
   * 
   * @param request - EnableLoadBalancerAccessLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLoadBalancerAccessLogResponse
   */
  async enableLoadBalancerAccessLogWithOptions(request: $_model.EnableLoadBalancerAccessLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableLoadBalancerAccessLogResponse> {
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

    if (!$dara.isNull(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLoadBalancerAccessLog",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableLoadBalancerAccessLogResponse>(await this.callApi(params, req, runtime), new $_model.EnableLoadBalancerAccessLogResponse({}));
  }

  /**
   * Enables the access log feature for an Application Load Balancer (ALB) instance.
   * 
   * @param request - EnableLoadBalancerAccessLogRequest
   * @returns EnableLoadBalancerAccessLogResponse
   */
  async enableLoadBalancerAccessLog(request: $_model.EnableLoadBalancerAccessLogRequest): Promise<$_model.EnableLoadBalancerAccessLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  /**
   * Changes the type of the IPv6 address that is used by a dual-stack Application Load Balancer (ALB) instance from private to public.
   * 
   * @remarks
   * ### Prerequisites
   * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
   * > If you set **AddressIpVersion** to **DualStack**:
   * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
   * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
   * ### Description
   * *   After the EnableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Internet** and the type of the IPv6 address of the ALB instance is changed from private to public. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, public IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the value of **Ipv6AddressType**.
   * *   **EnableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the status of the task.
   *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
   *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6InternetWithOptions(request: $_model.EnableLoadBalancerIpv6InternetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableLoadBalancerIpv6InternetResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLoadBalancerIpv6Internet",
      version: "2020-06-16",
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
   * Changes the type of the IPv6 address that is used by a dual-stack Application Load Balancer (ALB) instance from private to public.
   * 
   * @remarks
   * ### Prerequisites
   * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
   * > If you set **AddressIpVersion** to **DualStack**:
   * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
   * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
   * ### Description
   * *   After the EnableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Internet** and the type of the IPv6 address of the ALB instance is changed from private to public. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, public IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the value of **Ipv6AddressType**.
   * *   **EnableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the status of the task.
   *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
   *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6Internet(request: $_model.EnableLoadBalancerIpv6InternetRequest): Promise<$_model.EnableLoadBalancerIpv6InternetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * Queries the details about a health check template.
   * 
   * @param request - GetHealthCheckTemplateAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHealthCheckTemplateAttributeResponse
   */
  async getHealthCheckTemplateAttributeWithOptions(request: $_model.GetHealthCheckTemplateAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHealthCheckTemplateAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHealthCheckTemplateAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHealthCheckTemplateAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetHealthCheckTemplateAttributeResponse({}));
  }

  /**
   * Queries the details about a health check template.
   * 
   * @param request - GetHealthCheckTemplateAttributeRequest
   * @returns GetHealthCheckTemplateAttributeResponse
   */
  async getHealthCheckTemplateAttribute(request: $_model.GetHealthCheckTemplateAttributeRequest): Promise<$_model.GetHealthCheckTemplateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttributeWithOptions(request: $_model.GetListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetListenerAttribute",
      version: "2020-06-16",
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
   * Queries the details of a listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttribute(request: $_model.GetListenerAttributeRequest): Promise<$_model.GetListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the health check status of a listener and its forwarding rules.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatusWithOptions(request: $_model.GetListenerHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetListenerHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeRule)) {
      query["IncludeRule"] = request.includeRule;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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
      action: "GetListenerHealthStatus",
      version: "2020-06-16",
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
   * Queries the health check status of a listener and its forwarding rules.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatus(request: $_model.GetListenerHealthStatusRequest): Promise<$_model.GetListenerHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getListenerHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Application Load Balancer (ALB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttributeWithOptions(request: $_model.GetLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoadBalancerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoadBalancerAttribute",
      version: "2020-06-16",
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
   * Queries the details of an Application Load Balancer (ALB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttribute(request: $_model.GetLoadBalancerAttributeRequest): Promise<$_model.GetLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries AScript rules.
   * 
   * @param request - ListAScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAScriptsResponse
   */
  async listAScriptsWithOptions(request: $_model.ListAScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AScriptIds)) {
      query["AScriptIds"] = request.AScriptIds;
    }

    if (!$dara.isNull(request.AScriptNames)) {
      query["AScriptNames"] = request.AScriptNames;
    }

    if (!$dara.isNull(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
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
      action: "ListAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAScriptsResponse>(await this.callApi(params, req, runtime), new $_model.ListAScriptsResponse({}));
  }

  /**
   * Queries AScript rules.
   * 
   * @param request - ListAScriptsRequest
   * @returns ListAScriptsResponse
   */
  async listAScripts(request: $_model.ListAScriptsRequest): Promise<$_model.ListAScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAScriptsWithOptions(request, runtime);
  }

  /**
   * Queries the entries of an access control list (ACL).
   * 
   * @param request - ListAclEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclEntriesResponse
   */
  async listAclEntriesWithOptions(request: $_model.ListAclEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAclEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "ListAclEntries",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAclEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAclEntriesResponse({}));
  }

  /**
   * Queries the entries of an access control list (ACL).
   * 
   * @param request - ListAclEntriesRequest
   * @returns ListAclEntriesResponse
   */
  async listAclEntries(request: $_model.ListAclEntriesRequest): Promise<$_model.ListAclEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAclEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the listeners that are associated with access control lists (ACLs).
   * 
   * @param request - ListAclRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclRelationsResponse
   */
  async listAclRelationsWithOptions(request: $_model.ListAclRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAclRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAclRelations",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAclRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAclRelationsResponse({}));
  }

  /**
   * Queries the listeners that are associated with access control lists (ACLs).
   * 
   * @param request - ListAclRelationsRequest
   * @returns ListAclRelationsResponse
   */
  async listAclRelations(request: $_model.ListAclRelationsRequest): Promise<$_model.ListAclRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAclRelationsWithOptions(request, runtime);
  }

  /**
   * Queries the access control lists (ACLs) in a region.
   * 
   * @param request - ListAclsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclsResponse
   */
  async listAclsWithOptions(request: $_model.ListAclsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAclsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!$dara.isNull(request.aclNames)) {
      query["AclNames"] = request.aclNames;
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
      action: "ListAcls",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAclsResponse>(await this.callApi(params, req, runtime), new $_model.ListAclsResponse({}));
  }

  /**
   * Queries the access control lists (ACLs) in a region.
   * 
   * @param request - ListAclsRequest
   * @returns ListAclsResponse
   */
  async listAcls(request: $_model.ListAclsRequest): Promise<$_model.ListAclsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  /**
   * Queries asynchronous tasks in a region.
   * 
   * @param request - ListAsynJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsynJobsResponse
   */
  async listAsynJobsWithOptions(request: $_model.ListAsynJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsynJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsynJobs",
      version: "2020-06-16",
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
   * Queries asynchronous tasks in a region.
   * 
   * @param request - ListAsynJobsRequest
   * @returns ListAsynJobsResponse
   */
  async listAsynJobs(request: $_model.ListAsynJobsRequest): Promise<$_model.ListAsynJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsynJobsWithOptions(request, runtime);
  }

  /**
   * Queries the health check templates in a specified region.
   * 
   * @param request - ListHealthCheckTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHealthCheckTemplatesResponse
   */
  async listHealthCheckTemplatesWithOptions(request: $_model.ListHealthCheckTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHealthCheckTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.healthCheckTemplateIds)) {
      query["HealthCheckTemplateIds"] = request.healthCheckTemplateIds;
    }

    if (!$dara.isNull(request.healthCheckTemplateNames)) {
      query["HealthCheckTemplateNames"] = request.healthCheckTemplateNames;
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
      action: "ListHealthCheckTemplates",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHealthCheckTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListHealthCheckTemplatesResponse({}));
  }

  /**
   * Queries the health check templates in a specified region.
   * 
   * @param request - ListHealthCheckTemplatesRequest
   * @returns ListHealthCheckTemplatesResponse
   */
  async listHealthCheckTemplates(request: $_model.ListHealthCheckTemplatesRequest): Promise<$_model.ListHealthCheckTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHealthCheckTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the certificates that are associated with a listener, including additional certificates and the default certificate.
   * 
   * @param request - ListListenerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificatesWithOptions(request: $_model.ListListenerCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListenerCertificatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateIds)) {
      query["CertificateIds"] = request.certificateIds;
    }

    if (!$dara.isNull(request.certificateType)) {
      query["CertificateType"] = request.certificateType;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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
      action: "ListListenerCertificates",
      version: "2020-06-16",
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
   * Queries the certificates that are associated with a listener, including additional certificates and the default certificate.
   * 
   * @param request - ListListenerCertificatesRequest
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificates(request: $_model.ListListenerCertificatesRequest): Promise<$_model.ListListenerCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the listeners in a specified region.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListListeners",
      version: "2020-06-16",
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
   * Queries the listeners in a specified region.
   * 
   * @param request - ListListenersRequest
   * @returns ListListenersResponse
   */
  async listListeners(request: $_model.ListListenersRequest): Promise<$_model.ListListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  /**
   * Queries instance configurations.
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

    if (!$dara.isNull(request.loadBalancerBussinessStatus)) {
      query["LoadBalancerBussinessStatus"] = request.loadBalancerBussinessStatus;
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

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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
      version: "2020-06-16",
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
   * Queries instance configurations.
   * 
   * @param request - ListLoadBalancersRequest
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancers(request: $_model.ListLoadBalancersRequest): Promise<$_model.ListLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries forwarding rules in a specified region.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  async listRulesWithOptions(request: $_model.ListRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
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

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRules",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRulesResponse({}));
  }

  /**
   * Queries forwarding rules in a specified region.
   * 
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  async listRules(request: $_model.ListRulesRequest): Promise<$_model.ListRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * Queries custom security policies in a region.
   * 
   * @param request - ListSecurityPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityPoliciesResponse
   */
  async listSecurityPoliciesWithOptions(request: $_model.ListSecurityPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityPolicyIds)) {
      query["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    if (!$dara.isNull(request.securityPolicyNames)) {
      query["SecurityPolicyNames"] = request.securityPolicyNames;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityPolicies",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityPoliciesResponse({}));
  }

  /**
   * Queries custom security policies in a region.
   * 
   * @param request - ListSecurityPoliciesRequest
   * @returns ListSecurityPoliciesResponse
   */
  async listSecurityPolicies(request: $_model.ListSecurityPoliciesRequest): Promise<$_model.ListSecurityPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the listeners that are associated with security policies.
   * 
   * @param request - ListSecurityPolicyRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityPolicyRelationsResponse
   */
  async listSecurityPolicyRelationsWithOptions(request: $_model.ListSecurityPolicyRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecurityPolicyRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityPolicyIds)) {
      query["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityPolicyRelations",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecurityPolicyRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecurityPolicyRelationsResponse({}));
  }

  /**
   * Queries the listeners that are associated with security policies.
   * 
   * @param request - ListSecurityPolicyRelationsRequest
   * @returns ListSecurityPolicyRelationsResponse
   */
  async listSecurityPolicyRelations(request: $_model.ListSecurityPolicyRelationsRequest): Promise<$_model.ListSecurityPolicyRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityPolicyRelationsWithOptions(request, runtime);
  }

  /**
   * Queries the servers in a server group.
   * 
   * @param request - ListServerGroupServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServersWithOptions(request: $_model.ListServerGroupServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerGroupServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.serverIds)) {
      query["ServerIds"] = request.serverIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServerGroupServers",
      version: "2020-06-16",
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
   * Queries the servers in a server group.
   * 
   * @param request - ListServerGroupServersRequest
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServers(request: $_model.ListServerGroupServersRequest): Promise<$_model.ListServerGroupServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerGroupServersWithOptions(request, runtime);
  }

  /**
   * Queries server groups.
   * 
   * @param request - ListServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupsResponse
   */
  async listServerGroupsWithOptions(request: $_model.ListServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverGroupIds)) {
      query["ServerGroupIds"] = request.serverGroupIds;
    }

    if (!$dara.isNull(request.serverGroupNames)) {
      query["ServerGroupNames"] = request.serverGroupNames;
    }

    if (!$dara.isNull(request.serverGroupType)) {
      query["ServerGroupType"] = request.serverGroupType;
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
      action: "ListServerGroups",
      version: "2020-06-16",
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
   * Queries server groups.
   * 
   * @param request - ListServerGroupsRequest
   * @returns ListServerGroupsResponse
   */
  async listServerGroups(request: $_model.ListServerGroupsRequest): Promise<$_model.ListServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries system security policies in a region.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemSecurityPoliciesResponse
   */
  async listSystemSecurityPoliciesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemSecurityPoliciesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemSecurityPolicies",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemSecurityPoliciesResponse({}));
  }

  /**
   * Queries system security policies in a region.
   * @returns ListSystemSecurityPoliciesResponse
   */
  async listSystemSecurityPolicies(): Promise<$_model.ListSystemSecurityPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2020-06-16",
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
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags of resources.
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
      version: "2020-06-16",
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
   * Queries the tags of resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries tag values.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
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

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2020-06-16",
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
   * Queries tag values.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Adds an Application Load Balancer (ALB) instance to a security group.
   * 
   * @remarks
   *   By default, security groups are unavailable. To use security groups, contact your account manager.
   * *   Make sure that a security group is created. For more information about how to create security groups, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/2679843.html).
   * *   Each ALB instance can be added to at most four security groups.
   * *   To query the security groups of an ALB instance, call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/2254835.html) operation.
   * *   GetLoadBalancerAttribute is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAsynJobs](https://help.aliyun.com/document_detail/2254893.html) operation to query the status of the task.
   *     *   If the task is in the Succeeded state, the ALB instance is added to the security group.
   *     *   If the task is in the Processing state, the ALB instance is being added to the security group. In this case, you can query the task but cannot perform other operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroupWithOptions(request: $_model.LoadBalancerJoinSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadBalancerJoinSecurityGroupResponse> {
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

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadBalancerJoinSecurityGroup",
      version: "2020-06-16",
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
   * Adds an Application Load Balancer (ALB) instance to a security group.
   * 
   * @remarks
   *   By default, security groups are unavailable. To use security groups, contact your account manager.
   * *   Make sure that a security group is created. For more information about how to create security groups, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/2679843.html).
   * *   Each ALB instance can be added to at most four security groups.
   * *   To query the security groups of an ALB instance, call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/2254835.html) operation.
   * *   GetLoadBalancerAttribute is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAsynJobs](https://help.aliyun.com/document_detail/2254893.html) operation to query the status of the task.
   *     *   If the task is in the Succeeded state, the ALB instance is added to the security group.
   *     *   If the task is in the Processing state, the ALB instance is being added to the security group. In this case, you can query the task but cannot perform other operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroup(request: $_model.LoadBalancerJoinSecurityGroupRequest): Promise<$_model.LoadBalancerJoinSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadBalancerJoinSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Removes an Application Load Balancer (ALB) instance from a security group.
   * 
   * @remarks
   * - LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAsynJobs](https://help.aliyun.com/document_detail/2254893.html) operation to query the status of the task.
   *   - If the task is in the Succeeded state, the ALB instance is removed from the security group.
   *   - If the task is in the Processing state, the ALB instance is being removed from the security group. In this case, you can query the task but cannot perform other operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroupWithOptions(request: $_model.LoadBalancerLeaveSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadBalancerLeaveSecurityGroupResponse> {
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

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadBalancerLeaveSecurityGroup",
      version: "2020-06-16",
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
   * Removes an Application Load Balancer (ALB) instance from a security group.
   * 
   * @remarks
   * - LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAsynJobs](https://help.aliyun.com/document_detail/2254893.html) operation to query the status of the task.
   *   - If the task is in the Succeeded state, the ALB instance is removed from the security group.
   *   - If the task is in the Processing state, the ALB instance is being removed from the security group. In this case, you can query the task but cannot perform other operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroup(request: $_model.LoadBalancerLeaveSecurityGroupRequest): Promise<$_model.LoadBalancerLeaveSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadBalancerLeaveSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a capacity reservation.
   * 
   * @remarks
   * *ModifyCapacityReservation** is an asynchronous operation. The system returns a request ID, but the capacity reservation is not yet complete and the reservation task continues to run in the background. You can call DescribeCapacityReservation to query the status of the capacity reservation:
   *    - **Pending**: The capacity reservation is in progress.
   *    - **Provisioned**: The capacity reservation is complete.
   *    - **Rebalancing**: The capacity reservation is being redistributed across zones.
   * 
   * @param request - ModifyCapacityReservationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCapacityReservationResponse
   */
  async modifyCapacityReservationWithOptions(request: $_model.ModifyCapacityReservationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCapacityReservationResponse> {
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

    if (!$dara.isNull(request.minimumLoadBalancerCapacity)) {
      query["MinimumLoadBalancerCapacity"] = request.minimumLoadBalancerCapacity;
    }

    if (!$dara.isNull(request.resetCapacityReservation)) {
      query["ResetCapacityReservation"] = request.resetCapacityReservation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCapacityReservation",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCapacityReservationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCapacityReservationResponse({}));
  }

  /**
   * Creates or modifies a capacity reservation.
   * 
   * @remarks
   * *ModifyCapacityReservation** is an asynchronous operation. The system returns a request ID, but the capacity reservation is not yet complete and the reservation task continues to run in the background. You can call DescribeCapacityReservation to query the status of the capacity reservation:
   *    - **Pending**: The capacity reservation is in progress.
   *    - **Provisioned**: The capacity reservation is complete.
   *    - **Rebalancing**: The capacity reservation is being redistributed across zones.
   * 
   * @param request - ModifyCapacityReservationRequest
   * @returns ModifyCapacityReservationResponse
   */
  async modifyCapacityReservation(request: $_model.ModifyCapacityReservationRequest): Promise<$_model.ModifyCapacityReservationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCapacityReservationWithOptions(request, runtime);
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
      action: "MoveResourceGroup",
      version: "2020-06-16",
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
   * Removes entries from an access control list (ACL).
   * 
   * @remarks
   * *RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](https://help.aliyun.com/document_detail/213616.html) operation to query the status of the task.
   * *   If an ACL is in the **Removing** state, the entries are being removed.
   * *   If an ACL cannot be found, the entries are removed.
   * 
   * @param request - RemoveEntriesFromAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAclWithOptions(request: $_model.RemoveEntriesFromAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveEntriesFromAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.entries)) {
      query["Entries"] = request.entries;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveEntriesFromAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveEntriesFromAclResponse>(await this.callApi(params, req, runtime), new $_model.RemoveEntriesFromAclResponse({}));
  }

  /**
   * Removes entries from an access control list (ACL).
   * 
   * @remarks
   * *RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](https://help.aliyun.com/document_detail/213616.html) operation to query the status of the task.
   * *   If an ACL is in the **Removing** state, the entries are being removed.
   * *   If an ACL cannot be found, the entries are removed.
   * 
   * @param request - RemoveEntriesFromAclRequest
   * @returns RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAcl(request: $_model.RemoveEntriesFromAclRequest): Promise<$_model.RemoveEntriesFromAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  /**
   * Removes backend servers from a server group.
   * 
   * @remarks
   * *RemoveServersFromServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/2254862.html) to query the status of a server group.
   *    - If the server group is in the **Configuring** state, the server group is being modified.
   *    - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/2254863.html) to query the status of a backend server.
   *    - If the backend server is in the **Removing** state, the backend server is being removed from the server group.
   *    - If the backend server cannot be found, the backend server is no longer in the server group.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroupWithOptions(request: $_model.RemoveServersFromServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveServersFromServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.servers)) {
      query["Servers"] = request.servers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveServersFromServerGroup",
      version: "2020-06-16",
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
   * Removes backend servers from a server group.
   * 
   * @remarks
   * *RemoveServersFromServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/2254862.html) to query the status of a server group.
   *    - If the server group is in the **Configuring** state, the server group is being modified.
   *    - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/2254863.html) to query the status of a backend server.
   *    - If the backend server is in the **Removing** state, the backend server is being removed from the server group.
   *    - If the backend server cannot be found, the backend server is no longer in the server group.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroup(request: $_model.RemoveServersFromServerGroupRequest): Promise<$_model.RemoveServersFromServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  /**
   * Replaces backend servers in a backend server group.
   * 
   * @remarks
   * The **ReplaceServersInServerGroup** operation is asynchronous. After a request ID is returned, the backend server replacement task is still being processed in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the status of a server group:
   *     - If the server group is in the **Configuring** state, the server group is being modified.
   *     - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) to query the status of a backend server:
   *     - If the backend server is in the **Replacing** state, the server group is removing the server and adding a new server.
   *     - If the backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - ReplaceServersInServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceServersInServerGroupResponse
   */
  async replaceServersInServerGroupWithOptions(request: $_model.ReplaceServersInServerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceServersInServerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.removedServers)) {
      query["RemovedServers"] = request.removedServers;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addedServers)) {
      bodyFlat["AddedServers"] = request.addedServers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceServersInServerGroup",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceServersInServerGroupResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceServersInServerGroupResponse({}));
  }

  /**
   * Replaces backend servers in a backend server group.
   * 
   * @remarks
   * The **ReplaceServersInServerGroup** operation is asynchronous. After a request ID is returned, the backend server replacement task is still being processed in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the status of a server group:
   *     - If the server group is in the **Configuring** state, the server group is being modified.
   *     - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) to query the status of a backend server:
   *     - If the backend server is in the **Replacing** state, the server group is removing the server and adding a new server.
   *     - If the backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - ReplaceServersInServerGroupRequest
   * @returns ReplaceServersInServerGroupResponse
   */
  async replaceServersInServerGroup(request: $_model.ReplaceServersInServerGroupRequest): Promise<$_model.ReplaceServersInServerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceServersInServerGroupWithOptions(request, runtime);
  }

  /**
   * Starts the specified listener.
   * 
   * @remarks
   * The **StartListener** API operation is asynchronous. The system returns a request ID, but the listener has not been started and the start task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the start status of the listener:
   * - If the listener is in the **Configuring** state, the listener is being started.
   * - If the listener is in the **Running** state, the listener is started.
   * 
   * @param request - StartListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartListenerResponse
   */
  async startListenerWithOptions(request: $_model.StartListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartListenerResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartListener",
      version: "2020-06-16",
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
   * Starts the specified listener.
   * 
   * @remarks
   * The **StartListener** API operation is asynchronous. The system returns a request ID, but the listener has not been started and the start task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the start status of the listener:
   * - If the listener is in the **Configuring** state, the listener is being started.
   * - If the listener is in the **Running** state, the listener is started.
   * 
   * @param request - StartListenerRequest
   * @returns StartListenerResponse
   */
  async startListener(request: $_model.StartListenerRequest): Promise<$_model.StartListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  /**
   * Removes the EIP or VIP of a zone from DNS resolution.
   * 
   * @remarks
   * Only ALB instances in fixed IP mode are supported.
   * You cannot remove a zone from an ALB instance if the instance has only one zone in the Active state.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZonesWithOptions(request: $_model.StartShiftLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartShiftLoadBalancerZonesResponse> {
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

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartShiftLoadBalancerZones",
      version: "2020-06-16",
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
   * Removes the EIP or VIP of a zone from DNS resolution.
   * 
   * @remarks
   * Only ALB instances in fixed IP mode are supported.
   * You cannot remove a zone from an ALB instance if the instance has only one zone in the Active state.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZones(request: $_model.StartShiftLoadBalancerZonesRequest): Promise<$_model.StartShiftLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Stops a specified listener.
   * 
   * @remarks
   * The **StopListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener is not immediately stopped. The stop task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the stop status of the listener:
   * - If the listener is in the **Configuring** state, the listener is being stopped.
   * - If the listener is in the **Stopped** state, the listener is stopped.
   * 
   * @param request - StopListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopListenerResponse
   */
  async stopListenerWithOptions(request: $_model.StopListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopListenerResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopListener",
      version: "2020-06-16",
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
   * Stops a specified listener.
   * 
   * @remarks
   * The **StopListener** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener is not immediately stopped. The stop task is still running in the background. You can call [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) to query the stop status of the listener:
   * - If the listener is in the **Configuring** state, the listener is being stopped.
   * - If the listener is in the **Stopped** state, the listener is stopped.
   * 
   * @param request - StopListenerRequest
   * @returns StopListenerResponse
   */
  async stopListener(request: $_model.StopListenerRequest): Promise<$_model.StopListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
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
      version: "2020-06-16",
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
   * Adds tags to resources.
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2020-06-16",
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
   * Removes tags from resources.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates programmable scripts.
   * 
   * @remarks
   * *UpdateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the programmable script is not yet updated, and the update task is still running in the background. You can call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the update status of the programmable script:
   *    - If the programmable script is in the **Configuring** state, the programmable script is being updated.
   *    - If the programmable script is in the **Available** state, the programmable script is updated.
   * 
   * @param request - UpdateAScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAScriptsResponse
   */
  async updateAScriptsWithOptions(request: $_model.UpdateAScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AScripts)) {
      query["AScripts"] = request.AScripts;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAScriptsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAScriptsResponse({}));
  }

  /**
   * Updates programmable scripts.
   * 
   * @remarks
   * *UpdateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the programmable script is not yet updated, and the update task is still running in the background. You can call [ListAScripts](https://help.aliyun.com/document_detail/472574.html) to query the update status of the programmable script:
   *    - If the programmable script is in the **Configuring** state, the programmable script is being updated.
   *    - If the programmable script is in the **Available** state, the programmable script is updated.
   * 
   * @param request - UpdateAScriptsRequest
   * @returns UpdateAScriptsResponse
   */
  async updateAScripts(request: $_model.UpdateAScriptsRequest): Promise<$_model.UpdateAScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAScriptsWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of an ACL, such as its name.
   * 
   * @param request - UpdateAclAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAclAttributeResponse
   */
  async updateAclAttributeWithOptions(request: $_model.UpdateAclAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAclAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAclAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAclAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAclAttributeResponse({}));
  }

  /**
   * Updates the attributes of an ACL, such as its name.
   * 
   * @param request - UpdateAclAttributeRequest
   * @returns UpdateAclAttributeResponse
   */
  async updateAclAttribute(request: $_model.UpdateAclAttributeRequest): Promise<$_model.UpdateAclAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  /**
   * This operation updates the attributes of a health check template, such as its name and health check protocol.
   * 
   * @param request - UpdateHealthCheckTemplateAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHealthCheckTemplateAttributeResponse
   */
  async updateHealthCheckTemplateAttributeWithOptions(request: $_model.UpdateHealthCheckTemplateAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHealthCheckTemplateAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckCodes)) {
      query["HealthCheckCodes"] = request.healthCheckCodes;
    }

    if (!$dara.isNull(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!$dara.isNull(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!$dara.isNull(request.healthCheckHttpVersion)) {
      query["HealthCheckHttpVersion"] = request.healthCheckHttpVersion;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!$dara.isNull(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!$dara.isNull(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    if (!$dara.isNull(request.healthCheckTemplateName)) {
      query["HealthCheckTemplateName"] = request.healthCheckTemplateName;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHealthCheckTemplateAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHealthCheckTemplateAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHealthCheckTemplateAttributeResponse({}));
  }

  /**
   * This operation updates the attributes of a health check template, such as its name and health check protocol.
   * 
   * @param request - UpdateHealthCheckTemplateAttributeRequest
   * @returns UpdateHealthCheckTemplateAttributeResponse
   */
  async updateHealthCheckTemplateAttribute(request: $_model.UpdateHealthCheckTemplateAttributeRequest): Promise<$_model.UpdateHealthCheckTemplateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a listener, such as the name and default actions.
   * 
   * @remarks
   * The **UpdateListenerAttribute** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener configurations are not immediately updated. The update task continues to run in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the update status of the listener configurations:
   * - If the listener is in the **Configuring** state, the listener configurations are being updated.
   * - If the listener is in the **Running** state, the listener configurations are updated.
   * 
   * @param request - UpdateListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttributeWithOptions(request: $_model.UpdateListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caCertificates)) {
      query["CaCertificates"] = request.caCertificates;
    }

    if (!$dara.isNull(request.caEnabled)) {
      query["CaEnabled"] = request.caEnabled;
    }

    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.defaultActions)) {
      query["DefaultActions"] = request.defaultActions;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.gzipEnabled)) {
      query["GzipEnabled"] = request.gzipEnabled;
    }

    if (!$dara.isNull(request.http2Enabled)) {
      query["Http2Enabled"] = request.http2Enabled;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerDescription)) {
      query["ListenerDescription"] = request.listenerDescription;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!$dara.isNull(request.quicConfig)) {
      query["QuicConfig"] = request.quicConfig;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateListenerAttribute",
      version: "2020-06-16",
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
   * Updates the configurations of a listener, such as the name and default actions.
   * 
   * @remarks
   * The **UpdateListenerAttribute** operation is asynchronous. After you call this operation, the system returns a request ID, but the listener configurations are not immediately updated. The update task continues to run in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the update status of the listener configurations:
   * - If the listener is in the **Configuring** state, the listener configurations are being updated.
   * - If the listener is in the **Running** state, the listener configurations are updated.
   * 
   * @param request - UpdateListenerAttributeRequest
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttribute(request: $_model.UpdateListenerAttributeRequest): Promise<$_model.UpdateListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the log-related attributes of a listener, such as access logs.
   * 
   * @remarks
   * The **UpdateListenerLogConfig** operation is asynchronous. The system returns a request ID, but the log configuration of the listener is not immediately updated. The update task is still running in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the update status of the log configuration:
   * - If the listener is in the **Configuring** state, the log configuration is being updated.
   * - If the listener is in the **Running** state, the log configuration is updated.
   * > You can update the log configuration of a listener only after you enable the access log feature for the instance.
   * 
   * @param request - UpdateListenerLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListenerLogConfigResponse
   */
  async updateListenerLogConfigWithOptions(request: $_model.UpdateListenerLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateListenerLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLogRecordCustomizedHeadersEnabled)) {
      query["AccessLogRecordCustomizedHeadersEnabled"] = request.accessLogRecordCustomizedHeadersEnabled;
    }

    if (!$dara.isNull(request.accessLogTracingConfig)) {
      query["AccessLogTracingConfig"] = request.accessLogTracingConfig;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateListenerLogConfig",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateListenerLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateListenerLogConfigResponse({}));
  }

  /**
   * Updates the log-related attributes of a listener, such as access logs.
   * 
   * @remarks
   * The **UpdateListenerLogConfig** operation is asynchronous. The system returns a request ID, but the log configuration of the listener is not immediately updated. The update task is still running in the background. You can call the [GetListenerAttribute](https://help.aliyun.com/document_detail/2254865.html) operation to query the update status of the log configuration:
   * - If the listener is in the **Configuring** state, the log configuration is being updated.
   * - If the listener is in the **Running** state, the log configuration is updated.
   * > You can update the log configuration of a listener only after you enable the access log feature for the instance.
   * 
   * @param request - UpdateListenerLogConfigRequest
   * @returns UpdateListenerLogConfigResponse
   */
  async updateListenerLogConfig(request: $_model.UpdateListenerLogConfigRequest): Promise<$_model.UpdateListenerLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListenerLogConfigWithOptions(request, runtime);
  }

  /**
   * Changes the network type of an Application Load Balancer (ALB) instance.
   * 
   * @remarks
   * Before you begin:
   * - You have created an ALB instance. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html).
   * - To change the network type of an ALB instance from private network to public network using this operation, you must first create an elastic IP address (EIP). For more information, see [AllocateEipAddress](https://help.aliyun.com/document_detail/120192.html).
   * Usage notes:
   * **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID, but the network type of the ALB instance is not yet changed. The change node continues in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the network type change status of the ALB instance:
   * - If the ALB instance is in the **Configuring** state, the load balancing instance network type is being changed.
   * - If the ALB instance is in the **Active** state, the load balancing instance network type has been changed successfully.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfigWithOptions(request: $_model.UpdateLoadBalancerAddressTypeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerAddressTypeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.retainResourceType)) {
      query["RetainResourceType"] = request.retainResourceType;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerAddressTypeConfig",
      version: "2020-06-16",
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
   * Changes the network type of an Application Load Balancer (ALB) instance.
   * 
   * @remarks
   * Before you begin:
   * - You have created an ALB instance. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/214358.html).
   * - To change the network type of an ALB instance from private network to public network using this operation, you must first create an elastic IP address (EIP). For more information, see [AllocateEipAddress](https://help.aliyun.com/document_detail/120192.html).
   * Usage notes:
   * **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID, but the network type of the ALB instance is not yet changed. The change node continues in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the network type change status of the ALB instance:
   * - If the ALB instance is in the **Configuring** state, the load balancing instance network type is being changed.
   * - If the ALB instance is in the **Active** state, the load balancing instance network type has been changed successfully.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfig(request: $_model.UpdateLoadBalancerAddressTypeConfigRequest): Promise<$_model.UpdateLoadBalancerAddressTypeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerAddressTypeConfigWithOptions(request, runtime);
  }

  /**
   * Updates the property of a load balancing instance, such as the name and modification protection settings.
   * 
   * @remarks
   * The **UpdateLoadBalancerAttribute** operation is asynchronous. After you invoke this operation, the system returns a request ID, but the property of the application load balancing instance is not immediately updated. The update task is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the update status of the application load balancing instance property:
   * - When the property of the application load balancing instance is in the **Configuring** state, it indicates that the property is being updated.
   * - When the property of the application load balancing instance is in the **Active** state, it indicates that the property is updated.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttributeWithOptions(request: $_model.UpdateLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerAttributeResponse> {
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

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.modificationProtectionConfig)) {
      query["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerAttribute",
      version: "2020-06-16",
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
   * Updates the property of a load balancing instance, such as the name and modification protection settings.
   * 
   * @remarks
   * The **UpdateLoadBalancerAttribute** operation is asynchronous. After you invoke this operation, the system returns a request ID, but the property of the application load balancing instance is not immediately updated. The update task is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the update status of the application load balancing instance property:
   * - When the property of the application load balancing instance is in the **Configuring** state, it indicates that the property is being updated.
   * - When the property of the application load balancing instance is in the **Active** state, it indicates that the property is updated.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttribute(request: $_model.UpdateLoadBalancerAttributeRequest): Promise<$_model.UpdateLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Changes the current load balancing edition.
   * 
   * @remarks
   * - ALB instances can only be upgraded from Basic Edition to Standard Edition or WAF-enhanced Edition, or downgraded from WAF-enhanced Edition to Standard Edition. Downgrading from Standard Edition or WAF-enhanced Edition to Basic Edition is not supported. For more information, see [Upgrade the feature edition of an instance](https://help.aliyun.com/document_detail/214654.html).
   * - The **UpdateLoadBalancerEdition** operation is asynchronous. After you invoke the operation, the system returns a request ID, but the application load balancing edition has not been modified. The modification node is still running in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the modification status of the application load balancing edition:
   *     - If the application load balancing edition is in the **Configuring** state, the edition is being modified.
   *     - If the application load balancing edition is in the **Active** state, the edition is successfully modified.
   * 
   * @param request - UpdateLoadBalancerEditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerEditionResponse
   */
  async updateLoadBalancerEditionWithOptions(request: $_model.UpdateLoadBalancerEditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerEditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.loadBalancerEdition)) {
      query["LoadBalancerEdition"] = request.loadBalancerEdition;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerEdition",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerEditionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerEditionResponse({}));
  }

  /**
   * Changes the current load balancing edition.
   * 
   * @remarks
   * - ALB instances can only be upgraded from Basic Edition to Standard Edition or WAF-enhanced Edition, or downgraded from WAF-enhanced Edition to Standard Edition. Downgrading from Standard Edition or WAF-enhanced Edition to Basic Edition is not supported. For more information, see [Upgrade the feature edition of an instance](https://help.aliyun.com/document_detail/214654.html).
   * - The **UpdateLoadBalancerEdition** operation is asynchronous. After you invoke the operation, the system returns a request ID, but the application load balancing edition has not been modified. The modification node is still running in the background. You can invoke [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) to query the modification status of the application load balancing edition:
   *     - If the application load balancing edition is in the **Configuring** state, the edition is being modified.
   *     - If the application load balancing edition is in the **Active** state, the edition is successfully modified.
   * 
   * @param request - UpdateLoadBalancerEditionRequest
   * @returns UpdateLoadBalancerEditionResponse
   */
  async updateLoadBalancerEdition(request: $_model.UpdateLoadBalancerEditionRequest): Promise<$_model.UpdateLoadBalancerEditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerEditionWithOptions(request, runtime);
  }

  /**
   * Modifies the active zone property of an application load balancing instance.
   * 
   * @remarks
   * The **UpdateLoadBalancerZones** API operation is asynchronous. After you invoke this operation, the system returns a request ID, but the active zone property of the application load balancing instance is not immediately modified. The modification node is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the modification status of the active zone property:
   * - If the application load balancing instance is in the **Configuring** state, the active zone property is being modified.
   * - If the application load balancing instance is in the **Active** state, the active zone property is modified.
   * > Invoking the UpdateLoadBalancerZones operation may incur fees.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZonesWithOptions(request: $_model.UpdateLoadBalancerZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerZonesResponse> {
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

    if (!$dara.isNull(request.retainResourceType)) {
      query["RetainResourceType"] = request.retainResourceType;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancerZones",
      version: "2020-06-16",
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
   * Modifies the active zone property of an application load balancing instance.
   * 
   * @remarks
   * The **UpdateLoadBalancerZones** API operation is asynchronous. After you invoke this operation, the system returns a request ID, but the active zone property of the application load balancing instance is not immediately modified. The modification node is still running in the background. You can invoke the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation to query the modification status of the active zone property:
   * - If the application load balancing instance is in the **Configuring** state, the active zone property is being modified.
   * - If the application load balancing instance is in the **Active** state, the active zone property is modified.
   * > Invoking the UpdateLoadBalancerZones operation may incur fees.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZones(request: $_model.UpdateLoadBalancerZonesRequest): Promise<$_model.UpdateLoadBalancerZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a forwarding rule, such as conditions, actions, and name.
   * 
   * @remarks
   * - **UpdateRuleAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the forwarding rule attributes are not yet updated. The update task continues to run in the background. You can call [ListRules](https://help.aliyun.com/document_detail/214379.html) to query the update status of the forwarding rule attributes:
   *     - If the forwarding rule attributes are in the **Configuring** state, the attributes are being updated.
   *     - If the forwarding rule attributes are in the **Available** state, the attributes are updated.
   * - The maximum number of conditions (**RuleConditions**) and actions (**RuleActions**) that can be added to a forwarding rule is as follows:
   *     - Conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enabled Edition.
   *     - Actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enabled Edition.
   * 
   * @param request - UpdateRuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleAttributeResponse
   */
  async updateRuleAttributeWithOptions(request: $_model.UpdateRuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.ruleActions)) {
      query["RuleActions"] = request.ruleActions;
    }

    if (!$dara.isNull(request.ruleConditions)) {
      query["RuleConditions"] = request.ruleConditions;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleAttributeResponse({}));
  }

  /**
   * Updates the attributes of a forwarding rule, such as conditions, actions, and name.
   * 
   * @remarks
   * - **UpdateRuleAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the forwarding rule attributes are not yet updated. The update task continues to run in the background. You can call [ListRules](https://help.aliyun.com/document_detail/214379.html) to query the update status of the forwarding rule attributes:
   *     - If the forwarding rule attributes are in the **Configuring** state, the attributes are being updated.
   *     - If the forwarding rule attributes are in the **Available** state, the attributes are updated.
   * - The maximum number of conditions (**RuleConditions**) and actions (**RuleActions**) that can be added to a forwarding rule is as follows:
   *     - Conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enabled Edition.
   *     - Actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enabled Edition.
   * 
   * @param request - UpdateRuleAttributeRequest
   * @returns UpdateRuleAttributeResponse
   */
  async updateRuleAttribute(request: $_model.UpdateRuleAttributeRequest): Promise<$_model.UpdateRuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of forwarding rules in batches.
   * 
   * @remarks
   * *UpdateRulesAttribute** is an asynchronous operation. The system returns a request ID, but the forwarding rule attributes are not immediately updated. The update task continues to run in the background. You can call [ListRules](https://help.aliyun.com/document_detail/214379.html) to query the update status of the forwarding rule attributes:
   * - If the attributes of multiple forwarding rules are in the **Configuring** state, the forwarding rule attributes are being updated in batches.
   * - If the attributes of multiple forwarding rules are in the **Available** state, the forwarding rule attributes are successfully updated in batches.
   * - The maximum numbers of conditions (**RuleConditions**) and actions (**RuleActions**) that can be added to a single forwarding rule are as follows:
   *     - Conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - UpdateRulesAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRulesAttributeResponse
   */
  async updateRulesAttributeWithOptions(request: $_model.UpdateRulesAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRulesAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      bodyFlat["Rules"] = request.rules;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRulesAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRulesAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRulesAttributeResponse({}));
  }

  /**
   * Updates the attributes of forwarding rules in batches.
   * 
   * @remarks
   * *UpdateRulesAttribute** is an asynchronous operation. The system returns a request ID, but the forwarding rule attributes are not immediately updated. The update task continues to run in the background. You can call [ListRules](https://help.aliyun.com/document_detail/214379.html) to query the update status of the forwarding rule attributes:
   * - If the attributes of multiple forwarding rules are in the **Configuring** state, the forwarding rule attributes are being updated in batches.
   * - If the attributes of multiple forwarding rules are in the **Available** state, the forwarding rule attributes are successfully updated in batches.
   * - The maximum numbers of conditions (**RuleConditions**) and actions (**RuleActions**) that can be added to a single forwarding rule are as follows:
   *     - Conditions: 5 for Basic Edition, 10 for Standard Edition, and 10 for WAF-enhanced Edition.
   *     - Actions: 3 for Basic Edition, 5 for Standard Edition, and 5 for WAF-enhanced Edition.
   * 
   * @param request - UpdateRulesAttributeRequest
   * @returns UpdateRulesAttributeResponse
   */
  async updateRulesAttribute(request: $_model.UpdateRulesAttributeRequest): Promise<$_model.UpdateRulesAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRulesAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a security policy, such as the security protocol version and cipher suite.
   * 
   * @remarks
   * ## Usage notes
   * The **UpdateSecurityPolicyAttribute** operation is asynchronous. After you call this operation, the system returns a request ID, but the security policy attributes are not immediately updated. The update task is still running in the background. You can call [ListSecurityPolicies](https://help.aliyun.com/document_detail/213609.html) to query the update status of the security policy attributes:
   * - If the security policy is in the **Configuring** state, the attributes are being updated.
   * - If the security policy is in the **Available** state, the attributes are updated.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttributeWithOptions(request: $_model.UpdateSecurityPolicyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityPolicyAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.securityPolicyName)) {
      query["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!$dara.isNull(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityPolicyAttribute",
      version: "2020-06-16",
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
   * Updates the attributes of a security policy, such as the security protocol version and cipher suite.
   * 
   * @remarks
   * ## Usage notes
   * The **UpdateSecurityPolicyAttribute** operation is asynchronous. After you call this operation, the system returns a request ID, but the security policy attributes are not immediately updated. The update task is still running in the background. You can call [ListSecurityPolicies](https://help.aliyun.com/document_detail/213609.html) to query the update status of the security policy attributes:
   * - If the security policy is in the **Configuring** state, the attributes are being updated.
   * - If the security policy is in the **Available** state, the attributes are updated.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttribute(request: $_model.UpdateSecurityPolicyAttributeRequest): Promise<$_model.UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a server group, such as health checks, session persistence, name, scheduling algorithm, and health check protocol.
   * 
   * @remarks
   * The **UpdateServerGroupAttribute** operation is asynchronous. After you send the request, the system returns a request ID, but the server group configurations are not immediately updated. The update task runs in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the update status of the server group configurations:
   * - If the server group configurations are in the **Configuring** state, the configurations are being updated.
   * - If the server group configurations are in the **Available** state, the configurations are updated.
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttributeWithOptions(request: $_model.UpdateServerGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServerGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionDrainConfig)) {
      query["ConnectionDrainConfig"] = request.connectionDrainConfig;
    }

    if (!$dara.isNull(request.crossZoneEnabled)) {
      query["CrossZoneEnabled"] = request.crossZoneEnabled;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.healthCheckConfig)) {
      query["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!$dara.isNull(request.ipVersionAffinityMode)) {
      query["IpVersionAffinityMode"] = request.ipVersionAffinityMode;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!$dara.isNull(request.serverGroupName)) {
      query["ServerGroupName"] = request.serverGroupName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.slowStartConfig)) {
      query["SlowStartConfig"] = request.slowStartConfig;
    }

    if (!$dara.isNull(request.stickySessionConfig)) {
      query["StickySessionConfig"] = request.stickySessionConfig;
    }

    if (!$dara.isNull(request.uchConfig)) {
      query["UchConfig"] = request.uchConfig;
    }

    if (!$dara.isNull(request.upstreamKeepaliveEnabled)) {
      query["UpstreamKeepaliveEnabled"] = request.upstreamKeepaliveEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServerGroupAttribute",
      version: "2020-06-16",
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
   * Updates the configurations of a server group, such as health checks, session persistence, name, scheduling algorithm, and health check protocol.
   * 
   * @remarks
   * The **UpdateServerGroupAttribute** operation is asynchronous. After you send the request, the system returns a request ID, but the server group configurations are not immediately updated. The update task runs in the background. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the update status of the server group configurations:
   * - If the server group configurations are in the **Configuring** state, the configurations are being updated.
   * - If the server group configurations are in the **Available** state, the configurations are updated.
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttribute(request: $_model.UpdateServerGroupAttributeRequest): Promise<$_model.UpdateServerGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of backend servers in a server group, such as weights and descriptions.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the backend server configurations are not yet updated, and the update task is still running in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the status of a server group:
   *     - If the server group is in the **Configuring** state, the server group is being modified.
   *     - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) to query the status of a backend server:
   *     - If the backend server is in the **Configuring** state, the backend server is being modified.
   *     - If the backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttributeWithOptions(request: $_model.UpdateServerGroupServersAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServerGroupServersAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.servers)) {
      bodyFlat["Servers"] = request.servers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServerGroupServersAttribute",
      version: "2020-06-16",
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
   * Updates the configurations of backend servers in a server group, such as weights and descriptions.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the backend server configurations are not yet updated, and the update task is still running in the background.
   * 1. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the status of a server group:
   *     - If the server group is in the **Configuring** state, the server group is being modified.
   *     - If the server group is in the **Available** state, the server group is running.
   * 2. You can call [ListServerGroupServers](https://help.aliyun.com/document_detail/213628.html) to query the status of a backend server:
   *     - If the backend server is in the **Configuring** state, the backend server is being modified.
   *     - If the backend server is in the **Available** state, the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttribute(request: $_model.UpdateServerGroupServersAttributeRequest): Promise<$_model.UpdateServerGroupServersAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServerGroupServersAttributeWithOptions(request, runtime);
  }

}
