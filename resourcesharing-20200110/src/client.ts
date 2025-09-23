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
    this._endpoint = this.getEndpoint("resourcesharing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Accepts a resource sharing invitation.
   * 
   * @remarks
   * ### [](#)
   * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
   * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
   * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
   * 
   * @param request - AcceptResourceShareInvitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptResourceShareInvitationResponse
   */
  async acceptResourceShareInvitationWithOptions(request: $_model.AcceptResourceShareInvitationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptResourceShareInvitationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceShareInvitationId)) {
      query["ResourceShareInvitationId"] = request.resourceShareInvitationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptResourceShareInvitation",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptResourceShareInvitationResponse>(await this.callApi(params, req, runtime), new $_model.AcceptResourceShareInvitationResponse({}));
  }

  /**
   * Accepts a resource sharing invitation.
   * 
   * @remarks
   * ### [](#)
   * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
   * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
   * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
   * 
   * @param request - AcceptResourceShareInvitationRequest
   * @returns AcceptResourceShareInvitationResponse
   */
  async acceptResourceShareInvitation(request: $_model.AcceptResourceShareInvitationRequest): Promise<$_model.AcceptResourceShareInvitationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptResourceShareInvitationWithOptions(request, runtime);
  }

  /**
   * Associates resources or principals with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
   * 
   * @param request - AssociateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResourceShareResponse
   */
  async associateResourceShareWithOptions(request: $_model.AssociateResourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateResourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.permissionNames)) {
      query["PermissionNames"] = request.permissionNames;
    }

    if (!$dara.isNull(request.resourceArns)) {
      query["ResourceArns"] = request.resourceArns;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.targetProperties)) {
      query["TargetProperties"] = request.targetProperties;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateResourceShareResponse>(await this.callApi(params, req, runtime), new $_model.AssociateResourceShareResponse({}));
  }

  /**
   * Associates resources or principals with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
   * 
   * @param request - AssociateResourceShareRequest
   * @returns AssociateResourceShareResponse
   */
  async associateResourceShare(request: $_model.AssociateResourceShareRequest): Promise<$_model.AssociateResourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateResourceShareWithOptions(request, runtime);
  }

  /**
   * Associates permissions with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - AssociateResourceSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResourceSharePermissionResponse
   */
  async associateResourceSharePermissionWithOptions(request: $_model.AssociateResourceSharePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateResourceSharePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateResourceSharePermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateResourceSharePermissionResponse>(await this.callApi(params, req, runtime), new $_model.AssociateResourceSharePermissionResponse({}));
  }

  /**
   * Associates permissions with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - AssociateResourceSharePermissionRequest
   * @returns AssociateResourceSharePermissionResponse
   */
  async associateResourceSharePermission(request: $_model.AssociateResourceSharePermissionRequest): Promise<$_model.AssociateResourceSharePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateResourceSharePermissionWithOptions(request, runtime);
  }

  /**
   * Transfers a resource share from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Transfers a resource share from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks the status of resource sharing within a resource directory.
   * 
   * @param request - CheckSharingWithResourceDirectoryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSharingWithResourceDirectoryStatusResponse
   */
  async checkSharingWithResourceDirectoryStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckSharingWithResourceDirectoryStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckSharingWithResourceDirectoryStatus",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSharingWithResourceDirectoryStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckSharingWithResourceDirectoryStatusResponse({}));
  }

  /**
   * Checks the status of resource sharing within a resource directory.
   * @returns CheckSharingWithResourceDirectoryStatusResponse
   */
  async checkSharingWithResourceDirectoryStatus(): Promise<$_model.CheckSharingWithResourceDirectoryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSharingWithResourceDirectoryStatusWithOptions(runtime);
  }

  /**
   * Creates a resource share.
   * 
   * @remarks
   * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](https://help.aliyun.com/document_detail/160622.html).
   * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****` in a resource directory. In this example, the management account of the resource directory is used to call this API operation.
   * 
   * @param request - CreateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceShareResponse
   */
  async createResourceShareWithOptions(request: $_model.CreateResourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowExternalTargets)) {
      query["AllowExternalTargets"] = request.allowExternalTargets;
    }

    if (!$dara.isNull(request.permissionNames)) {
      query["PermissionNames"] = request.permissionNames;
    }

    if (!$dara.isNull(request.resourceArns)) {
      query["ResourceArns"] = request.resourceArns;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetProperties)) {
      query["TargetProperties"] = request.targetProperties;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceShareResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceShareResponse({}));
  }

  /**
   * Creates a resource share.
   * 
   * @remarks
   * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](https://help.aliyun.com/document_detail/160622.html).
   * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****` in a resource directory. In this example, the management account of the resource directory is used to call this API operation.
   * 
   * @param request - CreateResourceShareRequest
   * @returns CreateResourceShareResponse
   */
  async createResourceShare(request: $_model.CreateResourceShareRequest): Promise<$_model.CreateResourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceShareWithOptions(request, runtime);
  }

  /**
   * Deletes a resource share.
   * 
   * @remarks
   * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
   * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
   * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
   * 
   * @param request - DeleteResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceShareResponse
   */
  async deleteResourceShareWithOptions(request: $_model.DeleteResourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceShareResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceShareResponse({}));
  }

  /**
   * Deletes a resource share.
   * 
   * @remarks
   * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
   * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
   * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
   * 
   * @param request - DeleteResourceShareRequest
   * @returns DeleteResourceShareResponse
   */
  async deleteResourceShare(request: $_model.DeleteResourceShareRequest): Promise<$_model.DeleteResourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceShareWithOptions(request, runtime);
  }

  /**
   * Queries the regions where the Resource Sharing service is available.
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
      version: "2020-01-10",
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
   * Queries the regions where the Resource Sharing service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Disassociates resources or principals from a resource share.
   * 
   * @remarks
   *   A resource owner can call this API operation to disassociate shared resources or principals from a resource share.
   * *   If a principal does not belong to a resource directory, the principal can call this API operation to exit the resource share. For more information, see [Exit a resource share](https://help.aliyun.com/document_detail/440614.html).
   * This topic provides an example on how to use the management account of a resource directory to call the API operation to disassociate the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is disassociated from the resource share, the member cannot share the resources in the resource share.
   * 
   * @param request - DisassociateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateResourceShareResponse
   */
  async disassociateResourceShareWithOptions(request: $_model.DisassociateResourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateResourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceArns)) {
      query["ResourceArns"] = request.resourceArns;
    }

    if (!$dara.isNull(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateResourceShareResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateResourceShareResponse({}));
  }

  /**
   * Disassociates resources or principals from a resource share.
   * 
   * @remarks
   *   A resource owner can call this API operation to disassociate shared resources or principals from a resource share.
   * *   If a principal does not belong to a resource directory, the principal can call this API operation to exit the resource share. For more information, see [Exit a resource share](https://help.aliyun.com/document_detail/440614.html).
   * This topic provides an example on how to use the management account of a resource directory to call the API operation to disassociate the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is disassociated from the resource share, the member cannot share the resources in the resource share.
   * 
   * @param request - DisassociateResourceShareRequest
   * @returns DisassociateResourceShareResponse
   */
  async disassociateResourceShare(request: $_model.DisassociateResourceShareRequest): Promise<$_model.DisassociateResourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateResourceShareWithOptions(request, runtime);
  }

  /**
   * Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - DisassociateResourceSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateResourceSharePermissionResponse
   */
  async disassociateResourceSharePermissionWithOptions(request: $_model.DisassociateResourceSharePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateResourceSharePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateResourceSharePermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateResourceSharePermissionResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateResourceSharePermissionResponse({}));
  }

  /**
   * Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - DisassociateResourceSharePermissionRequest
   * @returns DisassociateResourceSharePermissionResponse
   */
  async disassociateResourceSharePermission(request: $_model.DisassociateResourceSharePermissionRequest): Promise<$_model.DisassociateResourceSharePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateResourceSharePermissionWithOptions(request, runtime);
  }

  /**
   * Enables resource sharing for a resource directory.
   * 
   * @remarks
   * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
   * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
   * 
   * @param request - EnableSharingWithResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSharingWithResourceDirectoryResponse
   */
  async enableSharingWithResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableSharingWithResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableSharingWithResourceDirectory",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSharingWithResourceDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.EnableSharingWithResourceDirectoryResponse({}));
  }

  /**
   * Enables resource sharing for a resource directory.
   * 
   * @remarks
   * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
   * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
   * @returns EnableSharingWithResourceDirectoryResponse
   */
  async enableSharingWithResourceDirectory(): Promise<$_model.EnableSharingWithResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSharingWithResourceDirectoryWithOptions(runtime);
  }

  /**
   * Queries the information about a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
   * 
   * @param request - GetPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionResponse
   */
  async getPermissionWithOptions(request: $_model.GetPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!$dara.isNull(request.permissionVersion)) {
      query["PermissionVersion"] = request.permissionVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GetPermissionResponse({}));
  }

  /**
   * Queries the information about a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
   * 
   * @param request - GetPermissionRequest
   * @returns GetPermissionResponse
   */
  async getPermission(request: $_model.GetPermissionRequest): Promise<$_model.GetPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionVersionsResponse
   */
  async listPermissionVersionsWithOptions(request: $_model.ListPermissionVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionVersions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionVersionsResponse({}));
  }

  /**
   * Queries the versions of a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionVersionsRequest
   * @returns ListPermissionVersionsResponse
   */
  async listPermissionVersions(request: $_model.ListPermissionVersionsRequest): Promise<$_model.ListPermissionVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPermissionVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the default permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(request: $_model.ListPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionsResponse> {
    request.validate();
    let query = { };
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
      action: "ListPermissions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionsResponse({}));
  }

  /**
   * Queries the information about the default permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionsRequest
   * @returns ListPermissionsResponse
   */
  async listPermissions(request: $_model.ListPermissionsRequest): Promise<$_model.ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the association records of resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
   * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
   * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
   * 
   * @param request - ListResourceShareAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceShareAssociationsResponse
   */
  async listResourceShareAssociationsWithOptions(request: $_model.ListResourceShareAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceShareAssociationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associationStatus)) {
      query["AssociationStatus"] = request.associationStatus;
    }

    if (!$dara.isNull(request.associationType)) {
      query["AssociationType"] = request.associationType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceShareAssociations",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceShareAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceShareAssociationsResponse({}));
  }

  /**
   * Queries the association records of resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
   * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
   * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
   * 
   * @param request - ListResourceShareAssociationsRequest
   * @returns ListResourceShareAssociationsResponse
   */
  async listResourceShareAssociations(request: $_model.ListResourceShareAssociationsRequest): Promise<$_model.ListResourceShareAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceShareAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries the resource sharing invitations that are received.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
   * 
   * @param request - ListResourceShareInvitationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceShareInvitationsResponse
   */
  async listResourceShareInvitationsWithOptions(request: $_model.ListResourceShareInvitationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceShareInvitationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!$dara.isNull(request.resourceShareInvitationIds)) {
      query["ResourceShareInvitationIds"] = request.resourceShareInvitationIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceShareInvitations",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceShareInvitationsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceShareInvitationsResponse({}));
  }

  /**
   * Queries the resource sharing invitations that are received.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
   * 
   * @param request - ListResourceShareInvitationsRequest
   * @returns ListResourceShareInvitationsResponse
   */
  async listResourceShareInvitations(request: $_model.ListResourceShareInvitationsRequest): Promise<$_model.ListResourceShareInvitationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceShareInvitationsWithOptions(request, runtime);
  }

  /**
   * Queries the permissions that are associated with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
   * 
   * @param request - ListResourceSharePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceSharePermissionsResponse
   */
  async listResourceSharePermissionsWithOptions(request: $_model.ListResourceSharePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceSharePermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceSharePermissions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceSharePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceSharePermissionsResponse({}));
  }

  /**
   * Queries the permissions that are associated with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
   * 
   * @param request - ListResourceSharePermissionsRequest
   * @returns ListResourceSharePermissionsResponse
   */
  async listResourceSharePermissions(request: $_model.ListResourceSharePermissionsRequest): Promise<$_model.ListResourceSharePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceSharePermissionsWithOptions(request, runtime);
  }

  /**
   * Queries resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created within the account `151266687691****`:
   * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
   * *   `rs-PqysnzIj****`, which is in the `Active` state
   * 
   * @param request - ListResourceSharesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceSharesResponse
   */
  async listResourceSharesWithOptions(request: $_model.ListResourceSharesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceSharesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!$dara.isNull(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!$dara.isNull(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    if (!$dara.isNull(request.resourceShareStatus)) {
      query["ResourceShareStatus"] = request.resourceShareStatus;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceShares",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceSharesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceSharesResponse({}));
  }

  /**
   * Queries resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created within the account `151266687691****`:
   * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
   * *   `rs-PqysnzIj****`, which is in the `Active` state
   * 
   * @param request - ListResourceSharesRequest
   * @returns ListResourceSharesResponse
   */
  async listResourceShares(request: $_model.ListResourceSharesRequest): Promise<$_model.ListResourceSharesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceSharesWithOptions(request, runtime);
  }

  /**
   * Queries the resources you share with other accounts or the resources other accounts share with you.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
   * 
   * @param request - ListSharedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedResourcesResponse
   */
  async listSharedResourcesWithOptions(request: $_model.ListSharedResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSharedResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceArns)) {
      query["ResourceArns"] = request.resourceArns;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!$dara.isNull(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedResources",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSharedResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListSharedResourcesResponse({}));
  }

  /**
   * Queries the resources you share with other accounts or the resources other accounts share with you.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
   * 
   * @param request - ListSharedResourcesRequest
   * @returns ListSharedResourcesResponse
   */
  async listSharedResources(request: $_model.ListSharedResourcesRequest): Promise<$_model.ListSharedResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedResourcesWithOptions(request, runtime);
  }

  /**
   * Queries principals.
   * 
   * @remarks
   * If you are a resource owner, you can query the principals with which you share your resources. If you are a principal, you can query the resources that are shared with you.
   * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
   * 
   * @param request - ListSharedTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedTargetsResponse
   */
  async listSharedTargetsWithOptions(request: $_model.ListSharedTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSharedTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!$dara.isNull(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedTargets",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSharedTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ListSharedTargetsResponse({}));
  }

  /**
   * Queries principals.
   * 
   * @remarks
   * If you are a resource owner, you can query the principals with which you share your resources. If you are a principal, you can query the resources that are shared with you.
   * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
   * 
   * @param request - ListSharedTargetsRequest
   * @returns ListSharedTargetsResponse
   */
  async listSharedTargets(request: $_model.ListSharedTargetsRequest): Promise<$_model.ListSharedTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resource shares.
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
      version: "2020-01-10",
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
   * Queries the tags that are added to resource shares.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 拒绝组织外共享邀请
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
   * 
   * @param request - RejectResourceShareInvitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectResourceShareInvitationResponse
   */
  async rejectResourceShareInvitationWithOptions(request: $_model.RejectResourceShareInvitationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectResourceShareInvitationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceShareInvitationId)) {
      query["ResourceShareInvitationId"] = request.resourceShareInvitationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectResourceShareInvitation",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectResourceShareInvitationResponse>(await this.callApi(params, req, runtime), new $_model.RejectResourceShareInvitationResponse({}));
  }

  /**
   * 拒绝组织外共享邀请
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
   * 
   * @param request - RejectResourceShareInvitationRequest
   * @returns RejectResourceShareInvitationResponse
   */
  async rejectResourceShareInvitation(request: $_model.RejectResourceShareInvitationRequest): Promise<$_model.RejectResourceShareInvitationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectResourceShareInvitationWithOptions(request, runtime);
  }

  /**
   * Adds tags to a resource share.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2020-01-10",
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
   * Adds tags to a resource share.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resource shares.
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
      action: "UntagResources",
      version: "2020-01-10",
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
   * Removes tags from resource shares.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 调用UpdateResourceShare修改共享单元基本信息。
   * 
   * @remarks
   * You can call this API operation to change the name or resource sharing scope of a resource share.
   * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
   * 
   * @param request - UpdateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceShareResponse
   */
  async updateResourceShareWithOptions(request: $_model.UpdateResourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowExternalTargets)) {
      query["AllowExternalTargets"] = request.allowExternalTargets;
    }

    if (!$dara.isNull(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!$dara.isNull(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceShareResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceShareResponse({}));
  }

  /**
   * 调用UpdateResourceShare修改共享单元基本信息。
   * 
   * @remarks
   * You can call this API operation to change the name or resource sharing scope of a resource share.
   * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
   * 
   * @param request - UpdateResourceShareRequest
   * @returns UpdateResourceShareResponse
   */
  async updateResourceShare(request: $_model.UpdateResourceShareRequest): Promise<$_model.UpdateResourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceShareWithOptions(request, runtime);
  }

}
