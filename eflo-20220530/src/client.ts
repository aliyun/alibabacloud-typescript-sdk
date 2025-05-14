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
    this._endpoint = this.getEndpoint("eflo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Apply for a secondary private IP address for the current Lingjun Elastic Network Interface. You can automatically assign a secondary private IP address.
   * 
   * @remarks
   * Apply for a secondary private IP address for the specified Lingjun Elastic Network Interface.
   * *   If the PrivateIp field is empty, a secondary private IP address is automatically assigned and the unique identifier of the IP address is returned.
   * *   You can use the GetLeniPrivateIpAddress or ListLeniPrivateIpAddresses interface to check whether the secondary private IP address is assigned.
   * 
   * @param request - AssignLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignLeniPrivateIpAddressResponse
   */
  async assignLeniPrivateIpAddressWithOptions(request: $_model.AssignLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.AssignLeniPrivateIpAddressResponse({}));
  }

  /**
   * Apply for a secondary private IP address for the current Lingjun Elastic Network Interface. You can automatically assign a secondary private IP address.
   * 
   * @remarks
   * Apply for a secondary private IP address for the specified Lingjun Elastic Network Interface.
   * *   If the PrivateIp field is empty, a secondary private IP address is automatically assigned and the unique identifier of the IP address is returned.
   * *   You can use the GetLeniPrivateIpAddress or ListLeniPrivateIpAddresses interface to check whether the secondary private IP address is assigned.
   * 
   * @param request - AssignLeniPrivateIpAddressRequest
   * @returns AssignLeniPrivateIpAddressResponse
   */
  async assignLeniPrivateIpAddress(request: $_model.AssignLeniPrivateIpAddressRequest): Promise<$_model.AssignLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Applies for a private secondary IP address for the current LNI. You can also call this operation to assign a secondary MAC address to the current LNI.
   * 
   * @remarks
   * >  Apply for secondary private IP addresses
   * *   By default, each network interface controller can apply for three secondary private IP addresses. If the quota is exceeded, contact the administrator.
   * *   The secondary private IP address is allocated from the Lingjun subnet to which the current network interface controller belongs. The first address and the last two addresses belong to reserved addresses and do not participate in the allocation.
   * 
   * @param request - AssignPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignPrivateIpAddressResponse
   */
  async assignPrivateIpAddressWithOptions(request: $_model.AssignPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignMac)) {
      body["AssignMac"] = request.assignMac;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.skipConfig)) {
      body["SkipConfig"] = request.skipConfig;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.AssignPrivateIpAddressResponse({}));
  }

  /**
   * Applies for a private secondary IP address for the current LNI. You can also call this operation to assign a secondary MAC address to the current LNI.
   * 
   * @remarks
   * >  Apply for secondary private IP addresses
   * *   By default, each network interface controller can apply for three secondary private IP addresses. If the quota is exceeded, contact the administrator.
   * *   The secondary private IP address is allocated from the Lingjun subnet to which the current network interface controller belongs. The first address and the last two addresses belong to reserved addresses and do not participate in the allocation.
   * 
   * @param request - AssignPrivateIpAddressRequest
   * @returns AssignPrivateIpAddressResponse
   */
  async assignPrivateIpAddress(request: $_model.AssignPrivateIpAddressRequest): Promise<$_model.AssignPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * When the VPD primary network segment address is not enough to allocate, you can choose to create an additional network segment as the additional network segment of the VPD primary network segment.
   * 
   * @remarks
   * >  **Add a CIDR block**
   * *   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
   * *   The secondary IPv4 CIDR block must not overlap with the primary IPv4 CIDR block of the Lingjun CIDR block and the added secondary IPv4 CIDR block.
   * *   You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as the CIDR block of Lingjun. Example: In the Lingjun CIDR block whose primary IPv4 CIDR block is 192.168.0.0/16, you cannot add the following CIDR blocks as additional IPv4 CIDR blocks. The CIDR block that is in the same range as 192.168.0.0/16. A CIDR block that is larger than 192.168.0.0/16. Example: 192.168.0.0/8. A CIDR block that is smaller than 192.168.0.0/16. Example: 192.168.0.0/24.
   * *   By default, each tenant can create three additional CIDR blocks in each region.
   * 
   * @param request - AssociateVpdCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateVpdCidrBlockResponse
   */
  async associateVpdCidrBlockWithOptions(request: $_model.AssociateVpdCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateVpdCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secondaryCidrBlock)) {
      body["SecondaryCidrBlock"] = request.secondaryCidrBlock;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateVpdCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateVpdCidrBlockResponse>(await this.callApi(params, req, runtime), new $_model.AssociateVpdCidrBlockResponse({}));
  }

  /**
   * When the VPD primary network segment address is not enough to allocate, you can choose to create an additional network segment as the additional network segment of the VPD primary network segment.
   * 
   * @remarks
   * >  **Add a CIDR block**
   * *   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
   * *   The secondary IPv4 CIDR block must not overlap with the primary IPv4 CIDR block of the Lingjun CIDR block and the added secondary IPv4 CIDR block.
   * *   You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as the CIDR block of Lingjun. Example: In the Lingjun CIDR block whose primary IPv4 CIDR block is 192.168.0.0/16, you cannot add the following CIDR blocks as additional IPv4 CIDR blocks. The CIDR block that is in the same range as 192.168.0.0/16. A CIDR block that is larger than 192.168.0.0/16. Example: 192.168.0.0/8. A CIDR block that is smaller than 192.168.0.0/16. Example: 192.168.0.0/24.
   * *   By default, each tenant can create three additional CIDR blocks in each region.
   * 
   * @param request - AssociateVpdCidrBlockRequest
   * @returns AssociateVpdCidrBlockResponse
   */
  async associateVpdCidrBlock(request: $_model.AssociateVpdCidrBlockRequest): Promise<$_model.AssociateVpdCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateVpdCidrBlockWithOptions(request, runtime);
  }

  /**
   * Lingjun ENI is bound to NC.
   * 
   * @remarks
   * This interface is an asynchronous interface. You need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the available state.
   * 
   * @param request - AttachElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachElasticNetworkInterfaceResponse
   */
  async attachElasticNetworkInterfaceWithOptions(request: $_model.AttachElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.AttachElasticNetworkInterfaceResponse({}));
  }

  /**
   * Lingjun ENI is bound to NC.
   * 
   * @remarks
   * This interface is an asynchronous interface. You need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the available state.
   * 
   * @param request - AttachElasticNetworkInterfaceRequest
   * @returns AttachElasticNetworkInterfaceResponse
   */
  async attachElasticNetworkInterface(request: $_model.AttachElasticNetworkInterfaceRequest): Promise<$_model.AttachElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Creates an LENI.
   * 
   * @param request - CreateElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticNetworkInterfaceResponse
   */
  async createElasticNetworkInterfaceWithOptions(request: $_model.CreateElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableJumboFrame)) {
      body["EnableJumboFrame"] = request.enableJumboFrame;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateElasticNetworkInterfaceResponse({}));
  }

  /**
   * Creates an LENI.
   * 
   * @param request - CreateElasticNetworkInterfaceRequest
   * @returns CreateElasticNetworkInterfaceResponse
   */
  async createElasticNetworkInterface(request: $_model.CreateElasticNetworkInterfaceRequest): Promise<$_model.CreateElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Create a Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a Lingjun HUB, note that:
   * *   Make sure that you have sufficient Lingjun HUB quota.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the ID of a Lingjun HUB. At this time, the Lingjun HUB instance may not be created yet, and the system background creation task is still in progress. You can call the ListErs or GetEr operation to query the status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Executing, it indicates that it is being created.
   *     *   If the status of the Lingjun HUB is Available, the creation is successful.
   * 
   * @param request - CreateErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErResponse
   */
  async createErWithOptions(request: $_model.CreateErRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      body["MasterZoneId"] = request.masterZoneId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateErResponse>(await this.callApi(params, req, runtime), new $_model.CreateErResponse({}));
  }

  /**
   * Create a Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a Lingjun HUB, note that:
   * *   Make sure that you have sufficient Lingjun HUB quota.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the ID of a Lingjun HUB. At this time, the Lingjun HUB instance may not be created yet, and the system background creation task is still in progress. You can call the ListErs or GetEr operation to query the status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Executing, it indicates that it is being created.
   *     *   If the status of the Lingjun HUB is Available, the creation is successful.
   * 
   * @param request - CreateErRequest
   * @returns CreateErResponse
   */
  async createEr(request: $_model.CreateErRequest): Promise<$_model.CreateErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErWithOptions(request, runtime);
  }

  /**
   * Create a network instance connection.
   * 
   * @remarks
   * When you call this operation to create a network instance connection, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have sufficient quota for network instance connections.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the network instance connection. In this case, the network instance connection may not be created yet, and the system is still creating the network instance in the background. You can query the connection status of a network instance by ListErAttachments or GetErAttachment:
   *     *   If the connection status of the network instance is Executing, the network instance is being created.
   *     *   If the connection status of the network instance is Available, the network instance is created.
   * 
   * @param request - CreateErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErAttachmentResponse
   */
  async createErAttachmentWithOptions(request: $_model.CreateErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoReceiveAllRoute)) {
      body["AutoReceiveAllRoute"] = request.autoReceiveAllRoute;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceTenantId)) {
      body["ResourceTenantId"] = request.resourceTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateErAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateErAttachmentResponse({}));
  }

  /**
   * Create a network instance connection.
   * 
   * @remarks
   * When you call this operation to create a network instance connection, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have sufficient quota for network instance connections.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the network instance connection. In this case, the network instance connection may not be created yet, and the system is still creating the network instance in the background. You can query the connection status of a network instance by ListErAttachments or GetErAttachment:
   *     *   If the connection status of the network instance is Executing, the network instance is being created.
   *     *   If the connection status of the network instance is Available, the network instance is created.
   * 
   * @param request - CreateErAttachmentRequest
   * @returns CreateErAttachmentResponse
   */
  async createErAttachment(request: $_model.CreateErAttachmentRequest): Promise<$_model.CreateErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErAttachmentWithOptions(request, runtime);
  }

  /**
   * Users can use this API to create routing policy by specifying the network instance connection under Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a routing policy, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have created a network instance connection.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the routing policy. In this case, the routing policy instance may not be created yet, and the system background creation task is still in progress. You can use ListErRouteMaps or GetErRouteMap to query the status of a routing policy.
   *     *   If the status of the routing policy is Execute, the system is creating the instance.
   *     *   If the status of the routing policy is Available, the creation is successful.
   * 
   * @param request - CreateErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErRouteMapResponse
   */
  async createErRouteMapWithOptions(request: $_model.CreateErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.receptionInstanceId)) {
      body["ReceptionInstanceId"] = request.receptionInstanceId;
    }

    if (!$dara.isNull(request.receptionInstanceOwner)) {
      body["ReceptionInstanceOwner"] = request.receptionInstanceOwner;
    }

    if (!$dara.isNull(request.receptionInstanceType)) {
      body["ReceptionInstanceType"] = request.receptionInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeMapAction)) {
      body["RouteMapAction"] = request.routeMapAction;
    }

    if (!$dara.isNull(request.routeMapNum)) {
      body["RouteMapNum"] = request.routeMapNum;
    }

    if (!$dara.isNull(request.transmissionInstanceId)) {
      body["TransmissionInstanceId"] = request.transmissionInstanceId;
    }

    if (!$dara.isNull(request.transmissionInstanceOwner)) {
      body["TransmissionInstanceOwner"] = request.transmissionInstanceOwner;
    }

    if (!$dara.isNull(request.transmissionInstanceType)) {
      body["TransmissionInstanceType"] = request.transmissionInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateErRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.CreateErRouteMapResponse({}));
  }

  /**
   * Users can use this API to create routing policy by specifying the network instance connection under Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a routing policy, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have created a network instance connection.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the routing policy. In this case, the routing policy instance may not be created yet, and the system background creation task is still in progress. You can use ListErRouteMaps or GetErRouteMap to query the status of a routing policy.
   *     *   If the status of the routing policy is Execute, the system is creating the instance.
   *     *   If the status of the routing policy is Available, the creation is successful.
   * 
   * @param request - CreateErRouteMapRequest
   * @returns CreateErRouteMapResponse
   */
  async createErRouteMap(request: $_model.CreateErRouteMapRequest): Promise<$_model.CreateErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErRouteMapWithOptions(request, runtime);
  }

  /**
   * Users can use this API to create a Lingjun subnet under the Lingjun network segment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun subnet, note that:
   * *   You have created a Lingjun CIDR block.
   * *   Only one network segment can be specified for a Lingjun subnet.
   * *   The network segment cannot be modified after the Lingjun subnet is created.
   * *   Make sure that you have sufficient Lingjun subnet quota.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun subnet. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListSubnets or GetSubnet operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun subnet is Executed, it indicates that it is being created.
   *     *   If the status of the Lingjun subnet is Available, the creation is successful.
   * 
   * @param request - CreateSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubnetResponse
   */
  async createSubnetWithOptions(request: $_model.CreateSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubnetResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubnetResponse({}));
  }

  /**
   * Users can use this API to create a Lingjun subnet under the Lingjun network segment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun subnet, note that:
   * *   You have created a Lingjun CIDR block.
   * *   Only one network segment can be specified for a Lingjun subnet.
   * *   The network segment cannot be modified after the Lingjun subnet is created.
   * *   Make sure that you have sufficient Lingjun subnet quota.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun subnet. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListSubnets or GetSubnet operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun subnet is Executed, it indicates that it is being created.
   *     *   If the status of the Lingjun subnet is Available, the creation is successful.
   * 
   * @param request - CreateSubnetRequest
   * @returns CreateSubnetResponse
   */
  async createSubnet(request: $_model.CreateSubnetRequest): Promise<$_model.CreateSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubnetWithOptions(request, runtime);
  }

  /**
   * You can create a Lingjun connection to connect Lingjun network environment and Alibaba Cloud network environment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun connection, note that:
   * *   When you specify the vccId parameter, the system will configure the purchased Lingjun connection for you. When the default vccId parameter is set, the system will automatically place an order and configure the Lingjun connection for you.
   * *   Make sure that you have called the InitializeVcc operation to grant permissions.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the Lingjun connection ID, but the Lingjun connection instance may not be created yet, and the system background creation task is still in progress. You can call the ListVccs or GetVcc operation to query the status of the Lingjun connection.
   *     *   If the status of the Lingjun connection is Executed, the Lingjun connection is being created.
   *     *   If the status of the Lingjun connection is Available, the Lingjun connection is created.
   * 
   * @param request - CreateVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccResponse
   */
  async createVccWithOptions(request: $_model.CreateVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessCouldService)) {
      body["AccessCouldService"] = request.accessCouldService;
    }

    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bgpAsn)) {
      body["BgpAsn"] = request.bgpAsn;
    }

    if (!$dara.isNull(request.bgpCidr)) {
      body["BgpCidr"] = request.bgpCidr;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      body["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.connectionType)) {
      body["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
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

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccName)) {
      body["VccName"] = request.vccName;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVccResponse>(await this.callApi(params, req, runtime), new $_model.CreateVccResponse({}));
  }

  /**
   * You can create a Lingjun connection to connect Lingjun network environment and Alibaba Cloud network environment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun connection, note that:
   * *   When you specify the vccId parameter, the system will configure the purchased Lingjun connection for you. When the default vccId parameter is set, the system will automatically place an order and configure the Lingjun connection for you.
   * *   Make sure that you have called the InitializeVcc operation to grant permissions.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the Lingjun connection ID, but the Lingjun connection instance may not be created yet, and the system background creation task is still in progress. You can call the ListVccs or GetVcc operation to query the status of the Lingjun connection.
   *     *   If the status of the Lingjun connection is Executed, the Lingjun connection is being created.
   *     *   If the status of the Lingjun connection is Available, the Lingjun connection is created.
   * 
   * @param request - CreateVccRequest
   * @returns CreateVccResponse
   */
  async createVcc(request: $_model.CreateVccRequest): Promise<$_model.CreateVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccWithOptions(request, runtime);
  }

  /**
   * Users can use this API to connect Lingjun instance to the Lingjun HUB instance of the target account. After authorization, the target account can be associated with your Lingjun connection by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccGrantRuleResponse
   */
  async createVccGrantRuleWithOptions(request: $_model.CreateVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVccGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateVccGrantRuleResponse({}));
  }

  /**
   * Users can use this API to connect Lingjun instance to the Lingjun HUB instance of the target account. After authorization, the target account can be associated with your Lingjun connection by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVccGrantRuleRequest
   * @returns CreateVccGrantRuleResponse
   */
  async createVccGrantRule(request: $_model.CreateVccGrantRuleRequest): Promise<$_model.CreateVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Create a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to create a VBR route entry, take note of the following items:
   * *   After you call this operation, static route entries and BGP network announcements are created on the VBR to which the Lingjun connection belongs.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entry may not be created yet, and the system still creates the static route entry in the background. You can query the status of VBR static route entries by ListVccRouteEntries or GetVccRouteEntry:
   *     *   If the VBR static route entry is in the Executing state, it indicates that it is being created.
   *     *   If the status of the VBR static route entry is Available, the VBR is created.
   * 
   * @param request - CreateVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccRouteEntryResponse
   */
  async createVccRouteEntryWithOptions(request: $_model.CreateVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVccRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateVccRouteEntryResponse({}));
  }

  /**
   * Create a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to create a VBR route entry, take note of the following items:
   * *   After you call this operation, static route entries and BGP network announcements are created on the VBR to which the Lingjun connection belongs.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entry may not be created yet, and the system still creates the static route entry in the background. You can query the status of VBR static route entries by ListVccRouteEntries or GetVccRouteEntry:
   *     *   If the VBR static route entry is in the Executing state, it indicates that it is being created.
   *     *   If the status of the VBR static route entry is Available, the VBR is created.
   * 
   * @param request - CreateVccRouteEntryRequest
   * @returns CreateVccRouteEntryResponse
   */
  async createVccRouteEntry(request: $_model.CreateVccRouteEntryRequest): Promise<$_model.CreateVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * Create a private Lingjun CIDR block. This CIDR block has an independent network environment.
   * 
   * @remarks
   * When you call this operation to create a CIDR block for Lingjun, take note of the following:
   * *   A Lingjun network segment can specify an additional network segment in addition to a main network segment.
   * *   After the Lingjun network segment is created, the network segment cannot be modified.
   * *   Make sure that you have a sufficient quota of Lingjun CIDR blocks.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun network segment. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListVpds or GetVpd operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun CIDR block is Executed, the CIDR block is being created.
   *     *   If the status of the Lingjun CIDR block is Available, the creation is successful.
   * 
   * @param request - CreateVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpdResponse
   */
  async createVpdWithOptions(request: $_model.CreateVpdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subnets)) {
      body["Subnets"] = request.subnets;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpdResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpdResponse({}));
  }

  /**
   * Create a private Lingjun CIDR block. This CIDR block has an independent network environment.
   * 
   * @remarks
   * When you call this operation to create a CIDR block for Lingjun, take note of the following:
   * *   A Lingjun network segment can specify an additional network segment in addition to a main network segment.
   * *   After the Lingjun network segment is created, the network segment cannot be modified.
   * *   Make sure that you have a sufficient quota of Lingjun CIDR blocks.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun network segment. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListVpds or GetVpd operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun CIDR block is Executed, the CIDR block is being created.
   *     *   If the status of the Lingjun CIDR block is Available, the creation is successful.
   * 
   * @param request - CreateVpdRequest
   * @returns CreateVpdResponse
   */
  async createVpd(request: $_model.CreateVpdRequest): Promise<$_model.CreateVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpdWithOptions(request, runtime);
  }

  /**
   * Users can use this API to authorize Lingjun HUB instances of the target account. After authorization, the target account can be associated with your Lingjun CIDR block by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpdGrantRuleResponse
   */
  async createVpdGrantRuleWithOptions(request: $_model.CreateVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpdGrantRuleResponse({}));
  }

  /**
   * Users can use this API to authorize Lingjun HUB instances of the target account. After authorization, the target account can be associated with your Lingjun CIDR block by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVpdGrantRuleRequest
   * @returns CreateVpdGrantRuleResponse
   */
  async createVpdGrantRule(request: $_model.CreateVpdGrantRuleRequest): Promise<$_model.CreateVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Delete Lingjun Elastic Network Interface. After deletion, all relevant data will be lost and cannot be recovered. Please operate with caution.
   * 
   * @param request - DeleteElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticNetworkInterfaceResponse
   */
  async deleteElasticNetworkInterfaceWithOptions(request: $_model.DeleteElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteElasticNetworkInterfaceResponse({}));
  }

  /**
   * Delete Lingjun Elastic Network Interface. After deletion, all relevant data will be lost and cannot be recovered. Please operate with caution.
   * 
   * @param request - DeleteElasticNetworkInterfaceRequest
   * @returns DeleteElasticNetworkInterfaceResponse
   */
  async deleteElasticNetworkInterface(request: $_model.DeleteElasticNetworkInterfaceRequest): Promise<$_model.DeleteElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * After you delete a Lingjun HUB instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete the Lingjun HUB, note that:
   * *   Before you delete the instance, make sure that no network instance is connected to the Lingjun HUB instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun HUB instance may not be deleted, and the system background deletion task is still in progress. You can call the ListErs or GetEr operation to query the deletion status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Deleting, the Lingjun HUB instance is being deleted.
   *     *   If no Lingjun HUB instance is recorded, the Lingjun HUB instance has been deleted.
   * 
   * @param request - DeleteErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErResponse
   */
  async deleteErWithOptions(request: $_model.DeleteErRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteErResponse>(await this.callApi(params, req, runtime), new $_model.DeleteErResponse({}));
  }

  /**
   * After you delete a Lingjun HUB instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete the Lingjun HUB, note that:
   * *   Before you delete the instance, make sure that no network instance is connected to the Lingjun HUB instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun HUB instance may not be deleted, and the system background deletion task is still in progress. You can call the ListErs or GetEr operation to query the deletion status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Deleting, the Lingjun HUB instance is being deleted.
   *     *   If no Lingjun HUB instance is recorded, the Lingjun HUB instance has been deleted.
   * 
   * @param request - DeleteErRequest
   * @returns DeleteErResponse
   */
  async deleteEr(request: $_model.DeleteErRequest): Promise<$_model.DeleteErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErWithOptions(request, runtime);
  }

  /**
   * If you delete a network instance that is connected to an instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a network instance connection, take note of the following:
   * *   Before you delete the instance, make sure that no routing policy exists under the network instance connection instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the network instance that is connected to the instance may not be deleted. The system still deletes the instance in the background. You can call the ListErAttachments or GetErAttachment to query the deletion status of network instance connections:
   *     *   If the status of the network instance connection is Deleting, the network instance connection is being deleted.
   *     *   If there is no connection record for the network instance, the connection to the network instance has been deleted.
   * 
   * @param request - DeleteErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErAttachmentResponse
   */
  async deleteErAttachmentWithOptions(request: $_model.DeleteErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteErAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteErAttachmentResponse({}));
  }

  /**
   * If you delete a network instance that is connected to an instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a network instance connection, take note of the following:
   * *   Before you delete the instance, make sure that no routing policy exists under the network instance connection instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the network instance that is connected to the instance may not be deleted. The system still deletes the instance in the background. You can call the ListErAttachments or GetErAttachment to query the deletion status of network instance connections:
   *     *   If the status of the network instance connection is Deleting, the network instance connection is being deleted.
   *     *   If there is no connection record for the network instance, the connection to the network instance has been deleted.
   * 
   * @param request - DeleteErAttachmentRequest
   * @returns DeleteErAttachmentResponse
   */
  async deleteErAttachment(request: $_model.DeleteErAttachmentRequest): Promise<$_model.DeleteErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErAttachmentWithOptions(request, runtime);
  }

  /**
   * If you delete a routing policy instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a routing policy, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the routing policy instance may not be deleted yet, and the system background deletion task is still in progress. You can call the ListErRouteMaps or GetErRouteMap operation to query the deletion status of a routing policy.
   *     *   If the routing policy is in the Deleting state, the routing policy instance is being deleted.
   *     *   If no routing policy instance is recorded, the routing policy instance has been deleted.
   * 
   * @param request - DeleteErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErRouteMapResponse
   */
  async deleteErRouteMapWithOptions(request: $_model.DeleteErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapIds)) {
      body["ErRouteMapIds"] = request.erRouteMapIds;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteErRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.DeleteErRouteMapResponse({}));
  }

  /**
   * If you delete a routing policy instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a routing policy, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the routing policy instance may not be deleted yet, and the system background deletion task is still in progress. You can call the ListErRouteMaps or GetErRouteMap operation to query the deletion status of a routing policy.
   *     *   If the routing policy is in the Deleting state, the routing policy instance is being deleted.
   *     *   If no routing policy instance is recorded, the routing policy instance has been deleted.
   * 
   * @param request - DeleteErRouteMapRequest
   * @returns DeleteErRouteMapResponse
   */
  async deleteErRouteMap(request: $_model.DeleteErRouteMapRequest): Promise<$_model.DeleteErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErRouteMapWithOptions(request, runtime);
  }

  /**
   * If you delete a Lingjun subnet instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun subnet, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun subnet instance may not be deleted, and the system background deletion task is still in progress. You can call the ListSubnets or GetSubnet operation to query the deletion status of the subnet.
   *     *   If the status of the Lingjun subnet is Deleting, the Lingjun subnet instance is being deleted.
   *     *   If there is no record of the Lingjun subnet instance, the Lingjun subnet instance has been deleted.
   * 
   * @param request - DeleteSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubnetResponse
   */
  async deleteSubnetWithOptions(request: $_model.DeleteSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubnetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubnetResponse({}));
  }

  /**
   * If you delete a Lingjun subnet instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun subnet, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun subnet instance may not be deleted, and the system background deletion task is still in progress. You can call the ListSubnets or GetSubnet operation to query the deletion status of the subnet.
   *     *   If the status of the Lingjun subnet is Deleting, the Lingjun subnet instance is being deleted.
   *     *   If there is no record of the Lingjun subnet instance, the Lingjun subnet instance has been deleted.
   * 
   * @param request - DeleteSubnetRequest
   * @returns DeleteSubnetResponse
   */
  async deleteSubnet(request: $_model.DeleteSubnetRequest): Promise<$_model.DeleteSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubnetWithOptions(request, runtime);
  }

  /**
   * If you delete a Lingjun HUB cross-account authorization that is connected to Lingjun, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVccGrantRuleResponse
   */
  async deleteVccGrantRuleWithOptions(request: $_model.DeleteVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVccGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVccGrantRuleResponse({}));
  }

  /**
   * If you delete a Lingjun HUB cross-account authorization that is connected to Lingjun, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVccGrantRuleRequest
   * @returns DeleteVccGrantRuleResponse
   */
  async deleteVccGrantRule(request: $_model.DeleteVccGrantRuleRequest): Promise<$_model.DeleteVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Delete a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to delete a VBR static route entry, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entries may not be deleted. The system still deletes the VBR static route entries in the background. You can call the ListVccRouteEntries or GetVccRouteEntry to query the deletion status of VBR static route entries:
   *     *   If the VBR static route entry is in the Deleting state, the VBR static route entry is being deleted.
   *     *   If no VBR static route entry instance is recorded, the VBR static route entry instance has been deleted.
   * 
   * @param request - DeleteVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVccRouteEntryResponse
   */
  async deleteVccRouteEntryWithOptions(request: $_model.DeleteVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccRouteEntryId)) {
      body["VccRouteEntryId"] = request.vccRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVccRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVccRouteEntryResponse({}));
  }

  /**
   * Delete a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to delete a VBR static route entry, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entries may not be deleted. The system still deletes the VBR static route entries in the background. You can call the ListVccRouteEntries or GetVccRouteEntry to query the deletion status of VBR static route entries:
   *     *   If the VBR static route entry is in the Deleting state, the VBR static route entry is being deleted.
   *     *   If no VBR static route entry instance is recorded, the VBR static route entry instance has been deleted.
   * 
   * @param request - DeleteVccRouteEntryRequest
   * @returns DeleteVccRouteEntryResponse
   */
  async deleteVccRouteEntry(request: $_model.DeleteVccRouteEntryRequest): Promise<$_model.DeleteVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * After you delete a Lingjun CIDR block, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun CIDR block, take note of the following items:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   Before deleting, make sure that all Lingjun subnet instances under the Lingjun CIDR block have been deleted.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun network segment instance may not be deleted, and the system background deletion task is still in progress. You can call the ListVpds or GetVpd operation to query the deletion status of the CIDR block.
   *     *   If the status of the Lingjun CIDR block is Deleting, the Lingjun CIDR block is being deleted.
   *     *   If there is no record of the Lingjun CIDR block instance, the Lingjun CIDR block instance has been deleted.
   * 
   * @param request - DeleteVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpdResponse
   */
  async deleteVpdWithOptions(request: $_model.DeleteVpdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpdResponse({}));
  }

  /**
   * After you delete a Lingjun CIDR block, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun CIDR block, take note of the following items:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   Before deleting, make sure that all Lingjun subnet instances under the Lingjun CIDR block have been deleted.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun network segment instance may not be deleted, and the system background deletion task is still in progress. You can call the ListVpds or GetVpd operation to query the deletion status of the CIDR block.
   *     *   If the status of the Lingjun CIDR block is Deleting, the Lingjun CIDR block is being deleted.
   *     *   If there is no record of the Lingjun CIDR block instance, the Lingjun CIDR block instance has been deleted.
   * 
   * @param request - DeleteVpdRequest
   * @returns DeleteVpdResponse
   */
  async deleteVpd(request: $_model.DeleteVpdRequest): Promise<$_model.DeleteVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpdWithOptions(request, runtime);
  }

  /**
   * Delete the Lingjun HUB cross-account authorization for a Lingjun CIDR block. After the deletion, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpdGrantRuleResponse
   */
  async deleteVpdGrantRuleWithOptions(request: $_model.DeleteVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpdGrantRuleResponse({}));
  }

  /**
   * Delete the Lingjun HUB cross-account authorization for a Lingjun CIDR block. After the deletion, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVpdGrantRuleRequest
   * @returns DeleteVpdGrantRuleResponse
   */
  async deleteVpdGrantRule(request: $_model.DeleteVpdGrantRuleRequest): Promise<$_model.DeleteVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Query whether the user has the SLR role-AliyunServiceRoleForEfloVcc required for Lingjun connection.
   * 
   * @remarks
   * You can call this operation to query whether a user account has a **AliyunServiceRoleForEfloVcc** role.
   * >  If you do not have a **AliyunServiceRoleForEfloVcc** role, you need to use the initializeVcc interface to complete authorization, otherwise users will not be able to use Lingjun to connect to the product.
   * 
   * @param request - DescribeSlrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlrResponse
   */
  async describeSlrWithOptions(request: $_model.DescribeSlrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlrResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlrResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlrResponse({}));
  }

  /**
   * Query whether the user has the SLR role-AliyunServiceRoleForEfloVcc required for Lingjun connection.
   * 
   * @remarks
   * You can call this operation to query whether a user account has a **AliyunServiceRoleForEfloVcc** role.
   * >  If you do not have a **AliyunServiceRoleForEfloVcc** role, you need to use the initializeVcc interface to complete authorization, otherwise users will not be able to use Lingjun to connect to the product.
   * 
   * @param request - DescribeSlrRequest
   * @returns DescribeSlrResponse
   */
  async describeSlr(request: $_model.DescribeSlrRequest): Promise<$_model.DescribeSlrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlrWithOptions(request, runtime);
  }

  /**
   * Unbind Lingjun ENI from NC.
   * 
   * @remarks
   * This interface is an asynchronous interface, and you need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the unbound state.
   * 
   * @param request - DetachElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachElasticNetworkInterfaceResponse
   */
  async detachElasticNetworkInterfaceWithOptions(request: $_model.DetachElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.DetachElasticNetworkInterfaceResponse({}));
  }

  /**
   * Unbind Lingjun ENI from NC.
   * 
   * @remarks
   * This interface is an asynchronous interface, and you need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the unbound state.
   * 
   * @param request - DetachElasticNetworkInterfaceRequest
   * @returns DetachElasticNetworkInterfaceResponse
   */
  async detachElasticNetworkInterface(request: $_model.DetachElasticNetworkInterfaceRequest): Promise<$_model.DetachElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Users can use this API to query the destination CIDR block of the source policy instance when creating a routing strategy.
   * 
   * @param request - GetDestinationCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDestinationCidrBlockResponse
   */
  async getDestinationCidrBlockWithOptions(request: $_model.GetDestinationCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDestinationCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDestinationCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDestinationCidrBlockResponse>(await this.callApi(params, req, runtime), new $_model.GetDestinationCidrBlockResponse({}));
  }

  /**
   * Users can use this API to query the destination CIDR block of the source policy instance when creating a routing strategy.
   * 
   * @param request - GetDestinationCidrBlockRequest
   * @returns GetDestinationCidrBlockResponse
   */
  async getDestinationCidrBlock(request: $_model.GetDestinationCidrBlockRequest): Promise<$_model.GetDestinationCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDestinationCidrBlockWithOptions(request, runtime);
  }

  /**
   * Queries the details of an LENI.
   * 
   * @param request - GetElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElasticNetworkInterfaceResponse
   */
  async getElasticNetworkInterfaceWithOptions(request: $_model.GetElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.GetElasticNetworkInterfaceResponse({}));
  }

  /**
   * Queries the details of an LENI.
   * 
   * @param request - GetElasticNetworkInterfaceRequest
   * @returns GetElasticNetworkInterfaceResponse
   */
  async getElasticNetworkInterface(request: $_model.GetElasticNetworkInterfaceRequest): Promise<$_model.GetElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - GetErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErResponse
   */
  async getErWithOptions(request: $_model.GetErRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErResponse>(await this.callApi(params, req, runtime), new $_model.GetErResponse({}));
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - GetErRequest
   * @returns GetErResponse
   */
  async getEr(request: $_model.GetErRequest): Promise<$_model.GetErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErWithOptions(request, runtime);
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - GetErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErAttachmentResponse
   */
  async getErAttachmentWithOptions(request: $_model.GetErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetErAttachmentResponse({}));
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - GetErAttachmentRequest
   * @returns GetErAttachmentResponse
   */
  async getErAttachment(request: $_model.GetErAttachmentRequest): Promise<$_model.GetErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries the details of Lingjun HUB route entries.
   * 
   * @param request - GetErRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErRouteEntryResponse
   */
  async getErRouteEntryWithOptions(request: $_model.GetErRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteEntryId)) {
      body["ErRouteEntryId"] = request.erRouteEntryId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.GetErRouteEntryResponse({}));
  }

  /**
   * Queries the details of Lingjun HUB route entries.
   * 
   * @param request - GetErRouteEntryRequest
   * @returns GetErRouteEntryResponse
   */
  async getErRouteEntry(request: $_model.GetErRouteEntryRequest): Promise<$_model.GetErRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErRouteEntryWithOptions(request, runtime);
  }

  /**
   * query lingjun hub routing policy details.
   * 
   * @param request - GetErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErRouteMapResponse
   */
  async getErRouteMapWithOptions(request: $_model.GetErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.GetErRouteMapResponse({}));
  }

  /**
   * query lingjun hub routing policy details.
   * 
   * @param request - GetErRouteMapRequest
   * @returns GetErRouteMapResponse
   */
  async getErRouteMap(request: $_model.GetErRouteMapRequest): Promise<$_model.GetErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErRouteMapWithOptions(request, runtime);
  }

  /**
   * Query the physical topology information of Lingjun network interface controller and Lingjun nodes under VPD.
   * 
   * @param request - GetFabricTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFabricTopologyResponse
   */
  async getFabricTopologyWithOptions(request: $_model.GetFabricTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFabricTopologyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.lniIds)) {
      body["LniIds"] = request.lniIds;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFabricTopology",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFabricTopologyResponse>(await this.callApi(params, req, runtime), new $_model.GetFabricTopologyResponse({}));
  }

  /**
   * Query the physical topology information of Lingjun network interface controller and Lingjun nodes under VPD.
   * 
   * @param request - GetFabricTopologyRequest
   * @returns GetFabricTopologyResponse
   */
  async getFabricTopology(request: $_model.GetFabricTopologyRequest): Promise<$_model.GetFabricTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFabricTopologyWithOptions(request, runtime);
  }

  /**
   * Obtains the details of the secondary private IP address of a specified Lingjun Elastic Network Interface.
   * 
   * @param request - GetLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLeniPrivateIpAddressResponse
   */
  async getLeniPrivateIpAddressWithOptions(request: $_model.GetLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.GetLeniPrivateIpAddressResponse({}));
  }

  /**
   * Obtains the details of the secondary private IP address of a specified Lingjun Elastic Network Interface.
   * 
   * @param request - GetLeniPrivateIpAddressRequest
   * @returns GetLeniPrivateIpAddressResponse
   */
  async getLeniPrivateIpAddress(request: $_model.GetLeniPrivateIpAddressRequest): Promise<$_model.GetLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Obtains the details about the secondary private IP address.
   * 
   * @param request - GetLniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLniPrivateIpAddressResponse
   */
  async getLniPrivateIpAddressWithOptions(request: $_model.GetLniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.GetLniPrivateIpAddressResponse({}));
  }

  /**
   * Obtains the details about the secondary private IP address.
   * 
   * @param request - GetLniPrivateIpAddressRequest
   * @returns GetLniPrivateIpAddressResponse
   */
  async getLniPrivateIpAddress(request: $_model.GetLniPrivateIpAddressRequest): Promise<$_model.GetLniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries information about an LNI.
   * 
   * @param request - GetNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkInterfaceResponse
   */
  async getNetworkInterfaceWithOptions(request: $_model.GetNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkInterfaceResponse({}));
  }

  /**
   * Queries information about an LNI.
   * 
   * @param request - GetNetworkInterfaceRequest
   * @returns GetNetworkInterfaceResponse
   */
  async getNetworkInterface(request: $_model.GetNetworkInterfaceRequest): Promise<$_model.GetNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Queries the network information of a node.
   * 
   * @param request - GetNodeInfoForPodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeInfoForPodResponse
   */
  async getNodeInfoForPodWithOptions(request: $_model.GetNodeInfoForPodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeInfoForPodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeInfoForPod",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeInfoForPodResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeInfoForPodResponse({}));
  }

  /**
   * Queries the network information of a node.
   * 
   * @param request - GetNodeInfoForPodRequest
   * @returns GetNodeInfoForPodResponse
   */
  async getNodeInfoForPod(request: $_model.GetNodeInfoForPodRequest): Promise<$_model.GetNodeInfoForPodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeInfoForPodWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun subnet, including the type, CIDR block, instance ID, instance status, and number of NCs.
   * 
   * @param request - GetSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubnetResponse
   */
  async getSubnetWithOptions(request: $_model.GetSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubnetResponse>(await this.callApi(params, req, runtime), new $_model.GetSubnetResponse({}));
  }

  /**
   * Queries the details of a Lingjun subnet, including the type, CIDR block, instance ID, instance status, and number of NCs.
   * 
   * @param request - GetSubnetRequest
   * @returns GetSubnetResponse
   */
  async getSubnet(request: $_model.GetSubnetRequest): Promise<$_model.GetSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubnetWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun connection, including the specification, Express Connect circuit access port type, instance status, bandwidth, and BGP CIDR block.
   * 
   * @param request - GetVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccResponse
   */
  async getVccWithOptions(request: $_model.GetVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVccResponse>(await this.callApi(params, req, runtime), new $_model.GetVccResponse({}));
  }

  /**
   * Queries the details of a Lingjun connection, including the specification, Express Connect circuit access port type, instance status, bandwidth, and BGP CIDR block.
   * 
   * @param request - GetVccRequest
   * @returns GetVccResponse
   */
  async getVcc(request: $_model.GetVccRequest): Promise<$_model.GetVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccWithOptions(request, runtime);
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun connection, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccGrantRuleResponse
   */
  async getVccGrantRuleWithOptions(request: $_model.GetVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVccGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetVccGrantRuleResponse({}));
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun connection, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVccGrantRuleRequest
   * @returns GetVccGrantRuleResponse
   */
  async getVccGrantRule(request: $_model.GetVccGrantRuleRequest): Promise<$_model.GetVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccRouteEntryResponse
   */
  async getVccRouteEntryWithOptions(request: $_model.GetVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccRouteEntryId)) {
      body["VccRouteEntryId"] = request.vccRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVccRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.GetVccRouteEntryResponse({}));
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVccRouteEntryRequest
   * @returns GetVccRouteEntryResponse
   */
  async getVccRouteEntry(request: $_model.GetVccRouteEntryRequest): Promise<$_model.GetVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun CIDR block, including the status of the Lingjun CIDR block, the CIDR block, the number of subnets and NCs.
   * 
   * @param request - GetVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdResponse
   */
  async getVpdWithOptions(request: $_model.GetVpdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpdResponse>(await this.callApi(params, req, runtime), new $_model.GetVpdResponse({}));
  }

  /**
   * Queries the details of a Lingjun CIDR block, including the status of the Lingjun CIDR block, the CIDR block, the number of subnets and NCs.
   * 
   * @param request - GetVpdRequest
   * @returns GetVpdResponse
   */
  async getVpd(request: $_model.GetVpdRequest): Promise<$_model.GetVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdWithOptions(request, runtime);
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun CIDR block, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdGrantRuleResponse
   */
  async getVpdGrantRuleWithOptions(request: $_model.GetVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetVpdGrantRuleResponse({}));
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun CIDR block, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVpdGrantRuleRequest
   * @returns GetVpdGrantRuleResponse
   */
  async getVpdGrantRule(request: $_model.GetVpdGrantRuleRequest): Promise<$_model.GetVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVpdRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdRouteEntryResponse
   */
  async getVpdRouteEntryWithOptions(request: $_model.GetVpdRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpdRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpdRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpdRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.GetVpdRouteEntryResponse({}));
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVpdRouteEntryRequest
   * @returns GetVpdRouteEntryResponse
   */
  async getVpdRouteEntry(request: $_model.GetVpdRouteEntryRequest): Promise<$_model.GetVpdRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdRouteEntryWithOptions(request, runtime);
  }

  /**
   * Initialize the Lingjun connection and authorize Intelligent Computing Lingjun to create an SLR in your account.
   * 
   * @param request - InitializeVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeVccResponse
   */
  async initializeVccWithOptions(request: $_model.InitializeVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeVccResponse>(await this.callApi(params, req, runtime), new $_model.InitializeVccResponse({}));
  }

  /**
   * Initialize the Lingjun connection and authorize Intelligent Computing Lingjun to create an SLR in your account.
   * 
   * @param request - InitializeVccRequest
   * @returns InitializeVccResponse
   */
  async initializeVcc(request: $_model.InitializeVccRequest): Promise<$_model.InitializeVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeVccWithOptions(request, runtime);
  }

  /**
   * Queries the LENIs that are associated with a Lingjun node.
   * 
   * @param request - ListElasticNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListElasticNetworkInterfacesResponse
   */
  async listElasticNetworkInterfacesWithOptions(request: $_model.ListElasticNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListElasticNetworkInterfacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListElasticNetworkInterfaces",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListElasticNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new $_model.ListElasticNetworkInterfacesResponse({}));
  }

  /**
   * Queries the LENIs that are associated with a Lingjun node.
   * 
   * @param request - ListElasticNetworkInterfacesRequest
   * @returns ListElasticNetworkInterfacesResponse
   */
  async listElasticNetworkInterfaces(request: $_model.ListElasticNetworkInterfacesRequest): Promise<$_model.ListElasticNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listElasticNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - ListErAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErAttachmentsResponse
   */
  async listErAttachmentsWithOptions(request: $_model.ListErAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListErAttachmentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoReceiveAllRoute)) {
      body["AutoReceiveAllRoute"] = request.autoReceiveAllRoute;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTenantId)) {
      body["ResourceTenantId"] = request.resourceTenantId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErAttachments",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListErAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListErAttachmentsResponse({}));
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - ListErAttachmentsRequest
   * @returns ListErAttachmentsResponse
   */
  async listErAttachments(request: $_model.ListErAttachmentsRequest): Promise<$_model.ListErAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of the Lingjun HUB.
   * 
   * @param request - ListErRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErRouteEntriesResponse
   */
  async listErRouteEntriesWithOptions(request: $_model.ListErRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListErRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListErRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListErRouteEntriesResponse({}));
  }

  /**
   * Queries the route entries of the Lingjun HUB.
   * 
   * @param request - ListErRouteEntriesRequest
   * @returns ListErRouteEntriesResponse
   */
  async listErRouteEntries(request: $_model.ListErRouteEntriesRequest): Promise<$_model.ListErRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Routing policies are queried.
   * 
   * @param request - ListErRouteMapsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErRouteMapsResponse
   */
  async listErRouteMapsWithOptions(request: $_model.ListErRouteMapsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListErRouteMapsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.erRouteMapNum)) {
      body["ErRouteMapNum"] = request.erRouteMapNum;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.receptionInstanceId)) {
      body["ReceptionInstanceId"] = request.receptionInstanceId;
    }

    if (!$dara.isNull(request.receptionInstanceName)) {
      body["ReceptionInstanceName"] = request.receptionInstanceName;
    }

    if (!$dara.isNull(request.receptionInstanceType)) {
      body["ReceptionInstanceType"] = request.receptionInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeMapAction)) {
      body["RouteMapAction"] = request.routeMapAction;
    }

    if (!$dara.isNull(request.transmissionInstanceId)) {
      body["TransmissionInstanceId"] = request.transmissionInstanceId;
    }

    if (!$dara.isNull(request.transmissionInstanceName)) {
      body["TransmissionInstanceName"] = request.transmissionInstanceName;
    }

    if (!$dara.isNull(request.transmissionInstanceType)) {
      body["TransmissionInstanceType"] = request.transmissionInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErRouteMaps",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListErRouteMapsResponse>(await this.callApi(params, req, runtime), new $_model.ListErRouteMapsResponse({}));
  }

  /**
   * Routing policies are queried.
   * 
   * @param request - ListErRouteMapsRequest
   * @returns ListErRouteMapsResponse
   */
  async listErRouteMaps(request: $_model.ListErRouteMapsRequest): Promise<$_model.ListErRouteMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErRouteMapsWithOptions(request, runtime);
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - ListErsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErsResponse
   */
  async listErsWithOptions(request: $_model.ListErsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListErsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      body["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErs",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListErsResponse>(await this.callApi(params, req, runtime), new $_model.ListErsResponse({}));
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - ListErsRequest
   * @returns ListErsResponse
   */
  async listErs(request: $_model.ListErsRequest): Promise<$_model.ListErsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErsWithOptions(request, runtime);
  }

  /**
   * Queries the GPU node list of a specified GPU node whose communication distance does not exceed the specified NCD.
   * 
   * @param request - ListInstancesByNcdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesByNcdResponse
   */
  async listInstancesByNcdWithOptions(request: $_model.ListInstancesByNcdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesByNcdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.maxNcd)) {
      body["MaxNcd"] = request.maxNcd;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesByNcd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesByNcdResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesByNcdResponse({}));
  }

  /**
   * Queries the GPU node list of a specified GPU node whose communication distance does not exceed the specified NCD.
   * 
   * @param request - ListInstancesByNcdRequest
   * @returns ListInstancesByNcdResponse
   */
  async listInstancesByNcd(request: $_model.ListInstancesByNcdRequest): Promise<$_model.ListInstancesByNcdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesByNcdWithOptions(request, runtime);
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun Elastic Network Interface.
   * 
   * @param request - ListLeniPrivateIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLeniPrivateIpAddressesResponse
   */
  async listLeniPrivateIpAddressesWithOptions(request: $_model.ListLeniPrivateIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLeniPrivateIpAddressesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLeniPrivateIpAddresses",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLeniPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new $_model.ListLeniPrivateIpAddressesResponse({}));
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun Elastic Network Interface.
   * 
   * @param request - ListLeniPrivateIpAddressesRequest
   * @returns ListLeniPrivateIpAddressesResponse
   */
  async listLeniPrivateIpAddresses(request: $_model.ListLeniPrivateIpAddressesRequest): Promise<$_model.ListLeniPrivateIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLeniPrivateIpAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun network interface controller.
   * 
   * @param request - ListLniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLniPrivateIpAddressResponse
   */
  async listLniPrivateIpAddressWithOptions(request: $_model.ListLniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.ListLniPrivateIpAddressResponse({}));
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun network interface controller.
   * 
   * @param request - ListLniPrivateIpAddressRequest
   * @returns ListLniPrivateIpAddressResponse
   */
  async listLniPrivateIpAddress(request: $_model.ListLniPrivateIpAddressRequest): Promise<$_model.ListLniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries Lingjun network interfaces (LNIs).
   * 
   * @param request - ListNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkInterfacesResponse
   */
  async listNetworkInterfacesWithOptions(request: $_model.ListNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkInterfacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkInterfaces",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkInterfacesResponse({}));
  }

  /**
   * Queries Lingjun network interfaces (LNIs).
   * 
   * @param request - ListNetworkInterfacesRequest
   * @returns ListNetworkInterfacesResponse
   */
  async listNetworkInterfaces(request: $_model.ListNetworkInterfacesRequest): Promise<$_model.ListNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Queries node network information.
   * 
   * @param request - ListNodeInfosForPodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeInfosForPodResponse
   */
  async listNodeInfosForPodWithOptions(request: $_model.ListNodeInfosForPodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeInfosForPodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeInfosForPod",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeInfosForPodResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeInfosForPodResponse({}));
  }

  /**
   * Queries node network information.
   * 
   * @param request - ListNodeInfosForPodRequest
   * @returns ListNodeInfosForPodResponse
   */
  async listNodeInfosForPod(request: $_model.ListNodeInfosForPodRequest): Promise<$_model.ListNodeInfosForPodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeInfosForPodWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the details of one or more Lingjun subnets, including the Lingjun subnet type, network address segment, and instance ID of the Lingjun CIDR block.
   * 
   * @param request - ListSubnetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubnetsResponse
   */
  async listSubnetsWithOptions(request: $_model.ListSubnetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubnetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubnets",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubnetsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubnetsResponse({}));
  }

  /**
   * You can call this operation to query the details of one or more Lingjun subnets, including the Lingjun subnet type, network address segment, and instance ID of the Lingjun CIDR block.
   * 
   * @param request - ListSubnetsRequest
   * @returns ListSubnetsResponse
   */
  async listSubnets(request: $_model.ListSubnetsRequest): Promise<$_model.ListSubnetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubnetsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic rate of a Lingjun connection.
   * 
   * @param request - ListVccFlowInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccFlowInfosResponse
   */
  async listVccFlowInfosWithOptions(request: $_model.ListVccFlowInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVccFlowInfosResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.direction)) {
      body["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.metricName)) {
      body["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.to)) {
      body["To"] = request.to;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccFlowInfos",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVccFlowInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListVccFlowInfosResponse({}));
  }

  /**
   * Queries the traffic rate of a Lingjun connection.
   * 
   * @param request - ListVccFlowInfosRequest
   * @returns ListVccFlowInfosResponse
   */
  async listVccFlowInfos(request: $_model.ListVccFlowInfosRequest): Promise<$_model.ListVccFlowInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccFlowInfosWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun connection authorization, including the authorized tenant ID, region, and Lingjun HUB instance information.
   * 
   * @param request - ListVccGrantRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccGrantRulesResponse
   */
  async listVccGrantRulesWithOptions(request: $_model.ListVccGrantRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVccGrantRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccGrantRules",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVccGrantRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListVccGrantRulesResponse({}));
  }

  /**
   * Queries the details of a Lingjun connection authorization, including the authorized tenant ID, region, and Lingjun HUB instance information.
   * 
   * @param request - ListVccGrantRulesRequest
   * @returns ListVccGrantRulesResponse
   */
  async listVccGrantRules(request: $_model.ListVccGrantRulesRequest): Promise<$_model.ListVccGrantRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccGrantRulesWithOptions(request, runtime);
  }

  /**
   * Queries Lingjun connection route entries.
   * 
   * @param request - ListVccRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccRouteEntriesResponse
   */
  async listVccRouteEntriesWithOptions(request: $_model.ListVccRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVccRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVccRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListVccRouteEntriesResponse({}));
  }

  /**
   * Queries Lingjun connection route entries.
   * 
   * @param request - ListVccRouteEntriesRequest
   * @returns ListVccRouteEntriesResponse
   */
  async listVccRouteEntries(request: $_model.ListVccRouteEntriesRequest): Promise<$_model.ListVccRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccRouteEntriesWithOptions(request, runtime);
  }

  /**
   * query the details of one or more lingjun connections, including the specification, Express Connect circuit access port type, instance status, bandwidth, and bgp network segment.
   * 
   * @param request - ListVccsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccsResponse
   */
  async listVccsWithOptions(request: $_model.ListVccsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVccsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.exStatus)) {
      body["ExStatus"] = request.exStatus;
    }

    if (!$dara.isNull(request.filterErId)) {
      body["FilterErId"] = request.filterErId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccs",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVccsResponse>(await this.callApi(params, req, runtime), new $_model.ListVccsResponse({}));
  }

  /**
   * query the details of one or more lingjun connections, including the specification, Express Connect circuit access port type, instance status, bandwidth, and bgp network segment.
   * 
   * @param request - ListVccsRequest
   * @returns ListVccsResponse
   */
  async listVccs(request: $_model.ListVccsRequest): Promise<$_model.ListVccsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccsWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more route entries in the CIDR block of Lingjun, including the route type, route entry status, destination CIDR block, and instance information of the next route entry.
   * 
   * @param request - ListVpdGrantRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdGrantRulesResponse
   */
  async listVpdGrantRulesWithOptions(request: $_model.ListVpdGrantRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpdGrantRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpdGrantRules",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpdGrantRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListVpdGrantRulesResponse({}));
  }

  /**
   * Queries the details of one or more route entries in the CIDR block of Lingjun, including the route type, route entry status, destination CIDR block, and instance information of the next route entry.
   * 
   * @param request - ListVpdGrantRulesRequest
   * @returns ListVpdGrantRulesResponse
   */
  async listVpdGrantRules(request: $_model.ListVpdGrantRulesRequest): Promise<$_model.ListVpdGrantRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdGrantRulesWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of the Lingjun CIDR block.
   * 
   * @param request - ListVpdRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdRouteEntriesResponse
   */
  async listVpdRouteEntriesWithOptions(request: $_model.ListVpdRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpdRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpdRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpdRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListVpdRouteEntriesResponse({}));
  }

  /**
   * Queries the route entries of the Lingjun CIDR block.
   * 
   * @param request - ListVpdRouteEntriesRequest
   * @returns ListVpdRouteEntriesResponse
   */
  async listVpdRouteEntries(request: $_model.ListVpdRouteEntriesRequest): Promise<$_model.ListVpdRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more Lingjun CIDR blocks, including the status of Lingjun CIDR blocks, Cidr addresses, service CIDR blocks, and Subnet.
   * 
   * @param request - ListVpdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdsResponse
   */
  async listVpdsWithOptions(request: $_model.ListVpdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpdsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.filterErId)) {
      body["FilterErId"] = request.filterErId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    if (!$dara.isNull(request.withDependence)) {
      body["WithDependence"] = request.withDependence;
    }

    if (!$dara.isNull(request.withoutVcc)) {
      body["WithoutVcc"] = request.withoutVcc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpds",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpdsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpdsResponse({}));
  }

  /**
   * Queries the details of one or more Lingjun CIDR blocks, including the status of Lingjun CIDR blocks, Cidr addresses, service CIDR blocks, and Subnet.
   * 
   * @param request - ListVpdsRequest
   * @returns ListVpdsResponse
   */
  async listVpds(request: $_model.ListVpdsRequest): Promise<$_model.ListVpdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdsWithOptions(request, runtime);
  }

  /**
   * Query the network communication distance (Network Communication Distance,NCD) between instances (Lingjun node, Lingjun network interface controller).
   * 
   * @param request - QueryInstanceNcdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceNcdResponse
   */
  async queryInstanceNcdWithOptions(request: $_model.QueryInstanceNcdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceNcdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId1)) {
      body["InstanceId1"] = request.instanceId1;
    }

    if (!$dara.isNull(request.instanceId2)) {
      body["InstanceId2"] = request.instanceId2;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstanceNcd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceNcdResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceNcdResponse({}));
  }

  /**
   * Query the network communication distance (Network Communication Distance,NCD) between instances (Lingjun node, Lingjun network interface controller).
   * 
   * @param request - QueryInstanceNcdRequest
   * @returns QueryInstanceNcdResponse
   */
  async queryInstanceNcd(request: $_model.QueryInstanceNcdRequest): Promise<$_model.QueryInstanceNcdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceNcdWithOptions(request, runtime);
  }

  /**
   * Unsubscribe inactive Lingjun connection
   * 
   * @remarks
   * Only unsubscribable for Lingjun connections in the prepayment status.
   * 
   * @param request - RefundVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundVccResponse
   */
  async refundVccWithOptions(request: $_model.RefundVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundVccResponse>(await this.callApi(params, req, runtime), new $_model.RefundVccResponse({}));
  }

  /**
   * Unsubscribe inactive Lingjun connection
   * 
   * @remarks
   * Only unsubscribable for Lingjun connections in the prepayment status.
   * 
   * @param request - RefundVccRequest
   * @returns RefundVccResponse
   */
  async refundVcc(request: $_model.RefundVccRequest): Promise<$_model.RefundVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundVccWithOptions(request, runtime);
  }

  /**
   * Retry trying to create /delete a Lingjun connection.
   * 
   * @remarks
   * This operation allows the user to retry the operation if the Lingjun connection creation and deletion processes fail. Only the Lingjun connection in the creation failure and deletion failure state can be retried
   * 
   * @param request - RetryVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryVccResponse
   */
  async retryVccWithOptions(request: $_model.RetryVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryVccResponse>(await this.callApi(params, req, runtime), new $_model.RetryVccResponse({}));
  }

  /**
   * Retry trying to create /delete a Lingjun connection.
   * 
   * @remarks
   * This operation allows the user to retry the operation if the Lingjun connection creation and deletion processes fail. Only the Lingjun connection in the creation failure and deletion failure state can be retried
   * 
   * @param request - RetryVccRequest
   * @returns RetryVccResponse
   */
  async retryVcc(request: $_model.RetryVccRequest): Promise<$_model.RetryVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryVccWithOptions(request, runtime);
  }

  /**
   * Deletes an assigned secondary private IP address.
   * 
   * @param request - UnAssignPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnAssignPrivateIpAddressResponse
   */
  async unAssignPrivateIpAddressWithOptions(request: $_model.UnAssignPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnAssignPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnAssignPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnAssignPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.UnAssignPrivateIpAddressResponse({}));
  }

  /**
   * Deletes an assigned secondary private IP address.
   * 
   * @param request - UnAssignPrivateIpAddressRequest
   * @returns UnAssignPrivateIpAddressResponse
   */
  async unAssignPrivateIpAddress(request: $_model.UnAssignPrivateIpAddressRequest): Promise<$_model.UnAssignPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unAssignPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * This function can be used to delete the additional network segment of VPD.
   * 
   * @remarks
   * *
   * **Warning** If the attached CIDR block has Lingjun subnet resources, you must delete the dependent resources before you can delete the attached CIDR block.
   * 
   * @param request - UnAssociateVpdCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnAssociateVpdCidrBlockResponse
   */
  async unAssociateVpdCidrBlockWithOptions(request: $_model.UnAssociateVpdCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnAssociateVpdCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secondaryCidrBlock)) {
      body["SecondaryCidrBlock"] = request.secondaryCidrBlock;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnAssociateVpdCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnAssociateVpdCidrBlockResponse>(await this.callApi(params, req, runtime), new $_model.UnAssociateVpdCidrBlockResponse({}));
  }

  /**
   * This function can be used to delete the additional network segment of VPD.
   * 
   * @remarks
   * *
   * **Warning** If the attached CIDR block has Lingjun subnet resources, you must delete the dependent resources before you can delete the attached CIDR block.
   * 
   * @param request - UnAssociateVpdCidrBlockRequest
   * @returns UnAssociateVpdCidrBlockResponse
   */
  async unAssociateVpdCidrBlock(request: $_model.UnAssociateVpdCidrBlockRequest): Promise<$_model.UnAssociateVpdCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unAssociateVpdCidrBlockWithOptions(request, runtime);
  }

  /**
   * Delete the assigned secondary private IP address of Lingjun Elastic Network Interface.
   * 
   * @param request - UnassignLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassignLeniPrivateIpAddressResponse
   */
  async unassignLeniPrivateIpAddressWithOptions(request: $_model.UnassignLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassignLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassignLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassignLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.UnassignLeniPrivateIpAddressResponse({}));
  }

  /**
   * Delete the assigned secondary private IP address of Lingjun Elastic Network Interface.
   * 
   * @param request - UnassignLeniPrivateIpAddressRequest
   * @returns UnassignLeniPrivateIpAddressResponse
   */
  async unassignLeniPrivateIpAddress(request: $_model.UnassignLeniPrivateIpAddressRequest): Promise<$_model.UnassignLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassignLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Update Lingjun Elastic Network Interface information.
   * 
   * @param request - UpdateElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateElasticNetworkInterfaceResponse
   */
  async updateElasticNetworkInterfaceWithOptions(request: $_model.UpdateElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateElasticNetworkInterfaceResponse({}));
  }

  /**
   * Update Lingjun Elastic Network Interface information.
   * 
   * @param request - UpdateElasticNetworkInterfaceRequest
   * @returns UpdateElasticNetworkInterfaceResponse
   */
  async updateElasticNetworkInterface(request: $_model.UpdateElasticNetworkInterfaceRequest): Promise<$_model.UpdateElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Updated Lingjun HUB.
   * 
   * @param request - UpdateErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErResponse
   */
  async updateErWithOptions(request: $_model.UpdateErRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateErResponse>(await this.callApi(params, req, runtime), new $_model.UpdateErResponse({}));
  }

  /**
   * Updated Lingjun HUB.
   * 
   * @param request - UpdateErRequest
   * @returns UpdateErResponse
   */
  async updateEr(request: $_model.UpdateErRequest): Promise<$_model.UpdateErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErWithOptions(request, runtime);
  }

  /**
   * Updates a network instance connection.
   * 
   * @param request - UpdateErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErAttachmentResponse
   */
  async updateErAttachmentWithOptions(request: $_model.UpdateErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateErAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateErAttachmentResponse({}));
  }

  /**
   * Updates a network instance connection.
   * 
   * @param request - UpdateErAttachmentRequest
   * @returns UpdateErAttachmentResponse
   */
  async updateErAttachment(request: $_model.UpdateErAttachmentRequest): Promise<$_model.UpdateErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErAttachmentWithOptions(request, runtime);
  }

  /**
   * Update some information about the routing policy, including the description and name of the routing policy.
   * 
   * @param request - UpdateErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErRouteMapResponse
   */
  async updateErRouteMapWithOptions(request: $_model.UpdateErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateErRouteMapResponse>(await this.callApi(params, req, runtime), new $_model.UpdateErRouteMapResponse({}));
  }

  /**
   * Update some information about the routing policy, including the description and name of the routing policy.
   * 
   * @param request - UpdateErRouteMapRequest
   * @returns UpdateErRouteMapResponse
   */
  async updateErRouteMap(request: $_model.UpdateErRouteMapRequest): Promise<$_model.UpdateErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErRouteMapWithOptions(request, runtime);
  }

  /**
   * Updated the description of the secondary private network assigned by the Lingjun Elastic Network Interface.
   * 
   * @param request - UpdateLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLeniPrivateIpAddressResponse
   */
  async updateLeniPrivateIpAddressWithOptions(request: $_model.UpdateLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLeniPrivateIpAddressResponse({}));
  }

  /**
   * Updated the description of the secondary private network assigned by the Lingjun Elastic Network Interface.
   * 
   * @param request - UpdateLeniPrivateIpAddressRequest
   * @returns UpdateLeniPrivateIpAddressResponse
   */
  async updateLeniPrivateIpAddress(request: $_model.UpdateLeniPrivateIpAddressRequest): Promise<$_model.UpdateLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Updates some information about a specified subnet instance, including the name of the subnet instance.
   * 
   * @param request - UpdateSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubnetResponse
   */
  async updateSubnetWithOptions(request: $_model.UpdateSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubnetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubnetResponse({}));
  }

  /**
   * Updates some information about a specified subnet instance, including the name of the subnet instance.
   * 
   * @param request - UpdateSubnetRequest
   * @returns UpdateSubnetResponse
   */
  async updateSubnet(request: $_model.UpdateSubnetRequest): Promise<$_model.UpdateSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubnetWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Lingjun connection instance, including the peak bandwidth and name of the Lingjun connection instance.
   * 
   * @param request - UpdateVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVccResponse
   */
  async updateVccWithOptions(request: $_model.UpdateVccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccName)) {
      body["VccName"] = request.vccName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVccResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVccResponse({}));
  }

  /**
   * Updates the information about a Lingjun connection instance, including the peak bandwidth and name of the Lingjun connection instance.
   * 
   * @param request - UpdateVccRequest
   * @returns UpdateVccResponse
   */
  async updateVcc(request: $_model.UpdateVccRequest): Promise<$_model.UpdateVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVccWithOptions(request, runtime);
  }

  /**
   * Updates the information about the Lingjun CIDR block, including the name of the Lingjun CIDR block.
   * 
   * @param request - UpdateVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpdResponse
   */
  async updateVpdWithOptions(request: $_model.UpdateVpdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVpdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVpdResponse({}));
  }

  /**
   * Updates the information about the Lingjun CIDR block, including the name of the Lingjun CIDR block.
   * 
   * @param request - UpdateVpdRequest
   * @returns UpdateVpdResponse
   */
  async updateVpd(request: $_model.UpdateVpdRequest): Promise<$_model.UpdateVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpdWithOptions(request, runtime);
  }

}
