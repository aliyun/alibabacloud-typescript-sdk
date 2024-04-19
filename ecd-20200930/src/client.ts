// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CdsFileShareLinkModel extends $tea.Model {
  accessCount?: number;
  createTime?: string;
  creator?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  driveId?: string;
  expiration?: string;
  expired?: boolean;
  fileIds?: string;
  modifiyTime?: string;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveLimit?: number;
  shareId?: string;
  shareLink?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadCount: 'DownloadCount',
      downloadLimit: 'DownloadLimit',
      driveId: 'DriveId',
      expiration: 'Expiration',
      expired: 'Expired',
      fileIds: 'FileIds',
      modifiyTime: 'ModifiyTime',
      previewCount: 'PreviewCount',
      previewLimit: 'PreviewLimit',
      reportCount: 'ReportCount',
      saveCount: 'SaveCount',
      saveLimit: 'SaveLimit',
      shareId: 'ShareId',
      shareLink: 'ShareLink',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
      status: 'Status',
      videoPreviewCount: 'VideoPreviewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      expired: 'boolean',
      fileIds: 'string',
      modifiyTime: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareLink: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePermissionMember extends $tea.Model {
  cdsIdentity?: FilePermissionMemberCdsIdentity;
  disinheritSubGroup?: boolean;
  expireTime?: number;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      disinheritSubGroup: 'DisinheritSubGroup',
      expireTime: 'ExpireTime',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: FilePermissionMemberCdsIdentity,
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateOfficeSiteRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateOfficeSiteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateOfficeSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDesktopOversoldUserGroupRequest extends $tea.Model {
  imageId?: string;
  name?: string;
  oversoldGroupId?: string;
  policyGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      policyGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDesktopOversoldUserGroupResponseBody extends $tea.Model {
  data?: AddDesktopOversoldUserGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddDesktopOversoldUserGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDesktopOversoldUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDesktopOversoldUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDesktopOversoldUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesRequest extends $tea.Model {
  clientType?: number;
  deviceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      deviceIds: 'DeviceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  memberList?: AddFilePermissionRequestMemberList[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberList: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberList: { 'type': 'array', 'itemType': AddFilePermissionRequestMemberList },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionShrinkRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  memberListShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberListShrink: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberListShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFilePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFilePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopGroupRequest extends $tea.Model {
  clientToken?: string;
  desktopGroupId?: string;
  desktopGroupIds?: string[];
  endUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopOversoldUserGroupRequest extends $tea.Model {
  addUserAmount?: number;
  endUserId?: string;
  oversoldGroupId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addUserAmount: 'AddUserAmount',
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUserAmount: 'number',
      endUserId: 'string',
      oversoldGroupId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopOversoldUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopOversoldUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToDesktopOversoldUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToDesktopOversoldUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyRequest extends $tea.Model {
  desktopId?: string[];
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinatePrivilegeRequest extends $tea.Model {
  coId?: string;
  endUserId?: string;
  regionId?: string;
  userType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinatePrivilegeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinatePrivilegeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyCoordinatePrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyCoordinatePrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringRequest extends $tea.Model {
  coordinatePolicyType?: string;
  endUserId?: string;
  initiatorType?: string;
  regionId?: string;
  resourceCandidates?: ApplyCoordinationForMonitoringRequestResourceCandidates[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatePolicyType: 'CoordinatePolicyType',
      endUserId: 'EndUserId',
      initiatorType: 'InitiatorType',
      regionId: 'RegionId',
      resourceCandidates: 'ResourceCandidates',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatePolicyType: 'string',
      endUserId: 'string',
      initiatorType: 'string',
      regionId: 'string',
      resourceCandidates: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringRequestResourceCandidates },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponseBody extends $tea.Model {
  coordinateFlowModels?: ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinateFlowModels: 'CoordinateFlowModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateFlowModels: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyCoordinationForMonitoringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyCoordinationForMonitoringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateRequest extends $tea.Model {
  appVersion?: string;
  desktopId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      desktopId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveFotaUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveFotaUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkPackageRequest extends $tea.Model {
  networkPackageId?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkPackageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateNetworkPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  officeSiteId?: string;
  regionId?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      officeSiteId: 'string',
      regionId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUserRequest extends $tea.Model {
  adDomain?: string;
  clientType?: number;
  deviceId?: string;
  directoryId?: string;
  endUserId?: string;
  regionId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      clientType: 'ClientType',
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      clientType: 'number',
      deviceId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEndUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyRequest extends $tea.Model {
  desktopId?: string[];
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCdsFileShareLinkRequest extends $tea.Model {
  cdsId?: string;
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      shareId: 'ShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      shareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCdsFileShareLinkResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCdsFileShareLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCdsFileShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCdsFileShareLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCoordinationForMonitoringRequest extends $tea.Model {
  coIds?: string[];
  endUserId?: string;
  regionId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      coIds: 'CoIds',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCoordinationForMonitoringResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCoordinationForMonitoringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCoordinationForMonitoringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCoordinationForMonitoringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageRequest extends $tea.Model {
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCopyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCopyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupRequest extends $tea.Model {
  name?: string;
  policyGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupResponseBody extends $tea.Model {
  policyGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClonePolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClonePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteCdsFileRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  regionId?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      regionId: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteCdsFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompleteCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CompleteCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorTrustRequest extends $tea.Model {
  officeSiteId?: string;
  rdsLicenseDomain?: boolean;
  regionId?: string;
  trustKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      rdsLicenseDomain: 'RdsLicenseDomain',
      regionId: 'RegionId',
      trustKey: 'TrustKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      rdsLicenseDomain: 'boolean',
      regionId: 'string',
      trustKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorTrustResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorTrustResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigADConnectorTrustResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigADConnectorTrustResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorUserRequest extends $tea.Model {
  domainPassword?: string;
  domainUserName?: string;
  OUName?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainPassword: 'string',
      domainUserName: 'string',
      OUName: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigADConnectorUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigADConnectorUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCdsFileRequest extends $tea.Model {
  autoRename?: boolean;
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  fileReceiverId?: string;
  fileReceiverType?: string;
  groupId?: string;
  parentFolderId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRename: 'AutoRename',
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      fileReceiverId: 'FileReceiverId',
      fileReceiverType: 'FileReceiverType',
      groupId: 'GroupId',
      parentFolderId: 'ParentFolderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRename: 'boolean',
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      fileReceiverId: 'string',
      fileReceiverType: 'string',
      groupId: 'string',
      parentFolderId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCdsFileResponseBody extends $tea.Model {
  code?: string;
  copyCdsFileModel?: CopyCdsFileResponseBodyCopyCdsFileModel;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      copyCdsFileModel: 'CopyCdsFileModel',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      copyCdsFileModel: CopyCdsFileResponseBodyCopyCdsFileModel,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageRequest extends $tea.Model {
  destinationDescription?: string;
  destinationImageName?: string;
  destinationRegionId?: string;
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDescription: 'DestinationDescription',
      destinationImageName: 'DestinationImageName',
      destinationRegionId: 'DestinationRegionId',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDescription: 'string',
      destinationImageName: 'string',
      destinationRegionId: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  desktopAccessType?: string;
  directoryName?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  mfaEnabled?: boolean;
  regionId?: string;
  specification?: number;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryName: 'DirectoryName',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      mfaEnabled: 'MfaEnabled',
      regionId: 'RegionId',
      specification: 'Specification',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryName: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      mfaEnabled: 'boolean',
      regionId: 'string',
      specification: 'number',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBody extends $tea.Model {
  adConnectors?: CreateADConnectorDirectoryResponseBodyAdConnectors[];
  directoryId?: string;
  requestId?: string;
  trustPassword?: string;
  static names(): { [key: string]: string } {
    return {
      adConnectors: 'AdConnectors',
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
      trustPassword: 'TrustPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adConnectors: { 'type': 'array', 'itemType': CreateADConnectorDirectoryResponseBodyAdConnectors },
      directoryId: 'string',
      requestId: 'string',
      trustPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateADConnectorDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteRequest extends $tea.Model {
  adHostname?: string;
  bandwidth?: number;
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  desktopAccessType?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  mfaEnabled?: boolean;
  officeSiteName?: string;
  protocolType?: string;
  regionId?: string;
  specification?: number;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      desktopAccessType: 'DesktopAccessType',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      mfaEnabled: 'MfaEnabled',
      officeSiteName: 'OfficeSiteName',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      specification: 'Specification',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      desktopAccessType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      mfaEnabled: 'boolean',
      officeSiteName: 'string',
      protocolType: 'string',
      regionId: 'string',
      specification: 'number',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponseBody extends $tea.Model {
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateADConnectorOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndBindNasFileSystemRequest extends $tea.Model {
  description?: string;
  desktopGroupId?: string;
  encryptType?: number;
  endUserIds?: string[];
  fileSystemName?: string;
  officeSiteId?: string;
  regionId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopGroupId: 'DesktopGroupId',
      encryptType: 'EncryptType',
      endUserIds: 'EndUserIds',
      fileSystemName: 'FileSystemName',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopGroupId: 'string',
      encryptType: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      fileSystemName: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndBindNasFileSystemResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndBindNasFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAndBindNasFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAndBindNasFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyRequest extends $tea.Model {
  cronExpression?: string;
  policyName?: string;
  regionId?: string;
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      policyName: 'string',
      regionId: 'string',
      retentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponseBody extends $tea.Model {
  policyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleRequest extends $tea.Model {
  bundleName?: string;
  description?: string;
  desktopType?: string;
  imageId?: string;
  language?: string;
  regionId?: string;
  rootDiskPerformanceLevel?: string;
  rootDiskSizeGib?: number;
  userDiskPerformanceLevel?: string;
  userDiskSizeGib?: number[];
  static names(): { [key: string]: string } {
    return {
      bundleName: 'BundleName',
      description: 'Description',
      desktopType: 'DesktopType',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleName: 'string',
      description: 'string',
      desktopType: 'string',
      imageId: 'string',
      language: 'string',
      regionId: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleResponseBody extends $tea.Model {
  bundleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileRequest extends $tea.Model {
  cdsId?: string;
  conflictPolicy?: string;
  endUserId?: string;
  fileHash?: string;
  fileLength?: number;
  fileName?: string;
  fileType?: string;
  groupId?: string;
  parentFileId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      conflictPolicy: 'ConflictPolicy',
      endUserId: 'EndUserId',
      fileHash: 'FileHash',
      fileLength: 'FileLength',
      fileName: 'FileName',
      fileType: 'FileType',
      groupId: 'GroupId',
      parentFileId: 'ParentFileId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileHash: 'string',
      fileLength: 'number',
      fileName: 'string',
      fileType: 'string',
      groupId: 'string',
      parentFileId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileResponseBody extends $tea.Model {
  fileModel?: CreateCdsFileResponseBodyFileModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileModel: 'FileModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileModel: CreateCdsFileResponseBodyFileModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileShareLinkRequest extends $tea.Model {
  cdsId?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadLimit?: number;
  endUserId?: string;
  expiration?: string;
  fileIds?: string[];
  groupId?: string;
  previewLimit?: number;
  saveLimit?: number;
  shareName?: string;
  sharePwd?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadLimit: 'DownloadLimit',
      endUserId: 'EndUserId',
      expiration: 'Expiration',
      fileIds: 'FileIds',
      groupId: 'GroupId',
      previewLimit: 'PreviewLimit',
      saveLimit: 'SaveLimit',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadLimit: 'number',
      endUserId: 'string',
      expiration: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      previewLimit: 'number',
      saveLimit: 'number',
      shareName: 'string',
      sharePwd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileShareLinkResponseBody extends $tea.Model {
  code?: string;
  data?: CdsFileShareLinkModel;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CdsFileShareLinkModel,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileShareLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCdsFileShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCdsFileShareLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  bizType?: number;
  cdsChargeType?: string;
  cenId?: string;
  domainName?: string;
  endUserId?: string[];
  maxSize?: number;
  name?: string;
  officeSiteId?: string;
  officeSiteType?: string;
  period?: number;
  periodUnit?: string;
  regionId?: string;
  solutionId?: string;
  userCount?: number;
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizType: 'BizType',
      cdsChargeType: 'CdsChargeType',
      cenId: 'CenId',
      domainName: 'DomainName',
      endUserId: 'EndUserId',
      maxSize: 'MaxSize',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      solutionId: 'SolutionId',
      userCount: 'UserCount',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizType: 'number',
      cdsChargeType: 'string',
      cenId: 'string',
      domainName: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxSize: 'number',
      name: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      solutionId: 'string',
      userCount: 'number',
      userMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBody extends $tea.Model {
  cdsId?: string;
  cdsName?: string;
  cenId?: string;
  conflictCdsAndOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder;
  domainName?: string;
  errorCode?: string;
  maxSize?: string;
  officeSiteType?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      cdsName: 'CdsName',
      cenId: 'CenId',
      conflictCdsAndOrder: 'ConflictCdsAndOrder',
      domainName: 'DomainName',
      errorCode: 'ErrorCode',
      maxSize: 'MaxSize',
      officeSiteType: 'OfficeSiteType',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      cdsName: 'string',
      cenId: 'string',
      conflictCdsAndOrder: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder,
      domainName: 'string',
      errorCode: 'string',
      maxSize: 'string',
      officeSiteType: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCloudDriveServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCloudDriveServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveUsersRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string[];
  regionId?: string;
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      userMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveUsersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCloudDriveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCloudDriveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupRequest extends $tea.Model {
  allClassifyUsers?: boolean;
  allowAutoSetup?: number;
  allowBufferCount?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  bindAmount?: number;
  bundleId?: string;
  buyDesktopsCount?: number;
  chargeType?: string;
  classify?: string;
  clientToken?: string;
  comments?: string;
  connectDuration?: number;
  defaultInitDesktopCount?: number;
  desktopGroupName?: string;
  directoryId?: string;
  endUserIds?: string[];
  fileSystemId?: string;
  groupVersion?: number;
  idleDisconnectDuration?: number;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  minDesktopsCount?: number;
  officeSiteId?: string;
  ownType?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  profileFollowSwitch?: boolean;
  ratioThreshold?: number;
  regionId?: string;
  resetType?: number;
  scaleStrategyId?: string;
  stopDuration?: number;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allClassifyUsers: 'AllClassifyUsers',
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bindAmount: 'BindAmount',
      bundleId: 'BundleId',
      buyDesktopsCount: 'BuyDesktopsCount',
      chargeType: 'ChargeType',
      classify: 'Classify',
      clientToken: 'ClientToken',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      defaultInitDesktopCount: 'DefaultInitDesktopCount',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      endUserIds: 'EndUserIds',
      fileSystemId: 'FileSystemId',
      groupVersion: 'GroupVersion',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      profileFollowSwitch: 'ProfileFollowSwitch',
      ratioThreshold: 'RatioThreshold',
      regionId: 'RegionId',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
      stopDuration: 'StopDuration',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allClassifyUsers: 'boolean',
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bindAmount: 'number',
      bundleId: 'string',
      buyDesktopsCount: 'number',
      chargeType: 'string',
      classify: 'string',
      clientToken: 'string',
      comments: 'string',
      connectDuration: 'number',
      defaultInitDesktopCount: 'number',
      desktopGroupName: 'string',
      directoryId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      fileSystemId: 'string',
      groupVersion: 'number',
      idleDisconnectDuration: 'number',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      profileFollowSwitch: 'boolean',
      ratioThreshold: 'number',
      regionId: 'string',
      resetType: 'number',
      scaleStrategyId: 'string',
      stopDuration: 'number',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponseBody extends $tea.Model {
  desktopGroupId?: string;
  orderIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      orderIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopOversoldGroupRequest extends $tea.Model {
  concurrenceCount?: number;
  dataDiskSize?: number;
  description?: string;
  desktopType?: string;
  directoryId?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  name?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  stopDuration?: number;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      stopDuration: 'StopDuration',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      dataDiskSize: 'number',
      description: 'string',
      desktopType: 'string',
      directoryId: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      name: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      stopDuration: 'number',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopOversoldGroupResponseBody extends $tea.Model {
  data?: CreateDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDesktopOversoldGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequest extends $tea.Model {
  amount?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  bundleId?: string;
  bundleModels?: CreateDesktopsRequestBundleModels[];
  chargeType?: string;
  desktopMemberIp?: string;
  desktopName?: string;
  desktopNameSuffix?: boolean;
  desktopTimers?: CreateDesktopsRequestDesktopTimers[];
  directoryId?: string;
  endUserId?: string[];
  groupId?: string;
  hostname?: string;
  officeSiteId?: string;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  promotionId?: string;
  regionId?: string;
  tag?: CreateDesktopsRequestTag[];
  userAssignMode?: string;
  userCommands?: CreateDesktopsRequestUserCommands[];
  userName?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bundleId: 'BundleId',
      bundleModels: 'BundleModels',
      chargeType: 'ChargeType',
      desktopMemberIp: 'DesktopMemberIp',
      desktopName: 'DesktopName',
      desktopNameSuffix: 'DesktopNameSuffix',
      desktopTimers: 'DesktopTimers',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      groupId: 'GroupId',
      hostname: 'Hostname',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      tag: 'Tag',
      userAssignMode: 'UserAssignMode',
      userCommands: 'UserCommands',
      userName: 'UserName',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bundleId: 'string',
      bundleModels: { 'type': 'array', 'itemType': CreateDesktopsRequestBundleModels },
      chargeType: 'string',
      desktopMemberIp: 'string',
      desktopName: 'string',
      desktopNameSuffix: 'boolean',
      desktopTimers: { 'type': 'array', 'itemType': CreateDesktopsRequestDesktopTimers },
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      hostname: 'string',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
      userAssignMode: 'string',
      userCommands: { 'type': 'array', 'itemType': CreateDesktopsRequestUserCommands },
      userName: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponseBody extends $tea.Model {
  desktopId?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskEncryptionServiceRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskEncryptionServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskEncryptionServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiskEncryptionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDiskEncryptionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  autoCleanUserdata?: boolean;
  description?: string;
  desktopId?: string;
  diskType?: string;
  imageName?: string;
  imageResourceType?: string;
  regionId?: string;
  snapshotId?: string;
  snapshotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoCleanUserdata: 'AutoCleanUserdata',
      description: 'Description',
      desktopId: 'DesktopId',
      diskType: 'DiskType',
      imageName: 'ImageName',
      imageResourceType: 'ImageResourceType',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanUserdata: 'boolean',
      description: 'string',
      desktopId: 'string',
      diskType: 'string',
      imageName: 'string',
      imageResourceType: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemRequest extends $tea.Model {
  description?: string;
  encryptType?: string;
  name?: string;
  officeSiteId?: string;
  regionId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      name: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemResponseBody extends $tea.Model {
  fileSystemId?: string;
  fileSystemName?: string;
  mountTargetDomain?: string;
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      mountTargetDomain: 'MountTargetDomain',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemName: 'string',
      mountTargetDomain: 'string',
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNASFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNASFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  bandwidth?: number;
  internetChargeType?: string;
  officeSiteId?: string;
  payType?: string;
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      officeSiteId: 'OfficeSiteId',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidth: 'number',
      internetChargeType: 'string',
      officeSiteId: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponseBody extends $tea.Model {
  networkPackageId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequest extends $tea.Model {
  adminAccess?: string;
  appContentProtection?: string;
  authorizeAccessPolicyRule?: CreatePolicyGroupRequestAuthorizeAccessPolicyRule[];
  authorizeSecurityPolicyRule?: CreatePolicyGroupRequestAuthorizeSecurityPolicyRule[];
  cameraRedirect?: string;
  clientType?: CreatePolicyGroupRequestClientType[];
  clipboard?: string;
  domainList?: string;
  domainResolveRule?: CreatePolicyGroupRequestDomainResolveRule[];
  domainResolveRuleType?: string;
  endUserApplyAdminCoordinate?: string;
  endUserGroupCoordinate?: string;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  internetCommunicationProtocol?: string;
  localDrive?: string;
  name?: string;
  netRedirect?: string;
  preemptLogin?: string;
  preemptLoginUser?: string[];
  printerRedirection?: string;
  recordContent?: string;
  recordContentExpires?: number;
  recording?: string;
  recordingAudio?: string;
  recordingDuration?: number;
  recordingEndTime?: string;
  recordingExpires?: number;
  recordingFps?: number;
  recordingStartTime?: string;
  recordingUserNotify?: string;
  recordingUserNotifyMessage?: string;
  regionId?: string;
  remoteCoordinate?: string;
  scope?: string;
  scopeValue?: string[];
  usbRedirect?: string;
  usbSupplyRedirectRule?: CreatePolicyGroupRequestUsbSupplyRedirectRule[];
  videoRedirect?: string;
  visualQuality?: string;
  watermark?: string;
  watermarkAntiCam?: string;
  watermarkColor?: number;
  watermarkDegree?: number;
  watermarkFontSize?: number;
  watermarkFontStyle?: string;
  watermarkPower?: string;
  watermarkRowAmount?: number;
  watermarkSecurity?: string;
  watermarkTransparency?: string;
  watermarkTransparencyValue?: number;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      localDrive: 'LocalDrive',
      name: 'Name',
      netRedirect: 'NetRedirect',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      regionId: 'RegionId',
      remoteCoordinate: 'RemoteCoordinate',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': CreatePolicyGroupRequestClientType },
      clipboard: 'string',
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      localDrive: 'string',
      name: 'string',
      netRedirect: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      regionId: 'string',
      remoteCoordinate: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestUsbSupplyRedirectRule },
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponseBody extends $tea.Model {
  policyGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryRequest extends $tea.Model {
  desktopAccessType?: string;
  directoryName?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  regionId?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryName: 'DirectoryName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      regionId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryResponseBody extends $tea.Model {
  directoryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRAMDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRAMDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteRequest extends $tea.Model {
  bandwidth?: number;
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  cloudBoxOfficeSite?: boolean;
  desktopAccessType?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  needVerifyZeroDevice?: boolean;
  officeSiteName?: string;
  regionId?: string;
  vSwitchId?: string[];
  verifyCode?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      desktopAccessType: 'DesktopAccessType',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      verifyCode: 'VerifyCode',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      cloudBoxOfficeSite: 'boolean',
      desktopAccessType: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteName: 'string',
      regionId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      verifyCode: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteResponseBody extends $tea.Model {
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSimpleOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSimpleOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  description?: string;
  desktopId?: string;
  regionId?: string;
  snapshotName?: string;
  sourceDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      snapshotName: 'SnapshotName',
      sourceDiskType: 'SourceDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopId: 'string',
      regionId: 'string',
      snapshotName: 'string',
      sourceDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyRequest extends $tea.Model {
  policyId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesRequest extends $tea.Model {
  bundleId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBundlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdsFileRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdsFileResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveGroupsRequest extends $tea.Model {
  cdsId?: string;
  groupId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCloudDriveGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCloudDriveGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveUsersRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveUsersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudDriveUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCloudDriveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCloudDriveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesRequest extends $tea.Model {
  clientType?: number;
  deviceIds?: string[];
  force?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      deviceIds: 'DeviceIds',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      force: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesRequest extends $tea.Model {
  directoryId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEduRoomRequest extends $tea.Model {
  eduRoomId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eduRoomId: 'EduRoomId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eduRoomId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEduRoomResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEduRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEduRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEduRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesRequest extends $tea.Model {
  deleteCascadedBundle?: boolean;
  imageId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteCascadedBundle: 'DeleteCascadedBundle',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCascadedBundle: 'boolean',
      imageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsRequest extends $tea.Model {
  fileSystemId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNASFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesRequest extends $tea.Model {
  networkPackageId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesRequest extends $tea.Model {
  officeSiteId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsRequest extends $tea.Model {
  policyGroupId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  regionId?: string;
  snapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclEntriesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  sourceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclEntriesResponseBody extends $tea.Model {
  aclEntries?: DescribeAclEntriesResponseBodyAclEntries[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': DescribeAclEntriesResponseBodyAclEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAclEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyResponseBody extends $tea.Model {
  autoSnapshotPolicies?: DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesRequest extends $tea.Model {
  bundleId?: string[];
  bundleType?: string;
  checkStock?: boolean;
  cpuCount?: number;
  desktopTypeFamily?: string;
  fotaChannel?: string;
  fromDesktopGroup?: boolean;
  gpuCount?: number;
  imageId?: string[];
  maxResults?: number;
  memorySize?: number;
  nextToken?: string;
  osType?: string;
  protocolType?: string;
  regionId?: string;
  scope?: string;
  selectedBundle?: boolean;
  sessionType?: string;
  supportMultiSession?: boolean;
  volumeEncryptionEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleType: 'BundleType',
      checkStock: 'CheckStock',
      cpuCount: 'CpuCount',
      desktopTypeFamily: 'DesktopTypeFamily',
      fotaChannel: 'FotaChannel',
      fromDesktopGroup: 'FromDesktopGroup',
      gpuCount: 'GpuCount',
      imageId: 'ImageId',
      maxResults: 'MaxResults',
      memorySize: 'MemorySize',
      nextToken: 'NextToken',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      scope: 'Scope',
      selectedBundle: 'SelectedBundle',
      sessionType: 'SessionType',
      supportMultiSession: 'SupportMultiSession',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      bundleType: 'string',
      checkStock: 'boolean',
      cpuCount: 'number',
      desktopTypeFamily: 'string',
      fotaChannel: 'string',
      fromDesktopGroup: 'boolean',
      gpuCount: 'number',
      imageId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      memorySize: 'number',
      nextToken: 'string',
      osType: 'string',
      protocolType: 'string',
      regionId: 'string',
      scope: 'string',
      selectedBundle: 'boolean',
      sessionType: 'string',
      supportMultiSession: 'boolean',
      volumeEncryptionEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBody extends $tea.Model {
  bundles?: DescribeBundlesResponseBodyBundles[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundles: 'Bundles',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundles },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBundlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdsFileShareLinksRequest extends $tea.Model {
  cdsId?: string;
  creators?: string[];
  maxResults?: number;
  nextToken?: string;
  shareId?: string;
  shareName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      creators: 'Creators',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      shareId: 'ShareId',
      shareName: 'ShareName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      creators: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      shareId: 'string',
      shareName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdsFileShareLinksResponseBody extends $tea.Model {
  code?: string;
  data?: CdsFileShareLinkModel[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CdsFileShareLinkModel },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdsFileShareLinksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCdsFileShareLinksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdsFileShareLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  cens?: DescribeCensResponseBodyCens[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cens: 'Cens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cens: { 'type': 'array', 'itemType': DescribeCensResponseBodyCens },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsRequest extends $tea.Model {
  desktopId?: string;
  desktopIp?: string;
  desktopName?: string;
  directoryId?: string;
  endTime?: string;
  endUserId?: string;
  eventType?: string;
  eventTypes?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      eventType: 'EventType',
      eventTypes: 'EventTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      endTime: 'string',
      endUserId: 'string',
      eventType: 'string',
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBody extends $tea.Model {
  events?: DescribeClientEventsResponseBodyEvents[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClientEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsRequest extends $tea.Model {
  cdsId?: string;
  directoryId?: string;
  directoryName?: string;
  driveStatus?: string;
  driveType?: string;
  groupId?: string[];
  groupName?: string;
  groupType?: string;
  maxResults?: number;
  nextToken?: string;
  parentGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      driveStatus: 'DriveStatus',
      driveType: 'DriveType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentGroupId: 'ParentGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      directoryId: 'string',
      directoryName: 'string',
      driveStatus: 'string',
      driveType: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      groupType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsResponseBody extends $tea.Model {
  cloudDriveGroups?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroups[];
  count?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cloudDriveGroups: 'CloudDriveGroups',
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDriveGroups: { 'type': 'array', 'itemType': DescribeCloudDriveGroupsResponseBodyCloudDriveGroups },
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudDriveGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudDriveGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDrivePermissionsRequest extends $tea.Model {
  cdsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDrivePermissionsResponseBody extends $tea.Model {
  cloudDrivePermissionModels?: DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudDrivePermissionModels: 'CloudDrivePermissionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDrivePermissionModels: { 'type': 'array', 'itemType': DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDrivePermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudDrivePermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudDrivePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveUsersRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveUsersResponseBody extends $tea.Model {
  cloudDriveUsers?: DescribeCloudDriveUsersResponseBodyCloudDriveUsers[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudDriveUsers: 'CloudDriveUsers',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDriveUsers: { 'type': 'array', 'itemType': DescribeCloudDriveUsersResponseBodyCloudDriveUsers },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudDriveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudDriveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedListHeadersRequest extends $tea.Model {
  langType?: string;
  listType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      langType: 'LangType',
      listType: 'ListType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      langType: 'string',
      listType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedListHeadersResponseBody extends $tea.Model {
  headers?: DescribeCustomizedListHeadersResponseBodyHeaders[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': DescribeCustomizedListHeadersResponseBodyHeaders },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedListHeadersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomizedListHeadersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomizedListHeadersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupSessionsRequest extends $tea.Model {
  endTime?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  ownType?: number;
  regionId?: string;
  sessionStatus?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownType: 'OwnType',
      regionId: 'RegionId',
      sessionStatus: 'SessionStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownType: 'number',
      regionId: 'string',
      sessionStatus: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupSessionsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  sessions?: DescribeDesktopGroupSessionsResponseBodySessions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopGroupSessionsResponseBodySessions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupSessionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopGroupSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopGroupSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsRequest extends $tea.Model {
  bundleId?: string[];
  desktopGroupId?: string;
  desktopGroupName?: string;
  endUserIds?: string[];
  excludedEndUserIds?: string[];
  imageId?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  ownType?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  protocolType?: string;
  regionId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserIds: 'EndUserIds',
      excludedEndUserIds: 'ExcludedEndUserIds',
      imageId: 'ImageId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserIds: { 'type': 'array', 'itemType': 'string' },
      imageId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      regionId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBody extends $tea.Model {
  desktopGroups?: DescribeDesktopGroupsResponseBodyDesktopGroups[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroups: 'DesktopGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroups: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopInfoRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopInfoResponseBody extends $tea.Model {
  desktops?: DescribeDesktopInfoResponseBodyDesktops[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopInfoResponseBodyDesktops },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldGroupRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  oversoldGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupIds: 'OversoldGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldGroupResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeDesktopOversoldGroupResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeDesktopOversoldGroupResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserRequest extends $tea.Model {
  clientToken?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  oversoldGroupId?: string;
  userDesktopIds?: string[];
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupId: 'OversoldGroupId',
      userDesktopIds: 'UserDesktopIds',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupId: 'string',
      userDesktopIds: { 'type': 'array', 'itemType': 'string' },
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeDesktopOversoldUserResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeDesktopOversoldUserResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopOversoldUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopOversoldUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserGroupRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  oversoldGroupId?: string;
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupId: 'OversoldGroupId',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserGroupResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeDesktopOversoldUserGroupResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeDesktopOversoldUserGroupResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopOversoldUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopOversoldUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsRequest extends $tea.Model {
  desktopId?: string[];
  desktopName?: string;
  endTime?: string;
  endUserId?: string;
  officeSiteId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sessionStatus?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sessionStatus: 'SessionStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sessionStatus: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsResponseBody extends $tea.Model {
  requestId?: string;
  sessions?: DescribeDesktopSessionsResponseBodySessions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopSessionsResponseBodySessions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesRequest extends $tea.Model {
  appliedScope?: string;
  cpuCount?: number;
  desktopGroupIdForModify?: string;
  desktopIdForModify?: string;
  desktopTypeId?: string;
  gpuCount?: number;
  instanceTypeFamily?: string;
  memorySize?: number;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedScope: 'AppliedScope',
      cpuCount: 'CpuCount',
      desktopGroupIdForModify: 'DesktopGroupIdForModify',
      desktopIdForModify: 'DesktopIdForModify',
      desktopTypeId: 'DesktopTypeId',
      gpuCount: 'GpuCount',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedScope: 'string',
      cpuCount: 'number',
      desktopGroupIdForModify: 'string',
      desktopIdForModify: 'string',
      desktopTypeId: 'string',
      gpuCount: 'number',
      instanceTypeFamily: 'string',
      memorySize: 'number',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBody extends $tea.Model {
  desktopTypes?: DescribeDesktopTypesResponseBodyDesktopTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopTypes: 'DesktopTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $tea.Model {
  chargeType?: string;
  desktopGroupId?: string;
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  desktopStatusList?: string[];
  desktopType?: string;
  directoryId?: string;
  endUserId?: string[];
  excludedEndUserId?: string[];
  expiredTime?: string;
  filterDesktopGroup?: boolean;
  groupId?: string;
  imageId?: string[];
  managementFlag?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  onlyDesktopGroup?: boolean;
  osTypes?: string[];
  policyGroupId?: string;
  protocolType?: string;
  queryFotaUpdate?: boolean;
  regionId?: string;
  snapshotPolicyId?: string;
  tag?: DescribeDesktopsRequestTag[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopStatusList: 'DesktopStatusList',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      excludedEndUserId: 'ExcludedEndUserId',
      expiredTime: 'ExpiredTime',
      filterDesktopGroup: 'FilterDesktopGroup',
      groupId: 'GroupId',
      imageId: 'ImageId',
      managementFlag: 'ManagementFlag',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      onlyDesktopGroup: 'OnlyDesktopGroup',
      osTypes: 'OsTypes',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      snapshotPolicyId: 'SnapshotPolicyId',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopGroupId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      desktopStatusList: { 'type': 'array', 'itemType': 'string' },
      desktopType: 'string',
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      filterDesktopGroup: 'boolean',
      groupId: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      managementFlag: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      onlyDesktopGroup: 'boolean',
      osTypes: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      protocolType: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      snapshotPolicyId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDesktopsRequestTag },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBody extends $tea.Model {
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  ignoreDeleted?: boolean;
  maxResults?: number;
  nextToken?: string;
  payType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      ignoreDeleted: 'IgnoreDeleted',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      ignoreDeleted: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBody extends $tea.Model {
  nextToken?: string;
  onlinePrePaidDesktopsCount?: number;
  paidDesktops?: DescribeDesktopsInGroupResponseBodyPaidDesktops[];
  paidDesktopsCount?: number;
  postPaidDesktops?: DescribeDesktopsInGroupResponseBodyPostPaidDesktops[];
  postPaidDesktopsCount?: number;
  postPaidDesktopsTotalAmount?: number;
  requestId?: string;
  runningPrePaidDesktopsCount?: number;
  stopedPrePaidDesktopsCount?: number;
  stoppedPrePaidDesktopsCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      onlinePrePaidDesktopsCount: 'OnlinePrePaidDesktopsCount',
      paidDesktops: 'PaidDesktops',
      paidDesktopsCount: 'PaidDesktopsCount',
      postPaidDesktops: 'PostPaidDesktops',
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      requestId: 'RequestId',
      runningPrePaidDesktopsCount: 'RunningPrePaidDesktopsCount',
      stopedPrePaidDesktopsCount: 'StopedPrePaidDesktopsCount',
      stoppedPrePaidDesktopsCount: 'StoppedPrePaidDesktopsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      onlinePrePaidDesktopsCount: 'number',
      paidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPaidDesktops },
      paidDesktopsCount: 'number',
      postPaidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPostPaidDesktops },
      postPaidDesktopsCount: 'number',
      postPaidDesktopsTotalAmount: 'number',
      requestId: 'string',
      runningPrePaidDesktopsCount: 'number',
      stopedPrePaidDesktopsCount: 'number',
      stoppedPrePaidDesktopsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopsInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopsInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  adDomain?: string;
  clientType?: string;
  deviceId?: string;
  directoryId?: string;
  endUserId?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      clientType: 'ClientType',
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      clientType: 'string',
      deviceId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $tea.Model {
  devices?: DescribeDevicesResponseBodyDevices[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  directoryId?: string[];
  directoryStatus?: string;
  directoryType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryStatus: 'DirectoryStatus',
      directoryType: 'DirectoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      directoryStatus: 'string',
      directoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  adHostname?: string;
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  instanceType?: string;
  metricType?: string;
  period?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      metricType: 'MetricType',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      metricType: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticRequest extends $tea.Model {
  desktopId?: string;
  officeSiteId?: string;
  pageNumber?: number;
  pageSize?: number;
  period?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      period: 'Period',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      period: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponseBody extends $tea.Model {
  desktopCount?: number;
  desktopFlowStatistic?: DescribeFlowStatisticResponseBodyDesktopFlowStatistic[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      desktopFlowStatistic: 'DesktopFlowStatistic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopCount: 'number',
      desktopFlowStatistic: { 'type': 'array', 'itemType': DescribeFlowStatisticResponseBodyDesktopFlowStatistic },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsRequest extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponseBody extends $tea.Model {
  code?: string;
  fotaPendingDesktops?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaPendingDesktops: 'FotaPendingDesktops',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaPendingDesktops: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFotaPendingDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFotaPendingDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksRequest extends $tea.Model {
  fotaStatus?: string;
  lang?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskUid?: string[];
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fotaStatus: 'FotaStatus',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fotaStatus: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskUid: { 'type': 'array', 'itemType': 'string' },
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponseBody extends $tea.Model {
  code?: string;
  fotaTasks?: DescribeFotaTasksResponseBodyFotaTasks[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaTasks: 'FotaTasks',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaTasks: { 'type': 'array', 'itemType': DescribeFotaTasksResponseBodyFotaTasks },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFotaTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFotaTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsRequest extends $tea.Model {
  desktopId?: string;
  endUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponseBody extends $tea.Model {
  applications?: DescribeGuestApplicationsResponseBodyApplications[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': DescribeGuestApplicationsResponseBodyApplications },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGuestApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGuestApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsRequest extends $tea.Model {
  desktopId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponseBody extends $tea.Model {
  imageModifiedRecords?: DescribeImageModifiedRecordsResponseBodyImageModifiedRecords[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageModifiedRecords: 'ImageModifiedRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageModifiedRecords: { 'type': 'array', 'itemType': DescribeImageModifiedRecordsResponseBodyImageModifiedRecords },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageModifiedRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageModifiedRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionRequest extends $tea.Model {
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionResponseBody extends $tea.Model {
  aliUids?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUids: 'AliUids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUids: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImagePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImagePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  desktopInstanceType?: string;
  fotaVersion?: string;
  gpuCategory?: boolean;
  gpuDriverVersion?: string;
  imageId?: string[];
  imageName?: string;
  imageStatus?: string;
  imageType?: string;
  languageType?: string;
  maxResults?: number;
  nextToken?: string;
  osType?: string;
  protocolType?: string;
  regionId?: string;
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopInstanceType: 'DesktopInstanceType',
      fotaVersion: 'FotaVersion',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageStatus: 'ImageStatus',
      imageType: 'ImageType',
      languageType: 'LanguageType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      sessionType: 'SessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopInstanceType: 'string',
      fotaVersion: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      imageName: 'string',
      imageStatus: 'string',
      imageType: 'string',
      languageType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      protocolType: 'string',
      regionId: 'string',
      sessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $tea.Model {
  images?: DescribeImagesResponseBodyImages[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  commandType?: string;
  contentEncoding?: string;
  desktopId?: string;
  desktopIds?: string[];
  endUserId?: string;
  includeOutput?: boolean;
  invokeId?: string;
  invokeStatus?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      desktopIds: 'DesktopIds',
      endUserId: 'EndUserId',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      contentEncoding: 'string',
      desktopId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      includeOutput: 'boolean',
      invokeId: 'string',
      invokeStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBody extends $tea.Model {
  authorizeStatus?: string;
  keys?: DescribeKmsKeysResponseBodyKeys[];
  kmsServiceStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeStatus: 'AuthorizeStatus',
      keys: 'Keys',
      kmsServiceStatus: 'KmsServiceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeStatus: 'string',
      keys: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKeys },
      kmsServiceStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKmsKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKmsKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsRequest extends $tea.Model {
  fileSystemId?: string[];
  matchCompatibleProfile?: boolean;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      matchCompatibleProfile: 'MatchCompatibleProfile',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      matchCompatibleProfile: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBody extends $tea.Model {
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNASFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesRequest extends $tea.Model {
  internetChargeType?: string;
  maxResults?: number;
  networkPackageId?: string[];
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      networkPackageId: 'NetworkPackageId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      maxResults: 'number',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBody extends $tea.Model {
  networkPackages?: DescribeNetworkPackagesResponseBodyNetworkPackages[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackages: 'NetworkPackages',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackages: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  officeSiteType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      officeSiteType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $tea.Model {
  nextToken?: string;
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  policyGroupId?: string[];
  regionId?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBody extends $tea.Model {
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describePolicyGroups: 'DescribePolicyGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  amount?: number;
  bandwidth?: number;
  bundleModels?: DescribePriceRequestBundleModels[];
  eduCdsEnable?: string;
  eduCdsSize?: number;
  eduCommittedTime?: number;
  eduDesktopBundleId?: string;
  eduDesktopNum?: number;
  eduRoomClassify?: string;
  eduStudentBundleId?: string;
  eduStudentNum?: number;
  eduTeacherBundleId?: string;
  eduTeacherNum?: number;
  groupDesktopCount?: number;
  hardwareVersion?: string;
  instanceType?: string;
  internetChargeType?: string;
  networkType?: string;
  osType?: string;
  packageSize?: number;
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  resourceType?: string;
  rootDiskPerformanceLevel?: string;
  rootDiskSizeGib?: number;
  spPeriodInfo?: string;
  spPrice?: boolean;
  spType?: string;
  userDiskPerformanceLevel?: string;
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bandwidth: 'Bandwidth',
      bundleModels: 'BundleModels',
      eduCdsEnable: 'EduCdsEnable',
      eduCdsSize: 'EduCdsSize',
      eduCommittedTime: 'EduCommittedTime',
      eduDesktopBundleId: 'EduDesktopBundleId',
      eduDesktopNum: 'EduDesktopNum',
      eduRoomClassify: 'EduRoomClassify',
      eduStudentBundleId: 'EduStudentBundleId',
      eduStudentNum: 'EduStudentNum',
      eduTeacherBundleId: 'EduTeacherBundleId',
      eduTeacherNum: 'EduTeacherNum',
      groupDesktopCount: 'GroupDesktopCount',
      hardwareVersion: 'HardwareVersion',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      networkType: 'NetworkType',
      osType: 'OsType',
      packageSize: 'PackageSize',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      spPeriodInfo: 'SpPeriodInfo',
      spPrice: 'SpPrice',
      spType: 'SpType',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bandwidth: 'number',
      bundleModels: { 'type': 'array', 'itemType': DescribePriceRequestBundleModels },
      eduCdsEnable: 'string',
      eduCdsSize: 'number',
      eduCommittedTime: 'number',
      eduDesktopBundleId: 'string',
      eduDesktopNum: 'number',
      eduRoomClassify: 'string',
      eduStudentBundleId: 'string',
      eduStudentNum: 'number',
      eduTeacherBundleId: 'string',
      eduTeacherNum: 'number',
      groupDesktopCount: 'number',
      hardwareVersion: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      networkType: 'string',
      osType: 'string',
      packageSize: 'number',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resourceType: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      spPeriodInfo: 'string',
      spPrice: 'boolean',
      spType: 'string',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForCreateDesktopOversoldGroupRequest extends $tea.Model {
  concurrenceCount?: number;
  dataDiskSize?: number;
  desktopType?: string;
  oversoldUserCount?: number;
  period?: number;
  periodUnit?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      desktopType: 'DesktopType',
      oversoldUserCount: 'OversoldUserCount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      dataDiskSize: 'number',
      desktopType: 'string',
      oversoldUserCount: 'number',
      period: 'number',
      periodUnit: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForCreateDesktopOversoldGroupResponseBody extends $tea.Model {
  data?: DescribePriceForCreateDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePriceForCreateDesktopOversoldGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForCreateDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceForCreateDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceForCreateDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForModifyDesktopOversoldGroupSaleRequest extends $tea.Model {
  concurrenceCount?: number;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForModifyDesktopOversoldGroupSaleResponseBody extends $tea.Model {
  data?: DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForModifyDesktopOversoldGroupSaleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceForModifyDesktopOversoldGroupSaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceForModifyDesktopOversoldGroupSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForRenewDesktopOversoldGroupRequest extends $tea.Model {
  oversoldGroupId?: string;
  period?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldGroupId: 'OversoldGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForRenewDesktopOversoldGroupResponseBody extends $tea.Model {
  data?: DescribePriceForRenewDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePriceForRenewDesktopOversoldGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForRenewDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceForRenewDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceForRenewDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsRequest extends $tea.Model {
  desktopId?: string;
  endTime?: string;
  maxResults?: number;
  needSignedUrl?: boolean;
  nextToken?: string;
  policyGroupId?: string;
  regionId?: string;
  signedUrlExpireMinutes?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      needSignedUrl: 'NeedSignedUrl',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      signedUrlExpireMinutes: 'SignedUrlExpireMinutes',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endTime: 'string',
      maxResults: 'number',
      needSignedUrl: 'boolean',
      nextToken: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      signedUrlExpireMinutes: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponseBody extends $tea.Model {
  nextToken?: string;
  recordings?: DescribeRecordingsResponseBodyRecordings[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      recordings: 'Recordings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      recordings: { 'type': 'array', 'itemType': DescribeRecordingsResponseBodyRecordings },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionStatisticRequest extends $tea.Model {
  endTime?: string;
  officeSiteId?: string;
  period?: number;
  regionId?: string;
  searchRegionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      officeSiteId: 'string',
      period: 'number',
      regionId: 'string',
      searchRegionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionStatisticResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSessionStatisticResponseBodyStatistic[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSessionStatisticResponseBodyStatistic },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSessionStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSessionStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  creator?: string;
  desktopId?: string;
  desktopName?: string;
  endTime?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceDiskType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskType: 'SourceDiskType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectTimeRequest extends $tea.Model {
  endTime?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  oversoldGroupId?: string;
  startTime?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupId: 'OversoldGroupId',
      startTime: 'StartTime',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupId: 'string',
      startTime: 'string',
      userDesktopId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectTimeResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeUserConnectTimeResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeUserConnectTimeResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserConnectTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserConnectTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsRequest extends $tea.Model {
  connectDurationFrom?: number;
  connectDurationTo?: number;
  connectEndTimeFrom?: number;
  connectEndTimeTo?: number;
  connectStartTimeFrom?: number;
  connectStartTimeTo?: number;
  desktopGroupId?: string;
  desktopId?: string;
  endUserId?: string;
  endUserType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectDurationFrom: 'ConnectDurationFrom',
      connectDurationTo: 'ConnectDurationTo',
      connectEndTimeFrom: 'ConnectEndTimeFrom',
      connectEndTimeTo: 'ConnectEndTimeTo',
      connectStartTimeFrom: 'ConnectStartTimeFrom',
      connectStartTimeTo: 'ConnectStartTimeTo',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      endUserType: 'EndUserType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDurationFrom: 'number',
      connectDurationTo: 'number',
      connectEndTimeFrom: 'number',
      connectEndTimeTo: 'number',
      connectStartTimeFrom: 'number',
      connectStartTimeTo: 'number',
      desktopGroupId: 'string',
      desktopId: 'string',
      endUserId: 'string',
      endUserType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBody extends $tea.Model {
  connectionRecords?: DescribeUserConnectionRecordsResponseBodyConnectionRecords[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionRecords: 'ConnectionRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionRecords: { 'type': 'array', 'itemType': DescribeUserConnectionRecordsResponseBodyConnectionRecords },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserConnectionRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserConnectionRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBody extends $tea.Model {
  requestId?: string;
  userProfilePathRule?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProfilePathRule: 'UserProfilePathRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProfilePathRule: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserProfilePathRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserProfilePathRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupRequest extends $tea.Model {
  connectState?: number;
  desktopGroupId?: string;
  endUserId?: string;
  endUserIds?: string[];
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  orgId?: string;
  queryUserDetail?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectState: 'ConnectState',
      desktopGroupId: 'DesktopGroupId',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      queryUserDetail: 'QueryUserDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectState: 'number',
      desktopGroupId: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      queryUserDetail: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBody extends $tea.Model {
  endUsers?: DescribeUsersInGroupResponseBodyEndUsers[];
  nextToken?: string;
  onlineUsersCount?: number;
  requestId?: string;
  usersCount?: number;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      nextToken: 'NextToken',
      onlineUsersCount: 'OnlineUsersCount',
      requestId: 'RequestId',
      usersCount: 'UsersCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsers },
      nextToken: 'string',
      onlineUsersCount: 'number',
      requestId: 'string',
      usersCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsersInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersPasswordRequest extends $tea.Model {
  desktopId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersPasswordResponseBody extends $tea.Model {
  desktopUsers?: DescribeUsersPasswordResponseBodyDesktopUsers[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopUsers: 'DesktopUsers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopUsers: { 'type': 'array', 'itemType': DescribeUsersPasswordResponseBodyDesktopUsers },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsersPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesRequest extends $tea.Model {
  endUserId?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  virtualMFADevices?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseBodyVirtualMFADevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualMFADevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualMFADevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUserRequest extends $tea.Model {
  adDomain?: string;
  clientType?: string;
  deviceId?: string;
  directoryId?: string;
  endUserId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      clientType: 'ClientType',
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      clientType: 'string',
      deviceId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEndUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDesktopsInGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopIds: 'DesktopIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDesktopsInGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDesktopsInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableDesktopsInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableDesktopsInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsRequest extends $tea.Model {
  preCheck?: boolean;
  regionId?: string;
  sessions?: DisconnectDesktopSessionsRequestSessions[];
  static names(): { [key: string]: string } {
    return {
      preCheck: 'PreCheck',
      regionId: 'RegionId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheck: 'boolean',
      regionId: 'string',
      sessions: { 'type': 'array', 'itemType': DisconnectDesktopSessionsRequestSessions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsResponseBody extends $tea.Model {
  invalidSessions?: DisconnectDesktopSessionsResponseBodyInvalidSessions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidSessions: 'InvalidSessions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidSessions: { 'type': 'array', 'itemType': DisconnectDesktopSessionsResponseBodyInvalidSessions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisconnectDesktopSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisconnectDesktopSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateNetworkPackageRequest extends $tea.Model {
  networkPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateNetworkPackageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateNetworkPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateNetworkPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsRequest extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  endTime?: string;
  endUserId?: string;
  eventType?: string;
  eventTypes?: string[];
  langType?: string;
  maxResults?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      eventType: 'EventType',
      eventTypes: 'EventTypes',
      langType: 'LangType',
      maxResults: 'MaxResults',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      eventType: 'string',
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      langType: 'string',
      maxResults: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportClientEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportClientEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoRequest extends $tea.Model {
  chargeType?: string;
  desktopGroupId?: string[];
  desktopGroupName?: string;
  endUserId?: string[];
  expiredTime?: string;
  langType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopGroupId: { 'type': 'array', 'itemType': 'string' },
      desktopGroupName: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportDesktopGroupInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportDesktopGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoRequest extends $tea.Model {
  chargeType?: string;
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  endUserId?: string[];
  expiredTime?: string;
  groupId?: string;
  langType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  regionId?: string;
  tag?: ExportDesktopListInfoRequestTag[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      groupId: 'GroupId',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      groupId: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ExportDesktopListInfoRequestTag },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportDesktopListInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportDesktopListInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskRequest extends $tea.Model {
  asyncTaskId?: string;
  cdsId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      cdsId: 'CdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      cdsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetAsyncTaskResponseBodyData;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsyncTaskResponseBodyData,
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  commandContent?: string;
  desktopId?: string;
  endUserId?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      desktopId: 'string',
      endUserId: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoordinateTicketRequest extends $tea.Model {
  coId?: string;
  endUserId?: string;
  regionId?: string;
  taskId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      taskId: 'TaskId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      taskId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoordinateTicketResponseBody extends $tea.Model {
  coId?: string;
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoordinateTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCoordinateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCoordinateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBody extends $tea.Model {
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: GetDesktopGroupDetailResponseBodyDesktops,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDesktopGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDesktopGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponseBody extends $tea.Model {
  requestId?: string;
  ssoStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ssoStatus: 'SsoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ssoStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOfficeSiteSsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataRequest extends $tea.Model {
  directoryId?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponseBody extends $tea.Model {
  requestId?: string;
  spMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spMetadata: 'SpMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spMetadata: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSpMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HibernateDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HibernateDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HibernateDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HibernateDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HibernateDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileIds?: string[];
  groupId?: string;
  maxResults?: number;
  nextToken?: string;
  orderType?: string;
  parentFileId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileIds: 'FileIds',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      parentFileId: 'ParentFileId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderType: 'string',
      parentFileId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesShrinkRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileIdsShrink?: string;
  groupId?: string;
  maxResults?: number;
  nextToken?: string;
  orderType?: string;
  parentFileId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileIdsShrink: 'FileIds',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      parentFileId: 'ParentFileId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileIdsShrink: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderType: 'string',
      parentFileId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesResponseBody extends $tea.Model {
  code?: string;
  count?: string;
  fileModels?: ListCdsFilesResponseBodyFileModels[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fileModels: 'FileModels',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      fileModels: { 'type': 'array', 'itemType': ListCdsFilesResponseBodyFileModels },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCdsFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCdsFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersRequest extends $tea.Model {
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  OUPath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: ListDirectoryUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListDirectoryUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDirectoryUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDirectoryUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePermissionRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePermissionResponseBody extends $tea.Model {
  filePermissions?: FilePermissionMember[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePermissions: 'FilePermissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePermissions: { 'type': 'array', 'itemType': FilePermissionMember },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFilePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewRequest extends $tea.Model {
  forceRefresh?: boolean;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  queryRange?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forceRefresh: 'ForceRefresh',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      queryRange: 'QueryRange',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceRefresh: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      queryRange: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBody extends $tea.Model {
  nextToken?: string;
  officeSiteOverviewResults?: ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSiteOverviewResults: 'OfficeSiteOverviewResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSiteOverviewResults: { 'type': 'array', 'itemType': ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOfficeSiteOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOfficeSiteOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersRequest extends $tea.Model {
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  OUPath?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: ListOfficeSiteUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListOfficeSiteUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOfficeSiteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOfficeSiteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsRequest extends $tea.Model {
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponseBody extends $tea.Model {
  nextToken?: string;
  OUNames?: ListUserAdOrganizationUnitsResponseBodyOUNames[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      OUNames: 'OUNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      OUNames: { 'type': 'array', 'itemType': ListUserAdOrganizationUnitsResponseBodyOUNames },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserAdOrganizationUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserAdOrganizationUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LockVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  targetOfficeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      targetOfficeSiteId: 'TargetOfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      targetOfficeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MigrateDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateImageProtocolRequest extends $tea.Model {
  imageId?: string[];
  regionId?: string;
  targetProtocolType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
      targetProtocolType: 'TargetProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      targetProtocolType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateImageProtocolResponseBody extends $tea.Model {
  failedIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateImageProtocolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateImageProtocolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MigrateImageProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryRequest extends $tea.Model {
  adHostname?: string;
  directoryId?: string;
  directoryName?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  mfaEnabled?: boolean;
  OUName?: string;
  regionId?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      mfaEnabled: 'MfaEnabled',
      OUName: 'OUName',
      regionId: 'RegionId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directoryId: 'string',
      directoryName: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      mfaEnabled: 'boolean',
      OUName: 'string',
      regionId: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyADConnectorDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteRequest extends $tea.Model {
  adHostname?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  mfaEnabled?: boolean;
  OUName?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      mfaEnabled: 'MfaEnabled',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      mfaEnabled: 'boolean',
      OUName: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyADConnectorOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclEntriesRequest extends $tea.Model {
  policy?: string;
  regionId?: string;
  sourceId?: string[];
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      regionId: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclEntriesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAclEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyRequest extends $tea.Model {
  cronExpression?: string;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      retentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleRequest extends $tea.Model {
  bundleId?: string;
  bundleName?: string;
  description?: string;
  imageId?: string;
  language?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      description: 'Description',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      description: 'string',
      imageId: 'string',
      language: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileRequest extends $tea.Model {
  cdsId?: string;
  conflictPolicy?: string;
  endUserId?: string;
  fileId?: string;
  fileName?: string;
  groupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      conflictPolicy: 'ConflictPolicy',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      fileName: 'FileName',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileId: 'string',
      fileName: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileShareLinkRequest extends $tea.Model {
  cdsId?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  expiration?: string;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveLimit?: number;
  shareId?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadCount: 'DownloadCount',
      downloadLimit: 'DownloadLimit',
      expiration: 'Expiration',
      previewCount: 'PreviewCount',
      previewLimit: 'PreviewLimit',
      reportCount: 'ReportCount',
      saveCount: 'SaveCount',
      saveLimit: 'SaveLimit',
      shareId: 'ShareId',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
      status: 'Status',
      videoPreviewCount: 'VideoPreviewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileShareLinkResponseBody extends $tea.Model {
  code?: string;
  data?: CdsFileShareLinkModel;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CdsFileShareLinkModel,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdsFileShareLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCdsFileShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCdsFileShareLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveGroupsRequest extends $tea.Model {
  cdsId?: string;
  groupId?: string[];
  regionId?: string;
  status?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      groupId: 'GroupId',
      regionId: 'RegionId',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCloudDriveGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCloudDriveGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDrivePermissionRequest extends $tea.Model {
  cdsId?: string;
  downloadEndUserIds?: string[];
  downloadUploadEndUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      downloadEndUserIds: 'DownloadEndUserIds',
      downloadUploadEndUserIds: 'DownloadUploadEndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      downloadEndUserIds: { 'type': 'array', 'itemType': 'string' },
      downloadUploadEndUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDrivePermissionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDrivePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCloudDrivePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCloudDrivePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveUsersRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string[];
  regionId?: string;
  status?: string;
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      status: 'Status',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      status: 'string',
      userMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveUsersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudDriveUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCloudDriveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCloudDriveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomizedListHeadersRequest extends $tea.Model {
  headers?: ModifyCustomizedListHeadersRequestHeaders[];
  listType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      listType: 'ListType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': ModifyCustomizedListHeadersRequestHeaders },
      listType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomizedListHeadersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomizedListHeadersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCustomizedListHeadersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCustomizedListHeadersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeRequest extends $tea.Model {
  autoPay?: boolean;
  chargeType?: string;
  desktopId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  useDuration?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      useDuration: 'UseDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      useDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeResponseBody extends $tea.Model {
  desktopId?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupRequest extends $tea.Model {
  allowAutoSetup?: number;
  allowBufferCount?: number;
  bindAmount?: number;
  buyDesktopsCount?: number;
  classify?: string;
  comments?: string;
  connectDuration?: number;
  desktopGroupId?: string;
  desktopGroupName?: string;
  disableSessionConfig?: boolean;
  fileSystemId?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  minDesktopsCount?: number;
  ownBundleId?: string;
  policyGroupId?: string;
  policyGroupIds?: string[];
  profileFollowSwitch?: boolean;
  ratioThreshold?: number;
  regionId?: string;
  resetType?: number;
  scaleStrategyId?: string;
  stopDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      classify: 'Classify',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      disableSessionConfig: 'DisableSessionConfig',
      fileSystemId: 'FileSystemId',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      ownBundleId: 'OwnBundleId',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      profileFollowSwitch: 'ProfileFollowSwitch',
      ratioThreshold: 'RatioThreshold',
      regionId: 'RegionId',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
      stopDuration: 'StopDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      classify: 'string',
      comments: 'string',
      connectDuration: 'number',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      disableSessionConfig: 'boolean',
      fileSystemId: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      ownBundleId: 'string',
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      profileFollowSwitch: 'boolean',
      ratioThreshold: 'number',
      regionId: 'string',
      resetType: 'number',
      scaleStrategyId: 'string',
      stopDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopHostNameRequest extends $tea.Model {
  desktopId?: string;
  newHostName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      newHostName: 'NewHostName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      newHostName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopHostNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopHostNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopHostNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopHostNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameRequest extends $tea.Model {
  desktopId?: string;
  newDesktopName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      newDesktopName: 'NewDesktopName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      newDesktopName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupRequest extends $tea.Model {
  concurrenceCount?: number;
  description?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  name?: string;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  policyGroupId?: string;
  stopDuration?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      description: 'Description',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      policyGroupId: 'PolicyGroupId',
      stopDuration: 'StopDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      description: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      name: 'string',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      policyGroupId: 'string',
      stopDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupResponseBody extends $tea.Model {
  data?: ModifyDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDesktopOversoldGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupSaleRequest extends $tea.Model {
  concurrenceCount?: number;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupSaleResponseBody extends $tea.Model {
  data?: ModifyDesktopOversoldGroupSaleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDesktopOversoldGroupSaleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupSaleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopOversoldGroupSaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopOversoldGroupSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldUserGroupRequest extends $tea.Model {
  imageId?: string;
  name?: string;
  oversoldGroupId?: string;
  policyGroupId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      policyGroupId: 'PolicyGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      policyGroupId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldUserGroupResponseBody extends $tea.Model {
  data?: ModifyDesktopOversoldUserGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDesktopOversoldUserGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopOversoldUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopOversoldUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string;
  desktopType?: string;
  promotionId?: string;
  regionId?: string;
  rootDiskSizeGib?: number;
  userDiskPerformanceLevel?: string;
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      desktopType: 'string',
      promotionId: 'string',
      regionId: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopTimerRequest extends $tea.Model {
  desktopId?: string[];
  desktopTimers?: ModifyDesktopTimerRequestDesktopTimers[];
  regionId?: string;
  useDesktopTimers?: boolean;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopTimers: 'DesktopTimers',
      regionId: 'RegionId',
      useDesktopTimers: 'UseDesktopTimers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopTimers: { 'type': 'array', 'itemType': ModifyDesktopTimerRequestDesktopTimers },
      regionId: 'string',
      useDesktopTimers: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopTimerResponseBody extends $tea.Model {
  desktopIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopIds: 'DesktopIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupRequest extends $tea.Model {
  desktopId?: string[];
  policyGroupId?: string;
  policyGroupIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBody extends $tea.Model {
  modifyResults?: ModifyDesktopsPolicyGroupResponseBodyModifyResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResults: 'ModifyResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResults: { 'type': 'array', 'itemType': ModifyDesktopsPolicyGroupResponseBodyModifyResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDesktopsPolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDesktopsPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string;
  promotionId?: string;
  regionId?: string;
  rootDiskPerformanceLevel?: string;
  userDiskPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      promotionId: 'string',
      regionId: 'string',
      rootDiskPerformanceLevel: 'string',
      userDiskPerformanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDiskSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementRequest extends $tea.Model {
  desktopId?: string;
  endUserId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyEntitlementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEntitlementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  description?: string;
  imageId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyImageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImagePermissionRequest extends $tea.Model {
  addAccount?: number[];
  imageId?: string;
  regionId?: string;
  removeAccount?: number[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      imageId: 'ImageId',
      regionId: 'RegionId',
      removeAccount: 'RemoveAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      imageId: 'string',
      regionId: 'string',
      removeAccount: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImagePermissionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImagePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyImagePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImagePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  mountTargetDomain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNASDefaultMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNASDefaultMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthRequest extends $tea.Model {
  autoPay?: boolean;
  bandwidth?: number;
  networkPackageId?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      networkPackageId: 'NetworkPackageId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      networkPackageId: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNetworkPackageBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNetworkPackageBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledRequest extends $tea.Model {
  enabled?: boolean;
  networkPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      networkPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNetworkPackageEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNetworkPackageEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeRequest extends $tea.Model {
  desktopAccessType?: string;
  enableAdminAccess?: boolean;
  needVerifyLoginRisk?: boolean;
  needVerifyZeroDevice?: boolean;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      enableAdminAccess: 'EnableAdminAccess',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      enableAdminAccess: 'boolean',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOfficeSiteAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOfficeSiteAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessRequest extends $tea.Model {
  enableCrossDesktopAccess?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossDesktopAccess: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOfficeSiteCrossDesktopAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOfficeSiteCrossDesktopAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledRequest extends $tea.Model {
  mfaEnabled?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaEnabled: 'MfaEnabled',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaEnabled: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOfficeSiteMfaEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOfficeSiteMfaEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequest extends $tea.Model {
  adminAccess?: string;
  appContentProtection?: string;
  authorizeAccessPolicyRule?: ModifyPolicyGroupRequestAuthorizeAccessPolicyRule[];
  authorizeSecurityPolicyRule?: ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule[];
  cameraRedirect?: string;
  clientType?: ModifyPolicyGroupRequestClientType[];
  clipboard?: string;
  domainList?: string;
  domainResolveRule?: ModifyPolicyGroupRequestDomainResolveRule[];
  domainResolveRuleType?: string;
  endUserApplyAdminCoordinate?: string;
  endUserGroupCoordinate?: string;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  internetCommunicationProtocol?: string;
  localDrive?: string;
  name?: string;
  netRedirect?: string;
  policyGroupId?: string;
  preemptLogin?: string;
  preemptLoginUser?: string[];
  printerRedirection?: string;
  recordContent?: string;
  recordContentExpires?: number;
  recording?: string;
  recordingAudio?: string;
  recordingDuration?: number;
  recordingEndTime?: string;
  recordingExpires?: number;
  recordingFps?: number;
  recordingStartTime?: string;
  recordingUserNotify?: string;
  recordingUserNotifyMessage?: string;
  regionId?: string;
  remoteCoordinate?: string;
  revokeAccessPolicyRule?: ModifyPolicyGroupRequestRevokeAccessPolicyRule[];
  revokeSecurityPolicyRule?: ModifyPolicyGroupRequestRevokeSecurityPolicyRule[];
  scope?: string;
  scopeValue?: string[];
  usbRedirect?: string;
  usbSupplyRedirectRule?: ModifyPolicyGroupRequestUsbSupplyRedirectRule[];
  videoRedirect?: string;
  visualQuality?: string;
  watermark?: string;
  watermarkAntiCam?: string;
  watermarkColor?: number;
  watermarkDegree?: number;
  watermarkFontSize?: number;
  watermarkFontStyle?: string;
  watermarkPower?: string;
  watermarkRowAmount?: number;
  watermarkSecurity?: string;
  watermarkTransparency?: string;
  watermarkTransparencyValue?: number;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      localDrive: 'LocalDrive',
      name: 'Name',
      netRedirect: 'NetRedirect',
      policyGroupId: 'PolicyGroupId',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      regionId: 'RegionId',
      remoteCoordinate: 'RemoteCoordinate',
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestClientType },
      clipboard: 'string',
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      localDrive: 'string',
      name: 'string',
      netRedirect: 'string',
      policyGroupId: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      regionId: 'string',
      remoteCoordinate: 'string',
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeAccessPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeSecurityPolicyRule },
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestUsbSupplyRedirectRule },
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserEntitlementRequest extends $tea.Model {
  authorizeDesktopId?: string[];
  endUserId?: string[];
  regionId?: string;
  revokeDesktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizeDesktopId: 'AuthorizeDesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      revokeDesktopId: 'RevokeDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeDesktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      revokeDesktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserEntitlementResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserEntitlementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserEntitlementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserEntitlementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  newEndUserIds?: string[];
  oldEndUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      newEndUserIds: 'NewEndUserIds',
      oldEndUserIds: 'OldEndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      newEndUserIds: { 'type': 'array', 'itemType': 'string' },
      oldEndUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserToDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveCdsFileRequest extends $tea.Model {
  cdsId?: string;
  conflictPolicy?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  parentFolderId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      conflictPolicy: 'ConflictPolicy',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      parentFolderId: 'ParentFolderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      parentFolderId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveCdsFileResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  moveCdsFileModel?: MoveCdsFileResponseBodyMoveCdsFileModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      moveCdsFileModel: 'MoveCdsFileModel',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moveCdsFileModel: MoveCdsFileResponseBodyMoveCdsFileModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveCdsFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveCdsFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveCdsFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  imageId?: string;
  operateType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      operateType: 'OperateType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      operateType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBody extends $tea.Model {
  rebuildResults?: RebuildDesktopsResponseBodyRebuildResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rebuildResults: 'RebuildResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseBodyRebuildResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebuildDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebuildDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  memberList?: RemoveFilePermissionRequestMemberList[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberList: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberList: { 'type': 'array', 'itemType': RemoveFilePermissionRequestMemberList },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionShrinkRequest extends $tea.Model {
  cdsId?: string;
  endUserId?: string;
  fileId?: string;
  groupId?: string;
  memberListShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberListShrink: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberListShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveFilePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveFilePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopGroupIds?: string[];
  endUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserFromDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopOversoldUserGroupRequest extends $tea.Model {
  endUserId?: string;
  oversoldGroupId?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      oversoldGroupId: 'string',
      userDesktopId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopOversoldUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopOversoldUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromDesktopOversoldUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserFromDesktopOversoldUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopOversoldGroupRequest extends $tea.Model {
  oversoldGroupId?: string;
  period?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldGroupId: 'OversoldGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopOversoldGroupResponseBody extends $tea.Model {
  data?: RenewDesktopOversoldGroupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RenewDesktopOversoldGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopOversoldGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewDesktopOversoldGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewDesktopOversoldGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesRequest extends $tea.Model {
  autoPay?: boolean;
  networkPackageId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      networkPackageId: 'NetworkPackageId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewNetworkPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDesktopsRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopGroupIds?: string[];
  desktopId?: string[];
  imageId?: string;
  payType?: string;
  regionId?: string;
  resetScope?: string;
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      payType: 'PayType',
      regionId: 'RegionId',
      resetScope: 'ResetScope',
      resetType: 'ResetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      payType: 'string',
      regionId: 'string',
      resetScope: 'string',
      resetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetNASDefaultMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetNASDefaultMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotRequest extends $tea.Model {
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeCoordinatePrivilegeRequest extends $tea.Model {
  coId?: string;
  endUserId?: string;
  regionId?: string;
  userType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeCoordinatePrivilegeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeCoordinatePrivilegeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeCoordinatePrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeCoordinatePrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  commandContent?: string;
  contentEncoding?: string;
  desktopId?: string[];
  endUserId?: string;
  regionId?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      contentEncoding: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeRequest extends $tea.Model {
  extraInfo?: string;
  regionId?: string;
  verifyCodeAction?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      regionId: 'RegionId',
      verifyCodeAction: 'VerifyCodeAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      regionId: 'string',
      verifyCodeAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupScaleTimerRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  scaleTimerInfos?: SetDesktopGroupScaleTimerRequestScaleTimerInfos[];
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      scaleTimerInfos: 'ScaleTimerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      scaleTimerInfos: { 'type': 'array', 'itemType': SetDesktopGroupScaleTimerRequestScaleTimerInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupScaleTimerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupScaleTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDesktopGroupScaleTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDesktopGroupScaleTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerRequest extends $tea.Model {
  cronExpression?: string;
  desktopGroupId?: string;
  force?: boolean;
  regionId?: string;
  resetType?: number;
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      desktopGroupId: 'DesktopGroupId',
      force: 'Force',
      regionId: 'RegionId',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      desktopGroupId: 'string',
      force: 'boolean',
      regionId: 'string',
      resetType: 'number',
      timerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDesktopGroupTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDesktopGroupTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerStatusRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  status?: number;
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      status: 'number',
      timerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupTimerStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDesktopGroupTimerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDesktopGroupTimerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirectorySsoStatusRequest extends $tea.Model {
  directoryId?: string;
  enableSso?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      enableSso: 'EnableSso',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      enableSso: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirectorySsoStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirectorySsoStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDirectorySsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDirectorySsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataRequest extends $tea.Model {
  directoryId?: string;
  idpMetadata?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      idpMetadata: 'IdpMetadata',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      idpMetadata: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataResponseBody extends $tea.Model {
  idpEntityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      idpEntityId: 'IdpEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpEntityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetIdpMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetIdpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusRequest extends $tea.Model {
  enableSso?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSso: 'EnableSso',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSso: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetOfficeSiteSsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  userProfilePathRule?: SetUserProfilePathRulesRequestUserProfilePathRule[];
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      userProfilePathRule: 'UserProfilePathRule',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      userProfilePathRule: { 'type': 'array', 'itemType': SetUserProfilePathRulesRequestUserProfilePathRule },
      userProfileRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesShrinkRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  userProfilePathRuleShrink?: string;
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      userProfilePathRuleShrink: 'UserProfilePathRule',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      userProfilePathRuleShrink: 'string',
      userProfileRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserProfilePathRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserProfilePathRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $tea.Model {
  desktopId?: string[];
  invokeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      invokeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInvocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInvocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopRequest extends $tea.Model {
  desktopAgentIds?: string[];
  desktopGroupId?: string;
  desktopIds?: string[];
  force?: boolean;
  reason?: string;
  userDesktopIds?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAgentIds: 'DesktopAgentIds',
      desktopGroupId: 'DesktopGroupId',
      desktopIds: 'DesktopIds',
      force: 'Force',
      reason: 'Reason',
      userDesktopIds: 'UserDesktopIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAgentIds: { 'type': 'array', 'itemType': 'string' },
      desktopGroupId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      force: 'boolean',
      reason: 'string',
      userDesktopIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindUserDesktopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindUserDesktopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockVirtualMFADeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockVirtualMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFotaTaskRequest extends $tea.Model {
  regionId?: string;
  taskUid?: string;
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskUid: 'string',
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFotaTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFotaTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFotaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFotaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageRequest extends $tea.Model {
  dataDiskSize?: number;
  description?: string;
  enableSecurityCheck?: boolean;
  gpuCategory?: boolean;
  gpuDriverType?: string;
  imageName?: string;
  licenseType?: string;
  osType?: string;
  ossObjectPath?: string;
  protocolType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      enableSecurityCheck: 'EnableSecurityCheck',
      gpuCategory: 'GpuCategory',
      gpuDriverType: 'GpuDriverType',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      osType: 'OsType',
      ossObjectPath: 'OssObjectPath',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      description: 'string',
      enableSecurityCheck: 'boolean',
      gpuCategory: 'boolean',
      gpuDriverType: 'string',
      imageName: 'string',
      licenseType: 'string',
      osType: 'string',
      ossObjectPath: 'string',
      protocolType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  regionId?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      regionId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponseBody extends $tea.Model {
  cidrBlocks?: string[];
  requestId?: string;
  routeEntries?: VerifyCenResponseBodyRouteEntries[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlocks: 'CidrBlocks',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': VerifyCenResponseBodyRouteEntries },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeupDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeupDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeupDesktopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WakeupDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WakeupDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePermissionMemberCdsIdentity extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDesktopOversoldUserGroupResponseBodyData extends $tea.Model {
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionRequestMemberListCdsIdentity extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionRequestMemberList extends $tea.Model {
  cdsIdentity?: AddFilePermissionRequestMemberListCdsIdentity;
  disinheritSubGroup?: boolean;
  expireTime?: number;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      disinheritSubGroup: 'DisinheritSubGroup',
      expireTime: 'ExpireTime',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: AddFilePermissionRequestMemberListCdsIdentity,
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringRequestResourceCandidates extends $tea.Model {
  ownerAliUid?: number;
  ownerEndUserId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceProperties?: string;
  resourceRegionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAliUid: 'OwnerAliUid',
      ownerEndUserId: 'OwnerEndUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceProperties: 'ResourceProperties',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAliUid: 'number',
      ownerEndUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceProperties: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels extends $tea.Model {
  coId?: string;
  coordinateStatus?: string;
  coordinateTicket?: string;
  initiatorType?: string;
  ownerUserId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      initiatorType: 'InitiatorType',
      ownerUserId: 'OwnerUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateStatus: 'string',
      coordinateTicket: 'string',
      initiatorType: 'string',
      ownerUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCdsFileResponseBodyCopyCdsFileModel extends $tea.Model {
  asyncTaskId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBodyAdConnectors extends $tea.Model {
  address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdsFileResponseBodyFileModel extends $tea.Model {
  fileId?: string;
  uploadId?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      uploadId: 'UploadId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      uploadId: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds extends $tea.Model {
  cdsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder extends $tea.Model {
  cdsId?: string;
  orderId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      orderId: 'OrderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      orderId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrder extends $tea.Model {
  conflictCds?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds[];
  conflictOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder[];
  static names(): { [key: string]: string } {
    return {
      conflictCds: 'ConflictCds',
      conflictOrder: 'ConflictOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCds: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds },
      conflictOrder: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopOversoldGroupResponseBodyData extends $tea.Model {
  orderId?: number;
  oversoldGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      oversoldGroupId: 'OversoldGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      oversoldGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestBundleModels extends $tea.Model {
  amount?: number;
  bundleId?: string;
  desktopName?: string;
  endUserIds?: string[];
  hostname?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bundleId: 'BundleId',
      desktopName: 'DesktopName',
      endUserIds: 'EndUserIds',
      hostname: 'Hostname',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bundleId: 'string',
      desktopName: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestDesktopTimers extends $tea.Model {
  allowClientSetting?: boolean;
  cronExpression?: string;
  enforce?: boolean;
  interval?: number;
  operationType?: string;
  resetType?: string;
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestUserCommands extends $tea.Model {
  content?: string;
  contentEncoding?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentEncoding: 'ContentEncoding',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestClientType extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestDomainResolveRule extends $tea.Model {
  description?: string;
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclEntriesResponseBodyAclEntries extends $tea.Model {
  policy?: string;
  sourceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyResponseBodyAutoSnapshotPolicies extends $tea.Model {
  creationTime?: string;
  cronExpression?: string;
  desktopNum?: number;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  retentionDays?: string;
  status?: string;
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      cronExpression: 'CronExpression',
      desktopNum: 'DesktopNum',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
      status: 'Status',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      cronExpression: 'string',
      desktopNum: 'number',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      retentionDays: 'string',
      status: 'string',
      timePoints: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDesktopTypeAttribute extends $tea.Model {
  cpuCount?: number;
  gpuCount?: number;
  gpuSpec?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      gpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDisks extends $tea.Model {
  diskPerformanceLevel?: string;
  diskSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskPerformanceLevel: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundles extends $tea.Model {
  bundleId?: string;
  bundleName?: string;
  bundleType?: string;
  creationTime?: string;
  description?: string;
  desktopType?: string;
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  desktopTypeFamily?: string;
  disks?: DescribeBundlesResponseBodyBundlesDisks[];
  imageId?: string;
  imageName?: string;
  imageStatus?: string;
  language?: string;
  osType?: string;
  platform?: string;
  protocolType?: string;
  sessionType?: string;
  stockState?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      bundleType: 'BundleType',
      creationTime: 'CreationTime',
      description: 'Description',
      desktopType: 'DesktopType',
      desktopTypeAttribute: 'DesktopTypeAttribute',
      desktopTypeFamily: 'DesktopTypeFamily',
      disks: 'Disks',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageStatus: 'ImageStatus',
      language: 'Language',
      osType: 'OsType',
      platform: 'Platform',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      stockState: 'StockState',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      bundleType: 'string',
      creationTime: 'string',
      description: 'string',
      desktopType: 'string',
      desktopTypeAttribute: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute,
      desktopTypeFamily: 'string',
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundlesDisks },
      imageId: 'string',
      imageName: 'string',
      imageStatus: 'string',
      language: 'string',
      osType: 'string',
      platform: 'string',
      protocolType: 'string',
      sessionType: 'string',
      stockState: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensPackageIds extends $tea.Model {
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCens extends $tea.Model {
  cenId?: string;
  creationTime?: string;
  description?: string;
  ipv6Level?: string;
  name?: string;
  packageIds?: DescribeCensResponseBodyCensPackageIds[];
  protectionLevel?: string;
  status?: string;
  tags?: DescribeCensResponseBodyCensTags[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      ipv6Level: 'Ipv6Level',
      name: 'Name',
      packageIds: 'PackageIds',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      ipv6Level: 'string',
      name: 'string',
      packageIds: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensPackageIds },
      protectionLevel: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBodyEvents extends $tea.Model {
  aliUid?: string;
  bytesReceived?: string;
  bytesSend?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  desktopId?: string;
  desktopIp?: string;
  desktopName?: string;
  directoryId?: string;
  directoryType?: string;
  endUserId?: string;
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bytesReceived: 'BytesReceived',
      bytesSend: 'BytesSend',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      endUserId: 'EndUserId',
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bytesReceived: 'string',
      bytesSend: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      endUserId: 'string',
      eventId: 'string',
      eventTime: 'string',
      eventType: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos extends $tea.Model {
  endUserId?: string;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      nickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroups extends $tea.Model {
  adminUserIds?: string;
  adminUserInfos?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos[];
  createTime?: string;
  directoryId?: string;
  driveId?: string;
  groupId?: string;
  groupName?: string;
  orgId?: string;
  status?: string;
  totalSize?: number;
  usedSize?: string;
  static names(): { [key: string]: string } {
    return {
      adminUserIds: 'AdminUserIds',
      adminUserInfos: 'AdminUserInfos',
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      driveId: 'DriveId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      orgId: 'OrgId',
      status: 'Status',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserIds: 'string',
      adminUserInfos: { 'type': 'array', 'itemType': DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos },
      createTime: 'string',
      directoryId: 'string',
      driveId: 'string',
      groupId: 'string',
      groupName: 'string',
      orgId: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels extends $tea.Model {
  endUsers?: string[];
  permission?: string;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': 'string' },
      permission: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveUsersResponseBodyCloudDriveUsers extends $tea.Model {
  driveId?: string;
  endUserId?: string;
  status?: string;
  totalSize?: number;
  usedSize?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'DriveId',
      endUserId: 'EndUserId',
      status: 'Status',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      endUserId: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedListHeadersResponseBodyHeaders extends $tea.Model {
  displayType?: string;
  headerKey?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      displayType: 'DisplayType',
      headerKey: 'HeaderKey',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayType: 'string',
      headerKey: 'string',
      headerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupSessionsResponseBodySessions extends $tea.Model {
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  desktopId?: string;
  endUserApplyCoordinateTime?: number;
  endUserId?: string;
  lastSessionEndTime?: string;
  lastSessionStartTime?: string;
  latestConnectionTime?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  osType?: string;
  ownType?: number;
  protocolType?: string;
  sessionIdleTime?: number;
  sessionStatus?: string;
  totalConnectionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      endUserApplyCoordinateTime: 'EndUserApplyCoordinateTime',
      endUserId: 'EndUserId',
      lastSessionEndTime: 'LastSessionEndTime',
      lastSessionStartTime: 'LastSessionStartTime',
      latestConnectionTime: 'LatestConnectionTime',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      osType: 'OsType',
      ownType: 'OwnType',
      protocolType: 'ProtocolType',
      sessionIdleTime: 'SessionIdleTime',
      sessionStatus: 'SessionStatus',
      totalConnectionDuration: 'TotalConnectionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      endUserApplyCoordinateTime: 'number',
      endUserId: 'string',
      lastSessionEndTime: 'string',
      lastSessionStartTime: 'string',
      latestConnectionTime: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      osType: 'string',
      ownType: 'number',
      protocolType: 'string',
      sessionIdleTime: 'number',
      sessionStatus: 'string',
      totalConnectionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus extends $tea.Model {
  count?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBodyDesktopGroups extends $tea.Model {
  bindAmount?: number;
  buyDesktopsCount?: number;
  comments?: string;
  connectDuration?: number;
  countPerStatus?: DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus[];
  cpu?: number;
  createTime?: string;
  creator?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopCount?: number;
  desktopGroupId?: string;
  desktopGroupName?: string;
  desktopType?: string;
  endUserCount?: number;
  expiredTime?: string;
  gpuCount?: number;
  gpuDriverVersion?: string;
  gpuSpec?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  memory?: number;
  minDesktopsCount?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  osType?: string;
  ownBundleId?: string;
  ownBundleName?: string;
  ownType?: number;
  payType?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  protocolType?: string;
  ratioThreshold?: number;
  resetType?: number;
  status?: number;
  stopDuration?: number;
  subnetId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  version?: number;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      countPerStatus: 'CountPerStatus',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopCount: 'DesktopCount',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopType: 'DesktopType',
      endUserCount: 'EndUserCount',
      expiredTime: 'ExpiredTime',
      gpuCount: 'GpuCount',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuSpec: 'GpuSpec',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      protocolType: 'ProtocolType',
      ratioThreshold: 'RatioThreshold',
      resetType: 'ResetType',
      status: 'Status',
      stopDuration: 'StopDuration',
      subnetId: 'SubnetId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      version: 'Version',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      comments: 'string',
      connectDuration: 'number',
      countPerStatus: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroupsCountPerStatus },
      cpu: 'number',
      createTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopCount: 'number',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopType: 'string',
      endUserCount: 'number',
      expiredTime: 'string',
      gpuCount: 'number',
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      protocolType: 'string',
      ratioThreshold: 'number',
      resetType: 'number',
      status: 'number',
      stopDuration: 'number',
      subnetId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      version: 'number',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopInfoResponseBodyDesktops extends $tea.Model {
  connectionStatus?: string;
  currentAppVersion?: string;
  desktopId?: string;
  desktopStatus?: string;
  managementFlag?: string[];
  newAppSize?: number;
  newAppVersion?: string;
  releaseNote?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      currentAppVersion: 'CurrentAppVersion',
      desktopId: 'DesktopId',
      desktopStatus: 'DesktopStatus',
      managementFlag: 'ManagementFlag',
      newAppSize: 'NewAppSize',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      currentAppVersion: 'string',
      desktopId: 'string',
      desktopStatus: 'string',
      managementFlag: { 'type': 'array', 'itemType': 'string' },
      newAppSize: 'number',
      newAppVersion: 'string',
      releaseNote: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldGroupResponseBodyData extends $tea.Model {
  concurrenceCount?: number;
  curConcurrenceCount?: number;
  dataDiskSize?: number;
  description?: string;
  desktopType?: string;
  directoryId?: string;
  expireTime?: string;
  idleDisconnectDuration?: string;
  imageId?: string;
  keepDuration?: string;
  name?: string;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  policyGroupId?: string;
  saleStatus?: string;
  status?: string;
  stopDuration?: number;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      curConcurrenceCount: 'CurConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      policyGroupId: 'PolicyGroupId',
      saleStatus: 'SaleStatus',
      status: 'Status',
      stopDuration: 'StopDuration',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      curConcurrenceCount: 'number',
      dataDiskSize: 'number',
      description: 'string',
      desktopType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      idleDisconnectDuration: 'string',
      imageId: 'string',
      keepDuration: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      policyGroupId: 'string',
      saleStatus: 'string',
      status: 'string',
      stopDuration: 'number',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserResponseBodyData extends $tea.Model {
  endUserId?: string;
  oversoldGroupId?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      oversoldGroupId: 'string',
      userDesktopId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldUserGroupResponseBodyData extends $tea.Model {
  imageId?: string;
  name?: string;
  oversoldGroupId?: string;
  policyGroupId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      policyGroupId: 'PolicyGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      policyGroupId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsResponseBodySessions extends $tea.Model {
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopId?: string;
  desktopName?: string;
  endUserApplyCoordinateTime?: number;
  endUserId?: string;
  latestConnectionTime?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  osType?: string;
  protocolType?: string;
  sessionEndTime?: string;
  sessionIdleTime?: number;
  sessionStartTime?: string;
  sessionStatus?: string;
  totalConnectionTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserApplyCoordinateTime: 'EndUserApplyCoordinateTime',
      endUserId: 'EndUserId',
      latestConnectionTime: 'LatestConnectionTime',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      sessionEndTime: 'SessionEndTime',
      sessionIdleTime: 'SessionIdleTime',
      sessionStartTime: 'SessionStartTime',
      sessionStatus: 'SessionStatus',
      totalConnectionTime: 'TotalConnectionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endUserApplyCoordinateTime: 'number',
      endUserId: 'string',
      latestConnectionTime: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      osType: 'string',
      protocolType: 'string',
      sessionEndTime: 'string',
      sessionIdleTime: 'number',
      sessionStartTime: 'string',
      sessionStatus: 'string',
      totalConnectionTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBodyDesktopTypes extends $tea.Model {
  cpuCount?: string;
  dataDiskSize?: string;
  desktopTypeId?: string;
  desktopTypeStatus?: string;
  gpuCount?: number;
  gpuSpec?: string;
  instanceTypeFamily?: string;
  memorySize?: string;
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      dataDiskSize: 'DataDiskSize',
      desktopTypeId: 'DesktopTypeId',
      desktopTypeStatus: 'DesktopTypeStatus',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'string',
      dataDiskSize: 'string',
      desktopTypeId: 'string',
      desktopTypeStatus: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      instanceTypeFamily: 'string',
      memorySize: 'string',
      systemDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsDisks extends $tea.Model {
  diskId?: string;
  diskSize?: number;
  diskType?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsFotaUpdate extends $tea.Model {
  currentAppVersion?: string;
  newAppVersion?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      newAppVersion: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsSessions extends $tea.Model {
  endUserId?: string;
  establishmentTime?: string;
  externalUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
      externalUserName: 'ExternalUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
      externalUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktops extends $tea.Model {
  bindAmount?: number;
  bundleId?: string;
  bundleName?: string;
  chargeType?: string;
  connectionStatus?: string;
  cpu?: number;
  creationTime?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopGroupId?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  desktopType?: string;
  directoryId?: string;
  directoryType?: string;
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  downgradeQuota?: number;
  downgradedTimes?: number;
  endUserIds?: string[];
  expiredTime?: string;
  fotaUpdate?: DescribeDesktopsResponseBodyDesktopsFotaUpdate;
  gpuCategory?: number;
  gpuCount?: number;
  gpuDriverVersion?: string;
  gpuSpec?: string;
  hibernationBeta?: boolean;
  hibernationOptionsConfigured?: boolean;
  hostName?: string;
  imageId?: string;
  managementFlag?: string;
  managementFlags?: string[];
  memory?: number;
  networkInterfaceId?: string;
  networkInterfaceIp?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  officeSiteVpcType?: string;
  osType?: string;
  platform?: string;
  policyGroupId?: string;
  policyGroupIdList?: string[];
  policyGroupName?: string;
  policyGroupNameList?: string[];
  progress?: string;
  protocolType?: string;
  sessionType?: string;
  sessions?: DescribeDesktopsResponseBodyDesktopsSessions[];
  snapshotPolicyId?: string;
  snapshotPolicyName?: string;
  startTime?: string;
  supportHibernation?: boolean;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bindAmount: 'BindAmount',
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      chargeType: 'ChargeType',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      disks: 'Disks',
      downgradeQuota: 'DowngradeQuota',
      downgradedTimes: 'DowngradedTimes',
      endUserIds: 'EndUserIds',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuCategory: 'GpuCategory',
      gpuCount: 'GpuCount',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuSpec: 'GpuSpec',
      hibernationBeta: 'HibernationBeta',
      hibernationOptionsConfigured: 'HibernationOptionsConfigured',
      hostName: 'HostName',
      imageId: 'ImageId',
      managementFlag: 'ManagementFlag',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      officeSiteVpcType: 'OfficeSiteVpcType',
      osType: 'OsType',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      policyGroupIdList: 'PolicyGroupIdList',
      policyGroupName: 'PolicyGroupName',
      policyGroupNameList: 'PolicyGroupNameList',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      snapshotPolicyId: 'SnapshotPolicyId',
      snapshotPolicyName: 'SnapshotPolicyName',
      startTime: 'StartTime',
      supportHibernation: 'SupportHibernation',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAmount: 'number',
      bundleId: 'string',
      bundleName: 'string',
      chargeType: 'string',
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      downgradeQuota: 'number',
      downgradedTimes: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fotaUpdate: DescribeDesktopsResponseBodyDesktopsFotaUpdate,
      gpuCategory: 'number',
      gpuCount: 'number',
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      hibernationBeta: 'boolean',
      hibernationOptionsConfigured: 'boolean',
      hostName: 'string',
      imageId: 'string',
      managementFlag: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      networkInterfaceId: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      officeSiteVpcType: 'string',
      osType: 'string',
      platform: 'string',
      policyGroupId: 'string',
      policyGroupIdList: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyGroupNameList: { 'type': 'array', 'itemType': 'string' },
      progress: 'string',
      protocolType: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsSessions },
      snapshotPolicyId: 'string',
      snapshotPolicyName: 'string',
      startTime: 'string',
      supportHibernation: 'boolean',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsTags },
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $tea.Model {
  connectionStatus?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  diskType?: string;
  endUserId?: string;
  endUserIds?: string[];
  endUserName?: string;
  endUserNames?: string[];
  fotaVersion?: string;
  gpuDriverVersion?: string;
  imageId?: string;
  imageName?: string;
  managementFlag?: string;
  managementFlags?: string[];
  memberEniIp?: string;
  osType?: string;
  primaryEniIp?: string;
  protocolType?: string;
  resetTime?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskType: 'DiskType',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      endUserName: 'EndUserName',
      endUserNames: 'EndUserNames',
      fotaVersion: 'FotaVersion',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      managementFlag: 'ManagementFlag',
      managementFlags: 'ManagementFlags',
      memberEniIp: 'MemberEniIp',
      osType: 'OsType',
      primaryEniIp: 'PrimaryEniIp',
      protocolType: 'ProtocolType',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskType: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      endUserName: 'string',
      endUserNames: { 'type': 'array', 'itemType': 'string' },
      fotaVersion: 'string',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      managementFlag: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memberEniIp: 'string',
      osType: 'string',
      primaryEniIp: 'string',
      protocolType: 'string',
      resetTime: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPostPaidDesktops extends $tea.Model {
  connectionStatus?: string;
  createDuration?: string;
  createTime?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  diskType?: string;
  endUserId?: string;
  endUserIds?: string[];
  endUserName?: string;
  endUserNames?: string[];
  fotaVersion?: string;
  gpuDriverVersion?: string;
  imageId?: string;
  imageName?: string;
  managementFlag?: string;
  managementFlags?: string[];
  memberEniIp?: string;
  osType?: string;
  primaryEniIp?: string;
  protocolType?: string;
  releaseTime?: string;
  resetTime?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      createDuration: 'CreateDuration',
      createTime: 'CreateTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskType: 'DiskType',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      endUserName: 'EndUserName',
      endUserNames: 'EndUserNames',
      fotaVersion: 'FotaVersion',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      managementFlag: 'ManagementFlag',
      managementFlags: 'ManagementFlags',
      memberEniIp: 'MemberEniIp',
      osType: 'OsType',
      primaryEniIp: 'PrimaryEniIp',
      protocolType: 'ProtocolType',
      releaseTime: 'ReleaseTime',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createDuration: 'string',
      createTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskType: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      endUserName: 'string',
      endUserNames: { 'type': 'array', 'itemType': 'string' },
      fotaVersion: 'string',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      managementFlag: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memberEniIp: 'string',
      osType: 'string',
      primaryEniIp: 'string',
      protocolType: 'string',
      releaseTime: 'string',
      resetTime: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesEndUserList extends $tea.Model {
  adDomain?: string;
  directoryId?: string;
  endUserId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevices extends $tea.Model {
  deviceId?: string;
  endUserList?: DescribeDevicesResponseBodyDevicesEndUserList[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      endUserList: 'EndUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      endUserList: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevicesEndUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $tea.Model {
  ADConnectorAddress?: string;
  connectorStatus?: string;
  networkInterfaceId?: string;
  specification?: string;
  trustKey?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesLogs extends $tea.Model {
  level?: string;
  message?: string;
  step?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  creationTime?: string;
  customSecurityGroupId?: string;
  desktopAccessType?: string;
  desktopVpcEndpoint?: string;
  directoryId?: string;
  directoryType?: string;
  dnsAddress?: string[];
  dnsUserName?: string;
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableCrossDesktopAccess?: boolean;
  enableInternetAccess?: boolean;
  fileSystemIds?: string[];
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
  mfaEnabled?: boolean;
  name?: string;
  needVerifyLoginRisk?: boolean;
  ouName?: string;
  ssoEnabled?: boolean;
  status?: string;
  subDnsAddress?: string[];
  subDomainName?: string;
  trustPassword?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      fileSystemIds: 'FileSystemIds',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      ouName: 'OuName',
      ssoEnabled: 'SsoEnabled',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      creationTime: 'string',
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      directoryId: 'string',
      directoryType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      ouName: 'string',
      ssoEnabled: 'boolean',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponseBodyDesktopFlowStatistic extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  flowIn?: string;
  flowRank?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      flowIn: 'FlowIn',
      flowRank: 'FlowRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      flowIn: 'string',
      flowRank: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions extends $tea.Model {
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops extends $tea.Model {
  currentAppVersion?: string;
  desktopId?: string;
  desktopName?: string;
  fotaProject?: string;
  officeSiteId?: string;
  sessions?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      fotaProject: 'FotaProject',
      officeSiteId: 'OfficeSiteId',
      sessions: 'Sessions',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      fotaProject: 'string',
      officeSiteId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponseBodyFotaTasks extends $tea.Model {
  appVersion?: string;
  fotaProject?: string;
  pendingCustomImageCount?: number;
  pendingDesktopCount?: number;
  publishTime?: string;
  releaseNote?: string;
  size?: number;
  status?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      fotaProject: 'FotaProject',
      pendingCustomImageCount: 'PendingCustomImageCount',
      pendingDesktopCount: 'PendingDesktopCount',
      publishTime: 'PublishTime',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      status: 'Status',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      fotaProject: 'string',
      pendingCustomImageCount: 'number',
      pendingDesktopCount: 'number',
      publishTime: 'string',
      releaseNote: 'string',
      size: 'number',
      status: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponseBodyApplicationsProcessData extends $tea.Model {
  applicationName?: string;
  applicationVersion?: string;
  cpuPercent?: number;
  gpuPercent?: number;
  iospeed?: number;
  memPercent?: number;
  pid?: number;
  processPath?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationVersion: 'ApplicationVersion',
      cpuPercent: 'CpuPercent',
      gpuPercent: 'GpuPercent',
      iospeed: 'Iospeed',
      memPercent: 'MemPercent',
      pid: 'Pid',
      processPath: 'ProcessPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationVersion: 'string',
      cpuPercent: 'number',
      gpuPercent: 'number',
      iospeed: 'number',
      memPercent: 'number',
      pid: 'number',
      processPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponseBodyApplications extends $tea.Model {
  applicationName?: string;
  applicationVersion?: string;
  cpuPercent?: number;
  gpuPercent?: number;
  iconUrl?: string;
  ioSpeed?: number;
  memPercent?: number;
  pid?: number;
  processData?: DescribeGuestApplicationsResponseBodyApplicationsProcessData[];
  processPath?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationVersion: 'ApplicationVersion',
      cpuPercent: 'CpuPercent',
      gpuPercent: 'GpuPercent',
      iconUrl: 'IconUrl',
      ioSpeed: 'IoSpeed',
      memPercent: 'MemPercent',
      pid: 'Pid',
      processData: 'ProcessData',
      processPath: 'ProcessPath',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationVersion: 'string',
      cpuPercent: 'number',
      gpuPercent: 'number',
      iconUrl: 'string',
      ioSpeed: 'number',
      memPercent: 'number',
      pid: 'number',
      processData: { 'type': 'array', 'itemType': DescribeGuestApplicationsResponseBodyApplicationsProcessData },
      processPath: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponseBodyImageModifiedRecords extends $tea.Model {
  imageId?: string;
  imageName?: string;
  newImageId?: string;
  newImageName?: string;
  status?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      newImageId: 'NewImageId',
      newImageName: 'NewImageName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      newImageId: 'string',
      newImageName: 'string',
      status: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  appVersion?: string;
  creationTime?: string;
  dataDiskSize?: number;
  description?: string;
  gpuCategory?: boolean;
  gpuDriverVersion?: string;
  imageId?: string;
  imageType?: string;
  name?: string;
  osType?: string;
  platform?: string;
  progress?: string;
  protocolType?: string;
  sessionType?: string;
  sharedCount?: number;
  size?: number;
  status?: string;
  supportedLanguages?: string[];
  updateTime?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      creationTime: 'CreationTime',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osType: 'OsType',
      platform: 'Platform',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      sharedCount: 'SharedCount',
      size: 'Size',
      status: 'Status',
      supportedLanguages: 'SupportedLanguages',
      updateTime: 'UpdateTime',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      creationTime: 'string',
      dataDiskSize: 'number',
      description: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osType: 'string',
      platform: 'string',
      progress: 'string',
      protocolType: 'string',
      sessionType: 'string',
      sharedCount: 'number',
      size: 'number',
      status: 'string',
      supportedLanguages: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $tea.Model {
  creationTime?: string;
  desktopId?: string;
  desktopName?: string;
  dropped?: number;
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishTime?: string;
  invocationStatus?: string;
  output?: string;
  repeats?: number;
  startTime?: string;
  stopTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $tea.Model {
  commandContent?: string;
  commandType?: string;
  creationTime?: string;
  endUserId?: string;
  invocationStatus?: string;
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      endUserId: 'EndUserId',
      invocationStatus: 'InvocationStatus',
      invokeDesktops: 'InvokeDesktops',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandType: 'string',
      creationTime: 'string',
      endUserId: 'string',
      invocationStatus: 'string',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBodyKeys extends $tea.Model {
  alias?: string;
  arn?: string;
  keyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      arn: 'Arn',
      keyId: 'KeyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      arn: 'string',
      keyId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups extends $tea.Model {
  desktopGroupId?: string;
  desktopGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystems extends $tea.Model {
  capacity?: number;
  createTime?: string;
  description?: string;
  desktopGroups?: DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups[];
  encryptionEnabled?: boolean;
  fileSystemId?: string;
  fileSystemName?: string;
  fileSystemStatus?: string;
  fileSystemType?: string;
  meteredSize?: number;
  mountTargetDomain?: string;
  mountTargetStatus?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  profileCompatible?: boolean;
  regionId?: string;
  storageType?: string;
  supportAcl?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      createTime: 'CreateTime',
      description: 'Description',
      desktopGroups: 'DesktopGroups',
      encryptionEnabled: 'EncryptionEnabled',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      fileSystemStatus: 'FileSystemStatus',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      mountTargetDomain: 'MountTargetDomain',
      mountTargetStatus: 'MountTargetStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      profileCompatible: 'ProfileCompatible',
      regionId: 'RegionId',
      storageType: 'StorageType',
      supportAcl: 'SupportAcl',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      createTime: 'string',
      description: 'string',
      desktopGroups: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups },
      encryptionEnabled: 'boolean',
      fileSystemId: 'string',
      fileSystemName: 'string',
      fileSystemStatus: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      mountTargetDomain: 'string',
      mountTargetStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      profileCompatible: 'boolean',
      regionId: 'string',
      storageType: 'string',
      supportAcl: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBodyNetworkPackages extends $tea.Model {
  bandwidth?: number;
  businessStatus?: string;
  createTime?: string;
  eipAddresses?: string[];
  expiredTime?: string;
  internetChargeType?: string;
  networkPackageId?: string;
  networkPackageStatus?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteVpcType?: string;
  payType?: string;
  reservationActiveTime?: string;
  reservationBandwidth?: number;
  reservationInternetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      eipAddresses: 'EipAddresses',
      expiredTime: 'ExpiredTime',
      internetChargeType: 'InternetChargeType',
      networkPackageId: 'NetworkPackageId',
      networkPackageStatus: 'NetworkPackageStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteVpcType: 'OfficeSiteVpcType',
      payType: 'PayType',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'string',
      eipAddresses: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      internetChargeType: 'string',
      networkPackageId: 'string',
      networkPackageStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteVpcType: 'string',
      payType: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'number',
      reservationInternetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $tea.Model {
  ADConnectorAddress?: string;
  connectorStatus?: string;
  networkInterfaceId?: string;
  specification?: string;
  trustKey?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesLogs extends $tea.Model {
  level?: string;
  message?: string;
  step?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $tea.Model {
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  adHostname?: string;
  bandwidth?: number;
  cenAttachStatus?: string;
  cenId?: string;
  cidrBlock?: string;
  cloudBoxOfficeSite?: boolean;
  creationTime?: string;
  customSecurityGroupId?: string;
  desktopAccessType?: string;
  desktopCount?: number;
  desktopVpcEndpoint?: string;
  dnsAddress?: string[];
  dnsUserName?: string;
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableCrossDesktopAccess?: boolean;
  enableInternetAccess?: boolean;
  fileSystemIds?: string[];
  logs?: DescribeOfficeSitesResponseBodyOfficeSitesLogs[];
  mfaEnabled?: boolean;
  name?: string;
  needVerifyLoginRisk?: boolean;
  needVerifyZeroDevice?: boolean;
  networkPackageId?: string;
  officeSiteId?: string;
  officeSiteType?: string;
  ouName?: string;
  protocolType?: string;
  rdsLicenseAddress?: string;
  rdsLicenseDomainName?: string;
  rdsLicenseStatus?: string;
  ssoEnabled?: boolean;
  ssoType?: string;
  status?: string;
  subDnsAddress?: string[];
  subDomainName?: string;
  totalEdsCount?: number;
  totalEdsCountForGroup?: number;
  trustPassword?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      adHostname: 'AdHostname',
      bandwidth: 'Bandwidth',
      cenAttachStatus: 'CenAttachStatus',
      cenId: 'CenId',
      cidrBlock: 'CidrBlock',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopCount: 'DesktopCount',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      fileSystemIds: 'FileSystemIds',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      networkPackageId: 'NetworkPackageId',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      ouName: 'OuName',
      protocolType: 'ProtocolType',
      rdsLicenseAddress: 'RdsLicenseAddress',
      rdsLicenseDomainName: 'RdsLicenseDomainName',
      rdsLicenseStatus: 'RdsLicenseStatus',
      ssoEnabled: 'SsoEnabled',
      ssoType: 'SsoType',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesADConnectors },
      adHostname: 'string',
      bandwidth: 'number',
      cenAttachStatus: 'string',
      cenId: 'string',
      cidrBlock: 'string',
      cloudBoxOfficeSite: 'boolean',
      creationTime: 'string',
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopCount: 'number',
      desktopVpcEndpoint: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      logs: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      networkPackageId: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      ouName: 'string',
      protocolType: 'string',
      rdsLicenseAddress: 'string',
      rdsLicenseDomainName: 'string',
      rdsLicenseStatus: 'string',
      ssoEnabled: 'boolean',
      ssoType: 'string',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule extends $tea.Model {
  description?: string;
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule extends $tea.Model {
  domain?: string;
  policy?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $tea.Model {
  adminAccess?: string;
  appContentProtection?: string;
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  cameraRedirect?: string;
  clientTypes?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes[];
  clipboard?: string;
  cpuDownGradeDuration?: number;
  cpuProcessors?: string[];
  cpuProtectedMode?: string;
  cpuRateLimit?: number;
  cpuSampleDuration?: number;
  cpuSingleRateLimit?: number;
  domainList?: string;
  domainResolveRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule[];
  domainResolveRuleType?: string;
  edsCount?: number;
  endUserApplyAdminCoordinate?: string;
  endUserGroupCoordinate?: string;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  internetCommunicationProtocol?: string;
  localDrive?: string;
  memoryDownGradeDuration?: number;
  memoryProcessors?: string[];
  memoryProtectedMode?: string;
  memoryRateLimit?: number;
  memorySampleDuration?: number;
  memorySingleRateLimit?: number;
  name?: string;
  netRedirect?: string;
  netRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule[];
  policyGroupId?: string;
  policyGroupType?: string;
  policyStatus?: string;
  preemptLogin?: string;
  preemptLoginUsers?: string[];
  printerRedirection?: string;
  recordContent?: string;
  recordContentExpires?: number;
  recording?: string;
  recordingAudio?: string;
  recordingDuration?: number;
  recordingEndTime?: string;
  recordingExpires?: number;
  recordingFps?: number;
  recordingStartTime?: string;
  recordingUserNotify?: string;
  recordingUserNotifyMessage?: string;
  remoteCoordinate?: string;
  scope?: string;
  scopeValue?: string[];
  usbRedirect?: string;
  usbSupplyRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  videoRedirect?: string;
  visualQuality?: string;
  watermark?: string;
  watermarkAntiCam?: string;
  watermarkColor?: number;
  watermarkCustomText?: string;
  watermarkDegree?: number;
  watermarkFontSize?: number;
  watermarkFontStyle?: string;
  watermarkPower?: string;
  watermarkRowAmount?: number;
  watermarkSecurity?: string;
  watermarkTransparency?: string;
  watermarkTransparencyValue?: number;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      cameraRedirect: 'CameraRedirect',
      clientTypes: 'ClientTypes',
      clipboard: 'Clipboard',
      cpuDownGradeDuration: 'CpuDownGradeDuration',
      cpuProcessors: 'CpuProcessors',
      cpuProtectedMode: 'CpuProtectedMode',
      cpuRateLimit: 'CpuRateLimit',
      cpuSampleDuration: 'CpuSampleDuration',
      cpuSingleRateLimit: 'CpuSingleRateLimit',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      edsCount: 'EdsCount',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      localDrive: 'LocalDrive',
      memoryDownGradeDuration: 'MemoryDownGradeDuration',
      memoryProcessors: 'MemoryProcessors',
      memoryProtectedMode: 'MemoryProtectedMode',
      memoryRateLimit: 'MemoryRateLimit',
      memorySampleDuration: 'MemorySampleDuration',
      memorySingleRateLimit: 'MemorySingleRateLimit',
      name: 'Name',
      netRedirect: 'NetRedirect',
      netRedirectRule: 'NetRedirectRule',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      preemptLogin: 'PreemptLogin',
      preemptLoginUsers: 'PreemptLoginUsers',
      printerRedirection: 'PrinterRedirection',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      remoteCoordinate: 'RemoteCoordinate',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      cameraRedirect: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes },
      clipboard: 'string',
      cpuDownGradeDuration: 'number',
      cpuProcessors: { 'type': 'array', 'itemType': 'string' },
      cpuProtectedMode: 'string',
      cpuRateLimit: 'number',
      cpuSampleDuration: 'number',
      cpuSingleRateLimit: 'number',
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      edsCount: 'number',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      localDrive: 'string',
      memoryDownGradeDuration: 'number',
      memoryProcessors: { 'type': 'array', 'itemType': 'string' },
      memoryProtectedMode: 'string',
      memoryRateLimit: 'number',
      memorySampleDuration: 'number',
      memorySingleRateLimit: 'number',
      name: 'string',
      netRedirect: 'string',
      netRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule },
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      preemptLogin: 'string',
      preemptLoginUsers: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      remoteCoordinate: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkCustomText: 'string',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestBundleModels extends $tea.Model {
  amount?: number;
  bundleId?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bundleId: 'BundleId',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bundleId: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPricePromotions extends $tea.Model {
  optionCode?: string;
  promotionDesc?: string;
  promotionId?: string;
  promotionName?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  orderLines?: { [key: string]: string };
  originalPrice?: number;
  promotions?: DescribePriceResponseBodyPriceInfoPricePromotions[];
  spPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      spPrice: 'SpPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderLines: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPricePromotions },
      spPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $tea.Model {
  freeCdsQuota?: boolean;
  freeCdsSize?: number;
  price?: DescribePriceResponseBodyPriceInfoPrice;
  rules?: DescribePriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      freeCdsQuota: 'FreeCdsQuota',
      freeCdsSize: 'FreeCdsSize',
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeCdsQuota: 'boolean',
      freeCdsSize: 'number',
      price: DescribePriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForCreateDesktopOversoldGroupResponseBodyData extends $tea.Model {
  price?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData extends $tea.Model {
  price?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForRenewDesktopOversoldGroupResponseBodyData extends $tea.Model {
  price?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponseBodyRecordings extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  endTime?: string;
  endUserIds?: string[];
  filePath?: string;
  policyGroupId?: string;
  recordingSize?: number;
  recordingType?: string;
  signedUrl?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserIds: 'EndUserIds',
      filePath: 'FilePath',
      policyGroupId: 'PolicyGroupId',
      recordingSize: 'RecordingSize',
      recordingType: 'RecordingType',
      signedUrl: 'SignedUrl',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      policyGroupId: 'string',
      recordingSize: 'number',
      recordingType: 'string',
      signedUrl: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionStatisticResponseBodyStatistic extends $tea.Model {
  count?: number;
  timePoint?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  creationTime?: string;
  creator?: string;
  deletionTime?: string;
  description?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  progress?: string;
  protocolType?: string;
  remainTime?: number;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceDiskSize?: string;
  sourceDiskType?: string;
  status?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creator: 'Creator',
      deletionTime: 'DeletionTime',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      remainTime: 'RemainTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      creator: 'string',
      deletionTime: 'string',
      description: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      progress: 'string',
      protocolType: 'string',
      remainTime: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      status: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectTimeResponseBodyData extends $tea.Model {
  endConnectTime?: string;
  endUserId?: string;
  oversoldGroupId?: string;
  startConnectTime?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endConnectTime: 'EndConnectTime',
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      startConnectTime: 'StartConnectTime',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endConnectTime: 'string',
      endUserId: 'string',
      oversoldGroupId: 'string',
      startConnectTime: 'string',
      userDesktopId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBodyConnectionRecords extends $tea.Model {
  connectDuration?: string;
  connectEndTime?: string;
  connectStartTime?: string;
  connectionRecordId?: string;
  desktopId?: string;
  desktopName?: string;
  static names(): { [key: string]: string } {
    return {
      connectDuration: 'ConnectDuration',
      connectEndTime: 'ConnectEndTime',
      connectStartTime: 'ConnectStartTime',
      connectionRecordId: 'ConnectionRecordId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDuration: 'string',
      connectEndTime: 'string',
      connectStartTime: 'string',
      connectionRecordId: 'string',
      desktopId: 'string',
      desktopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules extends $tea.Model {
  blackPath?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath;
  whitePaths?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths[];
  static names(): { [key: string]: string } {
    return {
      blackPath: 'BlackPath',
      whitePaths: 'WhitePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackPath: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath,
      whitePaths: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRule extends $tea.Model {
  desktopGroupId?: string;
  rules?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules[];
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      rules: 'Rules',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules },
      userProfileRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersExternalInfo extends $tea.Model {
  externalName?: string;
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  propertyType?: number;
  propertyValues?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues[];
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsers extends $tea.Model {
  connectionStatus?: string;
  desktopId?: string;
  desktopName?: string;
  displayName?: string;
  endUserEmail?: string;
  endUserId?: string;
  endUserName?: string;
  endUserPhone?: string;
  endUserRemark?: string;
  endUserType?: string;
  externalInfo?: DescribeUsersInGroupResponseBodyEndUsersExternalInfo;
  userDesktopId?: string;
  userSetPropertiesModels?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      displayName: 'DisplayName',
      endUserEmail: 'EndUserEmail',
      endUserId: 'EndUserId',
      endUserName: 'EndUserName',
      endUserPhone: 'EndUserPhone',
      endUserRemark: 'EndUserRemark',
      endUserType: 'EndUserType',
      externalInfo: 'ExternalInfo',
      userDesktopId: 'UserDesktopId',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      displayName: 'string',
      endUserEmail: 'string',
      endUserId: 'string',
      endUserName: 'string',
      endUserPhone: 'string',
      endUserRemark: 'string',
      endUserType: 'string',
      externalInfo: DescribeUsersInGroupResponseBodyEndUsersExternalInfo,
      userDesktopId: 'string',
      userSetPropertiesModels: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersPasswordResponseBodyDesktopUsers extends $tea.Model {
  displayName?: string;
  endUserId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUserId: 'EndUserId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUserId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $tea.Model {
  consecutiveFails?: number;
  directoryId?: string;
  endUserId?: string;
  gmtEnabled?: string;
  gmtUnlock?: string;
  officeSiteId?: string;
  serialNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      officeSiteId: 'OfficeSiteId',
      serialNumber: 'SerialNumber',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      directoryId: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      officeSiteId: 'string',
      serialNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsRequestSessions extends $tea.Model {
  desktopId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsResponseBodyInvalidSessions extends $tea.Model {
  desktopId?: string;
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponseBodyData extends $tea.Model {
  asyncTaskId?: string;
  consumedProcess?: string;
  errCode?: number;
  message?: string;
  status?: string;
  totalProcess?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      consumedProcess: 'ConsumedProcess',
      errCode: 'ErrCode',
      message: 'Message',
      status: 'Status',
      totalProcess: 'TotalProcess',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      consumedProcess: 'string',
      errCode: 'number',
      message: 'string',
      status: 'string',
      totalProcess: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $tea.Model {
  buyResAmount?: number;
  cron?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxResAmount?: number;
  minResAmount?: number;
  ratioThreshold?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buyResAmount: 'BuyResAmount',
      cron: 'Cron',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxResAmount: 'MaxResAmount',
      minResAmount: 'MinResAmount',
      ratioThreshold: 'RatioThreshold',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResAmount: 'number',
      cron: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxResAmount: 'number',
      minResAmount: 'number',
      ratioThreshold: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktopsTimerInfos extends $tea.Model {
  cronExpression?: string;
  forced?: boolean;
  status?: number;
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      forced: 'Forced',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      forced: 'boolean',
      status: 'number',
      timerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktops extends $tea.Model {
  allowAutoSetup?: number;
  allowBufferCount?: number;
  bindAmount?: number;
  buyDesktopsCount?: number;
  comments?: string;
  connectDuration?: number;
  cpu?: number;
  creationTime?: string;
  creator?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  directoryId?: string;
  directoryType?: string;
  expiredTime?: string;
  gpuCount?: number;
  gpuSpec?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  memory?: number;
  minDesktopsCount?: number;
  nasFileSystemID?: string;
  nasFileSystemName?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  ownBundleId?: string;
  ownBundleName?: string;
  ownType?: number;
  payType?: string;
  policyGroupId?: string;
  policyGroupIds?: string[];
  policyGroupName?: string;
  policyGroupNames?: string[];
  profileFollowSwitch?: boolean;
  ratioThreshold?: number;
  resType?: number;
  resetType?: number;
  scaleTimerInfos?: GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos[];
  status?: number;
  stopDuration?: number;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  timerInfos?: GetDesktopGroupDetailResponseBodyDesktopsTimerInfos[];
  timingStrategyInfo?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      expiredTime: 'ExpiredTime',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      nasFileSystemID: 'NasFileSystemID',
      nasFileSystemName: 'NasFileSystemName',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
      policyGroupNames: 'PolicyGroupNames',
      profileFollowSwitch: 'ProfileFollowSwitch',
      ratioThreshold: 'RatioThreshold',
      resType: 'ResType',
      resetType: 'ResetType',
      scaleTimerInfos: 'ScaleTimerInfos',
      status: 'Status',
      stopDuration: 'StopDuration',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      timerInfos: 'TimerInfos',
      timingStrategyInfo: 'TimingStrategyInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      comments: 'string',
      connectDuration: 'number',
      cpu: 'number',
      creationTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      expiredTime: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      nasFileSystemID: 'string',
      nasFileSystemName: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyGroupNames: { 'type': 'array', 'itemType': 'string' },
      profileFollowSwitch: 'boolean',
      ratioThreshold: 'number',
      resType: 'number',
      resetType: 'number',
      scaleTimerInfos: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos },
      status: 'number',
      stopDuration: 'number',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktopsTimerInfos },
      timingStrategyInfo: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesResponseBodyFileModels extends $tea.Model {
  category?: string;
  contentType?: string;
  createTime?: string;
  creator?: string;
  description?: string;
  downloadUrl?: string;
  fileExtension?: string;
  fileId?: string;
  filePath?: string;
  fileType?: string;
  md5?: string;
  modifiedTime?: string;
  modifier?: string;
  name?: string;
  openTime?: string;
  openTimeStamp?: number;
  parentId?: string;
  regionId?: string;
  sha1?: string;
  size?: number;
  thumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      fileExtension: 'FileExtension',
      fileId: 'FileId',
      filePath: 'FilePath',
      fileType: 'FileType',
      md5: 'Md5',
      modifiedTime: 'ModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      openTime: 'OpenTime',
      openTimeStamp: 'OpenTimeStamp',
      parentId: 'ParentId',
      regionId: 'RegionId',
      sha1: 'Sha1',
      size: 'Size',
      thumbnail: 'Thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      contentType: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      downloadUrl: 'string',
      fileExtension: 'string',
      fileId: 'string',
      filePath: 'string',
      fileType: 'string',
      md5: 'string',
      modifiedTime: 'string',
      modifier: 'string',
      name: 'string',
      openTime: 'string',
      openTimeStamp: 'number',
      parentId: 'string',
      regionId: 'string',
      sha1: 'string',
      size: 'number',
      thumbnail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBodyUsers extends $tea.Model {
  displayName?: string;
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults extends $tea.Model {
  hasExpiredEdsCount?: number;
  hasExpiredEdsCountForGroup?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteStatus?: string;
  regionId?: string;
  runningEdsCount?: number;
  runningEdsCountForGroup?: number;
  totalEdsCount?: number;
  totalEdsCountForGroup?: number;
  vpcType?: string;
  willExpiredEdsCount?: number;
  willExpiredEdsCountForGroup?: number;
  static names(): { [key: string]: string } {
    return {
      hasExpiredEdsCount: 'HasExpiredEdsCount',
      hasExpiredEdsCountForGroup: 'HasExpiredEdsCountForGroup',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteStatus: 'OfficeSiteStatus',
      regionId: 'RegionId',
      runningEdsCount: 'RunningEdsCount',
      runningEdsCountForGroup: 'RunningEdsCountForGroup',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      vpcType: 'VpcType',
      willExpiredEdsCount: 'WillExpiredEdsCount',
      willExpiredEdsCountForGroup: 'WillExpiredEdsCountForGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasExpiredEdsCount: 'number',
      hasExpiredEdsCountForGroup: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteStatus: 'string',
      regionId: 'string',
      runningEdsCount: 'number',
      runningEdsCountForGroup: 'number',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      vpcType: 'string',
      willExpiredEdsCount: 'number',
      willExpiredEdsCountForGroup: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponseBodyUsers extends $tea.Model {
  displayName?: string;
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponseBodyOUNames extends $tea.Model {
  displayOUName?: string;
  OUName?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      displayOUName: 'DisplayOUName',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayOUName: 'string',
      OUName: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomizedListHeadersRequestHeaders extends $tea.Model {
  displayType?: string;
  headerKey?: string;
  static names(): { [key: string]: string } {
    return {
      displayType: 'DisplayType',
      headerKey: 'HeaderKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayType: 'string',
      headerKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupResponseBodyData extends $tea.Model {
  oversoldGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldGroupId: 'OversoldGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldGroupSaleResponseBodyData extends $tea.Model {
  orderId?: number;
  oversoldGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      oversoldGroupId: 'OversoldGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      oversoldGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopOversoldUserGroupResponseBodyData extends $tea.Model {
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopTimerRequestDesktopTimers extends $tea.Model {
  allowClientSetting?: boolean;
  cronExpression?: string;
  enforce?: boolean;
  interval?: number;
  operationType?: string;
  resetType?: string;
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBodyModifyResults extends $tea.Model {
  code?: string;
  desktopId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestClientType extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestDomainResolveRule extends $tea.Model {
  description?: string;
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveCdsFileResponseBodyMoveCdsFileModel extends $tea.Model {
  asyncTaskId?: string;
  exist?: boolean;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      exist: 'Exist',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      exist: 'boolean',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBodyRebuildResults extends $tea.Model {
  code?: string;
  desktopId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionRequestMemberListCdsIdentity extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionRequestMemberList extends $tea.Model {
  cdsIdentity?: RemoveFilePermissionRequestMemberListCdsIdentity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: RemoveFilePermissionRequestMemberListCdsIdentity,
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopOversoldGroupResponseBodyData extends $tea.Model {
  orderId?: number;
  oversoldGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      oversoldGroupId: 'OversoldGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      oversoldGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupScaleTimerRequestScaleTimerInfos extends $tea.Model {
  buyResAmount?: number;
  cron?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxResAmount?: number;
  minResAmount?: number;
  ratioThreshold?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buyResAmount: 'BuyResAmount',
      cron: 'Cron',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxResAmount: 'MaxResAmount',
      minResAmount: 'MinResAmount',
      ratioThreshold: 'RatioThreshold',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResAmount: 'number',
      cron: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxResAmount: 'number',
      minResAmount: 'number',
      ratioThreshold: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserProfilePathRulesRequestUserProfilePathRule extends $tea.Model {
  blackPath?: SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath;
  whitePaths?: SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths[];
  static names(): { [key: string]: string } {
    return {
      blackPath: 'BlackPath',
      whitePaths: 'WhitePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackPath: SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath,
      whitePaths: { 'type': 'array', 'itemType': SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponseBodyRouteEntries extends $tea.Model {
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
    * If you do not create any cloud computer in a convenience office network within 15 days, the office network is automatically locked and virtual private cloud (VPC) resources are released. If you want to resume the office network, you can call this operation to unlock the office network.
    *
    * @param request ActivateOfficeSiteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ActivateOfficeSiteResponse
   */
  async activateOfficeSiteWithOptions(request: ActivateOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<ActivateOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ActivateOfficeSiteResponse>(await this.callApi(params, req, runtime), new ActivateOfficeSiteResponse({}));
  }

  /**
    * If you do not create any cloud computer in a convenience office network within 15 days, the office network is automatically locked and virtual private cloud (VPC) resources are released. If you want to resume the office network, you can call this operation to unlock the office network.
    *
    * @param request ActivateOfficeSiteRequest
    * @return ActivateOfficeSiteResponse
   */
  async activateOfficeSite(request: ActivateOfficeSiteRequest): Promise<ActivateOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateOfficeSiteWithOptions(request, runtime);
  }

  async addDesktopOversoldUserGroupWithOptions(request: AddDesktopOversoldUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddDesktopOversoldUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new AddDesktopOversoldUserGroupResponse({}));
  }

  async addDesktopOversoldUserGroup(request: AddDesktopOversoldUserGroupRequest): Promise<AddDesktopOversoldUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
    * You can add only one device to a tenant.
    *
    * @param request AddDevicesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDevicesResponse
   */
  async addDevicesWithOptions(request: AddDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddDevicesResponse>(await this.callApi(params, req, runtime), new AddDevicesResponse({}));
  }

  /**
    * You can add only one device to a tenant.
    *
    * @param request AddDevicesRequest
    * @return AddDevicesResponse
   */
  async addDevices(request: AddDevicesRequest): Promise<AddDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDevicesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to share a specific folder with other users. You can also configure the folder permissions.
    *
    * @param tmpReq AddFilePermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddFilePermissionResponse
   */
  async addFilePermissionWithOptions(tmpReq: AddFilePermissionRequest, runtime: $Util.RuntimeOptions): Promise<AddFilePermissionResponse> {
    Util.validateModel(tmpReq);
    let request = new AddFilePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddFilePermissionResponse>(await this.callApi(params, req, runtime), new AddFilePermissionResponse({}));
  }

  /**
    * You can call this operation to share a specific folder with other users. You can also configure the folder permissions.
    *
    * @param request AddFilePermissionRequest
    * @return AddFilePermissionResponse
   */
  async addFilePermission(request: AddFilePermissionRequest): Promise<AddFilePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFilePermissionWithOptions(request, runtime);
  }

  async addUserToDesktopGroupWithOptions(request: AddUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new AddUserToDesktopGroupResponse({}));
  }

  async addUserToDesktopGroup(request: AddUserToDesktopGroupRequest): Promise<AddUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToDesktopGroupWithOptions(request, runtime);
  }

  async addUserToDesktopOversoldUserGroupWithOptions(request: AddUserToDesktopOversoldUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToDesktopOversoldUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addUserAmount)) {
      query["AddUserAmount"] = request.addUserAmount;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserToDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new AddUserToDesktopOversoldUserGroupResponse({}));
  }

  async addUserToDesktopOversoldUserGroup(request: AddUserToDesktopOversoldUserGroupRequest): Promise<AddUserToDesktopOversoldUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
    * You can also associate an automatic snapshot policy with a cloud desktop in the Elastic Desktop Service (EDS) console. To do so, perform the following steps: 1. Log on to the EDS console. 2. Choose Desktops and Groups > Desktops in the left-side navigation pane. 3. Find the cloud desktop that you want to manage on the Cloud Desktops page and choose More > Change Automatic Snapshot Policy in the Actions column. 4. Configure a policy for the cloud desktop as prompted in the Change Automatic Snapshot Policy panel.
    * After you associate an automatic snapshot policy with the cloud desktop, the system creates snapshots for the cloud desktop based on the policy.
    *
    * @param request ApplyAutoSnapshotPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(request: ApplyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ApplyAutoSnapshotPolicyResponse({}));
  }

  /**
    * You can also associate an automatic snapshot policy with a cloud desktop in the Elastic Desktop Service (EDS) console. To do so, perform the following steps: 1. Log on to the EDS console. 2. Choose Desktops and Groups > Desktops in the left-side navigation pane. 3. Find the cloud desktop that you want to manage on the Cloud Desktops page and choose More > Change Automatic Snapshot Policy in the Actions column. 4. Configure a policy for the cloud desktop as prompted in the Change Automatic Snapshot Policy panel.
    * After you associate an automatic snapshot policy with the cloud desktop, the system creates snapshots for the cloud desktop based on the policy.
    *
    * @param request ApplyAutoSnapshotPolicyRequest
    * @return ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async applyCoordinatePrivilegeWithOptions(request: ApplyCoordinatePrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCoordinatePrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ApplyCoordinatePrivilegeResponse>(await this.callApi(params, req, runtime), new ApplyCoordinatePrivilegeResponse({}));
  }

  async applyCoordinatePrivilege(request: ApplyCoordinatePrivilegeRequest): Promise<ApplyCoordinatePrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCoordinatePrivilegeWithOptions(request, runtime);
  }

  async applyCoordinationForMonitoringWithOptions(request: ApplyCoordinationForMonitoringRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCoordinationForMonitoringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coordinatePolicyType)) {
      query["CoordinatePolicyType"] = request.coordinatePolicyType;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.initiatorType)) {
      query["InitiatorType"] = request.initiatorType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceCandidates)) {
      query["ResourceCandidates"] = request.resourceCandidates;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ApplyCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new ApplyCoordinationForMonitoringResponse({}));
  }

  async applyCoordinationForMonitoring(request: ApplyCoordinationForMonitoringRequest): Promise<ApplyCoordinationForMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCoordinationForMonitoringWithOptions(request, runtime);
  }

  /**
    * The cloud computers for which you want to allow image updates must be in the Running state.
    *
    * @param request ApproveFotaUpdateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApproveFotaUpdateResponse
   */
  async approveFotaUpdateWithOptions(request: ApproveFotaUpdateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveFotaUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ApproveFotaUpdateResponse>(await this.callApi(params, req, runtime), new ApproveFotaUpdateResponse({}));
  }

  /**
    * The cloud computers for which you want to allow image updates must be in the Running state.
    *
    * @param request ApproveFotaUpdateRequest
    * @return ApproveFotaUpdateResponse
   */
  async approveFotaUpdate(request: ApproveFotaUpdateRequest): Promise<ApproveFotaUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  async associateNetworkPackageWithOptions(request: AssociateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<AssociateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AssociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new AssociateNetworkPackageResponse({}));
  }

  async associateNetworkPackage(request: AssociateNetworkPackageRequest): Promise<AssociateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateNetworkPackageWithOptions(request, runtime);
  }

  /**
    * Prerequisites
    * *   A CEN instance is created.
    * *   The office network is an advanced office network, and the account system type is convenient account.
    * >  The office network is added to the CEN instance when you create the instance. An office network can be added to only one CEN instance.
    *
    * @param request AttachCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachCenResponse
   */
  async attachCenWithOptions(request: AttachCenRequest, runtime: $Util.RuntimeOptions): Promise<AttachCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachCenResponse>(await this.callApi(params, req, runtime), new AttachCenResponse({}));
  }

  /**
    * Prerequisites
    * *   A CEN instance is created.
    * *   The office network is an advanced office network, and the account system type is convenient account.
    * >  The office network is added to the CEN instance when you create the instance. An office network can be added to only one CEN instance.
    *
    * @param request AttachCenRequest
    * @return AttachCenResponse
   */
  async attachCen(request: AttachCenRequest): Promise<AttachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCenWithOptions(request, runtime);
  }

  async attachEndUserWithOptions(request: AttachEndUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachEndUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachEndUserResponse>(await this.callApi(params, req, runtime), new AttachEndUserResponse({}));
  }

  async attachEndUser(request: AttachEndUserRequest): Promise<AttachEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEndUserWithOptions(request, runtime);
  }

  async cancelAutoSnapshotPolicyWithOptions(request: CancelAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CancelAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CancelAutoSnapshotPolicyResponse({}));
  }

  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async cancelCdsFileShareLinkWithOptions(request: CancelCdsFileShareLinkRequest, runtime: $Util.RuntimeOptions): Promise<CancelCdsFileShareLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new CancelCdsFileShareLinkResponse({}));
  }

  async cancelCdsFileShareLink(request: CancelCdsFileShareLinkRequest): Promise<CancelCdsFileShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCdsFileShareLinkWithOptions(request, runtime);
  }

  async cancelCoordinationForMonitoringWithOptions(request: CancelCoordinationForMonitoringRequest, runtime: $Util.RuntimeOptions): Promise<CancelCoordinationForMonitoringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coIds)) {
      query["CoIds"] = request.coIds;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new CancelCoordinationForMonitoringResponse({}));
  }

  async cancelCoordinationForMonitoring(request: CancelCoordinationForMonitoringRequest): Promise<CancelCoordinationForMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCoordinationForMonitoringWithOptions(request, runtime);
  }

  async cancelCopyImageWithOptions(request: CancelCopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CancelCopyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelCopyImageResponse>(await this.callApi(params, req, runtime), new CancelCopyImageResponse({}));
  }

  async cancelCopyImage(request: CancelCopyImageRequest): Promise<CancelCopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCopyImageWithOptions(request, runtime);
  }

  async clonePolicyGroupWithOptions(request: ClonePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ClonePolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ClonePolicyGroupResponse>(await this.callApi(params, req, runtime), new ClonePolicyGroupResponse({}));
  }

  async clonePolicyGroup(request: ClonePolicyGroupRequest): Promise<ClonePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clonePolicyGroupWithOptions(request, runtime);
  }

  async completeCdsFileWithOptions(request: CompleteCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<CompleteCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uploadId)) {
      query["UploadId"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CompleteCdsFileResponse>(await this.callApi(params, req, runtime), new CompleteCdsFileResponse({}));
  }

  async completeCdsFile(request: CompleteCdsFileRequest): Promise<CompleteCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeCdsFileWithOptions(request, runtime);
  }

  async configADConnectorTrustWithOptions(request: ConfigADConnectorTrustRequest, runtime: $Util.RuntimeOptions): Promise<ConfigADConnectorTrustResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.rdsLicenseDomain)) {
      query["RdsLicenseDomain"] = request.rdsLicenseDomain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.trustKey)) {
      query["TrustKey"] = request.trustKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ConfigADConnectorTrustResponse>(await this.callApi(params, req, runtime), new ConfigADConnectorTrustResponse({}));
  }

  async configADConnectorTrust(request: ConfigADConnectorTrustRequest): Promise<ConfigADConnectorTrustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configADConnectorTrustWithOptions(request, runtime);
  }

  async configADConnectorUserWithOptions(request: ConfigADConnectorUserRequest, runtime: $Util.RuntimeOptions): Promise<ConfigADConnectorUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ConfigADConnectorUserResponse>(await this.callApi(params, req, runtime), new ConfigADConnectorUserResponse({}));
  }

  async configADConnectorUser(request: ConfigADConnectorUserRequest): Promise<ConfigADConnectorUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configADConnectorUserWithOptions(request, runtime);
  }

  async copyCdsFileWithOptions(request: CopyCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<CopyCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRename)) {
      query["AutoRename"] = request.autoRename;
    }

    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileReceiverId)) {
      query["FileReceiverId"] = request.fileReceiverId;
    }

    if (!Util.isUnset(request.fileReceiverType)) {
      query["FileReceiverType"] = request.fileReceiverType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CopyCdsFileResponse>(await this.callApi(params, req, runtime), new CopyCdsFileResponse({}));
  }

  async copyCdsFile(request: CopyCdsFileRequest): Promise<CopyCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCdsFileWithOptions(request, runtime);
  }

  async copyImageWithOptions(request: CopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CopyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationDescription)) {
      query["DestinationDescription"] = request.destinationDescription;
    }

    if (!Util.isUnset(request.destinationImageName)) {
      query["DestinationImageName"] = request.destinationImageName;
    }

    if (!Util.isUnset(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CopyImageResponse>(await this.callApi(params, req, runtime), new CopyImageResponse({}));
  }

  async copyImage(request: CopyImageRequest): Promise<CopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  /**
    * An AD directory is used to connect to an enterprise\\"s existing Active Directory and is suitable for large-scale cloud computer deployment. You are charged directory fees when you connect your AD to cloud computers. For more information, see [Billing overview](~~188395~~).
    *
    * @param request CreateADConnectorDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateADConnectorDirectoryResponse
   */
  async createADConnectorDirectoryWithOptions(request: CreateADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new CreateADConnectorDirectoryResponse({}));
  }

  /**
    * An AD directory is used to connect to an enterprise\\"s existing Active Directory and is suitable for large-scale cloud computer deployment. You are charged directory fees when you connect your AD to cloud computers. For more information, see [Billing overview](~~188395~~).
    *
    * @param request CreateADConnectorDirectoryRequest
    * @return CreateADConnectorDirectoryResponse
   */
  async createADConnectorDirectory(request: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
  }

  /**
    * When you create an enterprise AD office network, the system automatically creates an AD connector to connect to an enterprise AD. You are charged for the AD connector. For more information, see [Billing overview](~~188395~~).
    * After you call this operation to create an AD office network, you must perform the following steps to complete AD domain setting:
    * 1.  Configure a conditional forwarder in a Domain Name System (DNS) server.
    * 2.  Configure a trust relationship in an AD domain controller and call the [ConfigADConnectorTrust](~~311258~~) operation to configure the trust relationship with the AD office network.
    * 3.  Call the [ListUserAdOrganizationUnits](~~311259~~) operation to query a list of organizational units (OUs) of the AD domain, and call the [ConfigADConnectorUser](~~311262~~) operation to specify an OU and administrator for the AD office network.
    *     >  When you create the AD office network, take note of the DomainUserName and DomainPassword parameters. If you specify the parameters, you need to only configure a conditional forwarder. If you do not specify the parameters, you must configure a conditional forwarder, trust relationship, and OU as prompted.
    * For more information, see [Create and manage enterprise AD office networks](~~214469~~).
    *
    * @param request CreateADConnectorOfficeSiteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateADConnectorOfficeSiteResponse
   */
  async createADConnectorOfficeSiteWithOptions(request: CreateADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new CreateADConnectorOfficeSiteResponse({}));
  }

  /**
    * When you create an enterprise AD office network, the system automatically creates an AD connector to connect to an enterprise AD. You are charged for the AD connector. For more information, see [Billing overview](~~188395~~).
    * After you call this operation to create an AD office network, you must perform the following steps to complete AD domain setting:
    * 1.  Configure a conditional forwarder in a Domain Name System (DNS) server.
    * 2.  Configure a trust relationship in an AD domain controller and call the [ConfigADConnectorTrust](~~311258~~) operation to configure the trust relationship with the AD office network.
    * 3.  Call the [ListUserAdOrganizationUnits](~~311259~~) operation to query a list of organizational units (OUs) of the AD domain, and call the [ConfigADConnectorUser](~~311262~~) operation to specify an OU and administrator for the AD office network.
    *     >  When you create the AD office network, take note of the DomainUserName and DomainPassword parameters. If you specify the parameters, you need to only configure a conditional forwarder. If you do not specify the parameters, you must configure a conditional forwarder, trust relationship, and OU as prompted.
    * For more information, see [Create and manage enterprise AD office networks](~~214469~~).
    *
    * @param request CreateADConnectorOfficeSiteRequest
    * @return CreateADConnectorOfficeSiteResponse
   */
  async createADConnectorOfficeSite(request: CreateADConnectorOfficeSiteRequest): Promise<CreateADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorOfficeSiteWithOptions(request, runtime);
  }

  async createAndBindNasFileSystemWithOptions(request: CreateAndBindNasFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndBindNasFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateAndBindNasFileSystemResponse>(await this.callApi(params, req, runtime), new CreateAndBindNasFileSystemResponse({}));
  }

  async createAndBindNasFileSystem(request: CreateAndBindNasFileSystemRequest): Promise<CreateAndBindNasFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndBindNasFileSystemWithOptions(request, runtime);
  }

  /**
    * You can call the operation to create an automatic snapshot policy based on a CRON expression. Then, the system automatically creates snapshots of a cloud desktop based on the policy.
    *
    * @param request CreateAutoSnapshotPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(request: CreateAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CreateAutoSnapshotPolicyResponse({}));
  }

  /**
    * You can call the operation to create an automatic snapshot policy based on a CRON expression. Then, the system automatically creates snapshots of a cloud desktop based on the policy.
    *
    * @param request CreateAutoSnapshotPolicyRequest
    * @return CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
    * Cloud computer templates include system templates and custom templates. A system template is the default template provided by Alibaba Cloud. You can call this operation to create a custom template.
    *
    * @param request CreateBundleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateBundleResponse
   */
  async createBundleWithOptions(request: CreateBundleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateBundleResponse>(await this.callApi(params, req, runtime), new CreateBundleResponse({}));
  }

  /**
    * Cloud computer templates include system templates and custom templates. A system template is the default template provided by Alibaba Cloud. You can call this operation to create a custom template.
    *
    * @param request CreateBundleRequest
    * @return CreateBundleResponse
   */
  async createBundle(request: CreateBundleRequest): Promise<CreateBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBundleWithOptions(request, runtime);
  }

  /**
    * After the RAM permissions are authenticated, you can call the CreateCdsFile operation to obtain the upload URL of a file and upload the file to a cloud disk.
    *
    * @param request CreateCdsFileRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCdsFileResponse
   */
  async createCdsFileWithOptions(request: CreateCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileHash)) {
      query["FileHash"] = request.fileHash;
    }

    if (!Util.isUnset(request.fileLength)) {
      query["FileLength"] = request.fileLength;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.parentFileId)) {
      query["ParentFileId"] = request.parentFileId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCdsFileResponse>(await this.callApi(params, req, runtime), new CreateCdsFileResponse({}));
  }

  /**
    * After the RAM permissions are authenticated, you can call the CreateCdsFile operation to obtain the upload URL of a file and upload the file to a cloud disk.
    *
    * @param request CreateCdsFileRequest
    * @return CreateCdsFileResponse
   */
  async createCdsFile(request: CreateCdsFileRequest): Promise<CreateCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdsFileWithOptions(request, runtime);
  }

  async createCdsFileShareLinkWithOptions(request: CreateCdsFileShareLinkRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdsFileShareLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableDownload)) {
      query["DisableDownload"] = request.disableDownload;
    }

    if (!Util.isUnset(request.disablePreview)) {
      query["DisablePreview"] = request.disablePreview;
    }

    if (!Util.isUnset(request.disableSave)) {
      query["DisableSave"] = request.disableSave;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.previewLimit)) {
      query["PreviewLimit"] = request.previewLimit;
    }

    if (!Util.isUnset(request.saveLimit)) {
      query["SaveLimit"] = request.saveLimit;
    }

    if (!Util.isUnset(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!Util.isUnset(request.sharePwd)) {
      query["SharePwd"] = request.sharePwd;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new CreateCdsFileShareLinkResponse({}));
  }

  async createCdsFileShareLink(request: CreateCdsFileShareLinkRequest): Promise<CreateCdsFileShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdsFileShareLinkWithOptions(request, runtime);
  }

  async createCloudDriveServiceWithOptions(request: CreateCloudDriveServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudDriveServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cdsChargeType)) {
      query["CdsChargeType"] = request.cdsChargeType;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteType)) {
      query["OfficeSiteType"] = request.officeSiteType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    if (!Util.isUnset(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    if (!Util.isUnset(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCloudDriveServiceResponse>(await this.callApi(params, req, runtime), new CreateCloudDriveServiceResponse({}));
  }

  async createCloudDriveService(request: CreateCloudDriveServiceRequest): Promise<CreateCloudDriveServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudDriveServiceWithOptions(request, runtime);
  }

  async createCloudDriveUsersWithOptions(request: CreateCloudDriveUsersRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudDriveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new CreateCloudDriveUsersResponse({}));
  }

  async createCloudDriveUsers(request: CreateCloudDriveUsersRequest): Promise<CreateCloudDriveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudDriveUsersWithOptions(request, runtime);
  }

  /**
    * Before you call this operation to create a desktop group, make sure that the following operations are complete:
    * *   You are familiar with the features, usage limits, and scaling policies of desktop groups. For more information, see [Overview](~~290959~~) of desktop groups.
    * *   Resources, such as workspaces, users, desktop templates, and policies, are created.
    *
    * @param request CreateDesktopGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDesktopGroupResponse
   */
  async createDesktopGroupWithOptions(request: CreateDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allClassifyUsers)) {
      query["AllClassifyUsers"] = request.allClassifyUsers;
    }

    if (!Util.isUnset(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!Util.isUnset(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.buyDesktopsCount)) {
      query["BuyDesktopsCount"] = request.buyDesktopsCount;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.connectDuration)) {
      query["ConnectDuration"] = request.connectDuration;
    }

    if (!Util.isUnset(request.defaultInitDesktopCount)) {
      query["DefaultInitDesktopCount"] = request.defaultInitDesktopCount;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.groupVersion)) {
      query["GroupVersion"] = request.groupVersion;
    }

    if (!Util.isUnset(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!Util.isUnset(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!Util.isUnset(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.profileFollowSwitch)) {
      query["ProfileFollowSwitch"] = request.profileFollowSwitch;
    }

    if (!Util.isUnset(request.ratioThreshold)) {
      query["RatioThreshold"] = request.ratioThreshold;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    if (!Util.isUnset(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!Util.isUnset(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDesktopGroupResponse>(await this.callApi(params, req, runtime), new CreateDesktopGroupResponse({}));
  }

  /**
    * Before you call this operation to create a desktop group, make sure that the following operations are complete:
    * *   You are familiar with the features, usage limits, and scaling policies of desktop groups. For more information, see [Overview](~~290959~~) of desktop groups.
    * *   Resources, such as workspaces, users, desktop templates, and policies, are created.
    *
    * @param request CreateDesktopGroupRequest
    * @return CreateDesktopGroupResponse
   */
  async createDesktopGroup(request: CreateDesktopGroupRequest): Promise<CreateDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopGroupWithOptions(request, runtime);
  }

  async createDesktopOversoldGroupWithOptions(request: CreateDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!Util.isUnset(request.oversoldWarn)) {
      query["OversoldWarn"] = request.oversoldWarn;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new CreateDesktopOversoldGroupResponse({}));
  }

  async createDesktopOversoldGroup(request: CreateDesktopOversoldGroupRequest): Promise<CreateDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopOversoldGroupWithOptions(request, runtime);
  }

  /**
    * Before you create cloud computers, complete the following preparations:
    * *   An office network (formerly called workspace) and users are created. For more information, see:
    *     *   Convenience office network: [CreateSimpleOfficeSite](~~215416~~) and [CreateUsers](~~437832~~).
    *     *   Active Directory (AD) office network: [CreateADConnectorOfficeSite](~~215417~~) and [Create an AD user](~~188619~~).
    * *   Make sure a cloud computer template exists. If no cloud computer template exists, call the [CreateBundle](~~188883~~) operation to create a template.
    * *   Make sure a policy exists. If no policy exists, call the [CreatePolicyGroup](~~188889~~) operation to create a policy.
    * If you want the cloud computers to automatically execute a custom command script, you can use the `UserCommands` field to configure a custom command.
    *
    * @param request CreateDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDesktopsResponse
   */
  async createDesktopsWithOptions(request: CreateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.bundleModels)) {
      query["BundleModels"] = request.bundleModels;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopMemberIp)) {
      query["DesktopMemberIp"] = request.desktopMemberIp;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopNameSuffix)) {
      query["DesktopNameSuffix"] = request.desktopNameSuffix;
    }

    if (!Util.isUnset(request.desktopTimers)) {
      query["DesktopTimers"] = request.desktopTimers;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userAssignMode)) {
      query["UserAssignMode"] = request.userAssignMode;
    }

    if (!Util.isUnset(request.userCommands)) {
      query["UserCommands"] = request.userCommands;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!Util.isUnset(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDesktopsResponse>(await this.callApi(params, req, runtime), new CreateDesktopsResponse({}));
  }

  /**
    * Before you create cloud computers, complete the following preparations:
    * *   An office network (formerly called workspace) and users are created. For more information, see:
    *     *   Convenience office network: [CreateSimpleOfficeSite](~~215416~~) and [CreateUsers](~~437832~~).
    *     *   Active Directory (AD) office network: [CreateADConnectorOfficeSite](~~215417~~) and [Create an AD user](~~188619~~).
    * *   Make sure a cloud computer template exists. If no cloud computer template exists, call the [CreateBundle](~~188883~~) operation to create a template.
    * *   Make sure a policy exists. If no policy exists, call the [CreatePolicyGroup](~~188889~~) operation to create a policy.
    * If you want the cloud computers to automatically execute a custom command script, you can use the `UserCommands` field to configure a custom command.
    *
    * @param request CreateDesktopsRequest
    * @return CreateDesktopsResponse
   */
  async createDesktops(request: CreateDesktopsRequest): Promise<CreateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopsWithOptions(request, runtime);
  }

  async createDiskEncryptionServiceWithOptions(request: CreateDiskEncryptionServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskEncryptionServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDiskEncryptionServiceResponse>(await this.callApi(params, req, runtime), new CreateDiskEncryptionServiceResponse({}));
  }

  async createDiskEncryptionService(request: CreateDiskEncryptionServiceRequest): Promise<CreateDiskEncryptionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskEncryptionServiceWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoCleanUserdata)) {
      query["AutoCleanUserdata"] = request.autoCleanUserdata;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageResourceType)) {
      query["ImageResourceType"] = request.imageResourceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateImageResponse>(await this.callApi(params, req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createNASFileSystemWithOptions(request: CreateNASFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateNASFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateNASFileSystemResponse>(await this.callApi(params, req, runtime), new CreateNASFileSystemResponse({}));
  }

  async createNASFileSystem(request: CreateNASFileSystemRequest): Promise<CreateNASFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNASFileSystemWithOptions(request, runtime);
  }

  async createNetworkPackageWithOptions(request: CreateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateNetworkPackageResponse>(await this.callApi(params, req, runtime), new CreateNetworkPackageResponse({}));
  }

  async createNetworkPackage(request: CreateNetworkPackageRequest): Promise<CreateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkPackageWithOptions(request, runtime);
  }

  /**
    * A policy is a set of security rules that are used to control security configurations when end users use cloud desktops. A policy contains basic features, such as USB redirection and watermarking, and other features, such as security group control. For more information, see [Policy overview](~~189345~~).
    *
    * @param request CreatePolicyGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePolicyGroupResponse
   */
  async createPolicyGroupWithOptions(request: CreatePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!Util.isUnset(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!Util.isUnset(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!Util.isUnset(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!Util.isUnset(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!Util.isUnset(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!Util.isUnset(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!Util.isUnset(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!Util.isUnset(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!Util.isUnset(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!Util.isUnset(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!Util.isUnset(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!Util.isUnset(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!Util.isUnset(request.recordContent)) {
      query["RecordContent"] = request.recordContent;
    }

    if (!Util.isUnset(request.recordContentExpires)) {
      query["RecordContentExpires"] = request.recordContentExpires;
    }

    if (!Util.isUnset(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!Util.isUnset(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!Util.isUnset(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!Util.isUnset(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!Util.isUnset(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!Util.isUnset(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!Util.isUnset(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!Util.isUnset(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!Util.isUnset(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!Util.isUnset(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!Util.isUnset(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!Util.isUnset(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!Util.isUnset(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!Util.isUnset(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!Util.isUnset(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!Util.isUnset(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!Util.isUnset(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!Util.isUnset(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!Util.isUnset(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!Util.isUnset(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!Util.isUnset(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!Util.isUnset(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!Util.isUnset(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!Util.isUnset(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new CreatePolicyGroupResponse({}));
  }

  /**
    * A policy is a set of security rules that are used to control security configurations when end users use cloud desktops. A policy contains basic features, such as USB redirection and watermarking, and other features, such as security group control. For more information, see [Policy overview](~~189345~~).
    *
    * @param request CreatePolicyGroupRequest
    * @return CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
    * Before you create a RAM directory, complete the following preparations:
    * *   Call the `CreateVpc` operation to create a virtual private cloud (VPC) in a region supported by WUYING Workspace.
    * *   Call the `CreateVSwitch` operation to create a vSwitch in the VPC. The vSwitch is in a zone that is supported by WUYING Workspace. You can call the [DescribeZones](~~196648~~) operation to obtain the most recent zone list for a region supported by WUYING Workspace.
    *
    * @param request CreateRAMDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRAMDirectoryResponse
   */
  async createRAMDirectoryWithOptions(request: CreateRAMDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRAMDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateRAMDirectoryResponse>(await this.callApi(params, req, runtime), new CreateRAMDirectoryResponse({}));
  }

  /**
    * Before you create a RAM directory, complete the following preparations:
    * *   Call the `CreateVpc` operation to create a virtual private cloud (VPC) in a region supported by WUYING Workspace.
    * *   Call the `CreateVSwitch` operation to create a vSwitch in the VPC. The vSwitch is in a zone that is supported by WUYING Workspace. You can call the [DescribeZones](~~196648~~) operation to obtain the most recent zone list for a region supported by WUYING Workspace.
    *
    * @param request CreateRAMDirectoryRequest
    * @return CreateRAMDirectoryResponse
   */
  async createRAMDirectory(request: CreateRAMDirectoryRequest): Promise<CreateRAMDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRAMDirectoryWithOptions(request, runtime);
  }

  async createSimpleOfficeSiteWithOptions(request: CreateSimpleOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimpleOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.cloudBoxOfficeSite)) {
      query["CloudBoxOfficeSite"] = request.cloudBoxOfficeSite;
    }

    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    if (!Util.isUnset(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateSimpleOfficeSiteResponse>(await this.callApi(params, req, runtime), new CreateSimpleOfficeSiteResponse({}));
  }

  async createSimpleOfficeSite(request: CreateSimpleOfficeSiteRequest): Promise<CreateSimpleOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimpleOfficeSiteWithOptions(request, runtime);
  }

  /**
    * The cloud computer must be in the **Running** or **Stopped** state.
    *
    * @param request CreateSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!Util.isUnset(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
  }

  /**
    * The cloud computer must be in the **Running** or **Stopped** state.
    *
    * @param request CreateSnapshotRequest
    * @return CreateSnapshotResponse
   */
  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteAutoSnapshotPolicyWithOptions(request: DeleteAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DeleteAutoSnapshotPolicyResponse({}));
  }

  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async deleteBundlesWithOptions(request: DeleteBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBundlesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteBundlesResponse>(await this.callApi(params, req, runtime), new DeleteBundlesResponse({}));
  }

  async deleteBundles(request: DeleteBundlesRequest): Promise<DeleteBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBundlesWithOptions(request, runtime);
  }

  async deleteCdsFileWithOptions(request: DeleteCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteCdsFileResponse>(await this.callApi(params, req, runtime), new DeleteCdsFileResponse({}));
  }

  async deleteCdsFile(request: DeleteCdsFileRequest): Promise<DeleteCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCdsFileWithOptions(request, runtime);
  }

  async deleteCloudDriveGroupsWithOptions(request: DeleteCloudDriveGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudDriveGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new DeleteCloudDriveGroupsResponse({}));
  }

  async deleteCloudDriveGroups(request: DeleteCloudDriveGroupsRequest): Promise<DeleteCloudDriveGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudDriveGroupsWithOptions(request, runtime);
  }

  async deleteCloudDriveUsersWithOptions(request: DeleteCloudDriveUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudDriveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new DeleteCloudDriveUsersResponse({}));
  }

  async deleteCloudDriveUsers(request: DeleteCloudDriveUsersRequest): Promise<DeleteCloudDriveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudDriveUsersWithOptions(request, runtime);
  }

  /**
    * *   Before you delete a desktop group, make sure that cloud desktops in the desktop group are not connected and no users are authorized to use the cloud desktops.
    * *   You cannot delete a subscription desktop group when cloud desktops in the group are in valid period.
    * *   If you delete a pay-as-you-go desktop group, cloud desktops in the group are deleted.
    *
    * @param request DeleteDesktopGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDesktopGroupResponse
   */
  async deleteDesktopGroupWithOptions(request: DeleteDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDesktopGroupResponse>(await this.callApi(params, req, runtime), new DeleteDesktopGroupResponse({}));
  }

  /**
    * *   Before you delete a desktop group, make sure that cloud desktops in the desktop group are not connected and no users are authorized to use the cloud desktops.
    * *   You cannot delete a subscription desktop group when cloud desktops in the group are in valid period.
    * *   If you delete a pay-as-you-go desktop group, cloud desktops in the group are deleted.
    *
    * @param request DeleteDesktopGroupRequest
    * @return DeleteDesktopGroupResponse
   */
  async deleteDesktopGroup(request: DeleteDesktopGroupRequest): Promise<DeleteDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopGroupWithOptions(request, runtime);
  }

  async deleteDesktopsWithOptions(request: DeleteDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDesktopsResponse>(await this.callApi(params, req, runtime), new DeleteDesktopsResponse({}));
  }

  async deleteDesktops(request: DeleteDesktopsRequest): Promise<DeleteDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopsWithOptions(request, runtime);
  }

  /**
    * You can call the operation to manage client devices.
    *
    * @param request DeleteDevicesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDevicesResponse
   */
  async deleteDevicesWithOptions(request: DeleteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDevicesResponse>(await this.callApi(params, req, runtime), new DeleteDevicesResponse({}));
  }

  /**
    * You can call the operation to manage client devices.
    *
    * @param request DeleteDevicesRequest
    * @return DeleteDevicesResponse
   */
  async deleteDevices(request: DeleteDevicesRequest): Promise<DeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicesWithOptions(request, runtime);
  }

  /**
    * You cannot delete a directory that has a cloud computer or is used by a cloud computer.
    *
    * @param request DeleteDirectoriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDirectoriesResponse
   */
  async deleteDirectoriesWithOptions(request: DeleteDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDirectoriesResponse>(await this.callApi(params, req, runtime), new DeleteDirectoriesResponse({}));
  }

  /**
    * You cannot delete a directory that has a cloud computer or is used by a cloud computer.
    *
    * @param request DeleteDirectoriesRequest
    * @return DeleteDirectoriesResponse
   */
  async deleteDirectories(request: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  async deleteEduRoomWithOptions(request: DeleteEduRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEduRoomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eduRoomId)) {
      query["EduRoomId"] = request.eduRoomId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteEduRoomResponse>(await this.callApi(params, req, runtime), new DeleteEduRoomResponse({}));
  }

  async deleteEduRoom(request: DeleteEduRoomRequest): Promise<DeleteEduRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEduRoomWithOptions(request, runtime);
  }

  /**
    * *   Images include system images and custom images. System images cannot be deleted.
    * *   If an image that you want to delete is referenced by a cloud computer template, call the [DeleteBundles](~~436972~~) operation to delete the cloud computer template before you delete the image.
    *
    * @param request DeleteImagesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteImagesResponse
   */
  async deleteImagesWithOptions(request: DeleteImagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteCascadedBundle)) {
      query["DeleteCascadedBundle"] = request.deleteCascadedBundle;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteImagesResponse>(await this.callApi(params, req, runtime), new DeleteImagesResponse({}));
  }

  /**
    * *   Images include system images and custom images. System images cannot be deleted.
    * *   If an image that you want to delete is referenced by a cloud computer template, call the [DeleteBundles](~~436972~~) operation to delete the cloud computer template before you delete the image.
    *
    * @param request DeleteImagesRequest
    * @return DeleteImagesResponse
   */
  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
    * Before you delete an Apsara File Storage NAS (NAS) file system, make sure that the data you want to retain is backed up.
    * ><warning>If a NAS file system is deleted, data stored in the NAS file system cannot be restored. Proceed with caution when you delete NAS file systems.></warning>
    *
    * @param request DeleteNASFileSystemsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNASFileSystemsResponse
   */
  async deleteNASFileSystemsWithOptions(request: DeleteNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNASFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteNASFileSystemsResponse>(await this.callApi(params, req, runtime), new DeleteNASFileSystemsResponse({}));
  }

  /**
    * Before you delete an Apsara File Storage NAS (NAS) file system, make sure that the data you want to retain is backed up.
    * ><warning>If a NAS file system is deleted, data stored in the NAS file system cannot be restored. Proceed with caution when you delete NAS file systems.></warning>
    *
    * @param request DeleteNASFileSystemsRequest
    * @return DeleteNASFileSystemsResponse
   */
  async deleteNASFileSystems(request: DeleteNASFileSystemsRequest): Promise<DeleteNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNASFileSystemsWithOptions(request, runtime);
  }

  async deleteNetworkPackagesWithOptions(request: DeleteNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteNetworkPackagesResponse>(await this.callApi(params, req, runtime), new DeleteNetworkPackagesResponse({}));
  }

  async deleteNetworkPackages(request: DeleteNetworkPackagesRequest): Promise<DeleteNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkPackagesWithOptions(request, runtime);
  }

  /**
    * Before you delete an office network, make sure that the following operations are complete:
    * *   All cloud computers in the office network are released.
    * *   The data that you want to retain is backed up.
    * >  Resources and data on cloud computers in an office network cannot be restored after you delete it. Proceed with caution.
    *
    * @param request DeleteOfficeSitesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteOfficeSitesResponse
   */
  async deleteOfficeSitesWithOptions(request: DeleteOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOfficeSitesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteOfficeSitesResponse>(await this.callApi(params, req, runtime), new DeleteOfficeSitesResponse({}));
  }

  /**
    * Before you delete an office network, make sure that the following operations are complete:
    * *   All cloud computers in the office network are released.
    * *   The data that you want to retain is backed up.
    * >  Resources and data on cloud computers in an office network cannot be restored after you delete it. Proceed with caution.
    *
    * @param request DeleteOfficeSitesRequest
    * @return DeleteOfficeSitesResponse
   */
  async deleteOfficeSites(request: DeleteOfficeSitesRequest): Promise<DeleteOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOfficeSitesWithOptions(request, runtime);
  }

  async deletePolicyGroupsWithOptions(request: DeletePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeletePolicyGroupsResponse>(await this.callApi(params, req, runtime), new DeletePolicyGroupsResponse({}));
  }

  async deletePolicyGroups(request: DeletePolicyGroupsRequest): Promise<DeletePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupsWithOptions(request, runtime);
  }

  /**
    * If the IDs of the snapshots that you specify do not exist, requests are ignored.
    *
    * @param request DeleteSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
  }

  /**
    * If the IDs of the snapshots that you specify do not exist, requests are ignored.
    *
    * @param request DeleteSnapshotRequest
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
    * If an MFA device is deleted, the device is unbound, reset, and disabled. When an Active Directory (AD) user wants to connect to the cloud desktop that is bound to the MFA device, the AD user must bind a new MFA device.
    *
    * @param request DeleteVirtualMFADeviceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  /**
    * If an MFA device is deleted, the device is unbound, reset, and disabled. When an Active Directory (AD) user wants to connect to the cloud desktop that is bound to the MFA device, the AD user must bind a new MFA device.
    *
    * @param request DeleteVirtualMFADeviceRequest
    * @return DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async describeAclEntriesWithOptions(request: DescribeAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAclEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeAclEntriesResponse>(await this.callApi(params, req, runtime), new DescribeAclEntriesResponse({}));
  }

  async describeAclEntries(request: DescribeAclEntriesRequest): Promise<DescribeAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAclEntriesWithOptions(request, runtime);
  }

  /**
    * You can view an automatic snapshot policy that is associated with a cloud desktop in the Elastic Desktop Service (EDS) console. To view the automatic snapshot policy, you can go to the EDS console, choose Deployment > Snapshots in the left-side navigation pane, and then view an automatic snapshot policy on the Snapshots page.
    *
    * @param request DescribeAutoSnapshotPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAutoSnapshotPolicyResponse
   */
  async describeAutoSnapshotPolicyWithOptions(request: DescribeAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DescribeAutoSnapshotPolicyResponse({}));
  }

  /**
    * You can view an automatic snapshot policy that is associated with a cloud desktop in the Elastic Desktop Service (EDS) console. To view the automatic snapshot policy, you can go to the EDS console, choose Deployment > Snapshots in the left-side navigation pane, and then view an automatic snapshot policy on the Snapshots page.
    *
    * @param request DescribeAutoSnapshotPolicyRequest
    * @return DescribeAutoSnapshotPolicyResponse
   */
  async describeAutoSnapshotPolicy(request: DescribeAutoSnapshotPolicyRequest): Promise<DescribeAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async describeBundlesWithOptions(request: DescribeBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBundlesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.bundleType)) {
      query["BundleType"] = request.bundleType;
    }

    if (!Util.isUnset(request.checkStock)) {
      query["CheckStock"] = request.checkStock;
    }

    if (!Util.isUnset(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!Util.isUnset(request.desktopTypeFamily)) {
      query["DesktopTypeFamily"] = request.desktopTypeFamily;
    }

    if (!Util.isUnset(request.fotaChannel)) {
      query["FotaChannel"] = request.fotaChannel;
    }

    if (!Util.isUnset(request.fromDesktopGroup)) {
      query["FromDesktopGroup"] = request.fromDesktopGroup;
    }

    if (!Util.isUnset(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.selectedBundle)) {
      query["SelectedBundle"] = request.selectedBundle;
    }

    if (!Util.isUnset(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    if (!Util.isUnset(request.supportMultiSession)) {
      query["SupportMultiSession"] = request.supportMultiSession;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeBundlesResponse>(await this.callApi(params, req, runtime), new DescribeBundlesResponse({}));
  }

  async describeBundles(request: DescribeBundlesRequest): Promise<DescribeBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBundlesWithOptions(request, runtime);
  }

  async describeCdsFileShareLinksWithOptions(request: DescribeCdsFileShareLinksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdsFileShareLinksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.creators)) {
      query["Creators"] = request.creators;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    if (!Util.isUnset(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCdsFileShareLinksResponse>(await this.callApi(params, req, runtime), new DescribeCdsFileShareLinksResponse({}));
  }

  async describeCdsFileShareLinks(request: DescribeCdsFileShareLinksRequest): Promise<DescribeCdsFileShareLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdsFileShareLinksWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCensResponse>(await this.callApi(params, req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
    * You can audit the operation logs of regular users to improve security. The operation logs record events such as desktop startup, shutdown, and session disconnection.
    *
    * @param request DescribeClientEventsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeClientEventsResponse
   */
  async describeClientEventsWithOptions(request: DescribeClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopIp)) {
      query["DesktopIp"] = request.desktopIp;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeClientEventsResponse>(await this.callApi(params, req, runtime), new DescribeClientEventsResponse({}));
  }

  /**
    * You can audit the operation logs of regular users to improve security. The operation logs record events such as desktop startup, shutdown, and session disconnection.
    *
    * @param request DescribeClientEventsRequest
    * @return DescribeClientEventsResponse
   */
  async describeClientEvents(request: DescribeClientEventsRequest): Promise<DescribeClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientEventsWithOptions(request, runtime);
  }

  async describeCloudDriveGroupsWithOptions(request: DescribeCloudDriveGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudDriveGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.driveStatus)) {
      query["DriveStatus"] = request.driveStatus;
    }

    if (!Util.isUnset(request.driveType)) {
      query["DriveType"] = request.driveType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentGroupId)) {
      query["ParentGroupId"] = request.parentGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new DescribeCloudDriveGroupsResponse({}));
  }

  async describeCloudDriveGroups(request: DescribeCloudDriveGroupsRequest): Promise<DescribeCloudDriveGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudDriveGroupsWithOptions(request, runtime);
  }

  async describeCloudDrivePermissionsWithOptions(request: DescribeCloudDrivePermissionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudDrivePermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCloudDrivePermissionsResponse>(await this.callApi(params, req, runtime), new DescribeCloudDrivePermissionsResponse({}));
  }

  async describeCloudDrivePermissions(request: DescribeCloudDrivePermissionsRequest): Promise<DescribeCloudDrivePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudDrivePermissionsWithOptions(request, runtime);
  }

  async describeCloudDriveUsersWithOptions(request: DescribeCloudDriveUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudDriveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new DescribeCloudDriveUsersResponse({}));
  }

  async describeCloudDriveUsers(request: DescribeCloudDriveUsersRequest): Promise<DescribeCloudDriveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudDriveUsersWithOptions(request, runtime);
  }

  async describeCustomizedListHeadersWithOptions(request: DescribeCustomizedListHeadersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizedListHeadersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCustomizedListHeadersResponse>(await this.callApi(params, req, runtime), new DescribeCustomizedListHeadersResponse({}));
  }

  async describeCustomizedListHeaders(request: DescribeCustomizedListHeadersRequest): Promise<DescribeCustomizedListHeadersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizedListHeadersWithOptions(request, runtime);
  }

  async describeDesktopGroupSessionsWithOptions(request: DescribeDesktopGroupSessionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopGroupSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopGroupSessionsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopGroupSessionsResponse({}));
  }

  async describeDesktopGroupSessions(request: DescribeDesktopGroupSessionsRequest): Promise<DescribeDesktopGroupSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopGroupSessionsWithOptions(request, runtime);
  }

  async describeDesktopGroupsWithOptions(request: DescribeDesktopGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.excludedEndUserIds)) {
      query["ExcludedEndUserIds"] = request.excludedEndUserIds;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopGroupsResponse({}));
  }

  async describeDesktopGroups(request: DescribeDesktopGroupsRequest): Promise<DescribeDesktopGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopGroupsWithOptions(request, runtime);
  }

  async describeDesktopInfoWithOptions(request: DescribeDesktopInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopInfoResponse>(await this.callApi(params, req, runtime), new DescribeDesktopInfoResponse({}));
  }

  async describeDesktopInfo(request: DescribeDesktopInfoRequest): Promise<DescribeDesktopInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopInfoWithOptions(request, runtime);
  }

  async describeDesktopOversoldGroupWithOptions(request: DescribeDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.oversoldGroupIds)) {
      query["OversoldGroupIds"] = request.oversoldGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new DescribeDesktopOversoldGroupResponse({}));
  }

  async describeDesktopOversoldGroup(request: DescribeDesktopOversoldGroupRequest): Promise<DescribeDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopOversoldGroupWithOptions(request, runtime);
  }

  async describeDesktopOversoldUserWithOptions(request: DescribeDesktopOversoldUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopOversoldUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.userDesktopIds)) {
      query["UserDesktopIds"] = request.userDesktopIds;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopOversoldUserResponse>(await this.callApi(params, req, runtime), new DescribeDesktopOversoldUserResponse({}));
  }

  async describeDesktopOversoldUser(request: DescribeDesktopOversoldUserRequest): Promise<DescribeDesktopOversoldUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopOversoldUserWithOptions(request, runtime);
  }

  async describeDesktopOversoldUserGroupWithOptions(request: DescribeDesktopOversoldUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopOversoldUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new DescribeDesktopOversoldUserGroupResponse({}));
  }

  async describeDesktopOversoldUserGroup(request: DescribeDesktopOversoldUserGroupRequest): Promise<DescribeDesktopOversoldUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
    * You can query data within the last 30 days.
    *
    * @param request DescribeDesktopSessionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDesktopSessionsResponse
   */
  async describeDesktopSessionsWithOptions(request: DescribeDesktopSessionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopSessionsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopSessionsResponse({}));
  }

  /**
    * You can query data within the last 30 days.
    *
    * @param request DescribeDesktopSessionsRequest
    * @return DescribeDesktopSessionsResponse
   */
  async describeDesktopSessions(request: DescribeDesktopSessionsRequest): Promise<DescribeDesktopSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopSessionsWithOptions(request, runtime);
  }

  /**
    * When no values are specified for the `InstanceTypeFamily` and `DesktopTypeId` parameters for a cloud desktop, all types of cloud desktops are queried.
    *
    * @param request DescribeDesktopTypesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDesktopTypesResponse
   */
  async describeDesktopTypesWithOptions(request: DescribeDesktopTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appliedScope)) {
      query["AppliedScope"] = request.appliedScope;
    }

    if (!Util.isUnset(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!Util.isUnset(request.desktopGroupIdForModify)) {
      query["DesktopGroupIdForModify"] = request.desktopGroupIdForModify;
    }

    if (!Util.isUnset(request.desktopIdForModify)) {
      query["DesktopIdForModify"] = request.desktopIdForModify;
    }

    if (!Util.isUnset(request.desktopTypeId)) {
      query["DesktopTypeId"] = request.desktopTypeId;
    }

    if (!Util.isUnset(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!Util.isUnset(request.instanceTypeFamily)) {
      query["InstanceTypeFamily"] = request.instanceTypeFamily;
    }

    if (!Util.isUnset(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopTypesResponse>(await this.callApi(params, req, runtime), new DescribeDesktopTypesResponse({}));
  }

  /**
    * When no values are specified for the `InstanceTypeFamily` and `DesktopTypeId` parameters for a cloud desktop, all types of cloud desktops are queried.
    *
    * @param request DescribeDesktopTypesRequest
    * @return DescribeDesktopTypesResponse
   */
  async describeDesktopTypes(request: DescribeDesktopTypesRequest): Promise<DescribeDesktopTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopTypesWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!Util.isUnset(request.desktopStatusList)) {
      query["DesktopStatusList"] = request.desktopStatusList;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.excludedEndUserId)) {
      query["ExcludedEndUserId"] = request.excludedEndUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.filterDesktopGroup)) {
      query["FilterDesktopGroup"] = request.filterDesktopGroup;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.managementFlag)) {
      query["ManagementFlag"] = request.managementFlag;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.onlyDesktopGroup)) {
      query["OnlyDesktopGroup"] = request.onlyDesktopGroup;
    }

    if (!Util.isUnset(request.osTypes)) {
      query["OsTypes"] = request.osTypes;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotPolicyId)) {
      query["SnapshotPolicyId"] = request.snapshotPolicyId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async describeDesktopsInGroupWithOptions(request: DescribeDesktopsInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.ignoreDeleted)) {
      query["IgnoreDeleted"] = request.ignoreDeleted;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new DescribeDesktopsInGroupResponse({}));
  }

  async describeDesktopsInGroup(request: DescribeDesktopsInGroupRequest): Promise<DescribeDesktopsInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsInGroupWithOptions(request, runtime);
  }

  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDevicesResponse>(await this.callApi(params, req, runtime), new DescribeDevicesResponse({}));
  }

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.directoryStatus)) {
      query["DirectoryStatus"] = request.directoryStatus;
    }

    if (!Util.isUnset(request.directoryType)) {
      query["DirectoryType"] = request.directoryType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async describeFlowMetricWithOptions(request: DescribeFlowMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeFlowMetricResponse>(await this.callApi(params, req, runtime), new DescribeFlowMetricResponse({}));
  }

  async describeFlowMetric(request: DescribeFlowMetricRequest): Promise<DescribeFlowMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowMetricWithOptions(request, runtime);
  }

  /**
    * > You can query only the traffic data in the last 90 days.
    *
    * @param request DescribeFlowStatisticRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeFlowStatisticResponse
   */
  async describeFlowStatisticWithOptions(request: DescribeFlowStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeFlowStatisticResponse>(await this.callApi(params, req, runtime), new DescribeFlowStatisticResponse({}));
  }

  /**
    * > You can query only the traffic data in the last 90 days.
    *
    * @param request DescribeFlowStatisticRequest
    * @return DescribeFlowStatisticResponse
   */
  async describeFlowStatistic(request: DescribeFlowStatisticRequest): Promise<DescribeFlowStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowStatisticWithOptions(request, runtime);
  }

  async describeFotaPendingDesktopsWithOptions(request: DescribeFotaPendingDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFotaPendingDesktopsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFotaPendingDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFotaPendingDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeFotaPendingDesktopsResponse({}));
  }

  async describeFotaPendingDesktops(request: DescribeFotaPendingDesktopsRequest): Promise<DescribeFotaPendingDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFotaPendingDesktopsWithOptions(request, runtime);
  }

  async describeFotaTasksWithOptions(request: DescribeFotaTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFotaTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fotaStatus)) {
      query["FotaStatus"] = request.fotaStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!Util.isUnset(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeFotaTasksResponse>(await this.callApi(params, req, runtime), new DescribeFotaTasksResponse({}));
  }

  async describeFotaTasks(request: DescribeFotaTasksRequest): Promise<DescribeFotaTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFotaTasksWithOptions(request, runtime);
  }

  async describeGuestApplicationsWithOptions(request: DescribeGuestApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeGuestApplicationsResponse>(await this.callApi(params, req, runtime), new DescribeGuestApplicationsResponse({}));
  }

  async describeGuestApplications(request: DescribeGuestApplicationsRequest): Promise<DescribeGuestApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestApplicationsWithOptions(request, runtime);
  }

  async describeImageModifiedRecordsWithOptions(request: DescribeImageModifiedRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageModifiedRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeImageModifiedRecordsResponse>(await this.callApi(params, req, runtime), new DescribeImageModifiedRecordsResponse({}));
  }

  async describeImageModifiedRecords(request: DescribeImageModifiedRecordsRequest): Promise<DescribeImageModifiedRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageModifiedRecordsWithOptions(request, runtime);
  }

  /**
    * You can call the [ModifyImagePermission](~~436982~~) operation to share an image with another cloud computer user or unshare an image. You can call the DescribeImagePermission operation to obtain the Alibaba Cloud accounts with which the current image is shared.
    *
    * @param request DescribeImagePermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeImagePermissionResponse
   */
  async describeImagePermissionWithOptions(request: DescribeImagePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeImagePermissionResponse>(await this.callApi(params, req, runtime), new DescribeImagePermissionResponse({}));
  }

  /**
    * You can call the [ModifyImagePermission](~~436982~~) operation to share an image with another cloud computer user or unshare an image. You can call the DescribeImagePermission operation to obtain the Alibaba Cloud accounts with which the current image is shared.
    *
    * @param request DescribeImagePermissionRequest
    * @return DescribeImagePermissionResponse
   */
  async describeImagePermission(request: DescribeImagePermissionRequest): Promise<DescribeImagePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagePermissionWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopInstanceType)) {
      query["DesktopInstanceType"] = request.desktopInstanceType;
    }

    if (!Util.isUnset(request.fotaVersion)) {
      query["FotaVersion"] = request.fotaVersion;
    }

    if (!Util.isUnset(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!Util.isUnset(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageStatus)) {
      query["ImageStatus"] = request.imageStatus;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.languageType)) {
      query["LanguageType"] = request.languageType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeImagesResponse>(await this.callApi(params, req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  /**
    * *   After you run a command, it may not succeed. You can call this operation to query the execution result.
    * *   You can query the information about execution in the last two weeks. A maximum of 100,000 lines of execution information can be retained.
    *
    * @param request DescribeInvocationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!Util.isUnset(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.includeOutput)) {
      query["IncludeOutput"] = request.includeOutput;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
  }

  /**
    * *   After you run a command, it may not succeed. You can call this operation to query the execution result.
    * *   You can query the information about execution in the last two weeks. A maximum of 100,000 lines of execution information can be retained.
    *
    * @param request DescribeInvocationsRequest
    * @return DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeKmsKeysWithOptions(request: DescribeKmsKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKmsKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeKmsKeysResponse>(await this.callApi(params, req, runtime), new DescribeKmsKeysResponse({}));
  }

  async describeKmsKeys(request: DescribeKmsKeysRequest): Promise<DescribeKmsKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  async describeNASFileSystemsWithOptions(request: DescribeNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNASFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.matchCompatibleProfile)) {
      query["MatchCompatibleProfile"] = request.matchCompatibleProfile;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeNASFileSystemsResponse>(await this.callApi(params, req, runtime), new DescribeNASFileSystemsResponse({}));
  }

  async describeNASFileSystems(request: DescribeNASFileSystemsRequest): Promise<DescribeNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNASFileSystemsWithOptions(request, runtime);
  }

  async describeNetworkPackagesWithOptions(request: DescribeNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeNetworkPackagesResponse>(await this.callApi(params, req, runtime), new DescribeNetworkPackagesResponse({}));
  }

  async describeNetworkPackages(request: DescribeNetworkPackagesRequest): Promise<DescribeNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkPackagesWithOptions(request, runtime);
  }

  async describeOfficeSitesWithOptions(request: DescribeOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOfficeSitesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteType)) {
      query["OfficeSiteType"] = request.officeSiteType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeOfficeSitesResponse>(await this.callApi(params, req, runtime), new DescribeOfficeSitesResponse({}));
  }

  async describeOfficeSites(request: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  async describePolicyGroupsWithOptions(request: DescribePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePolicyGroupsResponse>(await this.callApi(params, req, runtime), new DescribePolicyGroupsResponse({}));
  }

  async describePolicyGroups(request: DescribePolicyGroupsRequest): Promise<DescribePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGroupsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * The request parameters vary based on the type of desktop resources whose price you want to query. Take note of the following items:
    * *   If you set ResourceType to OfficeSite, you must specify InstanceType.
    * *   If you set ResourceType to Bandwidth, the pay-by-data-transfer metering method is used for network billing.
    * *   If you set ResourceType to Desktop, you must specify InstanceType, RootDiskSizeGib, and UserDiskSizeGib. You can specify OsType, PeriodUnit, Period, and Amount based on your business requirements.
    * > Before you call this operation to query the prices of cloud desktops by setting ResourceType to Desktop, you must know the desktop types and disk sizes that EDS provides. The disk sizes vary based on the desktop types. For more information, see [Cloud desktop types](~~188609~~).
    *
    * @param request DescribePriceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePriceResponse
   */
  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bundleModels)) {
      query["BundleModels"] = request.bundleModels;
    }

    if (!Util.isUnset(request.eduCdsEnable)) {
      query["EduCdsEnable"] = request.eduCdsEnable;
    }

    if (!Util.isUnset(request.eduCdsSize)) {
      query["EduCdsSize"] = request.eduCdsSize;
    }

    if (!Util.isUnset(request.eduCommittedTime)) {
      query["EduCommittedTime"] = request.eduCommittedTime;
    }

    if (!Util.isUnset(request.eduDesktopBundleId)) {
      query["EduDesktopBundleId"] = request.eduDesktopBundleId;
    }

    if (!Util.isUnset(request.eduDesktopNum)) {
      query["EduDesktopNum"] = request.eduDesktopNum;
    }

    if (!Util.isUnset(request.eduRoomClassify)) {
      query["EduRoomClassify"] = request.eduRoomClassify;
    }

    if (!Util.isUnset(request.eduStudentBundleId)) {
      query["EduStudentBundleId"] = request.eduStudentBundleId;
    }

    if (!Util.isUnset(request.eduStudentNum)) {
      query["EduStudentNum"] = request.eduStudentNum;
    }

    if (!Util.isUnset(request.eduTeacherBundleId)) {
      query["EduTeacherBundleId"] = request.eduTeacherBundleId;
    }

    if (!Util.isUnset(request.eduTeacherNum)) {
      query["EduTeacherNum"] = request.eduTeacherNum;
    }

    if (!Util.isUnset(request.groupDesktopCount)) {
      query["GroupDesktopCount"] = request.groupDesktopCount;
    }

    if (!Util.isUnset(request.hardwareVersion)) {
      query["HardwareVersion"] = request.hardwareVersion;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.packageSize)) {
      query["PackageSize"] = request.packageSize;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!Util.isUnset(request.spPeriodInfo)) {
      query["SpPeriodInfo"] = request.spPeriodInfo;
    }

    if (!Util.isUnset(request.spPrice)) {
      query["SpPrice"] = request.spPrice;
    }

    if (!Util.isUnset(request.spType)) {
      query["SpType"] = request.spType;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  /**
    * ## Usage notes
    * The request parameters vary based on the type of desktop resources whose price you want to query. Take note of the following items:
    * *   If you set ResourceType to OfficeSite, you must specify InstanceType.
    * *   If you set ResourceType to Bandwidth, the pay-by-data-transfer metering method is used for network billing.
    * *   If you set ResourceType to Desktop, you must specify InstanceType, RootDiskSizeGib, and UserDiskSizeGib. You can specify OsType, PeriodUnit, Period, and Amount based on your business requirements.
    * > Before you call this operation to query the prices of cloud desktops by setting ResourceType to Desktop, you must know the desktop types and disk sizes that EDS provides. The disk sizes vary based on the desktop types. For more information, see [Cloud desktop types](~~188609~~).
    *
    * @param request DescribePriceRequest
    * @return DescribePriceResponse
   */
  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describePriceForCreateDesktopOversoldGroupWithOptions(request: DescribePriceForCreateDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceForCreateDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePriceForCreateDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new DescribePriceForCreateDesktopOversoldGroupResponse({}));
  }

  async describePriceForCreateDesktopOversoldGroup(request: DescribePriceForCreateDesktopOversoldGroupRequest): Promise<DescribePriceForCreateDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceForCreateDesktopOversoldGroupWithOptions(request, runtime);
  }

  async describePriceForModifyDesktopOversoldGroupSaleWithOptions(request: DescribePriceForModifyDesktopOversoldGroupSaleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceForModifyDesktopOversoldGroupSaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePriceForModifyDesktopOversoldGroupSaleResponse>(await this.callApi(params, req, runtime), new DescribePriceForModifyDesktopOversoldGroupSaleResponse({}));
  }

  async describePriceForModifyDesktopOversoldGroupSale(request: DescribePriceForModifyDesktopOversoldGroupSaleRequest): Promise<DescribePriceForModifyDesktopOversoldGroupSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceForModifyDesktopOversoldGroupSaleWithOptions(request, runtime);
  }

  async describePriceForRenewDesktopOversoldGroupWithOptions(request: DescribePriceForRenewDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceForRenewDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePriceForRenewDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new DescribePriceForRenewDesktopOversoldGroupResponse({}));
  }

  async describePriceForRenewDesktopOversoldGroup(request: DescribePriceForRenewDesktopOversoldGroupRequest): Promise<DescribePriceForRenewDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceForRenewDesktopOversoldGroupWithOptions(request, runtime);
  }

  async describeRecordingsWithOptions(request: DescribeRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.needSignedUrl)) {
      query["NeedSignedUrl"] = request.needSignedUrl;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.signedUrlExpireMinutes)) {
      query["SignedUrlExpireMinutes"] = request.signedUrlExpireMinutes;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRecordingsResponse>(await this.callApi(params, req, runtime), new DescribeRecordingsResponse({}));
  }

  async describeRecordings(request: DescribeRecordingsRequest): Promise<DescribeRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordingsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * *   This is a central operation and can be called only by using services in the China (Shanghai) region.
    * *   You can query session statistics for the past hour.
    *
    * @param request DescribeSessionStatisticRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSessionStatisticResponse
   */
  async describeSessionStatisticWithOptions(request: DescribeSessionStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSessionStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeSessionStatisticResponse>(await this.callApi(params, req, runtime), new DescribeSessionStatisticResponse({}));
  }

  /**
    * *   This is a central operation and can be called only by using services in the China (Shanghai) region.
    * *   You can query session statistics for the past hour.
    *
    * @param request DescribeSessionStatisticRequest
    * @return DescribeSessionStatisticResponse
   */
  async describeSessionStatistic(request: DescribeSessionStatisticRequest): Promise<DescribeSessionStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSessionStatisticWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!Util.isUnset(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!Util.isUnset(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeUserConnectTimeWithOptions(request: DescribeUserConnectTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConnectTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeUserConnectTimeResponse>(await this.callApi(params, req, runtime), new DescribeUserConnectTimeResponse({}));
  }

  async describeUserConnectTime(request: DescribeUserConnectTimeRequest): Promise<DescribeUserConnectTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConnectTimeWithOptions(request, runtime);
  }

  async describeUserConnectionRecordsWithOptions(request: DescribeUserConnectionRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConnectionRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectDurationFrom)) {
      query["ConnectDurationFrom"] = request.connectDurationFrom;
    }

    if (!Util.isUnset(request.connectDurationTo)) {
      query["ConnectDurationTo"] = request.connectDurationTo;
    }

    if (!Util.isUnset(request.connectEndTimeFrom)) {
      query["ConnectEndTimeFrom"] = request.connectEndTimeFrom;
    }

    if (!Util.isUnset(request.connectEndTimeTo)) {
      query["ConnectEndTimeTo"] = request.connectEndTimeTo;
    }

    if (!Util.isUnset(request.connectStartTimeFrom)) {
      query["ConnectStartTimeFrom"] = request.connectStartTimeFrom;
    }

    if (!Util.isUnset(request.connectStartTimeTo)) {
      query["ConnectStartTimeTo"] = request.connectStartTimeTo;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.endUserType)) {
      query["EndUserType"] = request.endUserType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeUserConnectionRecordsResponse>(await this.callApi(params, req, runtime), new DescribeUserConnectionRecordsResponse({}));
  }

  async describeUserConnectionRecords(request: DescribeUserConnectionRecordsRequest): Promise<DescribeUserConnectionRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConnectionRecordsWithOptions(request, runtime);
  }

  async describeUserProfilePathRulesWithOptions(request: DescribeUserProfilePathRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserProfilePathRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeUserProfilePathRulesResponse>(await this.callApi(params, req, runtime), new DescribeUserProfilePathRulesResponse({}));
  }

  async describeUserProfilePathRules(request: DescribeUserProfilePathRulesRequest): Promise<DescribeUserProfilePathRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserProfilePathRulesWithOptions(request, runtime);
  }

  async describeUsersInGroupWithOptions(request: DescribeUsersInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectState)) {
      query["ConnectState"] = request.connectState;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.queryUserDetail)) {
      query["QueryUserDetail"] = request.queryUserDetail;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeUsersInGroupResponse>(await this.callApi(params, req, runtime), new DescribeUsersInGroupResponse({}));
  }

  async describeUsersInGroup(request: DescribeUsersInGroupRequest): Promise<DescribeUsersInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersInGroupWithOptions(request, runtime);
  }

  async describeUsersPasswordWithOptions(request: DescribeUsersPasswordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeUsersPasswordResponse>(await this.callApi(params, req, runtime), new DescribeUsersPasswordResponse({}));
  }

  async describeUsersPassword(request: DescribeUsersPasswordRequest): Promise<DescribeUsersPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersPasswordWithOptions(request, runtime);
  }

  async describeVirtualMFADevicesWithOptions(request: DescribeVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualMFADevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVirtualMFADevicesResponse>(await this.callApi(params, req, runtime), new DescribeVirtualMFADevicesResponse({}));
  }

  async describeVirtualMFADevices(request: DescribeVirtualMFADevicesRequest): Promise<DescribeVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualMFADevicesWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachCenWithOptions(request: DetachCenRequest, runtime: $Util.RuntimeOptions): Promise<DetachCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachCenResponse>(await this.callApi(params, req, runtime), new DetachCenResponse({}));
  }

  async detachCen(request: DetachCenRequest): Promise<DetachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCenWithOptions(request, runtime);
  }

  async detachEndUserWithOptions(request: DetachEndUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachEndUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachEndUserResponse>(await this.callApi(params, req, runtime), new DetachEndUserResponse({}));
  }

  async detachEndUser(request: DetachEndUserRequest): Promise<DetachEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEndUserWithOptions(request, runtime);
  }

  async disableDesktopsInGroupWithOptions(request: DisableDesktopsInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DisableDesktopsInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisableDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new DisableDesktopsInGroupResponse({}));
  }

  async disableDesktopsInGroup(request: DisableDesktopsInGroupRequest): Promise<DisableDesktopsInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDesktopsInGroupWithOptions(request, runtime);
  }

  async disconnectDesktopSessionsWithOptions(request: DisconnectDesktopSessionsRequest, runtime: $Util.RuntimeOptions): Promise<DisconnectDesktopSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.preCheck)) {
      query["PreCheck"] = request.preCheck;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessions)) {
      query["Sessions"] = request.sessions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisconnectDesktopSessionsResponse>(await this.callApi(params, req, runtime), new DisconnectDesktopSessionsResponse({}));
  }

  async disconnectDesktopSessions(request: DisconnectDesktopSessionsRequest): Promise<DisconnectDesktopSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disconnectDesktopSessionsWithOptions(request, runtime);
  }

  async dissociateNetworkPackageWithOptions(request: DissociateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<DissociateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DissociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new DissociateNetworkPackageResponse({}));
  }

  async dissociateNetworkPackage(request: DissociateNetworkPackageRequest): Promise<DissociateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateNetworkPackageWithOptions(request, runtime);
  }

  async exportClientEventsWithOptions(request: ExportClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<ExportClientEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ExportClientEventsResponse>(await this.callApi(params, req, runtime), new ExportClientEventsResponse({}));
  }

  async exportClientEvents(request: ExportClientEventsRequest): Promise<ExportClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportClientEventsWithOptions(request, runtime);
  }

  async exportDesktopGroupInfoWithOptions(request: ExportDesktopGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<ExportDesktopGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ExportDesktopGroupInfoResponse>(await this.callApi(params, req, runtime), new ExportDesktopGroupInfoResponse({}));
  }

  async exportDesktopGroupInfo(request: ExportDesktopGroupInfoRequest): Promise<ExportDesktopGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDesktopGroupInfoWithOptions(request, runtime);
  }

  /**
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
    * @param request ExportDesktopListInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportDesktopListInfoResponse
   */
  async exportDesktopListInfoWithOptions(request: ExportDesktopListInfoRequest, runtime: $Util.RuntimeOptions): Promise<ExportDesktopListInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ExportDesktopListInfoResponse>(await this.callApi(params, req, runtime), new ExportDesktopListInfoResponse({}));
  }

  /**
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
    * @param request ExportDesktopListInfoRequest
    * @return ExportDesktopListInfoResponse
   */
  async exportDesktopListInfo(request: ExportDesktopListInfoRequest): Promise<ExportDesktopListInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDesktopListInfoWithOptions(request, runtime);
  }

  async getAsyncTaskWithOptions(request: GetAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncTaskId)) {
      query["AsyncTaskId"] = request.asyncTaskId;
    }

    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new GetAsyncTaskResponse({}));
  }

  async getAsyncTask(request: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncTaskWithOptions(request, runtime);
  }

  /**
    * The cloud computer must be in the Running state.
    *
    * @param request GetConnectionTicketRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  /**
    * The cloud computer must be in the Running state.
    *
    * @param request GetConnectionTicketRequest
    * @return GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getCoordinateTicketWithOptions(request: GetCoordinateTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetCoordinateTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetCoordinateTicketResponse>(await this.callApi(params, req, runtime), new GetCoordinateTicketResponse({}));
  }

  async getCoordinateTicket(request: GetCoordinateTicketRequest): Promise<GetCoordinateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCoordinateTicketWithOptions(request, runtime);
  }

  async getDesktopGroupDetailWithOptions(request: GetDesktopGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDesktopGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDesktopGroupDetailResponse>(await this.callApi(params, req, runtime), new GetDesktopGroupDetailResponse({}));
  }

  async getDesktopGroupDetail(request: GetDesktopGroupDetailRequest): Promise<GetDesktopGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDesktopGroupDetailWithOptions(request, runtime);
  }

  async getOfficeSiteSsoStatusWithOptions(request: GetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new GetOfficeSiteSsoStatusResponse({}));
  }

  async getOfficeSiteSsoStatus(request: GetOfficeSiteSsoStatusRequest): Promise<GetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  /**
    * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
    *
    * @param request GetSpMetadataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSpMetadataResponse
   */
  async getSpMetadataWithOptions(request: GetSpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<GetSpMetadataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetSpMetadataResponse>(await this.callApi(params, req, runtime), new GetSpMetadataResponse({}));
  }

  /**
    * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
    *
    * @param request GetSpMetadataRequest
    * @return GetSpMetadataResponse
   */
  async getSpMetadata(request: GetSpMetadataRequest): Promise<GetSpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpMetadataWithOptions(request, runtime);
  }

  /**
    * Hibernating a cloud desktop is in private preview. If you want to try this feature, submit a ticket.
    *
    * @param request HibernateDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return HibernateDesktopsResponse
   */
  async hibernateDesktopsWithOptions(request: HibernateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<HibernateDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<HibernateDesktopsResponse>(await this.callApi(params, req, runtime), new HibernateDesktopsResponse({}));
  }

  /**
    * Hibernating a cloud desktop is in private preview. If you want to try this feature, submit a ticket.
    *
    * @param request HibernateDesktopsRequest
    * @return HibernateDesktopsResponse
   */
  async hibernateDesktops(request: HibernateDesktopsRequest): Promise<HibernateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hibernateDesktopsWithOptions(request, runtime);
  }

  async listCdsFilesWithOptions(tmpReq: ListCdsFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListCdsFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCdsFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.parentFileId)) {
      query["ParentFileId"] = request.parentFileId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCdsFilesResponse>(await this.callApi(params, req, runtime), new ListCdsFilesResponse({}));
  }

  async listCdsFiles(request: ListCdsFilesRequest): Promise<ListCdsFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCdsFilesWithOptions(request, runtime);
  }

  /**
    * If you use an AD directory to connect to an AD system, you can call this operation to obtain the user information in the AD system.
    *
    * @param request ListDirectoryUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDirectoryUsersResponse
   */
  async listDirectoryUsersWithOptions(request: ListDirectoryUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectoryUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDirectoryUsersResponse>(await this.callApi(params, req, runtime), new ListDirectoryUsersResponse({}));
  }

  /**
    * If you use an AD directory to connect to an AD system, you can call this operation to obtain the user information in the AD system.
    *
    * @param request ListDirectoryUsersRequest
    * @return ListDirectoryUsersResponse
   */
  async listDirectoryUsers(request: ListDirectoryUsersRequest): Promise<ListDirectoryUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoryUsersWithOptions(request, runtime);
  }

  async listFilePermissionWithOptions(request: ListFilePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ListFilePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFilePermissionResponse>(await this.callApi(params, req, runtime), new ListFilePermissionResponse({}));
  }

  async listFilePermission(request: ListFilePermissionRequest): Promise<ListFilePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilePermissionWithOptions(request, runtime);
  }

  async listOfficeSiteOverviewWithOptions(request: ListOfficeSiteOverviewRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceRefresh)) {
      query["ForceRefresh"] = request.forceRefresh;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.queryRange)) {
      query["QueryRange"] = request.queryRange;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOfficeSiteOverviewResponse>(await this.callApi(params, req, runtime), new ListOfficeSiteOverviewResponse({}));
  }

  async listOfficeSiteOverview(request: ListOfficeSiteOverviewRequest): Promise<ListOfficeSiteOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteOverviewWithOptions(request, runtime);
  }

  async listOfficeSiteUsersWithOptions(request: ListOfficeSiteUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOfficeSiteUsersResponse>(await this.callApi(params, req, runtime), new ListOfficeSiteUsersResponse({}));
  }

  async listOfficeSiteUsers(request: ListOfficeSiteUsersRequest): Promise<ListOfficeSiteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteUsersWithOptions(request, runtime);
  }

  /**
    * You must use at least one of the following parameters in the request to determine the object that you want to query: `ResourceId.N`, `Tag.N.Key`, and `Tag.N.Value`.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
    * You must use at least one of the following parameters in the request to determine the object that you want to query: `ResourceId.N`, `Tag.N.Key`, and `Tag.N.Value`.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listUserAdOrganizationUnitsWithOptions(request: ListUserAdOrganizationUnitsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserAdOrganizationUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListUserAdOrganizationUnitsResponse>(await this.callApi(params, req, runtime), new ListUserAdOrganizationUnitsResponse({}));
  }

  async listUserAdOrganizationUnits(request: ListUserAdOrganizationUnitsRequest): Promise<ListUserAdOrganizationUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserAdOrganizationUnitsWithOptions(request, runtime);
  }

  /**
    * After a virtual MFA device is locked, its status changes to LOCKED. The Active Directory (AD) user who uses the virtual MFA device is unable to pass MFA and is therefore unable to log on to the client. You can call the [UnlockVirtualMFADevice](~~206212~~) operation to unlock the device.
    *
    * @param request LockVirtualMFADeviceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LockVirtualMFADeviceResponse
   */
  async lockVirtualMFADeviceWithOptions(request: LockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<LockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<LockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new LockVirtualMFADeviceResponse({}));
  }

  /**
    * After a virtual MFA device is locked, its status changes to LOCKED. The Active Directory (AD) user who uses the virtual MFA device is unable to pass MFA and is therefore unable to log on to the client. You can call the [UnlockVirtualMFADevice](~~206212~~) operation to unlock the device.
    *
    * @param request LockVirtualMFADeviceRequest
    * @return LockVirtualMFADeviceResponse
   */
  async lockVirtualMFADevice(request: LockVirtualMFADeviceRequest): Promise<LockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockVirtualMFADeviceWithOptions(request, runtime);
  }

  async migrateDesktopsWithOptions(request: MigrateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<MigrateDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetOfficeSiteId)) {
      query["TargetOfficeSiteId"] = request.targetOfficeSiteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MigrateDesktopsResponse>(await this.callApi(params, req, runtime), new MigrateDesktopsResponse({}));
  }

  async migrateDesktops(request: MigrateDesktopsRequest): Promise<MigrateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateDesktopsWithOptions(request, runtime);
  }

  async migrateImageProtocolWithOptions(request: MigrateImageProtocolRequest, runtime: $Util.RuntimeOptions): Promise<MigrateImageProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetProtocolType)) {
      query["TargetProtocolType"] = request.targetProtocolType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MigrateImageProtocolResponse>(await this.callApi(params, req, runtime), new MigrateImageProtocolResponse({}));
  }

  async migrateImageProtocol(request: MigrateImageProtocolRequest): Promise<MigrateImageProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateImageProtocolWithOptions(request, runtime);
  }

  /**
    * You can modify the following domain name- and Domain Name System (DNS)-related parameters only for Active Directory (AD) directories that are in the ERROR or REGISTERING state: `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress`.
    *
    * @param request ModifyADConnectorDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyADConnectorDirectoryResponse
   */
  async modifyADConnectorDirectoryWithOptions(request: ModifyADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new ModifyADConnectorDirectoryResponse({}));
  }

  /**
    * You can modify the following domain name- and Domain Name System (DNS)-related parameters only for Active Directory (AD) directories that are in the ERROR or REGISTERING state: `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress`.
    *
    * @param request ModifyADConnectorDirectoryRequest
    * @return ModifyADConnectorDirectoryResponse
   */
  async modifyADConnectorDirectory(request: ModifyADConnectorDirectoryRequest): Promise<ModifyADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorDirectoryWithOptions(request, runtime);
  }

  /**
    * You can modify parameters of domain names and Domain Name System (DNS) for enterprise AD office networks that are in the `ERROR` or `REGISTERED` state. The parameters include `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress.N`.
    *
    * @param request ModifyADConnectorOfficeSiteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyADConnectorOfficeSiteResponse
   */
  async modifyADConnectorOfficeSiteWithOptions(request: ModifyADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new ModifyADConnectorOfficeSiteResponse({}));
  }

  /**
    * You can modify parameters of domain names and Domain Name System (DNS) for enterprise AD office networks that are in the `ERROR` or `REGISTERED` state. The parameters include `DomainName`, `SubDomainName`, `DnsAddress.N`, and `SubDomainDnsAddress.N`.
    *
    * @param request ModifyADConnectorOfficeSiteRequest
    * @return ModifyADConnectorOfficeSiteResponse
   */
  async modifyADConnectorOfficeSite(request: ModifyADConnectorOfficeSiteRequest): Promise<ModifyADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorOfficeSiteWithOptions(request, runtime);
  }

  /**
    * You can set different Internet access control policies at different granularities to achieve the effect of composite policies. For example, you can disable the Internet access on the office network granularity and enable the Internet access on specific cloud computer granularity. The effect is that all cloud computers in the office network except the specified cloud computers are not allowed to access the Internet.
    *
    * @param request ModifyAclEntriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyAclEntriesResponse
   */
  async modifyAclEntriesWithOptions(request: ModifyAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAclEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyAclEntriesResponse>(await this.callApi(params, req, runtime), new ModifyAclEntriesResponse({}));
  }

  /**
    * You can set different Internet access control policies at different granularities to achieve the effect of composite policies. For example, you can disable the Internet access on the office network granularity and enable the Internet access on specific cloud computer granularity. The effect is that all cloud computers in the office network except the specified cloud computers are not allowed to access the Internet.
    *
    * @param request ModifyAclEntriesRequest
    * @return ModifyAclEntriesResponse
   */
  async modifyAclEntries(request: ModifyAclEntriesRequest): Promise<ModifyAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAclEntriesWithOptions(request, runtime);
  }

  async modifyAutoSnapshotPolicyWithOptions(request: ModifyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ModifyAutoSnapshotPolicyResponse({}));
  }

  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
    * Only custom desktop templates can be modified.
    *
    * @param request ModifyBundleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyBundleResponse
   */
  async modifyBundleWithOptions(request: ModifyBundleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyBundleResponse>(await this.callApi(params, req, runtime), new ModifyBundleResponse({}));
  }

  /**
    * Only custom desktop templates can be modified.
    *
    * @param request ModifyBundleRequest
    * @return ModifyBundleResponse
   */
  async modifyBundle(request: ModifyBundleRequest): Promise<ModifyBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBundleWithOptions(request, runtime);
  }

  async modifyCdsFileWithOptions(request: ModifyCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCdsFileResponse>(await this.callApi(params, req, runtime), new ModifyCdsFileResponse({}));
  }

  async modifyCdsFile(request: ModifyCdsFileRequest): Promise<ModifyCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdsFileWithOptions(request, runtime);
  }

  async modifyCdsFileShareLinkWithOptions(request: ModifyCdsFileShareLinkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdsFileShareLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableDownload)) {
      query["DisableDownload"] = request.disableDownload;
    }

    if (!Util.isUnset(request.disablePreview)) {
      query["DisablePreview"] = request.disablePreview;
    }

    if (!Util.isUnset(request.disableSave)) {
      query["DisableSave"] = request.disableSave;
    }

    if (!Util.isUnset(request.downloadCount)) {
      query["DownloadCount"] = request.downloadCount;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.previewCount)) {
      query["PreviewCount"] = request.previewCount;
    }

    if (!Util.isUnset(request.previewLimit)) {
      query["PreviewLimit"] = request.previewLimit;
    }

    if (!Util.isUnset(request.reportCount)) {
      query["ReportCount"] = request.reportCount;
    }

    if (!Util.isUnset(request.saveCount)) {
      query["SaveCount"] = request.saveCount;
    }

    if (!Util.isUnset(request.saveLimit)) {
      query["SaveLimit"] = request.saveLimit;
    }

    if (!Util.isUnset(request.shareId)) {
      query["ShareId"] = request.shareId;
    }

    if (!Util.isUnset(request.shareName)) {
      query["ShareName"] = request.shareName;
    }

    if (!Util.isUnset(request.sharePwd)) {
      query["SharePwd"] = request.sharePwd;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.videoPreviewCount)) {
      query["VideoPreviewCount"] = request.videoPreviewCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCdsFileShareLinkResponse>(await this.callApi(params, req, runtime), new ModifyCdsFileShareLinkResponse({}));
  }

  async modifyCdsFileShareLink(request: ModifyCdsFileShareLinkRequest): Promise<ModifyCdsFileShareLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdsFileShareLinkWithOptions(request, runtime);
  }

  async modifyCloudDriveGroupsWithOptions(request: ModifyCloudDriveGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudDriveGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.totalSize)) {
      query["TotalSize"] = request.totalSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCloudDriveGroupsResponse>(await this.callApi(params, req, runtime), new ModifyCloudDriveGroupsResponse({}));
  }

  async modifyCloudDriveGroups(request: ModifyCloudDriveGroupsRequest): Promise<ModifyCloudDriveGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudDriveGroupsWithOptions(request, runtime);
  }

  async modifyCloudDrivePermissionWithOptions(request: ModifyCloudDrivePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudDrivePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.downloadEndUserIds)) {
      query["DownloadEndUserIds"] = request.downloadEndUserIds;
    }

    if (!Util.isUnset(request.downloadUploadEndUserIds)) {
      query["DownloadUploadEndUserIds"] = request.downloadUploadEndUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCloudDrivePermissionResponse>(await this.callApi(params, req, runtime), new ModifyCloudDrivePermissionResponse({}));
  }

  async modifyCloudDrivePermission(request: ModifyCloudDrivePermissionRequest): Promise<ModifyCloudDrivePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudDrivePermissionWithOptions(request, runtime);
  }

  async modifyCloudDriveUsersWithOptions(request: ModifyCloudDriveUsersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudDriveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userMaxSize)) {
      query["UserMaxSize"] = request.userMaxSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCloudDriveUsersResponse>(await this.callApi(params, req, runtime), new ModifyCloudDriveUsersResponse({}));
  }

  async modifyCloudDriveUsers(request: ModifyCloudDriveUsersRequest): Promise<ModifyCloudDriveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudDriveUsersWithOptions(request, runtime);
  }

  async modifyCustomizedListHeadersWithOptions(request: ModifyCustomizedListHeadersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCustomizedListHeadersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.headers)) {
      query["Headers"] = request.headers;
    }

    if (!Util.isUnset(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCustomizedListHeadersResponse>(await this.callApi(params, req, runtime), new ModifyCustomizedListHeadersResponse({}));
  }

  async modifyCustomizedListHeaders(request: ModifyCustomizedListHeadersRequest): Promise<ModifyCustomizedListHeadersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCustomizedListHeadersWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you fully understand the billing methods of cloud computers. For more information, see [Billing overview](~~188395~~).
    * *   Before you call this operation, make sure that the cloud computers whose billing method you want to change are in the Running or Stopped state and you have no overdue payments in your Alibaba Cloud account.
    * *   After the order payment is completed, the system starts to change the billing method of the cloud computers. During the change, you cannot perform operations, such as starting or stopping the cloud computers, and changing configurations of the cloud computers.
    *
    * @param request ModifyDesktopChargeTypeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDesktopChargeTypeResponse
   */
  async modifyDesktopChargeTypeWithOptions(request: ModifyDesktopChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.useDuration)) {
      query["UseDuration"] = request.useDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopChargeTypeResponse>(await this.callApi(params, req, runtime), new ModifyDesktopChargeTypeResponse({}));
  }

  /**
    * *   Before you call this operation, make sure that you fully understand the billing methods of cloud computers. For more information, see [Billing overview](~~188395~~).
    * *   Before you call this operation, make sure that the cloud computers whose billing method you want to change are in the Running or Stopped state and you have no overdue payments in your Alibaba Cloud account.
    * *   After the order payment is completed, the system starts to change the billing method of the cloud computers. During the change, you cannot perform operations, such as starting or stopping the cloud computers, and changing configurations of the cloud computers.
    *
    * @param request ModifyDesktopChargeTypeRequest
    * @return ModifyDesktopChargeTypeResponse
   */
  async modifyDesktopChargeType(request: ModifyDesktopChargeTypeRequest): Promise<ModifyDesktopChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopChargeTypeWithOptions(request, runtime);
  }

  /**
    * After a cloud computer pool is created, the system creates a specific number of cloud computers in the pool based on the auto scaling policy and user connections. Cloud computers are created by using the same cloud computer template and security policy. You can modify the configurations of the pool, including the pool name, cloud computer template, and policy, in different business scenarios.
    *
    * @param request ModifyDesktopGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDesktopGroupResponse
   */
  async modifyDesktopGroupWithOptions(request: ModifyDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!Util.isUnset(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!Util.isUnset(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!Util.isUnset(request.buyDesktopsCount)) {
      query["BuyDesktopsCount"] = request.buyDesktopsCount;
    }

    if (!Util.isUnset(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.connectDuration)) {
      query["ConnectDuration"] = request.connectDuration;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.disableSessionConfig)) {
      query["DisableSessionConfig"] = request.disableSessionConfig;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!Util.isUnset(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!Util.isUnset(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!Util.isUnset(request.ownBundleId)) {
      query["OwnBundleId"] = request.ownBundleId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!Util.isUnset(request.profileFollowSwitch)) {
      query["ProfileFollowSwitch"] = request.profileFollowSwitch;
    }

    if (!Util.isUnset(request.ratioThreshold)) {
      query["RatioThreshold"] = request.ratioThreshold;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    if (!Util.isUnset(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopGroupResponse({}));
  }

  /**
    * After a cloud computer pool is created, the system creates a specific number of cloud computers in the pool based on the auto scaling policy and user connections. Cloud computers are created by using the same cloud computer template and security policy. You can modify the configurations of the pool, including the pool name, cloud computer template, and policy, in different business scenarios.
    *
    * @param request ModifyDesktopGroupRequest
    * @return ModifyDesktopGroupResponse
   */
  async modifyDesktopGroup(request: ModifyDesktopGroupRequest): Promise<ModifyDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopGroupWithOptions(request, runtime);
  }

  /**
    * The Windows cloud computer whose hostname you want to modify must be in an AD office network. After the hostname is modified, the cloud computer is re-created.
    *
    * @param request ModifyDesktopHostNameRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDesktopHostNameResponse
   */
  async modifyDesktopHostNameWithOptions(request: ModifyDesktopHostNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopHostNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.newHostName)) {
      query["NewHostName"] = request.newHostName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopHostNameResponse>(await this.callApi(params, req, runtime), new ModifyDesktopHostNameResponse({}));
  }

  /**
    * The Windows cloud computer whose hostname you want to modify must be in an AD office network. After the hostname is modified, the cloud computer is re-created.
    *
    * @param request ModifyDesktopHostNameRequest
    * @return ModifyDesktopHostNameResponse
   */
  async modifyDesktopHostName(request: ModifyDesktopHostNameRequest): Promise<ModifyDesktopHostNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopHostNameWithOptions(request, runtime);
  }

  async modifyDesktopNameWithOptions(request: ModifyDesktopNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.newDesktopName)) {
      query["NewDesktopName"] = request.newDesktopName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopNameResponse>(await this.callApi(params, req, runtime), new ModifyDesktopNameResponse({}));
  }

  async modifyDesktopName(request: ModifyDesktopNameRequest): Promise<ModifyDesktopNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopNameWithOptions(request, runtime);
  }

  async modifyDesktopOversoldGroupWithOptions(request: ModifyDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.idleDisconnectDuration)) {
      query["IdleDisconnectDuration"] = request.idleDisconnectDuration;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    if (!Util.isUnset(request.oversoldWarn)) {
      query["OversoldWarn"] = request.oversoldWarn;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.stopDuration)) {
      query["StopDuration"] = request.stopDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopOversoldGroupResponse({}));
  }

  async modifyDesktopOversoldGroup(request: ModifyDesktopOversoldGroupRequest): Promise<ModifyDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopOversoldGroupWithOptions(request, runtime);
  }

  async modifyDesktopOversoldGroupSaleWithOptions(request: ModifyDesktopOversoldGroupSaleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopOversoldGroupSaleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrenceCount)) {
      query["ConcurrenceCount"] = request.concurrenceCount;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.oversoldUserCount)) {
      query["OversoldUserCount"] = request.oversoldUserCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopOversoldGroupSaleResponse>(await this.callApi(params, req, runtime), new ModifyDesktopOversoldGroupSaleResponse({}));
  }

  async modifyDesktopOversoldGroupSale(request: ModifyDesktopOversoldGroupSaleRequest): Promise<ModifyDesktopOversoldGroupSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopOversoldGroupSaleWithOptions(request, runtime);
  }

  async modifyDesktopOversoldUserGroupWithOptions(request: ModifyDesktopOversoldUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopOversoldUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopOversoldUserGroupResponse({}));
  }

  async modifyDesktopOversoldUserGroup(request: ModifyDesktopOversoldUserGroupRequest): Promise<ModifyDesktopOversoldUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  /**
    * Changing the configurations of a cloud computer includes changing the instance type of the cloud computer and scaling up the disks of the cloud computer.
    * *   Before you change the configurations of a cloud computer, you must understand the instance types and disk sizes supported by cloud computers. For more information, see [Cloud computer types](~~188609~~). You can call the [DescribeDesktopTypes](~~188882~~) operation to query the instance types supported by cloud computers.
    * *   You must change at least one of the following configurations: instance type, system disk size, and data disk size of the cloud computer. You must specify at least one of the following parameters: `DesktopType`, `RootDiskSizeGib`, and `UserDiskSizeGib`. Take note of the following items:
    *     *   The instance type of a cloud computer includes the configurations of vCPUs, memory, and GPUs. You can only change an instance type to another. You cannot change only one of the configurations.
    *     *   You cannot change a cloud computer between the General Office type and the non-General Office type. You cannot yet change a cloud computer between the Graphics type and the non-Graphics type.
    *     *   The system disk and data disks of a cloud computer can only be scaled up and cannot be scaled down.
    *     *   If the billing method of the cloud computer is subscription, the system calculates the price difference based on the configuration difference between the original cloud computer and the new cloud computer. You must make up for the price difference or receive a refund for the price difference.
    *     *   We recommend that you do not change the configurations of a cloud computer twice within 5 minutes.
    *     *   When you change the configurations of a cloud computer, the cloud computer must be in the Stopped state.
    * *   After you change the configurations of a cloud computer, the personal data on the cloud computer is not affected.
    *
    * @param request ModifyDesktopSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDesktopSpecResponse
   */
  async modifyDesktopSpecWithOptions(request: ModifyDesktopSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopSpecResponse>(await this.callApi(params, req, runtime), new ModifyDesktopSpecResponse({}));
  }

  /**
    * Changing the configurations of a cloud computer includes changing the instance type of the cloud computer and scaling up the disks of the cloud computer.
    * *   Before you change the configurations of a cloud computer, you must understand the instance types and disk sizes supported by cloud computers. For more information, see [Cloud computer types](~~188609~~). You can call the [DescribeDesktopTypes](~~188882~~) operation to query the instance types supported by cloud computers.
    * *   You must change at least one of the following configurations: instance type, system disk size, and data disk size of the cloud computer. You must specify at least one of the following parameters: `DesktopType`, `RootDiskSizeGib`, and `UserDiskSizeGib`. Take note of the following items:
    *     *   The instance type of a cloud computer includes the configurations of vCPUs, memory, and GPUs. You can only change an instance type to another. You cannot change only one of the configurations.
    *     *   You cannot change a cloud computer between the General Office type and the non-General Office type. You cannot yet change a cloud computer between the Graphics type and the non-Graphics type.
    *     *   The system disk and data disks of a cloud computer can only be scaled up and cannot be scaled down.
    *     *   If the billing method of the cloud computer is subscription, the system calculates the price difference based on the configuration difference between the original cloud computer and the new cloud computer. You must make up for the price difference or receive a refund for the price difference.
    *     *   We recommend that you do not change the configurations of a cloud computer twice within 5 minutes.
    *     *   When you change the configurations of a cloud computer, the cloud computer must be in the Stopped state.
    * *   After you change the configurations of a cloud computer, the personal data on the cloud computer is not affected.
    *
    * @param request ModifyDesktopSpecRequest
    * @return ModifyDesktopSpecResponse
   */
  async modifyDesktopSpec(request: ModifyDesktopSpecRequest): Promise<ModifyDesktopSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopSpecWithOptions(request, runtime);
  }

  async modifyDesktopTimerWithOptions(request: ModifyDesktopTimerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopTimerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopTimers)) {
      query["DesktopTimers"] = request.desktopTimers;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.useDesktopTimers)) {
      query["UseDesktopTimers"] = request.useDesktopTimers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopTimerResponse>(await this.callApi(params, req, runtime), new ModifyDesktopTimerResponse({}));
  }

  async modifyDesktopTimer(request: ModifyDesktopTimerRequest): Promise<ModifyDesktopTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopTimerWithOptions(request, runtime);
  }

  /**
    * The cloud desktops that you want to restart by calling this operation must be in the Running state.
    *
    * @param request ModifyDesktopsPolicyGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDesktopsPolicyGroupResponse
   */
  async modifyDesktopsPolicyGroupWithOptions(request: ModifyDesktopsPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopsPolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDesktopsPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopsPolicyGroupResponse({}));
  }

  /**
    * The cloud desktops that you want to restart by calling this operation must be in the Running state.
    *
    * @param request ModifyDesktopsPolicyGroupRequest
    * @return ModifyDesktopsPolicyGroupResponse
   */
  async modifyDesktopsPolicyGroup(request: ModifyDesktopsPolicyGroupRequest): Promise<ModifyDesktopsPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopsPolicyGroupWithOptions(request, runtime);
  }

  /**
    * You can call this operation to change the configurations, such as the desktop type and disk size, of a cloud desktop.
    * *   Before you call this operation, you must know the cloud desktop types and the disk sizes for each type of cloud desktop that Elastic Desktop Service (EDS) provides.
    * *   When you change the configurations of a cloud desktop, you must change the desktop type or the size of the system disk or data disk. You must configure at least one of the following parameters: DesktopType, RootDiskSizeGib, and UserDiskSizeGib. Take note of the following items:
    * 1\\. Desktop types include the specifications of vCPUs, memory, and GPUs. You can change only the desktop type, instead of one of the specifications.
    * 2\\. You cannot change a cloud desktop from the General Office type to a non-General Office type, or from a non-General Office type to the General Office type. You cannot change a cloud desktop from the Graphics type to a non-Graphics type, or from a non-Graphics type to the Graphics type.
    * 3\\. You can only increase the sizes of system and data disks. You cannot decrease the sizes of system and data disks.
    * 4\\. If your cloud desktop uses the subscription billing method, the price difference is calculated based on the price before and after configuration changes. You may receive a refund, or must pay for the price difference.
    * 5\\. If you need to change the configurations of a cloud desktop multiple times, we recommend that you wait at least 5 minutes between consecutive operations on the cloud desktop.
    * 6\\. The cloud desktop for which you want to change the desktop type must be in the Stopped state.
    * *   The changes do not affect your personal data on the cloud desktop.
    *
    * @param request ModifyDiskSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDiskSpecResponse
   */
  async modifyDiskSpecWithOptions(request: ModifyDiskSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDiskSpecResponse>(await this.callApi(params, req, runtime), new ModifyDiskSpecResponse({}));
  }

  /**
    * You can call this operation to change the configurations, such as the desktop type and disk size, of a cloud desktop.
    * *   Before you call this operation, you must know the cloud desktop types and the disk sizes for each type of cloud desktop that Elastic Desktop Service (EDS) provides.
    * *   When you change the configurations of a cloud desktop, you must change the desktop type or the size of the system disk or data disk. You must configure at least one of the following parameters: DesktopType, RootDiskSizeGib, and UserDiskSizeGib. Take note of the following items:
    * 1\\. Desktop types include the specifications of vCPUs, memory, and GPUs. You can change only the desktop type, instead of one of the specifications.
    * 2\\. You cannot change a cloud desktop from the General Office type to a non-General Office type, or from a non-General Office type to the General Office type. You cannot change a cloud desktop from the Graphics type to a non-Graphics type, or from a non-Graphics type to the Graphics type.
    * 3\\. You can only increase the sizes of system and data disks. You cannot decrease the sizes of system and data disks.
    * 4\\. If your cloud desktop uses the subscription billing method, the price difference is calculated based on the price before and after configuration changes. You may receive a refund, or must pay for the price difference.
    * 5\\. If you need to change the configurations of a cloud desktop multiple times, we recommend that you wait at least 5 minutes between consecutive operations on the cloud desktop.
    * 6\\. The cloud desktop for which you want to change the desktop type must be in the Stopped state.
    * *   The changes do not affect your personal data on the cloud desktop.
    *
    * @param request ModifyDiskSpecRequest
    * @return ModifyDiskSpecResponse
   */
  async modifyDiskSpec(request: ModifyDiskSpecRequest): Promise<ModifyDiskSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskSpecWithOptions(request, runtime);
  }

  /**
    * *   The cloud computer must be in the Running state.
    * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](~~436815~~) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
    * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
    *
    * @param request ModifyEntitlementRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyEntitlementResponse
   */
  async modifyEntitlementWithOptions(request: ModifyEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEntitlementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyEntitlementResponse>(await this.callApi(params, req, runtime), new ModifyEntitlementResponse({}));
  }

  /**
    * *   The cloud computer must be in the Running state.
    * *   After you call this operation, the assignment result is immediately returned. You can call the [DescribeDesktops](~~436815~~) operation to query the assignment of the cloud computer. The value of the `ManagementFlags` response parameter indicates the assignment of the cloud computer. A value of `ASSIGNING` indicates that the cloud computer is being assigned, and other values indicate that the cloud computer is assigned.
    * *   We recommend that you check the assignment every 2 to 5 seconds and perform the checks within 50 seconds. Typically, 1 to 5 seconds are required to complete the assignment.
    *
    * @param request ModifyEntitlementRequest
    * @return ModifyEntitlementResponse
   */
  async modifyEntitlement(request: ModifyEntitlementRequest): Promise<ModifyEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEntitlementWithOptions(request, runtime);
  }

  /**
    * You can call this operation to modify the attributes of only custom images that are in the Available state.
    *
    * @param request ModifyImageAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyImageAttributeResponse
   */
  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyImageAttributeResponse>(await this.callApi(params, req, runtime), new ModifyImageAttributeResponse({}));
  }

  /**
    * You can call this operation to modify the attributes of only custom images that are in the Available state.
    *
    * @param request ModifyImageAttributeRequest
    * @return ModifyImageAttributeResponse
   */
  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  /**
    * ### [](#)Security of shared images
    * WUYING Workspace cannot guarantee the integrity and security of shared images. When you use a shared image, you must make sure that the image comes from a trusted sharer or account, and you are legally responsible for using the shared image.
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
    * *   You cannot share images across regions. If you want to share an image across regions, you must copy the image to the destination region and then share the image. For more information, see [CopyImage](~~436978~~).
    *
    * @param request ModifyImagePermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyImagePermissionResponse
   */
  async modifyImagePermissionWithOptions(request: ModifyImagePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImagePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addAccount)) {
      query["AddAccount"] = request.addAccount;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.removeAccount)) {
      query["RemoveAccount"] = request.removeAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyImagePermissionResponse>(await this.callApi(params, req, runtime), new ModifyImagePermissionResponse({}));
  }

  /**
    * ### [](#)Security of shared images
    * WUYING Workspace cannot guarantee the integrity and security of shared images. When you use a shared image, you must make sure that the image comes from a trusted sharer or account, and you are legally responsible for using the shared image.
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
    * *   You cannot share images across regions. If you want to share an image across regions, you must copy the image to the destination region and then share the image. For more information, see [CopyImage](~~436978~~).
    *
    * @param request ModifyImagePermissionRequest
    * @return ModifyImagePermissionResponse
   */
  async modifyImagePermission(request: ModifyImagePermissionRequest): Promise<ModifyImagePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImagePermissionWithOptions(request, runtime);
  }

  /**
    * When you create a NAS file system, a mount target is automatically generated. By default, the mount target does not need to be changed. If the mount target is deleted by misoperation, you must specify a new mount target for the NAS file system in the workspace. You can call the [CreateMountTarget](~~62621~~) operation to create a mount target.
    *
    * @param request ModifyNASDefaultMountTargetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyNASDefaultMountTargetResponse
   */
  async modifyNASDefaultMountTargetWithOptions(request: ModifyNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new ModifyNASDefaultMountTargetResponse({}));
  }

  /**
    * When you create a NAS file system, a mount target is automatically generated. By default, the mount target does not need to be changed. If the mount target is deleted by misoperation, you must specify a new mount target for the NAS file system in the workspace. You can call the [CreateMountTarget](~~62621~~) operation to create a mount target.
    *
    * @param request ModifyNASDefaultMountTargetRequest
    * @return ModifyNASDefaultMountTargetResponse
   */
  async modifyNASDefaultMountTarget(request: ModifyNASDefaultMountTargetRequest): Promise<ModifyNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNASDefaultMountTargetWithOptions(request, runtime);
  }

  async modifyNetworkPackageBandwidthWithOptions(request: ModifyNetworkPackageBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyNetworkPackageBandwidthResponse>(await this.callApi(params, req, runtime), new ModifyNetworkPackageBandwidthResponse({}));
  }

  async modifyNetworkPackageBandwidth(request: ModifyNetworkPackageBandwidthRequest): Promise<ModifyNetworkPackageBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageBandwidthWithOptions(request, runtime);
  }

  /**
    * If you want to temporarily disable the Internet access of your cloud computer after the Internet access is enabled for your cloud computer, you can disable the premium bandwidth plan and restore it as needed.
    *
    * @param request ModifyNetworkPackageEnabledRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyNetworkPackageEnabledResponse
   */
  async modifyNetworkPackageEnabledWithOptions(request: ModifyNetworkPackageEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyNetworkPackageEnabledResponse>(await this.callApi(params, req, runtime), new ModifyNetworkPackageEnabledResponse({}));
  }

  /**
    * If you want to temporarily disable the Internet access of your cloud computer after the Internet access is enabled for your cloud computer, you can disable the premium bandwidth plan and restore it as needed.
    *
    * @param request ModifyNetworkPackageEnabledRequest
    * @return ModifyNetworkPackageEnabledResponse
   */
  async modifyNetworkPackageEnabled(request: ModifyNetworkPackageEnabledRequest): Promise<ModifyNetworkPackageEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageEnabledWithOptions(request, runtime);
  }

  async modifyOfficeSiteAttributeWithOptions(request: ModifyOfficeSiteAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.needVerifyLoginRisk)) {
      query["NeedVerifyLoginRisk"] = request.needVerifyLoginRisk;
    }

    if (!Util.isUnset(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyOfficeSiteAttributeResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteAttributeResponse({}));
  }

  async modifyOfficeSiteAttribute(request: ModifyOfficeSiteAttributeRequest): Promise<ModifyOfficeSiteAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteAttributeWithOptions(request, runtime);
  }

  async modifyOfficeSiteCrossDesktopAccessWithOptions(request: ModifyOfficeSiteCrossDesktopAccessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableCrossDesktopAccess)) {
      query["EnableCrossDesktopAccess"] = request.enableCrossDesktopAccess;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyOfficeSiteCrossDesktopAccessResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteCrossDesktopAccessResponse({}));
  }

  async modifyOfficeSiteCrossDesktopAccess(request: ModifyOfficeSiteCrossDesktopAccessRequest): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteCrossDesktopAccessWithOptions(request, runtime);
  }

  async modifyOfficeSiteMfaEnabledWithOptions(request: ModifyOfficeSiteMfaEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyOfficeSiteMfaEnabledResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteMfaEnabledResponse({}));
  }

  async modifyOfficeSiteMfaEnabled(request: ModifyOfficeSiteMfaEnabledRequest): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteMfaEnabledWithOptions(request, runtime);
  }

  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminAccess)) {
      query["AdminAccess"] = request.adminAccess;
    }

    if (!Util.isUnset(request.appContentProtection)) {
      query["AppContentProtection"] = request.appContentProtection;
    }

    if (!Util.isUnset(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!Util.isUnset(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!Util.isUnset(request.domainResolveRule)) {
      query["DomainResolveRule"] = request.domainResolveRule;
    }

    if (!Util.isUnset(request.domainResolveRuleType)) {
      query["DomainResolveRuleType"] = request.domainResolveRuleType;
    }

    if (!Util.isUnset(request.endUserApplyAdminCoordinate)) {
      query["EndUserApplyAdminCoordinate"] = request.endUserApplyAdminCoordinate;
    }

    if (!Util.isUnset(request.endUserGroupCoordinate)) {
      query["EndUserGroupCoordinate"] = request.endUserGroupCoordinate;
    }

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!Util.isUnset(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.internetCommunicationProtocol)) {
      query["InternetCommunicationProtocol"] = request.internetCommunicationProtocol;
    }

    if (!Util.isUnset(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!Util.isUnset(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!Util.isUnset(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!Util.isUnset(request.recordContent)) {
      query["RecordContent"] = request.recordContent;
    }

    if (!Util.isUnset(request.recordContentExpires)) {
      query["RecordContentExpires"] = request.recordContentExpires;
    }

    if (!Util.isUnset(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!Util.isUnset(request.recordingAudio)) {
      query["RecordingAudio"] = request.recordingAudio;
    }

    if (!Util.isUnset(request.recordingDuration)) {
      query["RecordingDuration"] = request.recordingDuration;
    }

    if (!Util.isUnset(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!Util.isUnset(request.recordingExpires)) {
      query["RecordingExpires"] = request.recordingExpires;
    }

    if (!Util.isUnset(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!Util.isUnset(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!Util.isUnset(request.recordingUserNotify)) {
      query["RecordingUserNotify"] = request.recordingUserNotify;
    }

    if (!Util.isUnset(request.recordingUserNotifyMessage)) {
      query["RecordingUserNotifyMessage"] = request.recordingUserNotifyMessage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remoteCoordinate)) {
      query["RemoteCoordinate"] = request.remoteCoordinate;
    }

    if (!Util.isUnset(request.revokeAccessPolicyRule)) {
      query["RevokeAccessPolicyRule"] = request.revokeAccessPolicyRule;
    }

    if (!Util.isUnset(request.revokeSecurityPolicyRule)) {
      query["RevokeSecurityPolicyRule"] = request.revokeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    if (!Util.isUnset(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!Util.isUnset(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!Util.isUnset(request.videoRedirect)) {
      query["VideoRedirect"] = request.videoRedirect;
    }

    if (!Util.isUnset(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!Util.isUnset(request.watermarkAntiCam)) {
      query["WatermarkAntiCam"] = request.watermarkAntiCam;
    }

    if (!Util.isUnset(request.watermarkColor)) {
      query["WatermarkColor"] = request.watermarkColor;
    }

    if (!Util.isUnset(request.watermarkDegree)) {
      query["WatermarkDegree"] = request.watermarkDegree;
    }

    if (!Util.isUnset(request.watermarkFontSize)) {
      query["WatermarkFontSize"] = request.watermarkFontSize;
    }

    if (!Util.isUnset(request.watermarkFontStyle)) {
      query["WatermarkFontStyle"] = request.watermarkFontStyle;
    }

    if (!Util.isUnset(request.watermarkPower)) {
      query["WatermarkPower"] = request.watermarkPower;
    }

    if (!Util.isUnset(request.watermarkRowAmount)) {
      query["WatermarkRowAmount"] = request.watermarkRowAmount;
    }

    if (!Util.isUnset(request.watermarkSecurity)) {
      query["WatermarkSecurity"] = request.watermarkSecurity;
    }

    if (!Util.isUnset(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!Util.isUnset(request.watermarkTransparencyValue)) {
      query["WatermarkTransparencyValue"] = request.watermarkTransparencyValue;
    }

    if (!Util.isUnset(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyPolicyGroupResponse({}));
  }

  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
    * You can modify end users only for cloud computers that are in the Running state.
    *
    * @param request ModifyUserEntitlementRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyUserEntitlementResponse
   */
  async modifyUserEntitlementWithOptions(request: ModifyUserEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserEntitlementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizeDesktopId)) {
      query["AuthorizeDesktopId"] = request.authorizeDesktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.revokeDesktopId)) {
      query["RevokeDesktopId"] = request.revokeDesktopId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyUserEntitlementResponse>(await this.callApi(params, req, runtime), new ModifyUserEntitlementResponse({}));
  }

  /**
    * You can modify end users only for cloud computers that are in the Running state.
    *
    * @param request ModifyUserEntitlementRequest
    * @return ModifyUserEntitlementResponse
   */
  async modifyUserEntitlement(request: ModifyUserEntitlementRequest): Promise<ModifyUserEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserEntitlementWithOptions(request, runtime);
  }

  async modifyUserToDesktopGroupWithOptions(request: ModifyUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.newEndUserIds)) {
      query["NewEndUserIds"] = request.newEndUserIds;
    }

    if (!Util.isUnset(request.oldEndUserIds)) {
      query["OldEndUserIds"] = request.oldEndUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new ModifyUserToDesktopGroupResponse({}));
  }

  async modifyUserToDesktopGroup(request: ModifyUserToDesktopGroupRequest): Promise<ModifyUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserToDesktopGroupWithOptions(request, runtime);
  }

  async moveCdsFileWithOptions(request: MoveCdsFileRequest, runtime: $Util.RuntimeOptions): Promise<MoveCdsFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MoveCdsFileResponse>(await this.callApi(params, req, runtime), new MoveCdsFileResponse({}));
  }

  async moveCdsFile(request: MoveCdsFileRequest): Promise<MoveCdsFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveCdsFileWithOptions(request, runtime);
  }

  /**
    * The cloud computers that you want to restart must be in the Running state.
    *
    * @param request RebootDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RebootDesktopsResponse
   */
  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RebootDesktopsResponse>(await this.callApi(params, req, runtime), new RebootDesktopsResponse({}));
  }

  /**
    * The cloud computers that you want to restart must be in the Running state.
    *
    * @param request RebootDesktopsRequest
    * @return RebootDesktopsResponse
   */
  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  /**
    * Before you change the image of a cloud computer, take note of the following limits:
    * *   You can select an image whose OS is different from the OS of the original image. The image change feature is not supported in the following regions: China (Hong Kong), Australia (Sydney), Singapore, and Japan (Tokyo).
    * *   GPU images and non-GPU images cannot be exchanged. Graphical cloud computers can only use GPU-accelerated images. Non-graphical cloud computers can only use non-GPU-accelerated images.
    * After the image is changed, the system uses the new image to initialize the system disk of the cloud computer. This has the following impacts:
    * *   Data in the system disk of the original cloud computer is cleared. Snapshots that are created based on the system disk of the original cloud computer can no longer be used. The system automatically deletes the snapshots.
    * *   If the OS of the image is changed, the data in the data disks of the original cloud computer is cleared, and the snapshots that are created based on the data disks of the original cloud computer can no longer be used. The system automatically deletes the snapshots. If the OS of the image is not changed, the data in the data disks of the original cloud computer is retained, and the snapshots that are created based on the data disks of the original cloud computer can still be used.
    *
    * @param request RebuildDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RebuildDesktopsResponse
   */
  async rebuildDesktopsWithOptions(request: RebuildDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebuildDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RebuildDesktopsResponse>(await this.callApi(params, req, runtime), new RebuildDesktopsResponse({}));
  }

  /**
    * Before you change the image of a cloud computer, take note of the following limits:
    * *   You can select an image whose OS is different from the OS of the original image. The image change feature is not supported in the following regions: China (Hong Kong), Australia (Sydney), Singapore, and Japan (Tokyo).
    * *   GPU images and non-GPU images cannot be exchanged. Graphical cloud computers can only use GPU-accelerated images. Non-graphical cloud computers can only use non-GPU-accelerated images.
    * After the image is changed, the system uses the new image to initialize the system disk of the cloud computer. This has the following impacts:
    * *   Data in the system disk of the original cloud computer is cleared. Snapshots that are created based on the system disk of the original cloud computer can no longer be used. The system automatically deletes the snapshots.
    * *   If the OS of the image is changed, the data in the data disks of the original cloud computer is cleared, and the snapshots that are created based on the data disks of the original cloud computer can no longer be used. The system automatically deletes the snapshots. If the OS of the image is not changed, the data in the data disks of the original cloud computer is retained, and the snapshots that are created based on the data disks of the original cloud computer can still be used.
    *
    * @param request RebuildDesktopsRequest
    * @return RebuildDesktopsResponse
   */
  async rebuildDesktops(request: RebuildDesktopsRequest): Promise<RebuildDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildDesktopsWithOptions(request, runtime);
  }

  async removeFilePermissionWithOptions(tmpReq: RemoveFilePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFilePermissionResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveFilePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cdsId)) {
      query["CdsId"] = request.cdsId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveFilePermissionResponse>(await this.callApi(params, req, runtime), new RemoveFilePermissionResponse({}));
  }

  async removeFilePermission(request: RemoveFilePermissionRequest): Promise<RemoveFilePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFilePermissionWithOptions(request, runtime);
  }

  async removeUserFromDesktopGroupWithOptions(request: RemoveUserFromDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveUserFromDesktopGroupResponse>(await this.callApi(params, req, runtime), new RemoveUserFromDesktopGroupResponse({}));
  }

  async removeUserFromDesktopGroup(request: RemoveUserFromDesktopGroupRequest): Promise<RemoveUserFromDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromDesktopGroupWithOptions(request, runtime);
  }

  async removeUserFromDesktopOversoldUserGroupWithOptions(request: RemoveUserFromDesktopOversoldUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromDesktopOversoldUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveUserFromDesktopOversoldUserGroupResponse>(await this.callApi(params, req, runtime), new RemoveUserFromDesktopOversoldUserGroupResponse({}));
  }

  async removeUserFromDesktopOversoldUserGroup(request: RemoveUserFromDesktopOversoldUserGroupRequest): Promise<RemoveUserFromDesktopOversoldUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromDesktopOversoldUserGroupWithOptions(request, runtime);
  }

  async renewDesktopOversoldGroupWithOptions(request: RenewDesktopOversoldGroupRequest, runtime: $Util.RuntimeOptions): Promise<RenewDesktopOversoldGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.oversoldGroupId)) {
      query["OversoldGroupId"] = request.oversoldGroupId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RenewDesktopOversoldGroupResponse>(await this.callApi(params, req, runtime), new RenewDesktopOversoldGroupResponse({}));
  }

  async renewDesktopOversoldGroup(request: RenewDesktopOversoldGroupRequest): Promise<RenewDesktopOversoldGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDesktopOversoldGroupWithOptions(request, runtime);
  }

  async renewDesktopsWithOptions(request: RenewDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RenewDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RenewDesktopsResponse>(await this.callApi(params, req, runtime), new RenewDesktopsResponse({}));
  }

  async renewDesktops(request: RenewDesktopsRequest): Promise<RenewDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDesktopsWithOptions(request, runtime);
  }

  async renewNetworkPackagesWithOptions(request: RenewNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<RenewNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RenewNetworkPackagesResponse>(await this.callApi(params, req, runtime), new RenewNetworkPackagesResponse({}));
  }

  async renewNetworkPackages(request: RenewNetworkPackagesRequest): Promise<RenewNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewNetworkPackagesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation to reset only cloud computers in a cloud computer pool.
    *
    * @param request ResetDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetDesktopsResponse
   */
  async resetDesktopsWithOptions(request: ResetDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<ResetDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetScope)) {
      query["ResetScope"] = request.resetScope;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResetDesktopsResponse>(await this.callApi(params, req, runtime), new ResetDesktopsResponse({}));
  }

  /**
    * > You can call this operation to reset only cloud computers in a cloud computer pool.
    *
    * @param request ResetDesktopsRequest
    * @return ResetDesktopsResponse
   */
  async resetDesktops(request: ResetDesktopsRequest): Promise<ResetDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDesktopsWithOptions(request, runtime);
  }

  /**
    * When you create a NAS file system, a mount target is automatically generated. By default, you do not need to modify the mount target of the NAS file system. If the mount target is disabled, you need to reset the mount target of the NAS file system.
    *
    * @param request ResetNASDefaultMountTargetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetNASDefaultMountTargetResponse
   */
  async resetNASDefaultMountTargetWithOptions(request: ResetNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ResetNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResetNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new ResetNASDefaultMountTargetResponse({}));
  }

  /**
    * When you create a NAS file system, a mount target is automatically generated. By default, you do not need to modify the mount target of the NAS file system. If the mount target is disabled, you need to reset the mount target of the NAS file system.
    *
    * @param request ResetNASDefaultMountTargetRequest
    * @return ResetNASDefaultMountTargetResponse
   */
  async resetNASDefaultMountTarget(request: ResetNASDefaultMountTargetRequest): Promise<ResetNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNASDefaultMountTargetWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that the following operations are performed:
    * *   The data that you want to retain is backed up.
    *     > The disk restoration operation is irreversible. After you call this operation, the disk is restored to the status at the point in time when the snapshot was created. Data that is generated between the snapshot creation time and the current time is lost. Before you restore the disk based on the snapshot, make sure that you back up data.
    * *   The cloud computer to which the disk belongs is stopped.
    *
    * @param request ResetSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetSnapshotResponse
   */
  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ResetSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResetSnapshotResponse>(await this.callApi(params, req, runtime), new ResetSnapshotResponse({}));
  }

  /**
    * Before you call this operation, make sure that the following operations are performed:
    * *   The data that you want to retain is backed up.
    *     > The disk restoration operation is irreversible. After you call this operation, the disk is restored to the status at the point in time when the snapshot was created. Data that is generated between the snapshot creation time and the current time is lost. Before you restore the disk based on the snapshot, make sure that you back up data.
    * *   The cloud computer to which the disk belongs is stopped.
    *
    * @param request ResetSnapshotRequest
    * @return ResetSnapshotResponse
   */
  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  async revokeCoordinatePrivilegeWithOptions(request: RevokeCoordinatePrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<RevokeCoordinatePrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coId)) {
      query["CoId"] = request.coId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RevokeCoordinatePrivilegeResponse>(await this.callApi(params, req, runtime), new RevokeCoordinatePrivilegeResponse({}));
  }

  async revokeCoordinatePrivilege(request: RevokeCoordinatePrivilegeRequest): Promise<RevokeCoordinatePrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeCoordinatePrivilegeWithOptions(request, runtime);
  }

  /**
    * You can use the RunCommand operation to run scripts only on Windows cloud desktops.
    *
    * @param request RunCommandRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RunCommandResponse
   */
  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  /**
    * You can use the RunCommand operation to run scripts only on Windows cloud desktops.
    *
    * @param request RunCommandRequest
    * @return RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
    * You must call this operation to obtain the verification code that is required when you bind an advanced office network to a CEN instance that belongs to another Alibaba Cloud account. After you call this operation, the system sends a verification code to the email address associated with the Alibaba Cloud account to which the CEN instance belongs.
    *
    * @param request SendVerifyCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SendVerifyCodeResponse
   */
  async sendVerifyCodeWithOptions(request: SendVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<SendVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCodeAction)) {
      query["VerifyCodeAction"] = request.verifyCodeAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SendVerifyCodeResponse>(await this.callApi(params, req, runtime), new SendVerifyCodeResponse({}));
  }

  /**
    * You must call this operation to obtain the verification code that is required when you bind an advanced office network to a CEN instance that belongs to another Alibaba Cloud account. After you call this operation, the system sends a verification code to the email address associated with the Alibaba Cloud account to which the CEN instance belongs.
    *
    * @param request SendVerifyCodeRequest
    * @return SendVerifyCodeResponse
   */
  async sendVerifyCode(request: SendVerifyCodeRequest): Promise<SendVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerifyCodeWithOptions(request, runtime);
  }

  async setDesktopGroupScaleTimerWithOptions(request: SetDesktopGroupScaleTimerRequest, runtime: $Util.RuntimeOptions): Promise<SetDesktopGroupScaleTimerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scaleTimerInfos)) {
      query["ScaleTimerInfos"] = request.scaleTimerInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDesktopGroupScaleTimerResponse>(await this.callApi(params, req, runtime), new SetDesktopGroupScaleTimerResponse({}));
  }

  async setDesktopGroupScaleTimer(request: SetDesktopGroupScaleTimerRequest): Promise<SetDesktopGroupScaleTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDesktopGroupScaleTimerWithOptions(request, runtime);
  }

  async setDesktopGroupTimerWithOptions(request: SetDesktopGroupTimerRequest, runtime: $Util.RuntimeOptions): Promise<SetDesktopGroupTimerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.timerType)) {
      query["TimerType"] = request.timerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDesktopGroupTimerResponse>(await this.callApi(params, req, runtime), new SetDesktopGroupTimerResponse({}));
  }

  async setDesktopGroupTimer(request: SetDesktopGroupTimerRequest): Promise<SetDesktopGroupTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDesktopGroupTimerWithOptions(request, runtime);
  }

  async setDesktopGroupTimerStatusWithOptions(request: SetDesktopGroupTimerStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDesktopGroupTimerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.timerType)) {
      query["TimerType"] = request.timerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDesktopGroupTimerStatusResponse>(await this.callApi(params, req, runtime), new SetDesktopGroupTimerStatusResponse({}));
  }

  async setDesktopGroupTimerStatus(request: SetDesktopGroupTimerStatusRequest): Promise<SetDesktopGroupTimerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDesktopGroupTimerStatusWithOptions(request, runtime);
  }

  /**
    * This operation is supported only for AD directories, not for RAM directories.
    *
    * @param request SetDirectorySsoStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDirectorySsoStatusResponse
   */
  async setDirectorySsoStatusWithOptions(request: SetDirectorySsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDirectorySsoStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.enableSso)) {
      query["EnableSso"] = request.enableSso;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDirectorySsoStatusResponse>(await this.callApi(params, req, runtime), new SetDirectorySsoStatusResponse({}));
  }

  /**
    * This operation is supported only for AD directories, not for RAM directories.
    *
    * @param request SetDirectorySsoStatusRequest
    * @return SetDirectorySsoStatusResponse
   */
  async setDirectorySsoStatus(request: SetDirectorySsoStatusRequest): Promise<SetDirectorySsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDirectorySsoStatusWithOptions(request, runtime);
  }

  /**
    * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
    *
    * @param request SetIdpMetadataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetIdpMetadataResponse
   */
  async setIdpMetadataWithOptions(request: SetIdpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<SetIdpMetadataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.idpMetadata)) {
      query["IdpMetadata"] = request.idpMetadata;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetIdpMetadataResponse>(await this.callApi(params, req, runtime), new SetIdpMetadataResponse({}));
  }

  /**
    * You can call this operation only for workspaces of the Active Directory (AD) and convenience account types.
    *
    * @param request SetIdpMetadataRequest
    * @return SetIdpMetadataResponse
   */
  async setIdpMetadata(request: SetIdpMetadataRequest): Promise<SetIdpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIdpMetadataWithOptions(request, runtime);
  }

  async setOfficeSiteSsoStatusWithOptions(request: SetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableSso)) {
      query["EnableSso"] = request.enableSso;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new SetOfficeSiteSsoStatusResponse({}));
  }

  async setOfficeSiteSsoStatus(request: SetOfficeSiteSsoStatusRequest): Promise<SetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  async setUserProfilePathRulesWithOptions(tmpReq: SetUserProfilePathRulesRequest, runtime: $Util.RuntimeOptions): Promise<SetUserProfilePathRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new SetUserProfilePathRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userProfilePathRule)) {
      request.userProfilePathRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userProfilePathRule, "UserProfilePathRule", "json");
    }

    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userProfilePathRuleShrink)) {
      query["UserProfilePathRule"] = request.userProfilePathRuleShrink;
    }

    if (!Util.isUnset(request.userProfileRuleType)) {
      query["UserProfileRuleType"] = request.userProfileRuleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetUserProfilePathRulesResponse>(await this.callApi(params, req, runtime), new SetUserProfilePathRulesResponse({}));
  }

  async setUserProfilePathRules(request: SetUserProfilePathRulesRequest): Promise<SetUserProfilePathRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserProfilePathRulesWithOptions(request, runtime);
  }

  /**
    * The cloud computers that you want to start must be in the Stopped state.
    *
    * @param request StartDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StartDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartDesktopsResponse>(await this.callApi(params, req, runtime), new StartDesktopsResponse({}));
  }

  /**
    * The cloud computers that you want to start must be in the Stopped state.
    *
    * @param request StartDesktopsRequest
    * @return StartDesktopsResponse
   */
  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  /**
    * The cloud computers that you want to stop must be in the Running state.
    *
    * @param request StopDesktopsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StopDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stoppedMode)) {
      query["StoppedMode"] = request.stoppedMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopDesktopsResponse>(await this.callApi(params, req, runtime), new StopDesktopsResponse({}));
  }

  /**
    * The cloud computers that you want to stop must be in the Running state.
    *
    * @param request StopDesktopsRequest
    * @return StopDesktopsResponse
   */
  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  /**
    * When you stop a one-time execution of a command, the command continues to run on the cloud desktops where it has started to run, and will not run on the cloud desktops where it has not started to run.
    *
    * @param request StopInvocationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopInvocationResponse
   */
  async stopInvocationWithOptions(request: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopInvocationResponse>(await this.callApi(params, req, runtime), new StopInvocationResponse({}));
  }

  /**
    * When you stop a one-time execution of a command, the command continues to run on the cloud desktops where it has started to run, and will not run on the cloud desktops where it has not started to run.
    *
    * @param request StopInvocationRequest
    * @return StopInvocationResponse
   */
  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  /**
    * If TagKey is specified, the new TagValue value overrides the original TagValue value.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
    * If TagKey is specified, the new TagValue value overrides the original TagValue value.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unbindUserDesktopWithOptions(request: UnbindUserDesktopRequest, runtime: $Util.RuntimeOptions): Promise<UnbindUserDesktopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAgentIds)) {
      query["DesktopAgentIds"] = request.desktopAgentIds;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.userDesktopIds)) {
      query["UserDesktopIds"] = request.userDesktopIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnbindUserDesktopResponse>(await this.callApi(params, req, runtime), new UnbindUserDesktopResponse({}));
  }

  async unbindUserDesktop(request: UnbindUserDesktopRequest): Promise<UnbindUserDesktopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindUserDesktopWithOptions(request, runtime);
  }

  async unlockVirtualMFADeviceWithOptions(request: UnlockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnlockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new UnlockVirtualMFADeviceResponse({}));
  }

  async unlockVirtualMFADevice(request: UnlockVirtualMFADeviceRequest): Promise<UnlockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockVirtualMFADeviceWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to manage each image update task. This operation is valid only when the auto-update switch in the image update module for global image updates is turned off. If the auto-update switch is turned on, the switches for each image update task are always turned on. If you want to turn on or off the auto-update switch, go to the WUYING Workspace console and choose **Operations > Image Updates** in the left-side navigation pane.
    *
    * @param request UpdateFotaTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateFotaTaskResponse
   */
  async updateFotaTaskWithOptions(request: UpdateFotaTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFotaTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!Util.isUnset(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateFotaTaskResponse>(await this.callApi(params, req, runtime), new UpdateFotaTaskResponse({}));
  }

  /**
    * You can call this operation to manage each image update task. This operation is valid only when the auto-update switch in the image update module for global image updates is turned off. If the auto-update switch is turned on, the switches for each image update task are always turned on. If you want to turn on or off the auto-update switch, go to the WUYING Workspace console and choose **Operations > Image Updates** in the left-side navigation pane.
    *
    * @param request UpdateFotaTaskRequest
    * @return UpdateFotaTaskResponse
   */
  async updateFotaTask(request: UpdateFotaTaskRequest): Promise<UpdateFotaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFotaTaskWithOptions(request, runtime);
  }

  /**
    * >  You can upload only Windows images.
    *
    * @param request UploadImageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadImageResponse
   */
  async uploadImageWithOptions(request: UploadImageRequest, runtime: $Util.RuntimeOptions): Promise<UploadImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableSecurityCheck)) {
      query["EnableSecurityCheck"] = request.enableSecurityCheck;
    }

    if (!Util.isUnset(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!Util.isUnset(request.gpuDriverType)) {
      query["GpuDriverType"] = request.gpuDriverType;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ossObjectPath)) {
      query["OssObjectPath"] = request.ossObjectPath;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadImageResponse>(await this.callApi(params, req, runtime), new UploadImageResponse({}));
  }

  /**
    * >  You can upload only Windows images.
    *
    * @param request UploadImageRequest
    * @return UploadImageResponse
   */
  async uploadImage(request: UploadImageRequest): Promise<UploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadImageWithOptions(request, runtime);
  }

  async verifyCenWithOptions(request: VerifyCenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<VerifyCenResponse>(await this.callApi(params, req, runtime), new VerifyCenResponse({}));
  }

  async verifyCen(request: VerifyCenRequest): Promise<VerifyCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyCenWithOptions(request, runtime);
  }

  async wakeupDesktopsWithOptions(request: WakeupDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<WakeupDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<WakeupDesktopsResponse>(await this.callApi(params, req, runtime), new WakeupDesktopsResponse({}));
  }

  async wakeupDesktops(request: WakeupDesktopsRequest): Promise<WakeupDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.wakeupDesktopsWithOptions(request, runtime);
  }

}
