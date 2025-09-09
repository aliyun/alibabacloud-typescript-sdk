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
   * Accepts a virtual private cloud (VPC) peering connection request.
   * 
   * @remarks
   *   For a cross-account VPC peering connection, the connection is activated only after the accepter VPC accepts the connection request.
   * *   **AcceptVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the operation in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of the task.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being activated.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is activated.
   * *   You cannot repeatedly call the **AcceptVpcPeerConnection** operation within a specific period of time.
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
   * Accepts a virtual private cloud (VPC) peering connection request.
   * 
   * @remarks
   *   For a cross-account VPC peering connection, the connection is activated only after the accepter VPC accepts the connection request.
   * *   **AcceptVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the operation in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of the task.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being activated.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is activated.
   * *   You cannot repeatedly call the **AcceptVpcPeerConnection** operation within a specific period of time.
   * 
   * @param request - AcceptVpcPeerConnectionRequest
   * @returns AcceptVpcPeerConnectionResponse
   */
  async acceptVpcPeerConnection(request: $_model.AcceptVpcPeerConnectionRequest): Promise<$_model.AcceptVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Creates a VPC peering connection
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * *   **CreateVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns an **instance ID** and runs the task in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the task.
   *     *   If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.
   *     *   If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     *   If the VPC peering connection is in the **Accepting** state, it is a cross-account connection. The connection needs to be accepted on the accepter side.
   * *   You cannot repeatedly call **CreateVpcPeerConnection** within the specified period of time.
   * When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for you.
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
   * Creates a VPC peering connection
   * 
   * @remarks
   * Before you create a VPC peering connection, take note of the following items:
   * *   **CreateVpcPeerConnection** is an asynchronous operation. After a request is sent, the system returns an **instance ID** and runs the task in the background. You can call [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426095.html) to query the status of the task.
   *     *   If the VPC peering connection is in the **Creating** state, the VPC peering connection is being created.
   *     *   If the VPC peering connection is in the **Activated** state, the VPC peering connection is created.
   *     *   If the VPC peering connection is in the **Accepting** state, it is a cross-account connection. The connection needs to be accepted on the accepter side.
   * *   You cannot repeatedly call **CreateVpcPeerConnection** within the specified period of time.
   * When you create a VPC peering connection, the system automatically activates Cloud Data Transfer (CDT) for you.
   * 
   * @param request - CreateVpcPeerConnectionRequest
   * @returns CreateVpcPeerConnectionResponse
   */
  async createVpcPeerConnection(request: $_model.CreateVpcPeerConnectionRequest): Promise<$_model.CreateVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * 删除VPC对等连接
   * 
   * @remarks
   *   You can delete VPC peering connections. After you delete a VPC peering connection, your service is affected. Proceed with caution.
   *     *   If you forcefully delete a VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   *     *   If you do not forcefully delete a VPC peering connection, the system does not delete these routes. You must manually delete them.
   * *   The **DeleteVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Deleting** state, it is being deleted.
   *     *   If a VPC peering connection is in the **Deleted** state, it is deleted.
   * *   You cannot repeatedly call the **DeleteVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
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
   * 删除VPC对等连接
   * 
   * @remarks
   *   You can delete VPC peering connections. After you delete a VPC peering connection, your service is affected. Proceed with caution.
   *     *   If you forcefully delete a VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   *     *   If you do not forcefully delete a VPC peering connection, the system does not delete these routes. You must manually delete them.
   * *   The **DeleteVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Deleting** state, it is being deleted.
   *     *   If a VPC peering connection is in the **Deleted** state, it is deleted.
   * *   You cannot repeatedly call the **DeleteVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - DeleteVpcPeerConnectionRequest
   * @returns DeleteVpcPeerConnectionResponse
   */
  async deleteVpcPeerConnection(request: $_model.DeleteVpcPeerConnectionRequest): Promise<$_model.DeleteVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a virtual private cloud (VPC) peering connection.
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
   * Queries the details of a virtual private cloud (VPC) peering connection.
   * 
   * @param request - GetVpcPeerConnectionAttributeRequest
   * @returns GetVpcPeerConnectionAttributeResponse
   */
  async getVpcPeerConnectionAttribute(request: $_model.GetVpcPeerConnectionAttributeRequest): Promise<$_model.GetVpcPeerConnectionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcPeerConnectionAttributeWithOptions(request, runtime);
  }

  /**
   * Queries tags that are added to Virtual Private Cloud (VPC) peering connections.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you set only **Tag.N.Value**, an error message is returned.
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
   * Queries tags that are added to Virtual Private Cloud (VPC) peering connections.
   * 
   * @remarks
   *   Set **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request to specify the object to be queried.
   * *   **Tag.N** is a resource tag that consists of a key-value pair. If you set only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you set only **Tag.N.Value**, an error message is returned.
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
   * Queries virtual private cloud (VPC) peering connections.
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
   * Queries virtual private cloud (VPC) peering connections.
   * 
   * @param request - ListVpcPeerConnectionsRequest
   * @returns ListVpcPeerConnectionsResponse
   */
  async listVpcPeerConnections(request: $_model.ListVpcPeerConnectionsRequest): Promise<$_model.ListVpcPeerConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcPeerConnectionsWithOptions(request, runtime);
  }

  /**
   * Modifies the description or name of a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   *   The **ModifyVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being modified.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is modified.
   * *   You cannot repeatedly call the **ModifyVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
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
   * Modifies the description or name of a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   *   The **ModifyVpcPeerConnection** operation is asynchronous. After you send a request, the system returns **RequestId**, but the operation is still being performed in the background. You can call the [GetVpcPeerConnectionAttribute](https://help.aliyun.com/document_detail/426100.html) operation to query the status of a VPC peering connection.
   *     *   If a VPC peering connection is in the **Updating** state, the VPC peering connection is being modified.
   *     *   If a VPC peering connection is in the **Activated** state, the VPC peering connection is modified.
   * *   You cannot repeatedly call the **ModifyVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - ModifyVpcPeerConnectionRequest
   * @returns ModifyVpcPeerConnectionResponse
   */
  async modifyVpcPeerConnection(request: $_model.ModifyVpcPeerConnectionRequest): Promise<$_model.ModifyVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Moves a Virtual Private Cloud (VPC) peering connection from one resource group to another.
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
   * Moves a Virtual Private Cloud (VPC) peering connection from one resource group to another.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * 拒绝VPC对等连接
   * 
   * @remarks
   *   An acceptor VPC can reject a connection request from the requester VPC of a cross-account VPC peering connection. After the connection request is rejected, the VPC peering connection enters the **Rejected** state.
   * *   You cannot repeatedly call the **RejectVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
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
   * 拒绝VPC对等连接
   * 
   * @remarks
   *   An acceptor VPC can reject a connection request from the requester VPC of a cross-account VPC peering connection. After the connection request is rejected, the VPC peering connection enters the **Rejected** state.
   * *   You cannot repeatedly call the **RejectVpcPeerConnection** operation for the same VPC peering connection within the specified period of time.
   * 
   * @param request - RejectVpcPeerConnectionRequest
   * @returns RejectVpcPeerConnectionResponse
   */
  async rejectVpcPeerConnection(request: $_model.RejectVpcPeerConnectionRequest): Promise<$_model.RejectVpcPeerConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectVpcPeerConnectionWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds them to a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following limits:
   * *   The keys of tags that are added to the same instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   Tag information is not shared across regions.
   *     For example, you cannot view the tags that are created in the China (Hangzhou) region from the China (Shanghai) region.
   * *   For the same account and region, tags added to different VPC peering connections are shared.
   *     For example, if a tag is added to a VPC peering connection, the tag can also be added to other VPC peering connections within the same account and region. You can modify the key and the value of a tag or remove a tag from an instance. After you delete an instance, all tags that are added to the instance are deleted.
   * *   You can add up to 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
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
   * Creates tags and adds them to a virtual private cloud (VPC) peering connection.
   * 
   * @remarks
   * Tags are used to classify instances. Each tag consists of a key-value pair. Before you use tags, take note of the following limits:
   * *   The keys of tags that are added to the same instance must be unique.
   * *   You cannot create tags without adding them to instances. All tags must be added to instances.
   * *   Tag information is not shared across regions.
   *     For example, you cannot view the tags that are created in the China (Hangzhou) region from the China (Shanghai) region.
   * *   For the same account and region, tags added to different VPC peering connections are shared.
   *     For example, if a tag is added to a VPC peering connection, the tag can also be added to other VPC peering connections within the same account and region. You can modify the key and the value of a tag or remove a tag from an instance. After you delete an instance, all tags that are added to the instance are deleted.
   * *   You can add up to 20 tags to each instance. Before you add a tag to an instance, the system automatically checks the number of existing tags. An error message is returned if the maximum number of tags is reached.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified Virtual Private Cloud (VPC) peering connections.
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
   * Removes tags from specified Virtual Private Cloud (VPC) peering connections.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

}
