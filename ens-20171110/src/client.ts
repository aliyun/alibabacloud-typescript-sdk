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
    this._endpoint = this.getEndpoint("ens", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Associates a network access control list (ACL) with a network.
   * 
   * @param request - AccosicateNetworkAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccosicateNetworkAclResponse
   */
  async accosicateNetworkAclWithOptions(request: $_model.AccosicateNetworkAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AccosicateNetworkAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkAclId)) {
      query["NetworkAclId"] = request.networkAclId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AccosicateNetworkAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AccosicateNetworkAclResponse>(await this.callApi(params, req, runtime), new $_model.AccosicateNetworkAclResponse({}));
  }

  /**
   * Associates a network access control list (ACL) with a network.
   * 
   * @param request - AccosicateNetworkAclRequest
   * @returns AccosicateNetworkAclResponse
   */
  async accosicateNetworkAcl(request: $_model.AccosicateNetworkAclRequest): Promise<$_model.AccosicateNetworkAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.accosicateNetworkAclWithOptions(request, runtime);
  }

  /**
   * Adds backend servers.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param tmpReq - AddBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBackendServersResponse
   */
  async addBackendServersWithOptions(tmpReq: $_model.AddBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBackendServersResponse> {
    tmpReq.validate();
    let request = new $_model.AddBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBackendServers",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - AddBackendServersRequest
   * @returns AddBackendServersResponse
   */
  async addBackendServers(request: $_model.AddBackendServersRequest): Promise<$_model.AddBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  /**
   * Adds an IPv6 network interface controller (NIC). A public IP address is automatically assigned at the same time.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 5 times per second per user.
   * *   Internal networks and IPv4 addresses are not supported.
   * 
   * @param request - AddNetworkInterfaceToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddNetworkInterfaceToInstanceResponse
   */
  async addNetworkInterfaceToInstanceWithOptions(request: $_model.AddNetworkInterfaceToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddNetworkInterfaceToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networks)) {
      query["Networks"] = request.networks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddNetworkInterfaceToInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddNetworkInterfaceToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AddNetworkInterfaceToInstanceResponse({}));
  }

  /**
   * Adds an IPv6 network interface controller (NIC). A public IP address is automatically assigned at the same time.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 5 times per second per user.
   * *   Internal networks and IPv4 addresses are not supported.
   * 
   * @param request - AddNetworkInterfaceToInstanceRequest
   * @returns AddNetworkInterfaceToInstanceResponse
   */
  async addNetworkInterfaceToInstance(request: $_model.AddNetworkInterfaceToInstanceRequest): Promise<$_model.AddNetworkInterfaceToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addNetworkInterfaceToInstanceWithOptions(request, runtime);
  }

  /**
   * Adds an elastic IP address (EIP) to a Source Network Address Translation (SNAT) entry.
   * 
   * @param request - AddSnatIpForSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSnatIpForSnatEntryResponse
   */
  async addSnatIpForSnatEntryWithOptions(request: $_model.AddSnatIpForSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSnatIpForSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSnatIpForSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSnatIpForSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.AddSnatIpForSnatEntryResponse({}));
  }

  /**
   * Adds an elastic IP address (EIP) to a Source Network Address Translation (SNAT) entry.
   * 
   * @param request - AddSnatIpForSnatEntryRequest
   * @returns AddSnatIpForSnatEntryResponse
   */
  async addSnatIpForSnatEntry(request: $_model.AddSnatIpForSnatEntryRequest): Promise<$_model.AddSnatIpForSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSnatIpForSnatEntryWithOptions(request, runtime);
  }

  /**
   * Assigns secondary private IP addresses to an elastic network interface (ENI).
   * 
   * @param request - AssignPrivateIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignPrivateIpAddressesResponse
   */
  async assignPrivateIpAddressesWithOptions(request: $_model.AssignPrivateIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignPrivateIpAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignPrivateIpAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new $_model.AssignPrivateIpAddressesResponse({}));
  }

  /**
   * Assigns secondary private IP addresses to an elastic network interface (ENI).
   * 
   * @param request - AssignPrivateIpAddressesRequest
   * @returns AssignPrivateIpAddressesResponse
   */
  async assignPrivateIpAddresses(request: $_model.AssignPrivateIpAddressesRequest): Promise<$_model.AssignPrivateIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignPrivateIpAddressesWithOptions(request, runtime);
  }

  /**
   * Associates an elastic IP address (EIP) with a cloud resource that is deployed in the same region.
   * 
   * @param request - AssociateEnsEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateEnsEipAddressResponse
   */
  async associateEnsEipAddressWithOptions(request: $_model.AssociateEnsEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateEnsEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.standby)) {
      query["Standby"] = request.standby;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateEnsEipAddress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateEnsEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.AssociateEnsEipAddressResponse({}));
  }

  /**
   * Associates an elastic IP address (EIP) with a cloud resource that is deployed in the same region.
   * 
   * @param request - AssociateEnsEipAddressRequest
   * @returns AssociateEnsEipAddressResponse
   */
  async associateEnsEipAddress(request: $_model.AssociateEnsEipAddressRequest): Promise<$_model.AssociateEnsEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateEnsEipAddressWithOptions(request, runtime);
  }

  /**
   * Associates a high-availability virtual IP address (HAVIP) with an Edge Node Service (ENS) instance or elastic network interface (ENI).
   * 
   * @remarks
   * When you call this operation to associate an HAVIP, take note of the following items:
   * *   An HAVIP immediately takes effect after it is associated. You do not need to restart the ENS instance. However, you need to associate the HAVIP with the ENI of the ENS instance.
   * *   The HAVIP and ENS instance must belong to the same vSwitch.
   * *   The ENS instance must be in the Running or Stopped state.
   * *   The HAVIP must be in the Available or InUse state.
   * *   AssociateHaVip is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the DescribeHaVips operation to query the status of an HAVIP:
   *     *   If the HAVIP is in the Associating state, the HAVIP is being associated.
   *     <!---->
   *     *   If the HAVIP is in the InUse state, the HAVIP is associated.
   * 
   * @param request - AssociateHaVipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateHaVipResponse
   */
  async associateHaVipWithOptions(request: $_model.AssociateHaVipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateHaVipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.haVipId)) {
      query["HaVipId"] = request.haVipId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateHaVip",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateHaVipResponse>(await this.callApi(params, req, runtime), new $_model.AssociateHaVipResponse({}));
  }

  /**
   * Associates a high-availability virtual IP address (HAVIP) with an Edge Node Service (ENS) instance or elastic network interface (ENI).
   * 
   * @remarks
   * When you call this operation to associate an HAVIP, take note of the following items:
   * *   An HAVIP immediately takes effect after it is associated. You do not need to restart the ENS instance. However, you need to associate the HAVIP with the ENI of the ENS instance.
   * *   The HAVIP and ENS instance must belong to the same vSwitch.
   * *   The ENS instance must be in the Running or Stopped state.
   * *   The HAVIP must be in the Available or InUse state.
   * *   AssociateHaVip is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the DescribeHaVips operation to query the status of an HAVIP:
   *     *   If the HAVIP is in the Associating state, the HAVIP is being associated.
   *     <!---->
   *     *   If the HAVIP is in the InUse state, the HAVIP is associated.
   * 
   * @param request - AssociateHaVipRequest
   * @returns AssociateHaVipResponse
   */
  async associateHaVip(request: $_model.AssociateHaVipRequest): Promise<$_model.AssociateHaVipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateHaVipWithOptions(request, runtime);
  }

  /**
   * Attaches a disk to an Edge Node Service (ENS) instance.
   * 
   * @param request - AttachDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDiskResponse
   */
  async attachDiskWithOptions(request: $_model.AttachDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteWithInstance)) {
      query["DeleteWithInstance"] = request.deleteWithInstance;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDiskResponse>(await this.callApi(params, req, runtime), new $_model.AttachDiskResponse({}));
  }

  /**
   * Attaches a disk to an Edge Node Service (ENS) instance.
   * 
   * @param request - AttachDiskRequest
   * @returns AttachDiskResponse
   */
  async attachDisk(request: $_model.AttachDiskRequest): Promise<$_model.AttachDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDiskWithOptions(request, runtime);
  }

  /**
   * Adds an Edge Node Service (ENS) instance to Container Service for Kubernetes (ACK).
   * 
   * @remarks
   * # [](#)Usage notes
   * *   You can call this operation up to 10 times per second per account.
   * *   After you execute the command, the instance restarts loading.
   * *   Limits: The instance has at least two vCPUs and 4 GB memory. An image of CentOS 7.4 or later is required.
   * 
   * @param request - AttachEnsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEnsInstancesResponse
   */
  async attachEnsInstancesWithOptions(request: $_model.AttachEnsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEnsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scripts)) {
      query["Scripts"] = request.scripts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEnsInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEnsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AttachEnsInstancesResponse({}));
  }

  /**
   * Adds an Edge Node Service (ENS) instance to Container Service for Kubernetes (ACK).
   * 
   * @remarks
   * # [](#)Usage notes
   * *   You can call this operation up to 10 times per second per account.
   * *   After you execute the command, the instance restarts loading.
   * *   Limits: The instance has at least two vCPUs and 4 GB memory. An image of CentOS 7.4 or later is required.
   * 
   * @param request - AttachEnsInstancesRequest
   * @returns AttachEnsInstancesResponse
   */
  async attachEnsInstances(request: $_model.AttachEnsInstancesRequest): Promise<$_model.AttachEnsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEnsInstancesWithOptions(request, runtime);
  }

  /**
   * Attaches a shared data group (SDG) to the corresponding Android in Container (AIC) instance.
   * 
   * @param tmpReq - AttachInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstanceSDGResponse
   */
  async attachInstanceSDGWithOptions(tmpReq: $_model.AttachInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.AttachInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.loadOpt)) {
      request.loadOptShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.loadOpt, "LoadOpt", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskAccessProtocol)) {
      query["DiskAccessProtocol"] = request.diskAccessProtocol;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.loadOptShrink)) {
      query["LoadOpt"] = request.loadOptShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.AttachInstanceSDGResponse({}));
  }

  /**
   * Attaches a shared data group (SDG) to the corresponding Android in Container (AIC) instance.
   * 
   * @param request - AttachInstanceSDGRequest
   * @returns AttachInstanceSDGResponse
   */
  async attachInstanceSDG(request: $_model.AttachInstanceSDGRequest): Promise<$_model.AttachInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachInstanceSDGWithOptions(request, runtime);
  }

  /**
   * Attaches an Elastic Network Interface (ENI) to an Edge Node Service (ECS) instance.
   * 
   * @remarks
   * When you call this operation, take note of the following limits:
   * *   The ENI must be in the Available state.
   * *   An ENI can be attached to only one instance that is the same zone and the same Virtual Private Cloud (VPC).
   * *   The instance must be in the Stopped state.
   * *   A maximum of 10 ENIs can be attached to an instance.
   * *   This operation is an asynchronous operation. After you call this operation to attach an ENI, you can view the status of the ENI to check whether the ENI is attached.
   * 
   * @param request - AttachNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachNetworkInterfaceResponse
   */
  async attachNetworkInterfaceWithOptions(request: $_model.AttachNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachNetworkInterfaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachNetworkInterface",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.AttachNetworkInterfaceResponse({}));
  }

  /**
   * Attaches an Elastic Network Interface (ENI) to an Edge Node Service (ECS) instance.
   * 
   * @remarks
   * When you call this operation, take note of the following limits:
   * *   The ENI must be in the Available state.
   * *   An ENI can be attached to only one instance that is the same zone and the same Virtual Private Cloud (VPC).
   * *   The instance must be in the Stopped state.
   * *   A maximum of 10 ENIs can be attached to an instance.
   * *   This operation is an asynchronous operation. After you call this operation to attach an ENI, you can view the status of the ENI to check whether the ENI is attached.
   * 
   * @param request - AttachNetworkInterfaceRequest
   * @returns AttachNetworkInterfaceResponse
   */
  async attachNetworkInterface(request: $_model.AttachNetworkInterfaceRequest): Promise<$_model.AttachNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Creates an inbound security group rule. This operation allows or denies the inbound traffic from other devices to instances in the security group.
   * 
   * @param request - AuthorizeSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeSecurityGroupResponse
   */
  async authorizeSecurityGroupWithOptions(request: $_model.AuthorizeSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeSecurityGroupResponse({}));
  }

  /**
   * Creates an inbound security group rule. This operation allows or denies the inbound traffic from other devices to instances in the security group.
   * 
   * @param request - AuthorizeSecurityGroupRequest
   * @returns AuthorizeSecurityGroupResponse
   */
  async authorizeSecurityGroup(request: $_model.AuthorizeSecurityGroupRequest): Promise<$_model.AuthorizeSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Creates an outbound security group rule. This operation allows or denies the outbound traffic from the instances in the security group to other devices.
   * 
   * @remarks
   * In the security group-related API documents, outbound traffic refers to the traffic that is sent by the source device and received at the destination device.
   * 
   * @param request - AuthorizeSecurityGroupEgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeSecurityGroupEgressResponse
   */
  async authorizeSecurityGroupEgressWithOptions(request: $_model.AuthorizeSecurityGroupEgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeSecurityGroupEgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destCidrIp)) {
      query["DestCidrIp"] = request.destCidrIp;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeSecurityGroupEgress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeSecurityGroupEgressResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeSecurityGroupEgressResponse({}));
  }

  /**
   * Creates an outbound security group rule. This operation allows or denies the outbound traffic from the instances in the security group to other devices.
   * 
   * @remarks
   * In the security group-related API documents, outbound traffic refers to the traffic that is sent by the source device and received at the destination device.
   * 
   * @param request - AuthorizeSecurityGroupEgressRequest
   * @returns AuthorizeSecurityGroupEgressResponse
   */
  async authorizeSecurityGroupEgress(request: $_model.AuthorizeSecurityGroupEgressRequest): Promise<$_model.AuthorizeSecurityGroupEgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeSecurityGroupEgressWithOptions(request, runtime);
  }

  /**
   * Migrates multiple instances in a specified event at a time. You can execute the task immediately or schedule the task execution.
   * 
   * @remarks
   * ## [](#)Request description
   * *   This O\\&M operation is supported only by the Instance:SystemUpgrade.Migrate event.
   * 
   * @param tmpReq - BatchEventMigrateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEventMigrateInstanceResponse
   */
  async batchEventMigrateInstanceWithOptions(tmpReq: $_model.BatchEventMigrateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchEventMigrateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.BatchEventMigrateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventInfos)) {
      request.eventInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventInfos, "EventInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventInfosShrink)) {
      query["EventInfos"] = request.eventInfosShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchEventMigrateInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchEventMigrateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BatchEventMigrateInstanceResponse({}));
  }

  /**
   * Migrates multiple instances in a specified event at a time. You can execute the task immediately or schedule the task execution.
   * 
   * @remarks
   * ## [](#)Request description
   * *   This O\\&M operation is supported only by the Instance:SystemUpgrade.Migrate event.
   * 
   * @param request - BatchEventMigrateInstanceRequest
   * @returns BatchEventMigrateInstanceResponse
   */
  async batchEventMigrateInstance(request: $_model.BatchEventMigrateInstanceRequest): Promise<$_model.BatchEventMigrateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchEventMigrateInstanceWithOptions(request, runtime);
  }

  /**
   * The event that is used to immediately redeploy specified resources in batches or by appointment
   * 
   * @remarks
   *   This O\\&M operation supports only the following event types: Instance:SystemMaintenance.Reboot (instance reboot due to system problems)
   * 
   * @param tmpReq - BatchEventRebootInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEventRebootInstanceResponse
   */
  async batchEventRebootInstanceWithOptions(tmpReq: $_model.BatchEventRebootInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchEventRebootInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.BatchEventRebootInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventInfos)) {
      request.eventInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventInfos, "EventInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventInfosShrink)) {
      query["EventInfos"] = request.eventInfosShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchEventRebootInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchEventRebootInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BatchEventRebootInstanceResponse({}));
  }

  /**
   * The event that is used to immediately redeploy specified resources in batches or by appointment
   * 
   * @remarks
   *   This O\\&M operation supports only the following event types: Instance:SystemMaintenance.Reboot (instance reboot due to system problems)
   * 
   * @param request - BatchEventRebootInstanceRequest
   * @returns BatchEventRebootInstanceResponse
   */
  async batchEventRebootInstance(request: $_model.BatchEventRebootInstanceRequest): Promise<$_model.BatchEventRebootInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchEventRebootInstanceWithOptions(request, runtime);
  }

  /**
   * Batch redeployment
   * 
   * @remarks
   * - This operation currently only supports event types: Instance:SystemFailure.Redeploy (redeploy instance due to system issues), Instance:SystemMaintenance.Redeploy (redeploy instance due to system maintenance)
   * 
   * @param tmpReq - BatchEventRedeployInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEventRedeployInstanceResponse
   */
  async batchEventRedeployInstanceWithOptions(tmpReq: $_model.BatchEventRedeployInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchEventRedeployInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.BatchEventRedeployInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventInfos)) {
      request.eventInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventInfos, "EventInfos", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventInfosShrink)) {
      query["EventInfos"] = request.eventInfosShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchEventRedeployInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchEventRedeployInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BatchEventRedeployInstanceResponse({}));
  }

  /**
   * Batch redeployment
   * 
   * @remarks
   * - This operation currently only supports event types: Instance:SystemFailure.Redeploy (redeploy instance due to system issues), Instance:SystemMaintenance.Redeploy (redeploy instance due to system maintenance)
   * 
   * @param request - BatchEventRedeployInstanceRequest
   * @returns BatchEventRedeployInstanceResponse
   */
  async batchEventRedeployInstance(request: $_model.BatchEventRedeployInstanceRequest): Promise<$_model.BatchEventRedeployInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchEventRedeployInstanceWithOptions(request, runtime);
  }

  /**
   * 清理分发数据
   * 
   * @param request - CleanDistDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CleanDistDataResponse
   */
  async cleanDistDataWithOptions(request: $_model.CleanDistDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CleanDistDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.dataName)) {
      query["DataName"] = request.dataName;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["DataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CleanDistData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CleanDistDataResponse>(await this.callApi(params, req, runtime), new $_model.CleanDistDataResponse({}));
  }

  /**
   * 清理分发数据
   * 
   * @param request - CleanDistDataRequest
   * @returns CleanDistDataResponse
   */
  async cleanDistData(request: $_model.CleanDistDataRequest): Promise<$_model.CleanDistDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cleanDistDataWithOptions(request, runtime);
  }

  /**
   * Copies a shared data group (SDG) across nodes.
   * 
   * @param tmpReq - CopySDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopySDGResponse
   */
  async copySDGWithOptions(tmpReq: $_model.CopySDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopySDGResponse> {
    tmpReq.validate();
    let request = new $_model.CopySDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationRegionIds)) {
      request.destinationRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationRegionIds, "DestinationRegionIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopySDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopySDGResponse>(await this.callApi(params, req, runtime), new $_model.CopySDGResponse({}));
  }

  /**
   * Copies a shared data group (SDG) across nodes.
   * 
   * @param request - CopySDGRequest
   * @returns CopySDGResponse
   */
  async copySDG(request: $_model.CopySDGRequest): Promise<$_model.CopySDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copySDGWithOptions(request, runtime);
  }

  /**
   * Copies a snapshot across nodes.
   * 
   * @param tmpReq - CopySnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopySnapshotResponse
   */
  async copySnapshotWithOptions(tmpReq: $_model.CopySnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopySnapshotResponse> {
    tmpReq.validate();
    let request = new $_model.CopySnapshotShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationRegionIds)) {
      request.destinationRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationRegionIds, "DestinationRegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.destinationRegionIdsShrink)) {
      query["DestinationRegionIds"] = request.destinationRegionIdsShrink;
    }

    if (!$dara.isNull(request.destinationSnapshotDescription)) {
      query["DestinationSnapshotDescription"] = request.destinationSnapshotDescription;
    }

    if (!$dara.isNull(request.destinationSnapshotName)) {
      query["DestinationSnapshotName"] = request.destinationSnapshotName;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopySnapshot",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopySnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CopySnapshotResponse({}));
  }

  /**
   * Copies a snapshot across nodes.
   * 
   * @param request - CopySnapshotRequest
   * @returns CopySnapshotResponse
   */
  async copySnapshot(request: $_model.CopySnapshotRequest): Promise<$_model.CopySnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copySnapshotWithOptions(request, runtime);
  }

  /**
   * Creates an ARM server.
   * 
   * @param request - CreateARMServerInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateARMServerInstancesResponse
   */
  async createARMServerInstancesWithOptions(request: $_model.CreateARMServerInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateARMServerInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.environmentVar)) {
      query["EnvironmentVar"] = request.environmentVar;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.nameSpace)) {
      query["NameSpace"] = request.nameSpace;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.serverName)) {
      query["ServerName"] = request.serverName;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateARMServerInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateARMServerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateARMServerInstancesResponse({}));
  }

  /**
   * Creates an ARM server.
   * 
   * @param request - CreateARMServerInstancesRequest
   * @returns CreateARMServerInstancesResponse
   */
  async createARMServerInstances(request: $_model.CreateARMServerInstancesRequest): Promise<$_model.CreateARMServerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createARMServerInstancesWithOptions(request, runtime);
  }

  /**
   * Creates an edge application that allows you to manage Edge Node Service (ENS) nodes in containers, bare metal instances, and virtual machines.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an edge application that allows you to manage Edge Node Service (ENS) nodes in containers, bare metal instances, and virtual machines.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a classic network
   * 
   * @param request - CreateClassicNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClassicNetworkResponse
   */
  async createClassicNetworkWithOptions(request: $_model.CreateClassicNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClassicNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClassicNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClassicNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateClassicNetworkResponse({}));
  }

  /**
   * Creates a classic network
   * 
   * @param request - CreateClassicNetworkRequest
   * @returns CreateClassicNetworkResponse
   */
  async createClassicNetwork(request: $_model.CreateClassicNetworkRequest): Promise<$_model.CreateClassicNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClassicNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a Container Service for Kubernetes (ACK) edge cluster.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   Creating a cluster is an asynchronous operation. After this operation returns the response, it takes 10 to 20 minutes to initialize the cluster. You can call the DescribeCluster operation to query the cluster status. After you create a cluster, you can call the DescribeClusterKubeConfig operation to obtain the cluster certificate.
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.controlPlaneConfig)) {
      request.controlPlaneConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.controlPlaneConfig, "ControlPlaneConfig", "json");
    }

    if (!$dara.isNull(tmpReq.podVswitchIds)) {
      request.podVswitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.podVswitchIds, "PodVswitchIds", "json");
    }

    if (!$dara.isNull(tmpReq.vswitchIds)) {
      request.vswitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vswitchIds, "VswitchIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.containerCidr)) {
      query["ContainerCidr"] = request.containerCidr;
    }

    if (!$dara.isNull(request.controlPlaneConfigShrink)) {
      query["ControlPlaneConfig"] = request.controlPlaneConfigShrink;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.kubernetesVersion)) {
      query["KubernetesVersion"] = request.kubernetesVersion;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.podVswitchIdsShrink)) {
      query["PodVswitchIds"] = request.podVswitchIdsShrink;
    }

    if (!$dara.isNull(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!$dara.isNull(request.publicAccess)) {
      query["PublicAccess"] = request.publicAccess;
    }

    if (!$dara.isNull(request.serviceCidr)) {
      query["ServiceCidr"] = request.serviceCidr;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchIdsShrink)) {
      query["VswitchIds"] = request.vswitchIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a Container Service for Kubernetes (ACK) edge cluster.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   Creating a cluster is an asynchronous operation. After this operation returns the response, it takes 10 to 20 minutes to initialize the cluster. You can call the DescribeCluster operation to query the cluster status. After you create a cluster, you can call the DescribeClusterKubeConfig operation to obtain the cluster certificate.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 创建集群节点池
   * 
   * @param tmpReq - CreateClusterNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePoolWithOptions(tmpReq: $_model.CreateClusterNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterNodePoolResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClusterNodePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.kubernetesConfig)) {
      request.kubernetesConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kubernetesConfig, "KubernetesConfig", "json");
    }

    if (!$dara.isNull(tmpReq.nodepoolInfo)) {
      request.nodepoolInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodepoolInfo, "NodepoolInfo", "json");
    }

    if (!$dara.isNull(tmpReq.scalingGroup)) {
      request.scalingGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scalingGroup, "ScalingGroup", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.kubernetesConfigShrink)) {
      query["KubernetesConfig"] = request.kubernetesConfigShrink;
    }

    if (!$dara.isNull(request.nodepoolInfoShrink)) {
      query["NodepoolInfo"] = request.nodepoolInfoShrink;
    }

    if (!$dara.isNull(request.scalingGroupShrink)) {
      query["ScalingGroup"] = request.scalingGroupShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClusterNodePool",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterNodePoolResponse({}));
  }

  /**
   * 创建集群节点池
   * 
   * @param request - CreateClusterNodePoolRequest
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePool(request: $_model.CreateClusterNodePoolRequest): Promise<$_model.CreateClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterNodePoolWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription data disk.
   * 
   * @param request - CreateDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskResponse
   */
  async createDiskWithOptions(request: $_model.CreateDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.diskName)) {
      query["DiskName"] = request.diskName;
    }

    if (!$dara.isNull(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.KMSKeyId)) {
      query["KMSKeyId"] = request.KMSKeyId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiskResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription data disk.
   * 
   * @param request - CreateDiskRequest
   * @returns CreateDiskResponse
   */
  async createDisk(request: $_model.CreateDiskRequest): Promise<$_model.CreateDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskWithOptions(request, runtime);
  }

  /**
   * Applies for an elastic IP address (EIP).
   * 
   * @remarks
   *   You can call this operation up to 5,000 times per second per account.
   * *   You can call this operation up to 50 times per second per user.
   * 
   * @param request - CreateEipInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEipInstanceResponse
   */
  async createEipInstanceWithOptions(request: $_model.CreateEipInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEipInstanceResponse> {
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

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.ipAddress)) {
      query["IpAddress"] = request.ipAddress;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEipInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEipInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateEipInstanceResponse({}));
  }

  /**
   * Applies for an elastic IP address (EIP).
   * 
   * @remarks
   *   You can call this operation up to 5,000 times per second per account.
   * *   You can call this operation up to 50 times per second per user.
   * 
   * @param request - CreateEipInstanceRequest
   * @returns CreateEipInstanceResponse
   */
  async createEipInstance(request: $_model.CreateEipInstanceRequest): Promise<$_model.CreateEipInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEipInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a custom route entry.
   * 
   * @param request - CreateEnsRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnsRouteEntryResponse
   */
  async createEnsRouteEntryWithOptions(request: $_model.CreateEnsRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnsRouteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.nextHopId)) {
      query["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.sourceCidrBlock)) {
      query["SourceCidrBlock"] = request.sourceCidrBlock;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnsRouteEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnsRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnsRouteEntryResponse({}));
  }

  /**
   * Creates a custom route entry.
   * 
   * @param request - CreateEnsRouteEntryRequest
   * @returns CreateEnsRouteEntryResponse
   */
  async createEnsRouteEntry(request: $_model.CreateEnsRouteEntryRequest): Promise<$_model.CreateEnsRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnsRouteEntryWithOptions(request, runtime);
  }

  /**
   * 创建售卖约束
   * 
   * @param tmpReq - CreateEnsSaleControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnsSaleControlResponse
   */
  async createEnsSaleControlWithOptions(tmpReq: $_model.CreateEnsSaleControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnsSaleControlResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEnsSaleControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.saleControls)) {
      request.saleControlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.saleControls, "SaleControls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.saleControlsShrink)) {
      query["SaleControls"] = request.saleControlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnsSaleControl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnsSaleControlResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnsSaleControlResponse({}));
  }

  /**
   * 创建售卖约束
   * 
   * @param request - CreateEnsSaleControlRequest
   * @returns CreateEnsSaleControlResponse
   */
  async createEnsSaleControl(request: $_model.CreateEnsSaleControlRequest): Promise<$_model.CreateEnsSaleControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnsSaleControlWithOptions(request, runtime);
  }

  /**
   * Creates an edge service.
   * 
   * @param request - CreateEnsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnsServiceResponse
   */
  async createEnsServiceWithOptions(request: $_model.CreateEnsServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnsServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensServiceId)) {
      query["EnsServiceId"] = request.ensServiceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnsService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnsServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnsServiceResponse({}));
  }

  /**
   * Creates an edge service.
   * 
   * @param request - CreateEnsServiceRequest
   * @returns CreateEnsServiceResponse
   */
  async createEnsService(request: $_model.CreateEnsServiceRequest): Promise<$_model.CreateEnsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnsServiceWithOptions(request, runtime);
  }

  /**
   * Creates an edge private network (EPN) instance.
   * 
   * @param request - CreateEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEpnInstanceResponse
   */
  async createEpnInstanceWithOptions(request: $_model.CreateEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
    }

    if (!$dara.isNull(request.EPNInstanceType)) {
      query["EPNInstanceType"] = request.EPNInstanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateEpnInstanceResponse({}));
  }

  /**
   * Creates an edge private network (EPN) instance.
   * 
   * @param request - CreateEpnInstanceRequest
   * @returns CreateEpnInstanceResponse
   */
  async createEpnInstance(request: $_model.CreateEpnInstanceRequest): Promise<$_model.CreateEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a NAS file system.
   * 
   * @param tmpReq - CreateFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileSystemResponse
   */
  async createFileSystemWithOptions(tmpReq: $_model.CreateFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileSystemResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFileSystemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderDetails)) {
      request.orderDetailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderDetails, "OrderDetails", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileSystem",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileSystemResponse({}));
  }

  /**
   * Creates a NAS file system.
   * 
   * @param request - CreateFileSystemRequest
   * @returns CreateFileSystemResponse
   */
  async createFileSystem(request: $_model.CreateFileSystemRequest): Promise<$_model.CreateFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  /**
   * Adds a Destination Network Address Translation (DNAT) entry to a DNAT table.
   * 
   * @param request - CreateForwardEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateForwardEntryResponse
   */
  async createForwardEntryWithOptions(request: $_model.CreateForwardEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateForwardEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!$dara.isNull(request.externalPort)) {
      query["ExternalPort"] = request.externalPort;
    }

    if (!$dara.isNull(request.forwardEntryName)) {
      query["ForwardEntryName"] = request.forwardEntryName;
    }

    if (!$dara.isNull(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!$dara.isNull(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!$dara.isNull(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.standbyExternalIp)) {
      query["StandbyExternalIp"] = request.standbyExternalIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateForwardEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateForwardEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateForwardEntryResponse({}));
  }

  /**
   * Adds a Destination Network Address Translation (DNAT) entry to a DNAT table.
   * 
   * @param request - CreateForwardEntryRequest
   * @returns CreateForwardEntryResponse
   */
  async createForwardEntry(request: $_model.CreateForwardEntryRequest): Promise<$_model.CreateForwardEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createForwardEntryWithOptions(request, runtime);
  }

  /**
   * Creates a high-availability virtual IP address (HAVIP).
   * 
   * @param request - CreateHaVipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHaVipResponse
   */
  async createHaVipWithOptions(request: $_model.CreateHaVipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHaVipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipAddress)) {
      query["IpAddress"] = request.ipAddress;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHaVip",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHaVipResponse>(await this.callApi(params, req, runtime), new $_model.CreateHaVipResponse({}));
  }

  /**
   * Creates a high-availability virtual IP address (HAVIP).
   * 
   * @param request - CreateHaVipRequest
   * @returns CreateHaVipResponse
   */
  async createHaVip(request: $_model.CreateHaVipRequest): Promise<$_model.CreateHaVipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHaVipWithOptions(request, runtime);
  }

  /**
   * Creates an image from an instance.
   * 
   * @param request - CreateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageResponse
   */
  async createImageWithOptions(request: $_model.CreateImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteAfterImageUpload)) {
      query["DeleteAfterImageUpload"] = request.deleteAfterImageUpload;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.targetOSSRegionId)) {
      query["TargetOSSRegionId"] = request.targetOSSRegionId;
    }

    if (!$dara.isNull(request.withDataDisks)) {
      query["WithDataDisks"] = request.withDataDisks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageResponse({}));
  }

  /**
   * Creates an image from an instance.
   * 
   * @param request - CreateImageRequest
   * @returns CreateImageResponse
   */
  async createImage(request: $_model.CreateImageRequest): Promise<$_model.CreateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   We recommend that you increase the request time because instance creation is an asynchronous operation. If the return code of the API operation is 0, it indicates that the request is successful, but does not indicate that the instance is created. If the request is successful, an instance ID is returned. You can check whether the instance is created based on the instance ID.
   * *   InvalidUserData.NotInWhiteList operation restriction: You can create an instance only if you are in the whitelist in which members have the purchase permissions. Otherwise, an error is returned.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.publicIpIdentification)) {
      query["PublicIpIdentification"] = request.publicIpIdentification;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.uniqueSuffix)) {
      query["UniqueSuffix"] = request.uniqueSuffix;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   We recommend that you increase the request time because instance creation is an asynchronous operation. If the return code of the API operation is 0, it indicates that the request is successful, but does not indicate that the instance is created. If the request is successful, an instance ID is returned. You can check whether the instance is created based on the instance ID.
   * *   InvalidUserData.NotInWhiteList operation restriction: You can create an instance only if you are in the whitelist in which members have the purchase permissions. Otherwise, an error is returned.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 调用CreateInstanceOpsTask来针对一个实例或实例运维组发起运维任务
   * 
   * @param tmpReq - CreateInstanceActiveOpsTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceActiveOpsTaskResponse
   */
  async createInstanceActiveOpsTaskWithOptions(tmpReq: $_model.CreateInstanceActiveOpsTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceActiveOpsTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateInstanceActiveOpsTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceActiveOpsTask",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceActiveOpsTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceActiveOpsTaskResponse({}));
  }

  /**
   * 调用CreateInstanceOpsTask来针对一个实例或实例运维组发起运维任务
   * 
   * @param request - CreateInstanceActiveOpsTaskRequest
   * @returns CreateInstanceActiveOpsTaskResponse
   */
  async createInstanceActiveOpsTask(request: $_model.CreateInstanceActiveOpsTaskRequest): Promise<$_model.CreateInstanceActiveOpsTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceActiveOpsTaskWithOptions(request, runtime);
  }

  /**
   * Creates an SSH key pair.
   * 
   * @remarks
   * An SSH key pair consists of a public key and a private key. ENS stores the public key and returns the unencrypted private key that is PEM-encoded in the PKCS#8 format. You must securely lock away the private key.
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: $_model.CreateKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKeyPair",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.CreateKeyPairResponse({}));
  }

  /**
   * Creates an SSH key pair.
   * 
   * @remarks
   * An SSH key pair consists of a public key and a private key. ENS stores the public key and returns the unencrypted private key that is PEM-encoded in the PKCS#8 format. You must securely lock away the private key.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: $_model.CreateKeyPairRequest): Promise<$_model.CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!$dara.isNull(request.loadBalancerType)) {
      query["LoadBalancerType"] = request.loadBalancerType;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2017-11-10",
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
   * Creates an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates an HTTP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListenerWithOptions(request: $_model.CreateLoadBalancerHTTPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerHTTPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2017-11-10",
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
   * Creates an HTTP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListenerWithOptions(request: $_model.CreateLoadBalancerHTTPSListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerHTTPSListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerHTTPSListener",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerHTTPSListenerRequest
   * @returns CreateLoadBalancerHTTPSListenerResponse
   */
  async createLoadBalancerHTTPSListener(request: $_model.CreateLoadBalancerHTTPSListenerRequest): Promise<$_model.CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  /**
   * Creates a Transmission Control Protocol (TCP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListenerWithOptions(request: $_model.CreateLoadBalancerTCPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
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

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2017-11-10",
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
   * Creates a Transmission Control Protocol (TCP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListener(request: $_model.CreateLoadBalancerTCPListenerRequest): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a User Datagram Protocol (UDP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListenerWithOptions(request: $_model.CreateLoadBalancerUDPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerUDPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
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

    if (!$dara.isNull(request.healthCheckExp)) {
      query["HealthCheckExp"] = request.healthCheckExp;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckReq)) {
      query["HealthCheckReq"] = request.healthCheckReq;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerUDPListener",
      version: "2017-11-10",
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
   * Creates a User Datagram Protocol (UDP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - CreateLoadBalancerUDPListenerRequest
   * @returns CreateLoadBalancerUDPListenerResponse
   */
  async createLoadBalancerUDPListener(request: $_model.CreateLoadBalancerUDPListenerRequest): Promise<$_model.CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   * ## [](#)Precautions
   * After you call this operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the Active state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * 
   * @param request - CreateMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMountTargetResponse
   */
  async createMountTargetWithOptions(request: $_model.CreateMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetName)) {
      query["MountTargetName"] = request.mountTargetName;
    }

    if (!$dara.isNull(request.netWorkId)) {
      query["NetWorkId"] = request.netWorkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMountTarget",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateMountTargetResponse({}));
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   * ## [](#)Precautions
   * After you call this operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the Active state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * 
   * @param request - CreateMountTargetRequest
   * @returns CreateMountTargetResponse
   */
  async createMountTarget(request: $_model.CreateMountTargetRequest): Promise<$_model.CreateMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates a network address translation (NAT) gateway.
   * 
   * @param request - CreateNatGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNatGatewayResponse
   */
  async createNatGatewayWithOptions(request: $_model.CreateNatGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNatGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNatGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNatGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateNatGatewayResponse({}));
  }

  /**
   * Creates a network address translation (NAT) gateway.
   * 
   * @param request - CreateNatGatewayRequest
   * @returns CreateNatGatewayResponse
   */
  async createNatGateway(request: $_model.CreateNatGatewayRequest): Promise<$_model.CreateNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNatGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC).
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - CreateNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkResponse
   */
  async createNetworkWithOptions(request: $_model.CreateNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkResponse({}));
  }

  /**
   * Creates a virtual private cloud (VPC).
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - CreateNetworkRequest
   * @returns CreateNetworkResponse
   */
  async createNetwork(request: $_model.CreateNetworkRequest): Promise<$_model.CreateNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a network access control list (ACL).
   * 
   * @param request - CreateNetworkAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAclResponse
   */
  async createNetworkAclWithOptions(request: $_model.CreateNetworkAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkAclName)) {
      query["NetworkAclName"] = request.networkAclName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkAclResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkAclResponse({}));
  }

  /**
   * Creates a network access control list (ACL).
   * 
   * @param request - CreateNetworkAclRequest
   * @returns CreateNetworkAclResponse
   */
  async createNetworkAcl(request: $_model.CreateNetworkAclRequest): Promise<$_model.CreateNetworkAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkAclWithOptions(request, runtime);
  }

  /**
   * Creates a network access control list (ACL) rule.
   * 
   * @param request - CreateNetworkAclEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAclEntryResponse
   */
  async createNetworkAclEntryWithOptions(request: $_model.CreateNetworkAclEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkAclEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.networkAclEntryName)) {
      query["NetworkAclEntryName"] = request.networkAclEntryName;
    }

    if (!$dara.isNull(request.networkAclId)) {
      query["NetworkAclId"] = request.networkAclId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkAclEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkAclEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkAclEntryResponse({}));
  }

  /**
   * Creates a network access control list (ACL) rule.
   * 
   * @param request - CreateNetworkAclEntryRequest
   * @returns CreateNetworkAclEntryResponse
   */
  async createNetworkAclEntry(request: $_model.CreateNetworkAclEntryRequest): Promise<$_model.CreateNetworkAclEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkAclEntryWithOptions(request, runtime);
  }

  /**
   * Create an Elastic Network Interface (ENI).
   * 
   * @param tmpReq - CreateNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkInterfaceResponse
   */
  async createNetworkInterfaceWithOptions(tmpReq: $_model.CreateNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkInterfaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNetworkInterfaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.securityGroupIds)) {
      request.securityGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupIds, "SecurityGroupIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.securityGroupIdsShrink)) {
      query["SecurityGroupIds"] = request.securityGroupIdsShrink;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkInterface",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkInterfaceResponse({}));
  }

  /**
   * Create an Elastic Network Interface (ENI).
   * 
   * @param request - CreateNetworkInterfaceRequest
   * @returns CreateNetworkInterfaceResponse
   */
  async createNetworkInterface(request: $_model.CreateNetworkInterfaceRequest): Promise<$_model.CreateNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Creates a shared data group (SDG) on an Android in Container (AIC) instance.
   * 
   * @remarks
   * A SDG can be regarded as a data partition image of a virtual device. You can save a data partition of a virtual device as an SDG. A created SDG can be deployed in data partitions of other virtual devices to achieve rapid data distribution and application. The procedure for calling SDG-related API operations:
   * *   Call the [CreateSDG](~~CreateSDG~~) operation to create an SDG, which is bound to AIC Instance A (InstanceId). After you create the SDG, a blank cloud disk (also known as an original cloud disk) is attached to Device A (InstanceId).
   * *   Install applications on and deliver files to AIC Instance A (InstanceId).
   * *   Call the [SaveSDG](~~SaveSDG~~) operation to save the data disk of AIC instance A as SDG A.
   * *   Call the [DeploySDG](~~DeploySDG~~) operation to deploy SDG A to AIC Instance B. This operattion is executed asynchronously. You can call the [DescribeARMServerInstances](~~DescribeARMServerInstances~~) operation to query the status of AIC Instance B. If the status of AIC Instance B changes to success, AIC insance B is available, and AIC Instances A and B have the same applications running.
   * 
   * @param request - CreateSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSDGResponse
   */
  async createSDGWithOptions(request: $_model.CreateSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSDGResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSDGResponse>(await this.callApi(params, req, runtime), new $_model.CreateSDGResponse({}));
  }

  /**
   * Creates a shared data group (SDG) on an Android in Container (AIC) instance.
   * 
   * @remarks
   * A SDG can be regarded as a data partition image of a virtual device. You can save a data partition of a virtual device as an SDG. A created SDG can be deployed in data partitions of other virtual devices to achieve rapid data distribution and application. The procedure for calling SDG-related API operations:
   * *   Call the [CreateSDG](~~CreateSDG~~) operation to create an SDG, which is bound to AIC Instance A (InstanceId). After you create the SDG, a blank cloud disk (also known as an original cloud disk) is attached to Device A (InstanceId).
   * *   Install applications on and deliver files to AIC Instance A (InstanceId).
   * *   Call the [SaveSDG](~~SaveSDG~~) operation to save the data disk of AIC instance A as SDG A.
   * *   Call the [DeploySDG](~~DeploySDG~~) operation to deploy SDG A to AIC Instance B. This operattion is executed asynchronously. You can call the [DescribeARMServerInstances](~~DescribeARMServerInstances~~) operation to query the status of AIC Instance B. If the status of AIC Instance B changes to success, AIC insance B is available, and AIC Instances A and B have the same applications running.
   * 
   * @param request - CreateSDGRequest
   * @returns CreateSDGResponse
   */
  async createSDG(request: $_model.CreateSDGRequest): Promise<$_model.CreateSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSDGWithOptions(request, runtime);
  }

  /**
   * Creates a security group.
   * 
   * @param tmpReq - CreateSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityGroupResponse
   */
  async createSecurityGroupWithOptions(tmpReq: $_model.CreateSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityGroupResponse({}));
  }

  /**
   * Creates a security group.
   * 
   * @param request - CreateSecurityGroupRequest
   * @returns CreateSecurityGroupResponse
   */
  async createSecurityGroup(request: $_model.CreateSecurityGroupRequest): Promise<$_model.CreateSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Create an ENS security group rule.
   * 
   * @param tmpReq - CreateSecurityGroupPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityGroupPermissionsResponse
   */
  async createSecurityGroupPermissionsWithOptions(tmpReq: $_model.CreateSecurityGroupPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityGroupPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecurityGroupPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityGroupPermissions",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityGroupPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityGroupPermissionsResponse({}));
  }

  /**
   * Create an ENS security group rule.
   * 
   * @param request - CreateSecurityGroupPermissionsRequest
   * @returns CreateSecurityGroupPermissionsResponse
   */
  async createSecurityGroupPermissions(request: $_model.CreateSecurityGroupPermissionsRequest): Promise<$_model.CreateSecurityGroupPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityGroupPermissionsWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: $_model.CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * Creates a snapshot.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Adds a source network address translation (SNAT) entry to a specified SNAT table.
   * 
   * @param request - CreateSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnatEntryResponse
   */
  async createSnatEntryWithOptions(request: $_model.CreateSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipAffinity)) {
      query["EipAffinity"] = request.eipAffinity;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.ispAffinity)) {
      query["IspAffinity"] = request.ispAffinity;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.snatEntryName)) {
      query["SnatEntryName"] = request.snatEntryName;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    if (!$dara.isNull(request.sourceCIDR)) {
      query["SourceCIDR"] = request.sourceCIDR;
    }

    if (!$dara.isNull(request.sourceNetworkId)) {
      query["SourceNetworkId"] = request.sourceNetworkId;
    }

    if (!$dara.isNull(request.sourceVSwitchId)) {
      query["SourceVSwitchId"] = request.sourceVSwitchId;
    }

    if (!$dara.isNull(request.standbySnatIp)) {
      query["StandbySnatIp"] = request.standbySnatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnatEntryResponse({}));
  }

  /**
   * Adds a source network address translation (SNAT) entry to a specified SNAT table.
   * 
   * @param request - CreateSnatEntryRequest
   * @returns CreateSnatEntryResponse
   */
  async createSnatEntry(request: $_model.CreateSnatEntryRequest): Promise<$_model.CreateSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnatEntryWithOptions(request, runtime);
  }

  /**
   * Creates a storage gateway.
   * 
   * @param tmpReq - CreateStorageGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStorageGatewayResponse
   */
  async createStorageGatewayWithOptions(tmpReq: $_model.CreateStorageGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStorageGatewayResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStorageGatewayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderDetails)) {
      request.orderDetailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderDetails, "OrderDetails", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderDetailsShrink)) {
      query["OrderDetails"] = request.orderDetailsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStorageGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStorageGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateStorageGatewayResponse({}));
  }

  /**
   * Creates a storage gateway.
   * 
   * @param request - CreateStorageGatewayRequest
   * @returns CreateStorageGatewayResponse
   */
  async createStorageGateway(request: $_model.CreateStorageGatewayRequest): Promise<$_model.CreateStorageGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStorageGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a storage volume.
   * 
   * @param request - CreateStorageVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStorageVolumeResponse
   */
  async createStorageVolumeWithOptions(request: $_model.CreateStorageVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStorageVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPassword)) {
      query["AuthPassword"] = request.authPassword;
    }

    if (!$dara.isNull(request.authProtocol)) {
      query["AuthProtocol"] = request.authProtocol;
    }

    if (!$dara.isNull(request.authUser)) {
      query["AuthUser"] = request.authUser;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.isAuth)) {
      query["IsAuth"] = request.isAuth;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.storageId)) {
      query["StorageId"] = request.storageId;
    }

    if (!$dara.isNull(request.volumeName)) {
      query["VolumeName"] = request.volumeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStorageVolume",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStorageVolumeResponse>(await this.callApi(params, req, runtime), new $_model.CreateStorageVolumeResponse({}));
  }

  /**
   * Creates a storage volume.
   * 
   * @param request - CreateStorageVolumeRequest
   * @returns CreateStorageVolumeResponse
   */
  async createStorageVolume(request: $_model.CreateStorageVolumeRequest): Promise<$_model.CreateStorageVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStorageVolumeWithOptions(request, runtime);
  }

  /**
   * A vSwitch is created.
   * 
   * @param request - CreateVSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVSwitchResponse
   */
  async createVSwitchWithOptions(request: $_model.CreateVSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVSwitch",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVSwitchResponse>(await this.callApi(params, req, runtime), new $_model.CreateVSwitchResponse({}));
  }

  /**
   * A vSwitch is created.
   * 
   * @param request - CreateVSwitchRequest
   * @returns CreateVSwitchResponse
   */
  async createVSwitch(request: $_model.CreateVSwitchRequest): Promise<$_model.CreateVSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  /**
   * Deletes a specified AIC public key. You can delete a public key only if it is not associated with the public key.
   * 
   * @param request - DeleteAICPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAICPublicKeyResponse
   */
  async deleteAICPublicKeyWithOptions(request: $_model.DeleteAICPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAICPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAICPublicKey",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAICPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAICPublicKeyResponse({}));
  }

  /**
   * Deletes a specified AIC public key. You can delete a public key only if it is not associated with the public key.
   * 
   * @param request - DeleteAICPublicKeyRequest
   * @returns DeleteAICPublicKeyResponse
   */
  async deleteAICPublicKey(request: $_model.DeleteAICPublicKeyRequest): Promise<$_model.DeleteAICPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAICPublicKeyWithOptions(request, runtime);
  }

  /**
   * Releases all containers and resource instances related to a specific application in an asynchronous manner.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * Releases all containers and resource instances related to a specific application in an asynchronous manner.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a bucket.
   * 
   * @remarks
   *   Only the Alibaba Cloud Account ID owner of a bucket can delete the bucket from the account.
   * *   You cannot delete buckets that store objects. You can only delete empty buckets.
   * 
   * @param request - DeleteBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBucketResponse
   */
  async deleteBucketWithOptions(request: $_model.DeleteBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBucket",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBucketResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBucketResponse({}));
  }

  /**
   * Deletes a bucket.
   * 
   * @remarks
   *   Only the Alibaba Cloud Account ID owner of a bucket can delete the bucket from the account.
   * *   You cannot delete buckets that store objects. You can only delete empty buckets.
   * 
   * @param request - DeleteBucketRequest
   * @returns DeleteBucketResponse
   */
  async deleteBucket(request: $_model.DeleteBucketRequest): Promise<$_model.DeleteBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBucketWithOptions(request, runtime);
  }

  /**
   * Deletes the lifecycle rules for objects in a bucket.
   * 
   * @param request - DeleteBucketLifecycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBucketLifecycleResponse
   */
  async deleteBucketLifecycleWithOptions(request: $_model.DeleteBucketLifecycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBucketLifecycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBucketLifecycle",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBucketLifecycleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBucketLifecycleResponse({}));
  }

  /**
   * Deletes the lifecycle rules for objects in a bucket.
   * 
   * @param request - DeleteBucketLifecycleRequest
   * @returns DeleteBucketLifecycleResponse
   */
  async deleteBucketLifecycle(request: $_model.DeleteBucketLifecycleRequest): Promise<$_model.DeleteBucketLifecycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBucketLifecycleWithOptions(request, runtime);
  }

  /**
   * 删除集群
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * 删除集群
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 删除节点池
   * 
   * @param request - DeleteClusterNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodePoolResponse
   */
  async deleteClusterNodePoolWithOptions(request: $_model.DeleteClusterNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterNodePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      query["NodepoolId"] = request.nodepoolId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterNodePool",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterNodePoolResponse({}));
  }

  /**
   * 删除节点池
   * 
   * @param request - DeleteClusterNodePoolRequest
   * @returns DeleteClusterNodePoolResponse
   */
  async deleteClusterNodePool(request: $_model.DeleteClusterNodePoolRequest): Promise<$_model.DeleteClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterNodePoolWithOptions(request, runtime);
  }

  /**
   * 删除节点池指定节点
   * 
   * @param tmpReq - DeleteClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodesWithOptions(tmpReq: $_model.DeleteClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterNodesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteClusterNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterNodes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterNodesResponse({}));
  }

  /**
   * 删除节点池指定节点
   * 
   * @param request - DeleteClusterNodesRequest
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodes(request: $_model.DeleteClusterNodesRequest): Promise<$_model.DeleteClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterNodesWithOptions(request, runtime);
  }

  /**
   * Deletes a disk.
   * 
   * @remarks
   * When you release a disk, the disk must be in the Available state.
   * 
   * @param request - DeleteDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskResponse
   */
  async deleteDiskWithOptions(request: $_model.DeleteDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDiskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDiskResponse({}));
  }

  /**
   * Deletes a disk.
   * 
   * @remarks
   * When you release a disk, the disk must be in the Available state.
   * 
   * @param request - DeleteDiskRequest
   * @returns DeleteDiskResponse
   */
  async deleteDisk(request: $_model.DeleteDiskRequest): Promise<$_model.DeleteDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiskWithOptions(request, runtime);
  }

  /**
   * Deletes a pay-as-you-go elastic IP address (EIP).
   * 
   * @param request - DeleteEipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEipResponse
   */
  async deleteEipWithOptions(request: $_model.DeleteEipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEip",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEipResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEipResponse({}));
  }

  /**
   * Deletes a pay-as-you-go elastic IP address (EIP).
   * 
   * @param request - DeleteEipRequest
   * @returns DeleteEipResponse
   */
  async deleteEip(request: $_model.DeleteEipRequest): Promise<$_model.DeleteEipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEipWithOptions(request, runtime);
  }

  /**
   * Deletes a custom route entry.
   * 
   * @param request - DeleteEnsRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnsRouteEntryResponse
   */
  async deleteEnsRouteEntryWithOptions(request: $_model.DeleteEnsRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnsRouteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnsRouteEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnsRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnsRouteEntryResponse({}));
  }

  /**
   * Deletes a custom route entry.
   * 
   * @param request - DeleteEnsRouteEntryRequest
   * @returns DeleteEnsRouteEntryResponse
   */
  async deleteEnsRouteEntry(request: $_model.DeleteEnsRouteEntryRequest): Promise<$_model.DeleteEnsRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnsRouteEntryWithOptions(request, runtime);
  }

  /**
   * 删除售卖约束的条件约束
   * 
   * @param tmpReq - DeleteEnsSaleConditionControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnsSaleConditionControlResponse
   */
  async deleteEnsSaleConditionControlWithOptions(tmpReq: $_model.DeleteEnsSaleConditionControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnsSaleConditionControlResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteEnsSaleConditionControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.saleControls)) {
      request.saleControlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.saleControls, "SaleControls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.saleControlsShrink)) {
      query["SaleControls"] = request.saleControlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnsSaleConditionControl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnsSaleConditionControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnsSaleConditionControlResponse({}));
  }

  /**
   * 删除售卖约束的条件约束
   * 
   * @param request - DeleteEnsSaleConditionControlRequest
   * @returns DeleteEnsSaleConditionControlResponse
   */
  async deleteEnsSaleConditionControl(request: $_model.DeleteEnsSaleConditionControlRequest): Promise<$_model.DeleteEnsSaleConditionControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnsSaleConditionControlWithOptions(request, runtime);
  }

  /**
   * 删除售卖约束基础约束
   * 
   * @param tmpReq - DeleteEnsSaleControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnsSaleControlResponse
   */
  async deleteEnsSaleControlWithOptions(tmpReq: $_model.DeleteEnsSaleControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnsSaleControlResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteEnsSaleControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.saleControls)) {
      request.saleControlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.saleControls, "SaleControls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.saleControlsShrink)) {
      query["SaleControls"] = request.saleControlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnsSaleControl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnsSaleControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnsSaleControlResponse({}));
  }

  /**
   * 删除售卖约束基础约束
   * 
   * @param request - DeleteEnsSaleControlRequest
   * @returns DeleteEnsSaleControlResponse
   */
  async deleteEnsSaleControl(request: $_model.DeleteEnsSaleControlRequest): Promise<$_model.DeleteEnsSaleControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnsSaleControlWithOptions(request, runtime);
  }

  /**
   * Deletes an edge private network (EPN) instance.
   * 
   * @remarks
   * You can delete an EPN instance only when the instance group information is empty.
   * 
   * @param request - DeleteEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEpnInstanceResponse
   */
  async deleteEpnInstanceWithOptions(request: $_model.DeleteEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEpnInstanceResponse({}));
  }

  /**
   * Deletes an edge private network (EPN) instance.
   * 
   * @remarks
   * You can delete an EPN instance only when the instance group information is empty.
   * 
   * @param request - DeleteEpnInstanceRequest
   * @returns DeleteEpnInstanceResponse
   */
  async deleteEpnInstance(request: $_model.DeleteEpnInstanceRequest): Promise<$_model.DeleteEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a File Storage NAS file system.
   * 
   * @param request - DeleteFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystemWithOptions(request: $_model.DeleteFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileSystemResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileSystem",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileSystemResponse({}));
  }

  /**
   * Deletes a File Storage NAS file system.
   * 
   * @param request - DeleteFileSystemRequest
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystem(request: $_model.DeleteFileSystemRequest): Promise<$_model.DeleteFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  /**
   * Deletes a Destination Network Address Translation (DNAT) entry from a specified DNAT table.
   * 
   * @param request - DeleteForwardEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteForwardEntryResponse
   */
  async deleteForwardEntryWithOptions(request: $_model.DeleteForwardEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteForwardEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteForwardEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteForwardEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteForwardEntryResponse({}));
  }

  /**
   * Deletes a Destination Network Address Translation (DNAT) entry from a specified DNAT table.
   * 
   * @param request - DeleteForwardEntryRequest
   * @returns DeleteForwardEntryResponse
   */
  async deleteForwardEntry(request: $_model.DeleteForwardEntryRequest): Promise<$_model.DeleteForwardEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteForwardEntryWithOptions(request, runtime);
  }

  /**
   * Deletes a high-availability VIP (HAVIP).
   * 
   * @param tmpReq - DeleteHaVipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHaVipsResponse
   */
  async deleteHaVipsWithOptions(tmpReq: $_model.DeleteHaVipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHaVipsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteHaVipsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.haVipIds)) {
      request.haVipIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.haVipIds, "HaVipIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.haVipIdsShrink)) {
      query["HaVipIds"] = request.haVipIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHaVips",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHaVipsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHaVipsResponse({}));
  }

  /**
   * Deletes a high-availability VIP (HAVIP).
   * 
   * @param request - DeleteHaVipsRequest
   * @returns DeleteHaVipsResponse
   */
  async deleteHaVips(request: $_model.DeleteHaVipsRequest): Promise<$_model.DeleteHaVipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHaVipsWithOptions(request, runtime);
  }

  /**
   * Deletes a custom image.
   * 
   * @param request - DeleteImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageResponse
   */
  async deleteImageWithOptions(request: $_model.DeleteImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageResponse({}));
  }

  /**
   * Deletes a custom image.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * Deletes SSH key pairs.
   * 
   * @remarks
   *   After you delete an SSH key pair, you can no longer query the key pair by calling the DescribeKeyPairs operation.
   * *   If you delete an SSH key pair that is bound to an Edge Node Service (ENS) instance, ENS no longer stores the SSH key pair. However, you can still use the key pair to access the instance. When you call the DescribeInstance operation to query instance information, no other information but the name of the key pair (**KeyPairName**) is returned.
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: $_model.DeleteKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyPairs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeyPairsResponse({}));
  }

  /**
   * Deletes SSH key pairs.
   * 
   * @remarks
   *   After you delete an SSH key pair, you can no longer query the key pair by calling the DescribeKeyPairs operation.
   * *   If you delete an SSH key pair that is bound to an Edge Node Service (ENS) instance, ENS no longer stores the SSH key pair. However, you can still use the key pair to access the instance. When you call the DescribeInstance operation to query instance information, no other information but the name of the key pair (**KeyPairName**) is returned.
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: $_model.DeleteKeyPairsRequest): Promise<$_model.DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * Deletes a listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancerListener",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListener(request: $_model.DeleteLoadBalancerListenerRequest): Promise<$_model.DeleteLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Deletes a mount target.
   * 
   * @remarks
   * After you delete a mount target, the mount target cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTargetWithOptions(request: $_model.DeleteMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetName)) {
      query["MountTargetName"] = request.mountTargetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMountTarget",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMountTargetResponse({}));
  }

  /**
   * Deletes a mount target.
   * 
   * @remarks
   * After you delete a mount target, the mount target cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteMountTargetRequest
   * @returns DeleteMountTargetResponse
   */
  async deleteMountTarget(request: $_model.DeleteMountTargetRequest): Promise<$_model.DeleteMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes an Internet network address translation (NAT) gateway.
   * 
   * @param request - DeleteNatGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatGatewayResponse
   */
  async deleteNatGatewayWithOptions(request: $_model.DeleteNatGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNatGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDelete)) {
      query["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNatGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNatGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNatGatewayResponse({}));
  }

  /**
   * Deletes an Internet network address translation (NAT) gateway.
   * 
   * @param request - DeleteNatGatewayRequest
   * @returns DeleteNatGatewayResponse
   */
  async deleteNatGateway(request: $_model.DeleteNatGatewayRequest): Promise<$_model.DeleteNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNatGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC).
   * 
   * @param request - DeleteNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkResponse
   */
  async deleteNetworkWithOptions(request: $_model.DeleteNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC).
   * 
   * @param request - DeleteNetworkRequest
   * @returns DeleteNetworkResponse
   */
  async deleteNetwork(request: $_model.DeleteNetworkRequest): Promise<$_model.DeleteNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkWithOptions(request, runtime);
  }

  /**
   * Deletes a network access control list (ACL).
   * 
   * @param request - DeleteNetworkAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAclResponse
   */
  async deleteNetworkAclWithOptions(request: $_model.DeleteNetworkAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkAclId)) {
      query["NetworkAclId"] = request.networkAclId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkAclResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkAclResponse({}));
  }

  /**
   * Deletes a network access control list (ACL).
   * 
   * @param request - DeleteNetworkAclRequest
   * @returns DeleteNetworkAclResponse
   */
  async deleteNetworkAcl(request: $_model.DeleteNetworkAclRequest): Promise<$_model.DeleteNetworkAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkAclWithOptions(request, runtime);
  }

  /**
   * Deletes a network access control list (ACL) rule.
   * 
   * @param request - DeleteNetworkAclEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAclEntryResponse
   */
  async deleteNetworkAclEntryWithOptions(request: $_model.DeleteNetworkAclEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkAclEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkAclEntryId)) {
      query["NetworkAclEntryId"] = request.networkAclEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkAclEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkAclEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkAclEntryResponse({}));
  }

  /**
   * Deletes a network access control list (ACL) rule.
   * 
   * @param request - DeleteNetworkAclEntryRequest
   * @returns DeleteNetworkAclEntryResponse
   */
  async deleteNetworkAclEntry(request: $_model.DeleteNetworkAclEntryRequest): Promise<$_model.DeleteNetworkAclEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkAclEntryWithOptions(request, runtime);
  }

  /**
   * Deletes an elastic network interface (ENI).
   * 
   * @param tmpReq - DeleteNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkInterfacesResponse
   */
  async deleteNetworkInterfacesWithOptions(tmpReq: $_model.DeleteNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkInterfacesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteNetworkInterfacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.networkInterfaceIds)) {
      request.networkInterfaceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkInterfaceIds, "NetworkInterfaceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.networkInterfaceIdsShrink)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkInterfaces",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkInterfacesResponse({}));
  }

  /**
   * Deletes an elastic network interface (ENI).
   * 
   * @param request - DeleteNetworkInterfacesRequest
   * @returns DeleteNetworkInterfacesResponse
   */
  async deleteNetworkInterfaces(request: $_model.DeleteNetworkInterfacesRequest): Promise<$_model.DeleteNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Deletes an object.
   * 
   * @param request - DeleteObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteObjectResponse
   */
  async deleteObjectWithOptions(request: $_model.DeleteObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteObject",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteObjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteObjectResponse({}));
  }

  /**
   * Deletes an object.
   * 
   * @param request - DeleteObjectRequest
   * @returns DeleteObjectResponse
   */
  async deleteObject(request: $_model.DeleteObjectRequest): Promise<$_model.DeleteObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteObjectWithOptions(request, runtime);
  }

  /**
   * Deletes a shared data group (SDG).
   * 
   * @remarks
   * If all the SDGs corresponding to the original disk are deleted, the original disk is automatically cleared.
   * 
   * @param tmpReq - DeleteSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSDGResponse
   */
  async deleteSDGWithOptions(tmpReq: $_model.DeleteSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSDGResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.SDGId)) {
      request.SDGIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.SDGId, "SDGId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.SDGIdShrink)) {
      query["SDGId"] = request.SDGIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSDGResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSDGResponse({}));
  }

  /**
   * Deletes a shared data group (SDG).
   * 
   * @remarks
   * If all the SDGs corresponding to the original disk are deleted, the original disk is automatically cleared.
   * 
   * @param request - DeleteSDGRequest
   * @returns DeleteSDGResponse
   */
  async deleteSDG(request: $_model.DeleteSDGRequest): Promise<$_model.DeleteSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSDGWithOptions(request, runtime);
  }

  /**
   * Deletes a security group.
   * 
   * @remarks
   * Before you delete a security group, make sure that no instances exist in the security group.
   * 
   * @param request - DeleteSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityGroupResponse
   */
  async deleteSecurityGroupWithOptions(request: $_model.DeleteSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityGroupResponse({}));
  }

  /**
   * Deletes a security group.
   * 
   * @remarks
   * Before you delete a security group, make sure that no instances exist in the security group.
   * 
   * @param request - DeleteSecurityGroupRequest
   * @returns DeleteSecurityGroupResponse
   */
  async deleteSecurityGroup(request: $_model.DeleteSecurityGroupRequest): Promise<$_model.DeleteSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an ENS security group rule.
   * 
   * @param tmpReq - DeleteSecurityGroupPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityGroupPermissionsResponse
   */
  async deleteSecurityGroupPermissionsWithOptions(tmpReq: $_model.DeleteSecurityGroupPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityGroupPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSecurityGroupPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityGroupPermissions",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityGroupPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityGroupPermissionsResponse({}));
  }

  /**
   * Deletes an ENS security group rule.
   * 
   * @param request - DeleteSecurityGroupPermissionsRequest
   * @returns DeleteSecurityGroupPermissionsResponse
   */
  async deleteSecurityGroupPermissions(request: $_model.DeleteSecurityGroupPermissionsRequest): Promise<$_model.DeleteSecurityGroupPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityGroupPermissionsWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * Deletes a snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes a source network address translation (SNAT) entry from a specified SNAT table.
   * 
   * @param request - DeleteSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntryWithOptions(request: $_model.DeleteSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnatEntryResponse({}));
  }

  /**
   * Deletes a source network address translation (SNAT) entry from a specified SNAT table.
   * 
   * @param request - DeleteSnatEntryRequest
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntry(request: $_model.DeleteSnatEntryRequest): Promise<$_model.DeleteSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  /**
   * Deletes an elastic IP address (EIP) from a source network address translation (SNAT) entry.
   * 
   * @param request - DeleteSnatIpForSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnatIpForSnatEntryResponse
   */
  async deleteSnatIpForSnatEntryWithOptions(request: $_model.DeleteSnatIpForSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnatIpForSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnatIpForSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnatIpForSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnatIpForSnatEntryResponse({}));
  }

  /**
   * Deletes an elastic IP address (EIP) from a source network address translation (SNAT) entry.
   * 
   * @param request - DeleteSnatIpForSnatEntryRequest
   * @returns DeleteSnatIpForSnatEntryResponse
   */
  async deleteSnatIpForSnatEntry(request: $_model.DeleteSnatIpForSnatEntryRequest): Promise<$_model.DeleteSnatIpForSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnatIpForSnatEntryWithOptions(request, runtime);
  }

  /**
   * Deletes a storage gateway.
   * 
   * @param request - DeleteStorageGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStorageGatewayResponse
   */
  async deleteStorageGatewayWithOptions(request: $_model.DeleteStorageGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStorageGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStorageGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStorageGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStorageGatewayResponse({}));
  }

  /**
   * Deletes a storage gateway.
   * 
   * @param request - DeleteStorageGatewayRequest
   * @returns DeleteStorageGatewayResponse
   */
  async deleteStorageGateway(request: $_model.DeleteStorageGatewayRequest): Promise<$_model.DeleteStorageGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStorageGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes a storage volume.
   * 
   * @param request - DeleteStorageVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStorageVolumeResponse
   */
  async deleteStorageVolumeWithOptions(request: $_model.DeleteStorageVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStorageVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStorageVolume",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStorageVolumeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStorageVolumeResponse({}));
  }

  /**
   * Deletes a storage volume.
   * 
   * @param request - DeleteStorageVolumeRequest
   * @returns DeleteStorageVolumeResponse
   */
  async deleteStorageVolume(request: $_model.DeleteStorageVolumeRequest): Promise<$_model.DeleteStorageVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStorageVolumeWithOptions(request, runtime);
  }

  /**
   * Deletes a vSwitch.
   * 
   * @remarks
   * Before you delete a vSwitch, make sure that no instances exist in the vSwitch.
   * 
   * @param request - DeleteVSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVSwitchResponse
   */
  async deleteVSwitchWithOptions(request: $_model.DeleteVSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVSwitch",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVSwitchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVSwitchResponse({}));
  }

  /**
   * Deletes a vSwitch.
   * 
   * @remarks
   * Before you delete a vSwitch, make sure that no instances exist in the vSwitch.
   * 
   * @param request - DeleteVSwitchRequest
   * @returns DeleteVSwitchResponse
   */
  async deleteVSwitch(request: $_model.DeleteVSwitchRequest): Promise<$_model.DeleteVSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  /**
   * Deploys a shared data group (SDG) to compute instances.
   * 
   * @param tmpReq - DeployInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployInstanceSDGResponse
   */
  async deployInstanceSDGWithOptions(tmpReq: $_model.DeployInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.DeployInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deploymentType)) {
      query["DeploymentType"] = request.deploymentType;
    }

    if (!$dara.isNull(request.diskAccessProtocol)) {
      query["DiskAccessProtocol"] = request.diskAccessProtocol;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.DeployInstanceSDGResponse({}));
  }

  /**
   * Deploys a shared data group (SDG) to compute instances.
   * 
   * @param request - DeployInstanceSDGRequest
   * @returns DeployInstanceSDGResponse
   */
  async deployInstanceSDG(request: $_model.DeployInstanceSDGRequest): Promise<$_model.DeployInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployInstanceSDGWithOptions(request, runtime);
  }

  /**
   * Deploys shared data groups (SDGs).
   * 
   * @param tmpReq - DeploySDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeploySDGResponse
   */
  async deploySDGWithOptions(tmpReq: $_model.DeploySDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeploySDGResponse> {
    tmpReq.validate();
    let request = new $_model.DeploySDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeploySDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeploySDGResponse>(await this.callApi(params, req, runtime), new $_model.DeploySDGResponse({}));
  }

  /**
   * Deploys shared data groups (SDGs).
   * 
   * @param request - DeploySDGRequest
   * @returns DeploySDGResponse
   */
  async deploySDG(request: $_model.DeploySDGRequest): Promise<$_model.DeploySDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deploySDGWithOptions(request, runtime);
  }

  /**
   * Queries information about images of the Android in Container (AIC) instance.
   * 
   * @param request - DescribeAICImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAICImagesResponse
   */
  async describeAICImagesWithOptions(request: $_model.DescribeAICImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAICImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!$dara.isNull(request.minDate)) {
      query["MinDate"] = request.minDate;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAICImages",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAICImagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAICImagesResponse({}));
  }

  /**
   * Queries information about images of the Android in Container (AIC) instance.
   * 
   * @param request - DescribeAICImagesRequest
   * @returns DescribeAICImagesResponse
   */
  async describeAICImages(request: $_model.DescribeAICImagesRequest): Promise<$_model.DescribeAICImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAICImagesWithOptions(request, runtime);
  }

  /**
   * Queries information about ARM servers and Android in Container (AIC) instances.
   * 
   * @param tmpReq - DescribeARMServerInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeARMServerInstancesResponse
   */
  async describeARMServerInstancesWithOptions(tmpReq: $_model.DescribeARMServerInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeARMServerInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeARMServerInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.AICSpecs)) {
      request.AICSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.AICSpecs, "AICSpecs", "json");
    }

    if (!$dara.isNull(tmpReq.ensRegionIds)) {
      request.ensRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ensRegionIds, "EnsRegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.serverIds)) {
      request.serverIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverIds, "ServerIds", "json");
    }

    if (!$dara.isNull(tmpReq.serverSpecs)) {
      request.serverSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverSpecs, "ServerSpecs", "json");
    }

    if (!$dara.isNull(tmpReq.states)) {
      request.statesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.states, "States", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeARMServerInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeARMServerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeARMServerInstancesResponse({}));
  }

  /**
   * Queries information about ARM servers and Android in Container (AIC) instances.
   * 
   * @param request - DescribeARMServerInstancesRequest
   * @returns DescribeARMServerInstancesResponse
   */
  async describeARMServerInstances(request: $_model.DescribeARMServerInstancesRequest): Promise<$_model.DescribeARMServerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeARMServerInstancesWithOptions(request, runtime);
  }

  /**
   * 查询指定组件的信息
   * 
   * @param request - DescribeAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonResponse
   */
  async describeAddonWithOptions(request: $_model.DescribeAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddon",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonResponse({}));
  }

  /**
   * 查询指定组件的信息
   * 
   * @param request - DescribeAddonRequest
   * @returns DescribeAddonResponse
   */
  async describeAddon(request: $_model.DescribeAddonRequest): Promise<$_model.DescribeAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddonWithOptions(request, runtime);
  }

  /**
   * Queries the basic properties, resources, and container status of an application.
   * 
   * @param request - DescribeApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationResponse
   */
  async describeApplicationWithOptions(request: $_model.DescribeApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersions)) {
      query["AppVersions"] = request.appVersions;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.outDetailStatParams)) {
      query["OutDetailStatParams"] = request.outDetailStatParams;
    }

    if (!$dara.isNull(request.resourceSelector)) {
      query["ResourceSelector"] = request.resourceSelector;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationResponse({}));
  }

  /**
   * Queries the basic properties, resources, and container status of an application.
   * 
   * @param request - DescribeApplicationRequest
   * @returns DescribeApplicationResponse
   */
  async describeApplication(request: $_model.DescribeApplicationRequest): Promise<$_model.DescribeApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the resources that can be created.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2017-11-10",
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
   * Queries the resources that can be created.
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(runtime);
  }

  /**
   * Queries the specifications of resources that you can purchase when you create an instance.
   * 
   * @param request - DescribeAvailableResourceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceInfoResponse
   */
  async describeAvailableResourceInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableResourceInfoResponse({}));
  }

  /**
   * Queries the specifications of resources that you can purchase when you create an instance.
   * @returns DescribeAvailableResourceInfoResponse
   */
  async describeAvailableResourceInfo(): Promise<$_model.DescribeAvailableResourceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceInfoWithOptions(runtime);
  }

  /**
   * Queries available bandwidth metering methods.
   * 
   * @param request - DescribeBandWithdChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBandWithdChargeTypeResponse
   */
  async describeBandWithdChargeTypeWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBandWithdChargeTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBandWithdChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBandWithdChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBandWithdChargeTypeResponse({}));
  }

  /**
   * Queries available bandwidth metering methods.
   * @returns DescribeBandWithdChargeTypeResponse
   */
  async describeBandWithdChargeType(): Promise<$_model.DescribeBandWithdChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBandWithdChargeTypeWithOptions(runtime);
  }

  /**
   * Queries the metering method for the bandwidth.
   * 
   * @param request - DescribeBandwitdhByInternetChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBandwitdhByInternetChargeTypeResponse
   */
  async describeBandwitdhByInternetChargeTypeWithOptions(request: $_model.DescribeBandwitdhByInternetChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBandwitdhByInternetChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBandwitdhByInternetChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBandwitdhByInternetChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBandwitdhByInternetChargeTypeResponse({}));
  }

  /**
   * Queries the metering method for the bandwidth.
   * 
   * @param request - DescribeBandwitdhByInternetChargeTypeRequest
   * @returns DescribeBandwitdhByInternetChargeTypeResponse
   */
  async describeBandwitdhByInternetChargeType(request: $_model.DescribeBandwitdhByInternetChargeTypeRequest): Promise<$_model.DescribeBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  /**
   * Queries the available resources in a region.
   * 
   * @param request - DescribeCloudDiskAvailableResourceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDiskAvailableResourceInfoResponse
   */
  async describeCloudDiskAvailableResourceInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDiskAvailableResourceInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDiskAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDiskAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDiskAvailableResourceInfoResponse({}));
  }

  /**
   * Queries the available resources in a region.
   * @returns DescribeCloudDiskAvailableResourceInfoResponse
   */
  async describeCloudDiskAvailableResourceInfo(): Promise<$_model.DescribeCloudDiskAvailableResourceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDiskAvailableResourceInfoWithOptions(runtime);
  }

  /**
   * The specifications of available resources are queried when you create a disk.
   * 
   * @param tmpReq - DescribeCloudDiskTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDiskTypesResponse
   */
  async describeCloudDiskTypesWithOptions(tmpReq: $_model.DescribeCloudDiskTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDiskTypesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudDiskTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ensRegionIds)) {
      request.ensRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ensRegionIds, "EnsRegionIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDiskTypes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDiskTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDiskTypesResponse({}));
  }

  /**
   * The specifications of available resources are queried when you create a disk.
   * 
   * @param request - DescribeCloudDiskTypesRequest
   * @returns DescribeCloudDiskTypesResponse
   */
  async describeCloudDiskTypes(request: $_model.DescribeCloudDiskTypesRequest): Promise<$_model.DescribeCloudDiskTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDiskTypesWithOptions(request, runtime);
  }

  /**
   * Queries Container Service for Kubernetes (ACK) edge clusters.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: $_model.DescribeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCluster",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterResponse({}));
  }

  /**
   * Queries Container Service for Kubernetes (ACK) edge clusters.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: $_model.DescribeClusterRequest): Promise<$_model.DescribeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * 查询集群详细信息
   * 
   * @param request - DescribeClusterDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetailWithOptions(request: $_model.DescribeClusterDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterDetail",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterDetailResponse({}));
  }

  /**
   * 查询集群详细信息
   * 
   * @param request - DescribeClusterDetailRequest
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetail(request: $_model.DescribeClusterDetailRequest): Promise<$_model.DescribeClusterDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterDetailWithOptions(request, runtime);
  }

  /**
   * Queries the certificate of a Container Service for Kubernetes (ACK) edge cluster.
   * 
   * @remarks
   *   The maximum number of times that each user can call this operation per second is 100.
   * 
   * @param request - DescribeClusterKubeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterKubeConfigResponse
   */
  async describeClusterKubeConfigWithOptions(request: $_model.DescribeClusterKubeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterKubeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterKubeConfig",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterKubeConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterKubeConfigResponse({}));
  }

  /**
   * Queries the certificate of a Container Service for Kubernetes (ACK) edge cluster.
   * 
   * @remarks
   *   The maximum number of times that each user can call this operation per second is 100.
   * 
   * @param request - DescribeClusterKubeConfigRequest
   * @returns DescribeClusterKubeConfigResponse
   */
  async describeClusterKubeConfig(request: $_model.DescribeClusterKubeConfigRequest): Promise<$_model.DescribeClusterKubeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterKubeConfigWithOptions(request, runtime);
  }

  /**
   * 查询集群节点池信息
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePoolsWithOptions(request: $_model.DescribeClusterNodePoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNodePoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "DescribeClusterNodePools",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNodePoolsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNodePoolsResponse({}));
  }

  /**
   * 查询集群节点池信息
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePools(request: $_model.DescribeClusterNodePoolsRequest): Promise<$_model.DescribeClusterNodePoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterNodePoolsWithOptions(request, runtime);
  }

  /**
   * 查询节点池节点
   * 
   * @param request - DescribeClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodesWithOptions(request: $_model.DescribeClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      query["NodepoolId"] = request.nodepoolId;
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
      action: "DescribeClusterNodes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNodesResponse({}));
  }

  /**
   * 查询节点池节点
   * 
   * @param request - DescribeClusterNodesRequest
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodes(request: $_model.DescribeClusterNodesRequest): Promise<$_model.DescribeClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterNodesWithOptions(request, runtime);
  }

  /**
   * 查询集群KubeConfig
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfigWithOptions(request: $_model.DescribeClusterUserKubeconfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterUserKubeconfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterUserKubeconfig",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterUserKubeconfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterUserKubeconfigResponse({}));
  }

  /**
   * 查询集群KubeConfig
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfig(request: $_model.DescribeClusterUserKubeconfigRequest): Promise<$_model.DescribeClusterUserKubeconfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterUserKubeconfigWithOptions(request, runtime);
  }

  /**
   * Queries a list of clusters.
   * 
   * @param request - DescribeClustersV1Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1WithOptions(request: $_model.DescribeClustersV1Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClustersV1Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClustersV1",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClustersV1Response>(await this.callApi(params, req, runtime), new $_model.DescribeClustersV1Response({}));
  }

  /**
   * Queries a list of clusters.
   * 
   * @param request - DescribeClustersV1Request
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1(request: $_model.DescribeClustersV1Request): Promise<$_model.DescribeClustersV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClustersV1WithOptions(request, runtime);
  }

  /**
   * Queries the results of creating an instance.
   * 
   * @param request - DescribeCreatePrePaidInstanceResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCreatePrePaidInstanceResultResponse
   */
  async describeCreatePrePaidInstanceResultWithOptions(request: $_model.DescribeCreatePrePaidInstanceResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreatePrePaidInstanceResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCreatePrePaidInstanceResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCreatePrePaidInstanceResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCreatePrePaidInstanceResultResponse({}));
  }

  /**
   * Queries the results of creating an instance.
   * 
   * @param request - DescribeCreatePrePaidInstanceResultRequest
   * @returns DescribeCreatePrePaidInstanceResultResponse
   */
  async describeCreatePrePaidInstanceResult(request: $_model.DescribeCreatePrePaidInstanceResultRequest): Promise<$_model.DescribeCreatePrePaidInstanceResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreatePrePaidInstanceResultWithOptions(request, runtime);
  }

  /**
   * Queries the distribution status of data files on edge instances of an application.
   * 
   * @param tmpReq - DescribeDataDistResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataDistResultResponse
   */
  async describeDataDistResultWithOptions(tmpReq: $_model.DescribeDataDistResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataDistResultResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeDataDistResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ensRegionIds)) {
      request.ensRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ensRegionIds, "EnsRegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.dataNames)) {
      query["DataNames"] = request.dataNames;
    }

    if (!$dara.isNull(request.dataVersions)) {
      query["DataVersions"] = request.dataVersions;
    }

    if (!$dara.isNull(request.ensRegionIdsShrink)) {
      query["EnsRegionIds"] = request.ensRegionIdsShrink;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!$dara.isNull(request.minDate)) {
      query["MinDate"] = request.minDate;
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
      action: "DescribeDataDistResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataDistResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataDistResultResponse({}));
  }

  /**
   * Queries the distribution status of data files on edge instances of an application.
   * 
   * @param request - DescribeDataDistResultRequest
   * @returns DescribeDataDistResultResponse
   */
  async describeDataDistResult(request: $_model.DescribeDataDistResultRequest): Promise<$_model.DescribeDataDistResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataDistResultWithOptions(request, runtime);
  }

  /**
   * Queries the download URLs of application data on file servers and returns the file servers on which data is pushed.
   * 
   * @param request - DescribeDataDownloadURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataDownloadURLResponse
   */
  async describeDataDownloadURLWithOptions(request: $_model.DescribeDataDownloadURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataDownloadURLResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataDownloadURL",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataDownloadURLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataDownloadURLResponse({}));
  }

  /**
   * Queries the download URLs of application data on file servers and returns the file servers on which data is pushed.
   * 
   * @param request - DescribeDataDownloadURLRequest
   * @returns DescribeDataDownloadURLResponse
   */
  async describeDataDownloadURL(request: $_model.DescribeDataDownloadURLRequest): Promise<$_model.DescribeDataDownloadURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataDownloadURLWithOptions(request, runtime);
  }

  /**
   * Queries the push status of application data files on Edge Node Service (ENS) nodes.
   * 
   * @param request - DescribeDataPushResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataPushResultResponse
   */
  async describeDataPushResultWithOptions(request: $_model.DescribeDataPushResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataPushResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.dataNames)) {
      query["DataNames"] = request.dataNames;
    }

    if (!$dara.isNull(request.dataVersions)) {
      query["DataVersions"] = request.dataVersions;
    }

    if (!$dara.isNull(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!$dara.isNull(request.minDate)) {
      query["MinDate"] = request.minDate;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionIds)) {
      query["RegionIds"] = request.regionIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataPushResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataPushResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataPushResultResponse({}));
  }

  /**
   * Queries the push status of application data files on Edge Node Service (ENS) nodes.
   * 
   * @param request - DescribeDataPushResultRequest
   * @returns DescribeDataPushResultResponse
   */
  async describeDataPushResult(request: $_model.DescribeDataPushResultRequest): Promise<$_model.DescribeDataPushResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataPushResultWithOptions(request, runtime);
  }

  /**
   * Queries the properties of instances and virtual devices in a specific edge application.
   * 
   * @param request - DescribeDeviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceServiceResponse
   */
  async describeDeviceServiceWithOptions(request: $_model.DescribeDeviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceServiceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceServiceResponse({}));
  }

  /**
   * Queries the properties of instances and virtual devices in a specific edge application.
   * 
   * @param request - DescribeDeviceServiceRequest
   * @returns DescribeDeviceServiceResponse
   */
  async describeDeviceService(request: $_model.DescribeDeviceServiceRequest): Promise<$_model.DescribeDeviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceServiceWithOptions(request, runtime);
  }

  /**
   * Queries the disk IOPS monitoring data.
   * 
   * @param request - DescribeDiskIopsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskIopsListResponse
   */
  async describeDiskIopsListWithOptions(request: $_model.DescribeDiskIopsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiskIopsListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskIopsList",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiskIopsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiskIopsListResponse({}));
  }

  /**
   * Queries the disk IOPS monitoring data.
   * 
   * @param request - DescribeDiskIopsListRequest
   * @returns DescribeDiskIopsListResponse
   */
  async describeDiskIopsList(request: $_model.DescribeDiskIopsListRequest): Promise<$_model.DescribeDiskIopsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskIopsListWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more disks.
   * 
   * @param request - DescribeDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisksResponse
   */
  async describeDisksWithOptions(request: $_model.DescribeDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.diskChargeType)) {
      query["DiskChargeType"] = request.diskChargeType;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.diskName)) {
      query["DiskName"] = request.diskName;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDisks",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDisksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDisksResponse({}));
  }

  /**
   * Queries the information about one or more disks.
   * 
   * @param request - DescribeDisksRequest
   * @returns DescribeDisksResponse
   */
  async describeDisks(request: $_model.DescribeDisksRequest): Promise<$_model.DescribeDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisksWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of resources that you can purchase when you create an instance.
   * 
   * @param request - DescribeElbAvailableResourceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElbAvailableResourceInfoResponse
   */
  async describeElbAvailableResourceInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElbAvailableResourceInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElbAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElbAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElbAvailableResourceInfoResponse({}));
  }

  /**
   * Queries the specifications of resources that you can purchase when you create an instance.
   * @returns DescribeElbAvailableResourceInfoResponse
   */
  async describeElbAvailableResourceInfo(): Promise<$_model.DescribeElbAvailableResourceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElbAvailableResourceInfoWithOptions(runtime);
  }

  /**
   * 描述商品code
   * 
   * @param request - DescribeEnsCommodityCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsCommodityCodeResponse
   */
  async describeEnsCommodityCodeWithOptions(request: $_model.DescribeEnsCommodityCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsCommodityCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsCommodityCode",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsCommodityCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsCommodityCodeResponse({}));
  }

  /**
   * 描述商品code
   * 
   * @param request - DescribeEnsCommodityCodeRequest
   * @returns DescribeEnsCommodityCodeResponse
   */
  async describeEnsCommodityCode(request: $_model.DescribeEnsCommodityCodeRequest): Promise<$_model.DescribeEnsCommodityCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsCommodityCodeWithOptions(request, runtime);
  }

  /**
   * 获取模块code
   * 
   * @param request - DescribeEnsCommodityModuleCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsCommodityModuleCodeResponse
   */
  async describeEnsCommodityModuleCodeWithOptions(request: $_model.DescribeEnsCommodityModuleCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsCommodityModuleCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.moduleCode)) {
      query["ModuleCode"] = request.moduleCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsCommodityModuleCode",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsCommodityModuleCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsCommodityModuleCodeResponse({}));
  }

  /**
   * 获取模块code
   * 
   * @param request - DescribeEnsCommodityModuleCodeRequest
   * @returns DescribeEnsCommodityModuleCodeResponse
   */
  async describeEnsCommodityModuleCode(request: $_model.DescribeEnsCommodityModuleCodeRequest): Promise<$_model.DescribeEnsCommodityModuleCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsCommodityModuleCodeWithOptions(request, runtime);
  }

  /**
   * Queries elastic IP addresses (EIPs).
   * 
   * @param request - DescribeEnsEipAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsEipAddressesResponse
   */
  async describeEnsEipAddressesWithOptions(request: $_model.DescribeEnsEipAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsEipAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.associatedInstanceId)) {
      query["AssociatedInstanceId"] = request.associatedInstanceId;
    }

    if (!$dara.isNull(request.associatedInstanceType)) {
      query["AssociatedInstanceType"] = request.associatedInstanceType;
    }

    if (!$dara.isNull(request.eipAddress)) {
      query["EipAddress"] = request.eipAddress;
    }

    if (!$dara.isNull(request.eipName)) {
      query["EipName"] = request.eipName;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.icmpReplyEnabled)) {
      query["IcmpReplyEnabled"] = request.icmpReplyEnabled;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.standby)) {
      query["Standby"] = request.standby;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsEipAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsEipAddressesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsEipAddressesResponse({}));
  }

  /**
   * Queries elastic IP addresses (EIPs).
   * 
   * @param request - DescribeEnsEipAddressesRequest
   * @returns DescribeEnsEipAddressesResponse
   */
  async describeEnsEipAddresses(request: $_model.DescribeEnsEipAddressesRequest): Promise<$_model.DescribeEnsEipAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsEipAddressesWithOptions(request, runtime);
  }

  /**
   * Queries regions in which ENS resources can be created.
   * 
   * @param request - DescribeEnsNetDistrictRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsNetDistrictResponse
   */
  async describeEnsNetDistrictWithOptions(request: $_model.DescribeEnsNetDistrictRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsNetDistrictResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!$dara.isNull(request.netDistrictCodeNode)) {
      query["NetDistrictCodeNode"] = request.netDistrictCodeNode;
    }

    if (!$dara.isNull(request.netLevelCode)) {
      query["NetLevelCode"] = request.netLevelCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsNetDistrict",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsNetDistrictResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsNetDistrictResponse({}));
  }

  /**
   * Queries regions in which ENS resources can be created.
   * 
   * @param request - DescribeEnsNetDistrictRequest
   * @returns DescribeEnsNetDistrictResponse
   */
  async describeEnsNetDistrict(request: $_model.DescribeEnsNetDistrictRequest): Promise<$_model.DescribeEnsNetDistrictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsNetDistrictWithOptions(request, runtime);
  }

  /**
   * Queries the supported network levels.
   * 
   * @param request - DescribeEnsNetLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsNetLevelResponse
   */
  async describeEnsNetLevelWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsNetLevelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsNetLevel",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsNetLevelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsNetLevelResponse({}));
  }

  /**
   * Queries the supported network levels.
   * @returns DescribeEnsNetLevelResponse
   */
  async describeEnsNetLevel(): Promise<$_model.DescribeEnsNetLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsNetLevelWithOptions(runtime);
  }

  /**
   * Queries the information about ISPs and number of ISPs in an area.
   * 
   * @param request - DescribeEnsNetSaleDistrictRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsNetSaleDistrictResponse
   */
  async describeEnsNetSaleDistrictWithOptions(request: $_model.DescribeEnsNetSaleDistrictRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsNetSaleDistrictResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!$dara.isNull(request.netLevelCode)) {
      query["NetLevelCode"] = request.netLevelCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsNetSaleDistrict",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsNetSaleDistrictResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsNetSaleDistrictResponse({}));
  }

  /**
   * Queries the information about ISPs and number of ISPs in an area.
   * 
   * @param request - DescribeEnsNetSaleDistrictRequest
   * @returns DescribeEnsNetSaleDistrictResponse
   */
  async describeEnsNetSaleDistrict(request: $_model.DescribeEnsNetSaleDistrictRequest): Promise<$_model.DescribeEnsNetSaleDistrictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsNetSaleDistrictWithOptions(request, runtime);
  }

  /**
   * Queries whether a node supports IPv6.
   * 
   * @param request - DescribeEnsRegionIdIpv6InfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsRegionIdIpv6InfoResponse
   */
  async describeEnsRegionIdIpv6InfoWithOptions(request: $_model.DescribeEnsRegionIdIpv6InfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsRegionIdIpv6InfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsRegionIdIpv6Info",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsRegionIdIpv6InfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsRegionIdIpv6InfoResponse({}));
  }

  /**
   * Queries whether a node supports IPv6.
   * 
   * @param request - DescribeEnsRegionIdIpv6InfoRequest
   * @returns DescribeEnsRegionIdIpv6InfoResponse
   */
  async describeEnsRegionIdIpv6Info(request: $_model.DescribeEnsRegionIdIpv6InfoRequest): Promise<$_model.DescribeEnsRegionIdIpv6InfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsRegionIdIpv6InfoWithOptions(request, runtime);
  }

  /**
   * Queries node resources.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeEnsRegionIdResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsRegionIdResourceResponse
   */
  async describeEnsRegionIdResourceWithOptions(request: $_model.DescribeEnsRegionIdResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsRegionIdResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsRegionIdResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsRegionIdResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsRegionIdResourceResponse({}));
  }

  /**
   * Queries node resources.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeEnsRegionIdResourceRequest
   * @returns DescribeEnsRegionIdResourceResponse
   */
  async describeEnsRegionIdResource(request: $_model.DescribeEnsRegionIdResourceRequest): Promise<$_model.DescribeEnsRegionIdResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsRegionIdResourceWithOptions(request, runtime);
  }

  /**
   * Queries the Edge Node Service (ENS) nodes that you can use.
   * 
   * @param request - DescribeEnsRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsRegionsResponse
   */
  async describeEnsRegionsWithOptions(request: $_model.DescribeEnsRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsRegions",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsRegionsResponse({}));
  }

  /**
   * Queries the Edge Node Service (ENS) nodes that you can use.
   * 
   * @param request - DescribeEnsRegionsRequest
   * @returns DescribeEnsRegionsResponse
   */
  async describeEnsRegions(request: $_model.DescribeEnsRegionsRequest): Promise<$_model.DescribeEnsRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the usage summary of ENS virtual machines (VMs), disks, and networks.
   * 
   * @param request - DescribeEnsResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsResourceUsageResponse
   */
  async describeEnsResourceUsageWithOptions(request: $_model.DescribeEnsResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsResourceUsageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsResourceUsage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsResourceUsageResponse({}));
  }

  /**
   * Queries the usage summary of ENS virtual machines (VMs), disks, and networks.
   * 
   * @param request - DescribeEnsResourceUsageRequest
   * @returns DescribeEnsResourceUsageResponse
   */
  async describeEnsResourceUsage(request: $_model.DescribeEnsResourceUsageRequest): Promise<$_model.DescribeEnsResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries route entries.
   * 
   * @param request - DescribeEnsRouteEntryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsRouteEntryListResponse
   */
  async describeEnsRouteEntryListWithOptions(request: $_model.DescribeEnsRouteEntryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsRouteEntryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.nextHopId)) {
      query["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    if (!$dara.isNull(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    if (!$dara.isNull(request.routeEntryType)) {
      query["RouteEntryType"] = request.routeEntryType;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsRouteEntryList",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsRouteEntryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsRouteEntryListResponse({}));
  }

  /**
   * Queries route entries.
   * 
   * @param request - DescribeEnsRouteEntryListRequest
   * @returns DescribeEnsRouteEntryListResponse
   */
  async describeEnsRouteEntryList(request: $_model.DescribeEnsRouteEntryListRequest): Promise<$_model.DescribeEnsRouteEntryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsRouteEntryListWithOptions(request, runtime);
  }

  /**
   * Queries route tables.
   * 
   * @param request - DescribeEnsRouteTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsRouteTablesResponse
   */
  async describeEnsRouteTablesWithOptions(request: $_model.DescribeEnsRouteTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsRouteTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associateType)) {
      query["AssociateType"] = request.associateType;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.routeTableName)) {
      query["RouteTableName"] = request.routeTableName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsRouteTables",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsRouteTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsRouteTablesResponse({}));
  }

  /**
   * Queries route tables.
   * 
   * @param request - DescribeEnsRouteTablesRequest
   * @returns DescribeEnsRouteTablesResponse
   */
  async describeEnsRouteTables(request: $_model.DescribeEnsRouteTablesRequest): Promise<$_model.DescribeEnsRouteTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsRouteTablesWithOptions(request, runtime);
  }

  /**
   * 展示配置的售卖约束信息
   * 
   * @param request - DescribeEnsSaleControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsSaleControlResponse
   */
  async describeEnsSaleControlWithOptions(request: $_model.DescribeEnsSaleControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsSaleControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.moduleCode)) {
      query["ModuleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsSaleControl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsSaleControlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsSaleControlResponse({}));
  }

  /**
   * 展示配置的售卖约束信息
   * 
   * @param request - DescribeEnsSaleControlRequest
   * @returns DescribeEnsSaleControlResponse
   */
  async describeEnsSaleControl(request: $_model.DescribeEnsSaleControlRequest): Promise<$_model.DescribeEnsSaleControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsSaleControlWithOptions(request, runtime);
  }

  /**
   * 获取可用资源
   * 
   * @param request - DescribeEnsSaleControlAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsSaleControlAvailableResourceResponse
   */
  async describeEnsSaleControlAvailableResourceWithOptions(request: $_model.DescribeEnsSaleControlAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsSaleControlAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsSaleControlAvailableResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsSaleControlAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsSaleControlAvailableResourceResponse({}));
  }

  /**
   * 获取可用资源
   * 
   * @param request - DescribeEnsSaleControlAvailableResourceRequest
   * @returns DescribeEnsSaleControlAvailableResourceResponse
   */
  async describeEnsSaleControlAvailableResource(request: $_model.DescribeEnsSaleControlAvailableResourceRequest): Promise<$_model.DescribeEnsSaleControlAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsSaleControlAvailableResourceWithOptions(request, runtime);
  }

  /**
   * 获取售卖约束库存
   * 
   * @param request - DescribeEnsSaleControlStockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnsSaleControlStockResponse
   */
  async describeEnsSaleControlStockWithOptions(request: $_model.DescribeEnsSaleControlStockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnsSaleControlStockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.moduleCode)) {
      query["ModuleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnsSaleControlStock",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnsSaleControlStockResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnsSaleControlStockResponse({}));
  }

  /**
   * 获取售卖约束库存
   * 
   * @param request - DescribeEnsSaleControlStockRequest
   * @returns DescribeEnsSaleControlStockResponse
   */
  async describeEnsSaleControlStock(request: $_model.DescribeEnsSaleControlStockRequest): Promise<$_model.DescribeEnsSaleControlStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnsSaleControlStockWithOptions(request, runtime);
  }

  /**
   * Queries the EPN bandwidth usage.
   * 
   * @param request - DescribeEpnBandWidthDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEpnBandWidthDataResponse
   */
  async describeEpnBandWidthDataWithOptions(request: $_model.DescribeEpnBandWidthDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEpnBandWidthDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEpnBandWidthData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEpnBandWidthDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEpnBandWidthDataResponse({}));
  }

  /**
   * Queries the EPN bandwidth usage.
   * 
   * @param request - DescribeEpnBandWidthDataRequest
   * @returns DescribeEpnBandWidthDataResponse
   */
  async describeEpnBandWidthData(request: $_model.DescribeEpnBandWidthDataRequest): Promise<$_model.DescribeEpnBandWidthDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEpnBandWidthDataWithOptions(request, runtime);
  }

  /**
   * Queries the metering method of the EPN bandwidth within a time period.
   * 
   * @param request - DescribeEpnBandwitdhByInternetChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEpnBandwitdhByInternetChargeTypeResponse
   */
  async describeEpnBandwitdhByInternetChargeTypeWithOptions(request: $_model.DescribeEpnBandwitdhByInternetChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEpnBandwitdhByInternetChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEpnBandwitdhByInternetChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEpnBandwitdhByInternetChargeTypeResponse({}));
  }

  /**
   * Queries the metering method of the EPN bandwidth within a time period.
   * 
   * @param request - DescribeEpnBandwitdhByInternetChargeTypeRequest
   * @returns DescribeEpnBandwitdhByInternetChargeTypeResponse
   */
  async describeEpnBandwitdhByInternetChargeType(request: $_model.DescribeEpnBandwitdhByInternetChargeTypeRequest): Promise<$_model.DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEpnBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  /**
   * Queries networking information about an EPN instance.
   * 
   * @remarks
   * In internal networking mode, the value of Instances is empty in the response. In public networking mode, the value of VSwitches is empty in the response.
   * 
   * @param request - DescribeEpnInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEpnInstanceAttributeResponse
   */
  async describeEpnInstanceAttributeWithOptions(request: $_model.DescribeEpnInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEpnInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEpnInstanceAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEpnInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEpnInstanceAttributeResponse({}));
  }

  /**
   * Queries networking information about an EPN instance.
   * 
   * @remarks
   * In internal networking mode, the value of Instances is empty in the response. In public networking mode, the value of VSwitches is empty in the response.
   * 
   * @param request - DescribeEpnInstanceAttributeRequest
   * @returns DescribeEpnInstanceAttributeResponse
   */
  async describeEpnInstanceAttribute(request: $_model.DescribeEpnInstanceAttributeRequest): Promise<$_model.DescribeEpnInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEpnInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries EPN instances.
   * 
   * @param request - DescribeEpnInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEpnInstancesResponse
   */
  async describeEpnInstancesWithOptions(request: $_model.DescribeEpnInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEpnInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
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
      action: "DescribeEpnInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEpnInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEpnInstancesResponse({}));
  }

  /**
   * Queries EPN instances.
   * 
   * @param request - DescribeEpnInstancesRequest
   * @returns DescribeEpnInstancesResponse
   */
  async describeEpnInstances(request: $_model.DescribeEpnInstancesRequest): Promise<$_model.DescribeEpnInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEpnInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the metering data of the edge private network (EPN).
   * 
   * @param request - DescribeEpnMeasurementDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEpnMeasurementDataResponse
   */
  async describeEpnMeasurementDataWithOptions(request: $_model.DescribeEpnMeasurementDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEpnMeasurementDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEpnMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEpnMeasurementDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEpnMeasurementDataResponse({}));
  }

  /**
   * Queries the metering data of the edge private network (EPN).
   * 
   * @param request - DescribeEpnMeasurementDataRequest
   * @returns DescribeEpnMeasurementDataResponse
   */
  async describeEpnMeasurementData(request: $_model.DescribeEpnMeasurementDataRequest): Promise<$_model.DescribeEpnMeasurementDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEpnMeasurementDataWithOptions(request, runtime);
  }

  /**
   * Queries the export result of an image.
   * 
   * @remarks
   *   You can call this operation to query information about all custom images in your account. The information include the image properties, image export status, and the Object Storage Service (OSS) download links.
   * *   Empty strings are returned for images that are not exported.
   * *   The download links may become invalid if you delete objects in OSS.
   * 
   * @param request - DescribeExportImageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExportImageInfoResponse
   */
  async describeExportImageInfoWithOptions(request: $_model.DescribeExportImageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExportImageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
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
      action: "DescribeExportImageInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExportImageInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExportImageInfoResponse({}));
  }

  /**
   * Queries the export result of an image.
   * 
   * @remarks
   *   You can call this operation to query information about all custom images in your account. The information include the image properties, image export status, and the Object Storage Service (OSS) download links.
   * *   Empty strings are returned for images that are not exported.
   * *   The download links may become invalid if you delete objects in OSS.
   * 
   * @param request - DescribeExportImageInfoRequest
   * @returns DescribeExportImageInfoResponse
   */
  async describeExportImageInfo(request: $_model.DescribeExportImageInfoRequest): Promise<$_model.DescribeExportImageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExportImageInfoWithOptions(request, runtime);
  }

  /**
   * Queries the export status of an image.
   * 
   * @param request - DescribeExportImageStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExportImageStatusResponse
   */
  async describeExportImageStatusWithOptions(request: $_model.DescribeExportImageStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExportImageStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExportImageStatus",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExportImageStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExportImageStatusResponse({}));
  }

  /**
   * Queries the export status of an image.
   * 
   * @param request - DescribeExportImageStatusRequest
   * @returns DescribeExportImageStatusResponse
   */
  async describeExportImageStatus(request: $_model.DescribeExportImageStatusRequest): Promise<$_model.DescribeExportImageStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExportImageStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystemsWithOptions(request: $_model.DescribeFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileSystems",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileSystemsResponse({}));
  }

  /**
   * Queries the information about file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystems(request: $_model.DescribeFileSystemsRequest): Promise<$_model.DescribeFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemsWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeForwardEntryAttribute operation to query the details of a DNAT rule.
   * 
   * @param request - DescribeForwardEntryAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeForwardEntryAttributeResponse
   */
  async describeForwardEntryAttributeWithOptions(request: $_model.DescribeForwardEntryAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeForwardEntryAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeForwardEntryAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeForwardEntryAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeForwardEntryAttributeResponse({}));
  }

  /**
   * You can call the DescribeForwardEntryAttribute operation to query the details of a DNAT rule.
   * 
   * @param request - DescribeForwardEntryAttributeRequest
   * @returns DescribeForwardEntryAttributeResponse
   */
  async describeForwardEntryAttribute(request: $_model.DescribeForwardEntryAttributeRequest): Promise<$_model.DescribeForwardEntryAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeForwardEntryAttributeWithOptions(request, runtime);
  }

  /**
   * Queries Destination Network Address Translation (DNAT) entries that you created.
   * 
   * @param request - DescribeForwardTableEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeForwardTableEntriesResponse
   */
  async describeForwardTableEntriesWithOptions(request: $_model.DescribeForwardTableEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeForwardTableEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!$dara.isNull(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    if (!$dara.isNull(request.forwardEntryName)) {
      query["ForwardEntryName"] = request.forwardEntryName;
    }

    if (!$dara.isNull(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
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
      action: "DescribeForwardTableEntries",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeForwardTableEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeForwardTableEntriesResponse({}));
  }

  /**
   * Queries Destination Network Address Translation (DNAT) entries that you created.
   * 
   * @param request - DescribeForwardTableEntriesRequest
   * @returns DescribeForwardTableEntriesResponse
   */
  async describeForwardTableEntries(request: $_model.DescribeForwardTableEntriesRequest): Promise<$_model.DescribeForwardTableEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeForwardTableEntriesWithOptions(request, runtime);
  }

  /**
   * Queries high-availability virtual IP addresses (HAVIPs).
   * 
   * @param request - DescribeHaVipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHaVipsResponse
   */
  async describeHaVipsWithOptions(request: $_model.DescribeHaVipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHaVipsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHaVips",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHaVipsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHaVipsResponse({}));
  }

  /**
   * Queries high-availability virtual IP addresses (HAVIPs).
   * 
   * @param request - DescribeHaVipsRequest
   * @returns DescribeHaVipsResponse
   */
  async describeHaVips(request: $_model.DescribeHaVipsRequest): Promise<$_model.DescribeHaVipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHaVipsWithOptions(request, runtime);
  }

  /**
   * Queries instance system events.
   * 
   * @remarks
   *   You must specify an event type to query. You can query multiple event types at the same time.
   * 
   * @param tmpReq - DescribeHistoryEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEventsWithOptions(tmpReq: $_model.DescribeHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeHistoryEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventLevels)) {
      request.eventLevelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventLevels, "EventLevels", "simple");
    }

    if (!$dara.isNull(tmpReq.eventStatus)) {
      request.eventStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventStatus, "EventStatus", "simple");
    }

    if (!$dara.isNull(tmpReq.eventTypes)) {
      request.eventTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventTypes, "EventTypes", "simple");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.eventLevelsShrink)) {
      query["EventLevels"] = request.eventLevelsShrink;
    }

    if (!$dara.isNull(request.eventStatusShrink)) {
      query["EventStatus"] = request.eventStatusShrink;
    }

    if (!$dara.isNull(request.eventTypesShrink)) {
      query["EventTypes"] = request.eventTypesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHistoryEvents",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryEventsResponse({}));
  }

  /**
   * Queries instance system events.
   * 
   * @remarks
   *   You must specify an event type to query. You can query multiple event types at the same time.
   * 
   * @param request - DescribeHistoryEventsRequest
   * @returns DescribeHistoryEventsResponse
   */
  async describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsWithOptions(request, runtime);
  }

  /**
   * Queries available images.
   * 
   * @param request - DescribeImageInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageInfosResponse
   */
  async describeImageInfosWithOptions(request: $_model.DescribeImageInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageInfos",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageInfosResponse({}));
  }

  /**
   * Queries available images.
   * 
   * @param request - DescribeImageInfosRequest
   * @returns DescribeImageInfosResponse
   */
  async describeImageInfos(request: $_model.DescribeImageInfosRequest): Promise<$_model.DescribeImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageInfosWithOptions(request, runtime);
  }

  /**
   * Queries the accounts with which you share an image specified by the ImageId parameter.
   * 
   * @param request - DescribeImageSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageSharePermissionResponse
   */
  async describeImageSharePermissionWithOptions(request: $_model.DescribeImageSharePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageSharePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunId)) {
      query["AliyunId"] = request.aliyunId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
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
      action: "DescribeImageSharePermission",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageSharePermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageSharePermissionResponse({}));
  }

  /**
   * Queries the accounts with which you share an image specified by the ImageId parameter.
   * 
   * @param request - DescribeImageSharePermissionRequest
   * @returns DescribeImageSharePermissionResponse
   */
  async describeImageSharePermission(request: $_model.DescribeImageSharePermissionRequest): Promise<$_model.DescribeImageSharePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageSharePermissionWithOptions(request, runtime);
  }

  /**
   * Queries available images.
   * 
   * @param request - DescribeImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImagesResponse
   */
  async describeImagesWithOptions(request: $_model.DescribeImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImages",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImagesResponse({}));
  }

  /**
   * Queries available images.
   * 
   * @param request - DescribeImagesRequest
   * @returns DescribeImagesResponse
   */
  async describeImages(request: $_model.DescribeImagesRequest): Promise<$_model.DescribeImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query whether auto-renewal is enabled for an instance.
   * 
   * @param request - DescribeInstanceAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAutoRenewAttributeResponse
   */
  async describeInstanceAutoRenewAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAutoRenewAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAutoRenewAttributeResponse({}));
  }

  /**
   * You can call this operation to query whether auto-renewal is enabled for an instance.
   * 
   * @param request - DescribeInstanceAutoRenewAttributeRequest
   * @returns DescribeInstanceAutoRenewAttributeResponse
   */
  async describeInstanceAutoRenewAttribute(request: $_model.DescribeInstanceAutoRenewAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the detailed bandwidth data of an instance, which is collected every 5 minutes.
   * 
   * @remarks
   *   You can call this operation up to 800 times per second per account.
   * *   You can call this operation up to 100 times per second per user.
   * *   You can specify multiple request parameters to filter query results. Specified request parameters have logical AND relations. Only the specified parameters are included in the filter conditions. However, if InstanceIds is set to an empty JSON array, this parameter is regarded as a valid filter condition and an empty result is returned.
   * 
   * @param request - DescribeInstanceBandwidthDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceBandwidthDetailResponse
   */
  async describeInstanceBandwidthDetailWithOptions(request: $_model.DescribeInstanceBandwidthDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceBandwidthDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceBandwidthDetail",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceBandwidthDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceBandwidthDetailResponse({}));
  }

  /**
   * Queries the detailed bandwidth data of an instance, which is collected every 5 minutes.
   * 
   * @remarks
   *   You can call this operation up to 800 times per second per account.
   * *   You can call this operation up to 100 times per second per user.
   * *   You can specify multiple request parameters to filter query results. Specified request parameters have logical AND relations. Only the specified parameters are included in the filter conditions. However, if InstanceIds is set to an empty JSON array, this parameter is regarded as a valid filter condition and an empty result is returned.
   * 
   * @param request - DescribeInstanceBandwidthDetailRequest
   * @returns DescribeInstanceBandwidthDetailResponse
   */
  async describeInstanceBandwidthDetail(request: $_model.DescribeInstanceBandwidthDetailRequest): Promise<$_model.DescribeInstanceBandwidthDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceBandwidthDetailWithOptions(request, runtime);
  }

  /**
   * Queries the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @remarks
   * Queries the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @param request - DescribeInstanceBootConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceBootConfigurationResponse
   */
  async describeInstanceBootConfigurationWithOptions(request: $_model.DescribeInstanceBootConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceBootConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bootSet)) {
      query["BootSet"] = request.bootSet;
    }

    if (!$dara.isNull(request.bootType)) {
      query["BootType"] = request.bootType;
    }

    if (!$dara.isNull(request.diskSet)) {
      query["DiskSet"] = request.diskSet;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceBootConfiguration",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceBootConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceBootConfigurationResponse({}));
  }

  /**
   * Queries the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @remarks
   * Queries the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @param request - DescribeInstanceBootConfigurationRequest
   * @returns DescribeInstanceBootConfigurationResponse
   */
  async describeInstanceBootConfiguration(request: $_model.DescribeInstanceBootConfigurationRequest): Promise<$_model.DescribeInstanceBootConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceBootConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the vCPU and memory usage of an instance.
   * 
   * @param request - DescribeInstanceMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceMonitorDataResponse
   */
  async describeInstanceMonitorDataWithOptions(request: $_model.DescribeInstanceMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceMonitorData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceMonitorDataResponse({}));
  }

  /**
   * Queries the vCPU and memory usage of an instance.
   * 
   * @param request - DescribeInstanceMonitorDataRequest
   * @returns DescribeInstanceMonitorDataResponse
   */
  async describeInstanceMonitorData(request: $_model.DescribeInstanceMonitorDataRequest): Promise<$_model.DescribeInstanceMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries shared data groups (SDGs) that are mounted to an Android in Container (AIC) instance.
   * 
   * @param tmpReq - DescribeInstanceSDGStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSDGStatusResponse
   */
  async describeInstanceSDGStatusWithOptions(tmpReq: $_model.DescribeInstanceSDGStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSDGStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeInstanceSDGStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.SDGIds)) {
      request.SDGIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.SDGIds, "SDGIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSDGStatus",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSDGStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSDGStatusResponse({}));
  }

  /**
   * Queries shared data groups (SDGs) that are mounted to an Android in Container (AIC) instance.
   * 
   * @param request - DescribeInstanceSDGStatusRequest
   * @returns DescribeInstanceSDGStatusResponse
   */
  async describeInstanceSDGStatus(request: $_model.DescribeInstanceSDGStatusRequest): Promise<$_model.DescribeInstanceSDGStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSDGStatusWithOptions(request, runtime);
  }

  /**
   * Queries the instance specifications that you can purchase.
   * 
   * @param request - DescribeInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecResponse
   */
  async describeInstanceSpecWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSpecResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSpecResponse({}));
  }

  /**
   * Queries the instance specifications that you can purchase.
   * @returns DescribeInstanceSpecResponse
   */
  async describeInstanceSpec(): Promise<$_model.DescribeInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecWithOptions(runtime);
  }

  /**
   * Queries the specifications of instance types.
   * 
   * @param request - DescribeInstanceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTypesResponse
   */
  async describeInstanceTypesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTypesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceTypes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTypesResponse({}));
  }

  /**
   * Queries the specifications of instance types.
   * @returns DescribeInstanceTypesResponse
   */
  async describeInstanceTypes(): Promise<$_model.DescribeInstanceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(runtime);
  }

  /**
   * Queries the Virtual Network Computing (VNC) URL of an Edge Node Service (ENS) instance.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrlWithOptions(request: $_model.DescribeInstanceVncUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceVncUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceVncUrl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceVncUrlResponse({}));
  }

  /**
   * Queries the Virtual Network Computing (VNC) URL of an Edge Node Service (ENS) instance.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrl(request: $_model.DescribeInstanceVncUrlRequest): Promise<$_model.DescribeInstanceVncUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  /**
   * You can call this operation to view the details of one or more instances.
   * 
   * @remarks
   *   You can call this operation up to 800 times per second per account.
   * *   You can call this operation up to 100 times per second per user.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions. However, if InstanceIds is set to an empty JSON array, it is regarded as a valid filter condition and an empty result is returned.
   * 
   * @param tmpReq - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(tmpReq: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eipAddresses)) {
      request.eipAddressesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eipAddresses, "EipAddresses", "json");
    }

    if (!$dara.isNull(tmpReq.serviceStatus)) {
      request.serviceStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceStatus, "ServiceStatus", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eipAddressesShrink)) {
      query["EipAddresses"] = request.eipAddressesShrink;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.ensServiceId)) {
      query["EnsServiceId"] = request.ensServiceId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceResourceType)) {
      query["InstanceResourceType"] = request.instanceResourceType;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.intranetIp)) {
      query["IntranetIp"] = request.intranetIp;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceStatusShrink)) {
      query["ServiceStatus"] = request.serviceStatusShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * You can call this operation to view the details of one or more instances.
   * 
   * @remarks
   *   You can call this operation up to 800 times per second per account.
   * *   You can call this operation up to 100 times per second per user.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions. However, if InstanceIds is set to an empty JSON array, it is regarded as a valid filter condition and an empty result is returned.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairsWithOptions(request: $_model.DescribeKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
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
      action: "DescribeKeyPairs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKeyPairsResponse({}));
  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: $_model.DescribeKeyPairsRequest): Promise<$_model.DescribeKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerAttribute",
      version: "2017-11-10",
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
   * Queries detailed information about an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttribute(request: $_model.DescribeLoadBalancerAttributeRequest): Promise<$_model.DescribeLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of an HTTP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2017-11-10",
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
   * Queries the configuration of an HTTP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerHTTPSListenerAttribute",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancerHTTPSListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPSListenerAttributeResponse
   */
  async describeLoadBalancerHTTPSListenerAttribute(request: $_model.DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries monitoring data of an edge load balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancerListenMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerListenMonitorResponse
   */
  async describeLoadBalancerListenMonitorWithOptions(request: $_model.DescribeLoadBalancerListenMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerListenMonitorResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerListenMonitor",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerListenMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerListenMonitorResponse({}));
  }

  /**
   * Queries monitoring data of an edge load balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancerListenMonitorRequest
   * @returns DescribeLoadBalancerListenMonitorResponse
   */
  async describeLoadBalancerListenMonitor(request: $_model.DescribeLoadBalancerListenMonitorRequest): Promise<$_model.DescribeLoadBalancerListenMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerListenMonitorWithOptions(request, runtime);
  }

  /**
   * Queries listeners of Edge Load Balancer (ELB) instances.
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

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerListeners",
      version: "2017-11-10",
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
   * Queries listeners of Edge Load Balancer (ELB) instances.
   * 
   * @param request - DescribeLoadBalancerListenersRequest
   * @returns DescribeLoadBalancerListenersResponse
   */
  async describeLoadBalancerListeners(request: $_model.DescribeLoadBalancerListenersRequest): Promise<$_model.DescribeLoadBalancerListenersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerListenersWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of an Edge Load Balancer (ELB) instance.
   * 
   * @param request - DescribeLoadBalancerSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerSpecResponse
   */
  async describeLoadBalancerSpecWithOptions(request: $_model.DescribeLoadBalancerSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerSpecResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerSpecResponse({}));
  }

  /**
   * Queries the specifications of an Edge Load Balancer (ELB) instance.
   * 
   * @param request - DescribeLoadBalancerSpecRequest
   * @returns DescribeLoadBalancerSpecResponse
   */
  async describeLoadBalancerSpec(request: $_model.DescribeLoadBalancerSpecRequest): Promise<$_model.DescribeLoadBalancerSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerSpecWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a Transmission Control Protocol (TCP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2017-11-10",
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
   * Queries the configurations of a Transmission Control Protocol (TCP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttribute(request: $_model.DescribeLoadBalancerTCPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of a User Datagram Protocol (UDP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerUDPListenerAttribute",
      version: "2017-11-10",
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
   * Queries the configuration of a User Datagram Protocol (UDP) listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancerUDPListenerAttributeRequest
   * @returns DescribeLoadBalancerUDPListenerAttributeResponse
   */
  async describeLoadBalancerUDPListenerAttribute(request: $_model.DescribeLoadBalancerUDPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the Edge Load Balance (ELB) instances that you have created.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancersWithOptions(request: $_model.DescribeLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancers",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancersResponse({}));
  }

  /**
   * Queries the Edge Load Balance (ELB) instances that you have created.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeLoadBalancersRequest
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancers(request: $_model.DescribeLoadBalancersRequest): Promise<$_model.DescribeLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries the metering data of the user.
   * 
   * @param request - DescribeMeasurementDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeasurementDataResponse
   */
  async describeMeasurementDataWithOptions(request: $_model.DescribeMeasurementDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeasurementDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeasurementDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeasurementDataResponse({}));
  }

  /**
   * Queries the metering data of the user.
   * 
   * @param request - DescribeMeasurementDataRequest
   * @returns DescribeMeasurementDataResponse
   */
  async describeMeasurementData(request: $_model.DescribeMeasurementDataRequest): Promise<$_model.DescribeMeasurementDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeasurementDataWithOptions(request, runtime);
  }

  /**
   * Queries the information about mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargetsWithOptions(request: $_model.DescribeMountTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMountTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetName)) {
      query["MountTargetName"] = request.mountTargetName;
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
      action: "DescribeMountTargets",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMountTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMountTargetsResponse({}));
  }

  /**
   * Queries the information about mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargets(request: $_model.DescribeMountTargetsRequest): Promise<$_model.DescribeMountTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of resources that you can purchase when you create a NAS.
   * 
   * @param request - DescribeNASAvailableResourceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNASAvailableResourceInfoResponse
   */
  async describeNASAvailableResourceInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNASAvailableResourceInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNASAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNASAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNASAvailableResourceInfoResponse({}));
  }

  /**
   * Queries the specifications of resources that you can purchase when you create a NAS.
   * @returns DescribeNASAvailableResourceInfoResponse
   */
  async describeNASAvailableResourceInfo(): Promise<$_model.DescribeNASAvailableResourceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNASAvailableResourceInfoWithOptions(runtime);
  }

  /**
   * 根据筛选条件获取指定NC属性和资源量信息
   * 
   * @param request - DescribeNCInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNCInformationResponse
   */
  async describeNCInformationWithOptions(request: $_model.DescribeNCInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNCInformationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNCInformation",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNCInformationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNCInformationResponse({}));
  }

  /**
   * 根据筛选条件获取指定NC属性和资源量信息
   * 
   * @param request - DescribeNCInformationRequest
   * @returns DescribeNCInformationResponse
   */
  async describeNCInformation(request: $_model.DescribeNCInformationRequest): Promise<$_model.DescribeNCInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNCInformationWithOptions(request, runtime);
  }

  /**
   * Queries created Network Address Translation (NAT) gateways.
   * 
   * @param request - DescribeNatGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatGatewaysResponse
   */
  async describeNatGatewaysWithOptions(request: $_model.DescribeNatGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatGatewaysResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatGateways",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatGatewaysResponse({}));
  }

  /**
   * Queries created Network Address Translation (NAT) gateways.
   * 
   * @param request - DescribeNatGatewaysRequest
   * @returns DescribeNatGatewaysResponse
   */
  async describeNatGateways(request: $_model.DescribeNatGatewaysRequest): Promise<$_model.DescribeNatGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatGatewaysWithOptions(request, runtime);
  }

  /**
   * Queries network access control lists (ACLs).
   * 
   * @param request - DescribeNetworkAclsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkAclsResponse
   */
  async describeNetworkAclsWithOptions(request: $_model.DescribeNetworkAclsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkAclsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkAclId)) {
      query["NetworkAclId"] = request.networkAclId;
    }

    if (!$dara.isNull(request.networkAclName)) {
      query["NetworkAclName"] = request.networkAclName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkAcls",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkAclsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkAclsResponse({}));
  }

  /**
   * Queries network access control lists (ACLs).
   * 
   * @param request - DescribeNetworkAclsRequest
   * @returns DescribeNetworkAclsResponse
   */
  async describeNetworkAcls(request: $_model.DescribeNetworkAclsRequest): Promise<$_model.DescribeNetworkAclsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkAclsWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of a specified network.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeNetworkAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkAttributeResponse
   */
  async describeNetworkAttributeWithOptions(request: $_model.DescribeNetworkAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkAttributeResponse({}));
  }

  /**
   * Queries the configuration of a specified network.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeNetworkAttributeRequest
   * @returns DescribeNetworkAttributeResponse
   */
  async describeNetworkAttribute(request: $_model.DescribeNetworkAttributeRequest): Promise<$_model.DescribeNetworkAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkAttributeWithOptions(request, runtime);
  }

  /**
   * Queries Elastic Network Interfaces (ENIs).
   * 
   * @param request - DescribeNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkInterfacesResponse
   */
  async describeNetworkInterfacesWithOptions(request: $_model.DescribeNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkInterfacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipv6Address)) {
      query["Ipv6Address"] = request.ipv6Address;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!$dara.isNull(request.networkInterfaceName)) {
      query["NetworkInterfaceName"] = request.networkInterfaceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.primaryIpAddress)) {
      query["PrimaryIpAddress"] = request.primaryIpAddress;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkInterfaces",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkInterfacesResponse({}));
  }

  /**
   * Queries Elastic Network Interfaces (ENIs).
   * 
   * @param request - DescribeNetworkInterfacesRequest
   * @returns DescribeNetworkInterfacesResponse
   */
  async describeNetworkInterfaces(request: $_model.DescribeNetworkInterfacesRequest): Promise<$_model.DescribeNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Query the network list.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeNetworksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworksResponse
   */
  async describeNetworksWithOptions(request: $_model.DescribeNetworksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.networkIds)) {
      query["NetworkIds"] = request.networkIds;
    }

    if (!$dara.isNull(request.networkName)) {
      query["NetworkName"] = request.networkName;
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
      action: "DescribeNetworks",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworksResponse({}));
  }

  /**
   * Query the network list.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeNetworksRequest
   * @returns DescribeNetworksResponse
   */
  async describeNetworks(request: $_model.DescribeNetworksRequest): Promise<$_model.DescribeNetworksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworksWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of resources that can be purchased in subscription billing mode.
   * 
   * @param request - DescribePrePaidInstanceStockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrePaidInstanceStockResponse
   */
  async describePrePaidInstanceStockWithOptions(request: $_model.DescribePrePaidInstanceStockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrePaidInstanceStockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrePaidInstanceStock",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrePaidInstanceStockResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrePaidInstanceStockResponse({}));
  }

  /**
   * Queries the specifications of resources that can be purchased in subscription billing mode.
   * 
   * @param request - DescribePrePaidInstanceStockRequest
   * @returns DescribePrePaidInstanceStockResponse
   */
  async describePrePaidInstanceStock(request: $_model.DescribePrePaidInstanceStockRequest): Promise<$_model.DescribePrePaidInstanceStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrePaidInstanceStockWithOptions(request, runtime);
  }

  /**
   * Queries the most recent price of an Edge Node Service (ENS) instance.
   * 
   * @param tmpReq - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(tmpReq: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataDisks)) {
      request.dataDisksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisks, "DataDisks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dataDisksShrink)) {
      query["DataDisks"] = request.dataDisksShrink;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceResponse({}));
  }

  /**
   * Queries the most recent price of an Edge Node Service (ENS) instance.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries information about the Internet service providers (ISPs) of edge nodes.
   * 
   * @param request - DescribeRegionIspsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionIspsResponse
   */
  async describeRegionIspsWithOptions(request: $_model.DescribeRegionIspsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionIspsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegionIsps",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionIspsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionIspsResponse({}));
  }

  /**
   * Queries information about the Internet service providers (ISPs) of edge nodes.
   * 
   * @param request - DescribeRegionIspsRequest
   * @returns DescribeRegionIspsResponse
   */
  async describeRegionIsps(request: $_model.DescribeRegionIspsRequest): Promise<$_model.DescribeRegionIspsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionIspsWithOptions(request, runtime);
  }

  /**
   * 获取区域节点资源量信息
   * 
   * @param request - DescribeRegionResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionResourceResponse
   */
  async describeRegionResourceWithOptions(request: $_model.DescribeRegionResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionResourceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegionResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionResourceResponse({}));
  }

  /**
   * 获取区域节点资源量信息
   * 
   * @param request - DescribeRegionResourceRequest
   * @returns DescribeRegionResourceResponse
   */
  async describeRegionResource(request: $_model.DescribeRegionResourceRequest): Promise<$_model.DescribeRegionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionResourceWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of resources that you can purchase.
   * 
   * @param request - DescribeReservedResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReservedResourceResponse
   */
  async describeReservedResourceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReservedResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReservedResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReservedResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReservedResourceResponse({}));
  }

  /**
   * Queries the specifications of resources that you can purchase.
   * @returns DescribeReservedResourceResponse
   */
  async describeReservedResource(): Promise<$_model.DescribeReservedResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReservedResourceWithOptions(runtime);
  }

  /**
   * 获取资源状态变化时间线
   * 
   * @param request - DescribeResourceTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceTimelineResponse
   */
  async describeResourceTimelineWithOptions(request: $_model.DescribeResourceTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceTimelineResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceTimeline",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceTimelineResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceTimelineResponse({}));
  }

  /**
   * 获取资源状态变化时间线
   * 
   * @param request - DescribeResourceTimelineRequest
   * @returns DescribeResourceTimelineResponse
   */
  async describeResourceTimeline(request: $_model.DescribeResourceTimelineRequest): Promise<$_model.DescribeResourceTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceTimelineWithOptions(request, runtime);
  }

  /**
   * Queries basic information about shared data groups (SDGs), including node preload information.
   * 
   * @param tmpReq - DescribeSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSDGResponse
   */
  async describeSDGWithOptions(tmpReq: $_model.DescribeSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSDGResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.SDGIds)) {
      request.SDGIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.SDGIds, "SDGIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SDGIdsShrink)) {
      query["SDGIds"] = request.SDGIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSDGResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSDGResponse({}));
  }

  /**
   * Queries basic information about shared data groups (SDGs), including node preload information.
   * 
   * @param request - DescribeSDGRequest
   * @returns DescribeSDGResponse
   */
  async describeSDG(request: $_model.DescribeSDGRequest): Promise<$_model.DescribeSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSDGWithOptions(request, runtime);
  }

  /**
   * Queries the deployment status of the shared data group (SDG).
   * 
   * @param tmpReq - DescribeSDGDeploymentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSDGDeploymentStatusResponse
   */
  async describeSDGDeploymentStatusWithOptions(tmpReq: $_model.DescribeSDGDeploymentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSDGDeploymentStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSDGDeploymentStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.diskIds)) {
      request.diskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.diskIds, "DiskIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deploymentType)) {
      query["DeploymentType"] = request.deploymentType;
    }

    if (!$dara.isNull(request.diskIdsShrink)) {
      query["DiskIds"] = request.diskIdsShrink;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSDGDeploymentStatus",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSDGDeploymentStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSDGDeploymentStatusResponse({}));
  }

  /**
   * Queries the deployment status of the shared data group (SDG).
   * 
   * @param request - DescribeSDGDeploymentStatusRequest
   * @returns DescribeSDGDeploymentStatusResponse
   */
  async describeSDGDeploymentStatus(request: $_model.DescribeSDGDeploymentStatusRequest): Promise<$_model.DescribeSDGDeploymentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSDGDeploymentStatusWithOptions(request, runtime);
  }

  /**
   * You can query the information of shared disks in a specified SDG.
   * 
   * @param request - DescribeSDGSharedDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSDGSharedDisksResponse
   */
  async describeSDGSharedDisksWithOptions(request: $_model.DescribeSDGSharedDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSDGSharedDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
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

    if (!$dara.isNull(request.sdgId)) {
      query["SdgId"] = request.sdgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSDGSharedDisks",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSDGSharedDisksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSDGSharedDisksResponse({}));
  }

  /**
   * You can query the information of shared disks in a specified SDG.
   * 
   * @param request - DescribeSDGSharedDisksRequest
   * @returns DescribeSDGSharedDisksResponse
   */
  async describeSDGSharedDisks(request: $_model.DescribeSDGSharedDisksRequest): Promise<$_model.DescribeSDGSharedDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSDGSharedDisksWithOptions(request, runtime);
  }

  /**
   * Queries information about created shared data groups (SDGs).
   * 
   * @param tmpReq - DescribeSDGsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSDGsResponse
   */
  async describeSDGsWithOptions(tmpReq: $_model.DescribeSDGsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSDGsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSDGsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.SDGIds)) {
      request.SDGIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.SDGIds, "SDGIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.SDGIdsShrink)) {
      query["SDGIds"] = request.SDGIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSDGs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSDGsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSDGsResponse({}));
  }

  /**
   * Queries information about created shared data groups (SDGs).
   * 
   * @param request - DescribeSDGsRequest
   * @returns DescribeSDGsResponse
   */
  async describeSDGs(request: $_model.DescribeSDGsRequest): Promise<$_model.DescribeSDGsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSDGsWithOptions(request, runtime);
  }

  /**
   * Queries created secondary public IP addresses.
   * 
   * @param request - DescribeSecondaryPublicIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecondaryPublicIpAddressesResponse
   */
  async describeSecondaryPublicIpAddressesWithOptions(request: $_model.DescribeSecondaryPublicIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecondaryPublicIpAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.secondaryPublicIpAddress)) {
      query["SecondaryPublicIpAddress"] = request.secondaryPublicIpAddress;
    }

    if (!$dara.isNull(request.secondaryPublicIpId)) {
      query["SecondaryPublicIpId"] = request.secondaryPublicIpId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecondaryPublicIpAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecondaryPublicIpAddressesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecondaryPublicIpAddressesResponse({}));
  }

  /**
   * Queries created secondary public IP addresses.
   * 
   * @param request - DescribeSecondaryPublicIpAddressesRequest
   * @returns DescribeSecondaryPublicIpAddressesResponse
   */
  async describeSecondaryPublicIpAddresses(request: $_model.DescribeSecondaryPublicIpAddressesRequest): Promise<$_model.DescribeSecondaryPublicIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecondaryPublicIpAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the rules of a security group.
   * 
   * @param request - DescribeSecurityGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupAttributeResponse
   */
  async describeSecurityGroupAttributeWithOptions(request: $_model.DescribeSecurityGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityGroupAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityGroupAttributeResponse({}));
  }

  /**
   * Queries the rules of a security group.
   * 
   * @param request - DescribeSecurityGroupAttributeRequest
   * @returns DescribeSecurityGroupAttributeResponse
   */
  async describeSecurityGroupAttribute(request: $_model.DescribeSecurityGroupAttributeRequest): Promise<$_model.DescribeSecurityGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries details about created security groups.
   * 
   * @param request - DescribeSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroupsWithOptions(request: $_model.DescribeSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityGroups",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityGroupsResponse({}));
  }

  /**
   * Queries details about created security groups.
   * 
   * @param request - DescribeSecurityGroupsRequest
   * @returns DescribeSecurityGroupsResponse
   */
  async describeSecurityGroups(request: $_model.DescribeSecurityGroupsRequest): Promise<$_model.DescribeSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Queries custom images.
   * 
   * @param request - DescribeSelfImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSelfImagesResponse
   */
  async describeSelfImagesWithOptions(request: $_model.DescribeSelfImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSelfImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSelfImages",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSelfImagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSelfImagesResponse({}));
  }

  /**
   * Queries custom images.
   * 
   * @param request - DescribeSelfImagesRequest
   * @returns DescribeSelfImagesResponse
   */
  async describeSelfImages(request: $_model.DescribeSelfImagesRequest): Promise<$_model.DescribeSelfImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSelfImagesWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeServcieSchedule to query the real-time status of the instance device or container that is being occupied by the UUID.
   * 
   * @param request - DescribeServcieScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServcieScheduleResponse
   */
  async describeServcieScheduleWithOptions(request: $_model.DescribeServcieScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServcieScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.podConfigName)) {
      query["PodConfigName"] = request.podConfigName;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServcieSchedule",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServcieScheduleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServcieScheduleResponse({}));
  }

  /**
   * You can call the DescribeServcieSchedule to query the real-time status of the instance device or container that is being occupied by the UUID.
   * 
   * @param request - DescribeServcieScheduleRequest
   * @returns DescribeServcieScheduleResponse
   */
  async describeServcieSchedule(request: $_model.DescribeServcieScheduleRequest): Promise<$_model.DescribeServcieScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServcieScheduleWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of an edge load balancer (ELB) instance based on the listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeServerLoadBalancerListenMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerLoadBalancerListenMonitorResponse
   */
  async describeServerLoadBalancerListenMonitorWithOptions(request: $_model.DescribeServerLoadBalancerListenMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServerLoadBalancerListenMonitorResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServerLoadBalancerListenMonitor",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServerLoadBalancerListenMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServerLoadBalancerListenMonitorResponse({}));
  }

  /**
   * Queries the monitoring data of an edge load balancer (ELB) instance based on the listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeServerLoadBalancerListenMonitorRequest
   * @returns DescribeServerLoadBalancerListenMonitorResponse
   */
  async describeServerLoadBalancerListenMonitor(request: $_model.DescribeServerLoadBalancerListenMonitorRequest): Promise<$_model.DescribeServerLoadBalancerListenMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerLoadBalancerListenMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the request monitoring data of an edge load balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeServerLoadBalancerMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerLoadBalancerMonitorResponse
   */
  async describeServerLoadBalancerMonitorWithOptions(request: $_model.DescribeServerLoadBalancerMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServerLoadBalancerMonitorResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServerLoadBalancerMonitor",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServerLoadBalancerMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServerLoadBalancerMonitorResponse({}));
  }

  /**
   * Queries the request monitoring data of an edge load balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - DescribeServerLoadBalancerMonitorRequest
   * @returns DescribeServerLoadBalancerMonitorResponse
   */
  async describeServerLoadBalancerMonitor(request: $_model.DescribeServerLoadBalancerMonitorRequest): Promise<$_model.DescribeServerLoadBalancerMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerLoadBalancerMonitorWithOptions(request, runtime);
  }

  /**
   * Queries information about snapshots.
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnapshotsResponse({}));
  }

  /**
   * Queries information about snapshots.
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific source network address translation (SNAT) entry.
   * 
   * @param request - DescribeSnatAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnatAttributeResponse
   */
  async describeSnatAttributeWithOptions(request: $_model.DescribeSnatAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnatAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnatAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnatAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnatAttributeResponse({}));
  }

  /**
   * Queries the details of a specific source network address translation (SNAT) entry.
   * 
   * @param request - DescribeSnatAttributeRequest
   * @returns DescribeSnatAttributeResponse
   */
  async describeSnatAttribute(request: $_model.DescribeSnatAttributeRequest): Promise<$_model.DescribeSnatAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnatAttributeWithOptions(request, runtime);
  }

  /**
   * Queries source network address translation (SNAT) entries.
   * 
   * @param request - DescribeSnatTableEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnatTableEntriesResponse
   */
  async describeSnatTableEntriesWithOptions(request: $_model.DescribeSnatTableEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnatTableEntriesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnatTableEntries",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnatTableEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnatTableEntriesResponse({}));
  }

  /**
   * Queries source network address translation (SNAT) entries.
   * 
   * @param request - DescribeSnatTableEntriesRequest
   * @returns DescribeSnatTableEntriesResponse
   */
  async describeSnatTableEntries(request: $_model.DescribeSnatTableEntriesRequest): Promise<$_model.DescribeSnatTableEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnatTableEntriesWithOptions(request, runtime);
  }

  /**
   * Queries storage gateways.
   * 
   * @param request - DescribeStorageGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageGatewayResponse
   */
  async describeStorageGatewayWithOptions(request: $_model.DescribeStorageGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStorageGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["GatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStorageGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStorageGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStorageGatewayResponse({}));
  }

  /**
   * Queries storage gateways.
   * 
   * @param request - DescribeStorageGatewayRequest
   * @returns DescribeStorageGatewayResponse
   */
  async describeStorageGateway(request: $_model.DescribeStorageGatewayRequest): Promise<$_model.DescribeStorageGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStorageGatewayWithOptions(request, runtime);
  }

  /**
   * Queries volumes.
   * 
   * @param request - DescribeStorageVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageVolumeResponse
   */
  async describeStorageVolumeWithOptions(request: $_model.DescribeStorageVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStorageVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.storageId)) {
      query["StorageId"] = request.storageId;
    }

    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStorageVolume",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStorageVolumeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStorageVolumeResponse({}));
  }

  /**
   * Queries volumes.
   * 
   * @param request - DescribeStorageVolumeRequest
   * @returns DescribeStorageVolumeResponse
   */
  async describeStorageVolume(request: $_model.DescribeStorageVolumeRequest): Promise<$_model.DescribeStorageVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStorageVolumeWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth that you use within a specified period of time.
   * 
   * @param request - DescribeUserBandWidthDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserBandWidthDataResponse
   */
  async describeUserBandWidthDataWithOptions(request: $_model.DescribeUserBandWidthDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserBandWidthDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserBandWidthData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserBandWidthDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserBandWidthDataResponse({}));
  }

  /**
   * Queries the bandwidth that you use within a specified period of time.
   * 
   * @param request - DescribeUserBandWidthDataRequest
   * @returns DescribeUserBandWidthDataResponse
   */
  async describeUserBandWidthData(request: $_model.DescribeUserBandWidthDataRequest): Promise<$_model.DescribeUserBandWidthDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserBandWidthDataWithOptions(request, runtime);
  }

  /**
   * Call the DescribeVSwitchAttributes interface to query the configuration of a specified VSwitch.
   * 
   * @param request - DescribeVSwitchAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchAttributesResponse
   */
  async describeVSwitchAttributesWithOptions(request: $_model.DescribeVSwitchAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitchAttributes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchAttributesResponse({}));
  }

  /**
   * Call the DescribeVSwitchAttributes interface to query the configuration of a specified VSwitch.
   * 
   * @param request - DescribeVSwitchAttributesRequest
   * @returns DescribeVSwitchAttributesResponse
   */
  async describeVSwitchAttributes(request: $_model.DescribeVSwitchAttributesRequest): Promise<$_model.DescribeVSwitchAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchAttributesWithOptions(request, runtime);
  }

  /**
   * Queries information about available vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitches",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchesResponse({}));
  }

  /**
   * Queries information about available vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * Detaches a pay-as-you-go disk from an Edge Node Service (ENS) instance. You cannot call this operation to detach a disk that is created together with an instance.
   * 
   * @param request - DetachDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDiskResponse
   */
  async detachDiskWithOptions(request: $_model.DetachDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDiskResponse>(await this.callApi(params, req, runtime), new $_model.DetachDiskResponse({}));
  }

  /**
   * Detaches a pay-as-you-go disk from an Edge Node Service (ENS) instance. You cannot call this operation to detach a disk that is created together with an instance.
   * 
   * @param request - DetachDiskRequest
   * @returns DetachDiskResponse
   */
  async detachDisk(request: $_model.DetachDiskRequest): Promise<$_model.DetachDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDiskWithOptions(request, runtime);
  }

  /**
   * Detaches a shared data group (SDG).
   * 
   * @param tmpReq - DetachInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachInstanceSDGResponse
   */
  async detachInstanceSDGWithOptions(tmpReq: $_model.DetachInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.DetachInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.DetachInstanceSDGResponse({}));
  }

  /**
   * Detaches a shared data group (SDG).
   * 
   * @param request - DetachInstanceSDGRequest
   * @returns DetachInstanceSDGResponse
   */
  async detachInstanceSDG(request: $_model.DetachInstanceSDGRequest): Promise<$_model.DetachInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachInstanceSDGWithOptions(request, runtime);
  }

  /**
   * Detach an elastic network interface (ENI) from an instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You cannot detach a primary ENI from an instance.
   * *   The ENI must be in the InUse state.
   * *   The instances are in the Stopped state.
   * *   This operation is an asynchronous operation. After this operation is called to detach an ENI, you can check the state of the ENI to determine whether the ENI is detached.
   * 
   * @param request - DetachNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachNetworkInterfaceResponse
   */
  async detachNetworkInterfaceWithOptions(request: $_model.DetachNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachNetworkInterfaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachNetworkInterface",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.DetachNetworkInterfaceResponse({}));
  }

  /**
   * Detach an elastic network interface (ENI) from an instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You cannot detach a primary ENI from an instance.
   * *   The ENI must be in the InUse state.
   * *   The instances are in the Stopped state.
   * *   This operation is an asynchronous operation. After this operation is called to detach an ENI, you can check the state of the ENI to determine whether the ENI is detached.
   * 
   * @param request - DetachNetworkInterfaceRequest
   * @returns DetachNetworkInterfaceResponse
   */
  async detachNetworkInterface(request: $_model.DetachNetworkInterfaceRequest): Promise<$_model.DetachNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Distributes pushed data to the Edge Node Service (ENS) instances of the application. You can specify multiple canary release policies, decompress files, and restart containers.
   * 
   * @param request - DistApplicationDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DistApplicationDataResponse
   */
  async distApplicationDataWithOptions(request: $_model.DistApplicationDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DistApplicationDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.distStrategy)) {
      query["DistStrategy"] = request.distStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DistApplicationData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DistApplicationDataResponse>(await this.callApi(params, req, runtime), new $_model.DistApplicationDataResponse({}));
  }

  /**
   * Distributes pushed data to the Edge Node Service (ENS) instances of the application. You can specify multiple canary release policies, decompress files, and restart containers.
   * 
   * @param request - DistApplicationDataRequest
   * @returns DistApplicationDataResponse
   */
  async distApplicationData(request: $_model.DistApplicationDataRequest): Promise<$_model.DistApplicationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.distApplicationDataWithOptions(request, runtime);
  }

  /**
   * Migrates the instance across nodes after an O\\\\\\&M event occurs on an instance.
   * 
   * @remarks
   *   This O\\&M operation is supported only by the Instance:SystemUpgrade.Migrate event.
   * 
   * @param request - EventMigrateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EventMigrateInstanceResponse
   */
  async eventMigrateInstanceWithOptions(request: $_model.EventMigrateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EventMigrateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPolicy)) {
      query["DataPolicy"] = request.dataPolicy;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.planTime)) {
      query["PlanTime"] = request.planTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EventMigrateInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EventMigrateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.EventMigrateInstanceResponse({}));
  }

  /**
   * Migrates the instance across nodes after an O\\\\\\&M event occurs on an instance.
   * 
   * @remarks
   *   This O\\&M operation is supported only by the Instance:SystemUpgrade.Migrate event.
   * 
   * @param request - EventMigrateInstanceRequest
   * @returns EventMigrateInstanceResponse
   */
  async eventMigrateInstance(request: $_model.EventMigrateInstanceRequest): Promise<$_model.EventMigrateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eventMigrateInstanceWithOptions(request, runtime);
  }

  /**
   * Restart the instance across nodes after an O\\\\\\&M event occurs on an instance.
   * 
   * @remarks
   *   This O\\&M operation supports only the Instance:SystemMaintenance.Reboot event
   * 
   * @param request - EventRebootInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EventRebootInstanceResponse
   */
  async eventRebootInstanceWithOptions(request: $_model.EventRebootInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EventRebootInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!$dara.isNull(request.planTime)) {
      query["PlanTime"] = request.planTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EventRebootInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EventRebootInstanceResponse>(await this.callApi(params, req, runtime), new $_model.EventRebootInstanceResponse({}));
  }

  /**
   * Restart the instance across nodes after an O\\\\\\&M event occurs on an instance.
   * 
   * @remarks
   *   This O\\&M operation supports only the Instance:SystemMaintenance.Reboot event
   * 
   * @param request - EventRebootInstanceRequest
   * @returns EventRebootInstanceResponse
   */
  async eventRebootInstance(request: $_model.EventRebootInstanceRequest): Promise<$_model.EventRebootInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eventRebootInstanceWithOptions(request, runtime);
  }

  /**
   * The event that is used to immediately redeploy a specified resource or by appointment
   * 
   * @remarks
   *   This O\\&M operation supports only the following event types: Instance:SystemFailure.Redeploy (instance redeployment due to system problems) and Instance:SystemMaintenance.Redeploy (instance redeployment due to system maintenance).
   * 
   * @param request - EventRedeployInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EventRedeployInstanceResponse
   */
  async eventRedeployInstanceWithOptions(request: $_model.EventRedeployInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EventRedeployInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!$dara.isNull(request.planTime)) {
      query["PlanTime"] = request.planTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EventRedeployInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EventRedeployInstanceResponse>(await this.callApi(params, req, runtime), new $_model.EventRedeployInstanceResponse({}));
  }

  /**
   * The event that is used to immediately redeploy a specified resource or by appointment
   * 
   * @remarks
   *   This O\\&M operation supports only the following event types: Instance:SystemFailure.Redeploy (instance redeployment due to system problems) and Instance:SystemMaintenance.Redeploy (instance redeployment due to system maintenance).
   * 
   * @param request - EventRedeployInstanceRequest
   * @returns EventRedeployInstanceResponse
   */
  async eventRedeployInstance(request: $_model.EventRedeployInstanceRequest): Promise<$_model.EventRedeployInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.eventRedeployInstanceWithOptions(request, runtime);
  }

  /**
   * Exports billing details within a specific time range.
   * 
   * @param request - ExportBillDetailDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportBillDetailDataResponse
   */
  async exportBillDetailDataWithOptions(request: $_model.ExportBillDetailDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportBillDetailDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportBillDetailData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportBillDetailDataResponse>(await this.callApi(params, req, runtime), new $_model.ExportBillDetailDataResponse({}));
  }

  /**
   * Exports billing details within a specific time range.
   * 
   * @param request - ExportBillDetailDataRequest
   * @returns ExportBillDetailDataResponse
   */
  async exportBillDetailData(request: $_model.ExportBillDetailDataRequest): Promise<$_model.ExportBillDetailDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportBillDetailDataWithOptions(request, runtime);
  }

  /**
   * Exports a custom image to an Object Storage Service (OSS) bucket in the same region.
   * 
   * @param request - ExportImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportImageResponse
   */
  async exportImageWithOptions(request: $_model.ExportImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    if (!$dara.isNull(request.OSSPrefix)) {
      query["OSSPrefix"] = request.OSSPrefix;
    }

    if (!$dara.isNull(request.OSSRegionId)) {
      query["OSSRegionId"] = request.OSSRegionId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportImageResponse>(await this.callApi(params, req, runtime), new $_model.ExportImageResponse({}));
  }

  /**
   * Exports a custom image to an Object Storage Service (OSS) bucket in the same region.
   * 
   * @param request - ExportImageRequest
   * @returns ExportImageResponse
   */
  async exportImage(request: $_model.ExportImageRequest): Promise<$_model.ExportImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  /**
   * Exports the metering data within a specific time range.
   * 
   * @param request - ExportMeasurementDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportMeasurementDataResponse
   */
  async exportMeasurementDataWithOptions(request: $_model.ExportMeasurementDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportMeasurementDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportMeasurementDataResponse>(await this.callApi(params, req, runtime), new $_model.ExportMeasurementDataResponse({}));
  }

  /**
   * Exports the metering data within a specific time range.
   * 
   * @param request - ExportMeasurementDataRequest
   * @returns ExportMeasurementDataResponse
   */
  async exportMeasurementData(request: $_model.ExportMeasurementDataRequest): Promise<$_model.ExportMeasurementDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportMeasurementDataWithOptions(request, runtime);
  }

  /**
   * Queries the access control list (ACL) of a bucket.
   * 
   * @param request - GetBucketAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketAclResponse
   */
  async getBucketAclWithOptions(request: $_model.GetBucketAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucketAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucketAclResponse>(await this.callApi(params, req, runtime), new $_model.GetBucketAclResponse({}));
  }

  /**
   * Queries the access control list (ACL) of a bucket.
   * 
   * @param request - GetBucketAclRequest
   * @returns GetBucketAclResponse
   */
  async getBucketAcl(request: $_model.GetBucketAclRequest): Promise<$_model.GetBucketAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketAclWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a bucket.
   * 
   * @param request - GetBucketInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketInfoResponse
   */
  async getBucketInfoWithOptions(request: $_model.GetBucketInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucketInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucketInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetBucketInfoResponse({}));
  }

  /**
   * Queries the detailed information about a bucket.
   * 
   * @param request - GetBucketInfoRequest
   * @returns GetBucketInfoResponse
   */
  async getBucketInfo(request: $_model.GetBucketInfoRequest): Promise<$_model.GetBucketInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketInfoWithOptions(request, runtime);
  }

  /**
   * Queries lifecycle rules.
   * 
   * @param request - GetBucketLifecycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketLifecycleResponse
   */
  async getBucketLifecycleWithOptions(request: $_model.GetBucketLifecycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucketLifecycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketLifecycle",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucketLifecycleResponse>(await this.callApi(params, req, runtime), new $_model.GetBucketLifecycleResponse({}));
  }

  /**
   * Queries lifecycle rules.
   * 
   * @param request - GetBucketLifecycleRequest
   * @returns GetBucketLifecycleResponse
   */
  async getBucketLifecycle(request: $_model.GetBucketLifecycleRequest): Promise<$_model.GetBucketLifecycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketLifecycleWithOptions(request, runtime);
  }

  /**
   * 查询集群内指定组件实例信息
   * 
   * @param request - GetClusterAddonInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstanceWithOptions(request: $_model.GetClusterAddonInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterAddonInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterAddonInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterAddonInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterAddonInstanceResponse({}));
  }

  /**
   * 查询集群内指定组件实例信息
   * 
   * @param request - GetClusterAddonInstanceRequest
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstance(request: $_model.GetClusterAddonInstanceRequest): Promise<$_model.GetClusterAddonInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterAddonInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the storage usage in the previous billing cycle and the cumulative number of calls in this month.
   * 
   * @param request - GetOssStorageAndAccByBucketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssStorageAndAccByBucketsResponse
   */
  async getOssStorageAndAccByBucketsWithOptions(request: $_model.GetOssStorageAndAccByBucketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssStorageAndAccByBucketsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssStorageAndAccByBuckets",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssStorageAndAccByBucketsResponse>(await this.callApi(params, req, runtime), new $_model.GetOssStorageAndAccByBucketsResponse({}));
  }

  /**
   * Queries the storage usage in the previous billing cycle and the cumulative number of calls in this month.
   * 
   * @param request - GetOssStorageAndAccByBucketsRequest
   * @returns GetOssStorageAndAccByBucketsResponse
   */
  async getOssStorageAndAccByBuckets(request: $_model.GetOssStorageAndAccByBucketsRequest): Promise<$_model.GetOssStorageAndAccByBucketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssStorageAndAccByBucketsWithOptions(request, runtime);
  }

  /**
   * Queries the storage and bandwidth usage within a specific time range.
   * 
   * @remarks
   * The query and aggregation granularity of bandwidth and storage usage cannot exceed one day. Data aggregation is to collect the maximum values of usage data within a period of time.
   * 
   * @param request - GetOssUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUsageDataResponse
   */
  async getOssUsageDataWithOptions(request: $_model.GetOssUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUsageDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUsageData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.GetOssUsageDataResponse({}));
  }

  /**
   * Queries the storage and bandwidth usage within a specific time range.
   * 
   * @remarks
   * The query and aggregation granularity of bandwidth and storage usage cannot exceed one day. Data aggregation is to collect the maximum values of usage data within a period of time.
   * 
   * @param request - GetOssUsageDataRequest
   * @returns GetOssUsageDataResponse
   */
  async getOssUsageData(request: $_model.GetOssUsageDataRequest): Promise<$_model.GetOssUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssUsageDataWithOptions(request, runtime);
  }

  /**
   * Call ImportImage to import your image file to the cloud server.
   * 
   * @param tmpReq - ImportImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportImageResponse
   */
  async importImageWithOptions(tmpReq: $_model.ImportImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportImageResponse> {
    tmpReq.validate();
    let request = new $_model.ImportImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.diskDeviceMapping)) {
      request.diskDeviceMappingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.diskDeviceMapping, "DiskDeviceMapping", "json");
    }

    let query = { };
    if (!$dara.isNull(request.architecture)) {
      query["Architecture"] = request.architecture;
    }

    if (!$dara.isNull(request.computeType)) {
      query["ComputeType"] = request.computeType;
    }

    if (!$dara.isNull(request.diskDeviceMappingShrink)) {
      query["DiskDeviceMapping"] = request.diskDeviceMappingShrink;
    }

    if (!$dara.isNull(request.imageFormat)) {
      query["ImageFormat"] = request.imageFormat;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!$dara.isNull(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    if (!$dara.isNull(request.OSSObject)) {
      query["OSSObject"] = request.OSSObject;
    }

    if (!$dara.isNull(request.OSSRegion)) {
      query["OSSRegion"] = request.OSSRegion;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.OSVersion)) {
      query["OSVersion"] = request.OSVersion;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.targetOSSRegionId)) {
      query["TargetOSSRegionId"] = request.targetOSSRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportImageResponse>(await this.callApi(params, req, runtime), new $_model.ImportImageResponse({}));
  }

  /**
   * Call ImportImage to import your image file to the cloud server.
   * 
   * @param request - ImportImageRequest
   * @returns ImportImageResponse
   */
  async importImage(request: $_model.ImportImageRequest): Promise<$_model.ImportImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importImageWithOptions(request, runtime);
  }

  /**
   * Imports the public key of a Rivest–Shamir–Adleman (RSA)-encrypted key pair that is generated by a third-party tool.
   * 
   * @remarks
   *   After the key pair is imported, ENS stores the public key. You must securely store the private key.
   * *   The key pair can be only in the ssh-rsa format.
   * 
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: $_model.ImportKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportKeyPair",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.ImportKeyPairResponse({}));
  }

  /**
   * Imports the public key of a Rivest–Shamir–Adleman (RSA)-encrypted key pair that is generated by a third-party tool.
   * 
   * @remarks
   *   After the key pair is imported, ENS stores the public key. You must securely store the private key.
   * *   The key pair can be only in the ssh-rsa format.
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: $_model.ImportKeyPairRequest): Promise<$_model.ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * 为当前用户创建ENS的服务关联角色（SLR），管控资源。
   * 
   * @param request - InitializeENSECKServiceRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeENSECKServiceRoleResponse
   */
  async initializeENSECKServiceRoleWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.InitializeENSECKServiceRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitializeENSECKServiceRole",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeENSECKServiceRoleResponse>(await this.callApi(params, req, runtime), new $_model.InitializeENSECKServiceRoleResponse({}));
  }

  /**
   * 为当前用户创建ENS的服务关联角色（SLR），管控资源。
   * @returns InitializeENSECKServiceRoleResponse
   */
  async initializeENSECKServiceRole(): Promise<$_model.InitializeENSECKServiceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeENSECKServiceRoleWithOptions(runtime);
  }

  /**
   * 安装集群组件
   * 
   * @param tmpReq - InstallClusterAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddonsWithOptions(tmpReq: $_model.InstallClusterAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallClusterAddonsResponse> {
    tmpReq.validate();
    let request = new $_model.InstallClusterAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallClusterAddons",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.InstallClusterAddonsResponse({}));
  }

  /**
   * 安装集群组件
   * 
   * @param request - InstallClusterAddonsRequest
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddons(request: $_model.InstallClusterAddonsRequest): Promise<$_model.InstallClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installClusterAddonsWithOptions(request, runtime);
  }

  /**
   * Assigns public IP addresses to an EPN instance.
   * 
   * @param request - JoinPublicIpsToEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinPublicIpsToEpnInstanceResponse
   */
  async joinPublicIpsToEpnInstanceWithOptions(request: $_model.JoinPublicIpsToEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinPublicIpsToEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.instanceInfos)) {
      query["InstanceInfos"] = request.instanceInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinPublicIpsToEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinPublicIpsToEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.JoinPublicIpsToEpnInstanceResponse({}));
  }

  /**
   * Assigns public IP addresses to an EPN instance.
   * 
   * @param request - JoinPublicIpsToEpnInstanceRequest
   * @returns JoinPublicIpsToEpnInstanceResponse
   */
  async joinPublicIpsToEpnInstance(request: $_model.JoinPublicIpsToEpnInstanceRequest): Promise<$_model.JoinPublicIpsToEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinPublicIpsToEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Adds an Edge Node Service (ENS) instance to a specified security group.
   * 
   * @remarks
   * Before you call this operation to add an instance to a security group, make sure that the instance is in the Stopped or Running state.
   * 
   * @param request - JoinSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinSecurityGroupResponse
   */
  async joinSecurityGroupWithOptions(request: $_model.JoinSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.JoinSecurityGroupResponse({}));
  }

  /**
   * Adds an Edge Node Service (ENS) instance to a specified security group.
   * 
   * @remarks
   * Before you call this operation to add an instance to a security group, make sure that the instance is in the Stopped or Running state.
   * 
   * @param request - JoinSecurityGroupRequest
   * @returns JoinSecurityGroupResponse
   */
  async joinSecurityGroup(request: $_model.JoinSecurityGroupRequest): Promise<$_model.JoinSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Performs networking.
   * 
   * @remarks
   * For the Internal Connection mode and the Intelligent Acceleration and Internal Connection mode, instances of the vSwitch take effect automatically. You do not need to manually add instances. For public connections such as intelligent acceleration, you need to call an operation to manually add the instances to Internet-facing instances.
   * 
   * @param request - JoinVSwitchesToEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinVSwitchesToEpnInstanceResponse
   */
  async joinVSwitchesToEpnInstanceWithOptions(request: $_model.JoinVSwitchesToEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinVSwitchesToEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.vSwitchesInfo)) {
      query["VSwitchesInfo"] = request.vSwitchesInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinVSwitchesToEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinVSwitchesToEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.JoinVSwitchesToEpnInstanceResponse({}));
  }

  /**
   * Performs networking.
   * 
   * @remarks
   * For the Internal Connection mode and the Intelligent Acceleration and Internal Connection mode, instances of the vSwitch take effect automatically. You do not need to manually add instances. For public connections such as intelligent acceleration, you need to call an operation to manually add the instances to Internet-facing instances.
   * 
   * @param request - JoinVSwitchesToEpnInstanceRequest
   * @returns JoinVSwitchesToEpnInstanceResponse
   */
  async joinVSwitchesToEpnInstance(request: $_model.JoinVSwitchesToEpnInstanceRequest): Promise<$_model.JoinVSwitchesToEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinVSwitchesToEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Removes an instance from a security group.
   * 
   * @remarks
   * Before you remove an instance from a security group, the instance must be in the Stopped or Running state.
   * 
   * @param request - LeaveSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LeaveSecurityGroupResponse
   */
  async leaveSecurityGroupWithOptions(request: $_model.LeaveSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LeaveSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LeaveSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LeaveSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.LeaveSecurityGroupResponse({}));
  }

  /**
   * Removes an instance from a security group.
   * 
   * @remarks
   * Before you remove an instance from a security group, the instance must be in the Stopped or Running state.
   * 
   * @param request - LeaveSecurityGroupRequest
   * @returns LeaveSecurityGroupResponse
   */
  async leaveSecurityGroup(request: $_model.LeaveSecurityGroupRequest): Promise<$_model.LeaveSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.leaveSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Queries the related information of AIC public keys. Paged query is supported.
   * 
   * @param request - ListAICPublicKeyDeliveriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICPublicKeyDeliveriesResponse
   */
  async listAICPublicKeyDeliveriesWithOptions(request: $_model.ListAICPublicKeyDeliveriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAICPublicKeyDeliveriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
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
      action: "ListAICPublicKeyDeliveries",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAICPublicKeyDeliveriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAICPublicKeyDeliveriesResponse({}));
  }

  /**
   * Queries the related information of AIC public keys. Paged query is supported.
   * 
   * @param request - ListAICPublicKeyDeliveriesRequest
   * @returns ListAICPublicKeyDeliveriesResponse
   */
  async listAICPublicKeyDeliveries(request: $_model.ListAICPublicKeyDeliveriesRequest): Promise<$_model.ListAICPublicKeyDeliveriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAICPublicKeyDeliveriesWithOptions(request, runtime);
  }

  /**
   * Query the list of AIC public keys that meet the conditions. Paged query is supported.
   * 
   * @param request - ListAICPublicKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAICPublicKeysResponse
   */
  async listAICPublicKeysWithOptions(request: $_model.ListAICPublicKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAICPublicKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
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
      action: "ListAICPublicKeys",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAICPublicKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListAICPublicKeysResponse({}));
  }

  /**
   * Query the list of AIC public keys that meet the conditions. Paged query is supported.
   * 
   * @param request - ListAICPublicKeysRequest
   * @returns ListAICPublicKeysResponse
   */
  async listAICPublicKeys(request: $_model.ListAICPublicKeysRequest): Promise<$_model.ListAICPublicKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAICPublicKeysWithOptions(request, runtime);
  }

  /**
   * Querying the details of a cluster component
   * 
   * @param request - ListAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonsResponse({}));
  }

  /**
   * Querying the details of a cluster component
   * @returns ListAddonsResponse
   */
  async listAddons(): Promise<$_model.ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonsWithOptions(runtime);
  }

  /**
   * Queries the created applications.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersions)) {
      query["AppVersions"] = request.appVersions;
    }

    if (!$dara.isNull(request.clusterNames)) {
      query["ClusterNames"] = request.clusterNames;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!$dara.isNull(request.minDate)) {
      query["MinDate"] = request.minDate;
    }

    if (!$dara.isNull(request.outAppInfoParams)) {
      query["OutAppInfoParams"] = request.outAppInfoParams;
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
      action: "ListApplications",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * Queries the created applications.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries all buckets of a user.
   * 
   * @param request - ListBucketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBucketsResponse
   */
  async listBucketsWithOptions(request: $_model.ListBucketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBucketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBuckets",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBucketsResponse>(await this.callApi(params, req, runtime), new $_model.ListBucketsResponse({}));
  }

  /**
   * Queries all buckets of a user.
   * 
   * @param request - ListBucketsRequest
   * @returns ListBucketsResponse
   */
  async listBuckets(request: $_model.ListBucketsRequest): Promise<$_model.ListBucketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBucketsWithOptions(request, runtime);
  }

  /**
   * List of Installed Addon Instances in the Cluster
   * 
   * @param request - ListClusterAddonInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstancesWithOptions(request: $_model.ListClusterAddonInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterAddonInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterAddonInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterAddonInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterAddonInstancesResponse({}));
  }

  /**
   * List of Installed Addon Instances in the Cluster
   * 
   * @param request - ListClusterAddonInstancesRequest
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstances(request: $_model.ListClusterAddonInstancesRequest): Promise<$_model.ListClusterAddonInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterAddonInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all objects in a bucket.
   * 
   * @param request - ListObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListObjectsResponse
   */
  async listObjectsWithOptions(request: $_model.ListObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.continuationToken)) {
      query["ContinuationToken"] = request.continuationToken;
    }

    if (!$dara.isNull(request.encodingType)) {
      query["EncodingType"] = request.encodingType;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxKeys)) {
      query["MaxKeys"] = request.maxKeys;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.startAfter)) {
      query["StartAfter"] = request.startAfter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListObjects",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListObjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListObjectsResponse({}));
  }

  /**
   * Queries the information about all objects in a bucket.
   * 
   * @param request - ListObjectsRequest
   * @returns ListObjectsResponse
   */
  async listObjects(request: $_model.ListObjectsRequest): Promise<$_model.ListObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listObjectsWithOptions(request, runtime);
  }

  /**
   * 获取所有产品能力
   * 
   * @param request - ListProductAbilitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductAbilitiesResponse
   */
  async listProductAbilitiesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListProductAbilitiesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListProductAbilities",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductAbilitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListProductAbilitiesResponse({}));
  }

  /**
   * 获取所有产品能力
   * @returns ListProductAbilitiesResponse
   */
  async listProductAbilities(): Promise<$_model.ListProductAbilitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductAbilitiesWithOptions(runtime);
  }

  /**
   * Queries tags that are added to Edge Node Service (ENS) instances.
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
      version: "2017-11-10",
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
   * Queries tags that are added to Edge Node Service (ENS) instances.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Log on to the AIC instance. You can associate or disassociate an AIC instance based on the uploaded AIC public key.
   * 
   * @param request - ManageAICLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageAICLoginResponse
   */
  async manageAICLoginWithOptions(request: $_model.ManageAICLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManageAICLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageAICLogin",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManageAICLoginResponse>(await this.callApi(params, req, runtime), new $_model.ManageAICLoginResponse({}));
  }

  /**
   * Log on to the AIC instance. You can associate or disassociate an AIC instance based on the uploaded AIC public key.
   * 
   * @param request - ManageAICLoginRequest
   * @returns ManageAICLoginResponse
   */
  async manageAICLogin(request: $_model.ManageAICLoginRequest): Promise<$_model.ManageAICLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manageAICLoginWithOptions(request, runtime);
  }

  /**
   * 修改集群组件实例配置
   * 
   * @param tmpReq - ModifyClusterAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddonWithOptions(tmpReq: $_model.ModifyClusterAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterAddonResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyClusterAddonShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addon)) {
      request.addonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addon, "Addon", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonShrink)) {
      query["Addon"] = request.addonShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterAddon",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterAddonResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterAddonResponse({}));
  }

  /**
   * 修改集群组件实例配置
   * 
   * @param request - ModifyClusterAddonRequest
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddon(request: $_model.ModifyClusterAddonRequest): Promise<$_model.ModifyClusterAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterAddonWithOptions(request, runtime);
  }

  /**
   * 更新集群节点池
   * 
   * @param tmpReq - ModifyClusterNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePoolWithOptions(tmpReq: $_model.ModifyClusterNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterNodePoolResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyClusterNodePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.kubernetesConfig)) {
      request.kubernetesConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kubernetesConfig, "KubernetesConfig", "json");
    }

    if (!$dara.isNull(tmpReq.nodepoolInfo)) {
      request.nodepoolInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodepoolInfo, "NodepoolInfo", "json");
    }

    if (!$dara.isNull(tmpReq.scalingGroup)) {
      request.scalingGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scalingGroup, "ScalingGroup", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.kubernetesConfigShrink)) {
      query["KubernetesConfig"] = request.kubernetesConfigShrink;
    }

    if (!$dara.isNull(request.nodepoolInfoShrink)) {
      query["NodepoolInfo"] = request.nodepoolInfoShrink;
    }

    if (!$dara.isNull(request.scalingGroupShrink)) {
      query["ScalingGroup"] = request.scalingGroupShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterNodePool",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterNodePoolResponse({}));
  }

  /**
   * 更新集群节点池
   * 
   * @param request - ModifyClusterNodePoolRequest
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePool(request: $_model.ModifyClusterNodePoolRequest): Promise<$_model.ModifyClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterNodePoolWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, and peak bandwidth of a specified elastic IP address (EIP).
   * 
   * @param request - ModifyEnsEipAddressAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEnsEipAddressAttributeResponse
   */
  async modifyEnsEipAddressAttributeWithOptions(request: $_model.ModifyEnsEipAddressAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEnsEipAddressAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
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
      action: "ModifyEnsEipAddressAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEnsEipAddressAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEnsEipAddressAttributeResponse({}));
  }

  /**
   * Modifies the name, description, and peak bandwidth of a specified elastic IP address (EIP).
   * 
   * @param request - ModifyEnsEipAddressAttributeRequest
   * @returns ModifyEnsEipAddressAttributeResponse
   */
  async modifyEnsEipAddressAttribute(request: $_model.ModifyEnsEipAddressAttributeRequest): Promise<$_model.ModifyEnsEipAddressAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEnsEipAddressAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a custom route.
   * 
   * @param request - ModifyEnsRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEnsRouteEntryResponse
   */
  async modifyEnsRouteEntryWithOptions(request: $_model.ModifyEnsRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEnsRouteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    if (!$dara.isNull(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEnsRouteEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEnsRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEnsRouteEntryResponse({}));
  }

  /**
   * Modifies the name and description of a custom route.
   * 
   * @param request - ModifyEnsRouteEntryRequest
   * @returns ModifyEnsRouteEntryResponse
   */
  async modifyEnsRouteEntry(request: $_model.ModifyEnsRouteEntryRequest): Promise<$_model.ModifyEnsRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEnsRouteEntryWithOptions(request, runtime);
  }

  /**
   * Modifies an Edge Private Network (EPN) instance.
   * 
   * @param request - ModifyEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEpnInstanceResponse
   */
  async modifyEpnInstanceWithOptions(request: $_model.ModifyEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEpnInstanceResponse({}));
  }

  /**
   * Modifies an Edge Private Network (EPN) instance.
   * 
   * @param request - ModifyEpnInstanceRequest
   * @returns ModifyEpnInstanceResponse
   */
  async modifyEpnInstance(request: $_model.ModifyEpnInstanceRequest): Promise<$_model.ModifyEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a NAS file system.
   * 
   * @param request - ModifyFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystemWithOptions(request: $_model.ModifyFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileSystem",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFileSystemResponse({}));
  }

  /**
   * Modifies the description of a NAS file system.
   * 
   * @param request - ModifyFileSystemRequest
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystem(request: $_model.ModifyFileSystemRequest): Promise<$_model.ModifyFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  /**
   * Modifies a Destination Network Address Translation (DNAT) rule.
   * 
   * @param request - ModifyForwardEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyForwardEntryResponse
   */
  async modifyForwardEntryWithOptions(request: $_model.ModifyForwardEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyForwardEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!$dara.isNull(request.externalPort)) {
      query["ExternalPort"] = request.externalPort;
    }

    if (!$dara.isNull(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    if (!$dara.isNull(request.forwardEntryName)) {
      query["ForwardEntryName"] = request.forwardEntryName;
    }

    if (!$dara.isNull(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!$dara.isNull(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!$dara.isNull(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyForwardEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyForwardEntryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyForwardEntryResponse({}));
  }

  /**
   * Modifies a Destination Network Address Translation (DNAT) rule.
   * 
   * @param request - ModifyForwardEntryRequest
   * @returns ModifyForwardEntryResponse
   */
  async modifyForwardEntry(request: $_model.ModifyForwardEntryRequest): Promise<$_model.ModifyForwardEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyForwardEntryWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a high-availability virtual IP address (HAVIP).
   * 
   * @param request - ModifyHaVipAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHaVipAttributeResponse
   */
  async modifyHaVipAttributeWithOptions(request: $_model.ModifyHaVipAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHaVipAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.haVipId)) {
      query["HaVipId"] = request.haVipId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHaVipAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHaVipAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHaVipAttributeResponse({}));
  }

  /**
   * Modifies the name of a high-availability virtual IP address (HAVIP).
   * 
   * @param request - ModifyHaVipAttributeRequest
   * @returns ModifyHaVipAttributeResponse
   */
  async modifyHaVipAttribute(request: $_model.ModifyHaVipAttributeRequest): Promise<$_model.ModifyHaVipAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHaVipAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the image attributes.
   * 
   * @param request - ModifyImageAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImageAttributeResponse
   */
  async modifyImageAttributeWithOptions(request: $_model.ModifyImageAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImageAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImageAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyImageAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyImageAttributeResponse({}));
  }

  /**
   * Modifies the image attributes.
   * 
   * @param request - ModifyImageAttributeRequest
   * @returns ModifyImageAttributeResponse
   */
  async modifyImageAttribute(request: $_model.ModifyImageAttributeRequest): Promise<$_model.ModifyImageAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  /**
   * Shares or unshares an image.
   * 
   * @param request - ModifyImageSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImageSharePermissionResponse
   */
  async modifyImageSharePermissionWithOptions(request: $_model.ModifyImageSharePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImageSharePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addAccounts)) {
      query["AddAccounts"] = request.addAccounts;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.removeAccounts)) {
      query["RemoveAccounts"] = request.removeAccounts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImageSharePermission",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyImageSharePermissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyImageSharePermissionResponse({}));
  }

  /**
   * Shares or unshares an image.
   * 
   * @param request - ModifyImageSharePermissionRequest
   * @returns ModifyImageSharePermissionResponse
   */
  async modifyImageSharePermission(request: $_model.ModifyImageSharePermissionRequest): Promise<$_model.ModifyImageSharePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImageSharePermissionWithOptions(request, runtime);
  }

  /**
   * Changes the attributes of an instance, such as the name and the password.
   * 
   * @remarks
   *   If an instance is in the Starting state, you cannot reset the password of the instance.
   * *   When the instance is in the Running state, you cannot change the password of the instance.
   * *   After resetting the password, you must Restart the instance in the ECS console or call the RebootInstance operation to validate the modifications. The restart operation within the instance does not validate the modifications.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * Changes the attributes of an instance, such as the name and the password.
   * 
   * @remarks
   *   If an instance is in the Starting state, you cannot reset the password of the instance.
   * *   When the instance is in the Running state, you cannot change the password of the instance.
   * *   After resetting the password, you must Restart the instance in the ECS console or call the RebootInstance operation to validate the modifications. The restart operation within the instance does not validate the modifications.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Configures auto-renewal for instances.
   * 
   * @param request - ModifyInstanceAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAutoRenewAttributeResponse
   */
  async modifyInstanceAutoRenewAttributeWithOptions(request: $_model.ModifyInstanceAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAutoRenewAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAutoRenewAttributeResponse({}));
  }

  /**
   * Configures auto-renewal for instances.
   * 
   * @param request - ModifyInstanceAutoRenewAttributeRequest
   * @returns ModifyInstanceAutoRenewAttributeResponse
   */
  async modifyInstanceAutoRenewAttribute(request: $_model.ModifyInstanceAutoRenewAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @remarks
   *   If an instance is in the Starting state, you cannot reset the password of the instance.
   * *   If the instance is in the Running state, you cannot change the password of the instance.
   * *   After resetting the password, you must restart the instance in the ENS console or call the RebootInstance operation to apply the change. The restart operation within the instance does not apply the change.
   * 
   * @param request - ModifyInstanceBootConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceBootConfigurationResponse
   */
  async modifyInstanceBootConfigurationWithOptions(request: $_model.ModifyInstanceBootConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceBootConfigurationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceBootConfiguration",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceBootConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceBootConfigurationResponse({}));
  }

  /**
   * Modifies the boot configuration of a heterogeneous PC Farm bare metal instance.
   * 
   * @remarks
   *   If an instance is in the Starting state, you cannot reset the password of the instance.
   * *   If the instance is in the Running state, you cannot change the password of the instance.
   * *   After resetting the password, you must restart the instance in the ENS console or call the RebootInstance operation to apply the change. The restart operation within the instance does not apply the change.
   * 
   * @param request - ModifyInstanceBootConfigurationRequest
   * @returns ModifyInstanceBootConfigurationResponse
   */
  async modifyInstanceBootConfiguration(request: $_model.ModifyInstanceBootConfigurationRequest): Promise<$_model.ModifyInstanceBootConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceBootConfigurationWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of Edge Node Service (ENS) instances. You can switch between the pay-as-you-go and subscription billing methods for instances. You can also change the billing method for disks that you created with pay-as-you-go instances to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of ENS.
   * The instances must be in the Running or Stopped state, and you have no overdue payments for them.
   * 
   * @param tmpReq - ModifyInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeTypeWithOptions(tmpReq: $_model.ModifyInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceChargeTypeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceChargeTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.includeDataDisks)) {
      query["IncludeDataDisks"] = request.includeDataDisks;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of Edge Node Service (ENS) instances. You can switch between the pay-as-you-go and subscription billing methods for instances. You can also change the billing method for disks that you created with pay-as-you-go instances to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of ENS.
   * The instances must be in the Running or Stopped state, and you have no overdue payments for them.
   * 
   * @param request - ModifyInstanceChargeTypeRequest
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeType(request: $_model.ModifyInstanceChargeTypeRequest): Promise<$_model.ModifyInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the private IP address or vSwitch of a VPC-type ECS instance.
   * 
   * @remarks
   * The instance that you want to manage must be in the Stopped state. When you modify the parameters of a scaling group, the following limits apply:
   * *   Instance:
   *     *   Instances that are associated with SLB are not supported.
   * *   Network:
   *     *   Instances that are associated with EIPs are not supported.
   *     *   Instances that are associated with high-availability virtual IP addresses are not supported.
   *     *   Instances that have been used as next hops in the routing table are not supported.
   *     *   Secondary ENIs cannot be attached to the ECS instance.
   *     *   Instances configured with secondary IP addresses are not supported.
   * 
   * @param request - ModifyInstanceNetworkAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNetworkAttributeResponse
   */
  async modifyInstanceNetworkAttributeWithOptions(request: $_model.ModifyInstanceNetworkAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNetworkAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceNetworkAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNetworkAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNetworkAttributeResponse({}));
  }

  /**
   * Modifies the private IP address or vSwitch of a VPC-type ECS instance.
   * 
   * @remarks
   * The instance that you want to manage must be in the Stopped state. When you modify the parameters of a scaling group, the following limits apply:
   * *   Instance:
   *     *   Instances that are associated with SLB are not supported.
   * *   Network:
   *     *   Instances that are associated with EIPs are not supported.
   *     *   Instances that are associated with high-availability virtual IP addresses are not supported.
   *     *   Instances that have been used as next hops in the routing table are not supported.
   *     *   Secondary ENIs cannot be attached to the ECS instance.
   *     *   Instances configured with secondary IP addresses are not supported.
   * 
   * @param request - ModifyInstanceNetworkAttributeRequest
   * @returns ModifyInstanceNetworkAttributeResponse
   */
  async modifyInstanceNetworkAttribute(request: $_model.ModifyInstanceNetworkAttributeRequest): Promise<$_model.ModifyInstanceNetworkAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNetworkAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - ModifyLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLoadBalancerAttributeResponse
   */
  async modifyLoadBalancerAttributeWithOptions(request: $_model.ModifyLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLoadBalancerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLoadBalancerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLoadBalancerAttributeResponse({}));
  }

  /**
   * Modifies the information about an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - ModifyLoadBalancerAttributeRequest
   * @returns ModifyLoadBalancerAttributeResponse
   */
  async modifyLoadBalancerAttribute(request: $_model.ModifyLoadBalancerAttributeRequest): Promise<$_model.ModifyLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the network information.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifyNetworkAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkAttributeResponse
   */
  async modifyNetworkAttributeWithOptions(request: $_model.ModifyNetworkAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkAttributeResponse({}));
  }

  /**
   * Modifies the network information.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifyNetworkAttributeRequest
   * @returns ModifyNetworkAttributeResponse
   */
  async modifyNetworkAttribute(request: $_model.ModifyNetworkAttributeRequest): Promise<$_model.ModifyNetworkAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an elastic network interface (ENI), such as its name and description.
   * 
   * @param request - ModifyNetworkInterfaceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkInterfaceAttributeResponse
   */
  async modifyNetworkInterfaceAttributeWithOptions(request: $_model.ModifyNetworkInterfaceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkInterfaceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.networkInterfaceName)) {
      query["NetworkInterfaceName"] = request.networkInterfaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkInterfaceAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkInterfaceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkInterfaceAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an elastic network interface (ENI), such as its name and description.
   * 
   * @param request - ModifyNetworkInterfaceAttributeRequest
   * @returns ModifyNetworkInterfaceAttributeResponse
   */
  async modifyNetworkInterfaceAttribute(request: $_model.ModifyNetworkInterfaceAttributeRequest): Promise<$_model.ModifyNetworkInterfaceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkInterfaceAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the instance type of a subscription Edge Node Service (ENS) instance. The new instance type takes effect for the remaining lifecycle of the instance.
   * 
   * @param request - ModifyPrepayInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPrepayInstanceSpecResponse
   */
  async modifyPrepayInstanceSpecWithOptions(request: $_model.ModifyPrepayInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPrepayInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPrepayInstanceSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPrepayInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPrepayInstanceSpecResponse({}));
  }

  /**
   * Upgrades or downgrades the instance type of a subscription Edge Node Service (ENS) instance. The new instance type takes effect for the remaining lifecycle of the instance.
   * 
   * @param request - ModifyPrepayInstanceSpecRequest
   * @returns ModifyPrepayInstanceSpecResponse
   */
  async modifyPrepayInstanceSpec(request: $_model.ModifyPrepayInstanceSpecRequest): Promise<$_model.ModifyPrepayInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a security group.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifySecurityGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupAttributeResponse
   */
  async modifySecurityGroupAttributeWithOptions(request: $_model.ModifySecurityGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityGroupAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityGroupAttributeResponse({}));
  }

  /**
   * Modifies the information about a security group.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifySecurityGroupAttributeRequest
   * @returns ModifySecurityGroupAttributeResponse
   */
  async modifySecurityGroupAttribute(request: $_model.ModifySecurityGroupAttributeRequest): Promise<$_model.ModifySecurityGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a snapshot.
   * 
   * @param request - ModifySnapshotAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySnapshotAttributeResponse
   */
  async modifySnapshotAttributeWithOptions(request: $_model.ModifySnapshotAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySnapshotAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySnapshotAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySnapshotAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifySnapshotAttributeResponse({}));
  }

  /**
   * Modifies the information about a snapshot.
   * 
   * @param request - ModifySnapshotAttributeRequest
   * @returns ModifySnapshotAttributeResponse
   */
  async modifySnapshotAttribute(request: $_model.ModifySnapshotAttributeRequest): Promise<$_model.ModifySnapshotAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySnapshotAttributeWithOptions(request, runtime);
  }

  /**
   * 修改snat规则
   * 
   * @param request - ModifySnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySnatEntryResponse
   */
  async modifySnatEntryWithOptions(request: $_model.ModifySnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipAffinity)) {
      query["EipAffinity"] = request.eipAffinity;
    }

    if (!$dara.isNull(request.ispAffinity)) {
      query["IspAffinity"] = request.ispAffinity;
    }

    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatEntryName)) {
      query["SnatEntryName"] = request.snatEntryName;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.ModifySnatEntryResponse({}));
  }

  /**
   * 修改snat规则
   * 
   * @param request - ModifySnatEntryRequest
   * @returns ModifySnatEntryResponse
   */
  async modifySnatEntry(request: $_model.ModifySnatEntryRequest): Promise<$_model.ModifySnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySnatEntryWithOptions(request, runtime);
  }

  /**
   * Modifies information about a vSwitch.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifyVSwitchAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVSwitchAttributeResponse
   */
  async modifyVSwitchAttributeWithOptions(request: $_model.ModifyVSwitchAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVSwitchAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVSwitchAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVSwitchAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVSwitchAttributeResponse({}));
  }

  /**
   * Modifies information about a vSwitch.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 5 times per second per user.
   * 
   * @param request - ModifyVSwitchAttributeRequest
   * @returns ModifyVSwitchAttributeResponse
   */
  async modifyVSwitchAttribute(request: $_model.ModifyVSwitchAttributeRequest): Promise<$_model.ModifyVSwitchAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVSwitchAttributeWithOptions(request, runtime);
  }

  /**
   * Deploys the SDG that has been attached to instances on the corresponding Android in Container (AIC) instance.
   * 
   * @param tmpReq - MountInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MountInstanceSDGResponse
   */
  async mountInstanceSDGWithOptions(tmpReq: $_model.MountInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MountInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.MountInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MountInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MountInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.MountInstanceSDGResponse({}));
  }

  /**
   * Deploys the SDG that has been attached to instances on the corresponding Android in Container (AIC) instance.
   * 
   * @param request - MountInstanceSDGRequest
   * @returns MountInstanceSDGResponse
   */
  async mountInstanceSDG(request: $_model.MountInstanceSDGRequest): Promise<$_model.MountInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mountInstanceSDGWithOptions(request, runtime);
  }

  /**
   * Preloads a shared data group (SDG).
   * 
   * @param tmpReq - PreloadRegionSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadRegionSDGResponse
   */
  async preloadRegionSDGWithOptions(tmpReq: $_model.PreloadRegionSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadRegionSDGResponse> {
    tmpReq.validate();
    let request = new $_model.PreloadRegionSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationRegionIds)) {
      request.destinationRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationRegionIds, "DestinationRegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    let query = { };
    if (!$dara.isNull(request.destinationRegionIdsShrink)) {
      query["DestinationRegionIds"] = request.destinationRegionIdsShrink;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.redundantNum)) {
      query["RedundantNum"] = request.redundantNum;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadRegionSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadRegionSDGResponse>(await this.callApi(params, req, runtime), new $_model.PreloadRegionSDGResponse({}));
  }

  /**
   * Preloads a shared data group (SDG).
   * 
   * @param request - PreloadRegionSDGRequest
   * @returns PreloadRegionSDGResponse
   */
  async preloadRegionSDG(request: $_model.PreloadRegionSDGRequest): Promise<$_model.PreloadRegionSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadRegionSDGWithOptions(request, runtime);
  }

  /**
   * Prepares the upload and obtains the location of the bucket.
   * 
   * @param request - PrepareUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrepareUploadResponse
   */
  async prepareUploadWithOptions(request: $_model.PrepareUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrepareUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrepareUpload",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrepareUploadResponse>(await this.callApi(params, req, runtime), new $_model.PrepareUploadResponse({}));
  }

  /**
   * Prepares the upload and obtains the location of the bucket.
   * 
   * @param request - PrepareUploadRequest
   * @returns PrepareUploadResponse
   */
  async prepareUpload(request: $_model.PrepareUploadRequest): Promise<$_model.PrepareUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.prepareUploadWithOptions(request, runtime);
  }

  /**
   * Pushes the business or service data of an application to file servers.
   * 
   * @param request - PushApplicationDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushApplicationDataResponse
   */
  async pushApplicationDataWithOptions(request: $_model.PushApplicationDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushApplicationDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.pushStrategy)) {
      query["PushStrategy"] = request.pushStrategy;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushApplicationData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushApplicationDataResponse>(await this.callApi(params, req, runtime), new $_model.PushApplicationDataResponse({}));
  }

  /**
   * Pushes the business or service data of an application to file servers.
   * 
   * @param request - PushApplicationDataRequest
   * @returns PushApplicationDataResponse
   */
  async pushApplicationData(request: $_model.PushApplicationDataRequest): Promise<$_model.PushApplicationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushApplicationDataWithOptions(request, runtime);
  }

  /**
   * Creates an Edge Object Storage (EOS) bucket.
   * 
   * @param request - PutBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutBucketResponse
   */
  async putBucketWithOptions(request: $_model.PutBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketAcl)) {
      query["BucketAcl"] = request.bucketAcl;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.dispatchScope)) {
      query["DispatchScope"] = request.dispatchScope;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.logicalBucketType)) {
      query["LogicalBucketType"] = request.logicalBucketType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutBucket",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutBucketResponse>(await this.callApi(params, req, runtime), new $_model.PutBucketResponse({}));
  }

  /**
   * Creates an Edge Object Storage (EOS) bucket.
   * 
   * @param request - PutBucketRequest
   * @returns PutBucketResponse
   */
  async putBucket(request: $_model.PutBucketRequest): Promise<$_model.PutBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putBucketWithOptions(request, runtime);
  }

  /**
   * Modifies the access control list (ACL) of a bucket.
   * 
   * @param request - PutBucketAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutBucketAclResponse
   */
  async putBucketAclWithOptions(request: $_model.PutBucketAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutBucketAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketAcl)) {
      query["BucketAcl"] = request.bucketAcl;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutBucketAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutBucketAclResponse>(await this.callApi(params, req, runtime), new $_model.PutBucketAclResponse({}));
  }

  /**
   * Modifies the access control list (ACL) of a bucket.
   * 
   * @param request - PutBucketAclRequest
   * @returns PutBucketAclResponse
   */
  async putBucketAcl(request: $_model.PutBucketAclRequest): Promise<$_model.PutBucketAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putBucketAclWithOptions(request, runtime);
  }

  /**
   * Configures lifecycle rules for objects.
   * 
   * @remarks
   *   You can configure up to 1,000 rules.
   * *   If an object meets multiple rules, the rule that has the earliest expiration time prevails.
   * 
   * @param request - PutBucketLifecycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutBucketLifecycleResponse
   */
  async putBucketLifecycleWithOptions(request: $_model.PutBucketLifecycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutBucketLifecycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowSameActionOverlap)) {
      query["AllowSameActionOverlap"] = request.allowSameActionOverlap;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.createdBeforeDate)) {
      query["CreatedBeforeDate"] = request.createdBeforeDate;
    }

    if (!$dara.isNull(request.expirationDays)) {
      query["ExpirationDays"] = request.expirationDays;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutBucketLifecycle",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutBucketLifecycleResponse>(await this.callApi(params, req, runtime), new $_model.PutBucketLifecycleResponse({}));
  }

  /**
   * Configures lifecycle rules for objects.
   * 
   * @remarks
   *   You can configure up to 1,000 rules.
   * *   If an object meets multiple rules, the rule that has the earliest expiration time prevails.
   * 
   * @param request - PutBucketLifecycleRequest
   * @returns PutBucketLifecycleResponse
   */
  async putBucketLifecycle(request: $_model.PutBucketLifecycleRequest): Promise<$_model.PutBucketLifecycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putBucketLifecycleWithOptions(request, runtime);
  }

  /**
   * Initializes a disk.
   * 
   * @param request - ReInitDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReInitDiskResponse
   */
  async reInitDiskWithOptions(request: $_model.ReInitDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReInitDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReInitDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReInitDiskResponse>(await this.callApi(params, req, runtime), new $_model.ReInitDiskResponse({}));
  }

  /**
   * Initializes a disk.
   * 
   * @param request - ReInitDiskRequest
   * @returns ReInitDiskResponse
   */
  async reInitDisk(request: $_model.ReInitDiskRequest): Promise<$_model.ReInitDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reInitDiskWithOptions(request, runtime);
  }

  /**
   * Restarts an Android in Container (AIC) instance.
   * 
   * @param tmpReq - RebootAICInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootAICInstanceResponse
   */
  async rebootAICInstanceWithOptions(tmpReq: $_model.RebootAICInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootAICInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.RebootAICInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootAICInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootAICInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootAICInstanceResponse({}));
  }

  /**
   * Restarts an Android in Container (AIC) instance.
   * 
   * @param request - RebootAICInstanceRequest
   * @returns RebootAICInstanceResponse
   */
  async rebootAICInstance(request: $_model.RebootAICInstanceRequest): Promise<$_model.RebootAICInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootAICInstanceWithOptions(request, runtime);
  }

  /**
   * Reboots an Android in Container (AIC) server.
   * 
   * @param request - RebootARMServerInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootARMServerInstanceResponse
   */
  async rebootARMServerInstanceWithOptions(request: $_model.RebootARMServerInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootARMServerInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootARMServerInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootARMServerInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootARMServerInstanceResponse({}));
  }

  /**
   * Reboots an Android in Container (AIC) server.
   * 
   * @param request - RebootARMServerInstanceRequest
   * @returns RebootARMServerInstanceResponse
   */
  async rebootARMServerInstance(request: $_model.RebootARMServerInstanceRequest): Promise<$_model.RebootARMServerInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootARMServerInstanceWithOptions(request, runtime);
  }

  /**
   * Reboots an instance.
   * 
   * @remarks
   *   Only instances that are in the Running state can be restarted.
   * *   If the operation is successful, the status of the instance becomes Starting.
   * 
   * @param request - RebootInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstanceResponse
   */
  async rebootInstanceWithOptions(request: $_model.RebootInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootInstanceResponse({}));
  }

  /**
   * Reboots an instance.
   * 
   * @remarks
   *   Only instances that are in the Running state can be restarted.
   * *   If the operation is successful, the status of the instance becomes Starting.
   * 
   * @param request - RebootInstanceRequest
   * @returns RebootInstanceResponse
   */
  async rebootInstance(request: $_model.RebootInstanceRequest): Promise<$_model.RebootInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  /**
   * 选择批量实例进行重启操作
   * 
   * @param tmpReq - RebootInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstancesResponse
   */
  async rebootInstancesWithOptions(tmpReq: $_model.RebootInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RebootInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RebootInstancesResponse({}));
  }

  /**
   * 选择批量实例进行重启操作
   * 
   * @param request - RebootInstancesRequest
   * @returns RebootInstancesResponse
   */
  async rebootInstances(request: $_model.RebootInstancesRequest): Promise<$_model.RebootInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstancesWithOptions(request, runtime);
  }

  /**
   * Recovers an Android in Container (AIC) instance on the server.
   * 
   * @param request - RecoverAICInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverAICInstanceResponse
   */
  async recoverAICInstanceWithOptions(request: $_model.RecoverAICInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverAICInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverAICInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverAICInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RecoverAICInstanceResponse({}));
  }

  /**
   * Recovers an Android in Container (AIC) instance on the server.
   * 
   * @param request - RecoverAICInstanceRequest
   * @returns RecoverAICInstanceResponse
   */
  async recoverAICInstance(request: $_model.RecoverAICInstanceRequest): Promise<$_model.RecoverAICInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverAICInstanceWithOptions(request, runtime);
  }

  /**
   * Resets an instance based on specific parameters.
   * 
   * @param request - ReinitInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinitInstanceResponse
   */
  async reinitInstanceWithOptions(request: $_model.ReinitInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReinitInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinitInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReinitInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReinitInstanceResponse({}));
  }

  /**
   * Resets an instance based on specific parameters.
   * 
   * @param request - ReinitInstanceRequest
   * @returns ReinitInstanceResponse
   */
  async reinitInstance(request: $_model.ReinitInstanceRequest): Promise<$_model.ReinitInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reinitInstanceWithOptions(request, runtime);
  }

  /**
   * 选择批量实例进行重置操作
   * 
   * @param tmpReq - ReinitInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinitInstancesResponse
   */
  async reinitInstancesWithOptions(tmpReq: $_model.ReinitInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReinitInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ReinitInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinitInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReinitInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ReinitInstancesResponse({}));
  }

  /**
   * 选择批量实例进行重置操作
   * 
   * @param request - ReinitInstancesRequest
   * @returns ReinitInstancesResponse
   */
  async reinitInstances(request: $_model.ReinitInstancesRequest): Promise<$_model.ReinitInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reinitInstancesWithOptions(request, runtime);
  }

  /**
   * Releases an Android in Container (AIC) instance from the server.
   * 
   * @param request - ReleaseAICInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseAICInstanceResponse
   */
  async releaseAICInstanceWithOptions(request: $_model.ReleaseAICInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseAICInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseAICInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseAICInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseAICInstanceResponse({}));
  }

  /**
   * Releases an Android in Container (AIC) instance from the server.
   * 
   * @param request - ReleaseAICInstanceRequest
   * @returns ReleaseAICInstanceResponse
   */
  async releaseAICInstance(request: $_model.ReleaseAICInstanceRequest): Promise<$_model.ReleaseAICInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseAICInstanceWithOptions(request, runtime);
  }

  /**
   * Releases an ARM server.
   * 
   * @param request - ReleaseARMServerInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseARMServerInstanceResponse
   */
  async releaseARMServerInstanceWithOptions(request: $_model.ReleaseARMServerInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseARMServerInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseARMServerInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseARMServerInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseARMServerInstanceResponse({}));
  }

  /**
   * Releases an ARM server.
   * 
   * @param request - ReleaseARMServerInstanceRequest
   * @returns ReleaseARMServerInstanceResponse
   */
  async releaseARMServerInstance(request: $_model.ReleaseARMServerInstanceRequest): Promise<$_model.ReleaseARMServerInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseARMServerInstanceWithOptions(request, runtime);
  }

  /**
   * Releases an instance. You can call this operation to release only Elastic IP Addresses (EIPs), Edge Load Balancer (ELB) instances, and cloud disk-based instances. We recommend that you call service-specific operations to release or unsubscribe from instances.
   * 
   * @remarks
   *   You can call this operation up to 10,000 times per second per account.
   * *   The maximum number of times that each user can call this operation per second is 50.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases an instance. You can call this operation to release only Elastic IP Addresses (EIPs), Edge Load Balancer (ELB) instances, and cloud disk-based instances. We recommend that you call service-specific operations to release or unsubscribe from instances.
   * 
   * @remarks
   *   You can call this operation up to 10,000 times per second per account.
   * *   The maximum number of times that each user can call this operation per second is 50.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a pay-as-you-go instance.
   * 
   * @param request - ReleasePostPaidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePostPaidInstanceResponse
   */
  async releasePostPaidInstanceWithOptions(request: $_model.ReleasePostPaidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePostPaidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePostPaidInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleasePostPaidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleasePostPaidInstanceResponse({}));
  }

  /**
   * Deletes a pay-as-you-go instance.
   * 
   * @param request - ReleasePostPaidInstanceRequest
   * @returns ReleasePostPaidInstanceResponse
   */
  async releasePostPaidInstance(request: $_model.ReleasePostPaidInstanceRequest): Promise<$_model.ReleasePostPaidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePostPaidInstanceWithOptions(request, runtime);
  }

  /**
   * Call ReleasePrePaidInstance to delete a subscription instance.
   * 
   * @param request - ReleasePrePaidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePrePaidInstanceResponse
   */
  async releasePrePaidInstanceWithOptions(request: $_model.ReleasePrePaidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePrePaidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePrePaidInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleasePrePaidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleasePrePaidInstanceResponse({}));
  }

  /**
   * Call ReleasePrePaidInstance to delete a subscription instance.
   * 
   * @param request - ReleasePrePaidInstanceRequest
   * @returns ReleasePrePaidInstanceResponse
   */
  async releasePrePaidInstance(request: $_model.ReleasePrePaidInstanceRequest): Promise<$_model.ReleasePrePaidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePrePaidInstanceWithOptions(request, runtime);
  }

  /**
   * Removes backend servers.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param tmpReq - RemoveBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServersWithOptions(tmpReq: $_model.RemoveBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveBackendServersResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveBackendServers",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - RemoveBackendServersRequest
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServers(request: $_model.RemoveBackendServersRequest): Promise<$_model.RemoveBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  /**
   * Removes a shared data group (SDG) that is attached to the compute instance.
   * 
   * @param tmpReq - RemoveInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstanceSDGResponse
   */
  async removeInstanceSDGWithOptions(tmpReq: $_model.RemoveInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInstanceSDGResponse({}));
  }

  /**
   * Removes a shared data group (SDG) that is attached to the compute instance.
   * 
   * @param request - RemoveInstanceSDGRequest
   * @returns RemoveInstanceSDGResponse
   */
  async removeInstanceSDG(request: $_model.RemoveInstanceSDGRequest): Promise<$_model.RemoveInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstanceSDGWithOptions(request, runtime);
  }

  /**
   * Removes IP addresses from an edge private network (EPN) instance.
   * 
   * @param request - RemovePublicIpsFromEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePublicIpsFromEpnInstanceResponse
   */
  async removePublicIpsFromEpnInstanceWithOptions(request: $_model.RemovePublicIpsFromEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePublicIpsFromEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.instanceInfos)) {
      query["InstanceInfos"] = request.instanceInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePublicIpsFromEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePublicIpsFromEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RemovePublicIpsFromEpnInstanceResponse({}));
  }

  /**
   * Removes IP addresses from an edge private network (EPN) instance.
   * 
   * @param request - RemovePublicIpsFromEpnInstanceRequest
   * @returns RemovePublicIpsFromEpnInstanceResponse
   */
  async removePublicIpsFromEpnInstance(request: $_model.RemovePublicIpsFromEpnInstanceRequest): Promise<$_model.RemovePublicIpsFromEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePublicIpsFromEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Removes a deployed shared data group (SDG) and restore local storage.
   * 
   * @param tmpReq - RemoveSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSDGResponse
   */
  async removeSDGWithOptions(tmpReq: $_model.RemoveSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSDGResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSDGResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSDGResponse({}));
  }

  /**
   * Removes a deployed shared data group (SDG) and restore local storage.
   * 
   * @param request - RemoveSDGRequest
   * @returns RemoveSDGResponse
   */
  async removeSDG(request: $_model.RemoveSDGRequest): Promise<$_model.RemoveSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSDGWithOptions(request, runtime);
  }

  /**
   * Removes all versions of SDG and restores the mount to the local disk.
   * 
   * @param tmpReq - RemoveSDGsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSDGsResponse
   */
  async removeSDGsWithOptions(tmpReq: $_model.RemoveSDGsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSDGsResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveSDGsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.sdgIds)) {
      request.sdgIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdgIds, "SdgIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.sdgIdsShrink)) {
      query["SdgIds"] = request.sdgIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSDGs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSDGsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSDGsResponse({}));
  }

  /**
   * Removes all versions of SDG and restores the mount to the local disk.
   * 
   * @param request - RemoveSDGsRequest
   * @returns RemoveSDGsResponse
   */
  async removeSDGs(request: $_model.RemoveSDGsRequest): Promise<$_model.RemoveSDGsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSDGsWithOptions(request, runtime);
  }

  /**
   * Deletes the networking information. This operation is applicable only for instances that reside in the internal network.
   * 
   * @param request - RemoveVSwitchesFromEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVSwitchesFromEpnInstanceResponse
   */
  async removeVSwitchesFromEpnInstanceWithOptions(request: $_model.RemoveVSwitchesFromEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveVSwitchesFromEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!$dara.isNull(request.vSwitchesInfo)) {
      query["VSwitchesInfo"] = request.vSwitchesInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveVSwitchesFromEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveVSwitchesFromEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveVSwitchesFromEpnInstanceResponse({}));
  }

  /**
   * Deletes the networking information. This operation is applicable only for instances that reside in the internal network.
   * 
   * @param request - RemoveVSwitchesFromEpnInstanceRequest
   * @returns RemoveVSwitchesFromEpnInstanceResponse
   */
  async removeVSwitchesFromEpnInstance(request: $_model.RemoveVSwitchesFromEpnInstanceRequest): Promise<$_model.RemoveVSwitchesFromEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeVSwitchesFromEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a subscription Android in Container (AIC) instance.
   * 
   * @param request - RenewARMServerInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewARMServerInstanceResponse
   */
  async renewARMServerInstanceWithOptions(request: $_model.RenewARMServerInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewARMServerInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewARMServerInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewARMServerInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewARMServerInstanceResponse({}));
  }

  /**
   * Renews a subscription Android in Container (AIC) instance.
   * 
   * @param request - RenewARMServerInstanceRequest
   * @returns RenewARMServerInstanceResponse
   */
  async renewARMServerInstance(request: $_model.RenewARMServerInstanceRequest): Promise<$_model.RenewARMServerInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewARMServerInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a subscription instance.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews a subscription instance.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Scales resources in an asynchronous manner and deploys or releases the container.
   * 
   * @param request - RescaleApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RescaleApplicationResponse
   */
  async rescaleApplicationWithOptions(request: $_model.RescaleApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RescaleApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.rescaleLevel)) {
      query["RescaleLevel"] = request.rescaleLevel;
    }

    if (!$dara.isNull(request.rescaleType)) {
      query["RescaleType"] = request.rescaleType;
    }

    if (!$dara.isNull(request.resourceSelector)) {
      query["ResourceSelector"] = request.resourceSelector;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.toAppVersion)) {
      query["ToAppVersion"] = request.toAppVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RescaleApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RescaleApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RescaleApplicationResponse({}));
  }

  /**
   * Scales resources in an asynchronous manner and deploys or releases the container.
   * 
   * @param request - RescaleApplicationRequest
   * @returns RescaleApplicationResponse
   */
  async rescaleApplication(request: $_model.RescaleApplicationRequest): Promise<$_model.RescaleApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rescaleApplicationWithOptions(request, runtime);
  }

  /**
   * Scales out a bare metal device.
   * 
   * @param request - RescaleDeviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RescaleDeviceServiceResponse
   */
  async rescaleDeviceServiceWithOptions(request: $_model.RescaleDeviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RescaleDeviceServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.rescaleLevel)) {
      query["RescaleLevel"] = request.rescaleLevel;
    }

    if (!$dara.isNull(request.rescaleType)) {
      query["RescaleType"] = request.rescaleType;
    }

    if (!$dara.isNull(request.resourceSpec)) {
      query["ResourceSpec"] = request.resourceSpec;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceInfo)) {
      body["ResourceInfo"] = request.resourceInfo;
    }

    if (!$dara.isNull(request.resourceSelector)) {
      body["ResourceSelector"] = request.resourceSelector;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RescaleDeviceService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RescaleDeviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.RescaleDeviceServiceResponse({}));
  }

  /**
   * Scales out a bare metal device.
   * 
   * @param request - RescaleDeviceServiceRequest
   * @returns RescaleDeviceServiceResponse
   */
  async rescaleDeviceService(request: $_model.RescaleDeviceServiceRequest): Promise<$_model.RescaleDeviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rescaleDeviceServiceWithOptions(request, runtime);
  }

  /**
   * Resets an Android in Container (AIC) instance.
   * 
   * @param request - ResetAICInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAICInstanceResponse
   */
  async resetAICInstanceWithOptions(request: $_model.ResetAICInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAICInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAICInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAICInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResetAICInstanceResponse({}));
  }

  /**
   * Resets an Android in Container (AIC) instance.
   * 
   * @param request - ResetAICInstanceRequest
   * @returns ResetAICInstanceResponse
   */
  async resetAICInstance(request: $_model.ResetAICInstanceRequest): Promise<$_model.ResetAICInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAICInstanceWithOptions(request, runtime);
  }

  /**
   * Rolls back a disk by using a snapshot.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   The disk must be in the In Use (In_Use) or Unattached (Available) state.
   * *   The instance to which the disk is attached must be in the Stopped (Stopped) state. You can call the [StopInstance](~~StopInstance~~) operation to stop an instance.
   * *   The specified snapshot must be created from the disk specified by the DiskId parameter.
   * *   If the response contains `{"OperationLocks": {"LockReason" : "security"}}` when you query information about an ENS instance by calling the [DescribeInstances](~~DescribeInstances~~) operation, the instance is locked for security reasons and no operations are allowed on the instance.
   * 
   * @param request - ResetDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDiskResponse
   */
  async resetDiskWithOptions(request: $_model.ResetDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDiskResponse>(await this.callApi(params, req, runtime), new $_model.ResetDiskResponse({}));
  }

  /**
   * Rolls back a disk by using a snapshot.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   The disk must be in the In Use (In_Use) or Unattached (Available) state.
   * *   The instance to which the disk is attached must be in the Stopped (Stopped) state. You can call the [StopInstance](~~StopInstance~~) operation to stop an instance.
   * *   The specified snapshot must be created from the disk specified by the DiskId parameter.
   * *   If the response contains `{"OperationLocks": {"LockReason" : "security"}}` when you query information about an ENS instance by calling the [DescribeInstances](~~DescribeInstances~~) operation, the instance is locked for security reasons and no operations are allowed on the instance.
   * 
   * @param request - ResetDiskRequest
   * @returns ResetDiskResponse
   */
  async resetDisk(request: $_model.ResetDiskRequest): Promise<$_model.ResetDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDiskWithOptions(request, runtime);
  }

  /**
   * Resizes a pay-as-you-go disk that you purchase.
   * 
   * @param request - ResizeDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeDiskResponse
   */
  async resizeDiskWithOptions(request: $_model.ResizeDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.newSize)) {
      query["NewSize"] = request.newSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeDiskResponse>(await this.callApi(params, req, runtime), new $_model.ResizeDiskResponse({}));
  }

  /**
   * Resizes a pay-as-you-go disk that you purchase.
   * 
   * @param request - ResizeDiskRequest
   * @returns ResizeDiskResponse
   */
  async resizeDisk(request: $_model.ResizeDiskRequest): Promise<$_model.ResizeDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeDiskWithOptions(request, runtime);
  }

  /**
   * Deletes an inbound security group rule. After the rule is deleted, the access control implemented by the rule is removed.
   * 
   * @remarks
   *   In the security group-related API documents, inbound traffic refers to the traffic sent by the source and received by the destination.
   * *   You can determine an inbound security group rule by specifying one of the following groups of parameters. You cannot determine a security group rule by specifying only one parameter.
   * *   You can specify one or more of the following parameters to remove access control for a CIDR block: IpProtocol, PortRange, Policy, and SourceCidrIp.
   * 
   * @param request - RevokeSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeSecurityGroupResponse
   */
  async revokeSecurityGroupWithOptions(request: $_model.RevokeSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeSecurityGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.RevokeSecurityGroupResponse({}));
  }

  /**
   * Deletes an inbound security group rule. After the rule is deleted, the access control implemented by the rule is removed.
   * 
   * @remarks
   *   In the security group-related API documents, inbound traffic refers to the traffic sent by the source and received by the destination.
   * *   You can determine an inbound security group rule by specifying one of the following groups of parameters. You cannot determine a security group rule by specifying only one parameter.
   * *   You can specify one or more of the following parameters to remove access control for a CIDR block: IpProtocol, PortRange, Policy, and SourceCidrIp.
   * 
   * @param request - RevokeSecurityGroupRequest
   * @returns RevokeSecurityGroupResponse
   */
  async revokeSecurityGroup(request: $_model.RevokeSecurityGroupRequest): Promise<$_model.RevokeSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an outbound security group rule. After the rule is deleted, the access control implemented by the rule is removed.
   * 
   * @remarks
   * >  In the security group-related API documents, outbound traffic refers to the traffic sent by the source and received by the destination.
   * 
   * @param request - RevokeSecurityGroupEgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeSecurityGroupEgressResponse
   */
  async revokeSecurityGroupEgressWithOptions(request: $_model.RevokeSecurityGroupEgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeSecurityGroupEgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destCidrIp)) {
      query["DestCidrIp"] = request.destCidrIp;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeSecurityGroupEgress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeSecurityGroupEgressResponse>(await this.callApi(params, req, runtime), new $_model.RevokeSecurityGroupEgressResponse({}));
  }

  /**
   * Deletes an outbound security group rule. After the rule is deleted, the access control implemented by the rule is removed.
   * 
   * @remarks
   * >  In the security group-related API documents, outbound traffic refers to the traffic sent by the source and received by the destination.
   * 
   * @param request - RevokeSecurityGroupEgressRequest
   * @returns RevokeSecurityGroupEgressResponse
   */
  async revokeSecurityGroupEgress(request: $_model.RevokeSecurityGroupEgressRequest): Promise<$_model.RevokeSecurityGroupEgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeSecurityGroupEgressWithOptions(request, runtime);
  }

  /**
   * Rolls back the container version of a specific application.
   * 
   * @param request - RollbackApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackApplicationResponse
   */
  async rollbackApplicationWithOptions(request: $_model.RollbackApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.fromAppVersion)) {
      query["FromAppVersion"] = request.fromAppVersion;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.toAppVersion)) {
      query["ToAppVersion"] = request.toAppVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RollbackApplicationResponse({}));
  }

  /**
   * Rolls back the container version of a specific application.
   * 
   * @param request - RollbackApplicationRequest
   * @returns RollbackApplicationResponse
   */
  async rollbackApplication(request: $_model.RollbackApplicationRequest): Promise<$_model.RollbackApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription ENS instance.
   * 
   * @param tmpReq - RunInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunInstancesResponse
   */
  async runInstancesWithOptions(tmpReq: $_model.RunInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RunInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataDisk)) {
      request.dataDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisk, "DataDisk", "json");
    }

    if (!$dara.isNull(tmpReq.systemDisk)) {
      request.systemDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemDisk, "SystemDisk", "json");
    }

    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoReleaseTime)) {
      query["AutoReleaseTime"] = request.autoReleaseTime;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!$dara.isNull(request.dataDiskShrink)) {
      query["DataDisk"] = request.dataDiskShrink;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceChargeStrategy)) {
      query["InstanceChargeStrategy"] = request.instanceChargeStrategy;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateName)) {
      query["LaunchTemplateName"] = request.launchTemplateName;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!$dara.isNull(request.netWorkId)) {
      query["NetWorkId"] = request.netWorkId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.publicIpIdentification)) {
      query["PublicIpIdentification"] = request.publicIpIdentification;
    }

    if (!$dara.isNull(request.scheduleAreaLevel)) {
      query["ScheduleAreaLevel"] = request.scheduleAreaLevel;
    }

    if (!$dara.isNull(request.schedulingPriceStrategy)) {
      query["SchedulingPriceStrategy"] = request.schedulingPriceStrategy;
    }

    if (!$dara.isNull(request.schedulingStrategy)) {
      query["SchedulingStrategy"] = request.schedulingStrategy;
    }

    if (!$dara.isNull(request.securityId)) {
      query["SecurityId"] = request.securityId;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.systemDiskShrink)) {
      query["SystemDisk"] = request.systemDiskShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.uniqueSuffix)) {
      query["UniqueSuffix"] = request.uniqueSuffix;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RunInstancesResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription ENS instance.
   * 
   * @param request - RunInstancesRequest
   * @returns RunInstancesResponse
   */
  async runInstances(request: $_model.RunInstancesRequest): Promise<$_model.RunInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runInstancesWithOptions(request, runtime);
  }

  /**
   * Schedules the nearest idle resources including instances and pods for your device based on the user ID and IP address and initializes the virtual environment.
   * 
   * @param request - RunServiceScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunServiceScheduleResponse
   */
  async runServiceScheduleWithOptions(request: $_model.RunServiceScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunServiceScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.directorys)) {
      query["Directorys"] = request.directorys;
    }

    if (!$dara.isNull(request.podConfigName)) {
      query["PodConfigName"] = request.podConfigName;
    }

    if (!$dara.isNull(request.preLockedTimeout)) {
      query["PreLockedTimeout"] = request.preLockedTimeout;
    }

    if (!$dara.isNull(request.scheduleStrategy)) {
      query["ScheduleStrategy"] = request.scheduleStrategy;
    }

    if (!$dara.isNull(request.serviceAction)) {
      query["ServiceAction"] = request.serviceAction;
    }

    if (!$dara.isNull(request.serviceCommands)) {
      query["ServiceCommands"] = request.serviceCommands;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunServiceSchedule",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunServiceScheduleResponse>(await this.callApi(params, req, runtime), new $_model.RunServiceScheduleResponse({}));
  }

  /**
   * Schedules the nearest idle resources including instances and pods for your device based on the user ID and IP address and initializes the virtual environment.
   * 
   * @param request - RunServiceScheduleRequest
   * @returns RunServiceScheduleResponse
   */
  async runServiceSchedule(request: $_model.RunServiceScheduleRequest): Promise<$_model.RunServiceScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runServiceScheduleWithOptions(request, runtime);
  }

  /**
   * Saves the disk of a specific device as a shared data group (SDG).
   * 
   * @param request - SaveSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSDGResponse
   */
  async saveSDGWithOptions(request: $_model.SaveSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSDGResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSDGResponse>(await this.callApi(params, req, runtime), new $_model.SaveSDGResponse({}));
  }

  /**
   * Saves the disk of a specific device as a shared data group (SDG).
   * 
   * @param request - SaveSDGRequest
   * @returns SaveSDGResponse
   */
  async saveSDG(request: $_model.SaveSDGRequest): Promise<$_model.SaveSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSDGWithOptions(request, runtime);
  }

  /**
   * 调整节点池节点数
   * 
   * @param tmpReq - ScaleClusterNodePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePoolWithOptions(tmpReq: $_model.ScaleClusterNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleClusterNodePoolResponse> {
    tmpReq.validate();
    let request = new $_model.ScaleClusterNodePoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      query["NodepoolId"] = request.nodepoolId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleClusterNodePool",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.ScaleClusterNodePoolResponse({}));
  }

  /**
   * 调整节点池节点数
   * 
   * @param request - ScaleClusterNodePoolRequest
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePool(request: $_model.ScaleClusterNodePoolRequest): Promise<$_model.ScaleClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scaleClusterNodePoolWithOptions(request, runtime);
  }

  /**
   * Sets the weights of backend servers.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param tmpReq - SetBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackendServersResponse
   */
  async setBackendServersWithOptions(tmpReq: $_model.SetBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetBackendServersResponse> {
    tmpReq.validate();
    let request = new $_model.SetBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetBackendServers",
      version: "2017-11-10",
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
   * Sets the weights of backend servers.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - SetBackendServersRequest
   * @returns SetBackendServersResponse
   */
  async setBackendServers(request: $_model.SetBackendServersRequest): Promise<$_model.SetBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an HTTP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttributeWithOptions(request: $_model.SetLoadBalancerHTTPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerHTTPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: $_model.SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerHTTPSListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
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

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerHTTPSListenerAttribute",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - SetLoadBalancerHTTPSListenerAttributeRequest
   * @returns SetLoadBalancerHTTPSListenerAttributeResponse
   */
  async setLoadBalancerHTTPSListenerAttribute(request: $_model.SetLoadBalancerHTTPSListenerAttributeRequest): Promise<$_model.SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the status of an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerStatus",
      version: "2017-11-10",
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
   * Modifies the status of an Edge Load Balancer (ELB) instance.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatus(request: $_model.SetLoadBalancerStatusRequest): Promise<$_model.SetLoadBalancerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a TCP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttributeWithOptions(request: $_model.SetLoadBalancerTCPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerTCPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
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

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2017-11-10",
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
   * Modifies the configurations of a TCP listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttributeWithOptions(request: $_model.SetLoadBalancerUDPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerUDPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
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

    if (!$dara.isNull(request.healthCheckExp)) {
      query["HealthCheckExp"] = request.healthCheckExp;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckReq)) {
      query["HealthCheckReq"] = request.healthCheckReq;
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

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerUDPListenerAttribute",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - SetLoadBalancerUDPListenerAttributeRequest
   * @returns SetLoadBalancerUDPListenerAttributeResponse
   */
  async setLoadBalancerUDPListenerAttribute(request: $_model.SetLoadBalancerUDPListenerAttributeRequest): Promise<$_model.SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Share the specified AIC image to other users.
   * 
   * @param tmpReq - ShareAICImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShareAICImageResponse
   */
  async shareAICImageWithOptions(tmpReq: $_model.ShareAICImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ShareAICImageResponse> {
    tmpReq.validate();
    let request = new $_model.ShareAICImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.users)) {
      request.usersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.users, "Users", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.usersShrink)) {
      query["Users"] = request.usersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShareAICImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShareAICImageResponse>(await this.callApi(params, req, runtime), new $_model.ShareAICImageResponse({}));
  }

  /**
   * Share the specified AIC image to other users.
   * 
   * @param request - ShareAICImageRequest
   * @returns ShareAICImageResponse
   */
  async shareAICImage(request: $_model.ShareAICImageRequest): Promise<$_model.ShareAICImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.shareAICImageWithOptions(request, runtime);
  }

  /**
   * Starts an edge network instance.
   * 
   * @param request - StartEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEpnInstanceResponse
   */
  async startEpnInstanceWithOptions(request: $_model.StartEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartEpnInstanceResponse({}));
  }

  /**
   * Starts an edge network instance.
   * 
   * @param request - StartEpnInstanceRequest
   * @returns StartEpnInstanceResponse
   */
  async startEpnInstance(request: $_model.StartEpnInstanceRequest): Promise<$_model.StartEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Starts an instance.
   * 
   * @remarks
   *   You can call the operation only when the instance is in the Stopped state.
   * *   If the operation is successful, the status of the instance becomes Starting.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Starts an instance.
   * 
   * @remarks
   *   You can call the operation only when the instance is in the Stopped state.
   * *   If the operation is successful, the status of the instance becomes Starting.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * 选择批量实例进行启动操作
   * 
   * @param tmpReq - StartInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstancesResponse
   */
  async startInstancesWithOptions(tmpReq: $_model.StartInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StartInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StartInstancesResponse({}));
  }

  /**
   * 选择批量实例进行启动操作
   * 
   * @param request - StartInstancesRequest
   * @returns StartInstancesResponse
   */
  async startInstances(request: $_model.StartInstancesRequest): Promise<$_model.StartInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstancesWithOptions(request, runtime);
  }

  /**
   * Enables a listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartLoadBalancerListener",
      version: "2017-11-10",
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
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - StartLoadBalancerListenerRequest
   * @returns StartLoadBalancerListenerResponse
   */
  async startLoadBalancerListener(request: $_model.StartLoadBalancerListenerRequest): Promise<$_model.StartLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Starts the elastic IP address (EIP) specified in a source network address translation (SNAT) entry.
   * 
   * @param request - StartSnatIpForSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSnatIpForSnatEntryResponse
   */
  async startSnatIpForSnatEntryWithOptions(request: $_model.StartSnatIpForSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSnatIpForSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSnatIpForSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSnatIpForSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.StartSnatIpForSnatEntryResponse({}));
  }

  /**
   * Starts the elastic IP address (EIP) specified in a source network address translation (SNAT) entry.
   * 
   * @param request - StartSnatIpForSnatEntryRequest
   * @returns StartSnatIpForSnatEntryResponse
   */
  async startSnatIpForSnatEntry(request: $_model.StartSnatIpForSnatEntryRequest): Promise<$_model.StartSnatIpForSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSnatIpForSnatEntryWithOptions(request, runtime);
  }

  /**
   * Stops an EPN instance.
   * 
   * @param request - StopEpnInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEpnInstanceResponse
   */
  async stopEpnInstanceWithOptions(request: $_model.StopEpnInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopEpnInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopEpnInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopEpnInstanceResponse({}));
  }

  /**
   * Stops an EPN instance.
   * 
   * @param request - StopEpnInstanceRequest
   * @returns StopEpnInstanceResponse
   */
  async stopEpnInstance(request: $_model.StopEpnInstanceRequest): Promise<$_model.StopEpnInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopEpnInstanceWithOptions(request, runtime);
  }

  /**
   * Stops an instance.
   * 
   * @remarks
   *   You can call this operation to stop instances that are only in the Running state.
   * *   If the call is successful, the state of the instance becomes Stopping.
   * *   Once the instance is stopped, the state of the instance becomes Stopped.
   * *   Force stop is supported, which is equivalent to power-off. Data that is not written to disks on the instance may be lost.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Stops an instance.
   * 
   * @remarks
   *   You can call this operation to stop instances that are only in the Running state.
   * *   If the call is successful, the state of the instance becomes Stopping.
   * *   Once the instance is stopped, the state of the instance becomes Stopped.
   * *   Force stop is supported, which is equivalent to power-off. Data that is not written to disks on the instance may be lost.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * 选择批量实例进行停止操作
   * 
   * @param tmpReq - StopInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstancesResponse
   */
  async stopInstancesWithOptions(tmpReq: $_model.StopInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StopInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopInstancesResponse({}));
  }

  /**
   * 选择批量实例进行停止操作
   * 
   * @param request - StopInstancesRequest
   * @returns StopInstancesResponse
   */
  async stopInstances(request: $_model.StopInstancesRequest): Promise<$_model.StopInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstancesWithOptions(request, runtime);
  }

  /**
   * Disables a listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopLoadBalancerListener",
      version: "2017-11-10",
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
   * Disables a listener.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can call this operation up to 10 times per second per user.
   * 
   * @param request - StopLoadBalancerListenerRequest
   * @returns StopLoadBalancerListenerResponse
   */
  async stopLoadBalancerListener(request: $_model.StopLoadBalancerListenerRequest): Promise<$_model.StopLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * Disables an elastic IP address (EIP) in a source network address translation (SNAT) entry.
   * 
   * @param request - StopSnatIpForSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSnatIpForSnatEntryResponse
   */
  async stopSnatIpForSnatEntryWithOptions(request: $_model.StopSnatIpForSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopSnatIpForSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSnatIpForSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSnatIpForSnatEntryResponse>(await this.callApi(params, req, runtime), new $_model.StopSnatIpForSnatEntryResponse({}));
  }

  /**
   * Disables an elastic IP address (EIP) in a source network address translation (SNAT) entry.
   * 
   * @param request - StopSnatIpForSnatEntryRequest
   * @returns StopSnatIpForSnatEntryResponse
   */
  async stopSnatIpForSnatEntry(request: $_model.StopSnatIpForSnatEntryRequest): Promise<$_model.StopSnatIpForSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopSnatIpForSnatEntryWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to specific Edge Node Service (ENS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags on the resource. If the number exceeds the upper limit, an error message is returned. Only instance resources, such as virtual machines and bare machines, are supported.
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
      version: "2017-11-10",
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
   * Creates and adds tags to specific Edge Node Service (ENS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags on the resource. If the number exceeds the upper limit, an error message is returned. Only instance resources, such as virtual machines and bare machines, are supported.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates an elastic IP address (EIP) from an instance.
   * 
   * @param request - UnAssociateEnsEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnAssociateEnsEipAddressResponse
   */
  async unAssociateEnsEipAddressWithOptions(request: $_model.UnAssociateEnsEipAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnAssociateEnsEipAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnAssociateEnsEipAddress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnAssociateEnsEipAddressResponse>(await this.callApi(params, req, runtime), new $_model.UnAssociateEnsEipAddressResponse({}));
  }

  /**
   * Disassociates an elastic IP address (EIP) from an instance.
   * 
   * @param request - UnAssociateEnsEipAddressRequest
   * @returns UnAssociateEnsEipAddressResponse
   */
  async unAssociateEnsEipAddress(request: $_model.UnAssociateEnsEipAddressRequest): Promise<$_model.UnAssociateEnsEipAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unAssociateEnsEipAddressWithOptions(request, runtime);
  }

  /**
   * 卸载集群组件
   * 
   * @param tmpReq - UnInstallClusterAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddonsWithOptions(tmpReq: $_model.UnInstallClusterAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnInstallClusterAddonsResponse> {
    tmpReq.validate();
    let request = new $_model.UnInstallClusterAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnInstallClusterAddons",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnInstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.UnInstallClusterAddonsResponse({}));
  }

  /**
   * 卸载集群组件
   * 
   * @param request - UnInstallClusterAddonsRequest
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddons(request: $_model.UnInstallClusterAddonsRequest): Promise<$_model.UnInstallClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unInstallClusterAddonsWithOptions(request, runtime);
  }

  /**
   * Unassigns secondary private IP addresses from an elastic network interface (ENI).
   * 
   * @param request - UnassignPrivateIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassignPrivateIpAddressesResponse
   */
  async unassignPrivateIpAddressesWithOptions(request: $_model.UnassignPrivateIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassignPrivateIpAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassignPrivateIpAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassignPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new $_model.UnassignPrivateIpAddressesResponse({}));
  }

  /**
   * Unassigns secondary private IP addresses from an elastic network interface (ENI).
   * 
   * @param request - UnassignPrivateIpAddressesRequest
   * @returns UnassignPrivateIpAddressesResponse
   */
  async unassignPrivateIpAddresses(request: $_model.UnassignPrivateIpAddressesRequest): Promise<$_model.UnassignPrivateIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassignPrivateIpAddressesWithOptions(request, runtime);
  }

  /**
   * Disassociates a high-availability virtual IP address (HAVIP) from an Edge Node Service (ENS) instance or Elastic Network Interface (ENI).
   * 
   * @param request - UnassociateHaVipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateHaVipResponse
   */
  async unassociateHaVipWithOptions(request: $_model.UnassociateHaVipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateHaVipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.haVipId)) {
      query["HaVipId"] = request.haVipId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassociateHaVip",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassociateHaVipResponse>(await this.callApi(params, req, runtime), new $_model.UnassociateHaVipResponse({}));
  }

  /**
   * Disassociates a high-availability virtual IP address (HAVIP) from an Edge Node Service (ENS) instance or Elastic Network Interface (ENI).
   * 
   * @param request - UnassociateHaVipRequest
   * @returns UnassociateHaVipResponse
   */
  async unassociateHaVip(request: $_model.UnassociateHaVipRequest): Promise<$_model.UnassociateHaVipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateHaVipWithOptions(request, runtime);
  }

  /**
   * Disassociates a network access control list (ACL) from a network.
   * 
   * @param request - UnassociateNetworkAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateNetworkAclResponse
   */
  async unassociateNetworkAclWithOptions(request: $_model.UnassociateNetworkAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateNetworkAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkAclId)) {
      query["NetworkAclId"] = request.networkAclId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassociateNetworkAcl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassociateNetworkAclResponse>(await this.callApi(params, req, runtime), new $_model.UnassociateNetworkAclResponse({}));
  }

  /**
   * Disassociates a network access control list (ACL) from a network.
   * 
   * @param request - UnassociateNetworkAclRequest
   * @returns UnassociateNetworkAclResponse
   */
  async unassociateNetworkAcl(request: $_model.UnassociateNetworkAclRequest): Promise<$_model.UnassociateNetworkAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassociateNetworkAclWithOptions(request, runtime);
  }

  /**
   * Deletes preloaded data.
   * 
   * @param tmpReq - UnloadRegionSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnloadRegionSDGResponse
   */
  async unloadRegionSDGWithOptions(tmpReq: $_model.UnloadRegionSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnloadRegionSDGResponse> {
    tmpReq.validate();
    let request = new $_model.UnloadRegionSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationRegionIds)) {
      request.destinationRegionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationRegionIds, "DestinationRegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    let query = { };
    if (!$dara.isNull(request.destinationRegionIdsShrink)) {
      query["DestinationRegionIds"] = request.destinationRegionIdsShrink;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnloadRegionSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnloadRegionSDGResponse>(await this.callApi(params, req, runtime), new $_model.UnloadRegionSDGResponse({}));
  }

  /**
   * Deletes preloaded data.
   * 
   * @param request - UnloadRegionSDGRequest
   * @returns UnloadRegionSDGResponse
   */
  async unloadRegionSDG(request: $_model.UnloadRegionSDGRequest): Promise<$_model.UnloadRegionSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unloadRegionSDGWithOptions(request, runtime);
  }

  /**
   * Unmounts a shared data group (SDG) from instances.
   * 
   * @param tmpReq - UnmountInstanceSDGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnmountInstanceSDGResponse
   */
  async unmountInstanceSDGWithOptions(tmpReq: $_model.UnmountInstanceSDGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnmountInstanceSDGResponse> {
    tmpReq.validate();
    let request = new $_model.UnmountInstanceSDGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.SDGId)) {
      query["SDGId"] = request.SDGId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnmountInstanceSDG",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnmountInstanceSDGResponse>(await this.callApi(params, req, runtime), new $_model.UnmountInstanceSDGResponse({}));
  }

  /**
   * Unmounts a shared data group (SDG) from instances.
   * 
   * @param request - UnmountInstanceSDGRequest
   * @returns UnmountInstanceSDGResponse
   */
  async unmountInstanceSDG(request: $_model.UnmountInstanceSDGRequest): Promise<$_model.UnmountInstanceSDGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unmountInstanceSDGWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-11-10",
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
   * 修改售卖约束
   * 
   * @param tmpReq - UpdateEnsSaleControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnsSaleControlResponse
   */
  async updateEnsSaleControlWithOptions(tmpReq: $_model.UpdateEnsSaleControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnsSaleControlResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEnsSaleControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.saleControls)) {
      request.saleControlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.saleControls, "SaleControls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliUidAccount)) {
      query["AliUidAccount"] = request.aliUidAccount;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.customAccount)) {
      query["CustomAccount"] = request.customAccount;
    }

    if (!$dara.isNull(request.saleControlsShrink)) {
      query["SaleControls"] = request.saleControlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnsSaleControl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnsSaleControlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnsSaleControlResponse({}));
  }

  /**
   * 修改售卖约束
   * 
   * @param request - UpdateEnsSaleControlRequest
   * @returns UpdateEnsSaleControlResponse
   */
  async updateEnsSaleControl(request: $_model.UpdateEnsSaleControlRequest): Promise<$_model.UpdateEnsSaleControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnsSaleControlWithOptions(request, runtime);
  }

  /**
   * Updates the image of an Android in Container (AIC) instance.
   * 
   * @param tmpReq - UpgradeAICInstanceImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAICInstanceImageResponse
   */
  async upgradeAICInstanceImageWithOptions(tmpReq: $_model.UpgradeAICInstanceImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeAICInstanceImageResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradeAICInstanceImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverIds)) {
      request.serverIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverIds, "ServerIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAICInstanceImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeAICInstanceImageResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeAICInstanceImageResponse({}));
  }

  /**
   * Updates the image of an Android in Container (AIC) instance.
   * 
   * @param request - UpgradeAICInstanceImageRequest
   * @returns UpgradeAICInstanceImageResponse
   */
  async upgradeAICInstanceImage(request: $_model.UpgradeAICInstanceImageRequest): Promise<$_model.UpgradeAICInstanceImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAICInstanceImageWithOptions(request, runtime);
  }

  /**
   * Updates the container in an asynchronous manner. You can configure multiple canary release policies.
   * 
   * @param request - UpgradeApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeApplicationResponse
   */
  async upgradeApplicationWithOptions(request: $_model.UpgradeApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeApplicationResponse({}));
  }

  /**
   * Updates the container in an asynchronous manner. You can configure multiple canary release policies.
   * 
   * @param request - UpgradeApplicationRequest
   * @returns UpgradeApplicationResponse
   */
  async upgradeApplication(request: $_model.UpgradeApplicationRequest): Promise<$_model.UpgradeApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeApplicationWithOptions(request, runtime);
  }

  /**
   * 升级集群实例组件
   * 
   * @param tmpReq - UpgradeClusterAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddonsWithOptions(tmpReq: $_model.UpgradeClusterAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterAddonsResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradeClusterAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClusterAddons",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClusterAddonsResponse({}));
  }

  /**
   * 升级集群实例组件
   * 
   * @param request - UpgradeClusterAddonsRequest
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddons(request: $_model.UpgradeClusterAddonsRequest): Promise<$_model.UpgradeClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeClusterAddonsWithOptions(request, runtime);
  }

  /**
   * Upload a new AIC public key.
   * 
   * @param request - UploadAICPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAICPublicKeyResponse
   */
  async uploadAICPublicKeyWithOptions(request: $_model.UploadAICPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAICPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadAICPublicKey",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadAICPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.UploadAICPublicKeyResponse({}));
  }

  /**
   * Upload a new AIC public key.
   * 
   * @param request - UploadAICPublicKeyRequest
   * @returns UploadAICPublicKeyResponse
   */
  async uploadAICPublicKey(request: $_model.UploadAICPublicKeyRequest): Promise<$_model.UploadAICPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAICPublicKeyWithOptions(request, runtime);
  }

}
