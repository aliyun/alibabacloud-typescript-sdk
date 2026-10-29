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
    this._endpoint = this.getEndpoint("vpcpeer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Accepts a VPC peering connection request.
   * 
   * @remarks
   * - For a cross-account VPC peering connection, the VPC peering connection instance is activated only after the acceptor accepts the connection request.
   * - The **AcceptVpcPeerConnection** operation is asynchronous. After you call this operation, the system returns a **RequestId**, but the VPC peering connection instance is not immediately activated. The activation task is still running in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) to query the status of the VPC peering connection instance.
   *     - If the VPC peering connection instance is in the **Updating** state, the instance is being activated.
   *     - If the VPC peering connection instance is in the **Activated** state, the instance is activated.
   * - You cannot call the **AcceptVpcPeerConnection** operation to concurrently accept requests for the same VPC peering connection instance.
   * 
   * @param request - AcceptVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptVpcPeerConnectionResponse
   */
  async acceptVpcPeerConnectionWithOptions(request: $_model.AcceptVpcPeerConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptVpcPeerConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AcceptVpcPeerConnectionResponse({}));
  }

  /**
   * Accepts a VPC peering connection request.
   * 
   * @remarks
   * - For a cross-account VPC peering connection, the VPC peering connection instance is activated only after the acceptor accepts the connection request.
   * - The **AcceptVpcPeerConnection** operation is asynchronous. After you call this operation, the system returns a **RequestId**, but the VPC peering connection instance is not immediately activated. The activation task is still running in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) to query the status of the VPC peering connection instance.
   *     - If the VPC peering connection instance is in the **Updating** state, the instance is being activated.
   *     - If the VPC peering connection instance is in the **Activated** state, the instance is activated.
   * - You cannot call the **AcceptVpcPeerConnection** operation to concurrently accept requests for the same VPC peering connection instance.
   * 
   * @param request - AcceptVpcPeerConnectionRequest
   * @returns AcceptVpcPeerConnectionResponse
   */
  async acceptVpcPeerConnection(request: $_model.AcceptVpcPeerConnectionRequest): Promise<$_model.AcceptVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Invokes the CreateVpcPeerConnection operation to create a VPC peering connection.
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * - **CreateVpcPeerConnection** is an asynchronous operation. After you call this operation, the system returns an **InstanceId**, but the VPC peering connection is not created yet and the creation task is still running in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the VPC peering connection.
   *     - If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.    
   *     - If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     - If the VPC peering connection is in the **Accepting** state, the VPC peering connection is created across accounts and must be accepted by the acceptor.
   * - You cannot call the **CreateVpcPeerConnection** operation to concurrently create VPC peering connections in the same VPC.
   * <props="china">When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for non-cross-border data transfer and cross-border data transfer.
   * <props="intl">When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for non-cross-border data transfer.
   * 
   * @param request - CreateVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcPeerConnectionResponse
   */
  async createVpcPeerConnectionWithOptions(request: $_model.CreateVpcPeerConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcPeerConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.linkType)) {
      query["LinkType"] = request.linkType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptingAliUid)) {
      body["AcceptingAliUid"] = request.acceptingAliUid;
    }

    if (!$dara.isNull(request.acceptingRegionId)) {
      body["AcceptingRegionId"] = request.acceptingRegionId;
    }

    if (!$dara.isNull(request.acceptingVpcId)) {
      body["AcceptingVpcId"] = request.acceptingVpcId;
    }

    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableJumboFrame)) {
      body["EnableJumboFrame"] = request.enableJumboFrame;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcPeerConnectionResponse({}));
  }

  /**
   * Invokes the CreateVpcPeerConnection operation to create a VPC peering connection.
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * - **CreateVpcPeerConnection** is an asynchronous operation. After you call this operation, the system returns an **InstanceId**, but the VPC peering connection is not created yet and the creation task is still running in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the VPC peering connection.
   *     - If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.    
   *     - If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     - If the VPC peering connection is in the **Accepting** state, the VPC peering connection is created across accounts and must be accepted by the acceptor.
   * - You cannot call the **CreateVpcPeerConnection** operation to concurrently create VPC peering connections in the same VPC.
   * <props="china">When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for non-cross-border data transfer and cross-border data transfer.
   * <props="intl">When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for non-cross-border data transfer.
   * 
   * @param request - CreateVpcPeerConnectionRequest
   * @returns CreateVpcPeerConnectionResponse
   */
  async createVpcPeerConnection(request: $_model.CreateVpcPeerConnectionRequest): Promise<$_model.CreateVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Deletes a VPC peering connection instance.
   * 
   * @remarks
   * - You can delete a VPC peering connection instance. After the instance is deleted, your services will be interrupted. Perform this operation only when it does not affect your services.
   *     - If you choose to force delete the instance, the system deletes the route entry that points to the VPC peering connection instance from the VPC routing table.
   *     - If you do not choose to force delete the instance, the system does not delete the route entry that points to the VPC peering connection instance from the VPC routing table. You must manually delete the route entry.
   * - The **DeleteVpcPeerConnection** operation is asynchronous. After you call the operation, the system returns a **RequestId**, but the VPC peering connection instance is not immediately deleted. The deletion task is still running in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/2523294.html) operation to query the status of the VPC peering connection instance.
   *     - If the VPC peering connection instance is in the **Deleting** state, the instance is being deleted.
   *     - If the VPC peering connection instance is in the **Deleted** state, the instance is deleted.
   * - You cannot call the **DeleteVpcPeerConnection** operation to concurrently delete the same VPC peering connection instance.
   * 
   * @param request - DeleteVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcPeerConnectionResponse
   */
  async deleteVpcPeerConnectionWithOptions(request: $_model.DeleteVpcPeerConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcPeerConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcPeerConnectionResponse({}));
  }

  /**
   * Deletes a VPC peering connection instance.
   * 
   * @remarks
   * - You can delete a VPC peering connection instance. After the instance is deleted, your services will be interrupted. Perform this operation only when it does not affect your services.
   *     - If you choose to force delete the instance, the system deletes the route entry that points to the VPC peering connection instance from the VPC routing table.
   *     - If you do not choose to force delete the instance, the system does not delete the route entry that points to the VPC peering connection instance from the VPC routing table. You must manually delete the route entry.
   * - The **DeleteVpcPeerConnection** operation is asynchronous. After you call the operation, the system returns a **RequestId**, but the VPC peering connection instance is not immediately deleted. The deletion task is still running in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/2523294.html) operation to query the status of the VPC peering connection instance.
   *     - If the VPC peering connection instance is in the **Deleting** state, the instance is being deleted.
   *     - If the VPC peering connection instance is in the **Deleted** state, the instance is deleted.
   * - You cannot call the **DeleteVpcPeerConnection** operation to concurrently delete the same VPC peering connection instance.
   * 
   * @param request - DeleteVpcPeerConnectionRequest
   * @returns DeleteVpcPeerConnectionResponse
   */
  async deleteVpcPeerConnection(request: $_model.DeleteVpcPeerConnectionRequest): Promise<$_model.DeleteVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified VPC peering connection.
   * 
   * @param request - GetVpcPeerConnectionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcPeerConnectionAttributeResponse
   */
  async getVpcPeerConnectionAttributeWithOptions(request: $_model.GetVpcPeerConnectionAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVpcPeerConnectionAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcPeerConnectionAttribute",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVpcPeerConnectionAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetVpcPeerConnectionAttributeResponse({}));
  }

  /**
   * Queries the details of a specified VPC peering connection.
   * 
   * @param request - GetVpcPeerConnectionAttributeRequest
   * @returns GetVpcPeerConnectionAttributeResponse
   */
  async getVpcPeerConnectionAttribute(request: $_model.GetVpcPeerConnectionAttributeRequest): Promise<$_model.GetVpcPeerConnectionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcPeerConnectionAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to VPC peering connections.
   * 
   * @remarks
   * - Specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters in the request to determine the resources to query.
   * - **Tag.N** is the tag of the resource and consists of a key-value pair. If you specify only **Tag.N.Key**, all tag values associated with the tag key are returned. If you specify only **Tag.N.Value**, an error is reported.
   * - If you specify both **Tag.N** and **ResourceId.N** to filter tags, the **ResourceId.N** parameter must match all the specified tag key-value pairs.
   * - If you specify multiple tag key-value pairs, the returned resources contain all the specified key-value pairs.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
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
      version: "2022-01-01",
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
   * Queries the tags bound to VPC peering connections.
   * 
   * @remarks
   * - Specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters in the request to determine the resources to query.
   * - **Tag.N** is the tag of the resource and consists of a key-value pair. If you specify only **Tag.N.Key**, all tag values associated with the tag key are returned. If you specify only **Tag.N.Value**, an error is reported.
   * - If you specify both **Tag.N** and **ResourceId.N** to filter tags, the **ResourceId.N** parameter must match all the specified tag key-value pairs.
   * - If you specify multiple tag key-value pairs, the returned resources contain all the specified key-value pairs.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the details of VPC peering connections.
   * 
   * @param tmpReq - ListVpcPeerConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcPeerConnectionsResponse
   */
  async listVpcPeerConnectionsWithOptions(tmpReq: $_model.ListVpcPeerConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcPeerConnectionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListVpcPeerConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vpcId)) {
      request.vpcIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vpcId, "VpcId", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcIdShrink)) {
      body["VpcId"] = request.vpcIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcPeerConnections",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcPeerConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcPeerConnectionsResponse({}));
  }

  /**
   * Queries the details of VPC peering connections.
   * 
   * @param request - ListVpcPeerConnectionsRequest
   * @returns ListVpcPeerConnectionsResponse
   */
  async listVpcPeerConnections(request: $_model.ListVpcPeerConnectionsRequest): Promise<$_model.ListVpcPeerConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcPeerConnectionsWithOptions(request, runtime);
  }

  /**
   * Modifies the name or description of a VPC peering connection.
   * 
   * @remarks
   * - **ModifyVpcPeerConnection** is an asynchronous operation. The system returns a **RequestId**, but the VPC peering connection is not immediately modified. The modification task continues in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) to query the status of the VPC peering connection.
   *     - If the VPC peering connection is in the **Updating** state, it is being modified.
   *     - If the VPC peering connection is in the **Activated** state, the modification is complete.
   * - **ModifyVpcPeerConnection** does not support concurrent modifications to the name and description of the same VPC peering connection.
   * 
   * @param request - ModifyVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcPeerConnectionResponse
   */
  async modifyVpcPeerConnectionWithOptions(request: $_model.ModifyVpcPeerConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcPeerConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.linkType)) {
      query["LinkType"] = request.linkType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableJumboFrame)) {
      body["EnableJumboFrame"] = request.enableJumboFrame;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcPeerConnectionResponse({}));
  }

  /**
   * Modifies the name or description of a VPC peering connection.
   * 
   * @remarks
   * - **ModifyVpcPeerConnection** is an asynchronous operation. The system returns a **RequestId**, but the VPC peering connection is not immediately modified. The modification task continues in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) to query the status of the VPC peering connection.
   *     - If the VPC peering connection is in the **Updating** state, it is being modified.
   *     - If the VPC peering connection is in the **Activated** state, the modification is complete.
   * - **ModifyVpcPeerConnection** does not support concurrent modifications to the name and description of the same VPC peering connection.
   * 
   * @param request - ModifyVpcPeerConnectionRequest
   * @returns ModifyVpcPeerConnectionResponse
   */
  async modifyVpcPeerConnection(request: $_model.ModifyVpcPeerConnectionRequest): Promise<$_model.ModifyVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group of a VPC peering connection.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2022-01-01",
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
   * Modifies the resource group of a VPC peering connection.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Rejects a request for a VPC peering connection.
   * 
   * @remarks
   * - For a cross-account VPC peering connection instance, the acceptor can reject the connection request. A VPC peering connection instance whose connection request is rejected enters the **Rejected** state.
   * - **RejectVpcPeerConnection** does not support concurrent requests to reject the same peering connection instance.
   * 
   * @param request - RejectVpcPeerConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectVpcPeerConnectionResponse
   */
  async rejectVpcPeerConnectionWithOptions(request: $_model.RejectVpcPeerConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectVpcPeerConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      body["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectVpcPeerConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectVpcPeerConnectionResponse>(await this.callApi(params, req, runtime), new $_model.RejectVpcPeerConnectionResponse({}));
  }

  /**
   * Rejects a request for a VPC peering connection.
   * 
   * @remarks
   * - For a cross-account VPC peering connection instance, the acceptor can reject the connection request. A VPC peering connection instance whose connection request is rejected enters the **Rejected** state.
   * - **RejectVpcPeerConnection** does not support concurrent requests to reject the same peering connection instance.
   * 
   * @param request - RejectVpcPeerConnectionRequest
   * @returns RejectVpcPeerConnectionResponse
   */
  async rejectVpcPeerConnection(request: $_model.RejectVpcPeerConnectionRequest): Promise<$_model.RejectVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Creates and attaches tags to one or more specified VPC peering connections.
   * 
   * @remarks
   * Tags are labels that you assign to instances. Instance tag consists of a key-value pair. Take note of the following limits on tags: 
   * - The key of instance tag on an instance must be unique.
   * - Tags must be attached to instances. Unattached tags are not supported.
   * - Tag information is not shared across regions. 
   *     For example, tags created in the China (Hangzhou) region are not visible in the China (Shanghai) region.
   * - Within the same account and region, tag information is shared across different VPC peering connections. 
   *        For example, if a tag is attached to a VPC peering connection within the same account and region, you can directly select and attach this tag to other VPC peering connections on the Edit Tags page without manually entering the key-value pair. You can modify the key and value of a tag, or delete the tag from an instance at any time. If an instance is deleted, all tags attached to the instance are also deleted.
   * - You can attach up to 20 tags to a single instance. Before attaching tags, Alibaba Cloud verifies the number of existing tags on the resource. If the limit is exceeded, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2022-01-01",
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
   * Creates and attaches tags to one or more specified VPC peering connections.
   * 
   * @remarks
   * Tags are labels that you assign to instances. Instance tag consists of a key-value pair. Take note of the following limits on tags: 
   * - The key of instance tag on an instance must be unique.
   * - Tags must be attached to instances. Unattached tags are not supported.
   * - Tag information is not shared across regions. 
   *     For example, tags created in the China (Hangzhou) region are not visible in the China (Shanghai) region.
   * - Within the same account and region, tag information is shared across different VPC peering connections. 
   *        For example, if a tag is attached to a VPC peering connection within the same account and region, you can directly select and attach this tag to other VPC peering connections on the Edit Tags page without manually entering the key-value pair. You can modify the key and value of a tag, or delete the tag from an instance at any time. If an instance is deleted, all tags attached to the instance are also deleted.
   * - You can attach up to 20 tags to a single instance. Before attaching tags, Alibaba Cloud verifies the number of existing tags on the resource. If the limit is exceeded, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified VPC peering connections.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UnTagResources",
      version: "2022-01-01",
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
   * Removes tags from specified VPC peering connections.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

}
