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
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Unlocks a convenience office network that is automatically locked due to a long idle period of time.
   * 
   * @remarks
   * If you do not create any cloud computer in a convenience office network within 15 days, the office network is automatically locked and virtual private cloud (VPC) resources are released. If you want to resume the office network, you can call this operation to unlock the office network.
   * 
   * @param request - ActivateOfficeSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateOfficeSiteResponse
   */
  async activateOfficeSiteWithOptions(request: $_model.ActivateOfficeSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateOfficeSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateOfficeSiteResponse>(await this.callApi(params, req, runtime), new $_model.ActivateOfficeSiteResponse({}));
  }

  /**
   * Unlocks a convenience office network that is automatically locked due to a long idle period of time.
   * 
   * @remarks
   * If you do not create any cloud computer in a convenience office network within 15 days, the office network is automatically locked and virtual private cloud (VPC) resources are released. If you want to resume the office network, you can call this operation to unlock the office network.
   * 
   * @param request - ActivateOfficeSiteRequest
   * @returns ActivateOfficeSiteResponse
   */
  async activateOfficeSite(request: $_model.ActivateOfficeSiteRequest): Promise<$_model.ActivateOfficeSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateOfficeSiteWithOptions(request, runtime);
  }

  /**
   * 添加桌面超卖用户组
   * 
   * @param request - AddDesktopOversoldUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDesktopOversoldUserGroupResponse
   */
  async addDesktopOversoldUserGroupWithOptions(request: $_model.AddDesktopOversoldUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDesktopOversoldUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDesktopOversoldUserGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddDesktopOversoldUserGroupResponse({}));
  }

  /**
   * 添加桌面超卖用户组
   * 
   * @param request - AddDesktopOversoldUserGroupRequest
   * @returns AddDesktopOversoldUserGroupResponse
   */
  async addDesktopOversoldUserGroup(request: $_model.AddDesktopOversoldUserGroupRequest): Promise<$_model.AddDesktopOversoldUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
   * Adds trusted devices.
   * 
   * @remarks
   * Each device can be registered in only one Alibaba Cloud account. If you register a device that has been registered in another Alibaba Cloud account, an error is reported.
   * 
   * @param request - AddDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDevicesResponse
   */
  async addDevicesWithOptions(request: $_model.AddDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDevices",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDevicesResponse>(await this.callApi(params, req, runtime), new $_model.AddDevicesResponse({}));
  }

  /**
   * Adds trusted devices.
   * 
   * @remarks
   * Each device can be registered in only one Alibaba Cloud account. If you register a device that has been registered in another Alibaba Cloud account, an error is reported.
   * 
   * @param request - AddDevicesRequest
   * @returns AddDevicesResponse
   */
  async addDevices(request: $_model.AddDevicesRequest): Promise<$_model.AddDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDevicesWithOptions(request, runtime);
  }

  /**
   * Adds a shared folder to the network disk.
   * 
   * @remarks
   * You can call this operation to share a specific folder with other users. You can also configure the folder permissions.
   * 
   * @param tmpReq - AddFilePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFilePermissionResponse
   */
  async addFilePermissionWithOptions(tmpReq: $_model.AddFilePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFilePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.AddFilePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFilePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFilePermissionResponse>(await this.callApi(params, req, runtime), new $_model.AddFilePermissionResponse({}));
  }

  /**
   * Adds a shared folder to the network disk.
   * 
   * @remarks
   * You can call this operation to share a specific folder with other users. You can also configure the folder permissions.
   * 
   * @param request - AddFilePermissionRequest
   * @returns AddFilePermissionResponse
   */
  async addFilePermission(request: $_model.AddFilePermissionRequest): Promise<$_model.AddFilePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFilePermissionWithOptions(request, runtime);
  }

  /**
   * Adds authorized users for a cloud computer share. The system automatically assigns cloud computers from a share to authorized users based on administrator-configured rules.
   * 
   * @param request - AddUserToDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToDesktopGroupResponse
   */
  async addUserToDesktopGroupWithOptions(request: $_model.AddUserToDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.simpleUserGroupId)) {
      query["SimpleUserGroupId"] = request.simpleUserGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    if (!$dara.isNull(request.userOuPath)) {
      query["UserOuPath"] = request.userOuPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToDesktopGroupResponse({}));
  }

  /**
   * Adds authorized users for a cloud computer share. The system automatically assigns cloud computers from a share to authorized users based on administrator-configured rules.
   * 
   * @param request - AddUserToDesktopGroupRequest
   * @returns AddUserToDesktopGroupResponse
   */
  async addUserToDesktopGroup(request: $_model.AddUserToDesktopGroupRequest): Promise<$_model.AddUserToDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToDesktopGroupWithOptions(request, runtime);
  }

  /**
   * 添加用户到超卖用户组
   * 
   * @param request - AddUserToDesktopOversoldUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToDesktopOversoldUserGroupResponse
   */
  async addUserToDesktopOversoldUserGroupWithOptions(request: $_model.AddUserToDesktopOversoldUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToDesktopOversoldUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addUserAmount)) {
      query["AddUserAmount"] = request.addUserAmount;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToDesktopOversoldUserGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToDesktopOversoldUserGroupResponse({}));
  }

  /**
   * 添加用户到超卖用户组
   * 
   * @param request - AddUserToDesktopOversoldUserGroupRequest
   * @returns AddUserToDesktopOversoldUserGroupResponse
   */
  async addUserToDesktopOversoldUserGroup(request: $_model.AddUserToDesktopOversoldUserGroupRequest): Promise<$_model.AddUserToDesktopOversoldUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
   * 实例开通公网IP
   * 
   * @param request - AllocateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateIpAddressResponse
   */
  async allocateIpAddressWithOptions(request: $_model.AllocateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateIpAddress",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.AllocateIpAddressResponse({}));
  }

  /**
   * 实例开通公网IP
   * 
   * @param request - AllocateIpAddressRequest
   * @returns AllocateIpAddressResponse
   */
  async allocateIpAddress(request: $_model.AllocateIpAddressRequest): Promise<$_model.AllocateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateIpAddressWithOptions(request, runtime);
  }

  /**
   * Apply an automatic snapshot policy to cloud computers. After the automatic snapshot policy is applied to the cloud computers, Elastic Desktop Service automatically creates snapshots for the cloud computers based on the time specified in the automatic snapshot policy.
   * 
   * @remarks
   * You can also associate an automatic snapshot policy with a cloud desktop in the Elastic Desktop Service (EDS) console. To do so, perform the following steps: 1. Log on to the EDS console. 2. Choose Desktops and Groups > Desktops in the left-side navigation pane. 3. Find the cloud desktop that you want to manage on the Cloud Desktops page and choose More > Change Automatic Snapshot Policy in the Actions column. 4. Configure a policy for the cloud desktop as prompted in the Change Automatic Snapshot Policy panel.
   * After you associate an automatic snapshot policy with the cloud desktop, the system creates snapshots for the cloud desktop based on the policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(request: $_model.ApplyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAutoSnapshotPolicyResponse({}));
  }

  /**
   * Apply an automatic snapshot policy to cloud computers. After the automatic snapshot policy is applied to the cloud computers, Elastic Desktop Service automatically creates snapshots for the cloud computers based on the time specified in the automatic snapshot policy.
   * 
   * @remarks
   * You can also associate an automatic snapshot policy with a cloud desktop in the Elastic Desktop Service (EDS) console. To do so, perform the following steps: 1. Log on to the EDS console. 2. Choose Desktops and Groups > Desktops in the left-side navigation pane. 3. Find the cloud desktop that you want to manage on the Cloud Desktops page and choose More > Change Automatic Snapshot Policy in the Actions column. 4. Configure a policy for the cloud desktop as prompted in the Change Automatic Snapshot Policy panel.
   * After you associate an automatic snapshot policy with the cloud desktop, the system creates snapshots for the cloud desktop based on the policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: $_model.ApplyAutoSnapshotPolicyRequest): Promise<$_model.ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Applies for the coordinate permissions.
   * 
   * @param request - ApplyCoordinatePrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCoordinatePrivilegeResponse
   */
  async applyCoordinatePrivilegeWithOptions(request: $_model.ApplyCoordinatePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCoordinatePrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCoordinatePrivilege",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCoordinatePrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.ApplyCoordinatePrivilegeResponse({}));
  }

  /**
   * Applies for the coordinate permissions.
   * 
   * @param request - ApplyCoordinatePrivilegeRequest
   * @returns ApplyCoordinatePrivilegeResponse
   */
  async applyCoordinatePrivilege(request: $_model.ApplyCoordinatePrivilegeRequest): Promise<$_model.ApplyCoordinatePrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCoordinatePrivilegeWithOptions(request, runtime);
  }

  /**
   * Applies for coordination monitoring. This operation is mainly used in administrator assistance scenarios and education scenarios.
   * 
   * @param request - ApplyCoordinationForMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCoordinationForMonitoringResponse
   */
  async applyCoordinationForMonitoringWithOptions(request: $_model.ApplyCoordinationForMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCoordinationForMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coordinatePolicyType)) {
      query["CoordinatePolicyType"] = request.coordinatePolicyType;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.initiatorType)) {
      query["InitiatorType"] = request.initiatorType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceCandidates)) {
      query["ResourceCandidates"] = request.resourceCandidates;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCoordinationForMonitoring",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.ApplyCoordinationForMonitoringResponse({}));
  }

  /**
   * Applies for coordination monitoring. This operation is mainly used in administrator assistance scenarios and education scenarios.
   * 
   * @param request - ApplyCoordinationForMonitoringRequest
   * @returns ApplyCoordinationForMonitoringResponse
   */
  async applyCoordinationForMonitoring(request: $_model.ApplyCoordinationForMonitoringRequest): Promise<$_model.ApplyCoordinationForMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCoordinationForMonitoringWithOptions(request, runtime);
  }

  /**
   * Allows you to upgrade images.
   * 
   * @remarks
   * The cloud computers for which you want to allow image updates must be in the Running state.
   * 
   * @param request - ApproveFotaUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdateWithOptions(request: $_model.ApproveFotaUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveFotaUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveFotaUpdate",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveFotaUpdateResponse>(await this.callApi(params, req, runtime), new $_model.ApproveFotaUpdateResponse({}));
  }

  /**
   * Allows you to upgrade images.
   * 
   * @remarks
   * The cloud computers for which you want to allow image updates must be in the Running state.
   * 
   * @param request - ApproveFotaUpdateRequest
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdate(request: $_model.ApproveFotaUpdateRequest): Promise<$_model.ApproveFotaUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  /**
   * 实例绑定公网IP
   * 
   * @param request - AssociateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateIpAddressResponse
   */
  async associateIpAddressWithOptions(request: $_model.AssociateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipId)) {
      query["EipId"] = request.eipId;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateIpAddress",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.AssociateIpAddressResponse({}));
  }

  /**
   * 实例绑定公网IP
   * 
   * @param request - AssociateIpAddressRequest
   * @returns AssociateIpAddressResponse
   */
  async associateIpAddress(request: $_model.AssociateIpAddressRequest): Promise<$_model.AssociateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateIpAddressWithOptions(request, runtime);
  }

  /**
   * Binds a premium bandwidth plan to an office network. A premium bandwidth plan is used together with only one office network.
   * 
   * @param request - AssociateNetworkPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateNetworkPackageResponse
   */
  async associateNetworkPackageWithOptions(request: $_model.AssociateNetworkPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateNetworkPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new $_model.AssociateNetworkPackageResponse({}));
  }

  /**
   * Binds a premium bandwidth plan to an office network. A premium bandwidth plan is used together with only one office network.
   * 
   * @param request - AssociateNetworkPackageRequest
   * @returns AssociateNetworkPackageResponse
   */
  async associateNetworkPackage(request: $_model.AssociateNetworkPackageRequest): Promise<$_model.AssociateNetworkPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateNetworkPackageWithOptions(request, runtime);
  }

  /**
   * 将创建的自定义路由表和同一VPC内的交换机绑定
   * 
   * @param request - AssociateRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateRouteTableResponse
   */
  async associateRouteTableWithOptions(request: $_model.AssociateRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateRouteTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateRouteTable",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.AssociateRouteTableResponse({}));
  }

  /**
   * 将创建的自定义路由表和同一VPC内的交换机绑定
   * 
   * @param request - AssociateRouteTableRequest
   * @returns AssociateRouteTableResponse
   */
  async associateRouteTable(request: $_model.AssociateRouteTableRequest): Promise<$_model.AssociateRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateRouteTableWithOptions(request, runtime);
  }

  /**
   * Binds an advanced office network to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Prerequisites
   * *   A CEN instance is created.
   * *   The office network is an advanced office network, and the account system type is convenient account.
   * >  The office network is added to the CEN instance when you create the instance. An office network can be added to only one CEN instance.
   * 
   * @param request - AttachCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachCenResponse
   */
  async attachCenWithOptions(request: $_model.AttachCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachCenResponse>(await this.callApi(params, req, runtime), new $_model.AttachCenResponse({}));
  }

  /**
   * Binds an advanced office network to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * Prerequisites
   * *   A CEN instance is created.
   * *   The office network is an advanced office network, and the account system type is convenient account.
   * >  The office network is added to the CEN instance when you create the instance. An office network can be added to only one CEN instance.
   * 
   * @param request - AttachCenRequest
   * @returns AttachCenResponse
   */
  async attachCen(request: $_model.AttachCenRequest): Promise<$_model.AttachCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachCenWithOptions(request, runtime);
  }

  /**
   * Binds a hardware client to a user.
   * 
   * @param request - AttachEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEndUserResponse
   */
  async attachEndUserWithOptions(request: $_model.AttachEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEndUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEndUser",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEndUserResponse>(await this.callApi(params, req, runtime), new $_model.AttachEndUserResponse({}));
  }

  /**
   * Binds a hardware client to a user.
   * 
   * @param request - AttachEndUserRequest
   * @returns AttachEndUserResponse
   */
  async attachEndUser(request: $_model.AttachEndUserRequest): Promise<$_model.AttachEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEndUserWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   The cloud computers for which you want to change their policies must be in the Running state.
   * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](https://help.aliyun.com/document_detail/436815.html) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
   * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
   * 
   * @param request - BatchModifyEntitlementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchModifyEntitlementResponse
   */
  async batchModifyEntitlementWithOptions(request: $_model.BatchModifyEntitlementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchModifyEntitlementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.maxDesktopPerUser)) {
      query["MaxDesktopPerUser"] = request.maxDesktopPerUser;
    }

    if (!$dara.isNull(request.maxUserPerDesktop)) {
      query["MaxUserPerDesktop"] = request.maxUserPerDesktop;
    }

    if (!$dara.isNull(request.preview)) {
      query["Preview"] = request.preview;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchModifyEntitlement",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchModifyEntitlementResponse>(await this.callApi(params, req, runtime), new $_model.BatchModifyEntitlementResponse({}));
  }

  /**
   * @remarks
   *   The cloud computers for which you want to change their policies must be in the Running state.
   * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](https://help.aliyun.com/document_detail/436815.html) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
   * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
   * 
   * @param request - BatchModifyEntitlementRequest
   * @returns BatchModifyEntitlementResponse
   */
  async batchModifyEntitlement(request: $_model.BatchModifyEntitlementRequest): Promise<$_model.BatchModifyEntitlementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchModifyEntitlementWithOptions(request, runtime);
  }

  /**
   * Binds a configuration group to resources.
   * 
   * @param request - BindConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindConfigGroupResponse
   */
  async bindConfigGroupWithOptions(request: $_model.BindConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInfos)) {
      query["ResourceInfos"] = request.resourceInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.BindConfigGroupResponse({}));
  }

  /**
   * Binds a configuration group to resources.
   * 
   * @param request - BindConfigGroupRequest
   * @returns BindConfigGroupResponse
   */
  async bindConfigGroup(request: $_model.BindConfigGroupRequest): Promise<$_model.BindConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindConfigGroupWithOptions(request, runtime);
  }

  /**
   * Cancels an automatic snapshot policy for cloud computers.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicyWithOptions(request: $_model.CancelAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CancelAutoSnapshotPolicyResponse({}));
  }

  /**
   * Cancels an automatic snapshot policy for cloud computers.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicy(request: $_model.CancelAutoSnapshotPolicyRequest): Promise<$_model.CancelAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Cancels a file sharing task.
   * 
   * @param request - CancelCdsFileShareLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCdsFileShareLinkResponse
   */
  async cancelCdsFileShareLinkWithOptions(request: $_model.CancelCdsFileShareLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCdsFileShareLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCdsFileShareLink",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new $_model.CancelCdsFileShareLinkResponse({}));
  }

  /**
   * Cancels a file sharing task.
   * 
   * @param request - CancelCdsFileShareLinkRequest
   * @returns CancelCdsFileShareLinkResponse
   */
  async cancelCdsFileShareLink(request: $_model.CancelCdsFileShareLinkRequest): Promise<$_model.CancelCdsFileShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCdsFileShareLinkWithOptions(request, runtime);
  }

  /**
   * Cancels monitoring on stream collaboration.
   * 
   * @param request - CancelCoordinationForMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCoordinationForMonitoringResponse
   */
  async cancelCoordinationForMonitoringWithOptions(request: $_model.CancelCoordinationForMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCoordinationForMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coIds)) {
      query["CoIds"] = request.coIds;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCoordinationForMonitoring",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.CancelCoordinationForMonitoringResponse({}));
  }

  /**
   * Cancels monitoring on stream collaboration.
   * 
   * @param request - CancelCoordinationForMonitoringRequest
   * @returns CancelCoordinationForMonitoringResponse
   */
  async cancelCoordinationForMonitoring(request: $_model.CancelCoordinationForMonitoringRequest): Promise<$_model.CancelCoordinationForMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCoordinationForMonitoringWithOptions(request, runtime);
  }

  /**
   * Cancels the operation of copying an image to another region.
   * 
   * @param request - CancelCopyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCopyImageResponse
   */
  async cancelCopyImageWithOptions(request: $_model.CancelCopyImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCopyImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCopyImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCopyImageResponse>(await this.callApi(params, req, runtime), new $_model.CancelCopyImageResponse({}));
  }

  /**
   * Cancels the operation of copying an image to another region.
   * 
   * @param request - CancelCopyImageRequest
   * @returns CancelCopyImageResponse
   */
  async cancelCopyImage(request: $_model.CancelCopyImageRequest): Promise<$_model.CancelCopyImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCopyImageWithOptions(request, runtime);
  }

  /**
   * Clones a policy based on an existing global policy.
   * 
   * @param request - CloneCenterPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneCenterPolicyResponse
   */
  async cloneCenterPolicyWithOptions(request: $_model.CloneCenterPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneCenterPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneCenterPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneCenterPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CloneCenterPolicyResponse({}));
  }

  /**
   * Clones a policy based on an existing global policy.
   * 
   * @param request - CloneCenterPolicyRequest
   * @returns CloneCenterPolicyResponse
   */
  async cloneCenterPolicy(request: $_model.CloneCenterPolicyRequest): Promise<$_model.CloneCenterPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneCenterPolicyWithOptions(request, runtime);
  }

  /**
   * Clones an existing policy to quickly create a policy.
   * 
   * @param request - ClonePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClonePolicyGroupResponse
   */
  async clonePolicyGroupWithOptions(request: $_model.ClonePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClonePolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClonePolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClonePolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ClonePolicyGroupResponse({}));
  }

  /**
   * Clones an existing policy to quickly create a policy.
   * 
   * @param request - ClonePolicyGroupRequest
   * @returns ClonePolicyGroupResponse
   */
  async clonePolicyGroup(request: $_model.ClonePolicyGroupRequest): Promise<$_model.ClonePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clonePolicyGroupWithOptions(request, runtime);
  }

  /**
   * After you create an object upload task, call this operation to upload the object.
   * 
   * @param request - CompleteCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteCdsFileResponse
   */
  async completeCdsFileWithOptions(request: $_model.CompleteCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uploadId)) {
      query["UploadId"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.CompleteCdsFileResponse({}));
  }

  /**
   * After you create an object upload task, call this operation to upload the object.
   * 
   * @param request - CompleteCdsFileRequest
   * @returns CompleteCdsFileResponse
   */
  async completeCdsFile(request: $_model.CompleteCdsFileRequest): Promise<$_model.CompleteCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeCdsFileWithOptions(request, runtime);
  }

  /**
   * Configures a conditional forwarder and trust relationship for a high-definition experience (HDX)-based office network (formerly workspace). You can call the operation to configure a trust relationship for an enterprise Active Directory (AD) office network.
   * 
   * @param request - ConfigADConnectorTrustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigADConnectorTrustResponse
   */
  async configADConnectorTrustWithOptions(request: $_model.ConfigADConnectorTrustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigADConnectorTrustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.rdsLicenseDomain)) {
      query["RdsLicenseDomain"] = request.rdsLicenseDomain;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.trustKey)) {
      query["TrustKey"] = request.trustKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigADConnectorTrust",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigADConnectorTrustResponse>(await this.callApi(params, req, runtime), new $_model.ConfigADConnectorTrustResponse({}));
  }

  /**
   * Configures a conditional forwarder and trust relationship for a high-definition experience (HDX)-based office network (formerly workspace). You can call the operation to configure a trust relationship for an enterprise Active Directory (AD) office network.
   * 
   * @param request - ConfigADConnectorTrustRequest
   * @returns ConfigADConnectorTrustResponse
   */
  async configADConnectorTrust(request: $_model.ConfigADConnectorTrustRequest): Promise<$_model.ConfigADConnectorTrustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configADConnectorTrustWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigADConnectorUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigADConnectorUserResponse
   */
  async configADConnectorUserWithOptions(request: $_model.ConfigADConnectorUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigADConnectorUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!$dara.isNull(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!$dara.isNull(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigADConnectorUser",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigADConnectorUserResponse>(await this.callApi(params, req, runtime), new $_model.ConfigADConnectorUserResponse({}));
  }

  /**
   * @param request - ConfigADConnectorUserRequest
   * @returns ConfigADConnectorUserResponse
   */
  async configADConnectorUser(request: $_model.ConfigADConnectorUserRequest): Promise<$_model.ConfigADConnectorUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configADConnectorUserWithOptions(request, runtime);
  }

  /**
   * Copies a file or a directory.
   * 
   * @param request - CopyCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyCdsFileResponse
   */
  async copyCdsFileWithOptions(request: $_model.CopyCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRename)) {
      query["AutoRename"] = request.autoRename;
    }

    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileReceiverId)) {
      query["FileReceiverId"] = request.fileReceiverId;
    }

    if (!$dara.isNull(request.fileReceiverType)) {
      query["FileReceiverType"] = request.fileReceiverType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.CopyCdsFileResponse({}));
  }

  /**
   * Copies a file or a directory.
   * 
   * @param request - CopyCdsFileRequest
   * @returns CopyCdsFileResponse
   */
  async copyCdsFile(request: $_model.CopyCdsFileRequest): Promise<$_model.CopyCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyCdsFileWithOptions(request, runtime);
  }

  /**
   * Copy an image to another region. If you want to share an image across regions, you can call this operation to copy the image to the destination region and then share the image.
   * 
   * @param request - CopyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyImageResponse
   */
  async copyImageWithOptions(request: $_model.CopyImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationDescription)) {
      query["DestinationDescription"] = request.destinationDescription;
    }

    if (!$dara.isNull(request.destinationImageName)) {
      query["DestinationImageName"] = request.destinationImageName;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyImageResponse>(await this.callApi(params, req, runtime), new $_model.CopyImageResponse({}));
  }

  /**
   * Copy an image to another region. If you want to share an image across regions, you can call this operation to copy the image to the destination region and then share the image.
   * 
   * @param request - CopyImageRequest
   * @returns CopyImageResponse
   */
  async copyImage(request: $_model.CopyImageRequest): Promise<$_model.CopyImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  /**
   * Creates a directory of the Active Directory (AD) type.
   * 
   * @remarks
   * An AD directory is used to connect to an enterprise\\"s existing Active Directory and is suitable for large-scale cloud computer deployment. You are charged directory fees when you connect your AD to cloud computers. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * 
   * @param request - CreateADConnectorDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateADConnectorDirectoryResponse
   */
  async createADConnectorDirectoryWithOptions(request: $_model.CreateADConnectorDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateADConnectorDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!$dara.isNull(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!$dara.isNull(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!$dara.isNull(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!$dara.isNull(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!$dara.isNull(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateADConnectorDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateADConnectorDirectoryResponse({}));
  }

  /**
   * Creates a directory of the Active Directory (AD) type.
   * 
   * @remarks
   * An AD directory is used to connect to an enterprise\\"s existing Active Directory and is suitable for large-scale cloud computer deployment. You are charged directory fees when you connect your AD to cloud computers. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * 
   * @param request - CreateADConnectorDirectoryRequest
   * @returns CreateADConnectorDirectoryResponse
   */
  async createADConnectorDirectory(request: $_model.CreateADConnectorDirectoryRequest): Promise<$_model.CreateADConnectorDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
  }

  /**
   * Creates an enterprise Active Directory (AD) office network (formerly workspace). Elastic Desktop Service supports the following types of accounts: convenience accounts and enterprise AD accounts.
   * 
   * @remarks
   * When you create an enterprise AD office network, the system automatically creates an AD connector to connect to an enterprise AD. You are charged for the AD connector. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * After you call this operation to create an AD office network, you must perform the following steps to complete AD domain setting:
   * 1.  Configure a conditional forwarder in a Domain Name System (DNS) server.
   * 2.  Configure a trust relationship in an AD domain controller and call the [ConfigADConnectorTrust](https://help.aliyun.com/document_detail/311258.html) operation to configure the trust relationship with the AD office network.
   * 3.  Call the [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) operation to query a list of organizational units (OUs) of the AD domain, and call the [ConfigADConnectorUser](https://help.aliyun.com/document_detail/311262.html) operation to specify an OU and administrator for the AD office network.
   *     >  When you create the AD office network, take note of the DomainUserName and DomainPassword parameters. If you specify the parameters, you need to only configure a conditional forwarder. If you do not specify the parameters, you must configure a conditional forwarder, trust relationship, and OU as prompted.
   * For more information, see [Create and manage enterprise AD office networks](https://help.aliyun.com/document_detail/214469.html).
   * 
   * @param request - CreateADConnectorOfficeSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateADConnectorOfficeSiteResponse
   */
  async createADConnectorOfficeSiteWithOptions(request: $_model.CreateADConnectorOfficeSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateADConnectorOfficeSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!$dara.isNull(request.backupDCHostname)) {
      query["BackupDCHostname"] = request.backupDCHostname;
    }

    if (!$dara.isNull(request.backupDns)) {
      query["BackupDns"] = request.backupDns;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!$dara.isNull(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!$dara.isNull(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!$dara.isNull(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!$dara.isNull(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!$dara.isNull(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateADConnectorOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new $_model.CreateADConnectorOfficeSiteResponse({}));
  }

  /**
   * Creates an enterprise Active Directory (AD) office network (formerly workspace). Elastic Desktop Service supports the following types of accounts: convenience accounts and enterprise AD accounts.
   * 
   * @remarks
   * When you create an enterprise AD office network, the system automatically creates an AD connector to connect to an enterprise AD. You are charged for the AD connector. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * After you call this operation to create an AD office network, you must perform the following steps to complete AD domain setting:
   * 1.  Configure a conditional forwarder in a Domain Name System (DNS) server.
   * 2.  Configure a trust relationship in an AD domain controller and call the [ConfigADConnectorTrust](https://help.aliyun.com/document_detail/311258.html) operation to configure the trust relationship with the AD office network.
   * 3.  Call the [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) operation to query a list of organizational units (OUs) of the AD domain, and call the [ConfigADConnectorUser](https://help.aliyun.com/document_detail/311262.html) operation to specify an OU and administrator for the AD office network.
   *     >  When you create the AD office network, take note of the DomainUserName and DomainPassword parameters. If you specify the parameters, you need to only configure a conditional forwarder. If you do not specify the parameters, you must configure a conditional forwarder, trust relationship, and OU as prompted.
   * For more information, see [Create and manage enterprise AD office networks](https://help.aliyun.com/document_detail/214469.html).
   * 
   * @param request - CreateADConnectorOfficeSiteRequest
   * @returns CreateADConnectorOfficeSiteResponse
   */
  async createADConnectorOfficeSite(request: $_model.CreateADConnectorOfficeSiteRequest): Promise<$_model.CreateADConnectorOfficeSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createADConnectorOfficeSiteWithOptions(request, runtime);
  }

  /**
   * Creates a File Storage NAS (NAS) file system and mount the file system to the workspace in which a desktop group resides.
   * 
   * @param request - CreateAndBindNasFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndBindNasFileSystemResponse
   */
  async createAndBindNasFileSystemWithOptions(request: $_model.CreateAndBindNasFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndBindNasFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndBindNasFileSystem",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndBindNasFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndBindNasFileSystemResponse({}));
  }

  /**
   * Creates a File Storage NAS (NAS) file system and mount the file system to the workspace in which a desktop group resides.
   * 
   * @param request - CreateAndBindNasFileSystemRequest
   * @returns CreateAndBindNasFileSystemResponse
   */
  async createAndBindNasFileSystem(request: $_model.CreateAndBindNasFileSystemRequest): Promise<$_model.CreateAndBindNasFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndBindNasFileSystemWithOptions(request, runtime);
  }

  /**
   * Creates an automatic snapshot policy. WUYING WorkSpace automatically creates snapshots based on the time specified by the cron expression in the automatic snapshot policy.
   * 
   * @remarks
   * You can call the operation to create an automatic snapshot policy based on a CRON expression. Then, the system automatically creates snapshots of a cloud desktop based on the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(request: $_model.CreateAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoSnapshotPolicyResponse({}));
  }

  /**
   * Creates an automatic snapshot policy. WUYING WorkSpace automatically creates snapshots based on the time specified by the cron expression in the automatic snapshot policy.
   * 
   * @remarks
   * You can call the operation to create an automatic snapshot policy based on a CRON expression. Then, the system automatically creates snapshots of a cloud desktop based on the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: $_model.CreateAutoSnapshotPolicyRequest): Promise<$_model.CreateAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Creates data transfer plans.
   * 
   * @param request - CreateBandwidthResourcePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBandwidthResourcePackagesResponse
   */
  async createBandwidthResourcePackagesWithOptions(request: $_model.CreateBandwidthResourcePackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBandwidthResourcePackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.packageSize)) {
      query["PackageSize"] = request.packageSize;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBandwidthResourcePackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBandwidthResourcePackagesResponse>(await this.callApi(params, req, runtime), new $_model.CreateBandwidthResourcePackagesResponse({}));
  }

  /**
   * Creates data transfer plans.
   * 
   * @param request - CreateBandwidthResourcePackagesRequest
   * @returns CreateBandwidthResourcePackagesResponse
   */
  async createBandwidthResourcePackages(request: $_model.CreateBandwidthResourcePackagesRequest): Promise<$_model.CreateBandwidthResourcePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBandwidthResourcePackagesWithOptions(request, runtime);
  }

  /**
   * Creates a custom cloud computer template.
   * 
   * @remarks
   * Cloud computer templates include system templates and custom templates. A system template is the default template provided by Alibaba Cloud. You can call this operation to create a custom template.
   * 
   * @param request - CreateBundleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBundleResponse
   */
  async createBundleWithOptions(request: $_model.CreateBundleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBundleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!$dara.isNull(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBundle",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBundleResponse>(await this.callApi(params, req, runtime), new $_model.CreateBundleResponse({}));
  }

  /**
   * Creates a custom cloud computer template.
   * 
   * @remarks
   * Cloud computer templates include system templates and custom templates. A system template is the default template provided by Alibaba Cloud. You can call this operation to create a custom template.
   * 
   * @param request - CreateBundleRequest
   * @returns CreateBundleResponse
   */
  async createBundle(request: $_model.CreateBundleRequest): Promise<$_model.CreateBundleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBundleWithOptions(request, runtime);
  }

  /**
   * Uploads a file to a cloud disk.
   * 
   * @remarks
   * After the RAM permissions are authenticated, you can call the CreateCdsFile operation to obtain the upload URL of a file and upload the file to a cloud disk.
   * 
   * @param request - CreateCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCdsFileResponse
   */
  async createCdsFileWithOptions(request: $_model.CreateCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileHash)) {
      query["FileHash"] = request.fileHash;
    }

    if (!$dara.isNull(request.fileLength)) {
      query["FileLength"] = request.fileLength;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.parentFileId)) {
      query["ParentFileId"] = request.parentFileId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateCdsFileResponse({}));
  }

  /**
   * Uploads a file to a cloud disk.
   * 
   * @remarks
   * After the RAM permissions are authenticated, you can call the CreateCdsFile operation to obtain the upload URL of a file and upload the file to a cloud disk.
   * 
   * @param request - CreateCdsFileRequest
   * @returns CreateCdsFileResponse
   */
  async createCdsFile(request: $_model.CreateCdsFileRequest): Promise<$_model.CreateCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCdsFileWithOptions(request, runtime);
  }

  /**
   * Creates a file sharing task.
   * 
   * @param request - CreateCdsFileShareLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCdsFileShareLinkResponse
   */
  async createCdsFileShareLinkWithOptions(request: $_model.CreateCdsFileShareLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCdsFileShareLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      query["DisableDownload"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      query["DisablePreview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      query["DisableSave"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.previewLimit)) {
      query["PreviewLimit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.saveLimit)) {
      query["SaveLimit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      query["SharePwd"] = request.sharePwd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCdsFileShareLink",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateCdsFileShareLinkResponse({}));
  }

  /**
   * Creates a file sharing task.
   * 
   * @param request - CreateCdsFileShareLinkRequest
   * @returns CreateCdsFileShareLinkResponse
   */
  async createCdsFileShareLink(request: $_model.CreateCdsFileShareLinkRequest): Promise<$_model.CreateCdsFileShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCdsFileShareLinkWithOptions(request, runtime);
  }

  /**
   * Creates a center policy.
   * 
   * @param request - CreateCenterPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCenterPolicyResponse
   */
  async createCenterPolicyWithOptions(request: $_model.CreateCenterPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCenterPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.academicProxy)) {
      query["AcademicProxy"] = request.academicProxy;
    }

    if (!$dara.isNull(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!$dara.isNull(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!$dara.isNull(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!$dara.isNull(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.autoReconnect)) {
      query["AutoReconnect"] = request.autoReconnect;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clientControlMenu)) {
      query["ClientControlMenu"] = request.clientControlMenu;
    }

    if (!$dara.isNull(request.clientCreateSnapshot)) {
      query["ClientCreateSnapshot"] = request.clientCreateSnapshot;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.clipboardGraineds)) {
      query["ClipboardGraineds"] = request.clipboardGraineds;
    }

    if (!$dara.isNull(request.clipboardScope)) {
      query["ClipboardScope"] = request.clipboardScope;
    }

    if (!$dara.isNull(request.colorEnhancement)) {
      query["ColorEnhancement"] = request.colorEnhancement;
    }

    if (!$dara.isNull(request.cpdDriveClipboard)) {
      query["CpdDriveClipboard"] = request.cpdDriveClipboard;
    }

    if (!$dara.isNull(request.cpuDownGradeDuration)) {
      query["CpuDownGradeDuration"] = request.cpuDownGradeDuration;
    }

    if (!$dara.isNull(request.cpuOverload)) {
      query["CpuOverload"] = request.cpuOverload;
    }

    if (!$dara.isNull(request.cpuProcessors)) {
      query["CpuProcessors"] = request.cpuProcessors;
    }

    if (!$dara.isNull(request.cpuProtectedMode)) {
      query["CpuProtectedMode"] = request.cpuProtectedMode;
    }

    if (!$dara.isNull(request.cpuRateLimit)) {
      query["CpuRateLimit"] = request.cpuRateLimit;
    }

    if (!$dara.isNull(request.cpuSampleDuration)) {
      query["CpuSampleDuration"] = request.cpuSampleDuration;
    }

    if (!$dara.isNull(request.cpuSingleRateLimit)) {
      query["CpuSingleRateLimit"] = request.cpuSingleRateLimit;
    }

    if (!$dara.isNull(request.deviceConnectHint)) {
      query["DeviceConnectHint"] = request.deviceConnectHint;
    }

    if (!$dara.isNull(request.deviceRedirects)) {
      query["DeviceRedirects"] = request.deviceRedirects;
    }

    if (!$dara.isNull(request.deviceRules)) {
      query["DeviceRules"] = request.deviceRules;
    }

    if (!$dara.isNull(request.disconnectKeepSession)) {
      query["DisconnectKeepSession"] = request.disconnectKeepSession;
    }

    if (!$dara.isNull(request.disconnectKeepSessionTime)) {
      query["DisconnectKeepSessionTime"] = request.disconnectKeepSessionTime;
    }

    if (!$dara.isNull(request.diskOverload)) {
      query["DiskOverload"] = request.diskOverload;
    }

    if (!$dara.isNull(request.displayMode)) {
      query["DisplayMode"] = request.displayMode;
    }

    if (!$dara.isNull(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!$dara.isNull(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!$dara.isNull(request.enableSessionRateLimiting)) {
      query["EnableSessionRateLimiting"] = request.enableSessionRateLimiting;
    }

    if (!$dara.isNull(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!$dara.isNull(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!$dara.isNull(request.externalDrive)) {
      query["ExternalDrive"] = request.externalDrive;
    }

    if (!$dara.isNull(request.fileMigrate)) {
      query["FileMigrate"] = request.fileMigrate;
    }

    if (!$dara.isNull(request.fileTransferAddress)) {
      query["FileTransferAddress"] = request.fileTransferAddress;
    }

    if (!$dara.isNull(request.fileTransferSpeed)) {
      query["FileTransferSpeed"] = request.fileTransferSpeed;
    }

    if (!$dara.isNull(request.fileTransferSpeedLocation)) {
      query["FileTransferSpeedLocation"] = request.fileTransferSpeedLocation;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!$dara.isNull(request.internetPrinter)) {
      query["InternetPrinter"] = request.internetPrinter;
    }

    if (!$dara.isNull(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.maxReconnectTime)) {
      query["MaxReconnectTime"] = request.maxReconnectTime;
    }

    if (!$dara.isNull(request.memoryDownGradeDuration)) {
      query["MemoryDownGradeDuration"] = request.memoryDownGradeDuration;
    }

    if (!$dara.isNull(request.memoryOverload)) {
      query["MemoryOverload"] = request.memoryOverload;
    }

    if (!$dara.isNull(request.memoryProcessors)) {
      query["MemoryProcessors"] = request.memoryProcessors;
    }

    if (!$dara.isNull(request.memoryProtectedMode)) {
      query["MemoryProtectedMode"] = request.memoryProtectedMode;
    }

    if (!$dara.isNull(request.memoryRateLimit)) {
      query["MemoryRateLimit"] = request.memoryRateLimit;
    }

    if (!$dara.isNull(request.memorySampleDuration)) {
      query["MemorySampleDuration"] = request.memorySampleDuration;
    }

    if (!$dara.isNull(request.memorySingleRateLimit)) {
      query["MemorySingleRateLimit"] = request.memorySingleRateLimit;
    }

    if (!$dara.isNull(request.mobileRestart)) {
      query["MobileRestart"] = request.mobileRestart;
    }

    if (!$dara.isNull(request.mobileSafeMenu)) {
      query["MobileSafeMenu"] = request.mobileSafeMenu;
    }

    if (!$dara.isNull(request.mobileShutdown)) {
      query["MobileShutdown"] = request.mobileShutdown;
    }

    if (!$dara.isNull(request.mobileWuyingKeeper)) {
      query["MobileWuyingKeeper"] = request.mobileWuyingKeeper;
    }

    if (!$dara.isNull(request.mobileWyAssistant)) {
      query["MobileWyAssistant"] = request.mobileWyAssistant;
    }

    if (!$dara.isNull(request.modelLibrary)) {
      query["ModelLibrary"] = request.modelLibrary;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!$dara.isNull(request.netRedirectRule)) {
      query["NetRedirectRule"] = request.netRedirectRule;
    }

    if (!$dara.isNull(request.noOperationDisconnect)) {
      query["NoOperationDisconnect"] = request.noOperationDisconnect;
    }

    if (!$dara.isNull(request.noOperationDisconnectTime)) {
      query["NoOperationDisconnectTime"] = request.noOperationDisconnectTime;
    }

    if (!$dara.isNull(request.portProxy)) {
      query["PortProxy"] = request.portProxy;
    }

    if (!$dara.isNull(request.printerRedirect)) {
      query["PrinterRedirect"] = request.printerRedirect;
    }

    if (!$dara.isNull(request.qualityEnhancement)) {
      query["QualityEnhancement"] = request.qualityEnhancement;
    }

    if (!$dara.isNull(request.recordEventDuration)) {
      query["RecordEventDuration"] = request.recordEventDuration;
    }

    if (!$dara.isNull(request.recordEventFileExts)) {
      query["RecordEventFileExts"] = request.recordEventFileExts;
    }

    if (!$dara.isNull(request.recordEventFilePaths)) {
      query["RecordEventFilePaths"] = request.recordEventFilePaths;
    }

    if (!$dara.isNull(request.recordEventLevels)) {
      query["RecordEventLevels"] = request.recordEventLevels;
    }

    if (!$dara.isNull(request.recordEventRegisters)) {
      query["RecordEventRegisters"] = request.recordEventRegisters;
    }

    if (!$dara.isNull(request.recordEvents)) {
      query["RecordEvents"] = request.recordEvents;
    }

    if (!$dara.isNull(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!$dara.isNull(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!$dara.isNull(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!$dara.isNull(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!$dara.isNull(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!$dara.isNull(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!$dara.isNull(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!$dara.isNull(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!$dara.isNull(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!$dara.isNull(request.resetDesktop)) {
      query["ResetDesktop"] = request.resetDesktop;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      query["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionModel)) {
      query["ResolutionModel"] = request.resolutionModel;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      query["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.safeMenu)) {
      query["SafeMenu"] = request.safeMenu;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!$dara.isNull(request.screenDisplayMode)) {
      query["ScreenDisplayMode"] = request.screenDisplayMode;
    }

    if (!$dara.isNull(request.sessionMaxRateKbps)) {
      query["SessionMaxRateKbps"] = request.sessionMaxRateKbps;
    }

    if (!$dara.isNull(request.smoothEnhancement)) {
      query["SmoothEnhancement"] = request.smoothEnhancement;
    }

    if (!$dara.isNull(request.statusMonitor)) {
      query["StatusMonitor"] = request.statusMonitor;
    }

    if (!$dara.isNull(request.streamingMode)) {
      query["StreamingMode"] = request.streamingMode;
    }

    if (!$dara.isNull(request.targetFps)) {
      query["TargetFps"] = request.targetFps;
    }

    if (!$dara.isNull(request.taskbar)) {
      query["Taskbar"] = request.taskbar;
    }

    if (!$dara.isNull(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!$dara.isNull(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!$dara.isNull(request.useTime)) {
      query["UseTime"] = request.useTime;
    }

    if (!$dara.isNull(request.videoEncAvgKbps)) {
      query["VideoEncAvgKbps"] = request.videoEncAvgKbps;
    }

    if (!$dara.isNull(request.videoEncMaxQP)) {
      query["VideoEncMaxQP"] = request.videoEncMaxQP;
    }

    if (!$dara.isNull(request.videoEncMinQP)) {
      query["VideoEncMinQP"] = request.videoEncMinQP;
    }

    if (!$dara.isNull(request.videoEncPeakKbps)) {
      query["VideoEncPeakKbps"] = request.videoEncPeakKbps;
    }

    if (!$dara.isNull(request.videoEncPolicy)) {
      query["VideoEncPolicy"] = request.videoEncPolicy;
    }

    if (!$dara.isNull(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!$dara.isNull(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!$dara.isNull(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!$dara.isNull(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!$dara.isNull(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!$dara.isNull(request.watermarkColumnAmount)) {
      query["WatermarkColumnAmount"] = request.watermarkColumnAmount;
    }

    if (!$dara.isNull(request.watermarkCustomText)) {
      query["WatermarkCustomText"] = request.watermarkCustomText;
    }

    if (!$dara.isNull(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!$dara.isNull(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!$dara.isNull(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!$dara.isNull(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!$dara.isNull(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!$dara.isNull(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!$dara.isNull(request.watermarkShadow)) {
      query["WatermarkShadow"] = request.watermarkShadow;
    }

    if (!$dara.isNull(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!$dara.isNull(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    if (!$dara.isNull(request.wuyingKeeper)) {
      query["WuyingKeeper"] = request.wuyingKeeper;
    }

    if (!$dara.isNull(request.wyAssistant)) {
      query["WyAssistant"] = request.wyAssistant;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCenterPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCenterPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateCenterPolicyResponse({}));
  }

  /**
   * Creates a center policy.
   * 
   * @param request - CreateCenterPolicyRequest
   * @returns CreateCenterPolicyResponse
   */
  async createCenterPolicy(request: $_model.CreateCenterPolicyRequest): Promise<$_model.CreateCenterPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCenterPolicyWithOptions(request, runtime);
  }

  /**
   * Authorizes a user to use a team space.
   * 
   * @remarks
   * The list of teams of a cloud disk in Cloud Drive Service is synchronized from the Organization tab in the Elastic Desktop Service (EDS) console. You can choose Users > Manager User > User > Organization in the console. If you want to authorize a user to use a team space, you must move the user to the corresponding organization. After you move the user, the user can view the menu bar of the team space on a Cloud Drive Service client.
   * 
   * @param request - CreateCloudDriveGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudDriveGroupResponse
   */
  async createCloudDriveGroupWithOptions(request: $_model.CreateCloudDriveGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudDriveGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminUserIds)) {
      query["AdminUserIds"] = request.adminUserIds;
    }

    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.totalSize)) {
      query["TotalSize"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudDriveGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudDriveGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudDriveGroupResponse({}));
  }

  /**
   * Authorizes a user to use a team space.
   * 
   * @remarks
   * The list of teams of a cloud disk in Cloud Drive Service is synchronized from the Organization tab in the Elastic Desktop Service (EDS) console. You can choose Users > Manager User > User > Organization in the console. If you want to authorize a user to use a team space, you must move the user to the corresponding organization. After you move the user, the user can view the menu bar of the team space on a Cloud Drive Service client.
   * 
   * @param request - CreateCloudDriveGroupRequest
   * @returns CreateCloudDriveGroupResponse
   */
  async createCloudDriveGroup(request: $_model.CreateCloudDriveGroupRequest): Promise<$_model.CreateCloudDriveGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudDriveGroupWithOptions(request, runtime);
  }

  /**
   * Creates an enterprise drive.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Enterprise Drive Service (formerly Cloud Drive Service). For more information, see [Overview](https://help.aliyun.com/document_detail/386301.html).
   * 
   * @param request - CreateCloudDriveServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudDriveServiceResponse
   */
  async createCloudDriveServiceWithOptions(request: $_model.CreateCloudDriveServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudDriveServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.cdsChargeType)) {
      query["CdsChargeType"] = request.cdsChargeType;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteType)) {
      query["OfficeSiteType"] = request.officeSiteType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    if (!$dara.isNull(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    if (!$dara.isNull(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudDriveService",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudDriveServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudDriveServiceResponse({}));
  }

  /**
   * Creates an enterprise drive.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Enterprise Drive Service (formerly Cloud Drive Service). For more information, see [Overview](https://help.aliyun.com/document_detail/386301.html).
   * 
   * @param request - CreateCloudDriveServiceRequest
   * @returns CreateCloudDriveServiceResponse
   */
  async createCloudDriveService(request: $_model.CreateCloudDriveServiceRequest): Promise<$_model.CreateCloudDriveServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudDriveServiceWithOptions(request, runtime);
  }

  /**
   * Creates the users of a cloud disk.
   * 
   * @param request - CreateCloudDriveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudDriveUsersResponse
   */
  async createCloudDriveUsersWithOptions(request: $_model.CreateCloudDriveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudDriveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudDriveUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudDriveUsersResponse({}));
  }

  /**
   * Creates the users of a cloud disk.
   * 
   * @param request - CreateCloudDriveUsersRequest
   * @returns CreateCloudDriveUsersResponse
   */
  async createCloudDriveUsers(request: $_model.CreateCloudDriveUsersRequest): Promise<$_model.CreateCloudDriveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudDriveUsersWithOptions(request, runtime);
  }

  /**
   * Creates a configuration group. A configuration group stores the setup details for scheduled tasks on cloud computers.
   * 
   * @param request - CreateConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigGroupResponse
   */
  async createConfigGroupWithOptions(request: $_model.CreateConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configTimers)) {
      query["ConfigTimers"] = request.configTimers;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigGroupResponse({}));
  }

  /**
   * Creates a configuration group. A configuration group stores the setup details for scheduled tasks on cloud computers.
   * 
   * @param request - CreateConfigGroupRequest
   * @returns CreateConfigGroupResponse
   */
  async createConfigGroup(request: $_model.CreateConfigGroupRequest): Promise<$_model.CreateConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigGroupWithOptions(request, runtime);
  }

  /**
   * Creates a shared group.
   * 
   * @remarks
   *   To learn about the features, application scenarios, usage limits, scaling policies, and other details of shared groups, refer to [Overview](https://help.aliyun.com/document_detail/290959.html).
   * *   Before you call this operation, make sure that the required resources, such as the office network, cloud computer template, and policies, are created.
   * 
   * @param request - CreateDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDesktopGroupResponse
   */
  async createDesktopGroupWithOptions(request: $_model.CreateDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allClassifyUsers)) {
      query["AllClassifyUsers"] = request.allClassifyUsers;
    }

    if (!$dara.isNull(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!$dara.isNull(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.buyDesktopsCount)) {
      query["BuyDesktopsCount"] = request.buyDesktopsCount;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.connectDuration)) {
      query["ConnectDuration"] = request.connectDuration;
    }

    if (!$dara.isNull(request.dataDiskCategory)) {
      query["DataDiskCategory"] = request.dataDiskCategory;
    }

    if (!$dara.isNull(request.dataDiskPerLevel)) {
      query["DataDiskPerLevel"] = request.dataDiskPerLevel;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.defaultInitDesktopCount)) {
      query["DefaultInitDesktopCount"] = request.defaultInitDesktopCount;
    }

    if (!$dara.isNull(request.defaultLanguage)) {
      query["DefaultLanguage"] = request.defaultLanguage;
    }

    if (!$dara.isNull(request.deleteDuration)) {
      query["DeleteDuration"] = request.deleteDuration;
    }

    if (!$dara.isNull(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.exclusiveType)) {
      query["ExclusiveType"] = request.exclusiveType;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.groupAmount)) {
      query["GroupAmount"] = request.groupAmount;
    }

    if (!$dara.isNull(request.groupVersion)) {
      query["GroupVersion"] = request.groupVersion;
    }

    if (!$dara.isNull(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!$dara.isNull(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!$dara.isNull(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!$dara.isNull(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!$dara.isNull(request.multiResource)) {
      query["MultiResource"] = request.multiResource;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.profileFollowSwitch)) {
      query["ProfileFollowSwitch"] = request.profileFollowSwitch;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.ratioThreshold)) {
      query["RatioThreshold"] = request.ratioThreshold;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!$dara.isNull(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    if (!$dara.isNull(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    if (!$dara.isNull(request.simpleUserGroupId)) {
      query["SimpleUserGroupId"] = request.simpleUserGroupId;
    }

    if (!$dara.isNull(request.snapshotPolicyId)) {
      query["SnapshotPolicyId"] = request.snapshotPolicyId;
    }

    if (!$dara.isNull(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    if (!$dara.isNull(request.systemDiskCategory)) {
      query["SystemDiskCategory"] = request.systemDiskCategory;
    }

    if (!$dara.isNull(request.systemDiskPerLevel)) {
      query["SystemDiskPerLevel"] = request.systemDiskPerLevel;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.timerGroupId)) {
      query["TimerGroupId"] = request.timerGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    if (!$dara.isNull(request.userOuPath)) {
      query["UserOuPath"] = request.userOuPath;
    }

    if (!$dara.isNull(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!$dara.isNull(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDesktopGroupResponse({}));
  }

  /**
   * Creates a shared group.
   * 
   * @remarks
   *   To learn about the features, application scenarios, usage limits, scaling policies, and other details of shared groups, refer to [Overview](https://help.aliyun.com/document_detail/290959.html).
   * *   Before you call this operation, make sure that the required resources, such as the office network, cloud computer template, and policies, are created.
   * 
   * @param request - CreateDesktopGroupRequest
   * @returns CreateDesktopGroupResponse
   */
  async createDesktopGroup(request: $_model.CreateDesktopGroupRequest): Promise<$_model.CreateDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDesktopGroupWithOptions(request, runtime);
  }

  /**
   * 创建桌面超卖组
   * 
   * @param request - CreateDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDesktopOversoldGroupResponse
   */
  async createDesktopOversoldGroupWithOptions(request: $_model.CreateDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!$dara.isNull(request.oversoldWarn)) {
      query["OversoldWarn"] = request.oversoldWarn;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDesktopOversoldGroupResponse({}));
  }

  /**
   * 创建桌面超卖组
   * 
   * @param request - CreateDesktopOversoldGroupRequest
   * @returns CreateDesktopOversoldGroupResponse
   */
  async createDesktopOversoldGroup(request: $_model.CreateDesktopOversoldGroupRequest): Promise<$_model.CreateDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * Creates cloud computers. If you specify end users when you create cloud computers, the cloud computers are assigned to the end users after the cloud computers are created.
   * 
   * @remarks
   * Before you create cloud computers, complete the following preparations:
   * *   An office network (formerly called workspace) and users are created. For more information, see:
   *     *   Convenience office network: [CreateSimpleOfficeSite](https://help.aliyun.com/document_detail/215416.html) and [CreateUsers](https://help.aliyun.com/document_detail/437832.html).
   *     *   Active Directory (AD) office network: [CreateADConnectorOfficeSite](https://help.aliyun.com/document_detail/215417.html) and [Create an AD user](https://help.aliyun.com/document_detail/188619.html).
   * *   Make sure a cloud computer template exists. If no cloud computer template exists, call the [CreateBundle](https://help.aliyun.com/document_detail/188883.html) operation to create a template.
   * *   Make sure a policy exists. If no policy exists, call the [CreatePolicyGroup](https://help.aliyun.com/document_detail/188889.html) operation to create a policy.
   * If you want the cloud computers to automatically execute a custom command script, you can use the `UserCommands` field to configure a custom command.
   * 
   * @param tmpReq - CreateDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDesktopsResponse
   */
  async createDesktopsWithOptions(tmpReq: $_model.CreateDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDesktopsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDesktopsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.desktopAttachment)) {
      request.desktopAttachmentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.desktopAttachment, "DesktopAttachment", "json");
    }

    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.appRuleId)) {
      query["AppRuleId"] = request.appRuleId;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.bundleModels)) {
      query["BundleModels"] = request.bundleModels;
    }

    if (!$dara.isNull(request.channelCookie)) {
      query["ChannelCookie"] = request.channelCookie;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.desktopAttachmentShrink)) {
      query["DesktopAttachment"] = request.desktopAttachmentShrink;
    }

    if (!$dara.isNull(request.desktopMemberIp)) {
      query["DesktopMemberIp"] = request.desktopMemberIp;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopNameSuffix)) {
      query["DesktopNameSuffix"] = request.desktopNameSuffix;
    }

    if (!$dara.isNull(request.desktopTimers)) {
      query["DesktopTimers"] = request.desktopTimers;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.monthDesktopSetting)) {
      query["MonthDesktopSetting"] = request.monthDesktopSetting;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.qosRuleId)) {
      query["QosRuleId"] = request.qosRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.savingPlanId)) {
      query["SavingPlanId"] = request.savingPlanId;
    }

    if (!$dara.isNull(request.snapshotPolicyId)) {
      query["SnapshotPolicyId"] = request.snapshotPolicyId;
    }

    if (!$dara.isNull(request.subnetId)) {
      query["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.timerGroupId)) {
      query["TimerGroupId"] = request.timerGroupId;
    }

    if (!$dara.isNull(request.userAssignMode)) {
      query["UserAssignMode"] = request.userAssignMode;
    }

    if (!$dara.isNull(request.userCommands)) {
      query["UserCommands"] = request.userCommands;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!$dara.isNull(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.CreateDesktopsResponse({}));
  }

  /**
   * Creates cloud computers. If you specify end users when you create cloud computers, the cloud computers are assigned to the end users after the cloud computers are created.
   * 
   * @remarks
   * Before you create cloud computers, complete the following preparations:
   * *   An office network (formerly called workspace) and users are created. For more information, see:
   *     *   Convenience office network: [CreateSimpleOfficeSite](https://help.aliyun.com/document_detail/215416.html) and [CreateUsers](https://help.aliyun.com/document_detail/437832.html).
   *     *   Active Directory (AD) office network: [CreateADConnectorOfficeSite](https://help.aliyun.com/document_detail/215417.html) and [Create an AD user](https://help.aliyun.com/document_detail/188619.html).
   * *   Make sure a cloud computer template exists. If no cloud computer template exists, call the [CreateBundle](https://help.aliyun.com/document_detail/188883.html) operation to create a template.
   * *   Make sure a policy exists. If no policy exists, call the [CreatePolicyGroup](https://help.aliyun.com/document_detail/188889.html) operation to create a policy.
   * If you want the cloud computers to automatically execute a custom command script, you can use the `UserCommands` field to configure a custom command.
   * 
   * @param request - CreateDesktopsRequest
   * @returns CreateDesktopsResponse
   */
  async createDesktops(request: $_model.CreateDesktopsRequest): Promise<$_model.CreateDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDesktopsWithOptions(request, runtime);
  }

  /**
   * Enables the disk encryption feature and adds the service-linked role that is encrypted by Cloud Drive Service to a Resource Access Management (RAM) user.
   * 
   * @param request - CreateDiskEncryptionServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskEncryptionServiceResponse
   */
  async createDiskEncryptionServiceWithOptions(request: $_model.CreateDiskEncryptionServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiskEncryptionServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiskEncryptionService",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiskEncryptionServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiskEncryptionServiceResponse({}));
  }

  /**
   * Enables the disk encryption feature and adds the service-linked role that is encrypted by Cloud Drive Service to a Resource Access Management (RAM) user.
   * 
   * @param request - CreateDiskEncryptionServiceRequest
   * @returns CreateDiskEncryptionServiceResponse
   */
  async createDiskEncryptionService(request: $_model.CreateDiskEncryptionServiceRequest): Promise<$_model.CreateDiskEncryptionServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskEncryptionServiceWithOptions(request, runtime);
  }

  /**
   * Creates a user-level storage resource.
   * 
   * @param request - CreateDriveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDriveResponse
   */
  async createDriveWithOptions(request: $_model.CreateDriveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDriveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.driveName)) {
      query["DriveName"] = request.driveName;
    }

    if (!$dara.isNull(request.externalDomainId)) {
      query["ExternalDomainId"] = request.externalDomainId;
    }

    if (!$dara.isNull(request.profileRoaming)) {
      query["ProfileRoaming"] = request.profileRoaming;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrive",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDriveResponse>(await this.callApi(params, req, runtime), new $_model.CreateDriveResponse({}));
  }

  /**
   * Creates a user-level storage resource.
   * 
   * @param request - CreateDriveRequest
   * @returns CreateDriveResponse
   */
  async createDrive(request: $_model.CreateDriveRequest): Promise<$_model.CreateDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDriveWithOptions(request, runtime);
  }

  /**
   * Creates a data report export task.
   * 
   * @param request - CreateEcdReportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEcdReportTaskResponse
   */
  async createEcdReportTaskWithOptions(request: $_model.CreateEcdReportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEcdReportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterList)) {
      query["FilterList"] = request.filterList;
    }

    if (!$dara.isNull(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!$dara.isNull(request.reportFileName)) {
      query["ReportFileName"] = request.reportFileName;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEcdReportTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEcdReportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateEcdReportTaskResponse({}));
  }

  /**
   * Creates a data report export task.
   * 
   * @param request - CreateEcdReportTaskRequest
   * @returns CreateEcdReportTaskResponse
   */
  async createEcdReportTask(request: $_model.CreateEcdReportTaskRequest): Promise<$_model.CreateEcdReportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEcdReportTaskWithOptions(request, runtime);
  }

  /**
   * 添加DNAT条目
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

    if (!$dara.isNull(request.forwardTableId)) {
      query["ForwardTableId"] = request.forwardTableId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateForwardEntry",
      version: "2020-09-30",
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
   * 添加DNAT条目
   * 
   * @param request - CreateForwardEntryRequest
   * @returns CreateForwardEntryResponse
   */
  async createForwardEntry(request: $_model.CreateForwardEntryRequest): Promise<$_model.CreateForwardEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createForwardEntryWithOptions(request, runtime);
  }

  /**
   * Creates a custom image based on a deployed cloud computer. Then, you can use the custom image to create cloud computers that have the same configurations. This prevents the repeated settings when you create cloud computers.
   * 
   * @param request - CreateImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageResponse
   */
  async createImageWithOptions(request: $_model.CreateImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCleanUserdata)) {
      query["AutoCleanUserdata"] = request.autoCleanUserdata;
    }

    if (!$dara.isNull(request.dataSnapshotIds)) {
      query["DataSnapshotIds"] = request.dataSnapshotIds;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.imageResourceType)) {
      query["ImageResourceType"] = request.imageResourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImage",
      version: "2020-09-30",
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
   * Creates a custom image based on a deployed cloud computer. Then, you can use the custom image to create cloud computers that have the same configurations. This prevents the repeated settings when you create cloud computers.
   * 
   * @param request - CreateImageRequest
   * @returns CreateImageResponse
   */
  async createImage(request: $_model.CreateImageRequest): Promise<$_model.CreateImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  /**
   * Create a NAS file system.
   * 
   * @remarks
   * <props="china">
   * - Each standard workspace can create one NAS file system to meet the need for sharing files between cloud desktops in the workspace.
   * - The system will automatically create a general-purpose NAS file system (with storage specifications of Capacity and Performance, with capacities of 10 PiB and 1 PiB respectively) and generate a default mount point.
   * - The NAS file system uses pay-as-you-go by default. You need to pay for the actual storage usage. You can also purchase resource packages to offset the storage usage.
   * For more information, see [Creating Shared Storage NAS](https://help.aliyun.com/document_detail/214481.html).
   * <props="intl">
   * - Each standard workspace can create one NAS file system to meet the need for sharing files between cloud desktops in the workspace.
   * - The system will automatically create a general-purpose NAS file system (with storage specifications of Capacity and Performance, with capacities of 10 PiB and 1 PiB respectively) and generate a default mount point.
   * - The NAS file system uses pay-as-you-go by default. You need to pay for the actual storage usage. You can also purchase storage packages to offset the storage usage.
   * For more information, see [Creating Shared Storage NAS](https://help.aliyun.com/document_detail/214481.html).
   * 
   * @param request - CreateNASFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNASFileSystemResponse
   */
  async createNASFileSystemWithOptions(request: $_model.CreateNASFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNASFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNASFileSystem",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNASFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.CreateNASFileSystemResponse({}));
  }

  /**
   * Create a NAS file system.
   * 
   * @remarks
   * <props="china">
   * - Each standard workspace can create one NAS file system to meet the need for sharing files between cloud desktops in the workspace.
   * - The system will automatically create a general-purpose NAS file system (with storage specifications of Capacity and Performance, with capacities of 10 PiB and 1 PiB respectively) and generate a default mount point.
   * - The NAS file system uses pay-as-you-go by default. You need to pay for the actual storage usage. You can also purchase resource packages to offset the storage usage.
   * For more information, see [Creating Shared Storage NAS](https://help.aliyun.com/document_detail/214481.html).
   * <props="intl">
   * - Each standard workspace can create one NAS file system to meet the need for sharing files between cloud desktops in the workspace.
   * - The system will automatically create a general-purpose NAS file system (with storage specifications of Capacity and Performance, with capacities of 10 PiB and 1 PiB respectively) and generate a default mount point.
   * - The NAS file system uses pay-as-you-go by default. You need to pay for the actual storage usage. You can also purchase storage packages to offset the storage usage.
   * For more information, see [Creating Shared Storage NAS](https://help.aliyun.com/document_detail/214481.html).
   * 
   * @param request - CreateNASFileSystemRequest
   * @returns CreateNASFileSystemResponse
   */
  async createNASFileSystem(request: $_model.CreateNASFileSystemRequest): Promise<$_model.CreateNASFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNASFileSystemWithOptions(request, runtime);
  }

  /**
   * 新建NAT网关
   * 
   * @param request - CreateNatGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNatGatewayResponse
   */
  async createNatGatewayWithOptions(request: $_model.CreateNatGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNatGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNatGateway",
      version: "2020-09-30",
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
   * 新建NAT网关
   * 
   * @param request - CreateNatGatewayRequest
   * @returns CreateNatGatewayResponse
   */
  async createNatGateway(request: $_model.CreateNatGatewayRequest): Promise<$_model.CreateNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNatGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a premium bandwidth plan for an office network.
   * 
   * @param request - CreateNetworkPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkPackageResponse
   */
  async createNetworkPackageWithOptions(request: $_model.CreateNetworkPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.channelCookie)) {
      query["ChannelCookie"] = request.channelCookie;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
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

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkPackageResponse({}));
  }

  /**
   * Creates a premium bandwidth plan for an office network.
   * 
   * @param request - CreateNetworkPackageRequest
   * @returns CreateNetworkPackageResponse
   */
  async createNetworkPackage(request: $_model.CreateNetworkPackageRequest): Promise<$_model.CreateNetworkPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkPackageWithOptions(request, runtime);
  }

  /**
   * Creates a cloud computer policy.
   * 
   * @remarks
   * A cloud computer policy is a collection of rules to manage cloud computers in performance and security. For example, you can create a basic policy that involves the disk mapping, USB redirection, watermarking features and rules such as DNS rules. For more information, see [Policy overview](https://help.aliyun.com/document_detail/189345.html).
   * 
   * @param request - CreatePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroupWithOptions(request: $_model.CreatePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!$dara.isNull(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!$dara.isNull(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!$dara.isNull(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.deviceRedirects)) {
      query["DeviceRedirects"] = request.deviceRedirects;
    }

    if (!$dara.isNull(request.deviceRules)) {
      query["DeviceRules"] = request.deviceRules;
    }

    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!$dara.isNull(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!$dara.isNull(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!$dara.isNull(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!$dara.isNull(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.maxReconnectTime)) {
      query["MaxReconnectTime"] = request.maxReconnectTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!$dara.isNull(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!$dara.isNull(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!$dara.isNull(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!$dara.isNull(request.recordContent)) {
      query["RecordContent"] = request.recordContent;
    }

    if (!$dara.isNull(request.recordContentExpires)) {
      query["RecordContentExpires"] = request.recordContentExpires;
    }

    if (!$dara.isNull(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!$dara.isNull(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!$dara.isNull(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!$dara.isNull(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!$dara.isNull(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!$dara.isNull(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!$dara.isNull(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!$dara.isNull(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!$dara.isNull(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!$dara.isNull(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!$dara.isNull(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!$dara.isNull(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!$dara.isNull(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!$dara.isNull(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!$dara.isNull(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!$dara.isNull(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!$dara.isNull(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!$dara.isNull(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!$dara.isNull(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!$dara.isNull(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!$dara.isNull(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!$dara.isNull(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!$dara.isNull(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!$dara.isNull(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!$dara.isNull(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    if (!$dara.isNull(request.wyAssistant)) {
      query["WyAssistant"] = request.wyAssistant;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyGroupResponse({}));
  }

  /**
   * Creates a cloud computer policy.
   * 
   * @remarks
   * A cloud computer policy is a collection of rules to manage cloud computers in performance and security. For example, you can create a basic policy that involves the disk mapping, USB redirection, watermarking features and rules such as DNS rules. For more information, see [Policy overview](https://help.aliyun.com/document_detail/189345.html).
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: $_model.CreatePolicyGroupRequest): Promise<$_model.CreatePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) directory.
   * 
   * @remarks
   * Before you create a RAM directory, complete the following preparations:
   * *   Call the `CreateVpc` operation to create a virtual private cloud (VPC) in a region supported by Elastic Desktop Service.
   * *   Call the `CreateVSwitch` operation to create a vSwitch in the VPC. The vSwitch is in a zone that is supported by Elastic Desktop Service. You can call the [DescribeZones](https://help.aliyun.com/document_detail/196648.html) operation to obtain the most recent zone list for a region supported by Elastic Desktop Service
   * 
   * @param request - CreateRAMDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRAMDirectoryResponse
   */
  async createRAMDirectoryWithOptions(request: $_model.CreateRAMDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRAMDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!$dara.isNull(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!$dara.isNull(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRAMDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRAMDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateRAMDirectoryResponse({}));
  }

  /**
   * Creates a Resource Access Management (RAM) directory.
   * 
   * @remarks
   * Before you create a RAM directory, complete the following preparations:
   * *   Call the `CreateVpc` operation to create a virtual private cloud (VPC) in a region supported by Elastic Desktop Service.
   * *   Call the `CreateVSwitch` operation to create a vSwitch in the VPC. The vSwitch is in a zone that is supported by Elastic Desktop Service. You can call the [DescribeZones](https://help.aliyun.com/document_detail/196648.html) operation to obtain the most recent zone list for a region supported by Elastic Desktop Service
   * 
   * @param request - CreateRAMDirectoryRequest
   * @returns CreateRAMDirectoryResponse
   */
  async createRAMDirectory(request: $_model.CreateRAMDirectoryRequest): Promise<$_model.CreateRAMDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRAMDirectoryWithOptions(request, runtime);
  }

  /**
   * 新建路由条目
   * 
   * @param request - CreateRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteEntryResponse
   */
  async createRouteEntryWithOptions(request: $_model.CreateRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRouteEntryResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRouteEntry",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.CreateRouteEntryResponse({}));
  }

  /**
   * 新建路由条目
   * 
   * @param request - CreateRouteEntryRequest
   * @returns CreateRouteEntryResponse
   */
  async createRouteEntry(request: $_model.CreateRouteEntryRequest): Promise<$_model.CreateRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRouteEntryWithOptions(request, runtime);
  }

  /**
   * 新建自定义路由表
   * 
   * @param request - CreateRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteTableResponse
   */
  async createRouteTableWithOptions(request: $_model.CreateRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRouteTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeTableName)) {
      query["RouteTableName"] = request.routeTableName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRouteTable",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateRouteTableResponse({}));
  }

  /**
   * 新建自定义路由表
   * 
   * @param request - CreateRouteTableRequest
   * @returns CreateRouteTableResponse
   */
  async createRouteTable(request: $_model.CreateRouteTableRequest): Promise<$_model.CreateRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRouteTableWithOptions(request, runtime);
  }

  /**
   * Creates an office network of the convenience account type. Elastic Desktop Service supports the following types of accounts: convenience accounts and enterprise AD accounts.
   * 
   * @param request - CreateSimpleOfficeSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimpleOfficeSiteResponse
   */
  async createSimpleOfficeSiteWithOptions(request: $_model.CreateSimpleOfficeSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimpleOfficeSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.authorityHost)) {
      query["AuthorityHost"] = request.authorityHost;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["ClientSecret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.cloudBoxOfficeSite)) {
      query["CloudBoxOfficeSite"] = request.cloudBoxOfficeSite;
    }

    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!$dara.isNull(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!$dara.isNull(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    if (!$dara.isNull(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimpleOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimpleOfficeSiteResponse>(await this.callApi(params, req, runtime), new $_model.CreateSimpleOfficeSiteResponse({}));
  }

  /**
   * Creates an office network of the convenience account type. Elastic Desktop Service supports the following types of accounts: convenience accounts and enterprise AD accounts.
   * 
   * @param request - CreateSimpleOfficeSiteRequest
   * @returns CreateSimpleOfficeSiteResponse
   */
  async createSimpleOfficeSite(request: $_model.CreateSimpleOfficeSiteRequest): Promise<$_model.CreateSimpleOfficeSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimpleOfficeSiteWithOptions(request, runtime);
  }

  /**
   * Create a snapshot for a disk of a cloud computer to back up or restore the data on the disk.
   * 
   * @remarks
   * The cloud computer must be in the **Running** or **Stopped** state.
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

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2020-09-30",
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
   * Create a snapshot for a disk of a cloud computer to back up or restore the data on the disk.
   * 
   * @remarks
   * The cloud computer must be in the **Running** or **Stopped** state.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * 添加SNAT条目
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snatEntryName)) {
      query["SnatEntryName"] = request.snatEntryName;
    }

    if (!$dara.isNull(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    if (!$dara.isNull(request.snatTableId)) {
      query["SnatTableId"] = request.snatTableId;
    }

    if (!$dara.isNull(request.sourceCIDR)) {
      query["SourceCIDR"] = request.sourceCIDR;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnatEntry",
      version: "2020-09-30",
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
   * 添加SNAT条目
   * 
   * @param request - CreateSnatEntryRequest
   * @returns CreateSnatEntryResponse
   */
  async createSnatEntry(request: $_model.CreateSnatEntryRequest): Promise<$_model.CreateSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnatEntryWithOptions(request, runtime);
  }

  /**
   * 新建子网
   * 
   * @param request - CreateSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubnetResponse
   */
  async createSubnetWithOptions(request: $_model.CreateSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubnetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubnet",
      version: "2020-09-30",
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
   * 新建子网
   * 
   * @param request - CreateSubnetRequest
   * @returns CreateSubnetResponse
   */
  async createSubnet(request: $_model.CreateSubnetRequest): Promise<$_model.CreateSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubnetWithOptions(request, runtime);
  }

  /**
   * Creates a custom cloud computer template. A cloud computer template (or simply "template") simplifies the process of creating cloud computers by providing a predefined set of configurations. This eliminates the need to manually configure each setting, saving significant time and effort.
   * 
   * @remarks
   * When you call this operation, take note of the following item:
   * *   Most parameters in templates are optional. When you create a template, Elastic Desktop Service (EDS) does not validate the existence or correctness of the parameter values you specify. The parameter values in the template are only verified when you use the template to create cloud computers.
   * *   For parameters that include the region attribute in the template, it\\"s important to note that if the specified region doesn’t match the region where the template is used to create a cloud computer, those parameters will not take effect.
   * 
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataDiskList)) {
      bodyFlat["DataDiskList"] = request.dataDiskList;
    }

    if (!$dara.isNull(request.defaultLanguage)) {
      body["DefaultLanguage"] = request.defaultLanguage;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      body["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.postPaidAfterUsedUp)) {
      body["PostPaidAfterUsedUp"] = request.postPaidAfterUsedUp;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionConfigList)) {
      bodyFlat["RegionConfigList"] = request.regionConfigList;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTagList)) {
      bodyFlat["ResourceTagList"] = request.resourceTagList;
    }

    if (!$dara.isNull(request.siteConfigList)) {
      bodyFlat["SiteConfigList"] = request.siteConfigList;
    }

    if (!$dara.isNull(request.systemDiskPerformanceLevel)) {
      body["SystemDiskPerformanceLevel"] = request.systemDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.timerGroupId)) {
      body["TimerGroupId"] = request.timerGroupId;
    }

    if (!$dara.isNull(request.userDuration)) {
      body["UserDuration"] = request.userDuration;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * Creates a custom cloud computer template. A cloud computer template (or simply "template") simplifies the process of creating cloud computers by providing a predefined set of configurations. This eliminates the need to manually configure each setting, saving significant time and effort.
   * 
   * @remarks
   * When you call this operation, take note of the following item:
   * *   Most parameters in templates are optional. When you create a template, Elastic Desktop Service (EDS) does not validate the existence or correctness of the parameter values you specify. The parameter values in the template are only verified when you use the template to create cloud computers.
   * *   For parameters that include the region attribute in the template, it\\"s important to note that if the specified region doesn’t match the region where the template is used to create a cloud computer, those parameters will not take effect.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicyWithOptions(request: $_model.DeleteAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoSnapshotPolicyResponse({}));
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicy(request: $_model.DeleteAutoSnapshotPolicyRequest): Promise<$_model.DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes custom cloud computer templates.
   * 
   * @param request - DeleteBundlesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBundlesResponse
   */
  async deleteBundlesWithOptions(request: $_model.DeleteBundlesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBundlesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBundles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBundlesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBundlesResponse({}));
  }

  /**
   * Deletes custom cloud computer templates.
   * 
   * @param request - DeleteBundlesRequest
   * @returns DeleteBundlesResponse
   */
  async deleteBundles(request: $_model.DeleteBundlesRequest): Promise<$_model.DeleteBundlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBundlesWithOptions(request, runtime);
  }

  /**
   * Delete files or folders from the network disk.
   * 
   * @param request - DeleteCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCdsFileResponse
   */
  async deleteCdsFileWithOptions(request: $_model.DeleteCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCdsFileResponse({}));
  }

  /**
   * Delete files or folders from the network disk.
   * 
   * @param request - DeleteCdsFileRequest
   * @returns DeleteCdsFileResponse
   */
  async deleteCdsFile(request: $_model.DeleteCdsFileRequest): Promise<$_model.DeleteCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCdsFileWithOptions(request, runtime);
  }

  /**
   * Deletes a center policy
   * 
   * @param request - DeleteCenterPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCenterPolicyResponse
   */
  async deleteCenterPolicyWithOptions(request: $_model.DeleteCenterPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCenterPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCenterPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCenterPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCenterPolicyResponse({}));
  }

  /**
   * Deletes a center policy
   * 
   * @param request - DeleteCenterPolicyRequest
   * @returns DeleteCenterPolicyResponse
   */
  async deleteCenterPolicy(request: $_model.DeleteCenterPolicyRequest): Promise<$_model.DeleteCenterPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCenterPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes team spaces.
   * 
   * @param request - DeleteCloudDriveGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudDriveGroupsResponse
   */
  async deleteCloudDriveGroupsWithOptions(request: $_model.DeleteCloudDriveGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudDriveGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudDriveGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudDriveGroupsResponse({}));
  }

  /**
   * Deletes team spaces.
   * 
   * @param request - DeleteCloudDriveGroupsRequest
   * @returns DeleteCloudDriveGroupsResponse
   */
  async deleteCloudDriveGroups(request: $_model.DeleteCloudDriveGroupsRequest): Promise<$_model.DeleteCloudDriveGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudDriveGroupsWithOptions(request, runtime);
  }

  /**
   * 删除无影网盘中的终端用户
   * 
   * @param request - DeleteCloudDriveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudDriveUsersResponse
   */
  async deleteCloudDriveUsersWithOptions(request: $_model.DeleteCloudDriveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudDriveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudDriveUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudDriveUsersResponse({}));
  }

  /**
   * 删除无影网盘中的终端用户
   * 
   * @param request - DeleteCloudDriveUsersRequest
   * @returns DeleteCloudDriveUsersResponse
   */
  async deleteCloudDriveUsers(request: $_model.DeleteCloudDriveUsersRequest): Promise<$_model.DeleteCloudDriveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudDriveUsersWithOptions(request, runtime);
  }

  /**
   * Deletes a configuration group.
   * 
   * @param request - DeleteConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigGroupResponse
   */
  async deleteConfigGroupWithOptions(request: $_model.DeleteConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigGroupResponse({}));
  }

  /**
   * Deletes a configuration group.
   * 
   * @param request - DeleteConfigGroupRequest
   * @returns DeleteConfigGroupResponse
   */
  async deleteConfigGroup(request: $_model.DeleteConfigGroupRequest): Promise<$_model.DeleteConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConfigGroupWithOptions(request, runtime);
  }

  /**
   * Releases a cloud computer share.
   * 
   * @remarks
   *   Before releasing a cloud computer share, ensure that no cloud computers within it are in the Connected state and that no end users have access permissions to it.
   * *   You cannot delete a cloud computer share with an active subscription if it contains cloud computers that have not yet expired.
   * *   Deleting a pay-as-you-go cloud computer share will release all pay-as-you-go cloud computers within it.
   * 
   * @param request - DeleteDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDesktopGroupResponse
   */
  async deleteDesktopGroupWithOptions(request: $_model.DeleteDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDesktopGroupResponse({}));
  }

  /**
   * Releases a cloud computer share.
   * 
   * @remarks
   *   Before releasing a cloud computer share, ensure that no cloud computers within it are in the Connected state and that no end users have access permissions to it.
   * *   You cannot delete a cloud computer share with an active subscription if it contains cloud computers that have not yet expired.
   * *   Deleting a pay-as-you-go cloud computer share will release all pay-as-you-go cloud computers within it.
   * 
   * @param request - DeleteDesktopGroupRequest
   * @returns DeleteDesktopGroupResponse
   */
  async deleteDesktopGroup(request: $_model.DeleteDesktopGroupRequest): Promise<$_model.DeleteDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDesktopGroupWithOptions(request, runtime);
  }

  /**
   * Releases pay-as-you-go cloud computers or expired subscription cloud computers.
   * 
   * @param request - DeleteDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDesktopsResponse
   */
  async deleteDesktopsWithOptions(request: $_model.DeleteDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDesktopsResponse({}));
  }

  /**
   * Releases pay-as-you-go cloud computers or expired subscription cloud computers.
   * 
   * @param request - DeleteDesktopsRequest
   * @returns DeleteDesktopsResponse
   */
  async deleteDesktops(request: $_model.DeleteDesktopsRequest): Promise<$_model.DeleteDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDesktopsWithOptions(request, runtime);
  }

  /**
   * Deletes trusted devices.
   * 
   * @remarks
   * You can call the operation to manage client devices.
   * 
   * @param request - DeleteDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDevicesResponse
   */
  async deleteDevicesWithOptions(request: $_model.DeleteDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDevices",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDevicesResponse({}));
  }

  /**
   * Deletes trusted devices.
   * 
   * @remarks
   * You can call the operation to manage client devices.
   * 
   * @param request - DeleteDevicesRequest
   * @returns DeleteDevicesResponse
   */
  async deleteDevices(request: $_model.DeleteDevicesRequest): Promise<$_model.DeleteDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDevicesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more directories.
   * 
   * @remarks
   * You cannot delete a directory that has a cloud computer or is used by a cloud computer.
   * 
   * @param request - DeleteDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoriesResponse
   */
  async deleteDirectoriesWithOptions(request: $_model.DeleteDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDirectories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDirectoriesResponse({}));
  }

  /**
   * Deletes one or more directories.
   * 
   * @remarks
   * You cannot delete a directory that has a cloud computer or is used by a cloud computer.
   * 
   * @param request - DeleteDirectoriesRequest
   * @returns DeleteDirectoriesResponse
   */
  async deleteDirectories(request: $_model.DeleteDirectoriesRequest): Promise<$_model.DeleteDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDriveResponse
   */
  async deleteDriveWithOptions(request: $_model.DeleteDriveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDriveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.driveId)) {
      query["DriveId"] = request.driveId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDrive",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDriveResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDriveResponse({}));
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @returns DeleteDriveResponse
   */
  async deleteDrive(request: $_model.DeleteDriveRequest): Promise<$_model.DeleteDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDriveWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteEduRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEduRoomResponse
   */
  async deleteEduRoomWithOptions(request: $_model.DeleteEduRoomRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEduRoomResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eduRoomId)) {
      query["EduRoomId"] = request.eduRoomId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEduRoom",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEduRoomResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEduRoomResponse({}));
  }

  /**
   * @param request - DeleteEduRoomRequest
   * @returns DeleteEduRoomResponse
   */
  async deleteEduRoom(request: $_model.DeleteEduRoomRequest): Promise<$_model.DeleteEduRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEduRoomWithOptions(request, runtime);
  }

  /**
   * 删除DNAT条目
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

    if (!$dara.isNull(request.forwardTableId)) {
      query["ForwardTableId"] = request.forwardTableId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteForwardEntry",
      version: "2020-09-30",
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
   * 删除DNAT条目
   * 
   * @param request - DeleteForwardEntryRequest
   * @returns DeleteForwardEntryResponse
   */
  async deleteForwardEntry(request: $_model.DeleteForwardEntryRequest): Promise<$_model.DeleteForwardEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteForwardEntryWithOptions(request, runtime);
  }

  /**
   * Deletes one or more custom images.
   * 
   * @remarks
   *   Images include system images and custom images. System images cannot be deleted.
   * *   If an image that you want to delete is referenced by a cloud computer template, call the [DeleteBundles](https://help.aliyun.com/document_detail/436972.html) operation to delete the cloud computer template before you delete the image.
   * 
   * @param request - DeleteImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesResponse
   */
  async deleteImagesWithOptions(request: $_model.DeleteImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteCascadedBundle)) {
      query["DeleteCascadedBundle"] = request.deleteCascadedBundle;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImagesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImagesResponse({}));
  }

  /**
   * Deletes one or more custom images.
   * 
   * @remarks
   *   Images include system images and custom images. System images cannot be deleted.
   * *   If an image that you want to delete is referenced by a cloud computer template, call the [DeleteBundles](https://help.aliyun.com/document_detail/436972.html) operation to delete the cloud computer template before you delete the image.
   * 
   * @param request - DeleteImagesRequest
   * @returns DeleteImagesResponse
   */
  async deleteImages(request: $_model.DeleteImagesRequest): Promise<$_model.DeleteImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * Deletes NAS file systems.
   * 
   * @remarks
   * Before you delete a File Storage NAS (NAS) file system, make sure that the data you want to retain is backed up.
   * >Warning: If a NAS file system is deleted, data stored in the NAS file system cannot be restored. Proceed with caution when you delete NAS file systems.
   * 
   * @param request - DeleteNASFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNASFileSystemsResponse
   */
  async deleteNASFileSystemsWithOptions(request: $_model.DeleteNASFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNASFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNASFileSystems",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNASFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNASFileSystemsResponse({}));
  }

  /**
   * Deletes NAS file systems.
   * 
   * @remarks
   * Before you delete a File Storage NAS (NAS) file system, make sure that the data you want to retain is backed up.
   * >Warning: If a NAS file system is deleted, data stored in the NAS file system cannot be restored. Proceed with caution when you delete NAS file systems.
   * 
   * @param request - DeleteNASFileSystemsRequest
   * @returns DeleteNASFileSystemsResponse
   */
  async deleteNASFileSystems(request: $_model.DeleteNASFileSystemsRequest): Promise<$_model.DeleteNASFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNASFileSystemsWithOptions(request, runtime);
  }

  /**
   * 删除NAT网关
   * 
   * @param request - DeleteNatGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatGatewayResponse
   */
  async deleteNatGatewayWithOptions(request: $_model.DeleteNatGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNatGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNatGateway",
      version: "2020-09-30",
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
   * 删除NAT网关
   * 
   * @param request - DeleteNatGatewayRequest
   * @returns DeleteNatGatewayResponse
   */
  async deleteNatGateway(request: $_model.DeleteNatGatewayRequest): Promise<$_model.DeleteNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNatGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes one or more premium bandwidth plans.
   * 
   * @param request - DeleteNetworkPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkPackagesResponse
   */
  async deleteNetworkPackagesWithOptions(request: $_model.DeleteNetworkPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkPackagesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkPackagesResponse({}));
  }

  /**
   * Deletes one or more premium bandwidth plans.
   * 
   * @param request - DeleteNetworkPackagesRequest
   * @returns DeleteNetworkPackagesResponse
   */
  async deleteNetworkPackages(request: $_model.DeleteNetworkPackagesRequest): Promise<$_model.DeleteNetworkPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkPackagesWithOptions(request, runtime);
  }

  /**
   * Deletes office networks (formerly workspaces).
   * 
   * @remarks
   * Before you delete an office network, make sure that the following operations are complete:
   * *   All cloud computers in the office network are released.
   * *   The data that you want to retain is backed up.
   * >  Resources and data on cloud computers in an office network cannot be restored after you delete it. Proceed with caution.
   * 
   * @param request - DeleteOfficeSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOfficeSitesResponse
   */
  async deleteOfficeSitesWithOptions(request: $_model.DeleteOfficeSitesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOfficeSitesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOfficeSites",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOfficeSitesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOfficeSitesResponse({}));
  }

  /**
   * Deletes office networks (formerly workspaces).
   * 
   * @remarks
   * Before you delete an office network, make sure that the following operations are complete:
   * *   All cloud computers in the office network are released.
   * *   The data that you want to retain is backed up.
   * >  Resources and data on cloud computers in an office network cannot be restored after you delete it. Proceed with caution.
   * 
   * @param request - DeleteOfficeSitesRequest
   * @returns DeleteOfficeSitesResponse
   */
  async deleteOfficeSites(request: $_model.DeleteOfficeSitesRequest): Promise<$_model.DeleteOfficeSitesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOfficeSitesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more custom cloud computer policies.
   * 
   * @remarks
   *   You cannot delete the cloud computer policy created by the Elastic Desktop Service (EDS) system.
   * *   You cannot delete the cloud computer policies that are associated with cloud computers.
   * 
   * @param request - DeletePolicyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyGroupsResponse
   */
  async deletePolicyGroupsWithOptions(request: $_model.DeletePolicyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyGroupsResponse({}));
  }

  /**
   * Deletes one or more custom cloud computer policies.
   * 
   * @remarks
   *   You cannot delete the cloud computer policy created by the Elastic Desktop Service (EDS) system.
   * *   You cannot delete the cloud computer policies that are associated with cloud computers.
   * 
   * @param request - DeletePolicyGroupsRequest
   * @returns DeletePolicyGroupsResponse
   */
  async deletePolicyGroups(request: $_model.DeletePolicyGroupsRequest): Promise<$_model.DeletePolicyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyGroupsWithOptions(request, runtime);
  }

  /**
   * 删除路由条目
   * 
   * @param request - DeleteRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteEntryResponse
   */
  async deleteRouteEntryWithOptions(request: $_model.DeleteRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.nextHopId)) {
      query["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteEntry",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteEntryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteEntryResponse({}));
  }

  /**
   * 删除路由条目
   * 
   * @param request - DeleteRouteEntryRequest
   * @returns DeleteRouteEntryResponse
   */
  async deleteRouteEntry(request: $_model.DeleteRouteEntryRequest): Promise<$_model.DeleteRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteEntryWithOptions(request, runtime);
  }

  /**
   * 删除自定义路由表
   * 
   * @param request - DeleteRouteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteTableResponse
   */
  async deleteRouteTableWithOptions(request: $_model.DeleteRouteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteTable",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteTableResponse({}));
  }

  /**
   * 删除自定义路由表
   * 
   * @param request - DeleteRouteTableRequest
   * @returns DeleteRouteTableResponse
   */
  async deleteRouteTable(request: $_model.DeleteRouteTableRequest): Promise<$_model.DeleteRouteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteTableWithOptions(request, runtime);
  }

  /**
   * Deletes one or more snapshots.
   * 
   * @remarks
   * If the IDs of the snapshots that you specify do not exist, requests are ignored.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2020-09-30",
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
   * Deletes one or more snapshots.
   * 
   * @remarks
   * If the IDs of the snapshots that you specify do not exist, requests are ignored.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * 删除SNAT条目
   * 
   * @param request - DeleteSnatEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntryWithOptions(request: $_model.DeleteSnatEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnatEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatTableId)) {
      query["SnatTableId"] = request.snatTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnatEntry",
      version: "2020-09-30",
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
   * 删除SNAT条目
   * 
   * @param request - DeleteSnatEntryRequest
   * @returns DeleteSnatEntryResponse
   */
  async deleteSnatEntry(request: $_model.DeleteSnatEntryRequest): Promise<$_model.DeleteSnatEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  /**
   * 删除子网
   * 
   * @param request - DeleteSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubnetResponse
   */
  async deleteSubnetWithOptions(request: $_model.DeleteSubnetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubnetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      query["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubnet",
      version: "2020-09-30",
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
   * 删除子网
   * 
   * @param request - DeleteSubnetRequest
   * @returns DeleteSubnetResponse
   */
  async deleteSubnet(request: $_model.DeleteSubnetRequest): Promise<$_model.DeleteSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubnetWithOptions(request, runtime);
  }

  /**
   * Deletes custom cloud computer templates.
   * 
   * @remarks
   * Deleting a template does not affect cloud computers created from it or the associated resources.
   * 
   * @param request - DeleteTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplatesWithOptions(request: $_model.DeleteTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplates",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplatesResponse({}));
  }

  /**
   * Deletes custom cloud computer templates.
   * 
   * @remarks
   * Deleting a template does not affect cloud computers created from it or the associated resources.
   * 
   * @param request - DeleteTemplatesRequest
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplates(request: $_model.DeleteTemplatesRequest): Promise<$_model.DeleteTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplatesWithOptions(request, runtime);
  }

  /**
   * Delete virtual multi-factor authentication (MFA) devices.
   * 
   * @remarks
   * If an MFA device is deleted, the device is unbound, reset, and disabled. When an Active Directory (AD) user wants to connect to the cloud desktop that is bound to the MFA device, the AD user must bind a new MFA device.
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADeviceWithOptions(request: $_model.DeleteVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualMFADeviceResponse({}));
  }

  /**
   * Delete virtual multi-factor authentication (MFA) devices.
   * 
   * @remarks
   * If an MFA device is deleted, the device is unbound, reset, and disabled. When an Active Directory (AD) user wants to connect to the cloud desktop that is bound to the MFA device, the AD user must bind a new MFA device.
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: $_model.DeleteVirtualMFADeviceRequest): Promise<$_model.DeleteVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access control list (ACL) of an office network or a cloud computer.
   * 
   * @param request - DescribeAclEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAclEntriesResponse
   */
  async describeAclEntriesWithOptions(request: $_model.DescribeAclEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAclEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAclEntries",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAclEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAclEntriesResponse({}));
  }

  /**
   * Queries the details of an access control list (ACL) of an office network or a cloud computer.
   * 
   * @param request - DescribeAclEntriesRequest
   * @returns DescribeAclEntriesResponse
   */
  async describeAclEntries(request: $_model.DescribeAclEntriesRequest): Promise<$_model.DescribeAclEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAclEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the automatic snapshot policy.
   * 
   * @remarks
   * You can view an automatic snapshot policy that is associated with a cloud desktop in the Elastic Desktop Service (EDS) console. To view the automatic snapshot policy, you can go to the EDS console, choose Deployment > Snapshots in the left-side navigation pane, and then view an automatic snapshot policy on the Snapshots page.
   * 
   * @param request - DescribeAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotPolicyResponse
   */
  async describeAutoSnapshotPolicyWithOptions(request: $_model.DescribeAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoSnapshotPolicyResponse({}));
  }

  /**
   * Queries the automatic snapshot policy.
   * 
   * @remarks
   * You can view an automatic snapshot policy that is associated with a cloud desktop in the Elastic Desktop Service (EDS) console. To view the automatic snapshot policy, you can go to the EDS console, choose Deployment > Snapshots in the left-side navigation pane, and then view an automatic snapshot policy on the Snapshots page.
   * 
   * @param request - DescribeAutoSnapshotPolicyRequest
   * @returns DescribeAutoSnapshotPolicyResponse
   */
  async describeAutoSnapshotPolicy(request: $_model.DescribeAutoSnapshotPolicyRequest): Promise<$_model.DescribeAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of cloud computer templates.
   * 
   * @param request - DescribeBundlesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBundlesResponse
   */
  async describeBundlesWithOptions(request: $_model.DescribeBundlesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBundlesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.bundleType)) {
      query["BundleType"] = request.bundleType;
    }

    if (!$dara.isNull(request.checkStock)) {
      query["CheckStock"] = request.checkStock;
    }

    if (!$dara.isNull(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!$dara.isNull(request.desktopTypeFamily)) {
      query["DesktopTypeFamily"] = request.desktopTypeFamily;
    }

    if (!$dara.isNull(request.fotaChannel)) {
      query["FotaChannel"] = request.fotaChannel;
    }

    if (!$dara.isNull(request.fromDesktopGroup)) {
      query["FromDesktopGroup"] = request.fromDesktopGroup;
    }

    if (!$dara.isNull(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!$dara.isNull(request.gpuDriverType)) {
      query["GpuDriverType"] = request.gpuDriverType;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.selectedBundle)) {
      query["SelectedBundle"] = request.selectedBundle;
    }

    if (!$dara.isNull(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    if (!$dara.isNull(request.supportMultiSession)) {
      query["SupportMultiSession"] = request.supportMultiSession;
    }

    if (!$dara.isNull(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBundles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBundlesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBundlesResponse({}));
  }

  /**
   * Queries the details of cloud computer templates.
   * 
   * @param request - DescribeBundlesRequest
   * @returns DescribeBundlesResponse
   */
  async describeBundles(request: $_model.DescribeBundlesRequest): Promise<$_model.DescribeBundlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBundlesWithOptions(request, runtime);
  }

  /**
   * Queries file sharing links of a cloud disk in Cloud Drive Service.
   * 
   * @param request - DescribeCdsFileShareLinksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdsFileShareLinksResponse
   */
  async describeCdsFileShareLinksWithOptions(request: $_model.DescribeCdsFileShareLinksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdsFileShareLinksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.creators)) {
      query["Creators"] = request.creators;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    if (!$dara.isNull(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdsFileShareLinks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdsFileShareLinksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdsFileShareLinksResponse({}));
  }

  /**
   * Queries file sharing links of a cloud disk in Cloud Drive Service.
   * 
   * @param request - DescribeCdsFileShareLinksRequest
   * @returns DescribeCdsFileShareLinksResponse
   */
  async describeCdsFileShareLinks(request: $_model.DescribeCdsFileShareLinksRequest): Promise<$_model.DescribeCdsFileShareLinksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdsFileShareLinksWithOptions(request, runtime);
  }

  /**
   * Queries the details of all Cloud Enterprise Network (CEN) instances within an Alibaba Cloud account.
   * 
   * @param request - DescribeCensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCensResponse
   */
  async describeCensWithOptions(request: $_model.DescribeCensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCens",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCensResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCensResponse({}));
  }

  /**
   * Queries the details of all Cloud Enterprise Network (CEN) instances within an Alibaba Cloud account.
   * 
   * @param request - DescribeCensRequest
   * @returns DescribeCensResponse
   */
  async describeCens(request: $_model.DescribeCensRequest): Promise<$_model.DescribeCensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
   * Queries center policies.
   * 
   * @param request - DescribeCenterPolicyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCenterPolicyListResponse
   */
  async describeCenterPolicyListWithOptions(request: $_model.DescribeCenterPolicyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCenterPolicyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.academicProxy)) {
      query["AcademicProxy"] = request.academicProxy;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.modelLibrary)) {
      query["ModelLibrary"] = request.modelLibrary;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.portProxy)) {
      query["PortProxy"] = request.portProxy;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCenterPolicyList",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCenterPolicyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCenterPolicyListResponse({}));
  }

  /**
   * Queries center policies.
   * 
   * @param request - DescribeCenterPolicyListRequest
   * @returns DescribeCenterPolicyListResponse
   */
  async describeCenterPolicyList(request: $_model.DescribeCenterPolicyListRequest): Promise<$_model.DescribeCenterPolicyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCenterPolicyListWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of end users. For example, the logs record the events that end users start and stop cloud desktops, and disconnect desktop sessions.
   * 
   * @remarks
   * You can audit the operation logs of regular users to improve security. The operation logs record events such as desktop startup, shutdown, and session disconnection.
   * 
   * @param request - DescribeClientEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientEventsResponse
   */
  async describeClientEventsWithOptions(request: $_model.DescribeClientEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopIp)) {
      query["DesktopIp"] = request.desktopIp;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!$dara.isNull(request.fillHardwareInfo)) {
      query["FillHardwareInfo"] = request.fillHardwareInfo;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientEventsResponse({}));
  }

  /**
   * Queries the operation logs of end users. For example, the logs record the events that end users start and stop cloud desktops, and disconnect desktop sessions.
   * 
   * @remarks
   * You can audit the operation logs of regular users to improve security. The operation logs record events such as desktop startup, shutdown, and session disconnection.
   * 
   * @param request - DescribeClientEventsRequest
   * @returns DescribeClientEventsResponse
   */
  async describeClientEvents(request: $_model.DescribeClientEventsRequest): Promise<$_model.DescribeClientEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientEventsWithOptions(request, runtime);
  }

  /**
   * 查询云盘团队空间列表
   * 
   * @param request - DescribeCloudDiskGroupDrivesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDiskGroupDrivesResponse
   */
  async describeCloudDiskGroupDrivesWithOptions(request: $_model.DescribeCloudDiskGroupDrivesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDiskGroupDrivesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDiskGroupDrives",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDiskGroupDrivesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDiskGroupDrivesResponse({}));
  }

  /**
   * 查询云盘团队空间列表
   * 
   * @param request - DescribeCloudDiskGroupDrivesRequest
   * @returns DescribeCloudDiskGroupDrivesResponse
   */
  async describeCloudDiskGroupDrives(request: $_model.DescribeCloudDiskGroupDrivesRequest): Promise<$_model.DescribeCloudDiskGroupDrivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDiskGroupDrivesWithOptions(request, runtime);
  }

  /**
   * 查询云盘团队列表
   * 
   * @param request - DescribeCloudDiskGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDiskGroupsResponse
   */
  async describeCloudDiskGroupsWithOptions(request: $_model.DescribeCloudDiskGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDiskGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      query["ParentOrgId"] = request.parentOrgId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDiskGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDiskGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDiskGroupsResponse({}));
  }

  /**
   * 查询云盘团队列表
   * 
   * @param request - DescribeCloudDiskGroupsRequest
   * @returns DescribeCloudDiskGroupsResponse
   */
  async describeCloudDiskGroups(request: $_model.DescribeCloudDiskGroupsRequest): Promise<$_model.DescribeCloudDiskGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDiskGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of authorized team spaces.
   * 
   * @param request - DescribeCloudDriveGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDriveGroupsResponse
   */
  async describeCloudDriveGroupsWithOptions(request: $_model.DescribeCloudDriveGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDriveGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!$dara.isNull(request.driveStatus)) {
      query["DriveStatus"] = request.driveStatus;
    }

    if (!$dara.isNull(request.driveType)) {
      query["DriveType"] = request.driveType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      query["ParentGroupId"] = request.parentGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDriveGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDriveGroupsResponse({}));
  }

  /**
   * Queries a list of authorized team spaces.
   * 
   * @param request - DescribeCloudDriveGroupsRequest
   * @returns DescribeCloudDriveGroupsResponse
   */
  async describeCloudDriveGroups(request: $_model.DescribeCloudDriveGroupsRequest): Promise<$_model.DescribeCloudDriveGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDriveGroupsWithOptions(request, runtime);
  }

  /**
   * 查询pds用户权限
   * 
   * @param request - DescribeCloudDrivePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDrivePermissionsResponse
   */
  async describeCloudDrivePermissionsWithOptions(request: $_model.DescribeCloudDrivePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDrivePermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDrivePermissions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDrivePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDrivePermissionsResponse({}));
  }

  /**
   * 查询pds用户权限
   * 
   * @param request - DescribeCloudDrivePermissionsRequest
   * @returns DescribeCloudDrivePermissionsResponse
   */
  async describeCloudDrivePermissions(request: $_model.DescribeCloudDrivePermissionsRequest): Promise<$_model.DescribeCloudDrivePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDrivePermissionsWithOptions(request, runtime);
  }

  /**
   * 查询所有无影网盘终端用户的信息
   * 
   * @param request - DescribeCloudDriveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudDriveUsersResponse
   */
  async describeCloudDriveUsersWithOptions(request: $_model.DescribeCloudDriveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudDriveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudDriveUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudDriveUsersResponse({}));
  }

  /**
   * 查询所有无影网盘终端用户的信息
   * 
   * @param request - DescribeCloudDriveUsersRequest
   * @returns DescribeCloudDriveUsersResponse
   */
  async describeCloudDriveUsers(request: $_model.DescribeCloudDriveUsersRequest): Promise<$_model.DescribeCloudDriveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudDriveUsersWithOptions(request, runtime);
  }

  /**
   * Queries configuration groups.
   * 
   * @param request - DescribeConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigGroupResponse
   */
  async describeConfigGroupWithOptions(request: $_model.DescribeConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
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

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigGroupResponse({}));
  }

  /**
   * Queries configuration groups.
   * 
   * @param request - DescribeConfigGroupRequest
   * @returns DescribeConfigGroupResponse
   */
  async describeConfigGroup(request: $_model.DescribeConfigGroupRequest): Promise<$_model.DescribeConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConfigGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCustomizedListHeadersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizedListHeadersResponse
   */
  async describeCustomizedListHeadersWithOptions(request: $_model.DescribeCustomizedListHeadersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomizedListHeadersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!$dara.isNull(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomizedListHeaders",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomizedListHeadersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomizedListHeadersResponse({}));
  }

  /**
   * @param request - DescribeCustomizedListHeadersRequest
   * @returns DescribeCustomizedListHeadersResponse
   */
  async describeCustomizedListHeaders(request: $_model.DescribeCustomizedListHeadersRequest): Promise<$_model.DescribeCustomizedListHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizedListHeadersWithOptions(request, runtime);
  }

  /**
   * Queries cloud computer shares.
   * 
   * @param request - DescribeDesktopGroupSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopGroupSessionsResponse
   */
  async describeDesktopGroupSessionsWithOptions(request: $_model.DescribeDesktopGroupSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopGroupSessionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!$dara.isNull(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fillTerminalInfo)) {
      query["FillTerminalInfo"] = request.fillTerminalInfo;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopGroupSessions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopGroupSessionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopGroupSessionsResponse({}));
  }

  /**
   * Queries cloud computer shares.
   * 
   * @param request - DescribeDesktopGroupSessionsRequest
   * @returns DescribeDesktopGroupSessionsResponse
   */
  async describeDesktopGroupSessions(request: $_model.DescribeDesktopGroupSessionsRequest): Promise<$_model.DescribeDesktopGroupSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopGroupSessionsWithOptions(request, runtime);
  }

  /**
   * Queries cloud computer shares.
   * 
   * @param request - DescribeDesktopGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopGroupsResponse
   */
  async describeDesktopGroupsWithOptions(request: $_model.DescribeDesktopGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!$dara.isNull(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.excludedEndUserIds)) {
      query["ExcludedEndUserIds"] = request.excludedEndUserIds;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.multiResource)) {
      query["MultiResource"] = request.multiResource;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopGroupsResponse({}));
  }

  /**
   * Queries cloud computer shares.
   * 
   * @param request - DescribeDesktopGroupsRequest
   * @returns DescribeDesktopGroupsResponse
   */
  async describeDesktopGroups(request: $_model.DescribeDesktopGroupsRequest): Promise<$_model.DescribeDesktopGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about cloud computers.
   * 
   * @param request - DescribeDesktopInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopInfoResponse
   */
  async describeDesktopInfoWithOptions(request: $_model.DescribeDesktopInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.needExtraInfo)) {
      query["NeedExtraInfo"] = request.needExtraInfo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopInfoResponse({}));
  }

  /**
   * Queries the basic information about cloud computers.
   * 
   * @param request - DescribeDesktopInfoRequest
   * @returns DescribeDesktopInfoResponse
   */
  async describeDesktopInfo(request: $_model.DescribeDesktopInfoRequest): Promise<$_model.DescribeDesktopInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopInfoWithOptions(request, runtime);
  }

  /**
   * 查询云电脑基础元数据
   * 
   * @param request - DescribeDesktopMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopMetadataResponse
   */
  async describeDesktopMetadataWithOptions(request: $_model.DescribeDesktopMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creationTimeStart)) {
      query["CreationTimeStart"] = request.creationTimeStart;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.includeDesktopGroup)) {
      query["IncludeDesktopGroup"] = request.includeDesktopGroup;
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

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.operationTimeStart)) {
      query["OperationTimeStart"] = request.operationTimeStart;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopMetadata",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopMetadataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopMetadataResponse({}));
  }

  /**
   * 查询云电脑基础元数据
   * 
   * @param request - DescribeDesktopMetadataRequest
   * @returns DescribeDesktopMetadataResponse
   */
  async describeDesktopMetadata(request: $_model.DescribeDesktopMetadataRequest): Promise<$_model.DescribeDesktopMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopMetadataWithOptions(request, runtime);
  }

  /**
   * 查询超卖组
   * 
   * @param request - DescribeDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopOversoldGroupResponse
   */
  async describeDesktopOversoldGroupWithOptions(request: $_model.DescribeDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.oversoldGroupIds)) {
      query["OversoldGroupIds"] = request.oversoldGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopOversoldGroupResponse({}));
  }

  /**
   * 查询超卖组
   * 
   * @param request - DescribeDesktopOversoldGroupRequest
   * @returns DescribeDesktopOversoldGroupResponse
   */
  async describeDesktopOversoldGroup(request: $_model.DescribeDesktopOversoldGroupRequest): Promise<$_model.DescribeDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * 查询超卖组用户
   * 
   * @param request - DescribeDesktopOversoldUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopOversoldUserResponse
   */
  async describeDesktopOversoldUserWithOptions(request: $_model.DescribeDesktopOversoldUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopOversoldUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.userDesktopIds)) {
      query["UserDesktopIds"] = request.userDesktopIds;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopOversoldUser",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopOversoldUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopOversoldUserResponse({}));
  }

  /**
   * 查询超卖组用户
   * 
   * @param request - DescribeDesktopOversoldUserRequest
   * @returns DescribeDesktopOversoldUserResponse
   */
  async describeDesktopOversoldUser(request: $_model.DescribeDesktopOversoldUserRequest): Promise<$_model.DescribeDesktopOversoldUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopOversoldUserWithOptions(request, runtime);
  }

  /**
   * 查询超卖用户组
   * 
   * @param request - DescribeDesktopOversoldUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopOversoldUserGroupResponse
   */
  async describeDesktopOversoldUserGroupWithOptions(request: $_model.DescribeDesktopOversoldUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopOversoldUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopOversoldUserGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopOversoldUserGroupResponse({}));
  }

  /**
   * 查询超卖用户组
   * 
   * @param request - DescribeDesktopOversoldUserGroupRequest
   * @returns DescribeDesktopOversoldUserGroupResponse
   */
  async describeDesktopOversoldUserGroup(request: $_model.DescribeDesktopOversoldUserGroupRequest): Promise<$_model.DescribeDesktopOversoldUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the detailed session information of a cloud computer.
   * 
   * @remarks
   * You can only query data within the last 30 days.
   * 
   * @param request - DescribeDesktopSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopSessionsResponse
   */
  async describeDesktopSessionsWithOptions(request: $_model.DescribeDesktopSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopSessionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkOsSession)) {
      query["CheckOsSession"] = request.checkOsSession;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.endUserIdFilter)) {
      query["EndUserIdFilter"] = request.endUserIdFilter;
    }

    if (!$dara.isNull(request.fillHardwareInfo)) {
      query["FillHardwareInfo"] = request.fillHardwareInfo;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subPayType)) {
      query["SubPayType"] = request.subPayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopSessions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopSessionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopSessionsResponse({}));
  }

  /**
   * Queries the detailed session information of a cloud computer.
   * 
   * @remarks
   * You can only query data within the last 30 days.
   * 
   * @param request - DescribeDesktopSessionsRequest
   * @returns DescribeDesktopSessionsResponse
   */
  async describeDesktopSessions(request: $_model.DescribeDesktopSessionsRequest): Promise<$_model.DescribeDesktopSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopSessionsWithOptions(request, runtime);
  }

  /**
   * Queries the instance types of cloud computers.
   * 
   * @remarks
   * When no values are specified for the `InstanceTypeFamily` and `DesktopTypeId` parameters for a cloud desktop, all types of cloud desktops are queried.
   * 
   * @param request - DescribeDesktopTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopTypesResponse
   */
  async describeDesktopTypesWithOptions(request: $_model.DescribeDesktopTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appliedScope)) {
      query["AppliedScope"] = request.appliedScope;
    }

    if (!$dara.isNull(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!$dara.isNull(request.desktopGroupIdForModify)) {
      query["DesktopGroupIdForModify"] = request.desktopGroupIdForModify;
    }

    if (!$dara.isNull(request.desktopIdForModify)) {
      query["DesktopIdForModify"] = request.desktopIdForModify;
    }

    if (!$dara.isNull(request.desktopTypeId)) {
      query["DesktopTypeId"] = request.desktopTypeId;
    }

    if (!$dara.isNull(request.desktopTypeIdList)) {
      query["DesktopTypeIdList"] = request.desktopTypeIdList;
    }

    if (!$dara.isNull(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!$dara.isNull(request.gpuDriverType)) {
      query["GpuDriverType"] = request.gpuDriverType;
    }

    if (!$dara.isNull(request.gpuMemory)) {
      query["GpuMemory"] = request.gpuMemory;
    }

    if (!$dara.isNull(request.instanceTypeFamily)) {
      query["InstanceTypeFamily"] = request.instanceTypeFamily;
    }

    if (!$dara.isNull(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeSet)) {
      query["ScopeSet"] = request.scopeSet;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.supportMinSessionCount)) {
      query["SupportMinSessionCount"] = request.supportMinSessionCount;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopTypes",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopTypesResponse({}));
  }

  /**
   * Queries the instance types of cloud computers.
   * 
   * @remarks
   * When no values are specified for the `InstanceTypeFamily` and `DesktopTypeId` parameters for a cloud desktop, all types of cloud desktops are queried.
   * 
   * @param request - DescribeDesktopTypesRequest
   * @returns DescribeDesktopTypesResponse
   */
  async describeDesktopTypes(request: $_model.DescribeDesktopTypesRequest): Promise<$_model.DescribeDesktopTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopTypesWithOptions(request, runtime);
  }

  /**
   * Queries the details of cloud computers.
   * 
   * @param request - DescribeDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopsResponse
   */
  async describeDesktopsWithOptions(request: $_model.DescribeDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!$dara.isNull(request.desktopStatusList)) {
      query["DesktopStatusList"] = request.desktopStatusList;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.excludedEndUserId)) {
      query["ExcludedEndUserId"] = request.excludedEndUserId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.fillResourceGroup)) {
      query["FillResourceGroup"] = request.fillResourceGroup;
    }

    if (!$dara.isNull(request.filterDesktopGroup)) {
      query["FilterDesktopGroup"] = request.filterDesktopGroup;
    }

    if (!$dara.isNull(request.gpuInstanceGroupId)) {
      query["GpuInstanceGroupId"] = request.gpuInstanceGroupId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.includeAutoSnapshotPolicy)) {
      query["IncludeAutoSnapshotPolicy"] = request.includeAutoSnapshotPolicy;
    }

    if (!$dara.isNull(request.managementFlag)) {
      query["ManagementFlag"] = request.managementFlag;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.multiResource)) {
      query["MultiResource"] = request.multiResource;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.onlyDesktopGroup)) {
      query["OnlyDesktopGroup"] = request.onlyDesktopGroup;
    }

    if (!$dara.isNull(request.osTypes)) {
      query["OsTypes"] = request.osTypes;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.qosRuleId)) {
      query["QosRuleId"] = request.qosRuleId;
    }

    if (!$dara.isNull(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotPolicyId)) {
      query["SnapshotPolicyId"] = request.snapshotPolicyId;
    }

    if (!$dara.isNull(request.subPayType)) {
      query["SubPayType"] = request.subPayType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopsResponse({}));
  }

  /**
   * Queries the details of cloud computers.
   * 
   * @param request - DescribeDesktopsRequest
   * @returns DescribeDesktopsResponse
   */
  async describeDesktops(request: $_model.DescribeDesktopsRequest): Promise<$_model.DescribeDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  /**
   * Queries the cloud computers in a share by billing method.
   * 
   * @param request - DescribeDesktopsInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopsInGroupResponse
   */
  async describeDesktopsInGroupWithOptions(request: $_model.DescribeDesktopsInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopsInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customEndTimePeriod)) {
      query["CustomEndTimePeriod"] = request.customEndTimePeriod;
    }

    if (!$dara.isNull(request.customStartTimePeriod)) {
      query["CustomStartTimePeriod"] = request.customStartTimePeriod;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.ignoreDeleted)) {
      query["IgnoreDeleted"] = request.ignoreDeleted;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktopsInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDesktopsInGroupResponse({}));
  }

  /**
   * Queries the cloud computers in a share by billing method.
   * 
   * @param request - DescribeDesktopsInGroupRequest
   * @returns DescribeDesktopsInGroupResponse
   */
  async describeDesktopsInGroup(request: $_model.DescribeDesktopsInGroupRequest): Promise<$_model.DescribeDesktopsInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopsInGroupWithOptions(request, runtime);
  }

  /**
   * Queries the list of trusted devices.
   * 
   * @param request - DescribeDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDevicesResponse
   */
  async describeDevicesWithOptions(request: $_model.DescribeDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDevices",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDevicesResponse({}));
  }

  /**
   * Queries the list of trusted devices.
   * 
   * @param request - DescribeDevicesRequest
   * @returns DescribeDevicesResponse
   */
  async describeDevices(request: $_model.DescribeDevicesRequest): Promise<$_model.DescribeDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  /**
   * Queries the details of directories.
   * 
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: $_model.DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.directoryStatus)) {
      query["DirectoryStatus"] = request.directoryStatus;
    }

    if (!$dara.isNull(request.directoryType)) {
      query["DirectoryType"] = request.directoryType;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDirectoriesResponse({}));
  }

  /**
   * Queries the details of directories.
   * 
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: $_model.DescribeDirectoriesRequest): Promise<$_model.DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries user-level storage resources.
   * 
   * @param request - DescribeDrivesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrivesResponse
   */
  async describeDrivesWithOptions(request: $_model.DescribeDrivesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrivesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainIds)) {
      query["DomainIds"] = request.domainIds;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrives",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrivesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrivesResponse({}));
  }

  /**
   * Queries user-level storage resources.
   * 
   * @param request - DescribeDrivesRequest
   * @returns DescribeDrivesResponse
   */
  async describeDrives(request: $_model.DescribeDrivesRequest): Promise<$_model.DescribeDrivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrivesWithOptions(request, runtime);
  }

  /**
   * Queries data report export tasks.
   * 
   * @param request - DescribeEcdReportTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEcdReportTasksResponse
   */
  async describeEcdReportTasksWithOptions(request: $_model.DescribeEcdReportTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEcdReportTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEcdReportTasks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEcdReportTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEcdReportTasksResponse({}));
  }

  /**
   * Queries data report export tasks.
   * 
   * @param request - DescribeEcdReportTasksRequest
   * @returns DescribeEcdReportTasksResponse
   */
  async describeEcdReportTasks(request: $_model.DescribeEcdReportTasksRequest): Promise<$_model.DescribeEcdReportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEcdReportTasksWithOptions(request, runtime);
  }

  /**
   * 查询EIP监控
   * 
   * @param request - DescribeFlowMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowMetricResponse
   */
  async describeFlowMetricWithOptions(request: $_model.DescribeFlowMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowMetric",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowMetricResponse({}));
  }

  /**
   * 查询EIP监控
   * 
   * @param request - DescribeFlowMetricRequest
   * @returns DescribeFlowMetricResponse
   */
  async describeFlowMetric(request: $_model.DescribeFlowMetricRequest): Promise<$_model.DescribeFlowMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowMetricWithOptions(request, runtime);
  }

  /**
   * Queries cloud computer-level traffic statistics of a single office network.
   * 
   * @remarks
   * > You can query only the traffic data in the last 90 days.
   * 
   * @param request - DescribeFlowStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowStatisticResponse
   */
  async describeFlowStatisticWithOptions(request: $_model.DescribeFlowStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowStatistic",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowStatisticResponse({}));
  }

  /**
   * Queries cloud computer-level traffic statistics of a single office network.
   * 
   * @remarks
   * > You can query only the traffic data in the last 90 days.
   * 
   * @param request - DescribeFlowStatisticRequest
   * @returns DescribeFlowStatisticResponse
   */
  async describeFlowStatistic(request: $_model.DescribeFlowStatisticRequest): Promise<$_model.DescribeFlowStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowStatisticWithOptions(request, runtime);
  }

  /**
   * 查询DNAT条目
   * 
   * @param request - DescribeForwardTableEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeForwardTableEntriesResponse
   */
  async describeForwardTableEntriesWithOptions(request: $_model.DescribeForwardTableEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeForwardTableEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    if (!$dara.isNull(request.forwardTableId)) {
      query["ForwardTableId"] = request.forwardTableId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeForwardTableEntries",
      version: "2020-09-30",
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
   * 查询DNAT条目
   * 
   * @param request - DescribeForwardTableEntriesRequest
   * @returns DescribeForwardTableEntriesResponse
   */
  async describeForwardTableEntries(request: $_model.DescribeForwardTableEntriesRequest): Promise<$_model.DescribeForwardTableEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeForwardTableEntriesWithOptions(request, runtime);
  }

  /**
   * Queries information about the cloud computers whose images can be and are pending to be updated to the specified version.
   * 
   * @param request - DescribeFotaPendingDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFotaPendingDesktopsResponse
   */
  async describeFotaPendingDesktopsWithOptions(request: $_model.DescribeFotaPendingDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFotaPendingDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFotaPendingDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFotaPendingDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFotaPendingDesktopsResponse({}));
  }

  /**
   * Queries information about the cloud computers whose images can be and are pending to be updated to the specified version.
   * 
   * @param request - DescribeFotaPendingDesktopsRequest
   * @returns DescribeFotaPendingDesktopsResponse
   */
  async describeFotaPendingDesktops(request: $_model.DescribeFotaPendingDesktopsRequest): Promise<$_model.DescribeFotaPendingDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFotaPendingDesktopsWithOptions(request, runtime);
  }

  /**
   * Queries a list of update tasks.
   * 
   * @param request - DescribeFotaTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFotaTasksResponse
   */
  async describeFotaTasksWithOptions(request: $_model.DescribeFotaTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFotaTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fotaStatus)) {
      query["FotaStatus"] = request.fotaStatus;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFotaTasks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFotaTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFotaTasksResponse({}));
  }

  /**
   * Queries a list of update tasks.
   * 
   * @param request - DescribeFotaTasksRequest
   * @returns DescribeFotaTasksResponse
   */
  async describeFotaTasks(request: $_model.DescribeFotaTasksRequest): Promise<$_model.DescribeFotaTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFotaTasksWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of all cloud computers and the corresponding usage duration records.
   * 
   * @remarks
   *   Domestic site users query site selection Shanghai, international site users choose Singapore.
   * *   By default, you can query all cloud computers that are deleted or not deleted.
   * *   Deleted cloud computers can be queried only if the deletion time is less than three months.
   * *   Sort criteria cannot be shared with other criteria.
   * 
   * @param request - DescribeGlobalDesktopRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDesktopRecordsResponse
   */
  async describeGlobalDesktopRecordsWithOptions(request: $_model.DescribeGlobalDesktopRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDesktopRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subPayType)) {
      query["SubPayType"] = request.subPayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalDesktopRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDesktopRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalDesktopRecordsResponse({}));
  }

  /**
   * Queries the basic information of all cloud computers and the corresponding usage duration records.
   * 
   * @remarks
   *   Domestic site users query site selection Shanghai, international site users choose Singapore.
   * *   By default, you can query all cloud computers that are deleted or not deleted.
   * *   Deleted cloud computers can be queried only if the deletion time is less than three months.
   * *   Sort criteria cannot be shared with other criteria.
   * 
   * @param request - DescribeGlobalDesktopRecordsRequest
   * @returns DescribeGlobalDesktopRecordsResponse
   */
  async describeGlobalDesktopRecords(request: $_model.DescribeGlobalDesktopRecordsRequest): Promise<$_model.DescribeGlobalDesktopRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDesktopRecordsWithOptions(request, runtime);
  }

  /**
   * 查询全局定时任务Batch记录
   * 
   * @param request - DescribeGlobalTimerBatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalTimerBatchesResponse
   */
  async describeGlobalTimerBatchesWithOptions(request: $_model.DescribeGlobalTimerBatchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalTimerBatchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.timerType)) {
      query["TimerType"] = request.timerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalTimerBatches",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalTimerBatchesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalTimerBatchesResponse({}));
  }

  /**
   * 查询全局定时任务Batch记录
   * 
   * @param request - DescribeGlobalTimerBatchesRequest
   * @returns DescribeGlobalTimerBatchesResponse
   */
  async describeGlobalTimerBatches(request: $_model.DescribeGlobalTimerBatchesRequest): Promise<$_model.DescribeGlobalTimerBatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalTimerBatchesWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of scheduled tasks on cloud computers.
   * 
   * @param request - DescribeGlobalTimerRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalTimerRecordsResponse
   */
  async describeGlobalTimerRecordsWithOptions(request: $_model.DescribeGlobalTimerRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalTimerRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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

    if (!$dara.isNull(request.resultCategory)) {
      query["ResultCategory"] = request.resultCategory;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.timerResult)) {
      query["TimerResult"] = request.timerResult;
    }

    if (!$dara.isNull(request.timerTypes)) {
      query["TimerTypes"] = request.timerTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalTimerRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalTimerRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalTimerRecordsResponse({}));
  }

  /**
   * Queries the execution records of scheduled tasks on cloud computers.
   * 
   * @param request - DescribeGlobalTimerRecordsRequest
   * @returns DescribeGlobalTimerRecordsResponse
   */
  async describeGlobalTimerRecords(request: $_model.DescribeGlobalTimerRecordsRequest): Promise<$_model.DescribeGlobalTimerRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalTimerRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the applications and their processes of an end user.
   * 
   * @param request - DescribeGuestApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGuestApplicationsResponse
   */
  async describeGuestApplicationsWithOptions(request: $_model.DescribeGuestApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGuestApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGuestApplications",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGuestApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGuestApplicationsResponse({}));
  }

  /**
   * Queries the applications and their processes of an end user.
   * 
   * @param request - DescribeGuestApplicationsRequest
   * @returns DescribeGuestApplicationsResponse
   */
  async describeGuestApplications(request: $_model.DescribeGuestApplicationsRequest): Promise<$_model.DescribeGuestApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGuestApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the image modification records of cloud computers.
   * 
   * @param request - DescribeImageModifiedRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageModifiedRecordsResponse
   */
  async describeImageModifiedRecordsWithOptions(request: $_model.DescribeImageModifiedRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageModifiedRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageModifiedRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageModifiedRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageModifiedRecordsResponse({}));
  }

  /**
   * Queries the image modification records of cloud computers.
   * 
   * @param request - DescribeImageModifiedRecordsRequest
   * @returns DescribeImageModifiedRecordsResponse
   */
  async describeImageModifiedRecords(request: $_model.DescribeImageModifiedRecordsRequest): Promise<$_model.DescribeImageModifiedRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageModifiedRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the recipient Alibaba Cloud accounts with which an image is shared.
   * 
   * @remarks
   * You can call the [ModifyImagePermission](https://help.aliyun.com/document_detail/436982.html) operation to share an image with another cloud computer user or unshare an image. You can call the DescribeImagePermission operation to obtain the Alibaba Cloud accounts with which the current image is shared.
   * 
   * @param request - DescribeImagePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImagePermissionResponse
   */
  async describeImagePermissionWithOptions(request: $_model.DescribeImagePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImagePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImagePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImagePermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImagePermissionResponse({}));
  }

  /**
   * Queries the recipient Alibaba Cloud accounts with which an image is shared.
   * 
   * @remarks
   * You can call the [ModifyImagePermission](https://help.aliyun.com/document_detail/436982.html) operation to share an image with another cloud computer user or unshare an image. You can call the DescribeImagePermission operation to obtain the Alibaba Cloud accounts with which the current image is shared.
   * 
   * @param request - DescribeImagePermissionRequest
   * @returns DescribeImagePermissionResponse
   */
  async describeImagePermission(request: $_model.DescribeImagePermissionRequest): Promise<$_model.DescribeImagePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImagePermissionWithOptions(request, runtime);
  }

  /**
   * Queries the information about images.
   * 
   * @param request - DescribeImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImagesResponse
   */
  async describeImagesWithOptions(request: $_model.DescribeImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopInstanceType)) {
      query["DesktopInstanceType"] = request.desktopInstanceType;
    }

    if (!$dara.isNull(request.fotaVersion)) {
      query["FotaVersion"] = request.fotaVersion;
    }

    if (!$dara.isNull(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!$dara.isNull(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.imageStatus)) {
      query["ImageStatus"] = request.imageStatus;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.languageType)) {
      query["LanguageType"] = request.languageType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImages",
      version: "2020-09-30",
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
   * Queries the information about images.
   * 
   * @param request - DescribeImagesRequest
   * @returns DescribeImagesResponse
   */
  async describeImages(request: $_model.DescribeImagesRequest): Promise<$_model.DescribeImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   After you run a command, it may not succeed. You can call this operation to query the execution result.
   * *   You can query the information about execution in the last two weeks. A maximum of 100,000 lines of execution information can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: $_model.DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.includeInvokeDesktops)) {
      query["IncludeInvokeDesktops"] = request.includeInvokeDesktops;
    }

    if (!$dara.isNull(request.includeOutput)) {
      query["IncludeOutput"] = request.includeOutput;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvocationsResponse({}));
  }

  /**
   * @remarks
   *   After you run a command, it may not succeed. You can call this operation to query the execution result.
   * *   You can query the information about execution in the last two weeks. A maximum of 100,000 lines of execution information can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: $_model.DescribeInvocationsRequest): Promise<$_model.DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * 查询公网IP
   * 
   * @param request - DescribeIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpAddressesResponse
   */
  async describeIpAddressesWithOptions(request: $_model.DescribeIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipId)) {
      query["EipId"] = request.eipId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpAddresses",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpAddressesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpAddressesResponse({}));
  }

  /**
   * 查询公网IP
   * 
   * @param request - DescribeIpAddressesRequest
   * @returns DescribeIpAddressesResponse
   */
  async describeIpAddresses(request: $_model.DescribeIpAddressesRequest): Promise<$_model.DescribeIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpAddressesWithOptions(request, runtime);
  }

  /**
   * Queries Key Management Service (KMS) keys of users. The first time you call this operation, you can try to create a service key for Elastic Desktop Service (EDS) and call the operation to return results.
   * 
   * @param request - DescribeKmsKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeysWithOptions(request: $_model.DescribeKmsKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKmsKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKmsKeys",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKmsKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKmsKeysResponse({}));
  }

  /**
   * Queries Key Management Service (KMS) keys of users. The first time you call this operation, you can try to create a service key for Elastic Desktop Service (EDS) and call the operation to return results.
   * 
   * @param request - DescribeKmsKeysRequest
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeys(request: $_model.DescribeKmsKeysRequest): Promise<$_model.DescribeKmsKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  /**
   * Queries the price for changing the specifications of a monthly subscription cloud computer with unlimited hours or a premium bandwidth plan.
   * 
   * @param request - DescribeModificationPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModificationPriceResponse
   */
  async describeModificationPriceWithOptions(request: $_model.DescribeModificationPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModificationPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceSpecs)) {
      query["ResourceSpecs"] = request.resourceSpecs;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!$dara.isNull(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModificationPrice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModificationPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModificationPriceResponse({}));
  }

  /**
   * Queries the price for changing the specifications of a monthly subscription cloud computer with unlimited hours or a premium bandwidth plan.
   * 
   * @param request - DescribeModificationPriceRequest
   * @returns DescribeModificationPriceResponse
   */
  async describeModificationPrice(request: $_model.DescribeModificationPriceRequest): Promise<$_model.DescribeModificationPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModificationPriceWithOptions(request, runtime);
  }

  /**
   * Queries the information about File Storage NAS (NAS) file systems.
   * 
   * @param request - DescribeNASFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNASFileSystemsResponse
   */
  async describeNASFileSystemsWithOptions(request: $_model.DescribeNASFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNASFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.matchCompatibleProfile)) {
      query["MatchCompatibleProfile"] = request.matchCompatibleProfile;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNASFileSystems",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNASFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNASFileSystemsResponse({}));
  }

  /**
   * Queries the information about File Storage NAS (NAS) file systems.
   * 
   * @param request - DescribeNASFileSystemsRequest
   * @returns DescribeNASFileSystemsResponse
   */
  async describeNASFileSystems(request: $_model.DescribeNASFileSystemsRequest): Promise<$_model.DescribeNASFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNASFileSystemsWithOptions(request, runtime);
  }

  /**
   * 查询NAT详细列表
   * 
   * @param request - DescribeNatGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatGatewaysResponse
   */
  async describeNatGatewaysWithOptions(request: $_model.DescribeNatGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNatGatewaysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNatGateways",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNatGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNatGatewaysResponse({}));
  }

  /**
   * 查询NAT详细列表
   * 
   * @param request - DescribeNatGatewaysRequest
   * @returns DescribeNatGatewaysResponse
   */
  async describeNatGateways(request: $_model.DescribeNatGatewaysRequest): Promise<$_model.DescribeNatGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNatGatewaysWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more premium bandwidth plans.
   * 
   * @param request - DescribeNetworkPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkPackagesResponse
   */
  async describeNetworkPackagesWithOptions(request: $_model.DescribeNetworkPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkPackagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkPackagesResponse({}));
  }

  /**
   * Queries the details of one or more premium bandwidth plans.
   * 
   * @param request - DescribeNetworkPackagesRequest
   * @returns DescribeNetworkPackagesResponse
   */
  async describeNetworkPackages(request: $_model.DescribeNetworkPackagesRequest): Promise<$_model.DescribeNetworkPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkPackagesWithOptions(request, runtime);
  }

  /**
   * Queries office network properties, including office network ID, name, status, and creation time.
   * 
   * @param request - DescribeOfficeSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSitesWithOptions(request: $_model.DescribeOfficeSitesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOfficeSitesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteType)) {
      query["OfficeSiteType"] = request.officeSiteType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityProtection)) {
      query["SecurityProtection"] = request.securityProtection;
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
      action: "DescribeOfficeSites",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOfficeSitesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOfficeSitesResponse({}));
  }

  /**
   * Queries office network properties, including office network ID, name, status, and creation time.
   * 
   * @param request - DescribeOfficeSitesRequest
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSites(request: $_model.DescribeOfficeSitesRequest): Promise<$_model.DescribeOfficeSitesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cloud computer policy.
   * 
   * @param request - DescribePolicyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyGroupsResponse
   */
  async describePolicyGroupsWithOptions(request: $_model.DescribePolicyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.externalPolicyGroupIds)) {
      query["ExternalPolicyGroupIds"] = request.externalPolicyGroupIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyGroupsResponse({}));
  }

  /**
   * Queries the details of a cloud computer policy.
   * 
   * @param request - DescribePolicyGroupsRequest
   * @returns DescribePolicyGroupsResponse
   */
  async describePolicyGroups(request: $_model.DescribePolicyGroupsRequest): Promise<$_model.DescribePolicyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the prices of Elastic Desktop Service (EDS) resources.
   * 
   * @remarks
   * ## Usage notes
   * The request parameters vary based on the type of desktop resources whose price you want to query. Take note of the following items:
   * *   If you set ResourceType to OfficeSite, you must specify InstanceType.
   * *   If you set ResourceType to Bandwidth, the pay-by-data-transfer metering method is used for network billing.
   * *   If you set ResourceType to Desktop, you must specify InstanceType, RootDiskSizeGib, and UserDiskSizeGib. You can specify OsType, PeriodUnit, Period, and Amount based on your business requirements.
   * > Before you call this operation to query the prices of cloud desktops by setting ResourceType to Desktop, you must know the desktop types and disk sizes that EDS provides. The disk sizes vary based on the desktop types. For more information, see [Cloud desktop types](https://help.aliyun.com/document_detail/188609.html).
   * 
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.groupDesktopCount)) {
      query["GroupDesktopCount"] = request.groupDesktopCount;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.rootDiskCategory)) {
      query["RootDiskCategory"] = request.rootDiskCategory;
    }

    if (!$dara.isNull(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!$dara.isNull(request.userDiskCategory)) {
      query["UserDiskCategory"] = request.userDiskCategory;
    }

    if (!$dara.isNull(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2020-09-30",
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
   * Queries the prices of Elastic Desktop Service (EDS) resources.
   * 
   * @remarks
   * ## Usage notes
   * The request parameters vary based on the type of desktop resources whose price you want to query. Take note of the following items:
   * *   If you set ResourceType to OfficeSite, you must specify InstanceType.
   * *   If you set ResourceType to Bandwidth, the pay-by-data-transfer metering method is used for network billing.
   * *   If you set ResourceType to Desktop, you must specify InstanceType, RootDiskSizeGib, and UserDiskSizeGib. You can specify OsType, PeriodUnit, Period, and Amount based on your business requirements.
   * > Before you call this operation to query the prices of cloud desktops by setting ResourceType to Desktop, you must know the desktop types and disk sizes that EDS provides. The disk sizes vary based on the desktop types. For more information, see [Cloud desktop types](https://help.aliyun.com/document_detail/188609.html).
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * 查询价格用于创建超卖组
   * 
   * @param request - DescribePriceForCreateDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceForCreateDesktopOversoldGroupResponse
   */
  async describePriceForCreateDesktopOversoldGroupWithOptions(request: $_model.DescribePriceForCreateDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceForCreateDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePriceForCreateDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceForCreateDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceForCreateDesktopOversoldGroupResponse({}));
  }

  /**
   * 查询价格用于创建超卖组
   * 
   * @param request - DescribePriceForCreateDesktopOversoldGroupRequest
   * @returns DescribePriceForCreateDesktopOversoldGroupResponse
   */
  async describePriceForCreateDesktopOversoldGroup(request: $_model.DescribePriceForCreateDesktopOversoldGroupRequest): Promise<$_model.DescribePriceForCreateDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceForCreateDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * 查询价格用于变配超卖组
   * 
   * @param request - DescribePriceForModifyDesktopOversoldGroupSaleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceForModifyDesktopOversoldGroupSaleResponse
   */
  async describePriceForModifyDesktopOversoldGroupSaleWithOptions(request: $_model.DescribePriceForModifyDesktopOversoldGroupSaleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceForModifyDesktopOversoldGroupSaleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePriceForModifyDesktopOversoldGroupSale",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceForModifyDesktopOversoldGroupSaleResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceForModifyDesktopOversoldGroupSaleResponse({}));
  }

  /**
   * 查询价格用于变配超卖组
   * 
   * @param request - DescribePriceForModifyDesktopOversoldGroupSaleRequest
   * @returns DescribePriceForModifyDesktopOversoldGroupSaleResponse
   */
  async describePriceForModifyDesktopOversoldGroupSale(request: $_model.DescribePriceForModifyDesktopOversoldGroupSaleRequest): Promise<$_model.DescribePriceForModifyDesktopOversoldGroupSaleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceForModifyDesktopOversoldGroupSaleWithOptions(request, runtime);
  }

  /**
   * 查询价格用于续费超卖组
   * 
   * @param request - DescribePriceForRenewDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceForRenewDesktopOversoldGroupResponse
   */
  async describePriceForRenewDesktopOversoldGroupWithOptions(request: $_model.DescribePriceForRenewDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceForRenewDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
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
      action: "DescribePriceForRenewDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceForRenewDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceForRenewDesktopOversoldGroupResponse({}));
  }

  /**
   * 查询价格用于续费超卖组
   * 
   * @param request - DescribePriceForRenewDesktopOversoldGroupRequest
   * @returns DescribePriceForRenewDesktopOversoldGroupResponse
   */
  async describePriceForRenewDesktopOversoldGroup(request: $_model.DescribePriceForRenewDesktopOversoldGroupRequest): Promise<$_model.DescribePriceForRenewDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceForRenewDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * 查询录屏文件列表
   * 
   * @param request - DescribeRecordFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordFileResponse
   */
  async describeRecordFileWithOptions(request: $_model.DescribeRecordFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderSort)) {
      query["OrderSort"] = request.orderSort;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordFileResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordFileResponse({}));
  }

  /**
   * 查询录屏文件列表
   * 
   * @param request - DescribeRecordFileRequest
   * @returns DescribeRecordFileResponse
   */
  async describeRecordFile(request: $_model.DescribeRecordFileRequest): Promise<$_model.DescribeRecordFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordFileWithOptions(request, runtime);
  }

  /**
   * Queries the details of screen recording files.
   * 
   * @param request - DescribeRecordingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordingsResponse
   */
  async describeRecordingsWithOptions(request: $_model.DescribeRecordingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.needSignedUrl)) {
      query["NeedSignedUrl"] = request.needSignedUrl;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.signedUrlExpireMinutes)) {
      query["SignedUrlExpireMinutes"] = request.signedUrlExpireMinutes;
    }

    if (!$dara.isNull(request.standardEndTime)) {
      query["StandardEndTime"] = request.standardEndTime;
    }

    if (!$dara.isNull(request.standardStartTime)) {
      query["StandardStartTime"] = request.standardStartTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordings",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordingsResponse({}));
  }

  /**
   * Queries the details of screen recording files.
   * 
   * @param request - DescribeRecordingsRequest
   * @returns DescribeRecordingsResponse
   */
  async describeRecordings(request: $_model.DescribeRecordingsRequest): Promise<$_model.DescribeRecordingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordingsWithOptions(request, runtime);
  }

  /**
   * Queries the refund amount for unsubscribing from a cloud computer.
   * 
   * @param request - DescribeRefundPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefundPriceResponse
   */
  async describeRefundPriceWithOptions(request: $_model.DescribeRefundPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefundPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.refundType)) {
      query["RefundType"] = request.refundType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefundPrice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefundPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefundPriceResponse({}));
  }

  /**
   * Queries the refund amount for unsubscribing from a cloud computer.
   * 
   * @param request - DescribeRefundPriceRequest
   * @returns DescribeRefundPriceResponse
   */
  async describeRefundPrice(request: $_model.DescribeRefundPriceRequest): Promise<$_model.DescribeRefundPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefundPriceWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud regions that are available for Elastic Desktop Service (EDS).
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-09-30",
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
   * Queries the Alibaba Cloud regions that are available for Elastic Desktop Service (EDS).
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the renewal price of an Alibaba Cloud Workspace service.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPriceWithOptions(request: $_model.DescribeRenewalPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenewalPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenewalPrice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenewalPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenewalPriceResponse({}));
  }

  /**
   * Queries the renewal price of an Alibaba Cloud Workspace service.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPrice(request: $_model.DescribeRenewalPriceRequest): Promise<$_model.DescribeRenewalPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeResourceByCenterPolicyIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceByCenterPolicyIdResponse
   */
  async describeResourceByCenterPolicyIdWithOptions(request: $_model.DescribeResourceByCenterPolicyIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceByCenterPolicyIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceByCenterPolicyId",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceByCenterPolicyIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceByCenterPolicyIdResponse({}));
  }

  /**
   * @param request - DescribeResourceByCenterPolicyIdRequest
   * @returns DescribeResourceByCenterPolicyIdResponse
   */
  async describeResourceByCenterPolicyId(request: $_model.DescribeResourceByCenterPolicyIdRequest): Promise<$_model.DescribeResourceByCenterPolicyIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceByCenterPolicyIdWithOptions(request, runtime);
  }

  /**
   * 查询路由条目列表
   * 
   * @param request - DescribeRouteEntryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRouteEntryListResponse
   */
  async describeRouteEntryListWithOptions(request: $_model.DescribeRouteEntryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRouteEntryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRouteEntryList",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRouteEntryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRouteEntryListResponse({}));
  }

  /**
   * 查询路由条目列表
   * 
   * @param request - DescribeRouteEntryListRequest
   * @returns DescribeRouteEntryListResponse
   */
  async describeRouteEntryList(request: $_model.DescribeRouteEntryListRequest): Promise<$_model.DescribeRouteEntryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteEntryListWithOptions(request, runtime);
  }

  /**
   * 查询路由表列表
   * 
   * @param request - DescribeRouteTableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRouteTableListResponse
   */
  async describeRouteTableListWithOptions(request: $_model.DescribeRouteTableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRouteTableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!$dara.isNull(request.routeTableName)) {
      query["RouteTableName"] = request.routeTableName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRouteTableList",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRouteTableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRouteTableListResponse({}));
  }

  /**
   * 查询路由表列表
   * 
   * @param request - DescribeRouteTableListRequest
   * @returns DescribeRouteTableListResponse
   */
  async describeRouteTableList(request: $_model.DescribeRouteTableListRequest): Promise<$_model.DescribeRouteTableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRouteTableListWithOptions(request, runtime);
  }

  /**
   * 查询办公网络维度安全组策略
   * 
   * @param request - DescribeSecurityGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupAttributeResponse
   */
  async describeSecurityGroupAttributeWithOptions(request: $_model.DescribeSecurityGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityGroupAttribute",
      version: "2020-09-30",
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
   * 查询办公网络维度安全组策略
   * 
   * @param request - DescribeSecurityGroupAttributeRequest
   * @returns DescribeSecurityGroupAttributeResponse
   */
  async describeSecurityGroupAttribute(request: $_model.DescribeSecurityGroupAttributeRequest): Promise<$_model.DescribeSecurityGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the session statistics of a region.
   * 
   * @remarks
   *   This is a central operation and can be called only by using services in the China (Shanghai) region.
   * *   You can query session statistics for the past hour.
   * 
   * @param request - DescribeSessionStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSessionStatisticResponse
   */
  async describeSessionStatisticWithOptions(request: $_model.DescribeSessionStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSessionStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSessionStatistic",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSessionStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSessionStatisticResponse({}));
  }

  /**
   * Queries the session statistics of a region.
   * 
   * @remarks
   *   This is a central operation and can be called only by using services in the China (Shanghai) region.
   * *   You can query session statistics for the past hour.
   * 
   * @param request - DescribeSessionStatisticRequest
   * @returns DescribeSessionStatisticResponse
   */
  async describeSessionStatistic(request: $_model.DescribeSessionStatisticRequest): Promise<$_model.DescribeSessionStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSessionStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the snapshots that are created based on a cloud computer and the details of the snapshots.
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!$dara.isNull(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2020-09-30",
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
   * Queries the snapshots that are created based on a cloud computer and the details of the snapshots.
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * 查询SNAT条目
   * 
   * @param request - DescribeSnatTableEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnatTableEntriesResponse
   */
  async describeSnatTableEntriesWithOptions(request: $_model.DescribeSnatTableEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnatTableEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    if (!$dara.isNull(request.snatTableId)) {
      query["SnatTableId"] = request.snatTableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnatTableEntries",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnatTableEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnatTableEntriesResponse({}));
  }

  /**
   * 查询SNAT条目
   * 
   * @param request - DescribeSnatTableEntriesRequest
   * @returns DescribeSnatTableEntriesResponse
   */
  async describeSnatTableEntries(request: $_model.DescribeSnatTableEntriesRequest): Promise<$_model.DescribeSnatTableEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnatTableEntriesWithOptions(request, runtime);
  }

  /**
   * 查询子网
   * 
   * @param request - DescribeSubnetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubnetsResponse
   */
  async describeSubnetsWithOptions(request: $_model.DescribeSubnetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubnetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      query["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubnets",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubnetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubnetsResponse({}));
  }

  /**
   * 查询子网
   * 
   * @param request - DescribeSubnetsRequest
   * @returns DescribeSubnetsResponse
   */
  async describeSubnets(request: $_model.DescribeSubnetsRequest): Promise<$_model.DescribeSubnetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubnetsWithOptions(request, runtime);
  }

  /**
   * Queries the details of cloud computer templates.
   * 
   * @param request - DescribeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: $_model.DescribeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.templateIds)) {
      body["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplates",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplatesResponse({}));
  }

  /**
   * Queries the details of cloud computer templates.
   * 
   * @param request - DescribeTemplatesRequest
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(request: $_model.DescribeTemplatesRequest): Promise<$_model.DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a scheduled task configuration group.
   * 
   * @param request - DescribeTimerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTimerGroupResponse
   */
  async describeTimerGroupWithOptions(request: $_model.DescribeTimerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTimerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTimerGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTimerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTimerGroupResponse({}));
  }

  /**
   * Queries a scheduled task configuration group.
   * 
   * @param request - DescribeTimerGroupRequest
   * @returns DescribeTimerGroupResponse
   */
  async describeTimerGroup(request: $_model.DescribeTimerGroupRequest): Promise<$_model.DescribeTimerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTimerGroupWithOptions(request, runtime);
  }

  /**
   * 查询超卖组中用户连接数据
   * 
   * @param request - DescribeUserConnectTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserConnectTimeResponse
   */
  async describeUserConnectTimeWithOptions(request: $_model.DescribeUserConnectTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserConnectTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserConnectTime",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserConnectTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserConnectTimeResponse({}));
  }

  /**
   * 查询超卖组中用户连接数据
   * 
   * @param request - DescribeUserConnectTimeRequest
   * @returns DescribeUserConnectTimeResponse
   */
  async describeUserConnectTime(request: $_model.DescribeUserConnectTimeRequest): Promise<$_model.DescribeUserConnectTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserConnectTimeWithOptions(request, runtime);
  }

  /**
   * Queries the connection records of an authorized user to cloud computers in a cloud computer pool.
   * 
   * @param request - DescribeUserConnectionRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserConnectionRecordsResponse
   */
  async describeUserConnectionRecordsWithOptions(request: $_model.DescribeUserConnectionRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserConnectionRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectDurationFrom)) {
      query["ConnectDurationFrom"] = request.connectDurationFrom;
    }

    if (!$dara.isNull(request.connectDurationTo)) {
      query["ConnectDurationTo"] = request.connectDurationTo;
    }

    if (!$dara.isNull(request.connectEndTimeFrom)) {
      query["ConnectEndTimeFrom"] = request.connectEndTimeFrom;
    }

    if (!$dara.isNull(request.connectEndTimeTo)) {
      query["ConnectEndTimeTo"] = request.connectEndTimeTo;
    }

    if (!$dara.isNull(request.connectStartTimeFrom)) {
      query["ConnectStartTimeFrom"] = request.connectStartTimeFrom;
    }

    if (!$dara.isNull(request.connectStartTimeTo)) {
      query["ConnectStartTimeTo"] = request.connectStartTimeTo;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.endUserType)) {
      query["EndUserType"] = request.endUserType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserConnectionRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserConnectionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserConnectionRecordsResponse({}));
  }

  /**
   * Queries the connection records of an authorized user to cloud computers in a cloud computer pool.
   * 
   * @param request - DescribeUserConnectionRecordsRequest
   * @returns DescribeUserConnectionRecordsResponse
   */
  async describeUserConnectionRecords(request: $_model.DescribeUserConnectionRecordsRequest): Promise<$_model.DescribeUserConnectionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserConnectionRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the user profile management (UPM) directory blacklist and whitelist.
   * 
   * @param request - DescribeUserProfilePathRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserProfilePathRulesResponse
   */
  async describeUserProfilePathRulesWithOptions(request: $_model.DescribeUserProfilePathRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserProfilePathRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserProfilePathRules",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserProfilePathRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserProfilePathRulesResponse({}));
  }

  /**
   * Queries the configurations of the user profile management (UPM) directory blacklist and whitelist.
   * 
   * @param request - DescribeUserProfilePathRulesRequest
   * @returns DescribeUserProfilePathRulesResponse
   */
  async describeUserProfilePathRules(request: $_model.DescribeUserProfilePathRulesRequest): Promise<$_model.DescribeUserProfilePathRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserProfilePathRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about authorized users of a cloud computer share, including the usernames, email addresses, mobile numbers, and cloud computer IDs.
   * 
   * @param request - DescribeUsersInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersInGroupResponse
   */
  async describeUsersInGroupWithOptions(request: $_model.DescribeUsersInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsersInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectState)) {
      query["ConnectState"] = request.connectState;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.queryUserDetail)) {
      query["QueryUserDetail"] = request.queryUserDetail;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsersInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsersInGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsersInGroupResponse({}));
  }

  /**
   * Queries the information about authorized users of a cloud computer share, including the usernames, email addresses, mobile numbers, and cloud computer IDs.
   * 
   * @param request - DescribeUsersInGroupRequest
   * @returns DescribeUsersInGroupResponse
   */
  async describeUsersInGroup(request: $_model.DescribeUsersInGroupRequest): Promise<$_model.DescribeUsersInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersInGroupWithOptions(request, runtime);
  }

  /**
   * Queries the passwords of authorized users of a cloud computer.
   * 
   * @param request - DescribeUsersPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersPasswordResponse
   */
  async describeUsersPasswordWithOptions(request: $_model.DescribeUsersPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsersPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsersPassword",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsersPasswordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsersPasswordResponse({}));
  }

  /**
   * Queries the passwords of authorized users of a cloud computer.
   * 
   * @param request - DescribeUsersPasswordRequest
   * @returns DescribeUsersPasswordResponse
   */
  async describeUsersPassword(request: $_model.DescribeUsersPasswordRequest): Promise<$_model.DescribeUsersPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersPasswordWithOptions(request, runtime);
  }

  /**
   * Queries multi-factor authentication (MFA) devices that are bound to an Active Directory (AD) account.
   * 
   * @param request - DescribeVirtualMFADevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualMFADevicesResponse
   */
  async describeVirtualMFADevicesWithOptions(request: $_model.DescribeVirtualMFADevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVirtualMFADevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVirtualMFADevices",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVirtualMFADevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVirtualMFADevicesResponse({}));
  }

  /**
   * Queries multi-factor authentication (MFA) devices that are bound to an Active Directory (AD) account.
   * 
   * @param request - DescribeVirtualMFADevicesRequest
   * @returns DescribeVirtualMFADevicesResponse
   */
  async describeVirtualMFADevices(request: $_model.DescribeVirtualMFADevicesRequest): Promise<$_model.DescribeVirtualMFADevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVirtualMFADevicesWithOptions(request, runtime);
  }

  /**
   * Queries the zones in a region in which Elastic Desktop Service is supported.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2020-09-30",
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
   * Queries the zones in a region in which Elastic Desktop Service is supported.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Unbinds an advanced office network from a CEN instance.
   * 
   * @param request - DetachCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachCenResponse
   */
  async detachCenWithOptions(request: $_model.DetachCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachCenResponse>(await this.callApi(params, req, runtime), new $_model.DetachCenResponse({}));
  }

  /**
   * Unbinds an advanced office network from a CEN instance.
   * 
   * @param request - DetachCenRequest
   * @returns DetachCenResponse
   */
  async detachCen(request: $_model.DetachCenRequest): Promise<$_model.DetachCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachCenWithOptions(request, runtime);
  }

  /**
   * Unbinds a hardware client from a user.
   * 
   * @param request - DetachEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEndUserResponse
   */
  async detachEndUserWithOptions(request: $_model.DetachEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachEndUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEndUser",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachEndUserResponse>(await this.callApi(params, req, runtime), new $_model.DetachEndUserResponse({}));
  }

  /**
   * Unbinds a hardware client from a user.
   * 
   * @param request - DetachEndUserRequest
   * @returns DetachEndUserResponse
   */
  async detachEndUser(request: $_model.DetachEndUserRequest): Promise<$_model.DetachEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEndUserWithOptions(request, runtime);
  }

  /**
   * Disables specific cloud computers in a cloud computer share. After you call this operation to disable specific cloud computers, they enter the unavailable state.
   * 
   * @param request - DisableDesktopsInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDesktopsInGroupResponse
   */
  async disableDesktopsInGroupWithOptions(request: $_model.DisableDesktopsInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDesktopsInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDesktopsInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new $_model.DisableDesktopsInGroupResponse({}));
  }

  /**
   * Disables specific cloud computers in a cloud computer share. After you call this operation to disable specific cloud computers, they enter the unavailable state.
   * 
   * @param request - DisableDesktopsInGroupRequest
   * @returns DisableDesktopsInGroupResponse
   */
  async disableDesktopsInGroup(request: $_model.DisableDesktopsInGroupRequest): Promise<$_model.DisableDesktopsInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDesktopsInGroupWithOptions(request, runtime);
  }

  /**
   * Disconnects from desktop sessions.
   * 
   * @param request - DisconnectDesktopSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisconnectDesktopSessionsResponse
   */
  async disconnectDesktopSessionsWithOptions(request: $_model.DisconnectDesktopSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisconnectDesktopSessionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.preCheck)) {
      query["PreCheck"] = request.preCheck;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessions)) {
      query["Sessions"] = request.sessions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisconnectDesktopSessions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisconnectDesktopSessionsResponse>(await this.callApi(params, req, runtime), new $_model.DisconnectDesktopSessionsResponse({}));
  }

  /**
   * Disconnects from desktop sessions.
   * 
   * @param request - DisconnectDesktopSessionsRequest
   * @returns DisconnectDesktopSessionsResponse
   */
  async disconnectDesktopSessions(request: $_model.DisconnectDesktopSessionsRequest): Promise<$_model.DisconnectDesktopSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disconnectDesktopSessionsWithOptions(request, runtime);
  }

  /**
   * 实例解绑/删除公网IP
   * 
   * @param request - DissociateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateIpAddressResponse
   */
  async dissociateIpAddressWithOptions(request: $_model.DissociateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipId)) {
      query["EipId"] = request.eipId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateIpAddress",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.DissociateIpAddressResponse({}));
  }

  /**
   * 实例解绑/删除公网IP
   * 
   * @param request - DissociateIpAddressRequest
   * @returns DissociateIpAddressResponse
   */
  async dissociateIpAddress(request: $_model.DissociateIpAddressRequest): Promise<$_model.DissociateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateIpAddressWithOptions(request, runtime);
  }

  /**
   * Unbinds a premium bandwidth plan from an office network.
   * 
   * @param request - DissociateNetworkPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateNetworkPackageResponse
   */
  async dissociateNetworkPackageWithOptions(request: $_model.DissociateNetworkPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateNetworkPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new $_model.DissociateNetworkPackageResponse({}));
  }

  /**
   * Unbinds a premium bandwidth plan from an office network.
   * 
   * @param request - DissociateNetworkPackageRequest
   * @returns DissociateNetworkPackageResponse
   */
  async dissociateNetworkPackage(request: $_model.DissociateNetworkPackageRequest): Promise<$_model.DissociateNetworkPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateNetworkPackageWithOptions(request, runtime);
  }

  /**
   * Obtains the download link of the target file.
   * 
   * @param request - DownloadCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadCdsFileResponse
   */
  async downloadCdsFileWithOptions(request: $_model.DownloadCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.DownloadCdsFileResponse({}));
  }

  /**
   * Obtains the download link of the target file.
   * 
   * @param request - DownloadCdsFileRequest
   * @returns DownloadCdsFileResponse
   */
  async downloadCdsFile(request: $_model.DownloadCdsFileRequest): Promise<$_model.DownloadCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadCdsFileWithOptions(request, runtime);
  }

  /**
   * Exports events that occur on a cloud desktop from an Alibaba Cloud Workspace client.
   * 
   * @param request - ExportClientEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportClientEventsResponse
   */
  async exportClientEventsWithOptions(request: $_model.ExportClientEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportClientEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!$dara.isNull(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportClientEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportClientEventsResponse>(await this.callApi(params, req, runtime), new $_model.ExportClientEventsResponse({}));
  }

  /**
   * Exports events that occur on a cloud desktop from an Alibaba Cloud Workspace client.
   * 
   * @param request - ExportClientEventsRequest
   * @returns ExportClientEventsResponse
   */
  async exportClientEvents(request: $_model.ExportClientEventsRequest): Promise<$_model.ExportClientEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportClientEventsWithOptions(request, runtime);
  }

  /**
   * Exports cloud computer shares and saves the list as an XLSX file. Each entry includes the ID and name of the cloud computer share, the ID and name of the office network, the cloud computer share template, and the name of the security policy.
   * 
   * @param request - ExportDesktopGroupInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportDesktopGroupInfoResponse
   */
  async exportDesktopGroupInfoWithOptions(request: $_model.ExportDesktopGroupInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportDesktopGroupInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportDesktopGroupInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportDesktopGroupInfoResponse>(await this.callApi(params, req, runtime), new $_model.ExportDesktopGroupInfoResponse({}));
  }

  /**
   * Exports cloud computer shares and saves the list as an XLSX file. Each entry includes the ID and name of the cloud computer share, the ID and name of the office network, the cloud computer share template, and the name of the security policy.
   * 
   * @param request - ExportDesktopGroupInfoRequest
   * @returns ExportDesktopGroupInfoResponse
   */
  async exportDesktopGroupInfo(request: $_model.ExportDesktopGroupInfoRequest): Promise<$_model.ExportDesktopGroupInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportDesktopGroupInfoWithOptions(request, runtime);
  }

  /**
   * Exports a cloud computer list as a CSV file.
   * 
   * @remarks
   * The cloud computer list exported by calling this operation is saved as a CSV file. Each entry of data of a cloud computer includes the following fields:
   * *   Cloud computer ID and name
   * *   Office network ID and name
   * *   The instance type, OS and protocol of the cloud computer
   * *   System disk and data disk of the cloud computer
   * *   The status
   * *   Purchase method
   * *   The time when the cloud computer expires
   * *   Remaining duration and total duration
   * *   Number of assigned users and number of current users
   * *   Office network type
   * *   The time when the cloud computer was created
   * *   Tags
   * *   Encryption status
   * *   IP
   * *   The hostname
   * 
   * @param request - ExportDesktopListInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportDesktopListInfoResponse
   */
  async exportDesktopListInfoWithOptions(request: $_model.ExportDesktopListInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportDesktopListInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportDesktopListInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportDesktopListInfoResponse>(await this.callApi(params, req, runtime), new $_model.ExportDesktopListInfoResponse({}));
  }

  /**
   * Exports a cloud computer list as a CSV file.
   * 
   * @remarks
   * The cloud computer list exported by calling this operation is saved as a CSV file. Each entry of data of a cloud computer includes the following fields:
   * *   Cloud computer ID and name
   * *   Office network ID and name
   * *   The instance type, OS and protocol of the cloud computer
   * *   System disk and data disk of the cloud computer
   * *   The status
   * *   Purchase method
   * *   The time when the cloud computer expires
   * *   Remaining duration and total duration
   * *   Number of assigned users and number of current users
   * *   Office network type
   * *   The time when the cloud computer was created
   * *   Tags
   * *   Encryption status
   * *   IP
   * *   The hostname
   * 
   * @param request - ExportDesktopListInfoRequest
   * @returns ExportDesktopListInfoResponse
   */
  async exportDesktopListInfo(request: $_model.ExportDesktopListInfoRequest): Promise<$_model.ExportDesktopListInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportDesktopListInfoWithOptions(request, runtime);
  }

  /**
   * Obtains the information about an asynchronous task based on the value of the AsyncTaskId parameter that you obtain by calling the CopyCdsFile operation.
   * 
   * @param request - GetAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(request: $_model.GetAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncTaskId)) {
      query["AsyncTaskId"] = request.asyncTaskId;
    }

    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncTaskResponse({}));
  }

  /**
   * Obtains the information about an asynchronous task based on the value of the AsyncTaskId parameter that you obtain by calling the CopyCdsFile operation.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(request: $_model.GetAsyncTaskRequest): Promise<$_model.GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncTaskWithOptions(request, runtime);
  }

  /**
   * Obtains the credential that is used to connect to a cloud desktop.
   * 
   * @remarks
   * The cloud computer must be in the Running state. The ticket obtained by calling this operation will expire in 10 minutes.
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: $_model.GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectionTicketResponse({}));
  }

  /**
   * Obtains the credential that is used to connect to a cloud desktop.
   * 
   * @remarks
   * The cloud computer must be in the Running state. The ticket obtained by calling this operation will expire in 10 minutes.
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Obtains the credentials of the stream collaboration
   * 
   * @param request - GetCoordinateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCoordinateTicketResponse
   */
  async getCoordinateTicketWithOptions(request: $_model.GetCoordinateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCoordinateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCoordinateTicket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCoordinateTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetCoordinateTicketResponse({}));
  }

  /**
   * Obtains the credentials of the stream collaboration
   * 
   * @param request - GetCoordinateTicketRequest
   * @returns GetCoordinateTicketResponse
   */
  async getCoordinateTicket(request: $_model.GetCoordinateTicketRequest): Promise<$_model.GetCoordinateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCoordinateTicketWithOptions(request, runtime);
  }

  /**
   * Queries the information about a cloud computer share.
   * 
   * @param request - GetDesktopGroupDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDesktopGroupDetailResponse
   */
  async getDesktopGroupDetailWithOptions(request: $_model.GetDesktopGroupDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDesktopGroupDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDesktopGroupDetail",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDesktopGroupDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDesktopGroupDetailResponse({}));
  }

  /**
   * Queries the information about a cloud computer share.
   * 
   * @param request - GetDesktopGroupDetailRequest
   * @returns GetDesktopGroupDetailResponse
   */
  async getDesktopGroupDetail(request: $_model.GetDesktopGroupDetailRequest): Promise<$_model.GetDesktopGroupDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDesktopGroupDetailWithOptions(request, runtime);
  }

  /**
   * Queries whether single sign-on (SSO) is enabled for a workspace.
   * 
   * @param request - GetOfficeSiteSsoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOfficeSiteSsoStatusResponse
   */
  async getOfficeSiteSsoStatusWithOptions(request: $_model.GetOfficeSiteSsoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOfficeSiteSsoStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOfficeSiteSsoStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetOfficeSiteSsoStatusResponse({}));
  }

  /**
   * Queries whether single sign-on (SSO) is enabled for a workspace.
   * 
   * @param request - GetOfficeSiteSsoStatusRequest
   * @returns GetOfficeSiteSsoStatusResponse
   */
  async getOfficeSiteSsoStatus(request: $_model.GetOfficeSiteSsoStatusRequest): Promise<$_model.GetOfficeSiteSsoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  /**
   * Obtains the metadata of a Security Assertion Markup Language (SAML) 2.0-based service provider (SP).
   * 
   * @remarks
   * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
   * 
   * @param request - GetSpMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpMetadataResponse
   */
  async getSpMetadataWithOptions(request: $_model.GetSpMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpMetadata",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpMetadataResponse>(await this.callApi(params, req, runtime), new $_model.GetSpMetadataResponse({}));
  }

  /**
   * Obtains the metadata of a Security Assertion Markup Language (SAML) 2.0-based service provider (SP).
   * 
   * @remarks
   * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
   * 
   * @param request - GetSpMetadataRequest
   * @returns GetSpMetadataResponse
   */
  async getSpMetadata(request: $_model.GetSpMetadataRequest): Promise<$_model.GetSpMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSpMetadataWithOptions(request, runtime);
  }

  /**
   * Hibernates cloud desktops.
   * 
   * @remarks
   * Hibernating a cloud desktop is in private preview. If you want to try this feature, submit a ticket.
   * 
   * @param request - HibernateDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HibernateDesktopsResponse
   */
  async hibernateDesktopsWithOptions(request: $_model.HibernateDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HibernateDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HibernateDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HibernateDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.HibernateDesktopsResponse({}));
  }

  /**
   * Hibernates cloud desktops.
   * 
   * @remarks
   * Hibernating a cloud desktop is in private preview. If you want to try this feature, submit a ticket.
   * 
   * @param request - HibernateDesktopsRequest
   * @returns HibernateDesktopsResponse
   */
  async hibernateDesktops(request: $_model.HibernateDesktopsRequest): Promise<$_model.HibernateDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hibernateDesktopsWithOptions(request, runtime);
  }

  /**
   * Queries the list of files in the network disk and obtain the download link of the file.
   * 
   * @param tmpReq - ListCdsFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCdsFilesResponse
   */
  async listCdsFilesWithOptions(tmpReq: $_model.ListCdsFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCdsFilesResponse> {
    tmpReq.validate();
    let request = new $_model.ListCdsFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.parentFileId)) {
      query["ParentFileId"] = request.parentFileId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCdsFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCdsFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListCdsFilesResponse({}));
  }

  /**
   * Queries the list of files in the network disk and obtain the download link of the file.
   * 
   * @param request - ListCdsFilesRequest
   * @returns ListCdsFilesResponse
   */
  async listCdsFiles(request: $_model.ListCdsFilesRequest): Promise<$_model.ListCdsFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCdsFilesWithOptions(request, runtime);
  }

  /**
   * Obtains the user information in the AD system if you use an AD directory to connect to an AD system.
   * 
   * @remarks
   * If you use an AD directory to connect to an AD system, you can call this operation to obtain the user information in the AD system.
   * 
   * @param request - ListDirectoryUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoryUsersResponse
   */
  async listDirectoryUsersWithOptions(request: $_model.ListDirectoryUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDirectoryUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignedInfo)) {
      query["AssignedInfo"] = request.assignedInfo;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeAssignedUser)) {
      query["IncludeAssignedUser"] = request.includeAssignedUser;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDirectoryUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDirectoryUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListDirectoryUsersResponse({}));
  }

  /**
   * Obtains the user information in the AD system if you use an AD directory to connect to an AD system.
   * 
   * @remarks
   * If you use an AD directory to connect to an AD system, you can call this operation to obtain the user information in the AD system.
   * 
   * @param request - ListDirectoryUsersRequest
   * @returns ListDirectoryUsersResponse
   */
  async listDirectoryUsers(request: $_model.ListDirectoryUsersRequest): Promise<$_model.ListDirectoryUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDirectoryUsersWithOptions(request, runtime);
  }

  /**
   * Queries the permissions on a shared file on a drive.
   * 
   * @param request - ListFilePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilePermissionResponse
   */
  async listFilePermissionWithOptions(request: $_model.ListFilePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFilePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilePermissionResponse>(await this.callApi(params, req, runtime), new $_model.ListFilePermissionResponse({}));
  }

  /**
   * Queries the permissions on a shared file on a drive.
   * 
   * @param request - ListFilePermissionRequest
   * @returns ListFilePermissionResponse
   */
  async listFilePermission(request: $_model.ListFilePermissionRequest): Promise<$_model.ListFilePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilePermissionWithOptions(request, runtime);
  }

  /**
   * Queries applications installed on a cloud computer.
   * 
   * @param request - ListInstalledAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstalledAppsResponse
   */
  async listInstalledAppsWithOptions(request: $_model.ListInstalledAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstalledAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
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
      action: "ListInstalledApps",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstalledAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstalledAppsResponse({}));
  }

  /**
   * Queries applications installed on a cloud computer.
   * 
   * @param request - ListInstalledAppsRequest
   * @returns ListInstalledAppsResponse
   */
  async listInstalledApps(request: $_model.ListInstalledAppsRequest): Promise<$_model.ListInstalledAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstalledAppsWithOptions(request, runtime);
  }

  /**
   * Queries information about an office network, including its status, cloud computer quantity, virtual private cloud (VPC) type, and more.
   * 
   * @param request - ListOfficeSiteOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOfficeSiteOverviewResponse
   */
  async listOfficeSiteOverviewWithOptions(request: $_model.ListOfficeSiteOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOfficeSiteOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceRefresh)) {
      query["ForceRefresh"] = request.forceRefresh;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.queryRange)) {
      query["QueryRange"] = request.queryRange;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOfficeSiteOverview",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOfficeSiteOverviewResponse>(await this.callApi(params, req, runtime), new $_model.ListOfficeSiteOverviewResponse({}));
  }

  /**
   * Queries information about an office network, including its status, cloud computer quantity, virtual private cloud (VPC) type, and more.
   * 
   * @param request - ListOfficeSiteOverviewRequest
   * @returns ListOfficeSiteOverviewResponse
   */
  async listOfficeSiteOverview(request: $_model.ListOfficeSiteOverviewRequest): Promise<$_model.ListOfficeSiteOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOfficeSiteOverviewWithOptions(request, runtime);
  }

  /**
   * Queries information about Active Directory (AD) accounts after an enterprise AD office network (formerly workspace) interconnects to an AD domain.
   * 
   * @param request - ListOfficeSiteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOfficeSiteUsersResponse
   */
  async listOfficeSiteUsersWithOptions(request: $_model.ListOfficeSiteUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOfficeSiteUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignedInfo)) {
      query["AssignedInfo"] = request.assignedInfo;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeAssignedUser)) {
      query["IncludeAssignedUser"] = request.includeAssignedUser;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOfficeSiteUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOfficeSiteUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListOfficeSiteUsersResponse({}));
  }

  /**
   * Queries information about Active Directory (AD) accounts after an enterprise AD office network (formerly workspace) interconnects to an AD domain.
   * 
   * @param request - ListOfficeSiteUsersRequest
   * @returns ListOfficeSiteUsersResponse
   */
  async listOfficeSiteUsers(request: $_model.ListOfficeSiteUsersRequest): Promise<$_model.ListOfficeSiteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOfficeSiteUsersWithOptions(request, runtime);
  }

  /**
   * Queries the tags of cloud computers.
   * 
   * @remarks
   * You must use at least one of the following parameters in the request to determine the object that you want to query: `ResourceId.N`, `Tag.N.Key`, and `Tag.N.Value`.
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
      version: "2020-09-30",
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
   * Queries the tags of cloud computers.
   * 
   * @remarks
   * You must use at least one of the following parameters in the request to determine the object that you want to query: `ResourceId.N`, `Tag.N.Key`, and `Tag.N.Value`.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the file information of a file transmission task.
   * 
   * @param request - ListTransferFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTransferFilesResponse
   */
  async listTransferFilesWithOptions(request: $_model.ListTransferFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTransferFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTransferFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTransferFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListTransferFilesResponse({}));
  }

  /**
   * Queries the file information of a file transmission task.
   * 
   * @param request - ListTransferFilesRequest
   * @returns ListTransferFilesResponse
   */
  async listTransferFiles(request: $_model.ListTransferFilesRequest): Promise<$_model.ListTransferFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTransferFilesWithOptions(request, runtime);
  }

  /**
   * Obtains the organizational units (OUs) of an Active Directory (AD) domain that is connected to an enterprise AD office network (formerly workspace).
   * 
   * @param request - ListUserAdOrganizationUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAdOrganizationUnitsResponse
   */
  async listUserAdOrganizationUnitsWithOptions(request: $_model.ListUserAdOrganizationUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserAdOrganizationUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserAdOrganizationUnits",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserAdOrganizationUnitsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserAdOrganizationUnitsResponse({}));
  }

  /**
   * Obtains the organizational units (OUs) of an Active Directory (AD) domain that is connected to an enterprise AD office network (formerly workspace).
   * 
   * @param request - ListUserAdOrganizationUnitsRequest
   * @returns ListUserAdOrganizationUnitsResponse
   */
  async listUserAdOrganizationUnits(request: $_model.ListUserAdOrganizationUnitsRequest): Promise<$_model.ListUserAdOrganizationUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserAdOrganizationUnitsWithOptions(request, runtime);
  }

  /**
   * Locks a multi-factor authentication (MFA) device that is in the NORMAL state.
   * 
   * @remarks
   * After a virtual MFA device is locked, its status changes to LOCKED. The Active Directory (AD) user who uses the virtual MFA device is unable to pass MFA and is therefore unable to log on to the client. You can call the [UnlockVirtualMFADevice](https://help.aliyun.com/document_detail/206212.html) operation to unlock the device.
   * 
   * @param request - LockVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockVirtualMFADeviceResponse
   */
  async lockVirtualMFADeviceWithOptions(request: $_model.LockVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockVirtualMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.LockVirtualMFADeviceResponse({}));
  }

  /**
   * Locks a multi-factor authentication (MFA) device that is in the NORMAL state.
   * 
   * @remarks
   * After a virtual MFA device is locked, its status changes to LOCKED. The Active Directory (AD) user who uses the virtual MFA device is unable to pass MFA and is therefore unable to log on to the client. You can call the [UnlockVirtualMFADevice](https://help.aliyun.com/document_detail/206212.html) operation to unlock the device.
   * 
   * @param request - LockVirtualMFADeviceRequest
   * @returns LockVirtualMFADeviceResponse
   */
  async lockVirtualMFADevice(request: $_model.LockVirtualMFADeviceRequest): Promise<$_model.LockVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Migrates cloud computers from the current office network (formerly called workspace) to the new office network.
   * 
   * @param request - MigrateDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateDesktopsResponse
   */
  async migrateDesktopsWithOptions(request: $_model.MigrateDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetOfficeSiteId)) {
      query["TargetOfficeSiteId"] = request.targetOfficeSiteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.MigrateDesktopsResponse({}));
  }

  /**
   * Migrates cloud computers from the current office network (formerly called workspace) to the new office network.
   * 
   * @param request - MigrateDesktopsRequest
   * @returns MigrateDesktopsResponse
   */
  async migrateDesktops(request: $_model.MigrateDesktopsRequest): Promise<$_model.MigrateDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateDesktopsWithOptions(request, runtime);
  }

  /**
   * Update the protocols of images to Adaptive Streaming Protocol (ASP).
   * 
   * @param request - MigrateImageProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateImageProtocolResponse
   */
  async migrateImageProtocolWithOptions(request: $_model.MigrateImageProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateImageProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetProtocolType)) {
      query["TargetProtocolType"] = request.targetProtocolType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateImageProtocol",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateImageProtocolResponse>(await this.callApi(params, req, runtime), new $_model.MigrateImageProtocolResponse({}));
  }

  /**
   * Update the protocols of images to Adaptive Streaming Protocol (ASP).
   * 
   * @param request - MigrateImageProtocolRequest
   * @returns MigrateImageProtocolResponse
   */
  async migrateImageProtocol(request: $_model.MigrateImageProtocolRequest): Promise<$_model.MigrateImageProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateImageProtocolWithOptions(request, runtime);
  }

  /**
   * Modifies an Active Directory (AD) directory.
   * 
   * @remarks
   * You can modify the following domain name- and Domain Name System (DNS)-related parameters only for Active Directory (AD) directories that are in the ERROR or REGISTERING state: `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress`.
   * 
   * @param request - ModifyADConnectorDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyADConnectorDirectoryResponse
   */
  async modifyADConnectorDirectoryWithOptions(request: $_model.ModifyADConnectorDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyADConnectorDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!$dara.isNull(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!$dara.isNull(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!$dara.isNull(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!$dara.isNull(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!$dara.isNull(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyADConnectorDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyADConnectorDirectoryResponse({}));
  }

  /**
   * Modifies an Active Directory (AD) directory.
   * 
   * @remarks
   * You can modify the following domain name- and Domain Name System (DNS)-related parameters only for Active Directory (AD) directories that are in the ERROR or REGISTERING state: `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress`.
   * 
   * @param request - ModifyADConnectorDirectoryRequest
   * @returns ModifyADConnectorDirectoryResponse
   */
  async modifyADConnectorDirectory(request: $_model.ModifyADConnectorDirectoryRequest): Promise<$_model.ModifyADConnectorDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyADConnectorDirectoryWithOptions(request, runtime);
  }

  /**
   * Modifies the basic properties of an enterprise Active Directory (AD) office network, such as the office network name and domain names of the enterprise AD subdomains.
   * 
   * @remarks
   * You can modify parameters of domain names and Domain Name System (DNS) for enterprise AD office networks that are in the `ERROR` or `REGISTERED` state. The parameters include `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress.N`.
   * 
   * @param request - ModifyADConnectorOfficeSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyADConnectorOfficeSiteResponse
   */
  async modifyADConnectorOfficeSiteWithOptions(request: $_model.ModifyADConnectorOfficeSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyADConnectorOfficeSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!$dara.isNull(request.backupDCHostname)) {
      query["BackupDCHostname"] = request.backupDCHostname;
    }

    if (!$dara.isNull(request.backupDns)) {
      query["BackupDns"] = request.backupDns;
    }

    if (!$dara.isNull(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!$dara.isNull(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!$dara.isNull(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!$dara.isNull(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!$dara.isNull(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyADConnectorOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new $_model.ModifyADConnectorOfficeSiteResponse({}));
  }

  /**
   * Modifies the basic properties of an enterprise Active Directory (AD) office network, such as the office network name and domain names of the enterprise AD subdomains.
   * 
   * @remarks
   * You can modify parameters of domain names and Domain Name System (DNS) for enterprise AD office networks that are in the `ERROR` or `REGISTERED` state. The parameters include `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress.N`.
   * 
   * @param request - ModifyADConnectorOfficeSiteRequest
   * @returns ModifyADConnectorOfficeSiteResponse
   */
  async modifyADConnectorOfficeSite(request: $_model.ModifyADConnectorOfficeSiteRequest): Promise<$_model.ModifyADConnectorOfficeSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyADConnectorOfficeSiteWithOptions(request, runtime);
  }

  /**
   * Modify the Internet access control policy on the office network or cloud computer granularity.
   * 
   * @remarks
   * You can set different Internet access control policies at different granularities to achieve the effect of composite policies. For example, you can disable the Internet access on the office network granularity and enable the Internet access on specific cloud computer granularity. The effect is that all cloud computers in the office network except the specified cloud computers are not allowed to access the Internet.
   * 
   * @param request - ModifyAclEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAclEntriesResponse
   */
  async modifyAclEntriesWithOptions(request: $_model.ModifyAclEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAclEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAclEntries",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAclEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAclEntriesResponse({}));
  }

  /**
   * Modify the Internet access control policy on the office network or cloud computer granularity.
   * 
   * @remarks
   * You can set different Internet access control policies at different granularities to achieve the effect of composite policies. For example, you can disable the Internet access on the office network granularity and enable the Internet access on specific cloud computer granularity. The effect is that all cloud computers in the office network except the specified cloud computers are not allowed to access the Internet.
   * 
   * @param request - ModifyAclEntriesRequest
   * @returns ModifyAclEntriesResponse
   */
  async modifyAclEntries(request: $_model.ModifyAclEntriesRequest): Promise<$_model.ModifyAclEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAclEntriesWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of an automatic snapshot policy, such as the policy name and snapshot retention period.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicyWithOptions(request: $_model.ModifyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoSnapshotPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoSnapshotPolicyResponse({}));
  }

  /**
   * Modifies the parameters of an automatic snapshot policy, such as the policy name and snapshot retention period.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicy(request: $_model.ModifyAutoSnapshotPolicyRequest): Promise<$_model.ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a custom cloud computer template.
   * 
   * @remarks
   * Only custom desktop templates can be modified.
   * 
   * @param request - ModifyBundleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBundleResponse
   */
  async modifyBundleWithOptions(request: $_model.ModifyBundleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBundleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBundle",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBundleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBundleResponse({}));
  }

  /**
   * Modifies a custom cloud computer template.
   * 
   * @remarks
   * Only custom desktop templates can be modified.
   * 
   * @param request - ModifyBundleRequest
   * @returns ModifyBundleResponse
   */
  async modifyBundle(request: $_model.ModifyBundleRequest): Promise<$_model.ModifyBundleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBundleWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a disk file or folder, such as the file name.
   * 
   * @param request - ModifyCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdsFileResponse
   */
  async modifyCdsFileWithOptions(request: $_model.ModifyCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdsFileResponse({}));
  }

  /**
   * Modifies the attributes of a disk file or folder, such as the file name.
   * 
   * @param request - ModifyCdsFileRequest
   * @returns ModifyCdsFileResponse
   */
  async modifyCdsFile(request: $_model.ModifyCdsFileRequest): Promise<$_model.ModifyCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdsFileWithOptions(request, runtime);
  }

  /**
   * Modifies the link for file sharing.
   * 
   * @param request - ModifyCdsFileShareLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdsFileShareLinkResponse
   */
  async modifyCdsFileShareLinkWithOptions(request: $_model.ModifyCdsFileShareLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdsFileShareLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      query["DisableDownload"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      query["DisablePreview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      query["DisableSave"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadCount)) {
      query["DownloadCount"] = request.downloadCount;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.previewCount)) {
      query["PreviewCount"] = request.previewCount;
    }

    if (!$dara.isNull(request.previewLimit)) {
      query["PreviewLimit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.reportCount)) {
      query["ReportCount"] = request.reportCount;
    }

    if (!$dara.isNull(request.saveCount)) {
      query["SaveCount"] = request.saveCount;
    }

    if (!$dara.isNull(request.saveLimit)) {
      query["SaveLimit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    if (!$dara.isNull(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      query["SharePwd"] = request.sharePwd;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.videoPreviewCount)) {
      query["VideoPreviewCount"] = request.videoPreviewCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdsFileShareLink",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdsFileShareLinkResponse({}));
  }

  /**
   * Modifies the link for file sharing.
   * 
   * @param request - ModifyCdsFileShareLinkRequest
   * @returns ModifyCdsFileShareLinkResponse
   */
  async modifyCdsFileShareLink(request: $_model.ModifyCdsFileShareLinkRequest): Promise<$_model.ModifyCdsFileShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdsFileShareLinkWithOptions(request, runtime);
  }

  /**
   * Modifies a center policy.
   * 
   * @param request - ModifyCenterPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCenterPolicyResponse
   */
  async modifyCenterPolicyWithOptions(request: $_model.ModifyCenterPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCenterPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.academicProxy)) {
      query["AcademicProxy"] = request.academicProxy;
    }

    if (!$dara.isNull(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!$dara.isNull(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!$dara.isNull(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!$dara.isNull(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.autoReconnect)) {
      query["AutoReconnect"] = request.autoReconnect;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clientControlMenu)) {
      query["ClientControlMenu"] = request.clientControlMenu;
    }

    if (!$dara.isNull(request.clientCreateSnapshot)) {
      query["ClientCreateSnapshot"] = request.clientCreateSnapshot;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.clipboardGraineds)) {
      query["ClipboardGraineds"] = request.clipboardGraineds;
    }

    if (!$dara.isNull(request.clipboardScope)) {
      query["ClipboardScope"] = request.clipboardScope;
    }

    if (!$dara.isNull(request.colorEnhancement)) {
      query["ColorEnhancement"] = request.colorEnhancement;
    }

    if (!$dara.isNull(request.cpdDriveClipboard)) {
      query["CpdDriveClipboard"] = request.cpdDriveClipboard;
    }

    if (!$dara.isNull(request.cpuDownGradeDuration)) {
      query["CpuDownGradeDuration"] = request.cpuDownGradeDuration;
    }

    if (!$dara.isNull(request.cpuOverload)) {
      query["CpuOverload"] = request.cpuOverload;
    }

    if (!$dara.isNull(request.cpuProcessors)) {
      query["CpuProcessors"] = request.cpuProcessors;
    }

    if (!$dara.isNull(request.cpuProtectedMode)) {
      query["CpuProtectedMode"] = request.cpuProtectedMode;
    }

    if (!$dara.isNull(request.cpuRateLimit)) {
      query["CpuRateLimit"] = request.cpuRateLimit;
    }

    if (!$dara.isNull(request.cpuSampleDuration)) {
      query["CpuSampleDuration"] = request.cpuSampleDuration;
    }

    if (!$dara.isNull(request.cpuSingleRateLimit)) {
      query["CpuSingleRateLimit"] = request.cpuSingleRateLimit;
    }

    if (!$dara.isNull(request.deviceConnectHint)) {
      query["DeviceConnectHint"] = request.deviceConnectHint;
    }

    if (!$dara.isNull(request.deviceRedirects)) {
      query["DeviceRedirects"] = request.deviceRedirects;
    }

    if (!$dara.isNull(request.deviceRules)) {
      query["DeviceRules"] = request.deviceRules;
    }

    if (!$dara.isNull(request.disconnectKeepSession)) {
      query["DisconnectKeepSession"] = request.disconnectKeepSession;
    }

    if (!$dara.isNull(request.disconnectKeepSessionTime)) {
      query["DisconnectKeepSessionTime"] = request.disconnectKeepSessionTime;
    }

    if (!$dara.isNull(request.diskOverload)) {
      query["DiskOverload"] = request.diskOverload;
    }

    if (!$dara.isNull(request.displayMode)) {
      query["DisplayMode"] = request.displayMode;
    }

    if (!$dara.isNull(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!$dara.isNull(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!$dara.isNull(request.enableSessionRateLimiting)) {
      query["EnableSessionRateLimiting"] = request.enableSessionRateLimiting;
    }

    if (!$dara.isNull(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!$dara.isNull(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!$dara.isNull(request.externalDrive)) {
      query["ExternalDrive"] = request.externalDrive;
    }

    if (!$dara.isNull(request.fileMigrate)) {
      query["FileMigrate"] = request.fileMigrate;
    }

    if (!$dara.isNull(request.fileTransferAddress)) {
      query["FileTransferAddress"] = request.fileTransferAddress;
    }

    if (!$dara.isNull(request.fileTransferSpeed)) {
      query["FileTransferSpeed"] = request.fileTransferSpeed;
    }

    if (!$dara.isNull(request.fileTransferSpeedLocation)) {
      query["FileTransferSpeedLocation"] = request.fileTransferSpeedLocation;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!$dara.isNull(request.internetPrinter)) {
      query["InternetPrinter"] = request.internetPrinter;
    }

    if (!$dara.isNull(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.maxReconnectTime)) {
      query["MaxReconnectTime"] = request.maxReconnectTime;
    }

    if (!$dara.isNull(request.memoryDownGradeDuration)) {
      query["MemoryDownGradeDuration"] = request.memoryDownGradeDuration;
    }

    if (!$dara.isNull(request.memoryOverload)) {
      query["MemoryOverload"] = request.memoryOverload;
    }

    if (!$dara.isNull(request.memoryProcessors)) {
      query["MemoryProcessors"] = request.memoryProcessors;
    }

    if (!$dara.isNull(request.memoryProtectedMode)) {
      query["MemoryProtectedMode"] = request.memoryProtectedMode;
    }

    if (!$dara.isNull(request.memoryRateLimit)) {
      query["MemoryRateLimit"] = request.memoryRateLimit;
    }

    if (!$dara.isNull(request.memorySampleDuration)) {
      query["MemorySampleDuration"] = request.memorySampleDuration;
    }

    if (!$dara.isNull(request.memorySingleRateLimit)) {
      query["MemorySingleRateLimit"] = request.memorySingleRateLimit;
    }

    if (!$dara.isNull(request.mobileRestart)) {
      query["MobileRestart"] = request.mobileRestart;
    }

    if (!$dara.isNull(request.mobileSafeMenu)) {
      query["MobileSafeMenu"] = request.mobileSafeMenu;
    }

    if (!$dara.isNull(request.mobileShutdown)) {
      query["MobileShutdown"] = request.mobileShutdown;
    }

    if (!$dara.isNull(request.mobileWuyingKeeper)) {
      query["MobileWuyingKeeper"] = request.mobileWuyingKeeper;
    }

    if (!$dara.isNull(request.mobileWyAssistant)) {
      query["MobileWyAssistant"] = request.mobileWyAssistant;
    }

    if (!$dara.isNull(request.modelLibrary)) {
      query["ModelLibrary"] = request.modelLibrary;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!$dara.isNull(request.netRedirectRule)) {
      query["NetRedirectRule"] = request.netRedirectRule;
    }

    if (!$dara.isNull(request.noOperationDisconnect)) {
      query["NoOperationDisconnect"] = request.noOperationDisconnect;
    }

    if (!$dara.isNull(request.noOperationDisconnectTime)) {
      query["NoOperationDisconnectTime"] = request.noOperationDisconnectTime;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.portProxy)) {
      query["PortProxy"] = request.portProxy;
    }

    if (!$dara.isNull(request.printerRedirect)) {
      query["PrinterRedirect"] = request.printerRedirect;
    }

    if (!$dara.isNull(request.qualityEnhancement)) {
      query["QualityEnhancement"] = request.qualityEnhancement;
    }

    if (!$dara.isNull(request.recordEventDuration)) {
      query["RecordEventDuration"] = request.recordEventDuration;
    }

    if (!$dara.isNull(request.recordEventFileExts)) {
      query["RecordEventFileExts"] = request.recordEventFileExts;
    }

    if (!$dara.isNull(request.recordEventFilePaths)) {
      query["RecordEventFilePaths"] = request.recordEventFilePaths;
    }

    if (!$dara.isNull(request.recordEventLevels)) {
      query["RecordEventLevels"] = request.recordEventLevels;
    }

    if (!$dara.isNull(request.recordEventRegisters)) {
      query["RecordEventRegisters"] = request.recordEventRegisters;
    }

    if (!$dara.isNull(request.recordEvents)) {
      query["RecordEvents"] = request.recordEvents;
    }

    if (!$dara.isNull(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!$dara.isNull(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!$dara.isNull(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!$dara.isNull(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!$dara.isNull(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!$dara.isNull(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!$dara.isNull(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!$dara.isNull(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!$dara.isNull(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!$dara.isNull(request.resetDesktop)) {
      query["ResetDesktop"] = request.resetDesktop;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      query["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionModel)) {
      query["ResolutionModel"] = request.resolutionModel;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      query["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.revokeAccessPolicyRule)) {
      query["RevokeAccessPolicyRule"] = request.revokeAccessPolicyRule;
    }

    if (!$dara.isNull(request.revokeSecurityPolicyRule)) {
      query["RevokeSecurityPolicyRule"] = request.revokeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.safeMenu)) {
      query["SafeMenu"] = request.safeMenu;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!$dara.isNull(request.screenDisplayMode)) {
      query["ScreenDisplayMode"] = request.screenDisplayMode;
    }

    if (!$dara.isNull(request.sessionMaxRateKbps)) {
      query["SessionMaxRateKbps"] = request.sessionMaxRateKbps;
    }

    if (!$dara.isNull(request.smoothEnhancement)) {
      query["SmoothEnhancement"] = request.smoothEnhancement;
    }

    if (!$dara.isNull(request.statusMonitor)) {
      query["StatusMonitor"] = request.statusMonitor;
    }

    if (!$dara.isNull(request.streamingMode)) {
      query["StreamingMode"] = request.streamingMode;
    }

    if (!$dara.isNull(request.targetFps)) {
      query["TargetFps"] = request.targetFps;
    }

    if (!$dara.isNull(request.taskbar)) {
      query["Taskbar"] = request.taskbar;
    }

    if (!$dara.isNull(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!$dara.isNull(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!$dara.isNull(request.useTime)) {
      query["UseTime"] = request.useTime;
    }

    if (!$dara.isNull(request.videoEncAvgKbps)) {
      query["VideoEncAvgKbps"] = request.videoEncAvgKbps;
    }

    if (!$dara.isNull(request.videoEncMaxQP)) {
      query["VideoEncMaxQP"] = request.videoEncMaxQP;
    }

    if (!$dara.isNull(request.videoEncMinQP)) {
      query["VideoEncMinQP"] = request.videoEncMinQP;
    }

    if (!$dara.isNull(request.videoEncPeakKbps)) {
      query["VideoEncPeakKbps"] = request.videoEncPeakKbps;
    }

    if (!$dara.isNull(request.videoEncPolicy)) {
      query["VideoEncPolicy"] = request.videoEncPolicy;
    }

    if (!$dara.isNull(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!$dara.isNull(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!$dara.isNull(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!$dara.isNull(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!$dara.isNull(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!$dara.isNull(request.watermarkColumnAmount)) {
      query["WatermarkColumnAmount"] = request.watermarkColumnAmount;
    }

    if (!$dara.isNull(request.watermarkCustomText)) {
      query["WatermarkCustomText"] = request.watermarkCustomText;
    }

    if (!$dara.isNull(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!$dara.isNull(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!$dara.isNull(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!$dara.isNull(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!$dara.isNull(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!$dara.isNull(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!$dara.isNull(request.watermarkShadow)) {
      query["WatermarkShadow"] = request.watermarkShadow;
    }

    if (!$dara.isNull(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!$dara.isNull(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    if (!$dara.isNull(request.wuyingKeeper)) {
      query["WuyingKeeper"] = request.wuyingKeeper;
    }

    if (!$dara.isNull(request.wyAssistant)) {
      query["WyAssistant"] = request.wyAssistant;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCenterPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCenterPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCenterPolicyResponse({}));
  }

  /**
   * Modifies a center policy.
   * 
   * @param request - ModifyCenterPolicyRequest
   * @returns ModifyCenterPolicyResponse
   */
  async modifyCenterPolicy(request: $_model.ModifyCenterPolicyRequest): Promise<$_model.ModifyCenterPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCenterPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies team spaces.
   * 
   * @param request - ModifyCloudDriveGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudDriveGroupsResponse
   */
  async modifyCloudDriveGroupsWithOptions(request: $_model.ModifyCloudDriveGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudDriveGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.totalSize)) {
      query["TotalSize"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudDriveGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudDriveGroupsResponse({}));
  }

  /**
   * Modifies team spaces.
   * 
   * @param request - ModifyCloudDriveGroupsRequest
   * @returns ModifyCloudDriveGroupsResponse
   */
  async modifyCloudDriveGroups(request: $_model.ModifyCloudDriveGroupsRequest): Promise<$_model.ModifyCloudDriveGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudDriveGroupsWithOptions(request, runtime);
  }

  /**
   * Modifies the user permissions on Cloud Drive Service, and configures users who have the download permissions and upload and download permissions. By default, the users that are not configured the preceding permissions only have the upload permissions.
   * 
   * @param request - ModifyCloudDrivePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudDrivePermissionResponse
   */
  async modifyCloudDrivePermissionWithOptions(request: $_model.ModifyCloudDrivePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudDrivePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.downloadEndUserIds)) {
      query["DownloadEndUserIds"] = request.downloadEndUserIds;
    }

    if (!$dara.isNull(request.downloadUploadEndUserIds)) {
      query["DownloadUploadEndUserIds"] = request.downloadUploadEndUserIds;
    }

    if (!$dara.isNull(request.noDownloadNoUploadEndUserIds)) {
      query["NoDownloadNoUploadEndUserIds"] = request.noDownloadNoUploadEndUserIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudDrivePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudDrivePermissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudDrivePermissionResponse({}));
  }

  /**
   * Modifies the user permissions on Cloud Drive Service, and configures users who have the download permissions and upload and download permissions. By default, the users that are not configured the preceding permissions only have the upload permissions.
   * 
   * @param request - ModifyCloudDrivePermissionRequest
   * @returns ModifyCloudDrivePermissionResponse
   */
  async modifyCloudDrivePermission(request: $_model.ModifyCloudDrivePermissionRequest): Promise<$_model.ModifyCloudDrivePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudDrivePermissionWithOptions(request, runtime);
  }

  /**
   * 修改无影网盘终端用户的属性
   * 
   * @param request - ModifyCloudDriveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudDriveUsersResponse
   */
  async modifyCloudDriveUsersWithOptions(request: $_model.ModifyCloudDriveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudDriveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudDriveUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudDriveUsersResponse({}));
  }

  /**
   * 修改无影网盘终端用户的属性
   * 
   * @param request - ModifyCloudDriveUsersRequest
   * @returns ModifyCloudDriveUsersResponse
   */
  async modifyCloudDriveUsers(request: $_model.ModifyCloudDriveUsersRequest): Promise<$_model.ModifyCloudDriveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudDriveUsersWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information of a configuration group.
   * 
   * @param request - ModifyConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConfigGroupResponse
   */
  async modifyConfigGroupWithOptions(request: $_model.ModifyConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConfigGroupResponse({}));
  }

  /**
   * Modifies the basic information of a configuration group.
   * 
   * @param request - ModifyConfigGroupRequest
   * @returns ModifyConfigGroupResponse
   */
  async modifyConfigGroup(request: $_model.ModifyConfigGroupRequest): Promise<$_model.ModifyConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConfigGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the layouts of cloud computer list headers, such as the required fields and the display and hide settings.
   * 
   * @param request - ModifyCustomizedListHeadersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomizedListHeadersResponse
   */
  async modifyCustomizedListHeadersWithOptions(request: $_model.ModifyCustomizedListHeadersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomizedListHeadersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.headers)) {
      query["Headers"] = request.headers;
    }

    if (!$dara.isNull(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomizedListHeaders",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomizedListHeadersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomizedListHeadersResponse({}));
  }

  /**
   * Modifies the layouts of cloud computer list headers, such as the required fields and the display and hide settings.
   * 
   * @param request - ModifyCustomizedListHeadersRequest
   * @returns ModifyCustomizedListHeadersResponse
   */
  async modifyCustomizedListHeaders(request: $_model.ModifyCustomizedListHeadersRequest): Promise<$_model.ModifyCustomizedListHeadersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomizedListHeadersWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of cloud computers to subscription or pay-as-you-go.
   * 
   * @remarks
   *   Before you call this operation, make sure that you fully understand the billing methods of cloud computers. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * *   Before you call this operation, make sure that the cloud computers whose billing method you want to change are in the Running or Stopped state and you have no overdue payments in your Alibaba Cloud account.
   * *   After the order payment is completed, the system starts to change the billing method of the cloud computers. During the change, you cannot perform operations, such as starting or stopping the cloud computers, and changing configurations of the cloud computers.
   * 
   * @param request - ModifyDesktopChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopChargeTypeResponse
   */
  async modifyDesktopChargeTypeWithOptions(request: $_model.ModifyDesktopChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.useDuration)) {
      query["UseDuration"] = request.useDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopChargeType",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of cloud computers to subscription or pay-as-you-go.
   * 
   * @remarks
   *   Before you call this operation, make sure that you fully understand the billing methods of cloud computers. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188395.html).
   * *   Before you call this operation, make sure that the cloud computers whose billing method you want to change are in the Running or Stopped state and you have no overdue payments in your Alibaba Cloud account.
   * *   After the order payment is completed, the system starts to change the billing method of the cloud computers. During the change, you cannot perform operations, such as starting or stopping the cloud computers, and changing configurations of the cloud computers.
   * 
   * @param request - ModifyDesktopChargeTypeRequest
   * @returns ModifyDesktopChargeTypeResponse
   */
  async modifyDesktopChargeType(request: $_model.ModifyDesktopChargeTypeRequest): Promise<$_model.ModifyDesktopChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies a cloud computer share.
   * 
   * @remarks
   * Once a cloud computer share is created, the system automatically provisions cloud computers according to the auto-scaling policy and user connections, all based on the same template and security policy. You can adjust the cloud computer share\\"s configurations, including the share name, template, and policy, for different business scenarios.
   * 
   * @param request - ModifyDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopGroupResponse
   */
  async modifyDesktopGroupWithOptions(request: $_model.ModifyDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!$dara.isNull(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!$dara.isNull(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!$dara.isNull(request.buyDesktopsCount)) {
      query["BuyDesktopsCount"] = request.buyDesktopsCount;
    }

    if (!$dara.isNull(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.connectDuration)) {
      query["ConnectDuration"] = request.connectDuration;
    }

    if (!$dara.isNull(request.deleteDuration)) {
      query["DeleteDuration"] = request.deleteDuration;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!$dara.isNull(request.disableSessionConfig)) {
      query["DisableSessionConfig"] = request.disableSessionConfig;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!$dara.isNull(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!$dara.isNull(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!$dara.isNull(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!$dara.isNull(request.ownBundleId)) {
      query["OwnBundleId"] = request.ownBundleId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.profileFollowSwitch)) {
      query["ProfileFollowSwitch"] = request.profileFollowSwitch;
    }

    if (!$dara.isNull(request.ratioThreshold)) {
      query["RatioThreshold"] = request.ratioThreshold;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!$dara.isNull(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    if (!$dara.isNull(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopGroupResponse({}));
  }

  /**
   * Modifies a cloud computer share.
   * 
   * @remarks
   * Once a cloud computer share is created, the system automatically provisions cloud computers according to the auto-scaling policy and user connections, all based on the same template and security policy. You can adjust the cloud computer share\\"s configurations, including the share name, template, and policy, for different business scenarios.
   * 
   * @param request - ModifyDesktopGroupRequest
   * @returns ModifyDesktopGroupResponse
   */
  async modifyDesktopGroup(request: $_model.ModifyDesktopGroupRequest): Promise<$_model.ModifyDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the hostname of a Windows cloud computer in the Active Directory (AD) office network.
   * 
   * @remarks
   * The Windows cloud computer whose hostname you want to modify must be in an AD office network. After the hostname is modified, the cloud computer is re-created.
   * 
   * @param request - ModifyDesktopHostNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopHostNameResponse
   */
  async modifyDesktopHostNameWithOptions(request: $_model.ModifyDesktopHostNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopHostNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.newHostName)) {
      query["NewHostName"] = request.newHostName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopHostName",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopHostNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopHostNameResponse({}));
  }

  /**
   * Modifies the hostname of a Windows cloud computer in the Active Directory (AD) office network.
   * 
   * @remarks
   * The Windows cloud computer whose hostname you want to modify must be in an AD office network. After the hostname is modified, the cloud computer is re-created.
   * 
   * @param request - ModifyDesktopHostNameRequest
   * @returns ModifyDesktopHostNameResponse
   */
  async modifyDesktopHostName(request: $_model.ModifyDesktopHostNameRequest): Promise<$_model.ModifyDesktopHostNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopHostNameWithOptions(request, runtime);
  }

  /**
   * Changes the name of a cloud computer to a new name.
   * 
   * @param request - ModifyDesktopNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopNameResponse
   */
  async modifyDesktopNameWithOptions(request: $_model.ModifyDesktopNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.newDesktopName)) {
      query["NewDesktopName"] = request.newDesktopName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopName",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopNameResponse({}));
  }

  /**
   * Changes the name of a cloud computer to a new name.
   * 
   * @param request - ModifyDesktopNameRequest
   * @returns ModifyDesktopNameResponse
   */
  async modifyDesktopName(request: $_model.ModifyDesktopNameRequest): Promise<$_model.ModifyDesktopNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopNameWithOptions(request, runtime);
  }

  /**
   * 修改桌面超卖组
   * 
   * @param request - ModifyDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopOversoldGroupResponse
   */
  async modifyDesktopOversoldGroupWithOptions(request: $_model.ModifyDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!$dara.isNull(request.oversoldWarn)) {
      query["OversoldWarn"] = request.oversoldWarn;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopOversoldGroupResponse({}));
  }

  /**
   * 修改桌面超卖组
   * 
   * @param request - ModifyDesktopOversoldGroupRequest
   * @returns ModifyDesktopOversoldGroupResponse
   */
  async modifyDesktopOversoldGroup(request: $_model.ModifyDesktopOversoldGroupRequest): Promise<$_model.ModifyDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * 修改桌面超卖组售卖数据
   * 
   * @param request - ModifyDesktopOversoldGroupSaleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopOversoldGroupSaleResponse
   */
  async modifyDesktopOversoldGroupSaleWithOptions(request: $_model.ModifyDesktopOversoldGroupSaleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopOversoldGroupSaleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopOversoldGroupSale",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopOversoldGroupSaleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopOversoldGroupSaleResponse({}));
  }

  /**
   * 修改桌面超卖组售卖数据
   * 
   * @param request - ModifyDesktopOversoldGroupSaleRequest
   * @returns ModifyDesktopOversoldGroupSaleResponse
   */
  async modifyDesktopOversoldGroupSale(request: $_model.ModifyDesktopOversoldGroupSaleRequest): Promise<$_model.ModifyDesktopOversoldGroupSaleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopOversoldGroupSaleWithOptions(request, runtime);
  }

  /**
   * 修改桌面超卖用户组
   * 
   * @param request - ModifyDesktopOversoldUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopOversoldUserGroupResponse
   */
  async modifyDesktopOversoldUserGroupWithOptions(request: $_model.ModifyDesktopOversoldUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopOversoldUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopOversoldUserGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopOversoldUserGroupResponse({}));
  }

  /**
   * 修改桌面超卖用户组
   * 
   * @param request - ModifyDesktopOversoldUserGroupRequest
   * @returns ModifyDesktopOversoldUserGroupResponse
   */
  async modifyDesktopOversoldUserGroup(request: $_model.ModifyDesktopOversoldUserGroupRequest): Promise<$_model.ModifyDesktopOversoldUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
   * Changes the instance type of a cloud computer and scales up the disks of the cloud computer.
   * 
   * @remarks
   * Changing the configurations of a cloud computer includes changing the instance type of the cloud computer and scaling up the disks of the cloud computer.
   * *   Before you change the configurations of a cloud computer, you must understand the instance types and disk sizes supported by cloud computers. For more information, see [Cloud computer types](https://help.aliyun.com/document_detail/188609.html). You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the instance types supported by cloud computers.
   * *   You must change at least one of the following configurations: instance type, system disk size, and data disk size of the cloud computer. You must specify at least one of the following parameters: `DesktopType`, `RootDiskSizeGib`, and `UserDiskSizeGib`. Take note of the following items:
   *     *   The instance type of a cloud computer includes the configurations of vCPUs, memory, and GPUs. You can only change an instance type to another. You cannot change only one of the configurations.
   *     *   You cannot change a cloud computer between the General Office type and the non-General Office type. You cannot yet change a cloud computer between the Graphics type and the non-Graphics type.
   *     *   The system disk and data disks of a cloud computer can only be scaled up and cannot be scaled down.
   *     *   If the billing method of the cloud computer is subscription, the system calculates the price difference based on the configuration difference between the original cloud computer and the new cloud computer. You must make up for the price difference or receive a refund for the price difference.
   *     *   We recommend that you do not change the configurations of a cloud computer twice within 5 minutes.
   *     *   When you change the configurations of a cloud computer, the cloud computer must be in the Stopped state.
   * *   After you change the configurations of a cloud computer, the personal data on the cloud computer is not affected.
   * 
   * @param request - ModifyDesktopSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopSpecResponse
   */
  async modifyDesktopSpecWithOptions(request: $_model.ModifyDesktopSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceSpecs)) {
      query["ResourceSpecs"] = request.resourceSpecs;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!$dara.isNull(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopSpec",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopSpecResponse({}));
  }

  /**
   * Changes the instance type of a cloud computer and scales up the disks of the cloud computer.
   * 
   * @remarks
   * Changing the configurations of a cloud computer includes changing the instance type of the cloud computer and scaling up the disks of the cloud computer.
   * *   Before you change the configurations of a cloud computer, you must understand the instance types and disk sizes supported by cloud computers. For more information, see [Cloud computer types](https://help.aliyun.com/document_detail/188609.html). You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the instance types supported by cloud computers.
   * *   You must change at least one of the following configurations: instance type, system disk size, and data disk size of the cloud computer. You must specify at least one of the following parameters: `DesktopType`, `RootDiskSizeGib`, and `UserDiskSizeGib`. Take note of the following items:
   *     *   The instance type of a cloud computer includes the configurations of vCPUs, memory, and GPUs. You can only change an instance type to another. You cannot change only one of the configurations.
   *     *   You cannot change a cloud computer between the General Office type and the non-General Office type. You cannot yet change a cloud computer between the Graphics type and the non-Graphics type.
   *     *   The system disk and data disks of a cloud computer can only be scaled up and cannot be scaled down.
   *     *   If the billing method of the cloud computer is subscription, the system calculates the price difference based on the configuration difference between the original cloud computer and the new cloud computer. You must make up for the price difference or receive a refund for the price difference.
   *     *   We recommend that you do not change the configurations of a cloud computer twice within 5 minutes.
   *     *   When you change the configurations of a cloud computer, the cloud computer must be in the Stopped state.
   * *   After you change the configurations of a cloud computer, the personal data on the cloud computer is not affected.
   * 
   * @param request - ModifyDesktopSpecRequest
   * @returns ModifyDesktopSpecResponse
   */
  async modifyDesktopSpec(request: $_model.ModifyDesktopSpecRequest): Promise<$_model.ModifyDesktopSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopSpecWithOptions(request, runtime);
  }

  /**
   * Creates or modifies scheduled tasks on cloud computers, such as starting, stopping, restarting, and resetting cloud computers on schedule.
   * 
   * @param request - ModifyDesktopTimerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopTimerResponse
   */
  async modifyDesktopTimerWithOptions(request: $_model.ModifyDesktopTimerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopTimerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopTimers)) {
      query["DesktopTimers"] = request.desktopTimers;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.useDesktopTimers)) {
      query["UseDesktopTimers"] = request.useDesktopTimers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopTimer",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopTimerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopTimerResponse({}));
  }

  /**
   * Creates or modifies scheduled tasks on cloud computers, such as starting, stopping, restarting, and resetting cloud computers on schedule.
   * 
   * @param request - ModifyDesktopTimerRequest
   * @returns ModifyDesktopTimerResponse
   */
  async modifyDesktopTimer(request: $_model.ModifyDesktopTimerRequest): Promise<$_model.ModifyDesktopTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopTimerWithOptions(request, runtime);
  }

  /**
   * Changes an existing cloud computer policy for cloud computers.
   * 
   * @remarks
   * The cloud computers for which you want to change their policies must be in the Running state.
   * 
   * @param request - ModifyDesktopsPolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesktopsPolicyGroupResponse
   */
  async modifyDesktopsPolicyGroupWithOptions(request: $_model.ModifyDesktopsPolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesktopsPolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesktopsPolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesktopsPolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesktopsPolicyGroupResponse({}));
  }

  /**
   * Changes an existing cloud computer policy for cloud computers.
   * 
   * @remarks
   * The cloud computers for which you want to change their policies must be in the Running state.
   * 
   * @param request - ModifyDesktopsPolicyGroupRequest
   * @returns ModifyDesktopsPolicyGroupResponse
   */
  async modifyDesktopsPolicyGroup(request: $_model.ModifyDesktopsPolicyGroupRequest): Promise<$_model.ModifyDesktopsPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesktopsPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Changes the performance level (PL) of a system disk or data disk.
   * 
   * @remarks
   * When creating a cloud computer in Elastic Desktop Service (EDS) Enterprise, you can use a template to define specifications that align with your business needs. By default, Enterprise Graphics or High Frequency cloud computers utilize Enterprise SSDs (ESSDs). You can customize the disk capacity and performance level (PL) of these ESSDs, and adjust the PL for both system and data disks as needed.
   * >  Only Enterprise Graphics or High Frequency cloud computers support disk PL adjustments.
   * 
   * @param request - ModifyDiskSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskSpecResponse
   */
  async modifyDiskSpecWithOptions(request: $_model.ModifyDiskSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskSpec",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskSpecResponse({}));
  }

  /**
   * Changes the performance level (PL) of a system disk or data disk.
   * 
   * @remarks
   * When creating a cloud computer in Elastic Desktop Service (EDS) Enterprise, you can use a template to define specifications that align with your business needs. By default, Enterprise Graphics or High Frequency cloud computers utilize Enterprise SSDs (ESSDs). You can customize the disk capacity and performance level (PL) of these ESSDs, and adjust the PL for both system and data disks as needed.
   * >  Only Enterprise Graphics or High Frequency cloud computers support disk PL adjustments.
   * 
   * @param request - ModifyDiskSpecRequest
   * @returns ModifyDiskSpecResponse
   */
  async modifyDiskSpec(request: $_model.ModifyDiskSpecRequest): Promise<$_model.ModifyDiskSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskSpecWithOptions(request, runtime);
  }

  /**
   * Assigns a cloud computer to end users and removes all original end users of the cloud computer.
   * 
   * @remarks
   *   The cloud computer must be in the Running state.
   * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](https://help.aliyun.com/document_detail/436815.html) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
   * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
   * 
   * @param request - ModifyEntitlementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEntitlementResponse
   */
  async modifyEntitlementWithOptions(request: $_model.ModifyEntitlementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEntitlementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEntitlement",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEntitlementResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEntitlementResponse({}));
  }

  /**
   * Assigns a cloud computer to end users and removes all original end users of the cloud computer.
   * 
   * @remarks
   *   The cloud computer must be in the Running state.
   * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](https://help.aliyun.com/document_detail/436815.html) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
   * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
   * 
   * @param request - ModifyEntitlementRequest
   * @returns ModifyEntitlementResponse
   */
  async modifyEntitlement(request: $_model.ModifyEntitlementRequest): Promise<$_model.ModifyEntitlementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEntitlementWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an image, including the name and description of the image.
   * 
   * @remarks
   * You can call this operation to modify the attributes of only custom images that are in the Available state.
   * 
   * @param request - ModifyImageAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImageAttributeResponse
   */
  async modifyImageAttributeWithOptions(request: $_model.ModifyImageAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImageAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImageAttribute",
      version: "2020-09-30",
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
   * Modifies the attributes of an image, including the name and description of the image.
   * 
   * @remarks
   * You can call this operation to modify the attributes of only custom images that are in the Available state.
   * 
   * @param request - ModifyImageAttributeRequest
   * @returns ModifyImageAttributeResponse
   */
  async modifyImageAttribute(request: $_model.ModifyImageAttributeRequest): Promise<$_model.ModifyImageAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  /**
   * Shares an image with other Alibaba Cloud accounts, or unshares an image from the recipient Alibaba Cloud accounts.
   * 
   * @remarks
   * ### [](#)Security of shared images
   * Elastic Desktop Service cannot guarantee the integrity and security of shared images. When you use a shared image, you must make sure that the image comes from a trusted sharer or account, and you are legally responsible for using the shared image.
   * ### [](#)Quota and billing
   * *   A shared image does not count against the image quotas of principals to which the image is shared.
   * *   After a principal uses a shared image to create a cloud computer, the sharer is not charged for the shared image.
   * *   You are not charged for shared images.
   * ### [](#)Supported sharing behaviors
   * *   You can share custom images with other Alibaba Cloud accounts.
   * *   You can share custom images between accounts in the China site (aliyun.com) and the international site (alibabacloud.com).
   * ### [](#)Unsupported sharing behaviors
   * *   You cannot share images that are shared by other Alibaba Cloud accounts.
   * *   You cannot share encrypted images.
   * *   You cannot share images across regions. If you want to share an image across regions, you must copy the image to the destination region and then share the image. For more information, see [CopyImage](https://help.aliyun.com/document_detail/436978.html).
   * 
   * @param request - ModifyImagePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImagePermissionResponse
   */
  async modifyImagePermissionWithOptions(request: $_model.ModifyImagePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImagePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addAccount)) {
      query["AddAccount"] = request.addAccount;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeAccount)) {
      query["RemoveAccount"] = request.removeAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImagePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyImagePermissionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyImagePermissionResponse({}));
  }

  /**
   * Shares an image with other Alibaba Cloud accounts, or unshares an image from the recipient Alibaba Cloud accounts.
   * 
   * @remarks
   * ### [](#)Security of shared images
   * Elastic Desktop Service cannot guarantee the integrity and security of shared images. When you use a shared image, you must make sure that the image comes from a trusted sharer or account, and you are legally responsible for using the shared image.
   * ### [](#)Quota and billing
   * *   A shared image does not count against the image quotas of principals to which the image is shared.
   * *   After a principal uses a shared image to create a cloud computer, the sharer is not charged for the shared image.
   * *   You are not charged for shared images.
   * ### [](#)Supported sharing behaviors
   * *   You can share custom images with other Alibaba Cloud accounts.
   * *   You can share custom images between accounts in the China site (aliyun.com) and the international site (alibabacloud.com).
   * ### [](#)Unsupported sharing behaviors
   * *   You cannot share images that are shared by other Alibaba Cloud accounts.
   * *   You cannot share encrypted images.
   * *   You cannot share images across regions. If you want to share an image across regions, you must copy the image to the destination region and then share the image. For more information, see [CopyImage](https://help.aliyun.com/document_detail/436978.html).
   * 
   * @param request - ModifyImagePermissionRequest
   * @returns ModifyImagePermissionResponse
   */
  async modifyImagePermission(request: $_model.ModifyImagePermissionRequest): Promise<$_model.ModifyImagePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImagePermissionWithOptions(request, runtime);
  }

  /**
   * Modifies the mount target of a File Storage NAS (NAS) file system.
   * 
   * @remarks
   * When you create a NAS file system, a mount target is automatically generated. By default, the mount target does not need to be changed. If the mount target is deleted by misoperation, you must specify a new mount target for the NAS file system in the workspace. You can call the [CreateMountTarget](https://help.aliyun.com/document_detail/62621.html) operation to create a mount target.
   * 
   * @param request - ModifyNASDefaultMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNASDefaultMountTargetResponse
   */
  async modifyNASDefaultMountTargetWithOptions(request: $_model.ModifyNASDefaultMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNASDefaultMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNASDefaultMountTarget",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNASDefaultMountTargetResponse({}));
  }

  /**
   * Modifies the mount target of a File Storage NAS (NAS) file system.
   * 
   * @remarks
   * When you create a NAS file system, a mount target is automatically generated. By default, the mount target does not need to be changed. If the mount target is deleted by misoperation, you must specify a new mount target for the NAS file system in the workspace. You can call the [CreateMountTarget](https://help.aliyun.com/document_detail/62621.html) operation to create a mount target.
   * 
   * @param request - ModifyNASDefaultMountTargetRequest
   * @returns ModifyNASDefaultMountTargetResponse
   */
  async modifyNASDefaultMountTarget(request: $_model.ModifyNASDefaultMountTargetRequest): Promise<$_model.ModifyNASDefaultMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNASDefaultMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies the bandwidth of a premium bandwidth plan.
   * 
   * @param request - ModifyNetworkPackageBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkPackageBandwidthResponse
   */
  async modifyNetworkPackageBandwidthWithOptions(request: $_model.ModifyNetworkPackageBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkPackageBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkPackageBandwidth",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkPackageBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkPackageBandwidthResponse({}));
  }

  /**
   * Modifies the bandwidth of a premium bandwidth plan.
   * 
   * @param request - ModifyNetworkPackageBandwidthRequest
   * @returns ModifyNetworkPackageBandwidthResponse
   */
  async modifyNetworkPackageBandwidth(request: $_model.ModifyNetworkPackageBandwidthRequest): Promise<$_model.ModifyNetworkPackageBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkPackageBandwidthWithOptions(request, runtime);
  }

  /**
   * Restores or disables a premium bandwidth plan.
   * 
   * @remarks
   * If you want to temporarily disable the Internet access of your cloud computer after the Internet access is enabled for your cloud computer, you can disable the premium bandwidth plan and restore it as needed.
   * 
   * @param request - ModifyNetworkPackageEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkPackageEnabledResponse
   */
  async modifyNetworkPackageEnabledWithOptions(request: $_model.ModifyNetworkPackageEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkPackageEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkPackageEnabled",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkPackageEnabledResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkPackageEnabledResponse({}));
  }

  /**
   * Restores or disables a premium bandwidth plan.
   * 
   * @remarks
   * If you want to temporarily disable the Internet access of your cloud computer after the Internet access is enabled for your cloud computer, you can disable the premium bandwidth plan and restore it as needed.
   * 
   * @param request - ModifyNetworkPackageEnabledRequest
   * @returns ModifyNetworkPackageEnabledResponse
   */
  async modifyNetworkPackageEnabled(request: $_model.ModifyNetworkPackageEnabledRequest): Promise<$_model.ModifyNetworkPackageEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkPackageEnabledWithOptions(request, runtime);
  }

  /**
   * Modifies the basic properties of an office network, including the name and local administrator permission settings.
   * 
   * @param request - ModifyOfficeSiteAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfficeSiteAttributeResponse
   */
  async modifyOfficeSiteAttributeWithOptions(request: $_model.ModifyOfficeSiteAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfficeSiteAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorityHost)) {
      query["AuthorityHost"] = request.authorityHost;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["ClientSecret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!$dara.isNull(request.needVerifyLoginRisk)) {
      query["NeedVerifyLoginRisk"] = request.needVerifyLoginRisk;
    }

    if (!$dara.isNull(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfficeSiteAttribute",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfficeSiteAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfficeSiteAttributeResponse({}));
  }

  /**
   * Modifies the basic properties of an office network, including the name and local administrator permission settings.
   * 
   * @param request - ModifyOfficeSiteAttributeRequest
   * @returns ModifyOfficeSiteAttributeResponse
   */
  async modifyOfficeSiteAttribute(request: $_model.ModifyOfficeSiteAttributeRequest): Promise<$_model.ModifyOfficeSiteAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOfficeSiteAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables the communication between cloud computers in an office network (formerly workspace). If you enable the communication between cloud computers in an office network, the cloud computers can access each other.
   * 
   * @param request - ModifyOfficeSiteCrossDesktopAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfficeSiteCrossDesktopAccessResponse
   */
  async modifyOfficeSiteCrossDesktopAccessWithOptions(request: $_model.ModifyOfficeSiteCrossDesktopAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfficeSiteCrossDesktopAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableCrossDesktopAccess)) {
      query["EnableCrossDesktopAccess"] = request.enableCrossDesktopAccess;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfficeSiteCrossDesktopAccess",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfficeSiteCrossDesktopAccessResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfficeSiteCrossDesktopAccessResponse({}));
  }

  /**
   * Enables or disables the communication between cloud computers in an office network (formerly workspace). If you enable the communication between cloud computers in an office network, the cloud computers can access each other.
   * 
   * @param request - ModifyOfficeSiteCrossDesktopAccessRequest
   * @returns ModifyOfficeSiteCrossDesktopAccessResponse
   */
  async modifyOfficeSiteCrossDesktopAccess(request: $_model.ModifyOfficeSiteCrossDesktopAccessRequest): Promise<$_model.ModifyOfficeSiteCrossDesktopAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOfficeSiteCrossDesktopAccessWithOptions(request, runtime);
  }

  /**
   * Modifies the DNS information of an office network.
   * 
   * @param request - ModifyOfficeSiteDnsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfficeSiteDnsInfoResponse
   */
  async modifyOfficeSiteDnsInfoWithOptions(request: $_model.ModifyOfficeSiteDnsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfficeSiteDnsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfficeSiteDnsInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfficeSiteDnsInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfficeSiteDnsInfoResponse({}));
  }

  /**
   * Modifies the DNS information of an office network.
   * 
   * @param request - ModifyOfficeSiteDnsInfoRequest
   * @returns ModifyOfficeSiteDnsInfoResponse
   */
  async modifyOfficeSiteDnsInfo(request: $_model.ModifyOfficeSiteDnsInfoRequest): Promise<$_model.ModifyOfficeSiteDnsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOfficeSiteDnsInfoWithOptions(request, runtime);
  }

  /**
   * Enables or disables multi-factor authentication (MFA) for an enterprise Active Directory (AD) office network (formerly workspace).
   * 
   * @param request - ModifyOfficeSiteMfaEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfficeSiteMfaEnabledResponse
   */
  async modifyOfficeSiteMfaEnabledWithOptions(request: $_model.ModifyOfficeSiteMfaEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfficeSiteMfaEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfficeSiteMfaEnabled",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfficeSiteMfaEnabledResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfficeSiteMfaEnabledResponse({}));
  }

  /**
   * Enables or disables multi-factor authentication (MFA) for an enterprise Active Directory (AD) office network (formerly workspace).
   * 
   * @param request - ModifyOfficeSiteMfaEnabledRequest
   * @returns ModifyOfficeSiteMfaEnabledResponse
   */
  async modifyOfficeSiteMfaEnabled(request: $_model.ModifyOfficeSiteMfaEnabledRequest): Promise<$_model.ModifyOfficeSiteMfaEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOfficeSiteMfaEnabledWithOptions(request, runtime);
  }

  /**
   * Modifies the cloud computer policy.
   * 
   * @param request - ModifyPolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroupWithOptions(request: $_model.ModifyPolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!$dara.isNull(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!$dara.isNull(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!$dara.isNull(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.deviceRedirects)) {
      query["DeviceRedirects"] = request.deviceRedirects;
    }

    if (!$dara.isNull(request.deviceRules)) {
      query["DeviceRules"] = request.deviceRules;
    }

    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!$dara.isNull(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!$dara.isNull(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!$dara.isNull(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!$dara.isNull(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.maxReconnectTime)) {
      query["MaxReconnectTime"] = request.maxReconnectTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!$dara.isNull(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!$dara.isNull(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!$dara.isNull(request.recordContent)) {
      query["RecordContent"] = request.recordContent;
    }

    if (!$dara.isNull(request.recordContentExpires)) {
      query["RecordContentExpires"] = request.recordContentExpires;
    }

    if (!$dara.isNull(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!$dara.isNull(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!$dara.isNull(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!$dara.isNull(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!$dara.isNull(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!$dara.isNull(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!$dara.isNull(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!$dara.isNull(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!$dara.isNull(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!$dara.isNull(request.revokeAccessPolicyRule)) {
      query["RevokeAccessPolicyRule"] = request.revokeAccessPolicyRule;
    }

    if (!$dara.isNull(request.revokeSecurityPolicyRule)) {
      query["RevokeSecurityPolicyRule"] = request.revokeSecurityPolicyRule;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!$dara.isNull(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!$dara.isNull(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!$dara.isNull(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!$dara.isNull(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!$dara.isNull(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!$dara.isNull(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!$dara.isNull(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!$dara.isNull(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!$dara.isNull(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!$dara.isNull(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!$dara.isNull(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!$dara.isNull(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!$dara.isNull(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!$dara.isNull(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!$dara.isNull(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!$dara.isNull(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    if (!$dara.isNull(request.wyAssistant)) {
      query["WyAssistant"] = request.wyAssistant;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyGroupResponse({}));
  }

  /**
   * Modifies the cloud computer policy.
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: $_model.ModifyPolicyGroupRequest): Promise<$_model.ModifyPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyResourceCenterPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceCenterPolicyResponse
   */
  async modifyResourceCenterPolicyWithOptions(request: $_model.ModifyResourceCenterPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceCenterPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.policyGroupType)) {
      query["PolicyGroupType"] = request.policyGroupType;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResourceCenterPolicy",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResourceCenterPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResourceCenterPolicyResponse({}));
  }

  /**
   * @param request - ModifyResourceCenterPolicyRequest
   * @returns ModifyResourceCenterPolicyResponse
   */
  async modifyResourceCenterPolicy(request: $_model.ModifyResourceCenterPolicyRequest): Promise<$_model.ModifyResourceCenterPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceCenterPolicyWithOptions(request, runtime);
  }

  /**
   * 修改办公网络维度安全组策略
   * 
   * @param request - ModifySecurityGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupAttributeResponse
   */
  async modifySecurityGroupAttributeWithOptions(request: $_model.ModifySecurityGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizeEgress)) {
      query["AuthorizeEgress"] = request.authorizeEgress;
    }

    if (!$dara.isNull(request.authorizeIngress)) {
      query["AuthorizeIngress"] = request.authorizeIngress;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.revokeEgress)) {
      query["RevokeEgress"] = request.revokeEgress;
    }

    if (!$dara.isNull(request.revokeIngress)) {
      query["RevokeIngress"] = request.revokeIngress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityGroupAttribute",
      version: "2020-09-30",
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
   * 修改办公网络维度安全组策略
   * 
   * @param request - ModifySecurityGroupAttributeRequest
   * @returns ModifySecurityGroupAttributeResponse
   */
  async modifySecurityGroupAttribute(request: $_model.ModifySecurityGroupAttributeRequest): Promise<$_model.ModifySecurityGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a custom cloud computer template.
   * 
   * @remarks
   * *
   * **Warning** This operation employs the full parameter update logic to maintain compatibility between the no-configuration logic and the default update logic. In other words, any unspecified parameters are treated as empty.
   * 
   * @param request - ModifyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateResponse
   */
  async modifyTemplateWithOptions(request: $_model.ModifyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataDiskList)) {
      bodyFlat["DataDiskList"] = request.dataDiskList;
    }

    if (!$dara.isNull(request.defaultLanguage)) {
      body["DefaultLanguage"] = request.defaultLanguage;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      body["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.postPaidAfterUsedUp)) {
      body["PostPaidAfterUsedUp"] = request.postPaidAfterUsedUp;
    }

    if (!$dara.isNull(request.regionConfigList)) {
      bodyFlat["RegionConfigList"] = request.regionConfigList;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTagList)) {
      bodyFlat["ResourceTagList"] = request.resourceTagList;
    }

    if (!$dara.isNull(request.siteConfigList)) {
      bodyFlat["SiteConfigList"] = request.siteConfigList;
    }

    if (!$dara.isNull(request.systemDiskPerformanceLevel)) {
      body["SystemDiskPerformanceLevel"] = request.systemDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.timerGroupId)) {
      body["TimerGroupId"] = request.timerGroupId;
    }

    if (!$dara.isNull(request.userDuration)) {
      body["UserDuration"] = request.userDuration;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplate",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTemplateResponse({}));
  }

  /**
   * Modifies a custom cloud computer template.
   * 
   * @remarks
   * *
   * **Warning** This operation employs the full parameter update logic to maintain compatibility between the no-configuration logic and the default update logic. In other words, any unspecified parameters are treated as empty.
   * 
   * @param request - ModifyTemplateRequest
   * @returns ModifyTemplateResponse
   */
  async modifyTemplate(request: $_model.ModifyTemplateRequest): Promise<$_model.ModifyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information of a custom cloud computer template, including the template name and template description.
   * 
   * @remarks
   * This operation allows you to modify only the name and description of a custom cloud computer template. To change other parameters of the template, call the [ModifyTemplate](https://help.aliyun.com/document_detail/2925841.html) operation.
   * 
   * @param request - ModifyTemplateBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateBaseInfoResponse
   */
  async modifyTemplateBaseInfoWithOptions(request: $_model.ModifyTemplateBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTemplateBaseInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplateBaseInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTemplateBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTemplateBaseInfoResponse({}));
  }

  /**
   * Modifies the basic information of a custom cloud computer template, including the template name and template description.
   * 
   * @remarks
   * This operation allows you to modify only the name and description of a custom cloud computer template. To change other parameters of the template, call the [ModifyTemplate](https://help.aliyun.com/document_detail/2925841.html) operation.
   * 
   * @param request - ModifyTemplateBaseInfoRequest
   * @returns ModifyTemplateBaseInfoResponse
   */
  async modifyTemplateBaseInfo(request: $_model.ModifyTemplateBaseInfoRequest): Promise<$_model.ModifyTemplateBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateBaseInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled task configuration group.
   * 
   * @param request - ModifyTimerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTimerGroupResponse
   */
  async modifyTimerGroupWithOptions(request: $_model.ModifyTimerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTimerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configTimers)) {
      query["ConfigTimers"] = request.configTimers;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTimerGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTimerGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTimerGroupResponse({}));
  }

  /**
   * Modifies a scheduled task configuration group.
   * 
   * @param request - ModifyTimerGroupRequest
   * @returns ModifyTimerGroupResponse
   */
  async modifyTimerGroup(request: $_model.ModifyTimerGroupRequest): Promise<$_model.ModifyTimerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTimerGroupWithOptions(request, runtime);
  }

  /**
   * Grants permissions on cloud desktops to end users, or revokes the permissions from the end users.
   * 
   * @remarks
   * You can modify end users only for cloud computers that are in the Running state.
   * 
   * @param request - ModifyUserEntitlementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserEntitlementResponse
   */
  async modifyUserEntitlementWithOptions(request: $_model.ModifyUserEntitlementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserEntitlementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizeDesktopId)) {
      query["AuthorizeDesktopId"] = request.authorizeDesktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.revokeDesktopId)) {
      query["RevokeDesktopId"] = request.revokeDesktopId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserEntitlement",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserEntitlementResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserEntitlementResponse({}));
  }

  /**
   * Grants permissions on cloud desktops to end users, or revokes the permissions from the end users.
   * 
   * @remarks
   * You can modify end users only for cloud computers that are in the Running state.
   * 
   * @param request - ModifyUserEntitlementRequest
   * @returns ModifyUserEntitlementResponse
   */
  async modifyUserEntitlement(request: $_model.ModifyUserEntitlementRequest): Promise<$_model.ModifyUserEntitlementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserEntitlementWithOptions(request, runtime);
  }

  /**
   * Replaces the existing authorized users of a cloud computer share with different users
   * 
   * @param request - ModifyUserToDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserToDesktopGroupResponse
   */
  async modifyUserToDesktopGroupWithOptions(request: $_model.ModifyUserToDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserToDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.newEndUserIds)) {
      query["NewEndUserIds"] = request.newEndUserIds;
    }

    if (!$dara.isNull(request.oldEndUserIds)) {
      query["OldEndUserIds"] = request.oldEndUserIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserToDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserToDesktopGroupResponse({}));
  }

  /**
   * Replaces the existing authorized users of a cloud computer share with different users
   * 
   * @param request - ModifyUserToDesktopGroupRequest
   * @returns ModifyUserToDesktopGroupResponse
   */
  async modifyUserToDesktopGroup(request: $_model.ModifyUserToDesktopGroupRequest): Promise<$_model.ModifyUserToDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserToDesktopGroupWithOptions(request, runtime);
  }

  /**
   * Move files or folders.
   * 
   * @param request - MoveCdsFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveCdsFileResponse
   */
  async moveCdsFileWithOptions(request: $_model.MoveCdsFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveCdsFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveCdsFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveCdsFileResponse>(await this.callApi(params, req, runtime), new $_model.MoveCdsFileResponse({}));
  }

  /**
   * Move files or folders.
   * 
   * @param request - MoveCdsFileRequest
   * @returns MoveCdsFileResponse
   */
  async moveCdsFile(request: $_model.MoveCdsFileRequest): Promise<$_model.MoveCdsFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveCdsFileWithOptions(request, runtime);
  }

  /**
   * Restart cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to restart must be in the Running state.
   * 
   * @param request - RebootDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootDesktopsResponse
   */
  async rebootDesktopsWithOptions(request: $_model.RebootDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.RebootDesktopsResponse({}));
  }

  /**
   * Restart cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to restart must be in the Running state.
   * 
   * @param request - RebootDesktopsRequest
   * @returns RebootDesktopsResponse
   */
  async rebootDesktops(request: $_model.RebootDesktopsRequest): Promise<$_model.RebootDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  /**
   * Rebuilds images for one or more cloud computers.
   * 
   * @remarks
   * Before you proceed, take note of the following limits:
   * *   You cannot convert a cloud computer\\"s operating system image from one type to another (e.g., Windows to Linux or vice versa) in China (Hong Kong) or overseas regions.
   * *   GPU and non-GPU images are not interchangeable, as graphic-based cloud computers can only use GPU-accelerated images, while other cloud computers are limited to non-GPU-accelerated images.
   * When a cloud computer’s image is updated, the system initializes its system disk by using the new image, resulting in the following effects:
   * *   All data on the original system disk is erased. Snapshots created from the original system disk become unavailable and are automatically deleted.
   * *   If the OS changes, data on the original data disk is cleared, and snapshots created from the original data disk become unavailable and are automatically deleted. If the OS remains the same, data on the original data disk is retained, and snapshots from the original data disk remain available.
   * 
   * @param request - RebuildDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildDesktopsResponse
   */
  async rebuildDesktopsWithOptions(request: $_model.RebuildDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterStatus)) {
      query["AfterStatus"] = request.afterStatus;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebuildDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebuildDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.RebuildDesktopsResponse({}));
  }

  /**
   * Rebuilds images for one or more cloud computers.
   * 
   * @remarks
   * Before you proceed, take note of the following limits:
   * *   You cannot convert a cloud computer\\"s operating system image from one type to another (e.g., Windows to Linux or vice versa) in China (Hong Kong) or overseas regions.
   * *   GPU and non-GPU images are not interchangeable, as graphic-based cloud computers can only use GPU-accelerated images, while other cloud computers are limited to non-GPU-accelerated images.
   * When a cloud computer’s image is updated, the system initializes its system disk by using the new image, resulting in the following effects:
   * *   All data on the original system disk is erased. Snapshots created from the original system disk become unavailable and are automatically deleted.
   * *   If the OS changes, data on the original data disk is cleared, and snapshots created from the original data disk become unavailable and are automatically deleted. If the OS remains the same, data on the original data disk is retained, and snapshots from the original data disk remain available.
   * 
   * @param request - RebuildDesktopsRequest
   * @returns RebuildDesktopsResponse
   */
  async rebuildDesktops(request: $_model.RebuildDesktopsRequest): Promise<$_model.RebuildDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebuildDesktopsWithOptions(request, runtime);
  }

  /**
   * 删除公网IP
   * 
   * @param request - ReleaseIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseIpAddressResponse
   */
  async releaseIpAddressWithOptions(request: $_model.ReleaseIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eipId)) {
      query["EipId"] = request.eipId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseIpAddress",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseIpAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseIpAddressResponse({}));
  }

  /**
   * 删除公网IP
   * 
   * @param request - ReleaseIpAddressRequest
   * @returns ReleaseIpAddressResponse
   */
  async releaseIpAddress(request: $_model.ReleaseIpAddressRequest): Promise<$_model.ReleaseIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseIpAddressWithOptions(request, runtime);
  }

  /**
   * Unshare a folder on the network disk.
   * 
   * @param tmpReq - RemoveFilePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFilePermissionResponse
   */
  async removeFilePermissionWithOptions(tmpReq: $_model.RemoveFilePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFilePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveFilePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFilePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFilePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RemoveFilePermissionResponse({}));
  }

  /**
   * Unshare a folder on the network disk.
   * 
   * @param request - RemoveFilePermissionRequest
   * @returns RemoveFilePermissionResponse
   */
  async removeFilePermission(request: $_model.RemoveFilePermissionRequest): Promise<$_model.RemoveFilePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeFilePermissionWithOptions(request, runtime);
  }

  /**
   * Revokes user access permissions for a cloud computer share. Once access permissions for a cloud computer share are revoked from a user, the user can no longer access any cloud computers within that share.
   * 
   * @param request - RemoveUserFromDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromDesktopGroupResponse
   */
  async removeUserFromDesktopGroupWithOptions(request: $_model.RemoveUserFromDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.simpleUserGroupId)) {
      query["SimpleUserGroupId"] = request.simpleUserGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    if (!$dara.isNull(request.userOuPath)) {
      query["UserOuPath"] = request.userOuPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromDesktopGroupResponse({}));
  }

  /**
   * Revokes user access permissions for a cloud computer share. Once access permissions for a cloud computer share are revoked from a user, the user can no longer access any cloud computers within that share.
   * 
   * @param request - RemoveUserFromDesktopGroupRequest
   * @returns RemoveUserFromDesktopGroupResponse
   */
  async removeUserFromDesktopGroup(request: $_model.RemoveUserFromDesktopGroupRequest): Promise<$_model.RemoveUserFromDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromDesktopGroupWithOptions(request, runtime);
  }

  /**
   * 移除超卖用户组用户
   * 
   * @param request - RemoveUserFromDesktopOversoldUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromDesktopOversoldUserGroupResponse
   */
  async removeUserFromDesktopOversoldUserGroupWithOptions(request: $_model.RemoveUserFromDesktopOversoldUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromDesktopOversoldUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!$dara.isNull(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromDesktopOversoldUserGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromDesktopOversoldUserGroupResponse({}));
  }

  /**
   * 移除超卖用户组用户
   * 
   * @param request - RemoveUserFromDesktopOversoldUserGroupRequest
   * @returns RemoveUserFromDesktopOversoldUserGroupResponse
   */
  async removeUserFromDesktopOversoldUserGroup(request: $_model.RemoveUserFromDesktopOversoldUserGroupRequest): Promise<$_model.RemoveUserFromDesktopOversoldUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
   * Renews a shared cloud computer.
   * 
   * @param request - RenewDesktopGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewDesktopGroupResponse
   */
  async renewDesktopGroupWithOptions(request: $_model.RenewDesktopGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewDesktopGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewDesktopGroupResponse>(await this.callApi(params, req, runtime), new $_model.RenewDesktopGroupResponse({}));
  }

  /**
   * Renews a shared cloud computer.
   * 
   * @param request - RenewDesktopGroupRequest
   * @returns RenewDesktopGroupResponse
   */
  async renewDesktopGroup(request: $_model.RenewDesktopGroupRequest): Promise<$_model.RenewDesktopGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewDesktopGroupWithOptions(request, runtime);
  }

  /**
   * 续费桌面超卖组
   * 
   * @param request - RenewDesktopOversoldGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewDesktopOversoldGroupResponse
   */
  async renewDesktopOversoldGroupWithOptions(request: $_model.RenewDesktopOversoldGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewDesktopOversoldGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
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
      action: "RenewDesktopOversoldGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new $_model.RenewDesktopOversoldGroupResponse({}));
  }

  /**
   * 续费桌面超卖组
   * 
   * @param request - RenewDesktopOversoldGroupRequest
   * @returns RenewDesktopOversoldGroupResponse
   */
  async renewDesktopOversoldGroup(request: $_model.RenewDesktopOversoldGroupRequest): Promise<$_model.RenewDesktopOversoldGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
   * Renews monthly subscription cloud computers.
   * 
   * @param request - RenewDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewDesktopsResponse
   */
  async renewDesktopsWithOptions(request: $_model.RenewDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.RenewDesktopsResponse({}));
  }

  /**
   * Renews monthly subscription cloud computers.
   * 
   * @param request - RenewDesktopsRequest
   * @returns RenewDesktopsResponse
   */
  async renewDesktops(request: $_model.RenewDesktopsRequest): Promise<$_model.RenewDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewDesktopsWithOptions(request, runtime);
  }

  /**
   * Renews premium bandwidth plans.
   * 
   * @param request - RenewNetworkPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewNetworkPackagesResponse
   */
  async renewNetworkPackagesWithOptions(request: $_model.RenewNetworkPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewNetworkPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewNetworkPackagesResponse>(await this.callApi(params, req, runtime), new $_model.RenewNetworkPackagesResponse({}));
  }

  /**
   * Renews premium bandwidth plans.
   * 
   * @param request - RenewNetworkPackagesRequest
   * @returns RenewNetworkPackagesResponse
   */
  async renewNetworkPackages(request: $_model.RenewNetworkPackagesRequest): Promise<$_model.RenewNetworkPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewNetworkPackagesWithOptions(request, runtime);
  }

  /**
   * Resets cloud computers of a cloud computer share.
   * 
   * @remarks
   * >  You can call this operation to reset only cloud computers from a cloud computer share.
   * 
   * @param request - ResetDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDesktopsResponse
   */
  async resetDesktopsWithOptions(request: $_model.ResetDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.lastRetryTime)) {
      query["LastRetryTime"] = request.lastRetryTime;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetScope)) {
      query["ResetScope"] = request.resetScope;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.ResetDesktopsResponse({}));
  }

  /**
   * Resets cloud computers of a cloud computer share.
   * 
   * @remarks
   * >  You can call this operation to reset only cloud computers from a cloud computer share.
   * 
   * @param request - ResetDesktopsRequest
   * @returns ResetDesktopsResponse
   */
  async resetDesktops(request: $_model.ResetDesktopsRequest): Promise<$_model.ResetDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDesktopsWithOptions(request, runtime);
  }

  /**
   * Resets the mount target of a File Storage NAS (NAS) file system.
   * 
   * @remarks
   * When you create a NAS file system, a mount target is automatically generated. By default, you do not need to modify the mount target of the NAS file system. If the mount target is disabled, you need to reset the mount target of the NAS file system.
   * 
   * @param request - ResetNASDefaultMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetNASDefaultMountTargetResponse
   */
  async resetNASDefaultMountTargetWithOptions(request: $_model.ResetNASDefaultMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetNASDefaultMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetNASDefaultMountTarget",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new $_model.ResetNASDefaultMountTargetResponse({}));
  }

  /**
   * Resets the mount target of a File Storage NAS (NAS) file system.
   * 
   * @remarks
   * When you create a NAS file system, a mount target is automatically generated. By default, you do not need to modify the mount target of the NAS file system. If the mount target is disabled, you need to reset the mount target of the NAS file system.
   * 
   * @param request - ResetNASDefaultMountTargetRequest
   * @returns ResetNASDefaultMountTargetResponse
   */
  async resetNASDefaultMountTarget(request: $_model.ResetNASDefaultMountTargetRequest): Promise<$_model.ResetNASDefaultMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetNASDefaultMountTargetWithOptions(request, runtime);
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @remarks
   * Before you call this operation, make sure that the following operations are performed:
   * *   The data that you want to retain is backed up.
   *     > The disk restoration operation is irreversible. After you call this operation, the disk is restored to the status at the point in time when the snapshot was created. Data that is generated between the snapshot creation time and the current time is lost. Before you restore the disk based on the snapshot, make sure that you back up data.
   * *   The cloud computer to which the disk belongs is stopped.
   * 
   * @param request - ResetSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSnapshotResponse
   */
  async resetSnapshotWithOptions(request: $_model.ResetSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.stopDesktop)) {
      query["StopDesktop"] = request.stopDesktop;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSnapshot",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.ResetSnapshotResponse({}));
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @remarks
   * Before you call this operation, make sure that the following operations are performed:
   * *   The data that you want to retain is backed up.
   *     > The disk restoration operation is irreversible. After you call this operation, the disk is restored to the status at the point in time when the snapshot was created. Data that is generated between the snapshot creation time and the current time is lost. Before you restore the disk based on the snapshot, make sure that you back up data.
   * *   The cloud computer to which the disk belongs is stopped.
   * 
   * @param request - ResetSnapshotRequest
   * @returns ResetSnapshotResponse
   */
  async resetSnapshot(request: $_model.ResetSnapshotRequest): Promise<$_model.ResetSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  /**
   * Revokes the coordinate permissions.
   * 
   * @param request - RevokeCoordinatePrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeCoordinatePrivilegeResponse
   */
  async revokeCoordinatePrivilegeWithOptions(request: $_model.RevokeCoordinatePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeCoordinatePrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeCoordinatePrivilege",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeCoordinatePrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.RevokeCoordinatePrivilegeResponse({}));
  }

  /**
   * Revokes the coordinate permissions.
   * 
   * @param request - RevokeCoordinatePrivilegeRequest
   * @returns RevokeCoordinatePrivilegeResponse
   */
  async revokeCoordinatePrivilege(request: $_model.RevokeCoordinatePrivilegeRequest): Promise<$_model.RevokeCoordinatePrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeCoordinatePrivilegeWithOptions(request, runtime);
  }

  /**
   * Runs a PowerShell or batch (.bat) script on Windows cloud desktops.
   * 
   * @remarks
   * You can use the RunCommand operation to run scripts only on Windows cloud desktops.
   * 
   * @param request - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(request: $_model.RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.commandRole)) {
      query["CommandRole"] = request.commandRole;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunCommandResponse({}));
  }

  /**
   * Runs a PowerShell or batch (.bat) script on Windows cloud desktops.
   * 
   * @remarks
   * You can use the RunCommand operation to run scripts only on Windows cloud desktops.
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: $_model.RunCommandRequest): Promise<$_model.RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Obtains the verification code that is required when you bind an advanced office network to a Cloud Enterprise Network (CEN) instance that belongs to another Alibaba Cloud account.
   * 
   * @remarks
   * You must call this operation to obtain the verification code that is required when you bind an advanced office network to a CEN instance that belongs to another Alibaba Cloud account. After you call this operation, the system sends a verification code to the email address associated with the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @param request - SendVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerifyCodeResponse
   */
  async sendVerifyCodeWithOptions(request: $_model.SendVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.verifyCodeAction)) {
      query["VerifyCodeAction"] = request.verifyCodeAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerifyCode",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.SendVerifyCodeResponse({}));
  }

  /**
   * Obtains the verification code that is required when you bind an advanced office network to a Cloud Enterprise Network (CEN) instance that belongs to another Alibaba Cloud account.
   * 
   * @remarks
   * You must call this operation to obtain the verification code that is required when you bind an advanced office network to a CEN instance that belongs to another Alibaba Cloud account. After you call this operation, the system sends a verification code to the email address associated with the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @param request - SendVerifyCodeRequest
   * @returns SendVerifyCodeResponse
   */
  async sendVerifyCode(request: $_model.SendVerifyCodeRequest): Promise<$_model.SendVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Configures an auto scaling policy for a multi-session cloud computer. Elastic Desktop Service allows multiple end users to share a cloud computer in a multi-session cloud computer pool. This helps save costs.
   * 
   * @param request - SetDesktopGroupScaleTimerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDesktopGroupScaleTimerResponse
   */
  async setDesktopGroupScaleTimerWithOptions(request: $_model.SetDesktopGroupScaleTimerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDesktopGroupScaleTimerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scaleTimerInfos)) {
      query["ScaleTimerInfos"] = request.scaleTimerInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDesktopGroupScaleTimer",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDesktopGroupScaleTimerResponse>(await this.callApi(params, req, runtime), new $_model.SetDesktopGroupScaleTimerResponse({}));
  }

  /**
   * Configures an auto scaling policy for a multi-session cloud computer. Elastic Desktop Service allows multiple end users to share a cloud computer in a multi-session cloud computer pool. This helps save costs.
   * 
   * @param request - SetDesktopGroupScaleTimerRequest
   * @returns SetDesktopGroupScaleTimerResponse
   */
  async setDesktopGroupScaleTimer(request: $_model.SetDesktopGroupScaleTimerRequest): Promise<$_model.SetDesktopGroupScaleTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDesktopGroupScaleTimerWithOptions(request, runtime);
  }

  /**
   * Configures a scheduled start, stop, restart, or reset task for a cloud computer share.
   * 
   * @param request - SetDesktopGroupTimerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDesktopGroupTimerResponse
   */
  async setDesktopGroupTimerWithOptions(request: $_model.SetDesktopGroupTimerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDesktopGroupTimerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!$dara.isNull(request.timerType)) {
      query["TimerType"] = request.timerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDesktopGroupTimer",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDesktopGroupTimerResponse>(await this.callApi(params, req, runtime), new $_model.SetDesktopGroupTimerResponse({}));
  }

  /**
   * Configures a scheduled start, stop, restart, or reset task for a cloud computer share.
   * 
   * @param request - SetDesktopGroupTimerRequest
   * @returns SetDesktopGroupTimerResponse
   */
  async setDesktopGroupTimer(request: $_model.SetDesktopGroupTimerRequest): Promise<$_model.SetDesktopGroupTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDesktopGroupTimerWithOptions(request, runtime);
  }

  /**
   * Sets the status of a scheduled task for a cloud computer share, such as enabling or disabling it.
   * 
   * @param request - SetDesktopGroupTimerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDesktopGroupTimerStatusResponse
   */
  async setDesktopGroupTimerStatusWithOptions(request: $_model.SetDesktopGroupTimerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDesktopGroupTimerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.timerType)) {
      query["TimerType"] = request.timerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDesktopGroupTimerStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDesktopGroupTimerStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDesktopGroupTimerStatusResponse({}));
  }

  /**
   * Sets the status of a scheduled task for a cloud computer share, such as enabling or disabling it.
   * 
   * @param request - SetDesktopGroupTimerStatusRequest
   * @returns SetDesktopGroupTimerStatusResponse
   */
  async setDesktopGroupTimerStatus(request: $_model.SetDesktopGroupTimerStatusRequest): Promise<$_model.SetDesktopGroupTimerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDesktopGroupTimerStatusWithOptions(request, runtime);
  }

  /**
   * Set the cloud computer maintenance mode.
   * 
   * @remarks
   * If you need to perform some maintenance operations on the cloud computer and want to prohibit end user from connecting and using the cloud computer during this period, you can switch it to maintenance mode.
   * 
   * @param request - SetDesktopMaintenanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDesktopMaintenanceResponse
   */
  async setDesktopMaintenanceWithOptions(request: $_model.SetDesktopMaintenanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDesktopMaintenanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDesktopMaintenance",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDesktopMaintenanceResponse>(await this.callApi(params, req, runtime), new $_model.SetDesktopMaintenanceResponse({}));
  }

  /**
   * Set the cloud computer maintenance mode.
   * 
   * @remarks
   * If you need to perform some maintenance operations on the cloud computer and want to prohibit end user from connecting and using the cloud computer during this period, you can switch it to maintenance mode.
   * 
   * @param request - SetDesktopMaintenanceRequest
   * @returns SetDesktopMaintenanceResponse
   */
  async setDesktopMaintenance(request: $_model.SetDesktopMaintenanceRequest): Promise<$_model.SetDesktopMaintenanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDesktopMaintenanceWithOptions(request, runtime);
  }

  /**
   * Configures the single sign-on (SSO) status of an Active Directory (AD) directory.
   * 
   * @remarks
   * This operation is supported only for AD directories, not for RAM directories.
   * 
   * @param request - SetDirectorySsoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDirectorySsoStatusResponse
   */
  async setDirectorySsoStatusWithOptions(request: $_model.SetDirectorySsoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDirectorySsoStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.enableSso)) {
      query["EnableSso"] = request.enableSso;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDirectorySsoStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDirectorySsoStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDirectorySsoStatusResponse({}));
  }

  /**
   * Configures the single sign-on (SSO) status of an Active Directory (AD) directory.
   * 
   * @remarks
   * This operation is supported only for AD directories, not for RAM directories.
   * 
   * @param request - SetDirectorySsoStatusRequest
   * @returns SetDirectorySsoStatusResponse
   */
  async setDirectorySsoStatus(request: $_model.SetDirectorySsoStatusRequest): Promise<$_model.SetDirectorySsoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDirectorySsoStatusWithOptions(request, runtime);
  }

  /**
   * Uploads the metadata of a Security Assertion Markup Language (SAML) 2.0-based identity provider (IdP).
   * 
   * @remarks
   * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
   * 
   * @param request - SetIdpMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdpMetadataResponse
   */
  async setIdpMetadataWithOptions(request: $_model.SetIdpMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdpMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.idpMetadata)) {
      query["IdpMetadata"] = request.idpMetadata;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdpMetadata",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdpMetadataResponse>(await this.callApi(params, req, runtime), new $_model.SetIdpMetadataResponse({}));
  }

  /**
   * Uploads the metadata of a Security Assertion Markup Language (SAML) 2.0-based identity provider (IdP).
   * 
   * @remarks
   * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
   * 
   * @param request - SetIdpMetadataRequest
   * @returns SetIdpMetadataResponse
   */
  async setIdpMetadata(request: $_model.SetIdpMetadataRequest): Promise<$_model.SetIdpMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdpMetadataWithOptions(request, runtime);
  }

  /**
   * Enables or disables single sign-on (SSO) for a workspace.
   * 
   * @param request - SetOfficeSiteSsoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetOfficeSiteSsoStatusResponse
   */
  async setOfficeSiteSsoStatusWithOptions(request: $_model.SetOfficeSiteSsoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetOfficeSiteSsoStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableSso)) {
      query["EnableSso"] = request.enableSso;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetOfficeSiteSsoStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetOfficeSiteSsoStatusResponse({}));
  }

  /**
   * Enables or disables single sign-on (SSO) for a workspace.
   * 
   * @param request - SetOfficeSiteSsoStatusRequest
   * @returns SetOfficeSiteSsoStatusResponse
   */
  async setOfficeSiteSsoStatus(request: $_model.SetOfficeSiteSsoStatusRequest): Promise<$_model.SetOfficeSiteSsoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  /**
   * Configures directories in the blacklist and whitelist based on the user profile management (UPM) feature.
   * 
   * @param tmpReq - SetUserProfilePathRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserProfilePathRulesResponse
   */
  async setUserProfilePathRulesWithOptions(tmpReq: $_model.SetUserProfilePathRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserProfilePathRulesResponse> {
    tmpReq.validate();
    let request = new $_model.SetUserProfilePathRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userProfilePathRule)) {
      request.userProfilePathRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userProfilePathRule, "UserProfilePathRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userProfilePathRuleShrink)) {
      query["UserProfilePathRule"] = request.userProfilePathRuleShrink;
    }

    if (!$dara.isNull(request.userProfileRuleType)) {
      query["UserProfileRuleType"] = request.userProfileRuleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserProfilePathRules",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserProfilePathRulesResponse>(await this.callApi(params, req, runtime), new $_model.SetUserProfilePathRulesResponse({}));
  }

  /**
   * Configures directories in the blacklist and whitelist based on the user profile management (UPM) feature.
   * 
   * @param request - SetUserProfilePathRulesRequest
   * @returns SetUserProfilePathRulesResponse
   */
  async setUserProfilePathRules(request: $_model.SetUserProfilePathRulesRequest): Promise<$_model.SetUserProfilePathRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserProfilePathRulesWithOptions(request, runtime);
  }

  /**
   * Starts stopped cloud computers. After the API operation is successfully called, the cloud computers enter the Running state.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state.
   * 
   * @param request - StartDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: $_model.StartDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.StartDesktopsResponse({}));
  }

  /**
   * Starts stopped cloud computers. After the API operation is successfully called, the cloud computers enter the Running state.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state.
   * 
   * @param request - StartDesktopsRequest
   * @returns StartDesktopsResponse
   */
  async startDesktops(request: $_model.StartDesktopsRequest): Promise<$_model.StartDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  /**
   * Stop cloud computers that are in the Running state. After the operation is successfully called, the cloud computers enter the Stopped state.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state.
   * 
   * @param request - StopDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: $_model.StopDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stoppedMode)) {
      query["StoppedMode"] = request.stoppedMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.StopDesktopsResponse({}));
  }

  /**
   * Stop cloud computers that are in the Running state. After the operation is successfully called, the cloud computers enter the Stopped state.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state.
   * 
   * @param request - StopDesktopsRequest
   * @returns StopDesktopsResponse
   */
  async stopDesktops(request: $_model.StopDesktopsRequest): Promise<$_model.StopDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  /**
   * Stops a Cloud Assistant command that is running on one or more cloud desktops.
   * 
   * @remarks
   * When you stop a one-time execution of a command, the command continues to run on the cloud desktops where it has started to run, and will not run on the cloud desktops where it has not started to run.
   * 
   * @param request - StopInvocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInvocationResponse
   */
  async stopInvocationWithOptions(request: $_model.StopInvocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInvocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInvocation",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInvocationResponse>(await this.callApi(params, req, runtime), new $_model.StopInvocationResponse({}));
  }

  /**
   * Stops a Cloud Assistant command that is running on one or more cloud desktops.
   * 
   * @remarks
   * When you stop a one-time execution of a command, the command continues to run on the cloud desktops where it has started to run, and will not run on the cloud desktops where it has not started to run.
   * 
   * @param request - StopInvocationRequest
   * @returns StopInvocationResponse
   */
  async stopInvocation(request: $_model.StopInvocationRequest): Promise<$_model.StopInvocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  /**
   * Adds tags to cloud computers. This allows you to filter and manage cloud computers by tag.
   * 
   * @remarks
   * If TagKey is specified, the new TagValue value overrides the original TagValue value.
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
      version: "2020-09-30",
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
   * Adds tags to cloud computers. This allows you to filter and manage cloud computers by tag.
   * 
   * @remarks
   * If TagKey is specified, the new TagValue value overrides the original TagValue value.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the transmission and approval result for a submitted file.
   * 
   * @param request - TransferTaskApprovalCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferTaskApprovalCallbackResponse
   */
  async transferTaskApprovalCallbackWithOptions(request: $_model.TransferTaskApprovalCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferTaskApprovalCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossBucketRegionId)) {
      query["OssBucketRegionId"] = request.ossBucketRegionId;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferTaskApprovalCallback",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferTaskApprovalCallbackResponse>(await this.callApi(params, req, runtime), new $_model.TransferTaskApprovalCallbackResponse({}));
  }

  /**
   * Queries the transmission and approval result for a submitted file.
   * 
   * @param request - TransferTaskApprovalCallbackRequest
   * @returns TransferTaskApprovalCallbackResponse
   */
  async transferTaskApprovalCallback(request: $_model.TransferTaskApprovalCallbackRequest): Promise<$_model.TransferTaskApprovalCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferTaskApprovalCallbackWithOptions(request, runtime);
  }

  /**
   * Unbinds a configuration group from resources.
   * 
   * @param request - UnbindConfigGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindConfigGroupResponse
   */
  async unbindConfigGroupWithOptions(request: $_model.UnbindConfigGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindConfigGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInfos)) {
      query["ResourceInfos"] = request.resourceInfos;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindConfigGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindConfigGroupResponse>(await this.callApi(params, req, runtime), new $_model.UnbindConfigGroupResponse({}));
  }

  /**
   * Unbinds a configuration group from resources.
   * 
   * @param request - UnbindConfigGroupRequest
   * @returns UnbindConfigGroupResponse
   */
  async unbindConfigGroup(request: $_model.UnbindConfigGroupRequest): Promise<$_model.UnbindConfigGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindConfigGroupWithOptions(request, runtime);
  }

  /**
   * 解绑用户桌面
   * 
   * @param request - UnbindUserDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktopWithOptions(request: $_model.UnbindUserDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindUserDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopAgentIds)) {
      query["DesktopAgentIds"] = request.desktopAgentIds;
    }

    if (!$dara.isNull(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.userDesktopIds)) {
      query["UserDesktopIds"] = request.userDesktopIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindUserDesktop",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindUserDesktopResponse>(await this.callApi(params, req, runtime), new $_model.UnbindUserDesktopResponse({}));
  }

  /**
   * 解绑用户桌面
   * 
   * @param request - UnbindUserDesktopRequest
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktop(request: $_model.UnbindUserDesktopRequest): Promise<$_model.UnbindUserDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindUserDesktopWithOptions(request, runtime);
  }

  /**
   * Unlocks a virtual multi-factor authentication (MFA) device that is in the LOCKED state.
   * 
   * @param request - UnlockVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockVirtualMFADeviceResponse
   */
  async unlockVirtualMFADeviceWithOptions(request: $_model.UnlockVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockVirtualMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnlockVirtualMFADeviceResponse({}));
  }

  /**
   * Unlocks a virtual multi-factor authentication (MFA) device that is in the LOCKED state.
   * 
   * @param request - UnlockVirtualMFADeviceRequest
   * @returns UnlockVirtualMFADeviceResponse
   */
  async unlockVirtualMFADevice(request: $_model.UnlockVirtualMFADeviceRequest): Promise<$_model.UnlockVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Removes tags from cloud computers. After you remove a tag, if the tag is not added to a cloud computer, the tag is automatically deleted.
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
      version: "2020-09-30",
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
   * Removes tags from cloud computers. After you remove a tag, if the tag is not added to a cloud computer, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Enables or disables the auto-push feature for an image update task.
   * 
   * @remarks
   * You can call this operation to manage each image update task. This operation is valid only when the auto-update switch in the image update module for global image updates is turned off. If the auto-update switch is turned on, the switches for each image update task are always turned on. If you want to turn on or off the auto-update switch, go to the Elastic Desktop Service console and choose **Operations > Image Updates** in the left-side navigation pane.
   * 
   * @param request - UpdateFotaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFotaTaskResponse
   */
  async updateFotaTaskWithOptions(request: $_model.UpdateFotaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFotaTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFotaTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFotaTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFotaTaskResponse({}));
  }

  /**
   * Enables or disables the auto-push feature for an image update task.
   * 
   * @remarks
   * You can call this operation to manage each image update task. This operation is valid only when the auto-update switch in the image update module for global image updates is turned off. If the auto-update switch is turned on, the switches for each image update task are always turned on. If you want to turn on or off the auto-update switch, go to the Elastic Desktop Service console and choose **Operations > Image Updates** in the left-side navigation pane.
   * 
   * @param request - UpdateFotaTaskRequest
   * @returns UpdateFotaTaskResponse
   */
  async updateFotaTask(request: $_model.UpdateFotaTaskRequest): Promise<$_model.UpdateFotaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFotaTaskWithOptions(request, runtime);
  }

  /**
   * Uploads your custom Windows image.
   * 
   * @remarks
   * >  You can upload only Windows images.
   * 
   * @param request - UploadImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadImageResponse
   */
  async uploadImageWithOptions(request: $_model.UploadImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableSecurityCheck)) {
      query["EnableSecurityCheck"] = request.enableSecurityCheck;
    }

    if (!$dara.isNull(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!$dara.isNull(request.gpuDriverType)) {
      query["GpuDriverType"] = request.gpuDriverType;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ossObjectPath)) {
      query["OssObjectPath"] = request.ossObjectPath;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadImageResponse>(await this.callApi(params, req, runtime), new $_model.UploadImageResponse({}));
  }

  /**
   * Uploads your custom Windows image.
   * 
   * @remarks
   * >  You can upload only Windows images.
   * 
   * @param request - UploadImageRequest
   * @returns UploadImageResponse
   */
  async uploadImage(request: $_model.UploadImageRequest): Promise<$_model.UploadImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadImageWithOptions(request, runtime);
  }

  /**
   * Verifies the ID of a Cloud Enterprise Network (CEN) instance and the ID of the Alibaba Cloud account to which the instance belongs and checks whether a CIDR block conflict exists between the routes of the instance and the IPv4 CIDR blocks of the associated office network.
   * 
   * @param request - VerifyCenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyCenResponse
   */
  async verifyCenWithOptions(request: $_model.VerifyCenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyCenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyCenResponse>(await this.callApi(params, req, runtime), new $_model.VerifyCenResponse({}));
  }

  /**
   * Verifies the ID of a Cloud Enterprise Network (CEN) instance and the ID of the Alibaba Cloud account to which the instance belongs and checks whether a CIDR block conflict exists between the routes of the instance and the IPv4 CIDR blocks of the associated office network.
   * 
   * @param request - VerifyCenRequest
   * @returns VerifyCenResponse
   */
  async verifyCen(request: $_model.VerifyCenRequest): Promise<$_model.VerifyCenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyCenWithOptions(request, runtime);
  }

  /**
   * Wakes up cloud computers.
   * 
   * @remarks
   * Only cloud computers that are in the Hibernated state can be waked up.
   * 
   * @param request - WakeupDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WakeupDesktopsResponse
   */
  async wakeupDesktopsWithOptions(request: $_model.WakeupDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WakeupDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WakeupDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WakeupDesktopsResponse>(await this.callApi(params, req, runtime), new $_model.WakeupDesktopsResponse({}));
  }

  /**
   * Wakes up cloud computers.
   * 
   * @remarks
   * Only cloud computers that are in the Hibernated state can be waked up.
   * 
   * @param request - WakeupDesktopsRequest
   * @returns WakeupDesktopsResponse
   */
  async wakeupDesktops(request: $_model.WakeupDesktopsRequest): Promise<$_model.WakeupDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.wakeupDesktopsWithOptions(request, runtime);
  }

}
